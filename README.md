# Prueba Técnica Frontend

## Descripción del Proyecto

Este proyecto consiste en desarrollar una interfaz web simple que consuma una API pública y muestre los resultados de forma clara y organizada. La interfaz permite visualizar una lista de elementos obtenidos desde la API, ver detalles específicos de cada uno, y gestionar estados de carga y error de manera adecuada.

### Objetivo
El objetivo principal es mostrar los elementos de una API pública (en este caso, [JSONPlaceholder](https://jsonplaceholder.typicode.com)) y presentar la información de forma atractiva y funcional utilizando buenas prácticas de desarrollo frontend.

## Requisitos Técnicos

- **Framework**: Vue.js (o el que corresponda según la vacante en la que aplicaste).
- **API**: [JSONPlaceholder](https://jsonplaceholder.typicode.com/).
- **Funcionalidades**:
  - Mostrar una lista de elementos obtenidos desde la API.
  - Permitir consultar detalles de un elemento específico desde la lista.
  - Manejar errores básicos (como fallos en la carga de la API o datos faltantes).
  - Implementar pruebas unitarias básicas.
  - Implementar una interfaz visual agradable y funcional.
  - Documentar la solución y decisiones técnicas.
  - Versionar el código usando Git.

## Funcionalidades Implementadas

1. **Lista de Elementos**:
   - Muestra una lista de elementos obtenidos desde la API pública.
   - Cada ítem es un enlace que lleva a una página de detalles específicos.
   
2. **Detalle de Elemento**:
   - Permite ver más detalles de un ítem seleccionado desde la lista.
   - Muestra el título y el cuerpo del ítem en una nueva vista.

3. **Manejo de Errores**:
   - Si ocurre un fallo al cargar los datos de la API, se muestra un mensaje de error.
   - Si no hay datos disponibles, se muestra un mensaje de carga o un estado vacío.

## Instrucciones de Instalación

1. **Clona el repositorio**:

   ```bash
   git clone https://github.com/usuario/repo.git
   cd repo

