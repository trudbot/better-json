<template>
  <span class="folded-array">
    <span class="folded-array__bracket bracket">[</span>
    <span class="folded-array__ellipsis ellipsis">&nbsp;...&nbsp;</span>
    <span class="folded-array__bracket bracket">]</span>
    <span class="folded-array__length">&nbsp;&nbsp;//{{length}}&nbsp;items</span>
  </span>
</template>

<script setup lang="ts">
defineProps<{
  length: number;
}>();
</script>