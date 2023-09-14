import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

import { PrismaService } from './prisma.service';
import { ProductsModule } from './products/products.module';
import { QuotationsModule } from './quotations/quotations.module';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [UsersModule, ProductsModule, QuotationsModule, PostsModule],
  controllers: [AppController],
  providers: [AppService,PrismaService],
})
export class AppModule {}
