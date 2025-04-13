// Ruta: /src/components/UnderConstruction.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  WrenchScrewdriverIcon, 
  ArrowLeftIcon,
  HomeIcon
} from '@heroicons/react/24/outline';

export default function UnderConstruction() {
  const location = useLocation();
  
  // Extraer el nombre de la página actual desde la URL
  const getPageName = () => {
    const pathSegments = location.pathname.split('/');
    const lastSegment = pathSegments[pathSegments.length - 1];
    
    // Convertir formato-url a Formato con Espacios
    return lastSegment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };
  
  // Obtener la ruta para regresar (un nivel arriba)
  const getBackPath = () => {
    const pathSegments = location.pathname.split('/');
    pathSegments.pop();
    return pathSegments.join('/') || '/';
  };
  
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      <div className="bg-yellow-50 dark:bg-yellow-900/30 w-24 h-24 rounded-full flex items-center justify-center mb-6">
        <WrenchScrewdriverIcon className="h-12 w-12 text-yellow-500 dark:text-yellow-400" />
      </div>
      
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
        {getPageName()} - En Desarrollo
      </h2>
      
      <p className="text-gray-600 dark:text-gray-400 max-w-md mb-6">
        Estamos trabajando para crear contenido detallado sobre este tema. 
        El contenido estará disponible pronto como parte de nuestra guía completa para el examen AZ-900.
      </p>
      
      <div className="flex flex-wrap justify-center gap-4 mt-2">
        <Link 
          to={getBackPath()} 
          className="flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
        >
          <ArrowLeftIcon className="h-4 w-4 mr-2" />
          Volver
        </Link>
        
        <Link 
          to="/study-guide" 
          className="flex items-center px-4 py-2 bg-azure-100 dark:bg-azure-900/30 text-azure-700 dark:text-azure-400 rounded-md hover:bg-azure-200 dark:hover:bg-azure-900/50 transition-colors"
        >
          Guía de Estudio
        </Link>
        
        <Link 
          to="/" 
          className="flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
        >
          <HomeIcon className="h-4 w-4 mr-2" />
          Inicio
        </Link>
      </div>
    </div>
  );
}