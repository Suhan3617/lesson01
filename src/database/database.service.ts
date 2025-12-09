import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

@Injectable()
export class DatabaseService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    // Create adapter using DATABASE_URL
    const adapter = new PrismaPg({
      connectionString: process.env.DATABASE_URL,
    });

    // Pass adapter to PrismaClient
    super({
      adapter,
    });
  }

  async onModuleInit() {
    await this.$connect();
    console.log("Database connected using Prisma Adapter.");
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
