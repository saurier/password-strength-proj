// Importing necessary Angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import app services, components and directives
import { PasswordStrengthService } from "./password-strength.service";
import { Strength } from "./password-strength.service";
import { StrengthEventDirective } from "../strength-event.directive";
import { StrengthIndicatorComponent } from "../strength-indicator/strength-indicator.component";

// Exporting spec symbols for external usage
export { PasswordStrengthService };
export { Strength };
export { StrengthEventDirective };
export { StrengthIndicatorComponent };

@NgModule({
  imports: [
		CommonModule
	],
	exports: [
		StrengthEventDirective,
		StrengthIndicatorComponent
	],
	providers: [
	],
	declarations: [
		StrengthEventDirective,
		StrengthIndicatorComponent
	]
})
export class PasswordStrengthModule { }
