//Q: Convert the given object into an array using $.map function to have a output like this:
    //
    //[
    //    {name: 'tom yip', data: 6},
    //    {name: 'faiz lurman', data: 6},
    //    {name: 'wai yan', data: 6}
    //]


var x = { 
	'tom' : { data: [1, 2, 3], last: 'yip' },
	'faiz' : { data: [1, 2, 3], last: 'lurman' },
  'wai' : { data: [1, 2, 3], last: 'yan' },
}


// Therefore, convert it to a real array

 
// Now it can be used reliably with $.map()
var map= $.map( x, function( val, firstname ) 
{
var add=0;

for (var i=0;i<val.data.length;i++){
add += val.data[i];
}

return {'name':firstname+" "+val.last, 'data':add};
});

console.log(map);
