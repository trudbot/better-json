<template>
  <span class="folded-array">
    <span class="folded-array__bracket bracket">[</span>
    <span class="folded-array__length">&nbsp;{{ length }}&nbsp;items&nbsp;</span>
    <span class="folded-array__bracket bracket">]</span>
  </span>
</template>

<script setup lang="ts">
defineProps<{
  length: number;
}>();
</script>