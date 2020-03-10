import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Vinyl } from '../vinyl/model/vinyl.model';
import { VinylApiWebService } from '../shared/webServices/vinyl-api.webService';
import { MAT_DIALOG_DATA, MatDialogRef, MatInputModule } from '@angular/material';

@Component({
  selector: 'app-vinyl-form',
  templateUrl: './vinyl-form.component.html',
  styleUrls: ['./vinyl-form.component.scss']
})
export class VinylFormComponent implements OnInit {

  vinyl: Vinyl = { id: null, artist: null, titleAlbum: null, label: null,
      catNb: null, country: null, yearOriginal: null, yearEdition: null };
  form: FormGroup = new FormGroup({});

  constructor(
    private vinylService: VinylApiWebService,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<VinylFormComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      artist : [this.vinyl.artist, Validators.required],
      titleAlbum : [this.vinyl.titleAlbum, Validators.required],
      label : [this.vinyl.label, Validators.required],
      catNb : [this.vinyl.catNb, Validators.required],
      country : [this.vinyl.country, Validators.required],
      yearOriginal : [this.vinyl.yearOriginal, [Validators.required, Validators.maxLength(4)]],
      yearEdition : [this.vinyl.yearEdition, [Validators.required, Validators.maxLength(4)]]
    });
  }

  // onSubmit(formData) {
  //   console.log('VinylFormComponent - onSubmit()');
  //   console.log(formData);
  //   if (this.form.valid) {
  //     this.appendFields();
  //   }
  //   this.vinylService.addVinyl(this.vinyl).subscribe(
  //     (data) => {
  //       console.log('VinylFormComponent - onSubmit - ');
  //       console.log(data);
  //     }
  //   );
  //   this.dialogRef.close();
  //   console.warn('Le vinyle a été enregistré', formData);
  // }

  // appendFields() {
  //   this.vinyl.artist = this.form.get('artist').value;
  //   this.vinyl.titleAlbum = this.form.get('titleAlbum').value;
  //   this.vinyl.label = this.form.get('label').value;
  //   this.vinyl.catNb = this.form.get('catNb').value;
  //   this.vinyl.country = this.form.get('country').value;
  //   this.vinyl.yearOriginal = this.form.get('yearOriginal').value;
  //   this.vinyl.yearEdition = this.form.get('yearEdition').value;
  // }


  onSubmit(form: FormGroup) {
    this.dialogRef.close(form.value);
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
