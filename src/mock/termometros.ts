export const termometros = [
  {
    id: 0,
    name: "ter01",
    temperatura: 36,
    estado: "Normal"
  },
  {
    id: 1,
    name: "ter02",
    temperatura: 38,
    estado: "Normal"
  },
  {
    id: 2,
    name: "ter03",
    temperatura: 38,
    estado: "Normal"
  },
  {
    id: 3,
    name: "ter04",
    temperatura: 36,
    estado: "Normal"
  },
];
setInterval(()=>{
  const newArr = termometros.map(e=>{
    const temperatura = Math.ceil(Math.random() * 44);
    let estado;
    if(temperatura > 39 && temperatura < 41){
      estado = "Alerta";
    }else if(temperatura > 41 || temperatura < 20) {
      estado = "Critico";
    }else {
      estado = "Normal";
    }
    return {
      id: e.id,
      name: e.name,
      temperatura: temperatura,
      estado: estado
    }
  })
  termometros.splice(0, termometros.length);
  termometros.push(...newArr);
}, 1000);

