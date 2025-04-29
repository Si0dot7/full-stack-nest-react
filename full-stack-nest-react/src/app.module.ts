import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import Courses from './entities/courses.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: '127.0.0.1',
      port: 27017,
      database: 'nest-test',
      entities: [Courses],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Courses])
  ],
  controllers: [AppController,CoursesController],
  providers: [AppService, CoursesService],
})
export class AppModule {}
