import { Courses } from "./courses.entity";
import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateCoursesDto } from "./dto/create-courses-dto";


@Injectable()
export class CoursesService {
    constructor(
        @InjectRepository(Courses)
        private coursesRepository: Repository<Courses>
    ){}

    async findAll(): Promise<Courses[]> {
        return this.coursesRepository.find()
    }

    async create(createCoursesDto: CreateCoursesDto) {
        return this.coursesRepository.save(createCoursesDto)
    }
}