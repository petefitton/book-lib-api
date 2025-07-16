import { InputType, Int, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateBookInput {
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
}
