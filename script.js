const agregar = (valor) => {
    document.getElementById('pantalla').value += valor;
}

const borrar = () => {
    document.getElementById('pantalla').value = '';
}

const calcular = () => {
    try {
        const valorPantalla = document.getElementById('pantalla').value;
        const resultado = eval(valorPantalla);
        document.getElementById('pantalla').value = resultado;
    } catch (error) {
        document.getElementById('pantalla').value = 'Error';
    }
}
