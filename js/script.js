"use strict";

var arr=[];
var cf=[];
var currCl="";
var currRound="";
var lastCl=undefined;
var lastRound=undefined;

function initialDisabling(){
    disabling("btnNext");
    let code="{{llsifsonglist|type=";
    switch($$("ddlEvent")){
	case "0":
	    disabling("txtLow","txtHigh","ddlRound","ckIfMaster","ddlComment");
            $("ckIfMaster").checked=false;
            code=code.concat("as2|diff=easy,normal,hard,expert");
	    break;
	case "2":
	    disabling("txtLow","txtHigh","ddlRound","ckIfMaster","ddlComment");
	    $("ckIfMaster").checked=false;
	    code=code.concat("mf|diff=easy,normal,hard,expert");
	    break;
	case "1":
	    enabling("txtLow","txtHigh","ddlRound","ckIfMaster");
	    disabling("ddlComment");
	    code=code.concat("sm|diff=easy,normal,hard,expert,technical");
	    generateRounds(1);
	    break;
	case "3":
	    disabling("txtLow","txtHigh","ddlRound","ddlComment");
	    enabling("ckIfMaster");
	    code=code.concat("cm|diff=easy,normal,hard,expert");
	    break;
	case "4":
	    disabling("txtLow","txtHigh","ckIfMaster");
	    enabling("ddlRound","ddlComment");
	    $("ckIfMaster").checked=false;
	    code=code.concat("cf");
	    generateRounds(4);
	    break;
    }

    clearTable();
    adjustLvl();
    if($("ckIfMaster").checked){
        code=code.concat(",master");
    }
    let tb=$("tbOutput");
    tb.rows[0].innerHTML=code;
}

function initialSongList(){
    let oldLength=$("ddlSong").length;
    for(let i=oldLength;i>=0;i--){
	$("ddlSong").remove(i);
    }
    songs.forEach(function(song){
	if((song.group==$$("ddlGroup") || $$("ddlGroup")==0) && ($$("ddlCl")=="0" || song.cl.toLowerCase()==$$("ddlCl"))){
	    $("ddlSong").options.add(new Option(song.nm,song.id));
	}
    })
}

function generateCode(){
    let song=songs[$$("ddlSong")];
    let code='|';
    let addition='';
    currCl=song.cl.toLowerCase();
    if($$("ddlEvent")=="1" || $$("ddlEvent")=="4"){
	currRound=$$("ddlRound");
    }
    switch($$("ddlEvent")){
	case "0":
	case "2":
	case "3":
	    if(($("ckIsFirst").disabled==false && $("ckIsFirst").checked) || (lastCl && currCl!=lastCl)){
		code=code.concat(song.cl);
	    }
	    if(song.cover){
		if(song.cover.endsWith('.jpg')){
		    addition=addition.concat('|cover',$$("txtOrder"),'=',song.cover);
		    code=code.concat('|',song.nm.replace('=',"{{=}}"),'||||');
		}
		else{
		    code=code.concat('|',song.cover,'|||',song.nm.replace('=',"{{=}}"),'|');
		}
	    }
	    else{
		code=code.concat('|',song.nm.replace('=',"{{=}}"),'||||');
	    }
	    code=code.concat(song.exCombo,'|');
	    if($("ckIfMaster").checked){
		code=code.concat(song.maCombo,'||');
	    }
	    code=code.concat(song.mp3);
	    if(song.lk){
		code=code.concat('|lk',$$("txtOrder"),'=',song.lk);
	    }
	    code=code.concat(addition);
	    break;
	case "1":
	    let whitespace='|';
	    if(getInt("txtLow")>1){
		whitespace=whitespace.concat(getInt("txtLow")-1);
	    }
	    whitespace=whitespace.concat('|');
	    if(getInt("txtHigh")<5+$("ckIfMaster").checked){
		whitespace=whitespace.concat($$("txtHigh"));
	    }
	    if(($("ckIsFirst").disabled==false && $("ckIsFirst").checked) || (lastCl && currCl!=lastCl)){
                code=code.concat(song.cl);
            }
            if(song.cover){
                if(song.cover.endsWith('.jpg')){
                    addition=addition.concat('|cover',$$("txtOrder"),'=',song.cover);
                    code=code.concat('|',song.nm.replace('=',"{{=}}"),whitespace,'||');
                }
                else{
                    code=code.concat('|',song.cover,whitespace,'|',song.nm.replace('=',"{{=}}"),'|');
                }
            }
            else{
                code=code.concat('|',song.nm.replace('=',"{{=}}"),whitespace,'||');
            }
	    if(!lastRound || currRound!=lastRound){
                code=code.concat(currRound);
            }
	    code=code.concat('|',song.mp3);
	    if(song.lk){
                code=code.concat('|lk',$$("txtOrder"),'=',song.lk);
            }
            code=code.concat(addition);
            break;
	case "4":
	    if(($("ckIsFirst").disabled==false && $("ckIsFirst").checked) || (lastCl && currCl!=lastCl)){
                code=code.concat(song.cl);
            }
	    if(song.cover){
                if(song.cover.endsWith('.jpg')){
                    addition=addition.concat('|cover',$$("txtOrder"),'=',song.cover);
                    code=code.concat('|',song.nm.replace('=',"{{=}}"),'||');
                }
                else{
                    code=code.concat('|',song.cover,'|',song.nm.replace('=',"{{=}}"),'|');
                }
            }
            else{
                code=code.concat('|',song.nm.replace('=',"{{=}}"),'||');
            }
	    if(song.daily){
		code=code.concat("日替|");
	    }
	    else{
		code=code.concat($$("ddlComment"),'|');
	    }
	    if(!song.daily && $$("ddlComment")=="随机"){
		code=code.concat(song.exLevel2);
	    }
	    else{
		code=code.concat(song.exLevel1);
	    }
	    code=code.concat('|',song.exCombo,'|');
	    if(!lastRound || currRound!=lastRound){
                code=code.concat(currRound);
            }
	    code=code.concat('|',song.mp3);
            if(song.lk){
                code=code.concat('|lk',$$("txtOrder"),'=',song.lk);
            }
            code=code.concat(addition);
	    break;
    }
    let tb=$("tbOutput");
    let lastRow=tb.rows[tb.rows.length-1];
    lastRow.innerHTML=code;
    enabling("btnNext");
}

