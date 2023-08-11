import { Expose } from 'class-transformer'

export class EventDto {
   @Expose()
   id: string

   @Expose()
   name: string

   @Expose()
   directorId: string
}
