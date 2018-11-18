//Ques: You are given a tree structure of files and folders. By using this object, recreate the structure again as a //string and print out the output.

var x = [
    {type: 'folder', name: 'F1', data: [
        {type: 'file', name: 'F1R1'},
        {type: 'file', name: 'F1R2'},
        {type: 'folder', name: 'F2', data: [
            {type: 'file', name: 'F2R1'},
            {type: 'file', name: 'F2R2'},
            {type: 'folder', name: 'F3', data: [
                {type: 'file', name: 'F3R1'},
                {type: 'file', name: 'F3R2'}
            ]}
        ]}
    ]},
    {type: 'file', name: 'R1'},
    {type: 'folder', name: 'F4', data: [
        {type: 'file', name: 'F4R1'},
        {type: 'folder', name: 'F5', data: [
            {type: 'file', name: 'F5R1'}
        ]}
    ]}
]; 

//End of Question

function setEach(arr){
	$.each(arr,function (i,obj){
		if(obj.type=="folder"){
			console.log(obj.name);
				setEach(obj.data);

}else{	
console.log(obj.name);
}

});

}

setEach(x);