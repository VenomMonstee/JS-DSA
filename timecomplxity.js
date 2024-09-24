// 1. Constant Time: O(1)
// Idhar kaam fixed time mein hota hai, chahe input kitna bhi ho. Jaise fridge kholke ek item nikalna, time fix hai.

// Example:

function getFirstElement(arr) {
  return arr[0];
}
// Explanation:
// Chahe array mein 10 elements ho ya 10,000, tu sirf pehle element ko access kar raha hai, time fixed hai. Yeh hota hai O(1), constant time.

// 2. Linear Time: O(n)
// Jitna bada input, utna zyada kaam. Jaise sabko party mein bula raha hai, ek ek karke, jitne log utna zyada time lagega.

// Example:

// javascript
// Copy code
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
// Explanation:
// Har ek element ko check karega, ek ek karke. Agar array mein 5 elements hain toh 5 baar check karega, 100 elements hain toh 100 baar. Isliye time linear hai, O(n).

// 3. Quadratic Time: O(n²)
// Ab ye thoda slow hai. Maan le tu ek list mein sabko pair bana ke compare kar raha hai, toh jitna bada list, utna zyada time. Har ek bande ko sabke saath milana padega.

// Example:

// javascript
// Copy code
function printAllPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}
// Explanation:
// Har ek element ko baaki sab ke saath compare kar raha hai. Jaise agar 5 elements hain, toh 5 × 5 = 25 comparisons karega. Time complexity ho gayi O(n²), which means quadratic.

// 4. Logarithmic Time: O(log n)
// Idhar kaam fast ho raha hai, kyunki tu baar baar input ko half kar raha hai. Jaise kitni baar bhi cake ko aadha-aadha kaat raha hai.

// Example:

// javascript
// Copy code

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

// Explanation:
// Binary search me array ko baar baar half kar ke search kar raha hai. Jitna zyada half karega, utna jaldi answer mil jayega. Yeh hai O(log n), matlab time complexity logarithmic hai.

// 5. Exponential Time: O(2ⁿ)
// Isme kaam ekdum slow hota hai, jaise har decision ke liye tu naya decision bana raha hai. Samajh le, tereko har decision ke do raaste dekhne padenge, har raaste pe naye 2 raaste nikalenge.

// Example:

// javascript
// Copy code

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Explanation:
// Fibonacci mein har baar do branches ban rahi hain, jaise tree ke har branch se do aur branch nikal rahi ho. Toh time exponential ho gaya O(2ⁿ), bahut slow hai yeh.

// 6. Factorial Time: O(n!)
// Isme toh full-time headshot, har element ko har possible tareeke se mix-match karna padega. Samajh le tereko har cheez ki permutation banani hai.

// Example:

// javascript
// Copy code

function generatePermutations(arr) {
  if (arr.length === 0) return [[]];
  
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let remaining = arr.slice(0, i).concat(arr.slice(i + 1));
    let remainingPerms = generatePermutations(remaining);
    
    for (let perm of remainingPerms) {
      result.push([current, ...perm]);
    }
  }
  return result;
}

// Explanation:
// Permutation mein har element ko har possible position mein dalna hota hai. Yeh bahut slow ho jata hai, time complexity ho gayi O(n!).

// Summary:
// O(1) – Constant time (fridge se cold drink nikalna)
// O(n) – Linear time (list ka sabse bada number dhundhna)
// O(n²) – Quadratic time (sabke pair bana ke compare karna)
// O(log n) – Logarithmic time (binary search)
// O(2ⁿ) – Exponential time (Fibonacci recursion)
// O(n!) – Factorial time (list ke sab permutations banane)
