import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Hello, Next.js with Supabase!</h1>
      <p>This is a simple starter template.</p>
      <button>
        <Link href="/dashboard">Go to Dashboard</Link>
      </button>
    </main>
  );
}
