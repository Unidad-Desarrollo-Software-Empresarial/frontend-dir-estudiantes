<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Procesar Créditos</h1>
    <CustomCreditTable
      :data="items"
      :columns="columns"
      :actionsVisible="true"
      :solicitudVisible="true"
      @editItem="handleAccion"
      @downloadRequest="handleSolicitud"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import CustomCreditTable from '../components/CustomCreditTable.vue';
import type { CreditItem } from '../types/credit';
import { mockData } from '../utils/mockData';

// Definir columnas como una constante
const columns = [
  { name: 'idBanner', label: 'Id Banner', visible: true },
  { name: 'nombres', label: 'Nombres', visible: true },
  { name: 'apellidos', label: 'Apellidos', visible: true },
  { name: 'carrera', label: 'Carrera', visible: true },
  { name: 'identificacion', label: 'Identificación', visible: true },
  { name: 'periodo', label: 'Periodo', visible: true },
  { name: 'matricula', label: 'Matrícula', visible: true },
  { name: 'entrada', label: 'Entrada', visible: true },
  { name: 'cuotas', label: 'Cuotas', visible: true },
  { name: 'fechaCreacion', label: 'Fecha Creación', visible: true },
  { name: 'estado', label: 'Estado', visible: true },
  { name: 'prefactura', label: 'Prefactura', visible: true },
  { name: 'rolPagos', label: 'Rol de Pagos', visible: true },
  { name: 'pago', label: 'Pago', visible: true },
  { name: 'ultimaModificacion', label: 'Última Modificación', visible: true }
];

// Usar `mockData` para datos de prueba
const items = ref<CreditItem[]>(mockData);

// Función para manejar acciones
const handleAccion = (item: CreditItem, accion: keyof CreditItem['acciones']) => {
  switch (accion) {
    case 'aceptar':
      item.acciones.aceptar();
      break;
    case 'rechazar':
      item.acciones.rechazar();
      break;
    case 'enviarBanner':
      item.acciones.enviarBanner();
      break;
  }
};

// Función para manejar solicitudes
const handleSolicitud = (item: CreditItem) => {
  item.solicitud();
};
</script>

<style scoped>
/* Estilos específicos de la página aquí */
</style>
