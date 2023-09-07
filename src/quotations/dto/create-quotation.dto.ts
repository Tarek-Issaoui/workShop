import { ApiProperty } from "@nestjs/swagger"

export class CreateQuotationDto {
    @ApiProperty()
    title :string
    @ApiProperty()
    userId:string
}
