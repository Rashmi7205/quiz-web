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
        question:"full form of html?",
        opt1:"option one",
        opt2:"option two",
        opt3:"hyper text mark up language",
        opt4:"option four",
        ans:"hyper text mark up language"
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
        question:"How many keywords present in c?",
        opt1:"90",
        opt2:"89",
        opt3:"32",
        opt4:"None of the above",
        ans:"32"
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
