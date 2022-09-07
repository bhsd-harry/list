"use strict";
function $(id){
    return document.getElementById(id);
}
function $$(id){
    return $(id).value;
}
function enabling(){
    for(let i=0;i<arguments.length;i++){
        $(arguments[i]).disabled=false;
    }
}
function disabling(){
    for(let i=0;i<arguments.length;i++){
        $(arguments[i]).disabled=true;
    }
}
function getInt(id){
    return parseInt($$(id));
}
