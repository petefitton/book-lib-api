import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType({ description: 'book' })
export class Book {
  @Field(() => ID, { description: 'Id' })
  id: string;

  @Field(() => String, { description: 'Title' })
  title: string;

  @Field(() => Int, { description: 'Published Year' })
  publishedYear: number;

  @Field(() => String, { description: 'Genre' })
  genre: string;

  // @Field(() => Author, { description: 'Author' })
  // author: Author;
}
