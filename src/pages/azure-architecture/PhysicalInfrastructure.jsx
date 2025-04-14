import React, { useState } from 'react';
import {
  MapIcon,
  GlobeAmericasIcon,
  BuildingOfficeIcon,
  ServerIcon,
  QuestionMarkCircleIcon,
  CloudIcon,
  CheckCircleIcon,
  ArrowPathIcon,
  ShieldCheckIcon,
  ExclamationTriangleIcon,
  BoltIcon,
  FingerPrintIcon,
  GlobeAltIcon,
  XCircleIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline';

// Datos para la pestaña de regiones
const regionsData = [
  {
    continent: "América del Norte",
    regions: [
      "Este de EE. UU. (Virginia)",
      "Este de EE. UU. 2 (Virginia)",
      "Centro de EE. UU. (Iowa)",
      "Centro-sur de EE. UU. (Texas)",
      "Oeste de EE. UU. (California)",
      "Oeste de EE. UU. 2 (Washington)",
      "Centro de Canadá (Toronto)",
      "Este de Canadá (Quebec)"
    ]
  },
  {
    continent: "Europa",
    regions: [
      "Norte de Europa (Irlanda)",
      "Oeste de Europa (Países Bajos)",
      "Francia Central (París)",
      "Sur de Reino Unido (Londres)",
      "Oeste de Reino Unido (Cardiff)",
      "Alemania del Oeste Central"
    ]
  },
  {
    continent: "Asia Pacífico",
    regions: [
      "Este de Asia (Hong Kong)",
      "Sudeste de Asia (Singapur)",
      "Este de Japón (Tokio)",
      "Oeste de Japón (Osaka)",
      "Australia Central (Canberra)",
      "Australia Este (Nueva Gales del Sur)"
    ]
  },
  {
    continent: "América Latina",
    regions: [
      "Brasil Sur (São Paulo)"
    ]
  }
];

const regionalPairs = [
  { primary: "Este de EE. UU.", secondary: "Oeste de EE. UU." },
  { primary: "Este de EE. UU. 2", secondary: "Centro de EE. UU." },
  { primary: "Norte de Europa", secondary: "Oeste de Europa" },
  { primary: "Sudeste de Asia", secondary: "Este de Asia" },
  { primary: "Este de Australia", secondary: "Sudeste de Australia" },
  { primary: "Centro de Canadá", secondary: "Este de Canadá" }
];

export default function PhysicalInfrastructure() {
  const [activeTab, setActiveTab] = useState('descripcion');
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showExplanations, setShowExplanations] = useState({});

  // Datos para el mapa de regiones
  const regionesPorGeografia = {
    america: [
      { nombre: 'Oeste de EE. UU.', clave: 'westus' },
      { nombre: 'Oeste 2 de EE. UU.', clave: 'westus2' },
      { nombre: 'Oeste 3 de EE. UU.', clave: 'westus3' },
      { nombre: 'Centro de EE. UU.', clave: 'centralus' },
      { nombre: 'Centro norte de EE. UU.', clave: 'northcentralus' },
      { nombre: 'Centro sur de EE. UU.', clave: 'southcentralus' },
      { nombre: 'Este de EE. UU.', clave: 'eastus' },
      { nombre: 'Este 2 de EE. UU.', clave: 'eastus2' },
      { nombre: 'Canadá central', clave: 'canadacentral' },
      { nombre: 'Canadá este', clave: 'canadaeast' },
      { nombre: 'Brasil sur', clave: 'brazilsouth' },
    ],
    europa: [
      { nombre: 'Norte de Europa', clave: 'northeurope' },
      { nombre: 'Oeste de Europa', clave: 'westeurope' },
      { nombre: 'Reino Unido sur', clave: 'uksouth' },
      { nombre: 'Reino Unido oeste', clave: 'ukwest' },
      { nombre: 'Francia central', clave: 'francecentral' },
      { nombre: 'Francia sur', clave: 'francesouth' },
      { nombre: 'Suiza norte', clave: 'switzerlandnorth' },
      { nombre: 'Suiza oeste', clave: 'switzerlandwest' },
      { nombre: 'Alemania centro-oeste', clave: 'germanywestcentral' },
      { nombre: 'Noruega este', clave: 'norwayeast' },
    ],
    asia: [
      { nombre: 'Este de Asia', clave: 'eastasia' },
      { nombre: 'Sudeste de Asia', clave: 'southeastasia' },
      { nombre: 'Este de Japón', clave: 'japaneast' },
      { nombre: 'Oeste de Japón', clave: 'japanwest' },
      { nombre: 'Centro de la India', clave: 'centralindia' },
      { nombre: 'Sur de la India', clave: 'southindia' },
      { nombre: 'Oeste de la India', clave: 'westindia' },
      { nombre: 'Corea central', clave: 'koreacentral' },
      { nombre: 'Corea del sur', clave: 'koreasouth' },
      { nombre: 'Australia este', clave: 'australiaeast' },
      { nombre: 'Australia sureste', clave: 'australiasoutheast' },
    ],
    oriente: [
      { nombre: 'Centro de Emiratos Árabes Unidos', clave: 'uaecentral' },
      { nombre: 'Norte de Emiratos Árabes Unidos', clave: 'uaenorth' },
      { nombre: 'Sudáfrica norte', clave: 'southafricanorth' },
      { nombre: 'Sudáfrica oeste', clave: 'southafricawest' },
    ]
  };

  // Datos para pares regionales
  const paresRegionales = [
    { region1: 'Este de EE. UU.', region2: 'Oeste de EE. UU.', distancia: 'Aprox. 3.200 km' },
    { region1: 'Este 2 de EE. UU.', region2: 'Centro de EE. UU.', distancia: 'Aprox. 1.500 km' },
    { region1: 'Norte de Europa', region2: 'Oeste de Europa', distancia: 'Aprox. 1.600 km' },
    { region1: 'Sudeste de Asia', region2: 'Este de Asia', distancia: 'Aprox. 2.800 km' },
    { region1: 'Centro de la India', region2: 'Sur de la India', distancia: 'Aprox. 800 km' },
  ];

  // Datos para preguntas del quiz
  const quizQuestions = [
    {
      id: 1,
      question: '¿Qué es una región de Azure?',
      options: [
        'Un edificio único donde se alojan los servidores de Azure',
        'Un conjunto de centros de datos conectados por una red de baja latencia',
        'Un país o territorio geopolítico donde Azure está disponible',
        'Una zona específica dentro de un centro de datos'
      ],
      correctAnswer: 1,
      explanation: 'Una región de Azure es un conjunto de centros de datos implementados dentro de un perímetro definido por latencia y conectados a través de una red regional dedicada de baja latencia.'
    },
    {
      id: 2,
      question: '¿Qué son las zonas de disponibilidad en Azure?',
      options: [
        'Áreas geográficas distintas dentro de un país',
        'Ubicaciones físicamente separadas dentro de una región de Azure',
        'Diferentes niveles de servicio ofrecidos por Microsoft',
        'Regiones especiales con precios reducidos'
      ],
      correctAnswer: 1,
      explanation: 'Las zonas de disponibilidad son ubicaciones físicamente separadas dentro de una región de Azure. Cada zona de disponibilidad consta de uno o más centros de datos equipados con alimentación, refrigeración y redes independientes.'
    },
    {
      id: 3,
      question: '¿Cuál es el propósito principal de los pares regionales en Azure?',
      options: [
        'Reducir los costos de los servicios de Azure',
        'Proporcionar acceso a diferentes servicios de Azure',
        'Garantizar la residencia de datos dentro de un país',
        'Proporcionar aislamiento para la recuperación ante desastres'
      ],
      correctAnswer: 3,
      explanation: 'Los pares regionales de Azure están diseñados para proporcionar aislamiento para la recuperación ante desastres. Las regiones emparejadas están separadas por al menos 480 km (300 millas) para resistir desastres naturales, guerras, etc.'
    },
    {
      id: 4,
      question: '¿Qué es una geografía de Azure?',
      options: [
        'Otra palabra para referirse a una región de Azure',
        'Un área que contiene múltiples regiones de Azure',
        'Un centro de datos específico en la infraestructura de Azure',
        'La ubicación física exacta de los servidores de Azure'
      ],
      correctAnswer: 1,
      explanation: 'Una geografía de Azure es un área del mundo que contiene al menos una región de Azure. Las geografías tienen en cuenta límites de residencia de datos y cumplimiento normativo.'
    },
    {
      id: 5,
      question: '¿Cuál de las siguientes afirmaciones sobre la infraestructura física de Azure es CORRECTA?',
      options: [
        'Todas las regiones de Azure tienen zonas de disponibilidad',
        'Los centros de datos de Azure están todos ubicados en los Estados Unidos',
        'Azure tiene más de 60 regiones en todo el mundo',
        'Los pares regionales siempre están en el mismo país'
      ],
      correctAnswer: 2,
      explanation: 'Microsoft Azure tiene más de 60 regiones en todo el mundo, lo que proporciona una amplia cobertura global. No todas las regiones tienen zonas de disponibilidad, los centros de datos están distribuidos globalmente, y los pares regionales pueden cruzar fronteras nacionales.'
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
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Infraestructura Física de Azure</h2>
        
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
              <CloudIcon className="h-5 w-5 mr-2" />
              Descripción
            </button>
            <button
              onClick={() => setActiveTab('regiones')}
              className={`${
                activeTab === 'regiones'
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 hover:border-gray-300 dark:hover:text-gray-300'
              } whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm flex items-center`}
            >
              <MapIcon className="h-5 w-5 mr-2" />
              Regiones
            </button>
            <button
              onClick={() => setActiveTab('zonas')}
              className={`${
                activeTab === 'zonas'
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 hover:border-gray-300 dark:hover:text-gray-300'
              } whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm flex items-center`}
            >
              <BuildingOfficeIcon className="h-5 w-5 mr-2" />
              Zonas
            </button>
            <button
              onClick={() => setActiveTab('datos')}
              className={`${
                activeTab === 'datos'
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 hover:border-gray-300 dark:hover:text-gray-300'
              } whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm flex items-center`}
            >
              <ServerIcon className="h-5 w-5 mr-2" />
              Datos
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

        {/* Contenido para cada pestaña */}
        <div className="mt-6">
          {activeTab === 'descripcion' && (
            <div className="space-y-6">
              <div className="bg-blue-50 dark:bg-gray-700 p-5 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-2">¿Qué es la infraestructura física de Azure?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  La infraestructura física de Azure es la red global de centros de datos y equipamiento que Microsoft ha construido por todo el mundo para dar soporte a sus servicios en la nube. Es como una red de "ciudades digitales" donde viven todos los servicios y aplicaciones que utilizan los clientes.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-5">
                  <div className="flex items-center mb-4">
                    <GlobeAmericasIcon className="h-8 w-8 text-blue-500" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white ml-3">Cobertura global</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Azure tiene más de 60 regiones en todo el mundo, más que cualquier otro proveedor de la nube. Esto permite a las organizaciones ejecutar sus aplicaciones cerca de sus usuarios, mejorando la velocidad y la experiencia.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-5">
                  <div className="flex items-center mb-4">
                    <CheckCircleIcon className="h-8 w-8 text-blue-500" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white ml-3">Alta disponibilidad</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Con zonas de disponibilidad y pares regionales, Azure está diseñado para mantener tus aplicaciones funcionando incluso cuando ocurren desastres naturales o fallos técnicos importantes.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-5">
                  <div className="flex items-center mb-4">
                    <ShieldCheckIcon className="h-8 w-8 text-blue-500" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white ml-3">Soberanía de datos</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    La estructura geográfica de Azure permite a las empresas cumplir con los requisitos de residencia y soberanía de datos, asegurando que la información permanezca dentro de los límites legales requeridos.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-5">
                  <div className="flex items-center mb-4">
                    <ArrowPathIcon className="h-8 w-8 text-blue-500" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white ml-3">Recuperación ante desastres</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Los pares regionales de Azure están diseñados específicamente para la recuperación ante desastres, permitiendo la replicación de recursos entre regiones separadas por cientos de kilómetros.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Componentes principales de la infraestructura física</h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-5 w-5 text-blue-500 mr-2">🏙️</span>
                    <span><strong>Regiones:</strong> Áreas geográficas que contienen uno o más centros de datos cercanos entre sí. Piensa en ellas como "ciudades digitales".</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-5 w-5 text-blue-500 mr-2">🏢</span>
                    <span><strong>Zonas de disponibilidad:</strong> Centros de datos físicamente separados dentro de una región, como "barrios" dentro de una ciudad digital.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-5 w-5 text-blue-500 mr-2">🖥️</span>
                    <span><strong>Centros de datos:</strong> Instalaciones físicas que albergan servidores, sistemas de almacenamiento y equipos de red.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-5 w-5 text-blue-500 mr-2">🤝</span>
                    <span><strong>Pares regionales:</strong> Regiones conectadas para recuperación ante desastres, como "ciudades hermanas" que se ayudan mutuamente.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-5 w-5 text-blue-500 mr-2">🗺️</span>
                    <span><strong>Geografías:</strong> Áreas definidas que contienen dos o más regiones de Azure, generalmente coinciden con países o continentes.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-indigo-50 dark:bg-gray-700 border-l-4 border-indigo-500 p-5 rounded-r-lg">
                <h3 className="text-lg font-semibold text-indigo-700 dark:text-indigo-300 mb-2">Para el examen AZ-900</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Es importante comprender la diferencia entre regiones, zonas de disponibilidad y geografías, así como sus propósitos. Recuerda que las regiones están compuestas por centros de datos, las zonas son centros de datos independientes dentro de una región, y las geografías son agrupaciones de regiones que respetan límites de residencia de datos.
                </p>
              </div>
            </div>
          )}
          
          {activeTab === 'regiones' && (
            <div className="space-y-6">
              <div className="bg-blue-50 dark:bg-gray-700 p-5 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-2">Regiones de Azure</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Una región de Azure es un área geográfica que contiene al menos un centro de datos, aunque típicamente contiene varios centros de datos cercanos y conectados mediante una red de baja latencia. Azure cuenta con más de 60 regiones disponibles en más de 140 países, lo que proporciona flexibilidad para implementar aplicaciones donde se necesiten.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Distribución global de regiones</h3>
                <div className="border dark:border-gray-600 rounded-lg p-3 mb-4 bg-gray-50 dark:bg-gray-800">
                  <div className="text-center">
                    {/* Iframe del mapa oficial de Microsoft */}
                    <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden">
                      <iframe 
                        src="https://datacenters.microsoft.com/globe/explore" 
                        className="w-full h-full border-0"
                        title="Microsoft Azure Datacenter Map"
                        loading="lazy"
                        allow="fullscreen"
                      ></iframe>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-2 text-center">
                    <a href="https://datacenters.microsoft.com/globe/explore" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      Ver mapa interactivo completo
                    </a>
                  </p>
                </div>

                <h4 className="text-md font-semibold text-gray-800 dark:text-white mb-2">Regiones principales por continente:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                  {regionsData.map((region, index) => (
                    <div key={index} className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                      <h5 className="text-md font-semibold text-blue-600 dark:text-blue-400">{region.continent}</h5>
                      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm mt-2">
                        {region.regions.map((r, idx) => (
                          <li key={idx}>{r}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Pares regionales</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Los pares regionales son regiones de Azure que se conectan directamente entre sí a través de la red de Microsoft y están separadas por al menos 500 km. Esto proporciona resiliencia geográfica para los servicios de Azure.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="text-md font-semibold text-gray-800 dark:text-white mb-3">¿Por qué son importantes?</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Proporcionan replicación de datos automática para algunos servicios</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Priorizan la recuperación de una región en caso de interrupciones amplias</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Las actualizaciones se implementan secuencialmente para minimizar el tiempo de inactividad</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Los datos siguen residiendo dentro de la misma geografía para cumplir con requisitos legales</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="text-md font-semibold text-gray-800 dark:text-white mb-3">Ejemplos de pares regionales</h4>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-700">
                          <tr>
                            <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Región primaria</th>
                            <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Par regional</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                          {regionalPairs.map((pair, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-700' : 'bg-white dark:bg-gray-800'}>
                              <td className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300">{pair.primary}</td>
                              <td className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300">{pair.secondary}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-gray-700 border-l-4 border-yellow-500 p-5 rounded-r-lg">
                <h3 className="flex items-center text-lg font-semibold text-yellow-700 dark:text-yellow-300 mb-2">
                  <ExclamationTriangleIcon className="h-5 w-5 mr-2" />
                  Consideraciones para elegir una región
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-5 w-5 text-yellow-500 mr-2">📏</span>
                    <span><strong>Ubicación:</strong> Elige regiones cercanas a tus usuarios para minimizar la latencia.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-5 w-5 text-yellow-500 mr-2">📜</span>
                    <span><strong>Cumplimiento:</strong> Considera los requisitos de residencia y soberanía de datos.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-5 w-5 text-yellow-500 mr-2">💰</span>
                    <span><strong>Precios:</strong> Los costos pueden variar según la región.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-5 w-5 text-yellow-500 mr-2">🧩</span>
                    <span><strong>Disponibilidad de servicios:</strong> No todos los servicios están disponibles en todas las regiones.</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
          
          {activeTab === 'zonas' && (
            <div className="space-y-6">
              <div className="bg-blue-50 dark:bg-gray-700 p-5 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-2">Zonas de disponibilidad</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Las zonas de disponibilidad son ubicaciones físicamente separadas dentro de una región de Azure. Cada zona de disponibilidad está compuesta por uno o más centros de datos equipados con alimentación, refrigeración y redes independientes. Están diseñadas para proteger las aplicaciones y datos contra fallos en el centro de datos.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-5">
                  <div className="flex items-center mb-4">
                    <BoltIcon className="h-8 w-8 text-blue-500" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white ml-3">Alta disponibilidad</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Para garantizar la alta disponibilidad, se recomienda implementar aplicaciones críticas en al menos tres zonas dentro de una región. Esto proporciona una disponibilidad del 99,99% para las máquinas virtuales.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-5">
                  <div className="flex items-center mb-4">
                    <FingerPrintIcon className="h-8 w-8 text-blue-500" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white ml-3">Separación física</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Las zonas de disponibilidad están físicamente separadas para evitar que un único evento, como un incendio o inundación, afecte a más de una zona a la vez. La distancia mínima entre zonas es de 1.6 km.
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">¿Cómo funcionan las zonas de disponibilidad?</h3>
                
                <div className="border dark:border-gray-600 rounded-lg p-4 mb-5 bg-gray-50 dark:bg-gray-800">
                  <div className="flex flex-col md:flex-row items-center justify-center">
                    <div className="flex flex-col items-center mb-4 md:mb-0 md:mr-8">
                      <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-2">
                        <span className="text-xl font-bold text-blue-600 dark:text-blue-300">Z1</span>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-300">Zona 1</span>
                    </div>
                    <div className="flex flex-col items-center mb-4 md:mb-0 md:mr-8">
                      <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-2">
                        <span className="text-xl font-bold text-blue-600 dark:text-blue-300">Z2</span>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-300">Zona 2</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-2">
                        <span className="text-xl font-bold text-blue-600 dark:text-blue-300">Z3</span>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-300">Zona 3</span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-4 text-center">
                    Una región de Azure con tres zonas de disponibilidad separadas
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="text-md font-semibold text-gray-800 dark:text-white mb-3">Servicios compatibles con zonas</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    No todos los servicios de Azure admiten zonas de disponibilidad. Los servicios se clasifican en tres categorías:
                  </p>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold">Servicios zonales:</span> Recursos vinculados a una zona específica (VMs, discos, etc.)
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold">Servicios redundantes de zona:</span> Replican automáticamente entre zonas (Azure SQL, Storage)
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold">Servicios no regionales:</span> Servicios que no dependen de una región específica
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-indigo-50 dark:bg-gray-700 border-l-4 border-indigo-500 p-5 rounded-r-lg">
                <h3 className="text-lg font-semibold text-indigo-700 dark:text-indigo-300 mb-2">Ejemplo práctico</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Imagina que tienes una aplicación web crítica. Para garantizar su alta disponibilidad:
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-5 w-5 text-indigo-500 mr-2">1️⃣</span>
                    <span>Implementas máquinas virtuales en la Zona 1, Zona 2 y Zona 3</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-5 w-5 text-indigo-500 mr-2">2️⃣</span>
                    <span>Utilizas un balanceador de carga que distribuye el tráfico entre las tres zonas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-5 w-5 text-indigo-500 mr-2">3️⃣</span>
                    <span>Utilizas Azure SQL Database con redundancia de zona para tus datos</span>
                  </li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mt-3">
                  Si la Zona 1 falla completamente, el tráfico se redirige automáticamente a las VMs en las Zonas 2 y 3, y tu aplicación sigue funcionando.
                </p>
              </div>
            </div>
          )}
          
          {activeTab === 'datos' && (
            <div className="space-y-6">
              <div className="bg-blue-50 dark:bg-gray-700 p-5 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-2">Residencia y soberanía de datos</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  La infraestructura física de Azure está organizada en geografías que ayudan a mantener los requisitos de residencia, soberanía, cumplimiento normativo y resiliencia de datos. Esta organización garantiza que los datos y aplicaciones cumplan con las políticas específicas sobre almacenamiento y replicación de datos.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-5">
                  <div className="flex items-center mb-4">
                    <GlobeAltIcon className="h-8 w-8 text-blue-500" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white ml-3">Geografías</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Una geografía es un área del mundo que contiene al menos una región de Azure. Las geografías están definidas teniendo en cuenta:
                  </p>
                  <ul className="mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-5 w-5 text-blue-500 mr-2">•</span>
                      <span>Los límites políticos y de residencia de datos</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-5 w-5 text-blue-500 mr-2">•</span>
                      <span>Zonas horarias comunes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-5 w-5 text-blue-500 mr-2">•</span>
                      <span>Dependencias entre regiones</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">
                    Ejemplos: Estados Unidos, Europa, Asia Pacífico, etc.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-5">
                  <div className="flex items-center mb-4">
                    <ShieldCheckIcon className="h-8 w-8 text-blue-500" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white ml-3">Residencia de datos</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    La residencia de datos se refiere a la ubicación física donde se almacenan los datos. Muchos países exigen que ciertos datos se almacenen dentro de sus fronteras.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">
                    Azure permite seleccionar regiones específicas para desplegar recursos, asegurando que los datos residan en ubicaciones que cumplan con los requisitos regulatorios.
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Soberanía de datos y nubes soberanas</h3>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Algunos países o regiones tienen requisitos estrictos sobre quién puede acceder a los datos almacenados dentro de sus fronteras. Para abordar estas necesidades, Azure ofrece nubes soberanas:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="text-md font-semibold text-gray-800 dark:text-white mb-2">Azure Government (EE.UU.)</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Diseñada para agencias gubernamentales y contratistas de EE.UU. Físicamente aislada de la nube pública de Azure, operada por personal con autorización de seguridad estadounidense.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="text-md font-semibold text-gray-800 dark:text-white mb-2">Azure China</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Operada por 21Vianet en China, físicamente separada de la nube global de Azure. Cumple con las regulaciones chinas para proveedores de servicios en la nube.
                    </p>
                  </div>
                </div>
                
                <div className="bg-yellow-50 dark:bg-gray-800 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                  <h4 className="flex items-center text-md font-semibold text-yellow-700 dark:text-yellow-300 mb-2">
                    <ExclamationTriangleIcon className="h-5 w-5 mr-2" />
                    Consideraciones importantes
                  </h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Las nubes soberanas tienen su propio portal de administración y APIs distintas</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>No todos los servicios de Azure están disponibles en las nubes soberanas</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Pueden tener precios diferentes a los de la nube pública global</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-indigo-50 dark:bg-gray-700 border-l-4 border-indigo-500 p-5 rounded-r-lg">
                <h3 className="text-lg font-semibold text-indigo-700 dark:text-indigo-300 mb-2">Para el examen AZ-900</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Recuerda que las geografías contienen regiones, y las regiones contienen zonas de disponibilidad. Las geografías están diseñadas para cumplir con los requisitos de residencia y soberanía de datos, mientras que las regiones proporcionan baja latencia y las zonas de disponibilidad ofrecen alta disponibilidad.
                </p>
              </div>
            </div>
          )}
          
          {activeTab === 'quiz' && (
            <div className="space-y-8">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-100 dark:border-blue-900/50">
                <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-4">Pon a prueba tus conocimientos</h2>
                <p className="text-gray-700 dark:text-gray-300">
                  Responde estas preguntas para verificar tu comprensión sobre la infraestructura física de Azure.
                  Estas preguntas son similares a las que podrías encontrar en el examen AZ-900.
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
                    <span className="text-gray-700 dark:text-gray-300">Las regiones de Azure son conjuntos de centros de datos conectados en red dentro de un perímetro de latencia definido.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Las zonas de disponibilidad son centros de datos físicamente separados dentro de una región para mayor resiliencia.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Los pares regionales son regiones conectadas para proporcionar aislamiento para recuperación ante desastres.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Las geografías de Azure ayudan a mantener los requisitos de residencia, soberanía y cumplimiento normativo de datos.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Azure tiene nubes soberanas (Azure Government, Azure China) con aislamiento físico para cumplir requisitos regulatorios.</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 