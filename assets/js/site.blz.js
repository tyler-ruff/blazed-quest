const siteConfig = {
    siteTitle: "Blazed Quest",
    website: 'www.blazed.quest', 
    icon: 'https://blazed.sirv.com/logo/Beaker-Dark.png', 
    twitter: 'BlazedLabs',
    fbAppId: '503698127531557',
    theme: '000000',
    company: 'Blazed Labs LLC',
    motto: 'We turn Dreams into Reality.',
    nav: [{
        text: "Home",
        url: "https://blazed.quest/",
        theme: "success",
        icon: "home"
    },
    {
        text: "Company",
        theme: "danger",
        icon: "leaf",
        url: "https://blazed.quest/company.html",
        submenu: [
            {
                text: "About Us",
                url: "https://blazed.quest/company.html?p=about",
            },            
            {
                text: "Services",
                url: "https://blazed.quest/company.html?p=services",
            },
            {
                text: "F.A.Q.",
                url: "https://blazed.quest/company.html?p=faq",
            },
            {
                text: "Service Agreements",
                url: "https://blazed.quest/company.html?p=sa",
            },
        ]
    },
    {
        text: "Projects",
        theme: "warning",
        icon: "camera",
        url: "https://blazed.quest/portfolio.html?p=projects"
    }, 
    {
        text: "Blog",
        theme: "info",
        icon: "bullhorn",
        url: "https://blazed.xyz/",
        submenu: [
            {
                text: "Blazed Publishing",
                url: "https://blazed.xyz/",
            },
            {
                text: "Blazed Development",
                url: "https://blazed.dev/",
            },
            {
                text: "Munch Magazine",
                url: "https://munch-mag.com//",
            },
            {
                text: "Ixis",
                url: "https://ixis.space/",
            }
        ]
    },
    {
        text: "Solutions",
        url: "https://blazed.space/",
        theme: "primary",
        icon: "star"
    },
    {
        text: "Contact",
        theme: "inverse",
        icon: "envelope",
        url: "https://blazed.contact/",
    }],
    footer: [{
        text: "Company",
    },
    {
        text: "Blazed Labs",
        url: "https://blazedlabs.com/"
    },
    {
        text: "Corporate",
        url: "https://blazed.company/"
    },
    {
        text: "Services",
    },
    {
        text: "Blazed Publishing",
        url: "https://blazed.xyz/"
    },
    {
        text: "Blazed Telecom",
        url: "https://blazed.tel/"
    },
    {
        text: "Blazed Systems",
        url: "https://blazed.systems/"
    },]
};
const firebaseConfig = {
    apiKey: "AIzaSyDJNpSgZqhn1_ipvk54wsU11UIE1BoYIfc",
    authDomain: "blz-one-9e383.firebaseapp.com",
    databaseURL: "https://blz-one-9e383-default-rtdb.firebaseio.com",
    projectId: "blz-one-9e383",
    storageBucket: "blz-one-9e383.appspot.com",
    messagingSenderId: "817319905653",
    appId: "1:817319905653:web:8ee0f28da3fc5e208bab3c",
    measurementId: "G-1194VR7QTN"
};

