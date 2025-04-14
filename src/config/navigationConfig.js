// Ruta: /src/config/navigationConfig.js

import { 
  CloudIcon, 
  ServerIcon, 
  CogIcon, 
  DocumentTextIcon,
  AcademicCapIcon,
  ShieldCheckIcon,
  BookOpenIcon,
  ChartBarIcon,
  ArrowPathIcon,
  ComputerDesktopIcon,
  UserIcon,
  BuildingLibraryIcon
} from '@heroicons/react/24/outline';

/**
 * Configuración central de navegación para la aplicación AZ-900 Study Guide
 * 
 * Esta estructura define:
 * - Las rutas principales
 * - Las categorías del examen con sus porcentajes
 * - Los temas dentro de cada categoría
 * - Los iconos y descripciones para cada elemento
 * 
 * Actualizada para alinearse con la guía oficial del examen AZ-900
 */

// Rutas principales de navegación
export const mainNavigation = [
  { 
    name: 'Inicio', 
    path: '/', 
    icon: BookOpenIcon,
    exact: true
  },
  { 
    name: 'Guía de Estudio', 
    path: '/study-guide', 
    icon: AcademicCapIcon,
    exact: true
  },
  { 
    name: 'Simulador de Examen', 
    path: '/exam-simulation', 
    icon: DocumentTextIcon,
    exact: false
  },
  { 
    name: 'Recursos', 
    path: '/resources', 
    icon: BookOpenIcon,
    exact: true
  },
];

// Categorías del examen con sus temas
export const examCategories = [
  {
    id: 'cloud-concepts',
    title: 'Conceptos de la nube',
    shortTitle: 'Conceptos',
    percentage: '25-30%',
    description: 'Fundamentos de computación en la nube, modelos y ventajas.',
    icon: CloudIcon,
    color: 'from-blue-400 to-indigo-500',
    path: '/cloud-concepts',
    topics: [
      {
        id: 'what-is-cloud',
        title: 'Definición de informática en la nube',
        path: '/cloud-concepts/what-is-cloud',
        description: 'Fundamentos y conceptos básicos de la computación en la nube.'
      },
      {
        id: 'shared-responsibility',
        title: 'Modelo de responsabilidad compartida',
        path: '/cloud-concepts/shared-responsibility',
        description: 'Distribución de responsabilidades entre el proveedor de la nube y el cliente.'
      },
      {
        id: 'cloud-models',
        title: 'Modelos de nube',
        path: '/cloud-concepts/cloud-models',
        description: 'Nubes públicas, privadas e híbridas y sus casos de uso.'
      },
      {
        id: 'consumption-model',
        title: 'Modelo basado en el consumo',
        path: '/cloud-concepts/consumption-model',
        description: 'Pago por uso y economía de la nube.'
      },
      {
        id: 'serverless',
        title: 'Informática sin servidor',
        path: '/cloud-concepts/serverless',
        description: 'Conceptos de computación sin servidor y sus ventajas.'
      },
      {
        id: 'benefits',
        title: 'Ventajas de la nube',
        path: '/cloud-concepts/benefits',
        description: 'Alta disponibilidad, escalabilidad, confiabilidad, seguridad y capacidad de administración.',
        subTopics: [
          {
            id: 'availability',
            title: 'Alta disponibilidad y escalabilidad',
            description: 'Garantiza que tus aplicaciones estén siempre disponibles y puedan crecer según la demanda.',
            icon: ChartBarIcon
          },
          {
            id: 'reliability',
            title: 'Confiabilidad y previsibilidad',
            description: 'Proporciona sistemas que funcionan de manera consistente y con costos predecibles.',
            icon: ArrowPathIcon
          },
          {
            id: 'security',
            title: 'Seguridad y gobernanza',
            description: 'Protege tus datos e implementa políticas consistentes en tu entorno.',
            icon: ShieldCheckIcon
          },
          {
            id: 'manageability',
            title: 'Capacidad de administración',
            description: 'Simplifica la gestión, monitoreo y automatización de recursos.',
            icon: CogIcon
          }
        ]
      },
      {
        id: 'service-types',
        title: 'Tipos de servicio en la nube',
        path: '/cloud-concepts/service-types',
        description: 'IaaS, PaaS, SaaS y sus casos de uso.'
      }
    ]
  },
  {
    id: 'azure-architecture',
    title: 'Arquitectura y servicios de Azure',
    shortTitle: 'Arquitectura',
    percentage: '35-40%',
    description: 'Componentes arquitectónicos, servicios y soluciones de Azure.',
    icon: ServerIcon,
    color: 'from-azure-400 to-azure-600',
    path: '/azure-architecture',
    topics: [
      {
        id: 'what-is-azure',
        title: '¿Qué es Microsoft Azure?',
        path: '/azure-architecture/what-is-azure',
        description: 'Introducción a la plataforma de nube de Microsoft.',
        icon: ComputerDesktopIcon
      },
      {
        id: 'azure-accounts',
        title: 'Cuentas de Azure',
        path: '/azure-architecture/azure-accounts',
        description: 'Estructura de cuentas, suscripciones y administración.',
        icon: UserIcon
      },
      {
        id: 'physical-infrastructure',
        title: 'Infraestructura física de Azure',
        path: '/azure-architecture/physical-infrastructure',
        description: 'Regiones, zonas de disponibilidad y centros de datos.',
        icon: BuildingLibraryIcon
      },
      {
        id: 'management-infrastructure',
        title: 'Infraestructura de administración',
        path: '/azure-architecture/management-infrastructure',
        description: 'Recursos, grupos de recursos y jerarquía organizativa.',
        icon: CogIcon
      },
      {
        id: 'compute',
        title: 'Servicios de proceso',
        path: '/azure-architecture/compute',
        description: 'Máquinas virtuales, contenedores, Azure Functions y opciones de cómputo.'
      },
      {
        id: 'networking',
        title: 'Servicios de red',
        path: '/azure-architecture/networking',
        description: 'Redes virtuales, subredes, emparejamiento, DNS, VPN y ExpressRoute.'
      },
      {
        id: 'storage',
        title: 'Servicios de almacenamiento',
        path: '/azure-architecture/storage',
        description: 'Opciones de almacenamiento, redundancia y tipos de cuentas.'
      },
      {
        id: 'identity-security',
        title: 'Identidad, acceso y seguridad',
        path: '/azure-architecture/identity-security',
        description: 'Microsoft Entra ID, autenticación, RBAC y defensa en profundidad.'
      }
    ]
  },
  {
    id: 'management-governance',
    title: 'Administración y gobernanza de Azure',
    shortTitle: 'Administración',
    percentage: '30-35%',
    description: 'Administración de costos, gobernanza, cumplimiento y supervisión.',
    icon: CogIcon,
    color: 'from-emerald-400 to-teal-500',
    path: '/management-governance',
    topics: [
      {
        id: 'cost-management',
        title: 'Administración de costos',
        path: '/management-governance/cost-management',
        description: 'Factores que afectan costos, calculadoras y optimización.'
      },
      {
        id: 'governance',
        title: 'Gobernanza y cumplimiento',
        path: '/management-governance/governance',
        description: 'Microsoft Purview, Azure Policy, bloqueos de recursos y Portal de confianza.',
        subTopics: [
          {
            id: 'purview',
            title: 'Microsoft Purview',
            description: 'Solución para la gobernanza de datos y el cumplimiento normativo.'
          },
          {
            id: 'azure-policy',
            title: 'Azure Policy',
            description: 'Servicio para crear, asignar y administrar políticas.'
          },
          {
            id: 'resource-locks',
            title: 'Bloqueos de recursos',
            description: 'Prevenir cambios o eliminación accidental de recursos.'
          },
          {
            id: 'trust-center',
            title: 'Portal de confianza de servicios',
            description: 'Información sobre cumplimiento, seguridad y privacidad en Azure.'
          }
        ]
      },
      {
        id: 'resource-management',
        title: 'Administración e implementación',
        path: '/management-governance/resource-management',
        description: 'Azure Portal, Cloud Shell, Azure Arc e infraestructura como código.'
      },
      {
        id: 'monitoring',
        title: 'Herramientas de supervisión',
        path: '/management-governance/monitoring',
        description: 'Azure Advisor, Service Health y Azure Monitor.'
      }
    ]
  }
];

