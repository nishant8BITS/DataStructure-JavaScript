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

 	function Node(data, left, right){
 		this.data = data;
 		this.left = left;
 		this.right = right;
 	}

 	function BST(){
 		this.root = null;
 	}

 	BST.prototype = {
 		constructor: BST,
 		
 		add : function(value){
 			var node = new Node(value, null, null),
		 		current;

		 	if(this.root === null){
		 		this.root = node;
		 	}else{
		 		current = this.root;
		 		while(!!current){
		 			if(value < current.data){
		 				if(current.left === null){
		 					current.left = node;
		 					break;
		 				}else{
		 					current = current.left;
		 				}
		 			}else if(value > current.data){
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

 		remove : function(data){	
 			if(this.root === null){
 				return null;
 			}else{
				this.root = removeData(null,this.root, data);
 			}

 			function removeData(parent,root, data){
 				var current = root,
 				    parent = parent;

 				if(current.data === data){
 					// When no children 
 					if(current.left === null && current.right === null){
 						if(parent !== null){
 							if(parent.left !== null && parent.left.data === current.data){
 								parent.left = null;
 							}else{
 								parent.right = null;
 							}
 						}else{
 							return null;
 						}
 					}

 					// When have both children 
 					if(current.left !== null && current.right !== null){
 						// Find min node to the right
 						var minNodeInfo = getMinNode(current.right);
 						var node = minNodeInfo.current;
 							parent = minNodeInfo.parent || current;
 						current.data = node.data;
 						removeData(parent,node,node.data);
 					}

 					if(current.left !== null){
 						if(!!parent.left && current.data === parent.left.data){
 							parent.left = current.left;
 						}
 						if(!!parent.right && current.data === parent.right.data){
 							parent.right = current.left;
 						}
 					}

 					if(current.right !== null){
 						if(!!parent.right && current.data === parent.right.data){
 							parent.right = current.right;
 						}
 						if(!!parent.left && current.data === parent.left.data){
 							parent.left = current.right;
 						}
 					}
 				}else{
 					// Ref the parent node link 
 					parent =  current;
 					if(current.left !== null){
 						removeData(parent,current.left, data);
 					}
 					if(current.right !== null){
 						removeData(parent,current.right, data);
 					}
 				}
 				return current;	
 			}

 			function getMinNode(root){
 				var current = root,
 				    parent = null;
	 			if(current !== null){
	 				while(!!current){
	 					if(current.left !== null){
	 						parent = current;
	 						current = current.left;
	 					}else{
	 						break;
	 					}
	 				}
	 			}
	 			return {
		 					'current':current,
		 					'parent' : parent
	 			   	   };
 			}
 		},

 		contains : function(value){
 			var current = this.root,
 				found = false;

 			while(!!current){
 				if(value > current.data){
 					current = current.right;
 				}else if(value < current.data){
 					current = current.left;
 				}else {
 					found = true;
 					break;
 				}
 			}
 			return found;
 		},

 		size : function(){
 			var length = 0;
 			this.traverse(function(){
 				length++;
 			})
 			return length;
 		},

 		toString : function(){
 			return this.toArray().toString();
 		},

 		toArray : function(){
 			var list = [];
 			this.traverse(function(node){
 				list.push(node.data);
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
 		}, 

 		getMin : function(){
 			var current = this.root;
 			if(current !== null){
 				while(!!current){
 					if(current.left !== null){
 						current = current.left;
 					}else{
 						break;
 					}
 				}
 			}
 			return current.data;
 		},

 		getMax : function(){
 			var current = this.root;
 			if(current !== null){
 				while(!!current){
 					if(current.right !== null){
 						current = current.right;
 					}else{
 						break;
 					}
 				}
 			}
 			return current.data;
 		}
 	};

 	var BinaryTree = new BST();
 	    BinaryTree.add(19);
		BinaryTree.add(5);
		BinaryTree.add(21);
		BinaryTree.add(25);
		BinaryTree.add(18);
		BinaryTree.remove(19);
		BinaryTree.remove(5);
		BinaryTree.remove(18);
		BinaryTree.remove(25);
		BinaryTree.remove(21);
		BinaryTree.add(21);
		BinaryTree.add(78);
		BinaryTree.add(2);
		BinaryTree.add(25);
		BinaryTree.add(49);
		BinaryTree.add(0);
        BinaryTree.remove(21);
        BinaryTree.remove(78);
		BinaryTree.remove(25);
		BinaryTree.add(21);
 	    console.log(BinaryTree.toArray());
 })();