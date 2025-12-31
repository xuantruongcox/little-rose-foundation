import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg'; // 👈 Adapter
import { Pool } from 'pg'; // 👈 Phải import Pool từ 'pg'
import 'dotenv/config';
import { env } from 'prisma/config';



@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    const connectionString = env("DATABASE_URL");
    console.log(connectionString)
    if (!connectionString) throw new Error('❌ DATABASE_URL missing');

    const pool = new Pool({ connectionString });
    
    const adapter = new PrismaPg(pool);

    super({ adapter });
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}