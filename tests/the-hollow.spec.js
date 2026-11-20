import {test,expect} from '@playwright/test';import {PNG} from 'pngjs';
async function advanceToGame(page){for(let i=0;i<8;i++)await page.keyboard.press('Enter');}
test.beforeEach(async({page})=>{await page.route('**/api/polyhaven**',route=>route.fulfill({status:503,contentType:'application/json',body:'{"error":"test fallback"}'}));await page.route('**/CesiumMan.glb',route=>route.abort());});
test('main menu renders a live 3D scene, not a blank black page',async({page})=>{const errors=[];page.on('pageerror',e=>errors.push(e.message));await page.goto('/');await expect(page.locator('canvas')).toBeVisible();await expect(page.locator('#menu')).toBeVisible();await page.waitForTimeout(1800);const png=PNG.sync.read(await page.screenshot());const colors=new Set();let lit=0;for(let y=0;y<png.height;y+=8)for(let x=0;x<png.width;x+=8){const i=(y*png.width+x)*4,r=png.data[i],g=png.data[i+1],b=png.data[i+2];colors.add((r>>3)+','+(g>>3)+','+(b>>3));if(r+g+b>55)lit++;}expect(colors.size).toBeGreaterThan(45);expect(lit).toBeGreaterThan(100);expect(errors).toEqual([]);});
test('settings panel opens and closes from the main menu',async({page})=>{await page.goto('/');await page.locator('#settingsOpen').click();await expect(page.locator('#settings')).toHaveClass(/show/);await page.evaluate(()=>document.dispatchEvent(new KeyboardEvent('keydown',{key:'Escape',bubbles:true,cancelable:true})));await expect(page.locator('#settings')).not.toHaveClass(/show/);});
test('credits are a cinematic sequence with a moving 3D backdrop',async({page})=>{test.setTimeout(90000);const errors=[];page.on('pageerror',e=>errors.push(e.message));await page.goto('/?e2e=1');await page.getByRole('button',{name:'KREDIT'}).click();await expect(page.locator('#cinema')).toHaveClass(/show/);await expect(page.locator('#menu')).toHaveCSS('display','none');await expect(page.locator('.cinema-title')).toContainText('THE HOLLOW');await expect.poll(()=>page.evaluate(()=>window.__THE_HOLLOW_TEST__?.visualState().creditsVisible)).toBe(true);await expect(page.locator('.credits-roll-inner')).toBeVisible();await expect(page.locator('#creditsChapter')).toBeVisible();await expect(page.locator('canvas')).toBeVisible();await expect(page.locator('.cinema-title-wrap')).toBeVisible();await page.waitForTimeout(500);await page.getByRole('button',{name:'KEMBALI'}).click();await expect(page.locator('#cinema')).not.toHaveClass(/show/);expect(errors).toEqual([]);});
test('prologue can be skipped and ESC opens a working pause menu',async({page})=>{const errors=[];page.on('pageerror',e=>errors.push(e.message));await page.goto('/');await page.getByRole('button',{name:'MULAI PERMAINAN'}).click();await expect(page.locator('#prologue')).toHaveClass(/show/);await advanceToGame(page);await expect(page.locator('#hud')).toHaveClass(/on/);await page.evaluate(()=>document.dispatchEvent(new KeyboardEvent('keydown',{key:'Escape',bubbles:true,cancelable:true})));await expect(page.locator('#pause')).toHaveClass(/show/);await page.locator('#pauseSettings').click();await expect(page.locator('#pause')).toHaveClass(/show/);await expect(page.locator('#settings')).toHaveClass(/show/);await page.evaluate(()=>document.dispatchEvent(new KeyboardEvent('keydown',{key:'Escape',bubbles:true,cancelable:true})));await expect(page.locator('#settings')).not.toHaveClass(/show/);await expect(page.locator('#pause')).toHaveClass(/show/);await expect(page.locator('#settings')).not.toHaveClass(/show/);await page.locator('#resumeGame').click();await expect(page.locator('#pause')).not.toHaveClass(/show/);await page.evaluate(()=>document.dispatchEvent(new KeyboardEvent('keydown',{key:'Escape',bubbles:true,cancelable:true})));await expect(page.locator('#pause')).toHaveClass(/show/);await page.locator('#returnMenu').evaluate(el=>el.click());await expect(page.locator('#menu')).toBeVisible();expect(errors).toEqual([]);});

