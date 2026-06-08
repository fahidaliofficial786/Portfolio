import React, { useState } from 'react';
import { GlassCard } from '../components/GlassCard';
import { SEO } from '../components/SEO';
import { SOCIAL_LINKS } from '../constants';

export const ROICalculator: React.FC = () => {
  // Slider states
  const [leadsCount, setLeadsCount] = useState<number>(200);
  const [manualTime, setManualTime] = useState<number>(20); // minutes per lead
  const [hourlyRate, setHourlyRate] = useState<number>(25); // dollars per hour

  // Calculations
  const manualHoursPerMonth = (leadsCount * manualTime) / 60;
  const manualCostPerMonth = manualHoursPerMonth * hourlyRate;

  // We assume automation saves 85% of manual lead triage time
  const automationEfficiency = 0.85;
  const hoursSavedPerMonth = manualHoursPerMonth * automationEfficiency;
  const moneySavedPerMonth = manualCostPerMonth * automationEfficiency;
  const moneySavedPerYear = moneySavedPerMonth * 12;

  return (
    <div className="pt-24 pb-12 overflow-x-hidden">
      <SEO 
        title="Interactive Automation ROI & Time Savings Calculator" 
        description="Estimate your time and financial savings. Use our interactive ROI Calculator to see how much GoHighLevel workflows save your agency or business." 
        keywords="Automation ROI Calculator, CRM Savings Estimator, Time Saved Calculator, GHL Cost Savings, Lead Nurturing Calculator"
      />

      {/* Header */}
      <section className="container mx-auto max-w-4xl px-4 text-center mb-16">
        <div className="inline-block p-2.5 px-4 rounded-full bg-primary-teal/10 text-primary-teal border border-primary-teal/20 mb-6 font-mono text-xs uppercase tracking-wider animate-float">
          <i className="fa-solid fa-calculator mr-2"></i> Financial Analytics Tool
        </div>
        <h1 className="text-4xl md:text-7xl font-black text-white mb-6 leading-none">
          CALCULATE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-teal to-blue-500">
            YOUR SAVINGS.
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          See the impact of replacing repetitive sales and operations tasks with automated GoHighLevel logic. Slide the values below to evaluate your ROI.
        </p>
      </section>

      {/* Main Grid */}
      <section className="container mx-auto max-w-6xl px-4 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Sliders Input (Left) */}
          <div className="lg:col-span-7">
            <GlassCard className="p-6 md:p-8 space-y-8 h-full border-white/10 bg-black/40">
              <h3 className="text-xl font-bold text-white mb-4 border-b border-white/10 pb-4">
                <i className="fa-solid fa-sliders text-primary-teal mr-2"></i> Operations Variables
              </h3>

              {/* Slider 1: Leads */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <label className="text-gray-300 font-medium">Monthly Lead Volume</label>
                  <span className="font-mono font-bold text-primary-teal text-base">{leadsCount} leads</span>
                </div>
                <input 
                  type="range" 
                  min="10" 
                  max="1000" 
                  step="10"
                  value={leadsCount} 
                  onChange={(e) => setLeadsCount(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-primary-teal"
                />
                <div className="flex justify-between text-[10px] text-gray-600 font-mono">
                  <span>10 Leads</span>
                  <span>500 Leads</span>
                  <span>1,000 Leads</span>
                </div>
              </div>

              {/* Slider 2: Time */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <label className="text-gray-300 font-medium">Manual Handling Time Per Lead</label>
                  <span className="font-mono font-bold text-primary-teal text-base">{manualTime} mins</span>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="60" 
                  step="5"
                  value={manualTime} 
                  onChange={(e) => setManualTime(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-primary-teal"
                />
                <div className="flex justify-between text-[10px] text-gray-600 font-mono">
                  <span>5 Minutes</span>
                  <span>30 Minutes</span>
                  <span>60 Minutes</span>
                </div>
              </div>

              {/* Slider 3: Hourly Rate */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <label className="text-gray-300 font-medium">Employee/Agent Hourly Rate</label>
                  <span className="font-mono font-bold text-primary-teal text-base">${hourlyRate}/hr</span>
                </div>
                <input 
                  type="range" 
                  min="10" 
                  max="100" 
                  step="5"
                  value={hourlyRate} 
                  onChange={(e) => setHourlyRate(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-primary-teal"
                />
                <div className="flex justify-between text-[10px] text-gray-600 font-mono">
                  <span>$10 / hr</span>
                  <span>$50 / hr</span>
                  <span>$100 / hr</span>
                </div>
              </div>

            </GlassCard>
          </div>

          {/* Savings Outputs (Right) */}
          <div className="lg:col-span-5">
            <GlassCard className="p-6 md:p-8 flex flex-col justify-between h-full border-primary-teal/30 bg-[#0F1115]/95 shadow-[0_0_40px_rgba(0,240,255,0.05)]">
              <div>
                <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">
                  <i className="fa-solid fa-chart-line text-green-400 mr-2"></i> Projected Savings
                </h3>

                <div className="space-y-6">
                  {/* Metric 1: Hours Saved */}
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-gray-500 font-mono">Monthly Hours Saved</span>
                      <h4 className="text-2xl font-black text-white">{Math.round(hoursSavedPerMonth)} hrs</h4>
                    </div>
                    <div className="w-10 h-10 bg-primary-teal/10 rounded-lg flex items-center justify-center text-primary-teal text-lg">
                      <i className="fa-solid fa-clock"></i>
                    </div>
                  </div>

                  {/* Metric 2: Monthly Financial */}
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-gray-500 font-mono">Monthly Cost Reductions</span>
                      <h4 className="text-2xl font-black text-green-400">${Math.round(moneySavedPerMonth)}</h4>
                    </div>
                    <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center text-green-400 text-lg">
                      <i className="fa-solid fa-money-bill-wave"></i>
                    </div>
                  </div>

                  {/* Metric 3: Annual Financial */}
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-primary-teal/10 to-blue-500/10 rounded-xl border border-primary-teal/20">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-primary-teal font-mono font-bold">Annual Automated Impact</span>
                      <h4 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-teal to-blue-400">${Math.round(moneySavedPerYear)} / yr</h4>
                    </div>
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-white text-xl">
                      <i className="fa-solid fa-piggy-bank"></i>
                    </div>
                  </div>
                </div>
              </div>

              {/* Explanatory text */}
              <p className="text-center text-[10px] text-gray-500 font-mono leading-tight mt-6">
                *Estimated based on an average 85% reduction in manual pre-qualification, booking workflows, and administrative follow-up time.
              </p>
            </GlassCard>
          </div>

        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto max-w-4xl px-4 text-center">
        <GlassCard className="p-8 md:p-12 border-primary-teal/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-teal/5 to-blue-500/5 opacity-50 blur-3xl pointer-events-none"></div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">READY TO AUTOMATE?</h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Book a meeting to map out your custom GoHighLevel snapshots and API integrations. Let's make these savings a reality.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href={SOCIAL_LINKS.calendly} 
              target="_blank" 
              rel="noreferrer"
              className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-primary-teal hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all flex items-center justify-center gap-2"
            >
              <i className="fa-regular fa-calendar-check"></i> Schedule Integration Call
            </a>
            <a 
              href={SOCIAL_LINKS.whatsapp} 
              target="_blank" 
              rel="noreferrer"
              className="px-8 py-4 bg-green-500/10 border border-green-500/30 text-green-400 font-bold rounded-lg hover:bg-[#25D366] hover:text-white transition-all flex items-center justify-center gap-2"
            >
              <i className="fab fa-whatsapp"></i> WhatsApp Me directly
            </a>
          </div>
        </GlassCard>
      </section>
    </div>
  );
};
