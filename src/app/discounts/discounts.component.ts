import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-discounts',
  templateUrl: './discounts.component.html',
  styleUrls: ['./discounts.component.css'],
})
export class DiscountsComponent {
  @Input() showDiscounts: boolean = false;

  products = [
    {
      name: 'Energiatakarékos Hűtőszekrény',
      description:
        'Csökkentsd energiafogyasztásodat ezzel a modern hűtőszekrénnyel.',
      image: '/assets/discount1.jpg',
    },
    {
      name: 'Napkollektor rendszer',
      description:
        'Telepíts napkollektort otthonodba és takaríts meg energiát.',
      image: '/assets/discount2.jpg',
    },
    {
      name: 'Korszerű Nyílászárók',
      description: 'Tartsd bent a meleget új, szigetelt nyílászárókkal.',
      image: '/assets/discount3.jpg',
    },
    {
      name: 'Modern LED Világítás',
      description: 'Csökkentsd a villanyszámlád LED izzókkal.',
      image: '/assets/discount4.jpg',
    },
  ];
}
