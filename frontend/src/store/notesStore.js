import { defineStore } from 'pinia'
import notesService from '../api/notesService'

export const useNotesStore = defineStore('notes', {
  state: () => ({
    notes: []
  }),
  actions: {
    async fetchNotes() {
      try {
        this.notes = await notesService.getAll()
      } catch (err) {
        console.error('Failed to fetch notes', err)
      }
    },
    async addNote(note) {
      await notesService.create(note)
      await this.fetchNotes()
    },
    async updateNote(id, updatedNote) {
      await notesService.update(id, updatedNote)
      await this.fetchNotes()
    },
    async deleteNote(id) {
      await notesService.remove(id)
      await this.fetchNotes()
    }
  }
})
