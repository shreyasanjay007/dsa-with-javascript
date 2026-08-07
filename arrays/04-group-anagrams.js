/*
   Problem : Group Anagrams 
   Pattern : Canonical Representation
   Time Complexity : O(n x k log k)
   Space Complexity : O(n x k)

*/ 

function groupAnagrams(strs){
  let group = {}
  for(let  word of strs){
    const key = word.split("").sort().join("")
    if(!(key in group)){
      group[key] = []
    }
    group[key].push(word)
  }
  return Object.values(group);
  
}

// console.log(groupAnagrams(["cat","act","dog","bat","tab"]))
console.log(groupAnagrams([""]))
console.log(groupAnagrams(["a"]))
