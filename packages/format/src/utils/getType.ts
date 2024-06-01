import { JSONValue, JSON_TYPE_ENUM } from "../types/json";

function isBoolean(data: JSONValue): boolean {
  return typeof data === 'boolean';
}

function isNumber(data: JSONValue): boolean {
  return typeof data === 'number';
}

function isString(data: JSONValue): boolean {
  return typeof data === 'string';
}

function isNull(data: JSONValue): boolean {
  return data === null;
}

function isArray(data: JSONValue): boolean {
  return Array.isArray(data);
}

function isObject(data: JSONValue): boolean {
  return typeof data === 'object' && !Array.isArray(data);
}

function getType(data: JSONValue): JSON_TYPE_ENUM {
  if (isString(data)) {
    return JSON_TYPE_ENUM.STRING;
  } else if (isNumber(data)) {
    return JSON_TYPE_ENUM.NUMBER;
  } else if (isBoolean(data)) {
    return JSON_TYPE_ENUM.BOOLEAN;;
  } else if (isNull(data)) {
    return JSON_TYPE_ENUM.NULL;
  } else if (isArray(data)) {
    return JSON_TYPE_ENUM.ARRAY;
  } else if(isObject(data)) {
    return JSON_TYPE_ENUM.OBJECT;
  } else {
    return JSON_TYPE_ENUM.UNKNOWN;
  }
}

export { isBoolean, isNumber, isString, isNull, isArray, isObject, getType}