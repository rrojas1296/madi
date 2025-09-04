import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { IUsersRepository } from '../domain/usersRepository.interface';
import { UserEntity } from '../domain/users.entity';
import { PrismaService } from 'src/infrastructure/prisma/prisma.service';

@Injectable()
export class UsersRepository implements IUsersRepository {
  constructor(private readonly _prismaService: PrismaService) {}
  async findByEmail(email: string): Promise<UserEntity> {
    const userDB = await this._prismaService.users.findFirst({
      where: {
        email,
      },
    });
    if (!userDB)
      throw new HttpException('Email is not exist', HttpStatus.UNAUTHORIZED);
    return new UserEntity(userDB);
  }

  async create(data: UserEntity): Promise<string> {
    const user = await this._prismaService.users.create({
      data,
    });
    return user.id;
  }
}
