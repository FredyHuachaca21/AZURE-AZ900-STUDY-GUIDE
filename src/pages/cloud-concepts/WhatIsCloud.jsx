// Ruta: /src/pages/cloud-concepts/WhatIsCloud.jsx
import { useState } from 'react';
import { 
  CloudIcon, 
  ServerIcon, 
  CpuChipIcon, 
  LightBulbIcon,
  CheckCircleIcon,
  XCircleIcon,
  ArrowTopRightOnSquareIcon,
  QuestionMarkCircleIcon,
  BeakerIcon,
  PuzzlePieceIcon
} from '@heroicons/react/24/outline';

export default function WhatIsCloud() {
  const [showQuiz, setShowQuiz] = useState(false);
  const [activeTab, setActiveTab] = useState('concept');
  const [showDefinitionModal, setShowDefinitionModal] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  
  // Definir tarjetas interactivas
  const cloudCards = [
    {
      id: 'ondemand',
      title: 'Autoservicio bajo demanda',
      icon: <CloudIcon className="h-6 w-6 text-azure-600 dark:text-azure-400" />,
      description: 'Como pedir comida a domicilio: obtienes exactamente lo que quieres cuando lo necesitas, sin tener que hablar con nadie.',
      example: 'Imagina que necesitas un servidor web. En lugar de llamar al departamento de TI y esperar días, simplemente vas al portal de Azure, haces clic en "crear servidor" y ¡listo! En minutos está funcionando.'
    },
    {
      id: 'network',
      title: 'Amplio acceso a la red',
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-azure-600 dark:text-azure-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>,
      description: 'Como Netflix: accedes desde cualquier dispositivo, desde cualquier lugar, en cualquier momento.',
      example: 'Tu aplicación en Azure es accesible desde tu laptop, tu teléfono o la tablet de tu abuela. No importa dónde estés o qué dispositivo uses.'
    },
    {
      id: 'pooling',
      title: 'Agrupación de recursos',
      icon: <ServerIcon className="h-6 w-6 text-azure-600 dark:text-azure-400" />,
      description: 'Como un gimnasio: muchas personas usan las mismas máquinas, pero no todos al mismo tiempo, lo que hace que sea más económico para todos.',
      example: 'Microsoft tiene enormes centros de datos llenos de servidores. Tu aplicación usa una pequeña parte de estos recursos, al igual que miles de otros clientes. Ninguno necesita comprar todo un servidor.'
    },
    {
      id: 'elasticity',
      title: 'Elasticidad rápida',
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-azure-600 dark:text-azure-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
      </svg>,
      description: 'Como un acordeón: se expande o contrae según lo necesites, automáticamente.',
      example: 'Tu tienda online recibe 10 veces más visitas en Black Friday. Azure añade automáticamente más servidores para manejar el tráfico y luego los reduce cuando la demanda baja.'
    },
    {
      id: 'measured',
      title: 'Servicio medido',
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-azure-600 dark:text-azure-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>,
      description: 'Como un taxi: el medidor corre solo cuando lo usas y pagas exactamente por lo que consumes.',
      example: 'Si tu aplicación procesa datos durante 5 horas al día, solo pagas por esas 5 horas de uso. No pagas por las otras 19 horas cuando está inactiva.'
    }
  ];

  // Datos para tabs interactivos
  const tabContent = {
    concept: {
      title: "¿Qué es realmente la nube?",
      content: (
        <>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Imagina que la nube es como un enorme "centro comercial tecnológico" al que puedes ir a "alquilar" 
            exactamente lo que necesitas, cuando lo necesitas, sin tener que comprarlo todo.
          </p>
          
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Antes de la nube, las empresas tenían que comprar sus propios servidores, almacenamiento y software – 
            como si tuvieras que construir tu propia planta de energía para tener electricidad en casa. Era caro, 
            complicado y desperdiciabas recursos.
          </p>
          
          <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-4 rounded-r-md my-6">
            <div className="flex">
              <LightBulbIcon className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" />
              <div>
                <p className="text-blue-700 dark:text-blue-300 font-medium mb-1">Analogía: La nube es como la electricidad</p>
                <p className="text-gray-700 dark:text-gray-300">
                  ¿Te imaginas que cada casa o empresa tuviera que generar su propia electricidad? Sería un desastre: 
                  costoso, ineficiente y complicado. En su lugar, todos nos conectamos a la red eléctrica y pagamos solo 
                  por la electricidad que usamos.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  La nube funciona exactamente igual: en vez de que cada empresa compre y mantenga sus propios servidores, 
                  todos comparten una "red de computación" y solo pagan por lo que utilizan.
                </p>
              </div>
            </div>
          </div>
        </>
      )
    },
    reallife: {
      title: "La nube en tu vida diaria",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            Aunque no lo sepas, ya usas la nube todos los días. Aquí hay algunos ejemplos:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">Netflix y Spotify</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Cuando ves una película o escuchas música, no necesitas descargar el archivo completo. 
                Estos servicios almacenan todo en la nube y te lo envían al instante.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">Instagram y Facebook</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Tus fotos y mensajes no se guardan en tu teléfono, sino en centros de datos 
                gigantes (la nube) a los que puedes acceder desde cualquier dispositivo.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">Gmail y Outlook</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Tus correos electrónicos no están en tu computadora, ¡están en la nube! Por eso puedes 
                acceder a ellos desde cualquier dispositivo.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">Office 365 y Google Docs</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Ya no necesitas instalar Word o Excel en tu PC. Ahora puedes crear documentos 
                directamente en tu navegador y compartirlos al instante.
              </p>
            </div>
          </div>
        </div>
      )
    },
    business: {
      title: "La nube para negocios",
      content: (
        <div>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Para las empresas, la nube ha cambiado completamente las reglas del juego:
          </p>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
              Caso práctico: Startup vs Empresa tradicional
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-medium text-azure-700 dark:text-azure-400 mb-3">
                  Startup con tecnología en la nube
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Lanza un nuevo producto en <strong>horas</strong> sin inversión inicial en hardware</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Escala automáticamente cuando su producto se vuelve viral</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Paga solo por los recursos que usa cuando tiene tráfico</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Despliega a nivel global sin tener oficinas internacionales</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Empresa con infraestructura tradicional
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <XCircleIcon className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Necesita <strong>meses</strong> para adquirir, instalar y configurar servidores</span>
                  </li>
                  <li className="flex items-start">
                    <XCircleIcon className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Debe dimensionar para el pico de carga, dejando recursos ociosos</span>
                  </li>
                  <li className="flex items-start">
                    <XCircleIcon className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Paga por toda la infraestructura, incluso cuando no la utiliza</span>
                  </li>
                  <li className="flex items-start">
                    <XCircleIcon className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Requiere infraestructura física en cada ubicación geográfica</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    azure: {
      title: "Microsoft Azure",
      content: (
        <div>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Microsoft Azure es la plataforma de servicios en la nube de Microsoft. Imagínalo como un enorme 
            "supermercado de tecnología" donde puedes encontrar prácticamente cualquier servicio tecnológico 
            que necesites.
          </p>
          
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Azure ofrece más de 200 productos y servicios en la nube que puedes "alquilar" según tus necesidades. 
            Es como si en lugar de comprar toda una ferretería, simplemente alquilaras las herramientas que necesitas, 
            cuando las necesitas.
          </p>
          
          <div className="bg-azure-50 dark:bg-azure-900/20 border border-azure-200 dark:border-azure-800 p-4 rounded-lg mt-4">
            <h3 className="font-medium text-azure-800 dark:text-azure-300 flex items-center mb-2">
              <BeakerIcon className="h-5 w-5 mr-2" />
              Ejemplo práctico
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Imagina que quieres crear una aplicación web para tu negocio:
            </p>
            <ul className="mt-2 space-y-1 text-gray-700 dark:text-gray-300 list-disc pl-5">
              <li>En el mundo tradicional: necesitarías comprar un servidor, configurar sistemas operativos, 
                asegurar tu red, contratar un administrador de sistemas...</li>
              <li>Con Azure: simplemente eliges el servicio "App Service", haces unos clics, y en minutos 
                tienes tu aplicación funcionando, sin preocuparte por la infraestructura detrás.</li>
            </ul>
          </div>
        </div>
      )
    }
  };
  
  // Datos para preguntas del quiz
  const questions = [
    {
      id: 1,
      question: "¿Cuál de las siguientes NO es una característica esencial de la computación en la nube según la definición del NIST?",
      options: [
        "Autoservicio bajo demanda",
        "Amplio acceso a la red",
        "Ubicación geográfica fija",
        "Elasticidad rápida",
        "Servicio medido"
      ],
      correctAnswer: 2,
      explanation: "La 'ubicación geográfica fija' NO es una característica de la computación en la nube. De hecho, es todo lo contrario - la nube permite acceder a los recursos desde cualquier ubicación. Las cinco características esenciales definidas por el NIST son: autoservicio bajo demanda, amplio acceso a la red, agrupación de recursos, elasticidad rápida y servicio medido."
    },
    {
      id: 2,
      question: "El concepto de 'elasticidad rápida' en la nube significa:",
      options: [
        "La habilidad de resistir fallos en los componentes físicos",
        "La capacidad de escalar recursos hacia arriba o hacia abajo automáticamente según la demanda",
        "La posibilidad de acceder a los recursos desde cualquier ubicación",
        "La capacidad de medir y facturar exactamente lo que se consume",
        "La posibilidad de usar servicios compartidos con otros clientes"
      ],
      correctAnswer: 1,
      explanation: "La 'elasticidad rápida' se refiere a la capacidad de la nube para escalar (aumentar o disminuir) recursos automáticamente según la demanda. Es como un acordeón que se expande cuando hay mucho tráfico y se contrae cuando hay poco, asegurando que solo pagas por lo que realmente necesitas."
    },
    {
      id: 3,
      question: "¿Qué beneficio principal obtiene una empresa al migrar a la nube en términos de inversión inicial?",
      options: [
        "Elimina por completo todos los costos operativos",
        "Transforma gastos de capital (CapEx) en gastos operativos (OpEx)",
        "Aumenta el control físico sobre los servidores",
        "Elimina la necesidad de personal de TI",
        "Garantiza el 100% de disponibilidad sin interrupciones"
      ],
      correctAnswer: 1,
      explanation: "La migración a la nube transforma los gastos de capital (CapEx) en gastos operativos (OpEx). En lugar de hacer grandes inversiones iniciales en hardware y software (CapEx), las empresas pueden pagar solo por los recursos que consumen como un gasto operativo mensual (OpEx), similar a pagar una factura de servicios públicos. Esto reduce significativamente la barrera de entrada y mejora el flujo de caja."
    }
  ];
  
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  
  const handleAnswerSelection = (questionId, optionIndex) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };
  
  const handleShowResults = () => {
    setShowResults(true);
  };
  
  const handleResetQuiz = () => {
    setSelectedAnswers({});
    setShowResults(false);
  };
  
  const calculateScore = () => {
    let correctCount = 0;
    questions.forEach(q => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        correctCount++;
      }
    });
    return correctCount;
  };
  
  return (
    <div className="space-y-8">
      {/* Tabs de Navegación */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="flex space-x-2 overflow-x-auto" aria-label="Tabs">
          {Object.keys(tabContent).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-4 border-b-2 font-medium text-sm rounded-t-lg ${
                activeTab === tab
                  ? 'border-azure-500 text-azure-600 dark:text-azure-400 dark:border-azure-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              {tabContent[tab].title}
            </button>
          ))}
        </nav>
      </div>
      
      {/* Contenido del Tab Activo */}
      <div className="mt-6">
        {tabContent[activeTab].content}
      </div>
      
      {/* Características de la Nube - Tarjetas Interactivas */}
      {activeTab === 'concept' && (
        <section className="mt-12">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
            <PuzzlePieceIcon className="h-6 w-6 mr-2 text-azure-500" />
            Características esenciales de la nube
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {cloudCards.map((card) => (
              <div 
                key={card.id}
                className={`
                  bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 
                  shadow-sm transition-all duration-300 
                  ${hoveredCard === card.id ? 'shadow-md transform -translate-y-1' : ''}
                `}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex items-start">
                  <div className={`
                    p-2 rounded-md mr-4 transition-colors duration-300
                    ${hoveredCard === card.id ? 'bg-azure-100 dark:bg-azure-900/40' : 'bg-gray-100 dark:bg-gray-700'}
                  `}>
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white mb-1">{card.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {card.description}
                    </p>
                    
                    {hoveredCard === card.id && (
                      <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-300">
                        <p>
                          <span className="font-medium text-azure-600 dark:text-azure-400">Ejemplo: </span>
                          {card.example}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
      
      {/* Definición oficial (con botón modal) */}
      <section className="bg-gray-50 dark:bg-gray-800/60 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-start">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">¿Y qué dice la definición oficial?</h2>
          <button 
            onClick={() => setShowDefinitionModal(true)}
            className="text-azure-600 dark:text-azure-400 hover:text-azure-800 dark:hover:text-azure-300 flex items-center text-sm"
          >
            <QuestionMarkCircleIcon className="h-5 w-5 mr-1" />
            Ver definición NIST
          </button>
        </div>
        
        <p className="text-gray-700 dark:text-gray-300">
          El Instituto Nacional de Estándares y Tecnología (NIST) de EE.UU. creó la definición oficial 
          de computación en la nube que todos usan como referencia. Aunque suena técnica, básicamente dice 
          que la nube es un modelo que te permite acceder a recursos compartidos (como servidores) a través 
          de internet, de forma sencilla y bajo demanda.
        </p>
        
        {/* Modal para la definición NIST */}
        {showDefinitionModal && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Definición oficial del NIST</h3>
                  <button 
                    onClick={() => setShowDefinitionModal(false)}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <blockquote className="italic text-gray-700 dark:text-gray-300 border-l-4 border-azure-400 pl-4 py-2 mb-4">
                  "La computación en la nube es un modelo para habilitar el acceso en red ubicuo, conveniente y bajo demanda 
                  a un conjunto compartido de recursos informáticos configurables (por ejemplo, redes, servidores, 
                  almacenamiento, aplicaciones y servicios) que pueden aprovisionarse y liberarse rápidamente con un 
                  mínimo esfuerzo de gestión o interacción con el proveedor de servicios."
                </blockquote>
                
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">En palabras sencillas:</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  La nube es como un autoservicio tecnológico: accedes por internet a recursos compartidos 
                  (como servidores y aplicaciones), los usas solo cuando los necesitas, y pagas solo por lo que usas.
                </p>
                
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Las 5 características esenciales según el NIST:</h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-azure-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Autoservicio bajo demanda:</strong> Obtienes lo que necesitas cuando lo necesitas, sin intermediarios.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-azure-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Amplio acceso a la red:</strong> Accesible desde cualquier lugar con conexión a internet.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-azure-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Agrupación de recursos:</strong> Los recursos se comparten entre muchos usuarios para mayor eficiencia.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-azure-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Elasticidad rápida:</strong> Escala automáticamente según tus necesidades, hacia arriba o hacia abajo.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-azure-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Servicio medido:</strong> Pagas exactamente por lo que usas, como con la electricidad.</span>
                  </li>
                </ul>
                
                <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                    <span>Fuente: Instituto Nacional de Estándares y Tecnología (NIST)</span>
                  </div>
                  <a 
                    href="https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-azure-600 dark:text-azure-400 hover:text-azure-800 dark:hover:text-azure-300 inline-flex items-center text-sm"
                  >
                    Ver documento original
                    <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
      
      {/* Quiz Section */}
      <section className="mt-10 border-t border-gray-200 dark:border-gray-700 pt-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Pon a prueba tus conocimientos</h2>
          <button 
            onClick={() => setShowQuiz(!showQuiz)}
            className="px-4 py-2 bg-azure-100 dark:bg-azure-900/40 text-azure-700 dark:text-azure-300 rounded-md hover:bg-azure-200 dark:hover:bg-azure-900/60 transition-colors"
          >
            {showQuiz ? 'Ocultar preguntas' : 'Mostrar preguntas'}
          </button>
        </div>
        
        {showQuiz && (
          <div className="space-y-6">
            {questions.map((q) => (
              <div key={q.id} className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">
                  {q.id}. {q.question}
                </h3>
                <div className="space-y-2">
                  {q.options.map((option, index) => (
                    <label 
                      key={index} 
                      className={`
                        flex items-center space-x-3 p-3 rounded cursor-pointer transition-colors
                        ${selectedAnswers[q.id] === index ? 
                          selectedAnswers[q.id] === q.correctAnswer ?
                            'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900' :
                            'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900'
                          : 'hover:bg-gray-50 dark:hover:bg-gray-700 border border-transparent'
                        }
                      `}
                    >
                      <input
                        type="radio"
                        name={`question-${q.id}`}
                        value={index}
                        checked={selectedAnswers[q.id] === index}
                        onChange={() => handleAnswerSelection(q.id, index)}
                        className="h-4 w-4 text-azure-600 dark:text-azure-400 focus:ring-azure-500 dark:focus:ring-azure-400"
                        disabled={showResults}
                      />
                      <span 
                        className={`
                          text-gray-700 dark:text-gray-300
                          ${selectedAnswers[q.id] === index && index === q.correctAnswer ? 'text-green-700 dark:text-green-300 font-medium' : ''}
                          ${selectedAnswers[q.id] === index && index !== q.correctAnswer ? 'text-red-700 dark:text-red-300 font-medium' : ''}
                        `}
                      >
                        {option}
                      </span>
                      
                      {selectedAnswers[q.id] === index && selectedAnswers[q.id] === q.correctAnswer && (
                        <CheckCircleIcon className="h-5 w-5 text-green-500" />
                      )}
                      
                      {selectedAnswers[q.id] === index && selectedAnswers[q.id] !== q.correctAnswer && (
                        <XCircleIcon className="h-5 w-5 text-red-500" />
                      )}
                    </label>
                  ))}
                </div>
                
                {selectedAnswers[q.id] !== undefined && (
                  <div className={`mt-4 p-4 rounded ${
                    selectedAnswers[q.id] === q.correctAnswer ? 
                      'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300' : 
                      'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300'
                  }`}>
                    <p className="font-medium mb-1">
                      {selectedAnswers[q.id] === q.correctAnswer 
                        ? '¡Correcto!' 
                        : `Incorrecto. La respuesta correcta es: ${q.options[q.correctAnswer]}`
                      }
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">{q.explanation}</p>
                  </div>
                )}
              </div>
            ))}
            
            <div className="flex justify-center">
              {Object.keys(selectedAnswers).length === questions.length && !showResults ? (
                <button
                  onClick={handleShowResults}
                  className="px-6 py-2 bg-azure-600 text-white rounded-md hover:bg-azure-700 transition-colors"
                >
                  Ver resultados
                </button>
              ) : showResults ? (
                <div className="text-center">
                  <p className="text-xl font-medium mb-3 text-gray-800 dark:text-gray-200">
                    Tu puntuación: {calculateScore()} de {questions.length}
                  </p>
                  <button
                    onClick={handleResetQuiz}
                    className="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                  >
                    Reintentar
                  </button>
                </div>
              ) : (
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Responde todas las preguntas para ver tus resultados
                </p>
              )}
            </div>
          </div>
        )}
      </section>
      
      {/* Información relevante para el examen */}
      <section className="bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded-lg border border-yellow-200 dark:border-yellow-900/50 mt-8">
        <h2 className="text-lg font-semibold text-yellow-800 dark:text-yellow-300 flex items-center mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
          </svg>
          Importante para el examen AZ-900
        </h2>
        <ul className="space-y-2 text-yellow-800 dark:text-yellow-300">
          <li className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 flex-shrink-0">
              <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
            </svg>
            <span>Las preguntas del examen pueden pedir que identifiques las 5 características principales de la computación en la nube según NIST: autoservicio bajo demanda, amplio acceso a la red, agrupación de recursos, elasticidad rápida y servicio medido.</span>
          </li>
          <li className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 flex-shrink-0">
              <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
            </svg>
            <span>Comprende cómo la computación en la nube cambia el enfoque de capital expenditure (CapEx) a operational expenditure (OpEx) - es decir, pasar de grandes inversiones iniciales a gastos mensuales operativos.</span>
          </li>
          <li className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 flex-shrink-0">
              <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
            </svg>
            <span>En el examen, deberás identificar ejemplos concretos de cada una de las características de la nube en situaciones reales y entender cómo Azure implementa estos conceptos.</span>
          </li>
        </ul>
      </section>
    </div>
  );
}