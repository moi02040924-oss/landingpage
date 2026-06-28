import { Outfit, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-noto",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.careerforest.co.kr"),
  title: "임금희 커리어 컨설턴트 | 16년차 직업상담사 & AI 활용 전문가",
  description: "16년차 직업상담사이자, 신중년·소상공인이 AI와 친해지도록 돕는 커리어 컨설턴트 임금희입니다. (커리어숲 www.careerforest.co.kr)",
  keywords: ["임금희", "커리어컨설턴트", "직업상담사", "커리어숲", "AI교육", "신중년컨설팅", "소상공인AI"],
  openGraph: {
    title: "임금희 커리어 컨설턴트 | 커리어숲",
    description: "사람과 AI를, 막막함과 가능성을 잇는 16년차 커리어 전문가",
    url: "https://www.careerforest.co.kr",
    siteName: "커리어숲",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "임금희 커리어 컨설턴트 | 커리어숲 Open Graph 대표 이미지",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={`${outfit.variable} ${notoSansKR.variable}`}>
      <body>{children}</body>
    </html>
  );
}

