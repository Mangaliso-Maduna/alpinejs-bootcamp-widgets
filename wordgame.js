function longestWord(string) {
    var str = string.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i < str.length; i++) {
        if (longest <= str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
}

function shortestWord(str) {
  var strSplit = str.split(' ');
  var wordLength = 2000; var short;
  for(var i = 0; i < strSplit.length; i++){
    if(strSplit[i].length<=wordLength){
	    wordLength = strSplit[i].length;
	    short=strSplit[i]
     };
  };
  
  return short;
}

function wordLengths(str){
    let splited=str.split(" ")
    let count=0;
    for(let i=0;i<splited.length;i++){
       count=count+splited[i].length
    }
    return count;
}

