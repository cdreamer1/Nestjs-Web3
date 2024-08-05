import { Injectable } from '@nestjs/common';
import { Web3Adapter } from '../utils/web3/web3.adapter';

@Injectable()
export class WalletService {
  constructor(private readonly web3Adapter: Web3Adapter) {}

  async getBalance() {
    return this.web3Adapter.balance();
  }

  async setTransfer(toWallet: string, value: number) {
    return this.web3Adapter.transfer(toWallet, value);
  }
}