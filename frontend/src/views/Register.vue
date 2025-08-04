<template>
  <!-- Full-screen green gradient -->
  <div class="min-h-screen w-full flex items-center justify-center !bg-gradient-to-tr from-green-500 via-green-400 to-green-300">
    <div class="bg-white rounded-xl shadow-xl max-w-md w-full p-8 mx-4">
      <h2 class="text-3xl font-semibold text-center mb-8 text-gray-800">Register</h2>

      <form @submit.prevent="handleRegister" class="space-y-6">
        <input
          v-model="name"
          type="text"
          placeholder="Name"
          class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />

        <button
          :disabled="loading"
          class="w-full py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition disabled:opacity-50"
        >
          {{ loading ? 'Registering...' : 'Register' }}
        </button>
      </form>

      <p v-if="error" class="text-red-600 text-sm mt-4 text-center">{{ error }}</p>

      <p class="mt-6 text-center text-gray-600">
        Already have an account?
        <router-link to="/login" class="text-green-600 font-medium hover:underline">Login</router-link>
      </p>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../store/authStore'
import { useRouter } from 'vue-router'

const name = ref('')
const email = ref('')
const password = ref('')
const error = ref('')
const loading = ref(false)

const auth = useAuthStore()
const router = useRouter()

async function handleRegister() {
  error.value = ''
  loading.value = true
  try {
    await auth.register(name.value, email.value, password.value)
    router.push('/login')
  } catch (err) {
    error.value = err
  } finally {
    loading.value = false
  }
}
</script>
