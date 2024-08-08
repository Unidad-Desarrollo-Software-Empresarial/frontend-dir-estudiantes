export interface CreditItem {
  id: string;
  idBanner: string;
  nombres: string;
  apellidos: string;
  carrera: string;
  identificacion: string;
  periodo: string;
  matricula: string;
  entrada: string;
  cuotas: string;
  fechaCreacion: string;
  estado: string;
  prefactura: string;
  rolPagos: string;
  pago: string;
  ultimaModificacion: string;
  acciones: {
    aceptar: () => void;
    rechazar: () => void;
    enviarBanner: () => void;
  };
  solicitud: () => void;
  [key: string]: any; // Firma de índice
}
