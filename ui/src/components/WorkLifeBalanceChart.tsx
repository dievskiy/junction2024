import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Scale } from 'lucide-react';

// Generate mock conversation data
const generateConversationData = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    conversationId: `C${i + 1}`,
    score: Math.round((Math.random() * 5 + 5) * 10) / 10 // Random score between 5-10
  }));
};

const data = generateConversationData(20); // 20 conversations

const WorkLifeBalanceChart = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Scale className="h-5 w-5 text-indigo-600 mr-2" />
        Stress level per conversation
      </h2>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="conversationId"
              label={{ 
                value: 'All conversations', 
                position: 'bottom',
                offset: 20
              }}
            />
            <YAxis 
              domain={[0, 10]}
              label={{ 
                value: 'Stress level', 
                angle: -90, 
                position: 'insideLeft' 
              }}
            />
            <Tooltip />
            <Bar 
              dataKey="score" 
              fill="#6366f1" 
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WorkLifeBalanceChart;