import boleto1 from '../../assets/boletos/boleto_1.png'
import boleto2 from '../../assets/boletos/boleto_2.png'
import boleto3 from '../../assets/boletos/boleto_3.jpeg'
import boleto4 from '../../assets/boletos/boleto_4.jpeg'
import boleto5 from '../../assets/boletos/boleto_5.png'
import boleto6 from '../../assets/boletos/boleto_6.png'
import boleto7 from '../../assets/boletos/boleto_7.jpeg'
import boleto8 from '../../assets/boletos/boleto_8.png'
import boleto9 from '../../assets/boletos/boleto_9.png'
import boleto10 from '../../assets/boletos/boleto_10.png'
import polla9_1 from '../../assets/boletos/polla9/polla9_1.png'
import polla9_2 from '../../assets/boletos/polla9/polla9_2.png'
import polla9_3 from '../../assets/boletos/polla9/polla9_3.png'
import polla9_4 from '../../assets/boletos/polla9/polla9_4.png'
import polla9_5 from '../../assets/boletos/polla9/polla9_5.png'
import polla9_6 from '../../assets/boletos/polla9/polla9_6.png'
import polla9_7 from '../../assets/boletos/polla9/polla9_7.png'
import polla9_8 from '../../assets/boletos/polla9/polla9_8.png'
import polla9_9 from '../../assets/boletos/polla9/polla9_9.png'
import polla9_10 from '../../assets/boletos/polla9/polla9_10.png'
import polla9_11 from '../../assets/boletos/polla9/polla9_11.jpeg'
import polla9_12 from '../../assets/boletos/polla9/polla9_12.jpeg'
import polla9_13 from '../../assets/boletos/polla9/polla9_13.jpeg'
import polla9_14 from '../../assets/boletos/polla9/polla9_14.jpeg'
import polla9_15 from '../../assets/boletos/polla9/polla9_15.jpeg'
import polla9_16 from '../../assets/boletos/polla9/polla9_16.jpeg'
export interface IResult {
  polla: number
  number: number
  result: string
}

export interface User {
  polla: number
  codigo: string
  nombre: string
  aciertos: number
  boleto: string
  prediction: IResult[]
}

