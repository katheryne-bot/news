import { load as config } from '@katheryne/commons'
import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { NewsModule as AppModule } from './app'

const bootstrap = async (): Promise<void> => {
  const { server: { port, host } } = await config()

  const logger = new Logger(AppModule.name)
  const app = await NestFactory.create(AppModule)
  await app.listen(port, host ?? 'localhost', () => {
    logger.log(`started on port: ${port}`)
  })
}

bootstrap()
