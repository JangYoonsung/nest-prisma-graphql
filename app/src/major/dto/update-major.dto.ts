import { IsOptional, IsString } from 'class-validator'

export class UpdateMajorDto {
  @IsOptional()
  @IsString()
  name?: string
}
