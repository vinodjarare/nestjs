import { createUserDTO } from './createUser.dto';
import { PartialType } from '@nestjs/mapped-types';

export class updateUserDTO extends PartialType(createUserDTO) {}
