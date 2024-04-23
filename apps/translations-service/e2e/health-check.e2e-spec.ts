import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { HealthCheckModule } from '../src/health-check/health-check.module';
import { HealthCheckService } from '../src/health-check/health-check.service';
import { healthCheckService } from '../src/health-check/health-check.service.mock';
import request from 'supertest';

describe('HealthCheck', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [HealthCheckModule],
    })
      .overrideProvider(HealthCheckService)
      .useValue(healthCheckService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it('should be able to get the health check page', () => {
    request(app.getHttpServer()).get('/healthz').expect(200).expect({
      data: healthCheckService.getHealthzStatus(),
    });
  });
});
