# スキルセット

- モバイルアプリ開発に関して

| 種類 | 経験年数 | 備考 |
| :-- | :-- | :-- |
| iOS ネイティブ開発 | 2009年から | 個人および業務開発 |
| Flutter | 2019年から | 個人開発（最近は開発していない） |
| React Native | 2019年から | 個人および業務開発 |

- 機械学習に関して（最近は行っていない）

| 種類 | 経験年数 | 備考 |
| :-- | :-- | :-- |
| MCMC を用いた単眼画像からの姿勢復元 | 6年（大学・大学院）| |
| ブログ向け自然言語の解析 | 2年 （2017 〜 2019年）| 業務 |

## iOSアプリ開発

国内で iPhone 3GS が発売された 2009 年から個人で iOS アプリ開発を始めた。細々と開発していたが「Mac Fan（マイナビ出版、2009 年 11 月）」や「iPhone アプリ・クリエイターズファイル 2011-2012（翔泳社、2011 年 6 月）」で紹介された。個人開発で話題になったのは、はじめて iOS アプリで縦書き可能なエディタを開発し、その縦書きを利用したネーム（漫画の下書き）アプリを作成したことです。なお、過去の個人開発アプリはメンテナンスの問題で多くを非公開にしている（それらアプリは当時の [個人ブログ](https://mthr.blogspot.com/search/label/program%3AiPhone) にてまとめている）。2015 年にオープンソースコンテスト「[第１回アイディア・アプリコンテスト宇部 アプリ部門](https://www.city.ube.yamaguchi.jp/shisei/keikaku/opendata/1007302.html)」に個人アプリを提出し最優秀賞を受賞した。

2012 年 7 月、シーサー株式会社（現 株式会社ファンコミュニケーションズ）に入社して、iOS アプリの業務開発を開始した。モバイルアプリ開発の事業部を立ち上げた時期で、一緒になって環境を作った。主に業務アプリなどの受託開発を行なった。一部の案件では、仕様策定にも携わった。代表的なものとして、入社すぐに、チケット販売会社の公式アプリを担当した。他社が開発した v1 を引き継ぎ、v2, v3 そして v4 とメジャーアップデートの開発を行なった。

2019 年 9 月からは株式会社オトバンクに入社して、React Native でオーディオブック（書籍を朗読する音声データ）を再生・販売する iOS および Android アプリを開発した。React Native では実装できない再生機能などのネイティブ機能の実装（Swift や Kotlin）なども行なった。

### Flutter

2019 年 3 月ごろから個人開発を開始した。クロスプラットフォーム開発は興味ありつつも、クロスプラットフォーム開発の黎明期は高パフォーマンスのアプリに出会うことがなかったため、クロスプラットフォーム開発は個人的に慎重的であった。しかし、Flutter は試すと、ネイティブ開発にはないホットリロードや宣言的 UI など、開発体験は非常によかった。

アプリをそれぞれのストアにリリースしたが、最近はメンテナンスをする時間がないので徐々に公開を下げている。いまは公開済みアプリのメンテを中心に行っている。また、React Native の開発で得た宣言的 UI や state 管理の開発知識を利用して、不定期だが追加開発やリファクタリングを行っている。

- [mitsuharu/flutter_marvel_app](https://github.com/mitsuharu/flutter_marvel_app)
  - アメコミのマーベル社が API を公開しているのを知ったので衝動的に作った
  - Flutter で Redux saga を動かす方法を知ったので、その動作検証も兼ねる
  - 最適な状態管理の手法は何かと採用に悩んだので、あまりコードは鮮麗されていない
- [mitsuharu/flutter_tmdb_app](https://github.com/mitsuharu/flutter_tmdb_app)
  - はじめて作った Flutter アプリ
  - 映画データベース TMDb から直近の上映作品を検索する
  - 自身の趣味である映画鑑賞をサポートするために作った

### React Native

2019 年 9 月の株式会社オトバンクに入社してから、React Native での開発を始めた。入社前まで React Native の開発経験はなく、当初は苦労した。Flutter の経験、ドキュメントや既存コードの読込み、React Native 自体のモダンな開発方法の登場もあり、理解を深めていった。宣言的 UI による開発を業務レベルで早々に実践できるというよい経験をしている。

React Native にはない iOS や Android 端末の独自機能を制御する Native Module の開発も行う。iPhone の Spotlight 検索、Siri Media Intents などの端末独自の機能を Swift で実装してアプリに組み込んだ。現在は、開発はもちろんのこと、ライブラリの選定やアップデートなどのコードメンテも行っている。

- [mitsuharu/Ubepedia](https://github.com/mitsuharu/Ubepedia)
  - 個人開発のプロジェクト
  - かつてオープンデータのコンテストで作成したアプリを React Native で書き直している

### 開発言語・フレームワークのまとめ

- ネイティブ開発に関して

| 種類 | 言語やフレームワーク | 備考 |
| :-- | :-- |:-- |
| 言語 | Objective-C | 最近は利用していない |
| | Swift | 利用できる |
| ライブラリ管理 | CocoaPods | 問題なく開発できる |
| | Carthage | 利用できる |
| | Swift Package Manager | 利用できる |

- Flutter に関して

| 種類 | 言語やフレームワーク | 備考 |
| :-- | :-- |:-- |
| 言語 | Dart | 最近は利用していない |

- React Native に関して

| 種類 | 言語やフレームワーク | 備考 |
| :-- | :-- |:-- |
| 言語 | TypeScript | 利用できる |
| アーキテクチャ | Redux Saga | 利用できる |

## 機械学習

大学 4 年の研究室配属から大学院博士後期課程まで 6 年間、機械学習を用いた研究をしていた。当時はベイズ推定や MCMC などを用いた（MATLAB で研究開発した）。研究は、人と機械のインタフェースに興味あることから、単眼カメラからの 3 次元姿勢データの復元をテーマとして、国際会議などで発表した。しかしながら、アカデミック界のポストの無さや、ちょうど iPhone や Android が登場した時期でソフトウェア開発に興味を持ち始めたため、博士号は取らずに単位満期取得退学した。
  
当時の研究（一部）

>Mitsuharu Emoto, Akira Hayashi, Nobuo Suematsu, Kazunori Iwata, “View Independent Gait Identification Using a Particle Filter” Proc. 2006 IEEE International Conference on Video and Signal Based Surveillance

### 業務

2017 年から 2019 年まで、過去の研究経験から任されて、機械学習を用いたサービスの研究・開発を社内 1 人で行った。主にブログを対象とした自然言語を解析した。また、身近に機械学習を興味を持ってもらうために、機械学習や TensorFlow の [入門ハンズオン](https://github.com/mitsuharu/tensorflow_handson) のイベントを行うなどした。

## 課外活動
  
勉強会 [KyotoLT](https://kyotolt.connpass.com/) を主催・運営していた。

- シーサー株式会社に在籍した時、当時入居していた京都リサーチパーク内の IT 企業数社が集まって始めた勉強会
- 京都地区は tech 系コミュニティが少ないので、技術発表や交流を目的として不定期で活動していた

## 公開資料など

現在公開中の個人アプリ

- [App Store](https://apps.apple.com/jp/developer/mitsuharu-emoto/id322739939)
- [Google Play](https://play.google.com/store/apps/developer?id=Mitsuharu+Emoto)

公開しているソースコード

- [https://github.com/mitsuharu](https://github.com/mitsuharu)

その他、不定期で技術情報を発信している。 

- [Qiita](https://qiita.com/mitsuharu_e)
- [Speaker Deck](https://speakerdeck.com/mitsuharu)
- [PyPI](https://pypi.org/user/mitsuharu_e/)
- [Seesaa京都アプリエンジニアブログ](http://seesaakyoto.seesaa.net/)
  - シーサー株式会社に在籍時の技術ブログ
- [OTOBANK Engineering Blog](https://engineering.otobank.co.jp/archive/author/mitsuharu_e)
  - 株式会社オトバンクの技術ブログ（自身が投稿した記事のまとめ）
