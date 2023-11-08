-- CreateTable
CREATE TABLE "categorys" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "preco" REAL NOT NULL,
    "userId" TEXT NOT NULL,
    "categoyId" TEXT NOT NULL,
    CONSTRAINT "products_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "products_categoyId_fkey" FOREIGN KEY ("categoyId") REFERENCES "categorys" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
