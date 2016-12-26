
$(document).ready(function() { 
  var link1=chrome.extension.getURL("icon.png");
  var infoPanel = $("<div>").attr('id', 'infoPanel').attr('class', 'row');
  var title = $("<h4>").html("留言討論區");
  var comments  = $("<div>").attr('class', 'comments col-md-8 col-xs-12').html("Comments");
  var userBlock = $("<div>").attr('class', 'user-info col-md-4 col-xs-12');
  var btnLogin  = $("<button>").attr('class', 'btn btn-success').text("立即登入留言");

  userBlock.append(btnLogin);
  infoPanel.append(title).append(comments).append(userBlock);

  $("body").append("<div id='root'></div>");
  $("body").append("<script src='"+chrome.extension.getURL('js/bundle.min.js')+"'></script>");
  $("body").append(infoPanel);
});
