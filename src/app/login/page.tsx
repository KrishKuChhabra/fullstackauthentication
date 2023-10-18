"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import  axios  from "axios";
import { toast } from "react-hot-toast";

export default function LoginPage() {
  const router= useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    
  });
  const [buttonDisabled, setButtonDisabled]= React.useState(false)
  const[loading, setLoading]=React.useState(false);

  useEffect(()=>{
        if(user.email.length>0 && user.password.length>0){
          setButtonDisabled(false)
        }else{
          setButtonDisabled(true)
        }
  },[user])

  const onLoginUp = async () => {
      try {
         setLoading(true);
         const response=await axios.post("/api/users/login", user);
         console.log("Login Success", response.data);
         toast.success("Login Success")
         router.push("/profile")
      } catch (error:any) {
         console.log("Login Failed" , error.message);
         toast.error(error.message)
      }finally{
        setLoading(false)
      }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h2>{loading ? "processing..." : ""}</h2>
      <h1>Login</h1>
      <hr />
      <label htmlFor="email">email</label>
      <input
        className="p-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600  text-black"
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
        onClick={onLoginUp}
        className="p-2 border-gray-300 bg-emerald-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
      >
        Login
      </button>
      <Link href="/signup"> Visit SignUp Page</Link>
    </div>
  );
}
