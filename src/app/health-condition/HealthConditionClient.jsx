"use client";

import { useState } from "react";
import Link from "next/link";
import healthConditionsData from "@/data/healthConditionsData";

export default function HealthConditionClient() {
  const [selectedId, setSelectedId] = useState(healthConditionsData[0].id);

  const activeCategory =
    healthConditionsData.find((c) => c.id === selectedId) ||
    healthConditionsData[0];

  return (
    <div className="min-h-screen bg-white">
      {/* PlatinumRx Breadcrumb */}
      <div className="mx-[4.5%] lg:mx-[8%] my-[1.25%]">
        <nav aria-label="breadcrumb">
          <ol className="flex items-center space-x-2 text-[14px] text-[#40464d]">
            <li>
              <Link href="/" className="hover:underline text-[#031926]">
                Home
              </Link>
            </li>
            <li className="text-[#888] select-none">/</li>
            <li>
              <span className="text-[#fc5a5a] font-medium">
                Health Condition
              </span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Main Container */}
      <div className="mx-[4.5%] lg:mx-[8%] pb-16">
        <h1 className="text-[22px] sm:text-[28px] font-[600] text-[#031926] mb-2 leading-tight">
          Browse Medicines By Health Condition
        </h1>
        <p className="text-[14px] sm:text-[16px] text-[#40464d] mb-6">
          Find medicines, clinical dosages, and verified substitute options categorized by medical condition.
        </p>

        {/* 2-Column Split: Left Tabs Column + Right Subcategories Panel matching PlatinumRx exactly */}
        <div className="border border-[#e2ecf4] rounded-[16px] overflow-hidden flex flex-col md:flex-row shadow-xs bg-white">
          
          {/* Left Tabs List */}
          <div className="w-full md:w-[280px] lg:w-[320px] border-b md:border-b-0 md:border-r border-[#e2ecf4] bg-[#fafafa] max-h-[380px] md:max-h-[640px] overflow-y-auto divide-y divide-[#f0f0f0]">
            {healthConditionsData.map((cat) => {
              const isSelected = cat.id === selectedId;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedId(cat.id)}
                  type="button"
                  className={`w-full flex items-center gap-3.5 px-4 py-3.5 text-left transition-colors cursor-pointer ${
                    isSelected
                      ? "bg-white text-[#fc5a5a] font-[600] border-l-4 border-l-[#fc5a5a] shadow-xs"
                      : "text-[#40464d] hover:bg-[#f2f4f7] font-[500] border-l-4 border-l-transparent"
                  }`}
                >
                  <img
                    src={cat.icon}
                    alt={cat.name}
                    className="w-7 h-7 object-contain shrink-0"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <span className="text-[14px] leading-snug">{cat.name}</span>
                </button>
              );
            })}
          </div>

          {/* Right Panel Subcategories */}
          <div className="flex-1 p-6 sm:p-8 min-h-[400px] md:min-h-[640px] bg-white overflow-y-auto">
            <h2 className="text-[20px] font-[600] text-[#031926] mb-6 pb-3 border-b border-[#f0f0f0]">
              {activeCategory.name}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {activeCategory.subcategories.map((sub) => (
                <Link
                  key={sub.slug}
                  href={`/health-condition/${sub.slug}`}
                  className="p-4 rounded-[10px] border border-[#e2ecf4] hover:border-[#fc5a5a] hover:bg-[#fff9f9] text-[#031926] hover:text-[#fc5a5a] text-[14px] font-[500] transition-all flex items-center justify-between group shadow-2xs"
                >
                  <span className="leading-snug">{sub.name}</span>
                  <span className="text-[#bbb] group-hover:text-[#fc5a5a] transition-colors ml-2 shrink-0">
                    →
                  </span>
                </Link>
              ))}
            </div>

            {/* Explanatory Info Section matching PlatinumRx footer banner */}
            <div className="mt-12 p-6 rounded-[12px] bg-[#f8fafc] border border-[#e2ecf4] space-y-3">
              <h3 className="text-[15px] font-[600] text-[#031926]">
                Find Medicines by Health Condition
              </h3>
              <p className="text-[13px] text-[#666] leading-relaxed">
                Finding medicines for a specific health condition should be simple. PlatinumRx lets you browse medicines across hundreds of health conditions, including diabetes, thyroid disorders, high blood pressure, infections, skin conditions, and digestive problems. Instead of searching for individual medicine names, you can explore medicines and affordable same-salt substitutes based on the condition you want to manage.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
