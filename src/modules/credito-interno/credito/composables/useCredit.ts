import { ref } from 'vue';
import type { CreditItem } from '../types/credit';
import { mockData } from '../utils/mockData';

// Define la lógica y datos necesarios
export function useCredit() {
  const items = ref<CreditItem[]>(mockData);

  const handleAccion = (item: CreditItem, accion: keyof typeof item.acciones) => {
    if (item.acciones[accion]) {
      item.acciones[accion]();
    }
  };

  const handleSolicitud = (item: CreditItem) => {
    if (item.solicitud) {
      item.solicitud();
    }
  };

  return {
    items,
    handleAccion,
    handleSolicitud,
  };
}
