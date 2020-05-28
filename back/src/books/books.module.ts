import { BooksRepository } from './books.repository';
import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './typeorm.config';

@Module({
    imports: [
        TypeOrmModule.forRoot(typeOrmConfig),
        TypeOrmModule.forFeature([BooksRepository]),
    ],
    controllers: [BooksController],
    providers: [BooksService],
})
export class BooksModule {}
