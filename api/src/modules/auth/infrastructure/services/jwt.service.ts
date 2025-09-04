import { Injectable } from '@nestjs/common';
import * as jose from 'jose';
import { JWT_ACCESS_SECRET, JWT_REFRESH_SECRET } from 'src/config/jwt.config';
import { IPayload } from '../../domain/interfaces/payload.interface';

@Injectable()
export class JwtService {
  accessSecret = new TextEncoder().encode(JWT_ACCESS_SECRET);
  refreshSecret = new TextEncoder().encode(JWT_REFRESH_SECRET);

  async generateTokens(payload: IPayload) {
    const accessToken = await new jose.SignJWT(payload)
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('1h')
      .sign(this.accessSecret);
    const refreshToken = await new jose.SignJWT(payload)
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('48w')
      .sign(this.accessSecret);
    return { accessToken, refreshToken };
  }
}
