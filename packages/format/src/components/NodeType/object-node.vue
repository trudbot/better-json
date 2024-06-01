<script setup lang="ts">
import FoldableBox from "../Base/foldable-box.vue";
import {computed} from "vue";
import TreeNode from "../TreeNode.vue";
import {JSONObject, JSONValue} from "../../types/json.ts";
const props = defineProps<{
  value: JSONObject;
  keyText: string;
  level: number;
}>();

const childList = computed(() => {
  const childList = Object.entries(props.value);
  return childList;
});
</script>

<template>
  <FoldableBox
    is-object
    :length="childList.length"
    :is-array="false"
    :key-text="keyText"
    :level="level"
  >
    <TreeNode
      v-for="entry in childList"
      :key-text="entry[0]"
      :value="entry[1] as JSONValue"
      :level="level + 1"
    />
  </FoldableBox>
</template>
