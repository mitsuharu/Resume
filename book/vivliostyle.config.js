module.exports = {
  title: '職務経歴書',
  author: '江本光晴',
  language: 'ja',
  size: 'A4',
  theme: [
    '@vivliostyle/theme-techbook',
    "@mitsuharu/vivliostyle-theme-noto-sans-jp",
    'theme/theme-custom',
  ],
  entry: [
    // 目次
    'index.md',
    // はじめに
    'preface.md',
    // 各章の原稿
    'sample_chapter.md',
    
    // 著者紹介
    'authors.md',
    // 奥付
    'colophon.md'
  ],
  entryContext: './manuscripts',
  output: [
    'output/resume.pdf',
  ],
  workspaceDir: '.vivliostyle',
  toc: false,
  cover: undefined,
}
