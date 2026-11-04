# Taegyun.log

Astro와 Markdown으로 이력서, 포트폴리오, 기술 글과 개발 회고를 운영하는 개인 사이트입니다.

## Commands

```bash
npm install
npm run dev
npm run build
```

게시글은 `src/data/blog`에서 Markdown으로 관리하며, 작성 형식은 `_draft-template.md`를 참고합니다. 주제는 `src/config.ts`에서 관리하고 `개발 회고`도 같은 글 목록에서 분류합니다.

`master` 브랜치에 푸시하면 GitHub Actions가 정적 사이트를 빌드해 GitHub Pages에 배포합니다.
