import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Config } from '../../config/config';
import { AuthService } from './auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: Config.jwtSecretKey,
        });
    }

    async validate(payload: any) {
        const a = await this.authService.validateJwtPayload(payload);
        // console.log(a);
        return a;
    }

    // async validate(req: Request, payload: any, done: Function) {
    //     console.log(payload, req);
    //     const user = await this.authService.validateJwtPayload(payload);
    //     if (!user) {
    //         return done(new UnauthorizedException(), false);
    //     }
    //     done(null, user);
    // }
}
