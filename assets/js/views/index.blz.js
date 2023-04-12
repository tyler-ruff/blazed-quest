/*
    Blazed Fire for HTML5 Framework Example
    > Views in the "Index" namespace
*/

function build_routes(page){
    let data = {};
    switch(page){
        case 'home':
        default:
            data = {
                pageNum: 0,
                content: home()
            };
            break;
        }
    return data;
}

function home(){
    return `
        <section id="intro">
            <div class="jumbotron masthead">
                <div class="container">
                    <div class="row">
                    <div class="span12">
                        <div class="camera_wrap camera_black_skin" id="camera_wrap_2">
                        <div data-thumb="assets/img/slides/slideshow/img1.png" data-src="assets/img/slides/slideshow/img1.png">
                            <div class="camera_caption fadeFromBottom">
                            <h2>Blazed One</h2>
                            <div class="hidden-phone">
                                <p>
                                  The New Free Speech Social Network: <a target="_blank" href="https://blz.one/">Check it out</a>.
                                </p>
                            </div>
                            </div>
                        </div>
                        <div data-thumb="assets/img/slides/slideshow/img2.png" data-src="assets/img/slides/slideshow/img2.png">
                            <div class="camera_caption fadeFromBottom">
                            <h2>Ruff Management</h2>
                            <div class="hidden-phone">
                                <p>
                                  Equity management firm based out of New Jersey: <a target="_blank" href="https://ruff-manage.com/">Check it out</a>.
                                </p>
                            </div>
                            </div>
                        </div>
                        <div data-thumb="assets/img/slides/slideshow/img3.png" data-src="assets/img/slides/slideshow/img3.png">
                            <div class="camera_caption fadeFromBottom">
                            <h2>Blazed City</h2>
                            <div class="hidden-phone">
                                <p>
                                  Discover the Blazed Virtual City: <a target="_blank" href="https://blazed.city/">Check it out</a>.
                                </p>
                            </div>
                            </div>
                        </div>
                        <div data-thumb="assets/img/slides/slideshow/img4.png" data-src="assets/img/slides/slideshow/img4.png">
                            <div class="camera_caption fadeFromBottom">
                            <h2>Beez Marketing</h2>
                            <div class="hidden-phone">
                                <p>
                                  Beez has amazing solutions to increase brand exposure: <a target="_blank" href="https://beez.top/">Check it out</a>.
                                </p>
                            </div>
                            </div>
                        </div>
                        </div>
                        <!-- #camera_wrap_1 -->

                    </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
        <div class="row">
          <div class="span12">
            <div class="tagline">
              <div class="row">
                <div class="span6">
                  <div class="tagline_text">
                    <h2>Blazed will turn your <span class="text-warning">Dream</span> into a <span class="text-success">Reality</span></h2>
                    <div class="tag_list">
                      <ul>
                        <li><span><i class="icon-fire"></i> Blazing Fast Turnover</span></li>
                        <li><span><i class="icon-gift"></i> Amazingly Abundant ROI</span></li>
                        <li><span><i class="icon-plane"></i> Agile, at its <b>best</b>.</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
    
                <div class="span6">
                  <div class="btn-toolbar cta">
                    <a class="btn btn-large btn-danger" href="https://blazed.quest/company.html"><i class="m-icon-big-swapright m-icon-white"></i> Learn More</a>
                    <a class="btn btn-large btn-success" href="https://blazed.software/"><i class="m-icon-big-swapdown m-icon-white"></i> Download Software</a>
                  </div>
                </div>
    
    
              </div>
            </div>
          </div>
    
        </div>
      </section>
    
      <!-- end tagline -->
    
      <section id="maincontent">
        <div class="container">
    
          <div class="row">
            <div class="span3">
              <h3 class="heading-success">
                <span class="btn btn-large btn-success">
                  <i class="m-icon-big-swapright m-icon-white"></i>
                </span>&nbsp;&nbsp;Main Objectives
              </h3>
              <p>
                We never embark upon a business venture without a plan. In fact, our ventures are most often meticulously planned.
              </p>
            </div>
            <div class="span3">
              <div class="well well-primary box">
                <img src="assets/img/icons/box-1-white.png" alt="" />
                <h3>Responsive Design</h3>
                <p>
                  We design websites for desktop, tablet, and mobile. These responsive designs are created to ensure the highest possible user experience (UX).
                </p>
              </div>
            </div>
            <div class="span3">
              <div class="well well-success box">
                <img src="assets/img/icons/box-2-white.png" alt="" />
                <h3>Zero Errors</h3>
                <p>
                  We write code that works. We work hard to fix our bugs and ensure maximum system stability. We pride ourselves in our code quality.
                </p>
              </div>
            </div>
            <div class="span3">
              <div class="well well-warning box">
                <img src="assets/img/icons/box-3-white.png" alt="" />
                <h3>Good Documentation</h3>
                <p>
                  We make sure to keep comprehensive notes on all related topics and we publish those so that prospective contributors may benefit.
                </p>
              </div>
            </div>
          </div>
    
        </div>
      </section>
    
    
      <section id="bottom">
        <div class="container">
    
          <!-- divider -->
          <div class="row">
            <div class="span12">
              <div class="divider"></div>
            </div>
          </div>
          <!-- end divider -->
    
    
          <div class="row">
            <div class="span12">
              <h3>
                <i class="m-icon-big-swapdown m-icon-black"></i> Popular Websites 
              </h3>
    
              <div id="latest-work" class="carousel btleft">
                <div class="carousel-wrapper">
    
                  <ul class="portfolio-home da-thumbs">
                    <li>
                      <div class="thumbnail">
                        <div class="image-wrapp">
                          <img src="https://blazed.sirv.com/ibis/blazed-systems.jpg?w=300&h=300" alt="Blazed Labs" title="Blazed Labs" />
                          <article class="da-animate da-slideFromRight" style="display: block; padding-top:100px;">
                            <a class="link_post" target="_blank" title="Visit Website" href="https://blazedlabs.com/">
                              <svg width="30" fill="#ffffff" height="30" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z"/></svg>
                            </a>
                            <span><a class="zoom" data-pretty="prettyPhoto" href="https://blazed.quest/portfolio.html?p=view&id=12"><img src="assets/img/icons/zoom_icon.png" alt="Learn more about this project" title="Learn more about this project" /></a></span>
                          </article>
                        </div>
                        <div class="caption">
                          <h5>
                            Blazed Labs
                          </h5>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="thumbnail">
                        <div class="image-wrapp">
                          <img src="https://blazed.sirv.com/ibis/blazed-space.jpg?w=300&h=300" alt="Blazed Watch" title="Blazed Watch" />
                          <article class="da-animate da-slideFromRight" style="display: block; padding-top:100px;">
                            <a class="link_post" target="_blank" title="Visit Website" href="https://blazed.watch/">
                              <svg width="30" fill="#ffffff" height="30" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z"/></svg>
                            </a>
                            <span><a class="zoom" data-pretty="prettyPhoto" href="https://blazed.quest/portfolio.html?p=view&id=6"><img src="assets/img/icons/zoom_icon.png" alt="Learn more about this project" title="Learn more about this project" /></a></span>
                          </article>
                        </div>
                        <div class="caption">
                          <h5>
                            Blazed Watch
                          </h5>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="thumbnail">
                        <div class="image-wrapp">
                          <img src="https://blazed.sirv.com/ibis/blazed-quest.jpg?w=300&h=300" alt="Blazed Software" title="Blazed Software" />
                          <article class="da-animate da-slideFromRight" style="display: block; padding-top:100px;">
                            <a class="link_post" target="_blank" title="Visit Website" href="https://blazed.software/">
                              <svg width="30" fill="#ffffff" height="30" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z"/></svg>
                            </a>
                            <span><a class="zoom" data-pretty="prettyPhoto" href="https://blazed.quest/portfolio.html?p=view&id=7"><img src="assets/img/icons/zoom_icon.png" alt="Learn more about this project" title="Learn more about this project" /></a></span>
                          </article>
                        </div>
                        <div class="caption">
                          <h5>
                            Blazed Software
                          </h5>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="thumbnail">
                        <div class="image-wrapp">
                          <img src="https://blazed.sirv.com/ibis/blazed-world.jpg?w=300&h=300" alt="Blazed World" title="Blazed World" />
                          <article class="da-animate da-slideFromRight" style="display: block; padding-top:100px;">
                            <a class="link_post" target="_blank" title="Visit Website" href="https://blazed.world/">
                              <svg width="30" fill="#ffffff" height="30" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z"/></svg>
                            </a>
                            <span><a class="zoom" data-pretty="prettyPhoto" href="https://blazed.quest/portfolio.html?p=view&id=6"><img src="assets/img/icons/zoom_icon.png" alt="Learn more about this project" title="Learn more about this project" /></a></span>
                          </article>
                        </div>
                        <div class="caption">
                          <h5>
                            Blazed World
                          </h5>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="thumbnail">
                        <div class="image-wrapp">
                          <img src="https://blazed.sirv.com/ibis/blz-one.jpg?w=300&h=300" alt="Blazed One" title="Blazed One" />
                          <article class="da-animate da-slideFromRight" style="display: block; padding-top:100px;">
                            <a class="link_post" target="_blank" title="Visit Website" href="https://blz.one/">
                              <svg width="30" fill="#ffffff" height="30" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z"/></svg>
                            </a>
                            <span><a class="zoom" data-pretty="prettyPhoto" href="https://blazed.quest/portfolio.html?p=view&id=1"><img src="assets/img/icons/zoom_icon.png" alt="Learn more about this project" title="Learn more about this project" /></a></span>
                          </article>
                        </div>
                        <div class="caption">
                          <h5>
                            Blazed One
                          </h5>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="thumbnail">
                        <div class="image-wrapp">
                          <img src="https://blazed.sirv.com/ibis/blazed-games.jpg?w=300&h=300" alt="Blazed One" title="Blazed One" />
                          <article class="da-animate da-slideFromRight" style="display: block; padding-top:100px;">
                            <a class="link_post" target="_blank" title="Visit Website" href="https://blazed.games/">
                              <svg width="30" fill="#ffffff" height="30" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z"/></svg>
                            </a>
                            <span><a class="zoom" data-pretty="prettyPhoto" href="https://blazed.quest/portfolio.html?p=view&id=1"><img src="assets/img/icons/zoom_icon.png" alt="Learn more about this project" title="Learn more about this project" /></a></span>
                          </article>
                        </div>
                        <div class="caption">
                          <h5>
                            Concrete Games
                          </h5>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="thumbnail">
                        <div class="image-wrapp">
                          <img src="https://blazed.sirv.com/ibis/blazed-xyz.jpg?w=300&h=300" alt="Blazed Publishing" title="Blazed Publishing" />
                          <article class="da-animate da-slideFromRight" style="display: block; padding-top:100px;">
                            <a class="link_post" target="_blank" title="Visit Website" href="https://blazed.xyz/">
                              <svg width="30" fill="#ffffff" height="30" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z"/></svg>
                            </a>
                            <span><a class="zoom" data-pretty="prettyPhoto" href="https://blazed.quest/portfolio.html?p=view&id=2"><img src="assets/img/icons/zoom_icon.png" alt="Learn more about this project" title="Learn more about this project" /></a></span>
                          </article>
                        </div>
                        <div class="caption">
                          <h5>
                            Blazed Publishing
                          </h5>
                        </div>
                      </div>
                    </li>
                    <li>
                    <div class="thumbnail">
                      <div class="image-wrapp">
                        <img src="https://blazed.sirv.com/ruff-manage.com/ruff-lion.png?w=300&h=300" alt="Ruff Management" title="Ruff Management" />
                        <article class="da-animate da-slideFromRight" style="display: block; padding-top:100px;">
                          <a class="link_post" target="_blank" title="Visit Website" href="https://ruff-manage.com/">
                            <svg width="30" fill="#ffffff" height="30" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z"/></svg>
                          </a>
                          <span><a class="zoom" data-pretty="prettyPhoto" href="https://blazed.quest/portfolio.html?p=view&id=15"><img src="assets/img/icons/zoom_icon.png" alt="Learn more about this project" title="Learn more about this project" /></a></span>
                        </article>
                      </div>
                      <div class="caption">
                        <h5>
                        Ruff Management
                        </h5>
                      </div>
                    </div>
                  </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
}
