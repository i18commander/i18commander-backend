import { Controller, Get } from '@nestjs/common';
import { HealthCheckService } from './health-check.service';

@Controller()
export class HealthCheckController {
  constructor(private readonly healthCheckService: HealthCheckService) {}

  @Get('healthz')
  getHealthzStatus() {
    return this.healthCheckService.getHealthzStatus();
  }
}
