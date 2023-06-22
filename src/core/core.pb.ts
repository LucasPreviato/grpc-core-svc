/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "core";

export interface CompanyData {
  id: string;
  companyId: number;
  cnpj: string;
  companyName: string;
  tradingName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  phone: string;
  email: string;
  website: string;
}

export interface GetCompanyRequest {
  companyId: number;
}

export interface GetCompanyResponse {
  status: number;
  errors: string[];
  company: CompanyData | undefined;
}

export interface CreateCompanyRequest {
  cnpj: string;
  companyName: string;
  tradingName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  phone: string;
  email: string;
  website: string;
}

export interface CreateCompanyResponse {
  status: number;
  errors: string[];
  company: CompanyData | undefined;
}

export interface UnitData {
  id: string;
  unitId: number;
  name: string;
  description: string;
  companyId: number;
  createdAt: string;
  updatedAt: string;
}

export interface GetUnitRequest {
  unitId: number;
}

export interface GetUnitResponse {
  status: number;
  errors: string[];
  unit: UnitData | undefined;
}

export interface CreateUnitRequest {
  name: string;
  description: string;
  companyId: number;
}

export interface CreateUnitResponse {
  status: number;
  errors: string[];
  unit: UnitData | undefined;
}

export interface DepartmentData {
  id: string;
  departmentId: number;
  name: string;
  description: string;
  companyId: number;
  unitId: number;
  createdAt: string;
}

export interface GetDepartmentRequest {
  departmentId: number;
}

export interface GetDepartmentResponse {
  status: number;
  errors: string[];
  department: DepartmentData | undefined;
}

export interface CreateDepartmentRequest {
  name: string;
  description: string;
  companyId: number;
  unitId: number;
}

export interface CreateDepartmentResponse {
  status: number;
  errors: string[];
  department: DepartmentData | undefined;
}

export interface JobsCategoryData {
  id: string;
  jobCategoryId: number;
  name: string;
  description: string;
  companyId: number;
  createdAt: string;
  updatedAt: string;
}

export interface GetJobsCategoryRequest {
  jobCategoryId: number;
}

export interface GetJobsCategoryResponse {
  status: number;
  errors: string[];
  jobsCategory: JobsCategoryData | undefined;
}

export interface CreateJobsCategoryRequest {
  name: string;
  description: string;
  companyId: number;
}

export interface CreateJobsCategoryResponse {
  status: number;
  errors: string[];
  jobsCategory: JobsCategoryData | undefined;
}

export interface JobsData {
  id: string;
  uniqueId: number;
  title: string;
  description: string;
  companyId: number;
  categoryId: number;
  city: string;
  state: string;
  country: string;
  zipCode: string;
  address: string;
  salary: string;
  type: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface GetJobsRequest {
  uniqueId: number;
}

export interface GetJobsResponse {
  status: number;
  errors: string[];
  jobs: JobsData | undefined;
}

export interface CreateJobsRequest {
  title: string;
  description: string;
  companyId: number;
  categoryId: number;
  city: string;
  state: string;
  country: string;
  zipCode: string;
  address: string;
  salary: string;
  type: string;
  status: string;
}

export interface CreateJobsResponse {
  status: number;
  errors: string[];
  jobs: JobsData | undefined;
}

export interface EmployeeData {
  id: string;
  uniqueId: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
  companyId: number;
  unitId: number;
  departmentId: number;
  jobId: number;
  createdAt: string;
  updatedAt: string;
}

export interface GetEmployeeRequest {
  uniqueId: number;
}

export interface GetEmployeeResponse {
  status: number;
  errors: string[];
  employee: EmployeeData | undefined;
}

export interface CreateEmployeeRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
  companyId: number;
  unitId: number;
  departmentId: number;
  jobId: number;
}

export interface CreateEmployeeResponse {
  status: number;
  errors: string[];
  employee: EmployeeData | undefined;
}

export const CORE_PACKAGE_NAME = "core";

export interface CompanyServiceClient {
  getCompany(request: GetCompanyRequest): Observable<GetCompanyResponse>;

  /** rpc ListCompanies(ListCompaniesRequest) returns (ListCompaniesResponse) {} */

  createCompany(request: CreateCompanyRequest): Observable<CreateCompanyResponse>;
}

export interface CompanyServiceController {
  getCompany(
    request: GetCompanyRequest,
  ): Promise<GetCompanyResponse> | Observable<GetCompanyResponse> | GetCompanyResponse;

  /** rpc ListCompanies(ListCompaniesRequest) returns (ListCompaniesResponse) {} */

  createCompany(
    request: CreateCompanyRequest,
  ): Promise<CreateCompanyResponse> | Observable<CreateCompanyResponse> | CreateCompanyResponse;
}

