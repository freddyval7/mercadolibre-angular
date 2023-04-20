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
      title: 'Lampara Aro de Luz LED', 
      price: 16, 
      typeSend: 'Envío gratis', 
      img: '../../assets/product1.webp',
      type: 'Hogar',
      id: 1
    },
    {
      title: 'Alambre para Cerco Eléctrico', 
      price: 35, 
      typeSend: 'Envío gratis', 
      img: '../../assets/product2.webp',
      type: 'Hogar',
      id: 2
    },
    {
      title: 'Lampara Led Panel 6w', 
      price: 3.79, 
      typeSend: 'Envío a pagar', 
      img: '../../assets/product3.webp',
      type: 'Hogar',
      id: 3
    },
    {
      title: 'Reloj Digital Original Honx', 
      price: 6, 
      typeSend: 'Envío gratis', 
      img: '../../assets/product4.webp',
      type: 'Electrónica o Computación',
      id: 4
    },
    {
      title: 'Smart Home Hub Xiomi Controller', 
      price: 120, 
      typeSend: 'Envío gratis', 
      img: '../../assets/product5.webp',
      type: 'Electrónica o Computación',
      id: 5
    },
    {
      title: 'Organizador Aéreo', 
      price: 105, 
      typeSend: 'Envío gratis', 
      img: '../../assets/product6.webp',
      type: 'Electrónica o Computación',
      id: 6
    },
    {
      title: 'Aro de Luz para Selfies', 
      price: 13, 
      typeSend: 'Envío gratis', 
      img: '../../assets/product7.webp',
      type: 'Hogar',
      id: 7
    },
    {
      title: 'Detectora de Dólares', 
      price: 204, 
      typeSend: 'Envío gratis', 
      img: '../../assets/product8.webp',
      type: 'Electrónica o Computación',
      id: 8
    },
    {
      title: 'Audifonos inalámbricos', 
      price: 27, 
      typeSend: 'Envío gratis', 
      img: '../../assets/product9.webp',
      type: 'Electrónica o Computación',
      id: 9
    },
    {
      title: 'Nintendo Switch Lite', 
      price: 319, 
      typeSend: 'Envío gratis', 
      img: '../../assets/product10.webp',
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
