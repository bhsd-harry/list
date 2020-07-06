"use strict";

var arr=[];
var cf=[];
var lvl=[];
var combo=[];
var currCl="";
var currRound="";
var lastCl=undefined;
var lastRound=undefined;

function initialDisabling(){
    disabling("btnNext");
    let code="{{llsifsonglist|type=";
    switch($$("ddlEvent")){
	case "0":
	    disabling("txtLow","txtHigh","btnBack1","btnBack2","ddlRound","btnNextRound","ckIfMaster","ddlComment");
            $("ckIfMaster").checked=false;
            code=code.concat("as2|diff=easy,normal,hard,expert");
	    break;
	case "2":
	    disabling("txtLow","txtHigh","btnBack1","btnBack2","ddlRound","btnNextRound","ckIfMaster","ddlComment");
	    $("ckIfMaster").checked=false;
	    code=code.concat("mf|diff=easy,normal,hard,expert");
	    break;
	case "1":
	    enabling("txtLow","txtHigh","btnBack1","btnBack2","ddlRound","btnNextRound","ckIfMaster");
	    disabling("ddlComment");
	    code=code.concat("sm|diff=easy,normal,hard,expert,technical");
	    adjustLvl();
	    generateRounds(1);
	    break;
	case "3":
	    disabling("txtLow","txtHigh","btnBack1","btnBack2","ddlRound","btnNextRound","ddlComment");
	    enabling("ckIfMaster");
	    code=code.concat("cm|diff=easy,normal,hard,expert");
	    break;
	case "4":
	    disabling("txtLow","btnBack1","btnBack2");
	    enabling("txtHigh","ckIfMaster","ddlRound","btnNextRound","ddlComment");
	    $("ckIfMaster").checked=true;
	    code=code.concat("cf");
	    generateRounds(4);
	    break;
	case "5":
	    disabling("ddlRound","btnNextRound","ddlComment");
	    enabling("txtLow","txtHigh","btnBack1","btnBack2","ckIfMaster");
	    $("ckIfMaster").checked=true;
	    code=code.concat("rc|diff=easy,normal,hard,expert");
	    adjustLvl();
	    break;
    }

    clearTable();
    adjustLvl();
    if($("ckIfMaster").checked){
        if($$("ddlEvent")=="4"){
	    code=code.concat("|diff=master");
	}
	else{
	    code=code.concat(",master");
	}
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
    let exCombo=0;
    currCl=song.cl.toLowerCase();
    if($$("ddlEvent")=="1" || $$("ddlEvent")=="4"){
	currRound=$$("ddlRound");
    }
    if(combo.length>=getInt("txtOrder")){
	exCombo=combo[getInt("txtOrder")-1];
    }
    else{
	exCombo=song.exCombo;
    }
    switch($$("ddlEvent")){
	case "0":
	case "2":
	case "3":
	    if(($("ckIsFirst").disabled==false && $("ckIsFirst").checked) || (lastCl && currCl!=lastCl)){
		code=code.concat(song.cl);
	    }
	    if(song.cover){
		code=code.concat('|',song.cover,'|||',song.nm.replace('=',"{{=}}"),'|');
	    }
	    else{
		code=code.concat('|',song.nm.replace('=',"{{=}}"),'||||');
	    }
	    code=code.concat(exCombo,'|');
	    if($("ckIfMaster").checked){
		code=code.concat(song.maCombo,'||');
	    }
	    code=code.concat(song.mp3);
	    if(song.lk){
		code=code.concat('|lk',$$("txtOrder"),'=',song.lk);
	    }
	    break;
	case "1":
	case "5":
	    let whitespace='|';
	    if(getInt("txtLow")>1){
		whitespace=whitespace.concat($("txtLow").selectedIndex);
	    }
	    whitespace=whitespace.concat('|');
	    if(getInt("txtHigh")<4+($$("ddlEvent")=="1")+$("ckIfMaster").checked){
		whitespace=whitespace.concat($$("txtHigh"));
	    }
	    if(($("ckIsFirst").disabled==false && $("ckIsFirst").checked) || (lastCl && currCl!=lastCl)){
                code=code.concat(song.cl);
            }
            if(song.cover){
                code=code.concat('|',song.cover,whitespace,'|',song.nm.replace('=',"{{=}}"));
            }
            else{
                code=code.concat('|',song.nm.replace('=',"{{=}}"),whitespace,'|');
            }
	    if($$("ddlEvent")=="1"){
		code=code.concat('|');
	        if(!lastRound || currRound!=lastRound){
                    code=code.concat(currRound);
		}
            }
	    code=code.concat('|',song.mp3);
	    if(song.lk){
                code=code.concat('|lk',$$("txtOrder"),'=',song.lk);
            }
            break;
	case "4":
	    if(($("ckIsFirst").disabled==false && $("ckIsFirst").checked) || (lastCl && currCl!=lastCl)){
                code=code.concat(song.cl);
            }
	    if(song.cover){
                code=code.concat('|',song.cover,'|',song.nm.replace('=',"{{=}}"),'|');
            }
            else{
                code=code.concat('|',song.nm.replace('=',"{{=}}"),'||');
            }
	    if(song.daily){
		code=code.concat("日替|");
	    }
	    else if(getInt("txtHigh")==6){
		code=code.concat("MASTER|");
	    }
	    else{
		code=code.concat($$("ddlComment"),'|');
	    }
	    if(lvl.length>=getInt("txtOrder")){
		code=code.concat(lvl[getInt("txtOrder")-1]);
	    }
	    else{
		if($$("txtHigh")==6){
		    code=code.concat(song.maLevel);
		}
	        else if(!song.daily && $$("ddlComment")=="随机"){
		    code=code.concat(song.exLevel2);
	        }
                else if(!song.daily && $$("ddlComment")=="滑键"){
                    code=code.concat(song.exLevel3);
                }
	        else{
		    code=code.concat(song.exLevel1);
		}
	    }
	    if(!$("ckIfMaster").checked){
		code=code.concat('|',exCombo,'|');
	    }
	    else{
		if($$("txtHigh")==6){
		    code=code.concat('|',song.maCombo,'|',song.weightMa,'|');
		}
		else if($$("ddlComment")=="滑键"){
		    code=code.concat('|',song.exPlusCombo,'|',song.weightExPlus,'|');
		}
		else{
		    code=code.concat('|',exCombo,'|',song.weightEx,'|');
		}
	    }
	    if(!lastRound || currRound!=lastRound){
                code=code.concat(currRound);
            }
	    code=code.concat('|',song.mp3);
            if(song.lk){
                code=code.concat('|lk',$$("txtOrder"),'=',song.lk);
            }
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
	    if(songs[i].nm.replace(/(!|\?|！|？|"|“|”|♡|♥|\*|＊|'|‘|’| |☆|・|。)/g,'').toLowerCase()==input.replace(/(!|\?|！|？|"|“|”|♡|♥|\*|＊|'|‘|’| |☆|・|。)/g,'').toLowerCase()){
                break;
            }
	}
	if(i<songs.length){
	    $("ddlGroup").selectedIndex=0;
	    $("ddlCl").selectedIndex=0;
	    initialSongList();
	    $("ddlSong").selectedIndex=i;
	    autoAdjustLvl();
	    if(lastCl!="smile" && songs[i].cl=="smile"){nextRound();}
	}
	else{
	    alert("没有这首歌曲");
	    exit;
	}
    }
    else{
	if(alertFlag==0){
	    alert("超过上传的歌曲数");
	    alertFlag=1;
	}
    }
}

function ifMaster(){
    let tb=$("tbOutput");
    let startRow=tb.rows[0];
    if($("ckIfMaster").checked){
	if($$("ddlEvent")=="4"){
	    startRow.innerHTML=startRow.innerHTML.concat("|diff=master");
	}
	else{
	    startRow.innerHTML=startRow.innerHTML.concat(",master");
	}
    }
    else{
	if($$("ddlEvent")=="4"){
	    startRow.innerHTML=startRow.innerHTML.substring(0,startRow.innerHTML.length-12);
	}
	else{
	    startRow.innerHTML=startRow.innerHTML.substring(0,startRow.innerHTML.length-7);
	}
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
    if($$("ddlEvent")=="1"){
	if(low.length<5){
	    low.options.add(new Option("TECHNICAL",5));
	}
	if(high.length<5){
            high.options.add(new Option("TECHNICAL",5));
        }
	if(low.length>4 && low[4].value>5){
	    low.options.remove(4);
	    low.options.add(new Option("TECHNICAL",5));
	}
	if(high.length>4 && high[4].value>5){
            high.options.remove(4);
            high.options.add(new Option("TECHNICAL",5));
        }
    }
    else{
	if(low.length>4 && low[4].value==5){
	    low.options.remove(4);
	}
        if(high.length>4 && high[4].value==5){
            high.options.remove(4);
        }
    }
    if($("ckIfMaster").checked){
	if(low[low.length-1].value<6){
	    low.options.add(new Option("MASTER",6));
	}
	if(high[high.length-1].value<6){
            high.options.add(new Option("MASTER",6));
        }
    }
    else{
        if(low[low.length-1].value>5){
            low.options.remove(low.length-1);
	}
        if(high[high.length-1].value>5){
            high.options.remove(high.length-1);
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
    lvl=[];
    combo=[];
    alertFlag=0;
    let lines=$$("txtTable").split('\n');
    for(let k=0;k<lines.length;k++){
	let item=lines[k].replace(/^(封面|活动|第|属性|阅读|本文|折叠).*/g,'');
	if(item.trim()==''){continue;}
	let tabs=item.split('\t');
	let song_comment=tabs[getInt("txtCol")-1].trim();
	if(song_comment=="Smile" || song_comment=="Pure" || song_comment=="Cool" || song_comment==""){
	    song_comment=tabs[getInt("txtCol")].trim();
	}
	if($$("ddlEvent")!="4"){
	    arr.push(song_comment.trim());
	}
	else{
	    song_comment=song_comment.replace('(','（').replace(')','）');
	    song_comment=song_comment.split('（');
	    arr.push(song_comment[0].trim());
	    if(song_comment.length>1 && song_comment[1].trim()=="随机）"){
		cf.push(1);
	    }
	    else if(song_comment.length>1 && song_comment[1].trim()=="滑键）"){
		cf.push(2);
	    }
	    else if(song_comment.length>1 && song_comment[1].trim().toLowerCase()=="master）"){
                cf.push(3);
            }
	    else{
		cf.push(0);
	    }
	}
	if($("ckIfLvl").checked){
	    if(tabs[getInt("txtCol")-1].trim()=="Smile" || tabs[getInt("txtCol")-1].trim()=="Pure" || tabs[getInt("txtCol")-1].trim()=="Cool"){
		lvl.push(tabs[getInt("txtColLvl")].trim());
	    }
	    else{
		lvl.push(tabs[getInt("txtColLvl")-1].trim());
	    }
	}
	if($("ckIfCombo").checked){
            if(tabs[getInt("txtCol")-1].trim()=="Smile" || tabs[getInt("txtCol")-1].trim()=="Pure" || tabs[getInt("txtCol")-1].trim()=="Cool"){
                combo.push(tabs[getInt("txtColCombo")].trim());
	    }
            else{
                combo.push(tabs[getInt("txtColCombo")-1].trim());
	    }
        }
    };
    $("btnUpload").value=`已上传${arr.length}首歌曲`;
    alert(`已上传${arr.length}首歌曲`);
    disabling("btnUpload");
    if(arr.length>=getInt("txtOrder") && $("ckIfManual").checked){
	let i=0;
        for(;i<songs.length;i++){
            if(songs[i].nm.replace(/(!|\?|！|？|"|“|”|♡|♥|\*|＊|'|‘|’| |☆|・|。)/g,'').toLowerCase()==arr[getInt("txtOrder")-1].replace(/(!|\?|！|？|"|“|”|♡|♥|\*|＊|'|‘|’| |☆|・|。)/g,'').toLowerCase()){break;}
        }
        if(i<songs.length){
            $("ddlGroup").selectedIndex=0;
            $("ddlCl").selectedIndex=0;
            initialSongList();
            $("ddlSong").selectedIndex=i;
        }
	else{
	    alert("没有这首歌曲");
	    exit;
	}
    }
    if(arr.length>0 && $("ckIfManual").checked==false){
	clearTable();
        let i=0;
        for(;i<songs.length;i++){
	    let input=arr[0];
            if(songs[i].nm.replace(/(!|\?|！|？|"|“|”|♡|♥|\*|＊|'|‘|’| |☆|・|。)/g,'').toLowerCase()==input.replace(/(!|\?|！|？|"|“|”|♡|♥|\*|＊|'|‘|’| |☆|・|。)/g,'').toLowerCase()){
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
		if(cf[0]<3){
		    $("ddlComment").selectedIndex=cf[0];
		    $("txtHigh").selectedIndex=3;
		}
		else{
		    $("ddlComment").selectedIndex=0;
		    $("txtHigh").selectedIndex=4;
		}
	    }
	    generateCode();
        }
	else{
	    alert("没有这首歌曲");
	    exit();
	}
	for(let j=1;j<arr.length;j++){
	    nextRow();
//	    if($$("btnUpload")=="没有这首歌曲"){exit();}
	    let song=songs[$$("ddlSong")];
	    if($$("ddlEvent")=="4"){
		if(cf[j]<3){
		    $("ddlComment").selectedIndex=cf[j];
		    $("txtHigh").selectedIndex=3;
		}
                else{
                    $("ddlComment").selectedIndex=0;
                    $("txtHigh").selectedIndex=4;
                }
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
