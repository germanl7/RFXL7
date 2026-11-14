/* NEXUS AI — base de conocimientos local (sin conexión a una API externa).
   Puedes ampliar este archivo agregando nuevos objetos al arreglo topics. */
(() => {
  const topics = [
    {keys:["sistema solar","planetas","sol","tierra","marte","jupiter","saturno"],title:"Sistema solar",body:"El sistema solar está formado por el Sol y los cuerpos que orbitan a su alrededor: ocho planetas, planetas enanos, satélites, asteroides y cometas. En orden desde el Sol, los planetas son Mercurio, Venus, Tierra, Marte, Júpiter, Saturno, Urano y Neptuno. La Tierra es el único planeta donde se ha confirmado vida."},
    {keys:["fotosintesis","plantas","clorofila"],title:"Fotosíntesis",body:"La fotosíntesis es el proceso por el que las plantas, algas y algunas bacterias usan la energía de la luz para fabricar azúcares a partir de agua y dióxido de carbono. En las plantas ocurre principalmente en los cloroplastos, donde la clorofila capta la luz. Durante el proceso se libera oxígeno."},
    {keys:["celula","celulas","organelos","membrana celular"],title:"La célula",body:"La célula es la unidad básica de los seres vivos. La membrana regula lo que entra y sale; el citoplasma contiene estructuras celulares; y el ADN guarda la información genética. Las células eucariotas tienen núcleo. Las procariotas, como las bacterias, no tienen un núcleo rodeado por membrana."},
    {keys:["estados de la materia","materia","solido","liquido","gaseoso","plasma"],title:"Estados de la materia",body:"Los estados más conocidos de la materia son sólido, líquido, gas y plasma. En un sólido las partículas permanecen muy próximas y el material conserva su forma. En un líquido conserva su volumen y adopta la forma del recipiente. Un gas se expande y ocupa el espacio disponible. El plasma es un gas ionizado."},
    {keys:["fuerza","newton","leyes de newton","movimiento"],title:"Leyes de Newton",body:"Las tres leyes de Newton describen el movimiento. Primera: un cuerpo mantiene su estado de reposo o movimiento rectilíneo uniforme si la fuerza neta es cero. Segunda: la fuerza neta es igual a masa por aceleración (F = m·a). Tercera: cuando un cuerpo ejerce una fuerza sobre otro, el segundo ejerce una fuerza de igual magnitud y sentido contrario sobre el primero."},
    {keys:["energia","energía","energia cinetica","energia potencial"],title:"Energía",body:"La energía es la capacidad de producir cambios o realizar trabajo. Puede presentarse como energía cinética (asociada al movimiento), potencial (por la posición o configuración), térmica, química, eléctrica, luminosa y sonora. La energía se transforma y se transfiere; en un sistema aislado se conserva."},
    {keys:["agua","ciclo del agua","ciclo hidrologico"],title:"Ciclo del agua",body:"El ciclo del agua es el movimiento continuo del agua en la Tierra. El Sol impulsa la evaporación; el vapor se enfría y condensa formando nubes; luego ocurre la precipitación como lluvia, nieve o granizo. Parte del agua se infiltra en el suelo y otra parte fluye por ríos hasta lagos y océanos."},
    {keys:["ecosistema","cadena alimenticia","cadena trofica","biodiversidad"],title:"Ecosistemas",body:"Un ecosistema reúne a los seres vivos de un lugar y el ambiente físico con el que interactúan. Los productores, como las plantas, fabrican su alimento; los consumidores obtienen energía al alimentarse de otros organismos; y los descomponedores reciclan nutrientes. La biodiversidad es la variedad de vida."},
    {keys:["fotosintesis","respiracion celular"],title:"Respiración celular",body:"La respiración celular es el conjunto de procesos mediante los cuales las células obtienen energía utilizable de los nutrientes. En la respiración aeróbica se usa oxígeno para extraer energía de la glucosa y se producen dióxido de carbono y agua. Gran parte ocurre en las mitocondrias de células eucariotas."},
    {keys:["matematicas","matematica","algebra","ecuacion"],title:"Álgebra básica",body:"El álgebra usa letras y símbolos para representar números y relaciones. Una ecuación es una igualdad que contiene una o más incógnitas. Para despejar una incógnita se realizan operaciones equivalentes en ambos lados. Ejemplo: si x + 5 = 12, restamos 5 a ambos lados y obtenemos x = 7."},
    {keys:["fraccion","fracciones","numerador","denominador"],title:"Fracciones",body:"Una fracción representa partes de un todo y se escribe a/b. El numerador (a) indica cuántas partes se toman y el denominador (b) en cuántas partes iguales se divide el todo; b no puede ser cero. Para sumar fracciones se usa un denominador común. Para multiplicarlas, se multiplican numeradores entre sí y denominadores entre sí."},
    {keys:["porcentaje","porcentajes"],title:"Porcentajes",body:"Un porcentaje expresa una cantidad por cada cien. Para calcular el p% de una cantidad, multiplica la cantidad por p y divide entre 100. Ejemplo: el 20% de 150 es 150 × 20 ÷ 100 = 30."},
    {keys:["geometria","geometría","area","perimetro","perímetro"],title:"Geometría: área y perímetro",body:"El perímetro es la longitud del contorno de una figura; el área mide la superficie que ocupa. Rectángulo: área = base × altura y perímetro = 2(base + altura). Triángulo: área = (base × altura) ÷ 2. Cuadrado: área = lado² y perímetro = 4 × lado. Recuerda expresar el área en unidades cuadradas."},
    {keys:["historia de colombia","independencia de colombia","20 de julio","colombia independencia"],title:"Independencia de Colombia",body:"El proceso de independencia de Colombia fue largo y tuvo varias etapas. El 20 de julio de 1810 ocurrió en Santa Fe un movimiento que impulsó la formación de juntas de gobierno. La independencia se consolidó militarmente con la campaña libertadora y la Batalla de Boyacá, el 7 de agosto de 1819."},
    {keys:["estado colombiano","constitucion de colombia","constitucion politica","ramas del poder"],title:"Estado colombiano",body:"Colombia es un Estado social de derecho organizado como república unitaria, descentralizada y democrática. La Constitución Política de 1991 es su norma principal. El poder público se organiza en tres ramas: ejecutiva (administra y gobierna), legislativa (hace las leyes) y judicial (administra justicia). También existen órganos autónomos y de control."},
    {keys:["mecanismos de participacion","participacion ciudadana","voto","plebiscito","referendo","consulta popular","cabildo abierto","iniciativa legislativa","revocatoria"],title:"Mecanismos de participación ciudadana",body:"En Colombia, entre los mecanismos de participación ciudadana están el voto, el plebiscito, el referendo, la consulta popular, el cabildo abierto, la iniciativa legislativa y normativa, y la revocatoria del mandato. Permiten que la ciudadanía intervenga en decisiones públicas y en la elección o control de sus representantes."},
    {keys:["democracia","democracia representativa"],title:"Democracia",body:"La democracia es una forma de organización política en la que el poder se fundamenta en la ciudadanía. Puede incluir elecciones libres, participación, pluralismo, respeto por los derechos, separación de poderes y rendición de cuentas. Participar no consiste solamente en votar: también incluye informarse, deliberar y vigilar las decisiones públicas."},
    {keys:["revolucion francesa","revolucion francesa causas"],title:"Revolución francesa",body:"La Revolución francesa comenzó en 1789. Entre sus causas estuvieron la desigualdad social, la crisis financiera del Estado, las dificultades económicas y las ideas ilustradas sobre libertad e igualdad. Transformó las instituciones políticas de Francia y tuvo gran influencia en la historia moderna."},
    {keys:["socrates","platon","aristoteles","filosofia","filosofía"],title:"Filosofía",body:"La filosofía es una actividad que busca comprender y cuestionar la realidad, el conocimiento, la moral, la belleza y la existencia mediante preguntas y argumentos. Sócrates destacó el diálogo y el examen de las propias ideas; Platón reflexionó sobre el conocimiento y la justicia; Aristóteles estudió la lógica, la naturaleza, la ética y la política."},
    {keys:["html","pagina web","página web","estructura html"],title:"HTML",body:"HTML es el lenguaje de marcado que organiza el contenido de una página web. Los elementos comunes incluyen <html>, <head>, <title> y <body>. Los encabezados usan <h1> a <h6>, los párrafos <p>, los enlaces <a> y las imágenes <img>. HTML define la estructura; CSS controla la presentación y JavaScript añade interactividad."},
    {keys:["css","estilos web","hoja de estilos"],title:"CSS",body:"CSS es el lenguaje que define la apariencia de una página web: colores, tamaños, espacios, distribución y animaciones. Se puede conectar un archivo externo con <link rel=\"stylesheet\" href=\"style.css\">. Selectores como .clase, #id y etiquetas permiten elegir qué elementos reciben estilos."},
    {keys:["javascript","js","programacion web"],title:"JavaScript",body:"JavaScript es un lenguaje de programación que permite añadir comportamiento a las páginas web. Puede responder a clics, validar formularios, modificar el contenido del documento y comunicarse con servidores. Para seleccionar un elemento se usa document.querySelector(); para escuchar un evento, addEventListener()."},
    {keys:["internet","web","www","navegador"],title:"Internet y la web",body:"Internet es una red mundial de redes que permite intercambiar datos mediante protocolos. La World Wide Web es uno de los servicios que funciona sobre Internet: permite consultar páginas y recursos enlazados mediante navegadores y protocolos como HTTP y HTTPS."},
    {keys:["inteligencia artificial","ia","machine learning","aprendizaje automatico"],title:"Inteligencia artificial",body:"La inteligencia artificial (IA) es un campo de la informática que desarrolla sistemas capaces de realizar tareas asociadas con capacidades como reconocer patrones, comprender lenguaje, generar contenido o apoyar decisiones. El aprendizaje automático permite que un sistema encuentre patrones a partir de datos. Sus resultados pueden contener errores y conviene verificarlos."},
    {keys:["medio ambiente","contaminacion","cambio climatico","reciclaje"],title:"Medio ambiente",body:"El medio ambiente incluye los componentes naturales y sociales que rodean a los seres vivos. La contaminación introduce sustancias o energía que pueden causar daños. Algunas acciones útiles son reducir residuos, reutilizar materiales, separar reciclables, ahorrar agua y energía, y proteger los ecosistemas."},
    {keys:["salud","habitos saludables","sueño","alimentacion equilibrada"],title:"Hábitos saludables",body:"Los hábitos saludables incluyen dormir lo suficiente, mantener una alimentación variada, beber agua, realizar actividad física adecuada, cuidar la higiene y buscar apoyo cuando algo preocupa. Las necesidades cambian según la edad y cada persona; evita dietas extremas o rutinas que causen dolor."},
    {keys:["ingles","english","verb to be"],title:"Inglés: verbo to be",body:"El verbo to be significa ser o estar. En presente se usa am con I, is con he/she/it y are con you/we/they. Ejemplos: I am a student (Soy estudiante); She is happy (Ella está feliz); They are friends (Ellos son amigos)."},
    {keys:["portugues","portugués","ola","obrigado"],title:"Portugués básico",body:"En portugués, Olá significa hola, Bom dia significa buenos días, Por favor significa por favor, Obrigado (si habla un hombre) u Obrigada (si habla una mujer) significa gracias, y Até logo significa hasta luego. Muchas palabras se parecen al español, pero la pronunciación es diferente."}
  ];

  const normalize = value => String(value || "").toLocaleLowerCase("es")
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9+*/().%\s-]/g, " ").replace(/\s+/g, " ").trim();

  function calculate(text) {
    const match = text.match(/(?:cuanto es|cuanto da|calcula|resuelve)\s+([0-9().+*/%\s-]+)\??$/i);
    if (!match) return null;
    const expression = match[1].trim();
    if (!expression || !/^[0-9().+*/%\s-]+$/.test(expression)) return null;
    try {
      const result = Function('"use strict"; return (' + expression.replace(/(\d+(?:\.\d+)?)%/g, "($1/100)") + ')')();
      if (!Number.isFinite(result)) return "No puedo calcular esa operación. Revisa los números y los signos.";
      return "El resultado es: " + Number(result.toFixed(8));
    } catch {
      return "No pude interpretar la operación. Escríbela, por ejemplo: ¿cuánto es 25 * 4?";
    }
  }

  function answer(question) {
    const q = normalize(question);
    if (!q) return "Escribe una pregunta y buscaré en mi base de conocimientos.";
    if (/^(hola|buenas|hey|buenos dias|buenas tardes|buenas noches)$/.test(q)) {
      return "¡Hola! Soy NEXUS AI. Tengo una base de conocimientos local para ayudarte con ciencias, matemáticas, historia, ciudadanía, filosofía, idiomas y programación. ¿Qué quieres aprender hoy?";
    }
    if (/(quien eres|que eres|que puedes hacer)/.test(q)) {
      return "Soy NEXUS AI, un asistente con una base de conocimientos local. Puedo explicar temas escolares, conceptos de ciencia, historia, matemáticas, filosofía y programación, además de resolver operaciones sencillas. No tengo acceso automático a internet ni puedo conocer noticias en tiempo real.";
    }
    const math = calculate(q);
    if (math) return math;
    const words = q.split(" ").filter(w => w.length > 2);
    let best = null, bestScore = 0;
    for (const topic of topics) {
      let score = 0;
      const keys = topic.keys.map(normalize);
      for (const key of keys) {
        if (q.includes(key)) score = Math.max(score, key.split(" ").length + 1);
        const keyWords = key.split(" ").filter(w => w.length > 2);
        const hits = keyWords.filter(w => words.includes(w)).length;
        if (keyWords.length) score = Math.max(score, hits / keyWords.length * 1.8);
      }
      if (score > bestScore) { bestScore = score; best = topic; }
    }
    if (best && bestScore >= 0.8) {
      return best.title + "\n\n" + best.body + "\n\n¿Quieres que te lo explique con un ejemplo o que te haga un resumen para estudiar?";
    }
    return "Todavía no encuentro una explicación específica para esa pregunta en mi base local.\n\nPrueba a escribir el tema con otras palabras o pregunta por uno de estos temas: sistema solar, fotosíntesis, célula, leyes de Newton, energía, fracciones, porcentajes, geometría, Estado colombiano, participación ciudadana, filosofía, HTML, CSS, JavaScript o inteligencia artificial.\n\nNota: esta versión trabaja con conocimientos guardados; no es un modelo generativo y no consulta internet.";
  }

  window.NEXUS_KNOWLEDGE = { answer, topics };
})();