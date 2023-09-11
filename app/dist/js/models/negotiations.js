export class Negotiations {
    constructor() {
        this.negotiations = [];
    }
    add(negotiation) {
        this.negotiations.push(negotiation);
    }
    list() {
        return [...this.negotiations];
    }
    forText() {
        return JSON.stringify(this.negotiations, null);
    }
}
