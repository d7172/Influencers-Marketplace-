import React from "react";

function DateRange() {
  return (
    <div className="flex gap-4 items-center">
      <div className="flex items-center gap-2">
        <label className="text-[12px] text-[#939393]">From</label>
        <input
          type="date"
          className="border border-[#C4C4C4] rounded-[8px] px-4 py-1 tracking-[3px] shadow-dateRange"
        />
      </div>
      <div className="flex items-center gap-2">
        <label className="text-[12px] text-[#939393]">From</label>
        <input
          type="date"
          className="border border-[#C4C4C4] rounded-[8px] px-4 py-1 tracking-[3px] shadow-dateRange"
        />
      </div>
      <button className="rounded-[8px] w-[55px] h-[37px] border border-[#C4C4C4] shadow-dateRange">GO</button>
    </div>
  );
}

export default DateRange;
