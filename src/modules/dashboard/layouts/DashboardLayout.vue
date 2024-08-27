<template>
  <NavbarComponent />
  <div class="h-screen w-screen bg-slate-100 dark:bg-slate-800">
    <!-- drawer init and toggle -->
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import NavbarComponent from '../components/NavbarComponent.vue'
</script>

<style scoped></style>
