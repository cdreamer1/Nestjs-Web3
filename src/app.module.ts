import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { Web3Module } from './utils/web3/web3.module';
import { WalletModule } from './wallet/wallet.module';

@Module({
  imports: [UserModule, Web3Module, WalletModule],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
