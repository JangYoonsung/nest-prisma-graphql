import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CreateSubjectDto } from './dto/create-subejct.dto'
import { UpdateSubjectDto } from './dto/update-subejct.dto'
import { Subject } from './model/subject.model'
import { SubjectService } from './subject.service'

@Resolver()
export class SubjectResolver {
  constructor(private subjectService: SubjectService) {}

  @Query(() => [Subject])
  async getSubjects(
    @Args('currentPage', { type: () => Int, nullable: true }) currentId?: number
  ) {
    return this.subjectService.getSubjects(currentId)
  }

  @Query(() => Subject)
  async getSubject(@Args('id', { type: () => Int }) id: number) {
    return this.subjectService.getSubject(id)
  }

  @Mutation(() => Subject)
  async createSubject(
    @Args('dto', { type: () => CreateSubjectDto }) dto: CreateSubjectDto
  ) {
    return this.subjectService.createSubject(dto)
  }

  @Mutation(() => Subject)
  async updateSubject(
    @Args('id', { type: () => Int }) id: number,
    @Args('dto', { type: () => UpdateSubjectDto }) dto: UpdateSubjectDto
  ) {
    return this.subjectService.updateSubject(id, dto)
  }

  @Mutation(() => Subject)
  async deleteSubject(@Args('id', { type: () => Int }) id: number) {
    return this.subjectService.deleteSubject(id)
  }
}
