import { IsString, IsDateString, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  author: string;

  @IsNotEmpty()
  @IsString()
  publishingCompany: string;

  @IsNotEmpty()
  @IsDateString()
  dateOfPublication: string;

  @IsNotEmpty()
  @IsNumber()
  numberOfPages: number;
}
