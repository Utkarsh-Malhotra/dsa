function DFSPreOrder() {
    let results = [];
    function traverseBSTPreorder(currentNode) {
        results.push(currentNode.value);
        if(currentNode.left) traverseBSTPreorder(currentNode.left);
        if(currentNode.right) traverseBSTPreorder(currentNode.right);
    }
    traverseBSTPreorder(this.root);
    return results
}

function DFSPostOrder() {
    let results = [];
    function traverseBSTPostPrder(currentNode) {
        if(currentNode.left) traverseBSTPostPrder(currentNode.left);
        if(currentNode.right) traverseBSTPostPrder(currentNode.right);
        results.push(currentNode.value);
    }
    traverseBSTPostPrder(this.root);
    return results;
}

function DFSInorder() {
    let results = [];
    function traverseBSTInOrder(currentNode) {
        if(currentNode.left) traverseBSTInOrder(currentNode.left);
        results.push(currentNode);
        if(currentNode.right) traverseBSTInOrder(currentNode.right);
    }
    traverseBSTInOrder(this.root);
    return results;
}