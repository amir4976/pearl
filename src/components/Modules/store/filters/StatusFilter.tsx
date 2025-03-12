import React from "react";

function StatusFilter() {
  return (
    <div>
      <div className="w-full bg-black p-5 rounded-md shadow-black shadow-lg bg-inherit ">
        <div className="text-sm font-DD">فیلتر بر اساس وضعیت</div>
        <div className="flex gap-2 mt-5">
          <input type="checkbox" id="top-sale" />
          <label htmlFor="top-sale">فروش ویژه</label>
        </div>
        <div className="flex gap-2 mt-2">
          <input type="checkbox" id="is-Available" />
          <label htmlFor="is-Available">موجود در انبار</label>
        </div>
      </div>
    </div>
  );
}

export default StatusFilter;
