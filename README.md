# GUIA DE ESTUDIOS AZ-900

## ESTRUCTURA DE DIRECTORIOS
```
/src
├── App.jsx                   # Componente principal de la aplicación
├── main.jsx                  # Punto de entrada de la aplicación
├── index.css                 # Estilos globales
├── components/               # Componentes reutilizables
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── LoadingSpinner.jsx
│   └── UnderConstruction.jsx
├── config/                   # Archivos de configuración
│   └── navigationConfig.js
├── layouts/                  # Layouts para las diferentes secciones
│   ├── CloudConceptsLayout.jsx
│   ├── AzureArchitectureLayout.jsx
│   └── ManagementGovernanceLayout.jsx
└── pages/                    # Páginas principales y de contenido
    ├── Home.jsx
    ├── StudyGuide.jsx
    ├── ResponsibilityModel.jsx
    ├── ExamSimulation.jsx
    ├── ResourcesPage.jsx
    ├── cloud-concepts/       # Carpeta para temas de Conceptos de la Nube
    │   ├── WhatIsCloud.jsx   
    │   ├── SharedResponsibility.jsx
    │   ├── CloudModels.jsx
    │   └── ...
    ├── azure-architecture/   # Carpeta para temas de Arquitectura de Azure
    │   ├── Components.jsx
    │   ├── ComputeServices.jsx
    │   └── ...
    ├── management-governance/ # Carpeta para temas de Administración y Gobernanza
    │   ├── CostManagement.jsx
    │   └── ...
    └── exam-simulation/      # Componentes relacionados con el simulador de examen
        ├── CategoryOneExam.jsx
        ├── CategoryTwoExam.jsx
        └── CategoryThreeExam.jsx
```