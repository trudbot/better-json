<script setup lang="ts">
import {computed, provide} from 'vue';
import TreeNode from "./components/TreeNode.vue";
import {JSONValue} from "./types/json.ts";
import {config} from './config.ts'
import {configKey} from "./types/config-inject.ts";

const props = defineProps(['value']);
provide(configKey, config);

const json = computed<JSONValue>(() => {
  try {
    if (typeof props.value === 'string') {
      return JSON.parse(props.value);
    }
    return JSON.parse(JSON.stringify(props.value));
  } catch (e) {
    console.log('json 解析 error', e);
  }
});
</script>

<template>
  <div class="json-view">
    <TreeNode
      :level="config.ROOT_LEVEL"
      :value="json"
    />
  </div>
</template>

<style src="./style.scss" lang="scss"/>