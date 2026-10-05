// Edit store details here. Everything on the site reads from this file.
export const site = {
  name: 'Young Vam Gadgets',
  short: 'YVG',
  tagline: 'Your surest gadgets store',
  shop: 'Shop 14',
  // TODO: replace with the full street address and city
  address: 'Shop 14 — add street and city',
  // TODO: replace with the real number, e.g. '0701 234 5678'
  phone: '0701 XXX XXXX',
  // TODO: WhatsApp number in international format, digits only, e.g. '2347012345678'
  whatsapp: '234XXXXXXXXXX',
  tiktok: 'https://www.tiktok.com/@youngvam.gadgets',
  tiktokHandle: '@youngvam.gadgets',
  // TODO: confirm opening hours
  hours: 'Mon – Sat, 9:00am – 7:00pm',
};

export function waLink(message) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
