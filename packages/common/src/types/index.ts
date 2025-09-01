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
  role: "admin" | "student" | "teacher";
  schoolId: number;
  email: string;
  firstName: string;
  lastName: string;
}
