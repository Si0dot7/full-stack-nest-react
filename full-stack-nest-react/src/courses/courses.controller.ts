import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from "@nestjs/common";
import { Courses } from './courses.entity'
import { CoursesService } from "./courses.service";
import { CreateCoursesDto } from "./dto/create-courses-dto";
import Review from "./review.entity";
import { ObjectId } from "mongodb";
import { CreateReviewDto } from "./dto/create-review-dto";

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
    async findReview(@Param('courseId') courseId: string): Promise<Review[]> {
        const review = await this.coursesService.findReview(courseId)
        console.log(review);
        
        return review


    }

    @Get('/reviews')
    async findAllReview(): Promise<Review[]> {
        return this.coursesService.findAllReview();
    }

    @Post(':courseId/reviews')
    async createReview(@Param('courseId') courseId: string, @Body() createReviewDto: CreateReviewDto) {
        if ((createReviewDto.comment !== undefined) && (createReviewDto.score !== undefined)) {
            createReviewDto.courseId = new ObjectId(courseId)
            const newReview = this.coursesService.createReview(createReviewDto)
            return newReview
        } else {
            throw new HttpException('Bad request', HttpStatus.BAD_REQUEST)
        }
    }
}