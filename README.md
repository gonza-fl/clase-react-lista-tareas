# Lista de Tareas - RollingCode School

Este proyecto es una aplicación de lista de tareas construida con React y Vite. Utiliza `json-server` con el middleware `json-server-auth` para simular un backend real con autenticación segura y persistencia de datos.

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
Para que la aplicación funcione correctamente, necesitas correr tanto el **Frontend** (React) como el **Backend** (JSON Server protegido).

Recomendamos abrir **dos terminales**:

**Terminal 1: JSON Server (Backend)**
Este comando iniciará la base de datos simulada en el puerto 3004 con seguridad habilitada.
```bash
npm run server
```

**Terminal 2: Frontend (React + Vite)**
Este comando iniciará la aplicación de React.
```bash
npm run dev
```

Una vez ejecutado, abre tu navegador en `http://localhost:5173`.

---

## � Usuarios y Autenticación
Debido a que usamos seguridad real, **ya no se pueden agregar usuarios manualmente en `db.json`** escribiendo la contraseña. Las contraseñas deben estar encriptadas.

### Usuario por defecto
El proyecto viene con un usuario pre-configurado para pruebas:
- **Email:** `admin@admin.com`
- **Contraseña:** `admin`

### Crear nuevos usuarios
Para crear usuarios nuevos, debes usar el endpoint de registro (ya que la UI de registro aún no está implementada). Puedes hacerlo mediante Postman o curl:
`POST http://localhost:3004/register`

---

## ✅ Funcionalidades Completadas
- [x] **Autenticación Real**: Login implementado usando petición HTTP `POST` a `/login`.
- [x] **Tokens de Seguridad**: Manejo de `accessToken` en `localStorage` para persistir la sesión.
- [x] **Listado de Tareas**: Visualización de tareas traídas del servidor mediante `useEffect` y `GET /tasks`.
- [x] **Creación de Tareas**: Formulario funcional para agregar nuevas tareas mediante `POST /tasks`.

## 📚 Temas Aplicados
- **Context API**: Uso de `AuthContext` para estado global de autenticación.
- **Hooks de React**: Manejo profundo de `useState` (formularios) y `useEffect` (llamadas a API).
- **Rutas Protegidas**: Restricción de acceso al Dashboard usando `React Router`.
- **JSON Server Auth**: Configuración de middleware de seguridad para simular un entorno profesional.

---

## Información Técnica
Este proyecto ejecuta `json-server` con el flag `-m node_modules/json-server-auth` para habilitar las reglas de seguridad (JWT) y proteger los endpoints.
