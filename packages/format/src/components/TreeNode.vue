<script setup lang="ts">
import ArrayNode from "./NodeType/array-node.vue";
import ObjectNode from "./NodeType/object-node.vue";
import BooleanNode from "./NodeType/boolean-node.vue";
import NumberNode from "./NodeType/number-node.vue";
import StringNode from "./NodeType/string-node.vue";
import NullNode from "./NodeType/null-node.vue";
import {JSON_TYPE_ENUM, JSONValue} from "../types/json.ts";
import {getType} from "../utils/getType.ts";

const props = defineProps<{
  keyText?: string;
  value: JSONValue;
  level: number;
}>();

const type = getType(props.value);

const Node = {
  [JSON_TYPE_ENUM.NUMBER]: NumberNode,
  [JSON_TYPE_ENUM.STRING]: StringNode,
  [JSON_TYPE_ENUM.BOOLEAN]: BooleanNode,
  [JSON_TYPE_ENUM.NULL]: NullNode,
  [JSON_TYPE_ENUM.ARRAY]: ArrayNode,
  [JSON_TYPE_ENUM.OBJECT]: ObjectNode
};

</script>

<template>
  <component
    v-if="type !== JSON_TYPE_ENUM.UNKNOWN"
    :level="level"
    :key-text="keyText || ''"
    :value="value"
    :is="Node[type]"
  />
</template>