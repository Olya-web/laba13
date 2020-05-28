import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1',
    database: 'books',
    entities: [__dirname + '/../**/*.entity.js'],
    synchronize: true,
};
