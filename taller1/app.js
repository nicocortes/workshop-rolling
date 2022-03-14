let precioProducto, descuento, precioFinal;

const handleSubmit = () => {
    precioProducto = document.querySelector("#precioProducto").value;
    descuento = document.querySelector("#descuento").value;
    precioFinal = (precioProducto*(100-descuento)/100).toFixed(2);

    if(precioProducto <= 0){
        document.querySelector("#precioProducto").value = "";
        document.querySelector("#descuento").value = "";
        return null;
    } else {
        return precioFinal;
    }
    
}

const showMsj = (e) => {
    e.preventDefault();

    if(handleSubmit()) {
        document.querySelector("#precioFinal").innerText = `$${precioFinal}`;
    } else {
        alert("Ingrese un número válido");
    }
}