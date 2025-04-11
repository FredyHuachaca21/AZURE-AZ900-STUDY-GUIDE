import { 
  ArrowTopRightOnSquareIcon, 
  ArrowDownTrayIcon, 
  BookOpenIcon, 
  AcademicCapIcon, 
  PlayIcon, 
  DocumentTextIcon 
} from '@heroicons/react/24/outline';

const resources = [
  {
    category: 'Documentación Oficial',
    items: [
      {
        title: 'Información general del examen AZ-900',
        description: 'Página oficial de Microsoft con información detallada sobre el examen, áreas de conocimiento y objetivos.',
        icon: DocumentTextIcon,
        link: 'https://docs.microsoft.com/es-es/learn/certifications/exams/az-900',
        isExternal: true
      },
      {
        title: 'Ruta de aprendizaje de Azure Fundamentals',
        description: 'Serie de módulos diseñados por Microsoft para prepararte para el examen AZ-900.',
        icon: AcademicCapIcon,
        link: 'https://docs.microsoft.com/es-es/learn/paths/az-900-describe-cloud-concepts/',
        isExternal: true
      },
      {
        title: 'Documentación de Azure',
        description: 'Documentación técnica completa de todos los servicios de Microsoft Azure.',
        icon: BookOpenIcon,
        link: 'https://docs.microsoft.com/es-es/azure/',
        isExternal: true
      }
    ]
  },
  {
    category: 'Herramientas Prácticas',
    items: [
      {
        title: 'Azure Portal',
        description: 'Interfaz gráfica para gestionar tus recursos de Azure. Crea una cuenta gratuita para practicar.',
        icon: ArrowTopRightOnSquareIcon,
        link: 'https://portal.azure.com/',
        isExternal: true
      },
      {
        title: 'Calculadora de Precios de Azure',
        description: 'Herramienta para estimar el costo de los servicios de Azure según tus necesidades.',
        icon: ArrowTopRightOnSquareIcon,
        link: 'https://azure.microsoft.com/es-es/pricing/calculator/',
        isExternal: true
      },
      {
        title: 'Calculadora de TCO de Azure',
        description: 'Compara el costo total de propiedad de infraestructuras on-premises vs. Azure.',
        icon: ArrowTopRightOnSquareIcon,
        link: 'https://azure.microsoft.com/es-es/pricing/tco/calculator/',
        isExternal: true
      }
    ]
  },
  {
    category: 'Recursos Adicionales',
    items: [
      {
        title: 'Microsoft Learn',
        description: 'Plataforma de aprendizaje interactivo con módulos específicos para Azure.',
        icon: AcademicCapIcon,
        link: 'https://docs.microsoft.com/es-es/learn/',
        isExternal: true
      },
      {
        title: 'Vídeos de Azure',
        description: 'Canal oficial de Microsoft Azure con tutoriales y actualizaciones.',
        icon: PlayIcon,
        link: 'https://www.youtube.com/c/MicrosoftAzure',
        isExternal: true
      },
      {
        title: 'Guía de Estudio Descargable',
        description: 'PDF con información detallada sobre el examen AZ-900.',
        icon: ArrowDownTrayIcon,
        link: 'https://query.prod.cms.rt.microsoft.com/cms/api/am/binary/RE3VwUY',
        isExternal: true
      }
    ]
  }
];

export default function ResourcesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-azure-700 mb-8">Recursos para el Examen AZ-900</h1>
      
      <div className="space-y-12">
        {resources.map((section, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-azure-600 mb-6">{section.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.items.map((resource, idx) => (
                <ResourceCard key={idx} resource={resource} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ResourceCard({ resource }) {
  return (
    <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <resource.icon className="h-6 w-6 text-azure-600" />
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-900">{resource.title}</h3>
          <p className="mt-2 text-gray-600">{resource.description}</p>
          <a
            href={resource.link}
            target={resource.isExternal ? "_blank" : undefined}
            rel={resource.isExternal ? "noopener noreferrer" : undefined}
            className="mt-4 inline-flex items-center text-azure-600 hover:text-azure-700"
          >
            {resource.isExternal ? (
              <>
                Visitar recurso
                <ArrowTopRightOnSquareIcon className="ml-2 h-4 w-4" />
              </>
            ) : (
              "Ver más"
            )}
          </a>
        </div>
      </div>
    </div>
  );
}