"use client";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
const Dashboard = () => {
  const { data: session } = useSession();
  return (
    <>
      <h1 className="text-3xl text-green-500 font-bold font-mono">
        {session?.user.name}
      </h1>
      <div className="w-screen h-screen text-5xl items-center justify-center font-bold font-mono">
        THIS IS THE DASHBOARD PAGE OF THE ENTIRE APP.
        <button
          className="border rounded-md bg-blue-400 text-white px-4 py-1 hover:bg-green-400"
          onClick={() => {
            signOut();
          }}
        >
          Signout
        </button>
      </div>
    </>
  );
};

export default Dashboard;
