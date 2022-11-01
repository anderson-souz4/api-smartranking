import {Body, Controller, Delete, Get, HttpCode, Param, Post, Query} from '@nestjs/common';
import {CriarJogadorDto} from "./interfaces/dtos/criar-jogador.dto";
import {JogadoresService} from "./jogadores.service";
import {Jogador} from "./interfaces/jogador.interface";

@Controller('api/v1/jogadores')
export class JogadoresController {

    constructor(private readonly jogadoresService: JogadoresService) {
    }


    @Post()
    async criarAtualizarJogador(
        @Body() criarJogadorDto: CriarJogadorDto
    ) {
        await this.jogadoresService.criarAtualizarJogador(criarJogadorDto);
    }

    @Get()
    async consultarJogadores(
        @Query('email') email: string): Promise<Jogador[] | Jogador>{
        if (email) {
            return await this.jogadoresService.consultarJogadoresPeloEmail(email);
        } else {
            return await this.jogadoresService.consultarTodosJogadores();
        }

    }

    @Delete()
    async delete(@Query('email') email: string): Promise<void>{
        if (email){
            await this.jogadoresService.deletar(email);
        }

    }


}
