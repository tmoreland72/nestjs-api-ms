import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { ApiProperty } from '@nestjs/swagger'

@Entity()
export class Director {
   @ApiProperty({
      example: '1',
   })
   @PrimaryGeneratedColumn()
   id: string

   @ApiProperty({
      example: 'John Smith',
      description: 'The name of the director',
   })
   @Column()
   name: string

   @ApiProperty({
      example: 'john@acme.org',
      description: 'The email of the director',
   })
   @Column()
   email: string
}
