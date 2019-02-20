
  	var container = document.getElementById("tabContainer");
		var tabcon = document.getElementById("tabscontent");

    var navitem = document.getElementById("tabHeader_1");
		
    var ident = navitem.id.split("_")[1];

    navitem.parentNode.setAttribute("data-current",ident);

    navitem.setAttribute("class","tabActiveHeader");

   	 var pages = tabcon.getElementsByTagName("div");
    	for (var i = 1; i < pages.length; i++) {
     	 pages.item(i).style.display="none";
		};

    var tabs = container.getElementsByTagName("li");
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].onclick=displayPage;
    }

function displayPage() {
  var current = this.parentNode.getAttribute("data-current");

  document.getElementById("tabHeader_" + current).removeAttribute("class");
  document.getElementById("tabpage_" + current).style.display="none";

  var ident = this.id.split("_")[1];
 
  this.setAttribute("class","tabActiveHeader");
  document.getElementById("tabpage_" + ident).style.display="block";
  this.parentNode.setAttribute("data-current",ident);
}