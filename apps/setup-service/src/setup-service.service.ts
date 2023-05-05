import { Injectable } from '@nestjs/common';

@Injectable()
export class SetupServiceService {
  getHello(): string {
    return 'Hello World!';
  }
}
