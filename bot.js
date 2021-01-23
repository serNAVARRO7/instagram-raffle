const tfi = require('tools-for-instagram');
const readline = require("readline");

function askQuestion(query) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise(resolve => rl.question(query, ans => {
        rl.close();
        resolve(ans);
    }))
}

(async () => {
    console.log("\n -- LOGIN --\n".bold.underline);
    const ig = await login();
    console.log("\n -- Get the post -- \n".bold.underline);
    const answer = await askQuestion("If your last post is post 0, the raffle post is...? ");
    const posts = await getUserRecentPosts(ig, ig.loggedInUser.username);
    const likers = await getRecentPostLikers(ig, posts[answer]);
    console.log(likers.length);
    if (likers.length > 1000) {
        console.log('Sorry, too many participants');
        process.exit();
    }
    console.log("\n -- Generating the winner... -- \n".bold.underline);
    const index = Math.floor(Math.random() * (likers.length + 1));
    console.log("\n -- The winner is... ".bold.underline + likers[index].username + " congratulations!!\n".bold.underline);
    // If ONLINE_MODE is enabled, this example will run until we send an exit signal
    process.exit(); 
})();