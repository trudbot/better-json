<script setup lang="ts">
import {ref} from "vue";

defineProps<{
  functions: Array<{
    desc: string;
    descEn: string;
    tip: string;
    callback: () => void;
  }>
}>();
const tip = ref('');
function click(tipText: string, callback: Function) {
  callback();
  tip.value = tipText;
  setTimeout(() => {
    tip.value = '';
  }, 1500);
}
</script>

<template>
  <span class="function-set" @click.stop>
    <button
      class="function-button"
      v-for="func in functions"
      :key="func.desc"
      @click="click(func.tip, func.callback)"
    >
      {{func.desc }}
    </button>
    <span class="tip-text">{{tip}}</span>
  </span>
</template>