function build_menu(config, page){
    const header = f('header');
    header.id = "Top";
    const innerWrapper = f('div');
    innerWrapper.classList.add('navbar', 'navbar-fixed-top');
    const innerMoreWrapper = f('div');
    innerMoreWrapper.classList.add('navbar-inner');
    const inmostWrapper = f('div');
    inmostWrapper.classList.add('container');
    const logoLink = f('a');
    logoLink.classList.add('brand', 'logo');
    logoLink.title = config.siteTitle;
    logoLink.href = 'https://' + config.website;
    const logo = f('img');
    logo.src = config.icon + "?w=40&h=40";
    logo.width = "50";
    logo.height = "50";
    logoLink.appendChild(logo);
    inmostWrapper.appendChild(logoLink);
    const menuWrapper = f('div');
    const menu = f('nav');
    const menuList = f('ul');
    menuList.classList.add('nav', 'topnav');
    for(let i = 0; i < config.menu.length; i++){
        const listElement = f('li');
        const dropdownList = f('ul');
        if("submenu" in config.menu[i]){
            listElement.classList.add('dropdown');
            dropdownList.classList.add('dropdown-menu');
            for(let k = 0; k < config.menu[i].submenu.length; k++){
                const dropdownElement = f('li');
                const dropdownLink = f('a');
                dropdownLink.href = config.menu[i].submenu[k].url;
                dropdownLink.innerHTML = config.menu[i].submenu[k].text;
                dropdownElement.appendChild(dropdownLink);
                dropdownList.appendChild(dropdownElement);
            }
        }
        listElement.classList.add(config.menu[i].theme);
        const menuItem = f('a');
        menuItem.classList.add('text-white', 'transition', 'hover:text-white/75', 'hover:underline');
        if(i === page){
            menuItem.classList.add('active');
        }
        menuItem.href = config.menu[i].url;
        
        const menuIcon = f('i');
        menuIcon.classList.add('icon-' + config.menu[i].icon, 'icon-white');
        menuItem.appendChild(menuIcon);
        menuItem.innerHTML += config.menu[i].text;
        listElement.appendChild(menuItem);
        if("submenu" in config.menu[i]){
            listElement.appendChild(dropdownList);
        }
        menuList.appendChild(listElement);
    }
    menu.appendChild(menuList);
    menuWrapper.appendChild(menu);
    inmostWrapper.appendChild(menuWrapper);
    innerMoreWrapper.appendChild(inmostWrapper);
    innerWrapper.appendChild(innerMoreWrapper);
    header.appendChild(innerWrapper);
    return header;
}

function build_mobile_menu(config, page){
    //TODO: BUILD MOBILE MENU
}

function build_header(config, page){
    const blz_header = f('blz-header');
//    const mobile_menu = build_mobile_menu(config, page);
    const menu = build_menu(config, page);
//    blz_header.appendChild(mobile_menu);
    blz_header.appendChild(menu);
    document.body.appendChild(blz_header);
}

function build_content(config, content){
    const main = f('main');
    main.classList.add('content');
    main.id = "main-content";
    const article = f('article');
    article.classList.add('content-inner');
    article.innerHTML = content;
    main.appendChild(article);
    document.body.appendChild(main);
}

