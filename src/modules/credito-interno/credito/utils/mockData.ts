import type { CreditItem } from '../types/credit';

export const mockData: CreditItem[] = [
  {
    id: '1',
    idBanner: '12345',
    nombres: 'Juan',
    apellidos: 'Pérez',
    carrera: 'Ingeniería',
    identificacion: '987654321',
    periodo: '2024-1',
    matricula: '0001',
    entrada: '01/01/2024',
    cuotas: '5',
    fechaCreacion: '01/01/2024',
    estado: 'Pendiente',
    prefactura: 'Verificar',
    rolPagos: 'Verificar',
    pago: 'Verificar',
    ultimaModificacion: 'Admin',
    acciones: {
      aceptar: () => console.log('Aceptar'),
      rechazar: () => console.log('Rechazar'),
      enviarBanner: () => console.log('Enviar a Banner'),
    },
    solicitud: () => console.log('Descargar'),
  },
  // Añade más registros según sea necesario
];
