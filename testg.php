<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>
<script type="text/javascript"
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA53_haHavNXGFRhZOTxV5c0nOdnn6T5Ig">
</script>
<?php

<body onload="loadDemo()">

<h1>HTML5 google定位</h1>
<p id="status">瀏覽器不支援HTML5 google定位</p>

<h2>当前位置：</h2>
<table border="1">
<tr>
<td width="40" scope="col">纬度</th>
<td width="114" id="latitude">?</td>
</tr>
<tr>
<td>经度</td>
<td id="longitude">?</td>
</tr>
<tr>
<td>准确度</td>
<td id="accuracy">?</td>
</tr>
</table>
echo "[{ lat:'".$latitude."',long:'".$longitude;

?>
<script type="text/javascript">

   
    var lastLat;
    var lastLong;

  
    function updateStatus(message) {
        document.getElementById("status").innerHTML = message;
    }

    function loadDemo() {
        if(navigator.geolocation) {
            updateStatus("瀏覽器支援HTML5 google定位");
            navigator.geolocation.watchPosition(updateLocation, handleLocationError, {maximumAge:20000});
        }
    }

    function updateLocation(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        var accuracy = position.coords.accuracy;
        lastLat = latitude;
        lastLong = longitude;   
    }
    function handleLocationError(error) {
        switch(error.code)
        {
        case 0:
          updateStatus("尝试获取您的位置信息时发生错误：" + error.message);
          break;
        case 1:
          updateStatus("用户拒绝了获取位置信息请求。");
          break;
        case 2:
          updateStatus("浏览器无法获取您的位置信息：" + error.message);
          break;
        case 3:
          updateStatus("获取您位置信息超时。");
          break;
        }
    }

</script>
</body>
</html>