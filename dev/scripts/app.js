const portfolio = {};

portfolio.myWorks = () => {
        let btns = document.getElementsByClassName("projectNode");
        for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function () {
                var current = document.getElementsByClassName("active");
                current[0].className = current[0].className.replace(" active", "");
                this.className += " active";
            });
    }
}


portfolio.init = () => {
    portfolio.myWorks();
}

$(function () {
    portfolio.init();
});