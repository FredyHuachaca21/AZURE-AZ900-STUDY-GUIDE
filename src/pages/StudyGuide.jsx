import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDownIcon, ChevronUpIcon, BookOpenIcon } from '@heroicons/react/24/outline';

const studyTopics = [
  {
    id: 'cloud-concepts',
    title: 'Descripción de los conceptos de la nube (25-30%)',
    description: 'Fundamentos de la computación en la nube y sus ventajas.',
    modules: [
      {
        title: 'Conceptos fundamentales',
        items: [
          'Definición de informática en la nube',
          'Modelo de responsabilidad compartida',
          'Modelos de nube: públicos, privados e híbridos',
          'Casos de uso por modelo de nube',
          'Modelo basado en consumo',
          'Modelos de precios en la nube',
          'Informática sin servidor'
        ],
        highlighted: true,
        link: '/responsibility-model'
      },
      {
        title: 'Ventajas de la nube',
        items: [
          'Alta disponibilidad y escalabilidad',
          'Confiabilidad y previsibilidad',
          'Seguridad y gobernanza',
          'Capacidad de administración'
        ]
      },
      {
        title: 'Tipos de servicio en la nube',
        items: [
          'Infraestructura como servicio (IaaS)',
          'Plataforma como servicio (PaaS)',
          'Software como servicio (SaaS)',
          'Casos de uso según el tipo de servicio'
        ]
      }
    ]
  },
  {
    id: 'azure-architecture-services',
    title: 'Descripción de la arquitectura y los servicios de Azure (35-40%)',
    description: 'Componentes y servicios esenciales en Azure.',
    modules: [
      {
        title: 'Componentes arquitectónicos',
        items: [
          'Regiones, pares de regiones y regiones soberanas',
          'Zonas de disponibilidad',
          'Centros de datos',
          'Recursos y grupos de recursos',
          'Suscripciones',
          'Grupos de administración',
          'Jerarquía de recursos y administración'
        ]
      },
      {
        title: 'Servicios de proceso y red',
        items: [
          'Tipos de proceso: contenedores, máquinas virtuales y funciones',
          'Opciones de máquina virtual',
          'Recursos necesarios para VMs',
          'Hospedaje de aplicaciones: aplicaciones web, contenedores, VMs',
          'Redes virtuales: Virtual Networks, subredes, emparejamiento, DNS, VPN Gateway, ExpressRoute',
          'Puntos de conexión públicos y privados'
        ]
      },
      {
        title: 'Servicios de almacenamiento',
        items: [
          'Comparación de servicios de almacenamiento',
          'Niveles de almacenamiento',
          'Opciones de redundancia',
          'Tipos de cuenta de almacenamiento',
          'Movimiento de archivos: AzCopy, Storage Explorer, Azure File Sync',
          'Opciones de migración: Azure Migrate y Azure Data Box'
        ]
      },
      {
        title: 'Identidad, acceso y seguridad',
        items: [
          'Servicios de directorio: Microsoft Entra ID y Domain Services',
          'Autenticación: SSO, MFA, autenticación sin contraseña',
          'Identidades externas: B2B y B2C',
          'Acceso condicional (Microsoft Entra)',
          'RBAC (Control de acceso basado en roles)',
          'Confianza cero',
          'Modelo de defensa en profundidad',
          'Microsoft Defender for Cloud'
        ]
      }
    ]
  },
  {
    id: 'management-governance',
    title: 'Descripción de la administración y la gobernanza de Azure (30-35%)',
    description: 'Administración de costos, gobernanza, cumplimiento y supervisión en Azure.',
    modules: [
      {
        title: 'Administración de costos',
        items: [
          'Factores que afectan costos',
          'Calculadora de precios vs. calculadora de TCO',
          'Funcionalidades de Azure Cost Management',
          'Etiquetas de recursos'
        ]
      },
      {
        title: 'Gobernanza y cumplimiento',
        items: [
          'Microsoft Purview en Azure',
          'Azure Policy',
          'Bloqueos de recursos'
        ]
      },
      {
        title: 'Administración e implementación de recursos',
        items: [
          'Azure Portal',
          'Azure Cloud Shell: CLI y PowerShell',
          'Azure Arc',
          'Infraestructura como código (IaC)',
          'Plantillas ARM'
        ]
      },
      {
        title: 'Supervisión',
        items: [
          'Azure Advisor',
          'Azure Service Health',
          'Azure Monitor: Log Analytics, alertas, Application Insights'
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
          Esta guía sigue el esquema oficial del examen AZ-900 actualizado a partir del 23 de enero de 2024. Explora cada sección para profundizar en los conceptos clave que debes conocer para aprobar la certificación.
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
          <li>Comienza con la <strong>Descripción de los conceptos de la nube</strong> para entender los fundamentos.</li>
          <li>Familiarízate con la <strong>Descripción de la arquitectura y los servicios de Azure</strong> y su funcionamiento.</li>
          <li>Aprende a usar las <strong>herramientas de administración y gobernanza</strong> para gestionar recursos.</li>
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