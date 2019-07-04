 // function sleep(delay) {
 //        var start = new Date().getTime();
 //        while (new Date().getTime() < start + delay);
 //      }

var terminalColumn = $("#terminalColumn");

var terminalElement1 = $(".terminal")[0];

var flag=0;
// var terminalElement2 = $(".terminal")[1];
// var terminalElement3 = $(".terminal")[2];
// var terminalElement4 = $(".terminal")[3];

var dialogue	=	document.getElementsByClassName("dialogue")[0];
1 || (function(o){
  var open = false;
  Object.defineProperty(o, "open", {
    get:	function(){ return o.classList.contains("open"); },
    set:	function(i){ o.classList.toggle("open", !!i); }
  });
}(dialogue));
function snakeText(from, to, refreshRate, charAmount, autoScroll){
  var fromText, toText, l, i,
      refreshRate		=	refreshRate	|| 20,
      charAmount		=	charAmount	|| 1;
  if(3 === from.nodeType) fromText = from;
  else for(i = l = from.childNodes.length-1; i >= 0; --i)
    if(3 === from.childNodes[i].nodeType){
      fromText = from.childNodes[i];
      break;
    }
  if(!fromText) throw new ArgumentError("Source object is neither a text node or element containing any text nodes.");
  if(3 === to.nodeType) toText = to;
  else for(i = l = to.childNodes.length-1; i >= 0; --i)
    if(3 === to.childNodes[i].nodeType){
      toText	=	to.childNodes[i];
      break;
    }

  toText	=	toText || to.appendChild(document.createTextNode(""));
  var interval = setInterval(function(){
    var from	=	fromText.data;
    if(!from.length) return clearInterval(interval);
    toText.data		+=	from.substr(0, charAmount);
    fromText.data	=	from.substr(charAmount);

    if(autoScroll && ($('.terminalwrapper').get(0).scrollTop > 20))
      console.log($('.terminalwrapper').get(0).scrollTop)
      $('.terminalwrapper').animate({
  scrollTop: $('.terminalwrapper').get(0).scrollHeight}, 0);
  }, refreshRate);
  return interval;
}
var stringData1 = $.ajax({
                    async: false
                 }).responseText;
// var stringData1 = $.ajax({
//                     async: false
//                  }).responseText;
// var stringData3 = $.ajax({
//                     async: false
//                  }).responseText;
// var stringData4 = $.ajax({
//                     async: false
//                  }).responseText;

