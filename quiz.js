
console.log("connected");

let q=[
    {
        question:"Father of c?",
        opt1:"dennis rtchie",
        opt2:"xyz sharma",
        opt3:"Virat kohli",
        opt4:"pata nahi",
        ans:"dennis rtchie"
    },
    {
        question:"In which year it is invented?",
        opt1:"1945",
        opt2:"1974",
        opt3:"1946",
        opt4:"None of the above",
        ans:"1974"
    },
    {
        question:"How many keywords present in c?",
        opt1:"90",
        opt2:"89",
        opt3:"32",
        opt4:"None of the above",
        ans:"32"
    },
    {
        question:"C is a Statically typed lanuage?",
        opt1:"true",
        opt2:"false",
        opt3:"partially true",
        opt4:"None of the above",
        ans:"true"
    },
    {
        question:"How many types of data type present in c?",
        opt1:"4",
        opt2:"6",
        opt3:"8",
        opt4:"10",
        ans:"4"
    },
    {
        question:"Sizeof(int ) will return the _ value?",
        opt1:"5",
        opt2:"2",
        opt3:"9",
        opt4:"4",
        ans:"4"
    },
    {
        question:"Oerator overloadding is suppoted by c?",
        opt1:"true",
        opt2:"false",
        opt3:"none of the above",
        opt4:"in some cases supported",
        ans:"false"
    },
    {
        question:"What is pointer?",
        opt1:"variable stores address",
        opt2:"variable stores data",
        opt3:"All the above",
        opt4:"None of the above",
        ans:"variable stores address"
    },
    {
        question:"array is a __ type of data type?",
        opt1:"user defined",
        opt2:"pre defined",
        opt3:"derived",
        opt4:"basic",
        ans:"derived"
    },
    {
        question:"Dynamic memory alloctaion done by :",
        opt1:"malloc()",
        opt2:"sum()",
        opt3:"add()",
        opt4:"mul()",
        ans:"malloc()"
    }

   
];
    let j=0;
    let count=0;
    let ques=document.querySelector(".question");
    let op1=document.getElementById("option1");
    let op2=document.getElementById("option2");
    let op3=document.getElementById("option3");
    let op4=document.getElementById("option4");
    let bt=document.getElementById("btn");
    let qno=document.getElementById("count");
    let main=document.querySelector(".main");
    ques.innerHTML="instructions";
    op1.innerHTML="Select one of the option";
    op2.innerHTML="Selected options cannot be changed";
    op3.innerHTML="At last you will able to get your score";
    op4.innerHTML="ALL THE BEST!";
    bt.innerText="Let's start";
     function res()
        {
            if(j<q.length)
            {
            qno.innerText=j+1;
           ques.innerHTML=q[j].question;
           op1.innerHTML=q[j].opt1;
           op2.innerHTML=q[j].opt2;
           op3.innerHTML=q[j].opt3;
           op4.innerHTML=q[j].opt4;
           bt.innerText="Next"
           j++;
           op1.style.backgroundColor="white";
           op2.style.backgroundColor="white";
           op3.style.backgroundColor="white";
           op4.style.backgroundColor="white";
            }
            else
            {
                main.innerHTML="YOU HAVE SCORED"+"<br>"+count+"/"+j;
                main.style.fontSize='1.5em';
                main.style.textAlign='center';
                main.style.color='#E7F6F2';
            }
        }
 function ans(ele)
 {
    if(ele.innerHTML==q[j-1].ans && ele.style.backgroundColor=='white')
        {
           count++;
             ele.style.backgroundColor="green";
            console.log(count);
         }
         else
         {
             ele.style.backgroundColor="red";
         } 
         setTimeout(res,500); 
 }       
