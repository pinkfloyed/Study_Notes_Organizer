<template>
  <div>
    <Navbar />

    <div class="p-6 max-w-6xl mx-auto">
      <!-- Header -->
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-3xl font-bold text-indigo-700">My Notes</h1>
        <button
          @click="showAdd = true"
          class="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
        >
          + Add Note
        </button>
      </div>

      <!-- Search -->
      <SearchBar v-model:searchTerm="searchTerm" />

      <!-- Add/Edit Note Form -->
      <div v-if="showAdd" class="mb-6 bg-white p-4 rounded-lg shadow">
        <input
          v-model="title"
          type="text"
          placeholder="Note Title"
          class="w-full p-2 mb-3 border border-gray-300 rounded"
        />
        <textarea
          v-model="content"
          placeholder="Note Content"
          class="w-full p-2 mb-3 border border-gray-300 rounded h-32"
        ></textarea>
        <div class="flex gap-2">
          <button
            @click="saveNote"
            class="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
          >
            Save
          </button>
          <button
            @click="cancelAdd"
            class="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500"
          >
            Cancel
          </button>
        </div>
      </div>

      <!-- Notes Grid -->
      <div v-if="filteredNotes.length > 0" class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <NoteCard
          v-for="note in filteredNotes"
          :key="note.id"
          :note="note"
          @edit="editNote"
          @delete="deleteNote"
        />
      </div>
      <p v-else class="text-gray-500">No notes found. Add one above.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import Navbar from '../components/Navbar.vue'
import NoteCard from '../components/NoteCard.vue'
import SearchBar from '../components/SearchBar.vue'
import { useNotesStore } from '../store/notesStore'

const store = useNotesStore()

// State
const notes = ref([])
const searchTerm = ref('')
const showAdd = ref(false)
const title = ref('')
const content = ref('')
let editingId = null

// Fetch notes on load
onMounted(async () => {
  await store.fetchNotes()
  notes.value = store.notes
})

// Computed: Filtered notes
const filteredNotes = computed(() => {
  if (!searchTerm.value) return notes.value
  return notes.value.filter((note) =>
    note.title.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
    note.content.toLowerCase().includes(searchTerm.value.toLowerCase())
  )
})

// Cancel form
function cancelAdd() {
  showAdd.value = false
  title.value = ''
  content.value = ''
  editingId = null
}

// Save note
async function saveNote() {
  if (!title.value.trim() || !content.value.trim()) return

  if (editingId) {
    await store.updateNote(editingId, { title: title.value, content: content.value })
  } else {
    await store.addNote({ title: title.value, content: content.value })
  }
  cancelAdd()
  notes.value = store.notes
}

// Edit note
function editNote(note) {
  showAdd.value = true
  title.value = note.title
  content.value = note.content
  editingId = note.id
}

// Delete note
async function deleteNote(id) {
  if (confirm('Are you sure you want to delete this note?')) {
    await store.deleteNote(id)
    notes.value = store.notes
  }
}
</script>
