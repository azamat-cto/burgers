import localFont from "next/font/local";

export const fontAclonica = localFont({
    src: [
        {
            path: "../assets/fonts/Aclonica/400/Aclonica-Regular.ttf",
            weight: "400",
            style: "normal",
        },
    ],
    variable: "--font-aclonica",
    display: "swap",
});

export const fontMontserrat = localFont({
    src: [
        {
            path: "../assets/fonts/Montserrat/100/Montserrat-Thin.ttf",
            weight: "100",
            style: "normal",
        },
        {
            path: "../assets/fonts/Montserrat/200/Montserrat-ExtraLight.ttf",
            weight: "200",
            style: "normal",
        },
        {
            path: "../assets/fonts/Montserrat/300/Montserrat-Light.ttf",
            weight: "300",
            style: "normal",
        },
        {
            path: "../assets/fonts/Montserrat/400/Montserrat-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../assets/fonts/Montserrat/500/Montserrat-Medium.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../assets/fonts/Montserrat/600/Montserrat-SemiBold.ttf",
            weight: "600",
            style: "normal",
        },
        {
            path: "../assets/fonts/Montserrat/700/Montserrat-Bold.ttf",
            weight: "700",
            style: "normal",
        },
        {
            path: "../assets/fonts/Montserrat/800/Montserrat-ExtraBold.ttf",
            weight: "800",
            style: "normal",
        },
        {
            path: "../assets/fonts/Montserrat/900/Montserrat-Black.ttf",
            weight: "900",
            style: "normal",
        },
    ],
    variable: "--font-montserrat",
    display: "swap",
});
