import { Controller , Get } from "@nestjs/common";
import { Courses } from "./interfaces/courses.interface";
import { CoursesService } from "./courses.service";

@Controller('courses')
export class CoursesController {
    constructor(private coursesService:CoursesService) {}

    @Get()
    async findAll(): Promise<Courses[]> {
        return this.coursesService.findAll()
    }
}