<script setup lang="ts">
import { JsonFormatView } from '@trudbot/format'
import Full from './example/full.json'
let json = { "face": "😂" }
</script>

<template>
  <JsonFormatView :value="Full"/>
</template>