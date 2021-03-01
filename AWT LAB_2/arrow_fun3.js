/*let person = function(name,age)
{
    this.name = name ;
    this.age = age ;

    this.display = function()   {
                                    setTimeout( function() { console.log(this.name); },1000 );        
                                }
}
var person1 = new person('ajay',24);
person.display();
*/


function display()   
{
    setTimeout( function() { console.log("Hello World !!!"); },1000 );        
                        
}
display(); 