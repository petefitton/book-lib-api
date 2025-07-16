import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateAuthorInput } from './dto/create-author.input';
import { UpdateAuthorInput } from './dto/update-author.input';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthorService {
  constructor(private prisma: PrismaService) {}

  create(createAuthorInput: CreateAuthorInput) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    return this.prisma.author.create({
      data: {
        name: createAuthorInput.name,
        birthYear: createAuthorInput.birthYear,
      },
    });
  }

  findAll() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    return this.prisma.author.findMany();
  }

  findOne(id: number) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    return this.prisma.author.findUnique({
      where: {
        id,
      },
      include: { books: true },
    });
  }

  async update(id: number, updateAuthorInput: UpdateAuthorInput) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    const author = await this.prisma.author.findUnique({
      where: {
        id: id,
      },
    });
    if (!author) {
      throw new ForbiddenException('Access to resource denied');
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    return this.prisma.author.update({
      where: {
        id: id,
      },
      data: {
        name: updateAuthorInput.name,
        birthYear: updateAuthorInput.birthYear,
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
