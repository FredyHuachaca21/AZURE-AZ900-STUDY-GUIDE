import { useState } from 'react';
import { 
  CogIcon, 
  CubeIcon, 
  FolderIcon, 
  BuildingLibraryIcon,
  QuestionMarkCircleIcon,
  CheckCircleIcon,
  XCircleIcon,
  ChartPieIcon,
  TagIcon,
  LockClosedIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ExclamationTriangleIcon,
  MapIcon,
  CodeBracketIcon,
  ClockIcon,
  BoltIcon,
  CurrencyDollarIcon,
  InformationCircleIcon,
  CreditCardIcon,
  ServerIcon
} from '@heroicons/react/24/outline';

export default function ManagementInfrastructure() {
  const [activeTab, setActiveTab] = useState('descripcion');
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showExplanations, setShowExplanations] = useState({});
  
  // Datos para preguntas del quiz
  const quizQuestions = [
    {
      id: 1,
      question: '¿Qué es un Grupo de Recursos en Azure?',
      options: [
        'Un conjunto de usuarios con los mismos permisos de acceso',
        'Un contenedor lógico para recursos relacionados que comparten el mismo ciclo de vida',
        'Una colección de bases de datos que se administran juntas',
        'Un plan de suscripción para servicios específicos de Azure'
      ],
      correctAnswer: 1,
      explanation: 'Un Grupo de Recursos es un contenedor lógico que se utiliza para agrupar recursos relacionados que comparten el mismo ciclo de vida, permisos y políticas. Facilita la administración, el despliegue y la facturación de los recursos de Azure.'
    },
    {
      id: 2,
      question: '¿Cuál de las siguientes NO es una característica de los Grupos de Administración de Azure?',
      options: [
        'Permiten organizar suscripciones en una estructura jerárquica',
        'Las políticas y permisos pueden aplicarse a nivel de grupo de administración',
        'Pueden contener otros grupos de administración, formando una jerarquía',
        'Permiten ejecutar máquinas virtuales con mayor rendimiento'
      ],
      correctAnswer: 3,
      explanation: 'Los Grupos de Administración no afectan el rendimiento de las máquinas virtuales. Su propósito es organizar suscripciones jerárquicamente y aplicar políticas y control de acceso a múltiples suscripciones de manera centralizada.'
    },
    {
      id: 3,
      question: '¿Qué es Azure Resource Manager (ARM)?',
      options: [
        'Una herramienta de monitoreo para recursos de Azure',
        'El servicio de implementación y administración para Azure',
        'Un tipo especial de máquina virtual para administrar recursos',
        'Un plan de suscripción para servicios de administración'
      ],
      correctAnswer: 1,
      explanation: 'Azure Resource Manager (ARM) es el servicio de implementación y administración para Azure. Proporciona una capa de administración que permite crear, actualizar y eliminar recursos en su cuenta de Azure. Utiliza plantillas declarativas JSON para la infraestructura como código.'
    },
    {
      id: 4,
      question: '¿Qué característica es cierta sobre las etiquetas (tags) en Azure?',
      options: [
        'Solo se pueden aplicar a nivel de suscripción',
        'Están limitadas a un máximo de 5 por recurso',
        'Permiten organizar recursos según criterios personalizados',
        'Afectan directamente al rendimiento de los recursos'
      ],
      correctAnswer: 2,
      explanation: 'Las etiquetas (tags) en Azure son pares de nombre-valor que permiten organizar recursos y asignar metadatos según criterios personalizados como departamento, entorno, centro de costos, etc. Facilitan la administración, búsqueda, filtrado y reporting de recursos.'
    },
    {
      id: 5,
      question: '¿Cuál es el límite máximo de recursos que puede contener un Grupo de Recursos?',
      options: [
        '100 recursos',
        '500 recursos',
        '1000 recursos',
        'No hay un límite fijo, pero hay límites de suscripción'
      ],
      correctAnswer: 3,
      explanation: 'No existe un límite fijo para la cantidad de recursos que puede contener un Grupo de Recursos. Sin embargo, hay límites a nivel de suscripción para el número total de recursos. La recomendación es organizar los recursos de manera lógica para facilitar su administración.'
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
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Infraestructura de Administración de Azure</h2>
        
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
              <CogIcon className="h-5 w-5 mr-2" />
              Descripción
            </button>
            <button
              onClick={() => setActiveTab('recursos')}
              className={`${
                activeTab === 'recursos'
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 hover:border-gray-300 dark:hover:text-gray-300'
              } whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm flex items-center`}
            >
              <CubeIcon className="h-5 w-5 mr-2" />
              Recursos
            </button>
            <button
              onClick={() => setActiveTab('grupos-recursos')}
              className={`${
                activeTab === 'grupos-recursos'
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 hover:border-gray-300 dark:hover:text-gray-300'
              } whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm flex items-center`}
            >
              <FolderIcon className="h-5 w-5 mr-2" />
              Grupos de Recursos
            </button>
            <button
              onClick={() => setActiveTab('grupos-administracion')}
              className={`${
                activeTab === 'grupos-administracion'
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 hover:border-gray-300 dark:hover:text-gray-300'
              } whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm flex items-center`}
            >
              <BuildingLibraryIcon className="h-5 w-5 mr-2" />
              Grupos de Administración
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
      <div className="mt-6">
        {activeTab === 'descripcion' && (
          <div className="space-y-6">
            <div className="bg-blue-50 dark:bg-gray-700 p-5 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-2">¿Qué es la infraestructura de administración de Azure?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                La infraestructura de administración de Azure es el conjunto de servicios, herramientas y estructuras organizativas que permiten a los usuarios gestionar, organizar y controlar sus recursos en la nube de Azure. Esta infraestructura proporciona un marco para la gobernanza, el control de acceso, la implementación y la supervisión de los recursos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-5">
                <div className="flex items-center mb-4">
                  <CubeIcon className="h-8 w-8 text-blue-500" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white ml-3">Recursos de Azure</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Los recursos son entidades individuales que se administran en Azure, como máquinas virtuales, bases de datos, cuentas de almacenamiento, redes virtuales y muchos más. Cada recurso tiene un tipo específico y pertenece a un proveedor de recursos.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-5">
                <div className="flex items-center mb-4">
                  <FolderIcon className="h-8 w-8 text-blue-500" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white ml-3">Grupos de recursos</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Los grupos de recursos son contenedores lógicos que permiten agrupar y organizar recursos relacionados para una solución. Facilitan la administración, el despliegue, la monitorización y la facturación de los recursos como una unidad.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-5">
                <div className="flex items-center mb-4">
                  <BuildingLibraryIcon className="h-8 w-8 text-blue-500" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white ml-3">Grupos de administración</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Los grupos de administración proporcionan un nivel de ámbito y control por encima de las suscripciones. Organizan suscripciones en una estructura jerárquica, permitiendo aplicar políticas y control de acceso a múltiples suscripciones de manera efectiva.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-5">
                <div className="flex items-center mb-4">
                  <CogIcon className="h-8 w-8 text-blue-500" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white ml-3">Azure Resource Manager</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Azure Resource Manager (ARM) es el servicio de implementación y administración para Azure. Proporciona una capa de administración consistente para realizar operaciones a través del portal de Azure, CLI, PowerShell, SDKs o APIs REST.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Características clave de la infraestructura de administración</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-blue-500 mr-2">🔑</span>
                  <span><strong>Control de acceso:</strong> Mediante Microsoft Entra ID (anteriormente Azure AD) y RBAC (Control de acceso basado en roles) para gestionar permisos a nivel de recurso, grupo de recursos, suscripción o grupo de administración.</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-blue-500 mr-2">📝</span>
                  <span><strong>Plantillas ARM:</strong> Permiten la implementación y configuración de recursos de forma declarativa e idempotente (infraestructura como código).</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-blue-500 mr-2">🏷️</span>
                  <span><strong>Etiquetas (Tags):</strong> Metadatos que permiten organizar recursos según criterios personalizados como departamento, ambiente, aplicación, etc.</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-blue-500 mr-2">🔒</span>
                  <span><strong>Bloqueos de recursos:</strong> Protegen recursos o grupos de recursos contra eliminación o modificación accidental.</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-blue-500 mr-2">📊</span>
                  <span><strong>Políticas y conformidad:</strong> Con Azure Policy se pueden establecer reglas y efectos para los recursos, garantizando el cumplimiento de estándares organizacionales o normativos.</span>
                </li>
              </ul>
            </div>

            <div className="bg-indigo-50 dark:bg-gray-700 p-5 rounded-lg">
              <h3 className="text-lg font-semibold text-indigo-700 dark:text-indigo-300 mb-4">Ejemplo de jerarquía para una empresa</h3>
              
              <div className="overflow-x-auto">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-indigo-200 dark:border-indigo-800">
                  {/* Estructura de árbol jerárquico vertical */}
                  <ul className="tree-view">
                    {/* Raíz */}
                    <li className="mb-6">
                      <div className="flex items-center p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg border border-indigo-300 dark:border-indigo-700 w-64">
                        <BuildingLibraryIcon className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2" />
                        <div>
                          <div className="font-semibold text-indigo-700 dark:text-indigo-300">Raíz del inquilino</div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">Contoso Ltd.</div>
                        </div>
                      </div>
                      
                      {/* Grupos de administración principales */}
                      <ul className="ml-8 mt-2 border-l-2 border-indigo-300 dark:border-indigo-700 pl-6 space-y-6">
                        {/* Corporativo */}
                        <li>
                          <div className="flex items-center p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg border border-purple-300 dark:border-purple-700 w-64 relative">
                            <div className="absolute -left-8 top-1/2 w-6 h-0.5 bg-indigo-300 dark:bg-indigo-700"></div>
                            <UserGroupIcon className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-2" />
                            <div>
                              <div className="font-medium text-purple-700 dark:text-purple-300">Corporativo</div>
                              <div className="text-xs text-gray-600 dark:text-gray-400">Grupo de administración</div>
                            </div>
                          </div>
                          
                          {/* Suscripciones de Corporativo */}
                          <ul className="ml-6 mt-2 border-l-2 border-purple-300 dark:border-purple-700 pl-4 space-y-2">
                            <li>
                              <div className="flex items-center p-2 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-200 dark:border-blue-800 w-56 relative">
                                <div className="absolute -left-6 top-1/2 w-4 h-0.5 bg-purple-300 dark:bg-purple-700"></div>
                                <CreditCardIcon className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2" />
                                <div>
                                  <div className="text-sm text-blue-700 dark:text-blue-300">IT</div>
                                  <div className="text-xs text-gray-600 dark:text-gray-400">Suscripción</div>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="flex items-center p-2 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-200 dark:border-blue-800 w-56 relative">
                                <div className="absolute -left-6 top-1/2 w-4 h-0.5 bg-purple-300 dark:bg-purple-700"></div>
                                <CreditCardIcon className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2" />
                                <div>
                                  <div className="text-sm text-blue-700 dark:text-blue-300">Operaciones</div>
                                  <div className="text-xs text-gray-600 dark:text-gray-400">Suscripción</div>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="flex items-center p-2 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-200 dark:border-blue-800 w-56 relative">
                                <div className="absolute -left-6 top-1/2 w-4 h-0.5 bg-purple-300 dark:bg-purple-700"></div>
                                <CreditCardIcon className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2" />
                                <div>
                                  <div className="text-sm text-blue-700 dark:text-blue-300">Seguridad</div>
                                  <div className="text-xs text-gray-600 dark:text-gray-400">Suscripción</div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                        
                        {/* Producción */}
                        <li>
                          <div className="flex items-center p-3 bg-green-100 dark:bg-green-900/30 rounded-lg border border-green-300 dark:border-green-700 w-64 relative">
                            <div className="absolute -left-8 top-1/2 w-6 h-0.5 bg-indigo-300 dark:bg-indigo-700"></div>
                            <ServerIcon className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
                            <div>
                              <div className="font-medium text-green-700 dark:text-green-300">Producción</div>
                              <div className="text-xs text-gray-600 dark:text-gray-400">Grupo de administración</div>
                            </div>
                          </div>
                          
                          {/* Subgrupos de Producción */}
                          <ul className="ml-6 mt-2 border-l-2 border-green-300 dark:border-green-700 pl-4 space-y-4">
                            {/* Servicios financieros */}
                            <li>
                              <div className="flex items-center p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded border border-emerald-200 dark:border-emerald-800 w-56 relative">
                                <div className="absolute -left-6 top-1/2 w-4 h-0.5 bg-green-300 dark:bg-green-700"></div>
                                <CurrencyDollarIcon className="h-4 w-4 text-emerald-600 dark:text-emerald-400 mr-2" />
                                <div>
                                  <div className="text-sm text-emerald-700 dark:text-emerald-300">Servicios financieros</div>
                                  <div className="text-xs text-gray-600 dark:text-gray-400">Grupo de administración</div>
                                </div>
                              </div>
                              
                              {/* Suscripciones de Servicios financieros */}
                              <ul className="ml-4 mt-2 border-l-2 border-emerald-300 dark:border-emerald-700 pl-4 space-y-2">
                                <li>
                                  <div className="flex items-center p-2 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-200 dark:border-blue-800 w-48 relative">
                                    <div className="absolute -left-6 top-1/2 w-4 h-0.5 bg-emerald-300 dark:bg-emerald-700"></div>
                                    <CreditCardIcon className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2" />
                                    <div>
                                      <div className="text-sm text-blue-700 dark:text-blue-300">Banca</div>
                                      <div className="text-xs text-gray-600 dark:text-gray-400">Suscripción</div>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="flex items-center p-2 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-200 dark:border-blue-800 w-48 relative">
                                    <div className="absolute -left-6 top-1/2 w-4 h-0.5 bg-emerald-300 dark:bg-emerald-700"></div>
                                    <CreditCardIcon className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2" />
                                    <div>
                                      <div className="text-sm text-blue-700 dark:text-blue-300">Seguros</div>
                                      <div className="text-xs text-gray-600 dark:text-gray-400">Suscripción</div>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </li>
                            
                            {/* Sanidad */}
                            <li>
                              <div className="flex items-center p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded border border-emerald-200 dark:border-emerald-800 w-56 relative">
                                <div className="absolute -left-6 top-1/2 w-4 h-0.5 bg-green-300 dark:bg-green-700"></div>
                                <ShieldCheckIcon className="h-4 w-4 text-emerald-600 dark:text-emerald-400 mr-2" />
                                <div>
                                  <div className="text-sm text-emerald-700 dark:text-emerald-300">Sanidad</div>
                                  <div className="text-xs text-gray-600 dark:text-gray-400">Grupo de administración</div>
                                </div>
                              </div>
                              
                              {/* Suscripciones de Sanidad */}
                              <ul className="ml-4 mt-2 border-l-2 border-emerald-300 dark:border-emerald-700 pl-4 space-y-2">
                                <li>
                                  <div className="flex items-center p-2 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-200 dark:border-blue-800 w-48 relative">
                                    <div className="absolute -left-6 top-1/2 w-4 h-0.5 bg-emerald-300 dark:bg-emerald-700"></div>
                                    <CreditCardIcon className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2" />
                                    <div>
                                      <div className="text-sm text-blue-700 dark:text-blue-300">Datos de pacientes</div>
                                      <div className="text-xs text-gray-600 dark:text-gray-400">Suscripción</div>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        
                        {/* Entornos no productivos */}
                        <li>
                          <div className="flex items-center p-3 bg-amber-100 dark:bg-amber-900/30 rounded-lg border border-amber-300 dark:border-amber-700 w-64 relative">
                            <div className="absolute -left-8 top-1/2 w-6 h-0.5 bg-indigo-300 dark:bg-indigo-700"></div>
                            <CogIcon className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2" />
                            <div>
                              <div className="font-medium text-amber-700 dark:text-amber-300">Entornos no productivos</div>
                              <div className="text-xs text-gray-600 dark:text-gray-400">Grupo de administración</div>
                            </div>
                          </div>
                          
                          {/* Suscripciones de Entornos no productivos */}
                          <ul className="ml-6 mt-2 border-l-2 border-amber-300 dark:border-amber-700 pl-4 space-y-2">
                            <li>
                              <div className="flex items-center p-2 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-200 dark:border-blue-800 w-56 relative">
                                <div className="absolute -left-6 top-1/2 w-4 h-0.5 bg-amber-300 dark:bg-amber-700"></div>
                                <CreditCardIcon className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2" />
                                <div>
                                  <div className="text-sm text-blue-700 dark:text-blue-300">Desarrollo</div>
                                  <div className="text-xs text-gray-600 dark:text-gray-400">Suscripción</div>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="flex items-center p-2 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-200 dark:border-blue-800 w-56 relative">
                                <div className="absolute -left-6 top-1/2 w-4 h-0.5 bg-amber-300 dark:bg-amber-700"></div>
                                <CreditCardIcon className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2" />
                                <div>
                                  <div className="text-sm text-blue-700 dark:text-blue-300">Pruebas</div>
                                  <div className="text-xs text-gray-600 dark:text-gray-400">Suscripción</div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                        
                        {/* Desactivado */}
                        <li>
                          <div className="flex items-center p-3 bg-gray-100 dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600 w-64 relative">
                            <div className="absolute -left-8 top-1/2 w-6 h-0.5 bg-indigo-300 dark:bg-indigo-700"></div>
                            <XCircleIcon className="h-5 w-5 text-gray-600 dark:text-gray-400 mr-2" />
                            <div>
                              <div className="font-medium text-gray-700 dark:text-gray-300">Desactivado</div>
                              <div className="text-xs text-gray-600 dark:text-gray-400">Grupo de administración</div>
                            </div>
                          </div>
                          
                          {/* Suscripciones de Desactivado */}
                          <ul className="ml-6 mt-2 border-l-2 border-gray-300 dark:border-gray-600 pl-4 space-y-2">
                            <li>
                              <div className="flex items-center p-2 bg-gray-50 dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700 w-56 relative">
                                <div className="absolute -left-6 top-1/2 w-4 h-0.5 bg-gray-300 dark:bg-gray-600"></div>
                                <CreditCardIcon className="h-4 w-4 text-gray-600 dark:text-gray-400 mr-2" />
                                <div>
                                  <div className="text-sm text-gray-700 dark:text-gray-300">Proyectos archivados</div>
                                  <div className="text-xs text-gray-600 dark:text-gray-400">Suscripción</div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-3 italic">
                Esta representación visual muestra cómo una organización puede estructurar sus grupos de administración y suscripciones en Azure en una jerarquía clara.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'recursos' && (
          <div className="space-y-6">
            <div className="bg-blue-50 dark:bg-gray-700 p-5 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-2">Recursos de Azure</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Los recursos son los componentes fundamentales de Azure. Un recurso es cualquier instancia de un servicio de Azure que puedes crear, como máquinas virtuales, bases de datos, cuentas de almacenamiento, redes virtuales, aplicaciones web, etc. Cada recurso en Azure tiene un identificador único (ID de recurso) y pertenece a un grupo de recursos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-5">
                <div className="flex items-center mb-4">
                  <MapIcon className="h-8 w-8 text-blue-500" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white ml-3">Anatomía de un recurso</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Cada recurso en Azure se identifica por un URI estructurado y cuenta con:
                </p>
                <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4 bg-gray-50 dark:bg-gray-700 mb-4">
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                    <li><strong>ID de recurso</strong>: Identificador único con formato:</li>
                    <li className="font-mono text-xs bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto">
                      /subscriptions/{'{id-suscripción}'}/resourceGroups/{'{grupo-recursos}'}/providers/{'{proveedor}'}/{'{tipo}'}/{'{nombre}'}
                    </li>
                    <li><strong>Nombre</strong>: Nombre asignado al recurso (único en su ámbito)</li>
                    <li><strong>Tipo</strong>: Categoría del recurso (ej. Microsoft.Compute/virtualMachines)</li>
                    <li><strong>Grupo de recursos</strong>: Contenedor organizativo para el recurso</li>
                    <li><strong>Ubicación/Región</strong>: Centro de datos donde se aprovisiona el recurso</li>
                    <li><strong>Suscripción</strong>: Cuenta de Azure que posee el recurso</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-5">
                <div className="flex items-center mb-4">
                  <CubeIcon className="h-8 w-8 text-blue-500" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white ml-3">Categorías principales</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Azure ofrece más de 100 servicios que se agrupan en categorías:
                </p>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 text-blue-500 mr-2">•</span>
                    <span><strong>Cómputo</strong>: VMs, Kubernetes, Funciones, App Service</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 text-blue-500 mr-2">•</span>
                    <span><strong>Almacenamiento</strong>: Blobs, Discos, Archivos, Tablas, Colas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 text-blue-500 mr-2">•</span>
                    <span><strong>Bases de datos</strong>: SQL, Cosmos DB, MySQL, MongoDB</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 text-blue-500 mr-2">•</span>
                    <span><strong>Redes</strong>: Redes virtuales, Balanceadores, DNS, VPN, ExpressRoute</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 text-blue-500 mr-2">•</span>
                    <span><strong>Identidad</strong>: Active Directory, B2C, Managed Identities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 text-blue-500 mr-2">•</span>
                    <span><strong>IoT</strong>: IoT Hub, IoT Central, Digital Twins</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 text-blue-500 mr-2">•</span>
                    <span><strong>IA/ML</strong>: Cognitive Services, Bot Service, Machine Learning</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-5">
                <div className="flex items-center mb-4">
                  <TagIcon className="h-8 w-8 text-blue-500" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white ml-3">Etiquetas (Tags)</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Las etiquetas son pares clave-valor que permiten organizar y categorizar recursos:
                </p>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 text-blue-500 mr-2">•</span>
                    <span><strong>Organización</strong>: Departamento, proyecto, entorno, centro de costos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 text-blue-500 mr-2">•</span>
                    <span><strong>Gestión</strong>: Clasificar por propietario, fecha final, criticidad</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 text-blue-500 mr-2">•</span>
                    <span><strong>Facturación</strong>: Asignar costos a unidades de negocio</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 text-blue-500 mr-2">•</span>
                    <span><strong>Automatización</strong>: Base para scripts y flujos de trabajo</span>
                  </li>
                </ul>
                <div className="mt-3 text-sm bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                  <p className="font-semibold mb-2">Ejemplo de etiquetas:</p>
                  <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                    <li><code>Departamento: Marketing</code></li>
                    <li><code>Entorno: Producción</code></li>
                    <li><code>Proyecto: Campaña2023</code></li>
                    <li><code>Propietario: ana.garcia@empresa.com</code></li>
                    <li><code>CentroCosto: CC-1234</code></li>
                  </ul>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-5">
                <div className="flex items-center mb-4">
                  <ClockIcon className="h-8 w-8 text-blue-500" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white ml-3">Ciclo de vida</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Los recursos en Azure pasan por varios estados durante su existencia:
                </p>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <div className="flex items-start">
                    <span className="flex-shrink-0 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                    <div>
                      <p className="font-semibold">Aprovisionamiento</p>
                      <p className="text-sm">Creación y configuración inicial del recurso</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="flex-shrink-0 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                    <div>
                      <p className="font-semibold">Configuración</p>
                      <p className="text-sm">Ajuste de configuraciones, escalado, integración</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="flex-shrink-0 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full w-6 h-6 flex items-center justify-center mr-2">3</span>
                    <div>
                      <p className="font-semibold">Monitorización</p>
                      <p className="text-sm">Supervisión de rendimiento, alertas, diagnóstico</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="flex-shrink-0 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full w-6 h-6 flex items-center justify-center mr-2">4</span>
                    <div>
                      <p className="font-semibold">Actualización</p>
                      <p className="text-sm">Cambio de SKU, versión, capacidad</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="flex-shrink-0 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full w-6 h-6 flex items-center justify-center mr-2">5</span>
                    <div>
                      <p className="font-semibold">Eliminación/Desaprovisionamiento</p>
                      <p className="text-sm">Borrado de recursos y liberación de capacidad</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-5">
              <div className="flex items-center mb-4">
                <CodeBracketIcon className="h-8 w-8 text-blue-500" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white ml-3">Creación y administración</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Los recursos en Azure pueden crearse y administrarse a través de diferentes herramientas:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-3">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Portal de Azure</h4>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Interfaz gráfica basada en web</li>
                    <li>• Ideal para tareas individuales</li>
                    <li>• Experiencia guiada y visual</li>
                    <li>• Gestión manual de recursos</li>
                  </ul>
                </div>
                <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-3">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">CLI de Azure / PowerShell</h4>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Interfaz de línea de comandos</li>
                    <li>• Automatización de tareas</li>
                    <li>• Scripts para operaciones repetitivas</li>
                    <li>• Ideal para administradores</li>
                  </ul>
                </div>
                <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-3">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">ARM Templates / Terraform</h4>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Infraestructura como código</li>
                    <li>• Despliegues repetibles</li>
                    <li>• Control de versiones</li>
                    <li>• Implementaciones a escala</li>
                  </ul>
                </div>
              </div>

              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Ejemplo de ARM Template (fragmento)</h4>
              <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg overflow-x-auto text-xs font-mono">
                <pre>{`{
  "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
  "contentVersion": "1.0.0.0",
  "parameters": {
    "storageAccountName": {
      "type": "string",
      "metadata": {
        "description": "Nombre de la cuenta de almacenamiento"
      }
    }
  },
  "resources": [
    {
      "type": "Microsoft.Storage/storageAccounts",
      "apiVersion": "2021-04-01",
      "name": "[parameters('storageAccountName')]",
      "location": "[resourceGroup().location]",
      "sku": {
        "name": "Standard_LRS"
      },
      "kind": "StorageV2"
    }
  ]
}`}</pre>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-gray-700 p-5 rounded-lg">
              <div className="flex items-start">
                <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-green-700 dark:text-green-300 mb-2">Mejores prácticas</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 text-green-500 mr-2">•</span>
                      <span><strong>Convenciones de nombres:</strong> Adoptar un esquema de nomenclatura coherente para todos los recursos</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 text-green-500 mr-2">•</span>
                      <span><strong>Etiquetado:</strong> Aplicar etiquetas a todos los recursos para organización y facturación</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 text-green-500 mr-2">•</span>
                      <span><strong>Automatización:</strong> Utilizar plantillas y scripts para la creación de recursos</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 text-green-500 mr-2">•</span>
                      <span><strong>RBAC:</strong> Aplicar el principio de mínimo privilegio para el acceso a recursos</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 text-green-500 mr-2">•</span>
                      <span><strong>Bloqueos:</strong> Usar bloqueos de recursos para prevenir eliminaciones accidentales</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 text-green-500 mr-2">•</span>
                      <span><strong>Monitorización:</strong> Configurar alertas y diagnósticos para todos los recursos críticos</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-red-50 dark:bg-gray-700 p-5 rounded-lg border-l-4 border-red-500">
              <div className="flex items-start">
                <ExclamationTriangleIcon className="h-6 w-6 text-red-500 mr-3 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-red-700 dark:text-red-300 mb-2">Consideraciones importantes</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 text-red-500 mr-2">•</span>
                      <span>Algunos recursos tienen nombres que deben ser globalmente únicos (como cuentas de almacenamiento).</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 text-red-500 mr-2">•</span>
                      <span>No todos los recursos de Azure están disponibles en todas las regiones.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 text-red-500 mr-2">•</span>
                      <span>Algunos recursos no se pueden mover entre grupos de recursos o suscripciones después de creados.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 text-red-500 mr-2">•</span>
                      <span>La eliminación de recursos puede ser irreversible - considere usar bloqueos de eliminación para recursos críticos.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 text-red-500 mr-2">•</span>
                      <span>Las cuotas y límites de servicio pueden restringir el número de recursos que puede crear.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'grupos-recursos' && (
          <div className="space-y-6">
            <div className="bg-blue-50 dark:bg-gray-700 p-5 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-2">Grupos de recursos en Azure</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Un grupo de recursos es un contenedor lógico que sirve para organizar y administrar un conjunto de recursos relacionados de Azure. Permite agrupar recursos que comparten un ciclo de vida común, facilitando su administración, aprovisionamiento y monitorización colectiva.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-5">
                <div className="flex items-center mb-4">
                  <FolderIcon className="h-8 w-8 text-blue-500" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white ml-3">Características principales</h3>
                </div>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 text-blue-500 mr-2">•</span>
                    <div>
                      <span className="font-semibold">Contenedor lógico</span>
                      <p className="text-sm mt-1">Agrupa recursos relacionados que comparten un mismo ciclo de vida o propósito común.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 text-blue-500 mr-2">•</span>
                    <div>
                      <span className="font-semibold">Ámbito de administración</span>
                      <p className="text-sm mt-1">Permite aplicar políticas, roles y bloqueos a nivel de grupo.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 text-blue-500 mr-2">•</span>
                    <div>
                      <span className="font-semibold">Unidad de implementación</span>
                      <p className="text-sm mt-1">Facilita el despliegue, actualización y eliminación de recursos como una unidad.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 text-blue-500 mr-2">•</span>
                    <div>
                      <span className="font-semibold">Facturación</span>
                      <p className="text-sm mt-1">Proporciona una vista agregada de los costos de los recursos incluidos.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-5">
                <div className="flex items-center mb-4">
                  <BoltIcon className="h-8 w-8 text-blue-500" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white ml-3">Organización y estructura</h3>
                </div>
                <div className="mb-4 text-gray-700 dark:text-gray-300">
                  <p className="mb-3">Los grupos de recursos permiten diferentes modelos de organización:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
                    <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-3">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Por aplicación</h4>
                      <p className="text-sm">Todos los recursos que pertenecen a una aplicación específica.</p>
                      <p className="text-xs mt-2 text-blue-600 dark:text-blue-400">Ejemplo: App-CRM-Produccion</p>
                    </div>
                    <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-3">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Por entorno</h4>
                      <p className="text-sm">Separar recursos por entorno de desarrollo, pruebas o producción.</p>
                      <p className="text-xs mt-2 text-blue-600 dark:text-blue-400">Ejemplo: RG-Desarrollo-WebApps</p>
                    </div>
                    <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-3">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Por departamento</h4>
                      <p className="text-sm">Recursos utilizados por un departamento específico.</p>
                      <p className="text-xs mt-2 text-blue-600 dark:text-blue-400">Ejemplo: RG-Marketing-Analytics</p>
                    </div>
                    <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-3">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Por tipo de recurso</h4>
                      <p className="text-sm">Agrupar recursos similares para una gestión especializada.</p>
                      <p className="text-xs mt-2 text-blue-600 dark:text-blue-400">Ejemplo: RG-Networking-Global</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-5">
                <div className="flex items-center mb-4">
                  <CurrencyDollarIcon className="h-8 w-8 text-blue-500" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white ml-3">Facturación y costos</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Los grupos de recursos ofrecen ventajas para la gestión de costos:
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 text-blue-500 mr-2">•</span>
                    <span>Vista consolidada de costos para todos los recursos del grupo</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 text-blue-500 mr-2">•</span>
                    <span>Presupuestos y alertas configurables a nivel de grupo</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 text-blue-500 mr-2">•</span>
                    <span>Análisis de costos por aplicación o unidad de negocio</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 text-blue-500 mr-2">•</span>
                    <span>Exportación de datos de facturación para informes personalizados</span>
                  </li>
                </ul>
                <div className="mt-4 bg-gray-50 dark:bg-gray-800 p-3 rounded-lg text-sm">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">Importante:</p>
                  <p className="text-gray-700 dark:text-gray-300">La facturación se genera a nivel de suscripción, pero puede filtrarse y visualizarse por grupos de recursos para un análisis más detallado.</p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-5">
                <div className="flex items-center mb-4">
                  <LockClosedIcon className="h-8 w-8 text-blue-500" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white ml-3">Control de acceso</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  El control de acceso basado en roles (RBAC) puede aplicarse a nivel de grupo:
                </p>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <div className="flex items-start">
                    <span className="flex-shrink-0 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                    <div>
                      <p className="font-semibold">Asignación de roles</p>
                      <p className="text-sm">Propietario, Colaborador, Lector y otros roles personalizados</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="flex-shrink-0 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                    <div>
                      <p className="font-semibold">Herencia</p>
                      <p className="text-sm">Los recursos heredan permisos del grupo de recursos</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="flex-shrink-0 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full w-6 h-6 flex items-center justify-center mr-2">3</span>
                    <div>
                      <p className="font-semibold">Bloqueos</p>
                      <p className="text-sm">Prevención de eliminación o modificación de recursos</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="flex-shrink-0 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full w-6 h-6 flex items-center justify-center mr-2">4</span>
                    <div>
                      <p className="font-semibold">Políticas</p>
                      <p className="text-sm">Reglas y efectos aplicados al grupo completo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-5">
              <div className="flex items-center mb-4">
                <CodeBracketIcon className="h-8 w-8 text-blue-500" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white ml-3">Implementación y administración</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Los grupos de recursos facilitan la administración del ciclo de vida completo de las aplicaciones:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-gray-700 dark:text-gray-300">
                <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Implementación de recursos</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Despliegue coordinado de recursos interdependientes</li>
                    <li>• Uso de plantillas ARM para despliegues declarativos</li>
                    <li>• Automatización mediante scripts y flujos de trabajo</li>
                    <li>• Creación de entornos completos con un solo despliegue</li>
                  </ul>
                </div>
                <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Operaciones en grupo</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Mover todos los recursos entre suscripciones</li>
                    <li>• Aplicar etiquetas a nivel de grupo</li>
                    <li>• Visualizar métricas y registros agregados</li>
                    <li>• Eliminar todos los recursos en una sola operación</li>
                  </ul>
                </div>
              </div>

              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Comandos comunes (Azure CLI)</h4>
              <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg overflow-x-auto text-xs font-mono mb-4">
                <pre className="text-gray-700 dark:text-gray-300">{`# Crear un grupo de recursos
az group create --name MiGrupoRecursos --location eastus

# Listar todos los grupos de recursos
az group list --output table

# Aplicar bloqueo de eliminación
az lock create --name NoEliminar --resource-group MiGrupoRecursos --lock-type CanNotDelete

# Eliminar un grupo de recursos y todos sus recursos
az group delete --name MiGrupoRecursos --yes`}</pre>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 dark:bg-gray-700 p-5 rounded-lg">
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-green-700 dark:text-green-300 mb-2">Mejores prácticas</h3>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="flex-shrink-0 text-green-500 mr-2">•</span>
                        <span>Agrupar recursos con ciclo de vida similar para facilitar la administración</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 text-green-500 mr-2">•</span>
                        <span>Definir una estrategia de nomenclatura clara y consistente</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 text-green-500 mr-2">•</span>
                        <span>Usar etiquetas para organización adicional dentro de los grupos</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 text-green-500 mr-2">•</span>
                        <span>Aplicar bloqueos a grupos de recursos en entornos de producción</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 text-green-500 mr-2">•</span>
                        <span>Asignar permisos RBAC al nivel más alto posible (grupo en lugar de recursos individuales)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 dark:bg-gray-700 p-5 rounded-lg border-l-4 border-red-500">
                <div className="flex items-start">
                  <ExclamationTriangleIcon className="h-6 w-6 text-red-500 mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-red-700 dark:text-red-300 mb-2">Limitaciones importantes</h3>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="flex-shrink-0 text-red-500 mr-2">•</span>
                        <span>Un recurso solo puede pertenecer a un único grupo de recursos.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 text-red-500 mr-2">•</span>
                        <span>Los recursos pueden comunicarse con recursos en otros grupos.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 text-red-500 mr-2">•</span>
                        <span>La ubicación del grupo de recursos puede ser independiente de la ubicación de sus recursos.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 text-red-500 mr-2">•</span>
                        <span>Algunos recursos no pueden moverse entre grupos después de su creación.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 text-red-500 mr-2">•</span>
                        <span>Existe un límite en el número de grupos de recursos por suscripción (980).</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'grupos-administracion' && (
          <div className="space-y-6">
            <div className="bg-purple-50 dark:bg-gray-700 p-5 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-300 mb-2">Grupos de administración de Azure</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Los grupos de administración de Azure proporcionan un nivel de ámbito por encima de las suscripciones. Organizan las suscripciones en contenedores llamados "grupos de administración" y aplican condiciones de gobernanza a estos grupos. Todas las suscripciones dentro de un grupo de administración heredan automáticamente las condiciones aplicadas al grupo.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-5">
              <div className="flex items-center mb-4">
                <ChartPieIcon className="h-8 w-8 text-purple-500" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white ml-3">Jerarquía de administración</h3>
              </div>
              <div className="mb-5">
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  La jerarquía de los grupos de administración permite organizar las suscripciones y aplicar políticas de forma estructurada:
                </p>
                <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4 bg-gray-50 dark:bg-gray-700 mb-4">
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li><strong>Raíz del inquilino (Nivel 0)</strong>: Nivel superior que contiene todos los grupos</li>
                    <li className="ml-5"><strong>Grupos de administración (Nivel 1-6)</strong>: Agrupaciones de suscripciones o otros grupos</li>
                    <li className="ml-10"><strong>Suscripciones</strong>: Contenedores para recursos</li>
                    <li className="ml-15"><strong>Grupos de recursos</strong>: Agrupan recursos relacionados</li>
                    <li className="ml-20"><strong>Recursos</strong>: Servicios individuales de Azure</li>
                  </ul>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Los grupos de administración pueden anidarse hasta en 6 niveles de profundidad (sin incluir la raíz), lo que permite crear una jerarquía flexible.
                </p>
              </div>
              <div className="mt-4">
                <h4 className="text-md font-semibold text-gray-900 dark:text-white mb-3">Características clave</h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 text-purple-500 mr-2">•</span>
                    <span><strong>Jerarquía flexible:</strong> Hasta 10,000 grupos de administración en un solo directorio</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 text-purple-500 mr-2">•</span>
                    <span><strong>Herencia de políticas:</strong> Las políticas y los roles se heredan por todos los descendientes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 text-purple-500 mr-2">•</span>
                    <span><strong>Visibilidad consolidada:</strong> Ver información y costos agregados por grupo</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-5">
                <div className="flex items-center mb-4">
                  <UserGroupIcon className="h-8 w-8 text-purple-500" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white ml-3">Casos de uso comunes</h3>
                </div>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 text-purple-500 mr-2">•</span>
                    <span><strong>Estructura organizativa:</strong> Alinear con unidades de negocio o departamentos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 text-purple-500 mr-2">•</span>
                    <span><strong>Entornos:</strong> Separar producción, pruebas y desarrollo</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 text-purple-500 mr-2">•</span>
                    <span><strong>Geografía:</strong> Organizar por regiones o países</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 text-purple-500 mr-2">•</span>
                    <span><strong>Cumplimiento:</strong> Separar cargas de trabajo reguladas (HIPAA, PCI)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 text-purple-500 mr-2">•</span>
                    <span><strong>Delegación:</strong> Proporcionar acceso específico a administradores delegados</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-5">
                <div className="flex items-center mb-4">
                  <ShieldCheckIcon className="h-8 w-8 text-purple-500" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white ml-3">Gobernanza y control</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Los grupos de administración permiten implementar varios mecanismos de control:
                </p>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 text-purple-500 mr-2">•</span>
                    <span><strong>Azure Policy:</strong> Definir y aplicar políticas en toda la jerarquía</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 text-purple-500 mr-2">•</span>
                    <span><strong>Asignaciones de RBAC:</strong> Definir permisos a nivel de grupo</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 text-purple-500 mr-2">•</span>
                    <span><strong>Iniciativas:</strong> Agrupar políticas relacionadas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 text-purple-500 mr-2">•</span>
                    <span><strong>Presupuestos:</strong> Establecer límites de gastos por grupo</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-indigo-50 dark:bg-gray-700 p-5 rounded-lg">
              <h3 className="text-lg font-semibold text-indigo-700 dark:text-indigo-300 mb-4">Ejemplo de jerarquía para una empresa</h3>
              
              <div className="overflow-x-auto">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-indigo-200 dark:border-indigo-800">
                  {/* Estructura de árbol jerárquico vertical */}
                  <ul className="tree-view">
                    {/* Raíz */}
                    <li className="mb-6">
                      <div className="flex items-center p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg border border-indigo-300 dark:border-indigo-700 w-64">
                        <BuildingLibraryIcon className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2" />
                        <div>
                          <div className="font-semibold text-indigo-700 dark:text-indigo-300">Raíz del inquilino</div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">Contoso Ltd.</div>
                        </div>
                      </div>
                      
                      {/* Grupos de administración principales */}
                      <ul className="ml-8 mt-2 border-l-2 border-indigo-300 dark:border-indigo-700 pl-6 space-y-6">
                        {/* Corporativo */}
                        <li>
                          <div className="flex items-center p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg border border-purple-300 dark:border-purple-700 w-64 relative">
                            <div className="absolute -left-8 top-1/2 w-6 h-0.5 bg-indigo-300 dark:bg-indigo-700"></div>
                            <UserGroupIcon className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-2" />
                            <div>
                              <div className="font-medium text-purple-700 dark:text-purple-300">Corporativo</div>
                              <div className="text-xs text-gray-600 dark:text-gray-400">Grupo de administración</div>
                            </div>
                          </div>
                          
                          {/* Suscripciones de Corporativo */}
                          <ul className="ml-6 mt-2 border-l-2 border-purple-300 dark:border-purple-700 pl-4 space-y-2">
                            <li>
                              <div className="flex items-center p-2 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-200 dark:border-blue-800 w-56 relative">
                                <div className="absolute -left-6 top-1/2 w-4 h-0.5 bg-purple-300 dark:bg-purple-700"></div>
                                <CreditCardIcon className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2" />
                                <div>
                                  <div className="text-sm text-blue-700 dark:text-blue-300">IT</div>
                                  <div className="text-xs text-gray-600 dark:text-gray-400">Suscripción</div>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="flex items-center p-2 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-200 dark:border-blue-800 w-56 relative">
                                <div className="absolute -left-6 top-1/2 w-4 h-0.5 bg-purple-300 dark:bg-purple-700"></div>
                                <CreditCardIcon className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2" />
                                <div>
                                  <div className="text-sm text-blue-700 dark:text-blue-300">Operaciones</div>
                                  <div className="text-xs text-gray-600 dark:text-gray-400">Suscripción</div>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="flex items-center p-2 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-200 dark:border-blue-800 w-56 relative">
                                <div className="absolute -left-6 top-1/2 w-4 h-0.5 bg-purple-300 dark:bg-purple-700"></div>
                                <CreditCardIcon className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2" />
                                <div>
                                  <div className="text-sm text-blue-700 dark:text-blue-300">Seguridad</div>
                                  <div className="text-xs text-gray-600 dark:text-gray-400">Suscripción</div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                        
                        {/* Producción */}
                        <li>
                          <div className="flex items-center p-3 bg-green-100 dark:bg-green-900/30 rounded-lg border border-green-300 dark:border-green-700 w-64 relative">
                            <div className="absolute -left-8 top-1/2 w-6 h-0.5 bg-indigo-300 dark:bg-indigo-700"></div>
                            <ServerIcon className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
                            <div>
                              <div className="font-medium text-green-700 dark:text-green-300">Producción</div>
                              <div className="text-xs text-gray-600 dark:text-gray-400">Grupo de administración</div>
                            </div>
                          </div>
                          
                          {/* Subgrupos de Producción */}
                          <ul className="ml-6 mt-2 border-l-2 border-green-300 dark:border-green-700 pl-4 space-y-4">
                            {/* Servicios financieros */}
                            <li>
                              <div className="flex items-center p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded border border-emerald-200 dark:border-emerald-800 w-56 relative">
                                <div className="absolute -left-6 top-1/2 w-4 h-0.5 bg-green-300 dark:bg-green-700"></div>
                                <CurrencyDollarIcon className="h-4 w-4 text-emerald-600 dark:text-emerald-400 mr-2" />
                                <div>
                                  <div className="text-sm text-emerald-700 dark:text-emerald-300">Servicios financieros</div>
                                  <div className="text-xs text-gray-600 dark:text-gray-400">Grupo de administración</div>
                                </div>
                              </div>
                              
                              {/* Suscripciones de Servicios financieros */}
                              <ul className="ml-4 mt-2 border-l-2 border-emerald-300 dark:border-emerald-700 pl-4 space-y-2">
                                <li>
                                  <div className="flex items-center p-2 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-200 dark:border-blue-800 w-48 relative">
                                    <div className="absolute -left-6 top-1/2 w-4 h-0.5 bg-emerald-300 dark:bg-emerald-700"></div>
                                    <CreditCardIcon className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2" />
                                    <div>
                                      <div className="text-sm text-blue-700 dark:text-blue-300">Banca</div>
                                      <div className="text-xs text-gray-600 dark:text-gray-400">Suscripción</div>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="flex items-center p-2 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-200 dark:border-blue-800 w-48 relative">
                                    <div className="absolute -left-6 top-1/2 w-4 h-0.5 bg-emerald-300 dark:bg-emerald-700"></div>
                                    <CreditCardIcon className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2" />
                                    <div>
                                      <div className="text-sm text-blue-700 dark:text-blue-300">Seguros</div>
                                      <div className="text-xs text-gray-600 dark:text-gray-400">Suscripción</div>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </li>
                            
                            {/* Sanidad */}
                            <li>
                              <div className="flex items-center p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded border border-emerald-200 dark:border-emerald-800 w-56 relative">
                                <div className="absolute -left-6 top-1/2 w-4 h-0.5 bg-green-300 dark:bg-green-700"></div>
                                <ShieldCheckIcon className="h-4 w-4 text-emerald-600 dark:text-emerald-400 mr-2" />
                                <div>
                                  <div className="text-sm text-emerald-700 dark:text-emerald-300">Sanidad</div>
                                  <div className="text-xs text-gray-600 dark:text-gray-400">Grupo de administración</div>
                                </div>
                              </div>
                              
                              {/* Suscripciones de Sanidad */}
                              <ul className="ml-4 mt-2 border-l-2 border-emerald-300 dark:border-emerald-700 pl-4 space-y-2">
                                <li>
                                  <div className="flex items-center p-2 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-200 dark:border-blue-800 w-48 relative">
                                    <div className="absolute -left-6 top-1/2 w-4 h-0.5 bg-emerald-300 dark:bg-emerald-700"></div>
                                    <CreditCardIcon className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2" />
                                    <div>
                                      <div className="text-sm text-blue-700 dark:text-blue-300">Datos de pacientes</div>
                                      <div className="text-xs text-gray-600 dark:text-gray-400">Suscripción</div>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        
                        {/* Entornos no productivos */}
                        <li>
                          <div className="flex items-center p-3 bg-amber-100 dark:bg-amber-900/30 rounded-lg border border-amber-300 dark:border-amber-700 w-64 relative">
                            <div className="absolute -left-8 top-1/2 w-6 h-0.5 bg-indigo-300 dark:bg-indigo-700"></div>
                            <CogIcon className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2" />
                            <div>
                              <div className="font-medium text-amber-700 dark:text-amber-300">Entornos no productivos</div>
                              <div className="text-xs text-gray-600 dark:text-gray-400">Grupo de administración</div>
                            </div>
                          </div>
                          
                          {/* Suscripciones de Entornos no productivos */}
                          <ul className="ml-6 mt-2 border-l-2 border-amber-300 dark:border-amber-700 pl-4 space-y-2">
                            <li>
                              <div className="flex items-center p-2 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-200 dark:border-blue-800 w-56 relative">
                                <div className="absolute -left-6 top-1/2 w-4 h-0.5 bg-amber-300 dark:bg-amber-700"></div>
                                <CreditCardIcon className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2" />
                                <div>
                                  <div className="text-sm text-blue-700 dark:text-blue-300">Desarrollo</div>
                                  <div className="text-xs text-gray-600 dark:text-gray-400">Suscripción</div>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="flex items-center p-2 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-200 dark:border-blue-800 w-56 relative">
                                <div className="absolute -left-6 top-1/2 w-4 h-0.5 bg-amber-300 dark:bg-amber-700"></div>
                                <CreditCardIcon className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2" />
                                <div>
                                  <div className="text-sm text-blue-700 dark:text-blue-300">Pruebas</div>
                                  <div className="text-xs text-gray-600 dark:text-gray-400">Suscripción</div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                        
                        {/* Desactivado */}
                        <li>
                          <div className="flex items-center p-3 bg-gray-100 dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600 w-64 relative">
                            <div className="absolute -left-8 top-1/2 w-6 h-0.5 bg-indigo-300 dark:bg-indigo-700"></div>
                            <XCircleIcon className="h-5 w-5 text-gray-600 dark:text-gray-400 mr-2" />
                            <div>
                              <div className="font-medium text-gray-700 dark:text-gray-300">Desactivado</div>
                              <div className="text-xs text-gray-600 dark:text-gray-400">Grupo de administración</div>
                            </div>
                          </div>
                          
                          {/* Suscripciones de Desactivado */}
                          <ul className="ml-6 mt-2 border-l-2 border-gray-300 dark:border-gray-600 pl-4 space-y-2">
                            <li>
                              <div className="flex items-center p-2 bg-gray-50 dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700 w-56 relative">
                                <div className="absolute -left-6 top-1/2 w-4 h-0.5 bg-gray-300 dark:bg-gray-600"></div>
                                <CreditCardIcon className="h-4 w-4 text-gray-600 dark:text-gray-400 mr-2" />
                                <div>
                                  <div className="text-sm text-gray-700 dark:text-gray-300">Proyectos archivados</div>
                                  <div className="text-xs text-gray-600 dark:text-gray-400">Suscripción</div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-3 italic">
                Esta representación visual muestra cómo una organización puede estructurar sus grupos de administración y suscripciones en Azure en una jerarquía clara.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'quiz' && (
          <div className="px-4 py-5 sm:p-6">
            <div className="bg-blue-50 dark:bg-gray-700 p-5 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-2">Evalúa tus conocimientos</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Comprueba lo que has aprendido sobre la infraestructura de administración de Azure con este cuestionario. Selecciona la respuesta correcta para cada pregunta.
              </p>
            </div>

            <div className="space-y-8">
              {quizQuestions.map((question, qIndex) => (
                <div 
                  key={question.id} 
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700"
                >
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4 flex items-start">
                    <QuestionMarkCircleIcon className="h-6 w-6 text-azure-600 dark:text-azure-400 mr-2 flex-shrink-0" />
                    <span>{qIndex + 1}. {question.question}</span>
                  </h3>
                  
                  <div className="space-y-3 mb-4">
                    {question.options.map((option, oIndex) => (
                      <div 
                        key={oIndex} 
                        onClick={() => handleAnswerSelect(question.id, oIndex)}
                        className={`
                          p-3 rounded-lg border transition-colors cursor-pointer
                          ${selectedAnswers[question.id] === oIndex ? 
                            (showExplanations[question.id] && oIndex === question.correctAnswer ?
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
                              oIndex === question.correctAnswer ? (
                                <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400" />
                              ) : selectedAnswers[question.id] === oIndex ? (
                                <XCircleIcon className="h-5 w-5 text-red-500 dark:text-red-400" />
                              ) : (
                                <div className="h-5 w-5 rounded-full border-2 border-gray-300 dark:border-gray-500 flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
                                  {String.fromCharCode(65 + oIndex)}
                                </div>
                              )
                            ) : (
                              <div className={`h-5 w-5 rounded-full border-2 flex items-center justify-center text-sm ${
                                selectedAnswers[question.id] === oIndex ?
                                  'border-blue-500 text-blue-500 dark:border-blue-400 dark:text-blue-400' :
                                  'border-gray-300 text-gray-500 dark:border-gray-500 dark:text-gray-400'
                              }`}>
                                {String.fromCharCode(65 + oIndex)}
                              </div>
                            )}
                          </div>
                          <span className={`text-gray-700 dark:text-gray-300 ${
                            showExplanations[question.id] && oIndex === question.correctAnswer ? 
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
            
            <div className="mt-8 bg-indigo-50 dark:bg-gray-700 border-l-4 border-indigo-500 p-5 rounded-r-lg">
              <h3 className="text-lg font-semibold text-indigo-700 dark:text-indigo-300 mb-2">Para el examen AZ-900</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Recuerda que para el examen AZ-900 debes comprender cómo se organizan y administran los recursos en Azure, incluyendo grupos de recursos, grupos de administración, y cómo Azure Resource Manager facilita la implementación y administración de recursos. Familiarízate con la jerarquía de recursos y los diferentes roles que juegan en la gobernanza y administración de Azure.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 