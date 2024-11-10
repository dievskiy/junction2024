import React from 'react';
import { AlertCircle, Coffee, Battery } from 'lucide-react';

interface ActionableInsightsProps {
  title: string;
}

const ActionableInsights: React.FC<ActionableInsightsProps> = ({ title }) => {
  const insights = [
    {
      icon: Coffee,
      title: "Break Time Optimization",
      description: "20% of employees taking shorter breaks than recommended",
      action: "Implement scheduled break reminders and create relaxation spaces",
      priority: "medium"
    },
    {
      icon: Battery,
      title: "Energy Levels",
      description: "Team energy levels drop significantly after 3 PM",
      action: "Consider flexible work hours and afternoon wellness activities",
      priority: "medium"
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-6">{title}</h2>
      <div className="flex flex-col gap-4">
        {insights.map((insight, index) => {
          const Icon = insight.icon;
          return (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-4 hover:border-indigo-500 transition-colors duration-300"
            >
              <div className="flex items-center mb-3">
                <Icon className={`h-5 w-5 ${
                  insight.priority === 'high' ? 'text-red-500' : 'text-yellow-500'
                } mr-2`} />
                <h3 className="font-semibold text-gray-800">{insight.title}</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">{insight.description}</p>
              <div className="bg-indigo-50 rounded-lg p-3">
                <p className="text-sm font-medium text-indigo-700">
                  Recommended Action:
                  <span className="block mt-1 font-normal">{insight.action}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ActionableInsights;