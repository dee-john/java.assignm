 // Select container
    const container = document.querySelector(".login-container");
    container.style.width = "320px";
    container.style.height = "100%";
    container.style.margin = "100px auto";
    container.style.padding = "20px";
    container.style.border = "1px solid #ccc";
    container.style.borderRadius = "10px";
    container.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
    container.style.justifyContent = "center";
    container.style.textAlign = "center";
    container.style.fontFamily = "Arial, sans-serif";
    container.style.backgroundColor = "#fff";

    // Style heading
    const heading = document.querySelector("h1");
    heading.style.backgroundColor = "#146417ff";
    heading.style.color = "#fff";
    heading.style.fontFamily = "romans";
    heading.style.padding = "15px";
    heading.style.borderRadius = "5px 5px 0 0";
    heading.style.margin = "-20px -20px 20px -20px";

    // Style inputs
    const inputs = document.querySelectorAll("input");
    inputs.forEach(input => {
      input.style.width = "90%";
      input.style.padding = "10px";
      input.style.margin = "8px 0";
      input.style.border = "1px solid #aaa";
      input.style.borderRadius = "5px";
      input.style.fontSize = "14px";
    });

    // Style button
    const button = document.querySelector("button");
    button.style.padding = "10px 20px";
    button.style.width = "85%";
    button.style.backgroundColor = "#146417ff";
    button.style.color = "#fff";
    button.style.border = "none";
    button.style.borderRadius = "10px";
    button.style.marginTop = "10px";
    button.style.cursor = "pointer";
    button.style.fontSize = "16px";
       