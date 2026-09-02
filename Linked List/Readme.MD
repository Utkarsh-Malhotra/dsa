LinkedListProblems:
  - title: "Find Kth Node From End"
    type: "Interview Question"
    description: >
      Implement a member function called `findKthFromEnd(k)` that finds and returns the kth node from the end of the linked list.
      Note: This LinkedList implementation does not have a length member variable.
    output: >
      Return the kth node from the end of the linked list.
      If the value of k is greater than or equal to the number of nodes in the list, return null.
    constraints:
      - "No additional data structures (e.g., arrays) are allowed."
      - "Do not modify the existing data structure."
      - "Only one traversal of the linked list is allowed."
    examples:
      - example: 1
        input: [1, 2, 3, 4, 5]
        k: 2
        result: 4
      - example: 2
        input: [1, 2, 3, 4, 5, 6]
        k: 4
        result: 3
    functionImplementation: |
      findKthFromEnd(index) {
          let slow = this.head;
          let fast = this.head;
          
          for(let i = 0; i < index; ++i) {
              if(fast === null) {
                  return null;
              }
              fast = fast.next;
          }
          while(fast) {
              slow = slow.next;
              fast = fast.next;
          }
          return slow;
      }
    analogy:
      title: "Two Cars on a Road"
      description: >
        Imagine: a fast car starts driving first and gets k miles ahead.
        The slow car starts after and drives at the same speed.
        When the fast car reaches the end of the road, the slow car is exactly k miles behind.
        That’s all we’re doing in the linked list — but instead of distance, it’s nodes.

  - title: "Find Middle Node"
    type: "Interview Question"
    description: >
      Implement a member function called `findMiddleNode()` that finds and returns the middle node of a linked list.
      Note: This LinkedList implementation does not have a length member variable.
    output: >
      Return the middle node of the linked list.
      If the list has an even number of nodes, return the second middle node (the one closer to the end).
    constraints:
      - "No additional data structures (e.g., arrays) are allowed."
      - "Do not modify the existing data structure."
      - "Only one traversal of the linked list is allowed."
    examples:
      - example: 1
        input: [1, 2, 3, 4, 5]
        result: 3
      - example: 2
        input: [1, 2, 3, 4, 5, 6]
        result: 4
    algorithmExplanation: >
      The `findMiddleNode()` function uses the "tortoise and hare" algorithm to find the middle node of a linked list:
      1. **Initialization**: Two pointers (`slow` and `fast`) are initialized to point to the head of the linked list.
      2. **Traversal**: The list is traversed using a `while` loop, where:
         - `slow` pointer moves one step at a time (`slow = slow.next`).
         - `fast` pointer moves two steps at a time (`fast = fast.next.next`).
      3. **Termination**: The loop continues as long as `fast` and `fast.next` are not `null`. When the loop ends, the `slow` pointer will be at the middle node:
         - For an **odd number of nodes**, the `slow` pointer points to the exact middle node.
         - For an **even number of nodes**, the `slow` pointer points to the second middle node (closer to the end).
         - What happens as the loop runs?
              Think of the total number of iterations the loop can execute:
              Let’s say the list has n nodes.
              fast moves 2 steps per loop
              So the loop can run roughly n / 2 times before fast becomes null
              Which means:
              slow moves n / 2 steps (because it moves 1 per loop)

              So slow ends up at the middle node.
                  functionImplementation: |
                    findMiddleNode() {
                        let slow = this.head;
                        let fast = this.head;
                        
                        while(fast && fast.next) {
                            slow = slow.next;
                            fast = fast.next.next;
                        }
                        
                        return slow;
                    }

  - title: "Detect Cycle in Linked List"
    type: "Interview Question"
    description: >
      Write a method called `hasLoop` that is part of the linked list class.
      The method should detect if there is a cycle or loop in the linked list.
    output: >
      Return `true` if the linked list contains a loop.
      Return `false` if the linked list does not contain a loop.
    constraints:
      - "No additional data structures (e.g., arrays) are allowed."
      - "Do not modify the existing data structure."
      - "Only one traversal of the linked list is allowed."
    examples:
      - example: 1
        input: [1, 2, 3, 4, 5] (No loop)
        result: false
      - example: 2
        input: [1, 2, 3, 4, 5] with a loop back to the second node
        result: true
    algorithmExplanation: >
      The `hasLoop()` method uses Floyd's cycle-finding algorithm:
      1. **Initialization**: Two pointers (`slow` and `fast`) are initialized to point to the head of the linked list.
      2. **Traversal**:
         - The `slow` pointer moves one step at a time (`slow = slow.next`).
         - The `fast` pointer moves two steps at a time (`fast = fast.next.next`).
      3. **Cycle Detection**:
         - If there is a loop, the `slow` and `fast` pointers will eventually meet.
         - If the `fast` pointer reaches the end of the list (`null`), there is no loop.
      4. **Return**:
         - If the pointers meet, return `true` (there is a loop).
         - If the `fast` pointer reaches the end, return `false` (no loop).
    functionImplementation: |
      hasLoop() {
          let slow = this.head;
          let fast = this.head;
          
          while(fast && fast.next) {
              slow = slow.next;
              fast = fast.next.next;
              if(slow === fast) {
                  return true;
              }
          }
          return false;
      }
