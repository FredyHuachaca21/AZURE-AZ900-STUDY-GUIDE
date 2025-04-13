// Ruta: /src/components/Navbar.jsx
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { mainNavigation } from '../config/navigationConfig';
import ThemeSwitch from './ThemeSwitch';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md transition-colors duration-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img 
                className="h-10 w-auto"
                src="/azure-logo.svg" 
                alt="Azure Logo"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/vite.svg';
                }}
              />
              <span className="ml-2 text-xl font-bold text-azure-700 dark:text-azure-400">AZ-900 Study Guide</span>
            </div>
          </div>
          
          {/* Desktop menu - Usando navegación dinámica desde la configuración */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {mainNavigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.exact}
                className={({ isActive }) => 
                  isActive ? 'nav-link-active' : 'nav-link'
                }
              >
                <div className="flex items-center space-x-1">
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </div>
              </NavLink>
            ))}
            
            {/* Theme Switch */}
            <div className="ml-2 flex items-center">
              <ThemeSwitch />
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <ThemeSwitch />
            <button
              type="button"
              className="ml-2 inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-azure-600 dark:hover:text-azure-400 hover:bg-azure-50 dark:hover:bg-azure-900/20 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
            >
              <span className="sr-only">Abrir menú principal</span>
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu - También usa navegación dinámica */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 transition-colors duration-200`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {mainNavigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.exact}
              className={({ isActive }) => 
                isActive 
                  ? 'block nav-link-active' 
                  : 'block nav-link'
              }
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center space-x-2">
                <item.icon className="h-5 w-5" />
                <span>{item.name}</span>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}