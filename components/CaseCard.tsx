
import React from 'react';
import { User, Quote } from 'lucide-react';
import { CaseData, ThemeType } from '../types';
import InbodyBar from './InbodyBar';

interface CaseCardProps {
  data: CaseData;
}

const CaseCard: React.FC<CaseCardProps> = ({ data }) => {
  const isStrawberry = data.theme === ThemeType.STRAWBERRY;
  
  const themeClasses = isStrawberry 
    ? {
        border: 'border-pink-100',
        bg: 'bg-pink-50/50',
        text: 'text-pink-600',
        accentText: 'text-pink-500',
        shadow: 'shadow-pink-100/50',
        badge: 'bg-white text-pink-500 border-pink-100',
        quote: 'text-pink-50'
      }
    : {
        border: 'border-purple-100',
        bg: 'bg-purple-50/50',
        text: 'text-purple-600',
        accentText: 'text-purple-500',
        shadow: 'shadow-purple-100/50',
        badge: 'bg-white text-purple-500 border-purple-100',
        quote: 'text-purple-50'
      };

  return (
    <article className={`bg-white rounded-[2.5rem] shadow-xl ${themeClasses.shadow} border ${themeClasses.border} overflow-hidden transition-all hover:scale-[1.01] hover:shadow-2xl animate-fade-in`}>
      <div className="grid md:grid-cols-[1fr_1.8fr] min-h-[320px]">
        {/* Left: Stats Section */}
        <div className={`p-8 ${themeClasses.bg} flex flex-col justify-center border-b md:border-b-0 md:border-r ${themeClasses.border}`}>
          <div className="mb-6">
            <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full border mb-2 ${themeClasses.badge}`}>
              RESULT
            </span>
            <h4 className={`text-2xl font-black ${themeClasses.text} leading-tight`}>
              {data.duration}<br />{data.weightLoss}
            </h4>
          </div>
          
          <div className="space-y-6">
            <div className={`flex justify-between items-end border-b ${themeClasses.border} pb-2`}>
              <span className="text-sm font-bold text-gray-600">체중 변화</span>
              <span className={`${themeClasses.text} font-black text-xl tracking-tight`}>
                {data.weightChange.from} → {data.weightChange.to}
              </span>
            </div>
            
            {data.stats.map((stat, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex justify-between text-xs font-bold text-gray-500">
                  <span>{stat.label}</span>
                  <span className={stat.change.includes('+') ? 'text-emerald-500' : themeClasses.accentText}>
                    {stat.change}
                  </span>
                </div>
                <InbodyBar percentage={stat.percentage} colorClass={stat.colorClass} />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Testimonial Section */}
        <div className="p-8 md:p-12 flex flex-col justify-center bg-white">
          <div className="flex items-center gap-3 mb-6">
            <div className={`w-10 h-10 ${isStrawberry ? 'bg-pink-100' : 'bg-purple-100'} rounded-full flex items-center justify-center ${isStrawberry ? 'text-pink-500' : 'text-purple-500'}`}>
              <User size={20} strokeWidth={2.5} aria-hidden="true" />
            </div>
            <h3 className="font-bold text-lg text-gray-800">
              {data.patient.name} 님 ({data.patient.age}세, {data.patient.job})
            </h3>
          </div>
          
          <div className="relative">
            <Quote className={`absolute -top-6 -left-6 w-12 h-12 ${themeClasses.quote} opacity-70`} aria-hidden="true" />
            <p className="text-gray-600 text-lg leading-relaxed relative z-10 font-medium">
              {data.testimonial}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CaseCard;
