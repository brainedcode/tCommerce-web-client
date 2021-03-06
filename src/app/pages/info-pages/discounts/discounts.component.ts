import { Component, OnInit } from '@angular/core';
import { HeadService } from '../../../services/head/head.service';

@Component({
  selector: 'discounts',
  templateUrl: './discounts.component.html',
  styleUrls: ['./discounts.component.scss']
})
export class DiscountsComponent implements OnInit {

  constructor(private headService: HeadService) { }

  ngOnInit(): void {
    this.setMeta();
  }

  setMeta() {
    this.headService.setMeta({
      title: 'Скидки в магазине "Клондайк"',
      description: 'Описание дисконтной программы в интернет-магазине "Клондайк"',
      keywords: ''
    });
  }
}
