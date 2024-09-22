/* JS Execution Context 
 Global Execution Context
 Function Execution Context 
 Eval Execution Context
*/

/* 
  Memory Creation Phase
  Execution Phase 
*/

let val1 = 10
let val2 = 5
function addNum(num1, num2) {
  let total = num1 + num2
  return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)

/*
1.Global Execution -> this 
2.Memory Phase -> val1 = undefined
                  val2 = undefined
                  addNum = definition
                  result1 = undefined
                  result2 = undefined
3.Execution Phase -> val1= 10
                     val2 = 5
                     addNum -> new variable environment + execution thread ->
                    1.Memory Phase ->
                     val1 = undefined
                     val2 = undefined
                     total = undefined
                    2.Execution Phase ->
                     num1 = 10
                     num2 = 5
                     total = 15
                     //total gets return to global execution context
                     //the function execution context gets deleted after this.
                     result1 = 15
                    addNum -> new variable environment + execution thread ->
                    1.Memory Phase ->
                     val1 = 10
                     val2 = 2
                     total = undefined
                    2.Execution Phase ->
                     num1 = 10
                     num2 = 2
                     total = 12
                     //total gets return to global execution context
                     //the function execution context gets deleted after this.
                     result2 = 12
*/

// Call stack is similar to call stack in other languages as java.