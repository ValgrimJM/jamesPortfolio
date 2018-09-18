const portfolio = {};

portfolio.myWorks = () => {
        let btns = document.getElementsByClassName("projectNode");
        for (let i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function () {
                let nodeBar = document.getElementById("galleryNodes");
                let projects = document.getElementById("galleryContainer");
                let allProj = projects.getElementsByClassName("project")
                let currentNode = nodeBar.getElementsByClassName("active");
                let currentProj = projects.getElementsByClassName("active");
                currentNode[0].className = currentNode[0].className.replace(" active", "");
                currentProj[0].className = currentProj[0].className.replace(" active", "");
                this.className += " active";
                console.log(allProj[(this.classList[1])]);
                
                allProj[(this.classList[1])].className += " active";
            });
    }
}


portfolio.init = () => {
    portfolio.myWorks();
}

$(function () {
    portfolio.init();
});