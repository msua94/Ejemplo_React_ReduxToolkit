import {immerable} from "immer";

export class Producto{
    [immerable] = true;
    nombre:string = "";
    cantidad:number = 0;
}