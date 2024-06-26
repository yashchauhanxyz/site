import React, { useRef, useState, useEffect } from 'react';

const allTabs = [
  {
    id: "home",
    name: "Home",
  },
  {
    id: "blog",
    name: "Blog",
  },
  {
    id: "projects",
    name: "Projects",
  },
  {
    id: "arts",
    name: "Arts",
  },
];

export const SlidingTabBar = () => {
  const tabsRef = useRef([]);
  const [activeTabIndex, setActiveTabIndex] = useState(null);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  useEffect(() => {
    if (activeTabIndex === null) {
      return;
    }

    const setTabPosition = () => {
      const currentTab = tabsRef.current[activeTabIndex];
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    };

    setTabPosition();
  }, [activeTabIndex]);

  return (
    <div className="flew-row relative mx-auto flex h-12 rounded-3xl border border-black/40 bg-neutral-800 px-2 backdrop-blur-sm">
      <span
        className="absolute bottom-0 top-0 -z-10 flex overflow-hidden rounded-3xl py-2 transition-all duration-300"
        style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
      >
        <span className="h-full w-full rounded-3xl bg-gray-200/30" />
      </span>
      {allTabs.map((tab, index) => {
        const isActive = activeTabIndex === index;

        return (
          <button
            key={tab.id}
            ref={(el) => (tabsRef.current[index] = el)}
            className={`${
              isActive ? '' : 'hover:text-neutral-300'
            } my-auto cursor-pointer select-none rounded-full px-4 text-center font-light text-white`}
            onClick={() => setActiveTabIndex(index)}
          >
            {tab.name}
          </button>
        );
      })}
    </div>
  );
};



import React, { useState } from 'react';
import './styles.css'; // Make sure to create and import this CSS file

const allTabs = [
  {
    id: "home",
    name: "Home",
  },
  {
    id: "blog",
    name: "Blog",
  },
  {
    id: "projects",
    name: "Projects",
  },
  {
    id: "arts",
    name: "Arts",
  },
];

export const SimpleTabBar = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div className="relative mx-auto flex h-12 rounded-3xl border border-black/40 bg-neutral-800 px-2 backdrop-blur-sm">
      <div 
        className="absolute h-10 w-24 bg-gray-200/30 rounded-full transition-transform duration-300 ease-in-out" 
        style={{ transform: `translateX(${activeTabIndex * 100}%)` }} 
      />
      {allTabs.map((tab, index) => (
        <button
          key={tab.id}
          className={`${
            activeTabIndex === index ? 'text-neutral-100' : 'hover:text-neutral-300'
          } relative my-auto z-10 cursor-pointer select-none rounded-full px-4 text-center font-light text-white transition duration-300 ease-in-out`}
          onClick={() => setActiveTabIndex(index)}
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
};