<template>
  <div class="min-h-screen bg-gray-50">
    <header class="bg-white shadow-md">
      <div class="container mx-auto p-4 flex justify-between items-center">
        <div class="logo">
          <h1 class="text-2xl font-bold text-gray-900">Mi Aplicación</h1>
        </div>
        <nav class="space-x-4">
          <router-link to="/" class="text-gray-700 hover:text-blue-500">Inicio</router-link>
          <router-link to="/credito" class="text-gray-700 hover:text-blue-500">Procesar Créditos</router-link>
          <router-link to="/about" class="text-gray-700 hover:text-blue-500">Acerca de</router-link>
        </nav>
      </div>
    </header>

    <main class="container mx-auto p-4">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>
