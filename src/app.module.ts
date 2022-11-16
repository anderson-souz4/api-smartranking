import { Module } from '@nestjs/common';
import { JogadoresModule } from './jogadores/jogadores.module';
import { JogadoresController } from './jogadores/jogadores.controller';
import { JogadoresService } from './jogadores/jogadores.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    JogadoresModule,
    MongooseModule.forRoot(
      'mongodb+srv://admin:admin@cluster0.v7fvakq.mongodb.net/smartranking',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
