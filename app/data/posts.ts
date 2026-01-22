export type Category =
  | 'colitis-ulcerosa'
  | 'sibo'
  | 'nutricion'
  | 'habitos'
  | 'recetas';

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: Category;
  image: string;
  featured: boolean;
  content: string;
};

export const categoryLabels: Record<Category, string> = {
  'colitis-ulcerosa': 'Colitis Ulcerosa',
  'sibo': 'SIBO',
  'nutricion': 'Nutrición',
  'habitos': 'Hábitos',
  'recetas': 'Recetas',
};

export const categoryColors: Record<Category, string> = {
  'colitis-ulcerosa': '#FD5825',
  'sibo': '#00b894',
  'nutricion': '#6c5ce7',
  'habitos': '#fdcb6e',
  'recetas': '#e17055',
};

export const posts: Post[] = [
  {
    slug: 'mi-historia-con-la-colitis-ulcerosa',
    title: 'Mi historia con la colitis ulcerosa: de paciente a profesional',
    description: 'A los 20 años fui diagnosticado de colitis ulcerosa. Hoy, tras más de 6 años sin síntomas, te cuento cómo lo conseguí y qué aprendí en el camino.',
    date: '2025-01-15',
    category: 'colitis-ulcerosa',
    image: '/blog/colitis-historia.jpg',
    featured: true,
    content: `
## El diagnóstico que lo cambió todo

A los 20 años recibí un diagnóstico que cambió mi vida: colitis ulcerosa. El mensaje de los médicos fue claro y desalentador: no tenía solución, tendría que medicarme de por vida y la enfermedad iría a peor.

Iba al baño 5-6 veces al día, con sangrado, y mi calidad de vida se había desplomado. Pero algo dentro de mí se negaba a aceptar ese destino.

## La decisión de tomar las riendas

Decidí no quedarme con esa única visión y empecé a estudiar en profundidad el sistema digestivo, la nutrición y la salud integral. Quería entender qué estaba ocurriendo realmente en mi cuerpo.

Tras aproximadamente 10-12 meses de aprendizaje intensivo y cambios graduales, conseguí pasar de ir al baño 5-6 veces al día a tener una evacuación diaria, correcta y estable.

## El mayor reto: los síntomas extraintestinales

Aunque la primera etapa supuso un gran avance, el mayor reto llegó después con los síntomas extraintestinales, especialmente los dolores articulares que limitaban de forma importante mi día a día.

Fueron años de ensayo, error y comprensión profunda de los mecanismos que los provocaban. Finalmente logré resolverlos entendiendo la conexión entre intestino, inflamación sistémica y articulaciones.

## Más de 6 años sin síntomas

Hoy, gracias a un cambio radical en mi estilo de vida, llevo más de 6 años sin ningún síntoma, sin medicación, y con una salud digestiva y general mejor que nunca.

Esta experiencia no solo transformó mi salud, sino también mi propósito. Por eso decidí formarme profesionalmente en nutrición y psicología, para poder ayudar a otros que están pasando por lo mismo.

## Lo que quiero que sepas

Si estás leyendo esto y te han diagnosticado una enfermedad inflamatoria intestinal, quiero que sepas que hay más opciones de las que te han contado. No te estoy prometiendo una cura milagrosa, pero sí que con el enfoque adecuado, muchas personas pueden mejorar significativamente su calidad de vida.

Cada caso es único, pero la esperanza y el conocimiento son herramientas poderosas.
    `,
  },
  {
    slug: 'sibo-que-es-sintomas-tratamiento',
    title: 'SIBO: qué es, síntomas y cómo abordarlo de forma integral',
    description: 'El sobrecrecimiento bacteriano del intestino delgado (SIBO) es más común de lo que piensas. Aprende a identificarlo y tratarlo.',
    date: '2025-01-10',
    category: 'sibo',
    image: '/blog/sibo-guia.jpg',
    featured: true,
    content: `
## ¿Qué es el SIBO?

SIBO significa Sobrecrecimiento Bacteriano del Intestino Delgado (Small Intestinal Bacterial Overgrowth). Es una condición en la que las bacterias que normalmente viven en el intestino grueso migran y proliferan en el intestino delgado, donde no deberían estar en grandes cantidades.

## Síntomas más comunes

Los síntomas del SIBO pueden confundirse fácilmente con el síndrome del intestino irritable (SII):

- **Hinchazón abdominal**: especialmente después de comer
- **Gases excesivos**: tanto eructos como flatulencias
- **Dolor abdominal**: calambres o molestias difusas
- **Diarrea o estreñimiento**: o alternancia entre ambos
- **Fatiga**: por la mala absorción de nutrientes
- **Niebla mental**: dificultad para concentrarse

## ¿Por qué se produce?

El SIBO puede desarrollarse por múltiples causas:

1. **Alteración de la motilidad intestinal**: el intestino no "limpia" correctamente
2. **Uso prolongado de IBP**: los antiácidos reducen la barrera natural
3. **Cirugías abdominales previas**: alteran la anatomía normal
4. **Estrés crónico**: afecta al sistema nervioso entérico
5. **Dieta inadecuada**: exceso de azúcares y carbohidratos refinados

## Enfoque integral del tratamiento

El abordaje del SIBO no puede limitarse a "matar bacterias". Necesitamos:

### 1. Identificar la causa raíz
¿Por qué se produjo el sobrecrecimiento? Sin resolver esto, el SIBO volverá.

### 2. Modificar la alimentación
Una dieta baja en FODMAPs puede ayudar temporalmente, pero no es la solución definitiva. Necesitamos una estrategia personalizada.

### 3. Restaurar la motilidad
El complejo motor migratorio (CMM) es clave. Espaciar comidas y trabajar el estrés ayudan.

### 4. Apoyar la digestión
A veces necesitamos enzimas digestivas, ácido clorhídrico o bilis de forma temporal.

### 5. Tratar el sobrecrecimiento
Ya sea con antibióticos específicos o antimicrobianos naturales, según el caso.

## Mi recomendación

Si sospechas que puedes tener SIBO, lo primero es un diagnóstico adecuado (test de aliento de lactulosa o glucosa). No te autodiagnostiques ni te automediques.

Y recuerda: el SIBO es un síntoma de algo más profundo. Tratar solo el sobrecrecimiento sin abordar la causa es como apagar la alarma de incendios sin extinguir el fuego.
    `,
  },
  {
    slug: 'alimentacion-antiinflamatoria-guia-practica',
    title: 'Alimentación antiinflamatoria: guía práctica para empezar hoy',
    description: 'La inflamación crónica está detrás de muchos problemas de salud. Descubre cómo tu alimentación puede ayudarte a reducirla.',
    date: '2025-01-05',
    category: 'nutricion',
    image: '/blog/alimentacion-antiinflamatoria.jpg',
    featured: true,
    content: `
## ¿Qué es la inflamación crónica?

La inflamación aguda es una respuesta natural y necesaria del cuerpo ante una lesión o infección. El problema surge cuando esta inflamación se vuelve crónica y de bajo grado, manteniéndose activa sin una causa aparente.

Esta inflamación silenciosa está relacionada con:
- Enfermedades autoinmunes
- Problemas digestivos crónicos
- Fatiga persistente
- Dolores articulares
- Problemas de piel

## Alimentos que inflaman

Antes de añadir, a veces hay que quitar. Estos alimentos promueven la inflamación:

### Evitar o reducir significativamente:
- **Azúcares añadidos**: refrescos, bollería, dulces
- **Aceites vegetales refinados**: girasol, maíz, soja
- **Harinas refinadas**: pan blanco, pasta blanca
- **Ultraprocesados**: cualquier producto con larga lista de ingredientes
- **Alcohol**: especialmente en exceso
- **Carnes procesadas**: embutidos, salchichas

## Alimentos antiinflamatorios

### Grasas saludables
- **Aceite de oliva virgen extra**: la base de todo
- **Pescado azul**: salmón, sardinas, caballa (omega-3)
- **Aguacate**: grasa monoinsaturada
- **Frutos secos**: nueces, almendras (con moderación)

### Verduras y hortalizas
- **Verduras de hoja verde**: espinacas, acelgas, kale
- **Crucíferas**: brócoli, coliflor, coles de Bruselas
- **Verduras de colores**: pimientos, zanahorias, remolacha

### Especias y condimentos
- **Cúrcuma**: potente antiinflamatorio (mejor con pimienta negra)
- **Jengibre**: fresco o en polvo
- **Ajo**: crudo o cocinado
- **Romero y orégano**: hierbas mediterráneas

### Frutas
- **Frutos rojos**: arándanos, frambuesas, fresas
- **Cítricos**: naranjas, limones (con moderación)
- **Granada**: potente antioxidante

## Cómo empezar: 5 pasos prácticos

1. **Cambia el aceite**: usa solo aceite de oliva virgen extra
2. **Añade verdura a cada comida**: aunque sea una pequeña guarnición
3. **Come pescado azul 2-3 veces por semana**: o considera un suplemento de omega-3
4. **Reduce el azúcar gradualmente**: empieza por las bebidas
5. **Cocina más en casa**: así controlas los ingredientes

## Lo que no te cuentan

La alimentación antiinflamatoria no es una dieta temporal, es una forma de comer para toda la vida. No busques la perfección, busca la consistencia. Un 80% de adherencia mantenido en el tiempo es mucho mejor que un 100% durante dos semanas.
    `,
  },
  {
    slug: 'habitos-que-transformaron-mi-salud-digestiva',
    title: '5 hábitos que transformaron mi salud digestiva',
    description: 'Más allá de la alimentación, estos hábitos fueron clave en mi recuperación. Pequeños cambios con grandes resultados.',
    date: '2024-12-28',
    category: 'habitos',
    image: '/blog/habitos-digestivos.jpg',
    featured: false,
    content: `
## Introducción

Cuando hablo de mi recuperación de la colitis ulcerosa, muchas personas se centran solo en lo que comí o dejé de comer. Pero la realidad es que los hábitos que rodean a la alimentación fueron igual de importantes.

Aquí te comparto los 5 que marcaron la diferencia.

## 1. Comer sin prisas ni distracciones

Este fue probablemente el cambio más difícil y el más importante.

**Antes**: comía delante del ordenador, mirando el móvil, en 10 minutos.

**Después**: me siento a comer sin pantallas, mastico bien cada bocado, y dedico al menos 20-30 minutos a cada comida.

**Por qué funciona**: la digestión empieza en la boca. Masticar bien prepara al estómago y reduce el trabajo que tiene que hacer el intestino. Además, comer sin estrés activa el sistema nervioso parasimpático, esencial para digerir correctamente.

## 2. Espaciar las comidas (4-5 horas)

**Antes**: picoteaba constantemente, nunca dejaba que mi sistema digestivo descansara.

**Después**: hago 3 comidas principales bien estructuradas, con 4-5 horas de separación.

**Por qué funciona**: el Complejo Motor Migratorio (CMM) es un sistema de "limpieza" del intestino que solo se activa cuando llevamos varias horas sin comer. Si picoteamos constantemente, este sistema nunca puede hacer su trabajo.

## 3. Cenar temprano y ligero

**Antes**: cenaba a las 22:00 o más tarde, y muchas veces era la comida más abundante del día.

**Después**: ceno antes de las 20:00, y es la comida más ligera.

**Por qué funciona**: el sistema digestivo tiene su propio ritmo circadiano. Por la noche, la capacidad digestiva disminuye. Cenar tarde y abundante sobrecarga un sistema que debería estar preparándose para descansar.

## 4. Gestionar el estrés de forma activa

**Antes**: el estrés era algo que "simplemente tenía" y no hacía nada al respecto.

**Después**: incorporé prácticas diarias de gestión del estrés.

**Qué hago**:
- 10 minutos de respiración profunda al despertar
- Paseos en la naturaleza sin móvil
- Establecer límites claros en el trabajo
- Dormir 7-8 horas como prioridad no negociable

**Por qué funciona**: el intestino y el cerebro están conectados por el nervio vago. El estrés crónico altera la motilidad intestinal, aumenta la permeabilidad y desequilibra la microbiota. No puedes tener un intestino sano con un sistema nervioso crónicamente activado.

## 5. Moverme todos los días

**Antes**: vida sedentaria, pasaba horas sentado.

**Después**: incorporo movimiento todos los días, aunque sea suave.

**Qué hago**:
- Caminar 30-60 minutos diarios
- Estiramientos por la mañana
- Evitar estar sentado más de 1 hora seguida

**Por qué funciona**: el movimiento estimula el peristaltismo intestinal (los movimientos que hacen avanzar el contenido), reduce la inflamación sistémica y mejora la circulación hacia los órganos digestivos.

## Conclusión

Estos hábitos no son glamurosos ni revolucionarios. No hay suplementos mágicos ni técnicas secretas. Son principios básicos que la mayoría conocemos pero no aplicamos.

La diferencia está en la consistencia. No se trata de hacerlo perfecto un día, sino de hacerlo razonablemente bien todos los días.

Si pudiera darte un solo consejo, sería este: elige uno de estos hábitos y comprométete con él durante un mes antes de añadir otro. El cambio sostenible se construye paso a paso.
    `,
  },
  {
    slug: 'recetas-faciles-intestino-sensible',
    title: 'Recetas fáciles para intestinos sensibles',
    description: 'Ideas prácticas y sencillas para comer bien sin irritar tu sistema digestivo. Recetas probadas y aprobadas.',
    date: '2024-12-20',
    category: 'recetas',
    image: '/blog/recetas-digestivas.jpg',
    featured: false,
    content: `
## Introducción

Cuando tienes problemas digestivos, la cocina puede convertirse en un campo de minas. ¿Qué puedo comer? ¿Qué me sentará mal? ¿Tengo que renunciar al sabor?

Después de años experimentando, he recopilado recetas que son sabrosas, nutritivas y amables con el sistema digestivo. Aquí te comparto algunas de mis favoritas.

## Principios básicos

Antes de las recetas, algunos principios que aplico siempre:

1. **Cocinar los vegetales**: crudos pueden ser más difíciles de digerir
2. **Evitar combinaciones complejas**: cuantos menos ingredientes, mejor
3. **Usar especias digestivas**: jengibre, cúrcuma, comino
4. **Cocinar con AOVE**: aceite de oliva virgen extra siempre
5. **Priorizar caldos y sopas**: muy reconfortantes y fáciles de digerir

---

## Receta 1: Crema de calabaza y jengibre

**Ingredientes** (4 raciones):
- 1 kg de calabaza
- 1 cebolla pequeña
- 2 cm de jengibre fresco
- 3 cucharadas de AOVE
- Sal y pimienta al gusto
- Agua o caldo de verduras

**Preparación**:
1. Pela y trocea la calabaza y la cebolla
2. Sofríe la cebolla en el aceite a fuego medio (5 min)
3. Añade la calabaza y el jengibre rallado
4. Cubre con agua o caldo y cocina 20-25 minutos
5. Tritura hasta obtener una crema suave
6. Ajusta de sal y sirve con un chorrito de AOVE

**Por qué funciona**: La calabaza es muy suave y el jengibre ayuda a la digestión.

---

## Receta 2: Salmón al horno con verduras

**Ingredientes** (2 raciones):
- 2 lomos de salmón
- 1 calabacín
- 1 zanahoria
- Hierbas provenzales
- AOVE, sal y pimienta

**Preparación**:
1. Precalienta el horno a 180°C
2. Corta las verduras en rodajas finas
3. Coloca las verduras en una bandeja con AOVE
4. Pon el salmón encima, sazona con hierbas, sal y pimienta
5. Hornea 20-25 minutos

**Por qué funciona**: Pescado omega-3 + verduras cocidas = combinación antiinflamatoria perfecta.

---

## Receta 3: Arroz con pollo y cúrcuma

**Ingredientes** (4 raciones):
- 300g de arroz basmati
- 400g de pechuga de pollo
- 1 cucharadita de cúrcuma
- 1/2 cucharadita de comino
- 2 zanahorias
- AOVE, sal

**Preparación**:
1. Corta el pollo en trozos y las zanahorias en dados
2. Dora el pollo en AOVE con las especias
3. Añade las zanahorias y sofríe 3 minutos
4. Incorpora el arroz, remueve y añade agua (doble de volumen)
5. Cocina a fuego bajo tapado 15-18 minutos
6. Deja reposar 5 minutos antes de servir

**Por qué funciona**: El arroz basmati es bien tolerado y la cúrcuma es antiinflamatoria.

---

## Receta 4: Tortilla francesa con espinacas

**Ingredientes** (1 ración):
- 2-3 huevos
- 1 puñado de espinacas frescas
- AOVE, sal

**Preparación**:
1. Saltea las espinacas brevemente en AOVE hasta que se reduzcan
2. Bate los huevos con sal
3. Vierte sobre las espinacas y cocina a fuego medio-bajo
4. Dobla cuando esté cuajada pero jugosa

**Por qué funciona**: Proteína de calidad + verdura cocida. Simple y efectivo.

---

## Receta 5: Compota de manzana casera

**Ingredientes**:
- 4 manzanas
- 1 rama de canela
- Agua

**Preparación**:
1. Pela y trocea las manzanas
2. Ponlas en una olla con la canela y un poco de agua
3. Cocina a fuego bajo 20-30 minutos removiendo ocasionalmente
4. Tritura o deja con trozos, según preferencia
5. Sirve tibia o fría

**Por qué funciona**: La manzana cocida es muy suave para el intestino. Perfecta como postre o merienda.

---

## Nota final

Estas recetas son un punto de partida. Cada persona es diferente y lo que a mí me funciona puede que a ti no. Escucha a tu cuerpo, lleva un diario si es necesario, y ve adaptando según tus necesidades.

La cocina para intestinos sensibles no tiene por qué ser aburrida. Se trata de volver a lo básico: ingredientes de calidad, preparaciones simples, y mucho cariño.
    `,
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find(post => post.slug === slug);
}

export function getFeaturedPosts(): Post[] {
  return posts.filter(post => post.featured);
}

export function getPostsByCategory(category: Category): Post[] {
  return posts.filter(post => post.category === category);
}

export function getAllCategories(): Category[] {
  return ['colitis-ulcerosa', 'sibo', 'nutricion', 'habitos', 'recetas'];
}
