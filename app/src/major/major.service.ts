import { Injectable } from '@nestjs/common'
import { Major } from '@prisma/client'
import { PrismaService } from 'src/config/prisma.service'
import { CreateMajorDto } from './dto/create-major.dto'
import { UpdateMajorDto } from './dto/update-major.dto'

@Injectable()
export class MajorService {
  constructor(private prisma: PrismaService) {}

  async getMajors(currentPageId?: number): Promise<Major[]> {
    return this.prisma.major.findMany({
      orderBy: { id: 'desc' },
      take: 5,
      skip: currentPageId ? 1 : 0,
      ...(currentPageId && { cursor: { id: currentPageId } })
    })
  }

  async getMajor(id: number): Promise<Major> {
    return this.prisma.major.findUnique({
      where: { id }
    })
  }

  async createMajor(data: CreateMajorDto): Promise<Major> {
    return this.prisma.major.create({
      data
    })
  }

  async updateMajor(id: number, data: UpdateMajorDto): Promise<Major> {
    return this.prisma.major.update({
      where: { id },
      data
    })
  }

  async deleteMajor(id: number): Promise<Major> {
    return this.prisma.major.delete({ where: { id } })
  }
}
