var globalArray = [];
$(document).ready(function() {
	$('#btn1').on('click', function() {
		var id = document.getElementById('ID').value;
		var name = document.getElementById('name').value;
		var price = document.getElementById('price').value;
		var quantity = document.getElementById('quantity').value;

		var obj = {
			id: id,
			name: name,
			price: price,
			quantity: quantity
		};

		globalArray.push(obj);
		console.log(globalArray);
		addrow(globalArray);
	});
});

$('#btn2').on('click', function() {
    var field = $('#details :selected').text();
    //console.log(field);
    if(field == 'ID'){
         var a = document.getElementById('search').value;
         var dis = '<table><tr><th>ID</th><th>NAME</th><th>PRICE</th><th>QUANTITY</th></tr>';
         for(var i = 0 ; i < globalArray.length; i++) {
             if(globalArray[i].id == a) {
                 
                 //for (var i = 0; i < globalArray.length; i++) {
                    dis +=
                        '<tr><td>' +
                        globalArray[i].id +
                        '</td><td>' +
                        globalArray[i].name +
                        '</td><td>' +
                        globalArray[i].price +
                        '</td><td>' +
                        globalArray[i].quantity +
                        '</td></tr>';
            
                //}
               
                 document.getElementById('footer').innerHTML = dis;
             }
         }
         dis += '</table>';
    }
    else if (field == 'NAME') {
        var a = document.getElementById('search').value;
        var dis = '<table><tr><th>ID</th><th>NAME</th><th>PRICE</th><th>QUANTITY</th></tr>';
         for(var i = 0 ; i < globalArray.length; i++) {
             if(globalArray[i].name == a) {
                
                 
                    dis +=
                        '<tr><td>' +
                        globalArray[i].id +
                        '</td><td>' +
                        globalArray[i].name +
                        '</td><td>' +
                        globalArray[i].price +
                        '</td><td>' +
                        globalArray[i].quantity +
                        '</td></tr>';
            
                
               
                 document.getElementById('footer').innerHTML = dis;
             }
         }
         dis += '</table>';

    }
    else if (field == 'PRICE') {
        var a = document.getElementById('search').value;
        var dis = '<table><tr><th>ID</th><th>NAME</th><th>PRICE</th><th>QUANTITY</th></tr>';
         for(var i = 0 ; i < globalArray.length; i++) {
             if(globalArray[i].price == a) {
               
                
                 //for (var i = 0; i < globalArray.length; i++) {
                    dis +=
                        '<tr><td>' +
                        globalArray[i].id +
                        '</td><td>' +
                        globalArray[i].name +
                        '</td><td>' +
                        globalArray[i].price +
                        '</td><td>' +
                        globalArray[i].quantity +
                        '</td></tr>';
            
                //}
               
                 document.getElementById('footer').innerHTML = dis;
                 console.log(dis);
             }
            
         }
         dis += '</table>';

    }
    else { 
        var a = document.getElementById('search').value;
        var dis = '<table><tr><th>ID</th><th>NAME</th><th>PRICE</th><th>QUANTITY</th></tr>';
         for(var i = 0 ; i < globalArray.length; i++) {
             if(globalArray[i].quantity == a) {
                
                 
                 //for (var i = 0; i < globalArray.length; i++) {
                    dis +=
                        '<tr><td>' +
                        globalArray[i].id +
                        '</td><td>' +
                        globalArray[i].name +
                        '</td><td>' +
                        globalArray[i].price +
                        '</td><td>' +
                        globalArray[i].quantity +
                        '</td></tr>';
            
                //}
               
                 document.getElementById('footer').innerHTML = dis;
             }
         }
         dis += '</table>';

    }
});

function addrow(globalArray) {
	var html = '<table><tr><th>ID</th><th>NAME</th><th>PRICE</th><th>QUANTITY</th></tr>';

	for (var i = 0; i < globalArray.length; i++) {
		html +=
			'<tr><td>' +
			globalArray[i].id +
			'</td><td>' +
			globalArray[i].name +
			'</td><td>' +
			globalArray[i].price +
			'</td><td>' +
			globalArray[i].id +
			'</td></tr>';

    }
    html += '</table>';

}
