"use strict";
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
    if($("ckIsFirst").checked){
	code=code.concat(song.cl,'|');
    }
    else{
	code=code.concat('|');
    }
    if(song.cover){
	if(song.cover.endsWith('.jpg')){
	    addition=addition.concat('|cover',$$("txtOrder"),'=',song.cover);
	    code=code.concat(song.nm,'||||',song.mp3);
	}
	else{
	    code=code.concat(song.cover,'|||',song.nm,'|',song.mp3);
	}
    }
    else{
	code=code.concat(song.nm,'||||',song.mp3);
    }
    if(song.lk){
	$("spanOutput").innerHTML=code.concat('|lk',$$("txtOrder"),'=',song.lk,addition);
    }
    else{
	$("spanOutput").innerHTML=code.concat(addition);
    }
}
