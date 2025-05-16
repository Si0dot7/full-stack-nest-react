import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from "@nestjs/common";
import { Courses } from './courses.entity'
import { CoursesService } from "./courses.service";
import { CreateCoursesDto } from "./dto/create-courses-dto";
import Review from "./review.entity";
import { ObjectId } from "mongodb";

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
        } else {
            throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
        }

    }

    @Get(':courseId/reviews')
    async findAllReview(@Param('courseId') courseId: ObjectId): Promise<Review[]> {
        const review = await this.coursesService.findAllReview(courseId)
        return review 
        
        
    }
}