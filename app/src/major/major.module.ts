import { Module } from '@nestjs/common'
import { PrismaService } from 'src/config/prisma.service'
import { MajorResolver } from './major.resolver'
import { MajorService } from './major.service'

@Module({
  providers: [MajorResolver, PrismaService, MajorService]
})
export class MajorModule {}
