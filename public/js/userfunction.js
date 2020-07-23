function user(){

}

function send(){
    var danmaku = document.getElementById("input").value;
    $.ajax({
        url: "/senddanmaku",
        data: {content:danmaku},
        type: "GET",
        success: function(result){ 
            document.getElementById("textneirong").value="";
        }
    })
    
}