LinkedListProblems:
  
  - title: "Partition List"
    type: "Interview Question"
    difficulty: "Advanced"
    caution: >
      This is a significantly more challenging Linked List problem. 
      Students often find it demanding, so it's okay to set it aside and revisit later. 
      Use a hands-on approach and visually map out each step on paper to build understanding.
    description: >
      Implement a member function called `partitionList(x)` that partitions the linked list so that all nodes 
      with values less than `x` come before nodes with values greater than or equal to `x`. 
      The original relative order of the nodes in each partition should be preserved.
    input: 
      - "An integer x, the partition value."
    output: >
      The function should modify the linked list in-place. 
      All nodes with values less than x appear before nodes with values greater than or equal to x.
    constraints:
      - "Do not use additional data structures (e.g., arrays)."
      - "Do not modify the existing data structure."
      - "Only a single traversal of the list is allowed."
      - "You may create temporary dummy nodes to simplify implementation."
      - "Do not modify node values — only their next pointers."
    tips:
      - "Maintain two separate chains: one for nodes < x, one for nodes >= x."
      - "Use dummy nodes to easily manage the start of each chain."
      - "Connect the two chains at the end."
    examples:
      - example: 1
        input:
          list: [3, 8, 5, 10, 2, 1]
          x: 5
        process:
          lessThanX: [3, 2, 1]
          greaterOrEqualX: [8, 5, 10]
        output: [3, 2, 1, 8, 5, 10]
      - example: 2
        input:
          list: [1, 4, 3, 2, 5, 2]
          x: 3
        process:
          lessThanX: [1, 2, 2]
          greaterOrEqualX: [4, 3, 5]
        output: [1, 2, 2, 4, 3, 5]
    functionImplementation: |
      partitionList(x) {
          if(!this.head) return null;
          
          const dummy1 = new Node(0);
          const dummy2 = new Node(0);
          let prev1 = dummy1;
          let prev2 = dummy2;
          let curr = this.head;
          
          while(curr) {
              if(curr.value < x) {
                  prev1.next = curr;
                  prev1 = prev1.next;
              } else {
                  prev2.next = curr;
                  prev2 = prev2.next;
              }
              curr = curr.next;
          }
          prev2.next = null;
          prev1.next = dummy2.next;
          this.head = dummy1.next;
      }

  - title: "Remove Duplicates"
  type: "Interview Question"
  difficulty: "Moderate"
  description: >
    Implement a member function called `removeDuplicates()` that removes all duplicate nodes 
    from the linked list based on their values.
    This linked list class does NOT have a tail, which simplifies the method.
  output: >
    The function should modify the linked list in-place, removing all nodes with duplicate values.
  constraints:
    - "You are allowed to use the JavaScript Set data structure to keep track of unique node values."
    - "You must update the length of the linked list after removing duplicates."
  examples:
    - example: 1
      input:
        list: [1, 2, 3, 2, 1, 4]
      output: [1, 2, 3, 4]
    - example: 2
      input:
        list: [3, 3, 3]
      output: [3]
  solutions:
    - name: "Solution 1 O(n) time complexity O(n) space complexity"
      implementation: |
        removeDuplicates() {
            let current = this.head;
            if(!current) return this;
            
            let uniqueSet = new Set();
            uniqueSet.add(current.value);
            
            while(current.next) {
                if(uniqueSet.has(current.next.value)) {
                    let temp = current.next;
                    current.next = temp.next;
                    temp.next = null;
                    this.length--;
                } else {
                    uniqueSet.add(current.next.value);
                    current = current.next;
                } 
            }
            return this;
        }
    - name: "Solution 2 O(n) time complexity O(n) space complexity"
      implementation: |
        removeDuplicates() {
            const values = new Set();
            let previous = null;
            let current = this.head;
            while (current !== null) {
                if (values.has(current.value)) {
                    previous.next = current.next;
                    this.length -= 1;
                } else {
                    values.add(current.value);
                    previous = current;
                }
                current = current.next;
            }
        }
    - name: "Solution 1 O(n) time complexity O(1) space complexity(if sorted)"
      implementation: |
        removeDuplicates() {
            let curr = linkedList;
              while(curr != null) {
                let nextDistinctNode = curr.next;
                while(nextDistinctNode != null && (curr.value === nextDistinctNode.value)) {
                  nextDistinctNode = nextDistinctNode.next;
                }
                curr.next = nextDistinctNode;
                curr = nextDistinctNode;
              }
              return linkedList;
        }
  - title: "Binary to Decimal"
  type: "Interview Question"
  difficulty: "Intermediate"
  description: >
    You have a linked list where each node represents a binary digit (0 or 1). 
    The goal of the `binaryToDecimal()` function is to convert this binary number, 
    represented by the linked list, into its decimal equivalent.
  input: 
    - "A singly linked list where each node holds a binary digit (0 or 1), with the head representing the leftmost digit."
  output: >
    An integer representing the decimal equivalent of the binary number stored in the linked list.
  explanation: >
    In binary-to-decimal conversion, each digit corresponds to a power of 2, starting from the rightmost digit. 
    For example, the binary number 101 is interpreted as:
      - 1 × 2² = 4
      - 0 × 2¹ = 0
      - 1 × 2⁰ = 1
    Adding these together gives the decimal number 5.
  process: >
    - Initialize a variable `num` to 0.
    - Traverse the list from the head.
    - For each node:
      - Multiply `num` by 2 (left shift).
      - Add the current node’s value to `num`.
    - Return `num` after processing all nodes.
  examples:
    - example: 1
      input:
        list: [1, 0, 1]
      steps:
        - num = 0
        - num = 0 * 2 + 1 = 1
        - num = 1 * 2 + 0 = 2
        - num = 2 * 2 + 1 = 5
      output: 5
    - example: 2
      input:
        list: [1, 1, 1]
      steps:
        - num = 0
        - num = 0 * 2 + 1 = 1
        - num = 1 * 2 + 1 = 3
        - num = 3 * 2 + 1 = 7
      output: 7
  functionImplementation: |
    binaryToDecimal() {
        let current = this.head;
        let num = 0;
        while(current) {
            num = num * 2 + current.value;
            current = current.next;
        }
        return num;
    }

  - title: "Reverse Between"
  type: "Interview Question"
  difficulty: "Advanced"
  caution: >
    ⚠️ Advanced Challenge Alert: Linked List Mastery!

    Welcome to what many consider the pinnacle of Linked List challenges in this course! 
    This exercise is not just a test of your coding skills, but also a measure of your problem-solving ability 
    and understanding of complex data structures.

    Visualize the Problem: Before diving into coding, sketch out the linked list and visualize each step. 
    This approach isn’t just for beginners — seasoned developers do the same.

    Seek Understanding Over Speed: Take your time to really grasp the problem. Deep understanding is the goal.

    It's Okay to Take a Break: Return later if stuck — new insights often come with a fresh perspective.

    Approach Like a Pro: Use this exercise to plan, analyze, and code like a professional.
  description: >
    Implement a member function called `reverseBetween(m, n)` that reverses the nodes between indexes 
    `m` and `n` (inclusive) in the linked list. Use 0-based indexing.

    The function should reverse the nodes in-place.
  input: 
    - "Two integers m and n representing the start and end indices of the reversal range (0-based)."
  output: >
    The linked list should be modified in-place with the nodes between indexes m and n reversed.
  constraints:
    - "You are not allowed to use any additional data structures (e.g., arrays)."
    - "You must not modify the existing node structure."
    - "Only one traversal of the list is allowed."
    - "The linked list does not have a tail."
    - "m and n are always valid and in bounds."
  examples:
    - example: 1
      input:
        list: [1, 2, 3, 4, 5]
        m: 1
        n: 3
      output: [1, 4, 3, 2, 5]
    - example: 2
      input:
        list: [1, 2, 3, 4, 5, 6]
        m: 3
        n: 5
      output: [1, 2, 3, 6, 5, 4]
  functionImplementation: |
    reverseBetween(m, n) {
        if(!this.head) return null;

        let dummy = new Node(0);
        let prev = dummy;
        dummy.next = this.head;

        for(let i = 0; i < m; i++) {
            prev = prev.next;
        }

        let current = prev.next;

        for(let i = 0; i < n - m; i++) {
            let toMove = current.next;
            current.next = toMove.next;
            toMove.next = prev.next;
            prev.next = toMove;
        }

        this.head = dummy.next;
    }


