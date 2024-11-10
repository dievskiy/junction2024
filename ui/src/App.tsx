import React from "react";
import { useState, useEffect } from "react";
import {
  Activity,
  Brain,
  Heart,
  Scale,
  Smile,
  Users,
  TrendingUp,
  Coffee,
  Battery,
  AlertCircle,
  Shield,
  ExternalLink,
} from "lucide-react";
import WellbeingScore from "./components/WellbeingScore";
import MetricCard from "./components/MetricCard";
import ActionableInsights from "./components/ActionableInsights";
import WordCloud from "./components/WordCloud";
import WordCloudCompany from "./components/WordCloudCompany";
import companyData from "./company_results.json";
import WorkLifeBalanceChart from "./components/WorkLifeBalanceChart";

function App() {
  // get wellbeing from localhost:3001/scores
  // it will return this:
  // {"Overall_wellbeing":{"average":4.63,"count":8},"Stress_level":{"average":2.75,"count":8},"Work_life_balance_satisfaction":{"average":4.62,"count":8},"Leadership_performance":{"average":4.12,"count":8}}%

  const {
    company: {
      Word_cloud_employee,
      Word_cloud_company,
      Overall_wellbeing,
      Stress_level,
      Work_life_balance_satisfaction,
      Leadership_performance,
      Energy,
      Inspiration,
      Motivation,
    },
    departments,
  } = companyData;
  const [wellbeing, setWellbeing] = useState(0);
  const [stressLevel, setStressLevel] = useState(0);
  const [workLifeBalance, setWorkLifeBalance] = useState(0);
  const [leadershipPerformance, setLeadershipPerformance] = useState(0);
  const [wordCloudEmployee, setWordCloudEmployee] = useState([]);
  console.log("trying to get");
  useEffect(() => {
    fetch("http://localhost:3002/scores")
      .then((response) => response.json())
      .then((data) => {
        setWellbeing(data.Overall_wellbeing.average);
        setStressLevel(data.Stress_level.average);
        setWorkLifeBalance(data.Work_life_balance_satisfaction.average);
        setLeadershipPerformance(data.Leadership_performance.average);
        console.log("Wellbeing score: ", data.Overall_wellbeing.average);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3002/word_data")
      .then((response) => response.json())
      .then((data) => {
        setWordCloudEmployee(data);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-800">
              Employee well-being dashboard (for HRs)
            </h1>
            <div className="flex items-center space-x-2">
              <Users className="h-6 w-6 text-indigo-600" />
              <span className="text-lg font-semibold text-gray-700">
                156 Employees
              </span>
            </div>
          </div>
          <p className="mt-2 text-gray-600">
            Real-time insights into your company's mental health and well-being.
            Based on 735 bi-weekly AI well-being check-ups from 156 employees.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <WellbeingScore score={wellbeing} />
          <MetricCard
            title="Stress level"
            value={`${stressLevel} / 10`}
            trend="-5%"
            icon={Brain}
            color="text-orange-600"
            bgColor="bg-orange-100"
          />
          <MetricCard
            title="Work-Life balance"
            value={`${workLifeBalance} / 10`}
            trend="+12%"
            icon={Scale}
            color="text-green-600"
            bgColor="bg-green-100"
          />
          <MetricCard
            title="Leadership performance"
            value={`${leadershipPerformance} / 10`}
            trend="+15%"
            icon={Users}
            color="text-blue-600"
            bgColor="bg-blue-100"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <WorkLifeBalanceChart />
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Activity className="h-5 w-5 text-indigo-600 mr-2" />
              <a
                href="https://aistihealth.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors duration-300 flex items-center gap-1"
              >
                Aisti Health metrics
                <ExternalLink className="h-4 w-4" />
              </a>
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">
                  Energetic Person ({Energy.toFixed(1)})
                </span>
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: `${Energy * 10}%` }}
                  ></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">
                  Inspiring Culture ({Inspiration.toFixed(1)})
                </span>
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${Inspiration * 10}%` }}
                  ></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">
                  Motivating Work ({Motivation.toFixed(1)})
                </span>
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-purple-500 h-2 rounded-full"
                    style={{ width: `${Motivation * 10}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-8">
          <MetricCard
            title="Authenticity score"
            subtitle="How your company's values and social media presence matches what employess actually say"
            value="37 / 100"
            trend="-5%"
            icon={Brain}
            color="text-orange-600"
            bgColor="bg-orange-100"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {wordCloudEmployee.length > 0 && (
            <WordCloud
              words={wordCloudEmployee.map((word) => ({
                ...word,
                sentiment:
                  word.sentiment === "positive" ? "positive" : "negative",
              }))}
            />
          )}
          <WordCloudCompany
            words={Word_cloud_company.map((word) => ({
              ...word,
              sentiment:
                word.sentiment === "positive" ? "positive" : "negative",
            }))}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <ActionableInsights title="Reactive actions" />
          <ActionableInsights title="Preventive actions" />
        </div>
      </div>
    </div>
  );
}
export default App;
