import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

test("social preview is a complete 1200 × 630 PNG", async () => {
  const png = await readFile(new URL("../public/og-ioa.png", import.meta.url));
  assert.equal(png.subarray(0, 8).toString("hex"), "89504e470d0a1a0a");
  assert.equal(png.subarray(12, 16).toString(), "IHDR");
  assert.equal(png.readUInt32BE(16), 1200);
  assert.equal(png.readUInt32BE(20), 630);
  assert.equal(png.subarray(-8, -4).toString(), "IEND");
});

test("local font includes its license and a complete WOFF2 file", async () => {
  const font = await readFile(new URL("../public/fonts/geist-latin.woff2", import.meta.url));
  assert.equal(font.subarray(0, 4).toString(), "wOF2");
  assert.equal(font.readUInt32BE(8), font.length);
  const license = await readFile(new URL("../public/fonts/OFL.txt", import.meta.url), "utf8");
  assert.match(license, /SIL OPEN FONT LICENSE Version 1.1/);
  assert.match(license, /The Geist Project Authors/);
});
