// Ruta: /src/pages/cloud-concepts/Benefits.jsx
import { useState } from 'react';
import { 
  ChartBarIcon, 
  ShieldCheckIcon, 
  ArrowPathIcon, 
  CogIcon,
  LightBulbIcon,
  InformationCircleIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';

export default function Benefits() {
  const [activeTab, setActiveTab] = useState('availability');

  // Definición de las categorías principales de ventajas
  const benefitCategories = [
    {
      id: 'availability',
      title: 'Alta disponibilidad y escalabilidad',
      icon: ChartBarIcon,
      color: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
      textColor: 'text-blue-700 dark:text-blue-300'
    },
    {
      id: 'reliability',
      title: 'Confiabilidad y previsibilidad',
      icon: ArrowPathIcon,
      color: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800',
      textColor: 'text-green-700 dark:text-green-300'
    },
    {
      id: 'security',
      title: 'Seguridad y gobernanza',
      icon: ShieldCheckIcon,
      color: 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800',
      textColor: 'text-purple-700 dark:text-purple-300'
    },
    {
      id: 'manageability',
      title: 'Capacidad de administración',
      icon: CogIcon,
      color: 'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800',
      textColor: 'text-amber-700 dark:text-amber-300'
    }
  ];

  // Contenido detallado para cada categoría
  const benefitContents = {
    availability: (
      <div className="space-y-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-5 border border-blue-200 dark:border-blue-800">
          <h3 className="text-lg font-medium text-blue-700 dark:text-blue-300 mb-3 flex items-center">
            <ChartBarIcon className="h-5 w-5 mr-2" />
            Alta disponibilidad y escalabilidad en la nube
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            La nube ofrece recursos prácticamente ilimitados y servicios diseñados para mantener las aplicaciones 
            funcionando incluso cuando ocurren fallos, permitiendo a las empresas escalar rápidamente según las necesidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <h4 className="font-medium text-blue-600 dark:text-blue-400 mb-3">Alta disponibilidad</h4>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              La alta disponibilidad garantiza que tus aplicaciones y datos permanezcan operativos incluso 
              cuando algunos componentes de infraestructura fallan.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <ChevronRightIcon className="h-5 w-5 text-blue-500 dark:text-blue-400 mr-2 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-800 dark:text-gray-200">Acuerdos de Nivel de Servicio (SLA):</span>
                  <p className="text-gray-700 dark:text-gray-300">Azure ofrece SLAs que garantizan porcentajes de tiempo de actividad para sus servicios, llegando hasta el 99.99% en algunos casos.</p>
                </div>
              </li>
              <li className="flex items-start">
                <ChevronRightIcon className="h-5 w-5 text-blue-500 dark:text-blue-400 mr-2 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-800 dark:text-gray-200">Redundancia geográfica:</span>
                  <p className="text-gray-700 dark:text-gray-300">Los datos y aplicaciones pueden replicarse en diferentes regiones geográficas para protección contra fallos a nivel de centro de datos.</p>
                </div>
              </li>
              <li className="flex items-start">
                <ChevronRightIcon className="h-5 w-5 text-blue-500 dark:text-blue-400 mr-2 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-800 dark:text-gray-200">Tolerancia a fallos incorporada:</span>
                  <p className="text-gray-700 dark:text-gray-300">Los servicios de Azure están diseñados con sistemas de recuperación automática y conmutación por error.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <h4 className="font-medium text-blue-600 dark:text-blue-400 mb-3">Escalabilidad</h4>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              La escalabilidad permite ajustar los recursos según la demanda, ya sea aumentando la capacidad para manejar 
              picos o reduciéndola cuando hay menos necesidad.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <ChevronRightIcon className="h-5 w-5 text-blue-500 dark:text-blue-400 mr-2 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-800 dark:text-gray-200">Escalabilidad vertical:</span>
                  <p className="text-gray-700 dark:text-gray-300">Aumentar el poder de procesamiento, memoria o capacidad de almacenamiento de un recurso existente (por ejemplo, actualizar a una VM más potente).</p>
                </div>
              </li>
              <li className="flex items-start">
                <ChevronRightIcon className="h-5 w-5 text-blue-500 dark:text-blue-400 mr-2 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-800 dark:text-gray-200">Escalabilidad horizontal:</span>
                  <p className="text-gray-700 dark:text-gray-300">Agregar más instancias de recursos (por ejemplo, más VMs o contenedores) para distribuir la carga de trabajo.</p>
                </div>
              </li>
              <li className="flex items-start">
                <ChevronRightIcon className="h-5 w-5 text-blue-500 dark:text-blue-400 mr-2 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-800 dark:text-gray-200">Autoescalado:</span>
                  <p className="text-gray-700 dark:text-gray-300">Servicios que escalan automáticamente basados en métricas como CPU, memoria o número de solicitudes.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-start">
            <LightBulbIcon className="h-6 w-6 text-yellow-500 dark:text-yellow-400 mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Ejemplo práctico</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Imagina una tienda online que normalmente recibe 1,000 visitantes diarios, pero durante una campaña de ventas 
                especial, este número puede aumentar a 50,000. En un entorno tradicional, necesitarías comprar y mantener 
                suficientes servidores para manejar el pico de 50,000 visitantes, aunque la mayoría del tiempo estarían subutilizados.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                Con Azure, puedes configurar tus aplicaciones para escalar automáticamente:
              </p>
              <ul className="mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                <li>• Durante el funcionamiento normal: se utiliza una cantidad mínima de recursos</li>
                <li>• Durante la campaña de ventas: los recursos se escalan automáticamente para manejar el aumento de tráfico</li>
                <li>• Después de la campaña: los recursos vuelven a reducirse automáticamente</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                Esto garantiza que la aplicación esté siempre disponible (alta disponibilidad) y que pueda adaptarse a las demandas 
                variables (escalabilidad), todo mientras pagas solo por los recursos que realmente utilizas.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg border border-blue-200 dark:border-blue-800">
          <div className="flex items-start">
            <InformationCircleIcon className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-blue-700 dark:text-blue-300 mb-2">Importancia para el examen AZ-900</h4>
              <p className="text-gray-700 dark:text-gray-300">
                El examen AZ-900 evalúa tu comprensión de cómo Azure proporciona alta disponibilidad y escalabilidad. 
                Asegúrate de entender:
              </p>
              <ul className="mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                <li>• La diferencia entre escalabilidad vertical y horizontal</li>
                <li>• Cómo funcionan las zonas de disponibilidad y los conjuntos de disponibilidad</li>
                <li>• Los SLAs que ofrece Azure para diferentes servicios</li>
                <li>• Cómo el autoescalado ayuda a mantener el rendimiento durante picos de demanda</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),

    reliability: (
      <div className="space-y-6">
        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-5 border border-green-200 dark:border-green-800">
          <h3 className="text-lg font-medium text-green-700 dark:text-green-300 mb-3 flex items-center">
            <ArrowPathIcon className="h-5 w-5 mr-2" />
            Confiabilidad y previsibilidad en la nube
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            La confiabilidad garantiza que tus sistemas funcionen correctamente cuando los necesitas, mientras que la 
            previsibilidad te permite planificar adecuadamente el rendimiento y los costos de tus soluciones en la nube.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <h4 className="font-medium text-green-600 dark:text-green-400 mb-3">Confiabilidad</h4>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              La confiabilidad se refiere a la capacidad de un sistema para recuperarse de fallos y seguir funcionando.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <ChevronRightIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-800 dark:text-gray-200">Recuperación ante desastres:</span>
                  <p className="text-gray-700 dark:text-gray-300">Azure ofrece servicios como Azure Site Recovery que permiten replicar cargas de trabajo en diferentes regiones para recuperarse rápidamente de interrupciones.</p>
                </div>
              </li>
              <li className="flex items-start">
                <ChevronRightIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-800 dark:text-gray-200">Copias de seguridad automatizadas:</span>
                  <p className="text-gray-700 dark:text-gray-300">Azure Backup permite realizar copias de seguridad automáticas de datos y sistemas para garantizar que puedas recuperarte de pérdidas de datos.</p>
                </div>
              </li>
              <li className="flex items-start">
                <ChevronRightIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-800 dark:text-gray-200">Diseño para fallos:</span>
                  <p className="text-gray-700 dark:text-gray-300">Azure fomenta arquitecturas que anticipan fallos y se diseñan para recuperarse automáticamente, minimizando el impacto en los usuarios.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <h4 className="font-medium text-green-600 dark:text-green-400 mb-3">Previsibilidad</h4>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              La previsibilidad te permite planificar de antemano, tanto en términos de rendimiento como de costos.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <ChevronRightIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-800 dark:text-gray-200">Previsibilidad de rendimiento:</span>
                  <p className="text-gray-700 dark:text-gray-300">Azure proporciona diferentes niveles de servicio que garantizan ciertos niveles de rendimiento, como IOPS (operaciones de E/S por segundo) para almacenamiento.</p>
                </div>
              </li>
              <li className="flex items-start">
                <ChevronRightIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-800 dark:text-gray-200">Previsibilidad de costos:</span>
                  <p className="text-gray-700 dark:text-gray-300">Herramientas como Azure Cost Management, presupuestos y alertas ayudan a predecir y controlar el gasto en la nube.</p>
                </div>
              </li>
              <li className="flex items-start">
                <ChevronRightIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-800 dark:text-gray-200">Pruebas de rendimiento:</span>
                  <p className="text-gray-700 dark:text-gray-300">Servicios que permiten realizar pruebas de carga y estrés para predecir cómo responderán tus aplicaciones bajo diferentes condiciones.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-start">
            <LightBulbIcon className="h-6 w-6 text-yellow-500 dark:text-yellow-400 mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Ejemplo práctico</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Una empresa financiera procesa millones de transacciones diarias y no puede permitirse tiempo de inactividad ni 
                rendimiento impredecible. En Azure, pueden implementar una solución confiable y predecible:
              </p>
              <ul className="mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                <li>• <strong>Confiabilidad:</strong> Utilizando zonas de disponibilidad y replicación geográfica, sus aplicaciones y datos 
                están protegidos contra fallos a nivel de centro de datos.</li>
                <li>• <strong>Pruebas automatizadas:</strong> Utilizando Azure DevOps, prueban regularmente escenarios de fallos para 
                asegurarse de que sus sistemas se recuperan correctamente.</li>
                <li>• <strong>Previsibilidad de rendimiento:</strong> Utilizando niveles Premium de Azure SQL Database, garantizan 
                que las transacciones se procesan dentro de los límites de tiempo requeridos.</li>
                <li>• <strong>Previsibilidad de costos:</strong> Con Azure Reservations, pueden reservar capacidad con antelación 
                obteniendo descuentos significativos y haciendo que los costos sean más predecibles.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg border border-green-200 dark:border-green-800">
          <div className="flex items-start">
            <InformationCircleIcon className="h-6 w-6 text-green-600 dark:text-green-400 mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-green-700 dark:text-green-300 mb-2">Importancia para el examen AZ-900</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Para el examen AZ-900, es importante comprender cómo Azure garantiza la confiabilidad y previsibilidad:
              </p>
              <ul className="mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                <li>• Cómo los SLAs (Acuerdos de Nivel de Servicio) proporcionan garantías de tiempo de funcionamiento</li>
                <li>• El papel de las regiones y zonas de disponibilidad en la confiabilidad</li>
                <li>• Cómo la redundancia y replicación contribuyen a la confiabilidad</li>
                <li>• Cómo las herramientas de Azure ayudan a predecir y controlar costos</li>
                <li>• Cómo los diferentes niveles de servicio proporcionan diferentes niveles de rendimiento</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),

    security: (
      <div className="space-y-6">
        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-5 border border-purple-200 dark:border-purple-800">
          <h3 className="text-lg font-medium text-purple-700 dark:text-purple-300 mb-3 flex items-center">
            <ShieldCheckIcon className="h-5 w-5 mr-2" />
            Seguridad y gobernanza en la nube
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Azure proporciona herramientas y servicios avanzados para proteger tus datos y aplicaciones, 
            así como para implementar políticas y controles consistentes a través de tu entorno en la nube.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <h4 className="font-medium text-purple-600 dark:text-purple-400 mb-3">Seguridad</h4>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Azure ofrece múltiples capas de seguridad para proteger tus datos, aplicaciones e infraestructura.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <ChevronRightIcon className="h-5 w-5 text-purple-500 dark:text-purple-400 mr-2 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-800 dark:text-gray-200">Microsoft Defender for Cloud:</span>
                  <p className="text-gray-700 dark:text-gray-300">Proporciona visibilidad centralizada, supervisión continua y recomendaciones de seguridad adaptativas.</p>
                </div>
              </li>
              <li className="flex items-start">
                <ChevronRightIcon className="h-5 w-5 text-purple-500 dark:text-purple-400 mr-2 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-800 dark:text-gray-200">Azure Key Vault:</span>
                  <p className="text-gray-700 dark:text-gray-300">Servicio para administrar claves, secretos y certificados de forma segura.</p>
                </div>
              </li>
              <li className="flex items-start">
                <ChevronRightIcon className="h-5 w-5 text-purple-500 dark:text-purple-400 mr-2 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-800 dark:text-gray-200">Azure DDoS Protection:</span>
                  <p className="text-gray-700 dark:text-gray-300">Protección contra ataques de denegación de servicio distribuido.</p>
                </div>
              </li>
              <li className="flex items-start">
                <ChevronRightIcon className="h-5 w-5 text-purple-500 dark:text-purple-400 mr-2 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-800 dark:text-gray-200">Azure Firewall:</span>
                  <p className="text-gray-700 dark:text-gray-300">Servicio de seguridad de red gestionado y basado en la nube.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <h4 className="font-medium text-purple-600 dark:text-purple-400 mb-3">Gobernanza</h4>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              La gobernanza en Azure permite establecer reglas y políticas para asegurar el cumplimiento y control.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <ChevronRightIcon className="h-5 w-5 text-purple-500 dark:text-purple-400 mr-2 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-800 dark:text-gray-200">Azure Policy:</span>
                  <p className="text-gray-700 dark:text-gray-300">Permite crear, asignar y administrar políticas que controlan o auditan los recursos.</p>
                </div>
              </li>
              <li className="flex items-start">
                <ChevronRightIcon className="h-5 w-5 text-purple-500 dark:text-purple-400 mr-2 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-800 dark:text-gray-200">Azure Blueprints:</span>
                  <p className="text-gray-700 dark:text-gray-300">Permite definir un conjunto repetible de recursos de Azure que implementan y cumplen con los estándares, patrones y requisitos.</p>
                </div>
              </li>
              <li className="flex items-start">
                <ChevronRightIcon className="h-5 w-5 text-purple-500 dark:text-purple-400 mr-2 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-800 dark:text-gray-200">Microsoft Purview:</span>
                  <p className="text-gray-700 dark:text-gray-300">Solución unificada para la gobernanza de datos y el cumplimiento en entornos locales, multicloud y SaaS.</p>
                </div>
              </li>
              <li className="flex items-start">
                <ChevronRightIcon className="h-5 w-5 text-purple-500 dark:text-purple-400 mr-2 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-800 dark:text-gray-200">Control de acceso basado en roles (RBAC):</span>
                  <p className="text-gray-700 dark:text-gray-300">Sistema de autorización que permite gestionar quién tiene acceso a los recursos de Azure y qué pueden hacer con esos recursos.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-start">
            <LightBulbIcon className="h-6 w-6 text-yellow-500 dark:text-yellow-400 mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Ejemplo práctico</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Un hospital que maneja información médica sensible utiliza Azure para mejorar su seguridad y gobernanza:
              </p>
              <ul className="mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                <li>• <strong>Seguridad de datos:</strong> Utilizan Azure Storage con cifrado en reposo para proteger la información de los pacientes.</li>
                <li>• <strong>Control de acceso:</strong> Implementan Azure RBAC para garantizar que solo el personal autorizado pueda acceder a ciertos datos.</li>
                <li>• <strong>Políticas de cumplimiento:</strong> Utilizan Azure Policy para asegurar que todos los recursos cumplan con las normativas sanitarias (como HIPAA).</li>
                <li>• <strong>Auditoría:</strong> Configuran Azure Monitor y logs de actividad para registrar quién accede a qué datos y cuándo.</li>
                <li>• <strong>Protección contra amenazas:</strong> Utilizan Microsoft Defender for Cloud para detectar y responder a amenazas potenciales.</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                Esto les permite mantener un entorno seguro y cumplir con las estrictas regulaciones del sector sanitario, 
                algo que sería mucho más difícil de lograr con infraestructura tradicional.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-lg border border-purple-200 dark:border-purple-800">
          <div className="flex items-start">
            <InformationCircleIcon className="h-6 w-6 text-purple-600 dark:text-purple-400 mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-purple-700 dark:text-purple-300 mb-2">Importancia para el examen AZ-900</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Para el examen AZ-900, debes comprender los conceptos básicos de seguridad y gobernanza en Azure:
              </p>
              <ul className="mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                <li>• Los principios básicos del modelo de seguridad de Azure</li>
                <li>• Cómo funciona el control de acceso basado en roles (RBAC)</li>
                <li>• Qué es Microsoft Defender for Cloud y cómo ayuda a mejorar la postura de seguridad</li>
                <li>• Cómo Azure Policy ayuda a implementar la gobernanza</li>
                <li>• El concepto de confianza cero y defensa en profundidad</li>
                <li>• Cómo Azure facilita el cumplimiento normativo (aunque no necesitas conocer regulaciones específicas)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),

    manageability: (
      <div className="space-y-6">
        <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-5 border border-amber-200 dark:border-amber-800">
          <h3 className="text-lg font-medium text-amber-700 dark:text-amber-300 mb-3 flex items-center">
            <CogIcon className="h-5 w-5 mr-2" />
            Capacidad de administración en la nube
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Azure proporciona un conjunto completo de herramientas para gestionar, monitorear, configurar y optimizar 
            tus recursos en la nube, lo que simplifica significativamente las tareas de administración.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <h4 className="font-medium text-amber-600 dark:text-amber-400 mb-3">Administración centralizada</h4>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Azure ofrece interfaces unificadas para gestionar todos tus recursos en la nube.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <ChevronRightIcon className="h-5 w-5 text-amber-500 dark:text-amber-400 mr-2 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-800 dark:text-gray-200">Azure Portal:</span>
                  <p className="text-gray-700 dark:text-gray-300">Interfaz gráfica basada en web para administrar todos los recursos de Azure.</p>
                </div>
              </li>
              <li className="flex items-start">
                <ChevronRightIcon className="h-5 w-5 text-amber-500 dark:text-amber-400 mr-2 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-800 dark:text-gray-200">Azure PowerShell y CLI:</span>
                  <p className="text-gray-700 dark:text-gray-300">Herramientas de línea de comandos para automatizar tareas de administración.</p>
                </div>
              </li>
              <li className="flex items-start">
                <ChevronRightIcon className="h-5 w-5 text-amber-500 dark:text-amber-400 mr-2 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-800 dark:text-gray-200">Azure Cloud Shell:</span>
                  <p className="text-gray-700 dark:text-gray-300">Entorno de shell interactivo basado en navegador para administrar recursos de Azure.</p>
                </div>
              </li>
              <li className="flex items-start">
                <ChevronRightIcon className="h-5 w-5 text-amber-500 dark:text-amber-400 mr-2 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-800 dark:text-gray-200">Azure Mobile App:</span>
                  <p className="text-gray-700 dark:text-gray-300">Aplicación móvil para monitorear y administrar recursos de Azure sobre la marcha.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <h4 className="font-medium text-amber-600 dark:text-amber-400 mb-3">Automatización y monitoreo</h4>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Azure proporciona herramientas para automatizar tareas repetitivas y supervisar el rendimiento y la salud de tus recursos.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <ChevronRightIcon className="h-5 w-5 text-amber-500 dark:text-amber-400 mr-2 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-800 dark:text-gray-200">Azure Automation:</span>
                  <p className="text-gray-700 dark:text-gray-300">Servicio para automatizar tareas manuales, repetitivas y que consumen mucho tiempo.</p>
                </div>
              </li>
              <li className="flex items-start">
                <ChevronRightIcon className="h-5 w-5 text-amber-500 dark:text-amber-400 mr-2 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-800 dark:text-gray-200">Azure Monitor:</span>
                  <p className="text-gray-700 dark:text-gray-300">Servicio para recopilar, analizar y actuar sobre datos de telemetría de tus entornos en la nube y locales.</p>
                </div>
              </li>
              <li className="flex items-start">
                <ChevronRightIcon className="h-5 w-5 text-amber-500 dark:text-amber-400 mr-2 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-800 dark:text-gray-200">Azure Advisor:</span>
                  <p className="text-gray-700 dark:text-gray-300">Servicio que analiza tu configuración y uso, y recomienda soluciones para optimizar tus implementaciones.</p>
                </div>
              </li>
              <li className="flex items-start">
                <ChevronRightIcon className="h-5 w-5 text-amber-500 dark:text-amber-400 mr-2 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-800 dark:text-gray-200">Infraestructura como código:</span>
                  <p className="text-gray-700 dark:text-gray-300">Utilizando ARM Templates o Bicep para definir y desplegar infraestructura de manera consistente y repetible.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-start">
            <LightBulbIcon className="h-6 w-6 text-yellow-500 dark:text-yellow-400 mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Ejemplo práctico</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Una empresa de desarrollo de software ha migrado su infraestructura a Azure y ahora aprovecha las capacidades de administración:
              </p>
              <ul className="mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                <li>• <strong>Configuración automatizada:</strong> Utilizan plantillas ARM para desplegar entornos de desarrollo idénticos 
                para cada nuevo proyecto, eliminando la configuración manual y los errores humanos.</li>
                <li>• <strong>Monitoreo proactivo:</strong> Han configurado alertas en Azure Monitor para notificarles cuando hay problemas 
                de rendimiento o cuando se alcanzan ciertos umbrales de uso de recursos.</li>
                <li>• <strong>Optimización automática:</strong> Siguen las recomendaciones de Azure Advisor para reducir costos, 
                mejorar el rendimiento y aumentar la seguridad.</li>
                <li>• <strong>Actualizaciones programadas:</strong> Utilizan Azure Automation para programar parches y actualizaciones 
                durante las horas de menor actividad, minimizando el impacto en los usuarios.</li>
                <li>• <strong>Gestión centralizada:</strong> Los administradores utilizan el portal de Azure y la aplicación móvil para 
                gestionar todos los recursos desde una única interfaz, incluso cuando están fuera de la oficina.</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                Como resultado, han reducido significativamente el tiempo dedicado a tareas de administración rutinarias, 
                han mejorado la fiabilidad de sus sistemas y pueden responder más rápidamente a los incidentes.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 dark:bg-amber-900/20 p-5 rounded-lg border border-amber-200 dark:border-amber-800">
          <div className="flex items-start">
            <InformationCircleIcon className="h-6 w-6 text-amber-600 dark:text-amber-400 mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-amber-700 dark:text-amber-300 mb-2">Importancia para el examen AZ-900</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Para el examen AZ-900, debes comprender las herramientas y características clave de administración en Azure:
              </p>
              <ul className="mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                <li>• Las diferentes herramientas disponibles para administrar Azure (Portal, CLI, PowerShell, SDKs)</li>
                <li>• Cómo Azure Monitor ayuda a mantener visibilidad sobre el rendimiento y la disponibilidad</li>
                <li>• La función de Azure Advisor en la optimización de recursos</li>
                <li>• Cómo Azure Automation puede simplificar tareas repetitivas</li>
                <li>• El concepto de infraestructura como código y su importancia</li>
                <li>• Cómo los grupos de administración, suscripciones y grupos de recursos ayudan a organizar y administrar recursos</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center mb-8">
        <LightBulbIcon className="h-8 w-8 text-azure-600 dark:text-azure-400 mr-3" />
        <h1 className="text-3xl font-bold text-azure-700 dark:text-azure-400">Ventajas de usar servicios en la nube</h1>
      </div>
      
      <div className="bg-azure-50 dark:bg-azure-900/20 p-6 rounded-lg border border-azure-100 dark:border-azure-900/50 mb-8">
        <h2 className="text-lg font-semibold text-azure-700 dark:text-azure-400 mb-4">¿Por qué son importantes las ventajas de la nube?</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Las ventajas de la nube representan el <strong>valor fundamental</strong> que Azure y otros proveedores de servicios 
          en la nube ofrecen a sus clientes. Estas ventajas explican por qué las organizaciones están migrando a la nube y 
          abandonando los centros de datos tradicionales.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Comprender estas ventajas es esencial para el examen AZ-900, ya que aproximadamente el 25-30% del examen 
          se centra en los conceptos de la nube, incluyendo sus beneficios y características fundamentales.
        </p>
      </div>
      
      {/* Tabs de Navegación */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-8">
        {benefitCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveTab(category.id)}
            className={`p-4 rounded-lg transition-colors flex flex-col items-center ${
              activeTab === category.id 
                ? category.color + ' ' + category.textColor + ' shadow-sm'
                : 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-750 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700'
            }`}
          >
            <category.icon className="h-8 w-8 mb-2" />
            <span className="text-center text-sm font-medium">{category.title}</span>
          </button>
        ))}
      </div>
      
      {/* Contenido de la categoría activa */}
      {benefitContents[activeTab]}
      
      <div className="mt-8 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Resumen de ventajas de la nube</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Estas ventajas de la nube trabajan en conjunto para proporcionar un entorno más ágil, eficiente, 
          seguro y rentable para ejecutar aplicaciones y almacenar datos que los centros de datos tradicionales.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start">
            <ChartBarIcon className="h-5 w-5 text-blue-500 dark:text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-medium text-gray-800 dark:text-gray-200">Alta disponibilidad y escalabilidad</span>
              <p className="text-sm text-gray-600 dark:text-gray-400">Garantiza que tus aplicaciones estén siempre disponibles y puedan crecer según la demanda.</p>
            </div>
          </div>
          <div className="flex items-start">
            <ArrowPathIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-medium text-gray-800 dark:text-gray-200">Confiabilidad y previsibilidad</span>
              <p className="text-sm text-gray-600 dark:text-gray-400">Proporciona sistemas que funcionan de manera consistente y con costos predecibles.</p>
            </div>
          </div>
          <div className="flex items-start">
            <ShieldCheckIcon className="h-5 w-5 text-purple-500 dark:text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-medium text-gray-800 dark:text-gray-200">Seguridad y gobernanza</span>
              <p className="text-sm text-gray-600 dark:text-gray-400">Protege tus datos e implementa políticas consistentes a través de tu entorno.</p>
            </div>
          </div>
          <div className="flex items-start">
            <CogIcon className="h-5 w-5 text-amber-500 dark:text-amber-400 mr-2 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-medium text-gray-800 dark:text-gray-200">Capacidad de administración</span>
              <p className="text-sm text-gray-600 dark:text-gray-400">Simplifica la gestión, monitoreo y automatización de recursos.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}