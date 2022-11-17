class CircularLinkedListNode<T> {
  private _previous: CircularLinkedListNode<T> | null;
  private _next: CircularLinkedListNode<T> | null;
  private _value: T;
  private _index: number = 0;
  constructor(value: T) {
    this._previous = this;
    this._next = this;
    this._value = value;
  }

  get index(): number {
    return this._index;
  }
  set index(value: number) {
    this._index = value;
  }
  get previous(): CircularLinkedListNode<T> {
    return this._previous!;
  }

  set previous(value: CircularLinkedListNode<T>) {
    this._previous = value;
  }

  get next(): CircularLinkedListNode<T> {
    return this._next!;
  }

  set next(value: CircularLinkedListNode<T>) {
    this._next = value;
  }

  get value(): T {
    return this._value;
  }

  set value(value: T) {
    this._value = value;
  }
}

export class SliderList<T> {
  private _head: CircularLinkedListNode<T> | null;
  private _tail: CircularLinkedListNode<T> | null;
  private _length: number;
  constructor() {
    this._head = null;
    this._tail = null;
    this._length = 0;
  }

  get head(): CircularLinkedListNode<T> {
    return this._head!;
  }

  get tail(): CircularLinkedListNode<T> {
    return this._tail!;
  }

  get length(): number {
    return this._length;
  }

  append(value: T) {
    const newNode = new CircularLinkedListNode(value);

    if (!this._head) {
      this._head = newNode;
      this._tail = newNode;
      return;
    }

    this._tail!.next = newNode;
    newNode.previous = this._tail!;
    this._tail = newNode;
    newNode.next = this._head;
    this.head.previous = this._tail;
    this._length++;
    this.tail.index = this._length;
  }

  prepend(value: T) {
    const newNode = new CircularLinkedListNode(value);

    if (!this._head) {
      this._head = newNode;
      this._tail = newNode;
      return;
    }

    newNode.next = this._head;
    this._head.previous = newNode;
    this._head = newNode;
    this._length++;
  }

  delete(value: T) {
    if (!this._head) {
      return;
    }

    while (this._head && this._head!.value === value) {
      this._head = this._head.next;
    }

    let currentNode = this._head;

    while (currentNode.next) {
      if (currentNode.next.value === value) {
        currentNode.next = currentNode.next.next;
      } else {
        currentNode = currentNode.next;
      }
    }

    if (this._tail!.value === value) {
      this._tail = currentNode;
    }
  }
  getAt(index: number): CircularLinkedListNode<T> | null {
    if (!this._head) {
      return null;
    }
    let counter = 0;
    let currentNode = this._head;
    while (currentNode) {
      if (counter === index) {
        return currentNode;
      }
      counter++;
      currentNode = currentNode.next;
    }
    return null;
  }

  toArray(): T[] {
    let index = 0;
    const elements: T[] = [];
    let currentNode = this._head;

    while (currentNode) {
      elements.push(currentNode.value);
      currentNode = currentNode.next;
      index++;
      if (index > this._length) {
        break;
      }
    }

    return elements;
  }
}
