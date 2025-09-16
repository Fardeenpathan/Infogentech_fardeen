"use client";
import { useState, useEffect } from "react";
import { MessageSquare, TrendingUp, Calendar } from "lucide-react";
import adminApiService from "@/lib/adminApi";
import Loader from "@/components/loader/Loader";
export default function AdminDashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await adminApiService.getContactStats();
        if (response.data) {
          setStats(response.data);
        }
      } catch (error) {
        setError("Failed to load dashboard stats");
        console.error("Dashboard error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const statCards = [
    {
      title: "Total Contacts",
      value: stats?.total || 0,
      icon: MessageSquare,
      color: "bg-blue-500",
    },
    {
      title: "Today's Contacts",
      value: stats?.today || 0,
      icon: Calendar,
      color: "bg-green-500",
    },
    {
      title: "This Week",
      value: stats?.thisWeek || 0,
      icon: TrendingUp,
      color: "bg-purple-500",
    },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-red-400">{error}</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Dashboard Overview</h1>
        <p className="text-gray-400 mt-1">
          Welcome back! Here's what's happening with your contacts.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-[#1A1A1A] border border-gray-700 rounded-lg p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm font-medium">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold text-white mt-1">
                    {stat.value}
                  </p>
                </div>
                <div className={`p-3 rounded-full ${stat.color}`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Status Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* By Status */}
        <div className="bg-[#1A1A1A] border border-gray-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">
            Contacts by Status
          </h3>
          <div className="space-y-3">
            {stats?.byStatus?.map((status, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div
                    className={`w-3 h-3 rounded-full mr-3 ${
                      status._id === "pending"
                        ? "bg-yellow-500"
                        : status._id === "in-progress"
                        ? "bg-blue-500"
                        : status._id === "resolved"
                        ? "bg-green-500"
                        : "bg-gray-500"
                    }`}
                  />
                  <span className="text-gray-300 capitalize">
                    {status._id || "Unknown"}
                  </span>
                </div>
                <span className="text-white font-medium">{status.count}</span>
              </div>
            )) || []}
          </div>
        </div>

        {/* By Priority */}
        <div className="bg-[#1A1A1A] border border-gray-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">
            Contacts by Priority
          </h3>
          <div className="space-y-3">
            {stats?.byPriority?.map((priority, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div
                    className={`w-3 h-3 rounded-full mr-3 ${
                      priority._id === "high"
                        ? "bg-red-500"
                        : priority._id === "medium"
                        ? "bg-yellow-500"
                        : priority._id === "low"
                        ? "bg-green-500"
                        : "bg-gray-500"
                    }`}
                  />
                  <span className="text-gray-300 capitalize">
                    {priority._id || "Unknown"}
                  </span>
                </div>
                <span className="text-white font-medium">{priority.count}</span>
              </div>
            )) || []}
          </div>
        </div>
      </div>
    </div>
  );
}
