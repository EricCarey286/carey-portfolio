import { TemplateBindingParseResult } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-binary-converter',
  templateUrl: './binary-converter.component.html',
  styleUrls: ['./binary-converter.component.css']
})
export class BinaryConverterComponent {
  onSubmit(binaryConverter: any) {
    let binaryInput = binaryConverter.controls.binaryNumber.value;

    let decimalOutput = parseInt(binaryInput,2);

    return decimalOutput;
  }
}