//stringData1 = "This program removes all control codes except for line feeds\r\n;\r\n; CLEAN --- a utility to filter text files.\r\n; This program removes all control codes except\r\n; for line feeds, carriage returns, and form\r\n; feeds, strips off the high bit of all characters,\r\n; and expands tabs.  Can be used to make a Wordstar\r\n; file acceptable for other screen or line editors,\r\n; and vice versa.\r\n;\r\ncr  equ 0dh   ;ASCII carriage return\r\nlf  equ 0ah   ;ASCII line feed\r\nff  equ 0ch   ;ASCII form feed\r\neof equ 01ah    ;End of file marker\r\ntab  equ 09h   ;ASCII tab character\r\ncommand equ 80h   ;buffer for command tail\r\nblksize equ 1024    ;blocking/deblocking size\r\ncseg segment para public 'CODE'\r\n  assume  cs:cseg,ds:data,es:data,ss:stack\r\nclean proc  far   ;entry point from PC-DOS\r\n  push  ds    ;save DS:0000 for final\r\n xor ax,ax   ;return to PC-DOS\r\n push  ax\r\n  mov ax,data   ;make our data segment\r\n  mov es,ax   ;addressable via ES register\r\n  call  infile    ;get path and file spec.\r\n        ;for input file\r\n mov ax,es   ;set DS=ES for remainder\r\n  mov ds,ax   ;of program\r\n jnc clean1    ;";
//stringData1 = '> Sourabh.about\r\n\t=> "My name is Sourabh. I love tech and am passionate about my work.\r\n\t\tLearning new technologies and being able to use them to create\r\n\t\tsomething that benefits me and others excites me. I personally\r\n\t\tbelieve that all that we ever do is to be happy and hence consider\r\n\t\tmyself very fortunate to be pursuing what interests me. I always\r\n\t\tdo my best to make sure that my work is as good as I can possibly\r\n\t\tmake it, as it gives me immense satisfaction."\r\n\r\n> Sourabh.origin\r\n\t=> "Bhubaneswar, Odisha"\r\n\r\n> Sourabh.education\r\n\t=> ["B.Tech" => "SRM Institute Of Science and Technology, Chennai"\r\n\t\t "12th"  => "St. Xaviers High School, Bhubaneswar"\r\n\t\t "10th"  => "D.A.V. Public School, Bhubaneswar"]\r\n\r\n> Sourabh.major\r\n\t=> "Computer Science"\r\n\r\n> Sourabh.expectedGraduation\r\n\t=> "May 2020"\r\n\r\n> Sourabh.interests\r\n\t=> ["Programming", "Gaming", "Quizzing", "Music", "Sports", "Creative Coding"]\r\n\r\n> Sourabh.workExperience.latest\r\n\t=> Latest Work Experience\r\n\t\t\tcompany: "Nyx Wolves"\r\n\t\t\trole: "Web Developer"\r\n\t\t\tstartDate: "March 2019"\r\n\t\t\tendDate: "June 2019"\r\n\r\n> Sourabh.email\r\n\t=> "sourabhppati@gmail.com"';
// stringData2 = "This is test data 1";
// stringData3 = "This is test data 2";
// stringData4 = "This is test data 3";

stringData1 = '> Sourabh.about\r\n    => "My name is Sourabh. I love tech and am passionate about my work.\r\n        Learning new technologies and being able to use them to create\r\n        something that benefits me and others excites me. I personally\r\n        believe that all that we ever do is to be happy and hence consider\r\n        myself very fortunate to be pursuing what interests me. I always\r\n        do my best to make sure that my work is as good as I can possibly\r\n        make it, as it gives me immense satisfaction."\r\n\r\n> Sourabh.origin\r\n    => "Bhubaneswar, Odisha"\r\n\r\n> Sourabh.education\r\n    => ["B.Tech" => "SRM Institute Of Science and Technology, Chennai"\r\n         "12th"  => "St. Xaviers High School, Bhubaneswar"\r\n         "10th"  => "D.A.V. Public School, Bhubaneswar"]\r\n\r\n> Sourabh.major\r\n    => "Computer Science"\r\n\r\n> Sourabh.expectedGraduation\r\n    => "May 2020"\r\n\r\n> Sourabh.interests\r\n    => ["Programming", "Gaming", "Quizzing", "Music", "Sports", "Creative Coding"]\r\n\r\n> Sourabh.workExperience.latest\r\n    => Latest Work Experience\r\n            company: "Nyx Wolves"\r\n            role: "Web Developer"\r\n            startDate: "March 2019"\r\n            endDate: "June 2019"\r\n\r\n> Sourabh.email\r\n    => "sourabhppati@gmail.com"';

function ifVisible(){
  if($(terminalColumn).visible() && flag==0)
  {
    flag=1;
    console.log("terminalBox1 is visible");
    snakeText(document.createTextNode(stringData1), terminalElement1, 1, 1, true);
  }
}

$(document).ready(function() {
   setInterval(ifVisible,500);
}); 

//snakeText(document.createTextNode(stringData1), terminalElement1, 1, 1, true);
// snakeText(document.createTextNode(stringData2), terminalElement2, 1, 1, true);
// snakeText(document.createTextNode(stringData3), terminalElement3, 1, 1, true);
// snakeText(document.createTextNode(stringData4), terminalElement4, 1, 1, true);