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

            let programs: LocationRowType[] = [];

            const data: any[][] = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
            const roomNames = data[0];
            data.shift();
            data.forEach((row) => {
                const orario = row[0];
                let rooms: RoomRowType[] = []
                row.splice(0, 1);
                let i = 1;
                row.forEach((room) => {
                    rooms.push({ courseName: room, roomName: roomNames[i] });
                    i++;
                })
                programs.push({ hour: orario, rooms: rooms })
            })

            result.push({ dayName: sheetDayName, programs: programs })

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
        console.log(result)
        return result;
    }

}

export interface WeeklyLocationRowType {
    dayName: string;
    programs: LocationRowType[];
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

