// Ruta: /src/pages/StudyGuide.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronDownIcon, 
  ChevronUpIcon, 
  BookOpenIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';
import { examCategories } from '../config/navigationConfig';

export default function StudyGuide() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center space-x-3 mb-6">
        <AcademicCapIcon className="h-8 w-8 text-azure-600 dark:text-azure-400" />
        <h1 className="text-3xl font-bold text-azure-700 dark:text-azure-400">Guía de Estudio para AZ-900</h1>
      </div>
      
      <div className="mb-8 bg-azure-50 dark:bg-azure-900/20 p-6 rounded-xl border border-azure-100 dark:border-azure-800 transition-colors">
        <h2 className="text-xl font-semibold text-azure-700 dark:text-azure-400 mb-4">Estructura del Examen</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Esta guía sigue el esquema oficial del examen AZ-900 actualizado a partir de enero de 2024. 
          Los temas están organizados según las tres categorías principales evaluadas en la certificación:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {examCategories.map((category) => (
            <div 
              key={category.id}
              className="bg-white dark:bg-gray-800 rounded-lg p-4 border-l-4 border border-gray-200 dark:border-gray-700 transition-colors"
              style={{ borderLeftColor: `rgb(${category.id === 'cloud-concepts' ? '79, 70, 229' : 
                                               category.id === 'azure-architecture' ? '2, 132, 199' : 
                                               '5, 150, 105'})` }}
            >
              <div className="flex justify-between items-start">
                <category.icon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs font-medium px-2 py-1 rounded-full">
                  {category.percentage}
                </span>
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mt-2">{category.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="space-y-6">
        {examCategories.map((category) => (
          <TopicAccordion key={category.id} category={category} />
        ))}
      </div>
      
      <div className="mt-12 p-6 bg-gradient-to-r from-azure-500 to-azure-700 dark:from-azure-600 dark:to-azure-800 rounded-lg text-white">
        <h2 className="text-xl font-semibold mb-4">Enfoque de estudio recomendado</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Comienza con la <strong>Descripción de los conceptos de la nube</strong> para entender los fundamentos.</li>
          <li>Familiarízate con la <strong>Descripción de la arquitectura y los servicios de Azure</strong> y su funcionamiento.</li>
          <li>Aprende a usar las <strong>herramientas de administración y gobernanza</strong> para gestionar recursos.</li>
          <li>Realiza pruebas de práctica para identificar áreas de mejora.</li>
        </ol>
        
        <div className="mt-6 pt-6 border-t border-azure-400 dark:border-azure-500">
          <div className="flex items-start">
            <CheckCircleIcon className="h-6 w-6 text-white mr-3 flex-shrink-0" />
            <p>
              Utiliza el <Link to="/exam-simulation" className="text-white font-medium underline">simulador de examen</Link> para poner 
              a prueba tus conocimientos en cada categoría o en un examen completo.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700 transition-colors">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Seguimiento de progreso</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          A medida que estudies cada tema, puedes marcar tu progreso para mantener un seguimiento de tu preparación.
          Esto te ayudará a identificar las áreas que necesitan más atención antes del examen.
        </p>
        
        <div className="flex justify-center">
          <Link 
            to="/cloud-concepts/what-is-cloud" 
            className="btn btn-primary px-6 py-3 flex items-center"
          >
            Comenzar con los conceptos fundamentales
            <ArrowRightIcon className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}

function TopicAccordion({ category }) {
  const [isOpen, setIsOpen] = useState(false);
  
  // Agrupamos los temas por módulos basados en la estructura del examen
  const groupTopicsByModule = () => {
    if (category.id === 'cloud-concepts') {
      // Categoría 1: Descripción de los conceptos de la nube
      return [
        {
          title: 'Descripción de la informática en la nube',
          items: category.topics.slice(0, 5).map(topic => ({  // what-is-cloud, shared-responsibility, cloud-models, consumption-model, serverless
            name: topic.title,
            path: topic.path
          })),
          highlighted: true
        },
        {
          title: 'Ventajas de usar servicios en la nube',
          items: [category.topics.find(t => t.id === 'benefits')].filter(Boolean).map(topic => ({
            name: topic.title,
            path: topic.path
          }))
        },
        {
          title: 'Tipos de servicio en la nube',
          items: [category.topics.find(t => t.id === 'service-types')].filter(Boolean).map(topic => ({
            name: topic.title,
            path: topic.path
          }))
        }
      ];
    } 
    else if (category.id === 'azure-architecture') {
      // Categoría 2: Descripción de la arquitectura y servicios de Azure
      return [
        {
          title: 'Componentes arquitectónicos principales',
          items: category.topics.slice(0, 4).map(topic => ({  // componentes arquitectónicos
            name: topic.title,
            path: topic.path
          })),
          highlighted: true
        },
        {
          title: 'Servicios de proceso y redes',
          items: category.topics.slice(4, 6).map(topic => ({  // compute, networking
            name: topic.title,
            path: topic.path
          }))
        },
        {
          title: 'Servicios de almacenamiento',
          items: [category.topics.find(t => t.id === 'storage')].filter(Boolean).map(topic => ({
            name: topic.title,
            path: topic.path
          }))
        },
        {
          title: 'Identidad, acceso y seguridad',
          items: [category.topics.find(t => t.id === 'identity-security')].filter(Boolean).map(topic => ({
            name: topic.title,
            path: topic.path
          }))
        }
      ];
    }
    else {
      // Categoría 3: Administración y gobernanza de Azure
      return [
        {
          title: 'Administración de costos',
          items: [category.topics.find(t => t.id === 'cost-management')].filter(Boolean).map(topic => ({
            name: topic.title,
            path: topic.path
          })),
          highlighted: true
        },
        {
          title: 'Gobernanza y cumplimiento',
          items: [category.topics.find(t => t.id === 'governance')].filter(Boolean).map(topic => ({
            name: topic.title,
            path: topic.path
          }))
        },
        {
          title: 'Administración e implementación',
          items: [category.topics.find(t => t.id === 'resource-management')].filter(Boolean).map(topic => ({
            name: topic.title,
            path: topic.path
          }))
        },
        {
          title: 'Herramientas de supervisión',
          items: [category.topics.find(t => t.id === 'monitoring')].filter(Boolean).map(topic => ({
            name: topic.title,
            path: topic.path
          }))
        }
      ];
    }
  };
  
  const modules = groupTopicsByModule();

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow transition-shadow">
      <button
        className="w-full flex justify-between items-center p-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div className="flex-1 text-left">
          <div className="flex items-center">
            <category.icon className="h-6 w-6 text-azure-600 dark:text-azure-400 mr-3" />
            <div>
              <h2 className="text-lg font-medium text-gray-900 dark:text-white">{category.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{category.description}</p>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 rounded-full px-3 py-1 mr-3">
            {category.percentage}
          </span>
          {isOpen ? (
            <ChevronUpIcon className="h-5 w-5 text-azure-600 dark:text-azure-400" />
          ) : (
            <ChevronDownIcon className="h-5 w-5 text-azure-600 dark:text-azure-400" />
          )}
        </div>
      </button>

      {isOpen && (
      <div className="p-4 bg-gray-50 dark:bg-gray-800/80 border-t border-gray-200 dark:border-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {modules.map((module, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm ${
                module.highlighted ? 'border-2 border-azure-400 dark:border-azure-500' : 'border border-gray-200 dark:border-gray-700'
              }`}
            >
              <div className="flex justify-between items-start">
                <h3 className="text-md font-medium text-gray-900 dark:text-white">{module.title}</h3>
              </div>
              <ul className="mt-3 space-y-2">
                {module.items.map((item, idx) => (
                  <li key={idx} className="text-gray-700 dark:text-gray-300 text-sm">
                    <Link 
                      to={item.path} 
                      className="flex items-start group"
                    >
                      <ArrowRightIcon className="h-4 w-4 text-azure-500 dark:text-azure-400 mr-2 mt-0.5 flex-shrink-0 transition-transform group-hover:translate-x-1" />
                      <span className="group-hover:text-azure-700 dark:group-hover:text-azure-300 transition-colors">{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 text-center">
          <Link 
            to={`${category.path}`} 
            className="inline-flex items-center text-azure-600 dark:text-azure-400 hover:text-azure-800 dark:hover:text-azure-300"
          >
            <BookOpenIcon className="h-4 w-4 mr-1" />
            Ver todos los temas de {category.shortTitle}
          </Link>
        </div>
      </div>
    )}
    </div>
  );
}