"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8683],{6241:n=>{n.exports=JSON.parse('{"blogPosts":[{"id":"/2021/12/29/yearly-update","metadata":{"permalink":"/ja/blog/2021/12/29/yearly-update","editUrl":"https://crowdin.com/project/pnpm/ja","source":"@site/i18n/ja/docusaurus-plugin-content-blog/2021-12-29-yearly-update.md","title":"2021\u5e74\u306epnpm","description":"\u4eca\u5e74\u306fpnpm\u306b\u3068\u3063\u3066\u826f\u3044\u5e74\u3067\u3057\u305f\u3002\u5e74\u672b\u306a\u306e\u3067\u30011\u5e74\u3092\u632f\u308a\u8fd4\u3063\u3066\u307f\u307e\u3057\u3087\u3046","date":"2021-12-29T00:00:00.000Z","formattedDate":"2021\u5e7412\u670829\u65e5","tags":[],"readingTime":4.88,"truncated":true,"authors":[{"name":"Zoltan Kochan","url":"http://twitter.com/zoltankochan","imageURL":"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"}],"nextItem":{"title":"pnpm \u3067\u306e\u30ce\u30fc\u30c9\u30e2\u30b8\u30e5\u30fc\u30eb\u306b\u95a2\u3059\u308b\u30aa\u30d7\u30b7\u30e7\u30f3\u8a2d\u5b9a","permalink":"/ja/blog/2020/10/17/node-modules-configuration-options-with-pnpm"}},"content":"\u4eca\u5e74\u306fpnpm\u306b\u3068\u3063\u3066\u826f\u3044\u5e74\u3067\u3057\u305f\u3002\u5e74\u672b\u306a\u306e\u3067\u30011\u5e74\u3092\u632f\u308a\u8fd4\u3063\u3066\u307f\u307e\u3057\u3087\u3046\\n\\n\x3c!--truncate--\x3e\\n\\n## \u4f7f\u3044\u65b9\\n\\n### \u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u6570\\n\\n\u4eca\u5e74\u306e\u76ee\u6a19\u306f\u3001\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u6570\u3067Bower\u306b\u52dd\u3064\u3053\u3068\u3067\u3057\u305f\u3002 [11\u6708\u306b](https://npm-stat.com/charts.html?package=pnpm&package=bower&from=2021-01-01&to=2021-12-29)\u3053\u306e\u76ee\u6a19\u3092\u9054\u6210\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3057\u305f\u3002\\n\\n![](/img/blog/pnpm-vs-bower-stats.png)\\n\\npnpm\u306f 2021\u5e74\u306b 2020\u5e74\u306e \u7d04 [3\u500d](https://npm-stat.com/charts.html?package=pnpm&from=2016-12-01&to=2021-12-29) \u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3055\u308c\u307e\u3057\u305f\u3002\\n\\n![](/img/blog/download-stats-2021.png)\\n\\n:::note\\n\\n\u3053\u306e\u7d71\u8a08\u306f\u3001pnpm\u306e\u5168\u3066\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5\u3092\u6e2c\u5b9a\u3057\u3066\u3044\u308b\u308f\u3051\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002 [pnpm npm package](https://www.npmjs.com/package/pnpm)\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u6570\u306e\u307f\u3092\u6e2c\u5b9a\u3057\u3066\u3044\u307e\u3059\u3002 \u4eca\u5e74\u8ffd\u52a0\u3057\u305fpnpm\u306e\u30b3\u30f3\u30d1\u30a4\u30eb\u6e08\u307f\u30d0\u30a4\u30ca\u30ea\u30d0\u30fc\u30b8\u30e7\u30f3\u306f\u5225\u3067\u914d\u5e03\u3055\u308c\u307e\u3059\u3002\\n\\n:::\\n\\n### \u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u8a2a\u554f\u8005\u6570\\n\\n\u79c1\u305f\u3061\u306fGoogle Analytics\u3092\u4f7f\u3063\u3066\u3001\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u30b5\u30a4\u30c8\u304b\u3089\u500b\u4eba\u3092\u7279\u5b9a\u3067\u304d\u306a\u3044\u7d71\u8a08\u60c5\u5831\u3092\u53ce\u96c6\u3057\u3066\u3044\u307e\u3059\u3002 2021\u5e74\u306b\u306f\u30011\u9031\u9593\u306b2,000\u4eba\u4ee5\u4e0a\u306e\u30e6\u30cb\u30fc\u30af\u30d3\u30b8\u30bf\u30fc\u304c\u8a2a\u308c\u308b\u3053\u3068\u3082\u3042\u308a\u307e\u3057\u305f\u3002\\n\\n![](/img/blog/ga-unique-visits-2021.png)\\n\\n\u5229\u7528\u8005\u306e\u5927\u534a\u306f\u30a2\u30e1\u30ea\u30ab\u304b\u4e2d\u56fd\u304b\u3089\u30a2\u30af\u30bb\u30b9\u3057\u3066\u3044\u307e\u3059\\n\\n![](/img/blog/countries-2021.png)\\n\\n### GitHub\u306e\u30b9\u30bf\u30fc\u6570\\n\\n[\u30e1\u30a4\u30f3\u306eGitHub\u30ea\u30dd\u30b8\u30c8\u30ea](https://github.com/pnpm/pnpm)\u306f\u3001\u4eca\u5e74\u3060\u3051\u30675000\u4ee5\u4e0a\u306e\u30b9\u30bf\u30fc\u3092\u7372\u5f97\u3057\u307e\u3057\u305f\\n\\n![](/img/blog/stars-2021.png)\\n\\n### \u65b0\u898f\u30e6\u30fc\u30b6\u30fc\\n\\n\u4eca\u5e74\u6700\u5927\u306e\u65b0\u898f\u30e6\u30fc\u30b6\u30fc\u306f\u3001[Bytedance](https://github.com/pnpm/pnpm.github.io/pull/89) (TikTok\u904b\u55b6\u5143\u306e\u4f1a\u793e)\u3067\u3059\\n\\n\u307e\u305f\u3001\u591a\u304f\u306e\u7d20\u6674\u3089\u3057\u3044\u30aa\u30fc\u30d7\u30f3\u30bd\u30fc\u30b9\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u304cpnpm\u3092\u4f7f\u7528\u3059\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f\u3002 \\b\u30b9\u30a4\u30c3\u30c1\u3057\u305f\u7406\u7531\u3068\u3057\u3066\u3001pnpm\u304c\u30e2\u30ce\u30ec\u30dd\u3092\u5f37\u529b\u306b\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u308b\u3053\u3068\u3092\u6319\u3052\u308b\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u304c\u3042\u308a\u307e\u3059\\n\\n* [Vue](https://github.com/vuejs/vue-next)\\n* [Vite](https://github.com/vitejs/vite)\\n* [\u305d\u306e\u4ed6\u591a\u6570](https://pnpm.io/workspaces#usage-examples)\\n\\npnpm\u306e\u52b9\u7387\u3001\u30b9\u30d4\u30fc\u30c9\u3001\u7f8e\u3057\u3055\u304c\u6c17\u306b\u5165\u3063\u3066\u4e57\u308a\u63db\u3048\u305f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3082\u3042\u308a\u307e\u3059\\n\\n* [Autoprefixer](https://twitter.com/Autoprefixer/status/1476226146488692736)\\n* [PostCSS](https://twitter.com/PostCSS/status/1470438664006258701)\\n* [Browserslist](https://twitter.com/Browserslist/status/1468264308308156419)\\n\\n## \u6a5f\u80fd\u306e\u30cf\u30a4\u30e9\u30a4\u30c8\\n\\n### \u65b0\u3057\u3044lockfile\u306e\u5f62\u5f0f([v6.0.0](https://github.com/pnpm/pnpm/releases/tag/v6.0.0)\u304b\u3089)\\n\\n\u4eca\u5e74\u6700\u521d\u306e\u3001\u305d\u3057\u3066\u6700\u3082\u91cd\u8981\u306a\u5909\u66f4\u70b9\u306e1\u3064\u306f\u3001\u65b0\u3057\u3044`pnpm-lock.yaml`\u5f62\u5f0f\u3067\u3057\u305f\u3002 \u3053\u308c\u306f\u7834\u58ca\u7684\u5909\u66f4\u3060\u3063\u305f\u306e\u3067\u3001v6\u3092\u30ea\u30ea\u30fc\u30b9\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3057\u305f\u3002 \u3057\u304b\u3057\u3001\u3053\u308c\u306f\u6210\u529f\u3067\u3057\u305f\u3002 \u3044\u307e\u307e\u3067\u306elockfile\u3067\u306f\u3001Git\u306e\u30b3\u30f3\u30d5\u30ea\u30af\u30c8\u304c\u983b\u7e41\u306b\u767a\u751f\u3057\u3066\u3044\u307e\u3057\u305f\u3002 \u65b0\u3057\u3044\u5f62\u5f0f\u3092\u5c0e\u5165\u3057\u3066\u4ee5\u6765\u3001Git\u306e\u30b3\u30f3\u30d5\u30ea\u30af\u30c8\u306b\u95a2\u3059\u308b\u82e6\u60c5\u306f\u4e00\u5207\u306a\u304f\u306a\u308a\u307e\u3057\u305f\u3002\\n\\n### Node.js\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u7ba1\u7406 ([v6.12.0](https://github.com/pnpm/pnpm/releases/tag/v6.12.0)\u304b\u3089)\\n\\nNode.js\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u7ba1\u7406\u3059\u308b\u30b3\u30de\u30f3\u30c9(`pnpm env`)\u3092\u8ffd\u52a0\u3057\u307e\u3057\u305f\u3002 \u305d\u306e\u305f\u3081\u3001nvm\u3084Volta\u306e\u3088\u3046\u306aNode.js\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u7ba1\u7406\u30bd\u30d5\u30c8\u306e\u4ee3\u308f\u308a\u306b\u3001pnpm\u3092\u4f7f\u3048\u307e\u3059\u3002\\n\\n\u307e\u305f\u3001pnpm\u306f\u30b9\u30bf\u30f3\u30c9\u30a2\u30ed\u30f3\u306e\u5b9f\u884c\u53ef\u80fd\u30d5\u30a1\u30a4\u30eb\u3068\u3057\u3066\u51fa\u8377\u3055\u308c\u307e\u3059\u306e\u3067\u3001Node.js\u304c\u30d7\u30ea\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u306a\u3044\u30b7\u30b9\u30c6\u30e0\u3067\u3082\u5b9f\u884c\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\\n\\n### \u30ed\u30fc\u30ab\u30eb\u4f9d\u5b58\u6027\u306e\u6ce8\u5165 ([v6.20.0](https://github.com/pnpm/pnpm/releases/tag/v6.20.0)\u304b\u3089)\\n\\n\u30ed\u30fc\u30ab\u30eb\u4f9d\u5b58\u95a2\u4fc2\u3092 \\"\u6ce8\u5165\\" \u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001\u30ed\u30fc\u30ab\u30eb\u306a\u4f9d\u5b58\u95a2\u4fc2\u306f `node_modules`\u306b\u30b7\u30f3\u30dc\u30ea\u30c3\u30af\u30ea\u30f3\u30af\u3055\u308c\u307e\u3059\u304c\u3001\u3053\u306e\u65b0\u3057\u3044\u6a5f\u80fd\u3067\u306f\u3001\u4ee3\u308f\u308a\u306b\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u30cf\u30fc\u30c9\u30ea\u30f3\u30af\u3059\u308b\u3088\u3046\u306b pnpm \u306b\u6307\u793a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\\n\\n### peerDependency issue\u306e\u30ec\u30dd\u30fc\u30c8\u6a5f\u80fd\u306e\u6539\u5584 (since [v6.24.0](https://github.com/pnpm/pnpm/releases/tag/v6.24.0))\\n\\npeerDependencies\u306e\u554f\u984c\u306f\u3001\u4ee5\u524d\u306f\u30d7\u30ec\u30fc\u30f3\u30c6\u30ad\u30b9\u30c8\u3067\u51fa\u529b\u3055\u308c\u3001\u7406\u89e3\u3059\u308b\u306e\u304c\u56f0\u96e3\u3067\u3057\u305f\u3002 \u73fe\u5728\u306f\u3001\u3059\u3079\u3066\u30b0\u30eb\u30fc\u30d7\u5316\u3055\u308c\u3001\u7f8e\u3057\u3044\u968e\u5c64\u69cb\u9020\u3067\u51fa\u529b\u3055\u308c\u307e\u3059\u3002\\n\\n## \u7af6\u5408\u30c4\u30fc\u30eb\u306e\u52d5\u5411\\n\\n### Yarn\\n\\nYarn\u306f[v3.1](https://dev.to/arcanis/yarn-31-corepack-esm-pnpm-optional-packages--3hak#new-install-mode-raw-pnpm-endraw-)\u304b\u3089pnpm\u30ea\u30f3\u30ab\u3092\u8ffd\u52a0\u3057\u307e\u3057\u305f\u3002 \u305d\u306e\u305f\u3081\u3001Yarn\u306fpnpm\u304c\u4f5c\u6210\u3059\u308b\u3082\u306e\u3068\u540c\u69d8\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u69cb\u9020\u3092\u3082\u3064node_modules\u3092\u4f5c\u6210\u3067\u304d\u307e\u3059\u3002\\n\\n\u307e\u305f\u3001Yarn\u30c1\u30fc\u30e0\u306f\u3001\u30c7\u30a3\u30b9\u30af\u5bb9\u91cf\u3092\u52b9\u7387\u7684\u306b\u4f7f\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u3001\u30b3\u30f3\u30c6\u30f3\u30c4\u30fb\u30a2\u30c9\u30ec\u30b9\u53ef\u80fd\u306a\u30b9\u30c8\u30ec\u30fc\u30b8\u3092\u5b9f\u88c5\u3059\u308b\u4e88\u5b9a\u3067\u3059\u3002\\n\\n### npm\\n\\nnpm\u30c1\u30fc\u30e0\u306f\u3001pnpm\u304c\u63a1\u7528\u3057\u3066\u3044\u308b\u30b7\u30f3\u30dc\u30ea\u30c3\u30af\u30ea\u30f3\u30af\u306b\u3088\u308bnode_modules\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u69cb\u9020\u3082\u63a1\u7528\u3059\u308b\u3053\u3068\u306b\u6c7a\u5b9a\u3057\u307e\u3057\u305f\u3002(\u95a2\u9023\u3059\u308b [RFC](https://github.com/npm/rfcs/blob/main/accepted/0042-isolated-mode.md)).\\n\\n### \u305d\u306e\u4ed6\\n\\nZig\u3067\u66f8\u304b\u308c\u305f[Bun](https://twitter.com/jarredsumner/status/1473416431291174912/photo/1)\u3068 Rust\u3067\u66f8\u304b\u308c\u305f[Volt](https://github.com/voltpkg/volt) \u306e\u3075\u305f\u3064\u306f\u3001npm/Yarn/pnpm \u3088\u308a\u9ad8\u901f\u3068\u4e3b\u5f35\u3057\u3066\u3044\u307e\u3059\u3002 \u79c1\u306f\u3053\u308c\u3089\u306e\u65b0\u3057\u3044\u30d1\u30c3\u30b1\u30fc\u30b8\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u306e\u30d9\u30f3\u30c1\u30de\u30fc\u30af\u306f\u307e\u3060\u884c\u3063\u3066\u3044\u307e\u305b\u3093\u3002\\n\\n## \u4eca\u5f8c\u306e\u8a08\u753b\\n\\n\u3088\u308a\u901f\u304f\u3001\u3088\u308a\u826f\u304f\u3001\u30d9\u30b9\u30c8\u3092\u76ee\u6307\u3059"},{"id":"/2020/10/17/node-modules-configuration-options-with-pnpm","metadata":{"permalink":"/ja/blog/2020/10/17/node-modules-configuration-options-with-pnpm","editUrl":"https://crowdin.com/project/pnpm/ja","source":"@site/i18n/ja/docusaurus-plugin-content-blog/2020-10-17-node-modules-configuration-options-with-pnpm.md","title":"pnpm \u3067\u306e\u30ce\u30fc\u30c9\u30e2\u30b8\u30e5\u30fc\u30eb\u306b\u95a2\u3059\u308b\u30aa\u30d7\u30b7\u30e7\u30f3\u8a2d\u5b9a","description":"nodemodules \u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3092\u751f\u6210\u3059\u308b\u65b9\u6cd5\u306f\u591a\u304f\u3042\u308a\u307e\u3059\u3002 \u3086\u308b\u3044 nodemodules \u3092\u4f5c\u6210\u3059\u308b\u65b9\u6cd5\u3082\u3042\u308a\u307e\u3059\u304c\u3001\u3053\u3053\u3067\u306e\u76ee\u6a19\u306f\u6700\u3082\u53b3\u683c\u306a\u3082\u306e\u3092\u751f\u6210\u3059\u308b\u3053\u3068\u3067\u3059\u3002","date":"2020-10-17T00:00:00.000Z","formattedDate":"2020\u5e7410\u670817\u65e5","tags":[],"readingTime":3.38,"truncated":true,"authors":[{"name":"Zoltan Kochan","url":"http://twitter.com/zoltankochan","imageURL":"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"}],"prevItem":{"title":"2021\u5e74\u306epnpm","permalink":"/ja/blog/2021/12/29/yearly-update"},"nextItem":{"title":"\u30d5\u30e9\u30c3\u30c8\u306a node_modules \u304c\u552f\u4e00\u306e\u65b9\u6cd5\u3067\u306f\u3042\u308a\u307e\u305b\u3093","permalink":"/ja/blog/2020/05/27/flat-node-modules-is-not-the-only-way"}},"content":"node_modules \u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3092\u751f\u6210\u3059\u308b\u65b9\u6cd5\u306f\u591a\u304f\u3042\u308a\u307e\u3059\u3002 \u3086\u308b\u3044 node_modules \u3092\u4f5c\u6210\u3059\u308b\u65b9\u6cd5\u3082\u3042\u308a\u307e\u3059\u304c\u3001\u3053\u3053\u3067\u306e\u76ee\u6a19\u306f\u6700\u3082\u53b3\u683c\u306a\u3082\u306e\u3092\u751f\u6210\u3059\u308b\u3053\u3068\u3067\u3059\u3002\\n\\n\x3c!--truncate--\x3e\\n\\n## \u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u69cb\u7bc9\u65b9\u6cd5\\n\\n\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001pnpm v5 \u306f\u6e96\u53b3\u683c\u306a node_modules \u3092\u4f5c\u6210\u3057\u307e\u3059\u3002 \u6e96\u53b3\u683c\u306a\u5834\u5408\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304b\u3089\u306f`package.json` \u306b\u4f9d\u5b58\u3068\u3057\u3066\u8ffd\u52a0\u3055\u308c\u3066\u3044\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u307f\u3092 require \u3067\u304d\u307e\u3059\u3002(\u3044\u304f\u3064\u304b\u306e\u4f8b\u5916\u3092\u9664\u304d\u307e\u3059\u3002) \u305f\u3060\u3057\u3001\u4f9d\u5b58\u95a2\u4fc2\u306f\u3069\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u306b\u3082\u30a2\u30af\u30bb\u30b9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\\n\\n\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u8a2d\u5b9a\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059:\\n\\n```ini\\n; \u3059\u3079\u3066\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3092 node_modules/.pnpm/node_modules \u306b\u5dfb\u304d\u4e0a\u3052\u308b\\nhoist-pattern[]=*\\n\\n; TypeScript \u3067\u3046\u307e\u304f\u6271\u3048\u308b\u3088\u3046\u306b\u3001\u3059\u3079\u3066\u306e\u578b\u5b9a\u7fa9\u3092\u30eb\u30fc\u30c8\u306b\u5dfb\u304d\u4e0a\u3052\u308b\\npublic-hoist-pattern[]=*types*\\n\\n; \u3059\u3079\u3066\u306e ESLint \u306b\u95a2\u4fc2\u3059\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u30eb\u30fc\u30c8\u306b\u5dfb\u304d\u4e0a\u3052\u308b\\npublic-hoist-pattern[]=*eslint*\\n```\\n\\n## \u30d7\u30e9\u30b0\u30fb\u30a2\u30f3\u30c9\u30fb\u30d7\u30ec\u30a4\u3002 \u6700\u3082\u53b3\u683c\u306a\u8a2d\u5b9a\\n\\npnpm \u306f v5.9 \u304b\u3089 [Yarn \u306e \u30d7\u30e9\u30b0\u30fb\u30a2\u30f3\u30c9\u30fb\u30d7\u30ec\u30a4](https://yarnpkg.com/features/pnp) \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002 \u30d7\u30e9\u30b0\u30fb\u30a2\u30f3\u30c9\u30fb\u30d7\u30ec\u30a4\u3067\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3082\u3001\u305d\u306e\u4f9d\u5b58\u3082\u3001\u5ba3\u8a00\u3055\u308c\u305f\u4f9d\u5b58\u306b\u306e\u307f\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002 \u3053\u306e\u8a2d\u5b9a\u306f `hoist=false` \u3092\u8a2d\u5b9a\u3059\u308b\u3088\u308a\u3082\u3055\u3089\u306b\u53b3\u683c\u3067\u3059\u3002\u30e2\u30ce\u30ec\u30dd\u306e\u4e2d\u3067\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u305f\u3068\u3048\u30eb\u30fc\u30c8\u306e\u4f9d\u5b58\u306b\u3059\u3089\u30a2\u30af\u30bb\u30b9\u3067\u304d\u306a\u3044\u304b\u3089\u3067\u3059\u3002\\n\\n\u30d7\u30e9\u30b0\u30fb\u30a2\u30f3\u30c9\u30fb\u30d7\u30ec\u30a4\u3092\u4f7f\u7528\u3059\u308b\u306b\u306f\u3001\u6b21\u306e\u8a2d\u5b9a\u3092\u4f7f\u7528\u3057\u3066\u304f\u3060\u3055\u3044\u3002\\n\\n```ini\\nnode-linker=pnp\\nsymlink=false\\n```\\n\\n## \u53b3\u683c\u3067\u4f1d\u7d71\u7684\u306a\u30e2\u30b8\u30e5\u30fc\u30eb\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306e\u69cb\u9020\\n\\n\u307e\u3060\u30d7\u30e9\u30b0\u30fb\u30a2\u30f3\u30c9\u30fb\u30d7\u30ec\u30a4\u3092\u4f7f\u7528\u3059\u308b\u6e96\u5099\u304c\u3067\u304d\u3066\u3044\u306a\u3044\u5834\u5408\u3067\u3082\u3001hoist \u3092 false \u306b\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u306b\u3088\u308a\u3001\u30d1\u30c3\u30b1\u30fc\u30b8\u304c\u81ea\u8eab\u306e\u4f9d\u5b58\u306b\u306e\u307f\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u3053\u3068\u304c\u53ef\u80fd\u3067\u3059\u3002\\n\\n```ini\\nhoist=false\\n```\\n\\n\u3057\u304b\u3057\u3001\u3044\u304f\u3064\u304b\u306e\u4f9d\u5b58\u304c\u3001\u305d\u306e\u4f9d\u5b58\u306b\u306a\u3044\u30d1\u30c3\u30b1\u30fc\u30b8\u3078\u306e\u30a2\u30af\u30bb\u30b9\u3092\u8a66\u307f\u3088\u3046\u3068\u3059\u308b\u5834\u5408\u306f\u30012\u3064\u306e\u65b9\u6cd5\u304c\u3042\u308a\u307e\u3059\u3002\\n\\n1. `pnpmfile.js` \u3092\u4f5c\u6210\u3057\u3066\u3001[hook](/pnpmfile) \u3092\u4f7f\u7528\u3057\u3066\u4e0d\u8db3\u3057\u3066\u3044\u308b\u4f9d\u5b58\u3092\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30de\u30cb\u30d5\u30a7\u30b9\u30c8\u306b\u52a0\u3048\u308b\u3002\\n\\n2. `hoist-pattern` \u8a2d\u5b9a\u306b\u30d1\u30bf\u30fc\u30f3\u3092\u8ffd\u52a0\u3059\u308b\u3002 \u4f8b\u3048\u3070\u3001\u898b\u3064\u304b\u3089\u306a\u3044\u30e2\u30b8\u30e5\u30fc\u30eb\u304c `babel-core` \u306e\u5834\u5408\u306f\u3001\u6b21\u306e\u8a2d\u5b9a\u3092 `.npmrc` \u306b\u8ffd\u8a18\u3057\u307e\u3059\u3002\\n\\n    ```ini\\n    hoist-pattern[]=babel-core\\n    ```\\n\\n## \u6700\u3082\u60aa\u3044\u30b1\u30fc\u30b9 - \u30eb\u30fc\u30c8\u3078\u306e\u5dfb\u304d\u4e0a\u3052\\n\\n\u4e00\u90e8\u306e\u30c4\u30fc\u30eb\u306f\u3001\u3059\u3079\u3066\u3092\u4eee\u60f3\u30b9\u30c8\u30a2\u306e\u30eb\u30fc\u30c8\u306b\u3001\u4e00\u90e8\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u30eb\u30fc\u30c8\u306b\u5dfb\u304d\u4e0a\u3052\u308b pnpm \u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u8a2d\u5b9a\u3067\u3082\u6a5f\u80fd\u3057\u306a\u3044\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002 \u3053\u306e\u5834\u5408\u3001\u4f9d\u5b58\u306e\u3059\u3079\u3066\u3001\u307e\u305f\u306f\u4e00\u90e8\u3092\u30e2\u30b8\u30e5\u30fc\u30eb\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306e\u30eb\u30fc\u30c8\u306b\u5f15\u304d\u4e0a\u3052\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\\n\\nnode_modules \u306e\u30eb\u30fc\u30c8\u306b\u3059\u3079\u3066\u3092\u5dfb\u304d\u4e0a\u3052\u308b\u5834\u5408:\\n\\n```ini\\nshamefully-hoist=true\\n```\\n\\n\u30d1\u30bf\u30fc\u30f3\u306b\u30de\u30c3\u30c1\u3057\u305f\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u307f\u3092\u5dfb\u304d\u4e0a\u3052\u308b\u5834\u5408:\\n\\n```ini\\npublic-hoist-pattern[]=babel-*\\n```"},{"id":"/2020/05/27/flat-node-modules-is-not-the-only-way","metadata":{"permalink":"/ja/blog/2020/05/27/flat-node-modules-is-not-the-only-way","editUrl":"https://crowdin.com/project/pnpm/ja","source":"@site/i18n/ja/docusaurus-plugin-content-blog/2020-05-27-flat-node-modules-is-not-the-only-way.md","title":"\u30d5\u30e9\u30c3\u30c8\u306a node_modules \u304c\u552f\u4e00\u306e\u65b9\u6cd5\u3067\u306f\u3042\u308a\u307e\u305b\u3093","description":"pnpm \u306e\u65b0\u898f\u30e6\u30fc\u30b6\u30fc\u304b\u3089\u3001pnpm \u304c\u751f\u6210\u3059\u308b node_modules \u306e\u5947\u5999\u306a\u69cb\u9020\u306b\u3064\u3044\u3066\u3088\u304f\u805e\u304b\u308c\u307e\u3059\u3002 \u306a\u305c\u5e73\u5766\u306a\u69cb\u9020\u3092\u4f7f\u7528\u3057\u306a\u3044\u306e\u3067\u3057\u3087\u3046\u304b\u3002 \u4f9d\u5b58\u306e\u3055\u3089\u306b\u305d\u306e\u4f9d\u5b58\u306f\u3069\u3053\u306b\u3042\u308b\u306e\u3067\u3057\u3087\u3046\u304b\u3002","date":"2020-05-27T00:00:00.000Z","formattedDate":"2020\u5e745\u670827\u65e5","tags":[],"readingTime":5.5,"truncated":true,"authors":[{"name":"Zoltan Kochan","url":"http://twitter.com/zoltankochan","imageURL":"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"}],"prevItem":{"title":"pnpm \u3067\u306e\u30ce\u30fc\u30c9\u30e2\u30b8\u30e5\u30fc\u30eb\u306b\u95a2\u3059\u308b\u30aa\u30d7\u30b7\u30e7\u30f3\u8a2d\u5b9a","permalink":"/ja/blog/2020/10/17/node-modules-configuration-options-with-pnpm"}},"content":"pnpm \u306e\u65b0\u898f\u30e6\u30fc\u30b6\u30fc\u304b\u3089\u3001pnpm \u304c\u751f\u6210\u3059\u308b `node_modules` \u306e\u5947\u5999\u306a\u69cb\u9020\u306b\u3064\u3044\u3066\u3088\u304f\u805e\u304b\u308c\u307e\u3059\u3002 \u306a\u305c\u5e73\u5766\u306a\u69cb\u9020\u3092\u4f7f\u7528\u3057\u306a\u3044\u306e\u3067\u3057\u3087\u3046\u304b\u3002 \u4f9d\u5b58\u306e\u3055\u3089\u306b\u305d\u306e\u4f9d\u5b58\u306f\u3069\u3053\u306b\u3042\u308b\u306e\u3067\u3057\u3087\u3046\u304b\u3002\\n\\n\x3c!--truncate--\x3e\\n\\n> \u3053\u306e\u8a18\u4e8b\u3067\u306f\u3001npm \u3084 Yarn \u306e\u751f\u6210\u3059\u308b\u30d5\u30e9\u30c3\u30c8\u306a `node_modules` \u306b\u99b4\u67d3\u307f\u306e\u3042\u308b\u8aad\u8005\u3092\u60f3\u5b9a\u3057\u3066\u3044\u307e\u3059\u3002 npm \u304c v3 \u304b\u3089\u30d5\u30e9\u30c3\u30c8\u306a `node_modules` \u3092\u63a1\u7528\u3059\u308b\u5fc5\u8981\u304c\u3042\u3063\u305f\u7406\u7531\u306b\u3064\u3044\u3066\u306f\u3001 [\u306a\u305c pnpm \u304c\u5fc5\u8981\u306a\u306e\u3067\u3057\u3087\u3046\u304b (\u82f1\u8a9e)](https://www.kochan.io/nodejs/why-should-we-use-pnpm.html) \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002\\n\\n\u3067\u306f\u3001\u306a\u305c pnpm \u306f\u901a\u5e38\u3068\u306f\u7570\u306a\u308b\u69cb\u9020\u306e `node_modules` \u3092\u4f7f\u7528\u3059\u308b\u306e\u3067\u3057\u3087\u3046\u3002 \u8a66\u3057\u306b 2 \u3064\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3092\u4f5c\u6210\u3057\u3066\u3001\u7247\u65b9\u306b\u306f `npm add express` \u3092\u3001\u3082\u3046\u4e00\u65b9\u306b\u306f `pnpm add express` \u3092\u5b9f\u884c\u3057\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002 npm \u306e\u65b9\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u3042\u308b `node_modules` \u306f\u6b21\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002\\n\\n```text\\n.bin\\naccepts\\narray-flatten\\nbody-parser\\nbytes\\ncontent-disposition\\ncookie-signature\\ncookie\\ndebug\\ndepd\\ndestroy\\nee-first\\nencodeurl\\nescape-html\\netag\\nexpress\\n```\\n\\n[\u3053\u3061\u3089](https://github.com/zkochan/comparing-node-modules/tree/master/npm-example/node_modules) \u3067\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u5168\u4f53\u3092\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002\\n\\n\u305d\u3057\u3066\u3001\u3053\u3061\u3089\u304c pnpm \u304c\u751f\u6210\u3059\u308b `node_modules` \u306f\u6b21\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002\\n\\n```text\\n.pnpm\\n.modules.yaml\\nexpress\\n```\\n\\n[\u3053\u3061\u3089](https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules) \u304b\u3089\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u5168\u4f53\u3092\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002\\n\\n\u4f9d\u5b58\u306e\u3059\u3079\u3066\u306f\u3069\u3053\u306b\u3042\u308b\u306e\u3067\u3057\u3087\u3046\u304b\u3002 `node_modules` \u914d\u4e0b\u306b\u306f\u3001\u30d5\u30a9\u30eb\u30c0\u306f `.pnpm` \u306e\u307f\u304c\u5b58\u5728\u3057\u3001\u3042\u3068\u306f `express` \u3068\u3044\u3046\u540d\u524d\u306e\u30b7\u30f3\u30dc\u30ea\u30c3\u30af\u30ea\u30f3\u30af\u3067\u3059\u3002 \u4eca\u56de\u3001 `express` \u3057\u304b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u3044\u306a\u3044\u305f\u3081\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304b\u3089\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u306f\u3053\u308c\u306e\u307f\u306a\u306e\u3067\u3059\u3002\\n\\n> pnpm \u306e\u3053\u306e\u53b3\u683c\u3055\u304c\u3069\u3046\u3057\u3066\u3044\u3044\u306e\u304b\u3001\u3068\u3044\u3046\u3053\u3068\u306b\u3046\u3044\u3066\u306f [\u3053\u3061\u3089](https://medium.com/pnpm/pnpms-strictness-helps-to-avoid-silly-bugs-9a15fb306308) \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002\\n\\n`express` \u306e\u4e2d\u8eab\u304c\u3069\u3046\u306a\u3063\u3066\u3044\u308b\u304b\u78ba\u8a8d\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002\\n\\n```text\\n\u25be node_modules\\n  \u25b8 .pnpm\\n  \u25be express\\n    \u25b8 lib\\n      History.md\\n      index.js\\n      LICENSE\\n      package.json\\n      Readme.md\\n    .modules.yaml\\n```\\n\\n`express` \u306e\u4e2d\u306b\u306f `node_modules` \u304c\u306a\u3044\u306e\u3067\u3057\u3087\u3046\u304b\u3002 `express` \u306e\u4f9d\u5b58\u306e\u3059\u3079\u3066\u306f\u3069\u3053\u306b\u3042\u308b\u306e\u3067\u3057\u3087\u3046\u304b\u3002\\n\\n`express` \u304c\u305f\u3060\u306e\u30b7\u30f3\u30dc\u30ea\u30c3\u30af\u30ea\u30f3\u30af\u3067\u3042\u308b\u3068\u3044\u3046\u3068\u3053\u308d\u306b\u4ed5\u639b\u3051\u304c\u3042\u308a\u307e\u3059\u3002 Node.js \u306f\u4f9d\u5b58\u89e3\u6c7a\u3092\u3059\u308b\u969b\u306b\u3001\u30b7\u30f3\u30dc\u30ea\u30c3\u30af\u30ea\u30f3\u30af\u3067\u3042\u308b\u304b\u306b\u95a2\u308f\u3089\u305a\u3001\u5b9f\u969b\u306e\u30d1\u30b9\u3092\u4f7f\u3044\u307e\u3059\u3002 \u3057\u304b\u3057\u3001\u4eca\u6c17\u306b\u3057\u3066\u3044\u308b `express` \u306e\u672c\u5f53\u306e\u5834\u6240\u306f\u3069\u3053\u306a\u306e\u3067\u3057\u3087\u3046\u304b\u3002\\n\\n\u305d\u308c\u304c\u3053\u3053\u306b\u306a\u308a\u307e\u3059: [node_modules/.pnpm/express@4.17.1/node_modules/express](https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules/.pnpm/express@4.17.1/node_modules/express)\\n\\n\u3053\u308c\u3067\u3001`.pnpm/` \u30d5\u30a9\u30eb\u30c0\u306e\u5f79\u5272\u3082\u308f\u304b\u308a\u307e\u3057\u305f\u306d\u3002 `.pnpm/` \u306f\u3059\u3079\u3066\u306e\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u30d5\u30e9\u30c3\u30c8\u306a\u30d5\u30a9\u30eb\u30c0\u30fc\u69cb\u6210\u306b\u3057\u3066\u4fdd\u5b58\u3057\u3001\u5404\u4f9d\u5b58\u306f\u6b21\u306e\u3088\u3046\u306a\u547d\u540d\u898f\u5247\u306b\u5f93\u3063\u305f\u30d5\u30a9\u30eb\u30c0\u306b\u683c\u7d0d\u3055\u308c\u3066\u3044\u307e\u3059\u3002\\n\\n```text\\n.pnpm/<name>@<version>/node_modules/<name>\\n```\\n\\n\u3053\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3092\u4eee\u60f3\u30b9\u30c8\u30a2\u3068\u547c\u3093\u3067\u3044\u307e\u3059\u3002\\n\\n\u30d5\u30e9\u30c3\u30c8\u306f\u69cb\u9020\u306b\u3088\u3063\u3066\u3001npm v2 \u306b\u3088\u308b\u30cd\u30b9\u30c8\u3055\u308c\u305f `node_modules` \u3067\u306e\u3001\u30d1\u30b9\u540d\u304c\u9577\u304f\u306a\u308a\u3059\u304e\u308b\u554f\u984c\u3092\u89e3\u6c7a\u3057\u3001\u3055\u3089\u306b npm v3,4,5,6 \u3084 Yarn v1 \u304c\u751f\u6210\u3059\u308b\u30d5\u30e9\u30c3\u30c8\u306a `node_modules` \u3068\u306f\u9055\u3044\u3001\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u305d\u308c\u305e\u308c\u72ec\u7acb\u3055\u305b\u3066\u3044\u307e\u3059\u3002\\n\\n\u4eca\u5ea6\u306f\u672c\u7269\u306e `express` \u306e\u4e2d\u8eab\u3092\u898b\u3066\u307f\u307e\u3057\u3087\u3046\u3002\\n\\n```text\\n  \u25be express\\n    \u25b8 lib\\n      History.md\\n      index.js\\n      LICENSE\\n      package.json\\n      Readme.md\\n```\\n\\n\u3053\u308c\u306f\u9a19\u3055\u308c\u3066\u3044\u308b\u3093\u3067\u3057\u3087\u3046\u304b\uff1f `node_modules` \u306f\u3084\u306f\u308a\u3042\u308a\u307e\u305b\u3093\uff01 pnpm \u306e `node_modules` \u306b\u5bfe\u3059\u308b\u7b2c\u4e8c\u306e\u4ed5\u639b\u3051\u306f\u3001\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u4f9d\u5b58\u306f\u3001\u305d\u308c\u81ea\u8eab\u3068\u540c\u3058\u968e\u5c64\u306b\u7f6e\u304b\u308c\u3066\u3044\u308b\u70b9\u306b\u3042\u308a\u307e\u3059\u3002 `express` \u306e\u4f9d\u5b58\u306f `.pnpm/express@4.17.1/node_modules/express/node_modules/` \u3067\u306f\u306a\u304f [.pnpm/express@4.17.1/node_modules/](https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules/.pnpm/express@4.17.1/node_modules) \u306b\u3042\u308a\u307e\u3059\u3002\\n\\n```text\\n\u25be node_modules\\n  \u25be .pnpm\\n    \u25b8 accepts@1.3.5\\n    \u25b8 array-flatten@1.1.1\\n    ...\\n    \u25be express@4.16.3\\n      \u25be node_modules\\n        \u25b8 accepts\\n        \u25b8 array-flatten\\n        \u25b8 body-parser\\n        \u25b8 content-disposition\\n        ...\\n        \u25b8 etag\\n        \u25be express\\n          \u25b8 lib\\n            History.md\\n            index.js\\n            LICENSE\\n            package.json\\n            Readme.md\\n```\\n\\n`express` \u306e\u4f9d\u5b58\u306e\u3059\u3079\u3066\u306f\u30b7\u30f3\u30dc\u30ea\u30c3\u30af\u30ea\u30f3\u30af\u3067\u3042\u308a\u3001\u305d\u308c\u3089\u306f `node_modules/.pnpm/` \u5185\u306e\u9069\u5207\u306a\u5834\u6240\u3078\u3068\u30ea\u30f3\u30af\u3055\u308c\u3066\u3044\u307e\u3059\u3002 `express` \u306e\u4f9d\u5b58\u306f1\u3064\u4e0a\u306e\u968e\u5c64\u306b\u7f6e\u304f\u3053\u3068\u3067\u3001\u5faa\u74b0\u3057\u305f\u30b7\u30f3\u30dc\u30ea\u30c3\u30af\u30ea\u30f3\u30af\u306b\u306a\u308b\u3053\u3068\u3092\u56de\u907f\u3057\u3066\u3044\u307e\u3059\u3002\\n\\n\u898b\u3066\u5206\u304b\u308b\u901a\u308a\u3001pnpm \u306e `node_modules` \u306e\u69cb\u9020\u306f\u6700\u521d\u306f\u73cd\u3057\u304f\u601d\u3048\u307e\u3057\u305f\u304c\u3001\\n\\n1. \u305d\u306e\u69cb\u9020\u306f\u5b8c\u5168\u306b Node.js \u4e92\u63db\u306a\u3082\u306e\u3067\u3042\u308a\u3001\\n2. \u30d1\u30c3\u30b1\u30fc\u30b8\u306f\u305d\u306e\u4f9d\u5b58\u3068\u3068\u3082\u306b\u9069\u5207\u306b\u30b0\u30eb\u30fc\u30d7\u5316\u3055\u308c\u3044\u307e\u3059\u3002\\n\\npeer dependency \u304c\u3042\u308b\u5834\u5408\u306f\u3001\u69cb\u9020\u306f [\u3082\u3046\u5c11\u3057\u8907\u96d1](/how-peers-are-resolved) \u306b\u306f\u306a\u308a\u307e\u3059\u304c\u3001\u305d\u308c\u3067\u3082\u8003\u3048\u65b9\u306f\u540c\u3058\u3067\u3059\uff1a\u30d5\u30e9\u30c3\u30c8\u306a\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u69cb\u9020\u3092\u5229\u7528\u3057\u3066\u3001\u30b7\u30f3\u30dc\u30ea\u30c3\u30af\u30ea\u30f3\u30af\u306b\u3088\u308a\u30cd\u30b9\u30c8\u3055\u308c\u305f\u69cb\u9020\u3092\u751f\u6210\u3057\u307e\u3059\u3002"}]}')}}]);