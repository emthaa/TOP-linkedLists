function createLinkedList() {
    let head = null;
    let listSize = 0;

    function append(value) {
        const newNode = new Node(value);

        if (head === null) {
            head = newNode;
        } else {
            // Find the tail node
            let pointer = head;
            while (pointer.nextNode !== null) {
                pointer = pointer.nextNode;
            }

            pointer.nextNode = newNode;
        }

        listSize++;
    }


    function prepend(value) {
        // Implement prepend logic here
    }

    function size() {
        return listSize
    }

    function getHead() {
        return head
    }

    function getTail() {

        let pointer = head;
        if (pointer == null) {
            return null
        }
        if (pointer.nextNode == null) {
            return pointer
        }
        while (pointer.nextNode !== null) {
            pointer = pointer.nextNode;
        }
        return pointer
    }

    function at(index) {
        let pointer = head;
        let countingIndex = 0

        if (index <= listSize - 1 && index >= 0) {


            while (pointer.nextNode !== null) {
                if (index == countingIndex) {
                    return pointer
                } else {
                    pointer = pointer.nextNode;
                    countingIndex++
                }
            }
            return pointer
        } else {
            return null
        }
    }

    function pop() {
        let pointer = head;
        while (pointer.nextNode !== null) {
            pointerBefore = pointer
            pointer = pointer.nextNode;

        }
        console.log(pointerBefore, pointer)
        listSize--
        pointerBefore.nextNode = null


    }

    function contains(value) {

        let pointer = head;
        while (pointer.nextNode !== null) {
            if (pointer.value == value) {
                return true
            }
            pointer = pointer.nextNode;

        }
        if (pointer.value == value) {
            return true
        }
        return false

    }

    function find(value) {

        let pointer = head;
        let countingIndex = 0

        while (pointer.nextNode !== null) {
            if (pointer.value == value) {
                return countingIndex
            }
            pointer = pointer.nextNode;
            countingIndex++

        }
        if (pointer.value == value) {
            return countingIndex
        }
        return null
    }

    function toString() {
        if(listSize === 0 ){
          return
        }else{
        let pointer = head;
        let toConsole = `( ${pointer.value} ) -> `
        while (pointer.nextNode !== null) {
            toConsole = toConsole + `( ${pointer.nextNode.value} ) -> `
            pointer = pointer.nextNode;
        }

        toConsole = toConsole + null
        return toConsole
        }
    }

 function insertAt(value, index) {
    if (index < 0 || index > listSize) {

        return;
    }

    const newNode = new Node(value);

    if (index === 0) {

        newNode.nextNode = head;
        head = newNode;
    } else {
        let pointer = head;
        let prevPointer = null;
        let currentIndex = 0;

        while (currentIndex < index) {
            prevPointer = pointer;
            pointer = pointer.nextNode;
            currentIndex++;
        }

        newNode.nextNode = pointer;
        prevPointer.nextNode = newNode;
    }

    listSize++;
}

function removeAt(index) {
  if (index < 0 || index >= listSize) {
    return;
  }

  if (index === 0) {
    // Removing the head of the list
    head = head.nextNode;
  } else {
    let currentIndex = 0;
    let pointer = head;
    let prevPointer = null;

    while (currentIndex < index) {
      prevPointer = pointer;
      pointer = pointer.nextNode;
      currentIndex++;
    }

    prevPointer.nextNode = pointer.nextNode;
  }

  listSize--;
}


    return {
        head,
        listSize,
        append,
        prepend,
        size,
        getHead,
        getTail,
        at,
        pop,
        contains,
        find,
        toString,
        insertAt,
        removeAt,
    };
}

function Node(value = null, nextNode = null) {
    return {
        value: value,
        nextNode: nextNode,
    };
}

let linkedList = createLinkedList();
linkedList.append(6);
linkedList.append(9);
linkedList.append(8);
linkedList.append(2);

console.log(linkedList.getHead())
console.log(linkedList.size())
console.log(linkedList.getTail())
console.log(linkedList.find(9))
console.log(linkedList.toString())
// linkedList.insertAt(2,2);
linkedList.removeAt(2)
console.log(linkedList.toString())
linkedList.removeAt(2)
console.log(linkedList.toString())
linkedList.removeAt(0)
console.log(linkedList.toString())
linkedList.removeAt(0)
console.log(linkedList.toString())