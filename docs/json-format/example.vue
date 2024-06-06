<script setup lang="ts">
import { JsonFormatView } from '@trudbot/format'
import { data } from './example-data.data'
</script>

<template>
  <JsonFormatView :value="data"/>
</template>

<style>
@import '@trudbot/format/style';
</style>