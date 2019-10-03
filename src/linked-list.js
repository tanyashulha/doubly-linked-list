const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null; 
        this._tail = null;
        this.length = 0; 
    }

    append(data) { 
    var node = new Node(data, this._tail); 
        if (this._tail) this._tail.next = node;
        this._tail = node;
        if (!this._head) this._head = node;
        this.length++;
        return this;
    }

    head() {
        return this._head ? this._head.data : null;
    }

    tail() {
        return this._tail ? this._tail.data : null;
    }

    at(index) {
        var i = index;
        var node = this._head;
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
        if (index === 0)  this.at(0);
        else this.at(index - 1);
        var previousNode = this.nodeByIndex ? this.nodeByIndex : null;
        var nextNode = this.nodeByIndex ? this.nodeByIndex.next : null;
        var node = new Node(data, previousNode, nextNode);
        if (nextNode) {
        nextNode.prev = node;
        this.nodeByIndex.next = node;
        }
    return this;
    }

    isEmpty() {
        return this.length == 0; 
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        this.at(index);
        if (this.nodeByIndex.prev) this.nodeByIndex.prev.next = this.nodeByIndex.next;
        if (this.nodeByIndex.next) this.nodeByIndex.next.prev = this.nodeByIndex.prev;
        if (this.nodeByIndex === this._head) this._head = this.nodeByIndex.next ? this.nodeByIndex.next : null;
        if (this.nodeByIndex === this._tail) this._tail = this.nodeByIndex.prev ? this.nodeByIndex.prev : null;
        return this;
    }

    reverse() {
        this._head = this._tail;
        var node = this._head;
        do {
          [node.next, node.prev] = [node.prev, node.next];
          if (node.next) node = node.next;
          else break;
        } while (node.next);
        this._tail = node;
        return this;
    }

    indexOf(data) {
        var node = this._head;
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
