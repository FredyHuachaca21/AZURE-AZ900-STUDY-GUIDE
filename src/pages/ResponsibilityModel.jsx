import { useState } from 'react';
import { ArrowRightIcon, InformationCircleIcon } from '@heroicons/react/24/outline';

export default function ResponsibilityModel() {
  const [viewMode, setViewMode] = useState('interactive'); // 'interactive' or 'table'

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-azure-700">Modelo de Responsabilidad Compartida de Azure</h1>
        <div className="flex gap-2">
          <button 
            className={`btn ${viewMode === 'interactive' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setViewMode('interactive')}
          >
            Vista Interactiva
          </button>
          <button 
            className={`btn ${viewMode === 'table' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setViewMode('table')}
          >
            Vista Tabla
          </button>
        </div>
      </div>

      <div className="mb-6 bg-azure-50 p-4 rounded-lg flex items-start">
        <InformationCircleIcon className="h-6 w-6 text-azure-600 mr-2 flex-shrink-0 mt-1" />
        <p className="text-gray-700">
          El <strong>Modelo de Responsabilidad Compartida</strong> define qué aspectos de seguridad y operación
          son responsabilidad de Microsoft y cuáles son responsabilidad del cliente en los diferentes modelos de servicio en la nube.
          Comprender este modelo es esencial para la certificación AZ-900.
        </p>
      </div>

      {viewMode === 'interactive' ? (
        <InteractiveView />
      ) : (
        <TableView />
      )}

      <div className="mt-12 bg-gray-50 p-6 rounded-lg border border-gray-200">
        <h2 className="text-xl font-semibold text-azure-700 mb-4">¿Por qué es importante para el examen AZ-900?</h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <ArrowRightIcon className="h-5 w-5 text-azure-500 mr-2 mt-0.5 flex-shrink-0" />
            <p>El modelo de responsabilidad compartida es un concepto fundamental en la adopción de la nube y aparece 
            frecuentemente en preguntas del examen.</p>
          </li>
          <li className="flex items-start">
            <ArrowRightIcon className="h-5 w-5 text-azure-500 mr-2 mt-0.5 flex-shrink-0" />
            <p>Entender qué protege Microsoft y qué debes proteger tú es crucial para implementar la seguridad en la nube correctamente.</p>
          </li>
          <li className="flex items-start">
            <ArrowRightIcon className="h-5 w-5 text-azure-500 mr-2 mt-0.5 flex-shrink-0" />
            <p>Las preguntas del examen suelen evaluar tu comprensión sobre quién es responsable de qué en diferentes 
            escenarios de implementación (SaaS, PaaS, IaaS).</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

function InteractiveView() {
  const [highlightedSection, setHighlightedSection] = useState(null);
  
  const sections = [
    {
      id: 'customer',
      title: 'Responsabilidad siempre retenida por el cliente',
      items: [
        'Información y datos',
        'Dispositivos (Móviles y PCs)',
        'Cuentas e identidades'
      ],
      color: 'bg-yellow-50 border-yellow-200',
      description: 'Sin importar el modelo de servicio en la nube, el cliente siempre mantiene la responsabilidad sobre estos elementos.'
    },
    {
      id: 'varies',
      title: 'Responsabilidad varía según el tipo',
      items: [
        'Infraestructura de identidad y directorio',
        'Aplicaciones',
        'Controles de red',
        'Sistema operativo'
      ],
      color: 'bg-blue-50 border-blue-200',
      description: 'La responsabilidad de estos componentes cambia dependiendo de si estás usando SaaS, PaaS o IaaS.'
    },
    {
      id: 'provider',
      title: 'Responsabilidad transferida al proveedor de la nube',
      items: [
        'Hosts físicos',
        'Red física',
        'Centro de datos físico'
      ],
      color: 'bg-green-50 border-green-200',
      description: 'Microsoft asume la responsabilidad de la infraestructura física en todos los modelos de nube (SaaS, PaaS, IaaS).'
    }
  ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="responsibility-grid">
            <div className="responsibility-header col-span-1">Responsabilidad</div>
            <div className="responsibility-header">SaaS</div>
            <div className="responsibility-header">PaaS</div>
            <div className="responsibility-header">IaaS</div>
            <div className="responsibility-header">Local</div>
            
            <div className="section-header">Responsabilidad siempre retenida por el cliente</div>
            
            <div className="item">Información y datos</div>
            <div className="customer"></div>
            <div className="customer"></div>
            <div className="customer"></div>
            <div className="customer"></div>
            
            <div className="item">Dispositivos (Móviles y PCs)</div>
            <div className="customer"></div>
            <div className="customer"></div>
            <div className="customer"></div>
            <div className="customer"></div>
            
            <div className="item">Cuentas e identidades</div>
            <div className="customer"></div>
            <div className="customer"></div>
            <div className="customer"></div>
            <div className="customer"></div>
            
            <div className="section-header">Responsabilidad varía según el tipo</div>
            
            <div className="item">Infraestructura de identidad y directorio</div>
            <div className="shared"></div>
            <div className="shared"></div>
            <div className="customer"></div>
            <div className="customer"></div>
            
            <div className="item">Aplicaciones</div>
            <div className="microsoft"></div>
            <div className="shared"></div>
            <div className="customer"></div>
            <div className="customer"></div>
            
            <div className="item">Controles de red</div>
            <div className="microsoft"></div>
            <div className="shared"></div>
            <div className="customer"></div>
            <div className="customer"></div>
            
            <div className="item">Sistema operativo</div>
            <div className="microsoft"></div>
            <div className="microsoft"></div>
            <div className="customer"></div>
            <div className="customer"></div>
            
            <div className="section-header">Responsabilidad transferida al proveedor de la nube</div>
            
            <div className="item">Hosts físicos</div>
            <div className="microsoft"></div>
            <div className="microsoft"></div>
            <div className="microsoft"></div>
            <div className="customer"></div>
            
            <div className="item">Red física</div>
            <div className="microsoft"></div>
            <div className="microsoft"></div>
            <div className="microsoft"></div>
            <div className="customer"></div>
            
            <div className="item">Centro de datos físico</div>
            <div className="microsoft"></div>
            <div className="microsoft"></div>
            <div className="microsoft"></div>
            <div className="customer"></div>
          </div>
          
          <div className="flex justify-center space-x-6 mt-4">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-microsoft-blue mr-2"></div>
              <span className="text-sm">Microsoft</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-microsoft-dark mr-2"></div>
              <span className="text-sm">Cliente</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-gradient-to-r from-microsoft-blue to-microsoft-dark mr-2"></div>
              <span className="text-sm">Compartido</span>
            </div>
          </div>
        </div>
        
        <div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-azure-700 mb-3">Elige una sección para más detalles:</h2>
            <div className="space-y-2">
              {sections.map(section => (
                <button
                  key={section.id}
                  className={`w-full text-left p-3 rounded-lg border transition-colors ${
                    highlightedSection === section.id ? section.color + ' font-medium' : 'bg-white border-gray-200 hover:bg-gray-50'
                  }`}
                  onClick={() => setHighlightedSection(section.id)}
                >
                  {section.title}
                </button>
              ))}
            </div>
          </div>
          
          {highlightedSection && (
            <div className={`p-4 rounded-lg border ${sections.find(s => s.id === highlightedSection).color}`}>
              <h3 className="font-medium text-lg text-gray-900 mb-3">
                {sections.find(s => s.id === highlightedSection).title}
              </h3>
              <p className="text-gray-700 mb-4">
                {sections.find(s => s.id === highlightedSection).description}
              </p>
              <div className="bg-white p-3 rounded shadow-sm">
                <h4 className="font-medium text-gray-900 mb-2">Componentes:</h4>
                <ul className="space-y-1">
                  {sections.find(s => s.id === highlightedSection).items.map(item => (
                    <li key={item} className="flex items-start">
                      <ArrowRightIcon className="h-4 w-4 text-azure-500 mr-2 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function TableView() {
  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th className="th">Componente</th>
            <th className="th">Descripción</th>
            <th className="th">SaaS</th>
            <th className="th">PaaS</th>
            <th className="th">IaaS</th>
            <th className="th">Local</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          <tr className="bg-yellow-50">
            <td className="td font-medium" colSpan="6">Responsabilidad siempre retenida por el cliente</td>
          </tr>
          <tr>
            <td className="td font-medium">Información y datos</td>
            <td className="td">Los datos del cliente, su clasificación, cumplimiento y protección</td>
            <td className="td text-center">Cliente</td>
            <td className="td text-center">Cliente</td>
            <td className="td text-center">Cliente</td>
            <td className="td text-center">Cliente</td>
          </tr>
          <tr>
            <td className="td font-medium">Dispositivos (Móviles y PCs)</td>
            <td className="td">Administración y seguridad de dispositivos finales</td>
            <td className="td text-center">Cliente</td>
            <td className="td text-center">Cliente</td>
            <td className="td text-center">Cliente</td>
            <td className="td text-center">Cliente</td>
          </tr>
          <tr>
            <td className="td font-medium">Cuentas e identidades</td>
            <td className="td">Administración de cuentas de usuario y autenticación</td>
            <td className="td text-center">Cliente</td>
            <td className="td text-center">Cliente</td>
            <td className="td text-center">Cliente</td>
            <td className="td text-center">Cliente</td>
          </tr>
          
          <tr className="bg-blue-50">
            <td className="td font-medium" colSpan="6">Responsabilidad varía según el tipo</td>
          </tr>
          <tr>
            <td className="td font-medium">Infraestructura de identidad y directorio</td>
            <td className="td">Servicios de directorio e infraestructura de identidades</td>
            <td className="td text-center">Compartido</td>
            <td className="td text-center">Compartido</td>
            <td className="td text-center">Cliente</td>
            <td className="td text-center">Cliente</td>
          </tr>
          <tr>
            <td className="td font-medium">Aplicaciones</td>
            <td className="td">Desarrollo, implementación y mantenimiento de aplicaciones</td>
            <td className="td text-center">Microsoft</td>
            <td className="td text-center">Compartido</td>
            <td className="td text-center">Cliente</td>
            <td className="td text-center">Cliente</td>
          </tr>
          <tr>
            <td className="td font-medium">Controles de red</td>
            <td className="td">Reglas de firewall, configuración de red, seguridad</td>
            <td className="td text-center">Microsoft</td>
            <td className="td text-center">Compartido</td>
            <td className="td text-center">Cliente</td>
            <td className="td text-center">Cliente</td>
          </tr>
          <tr>
            <td className="td font-medium">Sistema operativo</td>
            <td className="td">Configuración, parches y actualizaciones</td>
            <td className="td text-center">Microsoft</td>
            <td className="td text-center">Microsoft</td>
            <td className="td text-center">Cliente</td>
            <td className="td text-center">Cliente</td>
          </tr>
          
          <tr className="bg-green-50">
            <td className="td font-medium" colSpan="6">Responsabilidad transferida al proveedor de la nube</td>
          </tr>
          <tr>
            <td className="td font-medium">Hosts físicos</td>
            <td className="td">Servidores físicos y hardware de computación</td>
            <td className="td text-center">Microsoft</td>
            <td className="td text-center">Microsoft</td>
            <td className="td text-center">Microsoft</td>
            <td className="td text-center">Cliente</td>
          </tr>
          <tr>
            <td className="td font-medium">Red física</td>
            <td className="td">Routers, conmutadores, cableado</td>
            <td className="td text-center">Microsoft</td>
            <td className="td text-center">Microsoft</td>
            <td className="td text-center">Microsoft</td>
            <td className="td text-center">Cliente</td>
          </tr>
          <tr>
            <td className="td font-medium">Centro de datos físico</td>
            <td className="td">Seguridad física, electricidad, refrigeración</td>
            <td className="td text-center">Microsoft</td>
            <td className="td text-center">Microsoft</td>
            <td className="td text-center">Microsoft</td>
            <td className="td text-center">Cliente</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}