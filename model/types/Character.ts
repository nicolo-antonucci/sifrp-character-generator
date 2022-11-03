import { AgeClass } from '../enums/Age';
import { MarriageStatus } from '../enums/MarriageStatus';

export class Character {
  private id: string | undefined;

  age: AgeClass | number;
  ageOfDeath: AgeClass | number;
  bastard: boolean;
  goal: string | undefined;
  marriageStatus: MarriageStatus;
  name: string | undefined;
  nickname: string | undefined;
  previousMarriages: number;
  purpose: string | undefined;
  surname: string | undefined;
  title: string | undefined;
  vice: string | undefined;
  virtue: string | undefined;
}
