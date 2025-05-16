import { ObjectId } from "mongodb";
import { Column, Entity, ObjectIdColumn } from "typeorm";



@Entity()
export class Review {
    @ObjectIdColumn()
    id?: ObjectId;

    @Column()
    courseId: ObjectId;

    @Column()
    comment: string;

    @Column()
    score: number;

    
}

export default Review