function clearTable(){
    let tb=$("tbOutput");
    let len=tb.rows.length;
    for(let i=len-1;i>1;i--){
	tb.deleteRow(i);
    }
    tb.rows[1].innerHTML="";
    enabling("ckIsFirst","txtOrder");
    disabling("btnNext");
    lastCl=undefined;
    lastRound=undefined;
    $("txtOrder").value=1;
    $("ckIsFirst").checked=true;
    $("ddlRound").selectedIndex=0;
    $("ddlComment").selectedIndex=0;
}

function nextRow(){
    let tb=$("tbOutput");
    tb.insertRow(-1);
    disabling("ckIsFirst","txtOrder","btnNext");
    lastCl=currCl;
    if($$("ddlEvent")=="1" || $$("ddlEvent")=="4"){
	lastRound=currRound;
    }
    $("txtOrder").value=getInt("txtOrder")+1;
    if(arr.length>=getInt("txtOrder")){
	let i=0;
	for(;i<songs.length;i++){
	    let input=arr[getInt("txtOrder")-1];
	    if(songs[i].nm.replace(/(!|\?|！|？|"|“|”|♡|♥|\*|＊|'|‘|’| |☆|・)/g,'').toLowerCase()==input.replace(/(!|\?|！|？|"|“|”|♡|♥|\*|＊|'|‘|’| |☆|・)/g,'').toLowerCase()){
                break;
            }
	}
	if(i<songs.length){
	    $("ddlGroup").selectedIndex=0;
	    $("ddlCl").selectedIndex=0;
	    initialSongList();
	    $("ddlSong").selectedIndex=i;
	    autoAdjustLvl();
	}
	else{
	    $("btnUpload").value="没有这首歌曲";
	}
    }
}

function ifMaster(){
    let tb=$("tbOutput");
    let startRow=tb.rows[0];
    if($("ckIfMaster").checked){
	startRow.innerHTML=startRow.innerHTML.concat(",master");
    }
    else{
	startRow.innerHTML=startRow.innerHTML.substring(0,startRow.innerHTML.length-7);
    }
    adjustLvl();
}

function generateRounds(r){
    let round=$("ddlRound");
    for(let i=round.options.length;i>=0;i--){
	round.remove(i);
    }
    switch(r){
	case 1:
	    round.options.add(new Option("前期",1));
	    round.options.add(new Option("中期",2));
	    break;
	case 4:
	    for(let i=1;i<=5;i++){
		round.options.add(new Option(`第${i}轮`,i));
	    }
	    break;
    }
}

function changeIfMaster(){
    let ck=$("ckIfMaster");
    if(ck.disabled==false){
	ck.checked=!(ck.checked);
        ifMaster();
    }
}

function changeIsFirst(){
    let ck=$("ckIsFirst");
    if(ck.disabled==false){
        ck.checked=!(ck.checked);
    }
}

function adjustLow(){
    if(getInt("txtLow")>getInt("txtHigh")){
	$("txtLow").selectedIndex=$("txtHigh").selectedIndex;
    }
}

function adjustHigh(){
    if(getInt("txtHigh")<getInt("txtLow")){
        $("txtHigh").selectedIndex=$("txtLow").selectedIndex;
    }
}

function adjustLvl(){
    let low=$("txtLow");
    let high=$("txtHigh");
    if($("ckIfMaster").checked){
	if(low.length<6){
	    low.options.add(new Option("MASTER",6));
	}
	if(high.length<6){
            high.options.add(new Option("MASTER",6));
        }
    }
    else{
        if(low.length>5){
            low.options.remove(5);
	}
        if(high.length>5){
            high.options.remove(5);
        }
    }
    low.selectedIndex=0;
    high.selectedIndex=3+($("ckIfMaster").checked)+($$("ddlEvent")=="1");
}

function endList(){
    let tb=$("tbOutput");
    tb.rows[tb.rows.length-1].innerHTML="}}";
}

function reUpload(){
    arr=[];
    enabling("btnUpload");
    $("btnUpload").value="生成歌曲列表";
    $("txtTable").value="";
}

function adjustRound(){
    let round=$("ddlRound");
    if(round.selectedIndex==round.length-1){
	disabling("btnNextRound");
    }
    else{
	enabling("btnNextRound");
    }
}

function nextRound(){
    let round=$("ddlRound");
    round.selectedIndex=round.selectedIndex+1;
    adjustRound();
}

function upload(){
    arr=[];
    cf=[];
    let lines=$$("txtTable").split('\n');
    lines.forEach(function(item){
	let tabs=item.split('\t');
	let song_comment=tabs[getInt("txtCol")-1].trim();
	if(song_comment=="Smile" || song_comment=="Pure" || song_comment=="Cool" || song_comment==""){
	    song_comment=tabs[getInt("txtCol")].trim();
	}
	if($$("ddlEvent")!="4"){
	    arr.push(song_comment.trim());
	}
	else{
	    song_comment=song_comment.split('（');
	    arr.push(song_comment[0].trim());
	    if(song_comment.length>1 && song_comment[1].trim()=="随机）"){
		cf.push(1);
	    }
	    else{
		cf.push(0);
	    }
	}
    });
    $("btnUpload").value=`已上传${arr.length}首歌曲`;
    disabling("btnUpload");
/*
    if(arr.length>=getInt("txtOrder")){
	let i=0;
        for(;i<songs.length;i++){
            if(songs[i].nm==arr[getInt("txtOrder")-1]){break;}
        }
        if(i<songs.length){
            $("ddlGroup").selectedIndex=0;
            $("ddlCl").selectedIndex=0;
            initialSongList();
            $("ddlSong").selectedIndex=i;
        }
    }
*/
//    if(arr.length>0 && ($$("ddlEvent")=="0" || $$("ddlEvent")=="2" || $$("ddlEvent")=="3")){
    if(arr.length>0){
	clearTable();
        let i=0;
        for(;i<songs.length;i++){
	    let input=arr[0];
            if(songs[i].nm.replace(/(!|\?|！|？|"|“|”|♡|♥|\*|＊|'|‘|’| |☆|・)/g,'').toLowerCase()==input.replace(/(!|\?|！|？|"|“|”|♡|♥|\*|＊|'|‘|’| |☆|・)/g,'').toLowerCase()){
		break;
	    }
        }
        if(i<songs.length){
            $("ddlGroup").selectedIndex=0;
            $("ddlCl").selectedIndex=0;
            initialSongList();
            $("ddlSong").selectedIndex=i;
	    autoAdjustLvl();
	    if($$("ddlEvent")=="4"){
		$("ddlComment").selectedIndex=cf[0];
	    }
	    generateCode();
        }
	else{
	    $("btnUpload").value="没有这首歌曲";
	    exit();
	}
	for(let j=1;j<arr.length;j++){
	    nextRow();
	    if($$("btnUpload")=="没有这首歌曲"){exit();}
	    let song=songs[$$("ddlSong")];
	    if(lastCl!="smile" && song.cl=="smile"){nextRound();}
	    if($$("ddlEvent")=="4"){
		$("ddlComment").selectedIndex=cf[j];
	    }
	    generateCode();
	}
	nextRow();
	endList();
    }
}

function autoAdjustLvl(){
    if($$("ddlEvent")=="1"){
	let song=songs[$$("ddlSong")];
	if(song.daily){
	    $("txtLow").selectedIndex=4;
	    $("txtHigh").selectedIndex=4;
	}
	else{
	    $("txtLow").selectedIndex=0;
	    $("txtHigh").selectedIndex=4+$("ckIfMaster").checked;
	}
    }
}
