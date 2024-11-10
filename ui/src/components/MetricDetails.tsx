import React from 'react';
import { BarChart, Users, Clock, AlertCircle, Shield } from 'lucide-react';

interface MetricDetailsProps {
  metric: string;
  value: string;
  trend: string;
}

const MetricDetails = ({ metric, value, trend }: MetricDetailsProps) => {
  const getDepartmentData = () => [
    { name: 'Engineering', value: 68 },
    { name: 'Marketing', value: 75 },
    { name: 'Sales', value: 82 },
    { name: 'Customer Support', value: 71 },
    { name: 'HR', value: 79 },
  ];

  const getTimelineData = () => [
    { month: 'Jan', value: 65 },
    { month: 'Feb', value: 70 },
    { month: 'Mar', value: 68 },
    { month: 'Apr', value: 75 },
    { month: 'May', value: 72 },
    { month: 'Jun', value: 78 },
  ];

  const getPsychSafetyMetrics = () => [
    { name: 'Psychological Safety', value: 88 },
    { name: 'Inclusive Environment', value: 85 },
    { name: 'Equal Opportunities', value: 82 },
    { name: 'Diverse Representation', value: 78 },
    { name: 'Voice & Recognition', value: 86 }
  ];

  const renderPsychSafetyContent = () => (
    <>
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
        <h3 className="text-lg font-semibold mb-4">DEI Metrics</h3>
        <div className="space-y-4">
          {getPsychSafetyMetrics().map((metric) => (
            <div key={metric.name}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">{metric.name}</span>
                <span className="text-sm text-gray-600">{metric.value}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-purple-600 h-2 rounded-full"
                  style={{ width: `${metric.value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold mb-4">Key Initiatives</h3>
        <div className="space-y-4">
          {[
            'Regular anonymous feedback sessions',
            'DEI training and workshops',
            'Employee resource groups',
            'Mentorship programs',
            'Inclusive leadership training'
          ].map((initiative, index) => (
            <div key={index} className="flex items-start">
              <Shield className="h-5 w-5 text-purple-600 mr-3" />
              <p className="text-gray-700">{initiative}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-50 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <BarChart className="h-5 w-5 text-blue-600 mr-2" />
            <h3 className="font-semibold">Current Level</h3>
          </div>
          <p className="text-3xl font-bold text-blue-600">{value}</p>
          <p className="text-sm text-gray-600 mt-1">{trend} from last month</p>
        </div>

        <div className="bg-purple-50 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <Users className="h-5 w-5 text-purple-600 mr-2" />
            <h3 className="font-semibold">Employee Participation</h3>
          </div>
          <p className="text-3xl font-bold text-purple-600">92%</p>
          <p className="text-sm text-gray-600 mt-1">In DEI programs</p>
        </div>

        <div className="bg-amber-50 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <AlertCircle className="h-5 w-5 text-amber-600 mr-2" />
            <h3 className="font-semibold">Action Items</h3>
          </div>
          <p className="text-3xl font-bold text-amber-600">12</p>
          <p className="text-sm text-gray-600 mt-1">Active initiatives</p>
        </div>
      </div>

      {metric === "Psychological Safety & DEI" ? (
        renderPsychSafetyContent()
      ) : (
        <>
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold mb-4">Department Breakdown</h3>
            <div className="space-y-4">
              {getDepartmentData().map((dept) => (
                <div key={dept.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">{dept.name}</span>
                    <span className="text-sm text-gray-600">{dept.value}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${dept.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold mb-4">6-Month Trend</h3>
            <div className="h-48 flex items-end justify-between">
              {getTimelineData().map((month) => (
                <div key={month.month} className="flex flex-col items-center w-1/6">
                  <div 
                    className="w-full bg-blue-600 rounded-t"
                    style={{ height: `${month.value}%` }}
                  ></div>
                  <span className="mt-2 text-sm text-gray-600">{month.month}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold mb-4">Recommendations</h3>
            <div className="space-y-4">
              {[
                'Schedule one-on-one check-ins with affected employees',
                'Review workload distribution across teams',
                'Implement suggested wellness programs',
                'Monitor progress weekly and adjust interventions as needed'
              ].map((recommendation, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <span className="text-sm font-medium text-blue-600">{index + 1}</span>
                  </div>
                  <p className="text-gray-700">{recommendation}</p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MetricDetails;