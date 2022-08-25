/*
    Blazed Fire for HTML5 Framework Example
    > Views in the "Index" namespace
*/

function build_routes(page){
    let data = {};
    switch(page){
        case 'projects':
          data = {
              pageNum: 16,
              content: projects()
          };
          break;
        case 'images':
            data = {
                pageNum: 15,
                content: images()
            };
            break;
        case 'software':
            data = {
                pageNum: 14,
                content: software()
            };
            break;
        case 'websites':
                data = {
                    pageNum: 13,
                    content: websites()
                };
                break;
        case 'home':
        default:
            data = {
                pageNum: 12,
                content: portfolio()
            };
            break;
        }
    return data;
}

function portfolio(){
    return `
     <section id="subintro">
        <div class="jumbotron subhead" id="overview">
            <div class="container">
                <div class="row">
                <div class="span8">
                    <h3>
                      <i class="m-icon-big-swapright m-icon-white"></i> 
                      <span id="portfolio-title"></span>
                    </h3>
                    <p>Type: <span id="portfolio-type"></span></p>
                </div>
                <div class="span4">
                            <div class="input-append">
                                <form method="get" action="https://www.blazed.quest/search.html" class="form-search">
                                    <input required placeholder="Search Blazed Quest..." type="text" name="q" class="input-medium search-query">
                                    <button type="submit" class="btn btn-inverse">
                                        Search
                                    </button>
                                </form>
                            </div>
                        </div>
                </div>
            </div>
            </div>
        </section>

        <section id="maincontent">
            <div class="container">
            <div class="row">
                <div class="span4">
                <aside>
                    <div class="widget">
                      <h4 class="heading-success"><span class="btn btn-large btn-success"><i class="m-icon-big-swapdown m-icon-white"></i></span>&nbsp;&nbsp;Share</h4>
                      <div class="addthis_inline_share_toolbox"></div>
                    </div>
                    <div class="widget">
                    <h4 class="heading-success"><span class="btn btn-large btn-success"><i class="m-icon-big-swapdown m-icon-white"></i></span>&nbsp;&nbsp;Project detail</h4>
                    <ul class="project-detal">
                        <li><label>Version:</label> <span id="portfolio-version"></span></li>
                        <li><label>Website:</label> <span id="portfolio-website"></span></li>
                        <li><label>Repo:</label> <span id="portfolio-repo"></span></li>
                        <li><label>Author:</label> <span id="portfolio-author"></span></li>
                        <li><label>License:</label> <span id="portfolio-license"></span></li>
                    </ul>
                    </div>
                </aside>
                </div>
                <div class="span8">
                <article class="blog-post">
                    <div class="tooltip-demo headline">
                    <h4>Cu cum noster euismod appellantur</h4>
                    <span class="comment"><a href="#" data-rel="tooltip" data-placement="top" title="4 Comments">4 comments</a></span>
                    </div>
                    <div class="clearfix"></div>
                    <div class="well">
                    <a id="portfolio-img-link" href="#"><img src="https://blazed.sirv.com/blazedlabs.com/john-mcmahon-ljjcoULkxL8-unsplash.jpg" id="portfolio-img" alt="" /></a>
                    <h5>Description: </h5>
                    <p id="portfolio-desc"></p>
                    <a id="portfolio-download" class="btn btn-large btn-success">Download here</a>
                    </div>
                </article>
                <!-- end article full post -->
                <h4>Comments</h4>
                <div id="disqus_thread"></div>
                </div>
            </div>
            </div>
        </section>
    `;
}

