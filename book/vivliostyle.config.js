module.exports = {
  title: '職務経歴書',
  author: '江本光晴',
  language: 'ja',
  size: 'A4',
  theme: [
    '@vivliostyle/theme-techbook@2.0.0',
    "@mitsuharu/vivliostyle-theme-noto-sans-jp",
    'theme/theme-custom',
  ],
  entry: [
    // 目次
    'index.md',

    // 自己紹介
    'profile.md',

    // スキルセット
    'skill-mobile.md',
    'skill-ml.md',

    // テクニカルノート
    'technote.md',

    // 個人開発
    'hobby.md',

    // 職務経歴
    'yumemi.md',
    'otobank.md',
    'seesaa.md',
    'others.md',
      
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
