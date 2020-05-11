//interface do objeto lugar
//eh importado em lugares.service.ts
export interface Lugar {
    id:string;
    titulo:string;
    imgURL:string;
    comentarios:string[];
}