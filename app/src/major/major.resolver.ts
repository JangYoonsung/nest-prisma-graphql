import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CreateMajorDto } from './dto/create-major.dto'
import { UpdateMajorDto } from './dto/update-major.dto'
import { MajorService } from './major.service'
import { Major } from './model/major.model'

@Resolver(() => Major)
export class MajorResolver {
  constructor(private majorService: MajorService) {}

  @Query(() => [Major])
  async getMajors(
    @Args('currentPage', { type: () => Int, nullable: true }) currentId?: number
  ) {
    return this.majorService.getMajors(currentId)
  }

  @Query(() => Major)
  async getMajor(@Args('id', { type: () => Int }) id: number): Promise<Major> {
    return this.majorService.getMajor(id)
  }

  @Mutation(() => Major)
  async createMajor(
    @Args('dto', { type: () => CreateMajorDto }) dto: CreateMajorDto
  ): Promise<Major> {
    return this.majorService.createMajor(dto)
  }

  @Mutation(() => Major)
  async updateMajor(
    @Args('id', { type: () => Int }) id: number,
    @Args('dto', { type: () => UpdateMajorDto }) dto: UpdateMajorDto
  ): Promise<Major> {
    return this.majorService.updateMajor(id, dto)
  }

  @Mutation(() => Major)
  async deleteMajor(@Args('id', { type: () => Int }) id: number) {
    return this.majorService.deleteMajor(id)
  }
}
