$(document).ready(function() {
  function runThrough(param1) {
    $.ajax({
      type: "Get",
      url: "https://api.twitch.tv/kraken/streams/" + param1,
      headers: {
        "Client-ID": "8snwv60ins29v6l3iwq7vp0msqslg4"
      },
      success: function(result) {
        if (result.stream === null) {
          $("#tblData tbody").append(
            "<tr class='offlineRow'>" +
              "<td><a href='https://www.twitch.tv/" + param1 + "' target='_blank'>" + param1 + "</a></td>" +
              "<td>Offline</td>" +
              "<td>No status available</td>" +
              "</tr>"
          );
        } else {
          $("#table1 tbody").append('<tr class="child"><td>blahblah</td></tr>');
          $("#tblData tbody").append(
            "<tr>" +
              "<td><a href='https://www.twitch.tv/" + param1 + "' target='_blank'>" + param1 + "</a></td>" +
              "<td>Online</td>" +
              "<td>" + result.stream.channel.status + "</td>" +
              "</tr>"
          );
        }
      }
    });
  }

    var arrayUsers = [
      "ESL_SC2",
      "OgamingSC2",
      "cretetion",
      "FreeCodeCamp",
      "storbeck",
      "Habathcx",
      "RobotCaleb",
      "noobs2ninjas"
    ];
    for (var i = 0; i < arrayUsers.length; i++) {
      runThrough(arrayUsers[i]);
    }
});

$( "#onoff" ).click(function() {
    $('.offlineRow').toggle('hide');
    $("#onoff").text(($("#onoff").text() == 'Online Only') ? 'All streamers' : 'Online Only');
});