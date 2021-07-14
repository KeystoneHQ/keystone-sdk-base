import service from './service';
export { SupportedResult } from './types';
service.bootstrap();

export default service.makeService();
