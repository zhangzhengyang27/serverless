import {
  Inject,
  Provide,
  Controller,
  Get,
  Post,
  Body,
} from '@midwayjs/decorator';
import { Context } from '@midwayjs/faas';
import { SchemaService } from '../service/schema';

@Provide()
@Controller('/api/schema/')
export class SchemaController {
  @Inject()
  ctx: Context;

  @Inject()
  schemaService: SchemaService;

  @Get('/getLatestOne')
  async get() {
    const result = await this.schemaService.getLatestOne();
    return result;
  }

  @Post('/save')
  async save(@Body('schema') schema: string) {
    const result = await this.schemaService.save(schema);
    return result;
  }
}
