<template>
  <div
    class="line"
    :class="{
      'only-value': !keyText && value
    }"
  >
    <span
      class="key-text"
    >
      <StringBox v-if="keyText" :value="keyText" class="key-text" />
      <slot name="keyText"></slot>
    </span>
    <span v-if="keyText" class="colon">:&nbsp;</span>
    <span class="value">
      <component
        v-if="value !== undefined && valueType && ValueBox[valueType]"
        :is="ValueBox[valueType]"
        :value="value"
      />
      <slot name="value"></slot>
    </span>
    <span class="comma" v-if="needEndComma">,</span>
  </div>
</template>

<script setup lang="ts">
import { JSON_TYPE_ENUM } from '../../types/json';
import StringBox from './Value//string-value.vue'
import BooleanBox from './Value/boolean-value.vue'
import NumberBox from './Value/number-value.vue'
import NullBox from './Value/null-value.vue'

defineProps<{
  keyText?: string;
  value?: string | boolean | number | null;
  valueType?: JSON_TYPE_ENUM.STRING | JSON_TYPE_ENUM.NUMBER | JSON_TYPE_ENUM.BOOLEAN | JSON_TYPE_ENUM.NULL;
  needEndComma?: boolean;
}>();

const ValueBox = {
  [JSON_TYPE_ENUM.STRING]: StringBox,
  [JSON_TYPE_ENUM.NUMBER]: NumberBox,
  [JSON_TYPE_ENUM.BOOLEAN]: BooleanBox,
  [JSON_TYPE_ENUM.NULL]: NullBox,
}

</script>