import { Controller, Get, Post, Body } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Movie as MovieModel } from '@prisma/client';

@Controller('movies')
export class MoviesController {
  constructor(private readonly prismaService: PrismaService) {}

  @Post()
  create(
    @Body() { director, movieName, yearReleased }: MovieModel,
  ): Promise<MovieModel> {
    return this.prismaService.movie.create({
      data: { director, movieName, yearReleased },
    });
  }

  @Get()
  findAll(): Promise<MovieModel[]> {
    return this.prismaService.movie.findMany();
  }
}