import { Module } from '@nestjs/common'
import { PrismaService } from 'src/config/prisma.service'
import { SubjectService } from './subject.service'

@Module({
  providers: [PrismaService, SubjectService]
})
export class SubjectModule {}
