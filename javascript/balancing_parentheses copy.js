function balancingParentheses(s) {
  const stack = [];
  for(let i=0;i<s.length;i++) {
    // switch(s[i]) {
    //   case '(':
    //     stack.push('(');
    //   case ')':
    //     if (stack[stack.length-1] === '(') {
    //       stack.pop();
    //     }
    //     else {
    //       stack.push(')')
    //     }
    //   default:
    //     break;
    // }
    if(s[i] === '(') {
      stack.push('(');
    }
    else if(s[i] === ')') {
      if (stack[stack.length-1] === '(') {
        stack.pop();
      }
      else {
        stack.push(')')
      }
    }
  }
  return stack.length;
}

if (require.main === module) {
  console.log("Expecting: 0");
  console.log(balancingParentheses('(()())'));

  console.log("");

  console.log("Expecting: 2");
  console.log(balancingParentheses('()))'));

  console.log("");

  console.log("Expecting: 1");
  console.log(balancingParentheses(')'));

  console.log("");

  console.log("Expecting: 1");
  console.log(balancingParentheses('('));
}

module.exports = balancingParentheses;

/**
 * 
 */
