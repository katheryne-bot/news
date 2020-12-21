import {
  Get,
  Param,
  Controller,
} from '@nestjs/common'

@Controller()
export class IdController {
  @Get(':id')
  async fromId (@Param('id') id: string): Promise<string> {
    console.log(id)

    return 'not yet implemented!'
  }
}
