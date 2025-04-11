import { useState } from 'react';
import { CheckCircleIcon, XCircleIcon, ArrowRightIcon, InformationCircleIcon } from '@heroicons/react/24/outline';

// Muestra de preguntas para el simulador de examen
const sampleQuestions = [
  {
    id: 1,
    category: 'Conceptos de la nube',
    question: '¿Cuál de los siguientes NO es un beneficio de usar servicios en la nube?',
    options: [
      'Alta disponibilidad',
      'Escalabilidad',
      'Agilidad',
      'Infraestructura física dedicada'
    ],
    correctAnswer: 3, // Índice basado en 0
    explanation: 'La infraestructura física dedicada no es un beneficio inherente de la nube, sino que es un aspecto de las soluciones on-premises. Los principales beneficios de la nube incluyen alta disponibilidad, escalabilidad, elasticidad, agilidad y recuperación ante desastres, entre otros.',
    docLink: 'https://docs.microsoft.com/es-es/learn/modules/fundamental-azure-concepts/benefits-of-cloud-computing'
  },
  {
    id: 2,
    category: 'Modelo de Responsabilidad Compartida',
    question: 'En un modelo IaaS (Infraestructura como Servicio), ¿quién es responsable de la gestión del sistema operativo?',
    options: [
      'Microsoft siempre',
      'El cliente siempre',
      'Es una responsabilidad compartida',
      'Depende del acuerdo de nivel de servicio'
    ],
    correctAnswer: 1,
    explanation: 'En el modelo IaaS, el cliente es responsable de la administración del sistema operativo, incluyendo parches y actualizaciones. Microsoft solo gestiona la infraestructura física (hosts, red y centro de datos).',
    docLink: 'https://docs.microsoft.com/es-es/azure/security/fundamentals/shared-responsibility',
    relatedLink: '/responsibility-model'
  },
  {
    id: 3,
    category: 'Servicios principales de Azure',
    question: '¿Qué recurso de Azure combina una máquina virtual, almacenamiento y recursos de red desde un único portal de gestión?',
    options: [
      'Azure Kubernetes Service',
      'Azure Functions',
      'Azure Virtual Machine',
      'Azure App Service'
    ],
    correctAnswer: 2,
    explanation: 'Azure Virtual Machine combina recursos de proceso (la VM en sí), almacenamiento (discos) y recursos de red (interfaces de red, IPs) que se pueden gestionar desde un único lugar en el portal de Azure.',
    docLink: 'https://docs.microsoft.com/es-es/azure/virtual-machines/overview'
  },
  {
    id: 4,
    category: 'Herramientas de administración',
    question: '¿Cuál de las siguientes herramientas permite ejecutar comandos de Azure directamente desde un navegador web?',
    options: [
      'Azure CLI instalado localmente',
      'Azure PowerShell instalado localmente',
      'Azure Cloud Shell',
      'Azure Portal'
    ],
    correctAnswer: 2,
    explanation: 'Azure Cloud Shell es un shell interactivo basado en navegador que permite ejecutar comandos de Azure CLI o Azure PowerShell directamente desde el navegador sin necesidad de instalar nada localmente.',
    docLink: 'https://docs.microsoft.com/es-es/azure/cloud-shell/overview'
  },
  {
    id: 5,
    category: 'Seguridad y cumplimiento',
    question: '¿Qué servicio de Azure proporciona recomendaciones de seguridad personalizadas y detecta amenazas en los recursos de Azure?',
    options: [
      'Azure DDoS Protection',
      'Azure Firewall',
      'Azure Security Center',
      'Azure Key Vault'
    ],
    correctAnswer: 2,
    explanation: 'Azure Security Center proporciona una vista unificada de la seguridad en todos los servicios de Azure y locales, con recomendaciones personalizadas y detección de amenazas avanzada.',
    docLink: 'https://docs.microsoft.com/es-es/azure/security-center/security-center-introduction'
  }
];

