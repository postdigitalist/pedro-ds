![Logo de Pedro](public/StorybookLogo.png)
# Pedro Design System 

**Pedro** es un sistema de diseño creado para el desarrollo de la plataforma de financiamiento comunitario de [RedGayLatino](https://www.redgaylatino.org/). 

En el diseño de **Pedro**, aspiramos a proveer una base sólida, accesible e iterable para el desarrollo, que pueda aplicarse a una amplia variedad de productos. 

## Principios de diseño

Pedro es:

- **Neutral & versátil→**  Somos minimalistas. No porque seamos aburridos, sino porque no queremos plagar nuestros productos de elementos que nos impidan tener conversaciones serias, o que oscurezcan las acciones clave que la persona usuaria quiere realizar.
- **Escalable →** Todos los elementos deben poder integrarse a estructuras más grandes sin crear una deuda técnica desproporcional ni afectar la performance.

## Principios de desarrollo de producto

Los productos que se desarrollen con Pedro deben ser:

- Simples & directos
- Centrados en el usuario

## Tooling

- Nuestro sistema es, básicamente, una serie de componentes desarrollados sobre una versión personalizada de Tailwind. Para construir sobre Pedro, es clave que entiendas cómo funciona Tailwind. Te recomendamos echarle un ojo a [la documentación oficial de Tailwind](https://tailwindcss.com/docs).
- Nuestro sistema de diseño en Figma fue construido sobre [Disy](https://www.disy.design/). Si querés una referencia sobre cómo diseñar un elemento que todavía no existe, de una forma consistente con el resto del sistema, [echale un ojo a Disy](https://www.figma.com/file/usqAh1FfAVsiGIbSKUKyQ7/Disy-%E2%80%94-Preview-1.1?node-id=317%3A3322).
- Aislamos y documentamos los componentes con [Storybook](https://storybook.js.org).
- Publicamos la librería de componentes vía [Chromatic](https://chromatic.com)

## Enlaces importantes
- [Showcase de componentes](https://www.chromatic.com/library?appId=63449c2a6e6875570f288cb5)

## FAQs

### ¿Puedo usar Pedro en mi proyecto?
Sí, por supuesto. 

### ¿Cómo se corre Pedro?

1. Instalá Pedro con `npm i pedro-ds`
2. Importá el componente que quieras, donde quieras, como lo harías con 
cualquier otro paquete. Es decir, `import [componente] from pedro-ds` 
### ¿Cómo contribuir?

1. Crea un issue en [el repositorio de Github de **Pedro**](https://github.com/postdigitalist/pedro-ds). 
2. Cloná el repo & crea una nueva rama.
3. Implementá los cambios y pusheá.
4. Creá una nueva pull request, pidiendo que tu rama se integre a main. Recordá comentar en él mencionando el número del issue que creaste en el primer paso.
