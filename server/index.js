const { connectToDatabase } = require('./config/db');

const http = require('http');
const router = require('./router');
const server = http.createServer(async (req, res) => {
    router.run(req, res);
});

const PORT = 3000;
server.listen(PORT, async () => {
    const User = await connectToDatabase(); 
    const newUser = new User({
        username: 'Thuy',
        email: 'k3U1Z@example.com',
        password: '123456'
    })

    newUser.save()
        .then(() => {
            console.log('Successfully saved new user!');
        })
        .catch((err) => {
            console.error('Unable to save new user.', err);
        });
    console.log(`Server running at http://127.0.0.1:${PORT}`);
});
