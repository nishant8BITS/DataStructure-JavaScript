/*
 * Binary search implementation in JavaScript
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

 	// Define Node structure
 	var node = {
 		value : 124,
 		left  : null,
 		right : null
 	};

 	function BST(){
 		this.root = null;
 	}

 	BST.prototype = {
 		constructor: BST,
 		
 		add : function(value){
 			var node = {
		 		value : value,
		 		left  : null,
		 		right : null
		 	},

		 	current;

		 	if(this.root === null){
		 		this.root = node;
		 	}else{
		 		current = this.root;
		 		while(!!current){
		 			if(value < current.value){
		 				if(current.left === null){
		 					current.left = node;
		 					break;
		 				}else{
		 					current = current.left;
		 				}
		 			}else if(value > current.value){
		 				if(current.right === null){
		 					current.right = node;
		 					break;
		 				}else{
		 					current = current.right;
		 				}
		 			}else {
		 				throw "Duplicate Key can't be inserted";
		 			}
		 		}
		 	}
 		},

 		remove : function(){

 		},

 		contains : function(value){
 			var current = this.root,
 				found = false;

 			while(!!current){
 				if(value > current.value){
 					current = current.right;
 				}else if(value < current.value){
 					current = current.left;
 				}else {
 					found = true;
 					break;
 				}
 			}
 			return found;
 		},

 		size : function(){

 		},

 		toString : function(){

 		},

 		toJson : function(){

 		},

 		toArray : function(){
 			var list = [];
 			this.traverse(function(node){
 				list.push(node.value);
 			});

 			return list;
 		},

 		traverse: function(process){
 			var self = this;
 			function inOrder(node){
 				if(!!node){
 					if(node.left !== null){
 						inOrder(node.left);
 					}

 					process.call(self, node);

 					if(node.right !== null){
 						inOrder(node.right);
 					}
 				}
 			}
 			inOrder(this.root);
 		}
 	};

 	var BinaryTree = new BST();
 	    BinaryTree.add(2);
 	    BinaryTree.add(3);
 	    BinaryTree.add(4);
 	    BinaryTree.add(9);
 	    BinaryTree.add(11);
 	    BinaryTree.add(1);
 	    console.log(BinaryTree.toArray());

 })();