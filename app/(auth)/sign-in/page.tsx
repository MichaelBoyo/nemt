"use client";
import { useState } from "react";
import { Submit } from "~/components/Submit";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";

export default function SignIn() {
  const [payload, setPayload] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [type, setType] = useState("password");
  const router = useRouter();
  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);

      const result = await signIn("credentials", {
        redirect: false,
        ...payload,
      });
      console.log("result", result);

      if (result?.error) {
        setErrorMessage(result.error);
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
        <div className="relative w-full">
          <input
            className="input input-bordered w-full"
            name="password"
            type={type}
            placeholder="******"
            value={payload.password}
            onChange={(e) =>
              setPayload({ ...payload, password: e.target.value })
            }
          />
          <button
            type="button"
            onClick={() => setType(type === "password" ? "text" : "password")}
            className="absolute right-2 top-4 "
          >
            {type === "password" ? <FaRegEye /> : <FaRegEyeSlash />}
          </button>
        </div>
        <Link className="text-primary" href={"/forgot-password"}>
          Forgot password?
        </Link>
        <Submit loading={loading}>Sign In</Submit>
        <p className="text-center text-error">{errorMessage}</p>
      </form>
    </div>
  );
}
