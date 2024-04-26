import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserProfilePage = () => {
  const navigate = useNavigate();

  const handleOrderHistoryClick = () => {
    // Navigate to the order history page
    navigate('/order-history');
  };

  const handleLogoutClick = () => {
    // Implement logout functionality (e.g., clear session, redirect to login page)
    // For demonstration purposes, we'll just navigate to the login page
    navigate('/Login');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Vertical Menu */}
      <div className="flex flex-col justify-start items-center bg-gray-200 w-1/4 py-8">
        <button
          onClick={handleOrderHistoryClick}
          className="py-2 px-4 rounded-md text-gray-800 hover:bg-gray-300 hover:text-gray-900 mb-4 w-full"
        >
          Order History
        </button>
        <button
          onClick={handleLogoutClick}
          className="py-2 px-4 rounded-md text-gray-800 hover:bg-gray-300 hover:text-gray-900 w-full"
        >
          Logout
        </button>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-8">
        {/* User Profile Content Goes Here */}
        <h1 className="text-3xl font-bold mb-4">User Profile Page</h1>
        <div className="bg-white p-6 rounded-md shadow-md">
          <p className="text-lg mb-4">Welcome, User!</p>
          <p className="text-sm text-gray-600">This is your profile page. You can view your information here.</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
