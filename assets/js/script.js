document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
   
    const monto = parseFloat(document.getElementById('monto').value);
    const interes = parseFloat(document.getElementById('interes').value);
    const cuotas = parseInt(document.getElementById('cuotas').value);
    
    
    const calcularInteres = (monto, interes) => monto * (interes / 100);
    
    
    const calcularCuotas = (montoTotal, cuotas) => montoTotal / cuotas;
    
   
    const formatearMonto = (monto) => monto.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    
   
    const formatearMoneda = (cantidad) => new Intl.NumberFormat('es-CL', { 
        style: 'currency',
        currency: 'CLP'
    }).format(cantidad);
    
    
    const montoInteres = calcularInteres(monto, interes);
    const montoTotal = monto + montoInteres;
    const montoCuota = calcularCuotas(montoTotal, cuotas);
    
  
    const montoTotalFormateado = formatearMoneda(montoTotal);
    const montoCuotaFormateado = formatearMoneda(montoCuota);
    
   
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `<p>El monto total con intereses es de <strong>${montoTotalFormateado}</strong>.</p>
    <p>Has seleccionado pagar en <strong>${cuotas}</strong> cuotas de <strong>${montoCuotaFormateado}</strong> cada una.</p>`;
  });
  