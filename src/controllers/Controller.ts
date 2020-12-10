import { Request, Response } from 'express';
import Oximeters, { Oximeter } from '../utils/oximeters'
import Pacientes from '../utils/pacientes';
import Termometro from '../utils/termometro';

const oximetros = new Oximeters;
const pacientes = new Pacientes;
const termometros = new Termometro;

export default class Controller {
  testLink(request: Request, response: Response){
    return response.status(200).send();
  }

  updateAllOximeters(request: Request, response: Response){
    console.log("Rota atualização de todos os oximetros");
    console.log(request.body);
    return response.status(200).send();
  }

  indexOximeter(request: Request, response: Response) {
    return response.json(oximetros.getListOximeter());
  }

  createOximeter(request: Request, response: Response) {
    const {
      name,
    } = request.body;
    if(oximetros.hasItem(name)){
      return response.status(400).send();
    }
    const oximeter:Oximeter = {
      name : name,
      spo2 : 0,
      bpm : 0,
      estado: 1
    };
    oximetros.setListOximeter(oximeter);
    return response.status(201).send();
  }

  getValorOxi(request: Request, response: Response) {
    const { name } = request.params;
    const valorOximetro = oximetros.getValorOxi( name );
    return !!valorOximetro && response.status(200).json(valorOximetro);
  }

  updateOximeter(request: Request, response: Response){
    console.log("Rota de atualização de valores!");
    console.log(request.body);
    const { name } = request.params;
    const { spo2, bpm, estado } = request.body;

    if(!oximetros.hasItem(name)){
      return response.status(400).send();
    }

    oximetros.updateItemList(name,spo2,bpm, estado);
    return response.status(200).send();
  }

  getPacientes(request: Request, response: Response){
    console.log("Rota /pacientes -> getPacientes");
    const paciente = pacientes.getListPacientes();
    return response.status(200).json(paciente);
  }

  getTermometros(request: Request, response: Response){
    const termometro = termometros.getTermometros();
    return response.status(200).json(termometro);
  }
}
