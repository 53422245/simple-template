import { expect, describe, vi, it, afterEach } from "vitest";
import { PrismaClient } from "@prisma/client";
import { db } from "./db.server";
vi.mock("@prisma/client", () => {
  const PrismaClient = vi.fn();
  PrismaClient.prototype.constructor = vi.fn();
  return { PrismaClient };
});

describe("db server", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });
  it("db must be PrismaClient", () => {
    expect(db).toBeInstanceOf(PrismaClient);
  });
});
