import React, { useState } from 'react';
import { GlassCard } from '../components/GlassCard';
import { SectionTitle } from '../components/SectionTitle';
import { SEO } from '../components/SEO';

const MortgageCalc = () => {
    const [amount, setAmount] = useState(300000);
    const [rate, setRate] = useState(3.5);
    const [term, setTerm] = useState(30);
    const [monthly, setMonthly] = useState(0);

    const calculate = () => {
        const r = rate / 100 / 12;
        const n = term * 12;
        const m = amount * ( (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1) );
        setMonthly(m);
    };

    return (
        <GlassCard className="h-full flex flex-col">
            <div className="flex items-center gap-3 mb-6">
                <i className="fa-solid fa-house-chimney text-2xl text-blue-400"></i>
                <h3 className="text-xl font-bold text-white">Mortgage Estimator</h3>
            </div>
            <div className="space-y-4 mb-6">
                <div>
                    <label className="text-xs text-gray-400">Loan Amount ($)</label>
                    <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} className="w-full bg-black/30 border border-white/10 rounded p-2 text-white" />
                </div>
                <div>
                    <label className="text-xs text-gray-400">Interest Rate (%)</label>
                    <input type="number" value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-full bg-black/30 border border-white/10 rounded p-2 text-white" />
                </div>
                <div>
                    <label className="text-xs text-gray-400">Loan Term (Years)</label>
                    <input type="number" value={term} onChange={(e) => setTerm(Number(e.target.value))} className="w-full bg-black/30 border border-white/10 rounded p-2 text-white" />
                </div>
            </div>
            <button onClick={calculate} className="w-full bg-blue-500/20 border border-blue-500 text-blue-400 py-2 rounded hover:bg-blue-500 hover:text-black font-bold mb-4">Calculate</button>
            <div className="text-center p-4 bg-white/5 rounded border border-white/10">
                <div className="text-xs text-gray-500 uppercase">Monthly Payment</div>
                <div className="text-3xl font-black text-white">${monthly.toFixed(2)}</div>
            </div>
        </GlassCard>
    );
};

const ROICalc = () => {
    const [cost, setCost] = useState(1000);
    const [revenue, setRevenue] = useState(1500);
    const [roi, setRoi] = useState(0);

    const calculate = () => {
        const profit = revenue - cost;
        const res = (profit / cost) * 100;
        setRoi(res);
    };

    return (
        <GlassCard className="h-full flex flex-col">
            <div className="flex items-center gap-3 mb-6">
                <i className="fa-solid fa-chart-line text-2xl text-green-400"></i>
                <h3 className="text-xl font-bold text-white">ROI Calculator</h3>
            </div>
            <div className="space-y-4 mb-6">
                <div>
                    <label className="text-xs text-gray-400">Total Investment ($)</label>
                    <input type="number" value={cost} onChange={(e) => setCost(Number(e.target.value))} className="w-full bg-black/30 border border-white/10 rounded p-2 text-white" />
                </div>
                <div>
                    <label className="text-xs text-gray-400">Returned Amount ($)</label>
                    <input type="number" value={revenue} onChange={(e) => setRevenue(Number(e.target.value))} className="w-full bg-black/30 border border-white/10 rounded p-2 text-white" />
                </div>
            </div>
            <button onClick={calculate} className="w-full bg-green-500/20 border border-green-500 text-green-400 py-2 rounded hover:bg-green-500 hover:text-black font-bold mb-4">Calculate ROI</button>
            <div className="text-center p-4 bg-white/5 rounded border border-white/10">
                <div className="text-xs text-gray-500 uppercase">Return on Investment</div>
                <div className={`text-3xl font-black ${roi >= 0 ? 'text-green-500' : 'text-red-500'}`}>{roi.toFixed(2)}%</div>
            </div>
        </GlassCard>
    );
};

export const ToolsBusiness: React.FC = () => {
    return (
        <div className="pt-24 pb-12 container mx-auto max-w-7xl px-4">
            <SEO title="Business Finance Tools" description="Free Mortgage, Loan, and ROI Calculators." />
            <div className="text-center mb-12">
                 <div className="inline-block p-2 px-4 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-500 mb-4 font-mono text-xs tracking-widest">FINANCE_DECK</div>
                 <SectionTitle title="Business & Finance Lab" align="center" subtitle="Essential calculators for quick financial decision making." />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <MortgageCalc />
                <ROICalc />
            </div>
        </div>
    );
};