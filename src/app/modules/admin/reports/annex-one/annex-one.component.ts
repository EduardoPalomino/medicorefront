import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgClass } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { AnnexesService } from '../services/annexes.service';
import { AnnexesResponse } from '../interfaces/req-response';
import { MatCheckbox } from '@angular/material/checkbox';

@Component({
  selector: 'annexes-annex-one',
  standalone: true,
  imports: [
    FormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDatepickerModule,
    ReactiveFormsModule,

    NgClass,
    MatInputModule,

    MatCheckbox
  ],
  templateUrl: './annex-one.component.html'
})
export class AnnexOneComponent implements OnInit {

  // public annexesService = inject(AnnexesService);

  //
  // public listaFuas: fuasElement[] =[];
  public conValor: boolean = false;

  procesar() {
    // this.listaFuas = fuas;
    // this.annexesService.getAnnexes()
    // .subscribe(annexes => this.annexes = annexes);
    // this.conValor = true;

  }

  public annexes: AnnexesResponse[] = [];

  constructor(private annexesService: AnnexesService) {}

  ngOnInit(): void {
    // this.annexesService.getAnnexes()
    //   .subscribe(annexes => this.annexes = annexes);
  }

}
