<template>
  <nav class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 text-white flex justify-between items-center">
    <router-link to="/dashboard" class="font-bold text-xl">StudyNotes</router-link>
    <div class="space-x-4 flex items-center">
      <span v-if="auth.user">{{ auth.user.name }}</span>
      <button @click="logout" class="bg-white text-indigo-600 px-3 py-1 rounded hover:bg-indigo-100">
        Logout
      </button>
    </div>
  </nav>
</template>

<script setup>
import { useAuthStore } from '../store/authStore'
import { useRouter } from 'vue-router'

const auth = useAuthStore()
const router = useRouter()

function logout() {
  auth.logout()
  router.push('/login')
}
</script>
