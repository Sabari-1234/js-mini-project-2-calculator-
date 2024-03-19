var b7=document.getElementById('b7')
var b8=document.getElementById('b8')
var b9=document.getElementById('b9')
var b77=document.getElementById('b77')
var b4=document.getElementById('b4')
var b5=document.getElementById('b5')
var b6=document.getElementById('b6')
var b44=document.getElementById('b44')
var b1=document.getElementById('b1')
var b2=document.getElementById('b2')
var b3=document.getElementById('b3')
var b11=document.getElementById('b11')
var bC=document.getElementById('bC')
var b0=document.getElementById('b0')
var bCC=document.getElementById('bCC')
var b00=document.getElementById('b00')
var clear=document.getElementById('clear')

var val
var text=document.getElementById('text')
function button( val){
    text.value+=val
}
b7.onclick=function(){
    button("7")
}
b8.onclick=function(){
    button("8")
}
b9.onclick=function(){
    button("9")
}
b77.onclick=function(){
    button("+")
}
b4.onclick=function(){
    button("4")
}
b5.onclick=function(){
    button("5")
}
b6.onclick=function(){
    button("6")
}
b44.onclick=function(){
    button("-")
}
clear.onclick=function(){
    text.value=''
}
b0.onclick=function(){
    button("0")
}
b00.onclick=function(){
    button("/")
}
b1.onclick=function(){
    button("1")
}
b2.onclick=function(){
    button("2")
}
b3.onclick=function(){
    button("3")
}
b11.onclick=function(){
    button("*")
}
bCC.onclick=function(){
    var result=eval(text.value)
    text.value=result
    
}
bC.onclick=function(){
    text.value=text.value.substring(0,text.value.length-1)
}