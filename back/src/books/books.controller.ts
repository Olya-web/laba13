import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
    constructor(private booksService: BooksService) {}
    @Post('')
    addBook(@Body() body) {
        return this.booksService.addBook(body);
    }

    @Get('/:author')
    getBooksByAuthor(@Param() authorName) {
        console.log(
            'Cigan-log: BooksController -> getBooksByAuthor -> authorName',
            authorName,
        );
        return this.booksService.getBooksByAuthor(authorName);
    }
}
