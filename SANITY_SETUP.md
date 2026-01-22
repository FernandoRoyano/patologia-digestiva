# Guía de Configuración de Sanity CMS

Esta guía te explica cómo configurar Sanity para que tu cliente pueda gestionar el blog sin tocar código.

## Paso 1: Crear proyecto en Sanity

1. Ve a [sanity.io/manage](https://www.sanity.io/manage) y crea una cuenta (o inicia sesión)
2. Crea un nuevo proyecto:
   - Nombre: "Blog Diego Royano" (o el que prefieras)
   - Plan: Free (suficiente para un blog)
3. Copia el **Project ID** que te proporciona Sanity

## Paso 2: Configurar variables de entorno

1. Abre el archivo `.env.local` en la raíz del proyecto
2. Reemplaza los valores:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=tu_project_id_real
NEXT_PUBLIC_SANITY_DATASET=production
```

## Paso 3: Desplegar en Vercel

1. Sube el proyecto a GitHub si no lo has hecho
2. En [vercel.com](https://vercel.com), importa el repositorio
3. En la configuración, añade las variables de entorno:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID` = tu project id
   - `NEXT_PUBLIC_SANITY_DATASET` = production
4. Despliega

## Paso 4: Configurar CORS en Sanity

1. Ve a [sanity.io/manage](https://www.sanity.io/manage) > Tu proyecto > API > CORS Origins
2. Añade los dominios permitidos:
   - `http://localhost:3000` (para desarrollo)
   - `https://tu-dominio.vercel.app` (tu URL de Vercel)
   - `https://tu-dominio-personalizado.com` (si tienes uno)

## Paso 5: Crear categorías

1. Accede al Studio: `https://tu-sitio.vercel.app/studio`
2. Ve a "Categoría" y crea las 5 categorías:

| Nombre | Slug | Color |
|--------|------|-------|
| Colitis Ulcerosa | colitis-ulcerosa | #FD5825 |
| SIBO | sibo | #00b894 |
| Nutrición | nutricion | #6c5ce7 |
| Hábitos | habitos | #fdcb6e |
| Recetas | recetas | #e17055 |

## Paso 6: Migrar contenido existente (opcional)

Si quieres migrar los 5 posts que estaban hardcodeados:

1. Accede al Studio
2. Crea cada artículo manualmente copiando el contenido
3. O puedes eliminar el archivo `/app/data/posts.ts` ya que no se usa

## Uso para tu cliente

Tu cliente solo necesita:

1. Ir a `https://tu-sitio.com/studio`
2. Iniciar sesión con su cuenta de Sanity
3. Crear/editar artículos con el editor visual
4. Publicar

**No necesita:**
- Saber programar
- Usar Git
- Editar archivos
- Conocer markdown

## Estructura de archivos creados

```
sanity/
├── schemas/
│   ├── category.ts    # Esquema de categorías
│   ├── post.ts        # Esquema de artículos
│   └── index.ts       # Exportación de esquemas
├── lib/
│   ├── client.ts      # Cliente de Sanity
│   ├── queries.ts     # Queries GROQ
│   └── image.ts       # Utilidades de imagen
└── sanity.config.ts   # Configuración principal

app/
├── studio/
│   └── [[...tool]]/
│       └── page.tsx   # Panel de administración
├── blog/
│   ├── page.tsx       # Actualizado para Sanity
│   └── [slug]/
│       └── page.tsx   # Actualizado para Sanity
└── components/
    └── blog/
        ├── ArticleCard.tsx      # Actualizado
        ├── CategoryFilter.tsx   # Actualizado
        └── BlogPageClient.tsx   # Nuevo componente cliente
```

## Troubleshooting

### El blog aparece vacío
- Verifica que el Project ID es correcto en `.env.local`
- Verifica que has creado categorías y artículos en Sanity Studio
- Comprueba los CORS origins en Sanity

### Error al cargar imágenes
- Verifica que `cdn.sanity.io` está en `next.config.ts` (ya configurado)
- Asegúrate de que las imágenes se subieron correctamente en Sanity

### El Studio no carga
- Verifica que el Project ID es correcto
- Limpia la caché del navegador
- Comprueba la consola del navegador para errores específicos
