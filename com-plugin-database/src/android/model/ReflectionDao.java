package com.plugin.database.model;

import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteStatement;

import de.greenrobot.dao.AbstractDao;
import de.greenrobot.dao.Property;
import de.greenrobot.dao.internal.DaoConfig;

import com.plugin.database.model.Reflection;

// THIS CODE IS GENERATED BY greenDAO, DO NOT EDIT.
/**
 * DAO for table REFLECTION.
*/
public class ReflectionDao extends AbstractDao<Reflection, Long> {

    public static final String TABLENAME = "REFLECTION";

    /**
     * Properties of entity Reflection.<br/>
     * Can be used for QueryBuilder and for referencing column names.
    */
    public static class Properties {
        public final static Property Id = new Property(0, Long.class, "id", true, "_id");
        public final static Property Order = new Property(1, Integer.class, "order", false, "ORDER");
        public final static Property SectionNumber = new Property(2, Integer.class, "sectionNumber", false, "SECTION_NUMBER");
        public final static Property Text = new Property(3, String.class, "text", false, "TEXT");
    };


    public ReflectionDao(DaoConfig config) {
        super(config);
    }

    public ReflectionDao(DaoConfig config, DaoSession daoSession) {
        super(config, daoSession);
    }

    /** Creates the underlying database table. */
    public static void createTable(SQLiteDatabase db, boolean ifNotExists) {
        String constraint = ifNotExists? "IF NOT EXISTS ": "";
        db.execSQL("CREATE TABLE " + constraint + "'REFLECTION' (" + //
                "'_id' INTEGER PRIMARY KEY ," + // 0: id
                "'ORDER' INTEGER," + // 1: order
                "'SECTION_NUMBER' INTEGER," + // 2: sectionNumber
                "'TEXT' TEXT);"); // 3: text
    }

    /** Drops the underlying database table. */
    public static void dropTable(SQLiteDatabase db, boolean ifExists) {
        String sql = "DROP TABLE " + (ifExists ? "IF EXISTS " : "") + "'REFLECTION'";
        db.execSQL(sql);
    }

    /** @inheritdoc */
    @Override
    protected void bindValues(SQLiteStatement stmt, Reflection entity) {
        stmt.clearBindings();

        Long id = entity.getId();
        if (id != null) {
            stmt.bindLong(1, id);
        }

        Integer order = entity.getOrder();
        if (order != null) {
            stmt.bindLong(2, order);
        }

        Integer sectionNumber = entity.getSectionNumber();
        if (sectionNumber != null) {
            stmt.bindLong(3, sectionNumber);
        }

        String text = entity.getText();
        if (text != null) {
            stmt.bindString(4, text);
        }
    }

    /** @inheritdoc */
    @Override
    public Long readKey(Cursor cursor, int offset) {
        return cursor.isNull(offset + 0) ? null : cursor.getLong(offset + 0);
    }

    /** @inheritdoc */
    @Override
    public Reflection readEntity(Cursor cursor, int offset) {
        Reflection entity = new Reflection( //
            cursor.isNull(offset + 0) ? null : cursor.getLong(offset + 0), // id
            cursor.isNull(offset + 1) ? null : cursor.getInt(offset + 1), // order
            cursor.isNull(offset + 2) ? null : cursor.getInt(offset + 2), // sectionNumber
            cursor.isNull(offset + 3) ? null : cursor.getString(offset + 3) // text
        );
        return entity;
    }

    /** @inheritdoc */
    @Override
    public void readEntity(Cursor cursor, Reflection entity, int offset) {
        entity.setId(cursor.isNull(offset + 0) ? null : cursor.getLong(offset + 0));
        entity.setOrder(cursor.isNull(offset + 1) ? null : cursor.getInt(offset + 1));
        entity.setSectionNumber(cursor.isNull(offset + 2) ? null : cursor.getInt(offset + 2));
        entity.setText(cursor.isNull(offset + 3) ? null : cursor.getString(offset + 3));
     }

    /** @inheritdoc */
    @Override
    protected Long updateKeyAfterInsert(Reflection entity, long rowId) {
        entity.setId(rowId);
        return rowId;
    }

    /** @inheritdoc */
    @Override
    public Long getKey(Reflection entity) {
        if(entity != null) {
            return entity.getId();
        } else {
            return null;
        }
    }

    /** @inheritdoc */
    @Override
    protected boolean isEntityUpdateable() {
        return true;
    }

}
