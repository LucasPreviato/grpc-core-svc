import { PrismaService } from 'src/prisma/prisma.service';

export class PrismaDepartmentRepository {
  constructor(private readonly prisma: PrismaService) {}
}
