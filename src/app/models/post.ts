export class Post{
    titulo: string;
    texto: string;
    autor: string;
    imagen: string;
    fecha: Date;
    categoria: string;
    id: number;
 constructor(titulo, texto, autor, imagen, categoria){
     this.titulo = titulo;
     this.texto = texto;
     this.autor = autor;
     this.imagen = imagen;
     this.fecha = new Date();
     this.categoria = categoria;
     this.id = Math.random();
 }
}