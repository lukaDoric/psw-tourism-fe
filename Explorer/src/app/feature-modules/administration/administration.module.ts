import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipmentFormComponent } from './equipment-form/equipment-form.component';
import { EquipmentComponent } from './equipment/equipment.component';



@NgModule({
  declarations: [
    EquipmentFormComponent,
    EquipmentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdministrationModule { }
