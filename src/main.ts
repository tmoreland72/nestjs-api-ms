import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

async function bootstrap() {
   const app = await NestFactory.create(AppModule)

   const config = new DocumentBuilder()
      .setTitle('Events API')
      .setDescription('Events API description')
      .setVersion('0.20230809.0')
      .build()
   const document = SwaggerModule.createDocument(app, config)
   SwaggerModule.setup('/docs', app, document)

   await app.listen(3000)
}
bootstrap()
