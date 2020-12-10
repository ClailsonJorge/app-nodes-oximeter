import { paciente } from "../mock/pacientes"




interface TypesPacientes {
  id: number;
  nome: string;
  leito: number;
  oximetro?: string;
  termometro?: string;
}


export default class Pacientes {
  pacientes:TypesPacientes[] = paciente;

  getListPacientes():TypesPacientes[]{
    return this.pacientes;
  }

  getPaciente(nome:string):TypesPacientes | boolean{
    const paciente = this.pacientes.find(e=>e.nome === nome);
    return !!paciente ? paciente : false ;
  }

  setListPacientes(paciente:TypesPacientes){
    paciente.id = this.pacientes.length;
    this.pacientes.push(paciente);
  }

  vincularOximetro(nome:string, name:string){
    const index = this.pacientes.findIndex(e=>e.nome === nome);
    const existOxi = this.pacientes.find(e=>e.oximetro === name);

    if(existOxi){
      return;
    }
    this.pacientes[index].oximetro = name;
  }

  hasPaciente(nome:string):boolean{
    const paciente = this.pacientes.find(e=>e.nome === nome);
    return !!paciente ? true : false;
  }

  updatePaciente(paciente:TypesPacientes){
    const index = this.pacientes.findIndex(e=>e.nome === paciente.nome);
    this.pacientes[index] = paciente;
  }
}
