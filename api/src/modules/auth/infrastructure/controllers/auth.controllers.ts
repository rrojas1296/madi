import { Body, Controller, Post } from '@nestjs/common';
import { JwtService } from '../services/jwt.service';
import { RefreshTokenDto } from '../../application/dtos/refreshToken.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly _jwtService: JwtService) {}

  @Post('refreshToken')
  async refreshToken(@Body() data: RefreshTokenDto) {
    console.log('===========> Refreshing token', data.refreshToken);
    const payload = await this._jwtService.verify(
      data.refreshToken,
      'refreshToken',
    );
    const { accessToken } = await this._jwtService.generateTokens(payload);
    return { accessToken };
  }
}
