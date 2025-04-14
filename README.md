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

## Despliegue con GitHub Actions

Este proyecto está configurado para ser desplegado automáticamente en GitHub Pages utilizando GitHub Actions. Sigue estos pasos para habilitar el despliegue:

1. Asegúrate de que el repositorio sea público o, si es privado, que tengas GitHub Pro.
2. Ve a la configuración del repositorio (Settings).
3. Navega a "Pages" en el menú lateral.
4. En "Source", selecciona "GitHub Actions".
5. Con estos pasos y los archivos de configuración ya incluidos en el repositorio, cada vez que hagas un push a la rama main, el sitio se construirá y desplegará automáticamente.

La URL de tu sitio será: `https://[tu-usuario-github].github.io/azure-az900-study-guide/`