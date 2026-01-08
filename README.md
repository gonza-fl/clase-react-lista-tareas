# Lista de Tareas - RollingCode School

Este proyecto es una aplicación de lista de tareas construida con React y Vite. Utiliza `json-server` para simular un backend (REST API) y manejar autenticación básica.

## 🚀 Cómo levantar el proyecto

Sigue estos pasos para instalar y ejecutar la aplicación en tu máquina local.

### 1. Prerrequisitos
Asegúrate de tener instalado [Node.js](https://nodejs.org/) en tu computadora.

### 2. Instalación
Abre una terminal en la carpeta del proyecto y ejecuta el siguiente comando para instalar las dependencias:

```bash
npm install
```

### 3. Ejecutar la Aplicación
Para que la aplicación funcione correctamente, necesitas correr tanto el **Frontend** (React) como el **Backend** (JSON Server).

Recomendamos abrir **dos terminales**:

**Terminal 1: JSON Server (Backend)**
Este comando iniciará la base de datos simulada en el puerto 3004.
```bash
npm run server
```

**Terminal 2: Frontend (React + Vite)**
Este comando iniciará la aplicación de React.
```bash
npm run dev
```

Una vez ejecutado, abre tu navegador en la URL que te indique la terminal (usualmente `http://localhost:5173`).

---

## 📝 Tareas Pendientes
- [ ] Hacer que el login funcione con petición HTTP `POST`.
- [ ] Implementar la creación de tareas guardándolas en `json-server`.

## 📚 Temas Vistos en Clase
- **Context API**: Uso de `AuthContext` para manejar el estado global de la autenticación.
- **Rutas Protegidas**: Implementación de seguridad para restringir el acceso a ciertas páginas (Dashboard) solo a usuarios logueados.
- **JSON Server**: Configuración y uso para simular una API REST completa con autenticación.
- **React Router**: Navegación entre páginas (Landing, Login, Register, Dashboard).

---

## Información Técnica (Vite)
Este proyecto fue creado con el template de Vite. A continuación la documentación original del template:

### React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
