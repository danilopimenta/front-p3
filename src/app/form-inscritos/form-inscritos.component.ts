import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-form-inscritos',
  standalone: true,
  templateUrl: './form-inscritos.component.html',
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  styleUrls: ['./form-inscritos.component.css']
})
export class FormInscritosComponent {
  formData = {
    code: '',
    name: '',
    email: '',
    password: '',
    document: '',
    enrollmentGroup: '',
    observation: ''
  };

  inscritos: any[] = [];
  editIndex: number | null = null;
  private apiUrl = 'http://localhost:8088/forms';

  constructor(private http: HttpClient) {
    this.getAllInscritos();
  }

  onSubmit() {
    if (this.editIndex === null) {
      this.addInscrito();
    } else {
      this.updateInscrito(this.editIndex);
    }
  }

  resetForm() {
    this.formData = {
      code: '',
      name: '',
      email: '',
      password: '',
      document: '',
      enrollmentGroup: '',
      observation: ''
    };
    this.editIndex = null;
  }

  editItem(index: number) {
    this.editIndex = index;
    this.formData = { ...this.inscritos[index] };
  }

  deleteItem(index: number) {
    const id = this.inscritos[index].id;
    this.http.delete(`${this.apiUrl}?id=${id}`).subscribe(() => {
      this.inscritos.splice(index, 1);
    });
  }

  addInscrito() {
    this.http.post(this.apiUrl, this.formData).subscribe((response: any) => {
      this.inscritos.push(response);
      this.resetForm();
    });
  }

  updateInscrito(index: number) {
    const id = this.inscritos[index].id;
    this.http.put(`${this.apiUrl}?id=${id}`, this.formData).subscribe((response: any) => {
      this.inscritos[index] = response;
      this.resetForm();
    });
  }

  getAllInscritos() {
    this.http.get(this.apiUrl).subscribe((response: any) => {
      this.inscritos = response;
    });
  }
}
