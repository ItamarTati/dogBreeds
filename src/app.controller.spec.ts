import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

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
          name: 'West Highland White Terrier',
          description:
            'The West Highland White Terrier, also known as the Westie, is a friendly, active, and outgoing breed. They are small but sturdy dogs with a lively and confident personality. Westies are known for their white, double-coated fur and their distinctive pointed ears. They make great companions and are often seen as affectionate family pets.',
        },
        {
          name: 'German Shepherd',
          description:
            'The German Shepherd is a loyal, courageous, and intelligent breed. They are well-known for their versatility and are commonly used as working dogs in various roles such as police, military, and search and rescue. German Shepherds are highly trainable and excel in tasks that require obedience and protection. They have a strong protective instinct and make excellent guard dogs.',
        },
        {
          name: 'Irish Wolfhound',
          description:
            'The Irish Wolfhound is an intelligent, friendly, and devoted breed. They are one of the tallest dog breeds and have a gentle and noble disposition. Irish Wolfhounds are known for their loyalty and make wonderful family pets. Despite their large size, they are generally calm and patient. They require regular exercise to stay healthy and thrive in a loving and nurturing environment.',
        },
        {
          name: 'Newfoundland Dog',
          description:
            'The Newfoundland Dog, often referred to as Newfie, is a docile, willful, and friendly breed. They are known for their massive size and strength, yet they have a sweet and gentle nature. Newfoundlands are excellent swimmers and have a natural instinct to save people from drowning. They are often regarded as gentle giants and are highly regarded for their loyalty and affectionate nature.',
        },
      ];
      expect(result).toEqual(expectedBreeds);
    });
  });
});
