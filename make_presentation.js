const pptxgen = require("pptxgenjs");
const path = require("path");

const pptx = new pptxgen();
pptx.layout = "LAYOUT_16x9";

// Color Palette
const COLOR_PRIMARY = "14362B"; // Deep Forest
const COLOR_EMERALD = "1E5945"; // Emerald Green
const COLOR_ACCENT = "3A886C";  // Sage Accent
const COLOR_GOLD = "D4A373";    // Warm Gold
const COLOR_BG_LIGHT = "F7F9F7"; // Light Sage Background
const COLOR_WHITE = "FFFFFF";
const COLOR_TEXT = "12231B";

// --- Slide 1: Cover ---
const slide1 = pptx.addSlide();
slide1.background = { color: COLOR_PRIMARY };

slide1.addText("생성형 AI로 펼치는 새로운 커리어", {
  x: 0.8,
  y: 2.0,
  w: 11.5,
  h: 1.2,
  fontSize: 40,
  bold: true,
  color: COLOR_GOLD,
  fontFace: "맑은 고딕",
});

slide1.addText("실전 프롬프트 실습부터 나만의 포트폴리오 웹 구축까지", {
  x: 0.8,
  y: 3.3,
  w: 11.5,
  h: 0.8,
  fontSize: 24,
  color: COLOR_WHITE,
  fontFace: "맑은 고딕",
});

slide1.addShape(pptx.shapes.LINE, {
  x: 0.8,
  y: 4.3,
  w: 4.0,
  h: 0,
  line: { color: COLOR_GOLD, width: 3 },
});

slide1.addText("강사: 16년차 직업상담사 & AI 커리어 컨설턴트 임금희 (커리어숲)", {
  x: 0.8,
  y: 5.2,
  w: 11.5,
  h: 0.6,
  fontSize: 18,
  color: "A7F3D0",
  fontFace: "맑은 고딕",
});


// Helper for Header
function addHeader(slide, title, category = "실전 AI 활용 강의 교안") {
  slide.background = { color: COLOR_BG_LIGHT };
  
  slide.addText(category.toUpperCase(), {
    x: 0.8, y: 0.4, w: 10, h: 0.4,
    fontSize: 12, bold: true, color: COLOR_ACCENT, fontFace: "맑은 고딕"
  });
  
  slide.addText(title, {
    x: 0.8, y: 0.8, w: 11.5, h: 0.8,
    fontSize: 28, bold: true, color: COLOR_PRIMARY, fontFace: "맑은 고딕"
  });

  slide.addShape(pptx.shapes.LINE, {
    x: 0.8, y: 1.6, w: 11.7, h: 0,
    line: { color: "E2E8F0", width: 1 }
  });
}

// --- Slide 2: Instructor Profile ---
const slide2 = pptx.addSlide();
addHeader(slide2, "강사 소개: 임금희 커리어 컨설턴트");

slide2.addText("💡 \"사람과 AI를, 막막함과 가능성을 잇는 연결자(Connector)\"", {
  x: 0.8, y: 1.9, w: 11.5, h: 0.6,
  fontSize: 20, bold: true, color: COLOR_EMERALD, fontFace: "맑은 고딕"
});

const profileBoxes = [
  { title: "🤝 현장에서 사람 만나기", desc: "16년차 직업상담사\n신중년 & 소상공인 1:1 맞춤형 컨설팅 및 실전 강의 진행" },
  { title: "📚 AI로 콘텐츠 만들기", desc: "강의 교안 & 워크북 자체 제작\n수강생이 교육 후 바로 복습할 수 있는 가이드 제공" },
  { title: "💡 배운 걸 강의 & 앱에 녹이기", desc: "직접 개발하는 컨설턴트\n최신 AI 도구 검증 및 맞춤형 웹/앱 프론트엔드 구축" }
];

profileBoxes.forEach((box, i) => {
  slide2.addShape(pptx.shapes.RECTANGLE, {
    x: 0.8 + i * 4.0, y: 2.8, w: 3.7, h: 3.6,
    fill: { color: COLOR_WHITE }, line: { color: "CBD5E1", width: 1 }, r: 0.2
  });
  slide2.addText(box.title, {
    x: 1.0 + i * 4.0, y: 3.1, w: 3.3, h: 0.8,
    fontSize: 18, bold: true, color: COLOR_PRIMARY, fontFace: "맑은 고딕"
  });
  slide2.addText(box.desc, {
    x: 1.0 + i * 4.0, y: 4.0, w: 3.3, h: 2.2,
    fontSize: 14, color: "475569", fontFace: "맑은 고딕", lineSpacing: 22
  });
});

