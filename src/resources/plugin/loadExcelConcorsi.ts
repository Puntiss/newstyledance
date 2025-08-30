import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';

@Injectable({ providedIn: 'root' })
export class LoadExcelConcorsi {

    async loadfromSchool(schoolType: string) {
        const url = "../../resources/images/" + schoolType + "/concorsi/concorsi.xlsx";
        const response = await fetch(url);
        const arrayBuffer = await response.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer);

        let result: ConcorsiyRowType[] = [];

        workbook.SheetNames.forEach(sheetName => {
            const worksheet = workbook.Sheets[sheetName];

            let listaConcorsi: string[] = [];
            let immaginiSuccessive: string[] = []

            const data: any[][] = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
            data.shift();
            let previusType = E_CONCORSI_TYPE.CONCORSO;
            data.forEach((row) => {
                let tipo = row[0];
                if (tipo == E_CONCORSI_TYPE.CONCORSO) {
                    if (previusType == E_CONCORSI_TYPE.IMMAGINE) {
                        result.push({ listaConcorsi, immaginiSuccessive });
                        listaConcorsi = [];
                        immaginiSuccessive = [];
                    }
                    listaConcorsi.push(row[1]);
                    previusType = E_CONCORSI_TYPE.CONCORSO;
                }

                if (tipo == E_CONCORSI_TYPE.IMMAGINE) {
                    immaginiSuccessive.push(row[1]);
                    previusType = E_CONCORSI_TYPE.IMMAGINE;
                }

                if(!tipo){
                    return;
                }

            });
            result.push({ listaConcorsi, immaginiSuccessive });
        });

        console.log(result)
        return result;
    }
}

export interface ConcorsiyRowType {
    listaConcorsi: string[];
    immaginiSuccessive: string[];
}

export enum E_CONCORSI_TYPE {
    IMMAGINE = "IMMAGINE",
    CONCORSO = "CONCORSO"
}

