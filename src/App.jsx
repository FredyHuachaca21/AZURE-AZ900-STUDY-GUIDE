// Ruta: /src/App.jsx
import { HashRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import UnderConstruction from './components/UnderConstruction';
import { ThemeProvider } from './contexts/ThemeContext';

// Importaciones predeterminadas (carga normal)
import Home from './pages/Home';
import StudyGuide from './pages/StudyGuide';

// Layouts para categorías principales
import CloudConceptsLayout from './layouts/CloudConceptsLayout';
import AzureArchitectureLayout from './layouts/AzureArchitectureLayout';
import ManagementGovernanceLayout from './layouts/ManagementGovernanceLayout';

// Importación con carga diferida para rutas menos frecuentes
const ExamSimulation = lazy(() => import('./pages/ExamSimulation'));
const ResourcesPage = lazy(() => import('./pages/ResourcesPage'));

// Importación de componentes específicos
import WhatIsCloud from './pages/cloud-concepts/WhatIsCloud';

// Importar configuración de navegación
import { examCategories } from './config/navigationConfig';
import ResponsibilityModel from './pages/cloud-concepts/ResponsibilityModel';
import CloudModels from './pages/cloud-concepts/CloudModels';
import ConsumptionModel from './pages/cloud-concepts/ConsumptionModel';
import Benefits from './pages/cloud-concepts/Benefits';
import Serverless from './pages/cloud-concepts/Serverless';
import ServiceTypes from './pages/cloud-concepts/ServiceTypes';
import WhatIsAzure from './pages/azure-architecture/WhatIsAzure';
import AzureAccounts from './pages/azure-architecture/AzureAccounts';
import PhysicalInfrastructure from './pages/azure-architecture/PhysicalInfrastructure';

function App() {
  return (
    <ThemeProvider>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow container mx-auto px-4 py-8">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                {/* Ruta principal */}
                <Route path="/" element={<Home />} />
                
                {/* Rutas principales de navegación */}
                <Route path="/study-guide" element={<StudyGuide />} />
                <Route path="/resources" element={<ResourcesPage />} />
                
                {/* Rutas para Simulador de Examen */}
                <Route path="/exam-simulation" element={<ExamSimulation />} />
                <Route path="/exam-simulation/:category" element={<UnderConstruction />} />
                
                {/* Rutas dinámicas para Conceptos de la Nube (Categoría 1) */}
                <Route path="/cloud-concepts" element={<CloudConceptsLayout />}>
                  <Route index element={<Navigate to="what-is-cloud" replace />} />
                  <Route path="what-is-cloud" element={<WhatIsCloud />} />
                  <Route path="shared-responsibility" element={<ResponsibilityModel />} />
                  <Route path="cloud-models" element={<CloudModels />} />
                  <Route path="consumption-model" element={<ConsumptionModel/>} />
                  <Route path="serverless" element={<Serverless />} />
                  <Route path="benefits" element={<Benefits />} />
                  <Route path="service-types" element={<ServiceTypes />} />
                  {examCategories[0].topics
                    .filter(topic => topic.id !== 'what-is-cloud')
                    .map(topic => (
                      <Route 
                      key={topic.id}
                      path={topic.id}
                      element={<UnderConstruction />}
                      />
                    ))}
                </Route>
                
                {/* Rutas dinámicas para Arquitectura de Azure (Categoría 2) */}
                <Route path="/azure-architecture" element={<AzureArchitectureLayout />}>
                  <Route index element={<Navigate to="components" replace />} />
                  <Route path="what-is-azure" element={<WhatIsAzure />} />
                  <Route path="azure-accounts" element={<AzureAccounts />} />
                  <Route path="physical-infrastructure" element={<PhysicalInfrastructure/>} />
                  {examCategories[1].topics
                    .filter(topic => !['what-is-azure', 'azure-accounts'].includes(topic.id))
                    .map(topic => (
                      <Route 
                        key={topic.id}
                        path={topic.id}
                        element={<UnderConstruction />}
                      />
                    ))}
                </Route>
                
                {/* Rutas dinámicas para Administración y Gobernanza (Categoría 3) */}
                <Route path="/management-governance" element={<ManagementGovernanceLayout />}>
                  <Route index element={<Navigate to="cost-management" replace />} />
                  {examCategories[2].topics.map(topic => (
                    <Route 
                      key={topic.id}
                      path={topic.id}
                      element={<UnderConstruction />}
                    />
                  ))}
                </Route>
                
                {/* Ruta de fallback para páginas no encontradas */}
                <Route path="*" element={
                  <div className="text-center py-12">
                    <h1 className="text-2xl text-gray-700 dark:text-gray-300 mb-4">Página no encontrada</h1>
                    <p className="mb-6">Lo sentimos, la página que buscas no existe.</p>
                    <a href="/" className="btn btn-primary">Volver al inicio</a>
                  </div>
                } />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;