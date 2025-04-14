// Ruta: /src/pages/cloud-concepts/ServiceTypes.jsx
import { useState } from 'react';
import { 
  CloudIcon, 
  ServerIcon, 
  CubeIcon, 
  WindowIcon,
  CheckCircleIcon,
  XCircleIcon,
  BuildingOfficeIcon,
  WrenchScrewdriverIcon,
  CodeBracketIcon,
  CircleStackIcon,
  CogIcon,
  ArrowTrendingUpIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  LightBulbIcon,
  InformationCircleIcon,
  QuestionMarkCircleIcon
} from '@heroicons/react/24/outline';

export default function ServiceTypes() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedService, setSelectedService] = useState('iaas');
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showExplanations, setShowExplanations] = useState({});

  // Definición de los servicios en la nube
  const cloudServices = [
    {
      id: 'iaas',
      title: 'Infraestructura como Servicio (IaaS)',
      icon: ServerIcon,
      color: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
      textColor: 'text-blue-700 dark:text-blue-300',
      description: 'Proporciona infraestructura de computación virtualizada sobre internet',
      examples: ['Azure Virtual Machines', 'Azure Storage', 'Azure Virtual Networks', 'Amazon EC2', 'Google Compute Engine'],
      responsibility: 'El cliente gestiona el sistema operativo, middleware, aplicaciones y datos. El proveedor gestiona los servidores físicos, almacenamiento y redes.',
      useCases: [
        'Migración lift-and-shift de aplicaciones',
        'Desarrollo y pruebas',
        'Almacenamiento, copias de seguridad y recuperación',
        'Aplicaciones de alto rendimiento',
        'Cuando se necesita control completo sobre la infraestructura'
      ],
      benefits: [
        'Máxima flexibilidad y control',
        'Familiar para administradores de TI tradicionales',
        'Fácil migración de sistemas existentes',
        'Escalabilidad rápida de recursos',
        'Pago por uso sin grandes inversiones iniciales'
      ],
      challenges: [
        'Mayor responsabilidad de administración',
        'Requiere habilidades técnicas para mantenimiento',
        'El cliente es responsable de la seguridad a nivel de sistema operativo',
        'Posibles costos por recursos subutilizados'
      ],
      analogyTitle: 'Alquilar un terreno para construir',
      analogy: 'IaaS es como alquilar un terreno donde puedes construir exactamente lo que necesitas. El propietario (proveedor de la nube) proporciona el terreno, electricidad, agua y seguridad básica, pero tú eres responsable de construir la casa, mantenerla, amueblarla y decidir quién puede entrar. Tienes libertad total para diseñar y modificar, pero también la responsabilidad de mantenerlo todo funcionando.'
    },
    {
      id: 'paas',
      title: 'Plataforma como Servicio (PaaS)',
      icon: CubeIcon,
      color: 'bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-800',
      textColor: 'text-indigo-700 dark:text-indigo-300',
      description: 'Proporciona un entorno de desarrollo y despliegue completo en la nube',
      examples: ['Azure App Service', 'Azure SQL Database', 'Azure Functions', 'Google App Engine', 'Heroku'],
      responsibility: 'El cliente gestiona las aplicaciones y los datos. El proveedor gestiona el sistema operativo, middleware, servidores y almacenamiento.',
      useCases: [
        'Desarrollo y despliegue rápido de aplicaciones',
        'APIs y servicios web',
        'Aplicaciones basadas en la nube',
        'Análisis de datos y business intelligence',
        'Cuando el equipo se quiere centrar en el desarrollo de aplicaciones'
      ],
      benefits: [
        'Desarrollo más rápido y con menos código',
        'Menos administración de infraestructura',
        'Escalabilidad automática o simplificada',
        'Acceso a herramientas de desarrollo avanzadas',
        'Menor complejidad operativa'
      ],
      challenges: [
        'Menor flexibilidad que IaaS',
        'Posible dependencia del proveedor',
        'Limitaciones en la personalización',
        'Posibles restricciones en los lenguajes y frameworks soportados'
      ],
      analogyTitle: 'Alquilar un apartamento amueblado',
      analogy: 'PaaS es como alquilar un apartamento amueblado y listo para vivir. El edificio, las instalaciones básicas, los muebles y electrodomésticos ya están allí. Tú solo necesitas traer tus pertenencias personales (tu código) y decidir cómo usar el espacio. El propietario se encarga del mantenimiento estructural, mientras tú te concentras en vivir cómodamente (desarrollar tu aplicación).'
    },
    {
      id: 'saas',
      title: 'Software como Servicio (SaaS)',
      icon: WindowIcon,
      color: 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800',
      textColor: 'text-emerald-700 dark:text-emerald-300',
      description: 'Aplicaciones completas entregadas por internet, listas para usar',
      examples: ['Microsoft 365', 'Salesforce', 'Dropbox', 'Gmail', 'Slack', 'Zoom'],
      responsibility: 'El cliente solo gestiona los datos que introduce y las configuraciones básicas. El proveedor gestiona todo lo demás, incluyendo la aplicación.',
      useCases: [
        'Aplicaciones de colaboración y productividad',
        'Email y comunicaciones',
        'CRM y ERP',
        'Aplicaciones de uso general',
        'Cuando se busca minimizar la administración de TI'
      ],
      benefits: [
        'Mínima administración por parte del usuario',
        'Accesibilidad desde cualquier dispositivo con internet',
        'Actualizaciones automáticas',
        'Rápida implementación',
        'Escalabilidad sin esfuerzo'
      ],
      challenges: [
        'Mínima personalización',
        'Preocupaciones sobre seguridad de datos',
        'Dependencia total del proveedor',
        'Posibles limitaciones de integración',
        'Puede resultar más costoso a largo plazo'
      ],
      analogyTitle: 'Hospedarse en un hotel',
      analogy: 'SaaS es como hospedarse en un hotel. Todo está listo para usarse: la habitación, los muebles, el servicio de limpieza, room service, etc. No tienes que preocuparte por ningún mantenimiento, solo disfrutar de los servicios. Tienes opciones limitadas de personalización (como la temperatura o la disposición de algunos muebles), pero a cambio obtienes conveniencia total. El hotel se encarga de todo, desde la infraestructura hasta los servicios diarios.'
    }
  ];

  // Definición de preguntas para el quiz
  const quizQuestions = [
    {
      id: 1,
      question: "¿Cuál de los siguientes servicios es un ejemplo de IaaS?",
      options: [
        "Microsoft 365",
        "Azure Virtual Machines",
        "Salesforce",
        "Azure App Service"
      ],
      correctAnswer: 1,
      explanation: "Azure Virtual Machines es un servicio de Infraestructura como Servicio (IaaS) que proporciona máquinas virtuales que puedes configurar y gestionar según tus necesidades. Tú eres responsable del sistema operativo, el middleware y las aplicaciones, mientras que Microsoft se encarga de la infraestructura física."
    },
    {
      id: 2,
      question: "¿En qué modelo de servicio en la nube el cliente tiene MENOS responsabilidades de gestión?",
      options: [
        "Infraestructura como Servicio (IaaS)",
        "Plataforma como Servicio (PaaS)",
        "Software como Servicio (SaaS)",
        "Datos como Servicio (DaaS)"
      ],
      correctAnswer: 2,
      explanation: "En el modelo Software como Servicio (SaaS), el cliente tiene la menor responsabilidad de gestión. El proveedor de servicios en la nube administra todo, desde la infraestructura hasta la aplicación misma. El cliente solo gestiona sus datos y algunas configuraciones básicas de la aplicación."
    },
    {
      id: 3,
      question: "Una empresa quiere migrar sus aplicaciones existentes a la nube con el mínimo esfuerzo de rediseño. ¿Qué modelo de servicio en la nube sería más adecuado?",
      options: [
        "Software como Servicio (SaaS)",
        "Plataforma como Servicio (PaaS)",
        "Infraestructura como Servicio (IaaS)",
        "Sin servidor (Serverless)"
      ],
      correctAnswer: 2,
      explanation: "La Infraestructura como Servicio (IaaS) es ideal para migraciones 'lift-and-shift' de aplicaciones existentes con mínimos cambios. Permite mover las aplicaciones tal como están a servidores virtuales en la nube, manteniendo el mismo sistema operativo y configuraciones, pero aprovechando las ventajas de la infraestructura en la nube."
    },
    {
      id: 4,
      question: "¿Qué modelo de servicio en la nube elegiría si quisiera desarrollar y desplegar aplicaciones rápidamente sin preocuparse por la infraestructura subyacente, pero manteniendo control sobre las aplicaciones?",
      options: [
        "Infraestructura como Servicio (IaaS)",
        "Plataforma como Servicio (PaaS)",
        "Software como Servicio (SaaS)",
        "Datos como Servicio (DaaS)"
      ],
      correctAnswer: 1,
      explanation: "Plataforma como Servicio (PaaS) es ideal para desarrolladores que quieren centrarse en construir, probar y desplegar aplicaciones sin preocuparse por gestionar la infraestructura subyacente. PaaS proporciona todas las herramientas y servicios necesarios para el desarrollo de aplicaciones, mientras que el proveedor gestiona servidores, almacenamiento, redes y sistemas operativos."
    },
    {
      id: 5,
      question: "En el modelo de responsabilidad compartida, ¿qué componente NO es responsabilidad del cliente en un entorno PaaS?",
      options: [
        "Los datos",
        "El código de la aplicación",
        "El sistema operativo",
        "La configuración de seguridad a nivel de aplicación"
      ],
      correctAnswer: 2,
      explanation: "En un entorno de Plataforma como Servicio (PaaS), el sistema operativo es gestionado por el proveedor de servicios en la nube, no por el cliente. El cliente sigue siendo responsable de sus datos, el código de su aplicación y la configuración de seguridad a nivel de aplicación, mientras que el proveedor se encarga del sistema operativo, el middleware, los servidores y el almacenamiento."
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
          <CloudIcon className="h-6 w-6 text-azure-600 dark:text-azure-400 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-lg font-semibold text-azure-700 dark:text-azure-400 mb-2">Modelos de servicio en la nube</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Los servicios en la nube se clasifican principalmente en tres modelos, según el nivel de responsabilidad que asume 
              el proveedor de servicios en la nube y el nivel de control que mantiene el cliente.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Cada modelo ofrece diferentes niveles de flexibilidad, control y responsabilidad, permitiendo a las organizaciones 
              elegir la opción que mejor se adapte a sus necesidades específicas.
            </p>
          </div>
        </div>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 dark:border-blue-700 p-4 rounded-r-md">
          <div className="flex">
            <LightBulbIcon className="h-6 w-6 text-blue-500 dark:text-blue-400 mr-3 flex-shrink-0 mt-1" />
            <div>
              <p className="text-blue-700 dark:text-blue-300 font-medium mb-1">Explicado de forma simple</p>
              <p className="text-gray-700 dark:text-gray-300">
                Imagina que quieres un lugar para vivir. Tienes varias opciones:
              </p>
              <ul className="mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                <li><strong>IaaS:</strong> Como alquilar un terreno para construir tu casa. Tienes libertad total para construir lo que quieras, pero también eres responsable de todo.</li>
                <li><strong>PaaS:</strong> Como alquilar un apartamento amueblado. La estructura básica ya está lista, solo necesitas adaptarlo a tus gustos y traer tus cosas personales.</li>
                <li><strong>SaaS:</strong> Como hospedarte en un hotel. Todo está listo para usar, con servicios incluidos, pero tienes pocas opciones de personalización.</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="relative overflow-hidden mb-8">
          <div className="overflow-x-auto pb-4">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 border border-gray-200 dark:border-gray-700 rounded-lg">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"></th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-blue-500 dark:text-blue-300 uppercase tracking-wider">
                    <div className="flex items-center">
                      <ServerIcon className="h-5 w-5 mr-1" />
                      IaaS
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-indigo-500 dark:text-indigo-300 uppercase tracking-wider">
                    <div className="flex items-center">
                      <CubeIcon className="h-5 w-5 mr-1" />
                      PaaS
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-emerald-500 dark:text-emerald-300 uppercase tracking-wider">
                    <div className="flex items-center">
                      <WindowIcon className="h-5 w-5 mr-1" />
                      SaaS
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Definición</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Infraestructura de computación virtualizada</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Entorno de desarrollo y despliegue</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Aplicaciones completas listas para usar</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Ejemplos</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Azure VMs, Storage</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Azure App Service, Functions</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Microsoft 365, Salesforce</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Control del cliente</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Alto</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Medio</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Bajo</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Gestión por el cliente</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">OS, middleware, aplicaciones, datos</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Aplicaciones y datos</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Solo datos y configuraciones</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Flexibilidad</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Máxima</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Alta para desarrollo</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Limitada</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Esfuerzo de gestión</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Alto</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Medio</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Mínimo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-6">Responsabilidades en cada modelo de servicio</h3>
          
          <div className="relative h-[500px] md:h-[400px] mb-8">
            <div className="absolute inset-0 flex">
              {/* Leyenda */}
              <div className="w-1/3 flex flex-col">
                <div className="h-[72px] border-b border-gray-200 dark:border-gray-700 flex items-center justify-center">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Componente</span>
                </div>
                <div className="h-[60px] border-b border-gray-200 dark:border-gray-700 flex items-center px-2 text-xs md:text-sm text-gray-700 dark:text-gray-300">
                  <BuildingOfficeIcon className="h-4 w-4 mr-1 flex-shrink-0" />
                  <span>Datos e información</span>
                </div>
                <div className="h-[60px] border-b border-gray-200 dark:border-gray-700 flex items-center px-2 text-xs md:text-sm text-gray-700 dark:text-gray-300">
                  <WrenchScrewdriverIcon className="h-4 w-4 mr-1 flex-shrink-0" />
                  <span>Aplicaciones</span>
                </div>
                <div className="h-[60px] border-b border-gray-200 dark:border-gray-700 flex items-center px-2 text-xs md:text-sm text-gray-700 dark:text-gray-300">
                  <CodeBracketIcon className="h-4 w-4 mr-1 flex-shrink-0" />
                  <span>Runtime</span>
                </div>
                <div className="h-[60px] border-b border-gray-200 dark:border-gray-700 flex items-center px-2 text-xs md:text-sm text-gray-700 dark:text-gray-300">
                  <CircleStackIcon className="h-4 w-4 mr-1 flex-shrink-0" />
                  <span>Middleware</span>
                </div>
                <div className="h-[60px] border-b border-gray-200 dark:border-gray-700 flex items-center px-2 text-xs md:text-sm text-gray-700 dark:text-gray-300">
                  <CogIcon className="h-4 w-4 mr-1 flex-shrink-0" />
                  <span>Sistema Operativo</span>
                </div>
                <div className="h-[60px] border-b border-gray-200 dark:border-gray-700 flex items-center px-2 text-xs md:text-sm text-gray-700 dark:text-gray-300">
                  <ServerIcon className="h-4 w-4 mr-1 flex-shrink-0" />
                  <span>Virtualización</span>
                </div>
                <div className="h-[60px] border-b border-gray-200 dark:border-gray-700 flex items-center px-2 text-xs md:text-sm text-gray-700 dark:text-gray-300">
                  <ArrowTrendingUpIcon className="h-4 w-4 mr-1 flex-shrink-0" />
                  <span>Servidores y almacenamiento</span>
                </div>
                <div className="h-[60px] flex items-center px-2 text-xs md:text-sm text-gray-700 dark:text-gray-300">
                  <ShieldCheckIcon className="h-4 w-4 mr-1 flex-shrink-0" />
                  <span>Redes e infraestructura</span>
                </div>
              </div>
              
              {/* On-Premises */}
              <div className="w-[15%] flex flex-col">
                <div className="h-[72px] border-b border-gray-200 dark:border-gray-700 flex items-center justify-center bg-gray-50 dark:bg-gray-700">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">On-Premises</span>
                </div>
                <div className="h-[60px] border-b border-gray-200 dark:border-gray-700 bg-gray-700 dark:bg-gray-600 flex items-center justify-center text-white text-xs">
                  <span>Cliente</span>
                </div>
                <div className="h-[60px] border-b border-gray-200 dark:border-gray-700 bg-gray-700 dark:bg-gray-600 flex items-center justify-center text-white text-xs">
                  <span>Cliente</span>
                </div>
                <div className="h-[60px] border-b border-gray-200 dark:border-gray-700 bg-gray-700 dark:bg-gray-600 flex items-center justify-center text-white text-xs">
                  <span>Cliente</span>
                </div>
                <div className="h-[60px] border-b border-gray-200 dark:border-gray-700 bg-gray-700 dark:bg-gray-600 flex items-center justify-center text-white text-xs">
                  <span>Cliente</span>
                </div>
                <div className="h-[60px] border-b border-gray-200 dark:border-gray-700 bg-gray-700 dark:bg-gray-600 flex items-center justify-center text-white text-xs">
                  <span>Cliente</span>
                </div>
                <div className="h-[60px] border-b border-gray-200 dark:border-gray-700 bg-gray-700 dark:bg-gray-600 flex items-center justify-center text-white text-xs">
                  <span>Cliente</span>
                </div>
                <div className="h-[60px] border-b border-gray-200 dark:border-gray-700 bg-gray-700 dark:bg-gray-600 flex items-center justify-center text-white text-xs">
                  <span>Cliente</span>
                </div>
                <div className="h-[60px] bg-gray-700 dark:bg-gray-600 flex items-center justify-center text-white text-xs">
                  <span>Cliente</span>
                </div>
              </div>
              
              {/* IaaS */}
              <div className="w-[15%] flex flex-col">
                <div className="h-[72px] border-b border-gray-200 dark:border-gray-700 flex items-center justify-center bg-blue-50 dark:bg-blue-900/20">
                  <span className="text-sm font-medium text-blue-700 dark:text-blue-300 text-center">IaaS</span>
                </div>
                <div className="h-[60px] border-b border-gray-200 dark:border-gray-700 bg-gray-700 dark:bg-gray-600 flex items-center justify-center text-white text-xs">
                  <span>Cliente</span>
                </div>
                <div className="h-[60px] border-b border-gray-200 dark:border-gray-700 bg-gray-700 dark:bg-gray-600 flex items-center justify-center text-white text-xs">
                  <span>Cliente</span>
                </div>
                <div className="h-[60px] border-b border-gray-200 dark:border-gray-700 bg-gray-700 dark:bg-gray-600 flex items-center justify-center text-white text-xs">
                  <span>Cliente</span>
                </div>
                <div className="h-[60px] border-b border-gray-200 dark:border-gray-700 bg-gray-700 dark:bg-gray-600 flex items-center justify-center text-white text-xs">
                  <span>Cliente</span>
                </div>
                <div className="h-[60px] border-b border-gray-200 dark:border-gray-700 bg-gray-700 dark:bg-gray-600 flex items-center justify-center text-white text-xs">
                  <span>Cliente</span>
                </div>
                <div className="h-[60px] border-b border-gray-200 dark:border-gray-700 bg-azure-500 dark:bg-azure-600 flex items-center justify-center text-white text-xs">
                  <span>Proveedor</span>
                </div>
                <div className="h-[60px] border-b border-gray-200 dark:border-gray-700 bg-azure-500 dark:bg-azure-600 flex items-center justify-center text-white text-xs">
                  <span>Proveedor</span>
                </div>
                <div className="h-[60px] bg-azure-500 dark:bg-azure-600 flex items-center justify-center text-white text-xs">
                  <span>Proveedor</span>
                </div>
              </div>
              
              {/* PaaS */}
              <div className="w-[15%] flex flex-col">
                <div className="h-[72px] border-b border-gray-200 dark:border-gray-700 flex items-center justify-center bg-indigo-50 dark:bg-indigo-900/20">
                  <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300 text-center">PaaS</span>
                </div>
                <div className="h-[60px] border-b border-gray-200 dark:border-gray-700 bg-gray-700 dark:bg-gray-600 flex items-center justify-center text-white text-xs">
                  <span>Cliente</span>
                </div>
                <div className="h-[60px] border-b border-gray-200 dark:border-gray-700 bg-gray-700 dark:bg-gray-600 flex items-center justify-center text-white text-xs">
                  <span>Cliente</span>
                </div>
                <div className="h-[60px] border-b border-gray-200 dark:border-gray-700 bg-azure-500 dark:bg-azure-600 flex items-center justify-center text-white text-xs">
                  <span>Proveedor</span>
                </div>
                <div className="h-[60px] border-b border-gray-200 dark:border-gray-700 bg-azure-500 dark:bg-azure-600 flex items-center justify-center text-white text-xs">
                  <span>Proveedor</span>
                </div>
                <div className="h-[60px] border-b border-gray-200 dark:border-gray-700 bg-azure-500 dark:bg-azure-600 flex items-center justify-center text-white text-xs">
                  <span>Proveedor</span>
                </div>
                <div className="h-[60px] border-b border-gray-200 dark:border-gray-700 bg-azure-500 dark:bg-azure-600 flex items-center justify-center text-white text-xs">
                  <span>Proveedor</span>
                </div>
                <div className="h-[60px] border-b border-gray-200 dark:border-gray-700 bg-azure-500 dark:bg-azure-600 flex items-center justify-center text-white text-xs">
                  <span>Proveedor</span>
                </div>
                <div className="h-[60px] bg-azure-500 dark:bg-azure-600 flex items-center justify-center text-white text-xs">
                  <span>Proveedor</span>
                </div>
              </div>
              
              {/* SaaS */}
              <div className="w-[15%] flex flex-col">
                <div className="h-[72px] border-b border-gray-200 dark:border-gray-700 flex items-center justify-center bg-emerald-50 dark:bg-emerald-900/20">
                  <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300 text-center">SaaS</span>
                </div>
                <div className="h-[60px] border-b border-gray-200 dark:border-gray-700 bg-gray-700 dark:bg-gray-600 flex items-center justify-center text-white text-xs">
                  <span>Cliente</span>
                </div>
                <div className="h-[60px] border-b border-gray-200 dark:border-gray-700 bg-azure-500 dark:bg-azure-600 flex items-center justify-center text-white text-xs">
                  <span>Proveedor</span>
                </div>
                <div className="h-[60px] border-b border-gray-200 dark:border-gray-700 bg-azure-500 dark:bg-azure-600 flex items-center justify-center text-white text-xs">
                  <span>Proveedor</span>
                </div>
                <div className="h-[60px] border-b border-gray-200 dark:border-gray-700 bg-azure-500 dark:bg-azure-600 flex items-center justify-center text-white text-xs">
                  <span>Proveedor</span>
                </div>
                <div className="h-[60px] border-b border-gray-200 dark:border-gray-700 bg-azure-500 dark:bg-azure-600 flex items-center justify-center text-white text-xs">
                  <span>Proveedor</span>
                </div>
                <div className="h-[60px] border-b border-gray-200 dark:border-gray-700 bg-azure-500 dark:bg-azure-600 flex items-center justify-center text-white text-xs">
                  <span>Proveedor</span>
                </div>
                <div className="h-[60px] border-b border-gray-200 dark:border-gray-700 bg-azure-500 dark:bg-azure-600 flex items-center justify-center text-white text-xs">
                  <span>Proveedor</span>
                </div>
                <div className="h-[60px] bg-azure-500 dark:bg-azure-600 flex items-center justify-center text-white text-xs">
                  <span>Proveedor</span>
                </div>
              </div>
              
              {/* Leyenda */}
              <div className="w-[5%] flex flex-col">
                <div className="h-[72px] border-b border-gray-200 dark:border-gray-700"></div>
                <div className="flex-grow"></div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center space-x-6 mt-4">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-gray-700 dark:bg-gray-600 mr-2"></div>
              <span className="text-sm text-gray-700 dark:text-gray-300">Cliente</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-azure-500 dark:bg-azure-600 mr-2"></div>
              <span className="text-sm text-gray-700 dark:text-gray-300">Proveedor</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Selección del modelo adecuado</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            La elección del modelo de servicio en la nube depende de varios factores, como:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2 flex items-center">
                <CogIcon className="h-5 w-5 text-azure-500 dark:text-azure-400 mr-2" />
                Control vs. Conveniencia
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                ¿Qué es más importante: tener control total sobre la infraestructura o reducir la carga administrativa?
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2 flex items-center">
                <WrenchScrewdriverIcon className="h-5 w-5 text-azure-500 dark:text-azure-400 mr-2" />
                Experiencia técnica
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                ¿Tu equipo tiene las habilidades necesarias para gestionar servidores, redes y seguridad?
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2 flex items-center">
                <CurrencyDollarIcon className="h-5 w-5 text-azure-500 dark:text-azure-400 mr-2" />
                Consideraciones de costos
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                ¿Prefieres invertir en capital (CAPEX) o en gastos operativos (OPEX)?
              </p>
            </div>
          </div>
          
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Recomendaciones generales:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300"><strong>Elige IaaS</strong> si necesitas control total sobre las aplicaciones y la infraestructura, o para migrar aplicaciones existentes con mínimas modificaciones.</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300"><strong>Elige PaaS</strong> si quieres centrarte en el desarrollo de aplicaciones sin gestionar la infraestructura subyacente.</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300"><strong>Elige SaaS</strong> si necesitas una solución lista para usar con mínima configuración y administración.</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300"><strong>Combinación de modelos:</strong> Muchas organizaciones utilizan múltiples modelos según las necesidades específicas de cada carga de trabajo.</span>
              </li>
            </ul>
          </div>
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
                <li>• Las diferencias entre IaaS, PaaS y SaaS</li>
                <li>• La distribución de responsabilidades en cada modelo</li>
                <li>• Ejemplos de servicios de Azure para cada modelo</li>
                <li>• Casos de uso apropiados para cada modelo</li>
                <li>• Las ventajas y desventajas de cada enfoque</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),
    
    details: (
      <div className="space-y-8">
        {/* Selector de servicio */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-4">
          {cloudServices.map(service => (
            <button
              key={service.id}
              onClick={() => setSelectedService(service.id)}
              className={`p-4 rounded-lg transition-colors flex flex-col items-center ${
                selectedService === service.id 
                  ? service.color + ' ' + service.textColor + ' shadow-sm'
                  : 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700'
              }`}
            >
              <service.icon className="h-8 w-8 mb-2" />
              <span className="text-center text-sm font-medium">{service.title}</span>
            </button>
          ))}
        </div>
        
        {/* Contenido detallado del servicio seleccionado */}
        {cloudServices.filter(s => s.id === selectedService).map(service => (
          <div key={service.id} className="space-y-8">
            <div className={`p-6 rounded-lg border ${service.color}`}>
              <div className="flex items-start">
                <service.icon className={`h-10 w-10 mr-4 ${service.textColor}`} />
                <div>
                  <h2 className={`text-xl font-bold ${service.textColor} mb-2`}>{service.title}</h2>
                  <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className={`font-medium ${service.textColor} mb-3 flex items-center`}>
                  <CircleStackIcon className="h-5 w-5 mr-2" />
                  Ejemplos
                </h3>
                <ul className="space-y-2">
                  {service.examples.map((example, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircleIcon className={`h-5 w-5 ${service.textColor.replace('text-', 'text-').replace('dark:text-', 'dark:text-')} mr-2 mt-0.5 flex-shrink-0`} />
                      <span className="text-gray-700 dark:text-gray-300">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className={`font-medium ${service.textColor} mb-3 flex items-center`}>
                  <ServerIcon className="h-5 w-5 mr-2" />
                  Responsabilidad
                </h3>
                <p className="text-gray-700 dark:text-gray-300">{service.responsibility}</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className={`font-medium ${service.textColor} mb-3 flex items-center`}>
                  <LightBulbIcon className="h-5 w-5 mr-2" />
                  Casos de uso
                </h3>
                <ul className="space-y-2">
                  {service.useCases.map((useCase, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircleIcon className={`h-5 w-5 ${service.textColor.replace('text-', 'text-').replace('dark:text-', 'dark:text-')} mr-2 mt-0.5 flex-shrink-0`} />
                      <span className="text-gray-700 dark:text-gray-300">{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className={`font-medium ${service.textColor} mb-3 flex items-center`}>
                  <CheckCircleIcon className="h-5 w-5 mr-2" />
                  Ventajas
                </h3>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className={`font-medium ${service.textColor} mb-3 flex items-center`}>
                  <XCircleIcon className="h-5 w-5 mr-2" />
                  Desafíos
                </h3>
                <ul className="space-y-2">
                  {service.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start">
                      <XCircleIcon className="h-5 w-5 text-red-500 dark:text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className={`p-5 rounded-lg border ${service.color}`}>
              <h3 className={`font-medium ${service.textColor} mb-3 flex items-center`}>
                <LightBulbIcon className="h-5 w-5 mr-2" />
                {service.analogyTitle}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">{service.analogy}</p>
            </div>
          </div>
        ))}
      </div>
    ),
    
    azure: (
      <div className="space-y-8">
        <div className="bg-azure-50 dark:bg-azure-900/20 p-6 rounded-lg border border-azure-100 dark:border-azure-900/50">
          <h2 className="text-xl font-semibold text-azure-700 dark:text-azure-400 mb-4">Servicios de Azure por modelo de servicio</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Microsoft Azure ofrece un amplio catálogo de servicios que abarcan los tres modelos principales de servicios en la nube:
            IaaS, PaaS y SaaS. A continuación se muestran algunos de los servicios más importantes en cada modelo.
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="flex items-center text-lg font-medium text-blue-700 dark:text-blue-400 mb-6">
            <ServerIcon className="h-6 w-6 mr-2" />
            Servicios IaaS en Azure
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-medium text-blue-700 dark:text-blue-400 mb-3">Azure Virtual Machines</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Máquinas virtuales personalizables que proporcionan control total sobre el sistema operativo y el entorno.
              </p>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>• Múltiples sistemas operativos (Windows, Linux)</li>
                <li>• Configurable según tus necesidades de CPU, memoria y almacenamiento</li>
                <li>• Ideal para migrar aplicaciones existentes (lift and shift)</li>
                <li>• Flexibilidad para instalar cualquier software personalizado</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-medium text-blue-700 dark:text-blue-400 mb-3">Azure Storage</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Almacenamiento escalable en la nube para datos estructurados y no estructurados.
              </p>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>• Blob Storage: para datos no estructurados como documentos e imágenes</li>
                <li>• File Storage: acción compartida para aplicaciones heredadas</li>
                <li>• Disk Storage: discos virtuales para VMs</li>
                <li>• Table Storage: almacenamiento NoSQL para datos estructurados</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-medium text-blue-700 dark:text-blue-400 mb-3">Azure Virtual Network</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Permite crear redes privadas aisladas en Azure y conectarlas a tu infraestructura local.
              </p>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>• Segmentación mediante subredes</li>
                <li>• Control sobre el espacio de direcciones IP</li>
                <li>• Filtrado de tráfico con grupos de seguridad de red</li>
                <li>• Conexión a redes locales mediante VPN o ExpressRoute</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-medium text-blue-700 dark:text-blue-400 mb-3">Azure Load Balancer</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Distribuye el tráfico entrante entre varias instancias de aplicaciones para mayor disponibilidad.
              </p>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>• Balanceo de carga de tráfico TCP y UDP</li>
                <li>• Alta disponibilidad mediante redistribución del tráfico</li>
                <li>• Sondeos de estado para detectar instancias no disponibles</li>
                <li>• Opciones público (internet) o interno (red privada)</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm italic">
              * Estos servicios ofrecen infraestructura básica, dejando a los usuarios la responsabilidad de gestionar los sistemas operativos, el middleware y las aplicaciones.
            </p>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="flex items-center text-lg font-medium text-indigo-700 dark:text-indigo-400 mb-6">
            <CubeIcon className="h-6 w-6 mr-2" />
            Servicios PaaS en Azure
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-5 rounded-lg border border-indigo-200 dark:border-indigo-800">
              <h4 className="font-medium text-indigo-700 dark:text-indigo-400 mb-3">Azure App Service</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Plataforma para crear y alojar aplicaciones web y APIs sin gestionar la infraestructura.
              </p>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>• Soporte para múltiples lenguajes (.NET, Java, Node.js, PHP, Python)</li>
                <li>• Escalado automático integrado</li>
                <li>• Integración con GitHub y Azure DevOps</li>
                <li>• Seguridad y cumplimiento integrados</li>
              </ul>
            </div>
            
            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-5 rounded-lg border border-indigo-200 dark:border-indigo-800">
              <h4 className="font-medium text-indigo-700 dark:text-indigo-400 mb-3">Azure Functions</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Servicio de computación sin servidor que permite ejecutar código en respuesta a eventos.
              </p>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>• Ejecución de fragmentos de código o "funciones"</li>
                <li>• Escalado automático basado en demanda</li>
                <li>• Pago solo por el tiempo de ejecución</li>
                <li>• Diversos desencadenadores (HTTP, temporizador, eventos de Azure)</li>
              </ul>
            </div>
            
            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-5 rounded-lg border border-indigo-200 dark:border-indigo-800">
              <h4 className="font-medium text-indigo-700 dark:text-indigo-400 mb-3">Azure SQL Database</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Base de datos relacional como servicio basada en SQL Server, pero sin necesidad de gestionar el servidor.
              </p>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>• Compatible con SQL Server</li>
                <li>• Alta disponibilidad integrada</li>
                <li>• Backups automáticos y point-in-time restore</li>
                <li>• Escalado flexible de rendimiento y almacenamiento</li>
              </ul>
            </div>
            
            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-5 rounded-lg border border-indigo-200 dark:border-indigo-800">
              <h4 className="font-medium text-indigo-700 dark:text-indigo-400 mb-3">Azure Kubernetes Service (AKS)</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Servicio gestionado para implementar, escalar y administrar aplicaciones en contenedores.
              </p>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>• Orquestación de contenedores simplificada</li>
                <li>• Escalado automático</li>
                <li>• Despliegue y actualización simplificados</li>
                <li>• Control del plano de control gestionado por Azure</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm italic">
              * Estos servicios proporcionan un entorno de desarrollo y despliegue completo, permitiendo centrarse en el desarrollo de aplicaciones sin gestionar la infraestructura subyacente.
            </p>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="flex items-center text-lg font-medium text-emerald-700 dark:text-emerald-400 mb-6">
            <WindowIcon className="h-6 w-6 mr-2" />
            Servicios SaaS en Azure
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-emerald-50 dark:bg-emerald-900/20 p-5 rounded-lg border border-emerald-200 dark:border-emerald-800">
              <h4 className="font-medium text-emerald-700 dark:text-emerald-400 mb-3">Microsoft 365</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Suite de productividad que incluye aplicaciones como Word, Excel, PowerPoint, Teams y más.
              </p>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>• Aplicaciones disponibles en la nube y en dispositivos</li>
                <li>• Colaboración en tiempo real</li>
                <li>• Email y calendarios integrados</li>
                <li>• Almacenamiento en la nube con OneDrive</li>
              </ul>
            </div>
            
            <div className="bg-emerald-50 dark:bg-emerald-900/20 p-5 rounded-lg border border-emerald-200 dark:border-emerald-800">
              <h4 className="font-medium text-emerald-700 dark:text-emerald-400 mb-3">Dynamics 365</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Conjunto de aplicaciones empresariales inteligentes para CRM y ERP.
              </p>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>• Gestión de relaciones con clientes (CRM)</li>
                <li>• Planificación de recursos empresariales (ERP)</li>
                <li>• Automatización de ventas y marketing</li>
                <li>• Integración con Power Platform para personalización</li>
              </ul>
            </div>
            
            <div className="bg-emerald-50 dark:bg-emerald-900/20 p-5 rounded-lg border border-emerald-200 dark:border-emerald-800">
              <h4 className="font-medium text-emerald-700 dark:text-emerald-400 mb-3">Power BI</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Plataforma de análisis de datos y visualización para transformar datos en insights.
              </p>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>• Paneles interactivos y reportes</li>
                <li>• Conexiones a múltiples fuentes de datos</li>
                <li>• Compartir y colaborar en insights</li>
                <li>• Integración con Excel y otras herramientas de Microsoft</li>
              </ul>
            </div>
            
            <div className="bg-emerald-50 dark:bg-emerald-900/20 p-5 rounded-lg border border-emerald-200 dark:border-emerald-800">
              <h4 className="font-medium text-emerald-700 dark:text-emerald-400 mb-3">Microsoft Defender</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Solución de seguridad para proteger dispositivos, identidades, aplicaciones y datos.
              </p>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>• Protección contra malware y amenazas avanzadas</li>
                <li>• Seguridad unificada para endpoints, identidades y datos</li>
                <li>• Inteligencia de amenazas integrada</li>
                <li>• Gestión centralizada de políticas de seguridad</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm italic">
              * Estos servicios proporcionan aplicaciones completas y listas para usar, donde el usuario solo gestiona los datos y configuraciones básicas.
            </p>
          </div>
        </div>
        
        <div className="bg-azure-50 dark:bg-azure-900/20 p-6 rounded-lg border border-azure-100 dark:border-azure-900/50">
          <div className="flex items-start">
            <InformationCircleIcon className="h-6 w-6 text-azure-600 dark:text-azure-400 mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-azure-700 dark:text-azure-300 mb-2">Servicios de Azure y el examen AZ-900</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Para el examen AZ-900, debes poder identificar a qué modelo de servicio (IaaS, PaaS, SaaS) pertenece cada 
                servicio de Azure. No necesitas conocer todos los servicios en detalle, pero sí comprender los más 
                importantes y su clasificación.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                Ten en cuenta que algunos servicios pueden tener características que abarcan más de un modelo de servicio. 
                Por ejemplo, Azure Kubernetes Service tiene elementos tanto de IaaS como de PaaS.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
    
    comparison: (
      <div className="space-y-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Comparación detallada de modelos de servicio</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 border border-gray-200 dark:border-gray-700 rounded-lg">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider w-1/5">Aspecto</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-blue-500 dark:text-blue-300 uppercase tracking-wider w-1/5">IaaS</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-indigo-500 dark:text-indigo-300 uppercase tracking-wider w-1/5">PaaS</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-emerald-500 dark:text-emerald-300 uppercase tracking-wider w-1/5">SaaS</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider w-1/5">On-Premises</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Gestión de servidores físicos</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Proveedor</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Proveedor</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Proveedor</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Cliente</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Gestión de sistemas operativos</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Cliente</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Proveedor</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Proveedor</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Cliente</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Gestión de middleware</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Cliente</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Proveedor</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Proveedor</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Cliente</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Gestión de aplicaciones</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Cliente</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Cliente</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Proveedor</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Cliente</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Gestión de datos</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Cliente</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Cliente</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Cliente</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Cliente</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Flexibilidad</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Alta</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Media</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Baja</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Máxima</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Responsabilidad operativa</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Alta</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Media</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Baja</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Completa</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Velocidad de implementación</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Media</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Rápida</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Inmediata</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Lenta</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Escalabilidad</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Manual o scripted</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Automática o semiautomática</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Automática</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Manual, compleja</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Inversión inicial</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Baja</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Baja</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Mínima/Ninguna</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Alta</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Modelo de costos</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Pago por recursos</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Pago por uso</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Suscripción/Por usuario</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">CapEx + mantenimiento</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-md bg-blue-100 dark:bg-blue-900/30 mr-3">
                <ServerIcon className="h-6 w-6 text-blue-700 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">IaaS</h3>
            </div>
            
            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Mejor para:</h4>
              <ul className="text-sm space-y-2">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Migración "lift and shift" de aplicaciones</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Requisitos de personalización avanzados</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Operaciones de desarrollo y pruebas</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">No recomendado para:</h4>
              <ul className="text-sm space-y-2">
                <li className="flex items-start">
                  <XCircleIcon className="h-5 w-5 text-red-500 dark:text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Equipos sin experiencia en administración de servidores</span>
                </li>
                <li className="flex items-start">
                  <XCircleIcon className="h-5 w-5 text-red-500 dark:text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Necesidad de rápido despliegue</span>
                </li>
                <li className="flex items-start">
                  <XCircleIcon className="h-5 w-5 text-red-500 dark:text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Organizaciones con recursos de TI limitados</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-md bg-indigo-100 dark:bg-indigo-900/30 mr-3">
                <CubeIcon className="h-6 w-6 text-indigo-700 dark:text-indigo-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">PaaS</h3>
            </div>
            
            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Mejor para:</h4>
              <ul className="text-sm space-y-2">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Desarrollo y despliegue rápido de aplicaciones</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Enfoque en el desarrollo, no en la infraestructura</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">APIs y servicios web</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">No recomendado para:</h4>
              <ul className="text-sm space-y-2">
                <li className="flex items-start">
                  <XCircleIcon className="h-5 w-5 text-red-500 dark:text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Aplicaciones que requieren personalización a nivel de sistema operativo</span>
                </li>
                <li className="flex items-start">
                  <XCircleIcon className="h-5 w-5 text-red-500 dark:text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Software heredado sin posibilidad de modernización</span>
                </li>
                <li className="flex items-start">
                  <XCircleIcon className="h-5 w-5 text-red-500 dark:text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Requisitos de cumplimiento que exigen control total</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-md bg-emerald-100 dark:bg-emerald-900/30 mr-3">
                <WindowIcon className="h-6 w-6 text-emerald-700 dark:text-emerald-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">SaaS</h3>
            </div>
            
            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Mejor para:</h4>
              <ul className="text-sm space-y-2">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Aplicaciones estándar (email, CRM, etc.)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Empresas con recursos de TI limitados</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Necesidad de implementación inmediata</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">No recomendado para:</h4>
              <ul className="text-sm space-y-2">
                <li className="flex items-start">
                  <XCircleIcon className="h-5 w-5 text-red-500 dark:text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Aplicaciones altamente personalizadas</span>
                </li>
                <li className="flex items-start">
                  <XCircleIcon className="h-5 w-5 text-red-500 dark:text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Requisitos regulatorios estrictos sobre datos</span>
                </li>
                <li className="flex items-start">
                  <XCircleIcon className="h-5 w-5 text-red-500 dark:text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Necesidad de integración compleja con sistemas heredados</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-6">Evolución de la adopción en la nube</h3>
          
          <div className="relative h-[200px] mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="h-1 bg-gray-200 dark:bg-gray-700 w-full"></div>
            </div>
            
            <div className="absolute inset-0 flex justify-between items-center">
              <div className="relative w-[20%] h-full flex flex-col items-center justify-center">
                <div className="z-10 w-10 h-10 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-full border-2 border-gray-300 dark:border-gray-600">
                  <BuildingOfficeIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                </div>
                <span className="absolute top-4 mt-10 text-center text-sm font-medium text-gray-700 dark:text-gray-300">On-Premises</span>
                <span className="absolute bottom-4 mb-10 text-center text-xs text-gray-600 dark:text-gray-400"></span>
                <span className="absolute bottom-4 mb-10 text-center text-xs text-gray-600 dark:text-gray-400">Máximo control</span>
              </div>
              
              <div className="relative w-[20%] h-full flex flex-col items-center justify-center">
                <div className="z-10 w-10 h-10 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 rounded-full border-2 border-blue-300 dark:border-blue-700">
                  <ServerIcon className="h-5 w-5 text-blue-500 dark:text-blue-400" />
                </div>
                <span className="absolute top-4 mt-10 text-center text-sm font-medium text-blue-700 dark:text-blue-400">IaaS</span>
                <span className="absolute bottom-4 mb-10 text-center text-xs text-gray-600 dark:text-gray-400">Alta flexibilidad</span>
              </div>
              
              <div className="relative w-[20%] h-full flex flex-col items-center justify-center">
                <div className="z-10 w-10 h-10 flex items-center justify-center bg-indigo-100 dark:bg-indigo-900/30 rounded-full border-2 border-indigo-300 dark:border-indigo-700">
                  <CubeIcon className="h-5 w-5 text-indigo-500 dark:text-indigo-400" />
                </div>
                <span className="absolute top-4 mt-10 text-center text-sm font-medium text-indigo-700 dark:text-indigo-400">PaaS</span>
                <span className="absolute bottom-4 mb-10 text-center text-xs text-gray-600 dark:text-gray-400">Equilibrio ideal</span>
              </div>
              
              <div className="relative w-[20%] h-full flex flex-col items-center justify-center">
                <div className="z-10 w-10 h-10 flex items-center justify-center bg-emerald-100 dark:bg-emerald-900/30 rounded-full border-2 border-emerald-300 dark:border-emerald-700">
                  <WindowIcon className="h-5 w-5 text-emerald-500 dark:text-emerald-400" />
                </div>
                <span className="absolute top-4 mt-10 text-center text-sm font-medium text-emerald-700 dark:text-emerald-400">SaaS</span>
                <span className="absolute bottom-4 mb-10 text-center text-xs text-gray-600 dark:text-gray-400">Mínima gestión</span>
              </div>
              
              <div className="relative w-[20%] h-full flex flex-col items-center justify-center">
                <div className="z-10 w-10 h-10 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-full border-2 border-gray-300 dark:border-gray-600 opacity-50">
                  <CloudIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                </div>
                <span className="absolute top-4 mt-10 text-center text-sm font-medium text-gray-500 dark:text-gray-400 opacity-70">Futuro</span>
                <span className="absolute bottom-4 mb-10 text-center text-xs text-gray-500 dark:text-gray-400 opacity-70">Nuevos modelos</span>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              La tendencia general en la adopción de la nube es moverse de izquierda a derecha en este espectro, 
              empezando con IaaS para ganar experiencia y confianza, y luego adoptando PaaS y SaaS a medida que 
              las organizaciones buscan reducir la sobrecarga operativa.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Sin embargo, la mayoría de las organizaciones modernas utilizan un enfoque híbrido, 
              seleccionando el modelo apropiado para cada carga de trabajo específica.
            </p>
          </div>
        </div>
        
        <div className="bg-azure-50 dark:bg-azure-900/20 p-5 rounded-lg border border-azure-200 dark:border-azure-900/30">
          <div className="flex items-start">
            <InformationCircleIcon className="h-6 w-6 text-azure-600 dark:text-azure-400 mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-azure-700 dark:text-azure-300 mb-2">Importancia para el examen AZ-900</h4>
              <p className="text-gray-700 dark:text-gray-300">
                El examen AZ-900 evalúa tu comprensión de las diferencias entre los modelos de servicio en la nube. 
                Asegúrate de entender:
              </p>
              <ul className="mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                <li>• Las responsabilidades del cliente vs. el proveedor en cada modelo</li>
                <li>• Las ventajas y desventajas de cada modelo</li>
                <li>• Los casos de uso apropiados para cada modelo</li>
                <li>• Ejemplos de servicios de Azure que corresponden a cada modelo</li>
                <li>• Cómo estos modelos se comparan con un entorno tradicional on-premises</li>
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
            Responde estas preguntas para verificar tu comprensión de los modelos de servicio en la nube.
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
            <LightBulbIcon className="h-6 w-6 text-yellow-500 dark:text-yellow-400 mr-2" />
            Consejos para recordar los modelos de servicio
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Mnemotécnica "PIE"</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                Una forma fácil de recordar las diferencias:
              </p>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>• <strong>P</strong>izza as a Service: IaaS es como recibir los ingredientes crudos</li>
                <li>• <strong>I</strong>ce Cream as a Service: PaaS es como recibir el helado para añadir tus propios toppings</li>
                <li>• <strong>E</strong>ating out as a Service: SaaS es como ir a un restaurante donde todo está servido</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Recordar por responsabilidades</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                Recuerda quién gestiona qué:
              </p>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>• <strong>IaaS:</strong> "Yo gestiono el SO y las aplicaciones"</li>
                <li>• <strong>PaaS:</strong> "Yo solo gestiono las aplicaciones"</li>
                <li>• <strong>SaaS:</strong> "Yo solo gestiono los datos"</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-azure-50 dark:bg-azure-900/20 rounded-lg border border-azure-100 dark:border-azure-900/50">
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              <strong>Consejo para el examen:</strong> Cuando te enfrentes a preguntas sobre modelos de servicio en la nube, 
              piensa primero en las responsabilidades. Pregúntate: "¿Quién gestiona qué componentes en este escenario?" 
              para determinar si se trata de IaaS, PaaS o SaaS.
            </p>
          </div>
        </div>
      </div>
    )
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center mb-8">
        <CloudIcon className="h-8 w-8 text-azure-600 dark:text-azure-400 mr-3" />
        <h1 className="text-3xl font-bold text-azure-700 dark:text-azure-400">Tipos de servicio en la nube</h1>
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
            onClick={() => setActiveTab('details')}
            className={`py-2 px-4 border-b-2 font-medium text-sm rounded-t-lg ${
              activeTab === 'details'
                ? 'border-azure-500 text-azure-600 dark:text-azure-400 dark:border-azure-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Detalle por Tipo
          </button>
          
          <button
            onClick={() => setActiveTab('azure')}
            className={`py-2 px-4 border-b-2 font-medium text-sm rounded-t-lg ${
              activeTab === 'azure'
                ? 'border-azure-500 text-azure-600 dark:text-azure-400 dark:border-azure-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Servicios en Azure
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