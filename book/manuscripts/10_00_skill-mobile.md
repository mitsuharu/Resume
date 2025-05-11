# スキルセット（モバイルアプリ）

2009 年の iPhone 3GS 国内販売を機に、iOS アプリの開発を始めた。現在も業務として取り組んでいる。

| 種類 | 経験年数 | 備考 |
| :-- | :-- | :-- |
| iOS ネイティブ開発 | 2009年から | 個人および業務開発 |
| Flutter | 2019年から | 個人開発（最近は開発していない） |
| React Native | 2019年から | 個人および業務開発 |

## iOS ネイティブ開発

国内で iPhone 3GS が発売された 2009 年から個人で iOS アプリ開発を始めた。細々と開発していたが「Mac Fan（マイナビ出版、2009 年 11 月）」や「iPhone アプリ・クリエイターズファイル 2011-2012（翔泳社、2011 年 6 月）」で紹介された。はじめて iOS アプリで縦書き可能なエディタを開発した。その縦書きを利用して作成したネーム（漫画の下書き）アプリが、少し話題になった。

過去の個人開発アプリはメンテナンスの問題で多くを非公開にしている（それらアプリは当時の [個人ブログ](https://mthr.blogspot.com/search/label/program%3AiPhone) にてまとめている）。また、2015 年にオープンソースコンテスト「[第１回アイディア・アプリコンテスト宇部 アプリ部門](https://www.city.ube.yamaguchi.jp/shisei/keikaku/opendata/1007302.html)」に個人アプリを提出し最優秀賞を受賞した。

2012 年 7 月からシーサー株式会社（現 株式会社ファンコミュニケーションズ）に入社した。iOS アプリの業務開発を開始した。モバイルアプリ開発の事業部を立ち上げた時期で、一緒になって環境を作った。主に業務アプリなどの受託開発を行なった。一部の案件では、お客様と一緒に仕様策定にも携わった。代表的なものとして、入社すぐに、チケット販売会社の公式アプリを担当した。他社が開発した v1 を引き継ぎ、v2, v3 そして v4 とメジャーアップデートの開発を行なった。

2019 年 9 月から株式会社オトバンクに入社した。React Native でオーディオブック（書籍を朗読する音声データ）を再生・販売する iOS および Android アプリを開発した。React Native の他に、Swift や Kotlin で再生機能などのネイティブ機能の実装も行なった。

2022 年 6 月から株式会社ゆめみに入社した。iOS テックリードとして、開発チームの後方支援などを行う。Swift だけでなく、アプリと Web 技術を連携するため　JavaScript の開発も行う。

| 種類 | 言語やフレームワーク | 備考 |
| :-- | :-- |:-- |
| 言語 | Swift | |
| | Objective-C | 最近は利用していない |
| ライブラリ管理 | CocoaPods, Swift Package Manager | |
| | Carthage | 最近は利用していない |
| アーキテクチャ | MVVM, RxSwift, ReSwift | |
| CI | Bitrise, GitHub Actions | |

## Flutter

2019 年 3 月ごろから個人開発を開始した。クロスプラットフォーム開発は興味ありつつも、黎明期はパフォーマンスに問題があったため、懐疑的だった。しかし、Flutter を試すと、ネイティブ開発にはないホットリロードや宣言的 UI など、開発体験は非常によかった。

アプリをそれぞれのストアにリリースしたが、最近はメンテナンスをする時間がないので徐々に公開を下げている。ソースコードは GitHub で公開している。

- [flutter_marvel_app](https://github.com/mitsuharu/flutter_marvel_app)
  - https://github.com/mitsuharu/flutter_marvel_app
  - アメコミのマーベル社が API を公開しているのを知ったので衝動的に作った
  - Flutter で Redux Saga を動かす方法を知ったので、その動作検証も兼ねる
  - 最適な状態管理の手法は何かと採用に悩んだので、あまりコードは鮮麗されていない
- [flutter_tmdb_app](https://github.com/mitsuharu/flutter_tmdb_app)
  - https://github.com/mitsuharu/flutter_tmdb_app
  - はじめて作った Flutter アプリ
  - 映画データベース TMDb から直近の上映作品を検索する
  - 自身の趣味である映画鑑賞をサポートするために作った

| 種類 | 言語やフレームワーク | 備考 |
| :-- | :-- |:-- |
| 言語 | Dart | 最近は利用していない |

## React Native

2019 年 9 月の株式会社オトバンクに入社してから、React Native での開発を始めた。入社前まで React Native の開発経験はなく、当初は苦労した。Flutter の経験、ドキュメントや既存コードの読込み、React Native 自体のモダンな開発方法の登場もあり、理解を深めていった。宣言的 UI による開発を業務レベルで早々に実践できるというよい経験をしている。

React Native にはない iOS や Android 端末の独自機能を制御する Native Module の開発も行う。iPhone の Spotlight 検索、Siri Media Intents などの端末独自の機能を Swift で実装してアプリに組み込んだ。

現在は個人開発をしている。ソースコードは GitHub で公開している。

- [Ubepedia](https://github.com/mitsuharu/Ubepedia)
  - https://github.com/mitsuharu/Ubepedia
  - かつてオープンデータのコンテストで作成したアプリを React Native で書き直している
- [mobile-printer](https://github.com/mitsuharu/mobile-printer)
  - https://github.com/mitsuharu/mobile-printer
  - 業務用スマホ SUNMI V2 PRO および V2s 向けの印刷アプリ
- [react-native-sunmi-printer-library](https://github.com/mitsuharu/react-native-sunmi-printer-library)
  - https://github.com/mitsuharu/react-native-sunmi-printer-library
  - 上記の mobile-printer のネイティブモジュール
  - npm で一般公開している
- [react-native-search-with-spotlight](https://github.com/mitsuharu/react-native-search-with-spotlight)
  - https://github.com/mitsuharu/react-native-search-with-spotlight
  - React Native で Spotlight 検索を実現するためのネイティブモジュール
  - npm で一般公開している

| 種類 | 言語やフレームワーク | 備考 |
| :-- | :-- | :-- |
| 言語 | TypeScript | |
| パッケージ管理 | yarn | |
| アーキテクチャ | Redux Saga | |
