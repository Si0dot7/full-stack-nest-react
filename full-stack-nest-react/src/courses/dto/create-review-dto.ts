import { ObjectId } from "mongodb";

export class CreateReviewDto  {
    comment: string;
    score: number;
    courseId?: ObjectId;
}