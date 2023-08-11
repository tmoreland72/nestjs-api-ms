import { ApiProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'

export class CreateEventDto {
   @ApiProperty({
      type: String,
      description: 'The name of the event',
      example: 'Monsta Spring Bash',
   })
   @IsString()
   name: string
}
