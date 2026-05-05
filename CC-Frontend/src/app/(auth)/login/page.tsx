"use client";

import type { FormEvent } from "react";
import { useRouter } from "next/navigation";
import styles from "./login.module.css";

export default function LoginPage() {
  const router = useRouter();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push("/dashboard");
  }

  return (
    <main className={styles.page}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.title}>User Login</h1>

        <div className={styles.field}>
          <label>Email Address</label>
          <input 
            type="email" 
            placeholder="name@company.com" 
            required 
          />
        </div>

        <div className={styles.field}>
          <label>Password</label>
          <input 
            type="password" 
            placeholder="••••••••" 
            required 
          />
        </div>

        <button type="submit" className={styles.button}>
          Sign In
        </button>
      </form>
    </main>
  );
}
