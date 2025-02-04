import { createRoot } from "react-dom/client";

import './scss/preset.scss';
import './scss/colors.scss';
import './scss/typography.scss';

import App from "./components/app";

const container = document.getElementById("app")!;
const root = createRoot(container);
root.render(<App />);
