export function validarEmail(email) { 
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; return regex.test(email);
}

export function validarTelefono(telefono) { 
    const regex = /^\(\d{3}\)\s\d{3}-\d{4}$/; return regex.test(telefono); 
}