import type { NextPage } from "next";
import Link from "next/link";
import Title from "../components/title";

const Home: NextPage = () => {
  return (
    <div className="mx-auto flex h-screen max-w-[330px] flex-col items-center justify-center space-y-4">
      <Title title="Home" />
      {/* 로그인 버튼 */}
      <Link href="/login">
        <a className="mt-8 flex h-[3.688rem] w-full cursor-pointer items-center justify-center rounded bg-[#00e7ff] text-lg font-medium text-[#282e38] transition-all hover:opacity-90 md:h-14 md:text-base">
          로그인
        </a>
      </Link>
      {/* 로그인 버튼 */}

      <div className="my-6 h-px w-full bg-[rgba(255,255,255,0.38)] md:my-4" />

      {/* 회원가입 버튼 */}
      <Link href="/signup">
        <a className="flex h-[3.688rem] w-full items-center justify-center rounded bg-[#4a4e57] text-lg font-medium transition-all hover:opacity-90 md:h-14 md:text-base">
          회원가입
        </a>
      </Link>
      {/* 회원가입 버튼 */}
    </div>
  );
};

export default Home;
