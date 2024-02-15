// Importing necessary Angular modules
import { Directive } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { PasswordStrengthService } from "./password-strength/password-strength.service";

@Directive({
	selector: "input[passwordStrength]",
	outputs: [ "strengthEvents: strength" ],
	host: {
		"(input)": "evaluateInputValue( $event.target.value )"
	},
	exportAs: "passwordStrength"
})
export class StrengthEventDirective {
  // Public properties
	public strength: number;
	public strengthEvents: EventEmitter<number>;

  // Private property
	private passwordStrengthService: PasswordStrengthService;

	constructor( passwordStrengthService: PasswordStrengthService ) {
		this.passwordStrengthService = passwordStrengthService; // Injecting the password strength service
		this.strength = 0; // Initializing strength with a default value of 0
		this.strengthEvents = new EventEmitter(); // Creating an instance of EventEmitter for emitting strength events
	}

  // Method to evaluate the input value and emit strength events
	public evaluateInputValue( value: string ) : void {
		this.strength = this.passwordStrengthService.evaluatePassword( value ); // Evaluating password strength using the service
		this.strengthEvents.emit( this.strength ); // Emitting strength events with the evaluated strength value
	}
}
