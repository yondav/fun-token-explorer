<!-- Top -->
<a id="readme-top"></a>

<!-- Header -->
<div align="center">
	<h1 align="center">
		Token Explorer
		<span style="font-size: 12px; color: grey;">
			v1.0.0
		</span>
	</h1>
	<p align="center">
    A fast, lightweight crypto token comparison tool — calculate, swap, and explore token values instantly across chains.
  </p>
</div>
<br />

[deploy]("https://fun-token-explorer.vercel.app/explorer")

<!-- Table of Contents -->

<details>
    <summary style="font-size: 18px;">Table of Contents</summary>
    <ul>
      <li><a href="#objective">Objective</a></li>
      <li>
        <a href="#get-started">Get Started</a>
        <ul>
          <li><a href="#clone-repo">Clone Repo</a></li>
          <li><a href="#install-dependencies">Install Dependencies</a></li>
          <li><a href="#configure-environment">Configure Environment</a></li>
          <li><a href="#run-locally">Run Locally</a></li>
        </ul>
      </li>
      <li><a href="#features">Features</a></li>
      <li><a href="#notable-libraries">Notable Libraries</a></li>
      <li><a href="#assumptions">Assumptions</a></li>
    </ul>
  </details>

<!-- Objective -->

## Objective
As per the stated objective in the given assignment, the goal was to build a well constructed `react` application that interfaces with the provided `@funkit/api-base` to deliver a simple token exchange calculator.


<p align="right">
	[
	<a href="#readme-top">
	back to top</a>
	]
</p>

<!-- Get Started -->

## Get Started

### Clone Repo
```bash
git clone git@github.com:yondav/fun-token-explorer.git
```

### Install Dependencies
```bash
npm install
```

### Configure Environment
Create a `.env` file at the root:
```bash
VITE_API_KEY=your_funkit_api_key_here
```

### Run Locally
```bash
npm run dev
```

App will be available at `http://localhost:5173`



<p align="right">
	[
	<a href="#readme-top">
	back to top</a>
	]
</p>

<!-- Features -->

## Features

### Live USD conversions between any two supported tokens
Users are able to calculate conversions between any two [supported tokens](#supported-tokens) based on either the value of either currency or USD.

---

### Real-time price updates with optional auto-refresh toggle
By default, the application is set to fetch token data every time the source or target changes. Users additionally have an option to opt for real time updates in their Settings which will allow the application to fetch token data on a 30 second interval. The user's preference will be persisted via `localStorage`.

---

### Instant swap of source and target tokens
We allow for the user to quickly swap the source and target tokens with a single button (inspired by uniswap).

---

### Adaptive input precision based on token decimals
The intention here is to offer a wide range of flexibility in the user's experience by allowing the them to select whether they want to measure their calculation by way of token value or its value in USD. Additionally, we are allowing the user to modify the values of both the source and target to make for the most flexible exchange calculation possible.

---

In doing so, there is a need to handle the controlled inputs to support a wide variety of decimal precisions. While I feel pretty confident in the handling of these inputs, the parsing logic is doing a lot of heavy lifting and would certainly demand improvement in a production ready application.

---

### Fully responsive and mobile-friendly
The ui has been developed with responsive design in mind with responsive container and font sizes and layout adaptivity. A good example of this would be the layout change while the side drawer is active.

#### Mobile
On small screens, the side drawer will overlay the entire screen.

#### Tablet
On medium sized screens, the side drawer will overlay a portion of the screen and include a backdrop that users can click to close the drawer.

#### Desktop
On large screens, the side drawer will render side by side with the rest of the layout, adjusting the size and position of the primary layout to preserve interactions with the rest of the ui.

#### Large Desktop
On extra large screens, the side drawer will render side by side with the rest of the layout, without adjusting the position of the rest of the layout.

---

### Graceful error handling and skeleton loading states
The application offers thorough representation of error and loading states.

#### Global Errors
The application is wrapped in a custom error boundary that offers the user an opportunity to reload the page if an error occurs at the top level and is not handled directly.

#### Focused Errors
The application also handles errors directly, rendering a toast to notify the user.

#### Unknown Routes
There is a custom `404` route that will render on all unknown routes.

#### Loading State
The application represents loading state with skeletons.

---

### Accessible labels and keyboard-friendly interactions
While this can always be improved, I've made a concerted effort to address accessibility within the application.

---

### Custom light/dark/system theming with persistent local storage
By default, the application's theme is set by the browser preference but the user is able to toggle the theme between the system preference, light or dark themes and their preference is then persisted through `localStorage`.

<p align="right">
	[
	<a href="#readme-top">
	back to top</a>
	]
</p>

<!-- Notable Libraries -->

## Notable Libraries

|         Library         |                                  Reason for Choice                                  |
|-------------------------|:-----------------------------------------------------------------------------------:|
| TailwindCSS 4 + DaisyUI |   Lightning-fast, consistent, theme-able design with minimal custom CSS overhead.   |
|      Framer Motion      |              Smooth, hardware-accelerated animations with simple API.              |
|     React Hot Toast     |                 Lightweight and flexible toast notification system.                 |
|   React Error Boundary   | Industry-standard way to capture and gracefully recover from React render errors. |
|     @funkit/api-base     |             Internal SDK provided for token metadata and live pricing.             |
|           Viem           |     TypeScript Interface for Ethereum, leveraged to assist in parsing strategy     |

<p align="right">
	[
	<a href="#readme-top">
	back to top</a>
	]
</p>

<!-- Assumptions -->

## Assumptions

- Only a curated list of tokens are supported initially (USDC, USDT, ETH, WBTC, DAI, MATIC, ARB, OP) — easily expandable via constants.

- It is assumed users will have a basic familiarity with cryptocurrency and USD value representation.

- Price data may be subject to API rate limits or delays in rare cases.

- No blockchain transactions are performed — purely a read-only explorer.

<p align="right">
	[
	<a href="#readme-top">
	back to top</a>
	]
</p>

Thanks for reviewing!

I look forward to your feedback.
