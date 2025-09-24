"use client";

import { useState } from "react";
import {
  Bell,
  TrendingUp,
  TrendingDown,
  BarChart3,
  PieChart,
  Calendar,
  Award,
  Target,
} from "lucide-react";

export default function GradesPage() {
  const [selectedCourse, setSelectedCourse] = useState("all");

  const courses = [
    {
      id: "math",
      name: "Mathematics",
      teacher: "Mr. Asante",
      currentGrade: "B+",
      percentage: 87.5,
      color: "bg-blue-500",
      trend: "up",
    },
    {
      id: "science",
      name: "Physics",
      teacher: "Ms. Johnson",
      currentGrade: "A-",
      percentage: 91.2,
      color: "bg-green-500",
      trend: "up",
    },
    {
      id: "english",
      name: "English Literature",
      teacher: "Mr. Brown",
      currentGrade: "B",
      percentage: 83.8,
      color: "bg-purple-500",
      trend: "down",
    },
    {
      id: "history",
      name: "World History",
      teacher: "Mrs. Davis",
      currentGrade: "A",
      percentage: 94.1,
      color: "bg-orange-500",
      trend: "up",
    },
  ];

  const assignments = [
    {
      id: 1,
      title: "Linear Equations Problem Set",
      course: "Mathematics",
      courseId: "math",
      type: "Homework",
      score: 23,
      totalPoints: 25,
      percentage: 92,
      grade: "A-",
      submittedDate: "2025-09-20",
      feedback: "Excellent work! Minor error in problem 15.",
      weight: 0.1,
    },
    {
      id: 2,
      title: "Algebra Word Problems",
      course: "Mathematics",
      courseId: "math",
      type: "Homework",
      score: 28,
      totalPoints: 30,
      percentage: 93.3,
      grade: "A",
      submittedDate: "2025-09-18",
      feedback: "Great understanding of concepts.",
      weight: 0.1,
    },
    {
      id: 3,
      title: "Chapter 2 Test - Functions",
      course: "Mathematics",
      courseId: "math",
      type: "Test",
      score: 42,
      totalPoints: 50,
      percentage: 84,
      grade: "B",
      submittedDate: "2025-09-15",
      feedback: "Good overall, review composite functions.",
      weight: 0.25,
    },
    {
      id: 4,
      title: "Forces and Motion Lab",
      course: "Physics",
      courseId: "science",
      type: "Lab Report",
      score: 18,
      totalPoints: 20,
      percentage: 90,
      grade: "A-",
      submittedDate: "2025-09-19",
      feedback: "Well-structured report with clear analysis.",
      weight: 0.15,
    },
    {
      id: 5,
      title: "Mechanics Quiz",
      course: "Physics",
      courseId: "science",
      type: "Quiz",
      score: 27,
      totalPoints: 30,
      percentage: 90,
      grade: "A-",
      submittedDate: "2025-09-17",
      feedback: "Strong grasp of fundamental concepts.",
      weight: 0.1,
    },
    {
      id: 6,
      title: "Shakespeare Essay",
      course: "English Literature",
      courseId: "english",
      type: "Essay",
      score: 40,
      totalPoints: 50,
      percentage: 80,
      grade: "B-",
      submittedDate: "2025-09-21",
      feedback: "Good analysis, work on thesis development.",
      weight: 0.2,
    },
    {
      id: 7,
      title: "WWII Research Project",
      course: "World History",
      courseId: "history",
      type: "Project",
      score: 47,
      totalPoints: 50,
      percentage: 94,
      grade: "A",
      submittedDate: "2025-09-16",
      feedback: "Comprehensive research and excellent presentation.",
      weight: 0.3,
    },
  ];

  const getGradeColor = (percentage: number) => {
    if (percentage >= 97) return "text-green-600 bg-green-50";
    if (percentage >= 93) return "text-green-600 bg-green-50";
    if (percentage >= 90) return "text-blue-600 bg-blue-50";
    if (percentage >= 87) return "text-blue-600 bg-blue-50";
    if (percentage >= 83) return "text-yellow-600 bg-yellow-50";
    if (percentage >= 80) return "text-yellow-600 bg-yellow-50";
    if (percentage >= 77) return "text-orange-600 bg-orange-50";
    if (percentage >= 70) return "text-orange-600 bg-orange-50";
    return "text-red-600 bg-red-50";
  };

  const getGradeLetter = (percentage: any) => {
    if (percentage >= 97) return "A+";
    if (percentage >= 93) return "A";
    if (percentage >= 90) return "A-";
    if (percentage >= 87) return "B+";
    if (percentage >= 83) return "B";
    if (percentage >= 80) return "B-";
    if (percentage >= 77) return "C+";
    if (percentage >= 70) return "C";
    return "F";
  };

  const filteredAssignments =
    selectedCourse === "all"
      ? assignments
      : assignments.filter(
          (assignment) => assignment.courseId === selectedCourse
        );

  const overallGPA = (
    courses.reduce((sum, course) => sum + course.percentage, 0) / courses.length
  ).toFixed(1);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="flex-1">
        {/* Content */}
        <div className="p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-gray-500 text-sm font-medium">
                    Overall GPA
                  </h3>
                  <p className="text-3xl font-bold text-gray-900 mt-2">
                    {overallGPA}%
                  </p>
                  <p className="text-lg font-semibold text-green-600 mt-1">
                    {getGradeLetter(overallGPA)}
                  </p>
                </div>
                <div className="p-3 bg-green-100 rounded-lg">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-gray-500 text-sm font-medium">
                    Assignments Graded
                  </h3>
                  <p className="text-3xl font-bold text-gray-900 mt-2">
                    {assignments.length}
                  </p>
                  <div className="flex items-center mt-2 text-sm text-green-600">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    <span>3 this week</span>
                  </div>
                </div>
                <div className="p-3 bg-blue-100 rounded-lg">
                  <BarChart3 className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-gray-500 text-sm font-medium">
                    Highest Grade
                  </h3>
                  <p className="text-3xl font-bold text-green-600 mt-2">94%</p>
                  <p className="text-sm text-gray-600 mt-1">World History</p>
                </div>
                <div className="p-3 bg-green-100 rounded-lg">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-gray-500 text-sm font-medium">
                    Course Average
                  </h3>
                  <p className="text-3xl font-bold text-gray-900 mt-2">89.1%</p>
                  <div className="flex items-center mt-2 text-sm text-green-600">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    <span>+2.3% from last month</span>
                  </div>
                </div>
                <div className="p-3 bg-purple-100 rounded-lg">
                  <PieChart className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Course Overview */}
          <div className="bg-white rounded-lg border border-gray-200 mb-8">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Course Performance
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {courses.map((course) => (
                  <div
                    key={course.id}
                    className="border border-gray-200 rounded-lg p-4"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div
                        className={`w-3 h-3 rounded-full ${course.color}`}
                      ></div>
                      <div className="flex items-center text-sm">
                        {course.trend === "up" ? (
                          <TrendingUp className="w-4 h-4 text-green-500" />
                        ) : (
                          <TrendingDown className="w-4 h-4 text-red-500" />
                        )}
                      </div>
                    </div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">
                      {course.name}
                    </h4>
                    <p className="text-gray-600 text-xs mb-2">
                      {course.teacher}
                    </p>
                    <div className="flex items-center justify-between">
                      <span
                        className={`px-2 py-1 rounded-full text-sm font-medium ${getGradeColor(course.percentage)}`}
                      >
                        {course.currentGrade}
                      </span>
                      <span className="text-sm text-gray-600">
                        {course.percentage}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8 px-6">
                <button
                  onClick={() => setSelectedCourse("all")}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    selectedCourse === "all"
                      ? "border-red-500 text-red-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  All Courses
                  <span className="ml-2 bg-gray-100 text-gray-600 py-0.5 px-2 rounded-full text-xs">
                    {assignments.length}
                  </span>
                </button>
                {courses.map((course) => (
                  <button
                    key={course.id}
                    onClick={() => setSelectedCourse(course.id)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${
                      selectedCourse === course.id
                        ? "border-red-500 text-red-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    {course.name}
                    <span className="ml-2 bg-gray-100 text-gray-600 py-0.5 px-2 rounded-full text-xs">
                      {
                        assignments.filter((a) => a.courseId === course.id)
                          .length
                      }
                    </span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Grades List */}
            <div className="p-6">
              <div className="space-y-4">
                {filteredAssignments.map((assignment) => (
                  <div
                    key={assignment.id}
                    className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {assignment.title}
                          </h3>
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                            {assignment.type.toUpperCase()}
                          </span>
                        </div>

                        <p className="text-gray-600 mb-3">
                          📚 {assignment.course}
                        </p>

                        <div className="flex items-center space-x-6 text-sm text-gray-500 mb-3">
                          <span className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>
                              Submitted: {formatDate(assignment.submittedDate)}
                            </span>
                          </span>
                          <span>Weight: {assignment.weight * 100}%</span>
                        </div>

                        {assignment.feedback && (
                          <div className="bg-gray-50 rounded-lg p-3 mb-3">
                            <p className="text-sm text-gray-700">
                              <span className="font-medium">Feedback: </span>
                              {assignment.feedback}
                            </p>
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col items-end space-y-2 ml-6">
                        <div
                          className={`px-3 py-2 rounded-lg text-center font-bold text-xl ${getGradeColor(assignment.percentage)}`}
                        >
                          {assignment.grade}
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-semibold text-gray-900">
                            {assignment.score}/{assignment.totalPoints}
                          </div>
                          <div className="text-sm text-gray-500">
                            {assignment.percentage}%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredAssignments.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-gray-400 mb-4">
                    <BarChart3 className="w-16 h-16 mx-auto" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    No grades available
                  </h3>
                  <p className="text-gray-500">
                    Grades will appear here once assignments are graded.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
