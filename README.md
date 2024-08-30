
# Express Authentication Template

This project is an **Express** backend template designed to quickly set up authentication for various projects. It leverages **Prisma** for database management, allowing for efficient user handling and secure authentication processes.

## Features

- **User Authentication**: Includes signup, login, and JWT-based authentication.
- **Password Hashing**: Secure password storage using bcrypt.
- **Role-Based Access Control**: Easily extendable to support user roles.
- **Prisma ORM**: Database management and migrations made simple.
- **Environment Configuration**: Centralized and customizable environment variables.
- **API Documentation**: Comprehensive API routes documentation.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [PostgreSQL](https://www.postgresql.org/) (or any other supported database)
- [Prisma CLI](https://www.prisma.io/docs/getting-started)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ByteBrewer101/authbackend_template.git
   cd authbackend_template
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Setup environment variables:**

   Create a `.env` file in the root directory and add your database connection string and other necessary environment variables. Here's an example:

   ```bash
   DATABASE_URL="postgresql://user:password@localhost:5432/mydb"
   JWT_SECRET="your_jwt_secret"
   ```

4. **Run Prisma migrations:**

   ```bash
   npx prisma migrate dev --name init
   ```

5. **Start the server:**

   ```bash
   npm run dev
   ```

   The server should now be running on `http://localhost:3000`.

### Usage

- **Sign up**: `POST /api/auth/signup`
- **Login**: `POST /api/auth/login`
- **Get user details**: `GET /api/user`

### Customization

This template is designed to be easily customizable. You can extend the schema in `prisma/schema.prisma`, add new routes, or integrate additional services as required.

### Folder Structure

```
├── prisma/              # Prisma schema and migrations
├── src/
│   ├── auth/            # Authentication-related logic
│   ├── controllers/     # Route controllers
│   ├── middleware/      # Express middleware
│   ├── routes/          # API routes
│   └── utils/           # Utility functions
├── .env                 # Environment variables
├── package.json
└── README.md
```

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
