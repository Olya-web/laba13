import { Book } from './books.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Book)
export class BooksRepository extends Repository<Book> {
    async getAllBooks() {
        return this.find();
    }
    async addBook({ title, author, pagesCount, publisher }) {
        const book = new Book();
        console.log('Cigan-log: BooksRepository -> addBook -> book', book);
        book.title = title;
        book.author = author;
        book.pagesCount = pagesCount;
        book.publisher = publisher;
        await book.save();
    }
}
