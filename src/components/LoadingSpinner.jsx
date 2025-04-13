// Ruta: /src/components/LoadingSpinner.jsx
import React from 'react';

export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-64">
      <div className="relative">
        <div className="w-12 h-12 rounded-full absolute border-4 border-solid border-gray-200 dark:border-gray-700 transition-colors"></div>
        <div className="w-12 h-12 rounded-full animate-spin absolute border-4 border-solid border-azure-500 dark:border-azure-400 border-t-transparent transition-colors"></div>
      </div>
      <span className="ml-6 text-azure-600 dark:text-azure-400 font-medium">Cargando contenido...</span>
    </div>
  );
}