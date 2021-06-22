let app = document.getElementById("app");

let profile = document.createElement("div");
profile.className = "profile";
profile.innerHTML = `
  <h3>Juan Ceballos</h3>
  <p>Colombia, 26 años</p>
`;


let intereses = document.createElement("div");
intereses.className = "intereses";
intereses.innerHTML = `
    <h3>Intereses:</h3>
    <ul>
        <li><i class="fas fa-caret-right"></i> Música</li>
        <li><i class="fas fa-caret-right"></i> Desarrollo Tecnológico</li>
        <li><i class="fas fa-caret-right"></i> Aplicaicones</li>
    <ul>
`;


let gustaria = document.createElement("div");
gustaria.className = "gustaria";
gustaria.innerHTML = `
    <h3>Me gustaría aprender:</h3> 
    <ul>
        <li><i class="fas fa-caret-right"></i> Origami</li>
        <li><i class="fas fa-caret-right"></i> Dibujar</li>
        <li><i class="fas fa-caret-right"></i> Francés</li>
    <ul>
`;


let espectativas = document.createElement("div");
espectativas.className = "espectativas";
espectativas.innerHTML = `
    <h3>Espectativas:</h3> 
    <p>Aprender demasido y tener un muy buen grupo de trabajo</p>
`;


let hobbies = document.createElement("div");
hobbies.className = "hobbies";
hobbies.innerHTML = `
    <h3>Hobbies:</h3> 
    <ul>
        <li><i class="fas fa-caret-right"></i> Tocar Violín</li>
        <li><i class="fas fa-caret-right"></i> Ver Anime</li>
        <li><i class="fas fa-caret-right"></i> Viajar</li>
    <ul>
`;


app.appendChild(profile);
app.appendChild(intereses);
app.appendChild(gustaria);
app.appendChild(espectativas);
app.appendChild(hobbies);


profile.style.backgroundColor = '#B2B8A3'
intereses.style.backgroundColor = '#E4EFE7';
gustaria.style.backgroundColor = '#A7BBC7';
espectativas.style.backgroundColor = '#F0E4D7';
hobbies.style.backgroundColor = '#DDDDDD';