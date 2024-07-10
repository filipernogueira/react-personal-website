# Portfolio

This repo contains my personal website, built using React with TypeScript and Vite. You can use it as a template for your own portfolio website. Follow the setup steps below to customize it with your information.

You can check my website [Here](https://filipernogueira.github.io/react-personal-website/).

## Setup

### Information Replacement

-   To set up this project as your personal website, start by replacing all the information in the file `/src/information.ts` with your own details;
-   After that, upload your picture to `/src/assets/profilePicture.jpg`.

### Contact Section

To enable the contact section, and the automatic email feature, setup an account on [EmailJS](https://www.emailjs.com/), create a service and a template, and collect their IDs. Then, create a `.env` file in the root directory with the following content:

```
VITE_SERVICE_ID=yourServiceId
VITE_TEMPLATE_ID=yourTemplateId
VITE_USER_ID=yourUserId
```

This setup allows you to receive emails through your personal website.

## Development

To start the development server:

```
npm install
npm run dev
```

## Build

To build the project for production:

```
npm run build
```

## Deploy

To deploy the project, use a hosting service of your preference.

## Contributing

If you'd like to contribute to this project, feel free to do it! Pull requests are warmly welcome.
