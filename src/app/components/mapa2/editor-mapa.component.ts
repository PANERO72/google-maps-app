import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-editor-mapa',
  templateUrl: './editor-mapa.component.html',
  styleUrls: ['./editor-mapa.component.css']
})
export class EditorMapaComponent implements OnInit {

  form: FormGroup;
  
  constructor(public formBuilder: FormBuilder, public dialogRef: MatDialogRef<EditorMapaComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.form = formBuilder.group({
      'titulo': data.titulo, 'descripcion': data.descripcion
    });
   }

  ngOnInit(): void {
  }

  guardarCambios() {
    this.dialogRef.close(this.form.value);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