function websites(){
    return `
      <section id="subintro">
        <div class="jumbotron subhead" id="overview">
          <div class="container">
            <div class="row">
              <div class="span8">
                <h3><i class="m-icon-big-swapright m-icon-white"></i> Website Portfolio</h3>
                <p>
                    Websites we've made for ourselves and for clients over the years.
                </p>
              </div>
              <div class="span4">
                <div class="input-append">
                    <form method="get" action="https://www.blazed.quest/search.html" class="form-search">
                        <input required placeholder="Search Blazed Quest..." type="text" name="q" class="input-medium search-query">
                        <button type="submit" class="btn btn-inverse">
                            Search
                        </button>
                    </form>
                </div>
            </div>

            </div>

          </div>
        </div>
      </section>
    
      <section id="maincontent">
        <div class="container">
          <div class="row-fluid">
            <div class="span12">
              <div class="btn-group filter-category">
                <a class="btn btn-success" href="#"><i class="icon-list icon-white"></i> Select category</a>
                <a class="btn btn-success dropdown-toggle" data-toggle="dropdown" href="#"><span class="caret"></span></a>
                <ul class="dropdown-menu filter">
                  <li class="all active"><a href="#"><i class="icon-picture"></i> All category</a></li>
                  <li class="web"><a href="#"><i class="icon-picture"></i> Web design</a></li>
                  <li class="brand"><a href="#"><i class="icon-picture"></i> Brand identity</a></li>
                  <li class="graphic"><a href="#"><i class="icon-picture"></i> Graphic design</a></li>
                  <li class="photo"><a href="#"><i class="icon-picture"></i> Photography</a></li>
                  <li class="ilustrator"><a href="#"><i class="icon-picture"></i> Ilustrator</a></li>
                </ul>
              </div>
              <div class="pagination pagination-right">
                <ul>
                  <li><a href="#">Prev</a></li>
                  <li><a href="#">1</a></li>
                  <li class="active"><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">4</a></li>
                  <li><a href="#">Next</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row">
            <ul class="portfolio-area da-thumbs">
              <li class="portfolio-item2" data-id="id-0" data-type="web">
                <div class="span3">
                  <div class="thumbnail">
                    <div class="image-wrapp">
                      <img src="assets/img/dummies/work1.jpg" alt="Portfolio name" title="" />
                      <article class="da-animate da-slideFromRight" style="display: block;">
                        <a class="link_post" href="portfolio-detail.html"><img src="assets/img/icons/link_post_icon.png" alt="" /></a>
                        <span><a class="zoom" data-pretty="prettyPhoto" href="assets/img/dummies/big1.jpg"><img src="assets/img/icons/zoom_icon.png" alt="" title="Portfolio name" /></a></span>
                      </article>
                    </div>
    
                    <div class="caption">
                      <h4><a href="#">Portfolio name</a></h4>
                      <p>Tota laboramus adversarium at sed, clita persius qui et, vis quot cibo deterruisset id. An fuisset eleifend eos, agam dicat an ius.</p>
                    </div>
                  </div>
                </div>
              </li>
              <li class="portfolio-item2" data-id="id-0" data-type="web">
                <div class="span3">
                  <div class="thumbnail">
                    <div class="image-wrapp">
                      <img src="assets/img/dummies/work2.jpg" alt="Portfolio name" title="" />
                      <article class="da-animate da-slideFromRight" style="display: block;">
                        <a class="link_post" href="portfolio-detail.html"><img src="assets/img/icons/link_post_icon.png" alt="" /></a>
                        <span><a class="zoom" data-pretty="prettyPhoto" href="assets/img/dummies/big1.jpg"><img src="assets/img/icons/zoom_icon.png" alt="" title="Portfolio name" /></a></span>
                      </article>
                    </div>
    
                    <div class="caption">
                      <h4><a href="#">Portfolio name</a></h4>
                      <p>Ex decore equidem detracto vis, nihil labores euripidis an sea. Nisl solet nonumes ne has, eos nostrum antiopam aliquando at no.</p>
                    </div>
                  </div>
                </div>
              </li>
              <li class="portfolio-item2" data-id="id-0" data-type="brand">
                <div class="span3">
                  <div class="thumbnail">
                    <div class="image-wrapp">
                      <img src="assets/img/dummies/work3.jpg" alt="Portfolio name" title="" />
                      <article class="da-animate da-slideFromRight" style="display: block;">
                        <a class="link_post" href="portfolio-detail.html"><img src="assets/img/icons/link_post_icon.png" alt="" /></a>
                        <span><a class="zoom" data-pretty="prettyPhoto" href="assets/img/dummies/big1.jpg"><img src="assets/img/icons/zoom_icon.png" alt="" title="Portfolio name" /></a></span>
                      </article>
                    </div>
    
                    <div class="caption">
                      <h4><a href="#">Portfolio name</a></h4>
                      <p>Ex decore equidem detracto vis, nihil labores euripidis an sea. Nisl solet nonumes ne has, eos nostrum antiopam aliquando at no.</p>
                    </div>
                  </div>
                </div>
              </li>
              <li class="portfolio-item2" data-id="id-0" data-type="photo">
                <div class="span3">
                  <div class="thumbnail">
                    <div class="image-wrapp">
                      <img src="assets/img/dummies/work4.jpg" alt="Portfolio name" title="" />
                      <article class="da-animate da-slideFromRight" style="display: block;">
                        <a class="link_post" href="portfolio-detail.html"><img src="assets/img/icons/link_post_icon.png" alt="" /></a>
                        <span><a class="zoom" data-pretty="prettyPhoto" href="assets/img/dummies/big1.jpg"><img src="assets/img/icons/zoom_icon.png" alt="" title="Portfolio name" /></a></span>
                      </article>
                    </div>
    
                    <div class="caption">
                      <h4><a href="#">Portfolio name</a></h4>
                      <p>Ex volutpat voluptatum vim. Mea no brute modo saepe vis at, sit te oblique recusabo ullamcorper. Mel aperiri constituto ad mel at.</p>
                    </div>
                  </div>
                </div>
              </li>
              <li class="portfolio-item2" data-id="id-0" data-type="graphic">
                <div class="span3">
                  <div class="thumbnail">
                    <div class="image-wrapp">
                      <img src="assets/img/dummies/work5.jpg" alt="Portfolio name" title="" />
                      <article class="da-animate da-slideFromRight" style="display: block;">
                        <a class="link_post" href="portfolio-detail.html"><img src="assets/img/icons/link_post_icon.png" alt="" /></a>
                        <span><a class="zoom" data-pretty="prettyPhoto" href="assets/img/dummies/big1.jpg"><img src="assets/img/icons/zoom_icon.png" alt="" title="Portfolio name" /></a></span>
                      </article>
                    </div>
    
                    <div class="caption">
                      <h4><a href="#">Portfolio name</a></h4>
                      <p>Ex decore equidem detracto vis, nihil labores euripidis an sea. Nisl solet nonumes ne has, eos nostrum antiopam aliquando at no.</p>
                    </div>
                  </div>
                </div>
              </li>
              <li class="portfolio-item2" data-id="id-0" data-type="graphic">
                <div class="span3">
                  <div class="thumbnail">
                    <div class="image-wrapp">
                      <img src="assets/img/dummies/work6.jpg" alt="Portfolio name" title="" />
                      <article class="da-animate da-slideFromRight" style="display: block;">
                        <a class="link_post" href="portfolio-detail.html"><img src="assets/img/icons/link_post_icon.png" alt="" /></a>
                        <span><a class="zoom" data-pretty="prettyPhoto" href="assets/img/dummies/big1.jpg"><img src="assets/img/icons/zoom_icon.png" alt="" title="Portfolio name" /></a></span>
                      </article>
                    </div>
    
                    <div class="caption">
                      <h4><a href="#">Portfolio name</a></h4>
                      <p>Ex volutpat voluptatum vim. Mea no brute modo saepe vis at, sit te oblique recusabo ullamcorper. Mel aperiri constituto ad mel at.</p>
                    </div>
                  </div>
                </div>
              </li>
              <li class="portfolio-item2" data-id="id-0" data-type="photo">
                <div class="span3">
                  <div class="thumbnail">
                    <div class="image-wrapp">
                      <img src="assets/img/dummies/work7.jpg" alt="Portfolio name" title="" />
                      <article class="da-animate da-slideFromRight" style="display: block;">
                        <a class="link_post" href="portfolio-detail.html"><img src="assets/img/icons/link_post_icon.png" alt="" /></a>
                        <span><a class="zoom" data-pretty="prettyPhoto" href="assets/img/dummies/big1.jpg"><img src="assets/img/icons/zoom_icon.png" alt="" title="Portfolio name" /></a></span>
                      </article>
                    </div>
    
                    <div class="caption">
                      <h4><a href="#">Portfolio name</a></h4>
                      <p>Ex decore equidem detracto vis, nihil labores euripidis an sea. Nisl solet nonumes ne has, eos nostrum antiopam aliquando at no.</p>
                    </div>
                  </div>
                </div>
              </li>
              <li class="portfolio-item2" data-id="id-0" data-type="ilustrator">
                <div class="span3">
                  <div class="thumbnail">
                    <div class="image-wrapp">
                      <img src="assets/img/dummies/work8.jpg" alt="Portfolio name" title="" />
                      <article class="da-animate da-slideFromRight" style="display: block;">
                        <a class="link_post" href="portfolio-detail.html"><img src="assets/img/icons/link_post_icon.png" alt="" /></a>
                        <span><a class="zoom" data-pretty="prettyPhoto" href="assets/img/dummies/big1.jpg"><img src="assets/img/icons/zoom_icon.png" alt="" title="Portfolio name" /></a></span>
                      </article>
                    </div>
    
                    <div class="caption">
                      <h4><a href="#">Portfolio name</a></h4>
                      <p>Tota laboramus adversarium at sed, clita persius qui et, vis quot cibo deterruisset id. An fuisset eleifend eos, agam dicat an ius.</p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="row">
            <div class="span12">
              <div class="pagination">
                <ul>
                  <li><a href="#">Prev</a></li>
                  <li><a href="#">1</a></li>
                  <li class="active"><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">4</a></li>
                  <li><a href="#">Next</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
}

function projects(){
  return `
    <section id="subintro">
      <div class="jumbotron subhead" id="overview">
        <div class="container">
          <div class="row">
            <div class="span8">
              <h3><i class="m-icon-big-swapright m-icon-white"></i> Active Developent Projects</h3>
              <p>
                  Projects we are currently working on.
              </p>
            </div>
            <div class="span4">
              <div class="input-append">
                  <form method="get" action="https://www.blazed.quest/search.html" class="form-search">
                      <input required placeholder="Search Blazed Quest..." type="text" name="q" class="input-medium search-query">
                      <button type="submit" class="btn btn-inverse">
                          Search
                      </button>
                  </form>
              </div>
          </div>

          </div>

        </div>
      </div>
    </section>
  
    <section id="maincontent">
      <div class="container">
        <div class="row">
          <h2 class="portfolio-title" id="portfolio-info"></h2>
          <ul id="portfolio-inner" class="portfolio-area da-thumbs"></ul>
        </div>
        <div class="row">
          <div class="span12">
            <div id="pagination-wrapper" class="pagination">
              <ul id="pagination-bottom"></ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function software(){
    return `
        <section id="subintro">
            <div class="jumbotron subhead" id="overview">
                <div class="container">
                    <div class="row">
                    <div class="span8">
                        <h3><i class="m-icon-big-swapright m-icon-white"></i> Blazed Software Portfolio</h3>
                        <p>Filterable portfolio alt-1 displayed in 3 columns</p>
                    </div>
                    <div class="span4">
                            <div class="input-append">
                                <form method="get" action="https://www.blazed.quest/search.html" class="form-search">
                                    <input required placeholder="Search Blazed Quest..." type="text" name="q" class="input-medium search-query">
                                    <button type="submit" class="btn btn-inverse">
                                        Search
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>

            <section id="maincontent">
                <div class="container">
                <div class="row-fluid">
                    <div class="span12">
                    <div class="btn-group filter-category">
                        <a class="btn btn-success" href="#"><i class="icon-list icon-white"></i> Select category</a>
                        <a class="btn btn-success dropdown-toggle" data-toggle="dropdown" href="#"><span class="caret"></span></a>
                        <ul class="dropdown-menu filter">
                        <li class="all active"><a href="#"><i class="icon-picture"></i> All category</a></li>
                        <li class="web"><a href="#"><i class="icon-picture"></i> Web design</a></li>
                        <li class="brand"><a href="#"><i class="icon-picture"></i> Brand identity</a></li>
                        <li class="graphic"><a href="#"><i class="icon-picture"></i> Graphic design</a></li>
                        <li class="photo"><a href="#"><i class="icon-picture"></i> Photography</a></li>
                        <li class="ilustrator"><a href="#"><i class="icon-picture"></i> Ilustrator</a></li>
                        </ul>
                    </div>
                    <div class="pagination pagination-right">
                        <ul>
                        <li><a href="#">Prev</a></li>
                        <li><a href="#">1</a></li>
                        <li class="active"><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">4</a></li>
                        <li><a href="#">Next</a></li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div class="row">
                    <ul class="portfolio-area da-thumbs">
                    <li class="portfolio-item2" data-id="id-0" data-type="web">
                        <div class="span4">
                        <div class="thumbnail">
                            <div class="image-wrapp">
                            <img src="assets/img/dummies/work1.jpg" alt="Portfolio name" title="" />
                            <article class="da-animate da-slideFromRight" style="display: block;">
                                <a class="link_post" href="portfolio-detail.html"><img src="assets/img/icons/link_post_icon.png" alt="" /></a>
                                <span><a class="zoom" data-pretty="prettyPhoto" href="assets/img/dummies/big1.jpg"><img src="assets/img/icons/zoom_icon.png" alt="" title="Portfolio name" /></a></span>
                            </article>
                            </div>

                            <div class="caption">
                            <h4><a href="#">Portfolio name</a></h4>
                            <p>Tota laboramus adversarium at sed, clita persius qui et, vis quot cibo deterruisset id. An fuisset eleifend eos, agam dicat an ius.</p>
                            </div>

                        </div>
                        </div>
                    </li>
                    <li class="portfolio-item2" data-id="id-0" data-type="web">
                        <div class="span4">
                        <div class="thumbnail">
                            <div class="image-wrapp">
                            <img src="assets/img/dummies/work2.jpg" alt="Portfolio name" title="" />
                            <article class="da-animate da-slideFromRight" style="display: block;">
                                <a class="link_post" href="portfolio-detail.html"><img src="assets/img/icons/link_post_icon.png" alt="" /></a>
                                <span><a class="zoom" data-pretty="prettyPhoto" href="assets/img/dummies/big1.jpg"><img src="assets/img/icons/zoom_icon.png" alt="" title="Portfolio name" /></a></span>
                            </article>
                            </div>

                            <div class="caption">
                            <h4><a href="#">Portfolio name</a></h4>
                            <p>Ex decore equidem detracto vis, nihil labores euripidis an sea. Nisl solet nonumes ne has, eos nostrum antiopam aliquando at no.</p>
                            </div>
                        </div>
                        </div>
                    </li>
                    <li class="portfolio-item2" data-id="id-0" data-type="brand">
                        <div class="span4">
                        <div class="thumbnail">
                            <div class="image-wrapp">
                            <img src="assets/img/dummies/work3.jpg" alt="Portfolio name" title="" />
                            <article class="da-animate da-slideFromRight" style="display: block;">
                                <a class="link_post" href="portfolio-detail.html"><img src="assets/img/icons/link_post_icon.png" alt="" /></a>
                                <span><a class="zoom" data-pretty="prettyPhoto" href="assets/img/dummies/big1.jpg"><img src="assets/img/icons/zoom_icon.png" alt="" title="Portfolio name" /></a></span>
                            </article>
                            </div>

                            <div class="caption">
                            <h4><a href="#">Portfolio name</a></h4>
                            <p>Ex decore equidem detracto vis, nihil labores euripidis an sea. Nisl solet nonumes ne has, eos nostrum antiopam aliquando at no.</p>
                            </div>
                        </div>
                        </div>
                    </li>
                    <li class="portfolio-item2" data-id="id-0" data-type="photo">
                        <div class="span4">
                        <div class="thumbnail">
                            <div class="image-wrapp">
                            <img src="assets/img/dummies/work4.jpg" alt="Portfolio name" title="" />
                            <article class="da-animate da-slideFromRight" style="display: block;">
                                <a class="link_post" href="portfolio-detail.html"><img src="assets/img/icons/link_post_icon.png" alt="" /></a>
                                <span><a class="zoom" data-pretty="prettyPhoto" href="assets/img/dummies/big1.jpg"><img src="assets/img/icons/zoom_icon.png" alt="" title="Portfolio name" /></a></span>
                            </article>
                            </div>

                            <div class="caption">
                            <h4><a href="#">Portfolio name</a></h4>
                            <p>Ex volutpat voluptatum vim. Mea no brute modo saepe vis at, sit te oblique recusabo ullamcorper. Mel aperiri constituto ad mel at.</p>
                            </div>
                        </div>
                        </div>
                    </li>
                    <li class="portfolio-item2" data-id="id-0" data-type="graphic">
                        <div class="span4">
                        <div class="thumbnail">
                            <div class="image-wrapp">
                            <img src="assets/img/dummies/work5.jpg" alt="Portfolio name" title="" />
                            <article class="da-animate da-slideFromRight" style="display: block;">
                                <a class="link_post" href="portfolio-detail.html"><img src="assets/img/icons/link_post_icon.png" alt="" /></a>
                                <span><a class="zoom" data-pretty="prettyPhoto" href="assets/img/dummies/big1.jpg"><img src="assets/img/icons/zoom_icon.png" alt="" title="Portfolio name" /></a></span>
                            </article>
                            </div>

                            <div class="caption">
                            <h4><a href="#">Portfolio name</a></h4>
                            <p>Ex decore equidem detracto vis, nihil labores euripidis an sea. Nisl solet nonumes ne has, eos nostrum antiopam aliquando at no.</p>
                            </div>
                        </div>
                        </div>
                    </li>
                    <li class="portfolio-item2" data-id="id-0" data-type="graphic">
                        <div class="span4">
                        <div class="thumbnail">
                            <div class="image-wrapp">
                            <img src="assets/img/dummies/work6.jpg" alt="Portfolio name" title="" />
                            <article class="da-animate da-slideFromRight" style="display: block;">
                                <a class="link_post" href="portfolio-detail.html"><img src="assets/img/icons/link_post_icon.png" alt="" /></a>
                                <span><a class="zoom" data-pretty="prettyPhoto" href="assets/img/dummies/big1.jpg"><img src="assets/img/icons/zoom_icon.png" alt="" title="Portfolio name" /></a></span>
                            </article>
                            </div>

                            <div class="caption">
                            <h4><a href="#">Portfolio name</a></h4>
                            <p>Ex volutpat voluptatum vim. Mea no brute modo saepe vis at, sit te oblique recusabo ullamcorper. Mel aperiri constituto ad mel at.</p>
                            </div>
                        </div>
                        </div>
                    </li>

                    </ul>
                </div>
                <div class="row">
                    <div class="span12">
                    <div class="pagination">
                        <ul>
                        <li><a href="#">Prev</a></li>
                        <li><a href="#">1</a></li>
                        <li class="active"><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">4</a></li>
                        <li><a href="#">Next</a></li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </section>

    `;
}

function images(){
    return `
        <section id="subintro">
            <div class="jumbotron subhead" id="overview">
                <div class="container">
                    <div class="row">
                    <div class="span8">
                        <h3><i class="m-icon-big-swapright m-icon-white"></i> Porfolio alt2 2 columns</h3>
                        <p>Filterable portfolio alt-2 displayed in 2 columns</p>
                    </div>
                    <div class="span4">
                        <div class="input-append">
                        <form class="form-search">
                            <input type="text" class="input-medium search-query">
                            <button type="submit" class="btn btn-inverse">Search</button>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            <section id="maincontent">
                <div class="container">
                <div class="row-fluid">
                    <div class="span12">
                    <div class="btn-group filter-category">
                        <a class="btn btn-success" href="#"><i class="icon-list icon-white"></i> Select category</a>
                        <a class="btn btn-success dropdown-toggle" data-toggle="dropdown" href="#"><span class="caret"></span></a>
                        <ul class="dropdown-menu filter">
                        <li class="all active"><a href="#"><i class="icon-picture"></i> All category</a></li>
                        <li class="web"><a href="#"><i class="icon-picture"></i> Web design</a></li>
                        <li class="brand"><a href="#"><i class="icon-picture"></i> Brand identity</a></li>
                        <li class="graphic"><a href="#"><i class="icon-picture"></i> Graphic design</a></li>
                        <li class="photo"><a href="#"><i class="icon-picture"></i> Photography</a></li>
                        <li class="ilustrator"><a href="#"><i class="icon-picture"></i> Ilustrator</a></li>
                        </ul>
                    </div>
                    <div class="pagination pagination-right">
                        <ul>
                        <li><a href="#">Prev</a></li>
                        <li><a href="#">1</a></li>
                        <li class="active"><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">4</a></li>
                        <li><a href="#">Next</a></li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div class="row">
                    <ul class="portfolio-area da-thumbs">
                    <li class="portfolio-item2" data-id="id-0" data-type="web">
                        <div class="span6">
                        <div class="thumbnail">
                            <div class="tooltip-demo image-wrapp">
                            <span class="absolute-comment"><a href="#" data-rel="tooltip" data-placement="top" title="8 Comments"><i class="icon-comment"></i></a></span>
                            <img src="assets/img/dummies/work1.jpg" alt="Portfolio name" title="" />
                            <article class="da-animate da-slideFromRight" style="display: block;">
                                <a class="link_post" href="portfolio-detail.html"><img src="assets/img/icons/link_post_icon.png" alt="" /></a>
                                <span><a class="zoom" data-pretty="prettyPhoto" href="assets/img/dummies/big1.jpg"><img src="assets/img/icons/zoom_icon.png" alt="" title="Portfolio name" /></a></span>
                            </article>
                            </div>
                        </div>
                        </div>
                    </li>
                    <li class="portfolio-item2" data-id="id-0" data-type="web">
                        <div class="span6">
                        <div class="thumbnail">
                            <div class="tooltip-demo image-wrapp">
                            <span class="absolute-comment"><a href="#" data-rel="tooltip" data-placement="top" title="8 Comments"><i class="icon-comment"></i></a></span>
                            <img src="assets/img/dummies/work2.jpg" alt="Portfolio name" title="" />
                            <article class="da-animate da-slideFromRight" style="display: block;">
                                <a class="link_post" href="portfolio-detail.html"><img src="assets/img/icons/link_post_icon.png" alt="" /></a>
                                <span><a class="zoom" data-pretty="prettyPhoto" href="assets/img/dummies/big1.jpg"><img src="assets/img/icons/zoom_icon.png" alt="" title="Portfolio name" /></a></span>
                            </article>
                            </div>
                        </div>
                        </div>
                    </li>
                    <li class="portfolio-item2" data-id="id-0" data-type="brand">
                        <div class="span6">
                        <div class="thumbnail">
                            <div class="tooltip-demo image-wrapp">
                            <span class="absolute-comment"><a href="#" data-rel="tooltip" data-placement="top" title="8 Comments"><i class="icon-comment"></i></a></span>
                            <img src="assets/img/dummies/work3.jpg" alt="Portfolio name" title="" />
                            <article class="da-animate da-slideFromRight" style="display: block;">
                                <a class="link_post" href="portfolio-detail.html"><img src="assets/img/icons/link_post_icon.png" alt="" /></a>
                                <span><a class="zoom" data-pretty="prettyPhoto" href="assets/img/dummies/big1.jpg"><img src="assets/img/icons/zoom_icon.png" alt="" title="Portfolio name" /></a></span>
                            </article>
                            </div>
                        </div>
                        </div>
                    </li>
                    <li class="portfolio-item2" data-id="id-0" data-type="photo">
                        <div class="span6">
                        <div class="thumbnail">
                            <div class="tooltip-demo image-wrapp">
                            <span class="absolute-comment"><a href="#" data-rel="tooltip" data-placement="top" title="8 Comments"><i class="icon-comment"></i></a></span>
                            <img src="assets/img/dummies/work4.jpg" alt="Portfolio name" title="" />
                            <article class="da-animate da-slideFromRight" style="display: block;">
                                <a class="link_post" href="portfolio-detail.html"><img src="assets/img/icons/link_post_icon.png" alt="" /></a>
                                <span><a class="zoom" data-pretty="prettyPhoto" href="assets/img/dummies/big1.jpg"><img src="assets/img/icons/zoom_icon.png" alt="" title="Portfolio name" /></a></span>
                            </article>
                            </div>
                        </div>
                        </div>
                    </li>
                    <li class="portfolio-item2" data-id="id-0" data-type="graphic">
                        <div class="span6">
                        <div class="thumbnail">
                            <div class="tooltip-demo image-wrapp">
                            <span class="absolute-comment"><a href="#" data-rel="tooltip" data-placement="top" title="8 Comments"><i class="icon-comment"></i></a></span>
                            <img src="assets/img/dummies/work5.jpg" alt="Portfolio name" title="" />
                            <article class="da-animate da-slideFromRight" style="display: block;">
                                <a class="link_post" href="portfolio-detail.html"><img src="assets/img/icons/link_post_icon.png" alt="" /></a>
                                <span><a class="zoom" data-pretty="prettyPhoto" href="assets/img/dummies/big1.jpg"><img src="assets/img/icons/zoom_icon.png" alt="" title="Portfolio name" /></a></span>
                            </article>
                            </div>
                        </div>
                        </div>
                    </li>
                    <li class="portfolio-item2" data-id="id-0" data-type="graphic">
                        <div class="span6">
                        <div class="thumbnail">
                            <div class="tooltip-demo image-wrapp">
                            <span class="absolute-comment"><a href="#" data-rel="tooltip" data-placement="top" title="8 Comments"><i class="icon-comment"></i></a></span>
                            <img src="assets/img/dummies/work6.jpg" alt="Portfolio name" title="" />
                            <article class="da-animate da-slideFromRight" style="display: block;">
                                <a class="link_post" href="portfolio-detail.html"><img src="assets/img/icons/link_post_icon.png" alt="" /></a>
                                <span><a class="zoom" data-pretty="prettyPhoto" href="assets/img/dummies/big1.jpg"><img src="assets/img/icons/zoom_icon.png" alt="" title="Portfolio name" /></a></span>
                            </article>
                            </div>
                        </div>
                        </div>
                    </li>
                    </ul>
                </div>
                <div class="row">
                    <div class="span12">
                    <div class="pagination">
                        <ul>
                        <li><a href="#">Prev</a></li>
                        <li><a href="#">1</a></li>
                        <li class="active"><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">4</a></li>
                        <li><a href="#">Next</a></li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </section>

    `;
}