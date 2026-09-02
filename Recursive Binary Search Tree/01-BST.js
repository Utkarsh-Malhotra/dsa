class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    rContains(value, currentNode=this.root) {
        if(this.value === null) return false;

        if(this.value === currentNode.value) return true;

        if(value < currentNode.value) {
            return this.rContains(value,currentNode.left)
        } else {
            return this.rContains(value,currentNode.right)
        }
    }

    #rInsert(value,currentNode=this.root) {
        if(value === null) return new Node(value);
        if(value < currentNode.left) {
            currentNode.left = this.#rInsert(value,currentNode.left);
        } else {
            currentNode.right = this.#rInsert(value,currentNode.right);
        } 
        return currentNode;
    }

    rInsert(value) {
        if(this.root === null) return new Node(value);
        return this.#rInsert(value);
    }

    #deleteNode(value, currentNode) {
        if (currentNode === null) return null;

        if(value < currentNode.value) {
            this.#deleteNode(value,currentNode.left);
        } else if(value > currentNode.value) {
            this.#deleteNode(value,currentNode.right);
        } else {
            if(currentNode.left === null & currentNode.right === null) {
                return null;
            } else if(currentNode.left === null) {
                currentNode = currentNode.right;
            } else if(currentNode.right === null) {
                currentNode = currentNode.left;
            } else {
                let subTreeMinValue = this.minValue(currentNode.right);
                currentNode.value = subTreeMinValue;
                currentNode.right = this.#deleteNode(subTreeMinValue,currentNode.right);
            }
        }

        return currentNode;
    }

    deleteNode(value) {
       this.root = this.deleteNode(value,this.root);
    }

    minValue(currentNode) {

        while(currentNode.left != null) {
            currentNode = currentNode.left;
        }

        return currentNode.value;
    }
}
