import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType({ description: 'book' })
export class Book {
  @Field(() => ID, { description: 'Id' })
  id: string;

  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;

  @Field(() => String, { description: 'Example field (placeholder)' })
  title: string;

  @Field(() => Int, { description: 'Example field (placeholder)' })
  publishedYear: number;

  @Field(() => String, { description: 'Example field (placeholder)' })
  genre: string;

  // @Field(() => Author, { description: 'Example field (placeholder)' })
  // author: Author;
}
