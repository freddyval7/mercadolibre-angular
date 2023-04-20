import { Component } from '@angular/core';

interface Product{
  title: string, 
  price: number, 
  typeSend: string, 
  img: string,
  type: string
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  productExist: boolean = false;
  productActual: Product = {
    title: '',
    price: 0,
    typeSend: '',
    img: '',
    type: ''
  }

  products = [
    {
      title: 'Micro SD', 
      price: 16, 
      typeSend: 'Envío gratis', 
      img: 'https://http2.mlstatic.com/D_Q_NP_961585-MLV54467858752_032023-AB.webp',
      type: 'Hogar',
      id: 1
    },
    {
      title: 'Cable 3 en 1 tipo C', 
      price: 35, 
      typeSend: 'Envío gratis', 
      img: 'https://http2.mlstatic.com/D_Q_NP_861033-MLV51738212586_092022-AB.webp',
      type: 'Hogar',
      id: 2
    },
    {
      title: 'Cargador doble tipo USB', 
      price: 3.79, 
      typeSend: 'Envío a pagar', 
      img: 'https://http2.mlstatic.com/D_Q_NP_820270-MLV54364744186_032023-AB.webp',
      type: 'Hogar',
      id: 3
    },
    {
      title: 'Aire Acondicionado', 
      price: 6, 
      typeSend: 'Envío gratis', 
      img: 'https://http2.mlstatic.com/D_NQ_NP_853667-MLV48208855930_112021-W.webp',
      type: 'Electrónica o Computación',
      id: 4
    },
    {
      title: 'Productos de Maquillaje', 
      price: 120, 
      typeSend: 'Envío gratis', 
      img: 'https://http2.mlstatic.com/D_NQ_843441-MLA45981503126_052021-C.webp',
      type: 'Electrónica o Computación',
      id: 5
    },
    {
      title: 'Cámara de Seguridad', 
      price: 105, 
      typeSend: 'Envío gratis', 
      img: 'https://http2.mlstatic.com/D_Q_NP_636673-MLV44208841024_112020-AB.webp',
      type: 'Electrónica o Computación',
      id: 6
    },
    {
      title: 'Equipo deportivo', 
      price: 13, 
      typeSend: 'Envío gratis', 
      img: 'https://http2.mlstatic.com/D_NQ_851933-MLA47434677208_092021-C.webp',
      type: 'Hogar',
      id: 7
    },
    {
      title: 'Laptop', 
      price: 204, 
      typeSend: 'Envío gratis', 
      img: 'https://http2.mlstatic.com/D_NQ_NP_617843-MLV54922561272_042023-W.webp',
      type: 'Electrónica o Computación',
      id: 8
    },
    {
      title: 'Licuadora', 
      price: 27, 
      typeSend: 'Envío gratis', 
      img: 'https://http2.mlstatic.com/D_Q_NP_769928-MLV54343653442_032023-AB.webp',
      type: 'Electrónica o Computación',
      id: 9
    },
    {
      title: 'Smart TV', 
      price: 319, 
      typeSend: 'Envío gratis', 
      img: 'https://http2.mlstatic.com/D_NQ_913002-MLA46366362161_062021-C.webp',
      type: 'Electrónica o Computación',
      id: 10
    },
  ]

  chooseProduct(product:Product){
    this.productExist = true;
    this.productActual = product
    window.scrollTo(0, document.body.scrollHeight);
  }
}
