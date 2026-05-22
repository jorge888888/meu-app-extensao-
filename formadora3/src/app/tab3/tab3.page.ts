import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton } from '@ionic/angular/standalone';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton],
})
export class Tab3Page {
  produtos: any[] = [];
  mostrarLista = false;

  constructor(private produtoService: ProdutoService) {}

  carregarProdutos() {
    this.produtoService.getProdutos().subscribe(data => {
      this.produtos = data;
      this.mostrarLista = true;
    });
  }

  esconderLista() {
    this.mostrarLista = false;
    this.produtos = [];
  }
}