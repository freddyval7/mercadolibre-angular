import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.scss']
})
export class DescripcionComponent {

  id: string = ''

  constructor(private route: ActivatedRoute){}

  ngOnInit(){
    this.getProduct();
  }

  getProduct(): void{
    this.id = this.route.snapshot.paramMap.get('id') as string
  }

  products = [
    {
      title: 'Lampara Aro de Luz LED', 
      price: 16, 
      typeSend: 'Envío gratis', 
      img: '../../assets/product1.webp',
      type: 'Hogar',
      id: '1'
    },
    {
      title: 'Alambre para Cerco Eléctrico', 
      price: 35, 
      typeSend: 'Envío gratis', 
      img: '../../assets/product2.webp',
      type: 'Hogar',
      id: '2'
    },
    {
      title: 'Lampara Led Panel 6w', 
      price: 3.79, 
      typeSend: 'Envío a pagar', 
      img: '../../assets/product3.webp',
      type: 'Hogar',
      id: '3'
    },
    {
      title: 'Reloj Digital Original Honx', 
      price: 6, 
      typeSend: 'Envío gratis', 
      img: '../../assets/product4.webp',
      type: 'Electrónica o Computación',
      id: '4'
    },
    {
      title: 'Smart Home Hub Xiomi Controller', 
      price: 120, 
      typeSend: 'Envío gratis', 
      img: '../../assets/product5.webp',
      type: 'Electrónica o Computación',
      id: '5'
    },
    {
      title: 'Organizador Aéreo', 
      price: 105, 
      typeSend: 'Envío gratis', 
      img: '../../assets/product6.webp',
      type: 'Electrónica o Computación',
      id:'6'
    },
    {
      title: 'Aro de Luz para Selfies', 
      price: 13, 
      typeSend: 'Envío gratis', 
      img: '../../assets/product7.webp',
      type: 'Hogar',
      id: '7'
    },
    {
      title: 'Detectora de Dólares', 
      price: 204, 
      typeSend: 'Envío gratis', 
      img: '../../assets/product8.webp',
      type: 'Electrónica o Computación',
      id: '8'
    },
    {
      title: 'Audifonos inalámbricos', 
      price: 27, 
      typeSend: 'Envío gratis', 
      img: '../../assets/product9.webp',
      type: 'Electrónica o Computación',
      id: '9'
    },
    {
      title: 'Nintendo Switch Lite', 
      price: 319, 
      typeSend: 'Envío gratis', 
      img: '../../assets/product10.webp',
      type: 'Electrónica o Computación',
      id: '10'
    },
  ]
}
