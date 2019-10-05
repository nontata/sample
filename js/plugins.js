// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"YEP_CoreEngine","status":false,"description":"Yanfly Engine Scriptsの大元となる機能です。\r\nRPGツクールMVのバグを修正したり、様々なカスタムを行います。","parameters":{"---スクリーン---":"","Screen Width":"624","Screen Height":"816","Scale Battlebacks":"true","Scale Title":"true","Open Console":"false","Reposition Battlers":"true","---ゴールド---":"","Gold Max":"99999999","Gold Font Size":"20","Gold Icon":"313","Gold Overlap":"a lotta","---アイテム---":"","Default Max":"99","Quantity Text Size":"20","---ステータス---":"","Max Level":"99","Actor MaxHP":"9999","Actor MaxMP":"9999","Actor Parameter":"999","Enemy MaxHP":"999999","Enemy MaxMP":"9999","Enemy Parameter":"999","---バトル---":"","Animation Rate":"4","Flash Target":"false","---フォント---":"","Chinese Font":"SimHei, Heiti TC, sans-serif","Korean Font":"Dotum, AppleGothic, sans-serif","Default Font":"GameFont, Verdana, Arial, Courier New","Font Size":"28","Text Align":"left","---ウィンドウ---":"","Digit Grouping":"true","Line Height":"36","Icon Width":"32","Icon Height":"32","Face Width":"144","Face Height":"144","Window Padding":"18","Text Padding":"6","Window Opacity":"192","Gauge Outline":"true","Gauge Height":"18","Menu TP Bar":"true","---ウィンドウカラー---":"","Color: Normal":"0","Color: System":"16","Color: Crisis":"17","Color: Death":"18","Color: Gauge Back":"19","Color: HP Gauge 1":"20","Color: HP Gauge 2":"21","Color: MP Gauge 1":"22","Color: MP Gauge 2":"23","Color: MP Cost":"23","Color: Power Up":"24","Color: Power Down":"25","Color: TP Gauge 1":"28","Color: TP Gauge 2":"29","Color: TP Cost Color":"29"}},
{"name":"Community_Basic","status":true,"description":"基本的なパラメーターを設定するプラグインです。","parameters":{"cacheLimit":"20","screenWidth":"624","screenHeight":"816","changeWindowWidthTo":"","changeWindowHeightTo":"","renderingMode":"auto","alwaysDash":"off"}},
{"name":"MadeWithMv","status":false,"description":"メイン画面へ進む前に、\"Made with MV\"のスプラッシュ画面もしくはカスタマイズされたスプラッシュ画面を表示します。","parameters":{"Show Made With MV":"true","Made with MV Image":"MadeWithMv","Show Custom Splash":"false","Custom Image":"","Fade Out Time":"120","Fade In Time":"120","Wait Time":"160"}},
{"name":"AudioThroughIfMute","status":true,"description":"ミュート時の演奏省略プラグイン","parameters":{"音声無効スイッチ番号":"0"}},
{"name":"DTextPicture","status":true,"description":"動的文字列ピクチャ生成プラグイン","parameters":{}},
{"name":"Exhydra_OptionsMenu_ExtraOptions","status":true,"description":"[1.05] Additional options for the options menu.","parameters":{"─ Title Screen":"───────────────","Remove from Title Screen":"false","─ Game Menu":"───────────────","Remove from Game Menu":"true","─ Options Menu":"───────────────","Remove Always Dash":"true","Remove Command Remember":"true","Remove BGM Volume":"false","Remove BGS Volume":"false","Remove ME Volume":"false","Remove SE Volume":"false","─ Custom Options":"───────────────","Option 1 Label":"","Option 1 Type":"","Option 1 ID":"","Option 1 Default":"","Option 1 MinMax":"","Option 1 Hide":"","Option 2 Label":"","Option 2 Type":"","Option 2 ID":"","Option 2 Default":"","Option 2 MinMax":"","Option 2 Hide":"","Option 3 Label":"","Option 3 Type":"","Option 3 ID":"","Option 3 Default":"","Option 3 MinMax":"","Option 3 Hide":"","Option 4 Label":"","Option 4 Type":"","Option 4 ID":"","Option 4 Default":"","Option 4 Hide":"","Option 4 MinMax":"","Option 5 Label":"","Option 5 Type":"","Option 5 ID":"","Option 5 Default":"","Option 5 MinMax":"","Option 5 Hide":"","─ Plugin":"───────────────","Plugin GID":"eXa-JEuInwXq4chcgu9"}},
{"name":"ImageSmoothSetting","status":true,"description":"画像ぼかし個別設定プラグイン","parameters":{"アニメーション":"ON","戦闘背景":"ON","バトラー":"ON","フェイス":"ON","遠景":"ON","ピクチャ":"ON","タイトル":"ON","キャラクター":"OFF","システム":"OFF","タイルセット":"OFF","動的画像":"OFF"}},
{"name":"MOG_DestinationPointer","status":true,"description":"(v1.0) Permite customizar a imagem do cursor do destino.","parameters":{"X-Axis Offset":"0","Y-Axis Offset":"0","Smooth Movement":"true","Zoom Animation":"false","Blink Animation":"false","Float Animation":"true","Blend Mode":"0","Rotation Speed":"0","Number of Frames":"1","Animation Speed":"4"}},
{"name":"MOG_EventIndicators","status":true,"description":"(v1.0) Apresenta indicadores animados acima do evento.","parameters":{"Default Font Size":"16","Default X - Axis":"0","Default Y - Axis":"0"}},
{"name":"MOG_SceneMenu","status":true,"description":"(v1.2) Modifica a cena de menu principal.","parameters":{"Actor Hud X-Axis":"0","Actor Hud Y-Axis":"0","Char X-Axis":"20","Char Y-Axis":"0","HP Meter X-Axis":"17","HP Meter Y-Axis":"93","MP Meter X-Axis":"17","MP Meter Y-Axis":"144","HP Number X-Axis":"100","HP Number Y-Axis":"73","HPMax Number X-Axis":"140","HPMax Number Y-Axis":"100","MP Number X-Axis":"100","MP Number Y-Axis":"124","MPMax Number X-Axis":"140","MPMax Number Y-Axis":"151","Commands X-Axis":"180","Commands Y-Axis":"50","Command Active X-Axis":"40","Command Active Y-Axis":"148","Com Name Visible":"true","Com Name X-Axis":"40","Com Name Y-Axis":"96","Com Name FontSize":"22","Max Visible Faces":"5","Face Sel X-Axis":"240","Face Sel Y-Axis":"128","Gold X-Axis":"260","Gold Y-Axis":"580","Time X-Axis":"565","Time Y-Axis":"60","Time FontSize":"26","Location X-Axis":"450","Location Y-Axis":"575","Magic Circle Visible":"true","Magic Circle X-Axis":"700","Magic Circle Y-Axis":"140","Magic Circle Rotation":"0.001"}},
{"name":"MOG_VisualTimer","status":true,"description":"(v1.1) Apresenta o contador de tempo através de imagens.","parameters":{"Number Visible":"true","Gauge Visible":"true","X-Axis":"310","Y-Axis":"64","Seconds X-Axis":"132","Seconds Y-Axis":"0","Minutes X-Axis":"82","Minutes Y-Axis":"0","Gauge X-Axis":"11","Gauge Y-Axis":"34","Auto Fade":"true","Fade Max":"120","Gauge Angle":"0","Number Angle":"0"}},
{"name":"Mp3AudioManager","status":true,"description":"MP3オーディオ管理プラグイン","parameters":{"EXE実行で使用":"true","PCブラウザで使用":"true","モバイルブラウザで使用":"true","ファイル末尾で判断":"false","ループタグ情報":"","ループタグ単位":"ms"}},
{"name":"OggOnly","status":true,"description":"音声ファイルの再生にoggファイルのみを使用します。","parameters":{"deleteM4a":"false"}},
{"name":"SAN_AnalogMove","status":true,"description":"アナログムーブ 3.1.5\nパーティキャラクターの移動をドット移動に変更します。","parameters":{}},
{"name":"SceneGlossary","status":true,"description":"ゲーム内用語辞典プラグイン","parameters":{"GlossaryInfo":"[\"{\\\"GlossaryType\\\":\\\"1\\\",\\\"CommandName\\\":\\\"ずかん\\\",\\\"UseCategory\\\":\\\"false\\\",\\\"CommandSwitchId\\\":\\\"0\\\",\\\"BackPicture\\\":\\\"\\\",\\\"SelectAction\\\":\\\"0\\\",\\\"SelectSwitchId\\\":\\\"0\\\",\\\"SelectVariableId\\\":\\\"0\\\",\\\"ConfirmMessage\\\":\\\"false\\\",\\\"ConfirmUse\\\":\\\"使う\\\",\\\"ConfirmNoUse\\\":\\\"やめる\\\",\\\"GlossaryHelp\\\":\\\"ゲーム中に登場する用語を解説しています。\\\",\\\"CategoryHelp\\\":\\\"カテゴリを選択してください。\\\",\\\"ConfirmHelp\\\":\\\"\\\",\\\"UsingHelp\\\":\\\"\\\",\\\"CompleteView\\\":\\\"false\\\",\\\"CompleteMessage\\\":\\\"収集率 \\\\\\\\c[2]%1\\\\\\\\c[0] ％\\\",\\\"ShowingItemNumber\\\":\\\"false\\\",\\\"UsableDefault\\\":\\\"true\\\",\\\"UseItemHistory\\\":\\\"false\\\",\\\"GlossaryListWidth\\\":\\\"240\\\",\\\"VisibleItemNotYet\\\":\\\"？？？\\\"}\"]","Layout":"","FontSize":"22","AutoResizePicture":"true","PicturePosition":"top","PictureAlign":"center","PicturePriority":"top","ThroughBackPicture":"false","NewGlossaryColor":"2","PageWrap":"true","TextPosition":"0","AutoAddition":"true","SwitchAutoAdd":"0","VariableAutoAdd":"0","AutoAdditionEnemy":"false","CategoryOrder":"","CategoryUnusable":""}},
{"name":"TMBtnPicture","status":true,"description":"ピクチャをタップ（クリック）でコモンイベントを起動します。","parameters":{}},
{"name":"Torigoya_SaveCommand","status":true,"description":"プラグインコマンドからセーブを実行できるようにします。","parameters":{}},
{"name":"UseOnlyOneSave","status":true,"description":"単一セーブデータプラグイン","parameters":{"セーブメッセージ":""}},
{"name":"HIME_PreTitleEvents","status":true,"description":"Build your own sequence of events that should occur before\r\nthe title screen begins","parameters":{"Pre-Title Map ID":"2","Use As Title":"true"}},
{"name":"MousePointerExtend","status":true,"description":"マウスポインタ拡張プラグイン","parameters":{"形状タイプ1":"auto","スイッチ1":"0","形状タイプ2":"auto","スイッチ2":"0","形状タイプ3":"auto","スイッチ3":"0","形状タイプ4":"auto","スイッチ4":"0","形状タイプ5":"auto","スイッチ5":"0","デフォルト形状タイプ":"auto","独自画像1":"","独自画像2":"","独自画像3":"","独自画像4":"","独自画像5":"","キー入力で消去":"ON","ポインタファイルパス":""}}
];