"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to dashboard when visiting /admin
    router.replace('/admin/dashboard');
  }, [router]);

  return null;
}