import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, AlertController, ToastController } from '@ionic/angular';

interface Tarefa {
  titulo: string;
  feita: boolean;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Tab1Page {

  tarefas: Tarefa[] = [
    { titulo: 'Instalar o VSCode', feita: true },
    { titulo: 'Criar projeto Ionic', feita: true },
    { titulo: 'Subir no GitHub', feita: false },
  ];

  constructor(
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) {}

  async adicionarTarefa() {
    const alert = await this.alertCtrl.create({
      header: 'Nova Tarefa',
      inputs: [
        { name: 'titulo', type: 'text', placeholder: 'Nome da tarefa' }
      ],
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Adicionar',
          handler: (dados) => {
            if (dados.titulo.trim()) {
              this.tarefas.push({
                titulo: dados.titulo.trim(),
                feita: false
              });
              this.mostrarToast('Tarefa adicionada!');
            }
          }
        }
      ]
    });
    await alert.present();
  }

  private async mostrarToast(msg: string) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: 'bottom'
    });
    await toast.present();
  }
}