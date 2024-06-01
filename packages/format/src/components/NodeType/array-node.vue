<script setup lang="ts">
import { JSONArray } from '../../types/json'
import TreeNode from "../TreeNode.vue";
import FoldableBox from "../Base/foldable-box.vue";
defineProps<{
  keyText: string;
  value: JSONArray;
  level: number;
}>();
</script>

<template>
  <FoldableBox
    is-array
    :is-object="false"
    :keyText="keyText"
    :length="value.length"
    :level="level"
  >
    <TreeNode
      v-for="item in value"
      :value="item"
      :level="level + 1"
    />
  </FoldableBox>
</template>