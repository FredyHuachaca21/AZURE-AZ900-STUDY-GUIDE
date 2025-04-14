// Ruta: /src/pages/cloud-concepts/PricingModels.jsx
import { useState } from 'react';
import { 
  CurrencyDollarIcon, 
  ScaleIcon, 
  ArrowTrendingUpIcon,
  LightBulbIcon, 
  ArrowRightIcon,
  CheckCircleIcon,
  XCircleIcon,
  ClockIcon,
  BuildingOfficeIcon,
  CloudIcon
} from '@heroicons/react/24/outline';

export default function ConsumptionModel() {
  const [activeTab, setActiveTab] = useState('concept');
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showExplanations, setShowExplanations] = useState({});

  // Preguntas para el quiz
  const quizQuestions = [
    {
      id: 1,
      question: "¿Cuál de los siguientes es un ejemplo de gasto de capital (CapEx)?",
      options: [
        "Suscripción mensual a Office 365",
        "Compra de servidores para un centro de datos",
        "Pago por el consumo de máquinas virtuales en Azure",
        "Contratación de personal de soporte técnico"
      ],
      correctAnswer: 1,
      explanation: "La compra de servidores para un centro de datos es un ejemplo de gasto de capital (CapEx), ya que implica una inversión inicial grande en activos físicos que se deprecian con el tiempo."
    },
    {
      id: 2,
      question: "En el modelo basado en consumo de la nube, ¿cuál es una de las principales ventajas?",
      options: [
        "Los costos son predecibles y fijos cada mes",
        "Se requiere una gran inversión inicial",
        "Solo se paga por los recursos que se utilizan",
        "El cliente es responsable del mantenimiento de los servidores"
      ],
      correctAnswer: 2,
      explanation: "Una de las principales ventajas del modelo basado en consumo es que solo se paga por los recursos que se utilizan realmente, lo que permite una mayor flexibilidad y eficiencia en costos."
    }
  ];

  // Función para manejar selección de respuestas
  const handleOptionClick = (questionId, optionIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: optionIndex
    });
  };

  // Función para mostrar/ocultar explicaciones
  const toggleExplanation = (questionId) => {
    setShowExplanations({
      ...showExplanations,
      [questionId]: !showExplanations[questionId]
    });
  };

  // Contenido de las pestañas
  const tabContents = {
    concept: (
      <div className="space-y-6">
        <div className="bg-azure-50 dark:bg-azure-900/20 p-6 rounded-lg border border-azure-100 dark:border-azure-900/50">
          <h2 className="text-xl font-semibold text-azure-700 dark:text-azure-400 mb-4 flex items-center">
            <CurrencyDollarIcon className="h-6 w-6 mr-2" />
            Modelo basado en el consumo
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            La informática en la nube utiliza un <strong>modelo de precios basado en el consumo</strong>, 
            lo que significa que solo pagas por los recursos informáticos que utilizas. Este enfoque es 
            similar a cómo pagas por los servicios públicos como la electricidad o el agua en tu hogar.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            En lugar de comprar y mantener servidores físicos, almacenamiento y redes, alquilas estos 
            recursos según los necesites y los devuelves cuando terminas. El proveedor de la nube se 
            encarga de toda la infraestructura física y tú solo pagas por lo que usas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3 flex items-center">
              <BuildingOfficeIcon className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2" />
              Gastos de Capital (CapEx)
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Gastos por adelantado, únicos, para comprar o asegurar recursos tangibles.
            </p>
            <div className="mt-3 space-y-2">
              <div className="flex items-start">
                <ArrowRightIcon className="h-4 w-4 text-gray-500 dark:text-gray-400 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-400">Construcción de un centro de datos</span>
              </div>
              <div className="flex items-start">
                <ArrowRightIcon className="h-4 w-4 text-gray-500 dark:text-gray-400 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-400">Compra de servidores</span>
              </div>
              <div className="flex items-start">
                <ArrowRightIcon className="h-4 w-4 text-gray-500 dark:text-gray-400 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-400">Licencias de software permanentes</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3 flex items-center">
              <CloudIcon className="h-5 w-5 text-azure-500 dark:text-azure-400 mr-2" />
              Gastos Operativos (OpEx)
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Gastos en servicios o productos a lo largo del tiempo.
            </p>
            <div className="mt-3 space-y-2">
              <div className="flex items-start">
                <ArrowRightIcon className="h-4 w-4 text-azure-500 dark:text-azure-400 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-400">Suscripción a servicios en la nube</span>
              </div>
              <div className="flex items-start">
                <ArrowRightIcon className="h-4 w-4 text-azure-500 dark:text-azure-400 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-400">Alquiler de equipos</span>
              </div>
              <div className="flex items-start">
                <ArrowRightIcon className="h-4 w-4 text-azure-500 dark:text-azure-400 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-400">Licencias de pago por uso</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 dark:border-blue-700 p-4 rounded-r-md">
          <div className="flex">
            <LightBulbIcon className="h-6 w-6 text-blue-500 dark:text-blue-400 mr-3 flex-shrink-0 mt-1" />
            <div>
              <p className="text-blue-700 dark:text-blue-300 font-medium mb-1">Analogía: La electricidad en casa</p>
              <p className="text-gray-700 dark:text-gray-300">
                El modelo de precios de la nube es similar a cómo pagas por la electricidad en tu hogar:
              </p>
              <ul className="mt-2 space-y-2 text-gray-700 dark:text-gray-300">
                <li>No necesitas construir tu propia planta eléctrica (CapEx)</li>
                <li>En su lugar, te conectas a la red eléctrica general</li>
                <li>Solo pagas por la electricidad que consumes cada mes</li>
                <li>Puedes usar más cuando lo necesitas (encender el aire acondicionado en verano)</li>
                <li>Puedes reducir el consumo cuando no lo necesitas (apagar luces cuando no estás)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),

    comparison: (
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Comparativa: Centro de datos tradicional vs. Nube
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Aspecto
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Centro de datos tradicional
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Nube (modelo de consumo)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                  Inversión inicial
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                  <div className="flex items-center">
                    <XCircleIcon className="h-5 w-5 text-red-500 mr-2" />
                    Alta (servidores, licencias, infraestructura)
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    Baja o nula
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                  Escalabilidad
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                  <div className="flex items-center">
                    <XCircleIcon className="h-5 w-5 text-red-500 mr-2" />
                    Limitada, requiere planificación y tiempo
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    Inmediata, bajo demanda
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                  Utilización de recursos
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                  <div className="flex items-center">
                    <XCircleIcon className="h-5 w-5 text-red-500 mr-2" />
                    A menudo hay capacidad no utilizada
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    Se paga solo por lo que se usa
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                  Mantenimiento
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                  <div className="flex items-center">
                    <XCircleIcon className="h-5 w-5 text-red-500 mr-2" />
                    Responsabilidad del cliente
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    Gestionado por el proveedor de la nube
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-gradient-to-r from-azure-100 to-blue-100 dark:from-azure-900/20 dark:to-blue-900/20 p-5 rounded-lg border border-azure-200 dark:border-azure-800/50">
          <h3 className="text-lg font-medium text-azure-800 dark:text-azure-300 mb-3 flex items-center">
            <ScaleIcon className="h-6 w-6 mr-2" />
            El problema del aprovisionamiento
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/80 dark:bg-gray-800/80 p-4 rounded-lg">
              <h4 className="font-medium text-red-600 dark:text-red-400 mb-2">Sobreaprovisionamiento</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Si compras demasiada capacidad para tu centro de datos, gastas dinero en recursos que no utilizas completamente.
              </p>
            </div>
            <div className="bg-white/80 dark:bg-gray-800/80 p-4 rounded-lg">
              <h4 className="font-medium text-red-600 dark:text-red-400 mb-2">Subaprovisionamiento</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Si compras muy poca capacidad, tus aplicaciones pueden tener problemas de rendimiento y tardarás mucho tiempo en añadir más recursos.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),

    benefits: (
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Ventajas del modelo basado en consumo
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3 flex items-center">
              <CurrencyDollarIcon className="h-6 w-6 text-green-500 mr-2" />
              Sin costos por adelantado
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              No necesitas realizar grandes inversiones iniciales en hardware y software.
              La transición de gastos de capital (CapEx) a gastos operativos (OpEx) libera
              presupuesto para otras iniciativas del negocio.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3 flex items-center">
              <ArrowTrendingUpIcon className="h-6 w-6 text-green-500 mr-2" />
              Escalabilidad bajo demanda
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Puedes escalar recursos hacia arriba o hacia abajo según las necesidades reales
              del negocio. Aumenta recursos durante picos de demanda y redúcelos cuando no los necesites,
              pagando solo por lo que realmente usas.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3 flex items-center">
              <ClockIcon className="h-6 w-6 text-green-500 mr-2" />
              Agilidad y tiempo de comercialización
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Implementa nuevas aplicaciones y servicios en minutos u horas, en lugar de semanas o meses.
              Experimenta rápidamente con nuevas ideas sin el riesgo de inversiones importantes en infraestructura.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3 flex items-center">
              <ScaleIcon className="h-6 w-6 text-green-500 mr-2" />
              Eficiencia y optimización
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Paga solo por los recursos que utilizas realmente. Evita el desperdicio de capacidad asociado
              con el sobreaprovisionamiento y los problemas de rendimiento asociados con el subaprovisionamiento.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 mt-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Planificación financiera en la nube
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Aunque el modelo basado en consumo ofrece flexibilidad, también requiere una planificación cuidadosa:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <ArrowRightIcon className="h-5 w-5 text-azure-500 dark:text-azure-400 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">
                <strong>Monitoreo de uso:</strong> Supervisa continuamente el consumo de recursos para evitar sorpresas en la facturación.
              </span>
            </li>
            <li className="flex items-start">
              <ArrowRightIcon className="h-5 w-5 text-azure-500 dark:text-azure-400 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">
                <strong>Presupuestos y alertas:</strong> Establece presupuestos y configura alertas para mantenerte informado sobre los gastos.
              </span>
            </li>
            <li className="flex items-start">
              <ArrowRightIcon className="h-5 w-5 text-azure-500 dark:text-azure-400 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">
                <strong>Reservas:</strong> Para cargas de trabajo predecibles, considera las reservas para obtener descuentos significativos.
              </span>
            </li>
          </ul>
        </div>
      </div>
    ),

    quiz: (
      <div className="space-y-8">
        <div className="bg-azure-50 dark:bg-azure-900/20 p-6 rounded-lg border border-azure-100 dark:border-azure-900/50">
          <h2 className="text-xl font-semibold text-azure-700 dark:text-azure-400 mb-4">Pon a prueba tus conocimientos</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Responde estas preguntas para verificar tu comprensión sobre los modelos de precios en la nube.
          </p>
        </div>
        
        <div className="space-y-6">
          {quizQuestions.map((question) => (
            <div key={question.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                {question.id}. {question.question}
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
                            <div className="h-5 w-5 rounded-full border-2 border-gray-300 dark:border-gray-500"></div>
                          )
                        ) : (
                          <div className={`h-5 w-5 rounded-full border-2 ${
                            selectedAnswers[question.id] === idx ?
                              'border-azure-500 dark:border-azure-400' :
                              'border-gray-300 dark:border-gray-500'
                          }`}></div>
                        )}
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">
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
                      className="mt-2 text-azure-600 dark:text-azure-400 hover:text-azure-800 dark:hover:text-azure-300 font-medium"
                    >
                      Ver explicación
                    </button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    )
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center mb-8">
        <CurrencyDollarIcon className="h-8 w-8 text-azure-600 dark:text-azure-400 mr-3" />
        <h1 className="text-3xl font-bold text-azure-700 dark:text-azure-400">Modelo basado en el consumo</h1>
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
            onClick={() => setActiveTab('benefits')}
            className={`py-2 px-4 border-b-2 font-medium text-sm rounded-t-lg ${
              activeTab === 'benefits'
                ? 'border-azure-500 text-azure-600 dark:text-azure-400 dark:border-azure-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Ventajas
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