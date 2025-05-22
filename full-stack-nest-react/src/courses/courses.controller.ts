import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from "@nestjs/common";
import { Courses } from './courses.entity'
import { CoursesService } from "./courses.service";
import { CreateCoursesDto } from "./dto/create-courses-dto";
import Review from "./review.entity";
import { ObjectId } from "mongodb";
import { CreateReviewDto } from "./dto/create-review-dto";
import { ParseObjectIdPipe } from "src/common/pipes";

@Controller('courses')
export class CoursesController {
    constructor(private coursesService: CoursesService) { }


    @Get()
    async findAll(): Promise<Courses[]> {
        return this.coursesService.findAll()
    }

    @Post()
    async create(@Body() createCoursesDto: CreateCoursesDto) {
        return this.coursesService.create(createCoursesDto)
    }

    @Get(':courseId/reviews')
    async findReview(@Param('courseId', ParseObjectIdPipe) courseId: ObjectId): Promise<Review[]> {
        return await this.coursesService.findReview(courseId)
    }

    @Get('/reviews')
    async findAllReview(): Promise<Review[]> {
        return this.coursesService.findAllReview();
    }

    @Post(':courseId/reviews')
    async createReview(@Param('courseId', ParseObjectIdPipe) courseId: ObjectId, @Body() createReviewDto: CreateReviewDto) {
        createReviewDto.courseId = courseId
        return this.coursesService.createReview(createReviewDto)
    }
}