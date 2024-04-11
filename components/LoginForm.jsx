"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username");
    const password = formData.get("password");

    const response = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });

    if (!response.error) {
      router.replace("/dashboard");
    } else {
      console.log("Not Authenticated.");
    }
  };

  return (
    <div className="rounded-md shadow-md w-1/3 h-64 bg-[#EAF4D3]">
      <div className="h-3 rounded-t-md bg-blue-500"></div>
      <h2 className="text-green-500 px-5">Login Form</h2>
      <form
        onSubmit={handleSubmit}
        className="p-4 gap-8 flex flex-col items-center justify-center"
      >
        <label>
          Name
          <input
            className="ml-10 p-2 border-2 border-black/35 rounded-md"
            name="username"
            type="text"
          />
        </label>
        <label>
          Password
          <input
            className="ml-4 p-2 border-2 border-black/35 rounded-md"
            name="password"
            type="password"
          />
        </label>
        <button
          type="submit"
          className="border rounded-md bg-blue-400 text-white px-4 py-1 hover:bg-green-400"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
