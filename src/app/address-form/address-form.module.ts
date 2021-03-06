import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressFormComponent } from './address-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { SelectAutocompleteModule } from '../select-autocomplete/select-autocomplete.module';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [AddressFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    SelectAutocompleteModule,
    NgxMaskModule.forRoot({ validation: false })
  ],
  exports: [AddressFormComponent]
})
export class AddressFormModule { }
