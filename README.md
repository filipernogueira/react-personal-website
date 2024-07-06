# Portofolio

This repo is my personal website, however you can use it as yours, for that follow the Setup steps below.

## Setup

To setup this project as your personal website, start by replacing all informations in the file information.ts with yours.

### Contact Section

To put this section to work, you have to setup an account in https://www.emailjs.com/, create a service, a template, and collect their ID's. After that create a .env file like this one:

```
VITE_SERVICE_ID=yourServiceId
VITE_TEMPLATE_ID=yourTemplateId
VITE_USER_ID=yourUserId
```

After that you're ready to receive emails throught your personal website!
