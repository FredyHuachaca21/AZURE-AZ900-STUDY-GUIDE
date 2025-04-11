import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDownIcon, ChevronUpIcon, BookOpenIcon } from '@heroicons/react/24/outline';

const studyTopics = [
  {
    id: 'cloud-concepts',
    title: 'Conceptos de la nube (20-25%)',
    description: 'Fundamentos y beneficios del cloud computing.',
    modules: [
      {
        title: 'Beneficios de la nube',
        items: [
          'Alta disponibilidad',
          'Escalabilidad',
          'Elasticidad',
          'Agilidad',
          'Recuperación ante desastres'
        ]
      },
      {
        title: 'Modelos de servicio en la nube',
        items: [
          'IaaS (Infraestructura como Servicio)',
          'PaaS (Plataforma como Servicio)',
          'SaaS (Software como Servicio)',
          'Comparación de modelos'
        ]
      },
      {
        title: 'Tipos de nubes',
        items: [
          'Nube pública',
          'Nube privada',
          'Nube híbrida',
          'Ventajas y desventajas de cada tipo'
        ]
      },
      {
        title: 'Modelo de Responsabilidad Compartida',
        items: [
          'Responsabilidades del proveedor',
          'Responsabilidades del cliente',
          'Variación por modelo de servicio'
        ],
        highlighted: true,
        link: '/responsibility-model'
      }
    ]
  },
  {
    id: 'core-services',
    title: 'Servicios principales de Azure (15-20%)',
    description: 'Recursos y servicios fundamentales disponibles en Azure.',
    modules: [
      {
        title: 'Componentes arquitectónicos de Azure',
        items: [
          'Regiones y pares de regiones',
          'Zonas de disponibilidad',
          'Grupos de recursos',
          'Suscripciones',
          'Grupos de administración',
          'Azure Resource Manager'
        ]
      },
      {
        title: 'Recursos de proceso y red',
        items: [
          'Máquinas virtuales',
          'Azure App Service',
          'Azure Container Instances',
          'Azure Kubernetes Service',
          'Redes virtuales',
          'VPN Gateway',
          'Azure ExpressRoute'
        ]
      },
      {
        title: 'Almacenamiento y bases de datos',
        items: [
          'Cuentas de almacenamiento',
          'Azure Blob Storage',
          'Azure Files',
          'Azure Cosmos DB',
          'Azure SQL Database',
          'Azure Database for MySQL',
          'Azure Database for PostgreSQL'
        ]
      }
    ]
  },
  {
    id: 'management-tools',
    title: 'Soluciones principales y herramientas de administración (10-15%)',
    description: 'Herramientas para gestionar y trabajar con Azure.',
    modules: [
      {
        title: 'Herramientas de administración de Azure',
        items: [
          'Portal de Azure',
          'Azure PowerShell',
          'CLI de Azure',
          'Azure Cloud Shell',
          'Azure Advisor',
          'ARM Templates'
        ]
      },
      {
        title: 'Herramientas de supervisión',
        items: [
          'Azure Monitor',
          'Azure Service Health',
          'Azure Application Insights'
        ]
      }
    ]
  },
  {
    id: 'security',
    title: 'Características de seguridad general y de red (10-15%)',
    description: 'Servicios para proteger los recursos e infraestructuras en Azure.',
    modules: [
      {
        title: 'Herramientas de seguridad',
        items: [
          'Azure Security Center',
          'Azure Sentinel',
          'Azure Key Vault',
          'Azure DDoS Protection'
        ]
      },
      {
        title: 'Seguridad de red',
        items: [
          'Grupos de seguridad de red (NSG)',
          'Firewall de Azure',
          'Configuraciones de red seguras'
        ]
      }
    ]
  },
  {
    id: 'identity',
    title: 'Identidad, gobernanza, privacidad y cumplimiento (15-20%)',
    description: 'Gestión de identidades y cumplimiento normativo en Azure.',
    modules: [
      {
        title: 'Servicios de identidad',
        items: [
          'Azure Active Directory',
          'Autenticación multifactor',
          'Acceso condicional',
          'Control de acceso basado en roles (RBAC)'
        ]
      },
      {
        title: 'Gobernanza',
        items: [
          'Políticas de Azure',
          'Bloqueos de recursos',
          'Etiquetas de recursos',
          'Azure Blueprints'
        ]
      },
      {
        title: 'Privacidad y cumplimiento',
        items: [
          'Centro de confianza de Microsoft',
          'Términos de servicios en línea (OST)',
          'Declaración de privacidad de Microsoft',
          'Documentación de cumplimiento normativo'
        ]
      }
    ]
  },
  {
    id: 'cost-sla',
    title: 'Gestión de costos y SLA (10-15%)',
    description: 'Precios, costos y acuerdos de nivel de servicio en Azure.',
    modules: [
      {
        title: 'Planificación y gestión de costos',
        items: [
          'Calculadora de precios',
          'Calculadora de TCO',
          'Opciones de compra de Azure',
          'Azure Cost Management'
        ]
      },
      {
        title: 'Acuerdos de nivel de servicio (SLA)',
        items: [
          'Definición de SLA en Azure',
          'Niveles de servicio para servicios específicos',
          'Cálculo de SLA compuesto',
          'Mejora de SLA de aplicaciones'
        ]
      }
    ]
  }
];

