"use strict";
var songs = [];
var id = 0;

function initialData() {
    /*
    let songStorage=window.localStorage.getItem("songs");
        if(songStorage){
        songStorage=JSON.parse(songStorage);
        if(songStorage instanceof Array && songStorage.length>0){
            songs=songStorage;
            return;
        }
    }
    */
    initSongPool();
    // window.localStorage.setItem("songs",JSON.stringify(songs));
}

function initialSong(group, cl, cover, nm, exLevel1, exLevel2, exCombo, maLevel, maCombo, mp3, lk, daily, exLevel3, exPlusCombo) {
    let model = {
        id: id,
        cl: cl,
        cover: cover,
        nm: nm,
        exLevel1: exLevel1,
        exLevel2: exLevel2,
        exLevel3: exLevel3,
        exCombo: exCombo,
        exPlusCombo: exPlusCombo,
        maLevel: maLevel,
        maCombo: maCombo,
        mp3: mp3,
        lk: lk,
        daily: daily,
        group: group
    }
    let i = 0;
    for (; i < weight.length; i++) {
        if (weight[i].songname.replace(/(!|\?|！|？|"|“|”|♡|♥|\*|＊|'|‘|’| |☆|・|。)/g, '').toLowerCase() == nm.replace(/(!|\?|！|？|"|“|”|♡|♥|\*|＊|'|‘|’| |☆|・|。)/g, '').toLowerCase()) { break; }
    }
    if (i < weight.length) {
        model.weightEx = weight[i].songweightEX;
        model.weightMa = weight[i].songweightMA;
        model.weightExPlus = weight[i].songweightEXPlus;
    }
    songs[id] = model;
    id++;
}

function initSongPool() {

    // μ's 通常

    initialSong(1, "cool", "", "？←HEARTBEAT", "9", "9", "424", "12", "623", "m 126.mp3");
    initialSong(1, "smile", "A song for You! You? You!! cover preview.jpg", "A song for You! You? You!!", "10", "9", "497", "12", "865", "m 257.mp3");
    initialSong(1, "pure", "", "after school NAVIGATORS", "9", "10", "492", "12", "732", "m 026.mp3");
    initialSong(1, "smile", "", "Angelic Angel", "9", "10", "577", "11", "831", "m 080.mp3", "", "", "10", "602");
    initialSong(1, "pure", "LL2ndsingleB.jpg", "baby maybe 恋のボタン", "9", "9", "362", "11", "681", "m 004.mp3");
    initialSong(1, "smile", "Lovelive 2nd qj printemps.jpg", "CheerDay CheerGirl!", "9", "10", "480", "11", "671", "m 135.mp3");
    initialSong(1, "smile", "", "COLORFUL VOICE", "10", "10", "564", "11", "877", "m 074.mp3");
    initialSong(1, "smile", "Cutie Panther BiBi.jpg", "Cutie Panther", "10", "10", "509", "12", "800", "m 027.mp3");
    initialSong(1, "cool", "", "Dancing stars on me!", "10", "10", "453", "12", "701", "m 060.mp3");
    initialSong(1, "cool", "", "Daring!!", "10", "10", "467", "11", "609", "m 058.mp3");
    initialSong(1, "pure", "Dreamin’ Go! Go!!", "Dreamin' Go! Go!!", "10", "10", "499", "12", "711", "m 141.mp3");
    initialSong(1, "cool", "", "ENDLESS PARADE", "9", "10", "466", "11", "708", "m 140.mp3");
    initialSong(1, "pure", "", "Future style", "9", "", "456", "11", "640", "m 130.mp3");
    initialSong(1, "smile", "", "Happy maker!", "10", "10", "555", "12", "924", "m 066.mp3");
    initialSong(1, "smile", "Cover HEART to HEART.jpg", "HEART to HEART!", "10", "11", "581", "12", "960", "m 086.mp3");
    initialSong(1, "smile", "", "Hello,星を数えて", "10", "10", "428", "12", "657", "m 123.mp3");
    initialSong(1, "pure", "KiRa-KiRa Sensation!sif", "KiRa-KiRa Sensation!", "10", "11", "503", "12", "754", "m 062.mp3");
    initialSong(1, "pure", "", "Listen to my heart!!", "10", "10", "473", "11", "745", "m 023.mp3");
    initialSong(1, "cool", "", "LONELIEST BABY", "9", "10", "515", "12", "755", "m 043.mp3");
    initialSong(1, "smile", "LLPrintemps1st.jpg", "Love marginal", "10", "10", "498", "11", "691", "m 011.mp3");
    initialSong(1, "smile", "", "Love wing bell", "9", "10", "438", "12", "616", "m 057.mp3");
    initialSong(1, "cool", "", "LOVELESS WORLD", "10", "11", "550", "12", "771", "m 041.mp3");
    initialSong(1, "cool", "Jacket mermaid festa vol1.jpg", "Mermaid festa vol.1", "10", "10", "431", "12", "722", "m 006.mp3");
    initialSong(1, "smile", "LLFinalSingle.jpg", "MOMENT RING", "10", "10", "584", "11", "792", "m 100.mp3");
    initialSong(1, "pure", "LL SIM SP3CD1.jpg", "MUSEUMでどうしたい？", "9", "10", "470", "10", "670", "m 131.mp3");
    initialSong(1, "smile", "LL6thsingle.jpg", "Music S.T.A.R.T!!", "10", "11", "551", "12", "802", "m 039.mp3");
    initialSong(1, "cool", "", "No brand girls", "9", "9", "457", "11", "616", "m 030.mp3");
    initialSong(1, "cool", "", "NO EXIT ORION", "10", "10", "581", "11", "792", "m 101.mp3");
    initialSong(1, "smile", "LL5thsingleSideB", "Oh,Love&Peace!", "9", "9", "457", "11", "658", "m 010.mp3");
    initialSong(1, "cool", "", "Paradise Live", "10", "10", "509", "11", "761", "m 037.mp3");
    initialSong(1, "cool", "", "Private Wars", "9", "9", "377", "11", "543", "m 079.mp3");
    initialSong(1, "smile", "", "PSYCHIC FIRE", "10", "10", "584", "12", "994", "m 103.mp3");
    initialSong(1, "pure", "LLPrintemps2nd", "Pure girls project", "10", "10", "469", "12", "808", "m 034.mp3");
    initialSong(1, "pure", "", "SENTIMENTAL StepS", "9", "9", "370", "10", "548", "m 075.mp3");
    initialSong(1, "cool", "Jacket Lovelive shangrilashower.jpg", "Shangri-La Shower", "9", "9", "459", "10", "688", "m 106.mp3");
    initialSong(1, "cool", "", "Shocking Party", "9", "9", "324", "10", "447", "m 090.mp3");
    initialSong(1, "pure", "119157 BDf5q.jpg", "Silent tonight", "9", "9", "322", "10", "452", "m 139.mp3");
    initialSong(1, "cool", "LL2ndsingle", "Snow halation", "9", "9", "355", "11", "551", "m 003.mp3", "", "", "10", "424");
    initialSong(1, "smile", "Someday of my lifesif", "Someday of my life", "9", "9", "479", "11", "645", "m 052.mp3");
    initialSong(1, "smile", "START-DASH!!", "START:DASH!!", "10", "10", "495", "11", "695", "m 025.mp3");
    initialSong(1, "cool", "", "Storm in Lover", "10", "10", "494", "11", "678", "m 099.mp3");
    initialSong(1, "pure", "SUNNY DAY SONGsif", "SUNNY DAY SONG", "10", "11", "566", "12", "853", "m 082.mp3");
    initialSong(1, "cool", "", "Super LOVE=Super LIVE!", "10", "10", "599", "12", "991", "m 098.mp3");
    initialSong(1, "pure", "Sweet&Sweet Holiday", "sweet&sweet holiday", "9", "9", "471", "11", "750", "m 012.mp3");
    initialSong(1, "smile", "", "Trouble Busters", "10", "10", "579", "12", "864", "m 072.mp3");
    initialSong(1, "cool", "", "UNBALANCED LOVE", "9", "9", "435", "11", "697", "m 040.mp3");
    initialSong(1, "smile", "LLPrintemps4.jpg", "WAO-WAO Powerful day!", "10", "10", "592", "12", "952", "m 094.mp3");
    initialSong(1, "cool", "WILD STARSb", "WILD STARS", "9", "9", "476", "11", "719", "m 014.mp3");
    initialSong(1, "pure", "", "Wonder zone", "10", "10", "490", "11", "654", "m 031.mp3");
    initialSong(1, "cool", "Wonderful Rush LoveLive.jpg", "Wonderful Rush", "9", "9", "386", "11", "616", "m 009.mp3");
    initialSong(1, "cool", "", "ありふれた悲しみの果て", "9", "10", "358", "11", "439", "m 054.mp3");
    initialSong(1, "cool", "", "あ・の・ね・が・ん・ば・れ！", "9", "10", "431", "11", "608", "m 028.mp3");
    initialSong(1, "pure", "LLed1BK.jpg", "きっと青春が聞こえる", "10", "10", "491", "11", "633", "m 020.mp3");
    initialSong(1, "smile", "", "くるりんMIRACLE", "9", "9", "504", "11", "790", "m 092.mp3");
    initialSong(1, "pure", "", "これから", "9", "", "307", "11", "505", "m 142.mp3", "从今以后(LoveLive!)");
    initialSong(1, "smile", "", "これからのSomeday", "9", "10", "487", "11", "678", "m 024.mp3");
    initialSong(1, "pure", "", "さようならへさよなら！", "9", "9", "452", "11", "791", "m 104.mp3");
    initialSong(1, "cool", "", "ずるいよMagnetic today", "10", "11", "537", "12", "901", "m 089.mp3");
    initialSong(1, "pure", "", "そして最後のページには", "9", "9", "515", "11", "843", "m 111.mp3");
    initialSong(1, "smile", "LL2OPcover.jpg", "それは僕たちの奇跡", "10", "10", "460", "12", "634", "m 048.mp3");
    initialSong(1, "cool", "", "だってだって噫無情", "9", "11", "532", "11", "771", "m 070.mp3");
    initialSong(1, "pure", "LL2edcoverA.jpg", "どんなときもずっと", "9", "10", "445", "11", "563", "m 053.mp3");
    initialSong(1, "cool", "", "なってしまった！", "9", "9", "459", "11", "706", "m 259.mp3");
    initialSong(1, "pure", "", "ふたりハピネス", "9", "9", "492", "10", "600", "m 068.mp3");
    initialSong(1, "pure", "ぶる～べりぃ♥とれいん", "ぶる～べりぃ♡とれいん", "10", "11", "414", "12", "639", "m 056.mp3");
    initialSong(1, "smile", "LLPuwapuwa-o.jpg", "ぷわぷわーお！", "10", "10", "537", "12", "949", "m 105.mp3");
    initialSong(1, "smile", "", "まほうつかいはじめました！", "9", "10", "428", "11", "628", "m 073.mp3");
    initialSong(1, "smile", "", "もうひとりじゃないよ", "9", "9", "297", "10", "484", "m 076.mp3");
    initialSong(1, "pure", "Mogyutto \"love\"de Sekkin Chuu!.jpg", "もぎゅっと“love”で接近中！", "9", "9", "391", "11", "575", "m 007.mp3");
    initialSong(1, "pure", "", "もしもからきっと", "9", "9", "310", "10", "438", "m 083.mp3");
    initialSong(1, "pure", "", "るてしキスキしてる", "10", "10", "569", "11", "821", "m 110.mp3");
    initialSong(1, "pure", "", "キミのくせに！", "9", "9", "390", "10", "589", "m 036.mp3");
    initialSong(1, "smile", "", "シアワセ行きのSMILING!", "9", "9", "434", "11", "609", "m 081.mp3");
    initialSong(1, "smile", "", "ススメ→トゥモロウ", "10", "11", "474", "12", "690", "m 029.mp3");
    initialSong(1, "pure", "LLkotoriSingle1.jpg", "スピカテリブル", "10", "10", "544", "11", "675", "m 078.mp3");
    initialSong(1, "pure", "", "タカラモノズ", "10", "10", "499", "11", "735", "m 035.mp3");
    initialSong(1, "cool", "LLBIBI1ST.jpg", "ダイヤモンドプリンセスの憂鬱", "10", "9", "410", "11", "561", "m 032.mp3");
    initialSong(1, "pure", "Mi wa μ'sic no Mi.jpg", "ミはμ'sicのミ", "10", "10", "512", "11", "719", "m 093.mp3");
    initialSong(1, "pure", "LL DreamGate.jpg", "ユメノトビラ", "10", "11", "577", "12", "866", "m 055.mp3");
    initialSong(1, "smile", "", "ラブノベルス", "9", "9", "439", "10", "600", "m 022.mp3");
    initialSong(1, "smile", "LL SIM SP3CD3.jpg", "乙姫心で恋宮殿", "10", "10", "597", "12", "805", "m 136.mp3");
    initialSong(1, "smile", "", "僕たちはひとつの光", "9", "9", "494", "11", "658", "m 084.mp3");
    initialSong(1, "smile", "LL1stsingle", "僕らのLIVE 君とのLIFE", "9", "9", "348", "11", "697", "Sif m 001.mp3");
    initialSong(1, "smile", "LL1stOP.jpg", "僕らは今のなかで", "10", "10", "434", "11", "676", "m 013.mp3");
    initialSong(1, "cool", "Jacket lovelive fuyugakuretayokan.jpg", "冬がくれた予感", "9", "9", "429", "11", "629", "m 071.mp3");
    initialSong(1, "cool", "", "勇気のReason", "10", "11", "473", "12", "731", "m 061.mp3");
    initialSong(1, "pure", "LL1stSingleB.jpg", "友情ノーチェンジ", "9", "9", "359", "11", "640", "m 002.mp3");
    initialSong(1, "cool", "Jacket lovelive llwhoshi.jpg", "同じ星が見たい", "10", "10", "500", "11", "735", "m 138.mp3");
    initialSong(1, "smile", "", "夏、終わらないで。", "9", "9", "413", "10", "529", "m 038.mp3");
    initialSong(1, "smile", "Natsuiro Egao de 1,2,Jump!.jpg", "夏色えがおで1,2,Jump!", "9", "9", "370", "12", "786", "m 005.mp3");
    initialSong(1, "pure", "", "好きですが好きですか？", "10", "10", "596", "11", "841", "m 085.mp3");
    initialSong(1, "pure", "", "孤独なHeaven", "10", "11", "541", "12", "808", "m 046.mp3");
    initialSong(1, "cool", "", "小夜啼鳥恋詩", "9", "9", "375", "11", "685", "m 064.mp3");
    initialSong(1, "cool", "", "嵐のなかの恋だから", "10", "10", "533", "11", "735", "m 088.mp3");
    initialSong(1, "cool", "LLlilywhite2", "微熱からMystery", "10", "10", "530", "12", "813", "m 042.mp3");
    initialSong(1, "pure", "LLlilywhite4.jpg", "思い出以上になりたくて", "9", "", "306", "11", "509", "m 095.mp3");
    initialSong(1, "smile", "", "恋のシグナルRin rin rin!", "10", "10", "521", "11", "738", "m 065.mp3");
    initialSong(1, "smile", "LL4thsingleSideB.jpg", "愛してるばんざーい！", "9", "9", "302", "10", "457", "m 008.mp3");
    initialSong(1, "smile", "", "愛は太陽じゃない？", "9", "9", "383", "11", "627", "m 033.mp3");
    initialSong(1, "pure", "", "春情ロマンティック", "10", "10", "513", "11", "812", "m 102.mp3");
    initialSong(1, "cool", "LL SIM SP3CD2.jpg", "最低で最高のParadiso", "9", "9", "500", "10", "694", "m 137.mp3");
    initialSong(1, "smile", "永友封面.jpg", "永遠フレンズ", "9", "9", "532", "11", "750", "m 063.mp3");
    initialSong(1, "cool", "LLlilywhite1.jpg", "知らないLove＊教えてLove", "9", "9", "438", "10", "724", "m 015.mp3");
    initialSong(1, "cool", "LLwumisingle1.jpg", "私たちは未来の花", "10", "11", "559", "12", "915", "m 077.mp3");
    initialSong(1, "pure", "LLlilywhite3.jpg", "秋のあなたの空遠く", "10", "10", "458", "12", "702", "m 067.mp3");
    initialSong(1, "pure", "", "純愛レンズ", "10", "11", "550", "12", "815", "m 069.mp3");
    initialSong(1, "cool", "", "輝夜の城で踊りたい", "9", "9", "421", "11", "667", "m 021.mp3");
    initialSong(1, "cool", "LLBiBi4.jpg", "錯覚CROSSROADS", "9", "9", "500", "11", "707", "m 097.mp3");

    // μ's 日替

    initialSong(1, "cool", "Anemone heartsif", "Anemone heart", "11", "", "532", "12", "648", "m 045.mp3", "", true);
    initialSong(1, "cool", "", "Beat in Angel", "11", "", "598", "12", "851", "m 049.mp3", "", true);
    initialSong(1, "smile", "LLMFV2.jpg", "Mermaid festa vol.2 ～Passionate～", "11", "", "584", "12", "803", "m 016.mp3", "", true);
    initialSong(1, "cool", "soldier game cover.jpg", "soldier game", "11", "", "563", "12", "696", "m 019.mp3", "", true);
    initialSong(1, "pure", "", "なわとび", "9", "", "363", "11", "442", "m 047.mp3", "", true);
    initialSong(1, "smile", "", "にこぷり♡女子道", "11", "", "650", "12", "1061", "m 050.mp3", "", true);
    initialSong(1, "pure", "LLOtomeShikiCover.jpg", "乙女式れんあい塾", "11", "", "553", "12", "809", "m 017.mp3", "", true);
    initialSong(1, "pure", "Jacket lovelive kokuhaku.jpg", "告白日和、です！", "11", "", "579", "12", "823", "m 018.mp3", "", true);
    initialSong(1, "smile", "", "夢なき夢は夢じゃない", "11", "", "612", "12", "873", "m 044.mp3", "", true);
    initialSong(1, "pure", "", "硝子の花園", "11", "", "609", "12", "993", "m 051.mp3", "", true);

    // Aqours 通常

    initialSong(2, "pure", "Amazing Travel DNA.jpg", "Amazing Travel DNA", "9", "10", "443", "11", "653", "m 221.mp3");
    initialSong(2, "smile", "", "Aqours Pirates Desire", "9", "", "433", "11", "626", "m 270.mp3");
    initialSong(2, "smile", "", "Aqours☆HEROES", "10", "10", "515", "11", "686", "m 096.mp3");
    initialSong(2, "pure", "Awaken the power.jpg", "Awaken the power", "10", "10", "522", "12", "748", "m 170.mp3");
    initialSong(2, "smile", "BANZAI! digital trippers HD", "BANZAI! digital trippers", "10", "", "466", "", "", "");
    initialSong(2, "pure", "", "Beginner's Sailing", "9", "10", "551", "12", "961", "m 176.mp3");
    initialSong(2, "cool", "", "Believe again", "9", "", "464", "12", "820", "m 208.ogg");
    initialSong(2, "cool", "Braveheart Coaster.jpg", "Braveheart Coaster", "9", "9", "466", "12", "826", "m 220.mp3");
    initialSong(2, "pure", "", "Brightest Melody", "10", "10", "526", "12", "845", "m 207.ogg");
    initialSong(2, "pure", "", "CHANGELESS", "9", "", "364", "10", "510", "m 251.mp3");
    initialSong(2, "smile", "", "CRASH MIND", "9", "", "420", "11", "616", "m 186.mp3");
    initialSong(2, "pure", "", "Dance with Minotaurus", "10", "10", "515", "12", "787", "m 249.ogg");
    initialSong(2, "cool", "", "Daydream Warrior", "9", "10", "464", "12", "716", "m 143.mp3");
    initialSong(2, "cool", "", "Deep Resonance", "10", "", "537", "12", "820", "m 216.ogg");
    initialSong(2, "pure", "", "DREAMY COLOR", "10", "", "460", "12", "662", "");
    initialSong(2, "cool", "DROPOUT", "DROPOUT!?", "10", "10", "484", "12", "788", "m 187.mp3");
    initialSong(2, "cool", "", "Fantastic Departure!", "9", "", "364", "", "", "m 268.ogg");
    initialSong(2, "pure", "Future Flight.jpg", "Future Flight", "10", "", "429", "12", "663", "");
    initialSong(2, "smile", "AZALEA2NDSINGLE.jpg", "GALAXY HidE and SeeK", "9", "9", "419", "11", "626", "m 155.mp3");
    initialSong(2, "smile", "", "Guilty Eyes Fever", "9", "9", "426", "11", "573", "m 162.mp3");
    initialSong(2, "smile", "", "Guilty Night, Guilty Kiss!", "9", "9", "443", "11", "593", "m 117.mp3");
    initialSong(2, "smile", "Guilty!? Farewell party - Guilty Kiss", "Guilty!? Farewell party", "9", "9", "405", "11", "568", "m 211.ogg");
    initialSong(2, "pure", "", "G線上のシンデレラ", "10", "10", "520", "12", "728", "m 144.mp3");
    initialSong(2, "smile", "Happy party train", "HAPPY PARTY TRAIN", "10", "10", "498", "12", "723", "m 147.mp3");
    initialSong(2, "pure", "HopStopNonstop", "Hop? Stop? Nonstop!", "10", "10", "467", "12", "854", "m 206.ogg");
    initialSong(2, "pure", "", "i-n-g, I TRY!!", "10", "", "493", "11", "789", "m 217.mp3");
    initialSong(2, "cool", "", "in this unstable world", "9", "", "392", "11", "497", "m 175.mp3");
    initialSong(2, "cool", "", "INNOCENT BIRD", "9", "9", "439", "11", "666", "m 164.mp3");
    initialSong(2, "cool", "Jump up HIGH!!.jpg", "Jump up HIGH!!", "9", "", "341", "11", "642", "m 213.ogg");
    initialSong(2, "cool", "KU-RU-KU-RU Cruller! preview", "KU-RU-KU-RU Cruller!", "9", "", "382", "12", "640", "");
    initialSong(2, "pure", "Club cd cover.jpg", "Landing action Yeah!!", "10", "10", "537", "12", "757", "m 153.mp3");
    initialSong(2, "smile", "LIVE with a smile! (Aqours Ver.)", "LIVE with a smile!", "9", "", "499", "", "", "");
    initialSong(2, "cool", "LonelyTuning", "LONELY TUNING", "9", "9", "371", "12", "630", "m 161.ogg");
    initialSong(2, "cool", "", "Love Pulsar", "9", "", "409", "11", "676", "m 250.mp3");
    initialSong(2, "pure", "Marine Border Parasol cover.jpg", "Marine Border Parasol", "9", "9", "464", "11", "709", "m 201.ogg");
    initialSong(2, "smile", "", "MIRACLE WAVE", "10", "10", "455", "12", "801", "m 169.mp3");
    initialSong(2, "smile", "", "MIRAI TICKET", "10", "10", "536", "12", "792", "m 128.mp3");
    initialSong(2, "cool", "MY舞☆TONIGHT 1", "MY舞☆TONIGHT", "10", "11", "464", "12", "696", "m 168.mp3");
    initialSong(2, "smile", "Chika solo HD.jpg", "Never giving up!", "9", "", "373", "", "", "");
    initialSong(2, "smile", "New Romantic Sailors.jpg", "New Romantic Sailors", "10", "", "529", "12", "765", "m 219.mp3");
    initialSong(2, "smile", "", "New winding road", "9", "9", "387", "11", "538", "m 178.mp3");
    initialSong(2, "cool", "", "Next SPARKLING!!", "9", "9", "482", "11", "644", "m 204.ogg");
    initialSong(2, "cool", "", "No.10", "9", "", "318", "10", "475", "m 190.ogg");
    initialSong(2, "cool", "not ALONE not HITORI Miracle STAY TUNE! Shooting Voice!! A", "not ALONE not HITORI", "10", "", "471", "", "", "");
    initialSong(2, "smile", "", "One More Sunshine Story", "9", "", "466", "11", "653", "m 173.mp3");
    initialSong(2, "smile", "OverTheNextRainbow", "Over The Next Rainbow", "9", "9", "298", "11", "500", "m 209.ogg");
    initialSong(2, "pure", "", "P.S.の向こう側", "9", "9", "487", "11", "612", "m 160.ogg");
    initialSong(2, "cool", "Dia solo", "Perfect SEKAI", "10", "", "518", "", "", "");
    initialSong(2, "pure", "", "Phantom Rocket Adventure", "10", "", "392", "", "", "m 253.mp3");
    initialSong(2, "cool", "", "Pianoforte Monologue", "9", "9", "387", "10", "538", "m 181.mp3");
    initialSong(2, "smile", "Pops heartで踊るんだもん", "Pops heartで踊るんだもん！", "10", "10", "532", "11", "668", "m 125.mp3");
    initialSong(2, "cool", "Riko solo HD.jpg", "PURE PHRASE", "9", "", "365", "", "", "");
    initialSong(2, "pure", "", "RED GEM WINK", "9", "9", "434", "11", "644", "m 177.mp3");
    initialSong(2, "cool", "", "SELF CONTROL!!", "9", "", "387", "12", "556", "m 185.mp3");
    initialSong(2, "pure", "", "Shadow gate to love", "9", "9", "419", "11", "547", "m 165.mp3");
    initialSong(2, "smile", "Mari solo", "Shiny Racers", "10", "", "445", "", "", "");
    initialSong(2, "cool", "", "SKY JOURNEY", "9", "9", "423", "11", "542", "m 150.mp3");
    initialSong(2, "cool", "", "Step! ZERO to ONE", "10", "10", "584", "12", "772", "m 091.mp3");
    initialSong(2, "cool", "Llss gk cd01 cover.jpg", "Strawberry Trapper", "10", "10", "535", "12", "666", "m 116.mp3");
    initialSong(2, "smile", "SUKI for you, DREAM for you! sif", "SUKI for you, DREAM for you!", "10", "", "572", "", "", "");
    initialSong(2, "smile", "", "Thank you, FRIENDS!!", "9", "9", "370", "11", "625", "m 189.mp3");
    initialSong(2, "cool", "", "Wake up, Challenger!!", "10", "", "515", "", "", "");
    initialSong(2, "cool", "", "Waku-Waku-Week!", "10", "10", "508", "12", "769", "m 133.mp3");
    initialSong(2, "cool", "WATER BLUE NEW WORLD", "WATER BLUE NEW WORLD", "10", "10", "535", "12", "748", "m 171.mp3");
    initialSong(2, "cool", "", "WHITE FIRST LOVE", "9", "9", "396", "11", "607", "m 182.mp3");
    initialSong(2, "smile", "", "WONDERFUL STORIES", "9", "9", "514", "11", "812", "m 172.mp3");
    initialSong(2, "pure", "MY LIST to you", "“MY LIST” to you!", "9", "9", "342", "10", "440", "m 188.ogg");
    initialSong(2, "smile", "Hanamaru solo", "あこがれランララン", "9", "", "439", "", "", "");
    initialSong(2, "cool", "", "ある日…永遠みたいに！", "10", "", "493", "", "", "");
    initialSong(2, "smile", "", "おやすみなさん！", "9", "9", "427", "11", "595", "m 174.mp3");
    initialSong(2, "pure", "", "さかなかなんだか？", "10", "10", "496", "11", "796", "m 183.mp3");
    initialSong(2, "cool", "RRe", "ときめき分類学", "9", "9", "371", "11", "589", "m 115.mp3");
    initialSong(2, "pure", "Nando datte Yakusoku!.jpg", "なんどだって約束！", "9", "", "496", "", "", "");
    initialSong(2, "pure", "Kanan solo HD.jpg", "もっとね！", "9", "", "437", "", "", "");
    initialSong(2, "pure", "", "キセキヒカル", "9", "", "400", "11", "696", "m 179.mp3");
    initialSong(2, "pure", "Ruby solo", "コットンキャンディえいえいおー！", "9", "", "435", "", "", "");
    initialSong(2, "smile", "", "コドク・テレポート", "9", "", "333", "11", "527", "m 254.ogg");
    initialSong(2, "cool", "Cd16a", "コワレヤスキ", "10", "10", "529", "12", "780", "m 154.mp3");
    initialSong(2, "pure", "", "サクラバイバイ", "10", "10", "550", "12", "999", "m 212.ogg");
    initialSong(2, "smile", "", "サンシャインぴっかぴか音頭", "9", "9", "512", "12", "728", "m 149.mp3");
    initialSong(2, "smile", "", "シャゼリア☆キッス☆ダダンダーン", "10", "", "564", "12", "791", "");
    initialSong(2, "pure", "Jingle-Bell-ga-tomaranai.jpg", "ジングルベルがとまらない", "9", "9", "523", "12", "762", "m 132.mp3");
    initialSong(2, "cool", "スリリング・ワンウェイ", "スリリング・ワンウェイ", "10", "11", "592", "12", "840", "m 145.mp3");
    initialSong(2, "cool", "Yoshiko solo HD.jpg", "タテホコツバサ", "9", "", "439", "", "", "");
    initialSong(2, "cool", "", "ダイスキだったらダイジョウブ！", "9", "10", "447", "12", "615", "m 120.mp3");
    initialSong(2, "pure", "Llss azalea cd01 cover.jpg", "トリコリコPLEASE!!", "10", "10", "478", "12", "663", "m 114.mp3");
    initialSong(2, "smile", "ハジマリロード cover.jpg", "ハジマリロード", "10", "11", "513", "12", "933", "m 200.ogg");
    initialSong(2, "cool", "", "ハミングフレンド", "9", "9", "533", "11", "754", "m 148.mp3");
    initialSong(2, "smile", "Hot Step Wai!.jpg", "ホップ・ステップ・ワーイ！", "9", "", "478", "12", "722", "m 184.mp3");
    initialSong(2, "cool", "", "メイズセカイ", "10", "", "434", "12", "654", "m 255.ogg");
    initialSong(2, "pure", "", "ユメ+ミライ＝無限大", "9", "", "432", "", "", "");
    initialSong(2, "pure", "LACM-14540.jpg", "ユメ語るよりユメ歌おう", "9", "9", "471", "11", "657", "m 121.mp3");
    initialSong(2, "cool", "予測不可能Driving! cover.jpg", "予測不可能Driving!", "10", "10", "473", "12", "795", "m 202.ogg");
    initialSong(2, "smile", "", "僕らの走ってきた道は…", "10", "10", "417", "12", "722", "m 203.ogg");
    initialSong(2, "smile", "Llss cyaron cd01 cover.jpg", "元気全開DAY!DAY!DAY!", "10", "10", "592", "12", "749", "m 112.mp3");
    initialSong(2, "pure", "", "冒険Type A, B, C!!", "9", "", "480", "12", "691", "m 214.ogg");
    initialSong(2, "smile", "Cd20a", "勇気はどこに？君の胸に！", "9", "10", "402", "12", "634", "m 167.mp3", "", "", "10", "431");
    initialSong(2, "cool", "卒業ですね - AZALEA", "卒業ですね", "9", "9", "303", "12", "571", "m 210.ogg");
    initialSong(2, "pure", "Kimi no Kokoro wa Kagayaiteru kai Cover002.jpg", "君のこころは輝いてるかい？", "9", "10", "497", "12", "694", "m 087.mp3", "", "", "10", "509");
    initialSong(2, "cool", "", "君の瞳を巡る冒険", "9", "9", "458", "11", "608", "m 180.mp3");
    initialSong(2, "pure", "", "夜空はなんでも知ってるの？", "9", "9", "415", "11", "568", "m 113.mp3");
    initialSong(2, "pure", "", "夢で夜空を照らしたい", "9", "9", "393", "10", "539", "m 122.mp3");
    initialSong(2, "smile", "", "太陽を追いかけろ！", "9", "9", "476", "11", "674", "m 146.mp3");
    initialSong(2, "pure", "", "少女以上の恋がしたい", "9", "9", "498", "12", "768", "m 151.mp3");
    initialSong(2, "smile", "", "届かない星だとしても", "10", "10", "563", "12", "777", "m 109.mp3");
    initialSong(2, "pure", "", "待ってて愛のうた", "9", "9", "466", "11", "603", "m 108.mp3");
    initialSong(2, "cool", "恋になりたい AQUARIUM.jpg", "恋になりたいAQUARIUM", "9", "10", "544", "12", "889", "m 107.mp3");
    initialSong(2, "cool", "", "想いよひとつになれ", "9", "10", "494", "12", "717", "m 127.mp3");
    initialSong(2, "smile", "Mitaiken horizon.jpg", "未体験HORIZON", "9", "", "450", "12", "691", "m 215.ogg");
    initialSong(2, "pure", "Cd19a", "未来の僕らは知ってるよ", "10", "11", "518", "12", "692", "m 166.mp3");
    initialSong(2, "pure", "", "未熟DREAMER", "9", "9", "318", "10", "445", "m 124.mp3");
    initialSong(2, "smile", "決めたよHand In Hand", "決めたよHand in Hand", "10", "11", "569", "12", "805", "m 118.mp3");
    initialSong(2, "pure", "", "海岸通りで待ってるよ", "9", "9", "496", "11", "668", "m 163.mp3");
    initialSong(2, "pure", "", "涙×", "9", "", "382", "", "", "");
    initialSong(2, "pure", "", "空も心も晴れるから", "9", "9", "343", "10", "444", "m 129.mp3");
    initialSong(2, "smile", "Kuuchuu Renai Ron", "空中恋愛論", "9", "", "329", "11", "576", "m 252.mp3");
    initialSong(2, "pure", "You solo HD", "突然GIRL", "10", "", "500", "", "", "");
    initialSong(2, "cool", "", "聖なる日の祈り", "9", "9", "408", "11", "530", "m 134.mp3");
    initialSong(2, "smile", "Cd14a", "近未来ハッピーエンド", "9", "10", "576", "12", "900", "m 152.mp3");
    initialSong(2, "smile", "", "逃走迷走メビウスループ", "9", "", "497", "11", "695", "m 205.ogg");
    initialSong(2, "smile", "LACM-14500.jpg", "青空Jumping Heart", "10", "10", "471", "12", "681", "m 119.mp3 ");

    // Aqours 日替

    initialSong(2, "cool", "", "Misty Frosty Love", "10", "", "561", "", "", "", "", true);
    initialSong(2, "smile", "Party! Party! PaPaPaParty! sif", "Party! Party! PaPaPaParty!", "11", "", "494", "", "", "", "", true);
    initialSong(2, "cool", "心情与梦想都是一样的！sif", "キモチもユメも一緒だね！", "11", "", "686", "", "", "", "", true);
    initialSong(2, "pure", "", "地元愛♡満タン☆サマーライフ", "11", "", "698", "", "", "m 158.mp3", "", true);
    initialSong(2, "cool", "", "夏の終わりの雨音が", "11", "", "656", "", "", "m 159.mp3", "", true);
    initialSong(2, "pure", "", "夏への扉 Never end ver.", "11", "", "564", "", "", "m 156.mp3", "", true);
    initialSong(2, "pure", "在泪水化为雪花之前", "涙が雪になる前に", "10", "", "589", "", "", "", "", true);
    initialSong(2, "smile", "", "真夏は誰のモノ？", "11", "", "630", "", "", "m 157.mp3", "", true);

    // 其他

    initialSong(2, "smile", "Shadowverse OST vol 2", "大いなる決闘", "9", "", "550", "", "", "m 218.ogg");
    initialSong(2, "smile", "", "オラはにんきもの 2019MIX", "9", "", "154", "10", "261", "m 293.mp3");
}
