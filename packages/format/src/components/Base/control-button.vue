<script setup lang="ts">
defineProps<{
  fold: boolean;
}>()
</script>

<template>
  <div class="control-button">
    <svg
      :style="{
        transform: fold ? 'rotate(-90deg)' : 'rotate(0deg)',
      }"
      xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
      <path fill="#585656" d="M15.88 9.29L12 13.17L8.12 9.29a.996.996 0 1 0-1.41 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59a.996.996 0 0 0 0-1.41c-.39-.38-1.03-.39-1.42 0" />
    </svg>
  </div>
</template>
