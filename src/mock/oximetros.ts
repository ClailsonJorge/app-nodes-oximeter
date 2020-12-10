export const oximetros = [
  {
    id: 0,
    name: "ox01",
    spo2: 98,
    bpm: 80,
    estado: 1
  },
  {
    id: 1,
    name: "ox02",
    spo2: 86,
    bpm: 100,
    estado: 2
  },
  {
    id: 2,
    name: "ox03",
    spo2: 82,
    bpm: 60,
    estado: 3
  },
  {
    id: 3,
    name: "ox04",
    spo2: 98,
    bpm: 80,
    estado: 1
  },
];

setInterval(()=>{
  const newArr = oximetros.map(e=>{
    if(e.id === 0){
      return e;
    }
    const spo2 = Math.ceil(Math.random() * 50 + 50);
    const bpm = Math.ceil(Math.random() * 200);
    let estado;
    if(spo2 < 84 && spo2 > 75 || bpm < 60 && bpm > 40 || bpm > 140 && bpm < 170){
      estado = 2;
    }else if(spo2 < 75 || bpm < 40 || bpm > 170) {
      estado = 3;
    }else {
      estado = 1;
    }
    return {
      id: e.id,
      name: e.name,
      spo2: spo2,
      bpm: bpm,
      estado: estado
    }
  })
  oximetros.splice(0,oximetros.length);
  oximetros.push(...newArr);
}, 1000);