import { Courses } from "./courses.entity";
import { Injectable, Param } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateCoursesDto } from "./dto/create-courses-dto";
import Review from "./review.entity";
import { ObjectId } from "mongodb";


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

    async findAllReview(courseId: ObjectId): Promise<Review[]> {
        return this.reviewRepository.find({where:{courseId:courseId}});
    }
}