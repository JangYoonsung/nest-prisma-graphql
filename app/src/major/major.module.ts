import { Module } from '@nestjs/common'
import { PrismaService } from 'src/config/prisma.service'
import { MajorResolver } from './major.resolver'

@Module({
  providers: [MajorResolver, PrismaService]
})
export class MajorModule {}
