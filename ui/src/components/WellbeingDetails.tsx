import React from 'react';
import { BarChart, Activity, Clock, Calendar } from 'lucide-react';

const WellbeingDetails = () => {
  const weeklyData = [
    { day: 'Mon', score: 78 },
    { day: 'Tue', score: 82 },
    { day: 'Wed', score: 75 },
    { day: 'Thu', score: 85 },
    { day: 'Fri', score: 79 },
  ];

  const contributingFactors = [
    { name: 'Work Satisfaction', score: 82 },
    { name: 'Team Collaboration', score: 75 },
    { name: 'Work-Life Balance', score: 68 },
    { name: 'Personal Growth', score: 71 },
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-indigo-50 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <BarChart className="h-5 w-5 text-indigo-600 mr-2" />
            <h3 className="font-semibold">Current Score</h3>
          </div>
          <p className="text-3xl font-bold text-indigo-600">75%</p>
          <p className="text-sm text-gray-600 mt-1">+5% from last month</p>
        </div>
        
        <div className="bg-green-50 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <Activity className="h-5 w-5 text-green-600 mr-2" />
            <h3 className="font-semibold">Participation Rate</h3>
          </div>
          <p className="text-3xl font-bold text-green-600">92%</p>
          <p className="text-sm text-gray-600 mt-1">148/156 employees</p>
        </div>

        <div className="bg-orange-50 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <Clock className="h-5 w-5 text-orange-600 mr-2" />
            <h3 className="font-semibold">Response Time</h3>
          </div>
          <p className="text-3xl font-bold text-orange-600">4.2h</p>
          <p className="text-sm text-gray-600 mt-1">Avg. support response</p>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold mb-4">Weekly Trend</h3>
        <div className="h-48 flex items-end justify-between">
          {weeklyData.map((day) => (
            <div key={day.day} className="flex flex-col items-center w-1/6">
              <div 
                className="w-full bg-indigo-600 rounded-t"
                style={{ height: `${day.score}%` }}
              ></div>
              <span className="mt-2 text-sm text-gray-600">{day.day}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold mb-4">Contributing Factors</h3>
        <div className="space-y-4">
          {contributingFactors.map((factor) => (
            <div key={factor.name}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">{factor.name}</span>
                <span className="text-sm text-gray-600">{factor.score}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-indigo-600 h-2 rounded-full"
                  style={{ width: `${factor.score}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Updates</h3>
        <div className="space-y-4">
          {[
            { date: '2024-03-15', event: 'Wellness workshop conducted' },
            { date: '2024-03-14', event: 'Team building activity completed' },
            { date: '2024-03-13', event: 'Mental health awareness session' },
          ].map((update, index) => (
            <div key={index} className="flex items-start">
              <Calendar className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-gray-800">{update.event}</p>
                <p className="text-xs text-gray-500">{update.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WellbeingDetails;