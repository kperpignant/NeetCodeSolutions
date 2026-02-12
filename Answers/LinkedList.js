//Design a Singly Linked List class.
class ListNode {
    constructor(val, nextNode = null) {
        this.val = val;
        this.next = nextNode;
    }
}

class LinkedList {
    constructor() {
        this.head = new ListNode(-1);
        this.tail = this.head;
    }

    get(index) {
        let curr = this.head.next;
        let i = 0;
        while (curr) {
            if (i === index) {
                return curr.val;
            }
            i++;
            curr = curr.next;
        }
        return -1;
    }

    insertHead(val) {
        const newNode = new ListNode(val);
        newNode.next = this.head.next;
        this.head.next = newNode;
        if (!newNode.next) {
            this.tail = newNode;
        }
    }

    insertTail(val) {
        this.tail.next = new ListNode(val);
        this.tail = this.tail.next;
    }

    remove(index) {
        let i = 0;
        let curr = this.head;
        while (i < index && curr) {
            i++;
            curr = curr.next;
        }

        if (curr && curr.next) {
            if (curr.next === this.tail) {
                this.tail = curr;
            }
            curr.next = curr.next.next;
            return true;
        }
        return false;
    }

    getValues() {
        let curr = this.head.next;
        const res = [];
        while (curr) {
            res.push(curr.val);
            curr = curr.next;
        }
        return res;
    }
}
