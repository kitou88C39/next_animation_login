import { Inter } from '@next/font/google';
import Login from '@/pages/Login';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Login />
    </>
  );
}
