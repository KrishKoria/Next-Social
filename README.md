<h1 align="center" id="title">Next Social</h1>

<p align="center"><img src="https://socialify.git.ci/KrishKoria/Next-Social/image?font=Inter&amp;language=1&amp;name=1&amp;owner=1&amp;pattern=Solid&amp;theme=Dark" alt="project-image"></p>

<p id="description">Next-Social is a modern web application built with cutting-edge technologies to deliver an exceptional user experience. This project leverages TypeScript Next.js 15 and React 19 ensuring robust and scalable performance.</p>

  
  
<h2>🧐 Features</h2>

Here're some of the project's best features:

*   Authentication: Utilizes Clerk for secure and seamless user authentication.
*   Database: Implements Prisma ORM with MongoDB for efficient data storage and management.
*   Real-time Updates: Supports real-time data synchronization for a dynamic user experience.
*   Responsive Design: Optimized for various devices providing a seamless experience across desktops tablets and mobile phones.
*   Scalable Architecture: Designed to handle growing user bases and increasing data loads efficiently.
*   Modular Codebase: Well-organized and modular code structure facilitating easy maintenance and feature expansion.

<h2>🛠️ Installation Steps:</h2>

<p>1. Clone the repository</p>

```
git clone https://github.com/KrishKoria/Next-Social.git
```

<p>2. Go into the cloned directory</p>

```
cd Next-Social
```

<p>3. Install the required dependencies</p>

```
npm install
```

<p>4. Create A .env file in the root directory</p>

```
touch .env
```

<p>5. Create The Following Entries in the .env file</p>

```
DATABASE_URL = "your mongoDB connection string"

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<Your Clerk Key>
CLERK_SECRET_KEY=<Your Clerk Secret Key>
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

WEBHOOK_SECRET=<clerk webhook secret>

NEXT_PUBLIC_CLOUDINARY_API_KEY = <Your Cloudinary Public Api Key>
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME =  <Your Cloud Name>
CLOUDINARY_API_SECRET = <Your Cloudinary Api Secret Key>
```

<p>6. Push the prisma schema to the database</p>

```
npx prisma db push
```

<p>7. Now you are ready to launch the application</p>

```
npm run dev
```

  
  
<h2>💻 Built with</h2>

Technologies used in the project:

*   Next.js
*   Cloudinary
*   MongoDB
*   Prisma ORM
*   Clerk
*   Zod
*   TailwindCSS
*   ShadCN
