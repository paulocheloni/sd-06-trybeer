const mailer = require('./mailer.services');

const welcomeEmail = (email, name) => {
  mailer.sendMail({
    text: "Boas vindas!",
    subject: "Bem vindo(a) ao OpenBeer!",
    from: "OpenBeer <comercial.openbeer@gmail.com",
    to: [email],
    html: `
      <html>
      <body>
        Olá, <strong>${name}</strong>
        </br>
        Seja bem vindo(a) ao OpenBeer!
      </body>
      </html> 
    `,
  });
};

module.exports = {
  welcomeEmail,
};
