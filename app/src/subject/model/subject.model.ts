import { Field, ID, Int, ObjectType } from '@nestjs/graphql'
import { SubjectType } from '@prisma/client'
import { Major } from 'src/major/model/major.model'

@ObjectType()
export class Subject {
  @Field(() => ID)
  readonly id: number

  @Field(() => String, { nullable: false })
  name: string

  @Field(() => String, { nullable: false })
  code: string

  @Field(() => Int, { nullable: false })
  credit: number

  @Field(() => String, { nullable: false })
  type: typeof SubjectType[keyof typeof SubjectType]

  @Field(() => Major, { nullable: false })
  major: Major
}
