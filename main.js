// Fibonacci series.

let f=parseInt(prompt("Enter number"));
a=0;
b=1;
document.write("Here is the Fibonacci series upto to "+f +" is");
document.write("<br>");
document.write(a+" "+b);
for(i=1;i<=f;i++){
	sum=a+b;
	a=b;
	b=sum;
	document.write(" "+sum+" ");
}