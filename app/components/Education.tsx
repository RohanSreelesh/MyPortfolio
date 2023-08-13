
// //import { education } from "../../data"; // Adjust the path as per your project structure

// const education: EducationType = {
//     university: "University of Ottawa",
//     degree: "Bachelor of Computer Science",
//     year: "2020 Sept - Dec 2023",
//     gpa: "11.26/12.0",
//     details: [
//       "Dean's Honour List",
//       "Entrance Scholarship",
//       "Member of the Carleton Computer Science Society (CCSS)",
//       "Member of the Carleton Univeristy Hacking Community (CUHacking)",
//       "Member of the Carleton Cyber Security Club (CCSC)",
//       "Member of the Carleton Chess Club (CCC)",
//       "Member of the Carleton A.I Club (CAIC)",
//     ],
//   };


// const Education = () => {
//   return (
//     <div className="flex flex-col md:flex-row justify-center my-20">
//       <div className="w-full md:w-7/12">     
//        <h1 className="my-10 text-center font-bold text-4xl">
//       Education
//         <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
//       </h1>
        
//         <ol className="flex flex-col md:flex-row relative border-l border-stone-200 dark:border-stone-700 transition-transform transform-gpu hover:-translate-y-1 hover:scale-105">
//           {education.map((item, idx) => (
//             <li key={idx} className="mb-10 ml-4">
//               <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700" />
//               <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
//                 <span className="inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md">
//                   {item.year}
//                 </span>
//                 <h3 className="text-lg font-semibold">{item.degree}</h3>
//                 <div className="my-1 text-sm font-normal leading-none">
//                   {item.university}
//                 </div>
//                 <div className="my-1 text-sm font-medium leading-none">
//                   GPA: {item.gpa}
//                 </div>
//               </p>
//               {item.details.length > 0 && (
//                 <ul className="list-disc pl-5">
//                   {item.details.map((detail, idx) => (
//                     <li key={idx} className="my-2 text-base font-normal">
//                       {detail}
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//           ))}
//         </ol>
//       </div>
//     </div>
//   );
// };

// export default Education;