test('journal opens with J and checkpoint survives a reload',async({page})=>{test.setTimeout(90000);const errors=[];page.on('pageerror',e=>errors.push(e.message));await page.goto('/');await page.getByRole('button',{name:'MULAI PERMAINAN'}).click();await advanceToGame(page);await expect(page.locator('#hud')).toHaveClass(/on/);await page.evaluate(()=>document.dispatchEvent(new KeyboardEvent('keydown',{key:'j',bubbles:true,cancelable:true})));await expect(page.locator('#journal')).toHaveClass(/show/);await expect(page.locator('.journal-empty')).toContainText('Belum ada petunjuk');await page.locator('#saveNow').evaluate(el=>el.click());expect(await page.evaluate(()=>JSON.parse(localStorage.getItem('the-hollow-save-v1')||'null')?.version)).toBe(1);await page.reload();await page.waitForFunction(()=>window.__THE_HOLLOW_READY__===true);await page.waitForFunction(()=>Boolean(localStorage.getItem('the-hollow-save-v1')));await expect(page.locator('#continueGame')).toBeVisible();await page.locator('#continueGame').click();await expect(page.locator('#hud')).toHaveClass(/on/);expect(errors).toEqual([]);});

test('journal closes with ESC without opening the pause screen',async({page})=>{await page.goto('/');await page.getByRole('button',{name:'MULAI PERMAINAN'}).click();await advanceToGame(page);await page.evaluate(()=>document.dispatchEvent(new KeyboardEvent('keydown',{key:'j',bubbles:true,cancelable:true})));await expect(page.locator('#journal')).toHaveClass(/show/);await page.evaluate(()=>document.dispatchEvent(new KeyboardEvent('keydown',{key:'Escape',bubbles:true,cancelable:true})));await expect(page.locator('#journal')).not.toHaveClass(/show/);await expect(page.locator('#pause')).not.toHaveClass(/show/);});
test('survival HUD exposes health and flashlight resources with usable-item controls',async({page})=>{test.setTimeout(60000);const errors=[];page.on('pageerror',e=>errors.push(e.message));await page.goto('/?e2e=1');await page.getByRole('button',{name:'MULAI PERMAINAN'}).click();await advanceToGame(page);await expect(page.locator('#vitals')).toBeVisible();await expect(page.locator('#healthValue')).toHaveText('100');await expect(page.locator('#batteryValue')).toHaveText('100');await expect(page.locator('#staminaValue')).toHaveText('100');await expect(page.locator('#staminaFill')).toHaveCSS('width',/./);await expect(page.locator('#inventory .slot')).toHaveCount(5);await expect(page.locator('#stanceLabel')).toHaveText('BERDIRI');expect((await page.evaluate(()=>window.__THE_HOLLOW_TEST__.snapshot())).state).toBe('game');await page.keyboard.press('f');await expect(page.locator('#toast')).toContainText('CARI SENTER TERLEBIH DAHULU');await page.keyboard.press('r');await expect(page.locator('#toast')).toContainText('PILIH ITEM TERLEBIH DAHULU');await page.keyboard.down('c');await expect(page.locator('#stanceLabel')).toHaveText('MERUNDUK');await page.evaluate(()=>window.dispatchEvent(new Event('blur')));await expect(page.locator('#stanceLabel')).toHaveText('BERDIRI');await page.keyboard.up('c');await expect(page.locator('#stanceLabel')).toHaveText('BERDIRI');expect(errors).toEqual([]);});
test('sprinting consumes stamina and stamina recovers after resting',async({page})=>{test.setTimeout(60000);const errors=[];page.on('pageerror',e=>errors.push(e.message));await page.goto('/?e2e=1');await page.getByRole('button',{name:'MULAI PERMAINAN'}).click();await advanceToGame(page);await expect(page.locator('#staminaValue')).toHaveText('100');await page.keyboard.down('w');await page.keyboard.down('Shift');await page.waitForFunction(()=>Number(document.querySelector('#staminaValue')?.textContent)<100,{timeout:12000});const active=await page.evaluate(()=>window.__THE_HOLLOW_TEST__.snapshot());await page.keyboard.up('Shift');await page.keyboard.up('w');await page.evaluate(()=>window.dispatchEvent(new Event('blur')));const released=await page.evaluate(()=>window.__THE_HOLLOW_TEST__.snapshot());expect(active.state).toBe('game');expect(active.keys.w).toBe(true);expect(active.keys.shift).toBe(true);expect(active.stamina).toBeLessThan(100);expect(released.state).toBe('game');expect(released.keys.w).toBeFalsy();expect(released.keys.shift).toBeFalsy();await expect.poll(async()=>page.evaluate(()=>window.__THE_HOLLOW_TEST__.snapshot().stamina),{timeout:12000,message:JSON.stringify(released)}).toBeGreaterThan(released.stamina+0.1);const recovered=await page.evaluate(()=>window.__THE_HOLLOW_TEST__.snapshot().stamina);expect(recovered).toBeGreaterThan(released.stamina);expect(errors).toEqual([]);});

