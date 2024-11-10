import React, { useState } from 'react';
import { LucideIcon } from 'lucide-react';
import DetailModal from './DetailModal';
import MetricDetails from './MetricDetails';

interface MetricCardProps {
  title: string;
  subtitle?: string;
  value: string;
  trend: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
}

const MetricCard = ({ 
  title, 
  subtitle,
  value, 
  trend, 
  icon: Icon, 
  color, 
  bgColor 
}: MetricCardProps) => {
  console.log('MetricCard props:', { title, subtitle });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isPositive = trend.startsWith('+');

  return (
    <>
      <div 
        className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            {subtitle && (
              <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
            )}
          </div>
          <div className={`p-2 rounded-lg ${bgColor}`}>
            <Icon className={`h-6 w-6 ${color}`} />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-800">{value}</span>
          <span className={`text-sm font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
            {trend}
          </span>
        </div>
      </div>

      <DetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`${title} Details`}
      >
        <MetricDetails metric={title} value={value} trend={trend} />
      </DetailModal>
    </>
  );
};

export default MetricCard;