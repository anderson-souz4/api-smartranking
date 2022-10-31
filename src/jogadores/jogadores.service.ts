import {Injectable, Logger} from '@nestjs/common';
import {CriarJogadorDto} from "./interfaces/dtos/criar-jogador.dto";
import {Jogador} from "./interfaces/jogador.interface";
import * as uuid from "uuid";

@Injectable()
export class JogadoresService {

    private jogadores: Jogador[] = [];

    private readonly logger = new Logger(JogadoresService.name)

    async criarAtualizarJogador(criaJogadorDto: CriarJogadorDto): Promise<void> {
        await this.criar(criaJogadorDto);

    }

    private criar(criarJogadorDto: CriarJogadorDto): void {
        const {nome, telefoneCelular, email} = criarJogadorDto

        const jogador: Jogador = {
            id: uuid,
            nome,
            telefoneCelular,
            email,
            ranking: 'A',
            posicaoRanking: 1,
            urlFotoJogador: 'www.google.com.br/foto123.jpg'
        };

        this.logger.log(`criaJogadorDto: ${JSON.stringify(jogador)}`)
        this.jogadores.push(jogador)

    }
}