### CHATBOT Whatsapp (Baileys Provider)

<p align="center">
  <img width="300" src="https://i.imgur.com/Oauef6t.png">
</p>

**Con esta librería, puedes construir flujos automatizados de conversación de manera agnóstica al proveedor de WhatsApp,** configurar respuestas automatizadas para preguntas frecuentes, recibir y responder mensajes de manera automatizada, y hacer un seguimiento de las interacciones con los clientes.  Además, puedes configurar fácilmente disparadores que te ayudaran a expandir las funcionalidades sin límites. **[Ver documentación](https://bot-whatsapp.netlify.app/)**

```
npm install
npm start
```

---

## Recursos

- [📄 Documentación](https://bot-whatsapp.netlify.app/)
- [🚀 Roadmap](https://github.com/orgs/codigoencasa/projects/1)
- [💻 Discord](https://link.codigoencasa.com/DISCORD)
- [👌 Twitter](https://twitter.com/leifermendez)
- [🎥 Youtube](https://www.youtube.com/watch?v=5lEMCeWEJ8o&list=PL_WGMLcL4jzWPhdhcUyhbFU6bC0oJd2BR)

---

# Chatbot orientado a trabajar en un entorno institucional

## Caracteristias:

- Permite leer archivos Excel para realizar una validación simple con un valor (DNI)
- Permite encontrar un valor en un archivo Excel con la busqueda por columna y traer todo la información de la fila donde se hizo el matcheo
- Sistema de Modularización por BARRELS para exportación de flujos
- Sistema de Carpetas para Modularización
- [Diagrama estructural](https://drive.google.com/file/d/1Z94pK5BwkLsp5yU0FfF6b5_0UsOEQZyv/view?usp=drive_link)

## Archivos del sistema

```
  Carpeta Datos: Contiene un archivo con los datos de los Alumnos y de los tutores, en estos archivos el sistema valida los DNI de los Tutores y los DNI de los Alumnos con los datos de estos archivos construye la URL para buscar archivos

  Carpeta Secundaria: Contiene un sistema de archivos de Turnos y grados para almacenar los archivos de notas

  Carpeta Administración: Contiene las facturas de los Tutores
```

## Vistas

```
- Flujos
  * by (endFlow) ['Adios']
  * hello ['hola', 'Hola','Buenos días', 'Buenos dias'|, 'buenos dias', 'Reiniciar', 'reiniciar', 'ChatBot', 'chatbot', 'Chatbot']
  * main_menu ['Menú Principal', 'Menu Principal', 'menu principal']
  * reboot_system (endFlow) ['Reinicio Sistema']
  * stay (endFlow) ['Quedarse']
  * new_user (endFlow) ['Hola, quisiera recibir información de la institución', 'informacion', 'Información', 'información']

- Menu Administración
  * menu_administration ['Flujo Administracion']

- Archivos
  * delivery_notes ['Entrega Notas']

- Menu Primaria
  * menu_primary (endFlow) ['Flujo Primaria']

- Menu Secundaria
  * menu_secundary ['Menu Secundaria']

- Usuarios Desconocidos
  * restart_wizard_student (endFlow) ['DNI Desconocdio Alumno']
  * restart_wizard_tutor (endFlow) ['DNI Desconocido Tutor']
  * unknow_user (endFlow) ['DNI Desconocido']

- Validadores
  * validator_student ['Validador Alumno']
  * validator_tutors ['Validador Tutores']
```

## Estructura de los Menus

### Menu Principal

```
- main_menu {
  - menu_administration {
    - Consultar Facturas {
      - delivery_fact
    }
  }
  - menu_primary (Terminado) {
    - VACIO
  }
  - menu_secundary (Terminado) {
    - Consultar Notas {
      - delivery_notes
    }
  }
}
```

### Menu Administración

```
- menu_administration {
  - views_facturas
}
```

### Menu Primaria

```
- menu_primary {
  - VACIO
}
```

### Menu Secundaria

```
- menu_secundary {
  - views_notes
}
```

### Tareas

- Agregar opción de visualizar facturas (Menu Administración)
- Actualizar diagrama
- Probar carga con Jmeter
- Mejora en opción de varios archivos para el Usuario (Por numero de informe o mes de Factura)
