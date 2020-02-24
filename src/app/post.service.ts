import { Injectable } from '@angular/core';
import { Post } from './models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  arrPost: Post[];
  publicacion:any;

  constructor() {
    this.arrPost =[
      new Post('Novedad', 'Katerina Koleva', 'La señorita Katerina Koleva se compra un jet de alto lujo y esta una de las imagenes que nos muestra.', 'https://www.diariomotor.com/imagenes/picscache/1440x655c/mercedes-lufthansa-cabina-vip-avion-02-1440px_1440x655c.jpg', 'Novedad'),
      new Post('La hora de despegar', 'katerina', 'No temas al despegar.', 'https://i.pinimg.com/originals/4d/0a/ea/4d0aea66044b04b39fe6be8654fc02b6.jpg', 'aviones'),
      new Post('Noticias', 'Alejandro', 'avion aterrizando de emergencia en el hudson', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQszeYyd26PSGa-fgG8mnZb-6CvyFdSXnghIQodYIBSaP1PTrtK', 'noticias'),
      new Post('Sugerencias', 'Fernando', 'Que hacer si un vuelo se retrasa.Conoce tus derechos por si tu vuelo se retrasa o se cancela. Te contamos qué hacer para solventar los problemas en caso de incidencias inesperadas. ¡Toma nota y vuela seguro!', 'https://img.blogs.es/anexom/wp-content/uploads/2018/12/portada-aeropuerto-780x515.jpg', 'deportes'),
      new Post('Información', 'R.Mendieta', 'El avión mas grande y rápido hace su primer vuelo.El Aérospatiale-BAC Concorde es un avión supersónico utilizado para el transporte de pasajeros. Puede llegar a los destinos en la mitad del tiempo de lo que tarda un avión comercial convencional debido a su mayor velocidad.', 'https://k13.kn3.net/taringa/3/8/9/9/8/6/0/nikprofugo1235/DF5.jpg?302', 'Información'),
      new Post('Emergencia', 'Maria', 'Gran aterrizaje en nieve.Aterrizaje realizado hace unas semanas en el aeropuerto de Praga. La nieve, la lluvia y la niebla dificultó muchísimo el trabajo de los pilotos a la hora de aterrizar en el aeropuerto de la capital checa', 'https://ushuaia24.com.ar/download/multimedia.normal.a17ca6af392ebe83.6e6f7277656769616e5f6e6f726d616c2e6a7067.jpg', 'Emergencia'),
    ];
    
   }
   agregarPost(post){
   this.arrPost.unshift(post)
  //  con el local storage set item metemos dentro del local lo que vaya dentro de los parentesis, el primer elemento es la key y el segundo el contenido
   localStorage.setItem('publicacion',JSON.stringify(this.arrPost))

   }
   getAllPost() {
    //  aqui es para recuperarlo por si lo necesitamos en algun momento.
    
     this.publicacion = JSON.parse(localStorage.getItem('publicacion'))
    return this.arrPost;

   }


   getAllPostByCategoria(pCategoria) {
     const prom  = new Promise<Post[]>((resolve, reject) => {
       const arrFiltrado = this.arrPost.filter((item) => {
         item.categoria === pCategoria
       })
       resolve(arrFiltrado);
     })
     return prom;
   }
  

   borrar(pId):Promise<Post[]>{

    const prom = new Promise<Post[]>((resolve,reject)=>{
      const positionId = this.arrPost.findIndex(post=>post.id==pId)

      resolve(this.arrPost.splice(positionId,1))

      localStorage.setItem('post',JSON.stringify(this.arrPost))
    })
    return prom;


  }
   }
