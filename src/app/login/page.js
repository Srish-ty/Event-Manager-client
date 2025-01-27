"use client";
import React from "react";
import { signInWithGoogle } from "@/firebase/auth";

const LoginPage = () => {
  return (
    <div className="w-[50%] bg-[#79d9c9] mx-auto mt-10 py-8 flex flex-col items-center justify-between rounded-md">
      <h1 className="py-4 text-teal-800 font-bold text-xl">Sign In /Sign Up</h1>
      <button
        className="bg-red-300 my-6 py-4 px-10 rounded-md hover:bg-[#b83737]"
        onClick={() => {
          signInWithGoogle;
        }}
      >
        Sign In With Google
      </button>
    </div>
  );
};

export default LoginPage;
