<template>
  <div class="overflow-x-auto">
    <table class="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          <th
            v-for="column in columns"
            :key="column.name"
            v-show="column.visible"
            class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            {{ column.label }}
          </th>
          <th v-if="actionsVisible" class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
          <th v-if="solicitudVisible" class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Solicitud</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr v-for="item in data" :key="item.id">
          <td
            v-for="column in columns"
            :key="column.name"
            v-show="column.visible"
            class="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900"
          >
            {{ item[column.name] }}
          </td>
          <td v-if="actionsVisible" class="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-500">
            <button
              @click="() => emitAccion(item, 'aceptar')"
              class="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5"
            >
              Aceptar
            </button>
            <button
              @click="() => emitAccion(item, 'rechazar')"
              class="text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-1.5"
            >
              Rechazar
            </button>
            <button
              @click="() => emitAccion(item, 'enviarBanner')"
              class="text-white bg-yellow-500 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-3 py-1.5"
            >
              Enviar a Banner
            </button>
          </td>
          <td v-if="solicitudVisible" class="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-500">
            <button
              @click="() => emitSolicitud(item)"
              class="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-1.5"
            >
              Descargar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';
import type { CreditItem } from '../types/credit';

// Define las propiedades del componente
const props = defineProps<{
  data: CreditItem[];
  columns: { name: string; label: string; visible: boolean }[];
  actionsVisible: boolean;
  solicitudVisible: boolean;
}>();

// Define los eventos emitidos
const emit = defineEmits<{
  (event: 'editItem', item: CreditItem, accion: keyof CreditItem['acciones']): void;
  (event: 'downloadRequest', item: CreditItem): void;
}>();

// Funciones para emitir eventos
const emitAccion = (item: CreditItem, accion: keyof CreditItem['acciones']) => {
  emit('editItem', item, accion);
};

const emitSolicitud = (item: CreditItem) => {
  emit('downloadRequest', item);
};
</script>

<style scoped>
/* Estilos adicionales para botones y tabla */
</style>