test('player collision follows the rendered mansion side walls',async({page})=>{
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('/?e2e=1');
 await page.getByRole('button',{name:'MULAI PERMAINAN'}).click();
 await advanceToGame(page);
 await page.waitForFunction(()=>Boolean(window.__THE_HOLLOW_TEST__));
 await page.evaluate(()=>window.__THE_HOLLOW_TEST__.setPlayerPosition(10,-1));
 await page.keyboard.down('d');
 await page.waitForTimeout(1800);
 await page.keyboard.up('d');
 const position=await page.evaluate(()=>window.__THE_HOLLOW_TEST__.playerPosition());
 expect(position.x).toBeGreaterThan(10);
 expect(position.x).toBeLessThanOrEqual(11.45);
 expect(position.z).toBeCloseTo(-1,1);
 expect(errors).toEqual([]);
});

test('player collision blocks the main hall bookshelf without trapping the player',async({page})=>{await page.goto('/?e2e=1');await page.getByRole('button',{name:'MULAI PERMAINAN'}).click();await advanceToGame(page);await page.waitForFunction(()=>Boolean(window.__THE_HOLLOW_TEST__));await page.evaluate(()=>window.__THE_HOLLOW_TEST__.setPlayerPosition(6.5,3.4));await page.keyboard.down('d');await page.waitForTimeout(1400);await page.keyboard.up('d');const position=await page.evaluate(()=>window.__THE_HOLLOW_TEST__.playerPosition());expect(position.x).toBeGreaterThan(6.5);expect(position.x).toBeLessThanOrEqual(7.5);expect(position.z).toBeCloseTo(3.4,1);});


test('closed-door collision matches the actual scaled door leaf instead of an oversized invisible wall',async({page})=>{
 await page.goto('/?e2e=1');
 await page.getByRole('button',{name:'MULAI PERMAINAN'}).click();
 await advanceToGame(page);
 await page.waitForFunction(()=>Boolean(window.__THE_HOLLOW_TEST__));
 const collision=await page.evaluate(()=>({
  leaf:window.__THE_HOLLOW_TEST__.isPositionBlocked(11.68,-2),
  nearEdge:window.__THE_HOLLOW_TEST__.isPositionBlocked(11.3,-2),
  outsideLeaf:window.__THE_HOLLOW_TEST__.isPositionBlocked(11.0,-2)
 }));
 expect(collision.leaf).toBe(true);
 expect(collision.nearEdge).toBe(true);
 expect(collision.outsideLeaf).toBe(false);
});

