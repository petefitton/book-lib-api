import { CreateAuthorInput } from './create-author.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';
import { CreateBookInput } from '../../book/dto/create-book.input';

@InputType()
export class UpdateAuthorInput extends PartialType(CreateAuthorInput) {
  @Field(() => ID, { description: 'Id' })
  id: number;

  @Field(() => String, { description: 'Name' })
  name?: string;

  @Field(() => Int, { description: 'Birth Year' })
  birthYear?: number;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field((type) => [CreateBookInput], {
    nullable: 'items',
    description: 'Books written by Author',
  })
  books: CreateBookInput[];
}
