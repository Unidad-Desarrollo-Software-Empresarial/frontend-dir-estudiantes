<template>
  <DashboardLayout>
    <div class="h-2"></div>
    <div class="flex justify-between border rounded p-2 mx-2">
      <h2
        class="text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white"
      >
        Créditos realizados por el estudiante
      </h2>
      <button
        type="button"
        @click="navigate"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 m-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Crear Crédito
      </button>
    </div>
  </DashboardLayout>
</template>

<script setup lang="ts">
import DashboardLayout from '@/modules/dashboard/layouts/DashboardLayout.vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const navigate = () => {
  console.log('click')
  router.push({ name: '/crear-creditos-internos-estudiante' })
}
</script>

<style scoped></style>
