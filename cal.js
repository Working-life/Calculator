function insertNumber(number) {

var existingNumbers =     $("#result").val();
    $("#result").val(existingNumbers + number)
}


function clearResult() {
    $("#result").val('')
}

function calculate() {
    var result = eval($("#result").val()) 
   $("#result").val(result)

}

function deleteNumbers() {
  var presentValue =  $("#result").val();
  if(presentValue !=''){
    $("#result").val(presentValue.slice(0,-1));
  }

}


// function percentage() {

//     var per = $("#result").val()

// $("#result").val($("#result").val(per/100))


//     // const percent = math.round((data.percent))
//     //     $("#result").val(existingNumbers + number)
//     }
    

