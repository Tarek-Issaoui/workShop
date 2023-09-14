import { ApiProperty, PartialType } from '@nestjs/swagger';
// import { CreatePostDto } from './create-post.dto';

export class UpdatePostDto {
    @ApiProperty()
    content: string
    @ApiProperty()
    title : string
}
