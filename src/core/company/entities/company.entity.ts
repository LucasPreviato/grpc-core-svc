export enum CompanyStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  DELETED = 'DELETED',
}

export class Company {
  public id: string;
  public uniqueId: number;
  public cnpj: string;
  public companyName!: string;
  public tradingName!: string;
  public address: string;
  public city: string;
  public state: string;
  public zip: string;
  public country: string;
  public phone: string;
  public email: string;
  public website: string;
  public createdAt: Date;
  public updatedAt: Date;
}
