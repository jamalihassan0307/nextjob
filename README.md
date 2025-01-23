# NextJob - Modern Job Board Application

A full-featured job board application built with Next.js 14, TypeScript, and Firebase. NextJob connects job seekers with employers through an intuitive interface for job posting, application management, and recruitment.

![NextJob Screenshot](public/screenshot.png)

## 🌟 Live Demo

Visit the live application: [https://nextjob-0307.web.app](https://nextjob-0307.web.app)

## 🌟 Features

### For Job Seekers

- Create and manage professional profiles
- Browse and search job listings
- Apply to jobs with resume and cover letter
- Track application status
- Save favorite job listings

### For Employers

- Post and manage job listings
- Review applications
- Manage candidate pipeline
- Company profile management
- Application tracking system

### For Admins

- User management
- Content moderation
- Analytics dashboard
- System statistics

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Authentication**: [Firebase Auth](https://firebase.google.com/products/auth)
- **Hosting**: [Firebase Hosting](https://firebase.google.com/products/hosting)
- **State Management**: React Context
- **Styling**: CSS Modules
- **Development Tools**:
  - ESLint
  - Prettier
  - TypeScript
  - Turbopack

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn
- Firebase account
- Git

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/nextjob.git
cd nextjob
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
   Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

4. Start the development server:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
nextjob/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── dashboard/         # Dashboard views
│   │   ├── jobs/             # Job-related pages
│   │   ├── login/           # Authentication
│   │   └── signup/         # User registration
│   ├── components/         # Reusable components
│   ├── context/           # React Context providers
│   ├── data/             # Data models and services
│   ├── firebase/        # Firebase configuration
│   └── styles/         # CSS styles
├── public/            # Static assets
└── config files      # Configuration files
```

## 📝 Available Scripts

```bash
# Development
npm run dev          # Start development server with Turbopack

# Production
npm run build        # Build production application
npm run start        # Start production server

# Deployment
npm run deploy       # Deploy to Firebase Hosting

# Code Quality
npm run lint         # Run ESLint
```

## 🌐 Deployment

The project is configured for Firebase Hosting:

1. Install Firebase CLI:

```bash
npm install -g firebase-tools
```

2. Login to Firebase:

```bash
firebase login
```

3. Initialize Firebase:

```bash
firebase init
```

4. Deploy:

```bash
npm run deploy
```

## 🔒 Environment Variables

Required environment variables:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support, email [your-email@example.com](mailto:your-email@example.com) or create an issue in the repository.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Firebase](https://firebase.google.com/) - Backend and Hosting
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- All our contributors and users

---

Made with ❤️ by [Your Name](https://github.com/yourusername)
