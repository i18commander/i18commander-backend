import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthCheckService {
  getHealthzStatus() {
    return { status: 'healthy' as const };
  }
}
