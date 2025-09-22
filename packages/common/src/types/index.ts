export interface ApiError {
  field: string;
  errorMessage: string;
}

export interface ApiResponse<T = Record<string, unknown>> {
  message: string;
  code: number;
  data?: T;
  subCode: string;
  errors?: ApiError[] | null;
}

export interface LoginResponse {
  accessToken: string;
  metaData: MetaData;
}

export interface MetaData {
  id: number;
  role: Role;
  schoolId: number;
  email: string;
  first_name: string;
  last_name: string;
}

export interface SchoolStats {
  id: string;
  label: string;
  value: number;
}

export interface NamedEntity {
  id: number;
  name: string;
}

export type ClassroomLevels = NamedEntity;
export type Department = NamedEntity;
export type Subject = NamedEntity;

export type Role = "admin" | "student" | "teacher";

export interface Classes {
  class_id: number;
  class_name: string;
  stream_id: number | null;
  stream_name: string | null;
  type: string;
  class_level_id: number;
  class_level_name: string;
}
