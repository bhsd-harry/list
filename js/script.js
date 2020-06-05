"use strict";

var currCl="";
var currRound="";
var lastCl=undefined;
var lastRound=undefined;

function initialDisabling(){
    disabling("btnNext");
    let code="{{llsifsonglist|type=";
    switch($$("ddlEvent")){
	case "0":
	    disabling("txtLow","txtHigh","ddlRound","ckIfMaster");
	    $("ckIfMaster").checked=false;
	    code=code.concat("as2|diff=easy,normal,hard,expert");
	    break;
	case "1":
	    enabling("txtLow","txtHigh","ddlRound","ckIfMaster");
	    code=code.concat("sm|diff=easy,normal,hard,expert,technical");
	    generateRounds(1);
	    break;
	case "2":
	    disabling("txtLow","txtHigh","ddlRound","ckIfMaster");
	    $("ckIfMaster").checked=false;
	    code=code.concat("mf|diff=easy,normal,hard,expert");
	    break;
	case "3":
	    disabling("txtLow","txtHigh","ddlRound");
	    enabling("ckIfMaster");
	    code=code.concat("cm|diff=easy,normal,hard,expert");
	    break;
	case "4":
	    disabling("txtLow","txtHigh","ckIfMaster");
	    enabling("ddlRound");
	    $("ckIfMaster").checked=false;
	    code=code.concat("cf");
	    generateRounds(4);
	    break;
    }

// 开发中
    if(getInt("ddlEvent")>1){
	disabling("btnCode");
    }
    else{
	enabling("btnCode");
    }
// 开发中

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
    let id=$$("ddlSong");
    let song=songs[id];
    let code='|';
    let addition='';
    currCl=song.cl.toLowerCase();
    if($$("ddlEvent")==1 || $$("ddlEvent")==4){
	currRound=$$("ddlRound");
    }
    switch($$("ddlEvent")){
	case "0":
	    if(($("ckIsFirst").disabled==false && $("ckIsFirst").checked) || (lastCl && currCl!==lastCl)){
		code=code.concat(song.cl);
	    }
	    if(song.cover){
		if(song.cover.endsWith('.jpg')){
		    addition=addition.concat('|cover',$$("txtOrder"),'=',song.cover);
		    code=code.concat('|',song.nm,'||||');
		}
		else{
		    code=code.concat('|',song.cover,'|||',song.nm,'|');
		}
	    }
	    else{
		code=code.concat('|',song.nm,'||||');
	    }
	    code=code.concat(song.exCombo,'|',song.mp3);
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
	    if(($("ckIsFirst").disabled==false && $("ckIsFirst").checked) || (lastCl && currCl!==lastCl)){
                code=code.concat(song.cl);
            }
            if(song.cover){
                if(song.cover.endsWith('.jpg')){
                    addition=addition.concat('|cover',$$("txtOrder"),'=',song.cover);
                    code=code.concat('|',song.nm,whitespace,'||');
                }
                else{
                    code=code.concat('|',song.cover,whitespace,'|',song.nm,'|');
                }
            }
            else{
                code=code.concat('|',song.nm,whitespace,'||');
            }
	    if(!lastRound || currRound!==lastRound){
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
}

function nextRow(){
    let tb=$("tbOutput");
    tb.insertRow(-1);
    disabling("ckIsFirst","txtOrder","btnNext");
    lastCl=currCl;
    if($$("ddlEvent")==1 || $$("ddlEvent")==4){
	lastRound=currRound;
    }
    $("txtOrder").value=getInt("txtOrder")+1;
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
	$("txtLow").value=$$("txtHigh");
    }
}

function adjustHigh(){
    if(getInt("txtHigh")<getInt("txtLow")){
        $("txtHigh").value=$$("txtLow");
    }
}

function adjustLvl(){
    $("txtLow").value=1;
    $("txtHigh").value=4+($("ckIfMaster").checked)+($$("ddlEvent")==1);
}