export function CompanyServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["getCompany", "createCompany"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("CompanyService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("CompanyService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const COMPANY_SERVICE_NAME = "CompanyService";

export interface UnitServiceClient {
  getUnit(request: GetUnitRequest): Observable<GetUnitResponse>;

  /** rpc ListUnits(ListUnitsRequest) returns (ListUnitsResponse) {} */

  createUnit(request: CreateUnitRequest): Observable<CreateUnitResponse>;
}

export interface UnitServiceController {
  getUnit(request: GetUnitRequest): Promise<GetUnitResponse> | Observable<GetUnitResponse> | GetUnitResponse;

  /** rpc ListUnits(ListUnitsRequest) returns (ListUnitsResponse) {} */

  createUnit(
    request: CreateUnitRequest,
  ): Promise<CreateUnitResponse> | Observable<CreateUnitResponse> | CreateUnitResponse;
}

export function UnitServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["getUnit", "createUnit"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("UnitService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("UnitService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const UNIT_SERVICE_NAME = "UnitService";

export interface DepartmentServiceClient {
  getDepartment(request: GetDepartmentRequest): Observable<GetDepartmentResponse>;

  /** rpc ListDepartments(ListDepartmentsRequest) returns (ListDepartmentsResponse) {} */

  createDepartment(request: CreateDepartmentRequest): Observable<CreateDepartmentResponse>;
}

export interface DepartmentServiceController {
  getDepartment(
    request: GetDepartmentRequest,
  ): Promise<GetDepartmentResponse> | Observable<GetDepartmentResponse> | GetDepartmentResponse;

  /** rpc ListDepartments(ListDepartmentsRequest) returns (ListDepartmentsResponse) {} */

  createDepartment(
    request: CreateDepartmentRequest,
  ): Promise<CreateDepartmentResponse> | Observable<CreateDepartmentResponse> | CreateDepartmentResponse;
}

export function DepartmentServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["getDepartment", "createDepartment"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("DepartmentService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("DepartmentService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const DEPARTMENT_SERVICE_NAME = "DepartmentService";

export interface JobsCategoryServiceClient {
  getJobsCategory(request: GetJobsCategoryRequest): Observable<GetJobsCategoryResponse>;

  /** rpc ListJobsCategories(ListJobsCategoriesRequest) returns (ListJobsCategoriesResponse) {} */

  createJobsCategory(request: CreateJobsCategoryRequest): Observable<CreateJobsCategoryResponse>;
}

export interface JobsCategoryServiceController {
  getJobsCategory(
    request: GetJobsCategoryRequest,
  ): Promise<GetJobsCategoryResponse> | Observable<GetJobsCategoryResponse> | GetJobsCategoryResponse;

  /** rpc ListJobsCategories(ListJobsCategoriesRequest) returns (ListJobsCategoriesResponse) {} */

  createJobsCategory(
    request: CreateJobsCategoryRequest,
  ): Promise<CreateJobsCategoryResponse> | Observable<CreateJobsCategoryResponse> | CreateJobsCategoryResponse;
}

export function JobsCategoryServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["getJobsCategory", "createJobsCategory"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("JobsCategoryService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("JobsCategoryService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const JOBS_CATEGORY_SERVICE_NAME = "JobsCategoryService";

export interface JobsServiceClient {
  getJobs(request: GetJobsRequest): Observable<GetJobsResponse>;

  /** rpc ListJobs(ListJobsRequest) returns (ListJobsResponse) {} */

  createJobs(request: CreateJobsRequest): Observable<CreateJobsResponse>;
}

export interface JobsServiceController {
  getJobs(request: GetJobsRequest): Promise<GetJobsResponse> | Observable<GetJobsResponse> | GetJobsResponse;

  /** rpc ListJobs(ListJobsRequest) returns (ListJobsResponse) {} */

  createJobs(
    request: CreateJobsRequest,
  ): Promise<CreateJobsResponse> | Observable<CreateJobsResponse> | CreateJobsResponse;
}

export function JobsServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["getJobs", "createJobs"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("JobsService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("JobsService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const JOBS_SERVICE_NAME = "JobsService";

export interface EmployeeServiceClient {
  getEmployee(request: GetEmployeeRequest): Observable<GetEmployeeResponse>;

  /** rpc ListEmployees(ListEmployeesRequest) returns (ListEmployeesResponse) {} */

  createEmployee(request: CreateEmployeeRequest): Observable<CreateEmployeeResponse>;
}

export interface EmployeeServiceController {
  getEmployee(
    request: GetEmployeeRequest,
  ): Promise<GetEmployeeResponse> | Observable<GetEmployeeResponse> | GetEmployeeResponse;

  /** rpc ListEmployees(ListEmployeesRequest) returns (ListEmployeesResponse) {} */

  createEmployee(
    request: CreateEmployeeRequest,
  ): Promise<CreateEmployeeResponse> | Observable<CreateEmployeeResponse> | CreateEmployeeResponse;
}

export function EmployeeServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["getEmployee", "createEmployee"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("EmployeeService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("EmployeeService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const EMPLOYEE_SERVICE_NAME = "EmployeeService";
