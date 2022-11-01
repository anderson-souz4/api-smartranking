import {Injectable, Logger, NotFoundException} from '@nestjs/common';
import {CriarJogadorDto} from "./interfaces/dtos/criar-jogador.dto";
import {Jogador} from "./interfaces/jogador.interface";
import * as uuid from "uuid";

@Injectable()
export class JogadoresService {

    private jogadores: Jogador[] = [];

    private readonly logger = new Logger(JogadoresService.name)

    async criarAtualizarJogador(criaJogadorDto: CriarJogadorDto): Promise<void> {
        const {email} = criaJogadorDto
        const jogadorEncontrado = await this.jogadores.find(jogador => jogador.email === email);

        if (jogadorEncontrado) {
            return await this.atualizar(jogadorEncontrado, criaJogadorDto);
        } else {
            await this.criar(criaJogadorDto)
        }

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


    async consultarTodosJogadores(): Promise<Jogador[]> {
        return await this.jogadores;

    }

    private atualizar(jogadorEncontrado: Jogador, criarJogadorDto: CriarJogadorDto): void {
        const {nome} = criarJogadorDto

        jogadorEncontrado.nome = nome;


    }

    async consultarJogadoresPeloEmail(email: string): Promise<Jogador>{
        const jogadorEncontrado = await this.jogadores.find(jogador => jogador.email === email)
        if (!jogadorEncontrado) {
            throw new NotFoundException(`Jogador com e-mail ${email} não encontrado.`)
        }
        return jogadorEncontrado;
    }
}
