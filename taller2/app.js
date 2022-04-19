// Cantidad del cajero:
// 3 billetes de $50
// 2 billetes de $20
// 2 billetes de $10

let billetes = [
  { valor: 50, cantidad: 3 },
  { valor: 20, cantidad: 2 },
  { valor: 10, cantidad: 2 },
];

let extraer = 0;
let cantBilletes = 0;
let papeles = 0;
let entregado = [];
let total = 0; 

const totalCajero = () => {
    total = 0;
    billetes.map((billete) => {
      total += billete.valor * billete.cantidad;
    });
  };
  

  const solicitarDinero = () => {
    entregado = [];

    if (extraer <= total) {
          billetes.map((billete) => {
              if (extraer > 0) {
                cantBilletes = Math.floor(extraer / billete.valor);   
        
                if (cantBilletes > billete.cantidad) {
                  papeles = billete.cantidad;
                } else {
                  papeles = cantBilletes;
                }
        
                billete.cantidad -= papeles;
        
                entregado.push({ valor: billete.valor, cantidad: papeles });
                extraer -= billete.valor * papeles;
              }
          })
      mostrarBilletes();
      totalCajero();
    } else {
      alert("El cajero no dispone de la cantidad solicitada");
    }
  };
          
  
  const mostrarBilletes = () => {
    let contenedorBilletes = document.getElementById("container_billete");
    contenedorBilletes.innerHTML = "";

    for (const papel of entregado) {
      switch (papel.valor) {
        case 50:
          let img50 = null;
          for (let index = 0; index < papel.cantidad; index++) {
            img50 = document.createElement("img");
            img50.src = "./img/b50.png";
            contenedorBilletes.appendChild(img50);
          }
          break;
        case 20:
          let img20 = null;
          for (let index = 0; index < papel.cantidad; index++) {
            img20 = document.createElement("img");
            img20.src = "./img/b20.png";
            contenedorBilletes.appendChild(img20);
          }
          break;
        case 10:
          let img10 = null;
          for (let index = 0; index < papel.cantidad; index++) {
            img10 = document.createElement("img");
            img10.src = "./img/b10.png";
            contenedorBilletes.appendChild(img10);
          }
          break;
      }
    }
  };
  
 
  function botonCantidad(valor) {
    extraer += valor;
    document.querySelector("#inputValue").value = extraer;
  }
  
  document.querySelector("#btn").addEventListener("click", solicitarDinero);
  
  document.querySelector("#inputValue").addEventListener("click", () => {
    document.querySelector("#inputValue").value = "";
    extraer = 0;
    document.getElementById("container_billete").innerHTML = "";
    entregado = [];
  });
  
  totalCajero();
  