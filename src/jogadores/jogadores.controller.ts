import {Body, Controller, Get, Post} from '@nestjs/common';
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
    async consultarJogadores(): Promise<Jogador[]>{
        return this.jogadoresService.consultarTodosJogadores();

    }


}
