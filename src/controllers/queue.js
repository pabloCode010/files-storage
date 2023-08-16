class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
        this.active = false;
    }
    isEmpty(){
        return this.head === null;
    }
    enqueue(value){
        const node = new Node(value);
        if (this.isEmpty()){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node
            this.tail = node;
        }
        this.length++;
    }
    dequeue(){
        if (this.isEmpty()){
            throw new Error("The queue is empty");
        }
        const { value } = this.head;
        this.head = this.head.next;
        this.length--;
        return value
    }
    async run(){
        if (this.isEmpty()){
            throw new Error("The queue is empty");
        }
        this.active = true;
        while(!this.isEmpty()){
            // console.log("Writing ...");
            try {
                await this.dequeue()();
            } catch (error) {
                console.error(error);
            }
            // console.log("end ...");
        }
        this.active = false;
    }
    print(){
        if (this.isEmpty()){
            return console.log("{ }");
        }
        let node = this.head 
        while(node){
            console.log(`{ "value": ${node.value} } --->`);
            node = node.next
        }
    }
}

const queue = new Queue();

module.exports = queue;