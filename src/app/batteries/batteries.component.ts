import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BatteryComponent } from '../battery/battery.component';
import { BatteryData } from '../battery-data';
import { BatteryControllerService } from '../battery-controller.service';

@Component({
  selector: 'app-batteries',
  standalone: true,
  imports: [
    CommonModule,
    BatteryComponent
  ],
  template: `
    <section>
    <form>
      <input type="text" placeholder="Filter by car">
      <button class="primary" type="button">Search</button>
    </form>
  </section>
  <section class="results">
    <app-battery *ngFor="let batteryData of batteryDataList"[batteryData]="batteryData"></app-battery>
  </section>
  `,
  styleUrls: ['./batteries.component.css']
})
export class BatteriesComponent {
  batteryDataList: BatteryData[] = [];
  batteryControllerService: BatteryControllerService = inject(BatteryControllerService);

  constructor() {
    this.batteryDataList = this.batteryControllerService.getAllBatteriesData();
  }
}
