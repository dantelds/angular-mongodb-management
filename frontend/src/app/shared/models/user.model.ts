export class UserModel{
   birthDate: string;
   gender: string;
   health: number;
   lastName: string;
   magic: number;
   name: string;
   password: string;
   username: string;
   school: string;
   strength: number;

  constructor(birthDate: string, gender: string, health: number, lastName: string, magic: number, name: string, password: string, username: string, school: string, strength: number) {
    this.birthDate = birthDate;
    this.gender = gender;
    this.health = health;
    this.lastName = lastName;
    this.magic = magic;
    this.name = name;
    this.password = password;
    this.username = username;
    this.school = school;
    this.strength = strength;
  }
}
