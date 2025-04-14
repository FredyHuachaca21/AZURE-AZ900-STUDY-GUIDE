import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-800 text-gray-700 dark:text-white py-8 border-t border-gray-200 dark:border-gray-700 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">AZ-900 Study Guide</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Recursos para prepararte para la certificación Microsoft Azure Fundamentals.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-azure-600 dark:text-gray-300 dark:hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/study-guide" className="text-gray-600 hover:text-azure-600 dark:text-gray-300 dark:hover:text-white transition-colors">
                  Guía de Estudio
                </Link>
              </li>
              <li>
                <Link to="/exam-simulation" className="text-gray-600 hover:text-azure-600 dark:text-gray-300 dark:hover:text-white transition-colors">
                  Simulador de Examen
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-600 hover:text-azure-600 dark:text-gray-300 dark:hover:text-white transition-colors">
                  Recursos
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Enlaces Externos</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://docs.microsoft.com/es-es/learn/certifications/exams/az-900" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-azure-600 dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  Microsoft Learn
                </a>
              </li>
              <li>
                <a 
                  href="https://azure.microsoft.com/es-es/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-azure-600 dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  Microsoft Azure
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-6 text-center text-gray-500 dark:text-gray-400">
          <p>&copy; {currentYear} AZ-900 Study Guide - Proyecto de aprendizaje - No afiliado a Microsoft</p>
        </div>
      </div>
    </footer>
  );
}