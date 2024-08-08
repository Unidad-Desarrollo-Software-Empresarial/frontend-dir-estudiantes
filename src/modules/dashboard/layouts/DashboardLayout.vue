<template>
    <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div class="px-3 py-3 lg:px-5 lg:pl-3">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <div class="flex items-center justify-start rtl:justify-end">
            <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar"
                    aria-controls="logo-sidebar" type="button"
                    class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
              <span class="sr-only">Open sidebar</span>
              <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                   xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd" fill-rule="evenodd"
                      d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
                </path>
              </svg>
            </button>
            <div @click="navigateToDashboard" class="flex ms-2 md:me-24">
              <img src="https://res.cloudinary.com/dx7qfps6d/image/upload/v1689608536/dev-deploys/eqayqo984zyobeq6zzxf.png"
                   class="h-11 me-3" alt="Puce Ibarra Logo"/>
            </div>
          </div>
          <!-- Icon Profile -->
          <div class="flex items-center">
            <div class="flex items-center ms-3">
              <div>
                <button type="button"
                        class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                        aria-expanded="false" data-dropdown-toggle="dropdown-user">
                  <span class="sr-only">Open user menu</span>
                  <img class="w-8 h-8 rounded-full"
                       src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                       alt="user photo">
                </button>
              </div>
              <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                   id="dropdown-user">
                <div class="px-4 py-3" role="none">
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                    {{ userName }}
                  </p>
                </div>
                <ul class="py-1" role="none">
                  <li>
                    <span @click="toggleTheme"
                          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:cursor-pointer dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          role="menuitem">Cambiar tema</span>
                  </li>
                  <li>
                    <span @click="logout"
                          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:cursor-pointer dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          role="menuitem">Cerrar Sesión</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  
    <aside id="logo-sidebar"
           class="fixed top-0 left-0 z-10 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
           aria-label="Sidebar">
      <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        <ul class="space-y-2 font-medium">
          <li v-for="(item, index) in routes" :key="index">
            <a @click="navigate(item.route)"
               class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 hover:cursor-pointer dark:hover:bg-gray-700 group">
              <span class="ms-1">{{ item.name }}</span>
            </a>
            <div v-if="item.childRoutes?.length > 0">
              <ul>
                <li v-for="(subItem, subIndex) in item.childRoutes" :key="subIndex">
                  <a @click="navigate(subItem.route)"
                     class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 hover:cursor-pointer dark:hover:bg-gray-700 group">
                    <span class="ms-4 font-thin">{{ subItem.name }}</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  
    <div class="p-4 sm:ml-64">
      <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
        <slot />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const userName = ref('Usuario'); // Nombre de usuario ficticio o puedes obtenerlo de otra forma
  const routes = ref([
    { name: 'Home', route: '/' },
    { name: 'Dashboard', route: '/dashboard', childRoutes: [
        { name: 'Subroute 1', route: '/dashboard/subroute1' },
        { name: 'Subroute 2', route: '/dashboard/subroute2' }
      ]
    }
  ]);
  
  const navigate = (routeName: string) => {
    if (routeName) router.push({ name: routeName });
  };
  
  const navigateToDashboard = () => {
    router.push({ name: 'dashboard' });
  };
  
  const logout = () => {
    // Lógica de cierre de sesión simplificada
    router.push({ name: 'login' });
  };
  
  const toggleTheme = () => {
    // Funcionalidad para cambiar el tema
    document.body.classList.toggle('dark');
  };
  </script>
  
  <style scoped></style>
  