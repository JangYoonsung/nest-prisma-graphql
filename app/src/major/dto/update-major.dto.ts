import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UpdateMajorDto {
  @Field(() => String, { nullable: true })
  name?: string
}
