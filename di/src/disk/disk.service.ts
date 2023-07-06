import { PowerService } from 'src/power/power.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DiskService {
  constructor(private PowerService: PowerService) {}
  getData() {
    console.log('drawing 20 watts power from power service');
    this.PowerService.supplyPower(20);
    return 'data!';
  }
}
