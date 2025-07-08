import { Injectable } from '@nestjs/common';

@Injectable()
export class SeedService {
  async runSeed() {
    await this.insertNewProducts();
    return 'SEED EXECUTED';
  }

  private async insertNewProducts() {
    return true;
  }
}
