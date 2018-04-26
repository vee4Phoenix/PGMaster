package com.plugin.database.helper;

import java.util.List;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.database.sqlite.SQLiteDatabase;

import com.plugin.database.model.*;

public class DatabasePlugin extends CordovaPlugin {
	private static SQLiteDatabase db;
	private static DaoMaster daoMaster;
	private static DaoSession daoSession;

	private boolean mDevMode = true;
	private String mDBName = "model-db";

	private DiaryDao mDiaryDao;
	private PhotoDao mPhotoDao;
	private ReflectionDao mReflectionDao;

	private static final String DP_REFLECTION_SAVE = "saveReflection";
	private static final String DP_REFLECTION_GET = "getReflections";
	private static final String DP_REFLECTION_GET_ALL = "getAllReflections";

	@Override
	public boolean execute(final String action, final JSONArray args, final CallbackContext callbackContext) throws JSONException {
		//cordova.getThreadPool().execute(new Runnable() {
		cordova.getActivity().runOnUiThread(new Runnable() {

			@Override
			public void run() {
				try {
					//QueryBuilder.LOG_SQL = true;
					//QueryBuilder.LOG_VALUES = true;
					if (action.equals(DP_REFLECTION_SAVE)) {
						saveReflection(args.getJSONObject(0), callbackContext);
					} else if (action.equals(DP_REFLECTION_GET)) {
						getReflections(args.getInt(0), callbackContext);
					} else if (action.equals(DP_REFLECTION_GET_ALL)) {
						getAllReflections(callbackContext);
					}
				} catch (Exception e) {
					if (db != null && db.isOpen()) {
						closeDatabase();
					}
					e.printStackTrace();
					System.err.println("Exception: " + e.getMessage());
					callbackContext.error(e.getMessage());
				}

			}

		});
		//System.out.println(action + " " + args.toString());
		return true;
	}


	private synchronized void openDatabase() {
		System.out.println("Opening database");

		DaoMaster.OpenHelper helper = null;

		if (mDevMode) {
			// Dev database, will be wiped after each run
			helper = new DaoMaster.DevOpenHelper(this.cordova
					.getActivity().getApplicationContext(), mDBName,
					null);
		} else {
			// Real database, will retain values after each run
			helper = new UpgradeHelper(this.cordova
					.getActivity().getApplicationContext(), mDBName,
					null);
		}
		db = helper.getWritableDatabase();
		daoMaster = new DaoMaster(db);
		daoSession = daoMaster.newSession();
	}


	private synchronized void closeDatabase() {
		System.out.println("Closing database");
		db.close();
		db = null;
	}


	// ====== Lazy DAO initiators
	private ReflectionDao getReflectionDao() {
		if (mReflectionDao == null) {
			mReflectionDao = daoSession.getReflectionDao();
		}
		return mReflectionDao;
	}
	// ====== /Lazy DAO initiators


	private void saveReflection(JSONObject param, CallbackContext callbackContext) {
		openDatabase();

		long returnID;

		if (param.has(Reflection.ID)) {
			// update
			try {
				Reflection obj = getReflectionDao().load(param.getLong(Reflection.ID));
				obj.setAttributes(param);
				returnID = obj.getId();
			} catch (JSONException e) {
				e.printStackTrace();
				returnID = 0;
			}
		} else {
			// insert
			Reflection obj = new Reflection();
			returnID = getReflectionDao().insert(obj);
			obj.setAttributes(param);
		}

		closeDatabase();

		PluginResult pr = new PluginResult(PluginResult.Status.OK, "" + returnID);
		callbackContext.sendPluginResult(pr);
	}


	private void getReflections(int sectionNumber, CallbackContext callbackContext) {
		openDatabase();

		JSONArray jsonArray = new JSONArray();
		List<Reflection> list = getReflectionDao().queryBuilder()
			.where(ReflectionDao.Properties.SectionNumber.eq(sectionNumber))
			.orderAsc(ReflectionDao.Properties.Order)
			.list();

		for (Reflection obj : list) {
			jsonArray.put(obj.toJSONObject());
		}

		closeDatabase();

		PluginResult pr = new PluginResult(PluginResult.Status.OK, jsonArray);
		callbackContext.sendPluginResult(pr);
	}


	private void getAllReflections(CallbackContext callbackContext) {
		openDatabase();

    JSONArray jsonArray = new JSONArray();

		List<Reflection> list = getReflectionDao().queryBuilder()
			.orderAsc(ReflectionDao.Properties.SectionNumber)
			.orderAsc(ReflectionDao.Properties.Order)
			.list();

		for (Reflection obj : list) {
			jsonArray.put(obj.toJSONObject());
		}

		closeDatabase();

		PluginResult pr = new PluginResult(PluginResult.Status.OK, jsonArray);
		callbackContext.sendPluginResult(pr);
	}
}
