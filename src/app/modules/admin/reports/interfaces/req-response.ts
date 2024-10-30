export interface EntityData {
    NFUA: string;
    "Fecha Digitación": string;
    IPRESS: string;
}

export interface Insumo {
    "Código": string;
    Nombre: string;
    Pres: string;
    Entr: string;
    "N°": string;
    Dx: string;
    Precio: string;
    Importe: string;
}

export interface Procedure {
    "Código": string;
    "Nombre": string;
    Pres: string;
    Entr: string;
    "N°": string;
    Dx: string;
    Precio: string;
    Importe: string;
}

export interface InsuranceData {
    Nombres: string;
    "N° Historia": string;
    Contrato: string;
    "Fecha de Atención": string;
}

export interface AnnexesResponse {
    DATOS_DE_LA_ENTIDAD: any[];
    DATOS_DEL_ASEGURADO: InsuranceData[];
    MEDICAMENTOS: any[];  // Si necesitas manejar medicamentos, define su estructura
    PROCEDIMIENTOS: Procedure[];
    INSUMOS: Insumo[];
}
