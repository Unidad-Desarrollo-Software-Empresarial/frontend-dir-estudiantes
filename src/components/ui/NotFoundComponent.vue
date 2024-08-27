<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
    <div class="text-center">
      <h1 class="text-6xl font-bold text-blue-600 dark:text-blue-400">404</h1>
      <p class="text-xl text-gray-700 dark:text-gray-300 mt-4">
        Oops! The page you are looking for doesn't exist.
      </p>
      <router-link
        to="/"
        class="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:bg-blue-400 dark:hover:bg-blue-500 dark:focus:ring-blue-600"
      >
        Go back home
      </router-link>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
/* Additional styling (if needed) */
</style>