export let users: User[] = [
  {
    polla: 8,
    codigo: '82e351',
    nombre: 'Jean Carlos Diaz Diaz',
    aciertos: 0,
    boleto: boleto1,
    prediction: [
      { polla: 8, number: 1, result: 'V' },
      { polla: 8, number: 2, result: 'L' },
      { polla: 8, number: 3, result: 'V' },
      { polla: 8, number: 4, result: 'V' },
      { polla: 8, number: 5, result: 'V' },
      { polla: 8, number: 6, result: 'V' },
      { polla: 8, number: 7, result: 'L' },
      { polla: 8, number: 8, result: 'V' },
      { polla: 8, number: 9, result: 'V' },
      { polla: 8, number: 10, result: 'L' },
      { polla: 8, number: 11, result: 'V' },
      { polla: 8, number: 12, result: 'L' },
      { polla: 8, number: 13, result: 'V' },
      { polla: 8, number: 14, result: 'L' },
      { polla: 8, number: 15, result: 'L' },
      { polla: 8, number: 16, result: 'V' },
      { polla: 8, number: 17, result: 'L' },
      { polla: 8, number: 18, result: 'L' },
    ],
  },
  {
    polla: 8,
    codigo: 'c97357',
    nombre: 'Luis Angel Barboza Bustamante',
    aciertos: 0,
    boleto: boleto2,
    prediction: [
      { polla: 8, number: 1, result: 'V' },
      { polla: 8, number: 2, result: 'L' },
      { polla: 8, number: 3, result: 'L' },
      { polla: 8, number: 4, result: 'L' },
      { polla: 8, number: 5, result: 'V' },
      { polla: 8, number: 6, result: 'V' },
      { polla: 8, number: 7, result: 'L' },
      { polla: 8, number: 8, result: 'V' },
      { polla: 8, number: 9, result: 'L' },
      { polla: 8, number: 10, result: 'L' },
      { polla: 8, number: 11, result: 'V' },
      { polla: 8, number: 12, result: 'V' },
      { polla: 8, number: 13, result: 'V' },
      { polla: 8, number: 14, result: 'L' },
      { polla: 8, number: 15, result: 'L' },
      { polla: 8, number: 16, result: 'L' },
      { polla: 8, number: 17, result: 'L' },
      { polla: 8, number: 18, result: 'L' },
    ],
  },
  {
    polla: 8,
    codigo: '58e6d4',
    nombre: 'Victor Hugo Arias Diaz',
    aciertos: 0,
    boleto: boleto3,
    prediction: [
      { polla: 8, number: 1, result: 'V' },
      { polla: 8, number: 2, result: 'V' },
      { polla: 8, number: 3, result: 'L' },
      { polla: 8, number: 4, result: 'E' },
      { polla: 8, number: 5, result: 'L' },
      { polla: 8, number: 6, result: 'V' },
      { polla: 8, number: 7, result: 'L' },
      { polla: 8, number: 8, result: 'V' },
      { polla: 8, number: 9, result: 'E' },
      { polla: 8, number: 10, result: 'V' },
      { polla: 8, number: 11, result: 'V' },
      { polla: 8, number: 12, result: 'L' },
      { polla: 8, number: 13, result: 'L' },
      { polla: 8, number: 14, result: 'L' },
      { polla: 8, number: 15, result: 'L' },
      { polla: 8, number: 16, result: 'L' },
      { polla: 8, number: 17, result: 'E' },
      { polla: 8, number: 18, result: 'L' },
    ],
  },
  {
    polla: 8,
    codigo: '3a27a2',
    nombre: 'Chris Acuña Vigo',
    aciertos: 0,
    boleto: boleto4,
    prediction: [
      { polla: 8, number: 1, result: 'V' },
      { polla: 8, number: 2, result: 'L' },
      { polla: 8, number: 3, result: 'V' },
      { polla: 8, number: 4, result: 'L' },
      { polla: 8, number: 5, result: 'L' },
      { polla: 8, number: 6, result: 'V' },
      { polla: 8, number: 7, result: 'L' },
      { polla: 8, number: 8, result: 'V' },
      { polla: 8, number: 9, result: 'L' },
      { polla: 8, number: 10, result: 'L' },
      { polla: 8, number: 11, result: 'V' },
      { polla: 8, number: 12, result: 'L' },
      { polla: 8, number: 13, result: 'V' },
      { polla: 8, number: 14, result: 'L' },
      { polla: 8, number: 15, result: 'L' },
      { polla: 8, number: 16, result: 'V' },
      { polla: 8, number: 17, result: 'L' },
      { polla: 8, number: 18, result: 'L' },
    ],
  },
  {
    polla: 8,
    codigo: '5a564d',
    nombre: 'Maikol GUEVARA HERNANDEZ',
    aciertos: 0,
    boleto: boleto5,
    prediction: [
      { polla: 8, number: 1, result: 'V' },
      { polla: 8, number: 2, result: 'L' },
      { polla: 8, number: 3, result: 'V' },
      { polla: 8, number: 4, result: 'L' },
      { polla: 8, number: 5, result: 'L' },
      { polla: 8, number: 6, result: 'V' },
      { polla: 8, number: 7, result: 'L' },
      { polla: 8, number: 8, result: 'V' },
      { polla: 8, number: 9, result: 'L' },
      { polla: 8, number: 10, result: 'L' },
      { polla: 8, number: 11, result: 'V' },
      { polla: 8, number: 12, result: 'L' },
      { polla: 8, number: 13, result: 'L' },
      { polla: 8, number: 14, result: 'L' },
      { polla: 8, number: 15, result: 'E' },
      { polla: 8, number: 16, result: 'V' },
      { polla: 8, number: 17, result: 'L' },
      { polla: 8, number: 18, result: 'L' },
    ],
  },
  {
    polla: 8,
    codigo: 'a12e76',
    nombre: 'JHONATAN OMAR BUSTAMANTE',
    aciertos: 0,
    boleto: boleto6,
    prediction: [
      { polla: 8, number: 1, result: 'V' },
      { polla: 8, number: 2, result: 'L' },
      { polla: 8, number: 3, result: 'L' },
      { polla: 8, number: 4, result: 'L' },
      { polla: 8, number: 5, result: 'V' },
      { polla: 8, number: 6, result: 'V' },
      { polla: 8, number: 7, result: 'L' },
      { polla: 8, number: 8, result: 'V' },
      { polla: 8, number: 9, result: 'L' },
      { polla: 8, number: 10, result: 'L' },
      { polla: 8, number: 11, result: 'V' },
      { polla: 8, number: 12, result: 'L' },
      { polla: 8, number: 13, result: 'V' },
      { polla: 8, number: 14, result: 'L' },
      { polla: 8, number: 15, result: 'L' },
      { polla: 8, number: 16, result: 'V' },
      { polla: 8, number: 17, result: 'L' },
      { polla: 8, number: 18, result: 'L' },
    ],
  },
  {
    polla: 8,
    codigo: 'da307e',
    nombre: 'VICTOR ROJAS RIVERA',
    aciertos: 0,
    boleto: boleto7,
    prediction: [
      { polla: 8, number: 1, result: 'V' },
      { polla: 8, number: 2, result: 'L' },
      { polla: 8, number: 3, result: 'V' },
      { polla: 8, number: 4, result: 'V' },
      { polla: 8, number: 5, result: 'V' },
      { polla: 8, number: 6, result: 'V' },
      { polla: 8, number: 7, result: 'L' },
      { polla: 8, number: 8, result: 'V' },
      { polla: 8, number: 9, result: 'V' },
      { polla: 8, number: 10, result: 'L' },
      { polla: 8, number: 11, result: 'V' },
      { polla: 8, number: 12, result: 'L' },
      { polla: 8, number: 13, result: 'V' },
      { polla: 8, number: 14, result: 'L' },
      { polla: 8, number: 15, result: 'L' },
      { polla: 8, number: 16, result: 'V' },
      { polla: 8, number: 17, result: 'L' },
      { polla: 8, number: 18, result: 'L' },
    ],
  },
  {
    polla: 8,
    codigo: 'a8a4a9',
    nombre: 'Fany Rojas Vasquez',
    aciertos: 0,
    boleto: boleto8,
    prediction: [
      { polla: 8, number: 1, result: 'V' },
      { polla: 8, number: 2, result: 'L' },
      { polla: 8, number: 3, result: 'L' },
      { polla: 8, number: 4, result: 'L' },
      { polla: 8, number: 5, result: 'V' },
      { polla: 8, number: 6, result: 'V' },
      { polla: 8, number: 7, result: 'L' },
      { polla: 8, number: 8, result: 'V' },
      { polla: 8, number: 9, result: 'V' },
      { polla: 8, number: 10, result: 'L' },
      { polla: 8, number: 11, result: 'V' },
      { polla: 8, number: 12, result: 'L' },
      { polla: 8, number: 13, result: 'V' },
      { polla: 8, number: 14, result: 'L' },
      { polla: 8, number: 15, result: 'V' },
      { polla: 8, number: 16, result: 'L' },
      { polla: 8, number: 17, result: 'L' },
      { polla: 8, number: 18, result: 'L' },
    ],
  },
  {
    polla: 8,
    codigo: '9eacb1',
    nombre: 'Jhesler Cieza EDQUEN ',
    aciertos: 0,
    boleto: boleto9,
    prediction: [
      { polla: 8, number: 1, result: 'V' },
      { polla: 8, number: 2, result: 'L' },
      { polla: 8, number: 3, result: 'V' },
      { polla: 8, number: 4, result: 'L' },
      { polla: 8, number: 5, result: 'L' },
      { polla: 8, number: 6, result: 'V' },
      { polla: 8, number: 7, result: 'L' },
      { polla: 8, number: 8, result: 'V' },
      { polla: 8, number: 9, result: 'V' },
      { polla: 8, number: 10, result: 'L' },
      { polla: 8, number: 11, result: 'V' },
      { polla: 8, number: 12, result: 'L' },
      { polla: 8, number: 13, result: 'V' },
      { polla: 8, number: 14, result: 'L' },
      { polla: 8, number: 15, result: 'E' },
      { polla: 8, number: 16, result: 'V' },
      { polla: 8, number: 17, result: 'L' },
      { polla: 8, number: 18, result: 'L' },
    ],
  },
  {
    polla: 8,
    codigo: '2fd964',
    nombre: 'Marco Antonio Vasquez Sanchez',
    aciertos: 0,
    boleto: boleto10,
    prediction: [
      { polla: 8, number: 1, result: 'L' },
      { polla: 8, number: 2, result: 'L' },
      { polla: 8, number: 3, result: 'V' },
      { polla: 8, number: 4, result: 'V' },
      { polla: 8, number: 5, result: 'V' },
      { polla: 8, number: 6, result: 'V' },
      { polla: 8, number: 7, result: 'L' },
      { polla: 8, number: 8, result: 'V' },
      { polla: 8, number: 9, result: 'L' },
      { polla: 8, number: 10, result: 'V' },
      { polla: 8, number: 11, result: 'V' },
      { polla: 8, number: 12, result: 'L' },
      { polla: 8, number: 13, result: 'V' },
      { polla: 8, number: 14, result: 'L' },
      { polla: 8, number: 15, result: 'V' },
      { polla: 8, number: 16, result: 'E' },
      { polla: 8, number: 17, result: 'V' },
      { polla: 8, number: 18, result: 'V' },
    ],
  },
  {
    polla: 9,
    codigo: '1d5ecd',
    nombre: 'LUIS ANGEL BARBOZA BUSTAMANTE',
    aciertos: 0,
    boleto: polla9_1,
    prediction: [
      { polla: 9, number: 1, result: 'L' },
      { polla: 9, number: 2, result: 'V' },
      { polla: 9, number: 3, result: 'V' },
      { polla: 9, number: 4, result: 'E' },
      { polla: 9, number: 5, result: 'L' },
      { polla: 9, number: 6, result: 'L' },
      { polla: 9, number: 7, result: 'L' },
      { polla: 9, number: 8, result: 'V' },
      { polla: 9, number: 9, result: 'L' },
      { polla: 9, number: 10, result: 'V' },
      { polla: 9, number: 11, result: 'L' },
      { polla: 9, number: 12, result: 'L' },
      { polla: 9, number: 13, result: 'V' },
      { polla: 9, number: 14, result: 'V' },
      { polla: 9, number: 15, result: 'V' },
      { polla: 9, number: 16, result: 'V' },
      { polla: 9, number: 17, result: 'V' },
      { polla: 9, number: 18, result: 'L' },
    ],
  },
  {
    polla: 9,
    codigo: '3b78cc',
    nombre: 'CHINO DIAZ',
    aciertos: 0,
    boleto: polla9_2,
    prediction: [
      { polla: 9, number: 1, result: 'L' },
      { polla: 9, number: 2, result: 'V' },
      { polla: 9, number: 3, result: 'V' },
      { polla: 9, number: 4, result: 'V' },
      { polla: 9, number: 5, result: 'L' },
      { polla: 9, number: 6, result: 'L' },
      { polla: 9, number: 7, result: 'L' },
      { polla: 9, number: 8, result: 'V' },
      { polla: 9, number: 9, result: 'L' },
      { polla: 9, number: 10, result: 'V' },
      { polla: 9, number: 11, result: 'L' },
      { polla: 9, number: 12, result: 'L' },
      { polla: 9, number: 13, result: 'V' },
      { polla: 9, number: 14, result: 'V' },
      { polla: 9, number: 15, result: 'V' },
      { polla: 9, number: 16, result: 'V' },
      { polla: 9, number: 17, result: 'V' },
      { polla: 9, number: 18, result: 'L' },
    ],
  },
  {
    polla: 9,
    codigo: 'f4729b',
    nombre: 'FANY ROJAS VASQUEZ',
    aciertos: 0,
    boleto: polla9_3,
    prediction: [
      { polla: 9, number: 1, result: 'L' },
      { polla: 9, number: 2, result: 'V' },
      { polla: 9, number: 3, result: 'V' },
      { polla: 9, number: 4, result: 'V' },
      { polla: 9, number: 5, result: 'L' },
      { polla: 9, number: 6, result: 'L' },
      { polla: 9, number: 7, result: 'V' },
      { polla: 9, number: 8, result: 'V' },
      { polla: 9, number: 9, result: 'L' },
      { polla: 9, number: 10, result: 'V' },
      { polla: 9, number: 11, result: 'L' },
      { polla: 9, number: 12, result: 'L' },
      { polla: 9, number: 13, result: 'V' },
      { polla: 9, number: 14, result: 'V' },
      { polla: 9, number: 15, result: 'L' },
      { polla: 9, number: 16, result: 'V' },
      { polla: 9, number: 17, result: 'V' },
      { polla: 9, number: 18, result: 'L' },
    ],
  },
  {
    polla: 9,
    codigo: '9959ea',
    nombre: 'SEGUNDO TOMÁS PÉREZ DÍAZ',
    aciertos: 0,
    boleto: polla9_4,
    prediction: [
      { polla: 9, number: 1, result: 'L' },
      { polla: 9, number: 2, result: 'V' },
      { polla: 9, number: 3, result: 'V' },
      { polla: 9, number: 4, result: 'V' },
      { polla: 9, number: 5, result: 'E' },
      { polla: 9, number: 6, result: 'L' },
      { polla: 9, number: 7, result: 'V' },
      { polla: 9, number: 8, result: 'V' },
      { polla: 9, number: 9, result: 'L' },
      { polla: 9, number: 10, result: 'V' },
      { polla: 9, number: 11, result: 'L' },
      { polla: 9, number: 12, result: 'L' },
      { polla: 9, number: 13, result: 'V' },
      { polla: 9, number: 14, result: 'V' },
      { polla: 9, number: 15, result: 'L' },
      { polla: 9, number: 16, result: 'V' },
      { polla: 9, number: 17, result: 'V' },
      { polla: 9, number: 18, result: 'L' },
    ],
  },
  {
    polla: 9,
    codigo: 'ac39b0',
    nombre: 'JHESLER CIEZA EDQUEN',
    aciertos: 0,
    boleto: polla9_5,
    prediction: [
      { polla: 9, number: 1, result: 'L' },
      { polla: 9, number: 2, result: 'V' },
      { polla: 9, number: 3, result: 'V' },
      { polla: 9, number: 4, result: 'V' },
      { polla: 9, number: 5, result: 'V' },
      { polla: 9, number: 6, result: 'L' },
      { polla: 9, number: 7, result: 'V' },
      { polla: 9, number: 8, result: 'V' },
      { polla: 9, number: 9, result: 'L' },
      { polla: 9, number: 10, result: 'V' },
      { polla: 9, number: 11, result: 'L' },
      { polla: 9, number: 12, result: 'L' },
      { polla: 9, number: 13, result: 'V' },
      { polla: 9, number: 14, result: 'V' },
      { polla: 9, number: 15, result: 'V' },
      { polla: 9, number: 16, result: 'V' },
      { polla: 9, number: 17, result: 'V' },
      { polla: 9, number: 18, result: 'L' },
    ],
  },
  {
    polla: 9,
    codigo: '6589e3',
    nombre: 'LUIS IDROGO PERALTA',
    aciertos: 0,
    boleto: polla9_6,
    prediction: [
      { polla: 9, number: 1, result: 'V' },
      { polla: 9, number: 2, result: 'V' },
      { polla: 9, number: 3, result: 'V' },
      { polla: 9, number: 4, result: 'L' },
      { polla: 9, number: 5, result: 'L' },
      { polla: 9, number: 6, result: 'L' },
      { polla: 9, number: 7, result: 'L' },
      { polla: 9, number: 8, result: 'V' },
      { polla: 9, number: 9, result: 'L' },
      { polla: 9, number: 10, result: 'V' },
      { polla: 9, number: 11, result: 'L' },
      { polla: 9, number: 12, result: 'L' },
      { polla: 9, number: 13, result: 'V' },
      { polla: 9, number: 14, result: 'V' },
      { polla: 9, number: 15, result: 'V' },
      { polla: 9, number: 16, result: 'L' },
      { polla: 9, number: 17, result: 'V' },
      { polla: 9, number: 18, result: 'L' },
    ],
  },
  {
    polla: 9,
    codigo: '37e086',
    nombre: 'MILTON DANIEL RODRIGO OCHOA',
    aciertos: 0,
    boleto: polla9_7,
    prediction: [
      { polla: 9, number: 1, result: 'L' },
      { polla: 9, number: 2, result: 'L' },
      { polla: 9, number: 3, result: 'L' },
      { polla: 9, number: 4, result: 'L' },
      { polla: 9, number: 5, result: 'V' },
      { polla: 9, number: 6, result: 'L' },
      { polla: 9, number: 7, result: 'L' },
      { polla: 9, number: 8, result: 'V' },
      { polla: 9, number: 9, result: 'L' },
      { polla: 9, number: 10, result: 'V' },
      { polla: 9, number: 11, result: 'L' },
      { polla: 9, number: 12, result: 'V' },
      { polla: 9, number: 13, result: 'V' },
      { polla: 9, number: 14, result: 'V' },
      { polla: 9, number: 15, result: 'L' },
      { polla: 9, number: 16, result: 'V' },
      { polla: 9, number: 17, result: 'V' },
      { polla: 9, number: 18, result: 'L' },
    ],
  },
  {
    polla: 9,
    codigo: '0346f1',
    nombre: 'DANNY H. BUSTAMANTE BARBOZA',
    aciertos: 0,
    boleto: polla9_8,
    prediction: [
      { polla: 9, number: 1, result: 'L' },
      { polla: 9, number: 2, result: 'V' },
      { polla: 9, number: 3, result: 'V' },
      { polla: 9, number: 4, result: 'V' },
      { polla: 9, number: 5, result: 'L' },
      { polla: 9, number: 6, result: 'L' },
      { polla: 9, number: 7, result: 'V' },
      { polla: 9, number: 8, result: 'V' },
      { polla: 9, number: 9, result: 'L' },
      { polla: 9, number: 10, result: 'E' },
      { polla: 9, number: 11, result: 'L' },
      { polla: 9, number: 12, result: 'L' },
      { polla: 9, number: 13, result: 'V' },
      { polla: 9, number: 14, result: 'V' },
      { polla: 9, number: 15, result: 'L' },
      { polla: 9, number: 16, result: 'V' },
      { polla: 9, number: 17, result: 'V' },
      { polla: 9, number: 18, result: 'L' },
    ],
  },
  {
    polla: 9,
    codigo: '8bc88e',
    nombre: 'SEBASTIAN ESPINOZA',
    aciertos: 0,
    boleto: polla9_9,
    prediction: [
      { polla: 9, number: 1, result: 'L' },
      { polla: 9, number: 2, result: 'V' },
      { polla: 9, number: 3, result: 'E' },
      { polla: 9, number: 4, result: 'V' },
      { polla: 9, number: 5, result: 'L' },
      { polla: 9, number: 6, result: 'E' },
      { polla: 9, number: 7, result: 'V' },
      { polla: 9, number: 8, result: 'E' },
      { polla: 9, number: 9, result: 'L' },
      { polla: 9, number: 10, result: 'V' },
      { polla: 9, number: 11, result: 'E' },
      { polla: 9, number: 12, result: 'V' },
      { polla: 9, number: 13, result: 'L' },
      { polla: 9, number: 14, result: 'E' },
      { polla: 9, number: 15, result: 'V' },
      { polla: 9, number: 16, result: 'L' },
      { polla: 9, number: 17, result: 'E' },
      { polla: 9, number: 18, result: 'V' },
    ],
  },
  {
    polla: 9,
    codigo: '23f75d',
    nombre: 'MAIKOL GUEVARA HERNÁNDEZ',
    aciertos: 0,
    boleto: polla9_10,
    prediction: [
      { polla: 9, number: 1, result: 'V' },
      { polla: 9, number: 2, result: 'V' },
      { polla: 9, number: 3, result: 'V' },
      { polla: 9, number: 4, result: 'L' },
      { polla: 9, number: 5, result: 'V' },
      { polla: 9, number: 6, result: 'L' },
      { polla: 9, number: 7, result: 'L' },
      { polla: 9, number: 8, result: 'V' },
      { polla: 9, number: 9, result: 'L' },
      { polla: 9, number: 10, result: 'L' },
      { polla: 9, number: 11, result: 'L' },
      { polla: 9, number: 12, result: 'L' },
      { polla: 9, number: 13, result: 'V' },
      { polla: 9, number: 14, result: 'L' },
      { polla: 9, number: 15, result: 'L' },
      { polla: 9, number: 16, result: 'L' },
      { polla: 9, number: 17, result: 'V' },
      { polla: 9, number: 18, result: 'L' },
    ],
  },
  {
    polla: 9,
    codigo: 'da5c49',
    nombre: 'MARCO ANTONIO VASQUEZ SANCHEZ',
    aciertos: 0,
    boleto: polla9_11,
    prediction: [
      { polla: 9, number: 1, result: 'L' },
      { polla: 9, number: 2, result: 'V' },
      { polla: 9, number: 3, result: 'V' },
      { polla: 9, number: 4, result: 'V' },
      { polla: 9, number: 5, result: 'V' },
      { polla: 9, number: 6, result: 'L' },
      { polla: 9, number: 7, result: 'L' },
      { polla: 9, number: 8, result: 'V' },
      { polla: 9, number: 9, result: 'L' },
      { polla: 9, number: 10, result: 'V' },
      { polla: 9, number: 11, result: 'L' },
      { polla: 9, number: 12, result: 'V' },
      { polla: 9, number: 13, result: 'V' },
      { polla: 9, number: 14, result: 'L' },
      { polla: 9, number: 15, result: 'V' },
      { polla: 9, number: 16, result: 'V' },
      { polla: 9, number: 17, result: 'V' },
      { polla: 9, number: 18, result: 'L' },
    ],
  },
  {
    polla: 9,
    codigo: '403094',
    nombre: 'MAGDIEL NAPOLEÓN IDROGO GUEVARA',
    aciertos: 0,
    boleto: polla9_12,
    prediction: [
      { polla: 9, number: 1, result: 'L' },
      { polla: 9, number: 2, result: 'V' },
      { polla: 9, number: 3, result: 'E' },
      { polla: 9, number: 4, result: 'V' },
      { polla: 9, number: 5, result: 'L' },
      { polla: 9, number: 6, result: 'L' },
      { polla: 9, number: 7, result: 'E' },
      { polla: 9, number: 8, result: 'V' },
      { polla: 9, number: 9, result: 'L' },
      { polla: 9, number: 10, result: 'L' },
      { polla: 9, number: 11, result: 'L' },
      { polla: 9, number: 12, result: 'L' },
      { polla: 9, number: 13, result: 'V' },
      { polla: 9, number: 14, result: 'E' },
      { polla: 9, number: 15, result: 'L' },
      { polla: 9, number: 16, result: 'V' },
      { polla: 9, number: 17, result: 'V' },
      { polla: 9, number: 18, result: 'L' },
    ],
  },
  {
    polla: 9,
    codigo: '173354',
    nombre: 'CARLOS VLADIMIR IDROGO GUEVARA',
    aciertos: 0,
    boleto: polla9_13,
    prediction: [
      { polla: 9, number: 1, result: 'L' },
      { polla: 9, number: 2, result: 'V' },
      { polla: 9, number: 3, result: 'L' },
      { polla: 9, number: 4, result: 'V' },
      { polla: 9, number: 5, result: 'L' },
      { polla: 9, number: 6, result: 'L' },
      { polla: 9, number: 7, result: 'L' },
      { polla: 9, number: 8, result: 'V' },
      { polla: 9, number: 9, result: 'L' },
      { polla: 9, number: 10, result: 'L' },
      { polla: 9, number: 11, result: 'E' },
      { polla: 9, number: 12, result: 'L' },
      { polla: 9, number: 13, result: 'E' },
      { polla: 9, number: 14, result: 'V' },
      { polla: 9, number: 15, result: 'L' },
      { polla: 9, number: 16, result: 'V' },
      { polla: 9, number: 17, result: 'V' },
      { polla: 9, number: 18, result: 'L' },
    ],
  },
  {
    polla: 9,
    codigo: '5e8420',
    nombre: 'CHRIS ACUÑA VIGO',
    aciertos: 0,
    boleto: polla9_14,
    prediction: [
      { polla: 9, number: 1, result: 'L' },
      { polla: 9, number: 2, result: 'V' },
      { polla: 9, number: 3, result: 'V' },
      { polla: 9, number: 4, result: 'V' },
      { polla: 9, number: 5, result: 'L' },
      { polla: 9, number: 6, result: 'L' },
      { polla: 9, number: 7, result: 'V' },
      { polla: 9, number: 8, result: 'V' },
      { polla: 9, number: 9, result: 'L' },
      { polla: 9, number: 10, result: 'L' },
      { polla: 9, number: 11, result: 'L' },
      { polla: 9, number: 12, result: 'L' },
      { polla: 9, number: 13, result: 'L' },
      { polla: 9, number: 14, result: 'L' },
      { polla: 9, number: 15, result: 'V' },
      { polla: 9, number: 16, result: 'V' },
      { polla: 9, number: 17, result: 'V' },
      { polla: 9, number: 18, result: 'L' },
    ],
  },
  {
    polla: 9,
    codigo: '0933b8',
    nombre: 'VICTOR ROJAS RIVERA',
    aciertos: 0,
    boleto: polla9_15,
    prediction: [
      { polla: 9, number: 1, result: 'L' },
      { polla: 9, number: 2, result: 'V' },
      { polla: 9, number: 3, result: 'L' },
      { polla: 9, number: 4, result: 'V' },
      { polla: 9, number: 5, result: 'L' },
      { polla: 9, number: 6, result: 'L' },
      { polla: 9, number: 7, result: 'V' },
      { polla: 9, number: 8, result: 'V' },
      { polla: 9, number: 9, result: 'L' },
      { polla: 9, number: 10, result: 'L' },
      { polla: 9, number: 11, result: 'L' },
      { polla: 9, number: 12, result: 'L' },
      { polla: 9, number: 13, result: 'V' },
      { polla: 9, number: 14, result: 'V' },
      { polla: 9, number: 15, result: 'V' },
      { polla: 9, number: 16, result: 'V' },
      { polla: 9, number: 17, result: 'V' },
      { polla: 9, number: 18, result: 'L' },
    ],
  },
  {
    polla: 9,
    codigo: 'ec42f3',
    nombre: 'MARCO TARRILLO',
    aciertos: 0,
    boleto: polla9_16,
    prediction: [
      { polla: 9, number: 1, result: 'L' },
      { polla: 9, number: 2, result: 'V' },
      { polla: 9, number: 3, result: 'L' },
      { polla: 9, number: 4, result: 'V' },
      { polla: 9, number: 5, result: 'L' },
      { polla: 9, number: 6, result: 'L' },
      { polla: 9, number: 7, result: 'V' },
      { polla: 9, number: 8, result: 'V' },
      { polla: 9, number: 9, result: 'L' },
      { polla: 9, number: 10, result: 'L' },
      { polla: 9, number: 11, result: 'L' },
      { polla: 9, number: 12, result: 'L' },
      { polla: 9, number: 13, result: 'V' },
      { polla: 9, number: 14, result: 'V' },
      { polla: 9, number: 15, result: 'V' },
      { polla: 9, number: 16, result: 'V' },
      { polla: 9, number: 17, result: 'V' },
      { polla: 9, number: 18, result: 'L' },
    ],
  },
]

