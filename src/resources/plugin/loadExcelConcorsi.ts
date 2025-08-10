import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';

@Injectable({ providedIn: 'root' })
export class LoadExcelConcorsi {

    async loadfromSchool(schoolType: string) {
        const url = "../../resources/images/" + schoolType + "/concorsi/concorsi.xlsx";
        const response = await fetch(url);
        const arrayBuffer = await response.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer);

        let result: YearConcorsiyRowType[] = [];

        workbook.SheetNames.forEach(sheetName => {
            const worksheet = workbook.Sheets[sheetName];

            let listaConcorsi: ConcorsiRowType[] = [];
            let immaginiSuccessive: string[] = []

            const data: any[][] = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
            data.shift();
            let previusYear = '/0';
            data.forEach((row) => {

                let tipo = row[1];

                if (tipo == E_CONCORSI_TYPE.CONCORSO) {
                    let anno = row[0];
                    console.log(anno)
                    if (previusYear == "/0")
                        previusYear = anno

                    if (previusYear == anno) {
                        console.log("yes!")
                        listaConcorsi.push({
                            nome: row[2],
                            posizione: row[3]
                        })
                    } else {
                        console.log("else", previusYear, anno)
                        result.push({ anno: previusYear, listaConcorsi, immaginiSuccessive: immaginiSuccessive })
                        previusYear = anno;
                        listaConcorsi = [];
                        immaginiSuccessive = [];
                        listaConcorsi.push({
                            nome: row[2],
                            posizione: row[3]
                        })
                    }
                } 
                
                if (tipo == E_CONCORSI_TYPE.IMMAGINE) {

                    immaginiSuccessive.push(row[2])
                }
            });
            result.push({ anno: previusYear, listaConcorsi, immaginiSuccessive: immaginiSuccessive });
           
        });

        console.log(result)
        return result;
    }
}

export interface YearConcorsiyRowType {
    anno: string;
    listaConcorsi: ConcorsiRowType[];
    immaginiSuccessive: string[];
}

export interface ConcorsiRowType {
    nome: string;
    posizione: string;
}

export enum E_CONCORSI_TYPE {
    IMMAGINE = "IMMAGINE",
    CONCORSO = "CONCORSO"
}

