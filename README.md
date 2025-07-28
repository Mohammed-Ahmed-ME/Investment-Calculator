# 💰 Investment Calculator

A modern, responsive web application built with Angular 20 and styled with Tailwind CSS that helps you calculate and visualize your investment returns over time.

## ✨ Features

- **Interactive Investment Calculator**: Calculate compound interest on your investments
- **Real-time Results**: See detailed year-by-year breakdown of your investment growth
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional interface built with Tailwind CSS
- **Detailed Analysis**: View interest earned, total invested, and end-of-year values

## 🖥️ Demo

The calculator allows you to input:
- Initial Investment amount
- Annual Investment contributions
- Expected Return Rate (percentage)
- Investment Duration (years)

And provides a comprehensive table showing:
- Year-by-year investment value
- Interest earned each year
- Total interest accumulated
- Total amount invested

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Angular CLI

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Mohammed-Ahmed-ME/Investment-Calculator.git
   cd Investment-Calculator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   ng serve
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200/`

## 🛠️ Built With

- **[Angular 20](https://angular.io/)** - Modern web framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Angular Standalone Components](https://angular.io/guide/standalone-components)** - Modern Angular architecture

## 📁 Project Structure

```
src/
├── app/
│   ├── Components/
│   │   ├── header/                 # App header component
│   │   ├── user-input/             # Investment input form
│   │   └── investment-results/     # Results table display
│   ├── app.component.ts            # Main app component
│   └── app.component.html          # App template
├── assets/                         # Static assets
├── styles.css                      # Global styles
└── index.html                      # Main HTML file
```

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Starts development server on http://localhost:4200 |
| `npm run build` | Builds the app for production |
| `npm test` | Runs unit tests |
| `npm run watch` | Builds in watch mode for development |

## 📊 How It Works

The investment calculator uses compound interest formula to calculate:

1. **Annual Interest**: `Investment Value × (Expected Return / 100)`
2. **New Investment Value**: `Previous Value + Interest + Annual Contribution`
3. **Total Interest**: `Current Value - Total Invested`

## 🎨 Key Components

### UserInputComponent
- Handles investment parameter inputs
- Form validation and data emission
- Responsive form layout

### InvestmentResultsComponent
- Displays calculation results in a table format
- Currency formatting for monetary values
- Responsive table design

### HeaderComponent
- Application branding and navigation

## 🌟 Features in Detail

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Real-time Calculations**: Instant results as you input data
- **Professional Styling**: Modern UI with smooth animations
- **Accessibility**: Semantic HTML and proper form labels
- **Type Safety**: Full TypeScript implementation

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🐛 Issues & Support

If you encounter any issues or have questions:

1. Check existing [Issues](https://github.com/yourusername/investment-calculator/issues)
2. Create a new issue with detailed information
3. Include steps to reproduce any bugs

## 🔮 Future Enhancements

- [ ] Add investment comparison feature
- [ ] Include inflation adjustment calculations
- [ ] Export results to PDF/Excel
- [ ] Add chart visualization
- [ ] Save/load investment scenarios
- [ ] Multiple currency support

## 👨‍💻 Author

**Mohammed ME**
- GitHub: [@yourusername](https://github.com/yourusername)

---

⭐ **Star this repository if you found it helpful!**
