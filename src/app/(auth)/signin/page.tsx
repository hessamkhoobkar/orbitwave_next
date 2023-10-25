"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export default function SigninPage() {
  const router = useRouter();
  const supabase = createClientComponentClient();

  async function handleSignin() {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: "temp@gmail.com",
        password: "123456",
      });

      if (error) {
        console.error("Sign-in error:", error.message);
        // TODO:
        // handle error in UI
      } else {
        console.log("Sign-in successful", data);
        router.push("/");
      }
    } catch (error) {
      console.error("Error during sign-in:", error);
      // TODO:
      // handle error in UI
    }
  }

  return (
    <div>
      {/* Side info */}
      {/* Side Signin */}
      <p>Signin Page</p>
      <button onClick={handleSignin}>Login</button>
    </div>
  );
}
