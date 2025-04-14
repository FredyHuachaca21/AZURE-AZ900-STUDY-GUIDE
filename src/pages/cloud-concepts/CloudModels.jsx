// Ruta: /src/pages/cloud-concepts/CloudModels.jsx
import { useState } from 'react';
import { 
  CloudIcon, 
  LockClosedIcon, 
  GlobeAltIcon, 
  ArrowsRightLeftIcon,
  QuestionMarkCircleIcon,
  CheckCircleIcon,
  XCircleIcon,
  BuildingOfficeIcon,
  DocumentTextIcon,
  ChevronRightIcon,
  ArrowRightIcon,
  LightBulbIcon,
  InformationCircleIcon,
  ServerIcon
} from '@heroicons/react/24/outline';

export default function CloudModels() {
  const [activeTab, setActiveTab] = useState('concept');
  const [selectedModel, setSelectedModel] = useState('public');
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showExplanations, setShowExplanations] = useState({});
  
  // Definición de los modelos de nube
  const cloudModels = [
    {
      id: 'public',
      title: 'Nube Pública',
      icon: GlobeAltIcon,
      description: 'Servicios de nube ofrecidos por proveedores externos disponibles para cualquier persona que quiera comprarlos y usarlos.',
      color: 'bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800',
      examples: ['Microsoft Azure', 'Amazon Web Services (AWS)', 'Google Cloud Platform (GCP)'],
      advantages: [
        'Sin gastos de capital para escalar verticalmente',
        'Las aplicaciones pueden aprovisionarse y desaprovisionarse rápidamente',
        'Las organizaciones solo pagan por lo que usan',
        'No hay mantenimiento de hardware'
      ],
      disadvantages: [
        'Las organizaciones no tienen un control total de los recursos y seguridad',
        'Posible preocupación por el cumplimiento normativo en sectores regulados',
        'Posibles cargos de transferencia de datos al mover grandes cantidades de información'
      ],
      useCases: [
        'Startups que necesitan escalar rápidamente',
        'Aplicaciones con picos de demanda variables',
        'Pruebas y desarrollo de software',
        'Empresas que desean reducir costos operativos de TI'
      ],
      analogy: 'Es como un centro comercial: el propietario (proveedor de la nube) construye y mantiene toda la infraestructura, y tú solo alquilas el espacio que necesitas para tu negocio cuando lo necesitas.'
    },
    {
      id: 'private',
      title: 'Nube Privada',
      icon: LockClosedIcon,
      description: 'Servicios de nube utilizados por una sola organización, no compartidos con otros. Puede estar alojada en el centro de datos de la empresa o en un centro de datos dedicado.',
      color: 'bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800',
      examples: ['Microsoft Azure Stack', 'VMware Cloud Foundation', 'OpenStack'],
      advantages: [
        'Control total sobre los recursos y la seguridad',
        'Los datos no se colocan con los de otras organizaciones',
        'Mayor personalización según necesidades específicas',
        'Mejor para cumplir requisitos regulatorios estrictos'
      ],
      disadvantages: [
        'Requiere inversión inicial en hardware (CapEx)',
        'Responsabilidad del mantenimiento y actualizaciones del hardware',
        'Escalabilidad limitada por la infraestructura adquirida',
        'Mayor costo total en comparación con la nube pública'
      ],
      useCases: [
        'Instituciones financieras con datos altamente sensibles',
        'Agencias gubernamentales con requisitos estrictos de seguridad',
        'Grandes empresas con aplicaciones críticas existentes',
        'Organizaciones con normativas que exigen control local de los datos'
      ],
      analogy: 'Es como tener tu propia casa: tienes que comprarla, mantenerla y asumir todos los gastos, pero tienes control total sobre todo lo que hay en ella y quién puede entrar.'
    },
    {
      id: 'hybrid',
      title: 'Nube Híbrida',
      icon: ArrowsRightLeftIcon,
      description: 'Entorno que combina nubes públicas y privadas en un ecosistema interconectado, permitiendo que los datos y aplicaciones se compartan entre ellas.',
      color: 'bg-purple-50 dark:bg-purple-900/30 border-purple-200 dark:border-purple-800',
      examples: ['Entornos con Azure + Azure Stack', 'AWS Outposts + AWS Cloud', 'Configuraciones mixtas entre servidores locales y nube pública'],
      advantages: [
        'Máxima flexibilidad para decidir dónde ejecutar las aplicaciones',
        'Capacidad de escalar usando la nube pública durante picos de demanda',
        'Balance entre control y costo-efectividad',
        'Migración gradual a la nube'
      ],
      disadvantages: [
        'Mayor complejidad en la configuración y administración',
        'Necesidad de garantizar compatibilidad entre entornos',
        'Posibles desafíos con la latencia entre nubes',
        'Requiere habilidades en ambos tipos de entornos'
      ],
      useCases: [
        'Empresas con cargas de trabajo sensibles y no sensibles',
        'Organizaciones con necesidad de escalar temporalmente (cloud bursting)',
        'Empresas en proceso de migración gradual a la nube',
        'Organizaciones con regulaciones que requieren que ciertos datos permanezcan locales'
      ],
      analogy: 'Es como tener una casa principal y además un apartamento de vacaciones. Vives principalmente en tu casa (nube privada) donde tienes control total, pero utilizas el apartamento (nube pública) cuando necesitas más espacio o para ocasiones especiales.'
    },
    {
      id: 'multicloud',
      title: 'Nubes Múltiples',
      icon: CloudIcon,
      description: 'Uso de servicios en la nube de varios proveedores diferentes, ya sea para aprovechar las mejores capacidades de cada uno o para evitar la dependencia de un solo proveedor.',
      color: 'bg-orange-50 dark:bg-orange-900/30 border-orange-200 dark:border-orange-800',
      examples: ['Combinación de Microsoft Azure + AWS', 'Google Cloud + Azure + servicios SaaS', 'Estrategia deliberada de usar múltiples proveedores'],
      advantages: [
        'Evita la dependencia de un solo proveedor (vendor lock-in)',
        'Aprovecha las mejores capacidades de cada proveedor',
        'Mayor resiliencia y redundancia',
        'Mejor cobertura geográfica global'
      ],
      disadvantages: [
        'Complejidad de gestión significativamente mayor',
        'Diferentes interfaces, APIs y herramientas para aprender',
        'Posibles desafíos de integración entre proveedores',
        'Mayor esfuerzo para unificar la seguridad y el cumplimiento'
      ],
      useCases: [
        'Empresas globales con necesidades regionales específicas',
        'Organizaciones que necesitan servicios especializados de diferentes proveedores',
        'Empresas preocupadas por la dependencia de un único proveedor',
        'Compañías que han crecido mediante fusiones y adquisiciones'
      ],
      analogy: 'Es como comprar en diferentes supermercados según lo que necesitas: vas a uno por su calidad en frutas, a otro por sus mejores precios en carnes, y a un tercero por sus productos exclusivos, optimizando así cada compra aunque sea más complejo de gestionar.'
    }
  ];
  
  // Herramientas de Azure para gestionar modelos de nube
  const azureTools = [
    {
      id: 'azure-arc',
      title: 'Azure Arc',
      description: 'Conjunto de tecnologías que extiende la gestión de Azure a cualquier infraestructura, incluyendo entornos locales, múltiples nubes y bordes.',
      benefits: [
        'Gestión centralizada de recursos en entornos heterogéneos',
        'Aplicación de políticas de Azure en cualquier infraestructura',
        'Despliegue de servicios de Azure como SQL Managed Instance en otras nubes o entornos locales',
        'Integración con GitHub y otras herramientas DevOps'
      ],
      useCases: [
        'Organizaciones con entornos híbridos o multicloud que necesitan gestión centralizada',
        'Empresas que quieren aplicar gobernanza consistente en todas sus infraestructuras',
        'Despliegue de aplicaciones en múltiples ubicaciones con una gestión unificada'
      ]
    },
    {
      id: 'azure-vmware',
      title: 'Azure VMware Solution',
      description: 'Servicio que permite ejecutar cargas de trabajo de VMware en Azure con integración y escalabilidad perfectas, facilitando la migración a la nube.',
      benefits: [
        'Migración sin problemas de entornos VMware a Azure',
        'Sin necesidad de reconfigurar aplicaciones, virtualización o herramientas',
        'Integración nativa con servicios de Azure',
        'Experiencia de gestión consistente con las herramientas de VMware conocidas'
      ],
      useCases: [
        'Organizaciones con gran inversión en infraestructura VMware que desean migrar a la nube',
        'Empresas que buscan extender su capacidad sin cambiar su plataforma de virtualización',
        'Escenarios de recuperación ante desastres para entornos VMware'
      ]
    }
  ];
  
  // Preguntas de quiz
  const quizQuestions = [
    {
      id: 1,
      question: "¿Cuál de los siguientes NO es una ventaja de la nube pública?",
      options: [
        "No hay gastos de capital para escalar verticalmente",
        "Las aplicaciones pueden aprovisionarse rápidamente",
        "Control total sobre los recursos y la seguridad",
        "Las organizaciones solo pagan por lo que usan"
      ],
      correctAnswer: 2,
      explanation: "El 'control total sobre recursos y seguridad' es una característica de la nube privada, no de la pública. En la nube pública, el proveedor controla la infraestructura subyacente y establece ciertas limitaciones de seguridad y configuración."
    },
    {
      id: 2,
      question: "¿Qué modelo de nube combina entornos de nube pública y privada interconectados?",
      options: [
        "Nube vertical",
        "Nube híbrida",
        "Nube múltiple",
        "Nube distribuida"
      ],
      correctAnswer: 1,
      explanation: "La nube híbrida es un entorno informático que combina nubes públicas y privadas interconectadas, permitiendo que los datos y las aplicaciones se compartan entre ellas. Esto proporciona mayor flexibilidad y optimización de la infraestructura existente."
    },
    {
      id: 3,
      question: "¿Cuál de los siguientes escenarios es más adecuado para una implementación de nube privada?",
      options: [
        "Una startup que necesita escalar rápidamente con mínima inversión inicial",
        "Una empresa que quiere minimizar su responsabilidad en el mantenimiento de hardware",
        "Una institución financiera con estrictos requisitos regulatorios y de seguridad",
        "Una pequeña empresa con demanda variable de recursos informáticos"
      ],
      correctAnswer: 2,
      explanation: "Una institución financiera con estrictos requisitos regulatorios y de seguridad es un caso de uso ideal para la nube privada, ya que proporciona el máximo control sobre la infraestructura, la seguridad y el cumplimiento, a pesar del mayor costo y responsabilidad de mantenimiento."
    },
    {
      id: 4,
      question: "¿Qué tecnología de Azure permite gestionar recursos en entornos multicloud y locales desde un único panel?",
      options: [
        "Azure Kubernetes Service",
        "Azure Virtual Desktop",
        "Azure Arc",
        "Azure Synapse Analytics"
      ],
      correctAnswer: 2,
      explanation: "Azure Arc es una tecnología que extiende la gestión y servicios de Azure a cualquier infraestructura, incluyendo entornos locales, múltiples nubes y entornos de borde, permitiendo una gestión centralizada desde el portal de Azure."
    },
    {
      id: 5,
      question: "¿Cuál es la principal desventaja de un enfoque de nubes múltiples?",
      options: [
        "Mayor costo inicial en hardware y equipamiento",
        "Complejidad significativamente mayor en la gestión",
        "Menor escalabilidad que otros modelos de nube",
        "Imposibilidad de migrar aplicaciones entre proveedores"
      ],
      correctAnswer: 1,
      explanation: "La principal desventaja de un enfoque de nubes múltiples es la complejidad significativamente mayor en la gestión, ya que implica trabajar con diferentes interfaces, APIs, herramientas y modelos de seguridad de múltiples proveedores de nube."
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
  
  // Tabla comparativa de modelos de nube
  const comparisonTable = [
    {
      feature: 'Inversión inicial',
      public: 'Muy baja (OpEx)',
      private: 'Alta (CapEx)',
      hybrid: 'Moderada',
      multicloud: 'Baja a moderada'
    },
    {
      feature: 'Control sobre los recursos',
      public: 'Limitado',
      private: 'Total',
      hybrid: 'Parcial a alto',
      multicloud: 'Variable'
    },
    {
      feature: 'Escalabilidad',
      public: 'Muy alta',
      private: 'Limitada a la inversión',
      hybrid: 'Alta',
      multicloud: 'Muy alta'
    },
    {
      feature: 'Seguridad y cumplimiento',
      public: 'Gestionada por el proveedor',
      private: 'Control total',
      hybrid: 'Personalizable',
      multicloud: 'Compleja de unificar'
    },
    {
      feature: 'Mantenimiento',
      public: 'Mínimo',
      private: 'Total responsabilidad',
      hybrid: 'Compartido',
      multicloud: 'Varía por proveedor'
    },
    {
      feature: 'Complejidad de gestión',
      public: 'Baja',
      private: 'Moderada',
      hybrid: 'Alta',
      multicloud: 'Muy alta'
    },
    {
      feature: 'Flexibilidad de ubicación',
      public: 'Limitada a regiones del proveedor',
      private: 'Control total',
      hybrid: 'Óptima',
      multicloud: 'Máxima'
    }
  ];
  
  // Definición del contenido de cada pestaña
  const tabContents = {
    concept: (
      <div className="space-y-8">
        <div className="bg-azure-50 dark:bg-azure-900/20 p-6 rounded-lg flex items-start border border-azure-100 dark:border-azure-900/50">
          <InformationCircleIcon className="h-6 w-6 text-azure-600 dark:text-azure-400 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-lg font-semibold text-azure-700 dark:text-azure-400 mb-2">¿Qué son los modelos de nube?</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Los <strong>modelos de nube</strong> definen el tipo de implementación de recursos en la nube, determinando quién tiene control sobre la infraestructura y cómo se accede a ella. Estos modelos determinan factores como la propiedad, el tamaño, la ubicación, la accesibilidad y quién puede usarlos.
            </p>
            <div className="mt-4 flex">
              <a 
                href="https://learn.microsoft.com/es-es/training/modules/describe-cloud-compute/5-define-cloud-models" 
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cloudModels.map(model => (
            <div 
              key={model.id}
              className={`p-5 rounded-lg border ${model.color}`}
            >
              <h3 className="font-medium text-lg text-gray-900 dark:text-gray-100 mb-3 flex items-center">
                <model.icon className="h-5 w-5 mr-2 text-azure-600 dark:text-azure-400" />
                {model.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {model.description}
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-gray-500 dark:text-gray-400">
                  <ChevronRightIcon className="h-4 w-4 mr-1 flex-shrink-0" />
                  <span>Ejemplos: {model.examples.join(', ')}</span>
                </div>
              </div>
              <div className="mt-3 text-right">
                <button 
                  onClick={() => {
                    setSelectedModel(model.id);
                    setActiveTab('comparison');
                  }}
                  className="text-azure-600 dark:text-azure-400 hover:text-azure-800 dark:hover:text-azure-300 text-sm font-medium"
                >
                  Ver detalles
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 dark:border-blue-700 p-4 rounded-r-md">
          <div className="flex">
            <LightBulbIcon className="h-6 w-6 text-blue-500 dark:text-blue-400 mr-3 flex-shrink-0 mt-1" />
            <div>
              <p className="text-blue-700 dark:text-blue-300 font-medium mb-1">¿Cuál modelo elegir?</p>
              <p className="text-gray-700 dark:text-gray-300">
                La elección del modelo de nube adecuado depende de varios factores específicos de tu organización:
              </p>
              <ul className="mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <ArrowRightIcon className="h-4 w-4 text-blue-500 dark:text-blue-400 mr-2 mt-1 flex-shrink-0" />
                  <span><strong>Nube pública</strong>: ideal para reducir costos, aumentar agilidad y enfocarse en el negocio en lugar de la infraestructura.</span>
                </li>
                <li className="flex items-start">
                  <ArrowRightIcon className="h-4 w-4 text-blue-500 dark:text-blue-400 mr-2 mt-1 flex-shrink-0" />
                  <span><strong>Nube privada</strong>: mejor cuando el control total, la seguridad y el cumplimiento normativo son la prioridad principal.</span>
                </li>
                <li className="flex items-start">
                  <ArrowRightIcon className="h-4 w-4 text-blue-500 dark:text-blue-400 mr-2 mt-1 flex-shrink-0" />
                  <span><strong>Nube híbrida</strong>: excelente para balancear control y costo, o para migrar gradualmente a la nube.</span>
                </li>
                <li className="flex items-start">
                  <ArrowRightIcon className="h-4 w-4 text-blue-500 dark:text-blue-400 mr-2 mt-1 flex-shrink-0" />
                  <span><strong>Nubes múltiples</strong>: óptimo cuando necesitas capacidades específicas de diferentes proveedores o para evitar la dependencia de uno solo.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 bg-azure-50 dark:bg-azure-900/20 p-6 rounded-lg border border-azure-200 dark:border-azure-900/30">
          <h2 className="text-xl font-semibold text-azure-700 dark:text-azure-400 mb-4">Herramientas Azure para gestionar diferentes modelos de nube</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {azureTools.map(tool => (
              <div 
                key={tool.id}
                className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700"
              >
                <h3 className="font-medium text-lg text-gray-900 dark:text-white mb-2">
                  {tool.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm">
                  {tool.description}
                </p>
                <h4 className="text-sm font-medium text-gray-800 dark:text-gray-300 mb-1">Beneficios clave:</h4>
                <ul className="mb-4 space-y-1">
                  {tool.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-gray-700 dark:text-gray-300 text-sm flex items-start">
                      <CheckCircleIcon className="h-4 w-4 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-medium">Casos de uso: </span> 
                  {tool.useCases[0]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    
    comparison: (
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-6">
          <button
            className={`p-3 font-medium text-center transition-colors rounded-lg ${
              selectedModel === 'public' 
                ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 shadow-sm' 
                : 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-750 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700'
            }`}
            onClick={() => setSelectedModel('public')}
          >
            Nube Pública
          </button>
          <button
            className={`p-3 font-medium text-center transition-colors rounded-lg ${
              selectedModel === 'private' 
                ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 shadow-sm' 
                : 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-750 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700'
            }`}
            onClick={() => setSelectedModel('private')}
          >
            Nube Privada
          </button>
          <button
            className={`p-3 font-medium text-center transition-colors rounded-lg ${
              selectedModel === 'hybrid' 
                ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 shadow-sm' 
                : 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-750 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700'
            }`}
            onClick={() => setSelectedModel('hybrid')}
          >
            Nube Híbrida
          </button>
          <button
            className={`p-3 font-medium text-center transition-colors rounded-lg ${
              selectedModel === 'multicloud' 
                ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 shadow-sm' 
                : 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-750 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700'
            }`}
            onClick={() => setSelectedModel('multicloud')}
          >
            Nubes Múltiples
          </button>
        </div>
        
        {/* Detalles del modelo seleccionado */}
        {cloudModels.filter(model => model.id === selectedModel).map(model => (
          <div key={model.id} className="space-y-6">
            <div className={`p-6 rounded-lg border ${model.color}`}>
              <div className="flex items-start">
                <model.icon className="h-10 w-10 text-azure-600 dark:text-azure-400 mr-4 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{model.title}</h2>
                  <p className="text-gray-700 dark:text-gray-300 text-lg">
                    {model.description}
                  </p>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="font-medium text-green-600 dark:text-green-400 mb-2 flex items-center">
                    <CheckCircleIcon className="h-5 w-5 mr-2" />
                    Ventajas
                  </h3>
                  <ul className="space-y-2">
                    {model.advantages.map((adv, idx) => (
                      <li key={idx} className="flex items-start">
                        <ArrowRightIcon className="h-4 w-4 text-green-500 dark:text-green-400 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{adv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="font-medium text-red-600 dark:text-red-400 mb-2 flex items-center">
                    <XCircleIcon className="h-5 w-5 mr-2" />
                    Desventajas
                  </h3>
                  <ul className="space-y-2">
                    {model.disadvantages.map((disadv, idx) => (
                      <li key={idx} className="flex items-start">
                        <ArrowRightIcon className="h-4 w-4 text-red-500 dark:text-red-400 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{disadv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="font-medium text-gray-900 dark:text-white mb-3">Casos de uso ideales</h3>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 grid grid-cols-1 md:grid-cols-2 gap-2">
                  {model.useCases.map((useCase, idx) => (
                    <div key={idx} className="flex items-start">
                      <BuildingOfficeIcon className="h-5 w-5 text-azure-500 dark:text-azure-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-900/30">
                <h3 className="font-medium text-yellow-800 dark:text-yellow-300 mb-2 flex items-center">
                  <LightBulbIcon className="h-5 w-5 mr-2" />
                  Analogía
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {model.analogy}
                </p>
              </div>
            </div>
            
            {/* Diagrama relevante según el modelo */}
            {model.id === 'public' && (
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Estructura de Nube Pública</h3>
                <div className="flex justify-center">
                  <div className="relative w-full max-w-2xl h-64 bg-blue-50 dark:bg-blue-900/20 rounded-lg overflow-hidden border border-blue-200 dark:border-blue-800 p-4">
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-3/4 h-16 bg-blue-500 dark:bg-blue-600 rounded-lg flex items-center justify-center text-white font-medium">
                      Proveedor de Nube (Microsoft Azure, AWS, GCP)
                    </div>
                    <div className="absolute bottom-4 left-4 w-24 h-24 bg-white dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-700 flex flex-col items-center justify-center">
                      <ServerIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                      <span className="text-xs mt-1 text-center text-gray-600 dark:text-gray-300">Cliente A</span>
                    </div>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-white dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-700 flex flex-col items-center justify-center">
                      <ServerIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                      <span className="text-xs mt-1 text-center text-gray-600 dark:text-gray-300">Cliente B</span>
                    </div>
                    <div className="absolute bottom-4 right-4 w-24 h-24 bg-white dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-700 flex flex-col items-center justify-center">
                      <ServerIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                      <span className="text-xs mt-1 text-center text-gray-600 dark:text-gray-300">Cliente C</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">
                  Múltiples clientes compartiendo la misma infraestructura del proveedor, pero con sus recursos aislados lógicamente.
                </p>
              </div>
            )}
            
            {model.id === 'private' && (
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Estructura de Nube Privada</h3>
                <div className="flex justify-center">
                  <div className="relative w-full max-w-2xl h-64 bg-green-50 dark:bg-green-900/20 rounded-lg overflow-hidden border border-green-200 dark:border-green-800 p-4">
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-3/4 h-16 bg-green-500 dark:bg-green-600 rounded-lg flex items-center justify-center text-white font-medium">
                      Organización
                    </div>
                    <div className="absolute top-28 left-1/2 transform -translate-x-1/2 w-3/4 h-16 bg-green-400 dark:bg-green-500 rounded-lg flex items-center justify-center text-white">
                      Centro de Datos Dedicado
                    </div>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 flex justify-between">
                      <div className="w-24 h-24 bg-white dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-700 flex flex-col items-center justify-center">
                        <ServerIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                        <span className="text-xs mt-1 text-center text-gray-600 dark:text-gray-300">Servidores</span>
                      </div>
                      <div className="w-24 h-24 bg-white dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-700 flex flex-col items-center justify-center">
                        <CloudIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                        <span className="text-xs mt-1 text-center text-gray-600 dark:text-gray-300">Almacenamiento</span>
                      </div>
                      <div className="w-24 h-24 bg-white dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-700 flex flex-col items-center justify-center">
                        <GlobeAltIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                        <span className="text-xs mt-1 text-center text-gray-600 dark:text-gray-300">Red</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">
                  Infraestructura de nube dedicada exclusivamente a una organización, ya sea on-premises o en un centro de datos externo.
                </p>
              </div>
            )}
            
            {model.id === 'hybrid' && (
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Estructura de Nube Híbrida</h3>
                <div className="flex justify-center">
                  <div className="relative w-full max-w-2xl h-72 bg-purple-50 dark:bg-purple-900/20 rounded-lg overflow-hidden border border-purple-200 dark:border-purple-800 p-4">
                    <div className="grid grid-cols-2 gap-4 h-full">
                      <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-3 flex flex-col">
                        <div className="text-center font-medium mb-2 text-blue-700 dark:text-blue-300">Nube Pública</div>
                        <div className="flex-grow flex items-center justify-center">
                          <div className="w-24 h-24 bg-white dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-700 flex flex-col items-center justify-center">
                            <CloudIcon className="h-8 w-8 text-blue-500 dark:text-blue-400" />
                            <span className="text-xs mt-1 text-center text-gray-600 dark:text-gray-300">Recursos Escalables</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-3 flex flex-col">
                        <div className="text-center font-medium mb-2 text-green-700 dark:text-green-300">Nube Privada</div>
                        <div className="flex-grow flex items-center justify-center">
                          <div className="w-24 h-24 bg-white dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-700 flex flex-col items-center justify-center">
                            <LockClosedIcon className="h-8 w-8 text-green-500 dark:text-green-400" />
                            <span className="text-xs mt-1 text-center text-gray-600 dark:text-gray-300">Datos Sensibles</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-purple-500 dark:bg-purple-600 rounded-full flex items-center justify-center z-10">
                      <ArrowsRightLeftIcon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">
                  Entorno que combina e integra nubes públicas y privadas, permitiendo mover cargas de trabajo entre ellas según necesidades.
                </p>
              </div>
            )}
            
            {model.id === 'multicloud' && (
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Estructura de Nubes Múltiples</h3>
                <div className="flex justify-center">
                  <div className="relative w-full max-w-2xl h-72 bg-orange-50 dark:bg-orange-900/20 rounded-lg overflow-hidden border border-orange-200 dark:border-orange-800 p-4">
                    <div className="flex flex-col h-full">
                      <div className="text-center font-medium mb-2 text-orange-700 dark:text-orange-300">Organización</div>
                      <div className="flex-grow grid grid-cols-3 gap-3 items-center">
                        <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-3 h-32 flex flex-col items-center justify-center">
                          <CloudIcon className="h-8 w-8 text-blue-500 dark:text-blue-400" />
                          <span className="text-sm font-medium mt-2 text-center text-blue-700 dark:text-blue-300">Azure</span>
                          <span className="text-xs mt-1 text-center text-gray-600 dark:text-gray-300">IA y Analytics</span>
                        </div>
                        <div className="bg-yellow-100 dark:bg-yellow-900/30 rounded-lg p-3 h-32 flex flex-col items-center justify-center">
                          <CloudIcon className="h-8 w-8 text-yellow-500 dark:text-yellow-400" />
                          <span className="text-sm font-medium mt-2 text-center text-yellow-700 dark:text-yellow-300">AWS</span>
                          <span className="text-xs mt-1 text-center text-gray-600 dark:text-gray-300">Almacenamiento</span>
                        </div>
                        <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-3 h-32 flex flex-col items-center justify-center">
                          <CloudIcon className="h-8 w-8 text-green-500 dark:text-green-400" />
                          <span className="text-sm font-medium mt-2 text-center text-green-700 dark:text-green-300">GCP</span>
                          <span className="text-xs mt-1 text-center text-gray-600 dark:text-gray-300">Contenedores</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">
                  Utilización de servicios de múltiples proveedores de nube en base a las fortalezas específicas de cada uno.
                </p>
              </div>
            )}
          </div>
        ))}
        
        {/* Tabla comparativa */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Comparativa de modelos de nube</h3>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Característica
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-blue-500 dark:text-blue-400 uppercase tracking-wider">
                    Nube Pública
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-green-500 dark:text-green-400 uppercase tracking-wider">
                    Nube Privada
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-purple-500 dark:text-purple-400 uppercase tracking-wider">
                    Nube Híbrida
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-orange-500 dark:text-orange-400 uppercase tracking-wider">
                    Nubes Múltiples
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {comparisonTable.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50 dark:bg-gray-900/30' : ''}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                      {row.public}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                      {row.private}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                      {row.hybrid}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                      {row.multicloud}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    ),
    
    examples: (
      <div className="space-y-8">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Casos de uso reales por modelo de nube</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-start mb-4">
              <GlobeAltIcon className="h-8 w-8 text-blue-500 dark:text-blue-400 mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Nube Pública</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Servicios disponibles para cualquier persona u organización</p>
              </div>
            </div>
            
            <div className="border-t border-gray-200 dark:border-gray-700 pt-4 space-y-4">
              <div>
                <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-1">Startup de software</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Una startup de desarrollo de aplicaciones móviles utiliza Azure App Service para desplegar sus aplicaciones 
                  sin tener que invertir en servidores propios. A medida que crece su base de usuarios, escalan sus recursos 
                  automáticamente para manejar el aumento de tráfico.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-1">Comercio minorista</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Una tienda online utiliza servicios de nube pública para manejar picos de tráfico durante eventos 
                  de ventas especiales como Black Friday. El resto del año opera con menor capacidad, pagando solo por 
                  lo que realmente utiliza.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-1">Educación</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Una universidad ofrece entornos virtuales de laboratorio para sus estudiantes utilizando máquinas virtuales 
                  en Azure, eliminando la necesidad de mantener laboratorios físicos de computación y permitiendo el acceso 
                  remoto a los estudiantes.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-start mb-4">
              <LockClosedIcon className="h-8 w-8 text-green-500 dark:text-green-400 mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Nube Privada</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Servicios exclusivos para una sola organización</p>
              </div>
            </div>
            
            <div className="border-t border-gray-200 dark:border-gray-700 pt-4 space-y-4">
              <div>
                <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-1">Banco internacional</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Un banco utiliza una nube privada para sus sistemas centrales bancarios y de procesamiento de transacciones. 
                  Esto proporciona el nivel de seguridad, cumplimiento regulatorio y control que requieren para datos financieros 
                  sensibles.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-1">Agencia gubernamental</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Una agencia de defensa gubernamental mantiene su propia nube privada para información clasificada y 
                  sistemas críticos, asegurando que todos los datos permanezcan dentro de su control directo y bajo 
                  sus protocolos de seguridad.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-1">Empresa farmacéutica</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Una compañía farmacéutica utiliza una nube privada para almacenar y procesar datos de investigación 
                  patentada y propiedad intelectual relacionada con el desarrollo de nuevos medicamentos, manteniendo 
                  el control absoluto sobre esta información valiosa.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-start mb-4">
              <ArrowsRightLeftIcon className="h-8 w-8 text-purple-500 dark:text-purple-400 mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Nube Híbrida</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Combinación interconectada de nubes públicas y privadas</p>
              </div>
            </div>
            
            <div className="border-t border-gray-200 dark:border-gray-700 pt-4 space-y-4">
              <div>
                <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-1">Empresa de servicios financieros</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Una empresa de servicios financieros utiliza una nube híbrida para mantener los datos sensibles de los 
                  clientes en su nube privada, mientras ejecuta sus aplicaciones web públicas y análisis de datos en 
                  Azure, manteniendo conexiones seguras entre ambos entornos.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-1">Fabricante de automóviles</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Un fabricante de automóviles mantiene sus sistemas de diseño y producción en una nube privada, 
                  pero utiliza servicios de nube pública para su sitio web de marketing, configuradores de vehículos 
                  y aplicaciones móviles para clientes.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-1">Hospital</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Un hospital utiliza una nube híbrida para mantener los registros médicos de los pacientes en su nube 
                  privada para cumplir con regulaciones como HIPAA, mientras utiliza la nube pública para aplicaciones 
                  no sensibles como su portal de información general y sistemas de reserva de citas.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-start mb-4">
              <CloudIcon className="h-8 w-8 text-orange-500 dark:text-orange-400 mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Nubes Múltiples</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Uso de servicios de diferentes proveedores de nube</p>
              </div>
            </div>
            
            <div className="border-t border-gray-200 dark:border-gray-700 pt-4 space-y-4">
              <div>
                <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-1">Empresa de entretenimiento global</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Una empresa de medios utiliza AWS para su infraestructura principal, Google Cloud para análisis de 
                  datos e IA, y Azure para sus herramientas de productividad empresarial, aprovechando las fortalezas 
                  específicas de cada proveedor.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-1">Empresa de comercio electrónico</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Una plataforma de comercio electrónico utiliza múltiples proveedores de nube para garantizar alta 
                  disponibilidad y evitar tiempos de inactividad. Si un proveedor tiene problemas, la operación continúa 
                  en los otros proveedores sin interrupciones para los clientes.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-1">Empresa internacional</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Una corporación multinacional utiliza diferentes proveedores de nube en distintas regiones geográficas 
                  para cumplir con regulaciones locales sobre residencia de datos, garantizando que los datos de los 
                  clientes permanezcan en sus respectivos países.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Escenarios de soluciones Azure</h3>
          
          <div className="space-y-6">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-medium text-blue-800 dark:text-blue-300 mb-2">Escenario: Gestión unificada con Azure Arc</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Una empresa de servicios financieros tiene recursos en Azure, en centros de datos locales y algunos servicios en AWS. 
                Querían una forma de gestionar, asegurar y gobernar todos estos recursos desde un solo lugar.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Solución:</strong> Implementaron Azure Arc para extender la gestión de Azure a todos sus recursos distribuidos. 
                Ahora pueden aplicar políticas coherentes de seguridad y cumplimiento en todos sus entornos, implementar servicios de datos 
                de Azure en cualquier infraestructura y gestionar todas sus máquinas virtuales, Kubernetes y servidores desde el portal de Azure.
              </p>
            </div>
            
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <h4 className="font-medium text-purple-800 dark:text-purple-300 mb-2">Escenario: Migración con Azure VMware Solution</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Un hospital con una gran inversión en infraestructura VMware necesitaba escalar rápidamente sin perturbar sus aplicaciones 
                críticas de atención médica. No tenían tiempo para rediseñar sus aplicaciones para la nube nativa.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Solución:</strong> Utilizaron Azure VMware Solution para extender y migrar su entorno VMware a Azure. Pudieron seguir 
                utilizando las mismas herramientas de VMware con las que su equipo estaba familiarizado, mientras obtenían los beneficios de 
                escalabilidad, rendimiento y seguridad de Azure. Esto les permitió migrar rápidamente sin cambios en sus aplicaciones.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
    
    quiz: (
      <div className="space-y-8">
        <div className="bg-azure-50 dark:bg-azure-900/20 p-6 rounded-lg border border-azure-100 dark:border-azure-900/50">
          <h2 className="text-xl font-semibold text-azure-700 dark:text-azure-400 mb-4">Pon a prueba tus conocimientos</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Responde estas preguntas para verificar tu comprensión de los diferentes modelos de nube.
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
              href="https://learn.microsoft.com/es-es/training/modules/describe-cloud-compute/5-define-cloud-models" 
              target="_blank" 
              rel="noreferrer"
              className="text-azure-600 dark:text-azure-400 hover:text-azure-800 dark:hover:text-azure-300 font-medium"
            >
              Ver más
            </a>
          </div>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Para profundizar en los distintos modelos de nube y cómo Azure los soporta, consulta la documentación oficial de Microsoft Azure 
            y realiza los módulos de aprendizaje gratuitos en Microsoft Learn.
          </p>
        </div>
      </div>
    )
  };
  
  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center mb-8">
        <CloudIcon className="h-8 w-8 text-azure-600 dark:text-azure-400 mr-3" />
        <h1 className="text-3xl font-bold text-azure-700 dark:text-azure-400">Modelos de Nube</h1>
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
            onClick={() => setActiveTab('comparison')}
            className={`py-2 px-4 border-b-2 font-medium text-sm rounded-t-lg ${
              activeTab === 'comparison'
                ? 'border-azure-500 text-azure-600 dark:text-azure-400 dark:border-azure-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Comparativa
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