import { Service } from '../../interface/service';
import { DesignResponse } from '../types/design';

export class DesignService extends Service {
  constructor(instance: string, apiSecret: string) {
    super(instance, apiSecret, 'Design');
  }

  async retrieveAll(): Promise<DesignResponse> {
    return this.get();
  }

  async retrieve(id: string): Promise<DesignResponse> {
    return this.get(id);
  }
}
