import { IsNotEmpty, IsNumberString } from "class-validator"


export class CreateCoursesDto {
    @IsNumberString()
    number: string

    @IsNotEmpty()
    title: string
}