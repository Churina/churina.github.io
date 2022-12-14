const testData = [
    {
        quizName: "History 1",
        quizModule: "History",
        quizScore: 70,
        studentId: 1,
        studentName: "Bob Ross",
        submissionDate: "12/20/2020"
    },
    {
        quizName: "History 1",
        quizModule: "History",
        quizScore: 77,
        studentId: 16,
        studentName: "Diana Ross",
        submissionDate: "12/20/2020"
    },
    {
        quizName: "History 1",
        quizModule: "History",
        quizScore: 82,
        studentId: 15,
        studentName: "Steve Smith",
        submissionDate: "12/20/2020"
    },
    {
        quizName: "History 1",
        quizModule: "History",
        quizScore: 88,
        studentId: 14,
        studentName: "Dylan Roberts",
        submissionDate: "12/20/2020"
    },
    {
        quizName: "History 2",
        quizModule: "History",
        quizScore: 82,
        studentId: 1,
        studentName: "Bob Ross",
        submissionDate: "1/20/2021"
    },
    {
        quizName: "History 2",
        quizModule: "History",
        quizScore: 89,
        studentId: 16,
        studentName: "Diana Ross",
        submissionDate: "1/20/2021"
    },

    {
        quizName: "History 2",
        quizModule: "History",
        quizScore: 73,
        studentId: 15,
        studentName: "Steve Smith",
        submissionDate: "1/20/2021"
    },

    {
        quizName: "History 2",
        quizModule: "History",
        quizScore: 85,
        studentId: 15,
        studentName: "Steve Smith",
        submissionDate: "1/20/2021"
    },
    {
        quizName: "Reading Comprehension",
        quizModule: "English",
        quizScore: 60,
        studentId: 15,
        studentName: "Steve Smith",
        submissionDate: "2/20/2020"
    },
    {
        quizName: "Reading Comprehension",
        quizModule: "English",
        quizScore: 83,
        studentId: 16,
        studentName: "Diana Ross",
        submissionDate: "2/20/2020"
    },
    {
        quizName: "Reading Comprehension",
        quizModule: "English",
        quizScore: 70,
        studentId: 14,
        studentName: "Dylan Roberts",
        submissionDate: "2/20/2020"
    }
    ];
    

 //  Filter By Date
const filterByDate = () => 
{
    const dataInput = document.getElementById("submission_date_input").value;
    document.getElementById("filter_by_data").innerHTML = "";
    let newArray = [];
    for (const thisTestData of testData) 
    {
        if (dataInput == thisTestData.submissionDate) 
        {
            newArray.push(thisTestData);
            document.getElementById("filter_by_data").innerHTML += 
            `Quiz name: ${thisTestData.quizName}.<br>
            Quiz module: ${thisTestData.quizModule}.<br>
            Quiz score: ${thisTestData.quizScore}.<br>
            Quiz student ID: ${thisTestData.studentId}.<br>
            Quiz student name: ${thisTestData.studentName}.<br>
            Submission date: ${thisTestData.submissionDate}.<hr>`  
        } 
    }
    if (newArray.length === 0) 
    {
        document.getElementById("filter_by_data").innerHTML = 'Sorrry, doesn\'t find any result.';
    }
}
document.querySelector('.date_button').addEventListener('click',filterByDate);


//Filter By Student Id
const filterByStudentId = () => 
{
    const dataInput = document.getElementById("studentId_input").value;
    document.getElementById("filter_by_student_id").innerHTML = "";
    let newArray = [];
    for (const thisTestData of testData)
    {
        if (dataInput == thisTestData.studentId)
        {
            newArray.push(thisTestData);
            document.getElementById("filter_by_student_id").innerHTML +=
            `Quiz name: ${thisTestData.quizName}.<br>
            Quiz module: ${thisTestData.quizModule}.<br>
            Quiz score: ${thisTestData.quizScore}.<br>
            Quiz student ID: ${thisTestData.studentId}.<br>
            Quiz student name: ${thisTestData.studentName}.<br>
            Submission date: ${thisTestData.submissionDate}.<hr>`  
        }
    }
    if (newArray.length === 0)
    {
        document.getElementById("filter_by_student_id").innerHTML = 'ID not found.';
    }
}
document.querySelector('.id_button').addEventListener('click',filterByStudentId);


//Find unsubmitted students
const UnsubmittedStudents = () =>
{
    const date = document.getElementById("unsubmitted_date_input").value;
    const allStudentNames = [];
    const submittedStudents = [];
    document.getElementById("find_unsubmitted").innerHTML = "";
    for(const thisTestData of testData)
    {
        if(!allStudentNames.includes(thisTestData.studentName))
        {
            allStudentNames.push(thisTestData.studentName)
        }
    }
    for(const thisTestData of testData)
    {
        if(date == thisTestData.submissionDate)
        {
            if (!submittedStudents.includes(thisTestData.studentName))
            {
                const currentStudentsIndex = allStudentNames.indexOf(thisTestData.studentName); 
                allStudentNames.splice(currentStudentsIndex,1); 
                submittedStudents.push(thisTestData.studentName);
            } 
        }
    }
    document.getElementById("find_unsubmitted").innerHTML = `Students without submission on date ${date} is: ${allStudentNames}.`
    
    if(allStudentNames.length == 0)
    {
        document.getElementById("find_unsubmitted").innerHTML =`All students have submitted their quizzes.`
    }
}
document.querySelector('.unsubmitted_button').addEventListener('click',UnsubmittedStudents);


/* 
The logic of above code is: 
totalStudents = 4;//hard coded
const getListOfStudents = (testData) => 
{
    const allStudentNames = [];//find and remove duplicates
    for(const thisTestData of testData)
    {
        if(!allStudentNames.includes(thisTestData.studentName))//Not already there
        {
            allStudentNames.push(thisTestData.studentName)//write it down
        }
    }
}
const UnsubmittedStudents = (allStudentNames) =>
{
    const date = document.getElementById("unsubmitted_date_input").value;//get data from input field
    const unsubmittedStudents = [...allStudentNames];//will remove those who have submitted from the list
    for(const thisTest of testData)//go through list
    {
        if(date == thisTest.submissionDate)//There is a Test, and we can remove
        {
            const currentStudentsIndex = unsubmittedStudents.indexOf(thisTest.studentName); 
            unsubmittedStudents.splice(currentStudentsIndex,1);//remove it
            document.getElementById("find_unsubmitted").innerHTML = `Students without submission on date ${date} is: ${unsubmittedStudents}.`
        }
    }
}
document.querySelector('.unsubmitted_button').addEventListener('click',UnsubmittedStudents);
*/



//Get average score
const getAverageQuizScore = () =>
{
    document.getElementById("average_score").innerHTML = "";
    const scoresArray = [];
    for (const thisTestData of testData)
    {
        scoresArray.push(thisTestData.quizScore);
    }
document.getElementById("average_score").innerHTML = (scoresArray.reduce((a,b) => a + b)/scoresArray.length).toFixed(1);
}                                                 
document.querySelector('.average_score_button').addEventListener('click',getAverageQuizScore);