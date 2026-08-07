/*
  Problem : Top-k-frequent elements 
  Pattern : 

*/ 

function topKFrequent (nums, k) {

  const  frequency = {}
  for(let num of nums){
     frequency[num] = (frequency[num] || 0) + 1
  } 
  
  return Object.entries(frequency)
    .sort((a,b) => b[1]-a[1])
    .slice(0,k)
    .map(num => Number(num[0]));

}

console.log(topKFrequent([2,1,1,1,3,2],2))
