import { Query, Resolver } from '@nestjs/graphql'
import { PrismaService } from 'src/config/prisma.service'
import { Major } from './model/major.model'

@Resolver(() => Major)
export class MajorResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => [Major])
  async getMajors() {
    return this.prisma.major.findMany()
  }
}
