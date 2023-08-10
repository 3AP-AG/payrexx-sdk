import { Service } from '../../interface/service';
import { DesignRequest, DesignResponse } from '../types/design';

export class DesignService extends Service {
  constructor(instance: string, apiSecret: string) {
    super(instance, apiSecret, 'Design');
  }

  /**
   * Retrieve all designs
   * @returns All designs
   */
  async retrieveAll(): Promise<DesignResponse> {
    return this.get();
  }

  /**
   * Create a design
   * @param request Form data for creation of design
   * @returns Newly created design
   */
  async create(request: DesignRequest): Promise<DesignResponse> {
    return this.post(request);
  }

  /**
   * Remove a design
   * @param id The id of design to be removed
   * @returns Delete status response
   */
  async remove(id: string): Promise<DesignResponse> {
    return this.deleteWithData({ uuid: id });
  }

  /**
   * Update a design
   * @param id UUID of the design to update
   * @param request Form data to update design
   * @returns Updated design
   */
  async update(id: string, request: DesignRequest): Promise<DesignResponse> {
    return this.post({ ...request, uuid: id }, id);
  }
}
