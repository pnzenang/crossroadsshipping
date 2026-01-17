type NavLink = {
  href: string;
  label: string;
};

export const links: NavLink[] = [
  { href: '/', label: 'home' },
  { href: '/about', label: 'about' },
  { href: '/services', label: 'services' },
  { href: '/how-it-works', label: 'how it works ' },
  // { href: '/reviews', label: 'reviews' },
  { href: '/shippingPackage', label: 'Shipping Package' },
  { href: '/orders', label: 'All shipments' },
  { href: '/admin/sales', label: 'dashboard' },
];

export const adminLinks: NavLink[] = [
  { href: '/admin/sales', label: 'sales' },
  { href: '/admin/products', label: 'my products' },
  { href: '/admin/products/create', label: 'create product' },
];
