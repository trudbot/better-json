<template>
  <span class="folded-object">
    <span class="folded-object__bracket bracket">{</span>
    <span class="folded-object__ellipsis ellipsis">&nbsp;...&nbsp;</span>
    <span class="folded-object__bracket bracket">}</span>
    <span class="folded-object__key_number">&nbsp;&nbsp;//{{length}}&nbsp;items</span>
  </span>
</template>


<script setup lang="ts">
defineProps<{
  length: number;
}>();
</script>