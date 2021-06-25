import { TYPES_OF_COEFFICIENTS } from './constants/types-of-coefficients.constant';
import { TypeOfCoefficient } from './interfaces/type-of-ciefficient.interface';
import { Component } from '@angular/core';
import { AGREEMENT_FOR_COEFFICIENTS } from './constants/agreement-for-coefficients.constant';

@Component({
  selector: 'app-types-of-coefficients',
  templateUrl: './types-of-coefficients.component.html',
  styleUrls: ['./types-of-coefficients.component.scss'],
})
export class TypesOfCoefficientsComponent {
  public typesOfCoefficients: TypeOfCoefficient[] = TYPES_OF_COEFFICIENTS;
  public quoteText: string = AGREEMENT_FOR_COEFFICIENTS;
  constructor() {}
}
