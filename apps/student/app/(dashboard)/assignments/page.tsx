"use client"

import { useState } from "react";
import {
  Bell,
  Download,
  Eye,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  XCircle,
} from "lucide-react";

export default function AssignmentsPage() {
  const [activeTab, setActiveTab] = useState("all");

  const assignments = [
    {
      id: 1,
      title: "Linear Equations Problem Set",
      subject: "Mathematics",
      teacher: "Mr. Asante",
      dueDate: "2025-09-25",
      status: "pending",
      points: 25,
      submitted: false,
      description:
        "Solve problems 1-20 from Chapter 2. Show all work and steps.",
      type: "homework",
    },
    {
      id: 2,
      title: "Quadratic Functions Quiz",
      subject: "Mathematics",
      teacher: "Mr. Asante",
      dueDate: "2025-09-23",
      status: "overdue",
      points: 50,
      submitted: false,
      description: "Online quiz covering quadratic functions and graphing.",
      type: "quiz",
    },
    {
      id: 3,
      title: "Algebra Word Problems",
      subject: "Mathematics",
      teacher: "Mr. Asante",
      dueDate: "2025-09-20",
      status: "completed",
      points: 30,
      submitted: true,
      grade: 28,
      description: "Real-world applications of algebraic concepts.",
      type: "homework",
    },
    {
      id: 4,
      title: "Chapter 3 Test - Functions",
      subject: "Mathematics",
      teacher: "Mr. Asante",
      dueDate: "2025-09-30",
      status: "upcoming",
      points: 100,
      submitted: false,
      description:
        "Comprehensive test covering all function types and transformations.",
      type: "test",
    },
    {
      id: 5,
      title: "Graphing Calculator Project",
      subject: "Mathematics",
      teacher: "Mr. Asante",
      dueDate: "2025-10-05",
      status: "pending",
      points: 75,
      submitted: false,
      description:
        "Create and present mathematical models using graphing calculator.",
      type: "project",
    },
  ];

  const getStatusColor = (status:string) => {
    switch (status) {
      case "completed":
        return "text-green-600 bg-green-50";
      case "pending":
        return "text-yellow-600 bg-yellow-50";
      case "overdue":
        return "text-red-600 bg-red-50";
      case "upcoming":
        return "text-blue-600 bg-blue-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  const getStatusIcon = (status:string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-4 h-4" />;
      case "pending":
        return <Clock className="w-4 h-4" />;
      case "overdue":
        return <XCircle className="w-4 h-4" />;
      case "upcoming":
        return <Calendar className="w-4 h-4" />;
      default:
        return <AlertCircle className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type:string) => {
    switch (type) {
      case "test":
        return "bg-purple-100 text-purple-800";
      case "quiz":
        return "bg-orange-100 text-orange-800";
      case "project":
        return "bg-indigo-100 text-indigo-800";
      case "homework":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const filteredAssignments = assignments.filter((assignment) => {
    if (activeTab === "all") return true;
    return assignment.status === activeTab;
  });

  const formatDate = (dateString:string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  const isOverdue = (dueDate:string) => {
    return (
      new Date(dueDate) < new Date() &&
      !assignments.find((a) => a.dueDate === dueDate)?.submitted
    );
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Assignments
              </h2>
              <p className="text-gray-600 text-sm">
                Track and manage your assignments
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                <Bell className="w-5 h-5 text-gray-600" />
              </button>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-medium">
                  S
                </div>
                <span className="text-gray-700 font-medium">Student</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-gray-500 text-sm font-medium">
                Total Assignments
              </h3>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                {assignments.length}
              </p>
              <div className="flex items-center mt-2 text-sm text-green-600">
                <span>↗</span>
                <span className="ml-1">2 new this week</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-gray-500 text-sm font-medium">Completed</h3>
              <p className="text-3xl font-bold text-green-600 mt-2">
                {assignments.filter((a) => a.status === "completed").length}
              </p>
              <div className="flex items-center mt-2 text-sm text-green-600">
                <span>↗</span>
                <span className="ml-1">Great progress!</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-gray-500 text-sm font-medium">Pending</h3>
              <p className="text-3xl font-bold text-yellow-600 mt-2">
                {assignments.filter((a) => a.status === "pending").length}
              </p>
              <div className="flex items-center mt-2 text-sm text-yellow-600">
                <span>→</span>
                <span className="ml-1">Due soon</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-gray-500 text-sm font-medium">Overdue</h3>
              <p className="text-3xl font-bold text-red-600 mt-2">
                {assignments.filter((a) => a.status === "overdue").length}
              </p>
              <div className="flex items-center mt-2 text-sm text-red-600">
                <span>↓</span>
                <span className="ml-1">Needs attention</span>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8 px-6">
                {[
                  {
                    id: "all",
                    label: "All Assignments",
                    count: assignments.length,
                  },
                  {
                    id: "pending",
                    label: "Pending",
                    count: assignments.filter((a) => a.status === "pending")
                      .length,
                  },
                  {
                    id: "overdue",
                    label: "Overdue",
                    count: assignments.filter((a) => a.status === "overdue")
                      .length,
                  },
                  {
                    id: "completed",
                    label: "Completed",
                    count: assignments.filter((a) => a.status === "completed")
                      .length,
                  },
                  {
                    id: "upcoming",
                    label: "Upcoming",
                    count: assignments.filter((a) => a.status === "upcoming")
                      .length,
                  },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === tab.id
                        ? "border-red-500 text-red-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    {tab.label}
                    <span className="ml-2 bg-gray-100 text-gray-600 py-0.5 px-2 rounded-full text-xs">
                      {tab.count}
                    </span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Assignments List */}
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
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(assignment.type)}`}
                          >
                            {assignment.type.toUpperCase()}
                          </span>
                          <div
                            className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(assignment.status)}`}
                          >
                            {getStatusIcon(assignment.status)}
                            <span className="capitalize">
                              {assignment.status}
                            </span>
                          </div>
                        </div>

                        <p className="text-gray-600 mb-3">
                          {assignment.description}
                        </p>

                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>👨‍🏫 {assignment.teacher}</span>
                          <span>📚 {assignment.subject}</span>
                          <span
                            className={`flex items-center space-x-1 ${isOverdue(assignment.dueDate) ? "text-red-600" : ""}`}
                          >
                            <Calendar className="w-4 h-4" />
                            <span>Due: {formatDate(assignment.dueDate)}</span>
                          </span>
                          <span>🎯 {assignment.points} pts</span>
                          {assignment.grade && (
                            <span className="text-green-600 font-medium">
                              Grade: {assignment.grade}/{assignment.points}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 ml-4">
                        <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                          <Eye className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                          <Download className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    {assignment.status !== "completed" && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                          {assignment.submitted
                            ? "View Submission"
                            : "Submit Assignment"}
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
