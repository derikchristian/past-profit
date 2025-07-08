# About

This project is a simple tool that calculates how much a past investment would be worth today, using real historical data and adjusting for inflation.
It's a small part of a financial calculator I plan to do in the future, wich will more advanced features and options. 
This app is part of my learning journey on backend and frontend development, and its main goal was to create a frontend app that consumes an API. 

---

## ✨ Features

- Calculate the return of available investments
- Adjust results for USA inflation (CPI)

---

## 📊 Supported Investments

- Bitcoin (BTC)
- Ethereum (ETH)
- Gold (XAU)

---

## Tech Stack

- React
- TypeScript
- Vite
- TailwindCSS
- Twelve Data API for asset prices
- World Bank API for inflation data

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add API keys

Create a `.env` file in the root of the project:

```env
VITE_API_TWELVE_KEY=your_twelve_data_api_key
```

### 4. Start the development server

```bash
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173).

---

## Note

- The inflation API updates at the end of the year and may not reflect the exact value for present inflation, but is close enough as this is not meant to be a finantial tool.

---

## Near future improvements

- [ ] Add a loading animation
- [ ] Improve error handling
- [ ] Improved responsiveness
- [ ] Add more investment options
- [ ] Improve inflation calculation

---


## License

This project is licensed under the MIT License.

---

## Limitations

This project was originally planned to have more investment options and advanced features. However, financial APIs often come with significant limitations, such as low request limits, restricted to just certain assets or just a class of assets, no access to real time data, and since my main goal was to build an application that utilizes an API, I decided to simplify the scope. While the app's functionality is relatively basic, it does demonstrates API integration, data processing, and responsive UI, which were my core objectives.