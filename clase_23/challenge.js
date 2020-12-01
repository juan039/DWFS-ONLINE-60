let personas = [
    {
      nombre: "Jhony",
      asistente: null,
      seccion: "gold",
      rol: "speaker"
    },
    {
      nombre: "Manuel",
      asistente: true,
      seccion: "vip",
      rol: "viewer"
    },
    {
      nombre: "Fran",
      asistente: true,
      seccion: "vip",
      rol: "viewer"
    },
    {
      nombre: "Cintia",
      seccion: "platino",
      rol: "viewer"
    },
    {
      nombre: "Marcos",
      asistente: null,
      seccion: "gold",
      rol: "viewer"
    },
    {
      nombre: "Victoria",
      asistente: true,
      seccion: "platino",
      rol: "speaker"
    }
  ];
  
  function asistentes(listaPersonas) {
      let cantidad_de_asistentes = 0;
      for (let i = 0; i < listaPersonas.length; i++) {
          const element = listaPersonas[i];
          if (element.asistente == true) {
            cantidad_de_asistentes++;
          }
      }
      return cantidad_de_asistentes;
    /**
     * Esta fución debe calcular el total de asistentes
     * según una lista de personas.
     *
     * Se considera que una persona esta "asistente" si
     * la propiedad respectiva es distinta a null o undefined
     *
     * La función debe retornar el número de asistencias.
     */
  }

  function asistentesToArray(listaPersonas) {
    let asistencias = [];
    for (let i = 0; i < listaPersonas.length; i++) {
        const element = listaPersonas[i];
        if (element.asistente == true) {
          asistencias.push(element);
        }
    }
    return asistencias;
}

function filtrarPersonas(atributo, valor) {
    let asistencias = [];
    for (let i = 0; i < personas.length; i++) {
        const element = personas[i];
        if (element[atributo] == valor ) {
          asistencias.push(element);
        }
    }
    return asistencias;
}