export interface Courses {
    id?: string;
    number: string;
    title: string;
}

export interface Review {
    id?: string;
    courseId?: string;
    comment: string;
    score: number;
}