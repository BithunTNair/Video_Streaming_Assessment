"use client";
import { useRouter } from "next/navigation";

export default function AuthComponent() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center mt-12">
      <div className="bg-white rounded-xl shadow-lg px-10 py-8 flex flex-col items-center space-y-6 w-full max-w-sm">
        <h2 className="text-2xl font-bold text-blue-700 mb-2">Welcome!</h2>
        <p className="text-gray-500 text-center mb-4">
          Please login or sign up to continue enjoying our video streaming service.
        </p>
        <div className="flex w-full gap-4">
          <button
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md shadow transition"
            onClick={() => router.push("/user/login")}
          >
            Login
          </button>
          <button
            className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-md shadow transition"
            onClick={() => router.push("/user/register")}
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}