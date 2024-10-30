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
    private baseUrl = 'http://127.0.0.1:8000/api/fuas'; // Mover esto fuera del método

    constructor(private http: HttpClient) {}

    getAnnexes(idEpisodio: string): Observable<AnnexesResponse[]> {
        const resultData = this.http.get<AnnexesResponse[]>(`${this.baseUrl}?idEpisodio=${idEpisodio}`);
        console.log({resultData})
        return resultData;
    }


    getAnnexesPdf(idEpisodio: string): Observable<Blob> {
        return this.http.get<Blob>(`${this.baseUrl}/rpt-pdf?idEpisodio=${idEpisodio}`, { responseType: 'blob' as 'json' });
    }
    getAnnexesExcel(idEpisodio: string): Observable<Blob> {
        return this.http.get<Blob>(`${this.baseUrl}/rpt-excel?idEpisodio=${idEpisodio}`, { responseType: 'blob' as 'json' });
    }
}
