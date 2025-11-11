import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
function ProfileCard() {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden border">
      <div
        className="flex items-center justify-center h-24"
        style={{
          background:
            'linear-gradient(90deg, #008751 33%, #FFFFFF 33%, #FFFFFF 66%, #008751 66%)',
        }}
      >
        <div className="relative -bottom-10">
          <img
            src="./"
            alt="Lade"
            className="w-20 h-20 rounded-full border-4 border-white shadow-lg"
          />
        </div>
      </div>
      {/* Card Body */}
      <div className="py-8 px-6 flex flex-col items-center">
        <h2 className="text-xl font-bold">Gbemisola Ololade Victoria</h2>
        <p className="text-gray-500 text-sm">AI and Web Developer</p>
        <p className="text-gray-700 text-xs mb-4">Abeokuta, Nigeria</p>
        <div className="flex space-x-4 mb-4">
          <div className="bg-gray-100 rounded-lg shadow px-4 py-2 text-center border">
            <div className="text-lg font-semibold">10</div>
            <div className="text-xs text-gray-500">Followers</div>
          </div>
          <div className="bg-gray-100 rounded-lg shadow px-4 py-2 text-center border">
            <div className="text-lg font-semibold">02</div>
            <div className="text-xs text-gray-500">Posts</div>
          </div>
          <div className="bg-gray-100 rounded-lg shadow px-4 py-2 text-center border">
            <div className="text-lg font-semibold">20</div>
            <div className="text-xs text-gray-500">Likes</div>
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-6 text-center">
          Passionate about building impactful web experiences. Always learning!
        </p>
        {/* Follow Button */}
        <button className="bg-[#008751] text-white px-6 py-2 rounded-full shadow hover:bg-[#075F3C] transition">
          Follow
        </button>
      </div>
    </div>
  );
}
export default ProfileCard;


