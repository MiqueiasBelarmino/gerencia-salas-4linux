import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import * as _moment from 'moment';

import { AgendamentoService } from './../../../shared/service/agendamento.service';

// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.
// tslint:disable-next-line:no-duplicate-imports
const moment = _moment;

// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'DD-MM-YYYY',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};
@Component({
  selector: 'app-sala-agendar-dialog',
  templateUrl: './sala-agendar-dialog.component.html',
  styleUrls: ['./sala-agendar-dialog.component.css'],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class SalaAgendarDialogComponent implements OnInit {

  public agendaForm: FormGroup = new FormGroup({
    sala_id: new FormControl(''),
    data_inicio: new FormControl(''),
    data_termino: new FormControl(''),
    horaInicio: new FormControl(''),
    horaTermino: new FormControl(''),
  })

  constructor(
    public formBuilderAgendar: FormBuilder,
    public agendaService: AgendamentoService,
    public dialogRef: MatDialogRef<SalaAgendarDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {
    }

  ngOnInit(): void {
    this.agendaForm = this.formBuilderAgendar.group({
      sala_id:['',[Validators.required]],
      data_inicio:['',[Validators.required]],
      data_termino:['',[Validators.required]],
      horaInicio:['',[Validators.required]],
      horaTermino:['',[Validators.required]]
    });
  }

  createAgendamento(){
    console.log(this.agendaForm.value);
    this.agendaService.postAgendamento(this.agendaForm.value).subscribe(response =>{console.log(response)});
    this.dialogRef.close();
    this.agendaForm.reset();
  }

  cancel(): void {
    this.dialogRef.close();
    this.agendaForm.reset();
  }
}
