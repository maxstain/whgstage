export class Jackpot {
  id: string;
  name: string;
  image: string;
  amount: number;

  constructor(id: string, name: string, image: string, amount: number) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.amount = amount;
  }
}
