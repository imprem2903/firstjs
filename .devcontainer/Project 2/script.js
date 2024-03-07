const form = document.querySelector("form")
form.addEventListener("submit" , function (event) {
    event.preventDefault()
     const height = parseInt(document.querySelector("#height").value)
     const weight = parseInt(document.querySelector("#weight").value)
     const results = document.querySelector('#results');    

    if (height === '' || height<0 || isNaN(height)) {
        results.innerHTML = "enter a valid height"
    }
    else if (weight === '' || weight<0 || isNaN(weight)) {
        results.innerHTML = "enter a valid weight"
    }else{
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        // results.innerHTML = `<span>${bmi}</span>`
        if (bmi <18.6) {
            results.innerHTML = `<span>${bmi}</span>, you are Under weight`
        } else if (bmi>= 18.6 && bmi <= 24.9) {
            results.innerHTML = `<span>${bmi}</span>, you are normal`
        }
        else {
            results.innerHTML = `<span>${bmi}</span>, you are obese`
        }
    }
    
});