export const results: IResult[] = [
  {
    polla: 8,
    number: 1,
    result: 'V',
  },
  {
    polla: 8,
    number: 2,
    result: 'L',
  },
  {
    polla: 8,
    number: 3,
    result: 'V',
  },
  {
    polla: 8,
    number: 4,
    result: 'V',
  },
  {
    polla: 8,
    number: 5,
    result: 'V',
  },
  {
    polla: 8,
    number: 6,
    result: 'V',
  },
  {
    polla: 8,
    number: 7,
    result: 'L',
  },
  {
    polla: 8,
    number: 8,
    result: 'V',
  },
  {
    polla: 8,
    number: 9,
    result: 'L',
  },
  {
    polla: 8,
    number: 10,
    result: 'E',
  },
  {
    polla: 8,
    number: 11,
    result: 'V',
  },
  {
    polla: 8,
    number: 12,
    result: 'L',
  },
  {
    polla: 8,
    number: 13,
    result: 'V',
  },
  {
    polla: 8,
    number: 14,
    result: 'L',
  },
  {
    polla: 8,
    number: 15,
    result: 'V',
  },
  {
    polla: 8,
    number: 16,
    result: 'L',
  },
  {
    polla: 8,
    number: 17,
    result: 'L',
  },
  {
    polla: 8,
    number: 18,
    result: 'L',
  },
  {
    polla: 9,
    number: 1,
    result: 'L',
  },
  {
    polla: 9,
    number: 2,
    result: 'V',
  },
  {
    polla: 9,
    number: 3,
    result: 'V',
  },
  {
    polla: 9,
    number: 4,
    result: 'V',
  },
  {
    polla: 9,
    number: 5,
    result: 'V',
  },
  {
    polla: 9,
    number: 6,
    result: 'L',
  },
  {
    polla: 9,
    number: 7,
    result: 'V',
  },
  {
    polla: 9,
    number: 8,
    result: 'V',
  },
  {
    polla: 9,
    number: 9,
    result: 'L',
  },
  {
    polla: 9,
    number: 10,
    result: 'L',
  },
  {
    polla: 9,
    number: 11,
    result: 'V',
  },
  {
    polla: 9,
    number: 12,
    result: 'L',
  },
  {
    polla: 9,
    number: 13,
    result: 'E',
  },
  {
    polla: 9,
    number: 14,
    result: 'L',
  },
  {
    polla: 9,
    number: 15,
    result: 'L',
  },
  {
    polla: 9,
    number: 16,
    result: 'V',
  },
  {
    polla: 9,
    number: 17,
    result: 'V',
  },
  {
    polla: 9,
    number: 18,
    result: 'L',
  },
]

for (let i = 0; i < results.length; i++) {
  for (const user of users) {
    if (
      user.prediction.some(
        pred =>
          pred.polla === results[i].polla && pred.number === results[i].number && pred.result === results[i].result
      )
    ) {
      user.aciertos++
    }
  }
}