// --- Slide 3: Overview & Objectives ---
const slide3 = pptx.addSlide();
addHeader(slide3, "강의 개요 및 핵심 목표");

slide3.addShape(pptx.shapes.RECTANGLE, {
  x: 0.8, y: 2.0, w: 5.6, h: 4.5,
  fill: { color: COLOR_WHITE }, line: { color: COLOR_ACCENT, width: 2 }, r: 0.2
});
slide3.addText("🎯 핵심 교육 대상", { x: 1.1, y: 2.3, w: 5.0, h: 0.5, fontSize: 20, bold: true, color: COLOR_PRIMARY, fontFace: "맑은 고딕" });
slide3.addText("• 신중년 구직자: 수십 년 경력을 현대적 역량으로 재해석\n\n• 소상공인 사장님: 마케팅 문구 & 사업계획서 3초 자동화\n\n• 직업상담사/컨설턴트: 심층 상담일지 요약 등 행정 시간 절감", {
  x: 1.1, y: 3.0, w: 5.0, h: 3.2, fontSize: 15, color: "334155", fontFace: "맑은 고딕", lineSpacing: 24
});

slide3.addShape(pptx.shapes.RECTANGLE, {
  x: 6.8, y: 2.0, w: 5.7, h: 4.5,
  fill: { color: COLOR_PRIMARY }, r: 0.2
});
slide3.addText("🏆 3대 학습 달성 목표", { x: 7.1, y: 2.3, w: 5.1, h: 0.5, fontSize: 20, bold: true, color: COLOR_GOLD, fontFace: "맑은 고딕" });
slide3.addText("1. 프롬프트 작성 4단계 법칙 체득\n   (역할 - 상황 - 입력 - 지시)\n\n2. 현장 맞춤형 AI 실습 및 결과물 도출\n   (이력서 / SNS 마케팅 / 상담 요약)\n\n3. 나만의 브랜드 웹 구축 및 GitHub 연동\n   (Next.js 프로필 웹사이트 소장)", {
  x: 7.1, y: 3.0, w: 5.1, h: 3.2, fontSize: 15, color: COLOR_WHITE, fontFace: "맑은 고딕", lineSpacing: 24
});

// --- Slide 4: Curriculum ---
const slide4 = pptx.addSlide();
addHeader(slide4, "교육 커리큘럼 구성 (4개 모듈)");

const modules = [
  { num: "MOD 1", title: "AI 프롬프트 기초", desc: "• 프롬프트 작성 4단계 법칙\n• 생성형 AI와 다정하게 소통하기" },
  { num: "MOD 2", title: "대상별 실전 AI 활용", desc: "• 신중년 경력 재해석\n• 소상공인 마케팅 자동화\n• 상담 일지 요약 실습" },
  { num: "MOD 3", title: "나만의 브랜드 웹 설계", desc: "• 프로필 Q&A 브랜딩 설계\n• Next.js 모던 UI/UX 구축" },
  { num: "MOD 4", title: "클라우드 연동 및 배포", desc: "• GitHub CLI 브라우저 인증\n• 깃 커밋 & 푸시 원격 저장" }
];

modules.forEach((mod, i) => {
  slide4.addShape(pptx.shapes.RECTANGLE, {
    x: 0.8 + i * 3.0, y: 2.2, w: 2.7, h: 4.3,
    fill: { color: COLOR_WHITE }, line: { color: COLOR_EMERALD, width: 1.5 }, r: 0.2
  });
  slide4.addShape(pptx.shapes.RECTANGLE, {
    x: 0.8 + i * 3.0, y: 2.2, w: 2.7, h: 0.8,
    fill: { color: COLOR_EMERALD }, r: 0.2
  });
  slide4.addText(mod.num, { x: 0.8 + i * 3.0, y: 2.3, w: 2.7, h: 0.6, fontSize: 18, bold: true, color: COLOR_WHITE, align: "center", fontFace: "맑은 고딕" });
  slide4.addText(mod.title, { x: 1.0 + i * 3.0, y: 3.2, w: 2.3, h: 0.8, fontSize: 16, bold: true, color: COLOR_PRIMARY, fontFace: "맑은 고딕" });
  slide4.addText(mod.desc, { x: 1.0 + i * 3.0, y: 4.1, w: 2.3, h: 2.2, fontSize: 13, color: "475569", fontFace: "맑은 고딕", lineSpacing: 20 });
});

