import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BatteryData } from '../battery-data';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-battery',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  template: `
    <section class="listing">
    <!-- <img class="listing-photo" [src]="batteryDetail.photo" alt="Exterior photo of {{batteryDetail.DisChargeTime}}"> -->
    <h2 class="listing-heading">Id: {{ batteryData.Hash }}</h2>
    <h3 class="listing-data">Remaining Useful Life: {{ batteryData.RemainingUsefulLife }}</h3>
    <a [routerLink]="['/details', batteryData.Hash]">See Details</a>
  </section>
  `,
  styleUrls: ['./battery.component.css']
})

export class BatteryComponent {
  @Input() batteryData!: BatteryData;
}
