import jwt, { SignOptions } from 'jsonwebtoken';
import dotenv from 'dotenv';
import IToken from '../interfaces/Token';

dotenv.config();
const jwtConfig: SignOptions = {
  expiresIn: '24h',
  algorithm: 'HS256',
};

const secret = 'secret_password';

export default function createToken(payload: IToken) {
  const token = jwt.sign(payload, secret, jwtConfig);
  return token;
}