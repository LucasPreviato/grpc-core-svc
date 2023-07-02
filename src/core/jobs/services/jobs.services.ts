import { Injectable } from '@nestjs/common';
import { JobsRepository } from '../repositories/jobs.repository';

@Injectable()
export class JobsServices {
  constructor(private readonly jobsRepository: JobsRepository) {}
}
