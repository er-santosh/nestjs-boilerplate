import { AppModule } from "./app.module";
import { NestFactory } from "@nestjs/core";

async function startApp() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000, () => {
    console.log("listening on port 3000");
  });
}
startApp();
