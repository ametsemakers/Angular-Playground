import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-vinyl-form',
  templateUrl: './vinyl-form.component.html',
  styleUrls: ['./vinyl-form.component.scss']
})
export class VinylFormComponent implements OnInit {

  vinyl;
  vinylForm;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.vinylForm = this.formBuilder.group({
      artist: '',
      titleAlbum: '',
      label: '',
      country: '',
      catNb: '',
      yearOriginal: '',
      yearEdition: ''
    });
  }

  ngOnInit() {
  }

  onSubmit(formData) {
    console.log('VinylFormComponent - onSubmit()');
    console.log(formData);
    // this.vinyl = formData;
    // send to service

    this.vinylForm.reset();

    console.warn('Le vinyle a été enregistré', formData);
  }

}
