# FMCG Suite: Sales & Route Management System

A comprehensive system for managing products, sales, route planning, and delivery tracking for FMCG businesses.

## Features

- **Product Management**: Upload, filter, and manage product catalog
- **Order Management**: Track customer orders and status
- **Route Planning**: Optimize delivery routes for salespeople
- **Delivery Tracking**: Record product deliveries and returns
- **Report Generation**: Create custom reports with multiple export options
- **Salesperson Dashboard**: Mobile-friendly interface for field staff

## Tech Stack

- **Frontend**: React, Next.js, Tailwind CSS, Shadcn UI
- **State Management**: React Context, SWR for data fetching
- **Maps & Routing**: Leaflet for map visualization
- **UI Components**: Shadcn UI, Recharts for data visualization
- **Authentication**: JWT with custom auth provider
- **API**: REST endpoints with Next.js API routes

## Project Structure

- `app/`: Next.js App Router pages
- `components/`: Reusable UI components
- `lib/`: Utility functions and services
- `providers/`: React context providers
- `hooks/`: Custom React hooks
- `types/`: TypeScript type definitions

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- MongoDB database

### Installation

1. Clone the repository
2. Install dependencies with `npm install`
3. Copy `.env.example` to `.env.local` and update the values
4. Run the development server with `npm run dev`
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Environment Variables

See `.env.example` for required environment variables.

## License

[MIT](https://choosealicense.com/licenses/mit/)