// --- Helper for Prompt Slide ---
function addPromptSlide(pptx, title, subtitle, promptText, benefitText) {
  const slide = pptx.addSlide();
  addHeader(slide, title, "실전 프롬프트 실습 사례");

  slide.addText(subtitle, { x: 0.8, y: 1.8, w: 11.5, h: 0.5, fontSize: 16, bold: true, color: COLOR_EMERALD, fontFace: "맑은 고딕" });

  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 0.8, y: 2.4, w: 7.5, h: 4.2,
    fill: { color: "1E293B" }, r: 0.2
  });
  slide.addText(promptText, {
    x: 1.1, y: 2.6, w: 6.9, h: 3.8,
    fontSize: 13, color: "E2E8F0", fontFace: "맑은 고딕", lineSpacing: 20
  });

  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 8.6, y: 2.4, w: 3.9, h: 4.2,
    fill: { color: COLOR_WHITE }, line: { color: COLOR_GOLD, width: 2 }, r: 0.2
  });
  slide.addText("💡 교육 및 현장 기대효과", { x: 8.9, y: 2.7, w: 3.3, h: 0.5, fontSize: 16, bold: true, color: COLOR_GOLD, fontFace: "맑은 고딕" });
  slide.addText(benefitText, { x: 8.9, y: 3.4, w: 3.3, h: 3.0, fontSize: 14, color: "334155", fontFace: "맑은 고딕", lineSpacing: 22 });
}

// --- Slide 5, 6, 7: Prompts ---
addPromptSlide(
  pptx,
  "📌 [실습 1] 신중년 재취업 이력서 강점 추출",
  "수십 년간의 성실한 근무 경험을 현대 기업이 선호하는 핵심 역량으로 재해석합니다.",
  "[역할] 당신은 16년차 베테랑 커리어 컨설턴트입니다.\n[상황] 수십 년간 현장에서 성실하게 근무해온 신중년 구직자의 경험 정리입니다.\n[입력] 나의 지나온 경력/활동: (예: 25년간 은행 영업점 근무 및 고객 상담, 은퇴 후 지역 봉사활동)\n[지시] 위 경험을 바탕으로 2026년 현대 기업이 선호하는 핵심 직무 역량 3가지를 도출하고, 이력서 자기소개서 첫 문장으로 바로 쓸 수 있는 문장을 작성해 주세요.",
  "• 거창한 경력이 아니더라도 일상 속 성실함이 AI와 만나면 훌륭한 브랜드가 됨을 체험\n\n• 구직자의 자존감 회복 및 이력서 작성 속도 극대화"
);

addPromptSlide(
  pptx,
  "📌 [실습 2] 소상공인 마케팅 홍보문구 자동화",
  "바쁜 사장님들을 위해 매장 특장점만 입력하면 3초 만에 감성 SNS 홍보글이 완성됩니다.",
  "[역할] 당신은 감성적인 브랜드 마케터입니다.\n[상황] 4050 세대와 MZ세대를 모두 사로잡고 싶은 동네 디저트 카페 사장님의 홍보문구 작성입니다.\n[입력] 매장명: 커리어숲 카페 / 대표 메뉴: 수제 쑥 라떼 / 핵심 강점: 매일 아침 직접 찧은 쑥과 유기농 우유 사용\n[지시] 인스타그램용 감성 문구와 함께 관련 타깃 해시태그 10개를 작성해 주세요. 친근하고 따뜻한 어조로 부탁합니다.",
  "• 매장의 대표 메뉴와 스토리 하나만 있으면 AI가 훌륭한 영업사원 역할을 수행\n\n• SNS 마케팅에 대한 심리적 장벽 해소"
);

