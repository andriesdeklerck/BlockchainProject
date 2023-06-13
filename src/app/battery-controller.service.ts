import { Injectable } from '@angular/core';
import { BatteryData } from './battery-data';

var batteries = [
  {
    Hash: "0123456789",
    ChargeTime: 4,
    CycleIndex: 10,
    DecrementTime: 1,
    DischargeTime: 1,
    MaxVoltageDischarge: 10,
    MinVoltageDischarge: 2,
    RemainingUsefulLife: 6,
    TimeAt4_15V: 3,
    TimeConstantCurrent: 4
  },
  {
    Hash: "0123456789abcdef",
    ChargeTime: 4,
    CycleIndex: 10,
    DecrementTime: 1,
    DischargeTime: 1,
    MaxVoltageDischarge: 10,
    MinVoltageDischarge: 2,
    RemainingUsefulLife: 6,
    TimeAt4_15V: 3,
    TimeConstantCurrent: 4
  },
  {
    Hash: "123456789abcdef0",
    ChargeTime: 4,
    CycleIndex: 10,
    DecrementTime: 1,
    DischargeTime: 1,
    MaxVoltageDischarge: 10,
    MinVoltageDischarge: 2,
    RemainingUsefulLife: 6,
    TimeAt4_15V: 3,
    TimeConstantCurrent: 4
  },
  {
    Hash: "23456789abcdef01",
    ChargeTime: 4,
    CycleIndex: 10,
    DecrementTime: 1,
    DischargeTime: 1,
    MaxVoltageDischarge: 10,
    MinVoltageDischarge: 2,
    RemainingUsefulLife: 6,
    TimeAt4_15V: 3,
    TimeConstantCurrent: 4
  },
  {
    Hash: "3456789abcdef012",
    ChargeTime: 4,
    CycleIndex: 10,
    DecrementTime: 1,
    DischargeTime: 1,
    MaxVoltageDischarge: 10,
    MinVoltageDischarge: 2,
    RemainingUsefulLife: 6,
    TimeAt4_15V: 3,
    TimeConstantCurrent: 4
  },
  {
    Hash: "456789abcdef0123",
    ChargeTime: 4,
    CycleIndex: 10,
    DecrementTime: 1,
    DischargeTime: 1,
    MaxVoltageDischarge: 10,
    MinVoltageDischarge: 2,
    RemainingUsefulLife: 6,
    TimeAt4_15V: 3,
    TimeConstantCurrent: 4
  },
  {
    Hash: "56789abcdef01234",
    ChargeTime: 4,
    CycleIndex: 10,
    DecrementTime: 1,
    DischargeTime: 1,
    MaxVoltageDischarge: 10,
    MinVoltageDischarge: 2,
    RemainingUsefulLife: 6,
    TimeAt4_15V: 3,
    TimeConstantCurrent: 4
  },
  {
    Hash: "6789abcdef012345",
    ChargeTime: 4,
    CycleIndex: 10,
    DecrementTime: 1,
    DischargeTime: 1,
    MaxVoltageDischarge: 10,
    MinVoltageDischarge: 2,
    RemainingUsefulLife: 6,
    TimeAt4_15V: 3,
    TimeConstantCurrent: 4
  },
  {
    Hash: "789abcdef0123456",
    ChargeTime: 4,
    CycleIndex: 10,
    DecrementTime: 1,
    DischargeTime: 1,
    MaxVoltageDischarge: 10,
    MinVoltageDischarge: 2,
    RemainingUsefulLife: 6,
    TimeAt4_15V: 3,
    TimeConstantCurrent: 4
  },
  {
    Hash: "89abcdef01234567",
    ChargeTime: 4,
    CycleIndex: 10,
    DecrementTime: 1,
    DischargeTime: 1,
    MaxVoltageDischarge: 10,
    MinVoltageDischarge: 2,
    RemainingUsefulLife: 6,
    TimeAt4_15V: 3,
    TimeConstantCurrent: 4
  },
  {
    Hash: "9abcdef012345678",
    ChargeTime: 4,
    CycleIndex: 10,
    DecrementTime: 1,
    DischargeTime: 1,
    MaxVoltageDischarge: 10,
    MinVoltageDischarge: 2,
    RemainingUsefulLife: 6,
    TimeAt4_15V: 3,
    TimeConstantCurrent: 4
  },
  {
    Hash: "abcdef0123456789",
    ChargeTime: 4,
    CycleIndex: 10,
    DecrementTime: 1,
    DischargeTime: 1,
    MaxVoltageDischarge: 10,
    MinVoltageDischarge: 2,
    RemainingUsefulLife: 6,
    TimeAt4_15V: 3,
    TimeConstantCurrent: 4
  }
];

@Injectable({
  providedIn: 'root'
})
export class BatteryControllerService {
  batteryDataList: BatteryData[] = batteries

  getAllBatteriesData(): BatteryData[] {
    return this.batteryDataList;
  }

  getBatteryDataById(hash: string): BatteryData | undefined {
    return this.batteryDataList.find(batteryData => batteryData.Hash === hash);
  }

  constructor() { }
}
