<script setup lang="ts">
import FieldBox from "../Base/field-box.vue";
import {JSON_TYPE_ENUM} from "../../types/json.ts";

defineProps<{
  value: number;
  keyText: string;
  level: number;
}>();
</script>

<template>
  <field-box
    :key-text="keyText"
    :value="value"
    :value-type="JSON_TYPE_ENUM.NUMBER"
    need-end-comma
  />
</template>
