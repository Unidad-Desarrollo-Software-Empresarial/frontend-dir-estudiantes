<template>
  <div>
    <button
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      type="button"
      data-drawer-target="drawer-disable-body-scrolling"
      data-drawer-show="drawer-disable-body-scrolling"
      data-drawer-body-scrolling="false"
      aria-controls="drawer-disable-body-scrolling"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </button>
    <!--  -->
    <!--  -->
    <!--  -->
    <!-- drawer component -->
    <!--  -->
    <!--  -->
    <!--  -->
    <div
      id="drawer-disable-body-scrolling"
      class="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-64 dark:bg-gray-800"
      tabindex="-1"
      aria-labelledby="drawer-disable-body-scrolling-label"
    >
      <h5
        id="drawer-disable-body-scrolling-label"
        class="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
      >
        Menu
      </h5>
      <button
        type="button"
        data-drawer-hide="drawer-disable-body-scrolling"
        aria-controls="drawer-disable-body-scrolling"
        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <svg
          class="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
        <span class="sr-only">Close menu</span>
      </button>
      <div class="py-4 overflow-y-auto">
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <ul class="space-y-2 font-medium">
          <li>
            <RouterLink
              to="/dashboard"
              active-class="rounded border"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <div>
                <span class="ms-3">Dashboard</span>
              </div>
            </RouterLink>
          </li>
          <li v-for="ruta in rutas" :key="ruta.ruta_id">
            <button
              class="flex w-full p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              :aria-controls="`${ruta.ruta_id}`"
              :data-collapse-toggle="`${ruta.ruta_id}`"
            >
              <div class="flex w-full justify-between">
                <span class="ms-3">{{ ruta.ruta_nombre }}</span>
                <svg
                  class="w-3 h-3 my-auto"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </div>
            </button>
            <div v-if="ruta.rutas_hijas && ruta.rutas_hijas.length > 0">
              <ul :id="`${ruta.ruta_id}`" class="hidden py-2 space-y-2">
                <li v-for="subruta in ruta.rutas_hijas" :key="subruta.ruta_nombre">
                  <RouterLink
                    :to="subruta.ruta_url"
                    active-class="rounded border"
                    class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >{{ subruta.ruta_nombre }}</RouterLink
                  >
                </li>
              </ul>
            </div>
            <!--  -->
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { initFlowbite } from 'flowbite'
import { onMounted } from 'vue'
import { parseRutasHelper } from '../helpers/parse-rutas.helper'
import { useAutenticacionStore } from '@/stores/autenticacion.store'

const authStore = useAutenticacionStore()

const rutas = parseRutasHelper(authStore.rutas || [])
console.log({ rutas })
onMounted(() => {
  initFlowbite()
})
</script>

<style scoped></style>
