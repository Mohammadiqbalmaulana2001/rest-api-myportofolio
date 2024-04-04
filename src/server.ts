import 'dotenv/config';
import { logger } from "./utils/logger";
import web from "./middleware/web.middleware";

const port:number = parseInt(process.env.PORT as string)
web.listen(port, () =>{
  logger.warn(`Server berjaln di http://localhost:${port}`)
})