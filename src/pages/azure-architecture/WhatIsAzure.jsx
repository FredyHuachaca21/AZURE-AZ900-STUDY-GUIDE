// Ruta: /src/pages/azure-architecture/WhatIsAzure.jsx
import { useState } from 'react';
import { 
  CloudArrowUpIcon, 
  ServerIcon, 
  GlobeAltIcon, 
  CpuChipIcon,
  BuildingOfficeIcon,
  CogIcon,
  CheckCircleIcon,
  XCircleIcon,
  PresentationChartBarIcon,
  ShieldCheckIcon,
  LightBulbIcon,
  InformationCircleIcon,
  QuestionMarkCircleIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

export default function WhatIsAzure() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showExplanations, setShowExplanations] = useState({});
  
  // Definición de los servicios de Azure por categorías
  const azureServices = [
    {
      category: 'Computación',
      icon: CpuChipIcon,
      color: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
      textColor: 'text-blue-700 dark:text-blue-300',
      services: [
        'Máquinas Virtuales',
        'Azure App Service',
        'Azure Functions',
        'Azure Container Instances',
        'Azure Kubernetes Service'
      ]
    },
    {
      category: 'Redes',
      icon: GlobeAltIcon,
      color: 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800',
      textColor: 'text-purple-700 dark:text-purple-300',
      services: [
        'Azure Virtual Network',
        'Azure Load Balancer',
        'Azure DNS',
        'Azure VPN Gateway',
        'Azure ExpressRoute'
      ]
    },
    {
      category: 'Almacenamiento',
      icon: ServerIcon,
      color: 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800',
      textColor: 'text-emerald-700 dark:text-emerald-300',
      services: [
        'Azure Blob Storage',
        'Azure Files',
        'Azure Queue Storage',
        'Azure Table Storage',
        'Azure Managed Disks'
      ]
    },
    {
      category: 'Bases de datos',
      icon: BuildingOfficeIcon,
      color: 'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800',
      textColor: 'text-amber-700 dark:text-amber-300',
      services: [
        'Azure SQL Database',
        'Azure Cosmos DB',
        'Azure MySQL',
        'Azure PostgreSQL',
        'Azure Cache for Redis'
      ]
    },
    {
      category: 'IA y Análisis',
      icon: PresentationChartBarIcon,
      color: 'bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-800',
      textColor: 'text-indigo-700 dark:text-indigo-300',
      services: [
        'Azure Machine Learning',
        'Azure Cognitive Services',
        'Azure Synapse Analytics',
        'Azure HDInsight',
        'Azure Databricks'
      ]
    },
    {
      category: 'Seguridad',
      icon: ShieldCheckIcon,
      color: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800',
      textColor: 'text-red-700 dark:text-red-300',
      services: [
        'Microsoft Defender for Cloud',
        'Azure Key Vault',
        'Microsoft Entra ID',
        'Azure Information Protection',
        'Azure Sentinel'
      ]
    }
  ];
  
  // Definición de hitos de Azure
  const azureTimeline = [
    {
      year: '2008',
      event: 'Anuncio de "Project Red Dog" (nombre en código de Azure)'
    },
    {
      year: '2010',
      event: 'Lanzamiento comercial de Windows Azure'
    },
    {
      year: '2014',
      event: 'Renombrado a Microsoft Azure'
    },
    {
      year: '2015',
      event: 'Lanzamiento de Azure Resource Manager'
    },
    {
      year: '2016',
      event: 'Expansión de centros de datos a nivel global'
    },
    {
      year: '2018',
      event: 'Foco en IA, IoT y soluciones híbridas'
    },
    {
      year: '2019-2020',
      event: 'Mayor integración con herramientas de código abierto'
    },
    {
      year: '2021-presente',
      event: 'Enfoque en soluciones de nube híbrida, multi-nube y sostenibilidad'
    }
  ];

  // Definición de preguntas para el quiz
  const quizQuestions = [
    {
      id: 1,
      question: "¿Qué es Microsoft Azure?",
      options: [
        "Un sistema operativo basado en Windows para servidores",
        "Una plataforma de servicios en la nube de Microsoft",
        "Un software para gestionar bases de datos SQL",
        "Una suite de aplicaciones de oficina en la nube"
      ],
      correctAnswer: 1,
      explanation: "Microsoft Azure es una plataforma de servicios en la nube creada por Microsoft. Ofrece más de 200 productos y servicios en la nube diseñados para ayudar a las organizaciones a enfrentar sus desafíos empresariales, desde hospedaje de aplicaciones hasta almacenamiento, análisis de datos, inteligencia artificial y más."
    },
    {
      id: 2,
      question: "¿Cuál de las siguientes NO es una característica principal de Microsoft Azure?",
      options: [
        "Escalabilidad global",
        "Modelos de pago por uso",
        "Garantía de cero tiempo de inactividad",
        "Compatibilidad con múltiples lenguajes de programación"
      ],
      correctAnswer: 2,
      explanation: "Microsoft Azure ofrece altos niveles de disponibilidad a través de SLAs (Acuerdos de Nivel de Servicio), pero ningún proveedor de servicios en la nube puede garantizar cero tiempo de inactividad (100% de disponibilidad). Los SLAs típicos de Azure varían entre 99.9% y 99.99% de disponibilidad dependiendo del servicio, lo que permite cierto tiempo de inactividad permitido."
    },
    {
      id: 3,
      question: "¿Cuándo se lanzó comercialmente Azure?",
      options: [
        "2005",
        "2008",
        "2010",
        "2015"
      ],
      correctAnswer: 2,
      explanation: "Microsoft anunció Azure en 2008 (inicialmente con el nombre en código 'Project Red Dog'), pero su lanzamiento comercial oficial fue en febrero de 2010. Originalmente se llamaba 'Windows Azure' y fue renombrado a 'Microsoft Azure' en 2014 para reflejar su capacidad para trabajar con múltiples plataformas más allá de Windows."
    },
    {
      id: 4,
      question: "¿Qué es Azure Portal?",
      options: [
        "Un dispositivo físico para conectarse a Azure",
        "Una interfaz web para gestionar los recursos y servicios de Azure",
        "Una red privada virtual para conectarse a Azure",
        "Una aplicación de escritorio para desarrolladores de Azure"
      ],
      correctAnswer: 1,
      explanation: "Azure Portal es una interfaz web unificada y basada en navegador que permite a los usuarios administrar sus suscripciones y recursos de Azure. Proporciona una experiencia gráfica para crear, configurar, administrar y monitorear todos los recursos de Azure desde un único lugar."
    },
    {
      id: 5,
      question: "¿Cuál de estas opciones describe mejor el modelo de negocio de Azure?",
      options: [
        "Licencia anual con costo fijo",
        "Compra única con actualizaciones gratuitas",
        "Pago por uso (pay-as-you-go)",
        "Suscripción mensual con recursos ilimitados"
      ],
      correctAnswer: 2,
      explanation: "El modelo de negocio principal de Azure es el pago por uso (pay-as-you-go), donde los clientes solo pagan por los recursos y servicios que utilizan, sin compromisos ni costos iniciales. Esto permite a las empresas escalar hacia arriba o hacia abajo según sus necesidades y optimizar costos. Azure también ofrece planes de reserva con descuentos para uso predecible y opciones empresariales, pero el pago por uso es el modelo fundamental."
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
    overview: (
      <div className="space-y-8">
        <div className="bg-azure-50 dark:bg-azure-900/20 p-6 rounded-lg flex items-start border border-azure-100 dark:border-azure-900/50">
          <CloudArrowUpIcon className="h-6 w-6 text-azure-600 dark:text-azure-400 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-lg font-semibold text-azure-700 dark:text-azure-400 mb-2">¿Qué es Microsoft Azure?</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Microsoft Azure es una plataforma de computación en la nube creada por Microsoft para construir, probar, 
              implementar y administrar aplicaciones y servicios a través de centros de datos gestionados por Microsoft 
              alrededor del mundo.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Azure ofrece más de 200 productos y servicios en la nube diseñados para ayudar a las organizaciones 
              a enfrentar sus desafíos empresariales. Proporciona soluciones de IaaS (Infraestructura como Servicio), 
              PaaS (Plataforma como Servicio) y SaaS (Software como Servicio) que se pueden utilizar para 
              computación, análisis, almacenamiento, redes, entre muchas otras funciones.
            </p>
          </div>
        </div>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 dark:border-blue-700 p-4 rounded-r-md">
          <div className="flex">
            <LightBulbIcon className="h-6 w-6 text-blue-500 dark:text-blue-400 mr-3 flex-shrink-0 mt-1" />
            <div>
              <p className="text-blue-700 dark:text-blue-300 font-medium mb-1">Explicado de forma simple</p>
              <p className="text-gray-700 dark:text-gray-300">
                Imagina que Azure es como una enorme tienda de herramientas y servicios tecnológicos:
              </p>
              <ul className="mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                <li>• En lugar de comprar y mantener tus propios servidores, simplemente "alquilas" lo que necesitas.</li>
                <li>• Puedes elegir entre cientos de herramientas tecnológicas ya preparadas para usar.</li>
                <li>• Solo pagas por lo que utilizas, como una factura de electricidad.</li>
                <li>• Puedes escalar (aumentar o disminuir) tus recursos según tus necesidades en cualquier momento.</li>
                <li>• Microsoft se encarga del mantenimiento, seguridad y actualizaciones de la infraestructura.</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4 flex items-center">
              <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2" />
              Características principales
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-azure-500 dark:text-azure-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300"><strong>Global:</strong> Disponible en más de 60 regiones en todo el mundo.</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-azure-500 dark:text-azure-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300"><strong>Escalable:</strong> Capacidad para aumentar o disminuir recursos según necesidades.</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-azure-500 dark:text-azure-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300"><strong>Seguro:</strong> Diseñado con seguridad en todas las capas.</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-azure-500 dark:text-azure-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300"><strong>Flexible:</strong> Soporta múltiples sistemas operativos, lenguajes y herramientas.</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-azure-500 dark:text-azure-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300"><strong>Híbrido:</strong> Conecta entornos locales con la nube para mayor flexibilidad.</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-azure-500 dark:text-azure-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300"><strong>Inteligente:</strong> Servicios avanzados de IA, machine learning y análisis de datos.</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4 flex items-center">
              <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2" />
              Ventajas para organizaciones
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-azure-500 dark:text-azure-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300"><strong>Agilidad:</strong> Implementación rápida de aplicaciones y servicios.</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-azure-500 dark:text-azure-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300"><strong>Reducción de costos:</strong> Modelo de pago por uso sin grandes inversiones iniciales.</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-azure-500 dark:text-azure-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300"><strong>Cumplimiento:</strong> Amplia gama de certificaciones de cumplimiento normativo.</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-azure-500 dark:text-azure-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300"><strong>Recuperación ante desastres:</strong> Soluciones robustas de backup y recuperación.</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-azure-500 dark:text-azure-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300"><strong>Innovación:</strong> Acceso a tecnologías avanzadas sin grandes inversiones.</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-azure-500 dark:text-azure-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300"><strong>Compatibilidad:</strong> Integración con productos Microsoft existentes y herramientas de código abierto.</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">¿Cómo funciona Azure?</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Azure funciona a través de una red global de centros de datos administrados por Microsoft. Estos centros de 
            datos están agrupados en regiones geográficas, proporcionando a los usuarios la flexibilidad de implementar 
            aplicaciones donde las necesiten.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="bg-azure-50 dark:bg-azure-900/20 p-4 rounded-lg">
              <h4 className="font-medium text-azure-700 dark:text-azure-400 mb-2 flex items-center">
                <ServerIcon className="h-5 w-5 mr-2" />
                Centros de datos
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Instalaciones físicas que albergan miles de servidores con sistemas de energía, refrigeración y red redundantes.
              </p>
            </div>
            
            <div className="bg-azure-50 dark:bg-azure-900/20 p-4 rounded-lg">
              <h4 className="font-medium text-azure-700 dark:text-azure-400 mb-2 flex items-center">
                <GlobeAltIcon className="h-5 w-5 mr-2" />
                Regiones
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Áreas geográficas que contienen al menos un centro de datos, estratégicamente ubicadas cerca de los centros de población.
              </p>
            </div>
            
            <div className="bg-azure-50 dark:bg-azure-900/20 p-4 rounded-lg">
              <h4 className="font-medium text-azure-700 dark:text-azure-400 mb-2 flex items-center">
                <CogIcon className="h-5 w-5 mr-2" />
                Zonas de disponibilidad
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Ubicaciones físicamente separadas dentro de una región, diseñadas para proteger contra fallos en un centro de datos.
              </p>
            </div>
          </div>
          
          <p className="text-gray-700 dark:text-gray-300">
            Cuando utilizas Azure, estás utilizando estos recursos físicos a través de la virtualización. Microsoft maneja 
            toda la infraestructura física y proporciona herramientas como el Azure Portal, Azure PowerShell y Azure CLI 
            para que puedas administrar tus recursos virtuales.
          </p>
        </div>
        
        <div className="bg-azure-50 dark:bg-azure-900/20 p-5 rounded-lg border border-azure-200 dark:border-azure-900/30">
          <div className="flex items-start">
            <InformationCircleIcon className="h-6 w-6 text-azure-600 dark:text-azure-400 mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-azure-700 dark:text-azure-300 mb-2">Importancia para el examen AZ-900</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Para el examen AZ-900, es fundamental comprender:
              </p>
              <ul className="mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                <li>• Qué es Azure y sus características principales</li>
                <li>• Los conceptos básicos de cómo funciona Azure (regiones, zonas de disponibilidad)</li>
                <li>• Los beneficios de usar Azure para las organizaciones</li>
                <li>• El modelo de pago por uso de Azure y su impacto en los costos</li>
                <li>• Las diferentes categorías de servicios que ofrece Azure</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),
    
    services: (
      <div className="space-y-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-azure-700 dark:text-azure-400 mb-6">Principales servicios y productos de Azure</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Azure ofrece más de 200 productos y servicios en múltiples categorías. A continuación se muestran 
            algunas de las categorías principales con ejemplos de servicios destacados:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {azureServices.map((category) => (
              <div key={category.category} className={`p-5 rounded-lg border ${category.color}`}>
                <div className="flex items-center mb-3">
                  <div className="p-2 rounded-full bg-white dark:bg-gray-800 mr-3">
                    <category.icon className={`h-6 w-6 ${category.textColor}`} />
                  </div>
                  <h3 className={`font-medium text-lg ${category.textColor}`}>{category.category}</h3>
                </div>
                <ul className="space-y-2">
                  {category.services.map((service, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircleIcon className={`h-5 w-5 ${category.textColor} mr-2 mt-0.5 flex-shrink-0`} />
                      <span className="text-gray-700 dark:text-gray-300">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-azure-50 dark:bg-azure-900/20 rounded-lg border border-azure-100 dark:border-azure-900/50">
            <p className="text-gray-700 dark:text-gray-300 text-sm italic">
              <strong>Nota:</strong> Para el examen AZ-900, no es necesario conocer todos los servicios de Azure en detalle,
              pero sí es importante entender las categorías principales y algunos ejemplos de servicios en cada una.
              El examen se centra más en los conceptos fundamentales que en características específicas de cada servicio.
            </p>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Formas de acceder a Azure</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-azure-50 dark:bg-azure-900/20 p-4 rounded-lg">
              <h4 className="font-medium text-azure-700 dark:text-azure-400 mb-2">Azure Portal</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Interfaz web basada en navegador para administrar todos los servicios de Azure. Ofrece una experiencia 
                gráfica intuitiva y personalizable.
              </p>
            </div>
            
            <div className="bg-azure-50 dark:bg-azure-900/20 p-4 rounded-lg">
              <h4 className="font-medium text-azure-700 dark:text-azure-400 mb-2">Azure CLI</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Interfaz de línea de comandos multiplataforma para crear y gestionar recursos de Azure mediante comandos.
              </p>
            </div>
            
            <div className="bg-azure-50 dark:bg-azure-900/20 p-4 rounded-lg">
              <h4 className="font-medium text-azure-700 dark:text-azure-400 mb-2">Azure PowerShell</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Módulo de PowerShell que permite administrar Azure mediante comandos de PowerShell.
              </p>
            </div>
            
            <div className="bg-azure-50 dark:bg-azure-900/20 p-4 rounded-lg">
              <h4 className="font-medium text-azure-700 dark:text-azure-400 mb-2">Azure Cloud Shell</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Entorno de shell interactivo basado en navegador para administrar recursos de Azure.
              </p>
            </div>
            
            <div className="bg-azure-50 dark:bg-azure-900/20 p-4 rounded-lg">
              <h4 className="font-medium text-azure-700 dark:text-azure-400 mb-2">SDKs y APIs</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Bibliotecas para diferentes lenguajes de programación (Python, .NET, Java, JavaScript, etc.) 
                para interactuar con Azure.
              </p>
            </div>
            
            <div className="bg-azure-50 dark:bg-azure-900/20 p-4 rounded-lg">
              <h4 className="font-medium text-azure-700 dark:text-azure-400 mb-2">Azure Mobile App</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Aplicación móvil para monitorear y administrar recursos de Azure desde dispositivos iOS y Android.
              </p>
            </div>
          </div>
          
          <div className="bg-azure-50 dark:bg-azure-900/20 p-4 rounded-lg border border-azure-100 dark:border-azure-900/50">
            <div className="flex items-start">
              <LightBulbIcon className="h-6 w-6 text-azure-600 dark:text-azure-400 mr-3 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-azure-700 dark:text-azure-300 mb-2">Azure Portal vs. Herramientas de línea de comandos</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Aunque el Portal de Azure es la forma más visual e intuitiva de interactuar con Azure, las herramientas 
                  de línea de comandos como Azure CLI y PowerShell ofrecen ventajas importantes para la automatización 
                  y la gestión de recursos a escala. Para el examen AZ-900, es importante entender que existen diferentes 
                  formas de interactuar con Azure según las necesidades específicas de cada situación.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Modelos de Servicio en Azure</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-medium text-blue-700 dark:text-blue-300 mb-3 flex items-center">
                <ServerIcon className="h-5 w-5 mr-2" />
                IaaS
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Infraestructura como Servicio</strong>
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                Proporciona infraestructura virtualizada (servidores, almacenamiento, redes) a través de Internet.
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                <strong>Ejemplos:</strong> Azure Virtual Machines, Azure Storage, Azure Virtual Networks
              </p>
            </div>
            
            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-5 rounded-lg border border-indigo-200 dark:border-indigo-800">
              <h4 className="font-medium text-indigo-700 dark:text-indigo-300 mb-3 flex items-center">
                <CogIcon className="h-5 w-5 mr-2" />
                PaaS
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Plataforma como Servicio</strong>
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                Proporciona un entorno para desarrollar, probar e implementar aplicaciones sin preocuparse por la infraestructura subyacente.
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                <strong>Ejemplos:</strong> Azure App Service, Azure Functions, Azure SQL Database
              </p>
            </div>
            
            <div className="bg-emerald-50 dark:bg-emerald-900/20 p-5 rounded-lg border border-emerald-200 dark:border-emerald-800">
              <h4 className="font-medium text-emerald-700 dark:text-emerald-300 mb-3 flex items-center">
                <CloudArrowUpIcon className="h-5 w-5 mr-2" />
                SaaS
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Software como Servicio</strong>
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                Proporciona aplicaciones completas listas para usar a través de Internet, sin necesidad de instalar, 
                mantener o actualizar software.
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                <strong>Ejemplos:</strong> Microsoft 365, Dynamics 365, Power BI
              </p>
            </div>
          </div>
          
          <p className="text-gray-700 dark:text-gray-300">
            Estos modelos de servicio representan diferentes niveles de responsabilidad compartida entre el 
            proveedor de la nube (Microsoft) y el cliente. A medida que se avanza de IaaS a PaaS y luego a SaaS, 
            Microsoft asume más responsabilidades de gestión, mientras que el cliente se centra más en sus datos 
            y aplicaciones.
          </p>
        </div>
      </div>
    ),
    
    history: (
      <div className="space-y-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-azure-700 dark:text-azure-400 mb-6">Historia y evolución de Microsoft Azure</h2>
          
          <div className="relative py-8">
            <div className="absolute left-0 md:left-1/2 h-full w-1 bg-azure-200 dark:bg-azure-900/50 transform md:translate-x-0 translate-x-4"></div>
            
            {azureTimeline.map((item, index) => (
              <div 
                key={index} 
                className={`mb-8 flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center`}
              >
                <div className={`z-10 flex items-center order-1 md:w-1/2 ${
                  index % 2 === 0 ? 'md:justify-end md:pr-8' : 'md:justify-start md:pl-8'
                }`}>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                    <span className="text-sm font-bold text-azure-700 dark:text-azure-400">{item.year}</span>
                    <p className="text-gray-700 dark:text-gray-300 mt-1">{item.event}</p>
                  </div>
                </div>
                
                <div className="z-20 absolute md:static flex items-center justify-center w-8 h-8 rounded-full bg-azure-500 dark:bg-azure-600 text-white border-4 border-white dark:border-gray-800">
                  <ClockIcon className="h-4 w-4" />
                </div>
                
                <div className="order-1 md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Momentos clave en la evolución de Azure</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-azure-50 dark:bg-azure-900/20 p-5 rounded-lg border border-azure-200 dark:border-azure-800">
              <h4 className="font-medium text-azure-700 dark:text-azure-300 mb-3">Los inicios (2008-2010)</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Microsoft anunció "Project Red Dog" (nombre en código de Azure) en 2008 como su entrada en el mercado 
                de servicios en la nube. En febrero de 2010, Windows Azure se lanzó comercialmente con servicios 
                básicos de computación y almacenamiento, enfocado principalmente en desarrolladores de .NET.
              </p>
            </div>
            
            <div className="bg-azure-50 dark:bg-azure-900/20 p-5 rounded-lg border border-azure-200 dark:border-azure-800">
              <h4 className="font-medium text-azure-700 dark:text-azure-300 mb-3">Expansión y renombre (2011-2014)</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Durante este período, Azure añadió soporte para más lenguajes de programación y expandió significativamente 
                su catálogo de servicios. En 2014, Microsoft renombró "Windows Azure" a "Microsoft Azure" para reflejar 
                su compromiso con las plataformas de código abierto y múltiples sistemas operativos más allá de Windows.
              </p>
            </div>
            
            <div className="bg-azure-50 dark:bg-azure-900/20 p-5 rounded-lg border border-azure-200 dark:border-azure-800">
              <h4 className="font-medium text-azure-700 dark:text-azure-300 mb-3">Madurez y diversificación (2015-presente)</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Azure maduró considerablemente con la introducción de Azure Resource Manager (ARM) para la gestión 
                de recursos. Microsoft expandió agresivamente sus centros de datos globales y diversificó su oferta 
                con servicios avanzados de IA, IoT, análisis de datos y aplicaciones de nube híbrida. Hoy, Azure es 
                una de las plataformas de nube líderes en el mercado, compitiendo directamente con AWS y Google Cloud.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">El futuro de Azure</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Microsoft continúa invirtiendo fuertemente en Azure, con un enfoque en varias áreas estratégicas:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-azure-50 dark:bg-azure-900/20 p-4 rounded-lg">
              <h4 className="font-medium text-azure-700 dark:text-azure-400 mb-2">Nube híbrida y multi-nube</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Soluciones como Azure Arc permiten gestionar recursos de Azure, on-premises e incluso en otras nubes 
                desde una plataforma unificada.
              </p>
            </div>
            
            <div className="bg-azure-50 dark:bg-azure-900/20 p-4 rounded-lg">
              <h4 className="font-medium text-azure-700 dark:text-azure-400 mb-2">Inteligencia Artificial y Machine Learning</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Continua expansión de servicios de IA, como Azure OpenAI Service, para democratizar el acceso a 
                tecnologías avanzadas de inteligencia artificial.
              </p>
            </div>
            
            <div className="bg-azure-50 dark:bg-azure-900/20 p-4 rounded-lg">
              <h4 className="font-medium text-azure-700 dark:text-azure-400 mb-2">Sostenibilidad</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Microsoft se ha comprometido a que Azure sea carbono negativo para 2030, con iniciativas para 
                centros de datos más eficientes y energéticamente sostenibles.
              </p>
            </div>
            
            <div className="bg-azure-50 dark:bg-azure-900/20 p-4 rounded-lg">
              <h4 className="font-medium text-azure-700 dark:text-azure-400 mb-2">Edge Computing e IoT</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Expansión de capacidades de computación en el borde con Azure IoT Edge y otras soluciones para 
                procesar datos más cerca de donde se generan.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-azure-50 dark:bg-azure-900/20 p-5 rounded-lg border border-azure-200 dark:border-azure-900/30">
          <div className="flex items-start">
            <InformationCircleIcon className="h-6 w-6 text-azure-600 dark:text-azure-400 mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-azure-700 dark:text-azure-300 mb-2">Importancia para el examen AZ-900</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Para el examen AZ-900, no es necesario memorizar todas las fechas y detalles históricos de Azure. 
                Lo importante es tener una comprensión general de cómo ha evolucionado Azure y conocer algunos 
                hitos clave, como el lanzamiento comercial en 2010 y el cambio de nombre de Windows Azure a 
                Microsoft Azure en 2014.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
    
    comparison: (
      <div className="space-y-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-azure-700 dark:text-azure-400 mb-6">Azure vs. otros proveedores de nube</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Microsoft Azure es uno de los tres principales proveedores de servicios en la nube, junto con 
            Amazon Web Services (AWS) y Google Cloud Platform (GCP). Cada uno tiene sus fortalezas y 
            características distintivas.
          </p>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 border border-gray-200 dark:border-gray-700 rounded-lg">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"></th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-azure-500 dark:text-azure-300 uppercase tracking-wider">
                    <div className="flex items-center">
                      <CloudArrowUpIcon className="h-5 w-5 mr-1" />
                      Microsoft Azure
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-yellow-500 dark:text-yellow-300 uppercase tracking-wider">
                    <div className="flex items-center">
                      <CloudArrowUpIcon className="h-5 w-5 mr-1" />
                      Amazon Web Services
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-green-500 dark:text-green-300 uppercase tracking-wider">
                    <div className="flex items-center">
                      <CloudArrowUpIcon className="h-5 w-5 mr-1" />
                      Google Cloud Platform
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Lanzamiento</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">2010</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">2006</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">2008</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Cobertura global</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">60+ regiones</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">25+ regiones</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">25+ regiones</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Integración con ecosistema</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Productos Microsoft (Windows, Office, etc.)</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Ecosistema AWS</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Productos Google (Analytics, Maps, etc.)</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Soluciones híbridas</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Muy fuerte (Azure Arc, Stack)</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Moderado (AWS Outposts)</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Moderado (Anthos)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Fortalezas específicas</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Empresas, soluciones híbridas, DevOps</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Variedad de servicios, madurez</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">IA/ML, análisis de datos, Kubernetes</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Interfaz de usuario</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Portal Azure (intuitivo)</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">AWS Management Console (complejo)</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Google Cloud Console (minimalista)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="font-medium text-azure-700 dark:text-azure-400 mb-4">Ventajas principales de Azure</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">Integración perfecta con productos Microsoft existentes</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">Soluciones de nube híbrida robustas (Azure Arc, Azure Stack)</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">Mayor número de regiones globales que la competencia</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">Fuerte enfoque en seguridad y cumplimiento normativo</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">Excelente soporte para entornos de desarrollo .NET</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="font-medium text-yellow-700 dark:text-yellow-400 mb-4">Ventajas principales de AWS</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">Mayor tiempo en el mercado y madurez de servicios</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">Catálogo más amplio de servicios especializados</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">Comunidad de desarrolladores más grande</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">Mayor personalización en algunos servicios</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">Opciones detalladas de precios</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="font-medium text-green-700 dark:text-green-400 mb-4">Ventajas principales de GCP</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">Fortaleza en IA, ML y análisis de datos</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">Líder en tecnología de contenedores (Kubernetes)</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">Red de fibra privada global de alta velocidad</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">Precios competitivos con descuentos por uso sostenido</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">Integración con productos de Google (Maps, Analytics)</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4 flex items-center">
            <LightBulbIcon className="h-5 w-5 text-yellow-500 dark:text-yellow-400 mr-2" />
            Tendencia multi-nube e híbrida
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Una tendencia creciente es que las organizaciones adopten un enfoque multi-nube (usar varios proveedores 
            de nube) o híbrido (combinar entornos locales con la nube). Microsoft ha reconocido esta tendencia y ha 
            invertido significativamente en soluciones como:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-azure-50 dark:bg-azure-900/20 p-4 rounded-lg">
              <h4 className="font-medium text-azure-700 dark:text-azure-400 mb-2">Azure Arc</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Permite gestionar recursos en diferentes entornos (Azure, on-premises, otras nubes) desde una única plataforma.
              </p>
            </div>
            
            <div className="bg-azure-50 dark:bg-azure-900/20 p-4 rounded-lg">
              <h4 className="font-medium text-azure-700 dark:text-azure-400 mb-2">Azure Stack</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Conjunto de productos que extienden los servicios y capacidades de Azure a entornos locales y edge.
              </p>
            </div>
          </div>
          
          <p className="text-gray-700 dark:text-gray-300">
            Esta capacidad de integrar entornos híbridos y multi-nube es considerada una de las fortalezas 
            clave de Azure frente a sus competidores, especialmente para empresas que no pueden migrar 
            completamente a la nube debido a requisitos de cumplimiento, latencia o legados.
          </p>
        </div>
        
        <div className="bg-azure-50 dark:bg-azure-900/20 p-5 rounded-lg border border-azure-200 dark:border-azure-900/30">
          <div className="flex items-start">
            <InformationCircleIcon className="h-6 w-6 text-azure-600 dark:text-azure-400 mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-azure-700 dark:text-azure-300 mb-2">Importancia para el examen AZ-900</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Para el examen AZ-900, no es necesario hacer comparaciones detalladas entre proveedores de nube, pero 
                es útil conocer las principales ventajas competitivas de Azure, como sus soluciones de nube híbrida, 
                su integración con productos Microsoft y su amplia presencia global. El examen puede incluir preguntas 
                sobre estas características distintivas de Azure.
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
            Responde estas preguntas para verificar tu comprensión de Microsoft Azure.
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
                      <InformationCircleIcon className="h-5 w-5 mr-1" />
                      Ver explicación
                    </button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4 flex items-center">
            <InformationCircleIcon className="h-6 w-6 text-azure-600 dark:text-azure-400 mr-2" />
            Consejos para el examen sobre Microsoft Azure
          </h3>
          
          <ul className="space-y-3">
            <li className="flex items-start">
              <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">Comprende qué es Azure, sus características principales y su evolución.</span>
            </li>
            <li className="flex items-start">
              <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">Familiarízate con las diferentes formas de acceder a Azure (Portal, CLI, PowerShell).</span>
            </li>
            <li className="flex items-start">
              <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">Conoce las principales categorías de servicios de Azure y algunos ejemplos de cada una.</span>
            </li>
            <li className="flex items-start">
              <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">Entiende los modelos de servicio en la nube (IaaS, PaaS, SaaS) y cómo se aplican en Azure.</span>
            </li>
            <li className="flex items-start">
              <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">Comprende las ventajas competitivas de Azure, como sus soluciones híbridas y su integración con productos Microsoft.</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-azure-50 dark:bg-azure-900/20 p-6 rounded-lg border border-azure-100 dark:border-azure-900/50">
          <h4 className="font-medium text-azure-700 dark:text-azure-300 mb-3">Puntos clave para el examen AZ-900</h4>
          <ul className="space-y-2">
            <li className="flex items-start">
              <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">Azure es una plataforma de servicios en la nube creada por Microsoft con más de 200 productos y servicios.</span>
            </li>
            <li className="flex items-start">
              <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">Azure se lanzó comercialmente en 2010 y ha evolucionado significativamente, incluyendo el cambio de nombre de Windows Azure a Microsoft Azure en 2014.</span>
            </li>
            <li className="flex items-start">
              <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">Las principales formas de acceder a Azure son a través del Portal de Azure (interfaz web), Azure CLI, Azure PowerShell, SDKs y APIs.</span>
            </li>
            <li className="flex items-start">
              <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">Azure opera a través de una red global de centros de datos agrupados en regiones, proporcionando servicios de IaaS, PaaS y SaaS.</span>
            </li>
            <li className="flex items-start">
              <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">Azure tiene fortalezas distintivas en soluciones de nube híbrida, integración con productos Microsoft y una amplia presencia global.</span>
            </li>
          </ul>
        </div>
      </div>
    )
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center mb-8">
        <CloudArrowUpIcon className="h-8 w-8 text-azure-600 dark:text-azure-400 mr-3" />
        <h1 className="text-3xl font-bold text-azure-700 dark:text-azure-400">¿Qué es Microsoft Azure?</h1>
      </div>
      
      {/* Tabs de Navegación */}
      <div className="border-b border-gray-200 dark:border-gray-700 mb-8">
        <nav className="flex space-x-2 overflow-x-auto" aria-label="Tabs">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-2 px-4 border-b-2 font-medium text-sm rounded-t-lg ${
              activeTab === 'overview'
                ? 'border-azure-500 text-azure-600 dark:text-azure-400 dark:border-azure-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Descripción General
          </button>
          
          <button
            onClick={() => setActiveTab('services')}
            className={`py-2 px-4 border-b-2 font-medium text-sm rounded-t-lg ${
              activeTab === 'services'
                ? 'border-azure-500 text-azure-600 dark:text-azure-400 dark:border-azure-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Servicios
          </button>
          
          <button
            onClick={() => setActiveTab('history')}
            className={`py-2 px-4 border-b-2 font-medium text-sm rounded-t-lg ${
              activeTab === 'history'
                ? 'border-azure-500 text-azure-600 dark:text-azure-400 dark:border-azure-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Historia
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