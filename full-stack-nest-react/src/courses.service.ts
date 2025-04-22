import { Courses } from "./interfaces/courses.interface";
import { Injectable } from "@nestjs/common";


@Injectable()
export class CoursesService {
    async findAll(): Promise<Courses[]> {
        return [
            {
                id:'1',
                number: '121',
                title: 'computer'
            },
            {
                id:'2',
                number: '1121',
                title: 'discrete'
            },
            {
                id:'3',
                number: '15121',
                title: 'math'
            }
        ]
    }
}