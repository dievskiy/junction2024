import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

interface WordData {
  text: string;
  value: number;
  sentiment: 'positive' | 'negative';
}

interface WordCloudProps {
  words: WordData[];
}

const WordCloud: React.FC<WordCloudProps> = ({ words }) => {
  const [selectedSentiment, setSelectedSentiment] = useState<'all' | 'positive' | 'negative'>('all');

  // Calculate sentiment percentages
  const totalWords = words.length;
  const positiveWords = words.filter(word => word.sentiment === 'positive').length;
  const positivePercentage = Math.round((positiveWords / totalWords) * 100);
  const negativePercentage = 100 - positivePercentage;

  const filteredWords = words.filter(word => 
    selectedSentiment === 'all' ? true : word.sentiment === selectedSentiment
  );

  const getWordStyle = (word: WordData) => {
    const baseSize = Math.max(1, Math.min(3, word.value / 20));
    const fontSize = `${baseSize}rem`;
    
    const colors = {
      positive: 'text-green-600',
      negative: 'text-red-600'
    };

    return {
      fontSize,
      className: `${colors[word.sentiment]} transition-all duration-300 hover:opacity-75 cursor-pointer`
    };
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold flex items-center">
          <MessageCircle className="h-5 w-5 text-indigo-600 mr-2" />
          What employees say
        </h2>
        <div className="flex space-x-2">
          <button
            onClick={() => setSelectedSentiment('all')}
            className={`px-3 py-1 rounded-full text-sm ${
              selectedSentiment === 'all'
                ? 'bg-indigo-100 text-indigo-700'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setSelectedSentiment('positive')}
            className={`px-3 py-1 rounded-full text-sm ${
              selectedSentiment === 'positive'
                ? 'bg-green-100 text-green-700'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Positive
          </button>
          <button
            onClick={() => setSelectedSentiment('negative')}
            className={`px-3 py-1 rounded-full text-sm ${
              selectedSentiment === 'negative'
                ? 'bg-red-100 text-red-700'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Negative
          </button>
        </div>
      </div>

      <div className="relative h-64 flex items-center justify-center">
        <div className="flex flex-wrap gap-4 justify-center items-center">
          {filteredWords.map((word) => {
            const style = getWordStyle(word);
            return (
              <span
                key={word.text}
                style={{ fontSize: style.fontSize }}
                className={style.className}
                title={`Mentioned ${word.value} times`}
              >
                {word.text}
              </span>
            );
          })}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="bg-green-50 rounded-lg p-4">
          <h3 className="text-sm font-semibold text-green-700 mb-2">Positive Sentiment</h3>
          <p className="text-2xl font-bold text-green-600">{positivePercentage}%</p>
        </div>
        <div className="bg-red-50 rounded-lg p-4">
          <h3 className="text-sm font-semibold text-red-700 mb-2">Negative Sentiment</h3>
          <p className="text-2xl font-bold text-red-600">{negativePercentage}%</p>
        </div>
      </div>
    </div>
  );
};

export default WordCloud;