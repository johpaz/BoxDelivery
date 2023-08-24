export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Delevery Box",
	description: "Entregue sus paquetes con seguridad y de forma agil.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "Client",
      href: "/client",
    },
    {
      label: "Piloto",
      href: "/piloto",
    },
    {
      label: "User",
      href: "/user",
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
