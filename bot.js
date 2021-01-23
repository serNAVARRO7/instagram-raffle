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
    let ig = await login();

    console.log("\n -- Get the post -- \n".bold.underline);
    const ans = await askQuestion("Please, enter post URL: ");
    let posts = await getUserRecentPosts(ig, 'ser_navarro');
    console.log(posts[0]);
    let likers = await getRecentPostLikers(ig, posts[0]);

    // If ONLINE_MODE is enabled, this example will run until we send an exit signal
    process.exit();
    
})();