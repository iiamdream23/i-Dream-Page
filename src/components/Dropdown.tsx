// Dropdown.tsx

import React, { useState } from 'react';

interface DropdownProps {
  title: string;
  items: string[];
}

const Dropdown: React.FC<DropdownProps> = ({ title, items }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex font-roboto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 className="cursor-pointer text-black items-center">
        {title} <span className="text-blue-500 ml-2 text-xs">▼</span>
      </h2>
      {isHovered && (
        <div className="absolute mt-2">
          <ul className="p-4 list-none shadow-md mt-4 rounded-lg bg-white text-black border-gray-100">
            {items.map((item, index) => (
              <li
                key={index}
                className="block p-2 hover:text-blue-500 cursor-pointer transition-colors"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;


// // Dropdown.tsx

// import React, { useState } from 'react';

// interface DropdownProps {
//   title: string;
//   items: string[];
// }

// const Dropdown: React.FC<DropdownProps> = ({ title, items }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       className="font-roboto relative"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <h2 className="cursor-pointer text-gray-500 mb-4 relative items-center">
//         {title} <span className="text-blue-500 ml-1 text-xs">▼</span>
//       </h2>
//       {isHovered && (
//         <ul className="list-none p-4 shadow-md rounded-lg bg-white text-gray-500 border-gray-100">
//           {items.map((item, index) => (
//             <li
//               key={index}
//               className="block p-2 hover:text-blue-500 cursor-pointer transition-colors"
//             >
//               {item}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Dropdown;
