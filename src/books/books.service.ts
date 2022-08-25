import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
  ) {}

  async create(body: CreateBookDto): Promise<Book> {
    return await this.bookRepository.save({
      title: body.title,
      author: body.author,
      publishingCompany: body.publishingCompany,
      dateOfPublication: body.dateOfPublication,
      numberOfPages: body.numberOfPages,
    });
  }

  async findAll(): Promise<Book[]> {
    return await this.bookRepository.find();
  }

  async findOne(id: number): Promise<Book> {
    return await this.bookRepository.findOneBy({ id });
  }

  async update(id: number, body: UpdateBookDto): Promise<void> {
    await this.bookRepository.save({
      id,
      title: body.title,
      author: body.author,
      publishingCompany: body.publishingCompany,
      dateOfPublication: body.dateOfPublication,
      numberOfPages: body.numberOfPages,
    });
  }

  async remove(id: number): Promise<void> {
    await this.bookRepository.delete({ id });
  }
}
