import { UserEffects } from '../effects/user.effect';
import { UserService } from './user.service';

export const CORE_PROVIDERS: any[] = [
  UserEffects,
  UserService
];
