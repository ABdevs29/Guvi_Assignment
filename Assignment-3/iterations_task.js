var obj = [
    { person: "Name 1", age: "2", company: "GUVI" },
    { person: "Name 2", age: "5", company: "GUVI geek" },
    { person: "Name 3", age: "8", company: "GUVI geek network" },
  ]

  //For Loop Iteration
  for (let i = 0; i < obj.length; i++) {
    let obj1 = Object.entries(obj[i])
    for (let j = 0; j < obj1.length; j++) {
      console.log(obj1[j][0] + ":" + obj1[j][1]);
    }    
  }

  //For each Iteration
    obj.forEach(function (i) {
      Object.entries(i).forEach(function(j) {
        console.log(j[0] + ":" + j[1]);
      })
    })


  //For of Loop Iteration
    for (let i of obj) {
      for (let j of Object.entries(i)) {
       console.log(j[0] + ":" + j[1]);
     }
   }


  //For In Loop Iteration
  for (let i in obj) {
      for (let j in obj[i]) {
          console.log(j + ":" + obj[i][j]);
      }
  }