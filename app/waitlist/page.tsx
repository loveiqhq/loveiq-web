'use client';

import { useRouter } from "next/navigation";
import WaitlistModal from "../../components/WaitlistModal";

export default function WaitlistPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#050208] text-white">
      <WaitlistModal open onClose={() => router.push("/")} />
    </div>
  );
}
