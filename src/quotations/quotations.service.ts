import { Injectable } from '@nestjs/common';
import { CreateQuotationDto } from './dto/create-quotation.dto';
import { UpdateQuotationDto } from './dto/update-quotation.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class QuotationsService {
  constructor(private readonly prisma:PrismaService){}
  async create(createQuotationDto: CreateQuotationDto) {
    return await this.prisma.quotation.create({
      data:createQuotationDto
    });
  }

  async findAll() {
    return await this.prisma.quotation.findMany({
      include:{
        products:true
      }
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} quotation`;
  }

  update(id: number, updateQuotationDto: UpdateQuotationDto) {
    return `This action updates a #${id} quotation`;
  }

  remove(id: number) {
    return `This action removes a #${id} quotation`;
  }
}
