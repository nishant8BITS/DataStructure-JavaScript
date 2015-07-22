 /*
 * Linked List ADT implementation in JavaScript
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

 (function(){
 	'use strict';

 	function Node(data, next, prev){
 		this.data = data;
 		this.next = next;
 		this.prev = prev;
 	}

 	function LIST(){
 		this.head = null; 
 		this.listSize = 0; // Hold total length of linkedlist
 	}

 	LIST.prototype = {
 		/* Append element at the end of list */
 		append : function(elem){
 			var newNode = new Node(elem, null, null),
 				current = this.head; 

 			    if(current === null){
 			   		this.head = newNode;
 			   		this.listSize++; // Increment the length of the list 	
 			    }else{
 			    	while(!!current){
 			    		if(current.next === null){
 			    			current.next = newNode;
 			    			newNode.prev = current;
 			    			newNode.next = null;
 			    			this.listSize++;
 			    			break;
 			    		}else{
 			    			current = current.next;
 			    		}
 			    	}
 			    }
 		},

 		toArray : function(){
 			var list = [],
 				current = this.head;
 			while(!!current){
 				list.push(current.data);
 				current = current.next;
 			}
 			return list;
 		},  

 		remove : function(elem){
 			var current = this.head;

 			while(!!current){
 				if(current.data === elem){
 					var nextTempRef = current.next,
 					    prevTempRef = current.prev;

 					if(current.prev === null){ //First Node
 						this.head = current.next;
 						this.head.prev = null;
 						this.listSize--;
 						break;
 					}else if(current.next === null){ // Last node
 						current.prev.next = null;
 						this.listSize--;
 						break;
 					}else{ // Middle Node
 						current.prev.next = nextTempRef;
 						current.next.prev = prevTempRef;
 						this.listSize--;
 						break;
 					}
 				}else{
 					current = current.next;
 				}
 			}
 		},

 		insert : function(pos){

 		},

 		getElement : function(pos){
 			var current = this.head,
 			    listLen = this.listSize;
 			for(var index = 0; index < listLen ; index ++){
 				if(pos === index-1){
 					return current.data;
 				}else{
 					current = current.next;
 				}		
 			}
 		},

 		contains : function(elem){
 			var found = false,
 			    current = this.head;

 			    while(!!current){
 			    	if(current.data === elem){
 			    		found = true;
 			    		break;
 			    	}else{
 			    		current = current.next;
 			    	}
 			    }
 			    return found;
 		},

 		moveTo : function(curPos, newPos){

 		},

 		length : function(){
 			return this.listSize;
 		}
 	};

 	/*  
 		Test Code 
		Todo: Need to test using jasmine 
 	*/
 	var testList = new LIST();
 	    testList.append('Nishant');
 	    testList.append('Kumar');
 	    testList.append(4);
 	    testList.append(6);
 	    testList.append(9);
 	    testList.remove(4);

 	    console.log(testList.contains(6));

 })();