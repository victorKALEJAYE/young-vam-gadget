export const services = [
  { icon: 'phone', title: 'Phone sales', text: 'New and pre-owned iPhones, Samsung and other Android phones, checked before they leave the counter.' },
  { icon: 'laptop', title: 'Laptop sales', text: 'MacBooks and Windows laptops for school, office and creative work.' },
  { icon: 'wrench', title: 'Phone repairs', text: 'Screens, batteries, charging ports, speakers, cameras and water damage.' },
  { icon: 'code', title: 'Laptop repairs', text: 'Keyboards, screens, hinges, overheating and machines that will not boot.' },
  { icon: 'swap', title: 'Buy, swap and sell', text: 'Trade in your old phone toward a better one, or sell it to us for cash.' },
  { icon: 'download', title: 'Software installation', text: 'Windows, Office, apps, updates and moving your data to the new device.' },
];

// Product lines shown in the showcase. Prices change often, so buyers ask on WhatsApp.
export const categories = ['All', 'Phones', 'Laptops', 'Audio', 'Wearables', 'Power'];

export const products = [
  { name: 'iPhone', line: 'Pro, Pro Max and standard models', cat: 'Phones', shape: 'phone', hue: '#2f5bff' },
  { name: 'Samsung Galaxy', line: 'S series, A series and foldables', cat: 'Phones', shape: 'phone', hue: '#6d8bff' },
  { name: 'Android phones', line: 'Tecno, Infinix, Redmi, Pixel and more', cat: 'Phones', shape: 'phone', hue: '#8fb0ff' },
  { name: 'MacBook', line: 'Air and Pro', cat: 'Laptops', shape: 'laptop', hue: '#c9d4ff' },
  { name: 'Windows laptops', line: 'HP, Dell, Lenovo and more', cat: 'Laptops', shape: 'laptop', hue: '#2f5bff' },
  { name: 'AirPods & earbuds', line: 'Wireless earbuds for every budget', cat: 'Audio', shape: 'buds', hue: '#eef2ff' },
  { name: 'Headphones', line: 'Over-ear and on-ear', cat: 'Audio', shape: 'headphones', hue: '#ffc94d' },
  { name: 'Smart watches', line: 'Apple Watch and fitness bands', cat: 'Wearables', shape: 'watch', hue: '#ff8f6b' },
  { name: 'Power banks', line: 'Fast-charge power banks', cat: 'Power', shape: 'bank', hue: '#6d8bff' },
  { name: 'Chargers & cables', line: 'Original and fast chargers, all ports', cat: 'Power', shape: 'bank', hue: '#ffc94d' },
];

export const swapSteps = [
  { title: 'Bring your device', text: 'Come to the shop with your phone or laptop, and its charger if you have it.' },
  { title: 'We check and value it', text: 'We test the screen, battery, cameras, Face ID and body, then give you a price on the spot.' },
  { title: 'Top up and upgrade', text: 'Pay the balance for the gadget you want. We move your contacts, photos and WhatsApp before you go.' },
];

export const promises = [
  { k: 'Test before you pay', v: 'Check every function at the counter before money changes hands.' },
  { k: 'Data transfer', v: 'We move your contacts, photos and chats to the new device.' },
  { k: 'Fair swap value', v: 'Your old device counts toward your upgrade.' },
  { k: 'Accessories in one place', v: 'Cases, screen guards, chargers and earbuds on the same shelf.' },
];

export const faqs = [
  { q: 'Do you accept swaps for any phone?', a: 'Bring it in and we will check it. Value depends on the model, storage, battery health and condition.' },
  { q: 'Can I check a phone before I pay?', a: 'Yes. Test calls, cameras, Face ID or fingerprint, charging and the screen at the counter.' },
  { q: 'How long does a screen repair take?', a: 'Many screen and battery jobs are done the same day, depending on parts. Send a message with your model to confirm.' },
  { q: 'Can you install Windows and Office on my laptop?', a: 'Yes. We also update drivers and move your files from your old machine.' },
  { q: 'How do I know if a model is in stock?', a: 'Stock moves fast. Send the model, colour and storage size on WhatsApp and we will confirm before you come.' },
];

export const brands = ['Apple', 'Samsung', 'Tecno', 'Infinix', 'Redmi', 'Google Pixel', 'HP', 'Dell', 'Lenovo', 'Oraimo', 'JBL', 'Anker'];
