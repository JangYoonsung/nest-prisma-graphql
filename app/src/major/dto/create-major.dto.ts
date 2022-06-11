import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class CreateMajorDto {
  @Field(() => String, { nullable: false })
  name: string
}
