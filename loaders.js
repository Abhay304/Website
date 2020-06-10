$(document).ready(function () {
	$(".myreviews").carousel({
		numVisible: 7,
		shift: 55,
		padding: 55	
	});


});



document.addEventListener('DOMContentLoaded', function() {
	var elems = document.querySelectorAll('.collapsible');
	var instances = M.Collapsible.init(elems, 1);
});

jQuery(document).ready(function(){
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});
	

});


// $(document).ready(function($) {
//   $(document).on('submit', '#submit-form', function(event) {
//     event.preventDefault();
//   });
// });


// $('.tap-target').tapTarget('open');

class HTTP{
    static fetchData(url){  
        return new Promise((resolve, reject)=>{
            const HTTP = new XMLHttpRequest();
            HTTP.open("POST", url, true); 
            HTTP.setRequestHeader("Content-Type", "application/json");
            HTTP.onreadystatechange = function () {
                if(HTTP.status == 200){
                    const responseData = JSON.parse(HTTP.responseText);
                    resolve(responseData);
                }
                else{
                    reject('Something Went Wrong')
                }
              }
              let name = document.getElementById("name").value;
              let suggestion = document.getElementById("suggestion").value;
             var data = JSON.stringify({ "name": name, "suggestion": suggestion }); 
             HTTP.send(data);
        })
    }
}   

function SubmitFeedback(){
 
    if(document.getElementById('name').value =="" || document.getElementById("suggestion").value ==""){
    	alert("Fill your details for Feedback/Suggestions");
    	return null;

    }
    // http://localhost:3000
     const URL = 'https://abhay304.herokuapp.com/suggestions/';
    //  const URL = 'http://localhost:3000/suggestions/';

    HTTP.fetchData(URL)
    .then(function(reposne){
    console.log(reposne);
    document.getElementById('thank').style.display ="";
	document.getElementById('form').style.display ="none";
	document.getElementById('headerOfSuggest').style.position ="unset";
	document.getElementById('message').innerHTML ="Thank you for your feedback" +" "+ document.getElementById('name').value;
    })
    .catch(function(error){
        alert(error);
    })
}