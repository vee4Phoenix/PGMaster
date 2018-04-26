package com.plugin.database.helper;

import android.database.sqlite.SQLiteDatabase;

/**
 * Migration from Version1 to Version2
 *
 * @author Hubert
 */
public class MigrateV1ToV2 extends MigrationImpl {

    private int mOldVersion = 1;
    private int mNewVersion = 2;

    /**
     * {@inheritDoc}
     */
    @Override
    public int applyMigration(SQLiteDatabase db,
            int currentVersion) {
        prepareMigration(db, currentVersion);

        // Sample code to add column to existing table
        // db.execSQL("ALTER TABLE CONDITION ADD COLUMN COND_ADDED_AT INTEGER");

        // Sample code to add a new table
        // db.execSQL("CREATE TABLE IF NOT EXISTS 'REFERENCE_CONDITIONS_NO_LOCATION' (" + //
        //         "'_id' INTEGER PRIMARY KEY ," + // 0: id
        //         "'CODE' TEXT," + // 1: code
        //         "'NAME' TEXT," + // 2: name
        //         "'ORDER' INTEGER);"); // 3: order

        return getMigratedVersion();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public int getTargetVersion() {
        return mOldVersion;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public int getMigratedVersion() {
        return mNewVersion;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Migration getPreviousMigration() {
        return null; // use this if this is the first migration
        //return new MigrateV1ToV2(); // use this if there is previous migration
    }
}
