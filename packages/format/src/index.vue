<script setup lang="ts">
import {ref, provide, watch} from 'vue';
import TreeNode from "./components/TreeNode.vue";
import {config} from './config.ts'
import {configKey} from "./types/config-inject.ts";

const props = defineProps(['value']);
const json = ref("");
provide(configKey, config);

watch(() => props.value, () => {
  try {
    if (typeof props.value === 'string') {
      json.value = JSON.parse(props.value);
    } else {
      json.value = JSON.parse(JSON.stringify(props.value));
    }
  } catch (e) {
    console.error('json 解析 error', e);
    json.value = (e as any)?.msg || 'json 解析 error';
  }
}, {
  immediate: true,
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