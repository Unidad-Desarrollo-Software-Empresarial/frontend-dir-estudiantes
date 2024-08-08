import { type Router } from 'vue-router'
import type { RutaInterface } from '../dto/menu-rutas-response.dto'

// Definiciones de tipos simulados (puedes ajustar según tus necesidades)
interface SimulatedEstudiante {
    id: number;
    nombre: string;
    // Otros campos según tu necesidad
}

interface SimulatedPersonal {
    id: number;
    nombre: string;
    // Otros campos según tu necesidad
}

// Datos simulados
const mockEstudiantes: SimulatedEstudiante[] = [
    { id: 1, nombre: 'Estudiante 1' },
    { id: 2, nombre: 'Estudiante 2' },
    // Más datos simulados
];

const mockPersonal: SimulatedPersonal[] = [
    { id: 1, nombre: 'Personal 1' },
    { id: 2, nombre: 'Personal 2' },
    // Más datos simulados
];

export const parseObjectRutas = (rutas: RutaInterface[], router: Router) => {
    // Cargar datos simulados
    loadMockData(rutas);

    const existingRoutes = router.getRoutes().map((route) => route.name);
    rutas.forEach((ruta) => {
        if (!existingRoutes.includes(ruta.nombre)) {
            router.addRoute({
                path: ruta.path,
                name: ruta.ruta,
                component: () => import(/* @vite-ignore */ `../../../${ruta.component}`),
                meta: {
                    requiresAuth: true,
                    transition: 'fade',
                },
            });
        }
    });

    const rutasPadre = rutas.filter((ruta) => ruta.padre === 0);
    const rutasHijas = rutas.filter((ruta) => ruta.padre !== 0);
    const rutasParseadas = rutasPadre.map((rutaPadre) => {
        const rutasHijasParseadas = rutasHijas.filter((rutaHija) => rutaHija.padre === rutaPadre.id);
        return {
            ...rutaPadre,
            rutasHijas: rutasHijasParseadas,
        };
    });
    return rutasParseadas;
}

const loadMockData = (rutas: RutaInterface[]) => {
    const arrNumber = rutas.map((r) => r.indexeddb);

    const dataString = JSON.stringify(rutas.map((r) => r.indexeddb));
    const currentHash = hashDataSync(dataString);

    // Obtener el hash almacenado
    const storedHash = localStorage.getItem('indexedDataHash');

    // Si los hashes coinciden, salir de la función
    if (storedHash === currentHash) {
        return;
    }
    localStorage.setItem('indexedDataHash', currentHash);

    const setIndexed = new Set(arrNumber);
    const arrIndexed = [...setIndexed];

    // Procesar datos simulados
    if (arrIndexed.includes(3)) {
        // Simular adición de estudiantes y personal
        console.log('Datos simulados de estudiantes:', mockEstudiantes);
        console.log('Datos simulados de personal:', mockPersonal);
        return;
    }

    if (arrIndexed.includes(2)) {
        // Simular adición de personal
        console.log('Datos simulados de personal:', mockPersonal);
    }

    if (arrIndexed.includes(1)) {
        // Simular adición de estudiantes
        console.log('Datos simulados de estudiantes:', mockEstudiantes);
    }
}

export const removeRoutesOnLogout = (router: Router) => {
    router.getRoutes().forEach((route) => {
        const arr = ['dashboard', 'login', 'not-found'];
        const isDeletable = arr.includes(route.name as string);

        if (!isDeletable) {
            router.removeRoute(route.name as string);
        }
    });
}

// Función de hash síncrona para la simulación
const hashDataSync = (data: string): string => {
    // Simulación de hash
    let hash = 0;
    for (let i = 0; i < data.length; i++) {
        const char = data.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash |= 0; // Convert to 32bit integer
    }
    return hash.toString(16);
}
