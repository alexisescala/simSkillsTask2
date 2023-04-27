import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
const MAX_LENGTH_NAME = 50;
const MIN_LENGTH_PASSWORD = 8;
@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss'],
})
export class ClientFormComponent implements OnInit {
  clientForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loadForm();
  }

  loadForm() {
    this.clientForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(MAX_LENGTH_NAME)]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [Validators.required, Validators.minLength(MIN_LENGTH_PASSWORD)],
      ],
    });
  }

  onSubmit() {
    if (this.clientForm.valid) {
      alert('formulario validado!');
    } else {
      alert('formulario incorrecto!');
    }
  }
}
