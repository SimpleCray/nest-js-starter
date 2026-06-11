import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CatService } from './cat.service';

@Controller('cats')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Post()
  create(@Body() createCatDto: { name: string; age: number; breed: string }) {
    return `This action adds a new cat with name: ${createCatDto.name}, age: ${createCatDto.age}, breed: ${createCatDto.breed}`;
  }

  @Get()
  findAll(@Query() query: { limit: number }) {
    return `This action returns all cats (limit: ${query.limit} items)`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateCatDto: { name: string; age: number; breed: string },
  ) {
    return `This action updates a #${id} cat with name: ${updateCatDto.name}, age: ${updateCatDto.age}, breed: ${updateCatDto.breed}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
