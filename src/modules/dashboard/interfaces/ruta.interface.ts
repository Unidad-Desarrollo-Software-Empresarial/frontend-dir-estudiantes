export interface RutaInterface {
    ruta_id: number;
    ruta_nombre: string;
    ruta_ubicacion: string;
    ruta_padre: number;
    ruta_url: string;
    ruta_componente: string;
    ruta_indexedb: number;
    ruta_estado: boolean;
    ruta_created_at: Date;
    ruta_updated_at: Date;
    rutas_hijas?: RutaInterface[];
}
