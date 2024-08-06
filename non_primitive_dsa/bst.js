// TreeNode class represents each node in the BST
class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // BinarySearchTree class contains methods for BST operations
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    // Insert a value into the BST
    insert(value) {
      const newNode = new TreeNode(value);
      if (this.root === null) {
        this.root = newNode;
      } else {
        this._insertNode(this.root, newNode);
      }
    }
  
    _insertNode(node, newNode) {
      if (newNode.value < node.value) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this._insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this._insertNode(node.right, newNode);
        }
      }
    }
  
    // Search for a value in the BST
    search(value) {
      return this._searchNode(this.root, value);
    }
  
    _searchNode(node, value) {
      if (node === null) {
        return false;
      }
      if (value < node.value) {
        return this._searchNode(node.left, value);
      } else if (value > node.value) {
        return this._searchNode(node.right, value);
      } else {
        return true; // Value found
      }
    }
  
    // In-order traversal
    inOrderTraversal(callback) {
      this._inOrderTraversal(this.root, callback);
    }
  
    _inOrderTraversal(node, callback) {
      if (node !== null) {
        this._inOrderTraversal(node.left, callback);
        callback(node.value);
        this._inOrderTraversal(node.right, callback);
      }
    }
  
    // Pre-order traversal
    preOrderTraversal(callback) {
      this._preOrderTraversal(this.root, callback);
    }
  
    _preOrderTraversal(node, callback) {
      if (node !== null) {
        callback(node.value);
        this._preOrderTraversal(node.left, callback);
        this._preOrderTraversal(node.right, callback);
      }
    }
  
    // Post-order traversal
    postOrderTraversal(callback) {
      this._postOrderTraversal(this.root, callback);
    }
  
    _postOrderTraversal(node, callback) {
      if (node !== null) {
        this._postOrderTraversal(node.left, callback);
        this._postOrderTraversal(node.right, callback);
        callback(node.value);
      }
    }
  }
  
  // Utility function to create a BST from an array
  function arrayToBST(array) {
    const bst = new BinarySearchTree();
    array.forEach(value => bst.insert(value));
    return bst;
  }
  
  // Example usage
  const array = [10, 5, 15, 3, 7, 12, 18];
  const bst = arrayToBST(array);
  
  // Search for a value
  console.log('Search 7:', bst.search(7));  // true
  console.log('Search 20:', bst.search(20)); // false
  
  // Traverse the tree
  console.log('In-order Traversal:');
  bst.inOrderTraversal(value => console.log(value)); // Should print values in sorted order
  
  console.log('Pre-order Traversal:');
  bst.preOrderTraversal(value => console.log(value)); // Should print root node first
  
  console.log('Post-order Traversal:');
  bst.postOrderTraversal(value => console.log(value)); // Should print leaves first
  