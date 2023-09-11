import { Negotiation } from "../models/negotiation.js";
export class NegotiationsService {
    getNegotiationsToday() {
        return fetch("http://localhost:8080/dados")
            .then((res) => res.json())
            .then((data) => {
            return data.map((dataToday) => {
                return new Negotiation(new Date(), dataToday.vezes, dataToday.montante);
            });
        });
    }
}
