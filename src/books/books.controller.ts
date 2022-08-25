import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  async create(@Body() body: CreateBookDto) {
    return await this.booksService.create(body);
  }

  @Get()
  async findAll() {
    return await this.booksService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.booksService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() body: UpdateBookDto) {
    return await this.booksService.update(+id, body);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.booksService.remove(+id);
  }
}
