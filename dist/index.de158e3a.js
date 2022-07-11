const $siteList = $(".siteList");
const $lastLi = $siteList.find("li.last");
const $addSite = $(".addSite");
const xObject = JSON.parse(localStorage.getItem("x"));
let hashMap = xObject || [
    {
        logo: "M",
        url: "https://developer.mozilla.org/zh-CN/"
    },
    {
        logo: "J",
        url: "https://zh.javascript.info/"
    },
    {
        logo: "W",
        url: "https://wangdoc.com/javascript/"
    },
    {
        logo: "R",
        url: "http://ruanyifeng.com/blog/"
    },
    {
        logo: "J",
        url: "https://juejin.cn/frontend"
    },
    {
        logo: "V",
        url: "https://cn.vuejs.org/"
    }, 
];
const simplifyUrl = (url)=>{
    return url.replace("https://", "").replace("http://", "").replace("www.", "").replace(/\/.*/, "");
};
const render = ()=>{
    $siteList.find("li:not(.last)").remove();
    localStorage.setItem("x", JSON.stringify(hashMap));
    hashMap.forEach((node, index)=>{
        const $li = $(`<li>
                <div class="site">
                    <div class="logo">${node.logo}</div>
                    <div class="link">${simplifyUrl(node.url)}</div>
                    <div class="close">
                        <svg class="icon">
                            <use xlink:href="#icon-close"></use>
                        </svg>
                    </div>
                </div>
            </li>`).insertBefore($lastLi);
        $li.on("click", ()=>{
            window.open(node.url);
        });
        $li.on("click", ".close", (e)=>{
            e.stopPropagation();
            hashMap.splice(index, 1);
            render();
        });
    });
};
render();
$addSite.on("click", ()=>{
    let newUrl = window.prompt("\u8BF7\u8F93\u5165\u60A8\u8981\u6DFB\u52A0\u7684\u7F51\u5740");
    if (newUrl.indexOf("http") !== 0) newUrl = "https://" + newUrl;
    hashMap.push({
        logo: simplifyUrl(newUrl)[0].toUpperCase(),
        url: newUrl
    });
    render();
});
$(document).on("keypress", (e)=>{
    const { key  } = e;
    for(let i = 0; i < hashMap.length; i++)if (hashMap[i].logo.toLowerCase() === key) window.open(hashMap[i].url);
});

//# sourceMappingURL=index.de158e3a.js.map
