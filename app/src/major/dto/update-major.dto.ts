import { Field, InputType } from '@nestjs/graphql'
import { IsOptional } from 'class-validator'

@InputType()
export class UpdateMajorDto {
  @Field(() => String, { nullable: true })
  @IsOptional()
  name?: string
}
