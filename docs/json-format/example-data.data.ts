const data = {
  "string": "Hello, World!",
  "number": 12345,
  "float": 123.45,
  "boolean_true": true,
  "boolean_false": false,
  "null_value": null,
  "link_value": "https://trudbot.cn",
  "array": [
    "string in array",
    9876,
    543.21,
    false,
    null,
    {"nested_object_in_array": "value"},
    ["nested_array_in_array"]
  ],
  "object": {
    "nested_string": "Nested Hello",
    "nested_number": 6789,
    "nested_float": 678.90,
    "nested_boolean_true": true,
    "nested_boolean_false": false,
    "nested_null_value": null,
    "nested_array": [
      "nested string in array",
      1234,
      56.78,
      true,
      null,
      {"deeply_nested_object_in_array": "deep value"},
      ["deeply_nested_array_in_array"]
    ],
    "deeply_nested_object": {
      "deep_nested_string": "Deep Nested Hello",
      "deep_nested_number": 4321,
      "deep_nested_float": 12.34,
      "deep_nested_boolean_true": true,
      "deep_nested_boolean_false": false,
      "deep_nested_null_value": null,
      "deep_nested_array": [
        "deep nested string in array",
        987,
        65.43,
        false,
        null,
        {"very_deeply_nested_object_in_array": "very deep value"},
        ["very_deeply_nested_array_in_array"]
      ]
    }
  },
  "empty_array": [],
  "empty_object": {}
}


export default {
  load() {
    return data;
  }
}