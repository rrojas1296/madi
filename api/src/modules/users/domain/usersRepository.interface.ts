import { UserEntity } from './users.entity';

export interface IUsersRepository {
  findByEmail(email: string): Promise<UserEntity>;
  create(data: UserEntity): Promise<string>;
}
