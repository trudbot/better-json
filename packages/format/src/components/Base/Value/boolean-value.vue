<template>
  <span class="boolean-value">
    {{ value ? 'true' : 'false' }}
  </span>
</template>

<script setup lang="ts">
defineProps<{
  value: boolean;
}>();
</script>