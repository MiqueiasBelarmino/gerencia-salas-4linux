import { SalaService } from './../../../shared/service/sala.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-sala-form-dialog',
  templateUrl: './sala-form-dialog.component.html',
  styleUrls: ['./sala-form-dialog.component.css']
})
export class SalaFormDialogComponent implements OnInit {

  public salaForm: FormGroup = new FormGroup({
    nome: new FormControl(''),
    capacidate: new FormControl('')
  })

  constructor(
    public formBuilder: FormBuilder,
    public salaService: SalaService,
    public dialogRef: MatDialogRef<SalaFormDialogComponent>
    ) { }

  ngOnInit(): void {
    this.salaForm = this.formBuilder.group({
      nome:['',[Validators.required]],
      capacidade:['',[Validators.required]]
    });
  }

  createSala(){
    this.salaService.postSala(this.salaForm.value).subscribe(response =>{console.log(response)});
    this.dialogRef.close();
    this.salaForm.reset();
    window.location.reload();
  }

  cancel(): void {
    this.dialogRef.close();
    this.salaForm.reset();
  }

}
