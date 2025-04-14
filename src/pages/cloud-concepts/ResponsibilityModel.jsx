// Ruta: /src/pages/cloud-concepts/ResponsibilityModel.jsx
import { useState } from 'react';
import { 
  ArrowRightIcon, 
  InformationCircleIcon, 
  ChevronRightIcon,
  ShieldCheckIcon,
  ServerIcon,
  CloudIcon,
  DocumentTextIcon,
  QuestionMarkCircleIcon,
  CheckCircleIcon,
  XCircleIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';

export default function ResponsibilityModel() {
  const [activeTab, setActiveTab] = useState('concept');
  const [selectedService, setSelectedService] = useState('saas');
  const [highlightedSection, setHighlightedSection] = useState('customer');
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showExplanations, setShowExplanations] = useState({});
  
  // Definición de las secciones del modelo de responsabilidad
  const sections = [
    {
      id: 'customer',
      title: 'Responsabilidad siempre retenida por el cliente',
      items: [
        'La información y los datos almacenados en la nube.',
        'Los dispositivos que pueden conectarse a la nube (teléfonos móviles, equipos, etc.).',
        'Las cuentas e identidades de las personas, servicios y dispositivos de la organización'
      ],
      color: 'bg-yellow-50 dark:bg-yellow-900/30 border-yellow-200 dark:border-yellow-800',
      icon: ShieldCheckIcon,
      description: 'Sin importar el modelo de servicio en la nube, el cliente siempre mantiene la responsabilidad sobre estos elementos.'
    },
    {
      id: 'varies',
      title: 'Responsabilidad varía según el tipo de servicio',
      items: [
        'Infraestructura de identidad y directorio',
        'Aplicaciones',
        'Controles de red',
        'Sistema operativo'
      ],
      color: 'bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800',
      icon: ServerIcon,
      description: 'La responsabilidad de estos componentes cambia dependiendo de si estás usando SaaS, PaaS o IaaS.'
    },
    {
      id: 'provider',
      title: 'Responsabilidad transferida al proveedor de la nube',
      items: [
        'Hosts físicos',
        'Red física',
        'Centro de datos físico'
      ],
      color: 'bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800',
      icon: CloudIcon,
      description: 'Microsoft asume la responsabilidad de la infraestructura física en todos los modelos de nube (SaaS, PaaS, IaaS).'
    }
  ];
  
  // Definición de los ejemplos de casos de uso
  const examples = [
    {
      id: 'saas-example',
      title: 'SaaS - Software como Servicio',
      service: 'saas',
      description: 'El proveedor gestiona casi todo, tú solo te preocupas por tus datos y accesos.',
      example: 'Microsoft 365, Gmail, Salesforce',
      customerResponsibility: [
        'Datos e información almacenada',
        'Gestión de acceso de los usuarios',
        'Dispositivos cliente (PC, móviles)',
        'Cuentas e identidades'
      ],
      providerResponsibility: [
        'Aplicación (funcionalidad, actualizaciones)',
        'Sistema operativo',
        'Infraestructura de red',
        'Servidores y almacenamiento',
        'Centro de datos físico'
      ],
      analogy: 'Es como alquilar un departamento amueblado. El propietario se encarga de mantener todo (muebles, servicios, estructura), y tú solo te ocupas de tus pertenencias, la limpieza y quién puede entrar.'
    },
    {
      id: 'paas-example',
      title: 'PaaS - Plataforma como Servicio',
      service: 'paas',
      description: 'Tú te encargas de las aplicaciones y los datos, el proveedor gestiona el entorno.',
      example: 'Azure App Service, Azure SQL Database, Heroku',
      customerResponsibility: [
        'Datos e información almacenada',
        'Aplicaciones que implementas',
        'Gestión de acceso',
        'Dispositivos cliente (PC, móviles)',
        'Cuentas e identidades'
      ],
      providerResponsibility: [
        'Tiempo de ejecución de la plataforma',
        'Sistema operativo',
        'Infraestructura física y virtual',
        'Redes',
        'Centro de datos'
      ],
      analogy: 'Es como alquilar un local comercial. El propietario mantiene el edificio y los servicios básicos, pero tú equipas el local, decides la distribución y eres responsable de tu negocio dentro de él.'
    },
    {
      id: 'iaas-example',
      title: 'IaaS - Infraestructura como Servicio',
      service: 'iaas',
      description: 'Mayor control y responsabilidad. El proveedor solo gestiona la infraestructura física.',
      example: 'Azure Virtual Machines, Amazon EC2',
      customerResponsibility: [
        'Datos e información',
        'Todas las aplicaciones',
        'Sistema operativo (parches, actualizaciones)',
        'Configuración de red',
        'Cuentas, identidades y accesos',
        'Cifrado de datos'
      ],
      providerResponsibility: [
        'Hardware físico',
        'Alimentación eléctrica y refrigeración',
        'Red física y conectividad',
        'Centro de datos físico y seguridad'
      ],
      analogy: 'Es como alquilar un terreno para construir. El propietario solo garantiza el terreno, pero tú construyes y mantienes todo lo que pones encima, desde los cimientos hasta el techo.'
    },
    {
      id: 'onprem-example',
      title: 'On-Premises - Centro de datos local',
      service: 'onprem',
      description: 'Tienes responsabilidad total sobre todo el entorno.',
      example: 'Servidor propio de la empresa, Centro de datos corporativo',
      customerResponsibility: [
        'Datos e información',
        'Todas las aplicaciones',
        'Sistemas operativos',
        'Hardware del servidor',
        'Red y conectividad',
        'Seguridad física',
        'Alimentación eléctrica',
        'Refrigeración',
        'Administración del centro de datos',
        'Copia de seguridad y recuperación'
      ],
      providerResponsibility: [
        'Ninguna - toda la responsabilidad recae en la organización'
      ],
      analogy: 'Es como ser propietario de tu casa. Eres responsable de todo, desde los cimientos y el mantenimiento hasta la decoración interior y quién entra.'
    }
  ];
  
  // Definición de preguntas para el quiz
  const quizQuestions = [
    {
      id: 1,
      question: "¿En un modelo de servicio SaaS, quién es responsable de aplicar parches al sistema operativo?",
      options: [
        "El cliente siempre",
        "Microsoft siempre",
        "Es una responsabilidad compartida",
        "Depende del acuerdo de nivel de servicio"
      ],
      correctAnswer: 1,
      explanation: "En el modelo SaaS (Software como Servicio), Microsoft es siempre responsable de mantener, actualizar y aplicar parches al sistema operativo. El cliente solo es responsable de sus datos, dispositivos y cuentas de usuario."
    },
    {
      id: 2,
      question: "¿Qué responsabilidades siempre pertenecen al cliente sin importar el modelo de servicio en la nube?",
      options: [
        "El sistema operativo y las aplicaciones",
        "La red física y los hosts",
        "Los datos, dispositivos y cuentas de usuario",
        "Toda la infraestructura virtual"
      ],
      correctAnswer: 2,
      explanation: "Sin importar el modelo de servicio (SaaS, PaaS o IaaS), el cliente siempre es responsable de sus datos, los dispositivos que se conectan a la nube y las cuentas/identidades de usuarios y servicios."
    },
    {
      id: 3,
      question: "En un modelo IaaS (Infraestructura como Servicio), ¿quién es responsable del sistema operativo?",
      options: [
        "Microsoft siempre",
        "El cliente siempre",
        "Es una responsabilidad compartida",
        "Depende del tipo de máquina virtual"
      ],
      correctAnswer: 1,
      explanation: "En el modelo IaaS, el cliente es responsable del sistema operativo, incluyendo la instalación, configuración, actualizaciones y parches de seguridad. Microsoft solo es responsable de la infraestructura física subyacente."
    },
    {
      id: 4,
      question: "¿En qué modelo el cliente tiene mayor responsabilidad sobre los componentes tecnológicos?",
      options: [
        "Software como Servicio (SaaS)",
        "Plataforma como Servicio (PaaS)",
        "Infraestructura como Servicio (IaaS)",
        "El cliente tiene la misma responsabilidad en todos los modelos"
      ],
      correctAnswer: 2,
      explanation: "En el modelo IaaS (Infraestructura como Servicio), el cliente tiene la mayor responsabilidad comparado con SaaS y PaaS. En IaaS, el cliente es responsable del sistema operativo, las aplicaciones, la configuración de red, los datos y la seguridad, mientras que el proveedor solo gestiona la infraestructura física."
    }
  ];
  
  const handleOptionClick = (questionId, optionIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: optionIndex
    });
  };
  
  const toggleExplanation = (questionId) => {
    setShowExplanations({
      ...showExplanations,
      [questionId]: !showExplanations[questionId]
    });
  };
  
  // Contenido de pestañas
  const tabContents = {
    concept: (
      <div className="space-y-8">
        <div className="bg-azure-50 dark:bg-azure-900/20 p-6 rounded-lg flex items-start border border-azure-100 dark:border-azure-900/50">
          <InformationCircleIcon className="h-6 w-6 text-azure-600 dark:text-azure-400 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-lg font-semibold text-azure-700 dark:text-azure-400 mb-2">¿Qué es el Modelo de Responsabilidad Compartida?</h2>
            <p className="text-gray-700 dark:text-gray-300">
              El <strong>Modelo de Responsabilidad Compartida</strong> define qué aspectos de seguridad y operación
              son responsabilidad de Microsoft y cuáles son responsabilidad del cliente en los diferentes modelos de servicio en la nube.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              En un centro de datos tradicional, la organización es responsable de <strong>todo</strong>: desde la seguridad física 
              hasta el mantenimiento del software. En la nube, estas responsabilidades se <strong>dividen</strong> entre 
              el cliente y el proveedor de la nube.
            </p>
            <div className="mt-4 flex">
              <a 
                href="https://learn.microsoft.com/es-es/training/modules/describe-cloud-compute/4-describe-shared-responsibility-model" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center text-azure-600 dark:text-azure-400 hover:text-azure-800 dark:hover:text-azure-300"
              >
                <DocumentTextIcon className="h-5 w-5 mr-1" />
                Ver documentación oficial
              </a>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 dark:border-blue-700 p-4 rounded-r-md">
          <div className="flex">
            <LightBulbIcon className="h-6 w-6 text-blue-500 dark:text-blue-400 mr-3 flex-shrink-0 mt-1" />
            <div>
              <p className="text-blue-700 dark:text-blue-300 font-medium mb-1">Explicado de forma simple</p>
              <p className="text-gray-700 dark:text-gray-300">
                Imagina que la nube es como diferentes tipos de viviendas:
              </p>
              <ul className="mt-2 space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Modelo tradicional (on-premises)</strong>: Eres dueño de tu casa. Tú te encargas de todo: desde los cimientos, las paredes y el techo, hasta la decoración, la limpieza y la seguridad.</li>
                <li><strong>IaaS</strong>: Alquilas un terreno. El dueño se encarga del terreno, pero tú construyes y mantienes tu casa.</li>
                <li><strong>PaaS</strong>: Alquilas una casa sin amueblar. El dueño mantiene la estructura, tú te encargas de los muebles y la decoración.</li>
                <li><strong>SaaS</strong>: Alquilas una casa amueblada. El dueño se encarga de casi todo, tú solo traes tus objetos personales y decides quién puede entrar.</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {sections.map(section => (
            <div 
              key={section.id}
              className={`p-5 rounded-lg border ${section.color}`}
            >
              <h3 className="font-medium text-lg text-gray-900 dark:text-gray-100 mb-3 flex items-center">
                <section.icon className="h-5 w-5 mr-2 text-azure-600 dark:text-azure-400" />
                {section.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {section.description}
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded shadow-sm border border-gray-200 dark:border-gray-700">
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Incluye:</h4>
                <ul className="space-y-2">
                  {section.items.map(item => (
                    <li key={item} className="flex items-start">
                      <ArrowRightIcon className="h-4 w-4 text-azure-500 dark:text-azure-400 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 bg-azure-50 dark:bg-azure-900/20 p-6 rounded-lg border border-azure-200 dark:border-azure-900/30">
          <h2 className="text-xl font-semibold text-azure-700 dark:text-azure-400 mb-4">¿Por qué es importante para el examen AZ-900?</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <ArrowRightIcon className="h-5 w-5 text-azure-500 dark:text-azure-400 mr-2 mt-0.5 flex-shrink-0" />
              <p className="text-gray-700 dark:text-gray-300">El modelo de responsabilidad compartida es un concepto fundamental en la adopción de la nube y aparece 
              frecuentemente en preguntas del examen.</p>
            </li>
            <li className="flex items-start">
              <ArrowRightIcon className="h-5 w-5 text-azure-500 dark:text-azure-400 mr-2 mt-0.5 flex-shrink-0" />
              <p className="text-gray-700 dark:text-gray-300">Entender qué protege Microsoft y qué debes proteger tú es crucial para implementar la seguridad en la nube correctamente.</p>
            </li>
            <li className="flex items-start">
              <ArrowRightIcon className="h-5 w-5 text-azure-500 dark:text-azure-400 mr-2 mt-0.5 flex-shrink-0" />
              <p className="text-gray-700 dark:text-gray-300">Las preguntas del examen suelen evaluar tu comprensión sobre quién es responsable de qué en diferentes 
              escenarios de implementación (SaaS, PaaS, IaaS).</p>
            </li>
          </ul>
        </div>
      </div>
    ),
    
    responsibilities: (
      <div>
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Distribución de responsabilidades por modelo de servicio</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Lado izquierdo: Matriz completa de responsabilidad */}
          <div>
            <div className="w-full rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 mb-4">
              <div className="responsibility-grid">
                <div className="responsibility-header col-span-1">Responsabilidad</div>
                <div className="responsibility-header">SaaS</div>
                <div className="responsibility-header">PaaS</div>
                <div className="responsibility-header">IaaS</div>
                <div className="responsibility-header">Local</div>
                
                {/* Sección: Responsabilidad siempre retenida por el cliente */}
                <div className="section-header">Responsabilidad siempre retenida por el cliente</div>
                
                <div className="item">Información y datos</div>
                <div className="customer"></div>
                <div className="customer"></div>
                <div className="customer"></div>
                <div className="customer"></div>
                
                <div className="item">Dispositivos (Móviles y PCs)</div>
                <div className="customer"></div>
                <div className="customer"></div>
                <div className="customer"></div>
                <div className="customer"></div>
                
                <div className="item">Cuentas e identidades</div>
                <div className="customer"></div>
                <div className="customer"></div>
                <div className="customer"></div>
                <div className="customer"></div>
                
                {/* Sección: Responsabilidad varía según el tipo */}
                <div className="section-header">Responsabilidad varía según el tipo</div>
                
                <div className="item">Infraestructura de identidad y directorio</div>
                <div className="shared"></div>
                <div className="shared"></div>
                <div className="customer"></div>
                <div className="customer"></div>
                
                <div className="item">Aplicaciones</div>
                <div className="microsoft"></div>
                <div className="shared"></div>
                <div className="customer"></div>
                <div className="customer"></div>
                
                <div className="item">Controles de red</div>
                <div className="microsoft"></div>
                <div className="shared"></div>
                <div className="customer"></div>
                <div className="customer"></div>
                
                <div className="item">Sistema operativo</div>
                <div className="microsoft"></div>
                <div className="microsoft"></div>
                <div className="customer"></div>
                <div className="customer"></div>
                
                {/* Sección: Responsabilidad transferida al proveedor de la nube */}
                <div className="section-header">Responsabilidad transferida al proveedor de la nube</div>
                
                <div className="item">Hosts físicos</div>
                <div className="microsoft"></div>
                <div className="microsoft"></div>
                <div className="microsoft"></div>
                <div className="customer"></div>
                
                <div className="item">Red física</div>
                <div className="microsoft"></div>
                <div className="microsoft"></div>
                <div className="microsoft"></div>
                <div className="customer"></div>
                
                <div className="item">Centro de datos físico</div>
                <div className="microsoft"></div>
                <div className="microsoft"></div>
                <div className="microsoft"></div>
                <div className="customer"></div>
              </div>
            </div>
            
            <div className="flex justify-center space-x-6 mt-4">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-microsoft-blue dark:bg-microsoft-blue/80 mr-2"></div>
                <span className="text-sm text-gray-700 dark:text-gray-300">Microsoft</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-microsoft-dark dark:bg-microsoft-dark/80 mr-2"></div>
                <span className="text-sm text-gray-700 dark:text-gray-300">Cliente</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-gradient-to-r from-microsoft-blue to-microsoft-dark dark:from-microsoft-blue/80 dark:to-microsoft-dark/80 mr-2"></div>
                <span className="text-sm text-gray-700 dark:text-gray-300">Compartido</span>
              </div>
            </div>
          </div>
          
          {/* Lado derecho: Selección de secciones para detalles */}
          <div>
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Elige una sección para más detalles:</h2>
              <div className="space-y-3">
                {sections.map(section => (
                  <button
                    key={section.id}
                    className={`w-full text-left p-4 rounded-lg border transition-colors ${
                      highlightedSection === section.id 
                        ? section.color + ' font-medium' 
                        : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                    onClick={() => setHighlightedSection(section.id)}
                  >
                    <div className="flex items-start">
                      <section.icon className="h-5 w-5 mt-0.5 mr-2 text-azure-600 dark:text-azure-400 flex-shrink-0" />
                      <span className="text-gray-800 dark:text-gray-200">{section.title}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            
            {highlightedSection && (
              <div className={`p-5 rounded-lg border ${sections.find(s => s.id === highlightedSection).color}`}>
                <h3 className="font-medium text-lg text-gray-900 dark:text-gray-100 mb-3">
                  {sections.find(s => s.id === highlightedSection).title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {sections.find(s => s.id === highlightedSection).description}
                </p>
                <div className="bg-white dark:bg-gray-800 p-4 rounded shadow-sm border border-gray-200 dark:border-gray-700">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Componentes:</h4>
                  <ul className="space-y-2">
                    {sections.find(s => s.id === highlightedSection).items.map(item => (
                      <li key={item} className="flex items-start">
                        <ArrowRightIcon className="h-4 w-4 text-azure-500 dark:text-azure-400 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-8 p-5 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-900/30">
          <h3 className="text-lg font-medium text-blue-800 dark:text-blue-300 mb-3 flex items-center">
            <QuestionMarkCircleIcon className="h-5 w-5 mr-2" />
            ¿Cómo interpretar este diagrama?
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            El diagrama muestra quién es responsable de qué aspectos en cada modelo de servicio en la nube. 
            A medida que nos movemos de derecha a izquierda (de local a SaaS), más responsabilidades se transfieren 
            del cliente al proveedor de la nube.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            <strong className="text-gray-900 dark:text-white">Ejemplo:</strong> Con una infraestructura local, eres responsable de todo. 
            Con SaaS, Microsoft se ocupa de casi todo excepto tus datos, identidades y dispositivos. Los modelos IaaS y PaaS 
            representan niveles intermedios de responsabilidad compartida.
          </p>
        </div>
      </div>
    ),
    
    examples: (
      <div className="space-y-8">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Modelos de servicio y sus responsabilidades</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-6">
          <button
            className={`p-3 font-medium text-center transition-colors rounded-lg ${
              selectedService === 'saas' 
                ? 'bg-azure-100 dark:bg-azure-900/30 text-azure-800 dark:text-azure-300 shadow-sm' 
                : 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-750 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700'
            }`}
            onClick={() => setSelectedService('saas')}
          >
            SaaS
          </button>
          <button
            className={`p-3 font-medium text-center transition-colors rounded-lg ${
              selectedService === 'paas' 
                ? 'bg-azure-100 dark:bg-azure-900/30 text-azure-800 dark:text-azure-300 shadow-sm' 
                : 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-750 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700'
            }`}
            onClick={() => setSelectedService('paas')}
          >
            PaaS
          </button>
          <button
            className={`p-3 font-medium text-center transition-colors rounded-lg ${
              selectedService === 'iaas' 
                ? 'bg-azure-100 dark:bg-azure-900/30 text-azure-800 dark:text-azure-300 shadow-sm' 
                : 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-750 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700'
            }`}
            onClick={() => setSelectedService('iaas')}
          >
            IaaS
          </button>
          <button
            className={`p-3 font-medium text-center transition-colors rounded-lg ${
              selectedService === 'onprem' 
                ? 'bg-azure-100 dark:bg-azure-900/30 text-azure-800 dark:text-azure-300 shadow-sm' 
                : 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-750 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700'
            }`}
            onClick={() => setSelectedService('onprem')}
          >
            Local
          </button>
        </div>
        
        {/* Contenido detallado del modelo seleccionado */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            {examples.find(ex => ex.service === selectedService)?.title}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            {examples.find(ex => ex.service === selectedService)?.description}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            <strong>Ejemplos:</strong> {examples.find(ex => ex.service === selectedService)?.example}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-900/30">
              <h4 className="font-medium text-green-800 dark:text-green-300 flex items-center mb-3">
                <ServerIcon className="h-5 w-5 mr-2" />
                Responsabilidades del Cliente
              </h4>
              <ul className="space-y-2">
                {examples.find(ex => ex.service === selectedService)?.customerResponsibility.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <ChevronRightIcon className="h-5 w-5 text-green-600 dark:text-green-400 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-900/30">
              <h4 className="font-medium text-blue-800 dark:text-blue-300 flex items-center mb-3">
                <CloudIcon className="h-5 w-5 mr-2" />
                Responsabilidades del Proveedor (Microsoft)
              </h4>
              <ul className="space-y-2">
                {examples.find(ex => ex.service === selectedService)?.providerResponsibility.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <ChevronRightIcon className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-900/30">
            <h4 className="font-medium text-yellow-800 dark:text-yellow-300 mb-2">Analogía</h4>
            <p className="text-gray-700 dark:text-gray-300">
              {examples.find(ex => ex.service === selectedService)?.analogy}
            </p>
          </div>
        </div>
        
        {/* Comparativa visual */}
        <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Comparativa de modelos
          </h3>
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rounded-lg overflow-hidden">
              <thead className="text-xs text-gray-700 dark:text-gray-300 uppercase bg-gray-100 dark:bg-gray-700">
                <tr>
                  <th scope="col" className="px-6 py-3">Característica</th>
                  <th scope="col" className="px-6 py-3">SaaS</th>
                  <th scope="col" className="px-6 py-3">PaaS</th>
                  <th scope="col" className="px-6 py-3">IaaS</th>
                  <th scope="col" className="px-6 py-3">On-Premises</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    Control del cliente
                  </th>
                  <td className="px-6 py-4">Bajo</td>
                  <td className="px-6 py-4">Medio</td>
                  <td className="px-6 py-4">Alto</td>
                  <td className="px-6 py-4">Completo</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    Gestión requerida
                  </th>
                  <td className="px-6 py-4">Mínima</td>
                  <td className="px-6 py-4">Parcial</td>
                  <td className="px-6 py-4">Alta</td>
                  <td className="px-6 py-4">Total</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    Flexibilidad
                  </th>
                  <td className="px-6 py-4">Baja</td>
                  <td className="px-6 py-4">Media</td>
                  <td className="px-6 py-4">Alta</td>
                  <td className="px-6 py-4">Máxima</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    ),
    
    quiz: (
      <div className="space-y-8">
        <div className="bg-azure-50 dark:bg-azure-900/20 p-6 rounded-lg border border-azure-100 dark:border-azure-900/50">
          <h2 className="text-xl font-semibold text-azure-700 dark:text-azure-400 mb-4">Pon a prueba tus conocimientos</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Resuelve estas preguntas para verificar tu comprensión del modelo de responsabilidad compartida.
            Estas preguntas son similares a lo que podrías encontrar en el examen AZ-900.
          </p>
        </div>
        
        <div className="space-y-6">
          {quizQuestions.map((question) => (
            <div key={question.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4 flex items-start">
                <QuestionMarkCircleIcon className="h-6 w-6 text-azure-600 dark:text-azure-400 mr-2 flex-shrink-0" />
                <span>{question.id}. {question.question}</span>
              </h3>
              
              <div className="space-y-3 mb-4">
                {question.options.map((option, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => handleOptionClick(question.id, idx)}
                    className={`
                      p-3 rounded-lg border transition-colors cursor-pointer
                      ${selectedAnswers[question.id] === idx ? 
                        (showExplanations[question.id] && idx === question.correctAnswer ?
                          'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800' : 
                          showExplanations[question.id] ?
                            'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800' :
                            'bg-azure-50 dark:bg-azure-900/20 border-azure-200 dark:border-azure-800'
                        ) : 
                        'bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-650'
                      }
                    `}
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-2">
                        {showExplanations[question.id] ? (
                          idx === question.correctAnswer ? (
                            <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400" />
                          ) : selectedAnswers[question.id] === idx ? (
                            <XCircleIcon className="h-5 w-5 text-red-500 dark:text-red-400" />
                          ) : (
                            <div className="h-5 w-5 rounded-full border-2 border-gray-300 dark:border-gray-500 flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
                              {String.fromCharCode(65 + idx)}
                            </div>
                          )
                        ) : (
                          <div className={`h-5 w-5 rounded-full border-2 flex items-center justify-center text-sm ${
                            selectedAnswers[question.id] === idx ?
                              'border-azure-500 text-azure-500 dark:border-azure-400 dark:text-azure-400' :
                              'border-gray-300 text-gray-500 dark:border-gray-500 dark:text-gray-400'
                          }`}>
                            {String.fromCharCode(65 + idx)}
                          </div>
                        )}
                      </div>
                      <span className={`text-gray-700 dark:text-gray-300 ${
                        showExplanations[question.id] && idx === question.correctAnswer ? 
                          'font-medium' : ''
                      }`}>
                        {option}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              
              {selectedAnswers[question.id] !== undefined && (
                <div className="mt-2">
                  {showExplanations[question.id] ? (
                    <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-900/30">
                      <h4 className="font-medium text-blue-800 dark:text-blue-300 mb-2">Explicación:</h4>
                      <p className="text-gray-700 dark:text-gray-300">{question.explanation}</p>
                    </div>
                  ) : (
                    <button
                      onClick={() => toggleExplanation(question.id)}
                      className="mt-2 text-azure-600 dark:text-azure-400 hover:text-azure-800 dark:hover:text-azure-300 font-medium flex items-center"
                    >
                      <ChevronRightIcon className="h-5 w-5 mr-1" />
                      Ver explicación
                    </button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 mt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <DocumentTextIcon className="h-6 w-6 text-azure-600 dark:text-azure-400 mr-2" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Recursos adicionales</h3>
            </div>
            <a 
              href="https://learn.microsoft.com/es-es/training/modules/describe-cloud-compute/4-describe-shared-responsibility-model" 
              target="_blank" 
              rel="noreferrer"
              className="text-azure-600 dark:text-azure-400 hover:text-azure-800 dark:hover:text-azure-300 font-medium"
            >
              Ver más
            </a>
          </div>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Para una comprensión más profunda del modelo de responsabilidad compartida, consulta la documentación oficial de Microsoft Azure y realiza los módulos de aprendizaje gratuitos en Microsoft Learn.
          </p>
        </div>
      </div>
    )
  };
  
  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center mb-8">
        <ShieldCheckIcon className="h-8 w-8 text-azure-600 dark:text-azure-400 mr-3" />
        <h1 className="text-3xl font-bold text-azure-700 dark:text-azure-400">Modelo de Responsabilidad Compartida</h1>
      </div>
      
      {/* Tabs de Navegación */}
      <div className="border-b border-gray-200 dark:border-gray-700 mb-8">
        <nav className="flex space-x-2 overflow-x-auto" aria-label="Tabs">
          <button
            onClick={() => setActiveTab('concept')}
            className={`py-2 px-4 border-b-2 font-medium text-sm rounded-t-lg ${
              activeTab === 'concept'
                ? 'border-azure-500 text-azure-600 dark:text-azure-400 dark:border-azure-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Concepto
          </button>
          
          <button
            onClick={() => setActiveTab('responsibilities')}
            className={`py-2 px-4 border-b-2 font-medium text-sm rounded-t-lg ${
              activeTab === 'responsibilities'
                ? 'border-azure-500 text-azure-600 dark:text-azure-400 dark:border-azure-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Responsabilidades
          </button>
          
          <button
            onClick={() => setActiveTab('examples')}
            className={`py-2 px-4 border-b-2 font-medium text-sm rounded-t-lg ${
              activeTab === 'examples'
                ? 'border-azure-500 text-azure-600 dark:text-azure-400 dark:border-azure-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Ejemplos
          </button>
          
          <button
            onClick={() => setActiveTab('quiz')}
            className={`py-2 px-4 border-b-2 font-medium text-sm rounded-t-lg ${
              activeTab === 'quiz'
                ? 'border-azure-500 text-azure-600 dark:text-azure-400 dark:border-azure-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Preguntas
          </button>
        </nav>
      </div>
      
      {/* Contenido de la pestaña activa */}
      {tabContents[activeTab]}
    </div>
  );
}