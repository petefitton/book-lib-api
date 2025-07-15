import { InputType, Int, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateAuthorInput {
  @Field(() => ID, { description: 'Id' })
  id: string;

  @Field(() => String, { description: 'Name' })
  name: string;

  @Field(() => Int, { description: 'Birth Year' })
  birthYear?: number;

  // @Field(() => Book, { description: 'Books written by Author' })
  // books?: Book;
}
