import { Controller, Get, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { User } from 'src/entities';
import { AuthUser } from 'src/common/decorators';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    getUsers() {
        return this.userService.getUsers();
    }

    @Get('getMe')
    @UseGuards(AuthGuard())
    getMe(@AuthUser() user: User) {
        return user;
    }
}
