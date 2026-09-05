"use client";

import { useMemo, useState } from "react";
import SiteNav from "./SiteNav";
import Footer from "./Footer";

export default function ROICalculator() {
  const [employees, setEmployees] = useState(2);
  const [hoursPerWeek, setHoursPerWeek] = useState(10);
  const [hourlyCost, setHourlyCost] = useState(15);
  const [leadsPerMonth, setLeadsPerMonth] = useState(100);
  const [minutesPerLead, setMinutesPerLead] = useState(8);
  const [efficiency, setEfficiency] = useState(65);

  const results = useMemo(() => {
    const weeklyTaskCost = employees * hoursPerWeek * hourlyCost;
    const monthlyTaskCost = weeklyTaskCost * 4.33;

    const monthlyLeadHours = (leadsPerMonth * minutesPerLead) / 60;
    const monthlyLeadCost = monthlyLeadHours * hourlyCost;

    const totalMonthlyCost = monthlyTaskCost + monthlyLeadCost;
    const monthlySavings = totalMonthlyCost * (efficiency / 100);
    const annualSavings = monthlySavings * 12;
    const hoursReclaimedPerMonth =
      (hoursPerWeek * employees * 4.33 + monthlyLeadHours) * (efficiency / 100);

    return {
      totalMonthlyCost,
      monthlySavings,
      annualSavings,
      hoursReclaimedPerMonth,
    };
  }, [employees, hoursPerWeek, hourlyCost, leadsPerMonth, minutesPerLead, efficiency]);

  const fmt = (n) =>
    n.toLocaleString("en-US", { maximumFractionDigits: 0 });

  return (
    <div className="inner-page">
      <SiteNav />

      <section className="svc-hero">
        <div className="svc-breadcrumb">
          <span>Free Tool</span>
        </div>
        <h1 className="svc-hero-heading">AI Automation ROI Calculator</h1>
        <p className="svc-intro">
          Rough, honest numbers on what manual work is actually costing you
          — and what automating it could save. No email required.
        </p>
      </section>

      <section className="roi-layout">
        {/* -------- Inputs -------- */}
        <div className="roi-inputs">
          <div className="roi-field">
            <label>
              Employees doing this manual task
              <span className="roi-value">{employees}</span>
            </label>
            <input
              type="range" min="1" max="20" value={employees}
              onChange={(e) => setEmployees(Number(e.target.value))}
            />
          </div>

          <div className="roi-field">
            <label>
              Hours per week, per employee, on this task
              <span className="roi-value">{hoursPerWeek}h</span>
            </label>
            <input
              type="range" min="1" max="40" value={hoursPerWeek}
              onChange={(e) => setHoursPerWeek(Number(e.target.value))}
            />
          </div>

          <div className="roi-field">
            <label>
              Average hourly cost per employee ($)
              <span className="roi-value">${hourlyCost}</span>
            </label>
            <input
              type="range" min="5" max="100" value={hourlyCost}
              onChange={(e) => setHourlyCost(Number(e.target.value))}
            />
          </div>

          <div className="roi-field">
            <label>
              Leads / inquiries per month
              <span className="roi-value">{leadsPerMonth}</span>
            </label>
            <input
              type="range" min="0" max="2000" step="10" value={leadsPerMonth}
              onChange={(e) => setLeadsPerMonth(Number(e.target.value))}
            />
          </div>

          <div className="roi-field">
            <label>
              Minutes spent manually processing each lead
              <span className="roi-value">{minutesPerLead} min</span>
            </label>
            <input
              type="range" min="0" max="30" value={minutesPerLead}
              onChange={(e) => setMinutesPerLead(Number(e.target.value))}
            />
          </div>

          <div className="roi-field">
            <label>
              Estimated automation efficiency
              <span className="roi-value">{efficiency}%</span>
            </label>
            <input
              type="range" min="20" max="90" value={efficiency}
              onChange={(e) => setEfficiency(Number(e.target.value))}
            />
            <p className="roi-hint">
              How much of this work AI automation could realistically take
              off your plate. 65% is a reasonable, conservative default.
            </p>
          </div>
        </div>

        {/* -------- Output -------- */}
        <div className="roi-output">
          <div className="roi-output-card roi-output-primary">
            <span className="roi-output-label">Estimated Annual Savings</span>
            <span className="roi-output-num">${fmt(results.annualSavings)}</span>
          </div>

          <div className="roi-output-grid">
            <div className="roi-output-card">
              <span className="roi-output-label">Current Monthly Cost</span>
              <span className="roi-output-num-sm">${fmt(results.totalMonthlyCost)}</span>
            </div>
            <div className="roi-output-card">
              <span className="roi-output-label">Potential Monthly Savings</span>
              <span className="roi-output-num-sm">${fmt(results.monthlySavings)}</span>
            </div>
            <div className="roi-output-card">
              <span className="roi-output-label">Hours Reclaimed / Month</span>
              <span className="roi-output-num-sm">{fmt(results.hoursReclaimedPerMonth)}h</span>
            </div>
          </div>

          <p className="roi-disclaimer">
            This is a directional estimate based on the numbers you entered
            and an assumed automation efficiency — not a guarantee. Actual
            results depend on the specific process.
          </p>

          <a href="mailto:info@rkazn.com" className="home-cta-primary roi-cta">
            Get a Real Automation Plan →
          </a>
        </div>
      </section>

      <Footer variant="static" />
    </div>
  );
}