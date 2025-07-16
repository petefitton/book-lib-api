import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BookService {
  constructor(private prisma: PrismaService) {}

  create(createBookInput: CreateBookInput) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    return this.prisma.book.create({
      data: {
        title: createBookInput.title,
        publishedYear: createBookInput.publishedYear,
        genre: createBookInput.genre,
        authorId: createBookInput.authorId,
      },
    });
  }

  findAll() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    return this.prisma.book.findMany();
  }

  findOne(id: number) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    return this.prisma.book.findUnique({
      where: {
        id,
      },
      include: { author: true },
    });
  }

  async update(id: number, updateBookInput: UpdateBookInput) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    const book = await this.prisma.book.findUnique({
      where: {
        id: id,
      },
    });
    if (!book) {
      throw new ForbiddenException('Access to resource denied');
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    return this.prisma.book.update({
      where: {
        id: id,
      },
      data: {
        title: updateBookInput.title,
        publishedYear: updateBookInput.publishedYear,
        genre: updateBookInput.genre,
        authorId: updateBookInput.authorId,
      },
    });
  }

  remove(id: number) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    return this.prisma.author.delete({
      where: {
        id: id,
      },
    });
  }
}
