

const button = document.querySelector("button")
button.addEventListener('click', (e) => {
  let weight = parseFloat(prompt("What is your weight"))
  let heightFeet = parseFloat(prompt("What is your height( only in feet )"))
  const BMI = document.querySelector(".bmi")
  BMI.style.marginTop = "20px"

  heightMeters = parseFloat(heightFeet * 0.3048)

  let bmi = weight / (heightMeters * heightMeters)

  if(isNaN(weight) || isNaN(heightFeet) || isNaN(heightMeters)) {
    BMI.innerText = "Please enter a valid Number"
    BMI.style.color = "red"
    button.innerText = "Try Again"
  } else {
    BMI.innerText = parseFloat(bmi.toFixed(2))
    BMI.style.color = "lime"
    button.innerText = "Try Again"

    const fitness = document.createElement("div");
    if (bmi <18.5) {
      fitness.innerText = "(UnderWeight)"
      fitness.style.color = "rgb(208, 208, 28)"
    } else if (bmi >= 18.5 && BMI < 25){
      fitness.innerText = "(Normal)"
      fitness.style.color = "limegreen"
    }
    else if (bmi >= 25 && BMI < 30){
      fitness.innerText = "(OverWeight)"
      fitness.style.color = "orange"
    }
    else{
      fitness.innerText = "(Obese)"
      fitness.style.color = "red"
    }
    fitness.style.display = "inline"
    fitness.style.marginLeft = "10px"
    BMI.append(fitness)

  }
})

// • Under 18.5 → underweight
// • 18.5 to 24.9 → normal
// • 25 to 29.9 → overweight
// • 30+ → obese
