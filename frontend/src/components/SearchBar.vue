<template>
  <div class="mb-6">
    <input
      v-model="searchTerm"
      @input="$emit('update:searchTerm', searchTerm)"
      type="text"
      placeholder="Search notes..."
      class="w-full p-3 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
  </div>
</template>

<script setup>
import { ref, watch, toRefs } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:searchTerm'])

const searchTerm = ref(props.modelValue)

watch(
  () => props.modelValue,
  (val) => {
    searchTerm.value = val
  }
)
</script>
