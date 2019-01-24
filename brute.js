

var charset = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
function crack(value){
    function toRadix(N,charsetLenght) {
        var HexN = "", 
            Times = Math.floor(Math.abs(N)), 
            R,
            strv = charset,
            charsetLenght = strv.length;
          //  console.log(N);
        while (true) {
            R = Times % charsetLenght;
            HexN = strv.charAt(R) + HexN;
            console.log(HexN);
            console.log(Times);
            //console.log(HexN);
            Times = (Times - R) / charsetLenght; 
            if (Times == 0) 
                break;
        };
        return ((N < 0) ? "-" + HexN : HexN);
    };
    var start = (new Date()) * 1,
        cracked = false,
        index = 0;
    while(!cracked){ 
      //  if(toRadix(index) == value)
      if(jsmd5(toRadix(index)) == value)
            cracked = true;
           
        else
            index++;
            console.log(value);
           
            //console.log(index);
    };
    alert (index);
   // alert(((new Date()) * 1) - start);
};


crack("0cc175b9c0f1b6a831c399e269772661"); 

 
/*
password = "noblePatriaJesus";
var passhash = jsmd5(password);
alert (passhash);*/