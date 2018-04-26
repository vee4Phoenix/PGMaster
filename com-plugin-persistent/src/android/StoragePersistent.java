package com.plugin.persistent;

import android.app.Activity;
import android.content.SharedPreferences;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;

public class StoragePersistent extends CordovaPlugin {
    private static final String SharedPreferencesKey = "SharedPreferencesKey";

    private static final String SET_BOOLEAN = "setBoolean";
    private static final String GET_BOOLEAN = "getBoolean";
    private static final String SET_INT = "setInt";
    private static final String GET_INT = "getInt";
    private static final String SET_LONG = "setLong";
    private static final String GET_LONG = "getLong";
    private static final String SET_STRING = "setString";
    private static final String GET_STRING = "getString";

    @Override
    public boolean execute(final String action, final JSONArray args, final CallbackContext callbackContext) throws JSONException {
        cordova.getThreadPool().execute(new Runnable() {

            @Override
            public void run() {
                try {
                    if (action.equals(SET_BOOLEAN))      { setBoolean(args, callbackContext); }
                    else if (action.equals(GET_BOOLEAN)) { getBoolean(args, callbackContext); }
                    else if (action.equals(SET_INT))     { setInt(args, callbackContext); }
                    else if (action.equals(GET_INT))     { getInt(args, callbackContext); }
                    else if (action.equals(SET_LONG))    { setLong(args, callbackContext); }
                    else if (action.equals(GET_LONG))    { getLong(args, callbackContext); }
                    else if (action.equals(SET_STRING))  { setString(args, callbackContext); }
                    else if (action.equals(GET_STRING))  { getString(args, callbackContext); }
                } catch (Exception e) {
                    e.printStackTrace();
                    System.err.println("Exception: " + e.getMessage());
                    callbackContext.error(e.getMessage());
                }
            }

        });
        return true;
    }

    private SharedPreferences getSharedPreferences(Activity act) {
        return act.getSharedPreferences(SharedPreferencesKey, 0);
    }

    public void getBoolean(final JSONArray args, CallbackContext callbackContext) {
        PluginResult pr = null;

        try {
            String key = args.getString(0);
            boolean value = getSharedPreferences(cordova.getActivity()).getBoolean(key, false);
            pr = new PluginResult(PluginResult.Status.OK, value);
        } catch (JSONException e) {
            pr = new PluginResult(PluginResult.Status.JSON_EXCEPTION, e.getMessage());
        }

        callbackContext.sendPluginResult(pr);
    }

    public void setBoolean(final JSONArray args, CallbackContext callbackContext) {
        PluginResult pr = null;

        try {
            String key = args.getString(0);
            boolean value = args.getBoolean(1);

            SharedPreferences.Editor editor = getSharedPreferences(cordova.getActivity()).edit();
            editor.putBoolean(key, value);
            editor.commit();
            pr = new PluginResult(PluginResult.Status.OK);
        } catch (JSONException e) {
            pr = new PluginResult(PluginResult.Status.JSON_EXCEPTION, e.getMessage());
        }

        callbackContext.sendPluginResult(pr);
    }

    public void getInt(final JSONArray args, CallbackContext callbackContext) {
        PluginResult pr = null;

        try {
            String key = args.getString(0);
            int value = getSharedPreferences(cordova.getActivity()).getInt(key, 0);
            pr = new PluginResult(PluginResult.Status.OK, value);
        } catch (JSONException e) {
            pr = new PluginResult(PluginResult.Status.JSON_EXCEPTION, e.getMessage());
        }

        callbackContext.sendPluginResult(pr);
    }

    public void setInt(final JSONArray args, CallbackContext callbackContext) {
        PluginResult pr = null;

        try {
            String key = args.getString(0);
            int value = args.getInt(1);

            SharedPreferences.Editor editor = getSharedPreferences(cordova.getActivity()).edit();
            editor.putInt(key, value);
            editor.commit();
            pr = new PluginResult(PluginResult.Status.OK);
        } catch (JSONException e) {
            pr = new PluginResult(PluginResult.Status.JSON_EXCEPTION, e.getMessage());
        }

        callbackContext.sendPluginResult(pr);
    }

    public void getLong(final JSONArray args, CallbackContext callbackContext) {
        PluginResult pr = null;

        try {
            String key = args.getString(0);
            long value = getSharedPreferences(cordova.getActivity()).getLong(key, 0);
            pr = new PluginResult(PluginResult.Status.OK, value);
        } catch (JSONException e) {
            pr = new PluginResult(PluginResult.Status.JSON_EXCEPTION, e.getMessage());
        }

        callbackContext.sendPluginResult(pr);
    }

    public void setLong(final JSONArray args, CallbackContext callbackContext) {
        PluginResult pr = null;

        try {
            String key = args.getString(0);
            long value = args.getLong(1);

            SharedPreferences.Editor editor = getSharedPreferences(cordova.getActivity()).edit();
            editor.putLong(key, value);
            editor.commit();
            pr = new PluginResult(PluginResult.Status.OK);
        } catch (JSONException e) {
            pr = new PluginResult(PluginResult.Status.JSON_EXCEPTION, e.getMessage());
        }

        callbackContext.sendPluginResult(pr);
    }

    public void getString(final JSONArray args, CallbackContext callbackContext) {
        PluginResult pr = null;

        try {
            String key = args.getString(0);
            String value = getSharedPreferences(cordova.getActivity()).getString(key, "");
            pr = new PluginResult(PluginResult.Status.OK, value);
        } catch (JSONException e) {
            pr = new PluginResult(PluginResult.Status.JSON_EXCEPTION, e.getMessage());
        }

        callbackContext.sendPluginResult(pr);
    }

    public void setString(final JSONArray args, CallbackContext callbackContext) {
        PluginResult pr = null;

        try {
            String key = args.getString(0);
            String value = args.getString(1);

            SharedPreferences.Editor editor = getSharedPreferences(cordova.getActivity()).edit();
            editor.putString(key, value);
            editor.commit();
            pr = new PluginResult(PluginResult.Status.OK);
        } catch (JSONException e) {
            pr = new PluginResult(PluginResult.Status.JSON_EXCEPTION, e.getMessage());
        }

        callbackContext.sendPluginResult(pr);
    }
}
