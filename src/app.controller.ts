import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { DogBreed } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/dog-breeds')
  getDogBreeds(): Array<DogBreed> {
    return this.appService.getDogBreeds();
  }
  
  @Get('/dog-breeds/:id')
  getDogBreedById(@Param('id', ParseIntPipe) id: number): DogBreed {
    return this.appService.getDogBreedById(id);
  }
}
