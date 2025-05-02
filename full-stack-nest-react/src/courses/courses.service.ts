import { Courses } from "./courses.entity";
import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";


@Injectable()
export class CoursesService {
    constructor(
        @InjectRepository(Courses)
        private coursesRepository: Repository<Courses>
    ){}

    async findAll(): Promise<Courses[]> {
        return this.coursesRepository.find()
    }
}