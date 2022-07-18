import {
  Inject,
  Provide,
  Controller,
  Get,
  Post,
  Body, Validate,
  ALL,
  Headers
} from '@midwayjs/decorator';
import {Context} from '@midwayjs/faas';
import {SchemaSaveDTO} from '../dto/schema';
import {SchemaService} from '../service/schema';
import {getStandardResponse,getLoginUser} from '../util/common';
// import {AuthenticationClient} from 'authing-js-sdk'

@Provide()
@Controller('/api/schema/')
export class SchemaController {
  @Inject()
  ctx: Context;

  @Inject()
  schemaService: SchemaService;

  @Get('/getLatestOne')
  async getLatestOne() {
    const result = await this.schemaService.getLatestOne();
    return getStandardResponse(true, result);
  }

  @Post('/save')
  @Validate()
  // async save(@Body('schema') schema: string) {
  //   const result = await this.schemaService.save(schema);
  //   return result;
  // }
  async save(@Body(ALL) bodyObj: SchemaSaveDTO, @Headers('token') token: string) {

    const user = await getLoginUser(token);
    if ("phone" in user && user.phone == "18752160052") {
      const result = await this.schemaService.save(bodyObj.schema);
      return getStandardResponse(true, result);
    }
    return getStandardResponse(false, null, "没有保存权限");
  }
}
