import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from 'src/prisma.service';
import { ApiTags } from '@nestjs/swagger';

@Injectable()
export class PostsService {
  constructor(private readonly prisma:PrismaService){}
  create(createPostDto: CreatePostDto) {
    return this.prisma.post.create({
      data:createPostDto
    });
  }

  findAll() {
    return this.prisma.post.findMany();
  }

  findOne(id: string) {
    return this.prisma.post.findUnique({
      where:{
        id:id
      }
    });
  }

  update(id: string, updatePostDto: UpdatePostDto) {
    return this.prisma.post.update({
      data:updatePostDto,
      where:{
        id
      }
    });
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
