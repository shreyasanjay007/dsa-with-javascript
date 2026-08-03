/*
   Problem : Valid anagrams 
   Pattern : Frequency Counter + Hash Map 

   Time Complexity : O(n)
   Space Complexity : O(n)
*/ 

function validAnagram(s,t) {
    if(s.length !== t.length){
    return false ;
  }
  let count = {}
  for(let letter of s){
    count[letter] = (count[letter] || 0) + 1
  }

  for(let letter of t){
    if(!(letter in count)){
      return false 
    }
    if(count[letter] === 0){
      return false 
    }
    /*
      if(!count[letter]) return false -> More simple way , handles both cases 
    */ 
    count[letter]-- 
  }
  return true 
  
}

console.log(validAnagram("anagram","nagrama"))
console.log(validAnagram("rat","cat"))
