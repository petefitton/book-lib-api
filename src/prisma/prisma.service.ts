import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(config: ConfigService) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    super({
      datasources: {
        db: {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
          url: config.get('DATABASE_URL'),
        },
      },
    });
  }

  // cleanDb() {
  //   return this.$transaction([
  //     this.author.deleteMany(),
  //     this.book.deleteMany(),
  //   ]);
  // }
}
