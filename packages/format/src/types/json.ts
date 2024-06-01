type JSONValue = string | number | boolean | null | JSONObject | JSONArray;

interface JSONObject {
  [key: string]: JSONValue;
}

interface JSONArray extends Array<JSONValue> {}

enum JSON_TYPE_ENUM {
  STRING = "string",
  NUMBER = "number",
  BOOLEAN = "boolean",
  NULL = "null",
  OBJECT = "object",
  ARRAY = "array",
  UNKNOWN = "unknown",
}

export type { JSONValue, JSONObject, JSONArray };
export {JSON_TYPE_ENUM}