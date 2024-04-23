export const healthCheckService = {
  getHealthzStatus: () => ({ status: 'healthy' as const }),
};
