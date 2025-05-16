import { Module } from "@nestjs/common";
import { CoursesController } from "./courses.controller";
import { CoursesService } from "./courses.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import Courses from "./courses.entity";
import Review from "./review.entity";


@Module({
    imports: [TypeOrmModule.forFeature([Courses,Review])],
    controllers: [CoursesController],
    providers: [CoursesService]
})
export class CoursesModule { }