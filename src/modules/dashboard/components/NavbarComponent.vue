<template>
  <div>
    <nav class="bg-white border-gray-200 dark:bg-gray-900" id="navbar-user">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <DrawerComponent />

        <span class="text-2xl font-semibold whitespace-nowrap dark:text-white"
          >Direccion de Estudiantes</span
        >

        <DropdownProfileComponent />
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import DropdownProfileComponent from './DropdownProfileComponent.vue'
import DrawerComponent from './DrawerComponent.vue'
</script>

<style scoped></style>
