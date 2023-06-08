export class Comida{

    _id?:string;
    nombre:string;
    categoria: string;
    file: File;
    fileUrl?:string;
    __v?:number;


    constructor(nombre:string,categoria:string,file:File,__v:number){
        this.nombre = nombre;
        this.categoria = categoria;
        this.file = file;
        this.__v = __v;
    }
}