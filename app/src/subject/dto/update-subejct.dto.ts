import { Field, InputType, Int } from '@nestjs/graphql'
import { SubjectType } from '@prisma/client'
import { IsOptional } from 'class-validator'

@InputType()
export class UpdateSubjectDto {
  @Field(() => String, { nullable: false })
  @IsOptional()
  name?: string

  @Field(() => String, { nullable: false })
  @IsOptional()
  code?: string

  @Field(() => Int, { nullable: false })
  @IsOptional()
  credit?: number

  @Field(() => SubjectType, { nullable: false })
  @IsOptional()
  type?: typeof SubjectType[keyof typeof SubjectType]

  @Field(() => Int, { nullable: false })
  @IsOptional()
  majorId?: number
}
