import localFont from "next/font/local";

export const clashGrotesk = localFont({
	src: "./fonts/clash-grotesk/ClashGroteskSemibold.woff2",
	display: "swap",
	variable: "--font-clash-grotesk",
});

export const inter = localFont({
	src: [
		{
			path: "./fonts/inter/Inter-Regular.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "./fonts/inter/Inter-Medium.woff2",
			weight: "500",
			style: "normal",
		},
		{
			path: "./fonts/inter/Inter-SemiBold.woff2",
			weight: "600",
			style: "normal",
		},
		{
			path: "./fonts/inter/Inter-Bold.woff2",
			weight: "700",
			style: "normal",
		},
	],
	display: "swap",
	variable: "--font-inter",
});
export const DMSans = localFont({
	src: [
		{
			path: "./fonts/dm-sans/DMSans-Regular.ttf",
			weight: "400",
			style: "normal",
		},
		{
			path: "./fonts/dm-sans/DMSans-Medium.ttf",
			weight: "500",
			style: "normal",
		},
		{
			path: "./fonts/dm-sans/DMSans-SemiBold.ttf",
			weight: "600",
			style: "normal",
		},
		{
			path: "./fonts/dm-sans/DMSans-Bold.ttf",
			weight: "700",
			style: "normal",
		},
	],
	display: "swap",
	variable: "--font-DM-Sans",
});
