import { Field, ID, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Major {
  @Field(() => ID)
  readonly id: number
  name: string
}
