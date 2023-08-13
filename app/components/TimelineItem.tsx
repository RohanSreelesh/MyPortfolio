import React from "react";
import { TimelineType } from "../../types/type";
import SlideUp from "./SlideUp";


const TimelineItem: React.FC<TimelineType> = ({
  year,
  title,
  duration,
  details,
  company,
  location,
}) => {
  return (
    <SlideUp offset="-300px 0px -300px 0px">
    <ol className="flex flex-col md:flex-row relative border-l border-gray-200 dark:border-gray-700 transition-transform transform-gpu hover:-translate-y-1 hover:scale-105 mb-10 md:mb-0">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
        <div className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold text-white dark:text-gray-900 bg-gray-900 dark:bg-white rounded-md">
            {year}
          </span>
          <h3 className="text-lg font-semibold">{title}</h3>
          <div className="my-1 text-sm font-normal leading-none">
            {duration}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-300 italic">
            {company}, {location}
          </div>
        </div>
        {details.length > 0 && (
          <ul className="list-disc pl-5">
            {details.map((detail, idx) => (
              <li key={idx} className="my-2 text-base font-normal" dangerouslySetInnerHTML={{ __html: detail }} />
            ))}
          </ul>
        )}
      </li>
    </ol>
    </SlideUp>
  );
};

export default TimelineItem;
