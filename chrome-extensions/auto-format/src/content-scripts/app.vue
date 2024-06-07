<script setup lang="ts">
import { inject, onMounted } from 'vue';
import { JsonFormatView } from '@trudbot/format';
import style from '@trudbot/format/style'
const data = inject('data');

onMounted(() => {
  console.log('mounted', data);
});
</script>

<template>
  <JsonFormatView
    :value="data"
  />
</template>
<style>
@import '@trudbot/format/style';
</style>