test('prologue renders a lit 3D story scene instead of a black screen',async({page})=>{
 await page.goto('/?e2e=1');
 await page.getByRole('button',{name:'MULAI PERMAINAN'}).click();
 await expect(page.locator('#prologue')).toHaveClass(/show/);
 await expect.poll(()=>page.evaluate(()=>window.__THE_HOLLOW_TEST__?.visualState().prologueVisible)).toBe(true);
 await page.waitForTimeout(900);
 const png=PNG.sync.read(await page.screenshot()),colors=new Set();let lit=0;
 for(let y=0;y<png.height;y+=7)for(let x=0;x<png.width;x+=7){const i=(y*png.width+x)*4,r=png.data[i],g=png.data[i+1],b=png.data[i+2];colors.add((r>>3)+','+(g>>3)+','+(b>>3));if(r+g+b>75)lit++;}
 expect(colors.size).toBeGreaterThan(40);
 expect(lit).toBeGreaterThan(180);
});
test('performance overlay can be enabled in settings and appears in game',async({page})=>{
 await page.goto('/');
 await page.getByRole('button',{name:'MULAI PERMAINAN'}).click();
 await advanceToGame(page);
 await page.keyboard.press('Escape');
 await page.locator('#pauseSettings').click();
 await page.locator('#showPerf').check();
 await page.keyboard.press('Escape');
 await page.locator('#resumeGame').click();
 await expect(page.locator('#perfOverlay')).toHaveClass(/show/);
 await expect(page.locator('#perfOverlay')).toContainText('FPS');
 await expect(page.locator('#perfOverlay')).toContainText('DRAW CALLS');
 await expect.poll(()=>page.evaluate(()=>localStorage.getItem('the-hollow-perf-v1'))).toBe('1');
});

test('prologue advances only on Enter and keeps each animated tableau isolated',async({page})=>{
 await page.goto('/?e2e=1');
 await page.getByRole('button',{name:'MULAI PERMAINAN'}).click();
 await expect(page.locator('#prologue-chapter')).toHaveText('THE LAST GOODBYE');
 await expect.poll(()=>page.evaluate(()=>window.__THE_HOLLOW_TEST__.visualState().visiblePrologueScenes)).toBe(1);
 await expect(page.locator('#prologue-progress')).toContainText('ENTER UNTUK LANJUT');
 await page.waitForTimeout(12000);
 await expect(page.locator('#prologue-chapter')).toHaveText('THE LAST GOODBYE');
 await page.keyboard.press('Enter');
 await expect(page.locator('#prologue-chapter')).toHaveText('MONTHS OF SILENCE');
 await expect.poll(()=>page.evaluate(()=>window.__THE_HOLLOW_TEST__.visualState().prologueIndex)).toBe(1);
 await expect.poll(()=>page.evaluate(()=>window.__THE_HOLLOW_TEST__.visualState().visiblePrologueScenes)).toBe(1);
 await page.keyboard.press('Enter');
 await expect(page.locator('#prologue-chapter')).toHaveText('AN EMPTY ROOM');
 await expect.poll(()=>page.evaluate(()=>window.__THE_HOLLOW_TEST__.visualState().visiblePrologueScenes)).toBe(1);
});
test('credits estate contains the mansion, forest, front yard and single road set',async({page})=>{
 await page.goto('/?e2e=1');
 await page.getByRole('button',{name:'KREDIT'}).click();
 await expect.poll(()=>page.evaluate(()=>window.__THE_HOLLOW_TEST__.visualState().creditsObjectCount)).toBeGreaterThan(250);
 await expect(page.locator('#menu')).toHaveCSS('display','none');
});
