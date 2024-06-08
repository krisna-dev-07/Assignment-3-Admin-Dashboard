import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, ViewListIcon, ChartBarIcon, CalendarIcon, ClipboardCheckIcon } from '@heroicons/react/outline'; // Update the imported icons

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4 dark:bg-gray-900">
      <ul>
        <li className="mb-4">
          <Link to="/" className="flex items-center p-2 hover:bg-gray-700 dark:hover:bg-gray-700 rounded">
            <HomeIcon className="h-5 w-5 mr-2" />
            Dashboard
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/tables" className="flex items-center p-2 hover:bg-gray-700 dark:hover:bg-gray-700 rounded">
            <ViewListIcon className="h-5 w-5 mr-2" /> {/* Update the icon here */}
            Tables
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/charts" className="flex items-center p-2 hover:bg-gray-700 dark:hover:bg-gray-700 rounded">
            <ChartBarIcon className="h-5 w-5 mr-2" />
            Charts
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/calendar" className="flex items-center p-2 hover:bg-gray-700 dark:hover:bg-gray-700 rounded">
            <CalendarIcon className="h-5 w-5 mr-2" />
            Calendar
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/kanban" className="flex items-center p-2 hover:bg-gray-700 dark:hover:bg-gray-700 rounded">
            <ClipboardCheckIcon className="h-5 w-5 mr-2" /> {/* Update the icon here */}
            Kanban
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
