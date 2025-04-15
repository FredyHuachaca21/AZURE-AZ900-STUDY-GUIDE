import { useState } from 'react';
import { 
  UserIcon, 
  CreditCardIcon, 
  BuildingOfficeIcon, 
  KeyIcon,
  UserGroupIcon,
  CogIcon,
  CheckCircleIcon,
  XCircleIcon,
  ShieldCheckIcon,
  LightBulbIcon,
  InformationCircleIcon,
  QuestionMarkCircleIcon,
  UsersIcon,
  DocumentTextIcon,
  TagIcon,
  ServerIcon
} from '@heroicons/react/24/outline';

export default function AzureAccounts() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showExplanations, setShowExplanations] = useState({});
  
  // Datos para los tipos de suscripciones
  const subscriptionTypes = [
    {
      name: 'Gratuita',
      icon: CreditCardIcon,
      color: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800',
      textColor: 'text-green-700 dark:text-green-300',
      features: [
        'Acceso gratuito por 12 meses a servicios populares',
        'Crédito de $200 USD para usar en los primeros 30 días',
        'Más de 25 servicios siempre gratuitos',
        'Ideal para aprendizaje y experimentación'
      ]
    },
    {
      name: 'Pay-As-You-Go',
      icon: TagIcon,
      color: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
      textColor: 'text-blue-700 dark:text-blue-300',
      features: [
        'Pago solo por lo que usas',
        'Sin compromisos ni costos iniciales',
        'Facturación por hora o por segundo',
        'Ideal para cargas de trabajo variables'
      ]
    },
    {
      name: 'Empresarial (EA)',
      icon: BuildingOfficeIcon,
      color: 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800',
      textColor: 'text-purple-700 dark:text-purple-300',
      features: [
        'Compromiso monetario anual o de tres años',
        'Precios con descuento',
        'Facturación unificada para toda la organización',
        'Ideal para empresas grandes'
      ]
    },
    {
      name: 'CSP',
      icon: UserGroupIcon,
      color: 'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800',
      textColor: 'text-amber-700 dark:text-amber-300',
      features: [
        'Adquirida a través de socios de Microsoft',
        'El socio maneja la facturación y el soporte',
        'Flexibilidad en precios y condiciones',
        'Ideal para empresas que prefieren trabajar con proveedores'
      ]
    }
  ];
  
  // Datos para roles RBAC comunes
  const commonRoles = [
    {
      name: 'Propietario',
      description: 'Control total sobre todos los recursos',
      permissions: 'Crear, eliminar, modificar, asignar acceso'
    },
    {
      name: 'Colaborador',
      description: 'Puede crear y gestionar recursos',
      permissions: 'Crear, eliminar, modificar recursos (no puede asignar roles)'
    },
    {
      name: 'Lector',
      description: 'Visualización de recursos',
      permissions: 'Ver recursos (sin capacidad de modificación)'
    },
    {
      name: 'Administrador de acceso de usuario',
      description: 'Gestiona el acceso de usuarios',
      permissions: 'Asignar roles y permisos (sin modificar recursos)'
    }
  ];

  // Definición de preguntas para el quiz
  const quizQuestions = [
    {
      id: 1,
      question: "¿Qué es una suscripción de Azure?",
      options: [
        "Un plan de facturación para usar recursos en la nube",
        "Un software para gestionar bases de datos SQL",
        "Un dispositivo físico para conectarse a Azure",
        "Una aplicación web de Microsoft"
      ],
      correctAnswer: 0,
      explanation: "Una suscripción de Azure es un acuerdo con Microsoft para usar los servicios en la nube de Azure y acceder al Portal de Azure. Es la unidad de facturación básica que establece límites de uso, determina la facturación y define quién puede gestionar recursos."
    },
    {
      id: 2,
      question: "¿Qué recurso NO puede existir sin una suscripción de Azure?",
      options: [
        "Un grupo de recursos",
        "Una máquina virtual",
        "Una cuenta de Microsoft Entra ID (Azure AD)",
        "Un inquilino de Azure"
      ],
      correctAnswer: 1,
      explanation: "Una máquina virtual siempre debe estar asociada a una suscripción, ya que todos los recursos que generan costos deben estar vinculados a una suscripción para su facturación. Una cuenta de Microsoft Entra ID y un inquilino pueden existir sin suscripciones, y un grupo de recursos solo puede crearse dentro de una suscripción."
    },
    {
      id: 3,
      question: "¿Qué representa un inquilino (tenant) de Azure?",
      options: [
        "Una máquina virtual en Azure",
        "Una instancia dedicada y aislada de Microsoft Entra ID",
        "Una red virtual en Azure",
        "Un plan de facturación mensual"
      ],
      correctAnswer: 1,
      explanation: "Un inquilino (tenant) de Azure es una instancia dedicada y aislada de Microsoft Entra ID que representa a una organización. Contiene las cuentas de usuario, grupos y aplicaciones de esa organización y gestiona el acceso a los recursos de Azure."
    },
    {
      id: 4,
      question: "¿Cuál de los siguientes NO es un tipo común de suscripción de Azure?",
      options: [
        "Suscripción gratuita",
        "Pay-As-You-Go",
        "Enterprise Agreement (EA)",
        "Suscripción ilimitada"
      ],
      correctAnswer: 3,
      explanation: "No existe una 'Suscripción ilimitada' en Azure. Todos los tipos de suscripciones tienen algún tipo de límite, ya sea en duración, créditos o servicios. Los tipos comunes incluyen suscripción gratuita (limitada en tiempo y servicios), Pay-As-You-Go (pago por uso), y Enterprise Agreement (para grandes organizaciones con compromiso de gasto)."
    },
    {
      id: 5,
      question: "¿Qué significa RBAC en el contexto de Azure?",
      options: [
        "Resource Backup Azure Controller",
        "Reliable Billing and Automation Control",
        "Role-Based Access Control",
        "Regional Bandwidth Allocation Center"
      ],
      correctAnswer: 2,
      explanation: "RBAC significa Role-Based Access Control (Control de Acceso Basado en Roles). Es un sistema de autorización en Azure que permite gestionar quién tiene acceso a los recursos, qué pueden hacer con esos recursos y a qué áreas pueden acceder. RBAC es fundamental para implementar el principio de privilegio mínimo en Azure."
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
          <UserIcon className="h-6 w-6 text-azure-600 dark:text-azure-400 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-lg font-semibold text-azure-700 dark:text-azure-400 mb-2">¿Qué son las cuentas de Azure?</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Las cuentas de Azure forman el núcleo de la estructura de identidad y facturación de Microsoft Azure. Proporcionan
              el marco para administrar el acceso a los recursos y servicios en la nube, así como para controlar los costos y la seguridad.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Para entender las cuentas de Azure, es importante comprender tres conceptos fundamentales: inquilinos (tenants), 
              suscripciones y grupos de recursos. Cada uno representa un nivel diferente de organización y administración en la plataforma.
            </p>
          </div>
        </div>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 dark:border-blue-700 p-4 rounded-r-md">
          <div className="flex">
            <LightBulbIcon className="h-6 w-6 text-blue-500 dark:text-blue-400 mr-3 flex-shrink-0 mt-1" />
            <div>
              <p className="text-blue-700 dark:text-blue-300 font-medium mb-1">Explicado de forma simple</p>
              <p className="text-gray-700 dark:text-gray-300">
                Imagina que Azure es como un centro comercial enorme:
              </p>
              <ul className="mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                <li>• El <strong>inquilino (tenant)</strong> es como la empresa propietaria del centro comercial.</li>
                <li>• Las <strong>suscripciones</strong> son como diferentes tarjetas de crédito que puedes usar para comprar.</li>
                <li>• Los <strong>grupos de recursos</strong> son como las tiendas donde agrupas tus compras relacionadas.</li>
                <li>• Los <strong>recursos</strong> son los productos individuales que adquieres en las tiendas.</li>
                <li>• Los <strong>roles y permisos</strong> determinan quién puede comprar y qué puede comprar.</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4 flex items-center">
              <UserGroupIcon className="h-5 w-5 text-azure-500 dark:text-azure-400 mr-2" />
              Inquilinos (Tenants)
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Un inquilino de Azure es una instancia dedicada de Microsoft Entra ID (anteriormente Azure AD) que representa a tu organización.
            </p>
            <div className="bg-azure-50 dark:bg-azure-900/20 p-3 rounded-md">
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                <strong>Ejemplo:</strong> Es como el registro de tu empresa en una cámara de comercio. Define tu identidad y establece las reglas básicas para todos los miembros.
              </p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4 flex items-center">
              <CreditCardIcon className="h-5 w-5 text-azure-500 dark:text-azure-400 mr-2" />
              Suscripciones
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Una suscripción es un acuerdo con Microsoft para usar los servicios de Azure y determina cómo se factura el uso.
            </p>
            <div className="bg-azure-50 dark:bg-azure-900/20 p-3 rounded-md">
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                <strong>Ejemplo:</strong> Es como tu plan de telefonía móvil. Define cuánto puedes gastar, qué servicios puedes usar y cómo te cobrarán.
              </p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4 flex items-center">
              <CogIcon className="h-5 w-5 text-azure-500 dark:text-azure-400 mr-2" />
              Grupos de recursos
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Los grupos de recursos son contenedores lógicos que agrupan recursos relacionados para una solución.
            </p>
            <div className="bg-azure-50 dark:bg-azure-900/20 p-3 rounded-md">
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                <strong>Ejemplo:</strong> Es como una carpeta en tu computadora donde guardas todos los archivos relacionados con un proyecto específico.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-5">Jerarquía de recursos en Azure</h3>
          
          <div className="relative">
            <div className="flex flex-col items-center">
              <div className="w-full max-w-md bg-azure-100 dark:bg-azure-900/30 p-4 rounded-lg border border-azure-200 dark:border-azure-800">
                <div className="flex items-center">
                  <UserGroupIcon className="h-6 w-6 text-azure-600 dark:text-azure-400 mr-2" />
                  <h4 className="font-medium text-azure-700 dark:text-azure-300">Inquilino (Tenant)</h4>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mt-1 text-sm">Instancia de Microsoft Entra ID</p>
              </div>
              
              <div className="h-6 w-px bg-azure-300 dark:bg-azure-700"></div>
              
              <div className="w-full max-w-md bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="flex items-center">
                  <CreditCardIcon className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2" />
                  <h4 className="font-medium text-blue-700 dark:text-blue-300">Suscripciones</h4>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mt-1 text-sm">Acuerdos de facturación (puede tener varias)</p>
              </div>
              
              <div className="h-6 w-px bg-azure-300 dark:bg-azure-700"></div>
              
              <div className="w-full max-w-md bg-indigo-100 dark:bg-indigo-900/30 p-4 rounded-lg border border-indigo-200 dark:border-indigo-800">
                <div className="flex items-center">
                  <CogIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-2" />
                  <h4 className="font-medium text-indigo-700 dark:text-indigo-300">Grupos de recursos</h4>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mt-1 text-sm">Contenedores lógicos para recursos relacionados</p>
              </div>
              
              <div className="h-6 w-px bg-azure-300 dark:bg-azure-700"></div>
              
              <div className="w-full max-w-md bg-emerald-100 dark:bg-emerald-900/30 p-4 rounded-lg border border-emerald-200 dark:border-emerald-800">
                <div className="flex items-center">
                  <ServerIcon className="h-6 w-6 text-emerald-600 dark:text-emerald-400 mr-2" />
                  <h4 className="font-medium text-emerald-700 dark:text-emerald-300">Recursos</h4>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mt-1 text-sm">Instancias de servicios (VMs, bases de datos, etc.)</p>
              </div>
            </div>
          </div>
          
          <p className="text-gray-700 dark:text-gray-300 mt-6">
            Esta jerarquía proporciona una estructura organizada para administrar recursos, controlar accesos y gestionar costos. 
            Cada nivel tiene funciones específicas de administración y seguridad.
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
                <li>• La jerarquía organizativa de Azure (inquilinos, suscripciones, grupos de recursos, recursos)</li>
                <li>• El propósito y las características de los diferentes tipos de suscripciones</li>
                <li>• Cómo se relacionan las cuentas de usuario con los inquilinos y las suscripciones</li>
                <li>• El rol de Microsoft Entra ID (Azure AD) en la gestión de identidades</li>
                <li>• Conceptos básicos de control de acceso basado en roles (RBAC)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),
    
    subscriptions: (
      <div className="space-y-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-azure-700 dark:text-azure-400 mb-6">Suscripciones de Azure</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Las suscripciones de Azure son acuerdos con Microsoft que permiten usar los servicios de Azure y acceder al Portal de Azure.
            Son la unidad fundamental de facturación y permiten organizar el acceso a los recursos y su gestión.
          </p>
          
          <div className="bg-azure-50 dark:bg-azure-900/20 p-5 rounded-lg border border-azure-100 dark:border-azure-900/50 mb-6">
            <h3 className="text-lg font-medium text-azure-700 dark:text-azure-400 mb-3">Características principales de las suscripciones</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <CreditCardIcon className="h-5 w-5 text-azure-600 dark:text-azure-400 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Unidad de facturación</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">Define cómo se te cobra y quién paga.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <TagIcon className="h-5 w-5 text-azure-600 dark:text-azure-400 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Límites de uso</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">Define cuotas y límites para los recursos.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <ShieldCheckIcon className="h-5 w-5 text-azure-600 dark:text-azure-400 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Límite de seguridad</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">Aísla recursos y accesos entre suscripciones.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <UsersIcon className="h-5 w-5 text-azure-600 dark:text-azure-400 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Control de acceso</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">Define quién puede acceder y gestionar recursos.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 dark:border-blue-700 p-4 rounded-r-md mb-6">
            <div className="flex">
              <LightBulbIcon className="h-6 w-6 text-blue-500 dark:text-blue-400 mr-3 flex-shrink-0 mt-1" />
              <div>
                <p className="text-blue-700 dark:text-blue-300 font-medium mb-1">Ejemplo cotidiano</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Piensa en una suscripción de Azure como un plan de telefonía móvil:
                </p>
                <ul className="mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                  <li>• Tienes diferentes planes según tus necesidades (prepago, pospago, ilimitado)</li>
                  <li>• Recibes una factura mensual basada en tu consumo</li>
                  <li>• Puedes tener varios planes para diferentes necesidades (personal, trabajo)</li>
                  <li>• Hay límites de datos y servicios según el plan que elijas</li>
                  <li>• Puedes agregar o quitar servicios según cambien tus necesidades</li>
                </ul>
              </div>
            </div>
          </div>
          
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Tipos de suscripciones de Azure</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {subscriptionTypes.map((type) => (
              <div key={type.name} className={`p-5 rounded-lg border ${type.color}`}>
                <div className="flex items-center mb-3">
                  <div className="p-2 rounded-full bg-white dark:bg-gray-800 mr-3">
                    <type.icon className={`h-6 w-6 ${type.textColor}`} />
                  </div>
                  <h3 className={`font-medium text-lg ${type.textColor}`}>{type.name}</h3>
                </div>
                <ul className="space-y-2">
                  {type.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircleIcon className={`h-5 w-5 ${type.textColor} mr-2 mt-0.5 flex-shrink-0`} />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-5">¿Por qué tener múltiples suscripciones?</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-azure-50 dark:bg-azure-900/20 p-5 rounded-lg border border-azure-200 dark:border-azure-800">
              <h4 className="font-medium text-azure-700 dark:text-azure-300 mb-3 flex items-center">
                <BuildingOfficeIcon className="h-5 w-5 mr-2" />
                Estructura organizativa
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Separar entornos, departamentos o unidades de negocio. Por ejemplo, tener suscripciones diferentes 
                para Marketing, Finanzas y TI.
              </p>
            </div>
            
            <div className="bg-azure-50 dark:bg-azure-900/20 p-5 rounded-lg border border-azure-200 dark:border-azure-800">
              <h4 className="font-medium text-azure-700 dark:text-azure-300 mb-3 flex items-center">
                <CreditCardIcon className="h-5 w-5 mr-2" />
                Control de costos
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Asignar presupuestos específicos a diferentes equipos o proyectos. Facilita el seguimiento y 
                la asignación de gastos a centros de costos.
              </p>
            </div>
            
            <div className="bg-azure-50 dark:bg-azure-900/20 p-5 rounded-lg border border-azure-200 dark:border-azure-800">
              <h4 className="font-medium text-azure-700 dark:text-azure-300 mb-3 flex items-center">
                <ShieldCheckIcon className="h-5 w-5 mr-2" />
                Seguridad y cumplimiento
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Aislar recursos sensibles o que requieren diferentes políticas de cumplimiento. Por ejemplo, separar 
                datos regulados por HIPAA o PCI.
              </p>
            </div>
          </div>
          
          <div className="bg-indigo-50 dark:bg-indigo-900/20 p-5 rounded-lg border border-indigo-200 dark:border-indigo-800">
            <h4 className="font-medium text-indigo-700 dark:text-indigo-300 mb-3">Escenario práctico: Empresa de desarrollo de software</h4>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Una empresa de desarrollo de software podría organizar sus suscripciones de la siguiente manera:
            </p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2 mt-0.5 flex-shrink-0" />
                <span><strong>Suscripción de Desarrollo:</strong> Para entornos de desarrollo y pruebas. Con menos restricciones para permitir innovación.</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2 mt-0.5 flex-shrink-0" />
                <span><strong>Suscripción de Producción:</strong> Para aplicaciones en producción. Con estrictos controles de seguridad y acceso limitado.</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2 mt-0.5 flex-shrink-0" />
                <span><strong>Suscripción de Infraestructura:</strong> Para servicios compartidos como Active Directory, redes y monitoreo.</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2 mt-0.5 flex-shrink-0" />
                <span><strong>Suscripción de Sandbox:</strong> Para experimentación y aprendizaje, con presupuestos muy limitados.</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Administración de suscripciones</h3>
          
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Azure ofrece varias herramientas para administrar y organizar tus suscripciones:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-azure-50 dark:bg-azure-900/20 p-4 rounded-lg">
              <h4 className="font-medium text-azure-700 dark:text-azure-400 mb-2 flex items-center">
                <CogIcon className="h-5 w-5 mr-2" />
                Grupos de administración
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Permiten organizar suscripciones en una jerarquía y aplicar políticas de gobernanza a múltiples suscripciones.
              </p>
            </div>
            
            <div className="bg-azure-50 dark:bg-azure-900/20 p-4 rounded-lg">
              <h4 className="font-medium text-azure-700 dark:text-azure-400 mb-2 flex items-center">
                <DocumentTextIcon className="h-5 w-5 mr-2" />
                Azure Policy
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Permite crear, asignar y administrar políticas para hacer cumplir reglas y efectos sobre tus recursos.
              </p>
            </div>
            
            <div className="bg-azure-50 dark:bg-azure-900/20 p-4 rounded-lg">
              <h4 className="font-medium text-azure-700 dark:text-azure-400 mb-2 flex items-center">
                <TagIcon className="h-5 w-5 mr-2" />
                Etiquetas (Tags)
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Permiten organizar recursos y suscripciones mediante metadatos para facilitar la gestión, facturación y automatización.
              </p>
            </div>
            
            <div className="bg-azure-50 dark:bg-azure-900/20 p-4 rounded-lg">
              <h4 className="font-medium text-azure-700 dark:text-azure-400 mb-2 flex items-center">
                <CreditCardIcon className="h-5 w-5 mr-2" />
                Presupuestos y alertas
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Permiten establecer límites de gasto y recibir notificaciones cuando se alcanzan ciertos umbrales.
              </p>
            </div>
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              <strong>Consejo:</strong> Microsoft recomienda crear una estructura de suscripciones que refleje tu 
              organización y necesidades específicas. No existe un enfoque único que funcione para todas las organizaciones.
              El diseño debe considerar facturación, permisos, límites y acceso a recursos.
            </p>
          </div>
        </div>
        
        <div className="bg-azure-50 dark:bg-azure-900/20 p-5 rounded-lg border border-azure-200 dark:border-azure-900/30">
          <div className="flex items-start">
            <InformationCircleIcon className="h-6 w-6 text-azure-600 dark:text-azure-400 mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-azure-700 dark:text-azure-300 mb-2">Importancia para el examen AZ-900</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Para el examen, enfócate en:
              </p>
              <ul className="mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                <li>• Los diferentes tipos de suscripciones (Gratuita, Pay-As-You-Go, EA, CSP)</li>
                <li>• Cómo las suscripciones establecen límites de facturación y seguridad</li>
                <li>• La relación entre inquilinos, suscripciones y grupos de recursos</li>
                <li>• Razones comunes para tener múltiples suscripciones</li>
                <li>• Herramientas básicas para administrar suscripciones</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),
    
    access: (
      <div className="space-y-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-azure-700 dark:text-azure-400 mb-6">Control de acceso en Azure</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            La seguridad y el control de acceso son aspectos fundamentales en cualquier plataforma de nube. Azure utiliza varios 
            mecanismos para controlar quién puede acceder a los recursos y qué pueden hacer con ellos.
          </p>
          
          <div className="bg-azure-50 dark:bg-azure-900/20 p-5 rounded-lg border border-azure-100 dark:border-azure-900/50 mb-6">
            <h3 className="text-lg font-medium text-azure-700 dark:text-azure-400 mb-4">Microsoft Entra ID (anteriormente Azure AD)</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Microsoft Entra ID es el servicio de gestión de identidades y accesos basado en la nube de Azure. 
              Proporciona servicios de:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <UserIcon className="h-5 w-5 text-azure-600 dark:text-azure-400 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Autenticación</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">Verifica que una persona es quien dice ser (¿quién eres?).</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <KeyIcon className="h-5 w-5 text-azure-600 dark:text-azure-400 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Autorización</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">Determina a qué tiene acceso una persona autenticada (¿qué puedes hacer?).</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 dark:border-blue-700 p-4 rounded-r-md mb-6">
            <div className="flex">
              <LightBulbIcon className="h-6 w-6 text-blue-500 dark:text-blue-400 mr-3 flex-shrink-0 mt-1" />
              <div>
                <p className="text-blue-700 dark:text-blue-300 font-medium mb-1">Explicado de forma simple</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Piensa en Microsoft Entra ID como el departamento de seguridad de un edificio de oficinas:
                </p>
                <ul className="mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                  <li>• <strong>Autenticación:</strong> El guardia de seguridad verifica tu identificación en la entrada</li>
                  <li>• <strong>Autorización:</strong> Tu tarjeta de acceso determina a qué pisos y oficinas puedes entrar</li>
                  <li>• <strong>Roles:</strong> Son como los diferentes tipos de tarjetas de acceso (visitante, empleado, administrador)</li>
                  <li>• <strong>Permisos:</strong> Las acciones específicas que puedes realizar en cada oficina</li>
                </ul>
              </div>
            </div>
          </div>
          
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Control de Acceso Basado en Roles (RBAC)</h3>
          
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            El Control de Acceso Basado en Roles (RBAC) es el sistema de autorización principal en Azure que permite 
            gestionar el acceso detallado a los recursos. RBAC utiliza un modelo de asignación de roles que consiste en tres elementos:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-azure-50 dark:bg-azure-900/20 p-4 rounded-lg">
              <h4 className="font-medium text-azure-700 dark:text-azure-400 mb-2 flex items-center">
                <UserIcon className="h-5 w-5 mr-2" />
                Entidad de seguridad
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                ¿Quién? Un usuario, grupo, entidad de servicio o identidad administrada que necesita acceso.
              </p>
            </div>
            
            <div className="bg-azure-50 dark:bg-azure-900/20 p-4 rounded-lg">
              <h4 className="font-medium text-azure-700 dark:text-azure-400 mb-2 flex items-center">
                <KeyIcon className="h-5 w-5 mr-2" />
                Definición de rol
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                ¿Qué? Conjunto de permisos que especifica las acciones permitidas (leer, escribir, eliminar).
              </p>
            </div>
            
            <div className="bg-azure-50 dark:bg-azure-900/20 p-4 rounded-lg">
              <h4 className="font-medium text-azure-700 dark:text-azure-400 mb-2 flex items-center">
                <ServerIcon className="h-5 w-5 mr-2" />
                Ámbito
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                ¿Dónde? Nivel en el que se aplica el acceso (recurso, grupo de recursos, suscripción, grupo de administración).
              </p>
            </div>
          </div>
          
          <div className="overflow-x-auto mb-6">
            <h4 className="font-medium text-gray-900 dark:text-white mb-3">Roles comunes en Azure</h4>
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 border border-gray-200 dark:border-gray-700 rounded-lg">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Rol</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Descripción</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Permisos</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {commonRoles.map((role, index) => (
                  <tr key={role.name} className={index % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-700'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{role.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">{role.description}</td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">{role.permissions}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="bg-indigo-50 dark:bg-indigo-900/20 p-5 rounded-lg border border-indigo-200 dark:border-indigo-800">
            <h4 className="font-medium text-indigo-700 dark:text-indigo-300 mb-3">Ejemplo práctico: Departamento de Marketing</h4>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Un departamento de marketing podría tener las siguientes asignaciones de roles:
            </p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2 mt-0.5 flex-shrink-0" />
                <span><strong>Director de Marketing:</strong> Rol de "Propietario" a nivel de grupo de recursos de Marketing. Puede gestionar todos los recursos y asignar permisos.</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2 mt-0.5 flex-shrink-0" />
                <span><strong>Desarrolladores de sitios web:</strong> Rol de "Colaborador" para los recursos web específicos. Pueden crear y administrar estos recursos.</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2 mt-0.5 flex-shrink-0" />
                <span><strong>Analistas de datos:</strong> Rol personalizado con permisos para leer datos y ejecutar análisis, pero no modificar infraestructura.</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2 mt-0.5 flex-shrink-0" />
                <span><strong>Consultores externos:</strong> Rol de "Lector" para ver los recursos pero no modificarlos, con acceso temporal limitado.</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Principio de privilegio mínimo</h3>
          
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Un concepto fundamental en la gestión de acceso es el "principio de privilegio mínimo", que consiste en 
            dar a los usuarios solo los permisos que necesitan para realizar su trabajo, ni más ni menos.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg border border-green-200 dark:border-green-800">
              <h4 className="font-medium text-green-700 dark:text-green-300 mb-3 flex items-center">
                <CheckCircleIcon className="h-5 w-5 mr-2" />
                Beneficios
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-600 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Reduce la superficie de ataque para posibles actores maliciosos</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-600 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Limita el impacto de credenciales comprometidas</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-600 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Reduce el riesgo de errores humanos accidentales</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-lg border border-red-200 dark:border-red-800">
              <h4 className="font-medium text-red-700 dark:text-red-300 mb-3 flex items-center">
                <XCircleIcon className="h-5 w-5 mr-2" />
                Prácticas a evitar
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <XCircleIcon className="h-5 w-5 text-red-600 dark:text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Asignar roles de "Propietario" o "Colaborador" a nivel de suscripción</span>
                </li>
                <li className="flex items-start">
                  <XCircleIcon className="h-5 w-5 text-red-600 dark:text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Compartir credenciales entre múltiples usuarios</span>
                </li>
                <li className="flex items-start">
                  <XCircleIcon className="h-5 w-5 text-red-600 dark:text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Mantener permisos obsoletos que ya no se necesitan</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              <strong>Ejemplo cotidiano:</strong> El principio de privilegio mínimo es como dar llaves específicas a 
              diferentes personas en tu casa. No le das una llave maestra a todos los visitantes; el plomero solo necesita 
              acceso a ciertas áreas relacionadas con su trabajo, mientras que un familiar de confianza puede tener acceso 
              más amplio, pero quizás no a tu caja fuerte personal.
            </p>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Estrategias de implementación de RBAC</h3>
          
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Para implementar RBAC eficazmente en Azure, considera estas estrategias:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-azure-50 dark:bg-azure-900/20 p-4 rounded-lg">
              <h4 className="font-medium text-azure-700 dark:text-azure-400 mb-2 flex items-center">
                <UserGroupIcon className="h-5 w-5 mr-2" />
                Asignar roles a grupos
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                En lugar de asignar roles a usuarios individuales, asigna roles a grupos de Microsoft Entra ID. Esto simplifica la gestión.
              </p>
            </div>
            
            <div className="bg-azure-50 dark:bg-azure-900/20 p-4 rounded-lg">
              <h4 className="font-medium text-azure-700 dark:text-azure-400 mb-2 flex items-center">
                <CogIcon className="h-5 w-5 mr-2" />
                Usar roles personalizados
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Si los roles integrados no se ajustan a tus necesidades, crea roles personalizados con permisos específicos.
              </p>
            </div>
            
            <div className="bg-azure-50 dark:bg-azure-900/20 p-4 rounded-lg">
              <h4 className="font-medium text-azure-700 dark:text-azure-400 mb-2 flex items-center">
                <InformationCircleIcon className="h-5 w-5 mr-2" />
                Documentar y revisar
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Documenta tus asignaciones de roles y revísalas periódicamente para eliminar accesos innecesarios.
              </p>
            </div>
            
            <div className="bg-azure-50 dark:bg-azure-900/20 p-4 rounded-lg">
              <h4 className="font-medium text-azure-700 dark:text-azure-400 mb-2 flex items-center">
                <ShieldCheckIcon className="h-5 w-5 mr-2" />
                Monitorear actividad
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Usa Azure Monitor y Log Analytics para rastrear quién está haciendo qué y cuándo en tus recursos.
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
                Para el examen, asegúrate de comprender:
              </p>
              <ul className="mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                <li>• El papel de Microsoft Entra ID (antes Azure AD) en la gestión de identidades</li>
                <li>• Cómo funciona RBAC y sus componentes (entidad de seguridad, definición de rol, ámbito)</li>
                <li>• Los roles integrados más comunes (Propietario, Colaborador, Lector)</li>
                <li>• El concepto de privilegio mínimo y su importancia</li>
                <li>• La diferencia entre autenticación y autorización</li>
              </ul>
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
            Responde estas preguntas para verificar tu comprensión de las cuentas de Azure.
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
        
        <div className="bg-azure-50 dark:bg-azure-900/20 p-6 rounded-lg border border-azure-100 dark:border-azure-900/50">
          <h4 className="font-medium text-azure-700 dark:text-azure-300 mb-3">Puntos clave para el examen AZ-900</h4>
          <ul className="space-y-2">
            <li className="flex items-start">
              <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">Un inquilino de Azure (tenant) es una instancia dedicada de Microsoft Entra ID que representa una organización.</span>
            </li>
            <li className="flex items-start">
              <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">Una suscripción de Azure establece límites de facturación y permisos, siendo la unidad básica para el consumo de recursos.</span>
            </li>
            <li className="flex items-start">
              <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">Los grupos de recursos son contenedores lógicos para recursos relacionados que comparten el mismo ciclo de vida.</span>
            </li>
            <li className="flex items-start">
              <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">RBAC permite asignar permisos detallados a través de roles como Propietario, Colaborador y Lector.</span>
            </li>
            <li className="flex items-start">
              <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">El principio de privilegio mínimo consiste en otorgar solo los permisos necesarios para realizar una tarea.</span>
            </li>
          </ul>
        </div>
      </div>
    )
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center mb-8">
        <UserIcon className="h-8 w-8 text-azure-600 dark:text-azure-400 mr-3" />
        <h1 className="text-3xl font-bold text-azure-700 dark:text-azure-400">Cuentas de Azure</h1>
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
            onClick={() => setActiveTab('subscriptions')}
            className={`py-2 px-4 border-b-2 font-medium text-sm rounded-t-lg ${
              activeTab === 'subscriptions'
                ? 'border-azure-500 text-azure-600 dark:text-azure-400 dark:border-azure-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Suscripciones
          </button>
          
          <button
            onClick={() => setActiveTab('access')}
            className={`py-2 px-4 border-b-2 font-medium text-sm rounded-t-lg ${
              activeTab === 'access'
                ? 'border-azure-500 text-azure-600 dark:text-azure-400 dark:border-azure-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Control de Acceso
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