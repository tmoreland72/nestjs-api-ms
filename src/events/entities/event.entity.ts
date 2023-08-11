import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { ApiProperty } from '@nestjs/swagger'

@Entity()
export class Event {
   @ApiProperty({
      example: '1',
   })
   @PrimaryGeneratedColumn()
   id: string

   @ApiProperty({
      example: 'Monsta Spring Bash',
      description: 'The name of the event',
   })
   @Column()
   name: string

   @ApiProperty({
      example: '12',
      description: 'The event director id',
   })
   @Column()
   directorId?: string
}
