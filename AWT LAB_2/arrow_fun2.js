//with normal function
/*function value(p,t,r)
{
    
    i = (p*t*r);
    a = i + p;
    b = a + t;
    return (a+b);
}
console.log(value(1,2,3));
*/

//arrow function with multiple lines
value = (p,t,r) => 
{  i = (p*t*r);
    a = i + p;
    b = a + t;
    return (a+b); 
}
console.log(value(1,2,3));

