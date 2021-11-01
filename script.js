let JefeMini = prompt ("¿Usted es el jefe de los minisupers? Por favor, responder en minúsculas.");
if ((JefeMini !== "") && (JefeMini === "no")) {
    alert ("¡Gracias, vuelva pronto!");
}
else if ((JefeMini === "si") || (JefeMini === "sí")) {
    alert ("¿En serio?");
}
else {
    alert ("Algo ha salido mal. Por favor, resfrecá la pantalla y volvé a internarlo.");
}

let JefeMini2 = prompt ("¡¿En serio?!")
if (JefeMini2 === "no") {
    alert ("¡Gracias, vuelva pronto!");
}
else if ((JefeMini2 === "sí") || (JefeMini2 === "si")) {
    alert ("¡¿Usted?!");
}
else {
    alert ("Algo ha salido mal. Por favor, resfrecá la pantalla y volvé a internarlo.");
}

let JefeMini3 = prompt ("¡¿Usted?!")
if (JefeMini3 === "no") {
    alert ("¡Gracias, vuelva pronto!");
}
else if ((JefeMini3 === "sí") || (JefeMini3 === "si")) {
    alert ("Gracias, me has iluminado");
}

// Hola, Cami! Cómo va?
// Varias preguntas, porque intenté hacer otros "problemas" pero muchas veces necesitaba meter un if dentro de otro if, no sé si es muy enroscado, si lo vamos a ver más adelante o si es algo que estoy haciendo mal.
// Y la otra duda era sobre cómo hacer para que cuando en alguna de las preguntas de arriba la respuesta es no, que no te siga tirando más preguntas, sino que se corte ahí.
// Gracias. Besos!