# 🌲 The Wood Nest

A full-stack cabin booking application built using **Next.js**, **Spring Boot**, and **PostgreSQL**. The application allows users to browse cabins, manage guest profiles, and make reservations through a modern web interface.

---

## Tech Stack

### Frontend

- Next.js 15 (App Router)
- React
- JavaScript
- CSS Modules

### Backend

- Spring Boot
- Spring Data JPA
- Hibernate
- Maven

### Database

- PostgreSQL

---

## Features

### Cabin Management

- View all cabins
- View cabin details
- Dynamic cabin data from PostgreSQL

### Guest Management

- Get guest by email
- Create guest
- Update guest profile

### Booking Management

- Create booking
- Update reservation
- Delete reservation
- View reservation details
- View all reservations of a guest
- Fetch booked dates for a cabin

### Other Features

- Reservation date validation
- Dynamic pricing
- RESTful API architecture
- Layered backend architecture
- PostgreSQL persistence

---

## Project Structure

```
thewoodnest
│
├── frontend          # Next.js application
├── backend           # Spring Boot REST API
├── database          # SQL scripts
└── README.md
```

---

## Backend Architecture

```
Controller
      │
      ▼
Service
      │
      ▼
Repository
      │
      ▼
PostgreSQL
```

---

## REST APIs

### Cabin APIs

| Method | Endpoint           | Description     |
| ------ | ------------------ | --------------- |
| GET    | `/api/cabins`      | Get all cabins  |
| GET    | `/api/cabins/{id}` | Get cabin by ID |

---

### Guest APIs

| Method | Endpoint              | Description        |
| ------ | --------------------- | ------------------ |
| GET    | `/api/guests/{email}` | Get guest by email |
| POST   | `/api/guests`         | Create guest       |
| PATCH  | `/api/guests/{email}` | Update guest       |

---

### Booking APIs

| Method | Endpoint                        | Description        |
| ------ | ------------------------------- | ------------------ |
| GET    | `/api/bookings/{id}`            | Get booking        |
| GET    | `/api/bookings/guest/{guestId}` | Get guest bookings |
| GET    | `/api/bookings/cabin/{cabinId}` | Get booked dates   |
| POST   | `/api/bookings`                 | Create booking     |
| PATCH  | `/api/bookings/{id}`            | Update booking     |
| DELETE | `/api/bookings/{id}`            | Delete booking     |

---

## Database

Main Tables

- Cabins
- Guests
- Bookings

Entity Relationship

```
Guest (1)
    │
    │
    ▼
Booking
    ▲
    │
Cabin (1)
```

---

## How to Run

### Clone Repository

```bash
git clone https://github.com/<your-username>/thewoodnest.git
```

### Backend

```bash
cd backend
```

Configure PostgreSQL in

```
application.properties
```

Run

```bash
./mvnw spring-boot:run
```

---

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Application runs on

```
http://localhost:3000
```

Backend

```
http://localhost:8080
```

---

## Future Enhancements

- JWT Authentication
- Spring Security
- Admin Dashboard
- Image Upload
- Payment Integration
- Email Notifications
- Docker Deployment
- CI/CD Pipeline

---

## Screenshots

### Home Page

_Add screenshot_

### Cabin Details

_Add screenshot_

### Reservations

_Add screenshot_

---

## Author

**Prachita Naik**

GitHub: https://github.com/Sifa19
