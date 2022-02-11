var acc = document.getElementsByClassName("button");

var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", 
        function() {
           this.classList.toggle("active");
           var panel = this.nextElementSibling;
           console.log(this);
           var parent = this.parentElement;
           if (panel.style.maxHeight){
            panel.style.maxHeight = null;
            parent.style.background = "rgba(240, 235, 236, 1)";
            $(this).addClass('button').removeClass('bottom');
           } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            parent.style.background = "rgba(249, 249, 249, 1)";
            $(this).addClass('bottom').removeClass('button');

        }
    });
}