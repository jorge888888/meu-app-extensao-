import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonGrid, IonRow, IonCol],
})
export class Tab2Page implements OnInit {
  produtos: any[] = [];
  indice = 0;

  constructor(private produtoService: ProdutoService) {}

  ngOnInit() {
    this.produtoService.getProdutos().subscribe(data => {
      this.produtos = data;
    });
  }

  get produto() {
    return this.produtos[this.indice];
  }

  proximo() {
    if (this.indice < this.produtos.length - 1) this.indice++;
  }

  anterior() {
    if (this.indice > 0) this.indice--;
  }
}