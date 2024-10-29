import { HttpClient } from "@angular/common/http";
import { computed, inject, Injectable, signal } from "@angular/core";
import {  AnnexesResponse } from "../interfaces/req-response";
import { Observable } from "rxjs";

// interface State {
//     annexes: AnnexesResponse[];
//     loading: boolean;
// }

@Injectable({
    providedIn: 'root'
})
export class AnnexesService {

    // private http = inject(HttpClient);

    // #annexes = signal<State>({
    //     loading: true,
    //     annexes: []
    // });

    // public annexes = computed(() => this.#annexes().annexes);
    // public loading = computed(() => this.#annexes().loading);

    // constructor() {
    //     this.http.get<AnnexesResponse>('http://127.0.0.1:8000/api/fuas')
    //         .subscribe( res => {

    //             this.#annexes.set({
    //                 loading: false,
    //                 annexes: this.#annexes
    //             })
    //         })


    // }

    constructor(private http: HttpClient) {

    }

    getAnnexes(): Observable<AnnexesResponse[]> {
        return this.http.get<AnnexesResponse[]>('http://127.0.0.1:8000/api/fuas');
    }


    getAnnexesPdf(): Observable<Blob> {
        return this.http.get<Blob>('http://127.0.0.1:8000/api/fuas/rpt-pdf', { responseType: 'blob' as 'json' });
    }
    getAnnexesExcel(): Observable<Blob> {
        return this.http.get<Blob>('http://127.0.0.1:8000/api/fuas/rpt-excel', { responseType: 'blob' as 'json' });
    }
}
