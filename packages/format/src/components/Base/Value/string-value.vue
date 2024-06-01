<template>
  <span class="string-value">
    <span class="quote left-quote">"</span>
      <span v-for="item in extractUrls(value)">
        <a
          v-if="item.type === 'url'"
          class="link"
          :href="item.value">
          {{item.value}}
        </a>
        <span v-else>{{encode(item.value)}}</span>
      </span>
    <span class="quote right-quote">"</span>
  </span>
</template>

<script setup lang="ts">
import {extractUrls} from "../../../utils/findUrl.ts";

defineProps<{
  value: string;
}>();



function encode(str: string) {
  const res = JSON.stringify(str);
  if (res.length) {
    return res.slice(1, -1);
  }
  return res;
}
</script>