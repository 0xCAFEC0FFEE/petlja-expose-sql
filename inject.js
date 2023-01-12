////////////////////////////////////////////////////////////////////////////////////////////
fetch(window.location.href)
  .then(response => response.text())
  .then(source => {
    var el = document.createElement("html");
    el.innerHTML = source;
    
    var targets = el.getElementsByClassName("db");
    
    for ( i=0; i<targets.length; i++ )
    {
        var target = targets[i];
    
        if (target.hasAttribute("db-check"))
        {
            var result = target.getElementsByClassName("result")[i]
            var query = target.getAttribute("db-check")
            console.log(target.id)
    
            var tag = document.createElement("p");
            var text = document.createTextNode(query);
            tag.appendChild(text);
            
            var element = document.getElementsByClassName("db-input")[i];
            element.appendChild(tag);
        }
    }
    
    console.log('gotovo')
})