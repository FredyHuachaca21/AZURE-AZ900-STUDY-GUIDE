// Ruta: /src/layouts/AzureArchitectureLayout.jsx
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { ChevronRightIcon, ServerIcon } from '@heroicons/react/24/outline';

// Definición de enlaces de navegación para esta categoría
const navLinks = [
  { name: '¿Qué es Microsoft Azure?', path: 'what-is-azure' },
  { name: 'Cuentas de Azure', path: 'azure-accounts' },
  { name: 'Infraestructura física de Azure', path: 'physical-infrastructure' },
  { name: 'Infraestructura de administración', path: 'management-infrastructure' },
  { name: 'Servicios de proceso', path: 'compute' },
  { name: 'Servicios de red', path: 'networking' },
  { name: 'Servicios de almacenamiento', path: 'storage' },
  { name: 'Identidad, acceso y seguridad', path: 'identity-security' }
];

export default function AzureArchitectureLayout() {
  const location = useLocation();
  
  // Extraer el título de la página actual
  const getCurrentPageTitle = () => {
    const currentPath = location.pathname.split('/').pop();
    const currentLink = navLinks.find(link => link.path === currentPath);
    return currentLink ? currentLink.name : 'Arquitectura y servicios de Azure';
  };
  
  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* Barra lateral de navegación */}
      <aside className="md:w-1/4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors duration-200">
        <div className="flex items-center space-x-2 mb-6 text-azure-700 dark:text-azure-400">
          <ServerIcon className="h-6 w-6" />
          <h2 className="text-lg font-semibold">Arquitectura de Azure</h2>
        </div>
        
        <nav className="space-y-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={`/azure-architecture/${link.path}`}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-sm transition-colors ${
                  isActive
                    ? 'bg-azure-50 dark:bg-azure-900/30 text-azure-700 dark:text-azure-400 font-medium'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-azure-600 dark:hover:text-azure-400'
                }`
              }
            >
              <div className="flex items-center">
                <ChevronRightIcon className="h-4 w-4 mr-1 flex-shrink-0" />
                <span>{link.name}</span>
              </div>
            </NavLink>
          ))}
        </nav>
      </aside>
      
      {/* Contenido principal */}
      <div className="md:w-3/4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors duration-200">
        <div className="mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
          <div className="text-sm breadcrumbs text-gray-500 dark:text-gray-400 mb-2">
            <span>AZ-900</span> &gt; <span>Arquitectura y servicios de Azure</span> &gt; <span>{getCurrentPageTitle()}</span>
          </div>
          <h1 className="text-2xl font-bold text-azure-700 dark:text-azure-400">{getCurrentPageTitle()}</h1>
        </div>
        
        {/* Aquí se renderizará el componente de la ruta anidada */}
        <Outlet />
      </div>
    </div>
  );
}