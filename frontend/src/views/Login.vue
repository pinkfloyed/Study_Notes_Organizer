<template>
  <!-- Full-screen gradient -->
  <div class="min-h-screen w-full flex items-center justify-center !bg-gradient-to-tr from-blue-700 via-blue-500 to-blue-400">
    <div class="bg-white rounded-xl shadow-xl max-w-md w-full p-8 mx-4">
      <h2 class="text-3xl font-semibold text-center mb-8 text-gray-800">Login</h2>

      <form @submit.prevent="handleLogin" class="space-y-6">
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <button
          :disabled="loading"
          class="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition disabled:opacity-50"
        >
          {{ loading ? 'Logging in...' : 'Login' }}
        </button>
      </form>

      <p v-if="error" class="text-red-600 text-sm mt-4 text-center">{{ error }}</p>

      <p class="mt-6 text-center text-gray-600">
        Don't have an account?
        <router-link to="/register" class="text-blue-600 font-medium hover:underline">Register</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../store/authStore'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'

const email = ref('')
const password = ref('')
const loading = ref(false)
const error = ref('')
const toast = useToast()

const auth = useAuthStore()
const router = useRouter()

async function handleLogin() {
  error.value = ''
  loading.value = true
  try {
    await auth.login(email.value, password.value)
    toast.success('Login successful! 🎉')
    router.push('/dashboard')
  } catch (err) {
    toast.error('Invalid credentials ❌')
    error.value = err
  } finally {
    loading.value = false
  }
}
</script>