addPromptSlide(
  pptx,
  "📌 [실습 3] 직업상담사 심층 상담 일지 요약",
  "상담 후 복잡한 내담자 기록을 신속하고 표준화된 양식으로 한눈에 정리합니다.",
  "[역할] 당신은 고용서비스 전문가입니다.\n[상황] 구직자와의 40분 심층 상담 대화 내용을 보고서 양식으로 요약 정리해야 합니다.\n[입력] 내담자 고민: 45세 여성, 10년 경단녀, 컴퓨터 활용에 두려움이 있으나 사회복지 분야 관심.\n[지시] 1. 내담자 핵심 요구사항 2. 추천 교육과정(디지털 기초+사회복지) 3. 다음 회기 실행 과제를 구분하여 요약해 주세요.",
  "• 행정 서류 시간을 획기적으로 절감\n\n• 절감된 시간만큼 내담자의 눈을 맞춰주는 따뜻한 진심 상담 시간에 집중 가능"
);

// --- Slide 8: Web App & Git Deployment ---
const slide8 = pptx.addSlide();
addHeader(slide8, "실전 웹 구축 및 GitHub 원격 배포 워크플로");

slide8.addShape(pptx.shapes.RECTANGLE, {
  x: 0.8, y: 2.0, w: 11.7, h: 4.5,
  fill: { color: COLOR_WHITE }, line: { color: "CBD5E1", width: 1 }, r: 0.2
});

const deploySteps = [
  { step: "STEP 1", title: "Next.js 브랜드 웹 구축", desc: "• 3D 아바타 & 커리어숲 테마\n• Profile Q&A 및 프롬프트 스튜디오\n• 1:1 상담 신청 모달 및 QR코드" },
  { step: "STEP 2", title: "GitHub CLI 브라우저 인증", desc: "• `gh auth login` 명령 실행\n• 8자리 일회성 코드(예: 4E5C-AEC4)\n• 브라우저 인가로 보안 로그인 완료" },
  { step: "STEP 3", title: "원격 저장소 깃 푸시", desc: "• `git push -u origin main` 실행\n• GitHub 소스 코드 안전 보관\n• [landingpage 저장소](https://github.com/moi02040924-oss/landingpage)" }
];

deploySteps.forEach((step, i) => {
  slide8.addShape(pptx.shapes.RECTANGLE, {
    x: 1.2 + i * 3.8, y: 2.4, w: 3.4, h: 3.7,
    fill: { color: COLOR_BG_LIGHT }, line: { color: COLOR_ACCENT, width: 1 }, r: 0.15
  });
  slide8.addText(step.step, { x: 1.4 + i * 3.8, y: 2.6, w: 3.0, h: 0.4, fontSize: 14, bold: true, color: COLOR_GOLD, fontFace: "맑은 고딕" });
  slide8.addText(step.title, { x: 1.4 + i * 3.8, y: 3.0, w: 3.0, h: 0.6, fontSize: 17, bold: true, color: COLOR_PRIMARY, fontFace: "맑은 고딕" });
  slide8.addText(step.desc, { x: 1.4 + i * 3.8, y: 3.7, w: 3.0, h: 2.2, fontSize: 13, color: "334155", fontFace: "맑은 고딕", lineSpacing: 20 });
});

// --- Slide 9: Closing ---
const slide9 = pptx.addSlide();
slide9.background = { color: COLOR_PRIMARY };

slide9.addText("막막했던 커리어에 새로운 가능성의 숲을 함께 만들어갑니다.", {
  x: 0.8, y: 2.2, w: 11.5, h: 1.0,
  fontSize: 32, bold: true, color: COLOR_GOLD, fontFace: "맑은 고딕"
});

slide9.addText("기술과 사람을 잇는 16년차 직업상담사 & AI 커리어 컨설턴트 임금희", {
  x: 0.8, y: 3.5, w: 11.5, h: 0.6,
  fontSize: 20, color: COLOR_WHITE, fontFace: "맑은 고딕"
});

slide9.addShape(pptx.shapes.LINE, {
  x: 0.8, y: 4.4, w: 4.0, h: 0,
  line: { color: COLOR_GOLD, width: 2 }
});

slide9.addText("🌐 공식 웹사이트: www.careerforest.co.kr   |   ✉️ 문의: careerforest@naver.com", {
  x: 0.8, y: 5.0, w: 11.5, h: 0.6,
  fontSize: 16, color: "A7F3D0", fontFace: "맑은 고딕"
});

// Write PPTX File
const outputPath = path.join("d:", "0000_최신5월", "실전_AI_활용_및_커리어_브랜딩_강의안.pptx");
pptx.writeFile({ fileName: outputPath }).then(() => {
  console.log("PPTX file successfully generated at: " + outputPath);
}).catch(err => {
  console.error("Error generating PPTX:", err);
});
