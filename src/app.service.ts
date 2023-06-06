import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { join } from 'path'; 

export interface DogBreed {
  id: number;
  name: string;
  description: string;
}


@Injectable()
export class AppService {
  private readonly dogData = JSON.parse(
    readFileSync(join(__dirname, '../static/dog-breeds.json'), 'utf8')
  );

  getDogBreeds(): Array<DogBreed> {
    return this.dogData.dogBreeds;
  }

  getDogBreedById(id: number): DogBreed {
    return this.dogData.dogBreeds.find((dogBreed) => dogBreed.id === id);
  }
}