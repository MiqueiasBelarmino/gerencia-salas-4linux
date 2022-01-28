import { SalaAgendarDialogComponent } from './sala-agendar-dialog/sala-agendar-dialog.component';
import { SalaFormDialogComponent } from './sala-form-dialog/sala-form-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addSala(): void {
    const dialogRef = this.dialog.open(SalaFormDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }



}
