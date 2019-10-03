const Node = require('./node');

class LinkedList {
    constructor() {
        this.head = null; 
        this.tail = null;
        this.size = 0; 
    }

    append(data) { 
    var node = new Node(data, this.tail); 
        if (this.tail) this.tail.next = node;
        this.tail = node;
        if (!this.head) this.head = node;
        this.size++;
        return this;
    }

    head() {
        return this.head ? this.head.data : null;
    }

    tail() {
        return this.tail ? this.tail.data : null;
    }

    at(index) {
        var i = index;
        var node = this.head;
        while (i > 0) {
          if (node.next) node = node.next;
          else {
              this.nodeByIndex = null;
              return null;
          }
          i--;
        }
        this.nodeByIndex = node;
        if (!node) return null;
        return node.data;
    }

    insertAt(index, data) {
        if (index > 0 && index > this.size) 
        return false; 
        else { 
            var node = new Node(data); 
            var curr, prev; 
    
            curr = this.head; 
    
            if (index == 0) { 
                node.next = head; 
                this.head = node; 
            } else { 
                curr = this.head; 
                var it = 0; 
    
                while (it < index) { 
                    it++; 
                    prev = curr; 
                    curr = curr.next; 
                } 
    
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
        this.head = null;
        this.tail = null;
        this.size = 0;
        return this;
    }

    deleteAt(index) {
        this.at(index);
        if (this.nodeByIndex.prev) this.nodeByIndex.prev.next = this.nodeByIndex.next;
        if (this.nodeByIndex.next) this.nodeByIndex.next.prev = this.nodeByIndex.prev;
        if (this.nodeByIndex === this.head) this.head = this.nodeByIndex.next ? this.nodeByIndex.next : null;
        if (this.nodeByIndex === this.tail) this.tail = this.nodeByIndex.prev ? this.nodeByIndex.prev : null;
        return this;
    }

    reverse() {
        this.head = this.tail;
        var node = this.head;
        do {
          [node.next, node.prev] = [node.prev, node.next];
          if (node.next) node = node.next;
          else break;
        } while (node.next);
        this.tail = node;
        return this;
    }

    indexOf(data) {
        var node = this.head;
        var index = 0;
        while(node.data !== data) {
          if(node.next) {
            node = node.next;
            index ++;
          } else return -1;
        }
        return index;
      }
}

module.exports = LinkedList;
