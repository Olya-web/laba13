import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BooksRepository } from './books.repository';

const uniqueAuthors = arr => {
    const r = [];
    for (let item of arr) {
        if (!r.includes(item)) r.push(item);
    }
    return r;
};

@Injectable()
export class BooksService {
    constructor(
        @InjectRepository(BooksRepository)
        private booksRepository: BooksRepository,
    ) {}
    async addBook(newBook) {
        const arr = Object.values(newBook);
        const result = arr.find(item => item === '');
        if (result === undefined) {
            this.booksRepository.addBook(newBook);
            return newBook;
        } else return false;
    }

    async getBooksByAuthor(author) {
        const r = await this.booksRepository.find(author);
        const all = await this.booksRepository.find();
        console.log('Cigan-log: BooksService -> getBooksByAuthor -> all', all);
        if (r.length > 0)
            return { type: 'books', items: r.map(item => item.title) };
        else
            return {
                type: 'authors',
                items: uniqueAuthors(all.map(item => item.author)),
            };
    }
}
