import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Book } from '../../book/entities/book.entity';

@ObjectType({ description: 'author' })
export class Author {
  @Field(() => ID, { description: 'Id' })
  id: number;

  @Field(() => String, { description: 'Name' })
  name: string;

  @Field(() => Int, { description: 'Birth Year' })
  birthYear?: number;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field((type) => [Book], {
    nullable: 'items',
    description: 'Books written by Author',
  })
  books: Book[];
}
