'use client';

import React, { useState, useEffect } from 'react';

interface SimulatorInputs {
  budget: number;
  costPerLead: number;
  conversionRate: number;
  averageOrderValue: number;
}

interface SimulatorResults {
  leads: number;
  conversions: number;
  revenue: number;
  roi: number;
  roas: number;
}

const CampaignSimulator: React.FC = () => {
  const [inputs, setInputs] = useState<SimulatorInputs>({
    budget: 10000,
    costPerLead: 50,
    conversionRate: 15,
    averageOrderValue: 500,
  });

  const [results, setResults] = useState<SimulatorResults>({
    leads: 0,
    conversions: 0,
    revenue: 0,
    roi: 0,
    roas: 0,
  });

  useEffect(() => {
    calculateResults();
  }, [inputs]);

  const calculateResults = () => {
    const leads = inputs.budget / inputs.costPerLead;
    const conversions = leads * (inputs.conversionRate / 100);
    const revenue = conversions * inputs.averageOrderValue;
    const profit = revenue - inputs.budget;
    const roi = ((profit / inputs.budget) * 100);
    const roas = revenue / inputs.budget;

    setResults({
      leads: Math.round(leads),
      conversions: Math.round(conversions * 10) / 10,
      revenue: Math.round(revenue),
      roi: Math.round(roi),
      roas: Math.round(roas * 100) / 100,
    });
  };

  const handleInputChange = (field: keyof SimulatorInputs, value: string) => {
    const numValue = parseFloat(value) || 0;
    setInputs((prev) => ({
      ...prev,
      [field]: numValue,
    }));
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="bg-gradient-to-br from-navy-50 to-aqua-50 rounded-xl p-6 lg:p-8">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-navy-900 mb-2">Campaign ROI Calculator</h3>
        <p className="text-neutral-700">
          Adjust the inputs to estimate your campaign performance
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Inputs Section */}
        <div className="space-y-6">
          <h4 className="text-lg font-semibold text-navy-900 mb-4">Campaign Inputs</h4>

          {/* Budget */}
          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-neutral-700 mb-2">
              Campaign Budget
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500">$</span>
              <input
                id="budget"
                type="number"
                value={inputs.budget}
                onChange={(e) => handleInputChange('budget', e.target.value)}
                className="w-full pl-8 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-colors"
                min="0"
                step="1000"
                aria-label="Campaign budget in dollars"
              />
            </div>
          </div>

          {/* Cost Per Lead */}
          <div>
            <label htmlFor="costPerLead" className="block text-sm font-medium text-neutral-700 mb-2">
              Cost Per Lead (CPL)
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500">$</span>
              <input
                id="costPerLead"
                type="number"
                value={inputs.costPerLead}
                onChange={(e) => handleInputChange('costPerLead', e.target.value)}
                className="w-full pl-8 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-colors"
                min="0"
                step="5"
                aria-label="Cost per lead in dollars"
              />
            </div>
          </div>

          {/* Conversion Rate */}
          <div>
            <label htmlFor="conversionRate" className="block text-sm font-medium text-neutral-700 mb-2">
              Conversion Rate
            </label>
            <div className="relative">
              <input
                id="conversionRate"
                type="number"
                value={inputs.conversionRate}
                onChange={(e) => handleInputChange('conversionRate', e.target.value)}
                className="w-full pr-10 pl-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-colors"
                min="0"
                max="100"
                step="0.5"
                aria-label="Conversion rate percentage"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500">%</span>
            </div>
          </div>

          {/* Average Order Value */}
          <div>
            <label htmlFor="averageOrderValue" className="block text-sm font-medium text-neutral-700 mb-2">
              Average Order Value
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500">$</span>
              <input
                id="averageOrderValue"
                type="number"
                value={inputs.averageOrderValue}
                onChange={(e) => handleInputChange('averageOrderValue', e.target.value)}
                className="w-full pl-8 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-colors"
                min="0"
                step="50"
                aria-label="Average order value in dollars"
              />
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div>
          <h4 className="text-lg font-semibold text-navy-900 mb-4">Projected Results</h4>
          <div className="space-y-4">
            {/* Leads */}
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-sm font-medium text-neutral-600 mb-1">Total Leads</div>
              <div className="text-3xl font-bold text-navy-900">{results.leads.toLocaleString()}</div>
            </div>

            {/* Conversions */}
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-sm font-medium text-neutral-600 mb-1">Conversions</div>
              <div className="text-3xl font-bold text-navy-900">{results.conversions.toLocaleString()}</div>
            </div>

            {/* Revenue */}
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-sm font-medium text-neutral-600 mb-1">Total Revenue</div>
              <div className="text-3xl font-bold text-teal-600">{formatCurrency(results.revenue)}</div>
            </div>

            {/* ROI */}
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-sm font-medium text-neutral-600 mb-1">Return on Investment (ROI)</div>
              <div className={`text-3xl font-bold ${results.roi >= 0 ? 'text-teal-600' : 'text-coral-500'}`}>
                {results.roi >= 0 ? '+' : ''}{results.roi}%
              </div>
            </div>

            {/* ROAS */}
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-sm font-medium text-neutral-600 mb-1">Return on Ad Spend (ROAS)</div>
              <div className="text-3xl font-bold text-navy-900">{results.roas}x</div>
            </div>
          </div>
        </div>
      </div>

      {/* Info Footer */}
      <div className="mt-6 pt-6 border-t border-neutral-300">
        <p className="text-sm text-neutral-600 italic">
          <strong>Note:</strong> These are estimated projections based on your inputs. Actual results may vary depending on market conditions, campaign execution, and other factors.
        </p>
      </div>
    </div>
  );
};

export default CampaignSimulator;
