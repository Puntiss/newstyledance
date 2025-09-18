import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';

@Injectable({ providedIn: 'root' })
export class LoadExcelHours {

    async loadfromHours(schoolType: string, location: string) {
        const url = "../../resources/file/" + schoolType + "/orari/" + location.toLowerCase() + ".xlsx";
        const response = await fetch(url);
        const arrayBuffer = await response.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer);

        let result: WeeklyLocationRowType[] = [];

        workbook.SheetNames.forEach(sheetDayName => {
            const worksheet = workbook.Sheets[sheetDayName];

            const data: any[][] = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

            let rooms: string[] = data[0];
            let lessons: string[] = [];

            data.shift();
            data.forEach(row => {
                row.forEach(cell => lessons.push(cell));
            });

            result.push({
                dayName: sheetDayName,
                programs: {
                    rooms: rooms,
                    lessons: lessons
                }
            })

        });
        return result;

    }

    async getLocations(schoolType: string) {
        const url = "../../resources/file/" + schoolType + "/locations.xlsx";
        const response = await fetch(url);
        const arrayBuffer = await response.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer);

        let result: LocationType[] = [];

        workbook.SheetNames.forEach(sheet => {
            const worksheet = workbook.Sheets[sheet];

            const data: any[][] = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
            data.shift();
            data.forEach((row) => {
                result.push({
                    nome: row[0],
                    indirizzo: row[1],
                    linkMaps: row[2]
                });
            })

        });
        return result;
    }
}

export interface WeeklyLocationRowType {
    dayName: string;
    programs: Schedule;
}

export interface LocationRowType {
    hour: string;
    rooms: RoomRowType[];
}

export interface RoomRowType {
    roomName: string;
    courseName: string;
}

export interface LocationType {
    nome: string,
    indirizzo: string,
    linkMaps: string
}

export interface Schedule {
    rooms: string[];
    lessons: string[];
}

