$(".title-1").click(function () {
  $("#p1").toggle()
})
$(".title-2").click(function () {
  $("#p2").toggle()
})
$(".title-3").click(function () {
  $("#p3").toggle()
})

$("#professional-reason").click(function () {
  $("#email-button").html("Email Professional Request")
})
$("#personal-reason").click(function () {
  $("#email-button").html("Email Personal Request")
})
$("#email-body").keypress(function () {
  $("#email-button").removeAttr("disabled")
})
$("#check-box").click(function () {
  $("#check-box").removeClass("is-invalid")
})
$("#email-button").click(function () {
  window.open(
    "mailto:kalcalen@gmail.com.com?subject=Your Resume&body=" +
      $("#email-body").val(),
    "_blank"
  )
})
