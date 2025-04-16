'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement & {
      name: { value: string };
      email: { value: string };
      password: { value: string };
    };
    
    const name = form.name.value;   
    const email = form.email.value;
    const password = form.password.value;

    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      router.push("/auth/signin");
    } else {
      const data = await res.json();
      setError(data.message || "Erreur lors de l'inscription");
    }
  };

  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl mb-4">Inscription</h1>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nom" className="mb-2 block w-full p-2 border" />
        <input type="email" name="email" placeholder="Email" className="mb-2 block w-full p-2 border" />
        <input type="password" name="password" placeholder="Mot de passe" className="mb-4 block w-full p-2 border" />
        <button type="submit" className="bg-green-500 text-white p-2 w-full">S'inscrire</button>
      </form>
    </div>
  );
}
