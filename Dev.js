let List = {
        "students": [
            {"roll_no": 101,
            "details": {
                "name": "ajay",
                "marks": 42,
                "age": 20
            }
            },
            {"roll_no": 102,
            "details": {
                "name": "amit",
                "marks": 45,
                "age": 21
            }
            },
            {"roll_no": 103,
            "details": {
                "name": "ramesh",
                "marks": 31,
                "age": 21
            }
            }
    ]
}


//Method one
const getStudentsWithMarksMoreThan = (obj) => {
   let mark = prompt("enter your marks")
    return List.students.filter((data) => {
        return data.details.marks > mark;
    })
}

getStudentsWithMarksMoreThan(List)

// Method Two

const getStudentsWithMarksMoreThan = (List) => {
    let len = List.students.length;
    let grade = prompt("enter your number")
    let arr = [];
    for(let i = 0; i < len ; i++){
        if(List.students[i].details.marks > grade) {
            arr.push(List.students[i])
        }
    }  return arr
}
getStudentsWithMarksMoreThan(List)
