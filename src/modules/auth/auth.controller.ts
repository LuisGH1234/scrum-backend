import { Controller, Post, Body, Put, Param } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from 'src/@types';
import { User } from 'src/entities';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Post('signup')
  signup(@Body() user: User) {
    return this.authService.register(user);
  }
}
