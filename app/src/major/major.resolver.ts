import { Args, Int, Query, Resolver } from '@nestjs/graphql'
import { PrismaService } from 'src/config/prisma.service'
import { Major } from './model/major.model'

@Resolver(() => Major)
export class MajorResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => [Major])
  async getMajors() {
    return this.prisma.major.findMany()
  }

  @Query(() => Major)
  async getMajor(@Args('id', { type: () => Int }) id: number): Promise<Major> {
    return this.prisma.major.findUnique({ where: { id } })
  }
}
