import { Printable } from "../interfaces/printable.js";

export class Negotiation implements Printable {
  constructor(
    private _date: Date,
    public readonly quantity: number,
    public readonly value: number
  ) {}

  public static createFrom(
    dataString: string,
    quantityString: string,
    valueString: string
  ): Negotiation {
    const exp = /-/g;
    const date = new Date(dataString.replace(exp, ","));
    const quantity = parseInt(quantityString);
    const value = parseFloat(valueString);
    return new Negotiation(date, quantity, value);
  }

  get date(): Date {
    const date = new Date(this._date.getTime());
    return date;
  }

  get volume(): number {
    return this.quantity * this.value;
  }

  public forText(): string {
    return `
      Data: ${this.date},
      Quantidade: ${this.quantity},
      Valor: ${this.value}
    `;
  }
}
