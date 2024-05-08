const { runRobot, randomRobot, goalOrientedRobot, shortestPathRobot, shortestPathRobot2, VillageState} = require('./07_robot');

function compareRobots(robot1, memory1, robot2, memory2) {
    let sum1 = 0, sum2=0
    const turns = 100
    for (let i = 0; i < turns; i++) {
        const task = VillageState.random(20)
        console.log(`\nTask #${i+1}`)
        sum1 += runRobot(task, robot1, memory1, true)
        sum2 += runRobot(task, robot2, memory2, true)
    }

    sum1/=turns, sum2/=turns

    console.log(`Avg. turns for robot 1: ${sum1}, robot 2: ${sum2}`)
  }
  
compareRobots(shortestPathRobot2, [], shortestPathRobot, []);

