import { logger } from "./utils/logger";
import web from "./middleware/web.middleware";
import config from "./config/environtment";

const port: number = parseInt(config.PORT as string);
web.listen(port, () => {
  logger.warn(`Server berjaln di http://localhost:${port}`);
});
