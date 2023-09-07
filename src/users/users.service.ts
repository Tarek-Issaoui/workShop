import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma:PrismaService){}
  async create(createUserDto: CreateUserDto) {
    return await this.prisma.user.create({
      data:createUserDto
    });
  }

  async findAll() {
    return await this.prisma.user.findMany({});
  }

  async findOne(id: string) {
    return await this.prisma.user.findUnique({
      where:{
        id
      }
    });
  }
  async findByQuantity(qty:number){
    return await this.prisma.user.findMany({where:{
      quotations : {
        some :{
          products:{
            some:{
              quantity:{
                gt:qty
              }
            }
          }
        }
      }
    }})
  }
  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
