import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { AuthorModule } from './author/author.module';
import { BookModule } from './book/book.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      // autoSchemaFile: 'schema.gql', // Generates schema automatically in memory
      autoSchemaFile: join(process.cwd(), 'src/schema.graphql'),
      playground: true,
    }),
    AuthorModule,
    BookModule,
    PrismaModule,
  ],
})
export class AppModule {}
