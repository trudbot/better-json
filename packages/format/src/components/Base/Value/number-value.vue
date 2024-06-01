<template>
  <span class="number-value">
    {{ value }}
  </span>
</template>

<script setup lang="ts">
defineProps<{
  value: number;
}>();
</script>