import {
  Get,
  Controller,
} from '@nestjs/common'

@Controller('')
export class LatestController {
  @Get()
  async latest (): Promise<string> {
    return 'not yet implemented!'
  }
}
