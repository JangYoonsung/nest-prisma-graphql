import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'
import { PrismaService } from 'src/config/prisma.service'
import { CreateMajorDto } from './dto/create-major.dto'
import { UpdateMajorDto } from './dto/update-major.dto'
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

  @Mutation(() => Major)
  async createMajor(
    @Args('dto', { type: () => CreateMajorDto }) dto: CreateMajorDto
  ): Promise<Major> {
    return this.prisma.major.create({ data: dto })
  }

  @Mutation(() => Major)
  async updateMajor(
    @Args('id', { type: () => Int }) id: number,
    @Args('dto', { type:() => UpdateMajorDto }) dto: UpdateMajorDto
  ): Promise<Major> {
    return this.prisma.major.update({
      where: { id },
      data: dto
    })
  }
}
