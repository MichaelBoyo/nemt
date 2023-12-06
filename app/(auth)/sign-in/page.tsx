"use client";
import { useState } from "react";
import { Submit } from "~/components/Submit";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";

export default function SignIn() {
  const [payload, setPayload] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);

      const result = await signIn("credentials", {
        redirect: false,
        ...payload,
      });

      if (!result?.error) {
        // toast.error("Something went wrong, please check your credentials and try again");
      } else {
        router.push("/dash");
      }
    } catch (err) {
      console.log("Login error:", err);
      // toast.error('Login failed. Please try again later.');
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-1/2 flex flex-col  gap-10 p-36">
      <h1 className="text-bold text-3xl">Welcome back</h1>
      <p>
        Get ready to enjoy all the features and benefits we have to offer. It
        iss quick, easy, and free!
      </p>
      <form onSubmit={onSubmit} className="flex flex-col  gap-4  ">
        <input
          className="input input-bordered"
          name="email"
          type="email"
          placeholder="Email"
          value={payload.email}
          onChange={(e) => setPayload({ ...payload, email: e.target.value })}
        />
        <input
          className="input input-bordered"
          name="password"
          type="password"
          placeholder="******"
          value={payload.password}
          onChange={(e) => setPayload({ ...payload, password: e.target.value })}
        />
        <Link className="text-primary" href={"/forgot-password"}>
          Forgot password?
        </Link>
        <Submit loading={loading}>Sign In</Submit>
      </form>
    </div>
  );
}
