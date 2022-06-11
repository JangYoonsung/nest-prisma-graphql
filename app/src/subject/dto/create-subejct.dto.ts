import { Field, InputType, Int } from "@nestjs/graphql";
import { SubjectType } from "@prisma/client";
import { IsNotEmpty } from "class-validator";

@InputType()
export class CreateSubjectDto {
  @Field(() => String, { nullable: false })
  @IsNotEmpty()
  name: string

  @Field(() => String, { nullable: false })
  @IsNotEmpty()
  code: string

  @Field(() => Int, { nullable: false })
  @IsNotEmpty()
  credit: number

  @Field(() => SubjectType, { nullable: false })
  @IsNotEmpty()
  type: typeof SubjectType[keyof typeof SubjectType]

  @Field(() => Int, { nullable: false })
  @IsNotEmpty()
  majorId: number
}