import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/modules/users/application/users.service';

@Injectable()
export class ValidateEmailUseCase {
  constructor(private readonly _usersService: UsersService) {}
  async execute(email: string) {
    const user = await this._usersService.findUserByEmail(email);
    return user ? false : true;
  }
}
