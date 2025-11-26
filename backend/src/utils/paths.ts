import path from "path";

export const paths = {
  root: process.cwd(),
  public: path.join(process.cwd(), "public"),
  uploads: path.join(process.cwd(), "public", "uploads"),
  assets: path.join(process.cwd(), "public", "assets"),
};
