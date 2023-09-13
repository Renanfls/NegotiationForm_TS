import { Comparable } from "./comparable.js";
import { Printable } from "./printable.js";

export interface Model<T> extends Printable, Comparable<T> {}
