import client from "./client.js";

// do whatever you want
client.on("a", msg => {
    console.log(`${msg.p.name}: ${msg.a}`);

    if (msg.a == "cheese" || msg.a == "fuzzy pickles") {
        client.sendArray([
            {
                m: "a",
                message: "📸 Your picture was taken!"
            }
        ]);
    }
});

client.on("hi", msg => {
    console.log("Pictures taken instantaneously!");
});
