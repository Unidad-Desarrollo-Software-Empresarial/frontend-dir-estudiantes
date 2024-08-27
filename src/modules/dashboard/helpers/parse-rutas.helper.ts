// import { type Router } from 'vue-router'
import type { RutaInterface } from '../interfaces/ruta.interface'



export const parseRutasHelper = (rutas: RutaInterface[]) => {

    const rutasPadre = rutas.filter((ruta) => ruta.ruta_padre === 0)
    const rutasHijas = rutas.filter((ruta) => ruta.ruta_padre !== 0)
    const rutasParseadas = rutasPadre.map((rutaPadre) => {
        const rutasHijasParseadas = rutasHijas.filter((rutaHija) => rutaHija.ruta_padre === rutaPadre.ruta_id)
        return {
            ...rutaPadre,
            rutas_hijas: rutasHijasParseadas
        }
    })
    return rutasParseadas
}
