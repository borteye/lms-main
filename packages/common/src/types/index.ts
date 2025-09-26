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
  value: number | string;
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

export type Departments = {
  department_id: number;
  department_name: string;
  department_code: string;
  hod: string;
  total_classes: string;
  total_students: string;
  total_teachers: string;
  classes_with_streams: ClassesWithStreams[];
};

export interface ClassesWithStreams {
  class_id: number;
  class_name: string;
  streams: { stream_id: number; stream_name: string }[] | null;
}

export interface DepartmentDetailsType {
  department_id: number;
  department_name: string;
  department_code: string | null;
  department_created_at: string;
  hod_name: string;
  total_courses: number;
  total_students: number;
  total_teachers: number;
  department_stats: SchoolStats[];
  courses_in_department: DepartmentCourse[];
  teachers_in_department: DepartmentStaff[];
  students_in_department: DepartmentStudent[];
}

export type DepartmentCourse = {
  course_id: number;
  course_name: string;
  teacher: {
    teacher_id: number;
    teacher_name: string;
  };
  total_students: string;
};

export type DepartmentStaff = {
  teacher_id: number;
  teacher_name: string;
  teacher_email: string;
  teacher_phone: string;
  role: "Head of Department" | "Teacher";
  total_courses: number;
};

export type DepartmentStudent = {
  student_id: number;
  student_name: string;
  student_class: string;
  student_stream: string | null;
  enrolled: string;
  belongs_to_stream: boolean;
};
