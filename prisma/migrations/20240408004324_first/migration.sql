-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Objetive" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "progress" INTEGER NOT NULL,
    "image" TEXT NOT NULL DEFAULT 'https://res.cloudinary.com/ivannavas/image/upload/v1708230081/GestorDeAhorros/Web/Rectangle_10_rgornj.svg',
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Objetive_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
