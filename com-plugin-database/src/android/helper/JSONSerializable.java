package com.plugin.database.helper;

import org.json.JSONObject;

public interface JSONSerializable {
	public void setAttributes(JSONObject jsonObject);
	public JSONObject toJSONObject();
}
