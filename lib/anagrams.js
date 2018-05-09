function anagrams(str)
{
    if(!str){ 
        return [];
    }
    if(str.length === 1){
        return [str];
    }
    if(str.length === 2){
        return [str[0]+str[1]+","+str[1]+str[0]];
    }
    if(str.length === 3){
        var result = [];
        for(var i = 0; i < 3; i++){
            var temp = str.replace(str[i],"");
            result.push(str[i]+anagrams(temp)[0]);
            result.push(str[i]+anagrams(temp)[1]);
        }
        
        return result;
    }
    
}

module.exports = anagrams