import { $ } from "zx";

const msg = "Hello World";
await $`echo ${msg}`;

await $`docker run --name mysql -e MYSQL_ROOT_PASSWORD=randompassword --rm -dp 3306:3306 mysql`;
