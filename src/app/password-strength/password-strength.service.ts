// Importing necessary Angular services
import { forwardRef } from "@angular/core";
import { Injectable } from "@angular/core";

// Enum to define password strength levels
export enum Strength {
  EMPTY,
  VERY_WEAK,
  EASY,
  MEDIUM,
  STRONG
}

// Injectable decorator to mark the service as a dependency that can be injected
@Injectable({
  providedIn: "root",
  useClass: forwardRef(() => DefaultPasswordStrengthServiceImplementation)
})

export abstract class PasswordStrengthService {
  // Abstract method to evaluate password strength
  public abstract evaluatePassword(password: string): number;
}

@Injectable({
  providedIn: "root"
})

export class DefaultPasswordStrengthServiceImplementation extends PasswordStrengthService {
  // Method to evaluate password strength based on defined rules
  public evaluatePassword(password: string): number {

    // Regular expressions to check various conditions for password strength
    const isContainsLet = /^(?=.+[a-zA-Z]).{8,}$/;
    const isContainsDig = /^(?=.+\d).{8,}$/;
    const isContainsSym = /^(?=.+[!@#$%^&*]).{8,}$/;
    const isContainsLetAndDig = /^(?=.+[a-zA-Z])(?=.+\d).{8,}$/;
    const isContainsDigAndSym = /^(?=.+[0-9])(?=.+[!@#$%^&*]).{8,}$/;
    const isContainsLetAndSym = /^(?=.+[!@#$%^&*])(?=.+[a-zA-Z]).{8,}$/;
    const isContainsLetAndSymAndNum = /^(?=.+\d)(?=.+[!@#$%^&*])(?=.+[a-zA-Z]).{8,}$/;

    // Checking password strength based on the rules
    switch (true) {
      case (password.length == 0):
        return (Strength.EMPTY);

      case (isContainsLetAndSymAndNum.test(password)):
        return (Strength.STRONG);

      case (isContainsLetAndDig.test(password) || isContainsDigAndSym.test(password) || isContainsLetAndSym.test(password)):
        return (Strength.MEDIUM);

      case (isContainsLet.test(password) || isContainsDig.test(password) || isContainsSym.test(password)):
        return (Strength.EASY);

      case (password.length <= 8 && password.length > 0):
        return (Strength.VERY_WEAK);

      default:
        return (Strength.EMPTY);
    }
  }
}

//
// |\___/|  usense the best
// | +  +|
// |     |
// |_\\//|__/


