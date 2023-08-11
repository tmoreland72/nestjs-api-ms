import { Controller, Get } from '@nestjs/common'
import { ApiTags, ApiOkResponse, ApiOperation } from '@nestjs/swagger'
import { AppService } from './app.service'

@Controller()
export class AppController {
   constructor(private readonly appService: AppService) {}

   @ApiTags('status')
   @ApiOperation({ summary: 'Get the status of the API' })
   @ApiOkResponse({
      description: 'The status of the API.',
   })
   @Get()
   getHello(): string {
      return this.appService.getHello()
   }
}
