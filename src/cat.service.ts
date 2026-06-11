import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
  getHelloCat(): string {
    return 'Hello, Cat!';
  }
}
