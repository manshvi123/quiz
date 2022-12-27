class Riddle{
constructor(num){
 this.questions = [
    {ques:"Introducing a man, a woman said ,'He is the only son of my mother's mother.'", ans:"niece"},
    {ques:"if 375 = CGF,then what is 428 = ?",ans:"DBH"},
    {ques:"what should come in the place of question mark (?)in the following alpha-nurmeric series? C-3,E-5,G-7,I-9,?,?",ans:"K-11,M-13"}
 ]  
 this.num = num 

 
}
showQues(){
    textSize(28)
  var quiz = this.num
  fill ("white")
  text(this.questions[quiz].ques,100,200)
  return (this.questions[quiz].ans)
}
}
