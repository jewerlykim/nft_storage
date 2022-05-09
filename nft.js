import { NFTStorage, File } from "nft.storage";
import fs from "fs";

const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweERCNTk0NGRmNUM0YTE0QTk0QzhEQTYyODJkMmE5MTI5RUIxYzcxMzkiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY1MjA4NjI0NTQxNywibmFtZSI6Ik5GVF9TdG9yYWdlIn0.WH_pYgbikHI2imDAHyUExZ6Jdj7h2rx_GWqZEfHB80g";
const client = new NFTStorage({ token:apiKey });

const metadata = await client.store({
    name: "Jewelry",
    description: "Jewelry is world's most valuable thing.",
    image: new File([fs.readFileSync("./bmcs_jewelry_profile.png")], "bmcs_jewelry_profile.png", { type: "image/png"}),
    attributes: [
        {
            trait_type: "skin",
            value: "blue",
        },
        {
            trait_type: "face",
            value: "smile",
        },
    ],
});

console.log(metadata.url)