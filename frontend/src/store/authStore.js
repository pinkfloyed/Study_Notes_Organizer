import { defineStore } from 'pinia'
import authService from '../api/authService'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: localStorage.getItem('token') || ''
  }),
  actions: {
    async login(email, password) {
      try {
        const res = await authService.login(email, password)
        this.token = res.token
        this.user = res.user
        localStorage.setItem('token', res.token)
        return true
      } catch (err) {
        throw err.response?.data?.message || 'Login failed'
      }
    },
    async register(name, email, password) {
      try {
        await authService.register(name, email, password)
        return true
      } catch (err) {
        throw err.response?.data?.message || 'Registration failed'
      }
    },
    logout() {
      this.user = null
      this.token = ''
      localStorage.removeItem('token')
    }
  }
})
