
let pronouns = [ "the", "our"];
let adjs = [ "huge", "tall"];
let nouns =["car", "computer"];
let domainExts = [".com", ".es"];

for (let i = 0; i < pronouns.length; i++){
    //pronouns[i];
    //console.log(pronouns[i]);
    for (let j = 0; j < adjs.length; j++){
        //console.log(adjs[i]);
        for (let k = 0; k < nouns.length; k++){
            //console.log(nouns[i]);
            for (let l = 0; l < domainExts.length; l++){
              //  console.log(domainExts[i]);
                let domainRandom = pronouns[i] + adjs[j] + nouns[k] + domainExts[l];
                console.log(domainRandom)
            }
        }
    }

} 