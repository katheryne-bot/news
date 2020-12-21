import { Module } from '@nestjs/common'
import { CommonModule } from '@katheryne/commons'
import { IdController, LatestController } from '../controllers'

@Module({
  imports: [
    CommonModule
  ],
  controllers: [
    IdController,
    LatestController,
  ]
})
export class NewsModule {}
