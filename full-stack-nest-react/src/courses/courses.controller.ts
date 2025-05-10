import { Body, Controller, Get, HttpException, HttpStatus, Post } from "@nestjs/common";
import { Courses } from './courses.entity'
import { CoursesService } from "./courses.service";
import { CreateCoursesDto } from "./dto/create-courses-dto";

@Controller('courses')
export class CoursesController {
    constructor(private coursesService: CoursesService) { }

    
    @Get()
    async findAll(): Promise<Courses[]> {
        return this.coursesService.findAll()
    }

    @Post()
    async create(@Body() createCoursesDto: CreateCoursesDto) {
        if ((createCoursesDto.number != undefined) && (createCoursesDto.title != undefined)) {
            const newCourses = this.coursesService.create(createCoursesDto)
            return newCourses
        }else{
            throw new HttpException('Bad request',HttpStatus.BAD_REQUEST);
        }

    }
}