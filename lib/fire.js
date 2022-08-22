/*
    Blazed Fire Javascript Framework
    https://github.com/blazed-space/fire
*/

function f(tag){
    return document.createElement(tag);
}

/*
    @Source = https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
*/
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function build_url(config, controller, page){
    let url = "";
    if(page === "" || page === "home" || page === null){
        url = "https://" + config.website + `/${controller}.html`;
    } else {
        url = "https://" + config.website + `/${controller}.html?p=${page}`;
    }
    return url;
}

function getPageQueryStrings(){
    return new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
}

function getPage(){
    const params = getPageQueryStrings();
    let page = params.p;
    if(page === null || page === ""){
        page = "home";
    }
    return page;
}

class Fire {
    constructor(config){
        this.config = config;
        this.title = config.title;
        this.icon = config.icon;
        this.desc = config.desc;
        this.website = config.website;
        this.theme = config.theme;
        this.twitter = config.twitter;
        this.fbAppId = config.fbAppId;
        this.twitter = config.twitter;
    }
}

class BlzHeader extends HTMLDivElement{
    constructor(){
        super();
    }
}

class BlzFooter extends HTMLDivElement{
    constructor(){
        super();
    }
}

function build_config(siteConfig, desc, page){
    return {
        title: `${siteConfig.siteTitle} -- ` + capitalize(page),
        desc: desc,
        page: page,
        routes: siteConfig.routes,
        siteTitle: siteConfig.siteTitle,
        website: siteConfig.website, 
        icon: siteConfig.icon, 
        twitter: siteConfig.twitter,
        fbAppId: siteConfig.fbAppId,
        theme: siteConfig.theme,
        company: siteConfig.company,
        motto: siteConfig.motto,
        footer: siteConfig.footer,
        menu: siteConfig.nav
    };
}

function create_app(config, pageData){
    const url = window.location.href;
    let viewImports = "";
    document.head.innerHTML += `
        <title>
            ${config.title}
        </title>
        ${viewImports}
        <link rel="icon" sizes="192x192" href="${config.icon}?w=192&h=192">
        <link rel="apple-touch-icon" href="${config.icon}?w=180&h=180">
        <link rel="apple-touch-startup-image" href="${config.icon}?w=180&h=180">
        <link rel="license" href="https://${config.website}/LICENSE.txt">
        <link rel="manifest" href="https://${config.website}/manifest.json">
        <link rel="author" href="https://${config.website}/humans.txt">
        <meta name="msapplication-config" content="https://${config.website}/browserconfig.xml">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="theme-color" content="#${config.theme}">
        <meta name="application-name" content="${config.title}">
        <meta name="apple-mobile-web-app-title" content="${config.title}">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="black">
        <meta name="google" content="nositelinkssearchbox">
        <meta name="robots" content="index,follow">
        <meta name="googlebot" content="index,follow">
        <meta name="twitter:card" content="summary">
        <meta name="twitter:site" content="@${config.twitter}">
        <meta name="twitter:url" content="${url}">
        <meta name="twitter:title" content="${config.title}">
        <meta name="twitter:description" content="${config.desc}">
        <meta name="twitter:image" content="${config.icon}?w=500&h=500">
        <meta name="twitter:image:alt" content="${config.desc}">
        <meta property="fb:app_id" content="${config.fbAppId}">
        <meta property="og:url" content="${url}">
        <meta property="og:type" content="website">
        <meta property="og:title" content="${config.title}">
        <meta property="og:image" content="${config.icon}?w=500&h=500">
        <meta property="og:image:alt" content="${config.desc}">
        <meta property="og:description" content="${config.desc}">
        <meta property="og:site_name" content="${config.title}">
        <meta property="og:locale" content="en_US">
        <meta property="article:author" content="${config.company}">
        <meta itemprop="name" content="${config.title}">
        <meta itemprop="description" content="${config.desc}">
        <meta itemprop="image" content="${config.icon}?w=180&h=180">
    `;
    build_header(config, pageData.pageNum);
    build_content(config, pageData.content);
    build_footer(config);
}


addEventListener('DOMContentLoaded', (event) => function(){
    //Loaded event
    customElements.define('blz-header', BlzHeader, { extends: 'div' });
    customElements.define('blz-footer', BlzFooter, { extends: 'div' });
});