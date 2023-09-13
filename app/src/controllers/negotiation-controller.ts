import { domInjector } from "../decorators/dom-injector.js";
import { inspect } from "../decorators/inspect.js";
import { logExecutionTime } from "../decorators/log-execution-time.js";
import { WeekDays } from "../enums/week-days.js";
import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";
import { NegotiationsService } from "../services/negotiations-service.js";
import { print } from "../utils/print.js";
import { MessageView } from "../views/message-view.js";
import { NegotiationsView } from "../views/negotiations-view.js";

export class NegotiationController {
  @domInjector("#date")
  private inputDate: HTMLInputElement;
  @domInjector("#quantity")
  private inputQuantity: HTMLInputElement;
  @domInjector("#value")
  private inputValue: HTMLInputElement;
  private negotiations = new Negotiations();
  private negotiationsView = new NegotiationsView("#negotiationsView");
  private messageView = new MessageView("#messageView");
  private negotiationsService = new NegotiationsService();

  constructor() {
    this.negotiationsView.update(this.negotiations);
  }

  @inspect
  @logExecutionTime()
  public add(): void {
    const negotiation = Negotiation.createFrom(
      this.inputDate.value,
      this.inputQuantity.value,
      this.inputValue.value
    );
    if (!this.validateBusinessDay(negotiation.date)) {
      this.messageView.update("Só aceitamos negociações em dias úteis!");
      this.cleanForm();
      return;
    }
    this.negotiations.add(negotiation);
    print(negotiation, this.negotiations);
    this.cleanForm();
    this.updateView();
  }

  public importData(): void {
    this.negotiationsService
      .getNegotiationsToday()
      .then((negotiationsToday) => {
        return negotiationsToday.filter((negotiationsToday) => {
          return !this.negotiations
            .list()
            .some((negotiation) => negotiation.isEqual(negotiationsToday));
        });
      })
      .then((negotiationsToday) => {
        for (let negotiation of negotiationsToday) {
          this.negotiations.add(negotiation);
        }
        this.negotiationsView.update(this.negotiations);
      });
  }

  private validateBusinessDay(date: Date) {
    return date.getDay() > WeekDays.DOMINGO && date.getDay() < WeekDays.SABADO;
  }

  private cleanForm(): void {
    this.inputDate.value = "";
    this.inputQuantity.value = "";
    this.inputValue.value = "";
    this.inputDate.focus();
  }

  private updateView(): void {
    this.negotiationsView.update(this.negotiations);
    this.messageView.update("Negociação adicionada com sucesso!");
  }
}
