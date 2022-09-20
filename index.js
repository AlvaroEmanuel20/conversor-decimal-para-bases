class Stack {
    #items;

    constructor() {
        this.#items = [];
    }

    push(...values) {
        this.#items.push(...values);
    }

    pop() {
        return this.#items.pop();
    }

    size() {
        return this.#items.length;
    }

    isEmpty() {
        return this.#items.length === 0;
    }

    clear() {
        this.#items = [];
    }
}

function baseConverter() {
    const baseD = document.getElementById("baseD");
    const number = document.getElementById("number");

    const baseStack = new Stack();
    const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numDec = number.value;
    let numBase;
    let baseString = "";

    if(!(baseD.value >= 2 && baseD.value <= 36)) return "";

    while(numDec > 0) {
        numBase = Math.floor(numDec % baseD.value);
        baseStack.push(numBase);
        numDec = Math.floor(numDec / baseD.value);
    }

    while(!baseStack.isEmpty()) {
        baseString += digits[baseStack.pop()];
    }

    baseD.value = "";
    number.value = "";
    document.getElementById("result").value = baseString;
}
