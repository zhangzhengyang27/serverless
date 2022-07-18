import { Inject, Provide, Controller, Get, Post } from '@midwayjs/decorator';
import { Context } from '@midwayjs/faas';

@Provide()
@Controller('/')
export class HomeController {
  @Inject()
  ctx: Context;

  @Get('/')
  async hello() {
    return 'Hello Dell';
  }

  @Get('/get')
  async get() {
    return this.ctx.query;
  }

  @Post('/post')
  async post() {
    return this.ctx.method;
  }
}
