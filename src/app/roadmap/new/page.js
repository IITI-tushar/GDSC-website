'use client'

import { useState } from 'react';

const Timeline = () => {
  // Array of available years
  const allDates = [
    '1900', '1930', '1944', '1950', '1971', '1977', '1989', '1999', '2001', '2011'
  ];

  // Initial selected year
  const [selectedDate, setSelectedDate] = useState('1900');

  // Function to handle year click
  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  // Get the index of the selected date
  const selectedIndex = allDates.indexOf(selectedDate);

  // Get the range of dates to display based on current selected year
  const visibleDates = allDates.slice(
    Math.max(0, selectedIndex - (window.innerWidth < 768 ? 1 : 3)), // For mobile 1 before & 1 after, for desktop 3 before & 3 after
    Math.min(allDates.length, selectedIndex + (window.innerWidth < 768 ? 2 : 4)) // For mobile 1 after, for desktop 3 after
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#222] p-6">
      <div className="relative w-full max-w-[1000px] h-[600px] flex flex-col md:flex-row">
        {/* Vertical Scrollbar for Desktop */}
        <div className="hidden md:block w-[120px] h-full overflow-y-auto flex flex-col space-y-2 items-center p-2">
          {allDates.map((date) => (
            <div
              key={date}
              className={`w-[80px] h-[80px] flex flex-col items-center justify-center text-2xl cursor-pointer ${
                selectedDate === date ? 'text-[#ffcc00] text-4xl' : 'text-[#ffffcc]'
              }`}
            >
              <a
                href={`#${date}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleDateClick(date);
                }}
                className="cursor-pointer"
              >
                {date}
              </a>
            </div>
          ))}
        </div>

        {/* Content Section for the Selected Year */}
        <div className="flex-1 overflow-x-auto w-full">
          {/* Horizontal Scroll for Mobile */}
          <div className="w-full overflow-x-auto flex space-x-4 sm:flex-row sm:overflow-x-auto md:hidden scrollbar-thin scrollbar-thumb-[#ffcc00] scrollbar-track-[#222]">
            {/* Arrows Positioned Above */}
            <div className="w-full flex justify-between absolute top-0 left-0">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (selectedIndex > 0) {
                    setSelectedDate(allDates[selectedIndex - 1]);
                  }
                }}
                className="text-[#ffcc00] text-4xl"
              >
                ←
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (selectedIndex < allDates.length - 1) {
                    setSelectedDate(allDates[selectedIndex + 1]);
                  }
                }}
                className="text-[#ffcc00] text-4xl"
              >
                →
              </a>
            </div>

            {/* Display Visible Dates */}
            {visibleDates.map((date) => (
              <div
                key={date}
                className={`w-[80px] h-[80px] flex flex-col items-center justify-center text-2xl ${
                  selectedDate === date ? 'text-[#ffcc00] text-4xl' : 'text-[#ffffcc]'
                }`}
              >
                <a
                  href={`#${date}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleDateClick(date);
                  }}
                  className="cursor-pointer"
                >
                  {date}
                </a>
              </div>
            ))}
          </div>

          {/* Progress Bar / Timeline (Visible only in mobile view) */}
          <div className="absolute top-24 w-full bg-[#ffcc00] h-[4px] md:hidden"></div>

          {/* Selected Year Content */}
          <div className="mt-10 w-full flex flex-col items-center justify-center">
            <ul>
              {allDates.map((date) => (
                <li
                  key={date}
                  id={date}
                  className={`list-none text-center ${selectedDate === date ? 'block' : 'hidden'}`}
                >
                  <img
                    src={`http://www.csslab.cl/ejemplos/timelinr/latest/images/${
                      date === '1900' ? '1' : date
                    }.png`}
                    alt={`Image for ${date}`}
                    className={`mx-auto transition-all duration-200 ease-in-out transform ${
                      selectedDate === date ? 'scale-110' : 'scale-70'
                    }`}
                  />
                  <h1 className="text-[#ffcc00] text-4xl mt-4">{date}</h1>
                  <p className="text-[#ccc] text-base mt-2 mx-5 text-left leading-6">
                    Donec semper quam scelerisque tortor dictum gravida. In hac habitasse platea dictumst. Nam pulvinar, odio sed
                    rhoncus suscipit, sem diam ultrices mauris, eu consequat purus metus eu velit. Proin metus odio, aliquam eget
                    molestie nec, gravida ut sapien. Phasellus quis est sed turpis sollicitudin venenatis sed eu odio. Praesent eget
                    neque eu eros interdum malesuada non vel leo. Sed fringilla porta ligula.
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Arrows for Desktop (Positioned vertically on the right side) */}
        <div className="hidden md:flex absolute right-0 top-1/2 transform -translate-y-1/2 flex-col space-y-4">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (selectedIndex > 0) {
                setSelectedDate(allDates[selectedIndex - 1]);
              }
            }}
            className="text-[#ffcc00] text-4xl"
          >
            ↑
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (selectedIndex < allDates.length - 1) {
                setSelectedDate(allDates[selectedIndex + 1]);
              }
            }}
            className="text-[#ffcc00] text-4xl"
          >
            ↓
          </a>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
