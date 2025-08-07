import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';

@Injectable({ providedIn: 'root' })
export class LoadExcelGallery {

    async loadfromSchool(schoolType: string, galleryName: string) {
        const url = "../../resources/images/" + schoolType + "/" + galleryName + "/gallery.xlsx";
        const response = await fetch(url);
        const arrayBuffer = await response.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer);

        let result: string[] = [];

        workbook.SheetNames.forEach(sheetDayName => {
            const worksheet = workbook.Sheets[sheetDayName];

            const data: any[][] = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
            data.shift();
            data.forEach((row) => {
                result.push(row[0]);
            })
        });
        return result;
    }
}

