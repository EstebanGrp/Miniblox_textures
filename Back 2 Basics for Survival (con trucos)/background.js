const URL_MAP = {
  "https://miniblox.io/textures/spritesheet.png": "https://raw.githubusercontent.com/EstebanGrp/Miniblox_textures/refs/heads/main/spritesheet%20for%20survival-xray.png",
  "https://miniblox.io/assets/Miniblox-Regular-Lz-C8nWS.otf": "https://raw.githubusercontent.com/heythereu/Miniblox-Textures/main/assets/Miniblox-Regular-Lz-C8nWS.otf",
  "https://miniblox.io/textures/entity/chicken/chicken.png": "https://raw.githubusercontent.com/heythereu/Miniblox-Textures/main/entity/chicken.png",
  "https://miniblox.io/textures/entity/cow/cow.png": "https://raw.githubusercontent.com/heythereu/Miniblox-Textures/main/entity/cow.png",
  "https://miniblox.io/textures/entity/creeper/creeper.png": "https://raw.githubusercontent.com/heythereu/Miniblox-Textures/main/entity/creeper.png",
  "https://miniblox.io/textures/entity/pig/pig.png": "https://raw.githubusercontent.com/heythereu/Miniblox-Textures/main/entity/pig.png", 
  "https://miniblox.io/textures/entity/sheep/sheep_fur.png": "https://raw.githubusercontent.com/heythereu/Miniblox-Textures/main/entity/sheep_fur.png",
  "https://miniblox.io/textures/entity/skeleton/skeleton.png": "https://raw.githubusercontent.com/heythereu/Miniblox-Textures/main/entity/skeleton.png",
  "https://miniblox.io/textures/entity/slime/slime.png": "https://raw.githubusercontent.com/heythereu/Miniblox-Textures/main/entity/slime.png",
  "https://miniblox.io/textures/entity/spider/spider.png": "https://raw.githubusercontent.com/heythereu/Miniblox-Textures/main/entity/spider.png",
  "https://miniblox.io/textures/entity/zombie/zombie.png": "https://raw.githubusercontent.com/heythereu/Miniblox-Textures/main/entity/zombie.png",
  "https://miniblox.io/textures/entity/ghost/ghost.png": "https://raw.githubusercontent.com/heythereu/Miniblox-Textures/main/entity/ghost.png",
  "https://miniblox.io/textures/entity/zombie_cowman/zombie_cowman.png": "https://raw.githubusercontent.com/EstebanGrp/Miniblox_textures/refs/heads/main/pacheco-cara-floja.png",
  "https://miniblox.io/textures/entity/snowman/snowman.png": "https://raw.githubusercontent.com/heythereu/Miniblox-Textures/main/entity/snowman.png",
  "https://miniblox.io/textures/entity/arrow.png": "https://raw.githubusercontent.com/heythereu/Miniblox-Textures/main/entity/arrow.png",
  "https://miniblox.io/textures/entity/boat/acacia.png": "https://raw.githubusercontent.com/heythereu/Miniblox-Textures/main/entity/acacia.png",
  "https://miniblox.io/textures/entity/boat/birch.png": "https://raw.githubusercontent.com/heythereu/Miniblox-Textures/main/entity/birch.png",
  "https://miniblox.io/textures/entity/boat/dark_oak.png": "https://raw.githubusercontent.com/heythereu/Miniblox-Textures/main/entity/dark_oak.png",
  "https://miniblox.io/textures/entity/boat/jungle.png": "https://raw.githubusercontent.com/heythereu/Miniblox-Textures/main/entity/jungle.png",
  "https://miniblox.io/textures/entity/boat/oak.png": "https://raw.githubusercontent.com/heythereu/Miniblox-Textures/main/entity/oak.png",
  "https://miniblox.io/textures/entity/boat/spruce.png": "https://raw.githubusercontent.com/heythereu/Miniblox-Textures/main/entity/spruce.png",
  "https://miniblox.io/textures/models/armor/chainmail_layer_1.png": "https://raw.githubusercontent.com/heythereu/Miniblox-Textures/main/armor/chainmail_layer_1.png",
  "https://miniblox.io/textures/models/armor/chainmail_layer_2.png": "https://raw.githubusercontent.com/heythereu/Miniblox-Textures/main/armor/chainmail_layer_2.png",
  "https://miniblox.io/textures/models/armor/diamond_layer_1.png": "https://raw.githubusercontent.com/heythereu/Miniblox-Textures/main/armor/diamond_layer_1.png",
  "https://miniblox.io/textures/models/armor/diamond_layer_2.png": "https://raw.githubusercontent.com/heythereu/Miniblox-Textures/main/armor/diamond_layer_2.png",
  "https://miniblox.io/textures/models/armor/emerald_layer_1.png": "https://raw.githubusercontent.com/heythereu/Miniblox-Textures/main/armor/emerald_layer_1.png",
  "https://miniblox.io/textures/models/armor/emerald_layer_2.png": "https://raw.githubusercontent.com/heythereu/Miniblox-Textures/main/armor/emerald_layer_2.png",
  "https://miniblox.io/textures/models/armor/infernium_layer_1.png": "https://raw.githubusercontent.com/EstebanGrp/Miniblox_textures/refs/heads/main/Miniblox%20betterTextures/textures/models/armor/netherite_layer_1.png",
  "https://miniblox.io/textures/models/armor/infernium_layer_2.png": "https://raw.githubusercontent.com/EstebanGrp/Miniblox_textures/refs/heads/main/Miniblox%20betterTextures/textures/models/armor/netherite_layer_2.png",
  "https://miniblox.io/textures/models/armor/gold_layer_1.png": "https://raw.githubusercontent.com/heythereu/Miniblox-Textures/main/armor/gold_layer_1.png",
  "https://miniblox.io/textures/models/armor/gold_layer_2.png": "https://raw.githubusercontent.com/heythereu/Miniblox-Textures/main/armor/gold_layer_2.png",
  "https://miniblox.io/textures/models/armor/iron_layer_1.png": "https://raw.githubusercontent.com/heythereu/Miniblox-Textures/main/armor/iron_layer_1.png",
  "https://miniblox.io/textures/models/armor/iron_layer_2.png": "https://raw.githubusercontent.com/heythereu/Miniblox-Textures/main/armor/iron_layer_2.png",
  "https://miniblox.io/textures/models/armor/leather_layer_1.png": "https://raw.githubusercontent.com/heythereu/Miniblox-Textures/main/armor/leather_layer_1.png",
  "https://miniblox.io/textures/models/armor/leather_layer_2.png": "https://raw.githubusercontent.com/heythereu/Miniblox-Textures/main/armor/leather_layer_2.png",
  "https://miniblox.io/assets/default-DKNlYibk.png":"https://raw.githubusercontent.com/EstebanGrp/Miniblox_textures/refs/heads/main/Miniblox%20betterTextures/textures/6ad2ee191d434a996766b500a1eb197e-export.gif",
};

// --- Esperar a que el service worker esté activo ---
chrome.runtime.onInstalled.addListener(() => {
  applyRedirectRules();
});
chrome.runtime.onStartup.addListener(() => {
  applyRedirectRules();
});

function applyRedirectRules() {
  let rules = [];
  let idx = 1;

  for (const [src, dst] of Object.entries(URL_MAP)) {
    const type = src.endsWith(".otf")
      ? ["font"]
      : src.endsWith(".css")
      ? ["stylesheet"]
      : ["image"];

    rules.push({
      id: idx++,
      priority: 1,
      action: { type: "redirect", redirect: { url: dst } },
      condition: { urlFilter: src, resourceTypes: type }
    });
  }

  chrome.declarativeNetRequest.updateDynamicRules(
    {
      addRules: rules,
      removeRuleIds: rules.map(r => r.id)
    },
    () => {
      if (chrome.runtime.lastError) {
        console.error("Error updating rules:", chrome.runtime.lastError.message);
      } else {
        console.log("✅ Redirect rules updated successfully!");
      }
    }
  );

}
