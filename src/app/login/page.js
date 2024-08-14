"use client";
import React, { useEffect, useRef, useState } from "react";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../firebase/firebase";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
// import { useRouter } from "next/navigation";
import CustomizedSwitches from "../components/switch/index";
import {
  signInWithCredential,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useRouter } from "next/navigation";

function Login() {
  const [error, setError] = useState(null);

  const emailRef = useRef();
  const passwordRef = useRef();

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      const user = userCredential.user;
      localStorage.setItem("userEmail", user.email);

      router.push("/home");
    } catch (error) {
      console.log("login error", error);

      if (error.code === "auth/user-not-found") {
        setError("Account not found. Please check your email or sign up.");
      } else {
        setError("Invalid creadentials. Please try again.");
      }
    }

    console.log("formData", formData);
  };

  useEffect(() => {
    const user = localStorage.getItem("userEmail");
    console.log("user", user);
    if (user) router.push("/home");
    if (!user) router.push("/login");
  }, []);

  return (
    <div className="dark:bg-gray-800 bg-white flex items-center justify-center h-[100dvh]">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Login
            <CustomizedSwitches />
          </CardTitle>
          <CardDescription>
            Enter your credentials to continue...
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5 my-5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  ref={emailRef}
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  ref={passwordRef}
                  required
                />
              </div>
              {/* {error && <div className="text-red-500">{error}</div>} */}
              <Button type="submit" className="my-5 hover:bg-green-600">
                Login
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between gap-2">
          <CardTitle>Don&#39;t have an account?</CardTitle>
          <Link href="/signup">
            <Button className="hover:bg-green-600">Sign Up</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Login;
