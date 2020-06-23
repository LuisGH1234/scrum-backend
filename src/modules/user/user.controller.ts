import { Controller, Get, Post, Body, UseGuards, Param } from '@nestjs/common';
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

    @UseGuards(AuthGuard())
    @Get('getMe')
    getMe(@AuthUser() user: User) {
        return user;
    }

    @UseGuards(AuthGuard())
    @Get(':id/paymentmethods')
    getPaymentMethodsByUser(@Param('id') id: number) {
        return this.userService.getPaymentMethodsByUser(id);
    }

    @UseGuards(AuthGuard())
    @Post('updateprofile')
    updateProfile(@Body() user: User) {
        return this.userService.updateProfile(user);
    }
}
