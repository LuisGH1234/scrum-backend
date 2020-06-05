import * as bcrypt from 'bcrypt';

export default {
  async hash(value: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(value, salt);
  },
  hashSync(value: string): string {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(value, salt);
  },
  compare(value: string, hashValue: string): Promise<boolean> {
    return bcrypt.compare(value, hashValue);
  },
};
