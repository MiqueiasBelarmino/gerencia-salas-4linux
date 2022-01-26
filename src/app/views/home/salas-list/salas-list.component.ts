import { Sala } from './../../../shared/model/sala.model';
import { SalaService } from './../../../shared/service/sala.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salas-list',
  templateUrl: './salas-list.component.html',
  styleUrls: ['./salas-list.component.css'],
})
export class SalasListComponent implements OnInit {

  salas: Sala[] = [];
  salasDisponiveis: Sala[] = [];

  constructor(public salaService: SalaService) {}

  ngOnInit(): void {
    this.getSalas();
  }

  getSalas() {
    this.salaService.getSalas('').subscribe((data) => {
      this.salas = data.data;
      // console.log(this.salas);
    });
    this.salaService.getSalas('disponivel').subscribe((data) => {
      this.salasDisponiveis = data.data;
      // console.log(this.salasDisponiveis);
    });
  }
}