function build_footer(config){
    const blz_footer = f('blz-footer');
    const footer = f('footer');
    footer.classList.add('footer');
    const innerWrapper = f('div');
    innerWrapper.classList.add('container');
    const topRow = f('div');
    topRow.classList.add('row');
    const topRowAbout = f('div');
    topRowAbout.classList.add('span4');
    topRowAboutWidget = f('div');
    topRowAboutWidget.classList.add('widget');
    const aboutUsTitle = f('h4');
    aboutUsTitle.innerHTML = "About Us";
    const companyAddress = f('address');
    companyAddress.innerHTML = `
        <b>Blazed Labs LLC.</b><br />
        1650 Simpson Ave <br />
        Ocean City, NJ 08226 <br />
        <abbr title="Telephone">Tel:</abbr>
        <a href="tel:+18557882348">+1 (855) 788-2348</a>
    `;
    topRowAboutWidget.appendChild(aboutUsTitle);
    topRowAboutWidget.appendChild(companyAddress);
    const contactTitle = f('strong');
    contactTitle.innerHTML = "Contact us";
    const breakAfterTitle = f('br');
    const siteEmail = f('a');
    siteEmail.href = "mailto:hello@blazed.space";
    siteEmail.innerHTML = "hello@blazed.space";
    topRowAboutWidget.appendChild(contactTitle);
    topRowAboutWidget.appendChild(breakAfterTitle);
    topRowAboutWidget.appendChild(siteEmail);
    topRowAbout.appendChild(topRowAboutWidget);
    topRow.appendChild(topRowAbout);
    const topRowBrowse = f('div');
    topRowBrowse.classList.add('span4');
    const topRowBrowseWidget = f('div');
    topRowBrowseWidget.classList.add('widget');
    const browsePagesTitle = f('h4');
    browsePagesTitle.innerHTML = "Browse Pages";
    const pagesList = f('ul');
    pagesList.classList.add('nav', 'nav-list', 'regular');
    for(let i = 0; i < config.footer.length; i++){
        const listItem = f('li');
        if(config.footer[i].url === undefined){
            listItem.classList.add('nav-header');
            listItem.innerHTML = config.footer[i].text;
        } else {
            const linkItem = f('a');
            linkItem.href = config.footer[i].url;
            linkItem.innerHTML = config.footer[i].text;
            listItem.appendChild(linkItem);
        }
        pagesList.appendChild(listItem);
    }
    topRowBrowseWidget.appendChild(browsePagesTitle);
    topRowBrowseWidget.appendChild(pagesList);5
    topRowBrowse.appendChild(topRowBrowseWidget);
    topRow.appendChild(topRowBrowse);
    const topRowEmailUpdates = f('div');
    topRowEmailUpdates.classList.add('span4');
    const topRowEmailUpdatesWidget = f('div');
    topRowEmailUpdatesWidget.classList.add('widget');
    const emailUpdatesTitle = f('h4');
    emailUpdatesTitle.innerHTML = "Get Email Updates";
    const emailUpdatesForm = f('div');
    const emailUpdatesFieldset = f('fieldset');
    const emailUpdatesDesc = f('p');
    emailUpdatesDesc.innerHTML = "Sign up for our newsletter and receive development news, status updates, and announcements about new and upcoming projects.";
    const emailUpdatesInner = f('div');
    emailUpdatesInner.classList.add('input-prepend', 'input-append');
    const subscribeButton = f('a');
    subscribeButton.href = "https://blazed.quest/company.html?p=subscribe";
    subscribeButton.classList.add('btn', 'btn-inverse');
    subscribeButton.innerHTML = "Subscribe!";
    const socialList = f('ul');
    socialList.classList.add('social_small');
    const faceBookItem = f('li');
    faceBookItem.classList.add('facebook', 'first');
    const facebookLink = f('a');
    facebookLink.href = "https://www.facebook.com/blazedlabs";
    facebookLink.target = "_blank";
    facebookLink.title = "Blazed Labs Facebook Page";
    facebookLink.innerHTML = "Facebook";
    faceBookItem.appendChild(facebookLink);
    socialList.appendChild(faceBookItem);
    const twitterItem = f('li');
    twitterItem.classList.add('twitt');
    const twitterLink = f('a');
    twitterLink.href = "https://twitter.com/BlazedLabs";
    twitterLink.target = "_blank";
    twitterLink.title = "Blazed Labs Twitter Profile";
    twitterLink.innerHTML = "Twitter";
    twitterItem.appendChild(twitterLink);
    socialList.appendChild(twitterItem);
    emailUpdatesInner.appendChild(subscribeButton);
    emailUpdatesFieldset.appendChild(emailUpdatesDesc);
    emailUpdatesFieldset.appendChild(emailUpdatesInner);
    emailUpdatesForm.appendChild(emailUpdatesFieldset)
    topRowEmailUpdatesWidget.appendChild(emailUpdatesTitle);
    topRowEmailUpdatesWidget.appendChild(emailUpdatesForm);
    topRowEmailUpdatesWidget.appendChild(socialList);
    topRowEmailUpdates.appendChild(topRowEmailUpdatesWidget);
    topRow.appendChild(topRowEmailUpdates);
    innerWrapper.appendChild(topRow);
    const veryBottom = f('div');
    veryBottom.classList.add('verybottom');
    const veryBottomInner = f('div');
    veryBottomInner.classList.add('container');
    const veryBottomInnerRow = f('div');
    veryBottomInnerRow.classList.add('row');
    const copyrightWrapper = f('div');
    copyrightWrapper.classList.add('span6');
    const copyRight = f('p');
    const year = new Date().getFullYear();
    copyRight.innerHTML = "&copy;" + year + " Blazed Labs LLC, Ruff Management Inc. All Rights Reserved.";
    copyrightWrapper.appendChild(copyRight);
    veryBottomInnerRow.appendChild(copyrightWrapper);
    const themeAttrWrapper = f('div');
    themeAttrWrapper.classList.add('span6');
    const alignRight = f('div');
    alignRight.classList.add('pull-right');
    const credits = f('div');
    credits.classList.add('credits');
    credits.innerHTML = `Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>`;
    alignRight.appendChild(credits);
    themeAttrWrapper.appendChild(alignRight);
    veryBottomInnerRow.appendChild(themeAttrWrapper);
    veryBottomInner.appendChild(veryBottomInnerRow);
    veryBottom.appendChild(veryBottomInner);
    footer.appendChild(innerWrapper);
    footer.appendChild(veryBottom);
    blz_footer.appendChild(footer);
    document.body.appendChild(blz_footer);
    //document.querySelector('.footer').innerHTML = blz_footer.innerHTML;
}

