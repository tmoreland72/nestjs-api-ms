import {
   Controller,
   Get,
   Post,
   Body,
   Patch,
   Param,
   Delete,
} from '@nestjs/common'
import {
   ApiConsumes,
   ApiCreatedResponse,
   ApiForbiddenResponse,
   ApiNotFoundResponse,
   ApiOkResponse,
   ApiOperation,
   ApiParam,
   ApiQuery,
   ApiResponse,
   ApiTags,
} from '@nestjs/swagger'
import { EventsService } from './events.service'
import { CreateEventDto } from './dto/create-event.dto'
import { UpdateEventDto } from './dto/update-event.dto'
import { Event } from './entities/event.entity'

@ApiTags('events')
@Controller('events')
export class EventsController {
   constructor(private readonly eventsService: EventsService) {}

   @Post()
   @ApiConsumes('application/json')
   @ApiOperation({ summary: 'Create a new event' })
   @ApiCreatedResponse({
      description: 'The record has been successfully created.',
      type: Event,
   })
   @ApiForbiddenResponse({ description: 'Unauthorized request attempt.' })
   create(@Body() createEventDto: CreateEventDto) {
      return this.eventsService.create(createEventDto)
   }

   @ApiOperation({ summary: 'Get all or filtered events' })
   @ApiQuery({
      name: 'include',
      example: 'director',
      required: false,
      description: 'A comma-separated list of related records to be included.',
   })
   @ApiQuery({
      name: 'fields',
      allowReserved: true,
      style: 'deepObject',
      schema: {
         type: 'object',
         additionalProperties: {
            type: 'string',
         },
         example: {
            event: 'id,name',
            director: 'name,email',
         },
      },
      description:
         'A comma-separated list of fields to be returned for related records.',
   })
   @ApiQuery({
      name: 'page',
      allowReserved: true,
      style: 'deepObject',
      schema: {
         type: 'object',
         properties: {
            number: { type: 'number' },
            size: { type: 'number' },
         },
         example: {
            number: 1,
            size: 10,
         },
      },
      description: 'The page number and size to be returned.',
   })
   @ApiOkResponse({
      description: 'The records have been successfully retrieved.',
      type: [Event],
   })
   @ApiForbiddenResponse({ description: 'Unauthorized request attempt.' })
   @Get()
   find() {
      return this.eventsService.findAll()
   }

   @ApiOperation({ summary: 'Get a single event by id' })
   @ApiParam({
      name: 'id',
      required: true,
   })
   @ApiOkResponse({
      description: 'The record has been successfully retrieved.',
      type: Event,
   })
   @ApiNotFoundResponse({ description: 'Record not found.' })
   @ApiForbiddenResponse({ description: 'Unauthorized request attempt.' })
   @Get(':id')
   findOne(@Param('id') id: string) {
      return this.eventsService.findOne(+id)
   }

   @ApiOperation({ summary: 'Update an event' })
   @ApiOkResponse({
      description: 'The records have been successfully retrieved.',
      type: Event,
   })
   @ApiNotFoundResponse({ description: 'Record not found.' })
   @ApiForbiddenResponse({ description: 'Unauthorized request attempt.' })
   @Patch(':id')
   update(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto) {
      return this.eventsService.update(+id, updateEventDto)
   }

   @ApiOperation({ summary: 'Delete an event' })
   @ApiOkResponse({
      description: 'The record has been successfully deleted.',
      type: Event,
   })
   @ApiNotFoundResponse({ description: 'Record not found.' })
   @ApiForbiddenResponse({ description: 'Unauthorized request attempt.' })
   @Delete(':id')
   remove(@Param('id') id: string) {
      return this.eventsService.remove(+id)
   }
}
