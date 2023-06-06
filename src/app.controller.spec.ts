import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service'

describe('AppController', () => {
  let controller: AppController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService],
      controllers: [AppController],
    }).compile();

    controller = module.get<AppController>(AppController);
  });

  describe('getDogBreeds', () => {
    it('should return an array of dog breeds', () => {
      const result = controller.getDogBreeds();
      expect(result).toBeDefined();
      expect(result).toBeInstanceOf(Array);
    });

    it('should return dog breeds from the JSON file', () => {
      const result = controller.getDogBreeds();
      const expectedBreeds = [
        {
          name: "Labrador Retriever",
          description: "Friendly, active, and outgoing"
        },
        {
          name: "German Shepherd",
          description: "Loyal, courageous, and intelligent"
        },
        {
          name: "Golden Retriever",
          description: "Intelligent, friendly, and devoted"
        },
        {
          name: "Bulldog",
          description: "Docile, willful, and friendly"
        },
        {
          name: "Poodle",
          description: "Intelligent, active, and alert"
        },
        {
          name: "Beagle",
          description: "Friendly, curious, and merry"
        }
      ]
      expect(result).toEqual(expectedBreeds);
    });
  });
});