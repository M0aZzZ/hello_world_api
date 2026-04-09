import { Controller, Get } from '@nestjs/common';

@Controller('hello-world')
export class AppController {
  @Get()
  getHelloWorld(): string {
    return 'hello world !';
  }
}
