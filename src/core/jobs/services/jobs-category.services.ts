import { Injectable } from '@nestjs/common';
import { JobsCategoryRepository } from '../repositories/jobs-category.repository';

@Injectable()
export class JobsCategoryService {
  constructor(
    private readonly jobsCategoryRepository: JobsCategoryRepository,
  ) {}
}
