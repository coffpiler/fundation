# Angular App

A modern Angular application built with MVC architecture, standalone components, and TypeScript.

## 🚀 Features

- **Modern Architecture**: Built with Angular 20+ using standalone components
- **MVC Pattern**: Well-organized folder structure following MVC principles
- **TypeScript**: Full TypeScript support with strict mode
- **SCSS**: Modern styling with SCSS preprocessor
- **Responsive Design**: Mobile-first responsive design
- **Authentication**: JWT-based authentication with guards and interceptors
- **HTTP Client**: Configured HTTP client with interceptors
- **Routing**: Lazy-loaded routes for optimal performance

## 📁 Project Structure

```
src/
├── app/
│   ├── core/                    # Core functionality (singleton services, guards, interceptors)
│   │   ├── constants/           # Application constants
│   │   ├── guards/              # Route guards
│   │   ├── interceptors/        # HTTP interceptors
│   │   ├── models/              # Data models and interfaces
│   │   └── services/            # Core services (auth, user, etc.)
│   ├── features/                # Feature modules (lazy-loaded)
│   │   └── home/                # Home feature
│   ├── shared/                  # Shared components, directives, pipes
│   │   ├── components/          # Reusable components
│   │   ├── directives/          # Custom directives
│   │   ├── pipes/               # Custom pipes
│   │   └── utils/               # Utility functions
│   ├── app.component.ts         # Root component
│   ├── app.config.ts            # Application configuration
│   └── app.routes.ts            # Application routes
├── environments/                # Environment configurations
└── assets/                      # Static assets
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Angular CLI

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:4200`

## 📦 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run watch` - Build in watch mode
- `npm test` - Run unit tests
- `npm run lint` - Run linting

## 🏗️ Architecture

### Core Module
Contains singleton services, guards, interceptors, and models that are used throughout the application.

### Features Module
Contains feature-specific components that are lazy-loaded for better performance.

### Shared Module
Contains reusable components, directives, pipes, and utilities that can be used across features.

## 🔐 Authentication

The app includes a complete authentication system with:
- JWT token management
- Auth guards for protected routes
- HTTP interceptors for automatic token attachment
- User service for profile management

## 🎨 Styling

- Global styles in `src/styles.scss`
- Component-specific styles using SCSS
- Responsive design with mobile-first approach
- CSS custom properties for theming

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🚦 Development Guidelines

1. Use standalone components
2. Follow the established folder structure
3. Use TypeScript strict mode
4. Write unit tests for components and services
5. Use SCSS for styling
6. Follow Angular style guide conventions

## 🔧 Configuration

### Environment Variables
Configure your API endpoints and other settings in:
- `src/environments/environment.ts` (development)
- `src/environments/environment.prod.ts` (production)

### TypeScript Paths
The project uses path mapping for cleaner imports:
- `@app/*` - src/app/*
- `@core/*` - src/app/core/*
- `@shared/*` - src/app/shared/*
- `@features/*` - src/app/features/*
- `@environments/*` - src/environments/*

## 📄 License

This project is licensed under the MIT License.
