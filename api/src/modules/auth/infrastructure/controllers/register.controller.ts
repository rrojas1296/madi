import { Body, Controller, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { ValidateEmailUseCase } from '../../application/use-cases/validateEmail.useCase';
import { type Response } from 'express';
import { RegisterUserUseCase } from '../../application/use-cases/registerUser.useCase';
import { RegisterUserDto } from '../../application/dtos/registerUser.dto';

@Controller('register')
export class RegisterController {
  constructor(
    private readonly _validateEmailUC: ValidateEmailUseCase,
    private readonly _registerUserUC: RegisterUserUseCase,
  ) {}

  @Post('validateEmail/:email')
  async validateEmail(@Param('email') email: string, @Res() res: Response) {
    const isFree = await this._validateEmailUC.execute(email);
    return res
      .json({ message: 'Email is free to use', status: HttpStatus.OK, isFree })
      .status(HttpStatus.OK);
  }

  @Post('registerUser')
  async registerUser(@Body() data: RegisterUserDto) {
    const { accessToken, refreshToken } =
      await this._registerUserUC.execute(data);
    return {
      message: 'User registered successfully',
      status: HttpStatus.CREATED,
      data: {
        accessToken,
        refreshToken,
      },
    };
  }
}
