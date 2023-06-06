import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { join } from 'path'; 

@Injectable()
export class AppService {
  private readonly dogData = JSON.parse(
    readFileSync(join(__dirname, 'dog-breeds.json'), 'utf8')
  );

  getDogBreeds(): string {
    return this.dogData.dogBreeds;
  }
}