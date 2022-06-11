import { Injectable } from '@nestjs/common'
import { Subject } from '@prisma/client'
import { PrismaService } from 'src/config/prisma.service'
import { CreateSubjectDto } from './dto/create-subejct.dto'
import { UpdateSubjectDto } from './dto/update-subejct.dto'

@Injectable()
export class SubjectService {
  constructor(private prisma: PrismaService) {}

  async getSubjects(currentPageId?: number): Promise<Subject[]> {
    return this.prisma.subject.findMany({
      orderBy: { id: 'desc' },
      include: { major: true, classes: true },
      take: 5,
      skip: currentPageId ? 1 : 0,
      ...(currentPageId && { cursor: { id: currentPageId } })
    })
  }

  async getSubject(id: number): Promise<Subject> {
    return this.prisma.subject.findUnique({
      where: { id },
      include: { major: true, classes: true }
    })
  }

  async createSubject(data: CreateSubjectDto): Promise<Subject> {
    return this.prisma.subject.create({ data })
  }

  async updateSubject(id: number, data: UpdateSubjectDto): Promise<Subject> {
    return this.prisma.subject.update({
      where: { id },
      data
    })
  }

  async deleteSubject(id: number): Promise<Subject> {
    return this.prisma.subject.delete({ where: { id } })
  }
}
