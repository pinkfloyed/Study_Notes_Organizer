import api from './axios'

export default {
  async getAll() {
    const res = await api.get('/notes')
    return res.data
  },
  async create(note) {
    const res = await api.post('/notes', note)
    return res.data
  },
  async update(id, note) {
    const res = await api.put(`/notes/${id}`, note)
    return res.data
  },
  async remove(id) {
    const res = await api.delete(`/notes/${id}`)
    return res.data
  }
}