// Rutas para el simulador de examen
export const examSimulationRoutes = [
  {
    id: 'full-exam',
    title: 'Examen Completo',
    path: '/exam-simulation',
    description: 'Simulación con preguntas de todas las categorías.'
  },
  {
    id: 'category-1',
    title: 'Conceptos de la nube',
    path: '/exam-simulation/category-1',
    description: 'Preguntas sobre conceptos fundamentales de la nube.'
  },
  {
    id: 'category-2',
    title: 'Arquitectura y servicios',
    path: '/exam-simulation/category-2',
    description: 'Preguntas sobre arquitectura y servicios de Azure.'
  },
  {
    id: 'category-3',
    title: 'Administración y gobernanza',
    path: '/exam-simulation/category-3',
    description: 'Preguntas sobre administración, gobernanza y supervisión.'
  }
];

// Función de ayuda para obtener las rutas planas (útil para mapeos)
export const getAllRoutes = () => {
  const routes = [];
  
  // Añadir rutas principales
  mainNavigation.forEach(route => {
    routes.push({
      path: route.path,
      title: route.name,
      icon: route.icon
    });
  });
  
  // Añadir rutas de categorías y temas
  examCategories.forEach(category => {
    // Ruta de categoría principal
    routes.push({
      path: category.path,
      title: category.title,
      icon: category.icon
    });
    
    // Rutas de temas
    category.topics.forEach(topic => {
      routes.push({
        path: topic.path,
        title: topic.title,
        categoryId: category.id,
        parentTitle: category.title
      });
      
      // Si el tema tiene subtemas, añadirlos también
      if (topic.subTopics) {
        topic.subTopics.forEach(subTopic => {
          routes.push({
            path: `${topic.path}#${subTopic.id}`,
            title: subTopic.title,
            parentTitle: topic.title,
            categoryId: category.id
          });
        });
      }
    });
  });
  
  // Añadir rutas de simulación
  examSimulationRoutes.forEach(route => {
    routes.push({
      path: route.path,
      title: route.title,
      description: route.description
    });
  });
  
  return routes;
};