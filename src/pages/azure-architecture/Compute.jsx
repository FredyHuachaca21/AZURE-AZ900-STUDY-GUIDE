import { useState } from 'react';
import { 
  ServerIcon, 
  ComputerDesktopIcon, 
  CubeIcon, 
  QuestionMarkCircleIcon,
  CheckCircleIcon,
  XCircleIcon,
  CloudIcon,
  CodeBracketIcon,
  ArrowsPointingOutIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  WrenchScrewdriverIcon,
  AdjustmentsHorizontalIcon,
  InformationCircleIcon,
  DocumentCheckIcon,
  CubeTransparentIcon,
  ScaleIcon,
  ServerStackIcon,
  CpuChipIcon,
  ExclamationTriangleIcon,
  BoltIcon,
  ChartBarIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';

export default function Compute() {
  const [activeTab, setActiveTab] = useState('descripcion');
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showExplanations, setShowExplanations] = useState({});
  
  // Datos para preguntas del quiz
  const quizQuestions = [
    {
      id: 1,
      question: '¿Cuál de los siguientes NO es un servicio de computación en Azure?',
      options: [
        'Azure Virtual Machines',
        'Azure Container Instances',
        'Azure Functions',
        'Azure Storage Accounts'
      ],
      correctAnswer: 3,
      explanation: 'Azure Storage Accounts es un servicio de almacenamiento, no de computación. Los servicios de computación incluyen Virtual Machines, Container Instances, Azure Functions, App Service, entre otros.'
    },
    {
      id: 2,
      question: '¿Qué servicio de Azure permite ejecutar aplicaciones sin preocuparse por la infraestructura subyacente?',
      options: [
        'Azure Virtual Machines',
        'Azure Functions',
        'Azure Virtual Desktop',
        'Azure Dedicated Host'
      ],
      correctAnswer: 1,
      explanation: 'Azure Functions es un servicio serverless (sin servidor) que permite ejecutar código sin aprovisionar ni administrar infraestructura. Solo se paga por el tiempo de ejecución del código.'
    },
    {
      id: 3,
      question: '¿Qué conjunto de herramientas permite crear, gestionar y escalar contenedores en Azure?',
      options: [
        'Azure Virtual Machine Scale Sets',
        'Azure App Service',
        'Azure Kubernetes Service (AKS)',
        'Azure Logic Apps'
      ],
      correctAnswer: 2,
      explanation: 'Azure Kubernetes Service (AKS) es un servicio administrado de Kubernetes que simplifica la implementación, administración y operaciones de contenedores usando Kubernetes, un sistema de orquestación de código abierto.'
    },
    {
      id: 4,
      question: '¿Qué opción de cómputo ofrece más control sobre el entorno y requiere más administración?',
      options: [
        'Azure Functions',
        'Azure Container Instances',
        'Azure Virtual Machines',
        'Azure App Service'
      ],
      correctAnswer: 2,
      explanation: 'Las Máquinas Virtuales (VMs) de Azure proporcionan el máximo control sobre el entorno de computación, pero también requieren más administración, ya que el usuario es responsable de configurar, actualizar y mantener el sistema operativo y el software instalado.'
    },
    {
      id: 5,
      question: '¿Qué característica permite que las aplicaciones escalen automáticamente en respuesta a cambios en la demanda?',
      options: [
        'High Availability',
        'Auto-scaling',
        'Load Balancing',
        'Fault Tolerance'
      ],
      correctAnswer: 1,
      explanation: 'El Auto-scaling (escalado automático) es una característica que permite aumentar o disminuir automáticamente los recursos asignados a una aplicación en respuesta a cambios en la demanda, optimizando el rendimiento y los costos.'
    }
  ];

  const handleAnswerSelect = (questionId, optionIndex) => {
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

  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Servicios de Proceso (Compute) en Azure</h2>
        
        {/* Pestañas de navegación */}
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="-mb-px flex space-x-4 overflow-x-auto" aria-label="Tabs">
            <button
              onClick={() => setActiveTab('descripcion')}
              className={`${
                activeTab === 'descripcion'
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 hover:border-gray-300 dark:hover:text-gray-300'
              } whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm flex items-center`}
            >
              <ServerIcon className="h-5 w-5 mr-2" />
              Descripción
            </button>
            <button
              onClick={() => setActiveTab('vms')}
              className={`${
                activeTab === 'vms'
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 hover:border-gray-300 dark:hover:text-gray-300'
              } whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm flex items-center`}
            >
              <ComputerDesktopIcon className="h-5 w-5 mr-2" />
              Máquinas Virtuales
            </button>
            <button
              onClick={() => setActiveTab('contenedores')}
              className={`${
                activeTab === 'contenedores'
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 hover:border-gray-300 dark:hover:text-gray-300'
              } whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm flex items-center`}
            >
              <CubeIcon className="h-5 w-5 mr-2" />
              Contenedores
            </button>
            <button
              onClick={() => setActiveTab('serverless')}
              className={`${
                activeTab === 'serverless'
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 hover:border-gray-300 dark:hover:text-gray-300'
              } whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm flex items-center`}
            >
              <CodeBracketIcon className="h-5 w-5 mr-2" />
              Serverless
            </button>
            <button
              onClick={() => setActiveTab('appservice')}
              className={`${
                activeTab === 'appservice'
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 hover:border-gray-300 dark:hover:text-gray-300'
              } whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm flex items-center`}
            >
              <ServerStackIcon className="h-5 w-5 mr-2" />
              App Service
            </button>
            <button
              onClick={() => setActiveTab('functions')}
              className={`${
                activeTab === 'functions'
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 hover:border-gray-300 dark:hover:text-gray-300'
              } whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm flex items-center`}
            >
              <BoltIcon className="h-5 w-5 mr-2" />
              Functions
            </button>
            <button
              onClick={() => setActiveTab('quiz')}
              className={`${
                activeTab === 'quiz'
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 hover:border-gray-300 dark:hover:text-gray-300'
              } whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm flex items-center`}
            >
              <QuestionMarkCircleIcon className="h-5 w-5 mr-2" />
              Preguntas
            </button>
          </nav>
        </div>
      </div>

      {/* Contenido para cada pestaña */}
      <div className="px-4 py-5 sm:p-6">
        {activeTab === 'descripcion' && (
          <div className="space-y-6">
            <div className="bg-blue-50 dark:bg-gray-700 p-5 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-2">¿Qué son los servicios de proceso en Azure?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Los servicios de proceso (Compute) en Azure proporcionan los recursos de computación o procesamiento para las aplicaciones que se ejecutan en la nube. Estos servicios permiten aprovisionar, administrar y escalar recursos como máquinas virtuales, contenedores y soluciones sin servidor para ejecutar aplicaciones con diferentes necesidades y requisitos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-5">
                <div className="flex items-center mb-4">
                  <ServerIcon className="h-8 w-8 text-blue-500" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white ml-3">Opciones de computación en Azure</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Azure ofrece una variedad de opciones de computación diseñadas para diferentes necesidades, desde control total de la infraestructura hasta servicios completamente administrados.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300"><strong>Máquinas Virtuales (IaaS)</strong>: Control total sobre el entorno</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300"><strong>Contenedores (CaaS)</strong>: Entornos ligeros y portátiles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300"><strong>App Service (PaaS)</strong>: Plataforma gestionada para aplicaciones</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300"><strong>Serverless (FaaS)</strong>: Ejecución de código sin infraestructura</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-5">
                <div className="flex items-center mb-4">
                  <ArrowsPointingOutIcon className="h-8 w-8 text-blue-500" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white ml-3">Características clave</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300"><strong>Escalabilidad</strong>: Aumentar o disminuir recursos según la demanda</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300"><strong>Alta disponibilidad</strong>: Garantizar tiempo de actividad mediante redundancia</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300"><strong>Rendimiento</strong>: Optimizar velocidad y capacidad de respuesta</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300"><strong>Seguridad</strong>: Proteger aplicaciones y datos en la nube</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300"><strong>Automatización</strong>: Reducir la intervención manual con scripts y plantillas</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-5">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Factores de selección para servicios de computación</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-gray-700">
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Factor</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Consideraciones</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Control vs Administración</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Balance entre control total (VMs) o servicios administrados (PaaS/Serverless)</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-700">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Costo</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Presupuesto disponible, modelos de pago (por uso vs reservado)</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Escalabilidad</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Requisitos de escalado automático y patrones de tráfico</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-700">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Disponibilidad</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">SLAs requeridos y tolerancia a fallos</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Arquitectura de aplicación</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Requisitos específicos, tecnologías y compatibilidad</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-indigo-50 dark:bg-gray-700 p-5 rounded-lg mt-6">
              <h3 className="text-lg font-semibold text-indigo-700 dark:text-indigo-300 mb-2">Relevancia para el examen AZ-900</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Para el examen AZ-900, es importante comprender los diferentes tipos de servicios de computación disponibles en Azure, sus características principales y los casos de uso adecuados para cada uno. Debes poder identificar cuándo es apropiado utilizar máquinas virtuales, contenedores, o servicios sin servidor según los requisitos específicos.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'vms' && (
          <div className="space-y-6 p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Máquinas Virtuales de Azure</h2>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                <ServerIcon className="h-6 w-6 inline-block mr-2 text-blue-500" />
                ¿Qué son las Máquinas Virtuales de Azure?
              </h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Las Máquinas Virtuales (VMs) de Azure son recursos de computación virtualizados y bajo demanda que proporcionan una infraestructura de computación completa sin necesidad de comprar hardware físico.
              </p>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Las VMs de Azure ofrecen la flexibilidad de la virtualización sin necesidad de adquirir y mantener el hardware que lo ejecuta. Azure se encarga del mantenimiento de la infraestructura física que ejecuta cada VM, permitiéndote enfocar en la configuración, uso y mantenimiento del software.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                <AdjustmentsHorizontalIcon className="h-6 w-6 inline-block mr-2 text-blue-500" />
                Tipos de Máquinas Virtuales
              </h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Azure ofrece varios tipos de VMs optimizadas para diferentes necesidades:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li><span className="font-semibold">VMs de uso general</span>: Proporcionan una relación equilibrada de CPU y memoria. Ideales para entornos de desarrollo/pruebas, servidores web pequeños o medianos.</li>
                <li><span className="font-semibold">VMs optimizadas para computación</span>: Alta proporción de CPU a memoria. Ideales para servidores web de tráfico medio, aplicaciones de red y procesos por lotes.</li>
                <li><span className="font-semibold">VMs optimizadas para memoria</span>: Alta proporción de memoria a CPU. Excelentes para bases de datos relacionales, cachés y análisis en memoria.</li>
                <li><span className="font-semibold">VMs optimizadas para almacenamiento</span>: Alto rendimiento de disco y E/S. Ideales para bases de datos NoSQL y almacenes de datos.</li>
                <li><span className="font-semibold">VMs de GPU</span>: Especializadas para renderización gráfica pesada y edición de vídeo.</li>
                <li><span className="font-semibold">VMs de computación de alto rendimiento</span>: Las CPU más potentes con interfaces de red de alto rendimiento opcionales.</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                <ShieldCheckIcon className="h-6 w-6 inline-block mr-2 text-blue-500" />
                Características clave
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border dark:border-gray-700 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Escalabilidad</h4>
                  <p className="text-gray-700 dark:text-gray-300">Las VMs de Azure pueden escalarse verticalmente (cambiar el tamaño de la VM) u horizontalmente (agregar más instancias) para adaptarse a tus necesidades.</p>
                </div>
                <div className="border dark:border-gray-700 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Disponibilidad</h4>
                  <p className="text-gray-700 dark:text-gray-300">Mediante Conjuntos de Disponibilidad y Zonas de Disponibilidad, Azure garantiza alta disponibilidad para tus VMs.</p>
                </div>
                <div className="border dark:border-gray-700 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Seguridad</h4>
                  <p className="text-gray-700 dark:text-gray-300">Protección mediante Azure Security Center, grupos de seguridad de red, y políticas de acceso.</p>
                </div>
                <div className="border dark:border-gray-700 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Almacenamiento</h4>
                  <p className="text-gray-700 dark:text-gray-300">Opciones de almacenamiento flexible con discos administrados y no administrados, estándar o premium.</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                <CurrencyDollarIcon className="h-6 w-6 inline-block mr-2 text-blue-500" />
                Costos y licencias
              </h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Los costos de las VMs en Azure dependen de varios factores:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Tamaño y tipo de VM seleccionada</li>
                <li>Región de Azure donde se implementa</li>
                <li>Duración del uso (pago por segundo)</li>
                <li>Tipo de almacenamiento utilizado</li>
                <li>Licencias del sistema operativo (Windows tiene costo adicional, mientras que Linux generalmente no)</li>
                <li>Reservas de capacidad (descuentos por compromisos a largo plazo)</li>
              </ul>
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="text-blue-800 dark:text-blue-100">
                  <InformationCircleIcon className="h-5 w-5 inline-block mr-1" />
                  Azure ofrece instancias de VM reservadas con descuentos de hasta el 72% en comparación con los precios de pago por uso para compromisos de uno o tres años.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                <DocumentCheckIcon className="h-6 w-6 inline-block mr-2 text-blue-500" />
                Casos de uso comunes
              </h3>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li><span className="font-semibold">Desarrollo y pruebas</span>: Entornos de desarrollo que se pueden aprovisionar rápidamente y desactivar cuando no se necesitan.</li>
                <li><span className="font-semibold">Aplicaciones web</span>: Alojamiento de sitios web y aplicaciones web con la capacidad de escalar según la demanda.</li>
                <li><span className="font-semibold">Extensión del centro de datos</span>: Ampliación de la capacidad del centro de datos local durante picos de demanda.</li>
                <li><span className="font-semibold">Recuperación ante desastres</span>: Proporcionar redundancia geográfica para aplicaciones críticas.</li>
                <li><span className="font-semibold">Migración a la nube</span>: Traslado de cargas de trabajo locales a la nube mediante "lift-and-shift".</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'contenedores' && (
          <div className="space-y-6 p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Servicios de Contenedores en Azure</h2>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                <CubeTransparentIcon className="h-6 w-6 inline-block mr-2 text-blue-500" />
                ¿Qué son los contenedores?
              </h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Los contenedores son entornos de ejecución ligeros y portátiles que contienen todo lo necesario para ejecutar una aplicación: código, tiempo de ejecución, bibliotecas y configuración.
              </p>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                A diferencia de las VMs, los contenedores virtualizan el sistema operativo en lugar del hardware. Esto los hace más ligeros, rápidos de iniciar y eficientes en términos de recursos en comparación con las VMs.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="text-blue-800 dark:text-blue-100">
                  <InformationCircleIcon className="h-5 w-5 inline-block mr-1" />
                  Los contenedores comparten el kernel del sistema operativo del host, pero están aislados entre sí, lo que proporciona una mejor utilización de recursos y seguridad.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                <CloudIcon className="h-6 w-6 inline-block mr-2 text-blue-500" />
                Servicios de contenedores en Azure
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border dark:border-gray-700 rounded-lg p-5">
                  <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">Azure Container Instances (ACI)</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    La forma más rápida y sencilla de ejecutar contenedores en Azure sin administrar servidores o clusters.
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
                    <li>Sin necesidad de aprovisionar VMs</li>
                    <li>Facturación por segundo</li>
                    <li>Aislamiento de nivel de hipervisor</li>
                    <li>Ideal para tareas sencillas, de corta duración</li>
                  </ul>
                </div>
                <div className="border dark:border-gray-700 rounded-lg p-5">
                  <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">Azure Kubernetes Service (AKS)</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    Servicio de Kubernetes administrado que simplifica la implementación, administración y operaciones de Kubernetes.
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
                    <li>Orquestación de contenedores completa</li>
                    <li>Escalado automático</li>
                    <li>Integración con servicios de Azure</li>
                    <li>Ideal para aplicaciones complejas a gran escala</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 border dark:border-gray-700 rounded-lg p-5">
                <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">Azure Container Registry (ACR)</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Servicio administrado de registro de contenedores para almacenar y administrar imágenes de contenedores privadas.
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
                  <li>Integración con DevOps</li>
                  <li>Red cercana a tus implementaciones</li>
                  <li>Control de acceso basado en identidad de Azure</li>
                  <li>Integración con ACI y AKS</li>
                </ul>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                <ScaleIcon className="h-6 w-6 inline-block mr-2 text-blue-500" />
                Ventajas de los contenedores
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Portabilidad</h4>
                  <p className="text-gray-700 dark:text-gray-300">Los contenedores funcionan igual en cualquier entorno (desarrollo, pruebas, producción).</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Eficiencia</h4>
                  <p className="text-gray-700 dark:text-gray-300">Menor huella de recursos que las VMs, permitiendo mayor densidad.</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Velocidad</h4>
                  <p className="text-gray-700 dark:text-gray-300">Inicio rápido en segundos, en lugar de minutos como las VMs.</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Consistencia</h4>
                  <p className="text-gray-700 dark:text-gray-300">Entorno de ejecución predecible, independiente de la infraestructura subyacente.</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Escalabilidad</h4>
                  <p className="text-gray-700 dark:text-gray-300">Fácil de escalar horizontalmente y orquestar con herramientas como Kubernetes.</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Aislamiento</h4>
                  <p className="text-gray-700 dark:text-gray-300">Las aplicaciones se ejecutan de forma aislada, mejorando la seguridad y reduciendo conflictos.</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                <DocumentCheckIcon className="h-6 w-6 inline-block mr-2 text-blue-500" />
                Casos de uso comunes
              </h3>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li><span className="font-semibold">Microservicios</span>: Arquitecturas basadas en microservicios donde cada servicio se ejecuta en un contenedor independiente.</li>
                <li><span className="font-semibold">CI/CD</span>: Entornos de integración continua y entrega continua que aprovechan la consistencia de los contenedores.</li>
                <li><span className="font-semibold">Cargas de trabajo por lotes</span>: Tareas periódicas o puntuales que necesitan entornos específicos y aislados.</li>
                <li><span className="font-semibold">Aplicaciones multinube</span>: Aplicaciones que necesitan ejecutarse en múltiples proveedores de nube con la misma configuración.</li>
                <li><span className="font-semibold">Desarrollo y pruebas</span>: Entornos de desarrollo consistentes que replican con precisión el entorno de producción.</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'serverless' && (
          <div className="space-y-6 p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Computación Serverless en Azure</h2>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                <CodeBracketIcon className="h-6 w-6 inline-block mr-2 text-blue-500" />
                ¿Qué es la computación serverless?
              </h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                La computación serverless (sin servidor) es un modelo de ejecución en la nube donde el proveedor de la nube gestiona automáticamente la infraestructura necesaria para ejecutar el código. Aunque el nombre sugiere "sin servidores", en realidad hay servidores físicos, pero el desarrollador no necesita preocuparse por ellos.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="text-blue-800 dark:text-blue-100">
                  <InformationCircleIcon className="h-5 w-5 inline-block mr-1" />
                  En el modelo serverless, los desarrolladores se centran exclusivamente en escribir código y lógica de negocios, mientras que la plataforma se encarga del escalado, alta disponibilidad y toda la administración de infraestructura.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                <CloudIcon className="h-6 w-6 inline-block mr-2 text-blue-500" />
                Servicios serverless en Azure
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border dark:border-gray-700 rounded-lg p-5">
                  <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">Azure Functions</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    Permite ejecutar pequeños fragmentos de código (funciones) en respuesta a eventos.
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
                    <li>Diversos desencadenadores (HTTP, temporizador, colas)</li>
                    <li>Múltiples lenguajes de programación</li>
                    <li>Integración con otros servicios de Azure</li>
                    <li>Modelo de pago por uso</li>
                  </ul>
                </div>
                <div className="border dark:border-gray-700 rounded-lg p-5">
                  <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">Azure Logic Apps</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    Plataforma de integración sin código/bajo código para automatizar flujos de trabajo.
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
                    <li>Diseñador visual de flujos de trabajo</li>
                    <li>Más de 400 conectores predefinidos</li>
                    <li>Automatización de procesos empresariales</li>
                    <li>Integración con SaaS y sistemas empresariales</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border dark:border-gray-700 rounded-lg p-5">
                  <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">Azure Event Grid</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    Servicio de enrutamiento de eventos que facilita la creación de aplicaciones basadas en eventos.
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
                    <li>Entrega casi en tiempo real</li>
                    <li>Modelo publicación-suscripción</li>
                    <li>Filtrado de eventos avanzado</li>
                    <li>Escalado automático para millones de eventos</li>
                  </ul>
                </div>
                <div className="border dark:border-gray-700 rounded-lg p-5">
                  <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">Azure API Management sin servidor</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    Publica, asegura y analiza APIs sin necesidad de administrar servidores.
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
                    <li>Nivel de consumo basado en el uso</li>
                    <li>Escalado automático según demanda</li>
                    <li>Protección y gestión de APIs</li>
                    <li>Integración con servicios serverless</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                <ScaleIcon className="h-6 w-6 inline-block mr-2 text-blue-500" />
                Ventajas de la computación serverless
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Sin administración de infraestructura</h4>
                  <p className="text-gray-700 dark:text-gray-300">Los desarrolladores pueden centrarse en el código, no en servidores, parches o mantenimiento.</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Escalabilidad automática</h4>
                  <p className="text-gray-700 dark:text-gray-300">La plataforma escala automáticamente desde cero hasta el máximo según la demanda en tiempo real.</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Modelo de pago por uso</h4>
                  <p className="text-gray-700 dark:text-gray-300">Solo pagas por el tiempo de ejecución real, sin costos cuando tu código no se ejecuta.</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Ciclo de desarrollo ágil</h4>
                  <p className="text-gray-700 dark:text-gray-300">Menor tiempo para implementar nuevas funcionalidades y realizar actualizaciones.</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Alta disponibilidad intrínseca</h4>
                  <p className="text-gray-700 dark:text-gray-300">Las plataformas serverless incluyen alta disponibilidad sin configuración adicional.</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Arquitectura orientada a eventos</h4>
                  <p className="text-gray-700 dark:text-gray-300">Facilita la creación de sistemas que responden a eventos en tiempo real.</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                <CurrencyDollarIcon className="h-6 w-6 inline-block mr-2 text-blue-500" />
                Consideraciones económicas
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border dark:border-gray-700 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Modelo de precios</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">El modelo serverless generalmente incluye estos componentes:</p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
                    <li>Número de ejecuciones o invocaciones</li>
                    <li>Tiempo de ejecución (normalmente por segundos)</li>
                    <li>Recursos consumidos (memoria, CPU)</li>
                    <li>Transferencia de datos</li>
                  </ul>
                </div>
                <div className="border dark:border-gray-700 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Cuándo es más rentable</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">El modelo serverless suele ser más económico cuando:</p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
                    <li>Cargas de trabajo intermitentes o impredecibles</li>
                    <li>Aplicaciones con períodos de inactividad</li>
                    <li>Microservicios con ejecuciones breves</li>
                    <li>Procesamiento por lotes o programado</li>
                  </ul>
                </div>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg mt-4">
                <p className="text-blue-800 dark:text-blue-100">
                  <InformationCircleIcon className="h-5 w-5 inline-block mr-1" />
                  La mayoría de los servicios serverless de Azure incluyen un nivel gratuito generoso, permitiendo experimentar y desarrollar sin costos iniciales significativos.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                <DocumentCheckIcon className="h-6 w-6 inline-block mr-2 text-blue-500" />
                Casos de uso comunes
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Procesamiento de datos</h4>
                  <p className="text-gray-700 dark:text-gray-300">Transformación de imágenes, procesamiento de archivos, análisis de datos.</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Automatización</h4>
                  <p className="text-gray-700 dark:text-gray-300">Tareas programadas, flujos de trabajo de negocio, integraciones.</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">APIs y backends</h4>
                  <p className="text-gray-700 dark:text-gray-300">APIs para aplicaciones web y móviles, microservicios.</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">IoT</h4>
                  <p className="text-gray-700 dark:text-gray-300">Procesamiento de telemetría de dispositivos, alertas, análisis en tiempo real.</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Chatbots</h4>
                  <p className="text-gray-700 dark:text-gray-300">Asistentes virtuales, bots de atención al cliente, interfaces conversacionales.</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Procesamiento multimedia</h4>
                  <p className="text-gray-700 dark:text-gray-300">Transcodificación de video, generación de miniaturas, análisis de contenido.</p>
                </div>
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                <p className="text-yellow-800 dark:text-yellow-100">
                  <ExclamationTriangleIcon className="h-5 w-5 inline-block mr-1" />
                  <span className="font-semibold">Importante para AZ-900:</span> Comprende los conceptos básicos de la computación serverless, sus beneficios, casos de uso y servicios clave de Azure como Functions y Logic Apps. Recuerda que "serverless" no significa "sin servidores", sino "sin gestión de servidores".
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'appservice' && (
          <div className="space-y-6 p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Azure App Service</h2>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                <CodeBracketIcon className="h-6 w-6 inline-block mr-2 text-blue-500" />
                ¿Qué es Azure App Service?
              </h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Azure App Service es una plataforma completamente administrada para crear, implementar y escalar aplicaciones web, móviles y API rápidamente. Es un servicio de plataforma como servicio (PaaS) que permite a los desarrolladores centrarse en el código y la lógica de negocio, en lugar de la infraestructura.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="text-blue-800 dark:text-blue-100">
                  <InformationCircleIcon className="h-5 w-5 inline-block mr-1" />
                  Azure se encarga de la administración de la infraestructura, la aplicación de parches de seguridad y el equilibrio de carga, mientras que usted se centra en su aplicación.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                <ServerStackIcon className="h-6 w-6 inline-block mr-2 text-blue-500" />
                Tipos de App Service
              </h3>
              <div className="space-y-4">
                <div className="border dark:border-gray-700 rounded-lg p-5">
                  <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">Aplicaciones Web</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    Aloje sitios web y aplicaciones web, con soporte para múltiples lenguajes y frameworks.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Lenguajes soportados: .NET, .NET Core, Java, Ruby, Node.js, PHP, Python
                  </p>
                </div>
                <div className="border dark:border-gray-700 rounded-lg p-5">
                  <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">API Apps</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    Cree y consuma APIs en la nube utilizando su lenguaje preferido, con soporte para Swagger.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Incluye integración con Azure API Management y soporta la autenticación con proveedores como Azure AD.
                  </p>
                </div>
                <div className="border dark:border-gray-700 rounded-lg p-5">
                  <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">Mobile Apps</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    Backend para aplicaciones móviles con sincronización de datos sin conexión, autenticación y notificaciones push.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Compatible con plataformas iOS, Android y Windows.
                  </p>
                </div>
                <div className="border dark:border-gray-700 rounded-lg p-5">
                  <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">Web Apps for Containers</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    Implemente y ejecute aplicaciones containerizadas en App Service, con soporte para Docker.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Use imágenes personalizadas o imágenes pre-construidas de Docker Hub o Azure Container Registry.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                <CpuChipIcon className="h-6 w-6 inline-block mr-2 text-blue-500" />
                Características principales
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Auto-escalado</h4>
                  <p className="text-gray-700 dark:text-gray-300">Escale horizontal o verticalmente basado en la carga o según un calendario definido.</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Implementación automatizada</h4>
                  <p className="text-gray-700 dark:text-gray-300">Integración con GitHub, Azure DevOps o cualquier repositorio Git para CI/CD.</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Ranuras de implementación</h4>
                  <p className="text-gray-700 dark:text-gray-300">Pruebe en entornos de ensayo y cambie a producción con cero tiempo de inactividad.</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Autenticación integrada</h4>
                  <p className="text-gray-700 dark:text-gray-300">Seguridad con Azure AD, Microsoft, Facebook, Google, o Twitter.</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Certificados y dominios personalizados</h4>
                  <p className="text-gray-700 dark:text-gray-300">Soporte para certificados SSL/TLS y dominios propios.</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">DevOps optimizados</h4>
                  <p className="text-gray-700 dark:text-gray-300">Pruebas de carga, monitoreo y diagnóstico integrados.</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                <WrenchScrewdriverIcon className="h-6 w-6 inline-block mr-2 text-blue-500" />
                Planes de App Service
              </h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Las aplicaciones se ejecutan en un Plan de App Service, que define los recursos de computación disponibles para su aplicación.
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Plan</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Características</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Uso ideal</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Free/Shared</td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                        <ul className="list-disc pl-4">
                          <li>Recursos compartidos</li>
                          <li>Limitado en CPU/memoria</li>
                          <li>Sin SLA</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Desarrollo y pruebas</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-700">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Basic</td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                        <ul className="list-disc pl-4">
                          <li>Máquinas dedicadas</li>
                          <li>Escalado manual</li>
                          <li>Dominios personalizados</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Apps de baja/media carga</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Standard</td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                        <ul className="list-disc pl-4">
                          <li>Auto-escalado (hasta 10)</li>
                          <li>Ranuras de implementación</li>
                          <li>Copias de seguridad diarias</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Apps de producción</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-700">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Premium</td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                        <ul className="list-disc pl-4">
                          <li>Auto-escalado (hasta 30)</li>
                          <li>Más ranuras de implementación</li>
                          <li>Más memoria/CPU</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Apps de alta carga</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Isolated</td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                        <ul className="list-disc pl-4">
                          <li>Entorno dedicado (ASE)</li>
                          <li>Máximo aislamiento</li>
                          <li>Red virtual integrada</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Apps de alta seguridad</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                <DocumentCheckIcon className="h-6 w-6 inline-block mr-2 text-blue-500" />
                Casos de uso comunes
              </h3>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li><span className="font-semibold">Aplicaciones web empresariales</span>: Portales internos, CRMs, ERPs.</li>
                <li><span className="font-semibold">Sitios web públicos</span>: Blogs, tiendas en línea, sitios informativos.</li>
                <li><span className="font-semibold">APIs para aplicaciones móviles</span>: Backends para apps iOS, Android o multiplataforma.</li>
                <li><span className="font-semibold">Microservicios</span>: Despliegue de servicios individuales que componen una aplicación más grande.</li>
                <li><span className="font-semibold">Migraciones lift-and-shift</span>: Migración de aplicaciones existentes a la nube con cambios mínimos.</li>
              </ul>
              <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                <p className="text-yellow-800 dark:text-yellow-100">
                  <ExclamationTriangleIcon className="h-5 w-5 inline-block mr-1" />
                  <span className="font-semibold">Importante para AZ-900:</span> Comprender los diferentes planes de servicio, tipos de App Service y sus casos de uso comunes.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'functions' && (
          <div className="space-y-6 p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Azure Functions</h2>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                <BoltIcon className="h-6 w-6 inline-block mr-2 text-blue-500" />
                ¿Qué es Azure Functions?
              </h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Azure Functions es una solución sin servidor (serverless) que permite ejecutar pequeños fragmentos de código o "funciones" sin preocuparse por la infraestructura subyacente. Solo paga por el tiempo que se ejecuta el código.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <p className="text-blue-800 dark:text-blue-100">
                  <InformationCircleIcon className="h-5 w-5 inline-block mr-1" />
                  Las funciones pueden ejecutarse según un cronograma, en respuesta a eventos (como cambios en almacenamiento o mensajes en cola) o mediante solicitudes HTTP.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                <ChartBarIcon className="h-6 w-6 inline-block mr-2 text-blue-500" />
                Características clave
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Serverless</h4>
                  <p className="text-gray-700 dark:text-gray-300">No hay que aprovisionar ni administrar servidores; Azure maneja la escalabilidad automáticamente.</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Basado en eventos</h4>
                  <p className="text-gray-700 dark:text-gray-300">Las funciones se activan en respuesta a eventos específicos en Azure u otros servicios.</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Escalabilidad automática</h4>
                  <p className="text-gray-700 dark:text-gray-300">Se escala según la demanda, desde cero instancias hasta cientos según sea necesario.</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Pago por uso</h4>
                  <p className="text-gray-700 dark:text-gray-300">Solo se paga por el tiempo de ejecución de las funciones, no por la infraestructura inactiva.</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Lenguajes múltiples</h4>
                  <p className="text-gray-700 dark:text-gray-300">Soporte para C#, JavaScript, Python, Java, PowerShell y más.</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Integración con DevOps</h4>
                  <p className="text-gray-700 dark:text-gray-300">Compatibilidad con CI/CD, pruebas y entornos de desarrollo local.</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                <ArrowPathIcon className="h-6 w-6 inline-block mr-2 text-blue-500" />
                Desencadenadores y enlances (Triggers & Bindings)
              </h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Los desencadenadores inician la ejecución de una función, mientras que los enlaces permiten conectarse a recursos sin código personalizado.
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Tipo de desencadenador</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Descripción</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">HTTP</td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">La función se ejecuta cuando recibe una solicitud HTTP.</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-700">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Timer</td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">La función se ejecuta según un cronograma definido (como una tarea cron).</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Blob</td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Se activa cuando se agrega o actualiza un blob en Azure Storage.</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-700">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Queue</td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Se ejecuta cuando aparece un nuevo mensaje en una cola de Azure Storage.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Cosmos DB</td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Reacciona a cambios en documentos en Azure Cosmos DB.</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-700">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Event Grid</td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Se desencadena en respuesta a eventos de Azure Event Grid.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Event Hub</td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Responde a eventos que llegan a Azure Event Hubs.</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-700">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Service Bus</td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Se activa cuando llegan mensajes a una cola o tema de Service Bus.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                <WrenchScrewdriverIcon className="h-6 w-6 inline-block mr-2 text-blue-500" />
                Planes de hospedaje
              </h3>
              <div className="space-y-4">
                <div className="border dark:border-gray-700 rounded-lg p-5">
                  <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">Plan de consumo</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    El plan predeterminado y verdaderamente serverless:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
                    <li>Escala automáticamente según la carga</li>
                    <li>Solo paga cuando las funciones se ejecutan</li>
                    <li>Tiempo de ejecución limitado a 5-10 minutos por invocación</li>
                    <li>Incluye un número mensual gratuito de ejecuciones</li>
                  </ul>
                </div>
                <div className="border dark:border-gray-700 rounded-lg p-5">
                  <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">Plan Premium</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    Ofrece un rendimiento mejorado:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
                    <li>Instancias perpetuamente calientes para evitar el arranque en frío</li>
                    <li>Conectividad de red virtual</li>
                    <li>Tiempo de ejecución ilimitado</li>
                    <li>Tamaños de instancia Premium (más memoria/CPU)</li>
                    <li>Predictibilidad de precios</li>
                  </ul>
                </div>
                <div className="border dark:border-gray-700 rounded-lg p-5">
                  <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">Plan de App Service</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    Ejecución de Functions en el mismo plan que sus aplicaciones web:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
                    <li>Buen aprovechamiento de recursos infrautilizados</li>
                    <li>Ofrece control manual o automático del escalado</li>
                    <li>Mayor previsibilidad de costos</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                <DocumentCheckIcon className="h-6 w-6 inline-block mr-2 text-blue-500" />
                Casos de uso comunes
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Procesamiento de datos</h4>
                  <p className="text-gray-700 dark:text-gray-300">Procesamiento de archivos o imágenes cuando se cargan a un almacenamiento.</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Automatización</h4>
                  <p className="text-gray-700 dark:text-gray-300">Tareas programadas, flujos de trabajo de negocio, integraciones.</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">APIs y backends</h4>
                  <p className="text-gray-700 dark:text-gray-300">APIs para aplicaciones web y móviles, microservicios.</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">IoT</h4>
                  <p className="text-gray-700 dark:text-gray-300">Procesamiento de telemetría de dispositivos, alertas, análisis en tiempo real.</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Chatbots</h4>
                  <p className="text-gray-700 dark:text-gray-300">Asistentes virtuales, bots de atención al cliente, interfaces conversacionales.</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Procesamiento multimedia</h4>
                  <p className="text-gray-700 dark:text-gray-300">Transcodificación de video, generación de miniaturas, análisis de contenido.</p>
                </div>
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                <p className="text-yellow-800 dark:text-yellow-100">
                  <ExclamationTriangleIcon className="h-5 w-5 inline-block mr-1" />
                  <span className="font-semibold">Importante para AZ-900:</span> Entender el concepto de computación sin servidor, los diferentes planes de hospedaje y cómo Functions se integra con otros servicios de Azure a través de desencadenadores y enlaces.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'quiz' && (
          <div className="space-y-8">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-100 dark:border-blue-900/50">
              <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-4">Pon a prueba tus conocimientos</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Responde estas preguntas para verificar tu comprensión de los servicios de computación en Azure.
                Estas preguntas son similares a lo que podrías encontrar en el examen AZ-900.
              </p>
            </div>
            
            <div className="space-y-6">
              {quizQuestions.map((question) => (
                <div key={question.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4 flex items-start">
                    <QuestionMarkCircleIcon className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0" />
                    <span>{question.id}. {question.question}</span>
                  </h3>
                  
                  <div className="space-y-3 mb-4">
                    {question.options.map((option, idx) => (
                      <div 
                        key={idx} 
                        onClick={() => handleAnswerSelect(question.id, idx)}
                        className={`
                          p-3 rounded-lg border transition-colors cursor-pointer
                          ${selectedAnswers[question.id] === idx ? 
                            (showExplanations[question.id] && idx === question.correctAnswer ?
                              'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800' : 
                              showExplanations[question.id] ?
                                'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800' :
                                'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800'
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
                                  'border-blue-500 text-blue-500 dark:border-blue-400 dark:text-blue-400' :
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
                          className="mt-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium flex items-center"
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
            
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-100 dark:border-blue-900/50">
              <h4 className="font-medium text-blue-700 dark:text-blue-300 mb-3">Puntos clave para el examen AZ-900</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Las máquinas virtuales proporcionan IaaS (Infraestructura como Servicio) con control total sobre el sistema operativo.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Los contenedores son más ligeros que las VMs y permiten empaquetar aplicaciones con todas sus dependencias.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Azure Functions es un servicio serverless donde sólo pagas por el tiempo de ejecución del código.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">App Service ofrece un entorno PaaS (Plataforma como Servicio) para alojar aplicaciones web, APIs y trabajos en segundo plano.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">El auto-escalado permite ajustar dinámicamente los recursos según la demanda, optimizando costos y rendimiento.</span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 