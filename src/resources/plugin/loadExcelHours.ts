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
            const roomNames = data[0];

            let rooms: string[] = roomNames.splice(1, roomNames.length)

            data.shift();

            const lessons: Lesson[] = [];
            const times: string[] = [];
            

            data.forEach(row => {

                const time = this.excelFractionToTime(row[0]);
                times.push(time);

                row.splice(0, 1);

                let col = 1;
                for (let i = 0; i < rooms.length; i++) {

                    let lesson = row[i];

                    if (lesson) {
                        if (lesson != '-') {
                            lessons.push({
                                time: time,
                                col: col,
                                name: lesson,
                                span: 1
                            });
                        }
                    } else {
                        const index = this.getPreviousLessonInCol(lessons, col);
                        if (index != -1)
                            lessons[index].span++
                    }
                    col++;
                }

            });

            result.push({
                dayName: sheetDayName,
                programs: {
                    rooms: rooms,
                    times: times,
                    lessons: lessons
                }
            })

            return

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

    excelFractionToTime(f: number): string {
        // Excel memorizza le ore come frazione del giorno
        const totalMinutes = Math.round(f * 24 * 60);
        const h = Math.floor(totalMinutes / 60);
        const m = totalMinutes % 60;
        return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
    }

    getPreviousLessonInCol(lessons: Lesson[], col: number) {
        let result = -1;
        let i = 0;
        for (let lesson of lessons) {
            if (lesson.col == col)
                result = i;

            i++;
        }

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

export interface Lesson {
    time: string;
    col: number;   // colonna (1, 2, 3)
    name: string;
    span: number;  // rowspan
}

export interface Schedule {
    rooms: string[];
    times: string[];
    lessons: Lesson[];
}

