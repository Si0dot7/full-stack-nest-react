import { IsInt, IsNotEmpty } from "class-validator";
import { ObjectId } from "mongodb";

export class CreateReviewDto  {
    @IsNotEmpty()
    comment: string;

    @IsInt()
    score: number;
    
    courseId?: ObjectId;
}