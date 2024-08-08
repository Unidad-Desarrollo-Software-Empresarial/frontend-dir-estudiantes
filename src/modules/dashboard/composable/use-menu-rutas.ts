import type { MenuRutasResponseDto, RutaInterface } from '../dto/menu-rutas-response.dto';

// Datos simulados para el ejemplo
const mockData: MenuRutasResponseDto = {
  success: true,
  rutas: [
    {
      id: 1,
      nombre: 'Dashboard',
      path: 'dashboard',
      ruta: '/dashboard',
      component: 'DashboardComponent',
      padre: 0,
      indexeddb: 1,
      privilegio: 1,
      rutasHijas: [
        {
          id: 2,
          nombre: 'Subruta 1',
          path: 'subruta1',
          ruta: '/dashboard/subruta1',
          component: 'Subruta1Component',
          padre: 1,
          indexeddb: 2,
          privilegio: 1
        },
        {
          id: 3,
          nombre: 'Subruta 2',
          path: 'subruta2',
          ruta: '/dashboard/subruta2',
          component: 'Subruta2Component',
          padre: 1,
          indexeddb: 3,
          privilegio: 1
        }
      ]
    },
    {
      id: 4,
      nombre: 'Settings',
      path: 'settings',
      ruta: '/settings',
      component: 'SettingsComponent',
      padre: 0,
      indexeddb: 4,
      privilegio: 1
    }
  ]
};

export const useMenuRutas = (rolId: number) => {
  // Simplemente retorna los datos simulados
  return {
    data: mockData
  };
}
