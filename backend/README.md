# Backend — E-Learning Platform API (MVC Architecture)

A modular **Node.js + Express + MongoDB** backend structured using an enterprise 3-tier MVC pattern.

## Architecture & Layers

```
backend/
├── config/             # Configuration files (Database, Cloudinary, etc.)
│   └── db.js           # Mongoose MongoDB connection
├── controllers/        # Request handling & HTTP responses
│   └── courseController.js
├── middleware/         # Custom middlewares (Authentication, roles, errors)
│   └── authMiddleware.js
├── repository/         # Data Access Layer (Direct DB interactions via Mongoose models)
│   └── courseRepository.js
├── routes/             # API Route declarations
│   └── courseRoute.js  # /api/course endpoints
├── schema/             # Mongoose Schemas & Models
│   └── courseModel.js
├── services/           # Business Logic Layer (Processes data & calls repositories)
│   └── courseService.js
├── util/               # Shared utilities & response helpers
│   └── responseHandler.js
├── validators/         # Request body validation middlewares
│   └── courseValidator.js
├── .env                # Environment variables (tracked for team collaboration)
├── package.json
└── server.js           # Application entry point
```

## Layered Flow Overview

```
Request ──► Route ──► Middleware/Validator ──► Controller ──► Service ──► Repository ──► Schema (DB)
                                                  │             │             │
Response ◄────────────────────────────────────────┴─────────────┴─────────────┘
```

1. **`routes/`**: Receives incoming requests and applies middleware/validators.
2. **`controllers/`**: Extracts parameters/body from `req`, delegates business logic to `services/`, and formats the HTTP response (`res.status(...).json(...)`).
3. **`services/`**: Houses all business calculations, validation, and multi-step logic, delegating queries to `repository/`.
4. **`repository/`**: Directly queries the Mongoose models defined in `schema/`.
5. **`schema/`**: Defines MongoDB collections and data structure using Mongoose.

## Running the Backend

```bash
cd backend
npm run dev
```

The server starts at `http://localhost:3001`.
Health check available at `http://localhost:3001/api/health`.
