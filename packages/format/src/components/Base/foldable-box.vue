<script setup lang="ts">
import FieldBox from './field-box.vue';
import FoldedArray from "./Value/folded-array.vue";
import FoldedObject from "./Value/folded-object.vue";
import ControlButton from "./control-button.vue";
import { ref, inject } from 'vue';
import {configKey} from "../../types/config-inject.ts";

defineProps<{
  isArray: boolean;
  isObject: boolean;
  keyText?: string;
  length: number;
  level: number;
}>();

const fold = ref(false);
const root = inject(configKey)?.ROOT_LEVEL || 0;
const hover = ref(false);
function toggleFold() {
  fold.value = !fold.value;
}

function enter() {
  hover.value = true;
}

function leave() {
  hover.value = false;
}

</script>

<template>
  <section
    :class="{
      'array-box': isArray,
      'object-box': isObject,
      'folded': fold,
      'hover': hover,
    }"
  >
    <FieldBox
      class="start-line"
      :keyText="keyText"
      @mouseenter="enter"
      @mouseleave="leave"
      @click="toggleFold"
    >
      <template #value>
        <template v-if="fold">
          <FoldedArray v-if="isArray" :length="length"/>
          <FoldedObject v-else :length="length"/>
        </template>
        <template v-else>
          <span v-if="isArray" class="bracket">[</span>
          <span v-else-if="isObject" class="bracket">{</span>
        </template>
      </template>
    </FieldBox>
    <div
      v-show="!fold"
      :class="{
        'array-content': isArray,
        'object-content': isObject,
      }"
    >
      <slot></slot>
    </div>
    <FieldBox
      v-show="!fold"
      class="end-line"
      :need-end-comma="root !== level"
      @mouseenter="enter"
      @mouseleave="leave"
    >
      <template #value>
        <span v-if="isArray" class="bracket">]</span>
        <span v-else-if="isObject" class="bracket">}</span>
      </template>
    </FieldBox>
    // 控制展开收起的按钮
    <ControlButton
      :fold="fold"
      @click="toggleFold"
    />
  </section>
</template>