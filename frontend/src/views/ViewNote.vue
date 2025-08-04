<template>
  <div class="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md mt-8">
    <button
      @click="goBack"
      class="mb-6 text-indigo-600 hover:underline"
      aria-label="Go back to dashboard"
    >
      ← Back to Notes
    </button>

    <h1 class="text-3xl font-bold mb-4 text-indigo-700">{{ note.title }}</h1>
    <p class="whitespace-pre-line text-gray-800 mb-4">{{ note.content }}</p>

    <div class="text-sm text-gray-500">
      <span>Created: {{ formatDate(note.created_at) }}</span>
      <span v-if="note.updated_at" class="ml-4">Updated: {{ formatDate(note.updated_at) }}</span>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import notesService from '../api/notesService'
import formatDate from '../utils/formatDate'

const route = useRoute()
const router = useRouter()

const note = ref({
  title: '',
  content: '',
  created_at: '',
  updated_at: ''
})

async function fetchNote() {
  try {
    const id = route.params.id
    const data = await notesService.getById(id)
    note.value = data
  } catch (error) {
    alert('Failed to load note.')
    router.push('/dashboard')
  }
}

function goBack() {
  router.push('/dashboard')
}

onMounted(() => {
  fetchNote()
})
</script>
