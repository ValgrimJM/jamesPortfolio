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
portfolio.toTop = () => {
    $(".topButton").on("click", function () {
        console.log('Test');
        console.log($(".topButton").scrollTop());
        $("html,body").animate({ scrollTop: 0 }, 700);
        // document.querySelector(".bodyWrapper").scrollIntoView({
        //     behavior: 'smooth' 
        // }, 1200);
    });
}
portfolio.openMenu = () => {
    $(".menuIcon").on("click", function (){
        $(".menuIcon").toggleClass("active");
        $(".headerLinks").toggleClass("active")
    });
    $(".hamburger").on("click", function (){
        $(".hamburger").toggleClass("is-active");
        $(".headerLinks").toggleClass("active")
    });

}
portfolio.scrollButtons = () => {
    $(".aboutMe").on("click", function () {
        console.log($(".about").position());
        $("html,body").animate({ scrollTop: $(".about").position().top }, 700);
        // document.querySelector(".about").scrollIntoView({
        //     behavior: 'smooth'
        // }, 1200);
    });
    $(".skills").on("click", function () {
        $("html,body").animate({ scrollTop: $(".mySkills").position().top }, 700);
        // document.querySelector(".mySkills").scrollIntoView({
        //     behavior: 'smooth'
        // }, 1200);
    });
    $(".works").on("click", function () {
        $("html,body").animate({ scrollTop: $(".myWorks").position().top }, 700);
        // document.querySelector(".myWorks").scrollIntoView({
        //     behavior: 'smooth'
        // }, 1200);
    });
    $(".contactMe").on("click", function () {
        $("html,body").animate({ scrollTop: $(".contact").position().top }, 700);
        // document.querySelector(".contact").scrollIntoView({
        //     behavior: 'smooth',
        // }, 1200);
    });
}


portfolio.init = () => {
    portfolio.myWorks();
    portfolio.toTop();
    portfolio.openMenu();
    portfolio.scrollButtons();
}

$(function () {
    portfolio.init();
});