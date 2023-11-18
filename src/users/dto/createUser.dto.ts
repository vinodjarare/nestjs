import { IsString, IsInt, IsNotEmpty, IsEmail, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class createUserDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()    
  @IsEnum(['INTERN', 'ENGINEER', 'ADMIN'], {
    message: 'Invalid Role',
  })
  role: 'INTERN' | 'ENGINEER' | 'ADMIN';
}
