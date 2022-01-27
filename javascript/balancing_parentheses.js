function balancingParentheses(string) {
  let stack = [];
  for(let i=0; i<string.length; i++){
    if(stack.length===0 || string[i]==="("){
      stack.push(string[i]);
    }
    else {
      if(stack[stack.length-1]==="("){
        stack.pop();
      }
      else {
        stack.push(string[i]);
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
 * 1. paraphrase
 * 
 * return num of unclosed/unmatched parens in string of parens
 * 
 * 2. tests
 * 
 * '('
 * 
 * 3. pseudocode
 * 
 * create stack. pop off an open paren if followed by a close.
 * return length of array at end.
 * 
 * 4. code
 * 5. refactor
 * 6. optimize if time
 */
