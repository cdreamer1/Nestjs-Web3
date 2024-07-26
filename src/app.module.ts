import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { UserModule } from './features/user/user.module';
import { MintNftModule } from './features/mint-nft/mint-nft.module';

@Module({
  imports: [UserModule, MintNftModule],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
