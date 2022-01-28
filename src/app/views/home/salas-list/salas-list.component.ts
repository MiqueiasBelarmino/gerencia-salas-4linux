import { MatDialog } from '@angular/material/dialog';
import { SalaAgendarDialogComponent } from './../sala-agendar-dialog/sala-agendar-dialog.component';
import { Sala } from './../../../shared/model/sala.model';
import { SalaService } from './../../../shared/service/sala.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salas-list',
  templateUrl: './salas-list.component.html',
  styleUrls: ['./salas-list.component.css'],
})
export class SalasListComponent implements OnInit {

  salasGeral: Sala[] = [];
  salasDisponiveis: Sala[] = [];
  hideButton: any[] = [];

  constructor(
    public salaService: SalaService,
    public dialog: MatDialog
    ) {}

  ngOnInit(): void {
    this.getSalas();
  }


  hide(id: number) {
    this.hideButton[id] = true;
  }

  getSalas() {
    this.salaService.getSalas('').subscribe((data) => {
      this.salasGeral = data.data;
      // console.log(this.salasGeral);
    });
    this.salaService.getSalas('disponivel').subscribe((data) => {
      this.salasDisponiveis = data.data;
      // console.log(this.salasDisponiveis);
    });
  }

  agendar(salaId: number, salaNome: string): void {
    const dialogRef = this.dialog.open(SalaAgendarDialogComponent, {
      width: '450px',
      data: {
        id: salaId,
        nome: salaNome
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
