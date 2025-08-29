# 🏢 SaaS de Administración de Condominios

Este proyecto es un **SaaS de administración de condominios** desarrollado con **NestJS**, **Next.js** y **PostgreSQL**.  
Incluye autenticación con **JWT** y **Google OAuth**, un frontend moderno con **TailwindCSS**, y ORM con **Prisma** y **Knex** para migraciones avanzadas.

---

## 🚀 Tecnologías principales

- **[Next.js](https://nextjs.org/)** → Frontend React con SSR/SSG.
- **[NestJS](https://nestjs.com/)** → Backend modular en Node.js.
- **[Prisma](https://www.prisma.io/)** → ORM para manejo de base de datos.
- **[Knex](https://knexjs.org/)** → Migraciones personalizadas de SQL.
- **[PostgreSQL](https://www.postgresql.org/)** → Base de datos relacional.
- **[JWT](https://jwt.io/)** → Autenticación basada en tokens.
- **[Google OAuth](https://developers.google.com/identity/protocols/oauth2)** → Login con Google.
- **[TailwindCSS](https://tailwindcss.com/)** → Estilos rápidos y responsivos.
- **[TypeScript](https://www.typescriptlang.org/)** → Tipado estático para mejor DX.

---

## 📂 Estructura del Proyecto

```bash
.
├── api/               # Backend NestJS
│   ├── src/
│   │   ├── modules/   # Módulos de la aplicación (usuarios, auth, etc.)
│   │   ├── prisma/    # Esquema y migraciones Prisma
│   │   └── main.ts    # Punto de entrada del servidor
│   └── package.json
│
├── client/            # Frontend Next.js
│   ├── pages/         # Páginas del frontend
│   ├── components/    # Componentes UI
│   └── package.json
│
├── docker-compose.yml # Orquestación de contenedores (API, DB, etc.)
├── README.md
└── .env.example       # Variables de entorno de ejemplo
```
