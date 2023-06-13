import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BatteryControllerService } from '../battery-controller.service';
import { BatteryData } from '../battery-data';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article>
    <!-- <img class="listing-photo" [src]="batteryData?.photo" alt="Exterior photo of {{batteryData?.name}}"/> -->
    <section class="listing-description">
      <h2 class="listing-heading">{{batteryData?.Hash}}</h2>
      <p class="listing-location">{{batteryData?.MaxVoltageDischarge}}, {{batteryData?.MinVoltageDischarge}}</p>
    </section>
    <section class="listing-features">
      <h2 class="section-heading">Data</h2>
      <ul>
        <li>Data 1: {{batteryData?.TimeAt4_15V}}</li>
        <li>Data 2: {{batteryData?.TimeConstantCurrent}}</li>
        <li>Data 3: {{batteryData?.DecrementTime}}</li>
      </ul>
    </section>
  </article>
  `,
  styles: []
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  batteryControllerService: BatteryControllerService = inject(BatteryControllerService);
  batteryData: BatteryData | undefined;

  constructor() {
    const batteryDataId = String(this.route.snapshot.params['hash']);
    this.batteryData = this.batteryControllerService.getBatteryDataById(batteryDataId);
  }
}
