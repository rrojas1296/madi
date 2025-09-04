import { Module } from '@nestjs/common';
import { RegisterController } from './infrastructure/controllers/register.controller';
import { ValidateEmailUseCase } from './application/use-cases/validateEmail.useCase';
import { UsersModule } from '../users/users.module';
import { RegisterUserUseCase } from './application/use-cases/registerUser.useCase';
import { JwtService } from './infrastructure/services/jwt.service';
import { BcryptService } from './infrastructure/services/bcrypt.service';

@Module({
  controllers: [RegisterController],
  providers: [
    ValidateEmailUseCase,
    RegisterUserUseCase,
    JwtService,
    BcryptService,
  ],
  imports: [UsersModule],
})
export class AuthModule {}
