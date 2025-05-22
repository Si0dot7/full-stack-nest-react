import { Courses } from "./courses.entity";
import { Injectable, Param } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateCoursesDto } from "./dto/create-courses-dto";
import Review from "./review.entity";
import { ObjectId } from "mongodb";
import { CreateReviewDto } from "./dto/create-review-dto";


@Injectable()
export class CoursesService {
    constructor(
        @InjectRepository(Courses)
        private coursesRepository: Repository<Courses>,
        @InjectRepository(Review)
        private reviewRepository: Repository<Review>
    ) { }

    async findAll(): Promise<Courses[]> {
        return this.coursesRepository.find()
    }

    async create(createCoursesDto: CreateCoursesDto) {
        return this.coursesRepository.save(createCoursesDto)
    }

    async findReview(courseId: ObjectId): Promise<Review[]> {
        return this.reviewRepository.find({where:{courseId:courseId}});
    }

    async findAllReview(): Promise<Review[]> {
        return this.reviewRepository.find();
    }

    async createReview(createReviewDto: CreateReviewDto){
        return this.reviewRepository.save(createReviewDto)
    }
}