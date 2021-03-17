$(document).ready(function() {
  $('#submit').on('click', function() {
    var st = '';
    $('#rule-form input[type=text],input[type=date], select').each(function() {
      st = st + '<td>' + $(this).val() + '</td>';
      $(this).val('');
    });
    $('#details').append('<tr>' + st + '</tr>');
  });
});

function openDrop() {
  var temp = document.getElementById("dropdown-container").style.display
  document.getElementById("dropdown-container").style.display = $('#dropdown-container').css('display') === "none" ? "block" : "none"
}

function openNav() {
  document.getElementById("sidebar").style.width = $('#sidebar').css('width') == "0px" ? "200px" : "0px"
  document.getElementById("content").style.marginLeft = $('#content').css('margin-left') == "0px" ? "200px" : "0px"
  document.getElementById("button").style.marginLeft = $('#button').css('margin-left') == "9px" ? "210px" : "9px"
}

$(function() {
  $("#applied").datepicker();
});

$(function() {
  $("#expires").datepicker();
});
