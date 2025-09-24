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
  schoolName: string;
  schoolLogo: string;
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

export type Notification1 = {
  id: number;
  school_id: number;
  user_id: number;
  role_target: string | null;
  title: string;
  message: string;
  type: string; 
  file_url: string;
  metadata: {
    validData: number;
    invalidData: number;
  };
  created_at: string;   
  expires_at: string;   
  is_read: boolean;
  read_at: string | null;
};
