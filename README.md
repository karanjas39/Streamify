# [Streamify](https://streamify-speedybrand.vercel.app/)

Streamify is a music streaming analytics dashboard built with React and Vite. This project provides insights into user activity, streaming performance, and revenue generation.

## Key Features

1. **Responsive Design:**

   - Mobile-friendly layout ensuring accessibility across devices.

2. **Dynamic Metrics Display:**

   - Key performance indicators (KPIs) such as total streams, revenue, and user growth.

3. **Data Visualization:**

   - Engaging charts (line, bar, pie) to visualize user growth, revenue, and top songs.

4. **Songs Table:**

   - Displays song details with sorting (by stream date and stream count) and filtering options (by song name and song artist).

5. **Error Handling:**

   - Checks if the JSON server is running, with a user-friendly message if it’s not.

6. **Theme Options:**

   - Light and dark themes to enhance user experience and accessibility.

7. **Loading States:**

   - Uses a loading indicator during data fetching and component loading.

8. **Lazy Loading:**
   - Implements lazy loading for components to optimize performance by loading only the necessary code when required, reducing the initial load time and improving the user experience.

## Getting Started

Follow these steps to get the project up and running on your local machine.

### 1. Clone the Repository

```bash
git clone https://github.com/karanjas39/Streamify.git
cd Streamify
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

### 4. Start the JSON Server

```bash
npm run serve
```

## Running the Application

You can run the application in two ways:

- **Locally** : Follow the steps outlined above to clone the repository, install dependencies, and start the servers.
- **Live Demo**: Visit [Streamify](https://streamify-speedybrand.vercel.app/) to view the application in action.

## Hono (Cloudflare Workers) Backend for [Streamify](https://streamify-backend.beautifulbooth8.workers.dev/)
- **[/metrics](https://streamify-backend.beautifulbooth8.workers.dev/metrics)**: Returns the metrics data.
- **[/userGrowth](https://streamify-backend.beautifulbooth8.workers.dev/userGrowth)**: Returns the userGrowth data.
- **[/revenueDistribution](https://streamify-backend.beautifulbooth8.workers.dev/revenueDistribution)**: Returns the revenueDistribution data.
- **[/topSongs](https://streamify-backend.beautifulbooth8.workers.dev/topSongs)**: Returns the topSongs data.
- **[/recentStreams](https://streamify-backend.beautifulbooth8.workers.dev/recentStreams)**: Returns the recentStreams data.


## Technologies Used

- **Frontend Framework**: React
- **Build Tool**: Vite
- **Styling**: Tailwind CSS, ShadCn/UI
- **State Management**: Redux Toolkit, Redux
- **Data Visualization**: Recharts
- **Mock Server**: JSON Server for serving mock data
- **Type Checking**: TypeScript
- **Code Linting**: ESLint

## Contact Information

- **LinkedIn:** [https://www.linkedin.com/in/singhjaskaran/](https://www.linkedin.com/in/singhjaskaran/)
- **Email:** [dhillonjaskaran4486@gmail.com](mailto:dhillonjaskaran4486@gmail.com)
