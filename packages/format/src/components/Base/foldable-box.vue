<script setup lang="ts">
import FieldBox from './field-box.vue';
import FoldedArray from "./Value/folded-array.vue";
import FoldedObject from "./Value/folded-object.vue";
import ControlButton from "./control-button.vue";
import { ref, inject } from 'vue';
import {configKey} from "../../types/config-inject.ts";
import ExtraFunctionButton from "./extra-function-button.vue";

const props = defineProps<{
  isArray: boolean;
  isObject: boolean;
  keyText?: string;
  length: number;
  level: number;
}>();

const emit = defineEmits(['copy']);

const fold = ref<boolean>(props.length === 0);
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

const funtions = [
  {
    desc: '复制',
    descEn: 'Copy',
    tip: '已复制!',
    callback: () => {
      emit('copy');
    },
  }
]

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
        <span class="fold-box-header-line">
          <template v-if="fold">
            <FoldedArray v-if="isArray" :length="length"/>
            <FoldedObject v-else :length="length"/>
          </template>
          <template v-else>
            <span v-if="isArray" class="bracket">[</span>
            <span v-else-if="isObject" class="bracket">{</span>
          </template>
          <ExtraFunctionButton :functions="funtions" v-show="hover"/>
        </span>
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
    <!--控制展开收起的按钮-->
    <ControlButton
      :fold="fold"
      @click="toggleFold"
    />
  </section>
</template>