let a = "mani mani mani mani"
let b = "siva siva siva siva"
console.log(a+ " " +b);
console.log(a.concat(" ",b))
console.log(a.replace("mani","siva"));
console.log(a.replaceAll("mani", "siva"))
console.log(a.replace("mani","siva"));
let index = a.indexOf("mani");
console.log(index)
console.log(a.lastIndexOf("mani"));
console.log(a.includes("mani"))
console.log(a.includes("manii"))
console.log(a.startsWith("mani"))
console.log(a.endsWith("mani"))
console.log(a.endsWith("manii"))
let n = "mani";
let i = "mani mani mani";
console.log(a.replace("mani","siva"))
//split:-it is used to split string to an array of subStrings based on specified separator
//join :- it is used to join all elements of an array  into a one string with a specified separator
let split = "Myname-is-manikanta";
let spliteddata = split.split("-");
console.log(spliteddata)
let joinData = spliteddata.join("-");
console.log(joinData)

let name = "Manikanta";
let dataSplit=name.split("");
console.log(dataSplit)

let dataReverse = dataSplit.reverse()
console.log(dataReverse)

let dataJoin = dataReverse.join("")
console.log(dataJoin)

let names = "myname,is,maniknata";
let splitData1 = names.split(",")
console.log(splitData1)

let dataJoin1 = splitData1.join("|")
console.log(dataJoin1)



/*Today's assignment 

First practice all the things which we covered try practically on your end 
And then do this question 

- reverse a string 
- counts vowels in string 
- capatilize each word*/
let course = "javascript"
let splitData2 = course.split("");
console.log(splitData2)
let dataReverse1 = splitData2.reverse();
console.log(dataReverse1)
let dataJoin2 = dataReverse1.join("");
console.log(dataJoin2)

let string = "tpircsavaj"
let vowels ="AEIOUaeiou"
let count = 0;
for(let i = 0;i<string.length;i++){
    if(vowels.includes(string.charAt(i))){
        count++
    }
}
console.log(count)
/*let str = "nagaraju";
let srt1 = "NAGARAJU";
for(let i = 0;i<str.length;i++){
    if(srt1.includes(str)){
        
    }
}*/

