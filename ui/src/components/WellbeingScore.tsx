import React, { useState, useEffect } from "react";
import { Smile } from "lucide-react";
import DetailModal from "./DetailModal";
import WellbeingDetails from "./WellbeingDetails";

interface WellbeingScoreProps {
  score: number;
}

const WellbeingScore: React.FC<WellbeingScoreProps> = ({ score }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Convert score (0-10) to strokeDashoffset (100-0)
  const strokeDashoffset = 100 - score * 10;

  return (
    <>
      <div
        className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">
            Overall well-being
          </h3>
          <Smile className="h-6 w-6 text-indigo-600" />
        </div>
        <div className="flex items-center justify-center">
          <div className="relative w-32 h-32">
            <svg className="transform -rotate-90 w-32 h-32">
              <circle
                cx="64"
                cy="64"
                r="56"
                stroke="currentColor"
                strokeWidth="8"
                fill="transparent"
                className="text-gray-200"
              />
              <circle
                cx="64"
                cy="64"
                r="56"
                stroke="currentColor"
                strokeWidth="8"
                fill="transparent"
                strokeDasharray="352"
                strokeDashoffset={352 * (score / 10)}
                className="text-indigo-600"
              />
            </svg>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <span className="text-3xl font-bold text-gray-800">
                {Math.round(score * 10)}%
              </span>
            </div>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Good, but room for improvement
          </p>
        </div>
      </div>

      <DetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Overall Well-being Details"
      >
        <WellbeingDetails />
      </DetailModal>
    </>
  );
};

export default WellbeingScore;
