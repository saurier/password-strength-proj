// Importing necessary Angular modules
import { Component } from "@angular/core";
import { ChangeDetectionStrategy } from "@angular/core";

// Importing the Strength enum from the password strength service
import { Strength } from "../password-strength/password-strength.service";

@Component({
	selector: "password-strength-indicator",
	inputs: [ "strength" ],
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrl: './strength-indicator.component.scss',
	templateUrl: './strength-indicator.component.html'
})
export class StrengthIndicatorComponent {

	public strength: Strength = Strength.EMPTY;

}
