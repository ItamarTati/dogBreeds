import { Controller, Get, Param, ParseIntPipe, Header } from '@nestjs/common';
import { AppService } from './app.service';
import { DogBreed } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/dog-breeds')
  @Header('Access-Control-Allow-Origin', '*')
  getDogBreeds(): Array<DogBreed> {
    return this.appService.getDogBreeds();
  }
  
  @Get('/dog-breeds/:id')
  @Header('Access-Control-Allow-Origin', '*')
  getDogBreedById(@Param('id', ParseIntPipe) id: number): DogBreed {
    return this.appService.getDogBreedById(id);
  }
}
