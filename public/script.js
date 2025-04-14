// Función para manejo de redirecciones en GitHub Pages
(function() {
  // Verifica si estamos en GitHub Pages (producción) o desarrollo local
  const isProduction = window.location.hostname !== 'localhost' && 
                       window.location.hostname !== '127.0.0.1';
  
  // Verifica si hay una ruta almacenada de una redirección anterior
  const redirectPath = sessionStorage.getItem('redirectPath');
  if (redirectPath) {
    // Elimina el path de la sesión para evitar redirecciones futuras
    sessionStorage.removeItem('redirectPath');
    
    // Obtiene el path relativo quitando la base path
    const basePath = isProduction ? '/AZURE-AZ900-STUDY-GUIDE' : '';
    const relativePath = redirectPath.startsWith(basePath) 
      ? redirectPath.slice(basePath.length) 
      : redirectPath;
    
    // Si hay un path relativo, redirigir a la ruta hash correspondiente
    if (relativePath && relativePath !== '/') {
      window.location.hash = relativePath;
    }
  }
})(); 