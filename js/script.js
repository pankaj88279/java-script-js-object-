news1={
    //p:v
    w1:"According",
    w2:" to the India",
    w3:"Today-Axis MyIndia exit poll",
    w4:"the AAP could win",
    w5:"between 149 and 171 seats in the MCD"
}
var news1 = news1.w1+' '+news1.w2+' '+news1.w3+` `+news1.w4+" "+news1.w5;
 console.log(news1.w1+' '+news1.w2+' '+news1.w3+` `+news1.w4+" "+news1.w5)
let n1=document.getElementById("n1").innerHTML ="This is news 1st"+" - "+ news1;

news2={
    //p:v
    w1:"PM Modi ",
    w2:"urged for making the",
    w3:" Winter Session more ",
    w4:" productive by",
    w5:"accommodating young "
   
}
var n2=(news2.w1+' '+news2.w2+` `+news2.w3+" "+news2.w4+' '+news2.w5);
var news2=document.getElementById('news2').innerHTML=n2;
n2=document.getElementById('news2').style.color="red"

  var news3={
                 //p:v
        w1:`There is a three-way`,
        w2:"battle between BJP candidate",
        w3:'Manibhai Vaghela',
        w4:"Congress candidate ",
        w5:`Jignesh Mevani and AAP candidate`

}
var news3=news3.w1+` `+news3.w2+' '+news3.w3+" "+news3.w4+" "+news3.w5
var n3=document.getElementById("n3").innerHTML=news3;


var news4={
    //p:v

    w1:"The national",
    w2:"security planners",
    w3:"believe that",
    w4:"publishing the",
    w5:"list of Kashmiri"
 
}
var news4=news4.w1+` `+news4.w2+' '+news4.w3+" "+news4.w4+` `+news4.w5
let x=document.getElementById('news4')
x.innerHTML=news4
x.style.color="green";

  var news5={
            // p:v
             w1:"Delhi MCD elections",
             w2:"Voting for control",
             w3:"of the Delhi",
             w4:"municipal corporation",
             w5:"was held on December 4",
  }

  var news5=news5["w1"]+` `+news5["w2"]+' '+news5["w3"]+" "+news5["w4"]+" "+news5["w5"]
  let n5=document.getElementById("n5").innerHTML=news5
  document.getElementById("n5").style.color="yellow";

  var news6={
            // p:v
            w1:"MCD election results",
            w2:"2022 LIVE",
            w3:"AAP wins 111 ",
            w4:"seats to",
            w5:"BJP 91",
            w6:"Congress routed"

  }
  var news6=news6["w1"]+' '+news6["w2"]+" "+news6["w3"]+` `+news6['w4']+' '+news6[`w5`]
  let n6=document.getElementById("n6").innerHTML=news6