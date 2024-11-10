import React from 'react';
import { TrendingUp } from 'lucide-react';

const TeamStats = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold flex items-center">
          <TrendingUp className="h-5 w-5 text-indigo-600 mr-2" />
          Team Well-being Trends
        </h2>
        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 p-2.5">
          <option>Last 30 days</option>
          <option>Last 90 days</option>
          <option>Last 6 months</option>
        </select>
      </div>
      <div className="relative h-64">
        <div className="absolute bottom-0 left-0 w-full h-full flex items-end">
          <div className="w-1/7 h-[65%] bg-indigo-600 rounded-t mx-1"></div>
          <div className="w-1/7 h-[75%] bg-indigo-600 rounded-t mx-1"></div>
          <div className="w-1/7 h-[60%] bg-indigo-600 rounded-t mx-1"></div>
          <div className="w-1/7 h-[80%] bg-indigo-600 rounded-t mx-1"></div>
          <div className="w-1/7 h-[70%] bg-indigo-600 rounded-t mx-1"></div>
          <div className="w-1/7 h-[85%] bg-indigo-600 rounded-t mx-1"></div>
          <div className="w-1/7 h-[75%] bg-indigo-600 rounded-t mx-1"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-full border-t border-gray-200 pt-2">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamStats;