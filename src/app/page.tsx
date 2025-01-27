import HomePage from "@/components/Home";
import Link from 'next/link';
import Team from '@/app/team/page'
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';


export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <Link href="/"><HomePage /></Link>
    </div>
  );
}
