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
    '00_00_profile.md',

    // スキルセット
    '10_00_skill-mobile.md',
    '10_01_skill-ml.md',

    // テクニカルノート
    '20_00_technote.md',

    // 個人開発
    '30_00_hobby.md',

    // 職務経歴
    '50_02_yumemi.md',
    '50_01_otobank.md',
    '50_00_seesaa.md',
    // '50_99_others.md',
      
    // 奥付
    '99_00_colophon.md'
  ],
  entryContext: './manuscripts',
  output: [
    'output/resume.pdf',
  ],
  workspaceDir: '.vivliostyle',
  toc: false,
  cover: undefined,
}
