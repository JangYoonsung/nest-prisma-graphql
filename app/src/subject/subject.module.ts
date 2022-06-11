import { Module } from '@nestjs/common'
import { PrismaService } from 'src/config/prisma.service'
import { SubjectService } from './subject.service'
import { SubjectResolver } from './subject.resolver';

@Module({
  providers: [PrismaService, SubjectService, SubjectResolver]
})
export class SubjectModule {}
