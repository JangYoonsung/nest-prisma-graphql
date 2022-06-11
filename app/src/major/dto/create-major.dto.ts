import { Field, InputType } from '@nestjs/graphql'
import { IsNotEmpty } from 'class-validator'

@InputType()
export class CreateMajorDto {
  @Field(() => String, { nullable: false })
  @IsNotEmpty()
  name: string
}
