import { AgeClass, MarriageStatus, Sex } from '../index';

export class Character {
  private id: string | undefined;

  age: AgeClass | number;
  ageOfDeath: AgeClass | number;
  bastard: boolean;
  gender: Sex;
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
