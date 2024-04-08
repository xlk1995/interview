// 第一题
function moveZero(nums) {
  let notZeroIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[notZeroIndex++] = nums[i];
    }
  }
  for (let i = notZeroIndex; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
}

// 第二题
// 单链表结构
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}
function reverseList(head) {
  let prev = null;
  let current = head;
  while (current !== null) {
    const temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }
  return prev;
}

// 第四题
function evalRPN(tokens) {
  const stack = [];

  for (const token of tokens) {
    if (!isNaN(parseInt(token))) {
      stack.push(parseInt(token));
    } else {
      const num2 = stack.pop();
      const num1 = stack.pop();
      switch (token) {
        case "+":
          stack.push(num1 + num2);
          break;
        case "-":
          stack.push(num1 - num2);
          break;
        case "*":
          stack.push(num1 * num2);
          break;
        case "/":
          stack.push(parseInt(num1 / num2));
          break;
      }
    }
  }

  return stack.pop();
}
