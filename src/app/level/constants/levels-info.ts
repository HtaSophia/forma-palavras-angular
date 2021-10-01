import { Level } from '../types/level';

export const LEVELS_INFO: { [level: string]: Level } = {
    1: {
        maxLetters: 5,
        letters: ['E', 'S', 'P', 'O', 'R', 'T', 'E'],
        words: [
            { visible: false, value: 'PE', hint: 'É uma parte do corpo' },
            { visible: false, value: 'TETO', hint: 'Parte de cima da casa' },
            {
                visible: false,
                value: 'POTE',
                hint: 'Onde você guarda biscoitos',
            },
            { visible: false, value: 'PRETO', hint: 'Cor mais escura' },
            { visible: false, value: 'SORTE', hint: 'Oposto da palavra Azar' },
        ],
    },
    2: {
        maxLetters: 5,
        letters: ['M', 'R', 'A', 'S', 'A', 'O'],
        words: [
            { visible: false, value: 'AR', hint: 'Você precisa respirar isso' },
            { visible: false, value: 'MAR', hint: 'Água que existe na praia' },
            {
                visible: false,
                value: 'ASA',
                hint: 'Os passaros precisam disso para voar',
            },
            {
                visible: false,
                value: 'AMOR',
                hint: 'Um dos melhores sentimentos',
            },
            {
                visible: false,
                value: 'SOMA',
                hint: '2 é o resultado da **** de 1 + 1',
            },
        ],
    },
    3: {
        maxLetters: 5,
        letters: ['E', 'S', 'R', 'A', 'E', 'I', 'T'],
        words: [
            { visible: false, value: 'SER', hint: '*** humano' },
            { visible: false, value: 'REI', hint: 'Usa uma coroa' },
            {
                visible: false,
                value: 'TIA',
                hint: 'Irmã da mãe de um criança, é o que dela?',
            },
            { visible: false, value: 'TEIA', hint: 'Aranha gosta de fazer' },
            {
                visible: false,
                value: 'SETA',
                hint: 'Aquela **** aponta para longe',
            },
            {
                visible: false,
                value: 'SEREIA',
                hint: 'Parece com um ser humano, mas vive no mar',
            },
        ],
    },
    4: {
        maxLetters: 5,
        letters: ['A', 'B', 'T', 'C', 'R', 'D', 'O'],
        words: [
            { visible: false, value: 'COR', hint: 'Azul é uma ***' },
            {
                visible: false,
                value: 'RODA',
                hint: 'O carro precisa disso para andar',
            },
            { visible: false, value: 'BOTA', hint: 'Tipo de sapato' },
            { visible: false, value: 'RATO', hint: 'Um pequeno animal' },
            {
                visible: false,
                value: 'BARCO',
                hint: 'Meio de transporte do Mar',
            },
            {
                visible: false,
                value: 'CORDA',
                hint: 'Você usa para amarrar coisas',
            },
        ],
    },
    5: {
        maxLetters: 5,
        letters: ['L', 'T', 'A', 'A', 'C', 'O', 'S'],
        words: [
            {
                visible: false,
                value: 'COLA',
                hint: 'Você usa para grudar coisas',
            },
            { visible: false, value: 'SOL', hint: 'Esquenta o Planeta Terra' },
            {
                visible: false,
                value: 'TALCO',
                hint: 'Se passa no bumbum dos bebês',
            },
            {
                visible: false,
                value: 'LATA',
                hint: 'Queria uma **** de refrigerante',
            },
            {
                visible: false,
                value: 'TOCA',
                hint: 'O urso se esconde na ****',
            },
            {
                visible: false,
                value: 'SALTO',
                hint: 'Tem no sapato para as pessoas ficarem mais altas',
            },
            {
                visible: false,
                value: 'CASA',
                hint: 'Você pode morar nesse lugar',
            },
            {
                visible: false,
                value: 'SACOLA',
                hint: 'Se usa para guardar a feira no supermercado',
            },
        ],
    },
};
