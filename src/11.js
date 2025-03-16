  function solveMathProblems() {
    const problems = [
      {
        problem: "2 + 2",
        solution: 4
      },
      {
        problem: "10 - 2",
        solution: 8
      },
      {
        problem: "5 * 5",
        solution: 25
      }
    ];
  
    const randomProblem = problems[Math.floor(Math.random() * problems.length)];
  
    return `The random math problem is: ${randomProblem.problem}. The solution is ${randomProblem.solution}`;
  }
  