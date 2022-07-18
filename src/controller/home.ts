import axios from 'axios';
import { Inject, Provide, Controller, Get } from '@midwayjs/decorator';
import { Context } from '@midwayjs/faas';

@Provide()
@Controller('/')
export class HomeController {
  @Inject()
  ctx: Context;

  @Get('/')
  async home() {
    const result = await axios.get(
      'http://tag.zhangzhengyang.com/blog/index.html'
    );
    return result.data;
  }

  @Get('/admin')
  async admin() {
    const result = await axios.get(
      'http://tag.zhangzhengyang.com/blog/admin.html'
    );
    return result.data;
  }
}
