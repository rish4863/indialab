$(document).ready(function () {
  $("#greetingOutput").text("");

  $("#sendName").click(function () {
    //console.log($("#fname").val());
   
    $("#greetingOutput").text("Hello " + $("#fname").val() +" "+ $("#lname").val() +" Your email address  and your birthdate are: "+ $ ("#emailaddress").val()+  " "+ $("#dateofbirth").val()  +  " Your level is: "+ $("#level").val()+" Today's date and time is: "+ $("#datetime").val() + " You were born before 1980: "+ $("#datemax").val() );
    // $(function() {


$('#btnLoadData').click(function() {
    console.log("clicked");

    //let jsonURL = "https://www.w3schools.com/jquery/demo_ajax_json.js";

    //let jsonURL = "demo.json";

    let jsonURL = "https://rish4863.github.io/indialab/";

    $.ajax({
        url: jsonURL,
        dataType: "json",
        success: function(result) {
            //data = $.parseJSON(result);
            console.log(result);
            $.each(result, function(result) {
                $("#dataContainer").append(result + " ");
            });
        }
    });

    // $.ajax({
    //     url: jsonURL,
    //     jsonp: "callback",
    //     dataType: "jsonp",
    //     data: { format: "json" },
    //     success: function(response) { console.log(response); }
    // });
});



// end of doc ready f/n
// });


$(function() {


            $('#btnLoadData').click(function() {
                console.log("clicked");

                //let jsonURL = "https://www.w3schools.com/jquery/demo_ajax_json.js";

                //let jsonURL = "demo.json";

                let jsonURL = "https://rish4863.github.io/indialab/";

                $.ajax({
                    url: jsonURL,
                    dataType: "json",
                    success: function(result) {
                        //data = $.parseJSON(result);
                        console.log(result);
                        $.each(result, function(result) {
                            $("#dataContainer").append(result + " ");
                        });
                    }
                });

                // $.ajax({
                //     url: jsonURL,
                //     jsonp: "callback",
                //     dataType: "jsonp",
                //     data: { format: "json" },
                //     success: function(response) { console.log(response); }
                // });
            });



            // end of doc ready f/n
            // });
   
  $("#btn").on("click", () => {
  console.log("here");
  let selectedSize;
  console.log("val" + selectedSize);
  if ($("input:radio[name='level']").is(":checked")) {
    selectedSize = $("input[name='level']:checked").val();
    // show the output:
  }
  output.innerText = selectedSize
    ? `You selected ${selectedSize}`
    : `You haven't selected any size`;
});
   
   $("#noSpaces").blur(function () {
    let inputVal = $(this).val();
    let strSpace = " ";
    let spaceCount = inputVal.split(" ").length - 1;

    console.log(spaceCount);
    if (spaceCount === 0) {
      $(this).next().text("all good");
    } else if (spaceCount > 0) {
      $(this).next().text("no spaces allowed in User Name");
    }
  });  
  });
});

 
  });
