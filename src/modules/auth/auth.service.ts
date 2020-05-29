import {
  Injectable,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { User } from 'src/entities';
import { LoginDto } from 'src/@types';
import { Config } from 'src/config/config';
import { BcryptHelper } from 'src/common/helpers';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.findByEmail(email);
    console.log(user);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async validateJwtPayload(payload: any): Promise<User> {
    const user = await this.userService.findByEmail(payload.email);
    if (!user || !user.active) throw new UnauthorizedException();

    return user;
  }

  async login(loginDto: LoginDto) {
    if (!loginDto.email || !loginDto.password)
      throw new BadRequestException('Compruebe las credenciales');

    const user = await this.userService.findByEmail(loginDto.email);
    if (!user) throw new BadRequestException('Credenciales incorrectas');
    else if (user.active === false) {
      throw new BadRequestException('Su cuenta ha sido deshabilitada');
    }
    // const payload = { email: user.email, sub: user.id };
    const userPassword = await this.userService.findUserPassword(user.id);
    if (await BcryptHelper.compare(loginDto.password, userPassword))
      return this.createToken(user);
    throw new BadRequestException('Credenciales incorrectas');
  }

  async register(userPayload: User) {
    if (!userPayload)
      throw new BadRequestException('No se esta especificando al usuario');

    const userSaved = await this.userService.createUser(userPayload);
    return this.createToken(userSaved);
  }

  private createToken(user: User) {
    const accessToken = this.jwtService.sign({ ...user });
    return {
      expiresIn: Config.jwtExpiration,
      accessToken,
      user,
    };
  }
}
