"use strict";

var currCl="";
var lastCl=undefined;

function initialDisabling(){
    disabling("btnNext");
    let code="{{llsifsonglist|type=";
    switch($$("ddlEvent")){
	case "0":
	    disabling("txtLow","txtHigh","ddlRound","ckIfMaster");
	    code=code.concat("as2|diff=easy,normal,hard,expert");
	    break;
    }
    clearTable();
    let tb=$("tbOutput");
    tb.rows[0].innerHTML=code;
}
function initialSongList(){
    let oldLength=$("ddlSong").length;
    for(let i=oldLength;i>=0;i--){
	$("ddlSong").remove(i);
    }
    let song=$$("ddlGroup");
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
    switch($$("ddlEvent")){
	case "0":
	    if(($("ckIsFirst").disabled==false && $("ckIsFirst").checked) || (lastCl && currCl!==lastCl)){
		code=code.concat(song.cl,'|');
	    }
	    else{
		code=code.concat('|');
	    }
	    if(song.cover){
		if(song.cover.endsWith('.jpg')){
		    addition=addition.concat('|cover',$$("txtOrder"),'=',song.cover);
		    code=code.concat(song.nm,'||||');
		}
		else{
		    code=code.concat(song.cover,'|||',song.nm,'|');
		}
	    }
	    else{
		code=code.concat(song.nm,'||||');
	    }
	    code=code.concat(song.exCombo,'|',song.mp3);
	    if(song.lk){
		code=code.concat('|lk',$$("txtOrder"),'=',song.lk,addition);
	    }
	    else{
		code=code.concat(addition);
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
    $("txtOrder").value=1;
    $("ckIsFirst").checked=true;
}

function nextRow(){
    let tb=$("tbOutput");
    tb.insertRow(-1);
    disabling("ckIsFirst","txtOrder","btnNext");
    lastCl=currCl;
    $("txtOrder").value=getInt("txtOrder")+1;
}

function ifMaster(){
    $("txtHigh").value=5;
}
