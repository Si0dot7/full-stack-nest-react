import { Controller , Get } from "@nestjs/common";

@Controller('courses')
export class CoursesController {
    @Get()
    findAll(): any {
        return [
            {
                id:'1',
                number: '121',
                title: 'computer'
            },
            {
                id:'2',
                number: '1121',
                title: 'discrete'
            },
            {
                id:'3',
                number: '15121',
                title: 'math'
            }
        ]
    }
}