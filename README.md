# Password Generator 

A modern, secure password generator built with React and Vite. Generate strong, customizable passwords with real-time strength assessment and easy copy functionality.

##  Features

- **Customizable Length**: Generate passwords from 4 to 20 characters
- **Multiple Character Options**:
  - Uppercase letters (A-Z)
  - Lowercase letters (a-z)
  - Numbers (0-9)
  - Special symbols (!@#$%^&*()_+[]{}|;:,.<>?)
- **Real-time Password Strength Assessment**: Visual feedback on password security
- **One-Click Copy**: Copy generated passwords to clipboard instantly
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Error Handling**: User-friendly error messages and validation

##  Live Demo

[View Live Demo](https://your-demo-link.com) *(Add your deployment link here)*

##  Screenshots

*(Add screenshots of your application here)*

##  Technologies Used

- **React 19.1.0** - Frontend framework
- **Vite 7.0.4** - Build tool and development server
- **ESLint** - Code linting and formatting
- **CSS3** - Styling
- **JavaScript ES6+** - Programming language

##  Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Manish12-verma/Password-Generator.git
cd Password-Generator
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

##  Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

##  Usage

1. **Set Password Length**: Use the slider to choose password length (4-20 characters)
2. **Select Character Types**: Check boxes for the types of characters to include:
   - Include Uppercase
   - Include Lowercase
   - Include Numbers
   - Include Symbols
3. **Generate Password**: Click "Generate Password" button
4. **Check Strength**: View the real-time password strength assessment
5. **Copy Password**: Click "Copy" to copy the password to your clipboard

##  Password Strength Levels

- **Very Weak**: Less than 4 characters
- **Poor**: 4-7 characters
- **Medium**: 8-11 characters
- **Strong**: 12-15 characters
- **Very Strong**: 16+ characters

##  Project Structure

```
src/
├── components/
│   └── StrengthChecker.jsx    # Password strength assessment component
├── hooks/
│   └── usePasswordGenerator.jsx # Custom hook for password generation logic
├── assets/
│   └── react.svg
├── App.jsx                    # Main application component
├── main.jsx                   # Application entry point
└── index.css                  # Global styles
```

##  Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


---