export default function ExamSimulation() {
  const [currentMode, setCurrentMode] = useState('intro'); // intro, quiz, results
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [showExplanation, setShowExplanation] = useState(false);

  const handleStartQuiz = () => {
    setCurrentMode('quiz');
    setCurrentQuestionIndex(0);
    setUserAnswers({});
  };

  const handleAnswer = (questionId, answerIndex) => {
    setUserAnswers({
      ...userAnswers,
      [questionId]: answerIndex
    });
  };

  const handleNextQuestion = () => {
    setShowExplanation(false);
    if (currentQuestionIndex < sampleQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setCurrentMode('results');
    }
  };

  const calculateScore = () => {
    let correct = 0;
    sampleQuestions.forEach(question => {
      if (userAnswers[question.id] === question.correctAnswer) {
        correct++;
      }
    });
    return {
      correct,
      total: sampleQuestions.length,
      percentage: Math.round((correct / sampleQuestions.length) * 100)
    };
  };

  const renderIntro = () => (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-azure-700 mb-4">Simulador de Examen AZ-900</h2>
        <p className="mb-4">
          Pon a prueba tus conocimientos con estas preguntas de práctica similares al formato del examen 
          oficial de Azure Fundamentals (AZ-900).
        </p>
        
        <div className="bg-gray-50 p-4 rounded-md mb-6">
          <h3 className="font-medium text-gray-900 mb-2">Instrucciones:</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <ArrowRightIcon className="h-5 w-5 text-azure-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>Esta simulación contiene {sampleQuestions.length} preguntas de opción múltiple.</span>
            </li>
            <li className="flex items-start">
              <ArrowRightIcon className="h-5 w-5 text-azure-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>Selecciona la mejor respuesta para cada pregunta.</span>
            </li>
            <li className="flex items-start">
              <ArrowRightIcon className="h-5 w-5 text-azure-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>Después de cada pregunta, puedes ver la explicación de la respuesta correcta.</span>
            </li>
            <li className="flex items-start">
              <ArrowRightIcon className="h-5 w-5 text-azure-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>Al final recibirás tu puntuación y podrás revisar tus respuestas.</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-azure-50 p-4 rounded-md mb-6 flex items-start">
          <InformationCircleIcon className="h-6 w-6 text-azure-600 mr-2 flex-shrink-0 mt-0.5" />
          <p className="text-gray-700">
            Este simulador incluye solo algunas preguntas de muestra. En el examen real, 
            tendrás aproximadamente 40-60 preguntas y un tiempo límite de 85 minutos.
          </p>
        </div>
        
        <button 
          className="w-full btn btn-primary py-3 text-lg"
          onClick={handleStartQuiz}
        >
          Comenzar Simulación
        </button>
      </div>
    </div>
  );

  const renderQuestion = () => {
    const currentQuestion = sampleQuestions[currentQuestionIndex];
    const userAnswer = userAnswers[currentQuestion.id];
    const hasAnswered = userAnswer !== undefined;
    
    return (
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-medium text-azure-700 bg-azure-50 px-3 py-1 rounded-full">
            {currentQuestion.category}
          </span>
          <span className="text-sm text-gray-600">
            Pregunta {currentQuestionIndex + 1} de {sampleQuestions.length}
          </span>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-medium text-gray-900 mb-6">{currentQuestion.question}</h2>
          
          <div className="space-y-3 mb-6">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                className={`w-full text-left p-4 rounded-md border transition-colors ${
                  userAnswer === index 
                    ? userAnswer === currentQuestion.correctAnswer
                      ? 'border-green-300 bg-green-50'
                      : 'border-red-300 bg-red-50'
                    : hasAnswered && index === currentQuestion.correctAnswer
                      ? 'border-green-300 bg-green-50'
                      : 'border-gray-200 hover:bg-gray-50'
                }`}
                onClick={() => !hasAnswered && handleAnswer(currentQuestion.id, index)}
                disabled={hasAnswered}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3">
                    {hasAnswered && index === currentQuestion.correctAnswer ? (
                      <CheckCircleIcon className="h-6 w-6 text-green-500" />
                    ) : hasAnswered && userAnswer === index ? (
                      <XCircleIcon className="h-6 w-6 text-red-500" />
                    ) : (
                      <div className="h-6 w-6 rounded-full border-2 border-gray-300 flex items-center justify-center">
                        {String.fromCharCode(65 + index)}
                      </div>
                    )}
                  </div>
                  <span>{option}</span>
                </div>
              </button>
            ))}
          </div>
          
          {hasAnswered && !showExplanation && (
            <button
              className="w-full py-2 text-azure-700 hover:text-azure-900 font-medium"
              onClick={() => setShowExplanation(true)}
            >
              Ver explicación
            </button>
          )}
          
          {hasAnswered && showExplanation && (
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
              <h3 className="font-medium text-gray-900 mb-2">Explicación:</h3>
              <p className="text-gray-700 mb-3">{currentQuestion.explanation}</p>
              
              {currentQuestion.docLink && (
                <a 
                  href={currentQuestion.docLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-azure-600 hover:text-azure-800 text-sm font-medium"
                >
                  <ArrowRightIcon className="h-4 w-4 mr-1" />
                  Ver documentación oficial
                </a>
              )}
              
              {currentQuestion.relatedLink && (
                <a 
                  href={currentQuestion.relatedLink}
                  className="flex items-center text-azure-600 hover:text-azure-800 text-sm font-medium mt-2"
                >
                  <ArrowRightIcon className="h-4 w-4 mr-1" />
                  Ver materiales relacionados
                </a>
              )}
            </div>
          )}
        </div>
        
        <div className="flex justify-between">
          <div></div> {/* Espacio para mantener la alineación */}
          <button 
            className={`btn ${hasAnswered ? 'btn-primary' : 'btn-secondary opacity-50 cursor-not-allowed'}`}
            onClick={handleNextQuestion}
            disabled={!hasAnswered}
          >
            {currentQuestionIndex < sampleQuestions.length - 1 ? 'Siguiente pregunta' : 'Ver resultados'}
          </button>
        </div>
      </div>
    );
  };

  const renderResults = () => {
    const score = calculateScore();
    
    return (
      <div className="max-w-3xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold text-azure-700 mb-6 text-center">Resultados de la Simulación</h2>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <div className="flex justify-center">
              <div className="text-center">
                <div className={`text-5xl font-bold mb-2 ${
                  score.percentage >= 70 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {score.percentage}%
                </div>
                <p className="text-gray-600 mb-4">
                  Has acertado {score.correct} de {score.total} preguntas
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                  <div 
                    className={`h-2.5 rounded-full ${
                      score.percentage >= 70 ? 'bg-green-600' : 'bg-red-600'
                    }`}
                    style={{ width: `${score.percentage}%` }}
                  ></div>
                </div>
                <p className={`font-medium ${
                  score.percentage >= 70 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {score.percentage >= 70 ? '¡Aprobado!' : 'Necesitas mejorar'}
                </p>
              </div>
            </div>
          </div>
          
          <h3 className="text-lg font-medium text-gray-900 mb-4">Resumen de preguntas:</h3>
          
          <div className="space-y-3">
            {sampleQuestions.map((question, index) => (
              <div 
                key={question.id} 
                className={`p-4 rounded-md border ${
                  userAnswers[question.id] === question.correctAnswer 
                    ? 'border-green-200 bg-green-50' 
                    : 'border-red-200 bg-red-50'
                }`}
              >
                <div className="flex justify-between">
                  <h4 className="font-medium text-gray-900">Pregunta {index + 1}</h4>
                  {userAnswers[question.id] === question.correctAnswer ? (
                    <span className="flex items-center text-green-600 text-sm font-medium">
                      <CheckCircleIcon className="h-5 w-5 mr-1" />
                      Correcta
                    </span>
                  ) : (
                    <span className="flex items-center text-red-600 text-sm font-medium">
                      <XCircleIcon className="h-5 w-5 mr-1" />
                      Incorrecta
                    </span>
                  )}
                </div>
                <p className="text-gray-700 mt-1">{question.question}</p>
                <div className="mt-2">
                  <p className="text-sm text-gray-600">Tu respuesta: <span className="font-medium">{question.options[userAnswers[question.id]]}</span></p>
                  {userAnswers[question.id] !== question.correctAnswer && (
                    <p className="text-sm text-gray-600">Respuesta correcta: <span className="font-medium">{question.options[question.correctAnswer]}</span></p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center">
          <button 
            className="btn btn-primary px-8"
            onClick={handleStartQuiz}
          >
            Reintentar Simulación
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="py-6">
      {currentMode === 'intro' && renderIntro()}
      {currentMode === 'quiz' && renderQuestion()}
      {currentMode === 'results' && renderResults()}
    </div>
  );
}