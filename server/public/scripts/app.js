$(document).ready(function(){


    $(".container").on('click','.button',function(){
            $.ajax({
                type: "GET",
                url : "/data",
                success: function(data){//when done executing what do you want to do
                    console.log("round trip complete");
                    appendDom(data)
                    console.log(data);
                }
                //relative to git path setup on the server
                //give object / value pair/ they are routes
            });

    });

    $(".container").on('click','.btn-danger',function(){

        $(this).closest('.personDisplay').remove();
    });

    console.log("hi")// hi goes first because there is a lag for the request of get
});



function appendDom(data){

    for(var i=0;i< data.people.length;i++){


// regular mode // HARD MODE//
        var el = 	"<div class='personDisplay well'>" +
            "<img src="+data.people[i].imageURL+">"+
            "<div>Name: " + data.people[i].name + "</div>" +
            "<div>" + data.people[i].position+ "</div>" +
            "<div>" + data.people[i].location+ "</div>"+
                "<div class='btn-danger'>delete</div>"

        "</div>";

        $(".container").append(el);
    };
}