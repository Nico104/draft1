import { PrismaService } from '../prisma.service';
import { Movie as MovieModel } from '@prisma/client';
export declare class MoviesController {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create({ director, movieName, yearReleased }: MovieModel): Promise<MovieModel>;
    findAll(): Promise<MovieModel[]>;
}
