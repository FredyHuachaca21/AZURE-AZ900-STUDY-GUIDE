import { Link } from 'react-router-dom';
import { 
  CloudArrowUpIcon, 
  ServerIcon, 
  ShieldCheckIcon, 
  AcademicCapIcon,
  DocumentTextIcon,
  PresentationChartBarIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

// Definición de las categorías principales del examen
const examCategories = [
  {
    id: 'cloud-concepts',
    title: 'Conceptos de la nube',
    percentage: '25-30%',
    description: 'Fundamentos de computación en la nube, modelos y ventajas.',
    icon: CloudArrowUpIcon,
    color: 'from-blue-400 to-indigo-500',
    link: '/study-guide#cloud-concepts'
  },
  {
    id: 'azure-architecture',
    title: 'Arquitectura y servicios de Azure',
    percentage: '35-40%',
    description: 'Componentes arquitectónicos, servicios y soluciones.',
    icon: ServerIcon,
    color: 'from-azure-400 to-azure-600',
    link: '/study-guide#azure-architecture-services'
  },
  {
    id: 'management-governance',
    title: 'Administración y gobernanza',
    percentage: '30-35%',
    description: 'Costos, herramientas de gestión, supervisión y cumplimiento.',
    icon: PresentationChartBarIcon,
    color: 'from-emerald-400 to-teal-500',
    link: '/study-guide#management-governance'
  }
];

// Características de la plataforma de estudio
const features = [
  {
    name: 'Modelo de Responsabilidad',
    description: 'Comprende cómo se distribuyen las responsabilidades entre tú y Microsoft en los diferentes modelos de servicio en la nube.',
    icon: ShieldCheckIcon,
    href: '/responsibility-model'
  },
  {
    name: 'Guía de Estudio',
    description: 'Materiales organizados por temas cubriendo todos los conceptos fundamentales de Azure para el examen.',
    icon: AcademicCapIcon,
    href: '/study-guide'
  },
  {
    name: 'Simulador de Examen',
    description: 'Pon a prueba tus conocimientos con preguntas similares a las del examen oficial AZ-900.',
    icon: DocumentTextIcon,
    href: '/exam-simulation'
  },
  {
    name: 'Recursos Adicionales',
    description: 'Enlaces a documentación oficial, tutoriales y herramientas para complementar tu preparación.',
    icon: CloudArrowUpIcon,
    href: '/resources'
  },
];

// Beneficios de obtener la certificación
const benefits = [
  'Validación oficial de conocimientos fundamentales de computación en la nube y Azure',
  'Punto de partida para otras certificaciones más avanzadas de Microsoft',
  'Diferenciación en el mercado laboral cada vez más orientado a la nube',
  'Comprensión general de servicios en la nube para roles técnicos y no técnicos',
  'Sin requisito de renovación (certificación permanente)'
];

export default function Home() {
  return (
    <div className="py-8">
      {/* Hero Section - Mejorado con gradiente y mejor información */}
      <div className="bg-gradient-to-r from-azure-50 to-blue-50 rounded-2xl p-8 mb-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-azure-700 mb-6">Certificación Microsoft Azure Fundamentals (AZ-900)</h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Tu guía interactiva y actualizada (2025) para preparar y aprobar el examen de certificación 
            que valida tus conocimientos básicos sobre servicios en la nube y Microsoft Azure.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/study-guide" className="btn btn-primary py-3 px-6 text-lg">
              Comenzar a Estudiar
            </Link>
            <Link to="/exam-simulation" className="btn btn-secondary py-3 px-6 text-lg">
              Practicar Examen
            </Link>
          </div>
        </div>
      </div>

      {/* Sección de categorías del examen - Muestra la distribución del examen */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-azure-700 text-center mb-8">
          Dominios del Examen
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {examCategories.map((category) => (
            <Link 
              key={category.id} 
              to={category.link} 
              className="group"
            >
              <div className="h-full bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                <div className={`bg-gradient-to-r ${category.color} h-2`}></div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <category.icon className="h-10 w-10 text-azure-500" />
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                      {category.percentage}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-azure-600 mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-600">
                    {category.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Perfil del candidato - Nueva sección */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-16">
        <h2 className="text-2xl font-semibold text-azure-700 mb-6">
          Perfil del Candidato
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-gray-700">
              Los candidatos a esta certificación son <strong>profesionales tecnológicos</strong> que quieren 
              demostrar conocimientos básicos de los conceptos de la nube y de Azure en particular. Esta certificación 
              es un <strong>punto de partida común</strong> en un recorrido hacia una carrera profesional en Azure.
            </p>
            <p className="text-gray-700">
              Estos profesionales pueden describir los componentes de la arquitectura de Azure y los servicios de 
              Azure, como el proceso, las redes y el almacenamiento. También pueden describir las características y 
              herramientas para proteger, gobernar y administrar Azure.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-azure-600 mb-3">¿Por qué obtener esta certificación?</h3>
            <ul className="space-y-2">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Features - Herramientas de estudio */}
      <div>
        <h2 className="text-2xl font-semibold text-azure-700 text-center mb-8">
          Herramientas para tu Preparación
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <Link 
              key={feature.name} 
              to={feature.href}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 group hover:border-l-4 hover:border-azure-500"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <feature.icon className="h-10 w-10 text-azure-500 group-hover:text-azure-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-azure-600">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Final */}
      <div className="mt-16 bg-gradient-to-r from-azure-500 to-azure-700 rounded-xl shadow-md p-8 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">¿Listo para comenzar tu camino hacia la certificación?</h2>
          <p className="mb-6">
            Nuestro material está diseñado para ayudarte a comprender y dominar los conceptos clave
            necesarios para aprobar el examen AZ-900 con confianza.
          </p>
          <Link to="/study-guide" className="inline-block bg-white text-azure-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Comienza tu Preparación
          </Link>
        </div>
      </div>
    </div>
  );
}