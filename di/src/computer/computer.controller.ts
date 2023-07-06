import { DiskService } from './../disk/disk.service';
import { CpuService } from './../cpu/cpu.service';
import { Controller, Get } from '@nestjs/common';

@Controller('computer')
export class ComputerController {
  constructor(
    private CpuService: CpuService,
    private DiskService: DiskService,
  ) {}

  @Get()
  run() {
    return [this.CpuService.compute(1, 2), this.DiskService.getData()];
  }
}
