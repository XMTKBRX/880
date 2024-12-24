module.exports.config = {
    name: "سيم",
    version: "4.3.7",
    hasPermssion: 1,
    credits: "ProcodeMew", //change api sim Hoang Giap
    description: "استخدم الامر .سمسم تشغيل \n .سمسم ايقاف",
    commandCategory: "𝔾ℝ𝕆𝕌ℙ",
    usages: "[args]",
    cooldowns: 5,
    dependencies: {
        axios: ""
    }
}


async function simsimi(a, b, c) {
    const d = global.nodemodule.axios, g = (a) => encodeURIComponent(a);
    try {
        var { data: j } = await d({ url: `https://api.simsimi.net/v2/?text=${g(a)}&lc=ar`, method: "GET" });
        return { error: !1, data: j }
    } catch (p) {
        return { error: !0, data: {} }
    }
}
module.exports.onLoad = async function () {
    "undefined" == typeof global && (global = {}), "undefined" == typeof global.simsimi && (global.simsimi = new Map);
};
module.exports.handleEvent = async function ({ api: b, event: a }) {
    const { threadID: c, messageID: d, senderID: e, body: f } = a, g = (e) => b.sendMessage(e, c, d);
    if (global.simsimi.has(c)) {
        if (e == b.getCurrentUserID() || "" == f || d == global.simsimi.get(c)) return;
        var { data: h, error: i } = await simsimi(f, b, a);
        return !0 == i ? void 0 : !1 == h.success ? g(h.error) : g(h.success)
    }
}
module.exports.run = async function ({ api: b, event: a, args: c }) {
    const { threadID: d, messageID: e } = a, f = (c) => b.sendMessage(c, d, e);
    if (0 == c.length) return f("B\u1EA1n ch\u01B0a nh\u1EADp tin nh\u1EAFn");
    switch (c[0]) {
        case "تشغيل":
            return global.simsimi.has(d) ? f("B\u1EA1n ch\u01B0a t\u1EAFt sim.") : (global.simsimi.set(d, e), f("تم تشغيل سمسمي."));
        case "ايقاف":
            return global.simsimi.has(d) ? (global.simsimi.delete(d), f("تم ايقاف تشغيل سمسمي.")) : f("تم ايقاف تشغيل سمسمي.");
        default:
            var { data: g, error: h } = await simsimi(c.join(" "), b, a);
            return !0 == h ? void 0 : !1 == g.success ? f(g.error) : f(g.success);
    }
};
