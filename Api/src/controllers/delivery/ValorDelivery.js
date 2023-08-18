require('dotenv').config();

const calcularValorDelivery = async (valorDistancia,  valorAPagar, valorACobrar, ) => {
  try {
   
    // Calcular valor total sumando los componentes anteriores y el costo base
    const valorTotal =
      valorDistancia +
      parseFloat(process.env.COSTO_BASE_ENVIO) +
      valorAPagar * parseFloat(process.env.PORCENTAJE_COMISION_PAGO_ENVIO) +
      valorACobrar * parseFloat(process.env.PORCENTAJE_RECARGO_COBRO_ENVIO);
    
    return valorTotal;
  } catch (error) {
    console.error('Error al calcular el valor del delivery:', error);
    return null;
  }
};

module.exports = calcularValorDelivery;
