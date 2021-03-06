import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { User } from 'src/entities';
import { BcryptHelper } from 'src/common/helpers';
import { PaymentMethodService } from '../paymentMethod/paymentMethod.service';
import { JobService } from '../job/job.service';

@Injectable()
export class UserService {
    constructor(
        private readonly paymentMethodService: PaymentMethodService,
        private readonly jobService: JobService,
        @InjectRepository(UserRepository)
        private readonly userRepository: UserRepository,
    ) {}
    async getUsers() {
        const data = await this.userRepository.find();
        return { data };
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
            user.password = await BcryptHelper.hash(user.password);
            const {
                password,
                updatedAt,
                ...rest
            } = await this.userRepository.save(user);
            return rest as User;
        } catch (error) {
            throw new BadRequestException(error);
        }
    }

    getPaymentMethodsByUser(userID: number) {
        return this.paymentMethodService.getPaymentMethodsByUser(userID);
    }

    async updateProfile(user: User){
        return this.userRepository.update(user.id, {firstName: user.firstName, lastName: user.lastName ,phone: user.phone});
    }

    getJobsByUser(userID: number) {
        return this.jobService.getJobsByUser(userID);
    }
}
