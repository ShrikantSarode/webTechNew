let gender = document.getElementById("gender-select");

gender.addEventListener("change", function () {
    
    selectValue = this.value;

    if (selectValue === "Boy")
    {
        confirm("Are you sure you want to go for Boy?");
        window.location.href = "boy.html";
    }
    else if (selectValue === "Girl")
    {
        window.location.href = "./girl.html";
    }
    else {
        window.location.href = "./index.html";
    }
})