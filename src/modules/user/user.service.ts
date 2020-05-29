import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { User } from 'src/entities';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
  ) {}
  getUsers() {
    return this.userRepository.find();
  }

  async findUserPassword(userID: number) {
    const user = await this.userRepository.findOne(userID, {
      select: ['password'],
    });
    return user.password;
  }

  findByEmail(email: string) {
    return this.userRepository.findOne({ where: { email } });
  }

  async createUser(user: User) {
    try {
      const { password, updatedAt, ...rest } = await this.userRepository.save(
        user,
      );
      return rest as User;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
