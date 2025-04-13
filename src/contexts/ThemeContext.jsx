// Ruta: /src/contexts/ThemeContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';

// Crear el contexto
const ThemeContext = createContext();

// Hook personalizado para usar el contexto
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme debe ser usado dentro de un ThemeProvider');
  }
  return context;
};

// Proveedor de tema
export function ThemeProvider({ children }) {
  // Verificar si hay una preferencia guardada en localStorage
  const getInitialTheme = () => {
    // Verificar localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    
    // Verificar preferencia del sistema
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    
    // Valor predeterminado
    return 'light';
  };
  
  const [theme, setTheme] = useState(getInitialTheme);
  
  // Función para cambiar el tema
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  
  // Aplicar la clase al elemento HTML cuando cambia el tema
  useEffect(() => {
    const root = window.document.documentElement;
    
    // Eliminar la clase anterior
    root.classList.remove('light', 'dark');
    
    // Añadir la nueva clase
    root.classList.add(theme);
    
    // Guardar en localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);
  
  // Proporcionar el contexto
  const value = {
    theme,
    setTheme,
    toggleTheme,
    isDark: theme === 'dark'
  };
  
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}