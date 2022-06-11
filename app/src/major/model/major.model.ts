import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Subject } from 'src/subject/model/subject.model'

@ObjectType()
export class Major {
  @Field(() => ID)
  readonly id: number

  @Field(() => String, { nullable: false })
  name: string

  @Field(() => [Subject], { nullable: true })
  subject?: Subject[]
}
