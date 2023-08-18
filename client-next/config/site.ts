export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Delivery Box",
	description: "Vive la experiencia de realizar el envio de tus paquetes de forma agíl!.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "Docs",
      href: "/docs",
    }, 
	  {
		label: 'About',
		href: '/about'
	  },
	  {
		label: 'User',
		href: '/user'
	  },
	  {
		label: 'Client',
		href: '/client'
	  },
	  {
		label: 'Piloto',
		href: '/piloto'
	  },
	  {
		label: 'Admin',
		href: '/admin'
	  },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    }
	],
	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Team",
			href: "/team",
		},
		{
			label: "Calendar",
			href: "/calendar",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Help & Feedback",
			href: "/help-feedback",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		github: "https://github.com/johpaz",
		twitter: "https://twitter.com/johpaz",
		docs: "https://nextui.org",
		discord: "https://discord.gg/johpaz",
    sponsor: "https://patreon.com/jrgarciadev"
	},
};