export default function StudyGuide() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-azure-700 mb-6">Guía de Estudio para AZ-900</h1>
      
      <div className="mb-6 bg-azure-50 p-4 rounded-lg">
        <p className="text-gray-700">
          Esta guía sigue el esquema oficial del examen AZ-900. Explora cada sección para profundizar
          en los conceptos clave que debes conocer para aprobar la certificación.
        </p>
      </div>
      
      <div className="space-y-6">
        {studyTopics.map((topic) => (
          <TopicAccordion key={topic.id} topic={topic} />
        ))}
      </div>
      
      <div className="mt-12 p-6 bg-gradient-to-r from-azure-500 to-azure-700 rounded-lg text-white">
        <h2 className="text-xl font-semibold mb-4">Enfoque de estudio recomendado</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Comienza con los <strong>Conceptos de la nube</strong> para entender los fundamentos.</li>
          <li>Familiarízate con los <strong>Servicios principales de Azure</strong> y su funcionamiento.</li>
          <li>Aprende a usar las <strong>herramientas de administración</strong> para gestionar recursos.</li>
          <li>Comprende en profundidad el <strong>Modelo de Responsabilidad Compartida</strong>.</li>
          <li>Realiza pruebas de práctica para identificar áreas de mejora.</li>
        </ol>
      </div>
    </div>
  );
}

function TopicAccordion({ topic }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button 
        className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex-1 text-left">
          <h2 className="text-lg font-medium text-gray-900">{topic.title}</h2>
          <p className="text-gray-600 text-sm mt-1">{topic.description}</p>
        </div>
        {isOpen ? (
          <ChevronUpIcon className="h-5 w-5 text-azure-600" />
        ) : (
          <ChevronDownIcon className="h-5 w-5 text-azure-600" />
        )}
      </button>
      
      {isOpen && (
        <div className="p-4 bg-gray-50 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {topic.modules.map((module, index) => (
              <div 
                key={index} 
                className={`p-4 rounded-lg bg-white shadow-sm ${
                  module.highlighted ? 'border-2 border-azure-400' : ''
                }`}
              >
                <div className="flex justify-between items-start">
                  <h3 className="text-md font-medium text-gray-900">{module.title}</h3>
                  {module.link && (
                    <Link 
                      to={module.link} 
                      className="flex items-center text-sm text-azure-600 hover:text-azure-800"
                    >
                      <BookOpenIcon className="h-4 w-4 mr-1" />
                      Ver más
                    </Link>
                  )}
                </div>
                <ul className="mt-2 space-y-1">
                  {module.items.map((item, idx) => (
                    <li key={idx} className="text-gray-700 text-sm flex items-start">
                      <span className="mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}