DoublyLinkedListProblems
- title: "DLL: Palindrome Checker"
  type: "Interview Question"
  difficulty: "Intermediate"
  caution: >
    🔁 One-Way Trip: Only One Traversal Allowed!

    In this challenge, you're tasked with checking whether a doubly linked list is a palindrome — 
    but there's a twist: you can only traverse the list once!

    Doubly linked lists allow movement in both directions, but resist the temptation to overuse this 
    feature. Stick to one pass and plan carefully.

    Optimize for Simplicity: Focus on the symmetry of values — just compare front and back nodes as you move inward.

  description: >
    Implement a member function called `isPalindrome()` that checks if a doubly linked list 
    is a palindrome.

    A doubly linked list is a palindrome if the sequence of values from the head to the tail 
    is the same as the sequence from the tail to the head.

  input: 
    - "A doubly linked list with integer values."
  output: >
    Return a boolean value: `true` if the doubly linked list is a palindrome, and `false` otherwise.
  constraints:
    - "You can only traverse the doubly linked list once."
  examples:
    - example: 1
      input:
        list: [1, 2, 3, 2, 1]
      output: true
    - example: 2
      input:
        list: [3, 1, 2]
      output: false
  functionImplementation: |
    isPalindrome() {
        if (this.length === 0 || this.length === 1) return true;
        
        let forwardNode = this.head;
        let backwardNode = this.tail;
        
        for (let i = 0; i < Math.floor(this.length / 2); i++) {
            if (forwardNode.value !== backwardNode.value) {
                return false;
            }
            forwardNode = forwardNode.next;
            backwardNode = backwardNode.prev;
        }
        return true;
    }
