import { Link } from 'react-router-dom';
import { 
  CloudArrowUpIcon, 
  ServerIcon, 
  ShieldCheckIcon, 
  AcademicCapIcon 
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Modelo de Responsabilidad',
    description: 'Comprende cómo se distribuyen las responsabilidades entre tú y Microsoft en los diferentes modelos de servicio en la nube.',
    icon: ShieldCheckIcon,
    href: '/responsibility-model'
  },
  {
    name: 'Guía de Estudio',
    description: 'Materiales organizados por temas cubriendo todos los conceptos fundamentales de Azure que necesitas para el examen.',
    icon: AcademicCapIcon,
    href: '/study-guide'
  },
  {
    name: 'Simulador de Examen',
    description: 'Pon a prueba tus conocimientos con preguntas similares a las del examen oficial AZ-900.',
    icon: ServerIcon,
    href: '/exam-simulation'
  },
  {
    name: 'Recursos Adicionales',
    description: 'Enlaces a documentación oficial, tutoriales y herramientas para complementar tu preparación.',
    icon: CloudArrowUpIcon,
    href: '/resources'
  },
];

export default function Home() {
  return (
    <div className="py-12">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-azure-700">Azure Fundamentals (AZ-900)</h1>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
          Tu guía interactiva para preparar y aprobar el examen de certificación Microsoft Azure Fundamentals.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link to="/study-guide" className="btn btn-primary">
            Comenzar a Estudiar
          </Link>
          <Link to="/exam-simulation" className="btn btn-secondary">
            Practicar Examen
          </Link>
        </div>
      </div>

      {/* Features */}
      <div className="mt-20">
        <h2 className="text-2xl font-semibold text-azure-600 text-center mb-12">
          Herramientas para tu Preparación
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <Link 
              key={feature.name} 
              to={feature.href}
              className="card group hover:border-azure-300"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <feature.icon className="h-12 w-12 text-azure-500 group-hover:text-azure-600" />
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

      {/* Info Section */}
      <div className="mt-20 bg-azure-50 p-8 rounded-lg">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-azure-700 text-center">
            Sobre el Examen AZ-900
          </h2>
          <div className="mt-6 space-y-4 text-gray-700">
            <p>
              El examen <strong>Microsoft Azure Fundamentals (AZ-900)</strong> valida tus conocimientos básicos sobre los servicios 
              en la nube y cómo esos servicios se proporcionan con Microsoft Azure.
            </p>
            <p>
              Esta certificación es ideal para personas que comienzan a trabajar con soluciones basadas en la nube 
              o que están nuevos en Azure. Demuestra tu comprensión de los conceptos fundamentales de la nube, 
              los servicios de Azure, las cargas de trabajo de Azure, la seguridad y la privacidad en Azure, 
              así como los precios y el soporte de Azure.
            </p>
            <div className="bg-white p-4 rounded-md shadow-sm mt-4">
              <h3 className="font-medium text-gray-900">El examen evalúa conocimientos en:</h3>
              <ul className="mt-2 list-disc list-inside space-y-1 text-gray-600">
                <li>Conceptos de la nube (20-25%)</li>
                <li>Servicios principales de Azure (15-20%)</li>
                <li>Soluciones principales y herramientas de administración (10-15%)</li>
                <li>Características de seguridad general y de seguridad de red (10-15%)</li>
                <li>Características de identidad, gobernanza, privacidad y cumplimiento (15-20%)</li>
                <li>Administración de costos de Azure y acuerdos de nivel de servicio (10-15%)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}