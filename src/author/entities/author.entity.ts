import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType({ description: 'author' })
export class Author {
  @Field(() => ID, { description: 'Id' })
  id: string;

  @Field(() => String, { description: 'Name' })
  name: string;

  @Field(() => Int, { description: 'Birth Year' })
  birthYear?: number;

  // @Field(() => Book, { description: 'Books written by Author' })
  // books?: Book;
}
