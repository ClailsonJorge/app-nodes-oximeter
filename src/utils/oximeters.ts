import { oximetros } from "../mock/oximetros";


export interface Oximeter {
  id?: number;
  name: string;
  bpm: number;
  spo2: number;
  estado: number;
}
export default class Oximeters {
  oximeter:Oximeter[] = oximetros;

  getListOximeter():Oximeter[]{
    return this.oximeter;
  }

  getOximeter(name:string):Oximeter | boolean {
    const oximetro = this.oximeter.find(e=>e.name === name);
    return !!oximetro ? oximetro : false;
  }

  getValorOxi(name: string): {spo2:number, bpm:number} | false {
    const oximetro = this.oximeter.find(e=>e.name === name);
    return !!oximetro ? { spo2: oximetro.spo2, bpm: oximetro.bpm} : false;
  }

  setListOximeter(oximeter:Oximeter){
    oximeter.id = this.oximeter.length;
    this.oximeter.push(oximeter);
  }

  deleteItemList(id:Number){
    const index = this.oximeter.findIndex(e=>e.id === id);
    this.oximeter.splice(index, 1);
  }

  updateItemList(name:string, spo2:number, bpm:number, estado: number){
    const index = this.oximeter.findIndex(e => e.name === name);
    this.oximeter[index].bpm = bpm;
    this.oximeter[index].spo2 = spo2;
    this.oximeter[index].estado = estado;
  }

  hasItem(name:string):boolean{
    const oximeter = this.oximeter.find(e => e.name === name);
    return !!oximeter ? true : false;
  }
}