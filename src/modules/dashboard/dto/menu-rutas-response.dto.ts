export interface MenuRutasResponseDto {
    success: boolean;
    rutas:   RutaInterface[];
}

export interface RutaInterface {
    id:     number;
    nombre: string;
    path: string;
    ruta:   string;
    component: string;
    padre:  number;
    indexeddb: number;
    privilegio: number;
    rutasHijas?: RutaInterface[];
}
