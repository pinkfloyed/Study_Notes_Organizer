<template>
  <div
    class="bg-gradient-to-br from-pink-300 to-yellow-300 p-4 rounded-lg shadow-lg relative"
  >
    <h3 class="text-lg font-semibold mb-2">{{ note.title }}</h3>
    <p class="text-sm mb-4">{{ note.content }}</p>
    <div class="absolute top-2 right-2 flex gap-1">
      <button
        @click="$emit('edit', note)"
        class="bg-blue-500 text-white px-2 py-1 rounded text-xs hover:bg-blue-600"
        aria-label="Edit note"
      >
        Edit
      </button>
      <button
        @click="$emit('delete', note.id)"
        class="bg-red-500 text-white px-2 py-1 rounded text-xs hover:bg-red-600"
        aria-label="Delete note"
      >
        Delete
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  note: {
    type: Object,
    required: true,
  },
})
</script>
