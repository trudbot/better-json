<script setup lang="ts">
import { JSONArray } from '../../types/json'
import TreeNode from "../TreeNode.vue";
import FoldableBox from "../Base/foldable-box.vue";
import {writeToClipboard} from "../../utils/clipboard.ts";

const props = defineProps<{
  keyText: string;
  value: JSONArray;
  level: number;
}>();

function copy() {
  const copyContent = props.keyText.length ? {[props.keyText]: props.value} : props.value;
  writeToClipboard(copyContent);
}
</script>

<template>
  <FoldableBox
    is-array
    :is-object="false"
    :keyText="keyText"
    :length="value.length"
    :level="level"
    @copy="copy"
  >
    <TreeNode
      v-for="item in value"
      :value="item"
      :level="level + 1"
    />
  </FoldableBox>
</template>