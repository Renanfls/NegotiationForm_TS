import { dayTrading } from "../interfaces/day-trading.js";
import { Negotiation } from "../models/negotiation.js";
export class NegotiationsService {
  public getNegotiationsToday(): Promise<Negotiation[]> {
    return fetch("http://localhost:8080/dados")
      .then((res) => res.json())
      .then((data: dayTrading[]) => {
        return data.map((dataToday) => {
          return new Negotiation(
            new Date(),
            dataToday.vezes,
            dataToday.montante
          );
        });
      });
  }
}
