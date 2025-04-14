// Ruta: /src/pages/cloud-concepts/Serverless.jsx
import { useState } from 'react';
import { 
  BoltIcon, 
  CpuChipIcon, 
  CurrencyDollarIcon, 
  ClockIcon,
  LightBulbIcon,
  InformationCircleIcon,
  ServerIcon,
  CloudIcon,
  CodeBracketIcon,
  CheckCircleIcon,
  XCircleIcon,
  QuestionMarkCircleIcon
} from '@heroicons/react/24/outline';

export default function Serverless() {
  const [activeTab, setActiveTab] = useState('concept');
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showExplanations, setShowExplanations] = useState({});

  // Definición de servicios sin servidor de Azure
  const serverlessServices = [
    {
      id: 'functions',
      name: 'Azure Functions',
      icon: CodeBracketIcon,
      description: 'Permite ejecutar pequeños fragmentos de código (funciones) sin preocuparse por la infraestructura subyacente.',
      useCases: [
        'Procesamiento de datos',
        'Integración de sistemas',
        'Procesamiento de IoT',
        'APIs simples'
      ],
      example: 'Una función que se activa cuando se carga una imagen en Azure Storage, la redimensiona automáticamente y almacena la versión reducida.'
    },
    {
      id: 'logic-apps',
      name: 'Azure Logic Apps',
      icon: CloudIcon,
      description: 'Permite automatizar, orquestar y integrar diferentes aplicaciones, datos, servicios y sistemas.',
      useCases: [
        'Flujos de trabajo empresariales',
        'Integraciones B2B',
        'Automatización de procesos'
      ],
      example: 'Una Logic App que monitorea Twitter para menciones de tu marca, analiza el sentimiento con Azure Cognitive Services y envía alertas cuando detecta menciones negativas.'
    },
    {
      id: 'event-grid',
      name: 'Azure Event Grid',
      icon: BoltIcon,
      description: 'Servicio de enrutamiento de eventos inteligente que permite reaccionar a eventos que ocurren en servicios de Azure o propios.',
      useCases: [
        'Arquitecturas dirigidas por eventos',
        'Automatización de operaciones',
        'Integración de aplicaciones'
      ],
      example: 'Cuando se crea un nuevo blob en Azure Storage, Event Grid notifica a una función de Azure que procesa el archivo.'
    },
    {
      id: 'apim',
      name: 'API Management sin servidor',
      icon: ServerIcon,
      description: 'Nivel de consumo de API Management que escala automáticamente y se factura por ejecución.',
      useCases: [
        'Gestión de APIs con tráfico variable',
        'Proyectos pequeños que necesitan gestión de APIs'
      ],
      example: 'Una startup que necesita gestionar sus APIs pero no quiere pagar por recursos dedicados las 24/7.'
    }
  ];

  // Definición de preguntas para el quiz
  const quizQuestions = [
    {
      id: 1,
      question: "¿Cuál es la principal característica de la informática sin servidor?",
      options: [
        "No utiliza ningún servidor en absoluto",
        "El proveedor gestiona la infraestructura subyacente automáticamente",
        "Solo funciona con lenguajes de programación específicos",
        "Siempre es gratuita para cualquier volumen de uso"
      ],
      correctAnswer: 1,
      explanation: "La informática sin servidor no significa que no haya servidores; significa que el desarrollador no necesita preocuparse por ellos. El proveedor de la nube (en este caso, Microsoft Azure) se encarga de provisionar, escalar y administrar automáticamente la infraestructura necesaria para ejecutar el código."
    },
    {
      id: 2,
      question: "¿Cuál de estos servicios de Azure NO es un servicio sin servidor?",
      options: [
        "Azure Functions",
        "Azure Logic Apps",
        "Azure Virtual Machines",
        "Azure Event Grid"
      ],
      correctAnswer: 2,
      explanation: "Azure Virtual Machines es un servicio IaaS (Infraestructura como Servicio) donde el usuario es responsable de aprovisionar, configurar y administrar las máquinas virtuales. Azure Functions, Logic Apps y Event Grid son servicios sin servidor donde Azure gestiona la infraestructura subyacente."
    },
    {
      id: 3,
      question: "¿Cuál es un beneficio clave de la facturación en un modelo sin servidor?",
      options: [
        "Es siempre más barato que los modelos tradicionales para cualquier carga de trabajo",
        "Se paga por un número fijo de horas independientemente del uso",
        "Se factura en función del tiempo de ejecución y recursos consumidos",
        "Se paga una tarifa mensual fija para uso ilimitado"
      ],
      correctAnswer: 2,
      explanation: "Una ventaja clave del modelo sin servidor es el modelo de facturación basado en el consumo real. Solo pagas por el tiempo que tu código se ejecuta y los recursos que consume, lo que puede resultar en ahorros significativos para cargas de trabajo variables o intermitentes."
    },
    {
      id: 4,
      question: "¿Qué es un desencadenador (trigger) en Azure Functions?",
      options: [
        "Un error que detiene la ejecución de una función",
        "Un evento que causa que una función se ejecute",
        "Una limitación en el número de veces que una función puede ejecutarse",
        "Un tipo de autenticación para funciones"
      ],
      correctAnswer: 1,
      explanation: "Un desencadenador (trigger) en Azure Functions es un evento que inicia la ejecución de una función. Puede ser un HTTP request, un mensaje en una cola, un cambio en un blob storage, un temporizador, etc. Los triggers son fundamentales para el funcionamiento de la informática sin servidor basada en eventos."
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
        <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg flex items-start border border-indigo-100 dark:border-indigo-900/50">
          <BoltIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-lg font-semibold text-indigo-700 dark:text-indigo-400 mb-2">¿Qué es la Informática sin servidor?</h2>
            <p className="text-gray-700 dark:text-gray-300">
              La <strong>informática sin servidor</strong> (serverless computing) es un modelo de ejecución en la nube donde el proveedor 
              gestiona automáticamente la infraestructura necesaria para ejecutar aplicaciones, 
              permitiendo a los desarrolladores centrarse únicamente en el código.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              A pesar de su nombre, no significa que no haya servidores. Los servidores siguen existiendo, pero los 
              desarrolladores no necesitan preocuparse por ellos: el aprovisionamiento, la escala y el mantenimiento 
              son gestionados por el proveedor de la nube.
            </p>
          </div>
        </div>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 dark:border-blue-700 p-4 rounded-r-md">
          <div className="flex">
            <LightBulbIcon className="h-6 w-6 text-blue-500 dark:text-blue-400 mr-3 flex-shrink-0 mt-1" />
            <div>
              <p className="text-blue-700 dark:text-blue-300 font-medium mb-1">Explicado de forma simple</p>
              <p className="text-gray-700 dark:text-gray-300">
                Imagina que vas a un restaurante. En un modelo tradicional (IaaS), comprarías tu propio restaurante, 
                contratarías personal y manejarías todo. En un modelo PaaS, alquilarías un espacio en un food court 
                donde la infraestructura básica está disponible, pero aún necesitas personal y gestionar tu negocio.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                En un modelo sin servidor, simplemente llegas, pides tu comida y pagas por lo que consumes. 
                No tienes que preocuparte por el local, el personal, los utensilios o los ingredientes. 
                Solo te concentras en disfrutar tu comida (tu código) y pagas exactamente por lo que consumes.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="flex items-center text-lg font-medium text-gray-900 dark:text-white mb-4">
              <CpuChipIcon className="h-6 w-6 text-indigo-500 dark:text-indigo-400 mr-2" />
              Características clave
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300"><strong>Abstracción total:</strong> No necesitas administrar servidores, capacidad o escalado.</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300"><strong>Escalado automático:</strong> Escala instantáneamente según la demanda, desde cero hasta miles de instancias.</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300"><strong>Basado en eventos:</strong> El código se ejecuta en respuesta a eventos específicos.</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300"><strong>Microservicios:</strong> Facilita la arquitectura de aplicaciones como pequeños servicios independientes.</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300"><strong>Alta disponibilidad:</strong> El proveedor garantiza la disponibilidad del servicio.</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="flex items-center text-lg font-medium text-gray-900 dark:text-white mb-4">
              <CurrencyDollarIcon className="h-6 w-6 text-indigo-500 dark:text-indigo-400 mr-2" />
              Ventajas principales
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300"><strong>Pago por uso:</strong> Solo pagas por el tiempo que tu código se ejecuta, sin costos cuando está inactivo.</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300"><strong>Menor time-to-market:</strong> Desarrollo más rápido al centrarse solo en el código de la aplicación.</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300"><strong>Sin administración de infraestructura:</strong> No necesitas gestionar servidores, parches o mantenimiento.</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300"><strong>Escalabilidad inmediata:</strong> Capacidad de adaptarse automáticamente a cualquier carga de trabajo.</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300"><strong>Agilidad:</strong> Mayor velocidad para implementar cambios y nuevas funcionalidades.</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="flex items-center text-lg font-medium text-gray-900 dark:text-white mb-4">
            <ClockIcon className="h-6 w-6 text-indigo-500 dark:text-indigo-400 mr-2" />
            Consideraciones a tener en cuenta
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <XCircleIcon className="h-5 w-5 text-red-500 dark:text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300"><strong>Arranque en frío:</strong> La primera ejecución puede tener latencia adicional (cold start).</span>
                </li>
                <li className="flex items-start">
                  <XCircleIcon className="h-5 w-5 text-red-500 dark:text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300"><strong>Límites de tiempo de ejecución:</strong> Las funciones suelen tener una duración máxima permitida.</span>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <XCircleIcon className="h-5 w-5 text-red-500 dark:text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300"><strong>Dependencia del proveedor:</strong> Puede haber cierto nivel de dependencia del proveedor de la nube.</span>
                </li>
                <li className="flex items-start">
                  <XCircleIcon className="h-5 w-5 text-red-500 dark:text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300"><strong>No ideal para todas las cargas:</strong> Algunos escenarios, como procesamiento intensivo de larga duración, pueden no ser adecuados.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-indigo-50 dark:bg-indigo-900/20 p-5 rounded-lg border border-indigo-200 dark:border-indigo-900/30">
          <div className="flex items-start">
            <InformationCircleIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-indigo-700 dark:text-indigo-300 mb-2">Importancia para el examen AZ-900</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Para el examen AZ-900, es importante comprender:
              </p>
              <ul className="mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                <li>• El concepto básico de informática sin servidor y cómo difiere de otros modelos</li>
                <li>• Las principales ventajas y casos de uso de la informática sin servidor</li>
                <li>• Los servicios sin servidor clave en Azure (Functions, Logic Apps, etc.)</li>
                <li>• El modelo de facturación basado en consumo que caracteriza a estos servicios</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),
    
    azure: (
      <div className="space-y-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-medium text-indigo-700 dark:text-indigo-400 mb-4">Servicios sin servidor en Azure</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Microsoft Azure ofrece varios servicios sin servidor que permiten a los desarrolladores crear 
            aplicaciones sin preocuparse por la infraestructura subyacente. Estos servicios pueden combinarse 
            para crear soluciones completas y escalables.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serverlessServices.map(service => (
              <div key={service.id} className="bg-indigo-50 dark:bg-indigo-900/20 p-5 rounded-lg border border-indigo-100 dark:border-indigo-900/50">
                <div className="flex items-center mb-3">
                  <div className="bg-indigo-100 dark:bg-indigo-800/50 p-2 rounded-full mr-3">
                    <service.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h3 className="text-lg font-medium text-indigo-700 dark:text-indigo-400">{service.name}</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-3">{service.description}</p>
                <div className="mb-3">
                  <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Casos de uso comunes:</h4>
                  <ul className="space-y-1">
                    {service.useCases.map((useCase, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded-md border border-gray-200 dark:border-gray-700">
                  <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-1">Ejemplo:</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">{service.example}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-start mb-4">
            <LightBulbIcon className="h-6 w-6 text-yellow-500 dark:text-yellow-400 mr-3 flex-shrink-0 mt-1" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Ejemplo de aplicación sin servidor en Azure</h3>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
            <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-3">Procesamiento de imágenes automático</h4>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Veamos un ejemplo completo de una aplicación sin servidor para procesamiento de imágenes:
            </p>
            <ol className="space-y-3 mb-3">
              <li className="flex items-start">
                <span className="bg-indigo-100 dark:bg-indigo-800/50 text-indigo-600 dark:text-indigo-400 rounded-full h-5 w-5 flex items-center justify-center mr-2 flex-shrink-0 font-medium">1</span>
                <span className="text-gray-700 dark:text-gray-300">Un usuario sube una imagen a un <strong>Azure Blob Storage</strong>.</span>
              </li>
              <li className="flex items-start">
                <span className="bg-indigo-100 dark:bg-indigo-800/50 text-indigo-600 dark:text-indigo-400 rounded-full h-5 w-5 flex items-center justify-center mr-2 flex-shrink-0 font-medium">2</span>
                <span className="text-gray-700 dark:text-gray-300"><strong>Event Grid</strong> detecta la carga del nuevo blob y envía un evento.</span>
              </li>
              <li className="flex items-start">
                <span className="bg-indigo-100 dark:bg-indigo-800/50 text-indigo-600 dark:text-indigo-400 rounded-full h-5 w-5 flex items-center justify-center mr-2 flex-shrink-0 font-medium">3</span>
                <span className="text-gray-700 dark:text-gray-300">Una <strong>Azure Function</strong> se desencadena por el evento y procesa la imagen (redimensiona, aplica filtros, etc.).</span>
              </li>
              <li className="flex items-start">
                <span className="bg-indigo-100 dark:bg-indigo-800/50 text-indigo-600 dark:text-indigo-400 rounded-full h-5 w-5 flex items-center justify-center mr-2 flex-shrink-0 font-medium">4</span>
                <span className="text-gray-700 dark:text-gray-300">La imagen procesada se guarda nuevamente en <strong>Azure Blob Storage</strong>.</span>
              </li>
              <li className="flex items-start">
                <span className="bg-indigo-100 dark:bg-indigo-800/50 text-indigo-600 dark:text-indigo-400 rounded-full h-5 w-5 flex items-center justify-center mr-2 flex-shrink-0 font-medium">5</span>
                <span className="text-gray-700 dark:text-gray-300">Una <strong>Logic App</strong> envía una notificación por correo electrónico al usuario con un enlace a la imagen procesada.</span>
              </li>
            </ol>
            <p className="text-gray-700 dark:text-gray-300">
              En este escenario, todos los componentes son sin servidor y se escalan automáticamente según la demanda. 
              No se necesita administrar ninguna infraestructura y solo se paga cuando hay imágenes para procesar.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
              <h4 className="font-medium text-green-700 dark:text-green-300 mb-2 flex items-center">
                <CheckCircleIcon className="h-5 w-5 mr-2" />
                Beneficios de este enfoque
              </h4>
              <ul className="space-y-2">
                <li className="text-gray-700 dark:text-gray-300 flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-green-500 dark:text-green-400 mr-2 mt-1 flex-shrink-0" />
                  <span>Procesamiento eficiente de miles de imágenes sin infraestructura dedicada</span>
                </li>
                <li className="text-gray-700 dark:text-gray-300 flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-green-500 dark:text-green-400 mr-2 mt-1 flex-shrink-0" />
                  <span>Pago solo por el procesamiento real de las imágenes</span>
                </li>
                <li className="text-gray-700 dark:text-gray-300 flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-green-500 dark:text-green-400 mr-2 mt-1 flex-shrink-0" />
                  <span>Escalado automático si el volumen de imágenes aumenta</span>
                </li>
                <li className="text-gray-700 dark:text-gray-300 flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-green-500 dark:text-green-400 mr-2 mt-1 flex-shrink-0" />
                  <span>Fácil de extender con nuevas funcionalidades</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-medium text-blue-700 dark:text-blue-300 mb-2 flex items-center">
                <InformationCircleIcon className="h-5 w-5 mr-2" />
                Comparación con enfoque tradicional
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                En un enfoque tradicional con servidores dedicados:
              </p>
              <ul className="space-y-2">
                <li className="text-gray-700 dark:text-gray-300 flex items-start">
                  <XCircleIcon className="h-4 w-4 text-red-500 dark:text-red-400 mr-2 mt-1 flex-shrink-0" />
                  <span>Necesitarías aprovisionar servidores para el pico de carga</span>
                </li>
                <li className="text-gray-700 dark:text-gray-300 flex items-start">
                  <XCircleIcon className="h-4 w-4 text-red-500 dark:text-red-400 mr-2 mt-1 flex-shrink-0" />
                  <span>Pagarías por recursos incluso cuando no hay imágenes para procesar</span>
                </li>
                <li className="text-gray-700 dark:text-gray-300 flex items-start">
                  <XCircleIcon className="h-4 w-4 text-red-500 dark:text-red-400 mr-2 mt-1 flex-shrink-0" />
                  <span>Serías responsable de gestionar servidores, actualizaciones y seguridad</span>
                </li>
                <li className="text-gray-700 dark:text-gray-300 flex items-start">
                  <XCircleIcon className="h-4 w-4 text-red-500 dark:text-red-400 mr-2 mt-1 flex-shrink-0" />
                  <span>Tendrías que implementar manualmente la escalabilidad</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg border border-indigo-100 dark:border-indigo-900/50">
          <div className="flex items-start">
            <InformationCircleIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-indigo-700 dark:text-indigo-300 mb-2">Relevancia para el examen AZ-900</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Para el examen AZ-900, debes conocer los principales servicios sin servidor de Azure y entender cómo se complementan entre sí:
              </p>
              <ul className="mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                <li>• <strong>Azure Functions:</strong> Implementación de lógica específica en respuesta a eventos</li>
                <li>• <strong>Azure Logic Apps:</strong> Automatización y orquestación de procesos</li>
                <li>• <strong>Azure Event Grid:</strong> Enrutamiento inteligente de eventos</li>
                <li>• <strong>API Management (nivel de consumo):</strong> Gestión de APIs con facturación basada en uso</li>
              </ul>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                Es importante entender que estos servicios se pueden combinar para crear soluciones completas sin servidor, con todas las ventajas 
                del modelo de facturación por consumo y la gestión automatizada de la infraestructura.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
    
    comparison: (
      <div className="space-y-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
          <h2 className="text-lg font-medium text-indigo-700 dark:text-indigo-400 mb-6">Comparación de modelos de computación en la nube</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Característica</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">IaaS</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">PaaS</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Serverless (FaaS)</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Gestión de infraestructura</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">El usuario gestiona VMs, red, almacenamiento</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">El proveedor gestiona la infraestructura, el usuario gestiona la aplicación</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">El proveedor gestiona todo, el usuario solo proporciona el código</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Escalabilidad</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">Manual o con scripts</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">Automatizada, pero requiere configuración</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">Totalmente automática, incluso a cero</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Modelo de facturación</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">Por recursos aprovisionados (incluso inactivos)</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">Por recursos aprovisionados o por uso</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">Solo por ejecución real (tiempo y recursos consumidos)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Mantenimiento</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">El usuario gestiona OS, middleware, aplicación</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">El usuario gestiona aplicación</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">El usuario solo mantiene el código de la función</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Adecuado para</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">Migración lift-and-shift, control total</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">Desarrollo de aplicaciones completas</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">Microservicios, procesamiento por eventos, cargas variables</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Ejemplo en Azure</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">Azure Virtual Machines</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">Azure App Service</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">Azure Functions</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Casos de uso ideales para Serverless</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-800 dark:text-gray-200">Procesamiento de datos bajo demanda</span>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Procesamiento de archivos, imágenes o datos cuando se cargan o modifican.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-800 dark:text-gray-200">APIs y microservicios</span>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Endpoints de API con patrones de uso variables o imprevisibles.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-800 dark:text-gray-200">Automatización programada</span>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Tareas que se ejecutan según un cronograma sin necesidad de servidores dedicados.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-800 dark:text-gray-200">Procesamiento de IoT</span>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Ingesta y procesamiento de datos de dispositivos IoT.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-800 dark:text-gray-200">Chatbots y asistentes virtuales</span>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Procesamiento de consultas y respuestas para interfaces conversacionales.</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Escenarios no ideales para Serverless</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <XCircleIcon className="h-5 w-5 text-red-500 dark:text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-800 dark:text-gray-200">Aplicaciones de larga ejecución</span>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Procesos que requieren horas de ejecución continua (la mayoría de servicios sin servidor tienen límites de tiempo).</p>
                </div>
              </li>
              <li className="flex items-start">
                <XCircleIcon className="h-5 w-5 text-red-500 dark:text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-800 dark:text-gray-200">Alta performance constante</span>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Aplicaciones que requieren baja latencia consistente y no pueden tolerar arranques en frío.</p>
                </div>
              </li>
              <li className="flex items-start">
                <XCircleIcon className="h-5 w-5 text-red-500 dark:text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-800 dark:text-gray-200">Aplicaciones con estado complejas</span>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Aplicaciones que mantienen mucho estado en memoria durante toda la sesión.</p>
                </div>
              </li>
              <li className="flex items-start">
                <XCircleIcon className="h-5 w-5 text-red-500 dark:text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-800 dark:text-gray-200">Aplicaciones con uso intensivo de recursos</span>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Procesamiento intensivo que requiere muchos recursos de CPU o memoria.</p>
                </div>
              </li>
              <li className="flex items-start">
                <XCircleIcon className="h-5 w-5 text-red-500 dark:text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-800 dark:text-gray-200">Migración directa de aplicaciones monolíticas</span>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Aplicaciones heredadas diseñadas para arquitecturas tradicionales sin refactorizar.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg border border-indigo-100 dark:border-indigo-900/50">
          <div className="flex items-start">
            <LightBulbIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-indigo-700 dark:text-indigo-300 mb-2">Cómo elegir entre modelos de computación</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Para decidir si la computación sin servidor es adecuada, considera estas preguntas:
              </p>
              <ol className="space-y-2">
                <li className="flex items-start">
                  <span className="bg-indigo-100 dark:bg-indigo-800/50 text-indigo-600 dark:text-indigo-400 rounded-full h-5 w-5 flex items-center justify-center mr-2 flex-shrink-0 font-medium text-sm">1</span>
                  <span className="text-gray-700 dark:text-gray-300"><strong>¿Tu carga de trabajo es intermitente o tiene picos de actividad?</strong><br/>Si tienes periodos de inactividad significativos, el modelo sin servidor puede ser más rentable.</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-indigo-100 dark:bg-indigo-800/50 text-indigo-600 dark:text-indigo-400 rounded-full h-5 w-5 flex items-center justify-center mr-2 flex-shrink-0 font-medium text-sm">2</span>
                  <span className="text-gray-700 dark:text-gray-300"><strong>¿Puedes dividir tu aplicación en funciones independientes?</strong><br/>Las arquitecturas sin servidor funcionan mejor cuando la aplicación se descompone en pequeñas funciones independientes.</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-indigo-100 dark:bg-indigo-800/50 text-indigo-600 dark:text-indigo-400 rounded-full h-5 w-5 flex items-center justify-center mr-2 flex-shrink-0 font-medium text-sm">3</span>
                  <span className="text-gray-700 dark:text-gray-300"><strong>¿Es crítica la latencia de inicio?</strong><br/>Si tu aplicación no puede tolerar los arranques en frío ocasionales, considera otras opciones.</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-indigo-100 dark:bg-indigo-800/50 text-indigo-600 dark:text-indigo-400 rounded-full h-5 w-5 flex items-center justify-center mr-2 flex-shrink-0 font-medium text-sm">4</span>
                  <span className="text-gray-700 dark:text-gray-300"><strong>¿Tu equipo prefiere centrarse en el código de la aplicación en lugar de la infraestructura?</strong><br/>Si quieres liberar a tu equipo de la gestión de infraestructura, la computación sin servidor es ideal.</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    ),
    
    quiz: (
      <div className="space-y-8">
        <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg border border-indigo-100 dark:border-indigo-900/50">
          <h2 className="text-xl font-semibold text-indigo-700 dark:text-indigo-400 mb-4">Pon a prueba tus conocimientos</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Responde estas preguntas para verificar tu comprensión de la informática sin servidor.
            Estas preguntas son similares a las que podrías encontrar en el examen AZ-900.
          </p>
        </div>
        
        <div className="space-y-6">
          {quizQuestions.map((question) => (
            <div key={question.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4 flex items-start">
                <QuestionMarkCircleIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-2 flex-shrink-0" />
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
                            'bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-800'
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
                              'border-indigo-500 text-indigo-500 dark:border-indigo-400 dark:text-indigo-400' :
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
                      className="mt-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium flex items-center"
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
        
        <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg border border-indigo-100 dark:border-indigo-900/50">
          <h4 className="font-medium text-indigo-700 dark:text-indigo-300 mb-3">Puntos clave para el examen AZ-900</h4>
          <ul className="space-y-2">
            <li className="flex items-start">
              <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">La informática sin servidor abstrae la infraestructura, permitiendo a los desarrolladores centrarse únicamente en el código.</span>
            </li>
            <li className="flex items-start">
              <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">El modelo de facturación se basa en el consumo real: solo pagas cuando tu código se ejecuta.</span>
            </li>
            <li className="flex items-start">
              <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">Azure Functions, Logic Apps y Event Grid son los principales servicios sin servidor en Azure.</span>
            </li>
            <li className="flex items-start">
              <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">La computación sin servidor es ideal para cargas de trabajo variables, arquitecturas basadas en eventos y cuando se busca reducir la sobrecarga operativa.</span>
            </li>
          </ul>
        </div>
      </div>
    )
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center mb-8">
        <BoltIcon className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mr-3" />
        <h1 className="text-3xl font-bold text-indigo-700 dark:text-indigo-400">Informática sin servidor (Serverless)</h1>
      </div>
      
      {/* Tabs de Navegación */}
      <div className="border-b border-gray-200 dark:border-gray-700 mb-8">
        <nav className="flex space-x-2 overflow-x-auto" aria-label="Tabs">
          <button
            onClick={() => setActiveTab('concept')}
            className={`py-2 px-4 border-b-2 font-medium text-sm rounded-t-lg ${
              activeTab === 'concept'
                ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Concepto
          </button>
          
          <button
            onClick={() => setActiveTab('azure')}
            className={`py-2 px-4 border-b-2 font-medium text-sm rounded-t-lg ${
              activeTab === 'azure'
                ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Servicios en Azure
          </button>
          
          <button
            onClick={() => setActiveTab('comparison')}
            className={`py-2 px-4 border-b-2 font-medium text-sm rounded-t-lg ${
              activeTab === 'comparison'
                ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Comparativa
          </button>
          
          <button
            onClick={() => setActiveTab('quiz')}
            className={`py-2 px-4 border-b-2 font-medium text-sm rounded-t-lg ${
              activeTab === 'quiz'
                ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400'
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