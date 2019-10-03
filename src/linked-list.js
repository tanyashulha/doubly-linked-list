const Node = require('./node');

class LinkedList {
    constructor() {
        this.head = null; 
        this.queue = null;
        this.size = 0; 
    }

    append(data) { 
    var node = new Node(data, this.queue); 

    var current; 
  
    // if list is Empty add the 
    // data and make it head 
    if (this.head == null) 
        this.head = node; 
    else { 
        current = this.head; 
  
        // iterate to the end of the 
        // list 
        while (current.next) { 
            current = current.next; 
        } 
  
        // add node 
        current.next = node; 
    } 
    this.size++; 
    }

    head() {}

    tail() {}

    at(index) {}

    insertAt(index, data) {
        if (index > 0 && index > this.size) 
        return false; 
    else { 
        // creates a new node 
        var node = new Node(data); 
        var curr, prev; 
  
        curr = this.head; 
  
        // add the data to the 
        // first index 
        if (index == 0) { 
            node.next = head; 
            this.head = node; 
        } else { 
            curr = this.head; 
            var it = 0; 
  
            // iterate over the list to find 
            // the position to insert 
            while (it < index) { 
                it++; 
                prev = curr; 
                curr = curr.next; 
            } 
  
            // adding an data 
            node.next = curr; 
            prev.next = node; 
        } 
        this.size++; 
    } 
    }

    isEmpty() {
        return this.size == 0; 
    }

    clear() {
        var current = this.head; 
    var prev = null; 
  
    // iterate over the list 
    while (current != null) { 
        // comparing data with current 
        // data if found then remove the 
        // and return true 
        if (current.data === data) { 
            if (prev == null) { 
                this.head = current.next; 
            } else { 
                prev.next = current.next; 
            } 
            this.size--; 
            return current.data; 
        } 
        prev = current; 
        current = current.next; 
    } 
    return -1; 
    }

    deleteAt(index) {
        var current = this.head; 
        var prev = null; 
  
    // iterate over the list 
    while (current != null) { 
        // comparing data with current 
        // data if found then remove the 
        // and return true 
        if (current.data === data) { 
            if (prev == null) { 
                this.head = current.next; 
            } else { 
                prev.next = current.next; 
            } 
            this.size--; 
            return current.data; 
        } 
        prev = current; 
        current = current.next; 
    } 
    return -1; 
    }

    reverse() {}

    indexOf(data) {
        var count = 0; 
        var current = this.head; 
   
    while (current.data != data) {  
        if (current.data === data) 
            return count; 
        count++; 
        current = current.next; 
    } 
  
    return -1; 
    }
}

module.exports = LinkedList;
