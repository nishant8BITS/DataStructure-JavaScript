/*
Given an array of positive integers and an integer sum, find the maximum number of elements in the given array that sum up to sum.

max_num_of_ele(10, [10, 3, 7]) = 2 
max_num_of_ele(3, [1, 1, 2, 1 ]) = 3

Input 1 (sum) → integer :
A None negative integer

Input 2 (list) → array.integer :
Array of Positive integers

Output → integer :
Maximum number of elements that sum up to sum. Return 0 if it can't be done.
*/

/*
 * Copyright (c) 2015 Nishant Kumar
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

function max_num_of_ele(sum, list){
  var count = 0, 
      totalSum = 0;
      list.sort(function(a, b){return a-b});
       
  for(var i = 0; i< list.length; i++){
      count = 0; 
      totalSum = list[i];
      for(var j=i+1; j< list.length; j++){
        if(totalSum == sum){
          break;
        }
        count++;
        totalSum = totalSum + list[j];
      }
      if(totalSum == sum){
          count++;
          break;
      }
  }
  return count;
}

console.log(max_num_of_ele(10,[10, 3, 7]));