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
      image: 'https://picsum.photos/200?random=1',
    },
    {
      name: 'Napkollektor rendszer',
      description:
        'Telepíts napkollektort otthonodba és takaríts meg energiát.',
      image: 'https://picsum.photos/200?random=2',
    },
    {
      name: 'Korszerű Nyílászárók',
      description: 'Tartsd bent a meleget új, szigetelt nyílászárókkal.',
      image: 'https://picsum.photos/200?random=3',
    },
    {
      name: 'Modern LED Világítás',
      description: 'Csökkentsd a villanyszámlád LED izzókkal.',
      image: 'https://picsum.photos/200?random=4',
    },
  ];
}
