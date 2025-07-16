import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Author } from '../../author/entities/author.entity';

@ObjectType({ description: 'book' })
export class Book {
  @Field(() => ID, { description: 'Id' })
  id: number;

  @Field(() => String, { description: 'Title' })
  title: string;

  @Field(() => Int, { description: 'Published Year' })
  publishedYear: number;

  @Field(() => String, { description: 'Genre' })
  genre: string;

  @Field(() => ID, { description: 'Author ID' })
  authorId: number;

  @Field(() => Author, { description: 'Author' })
  author: Author;
}
