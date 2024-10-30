import { Component, inject, OnInit,ViewChild, ElementRef } from '@angular/core';
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
  templateUrl: './liquidation.component.html'
})
export class LiquidationComponent implements OnInit {
    @ViewChild('idEpisodioInput') idEpisodioInput!: ElementRef;
  // public annexesService = inject(AnnexesService);


  // public listaFuas: fuasElement[] =[];
  public conValor: boolean = false;

  procesar() {
      console.log("Function logger")
      const idEpisodioValue = this.idEpisodioInput.nativeElement.value;
      // Validar si está vacío
      if (!idEpisodioValue) {
          alert('El campo de ID EPISODIO no puede estar vacío.');
          return; // Salir de la función si está vacío
      }
    const response = this.annexesService.getAnnexes(idEpisodioValue)
    .subscribe(
        annexes => {
            console.log({annexes})

            return this.annexes = annexes;
        }
    );

      console.log(response)
    this.conValor = true;

  }



    downloadExcel() {
        const idEpisodioValue = this.idEpisodioInput.nativeElement.value;
        // Validar si está vacío
        if (!idEpisodioValue) {
            alert('El campo de ID EPISODIO no puede estar vacío.');
            return; // Salir de la función si está vacío
        }
        this.annexesService.getAnnexesExcel(idEpisodioValue).subscribe(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'RPTLiquidacion.xlsx'; // Nombre del archivo que se descargará
            a.click();
            window.URL.revokeObjectURL(url); // Revocar el objeto URL para liberar memoria
        }, error => {
            console.error('Error downloading the file', error);
        });
    }

    downloadPdf() {
        const idEpisodioValue = this.idEpisodioInput.nativeElement.value;
        // Validar si está vacío
        if (!idEpisodioValue) {
            alert('El campo de ID EPISODIO no puede estar vacío.');
            return; // Salir de la función si está vacío
        }
        this.annexesService.getAnnexesPdf(idEpisodioValue).subscribe((blob: Blob) => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'report.pdf'; // Cambia el nombre del archivo según sea necesario
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }, error => {
            console.error('Error downloading the file', error);

        });
    }



  public annexes: AnnexesResponse[] = [];

  constructor(private annexesService: AnnexesService) {}

  ngOnInit(): void {
    // this.annexesService.getAnnexes()
    //   .subscribe(annexes => this.annexes = annexes);
  }

}
