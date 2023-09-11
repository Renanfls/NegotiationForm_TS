import { Printable } from "../interfaces/printable.js";
import { Negotiation } from "./negotiation.js";

export class Negotiations implements Printable {
  private negotiations: Array<Negotiation> = [];

  public add(negotiation: Negotiation) {
    this.negotiations.push(negotiation);
  }

  public list(): ReadonlyArray<Negotiation> {
    return [...this.negotiations];
  }

  public forText(): string {
    return JSON.stringify(this.negotiations, null);
  }
}
