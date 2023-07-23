"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";


export default function SignUpPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);

  const [loading, setLoading] = React.useState(false);

  const onSignUp = async () => {
    
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("signup success", response.data);
      router.push("/login");

    } catch (error: any) {
      console.log("signUp failed", error.meassge);
      toast.error(error.message);

    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>{loading ? "Processing....." : ""}</h1>
      <h1>SignUp</h1>
      <hr />
      <label htmlFor="username">username</label>
      <input
        className="p-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black "
        type="text"
        id="username"
        placeholder="username"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <label htmlFor="email">email</label>
      <input
        className="p-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black "
        type="email"
        id="email"
        placeholder="write your email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <label htmlFor="password">Password</label>
      <input
        className="p-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600  text-black"
        type="password"
        id="password"
        placeholder="write your password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />

      <button
        onClick={onSignUp}
        className="p-2 border-gray-300 bg-emerald-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
      >
        {buttonDisabled ? "No SignUp" : "SignUp"}
      </button>
      <Link href="/login"> Visit Login Page</Link>
    </div>
  );
}
