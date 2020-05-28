import { BooksModule } from './books/books.module';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
    const app = await NestFactory.create(BooksModule);
    app.enableCors();
    await app.listen(3001);
}
bootstrap();
