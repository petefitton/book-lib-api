import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BookService } from './book.service';
import { Book } from './entities/book.entity';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';

@Resolver(() => Book)
export class BookResolver {
  constructor(private readonly bookService: BookService) {}

  @Mutation(() => Book)
  createBook(@Args('createBookInput') createBookInput: CreateBookInput) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.bookService.create(createBookInput);
  }

  @Query(() => [Book], { name: 'books' })
  findAll() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.bookService.findAll();
  }

  @Query(() => Book, { name: 'book' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.bookService.findOne(id);
  }

  @Mutation(() => Book)
  updateBook(@Args('updateBookInput') updateBookInput: UpdateBookInput) {
    return this.bookService.update(updateBookInput.id, updateBookInput);
  }

  @Mutation(() => Book)
  removeBook(@Args('id', { type: () => Int }) id: number) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.bookService.remove(id);
  }
}
