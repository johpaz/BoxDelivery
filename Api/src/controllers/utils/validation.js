// Función para validar el formato de un email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  // Función para validar la complejidad de una contraseña
  function isValidPassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
   
    return passwordRegex.test(password);

  }
  
  module.exports = {
    isValidEmail,
    isValidPassword
  };
  