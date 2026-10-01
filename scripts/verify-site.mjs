import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { once } from "node:events";
import { mkdir, writeFile } from "node:fs/promises";
import { setTimeout as delay } from "node:timers/promises";
import { chromium } from "playwright";

const baseURL = "http://127.0.0.1:3100";
const evidenceDirectory = "work/browser-checks";
await mkdir(evidenceDirectory, { recursive: true });
const server = spawn(process.execPath, ["node_modules/next/dist/bin/next", "start", "--hostname", "127.0.0.1", "--port", "3100"], {
  stdio: ["ignore", "pipe", "pipe"],
  windowsHide: true,
});
let serverLog = "";
server.stdout.on("data", (data) => { serverLog += data; });
server.stderr.on("data", (data) => { serverLog += data; });
server.on("error", (error) => { serverLog += error.stack; });
let browser;
let context;
let page;

try {
  let ready = false;
  for (let attempt = 0; attempt < 120; attempt++) {
    if (server.exitCode !== null) throw new Error(`Preview server exited: ${serverLog}`);
    try {
      const response = await fetch(baseURL);
      if (response.ok) { ready = true; break; }
    } catch { /* The production server is still starting. */ }
    await delay(250);
  }
  assert.ok(ready, `Preview server did not become ready: ${serverLog}`);
  browser = await chromium.launch();
  context = await browser.newContext({ permissions: ["clipboard-read", "clipboard-write"] });
  page = await context.newPage();
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => { if (message.type() === "error") errors.push(message.text()); });
  const response = await page.goto(baseURL);
  assert.equal(response.status(), 200);
  await page.getByRole("heading", { level: 1 }).waitFor();
  assert.equal(await page.locator("h1").count(), 1);
  assert.equal(await page.getByText("Address awaiting final confirmation.").count(), 0);
  assert.equal(await page.locator("#contact form").count(), 0);
  const brokenAnchors = await page.locator('a[href^="#"]').evaluateAll((anchors) =>
    anchors.filter((anchor) => !document.getElementById(anchor.getAttribute("href").slice(1))).map((anchor) => anchor.getAttribute("href")));
  assert.deepEqual(brokenAnchors, []);

  for (const width of [1440, 820, 768, 390, 320]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.getByRole("link", { name: "Integrated Operations Advisory home", exact: true }).click();
    if (width <= 800) await page.locator(".mobile-nav summary").click();
    await page.getByRole("link", { name: "Systems", exact: true }).click();
    await page.waitForFunction(() => location.hash === "#enterprise-systems" && Math.abs(document.querySelector("#enterprise-systems").getBoundingClientRect().top - parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)) < 3);
    assert.equal(await page.locator("#enterprise-systems .system-card").count(), 4);
    assert.ok(await page.getByRole("heading", { name: "Delivery with discretion.", exact: true }).isVisible());
    assert.equal(await page.locator(".published-studies").count(), 0);
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `Horizontal overflow at ${width}px`);
    await page.locator("#enterprise-systems").screenshot({ path: `${evidenceDirectory}/systems-${width}.png` });
    if (width <= 800) {
      await page.locator(".mobile-nav summary").click();
      assert.ok(await page.getByRole("link", { name: "Start here", exact: true }).isVisible());
      await page.getByRole("link", { name: "Start here", exact: true }).click();
      assert.equal(await page.locator(".mobile-nav").getAttribute("open"), null);
    } else {
      await page.getByRole("link", { name: "Start here", exact: true }).click();
    }
    await page.waitForFunction(() => location.hash === "#first-engagement" && Math.abs(document.querySelector("#first-engagement").getBoundingClientRect().top - parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)) < 3);
    assert.ok(await page.getByRole("heading", { name: "A practical decision package", exact: true }).isVisible());
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `Horizontal overflow at ${width}px`);
    await page.screenshot({ path: `${evidenceDirectory}/diagnostic-${width}.png` });
    if (width <= 800) {
      await page.locator(".mobile-nav summary").click();
      await page.keyboard.press("Escape");
      assert.equal(await page.locator(".mobile-nav").getAttribute("open"), null);
      assert.ok(await page.locator(".mobile-nav summary").evaluate((element) => element === document.activeElement));
    }
    await page.getByRole("link", { name: "Discuss a diagnostic", exact: true }).click();
    await page.waitForFunction(() => location.hash === "#contact" && Math.abs(document.querySelector("#contact").getBoundingClientRect().top - parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)) < 3);
    assert.ok(await page.getByRole("link", { name: "Email IOA", exact: true }).isVisible());
    await page.screenshot({ path: `${evidenceDirectory}/contact-${width}.png` });
    console.log(`Navigation and contact layout passed at ${width}px.`);
  }

  const emailURL = new URL(await page.getByRole("link", { name: "Email IOA", exact: true }).getAttribute("href"));
  assert.equal(emailURL.protocol, "mailto:");
  assert.equal(emailURL.pathname, "contact@ioacorporation.com");
  assert.equal(emailURL.searchParams.get("subject"), "Discuss an IOA engagement");
  await page.getByRole("button", { name: "Copy email address", exact: true }).click();
  await page.getByRole("status").filter({ hasText: "Email address copied" }).waitFor();
  assert.equal(await page.evaluate(() => navigator.clipboard.readText()), "contact@ioacorporation.com");
  await page.addInitScript(() => {
    Object.defineProperty(navigator, "clipboard", {
      value: { writeText: async () => { throw new DOMException("Clipboard unavailable", "NotAllowedError"); } },
      configurable: true,
    });
  });
  await page.reload();
  await page.getByRole("button", { name: "Copy email address", exact: true }).click();
  await page.getByRole("status").filter({ hasText: "Copy is unavailable" }).waitFor();
  assert.ok(await page.getByRole("link", { name: "Email IOA", exact: true }).isVisible());

  await page.getByRole("button", { name: "Pause Fig. 01 animation", exact: true }).click();
  assert.equal(await page.locator(".operating-model").getAttribute("data-paused"), "true");
  await page.getByRole("button", { name: "Resume Fig. 01 animation", exact: true }).click();
  assert.equal(await page.locator(".operating-model").getAttribute("data-paused"), "false");
  await page.emulateMedia({ reducedMotion: "reduce" });
  assert.equal(await page.getByRole("button", { name: "Pause Fig. 01 animation", exact: true }).isVisible(), false);
  assert.ok(await page.locator(".operating-model .figure-reduced-motion").isVisible());
  assert.equal(await page.locator(".model-layer").first().evaluate((element) => getComputedStyle(element).animationName), "none");

  const imageURL = await page.locator('meta[property="og:image"]').getAttribute("content");
  assert.equal(imageURL, "https://ioacorporation.com/og-ioa.png");
  assert.equal(await page.locator('meta[name="twitter:image"]').getAttribute("content"), imageURL);
  const image = await fetch(`${baseURL}/og-ioa.png`);
  assert.equal(image.status, 200);
  assert.match(image.headers.get("content-type"), /image\/png/);
  const png = Buffer.from(await image.arrayBuffer());
  assert.equal(png.readUInt32BE(16), 1200);
  assert.equal(png.readUInt32BE(20), 630);
  assert.equal(await page.locator('link[rel="canonical"]').getAttribute("href"), "https://ioacorporation.com");
  const fonts = await page.evaluate(() => [...document.querySelectorAll('link[rel="preload"][as="font"]')].map((link) => link.getAttribute("href")));
  assert.ok(fonts.length > 0);
  for (const fontURL of fonts) {
    assert.ok(fontURL.startsWith("/_next/static/"));
    assert.equal((await fetch(new URL(fontURL, baseURL))).status, 200);
  }
  assert.deepEqual(errors, []);
  console.log("Browser checks passed: desktop and mobile navigation, diagnostic, direct email, clipboard and fallback, motion controls, social image, canonical URL and local font.");
} catch (error) {
  if (page) await page.screenshot({ path: `${evidenceDirectory}/failure.png`, fullPage: true }).catch(() => {});
  throw error;
} finally {
  await writeFile(`${evidenceDirectory}/server.log`, serverLog);
  if (browser) await browser.close();
  if (server.exitCode === null && server.pid) {
    const closed = once(server, "close");
    server.kill();
    await closed;
  }
}
