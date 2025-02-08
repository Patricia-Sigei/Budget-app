# Budget App
A simple web application for managing budgets, with **Admin** and **User** functionalities.

## Features
### Admin
- Login as an admin.
- Create new user accounts.
- View a list of all users.

### User
- Login as a user.
- View personal budget entries.
- Add, edit, and manage budgets.

## Tech Stack
- **Frontend**: JavaScript, HTML, CSS  
- **Backend API**: Node.js/Express (Expected at `http://localhost:3000`)  

## Installation
1. **Clone the repository**
   ```sh
   git clone https://github.com/Patricia-Sigei/Budget-app.git
   ```
2. **Navigate into the project folder**
   ```sh
   cd Budget-app
   ```
3. **Start the backend server** (assuming Node.js API is available)
   ```sh
   cd server
   npm install
   npm start
   ```
4. **Run the frontend**
   Open `index.html` in a browser or use a local development server.

## Usage
### Admin Login
1. Enter **Admin Username** and **Password**.
2. Click **Login**.
3. After logging in, the admin can **view users** and **create accounts**.

### User Login
1. Enter **Username** and **Password**.
2. Click **Login**.
3. The user dashboard will display their budgets.
4. Users can **add, edit, or view budgets**.

## API Endpoints
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/admin/login` | `POST` | Admin login |
| `/admin/accounts` | `POST` | Create new user |
| `/admin/accounts` | `GET` | View all users |
| `/login` | `POST` | User login |
| `/budgets/:username` | `GET` | Get user budgets |
| `/budgets/:username` | `POST` | Add new budget |
| `/budgets/:username/:index` | `PUT` | Edit existing budget |

## Contributing
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch`
3. Commit your changes: `git commit -m "Add feature"`
4. Push to the branch: `git push origin feature-branch`
5. Submit a pull request.

## License
This project is open-source and available under the MIT License.

