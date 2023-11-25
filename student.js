function subject(sci,mat,soc,eng,hin){
    this.science=sci;
    this.maths=mat;
    this.social_science=soc;
    this.english=eng;
    this.hindi=hin;
}

function student(name,roll,clas,section,subject){
    this.name=name;
    this.roll_no=roll;
    this.class=clas;
    this.section=section;
    this.subject=subject;

    this.printTop3Subjects=function(){
        let obj={};
         for(let index in subject)
         {
            let count=0;
            let current=subject[index];
            for(let index2 in subject){
                if(current<subject[index2]){
                    count++;
                }
            }
            if(count<=2){
                obj[index]=subject[index];
            }
         }
         console.log("Top3Subjects=",obj);
    }
    this.printReportCard=function(){
        console.log("REPORT CARD");
        console.log("");
        console.log("Name:-",this.name);
        console.log("Roll no:-",this.roll_no);
        console.log("Class:-",this.class)
        console.log("Section:-",this.section);
        console.log("Science:-",this.subject.science);
        console.log("Maths:-",this.subject.maths);
        console.log("S.Sc:-",this.subject.social_science);
        console.log("English:-",this.subject.english);
        console.log("Hindi:-",this.subject.hindi);
        let sum=this.subject.science+this.subject.social_science+this.subject.maths+this.subject.english+this.subject.hindi;
        let per=sum/500;
        let Fper=per*100;
        console.log("Percentage:-",Fper,"%");
    }
}

let sub1=new subject(100,72,43,54,85);
console.log(sub1);
let stu1=new student("Nitish",1,2,"A",sub1);
console.log(stu1);
stu1.printReportCard();
stu1.printTop3Subjects();