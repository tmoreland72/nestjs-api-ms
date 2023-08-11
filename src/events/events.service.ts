import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Event } from './entities/event.entity'
import { CreateEventDto } from './dto/create-event.dto'
import { UpdateEventDto } from './dto/update-event.dto'

@Injectable()
export class EventsService {
   constructor(
      @InjectRepository(Event) private readonly eventRepo: Repository<Event>
   ) {}

   create(createEventDto: CreateEventDto) {
      const event = this.eventRepo.create(createEventDto)
      return this.eventRepo.save(event)
   }

   findAll() {
      return this.eventRepo.find()
   }

   findOne(id: number) {
      if (!id) return null
      return this.eventRepo.findOneBy({ id: String(id) })
   }

   async update(id: number, updateEventDto: UpdateEventDto) {
      const event = await this.eventRepo.findOneBy({ id: String(id) })
      if (!event) return null

      return this.eventRepo.save(Object.assign(event, updateEventDto))
   }

   async remove(id: number) {
      const event = await this.eventRepo.findOneBy({ id: String(id) })
      if (!event) return null
      return this.eventRepo.remove(event)
   }
}
