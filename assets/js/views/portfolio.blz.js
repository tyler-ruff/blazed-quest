/*
    Blazed Fire for HTML5 Framework Example
    > Views in the "Index" namespace
*/

function build_routes(page){
    let data = {};
    switch(page){
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
                    <h3><i class="m-icon-big-swapright m-icon-white"></i> [ITEM-TITLE]</h3>
                    <p>Type: <span id="portfolio-type">[ITEM-TYPE]</span></p>
                </div>
                <div class="span4">
                            <div class="input-append">
                                <form method="get" target="https://www.blazed.quest/index.html?p=search" class="form-search">
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
                    <h4 class="heading-success"><span class="btn btn-large btn-success"><i class="m-icon-big-swapdown m-icon-white"></i></span>&nbsp;&nbsp;Author detail</h4>
                    <img src="assets/img/avatar.png" class="alignleft" alt="" />
                    <h5>John doe</h5>
                    <p>
                        Donec ullamcorper nulla non metus auctor fringilla commodo luctus
                    </p><a href="#">Profile detail..</a>
                    </div>
                    <div class="widget">
                    <h4 class="heading-success"><span class="btn btn-large btn-success"><i class="m-icon-big-swapdown m-icon-white"></i></span>&nbsp;&nbsp;Project detail</h4>
                    <ul class="project-detal">
                        <li><label>Posted by :</label> John doe</li>
                        <li><label>Categorie :</label> Web design</li>
                        <li><label>File type :</label> PSD</li>
                        <li><label>File size :</label> 350MB</li>
                        <li><label>License :</label><br /> Similique adipiscing ius et, audire aeterno democritum sed cu, te causae mandamus interpretaris sed. Tamquam hendrerit vim at, ut mea voluptaria theophrastus.
                        </li>
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
                    <a href="#"><img src="assets/img/dummies/big.jpg" alt="" /></a>
                    <h5>Description : </h5>
                    <p>
                        Cu cum noster euismod appellantur, mundi vitae vim ut, ea sea scripta expetendis vituperatoribus. Et cibo dicat impetus cum, id his quodsi scripserit. Nec purto habeo recteque eu. Posse oportere accusamus an sit, ex quando phaedrum sapientem ius. Perfecto
                        ocurreret no nam, eu quas cetero qui, vel ea minim nusquam salutatus. Nemore integre his ei, tollit eirmod eam at.
                    </p>
                    <a href="#" class="btn btn-large btn-success">Download here</a>
                    </div>
                </article>
                <!-- end article full post -->
                <h4>Comments</h4>
                <ul class="media-list">
                    <li class="media">
                    <a class="pull-left" href="#">
                                    <img class="media-object" src="assets/img/small-avatar.png" alt="" />
                                </a>
                    <div class="media-body">
                        <h5 class="media-heading"><a href="#">Dean maximus</a></h5>
                        <span>Post :05/12/2012</span>
                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
                        <a class="btn btn-small" href="">Reply comment</a>
                        <!-- Nested media object -->
                        <div class="media">
                        <a class="pull-left" href="#">
                                            <img class="media-object" src="assets/img/small-avatar.png" alt="" />
                                        </a>
                        <div class="media-body">
                            <h5 class="media-heading"><a href="#">Cris Need</a></h5>
                            <span>Post :08/12/2012</span>
                            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
                            <a class="btn btn-small" href="">Reply comment</a>
                            <!-- Nested media object -->
                            <div class="media">
                            <a class="pull-left" href="#">
                                                    <img class="media-object" src="assets/img/small-avatar.png" alt="" />
                                                </a>
                            <div class="media-body">
                                <h5 class="media-heading"><a href="#">Nooer neyh</a></h5>
                                <span>Post :11/12/2012</span>
                                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
                                <a class="btn btn-small" href="">Reply comment</a>
                            </div>
                            </div>
                        </div>
                        </div>
                        <!-- Nested media object -->
                        <div class="media">
                        <a class="pull-left" href="#">
                                            <img class="media-object" src="assets/img/small-avatar.png" alt="" />
                                        </a>
                        <div class="media-body">
                            <h5 class="media-heading"><a href="#">Andinia new</a></h5>
                            <span>Post :15/12/2012</span>
                            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
                            <a class="btn btn-small" href="">Reply comment</a>
                        </div>
                        </div>
                    </div>
                    </li>
                    <li class="media">
                    <a class="pull-left" href="#">
                                    <img class="media-object" src="assets/img/small-avatar.png" alt="" />
                                </a>
                    <div class="media-body">
                        <h5 class="media-heading"><a href="#">Maouses chees</a></h5>
                        <span>Post :16/12/2012</span>
                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
                        <a class="btn btn-small" href="">Reply comment</a>
                    </div>
                    </li>
                </ul>
                <div class="comment-post">
                    <h4>Leave a comment</h4>
                    <form action="#" method="post" class="comment-form" name="comment-form">
                    <div class="row">
                        <div class="span3">
                        <label>Name <span>*</span></label>
                        <input type="text" class="input-block-level" placeholder="Your name" />
                        </div>
                        <div class="span3">
                        <label>Email <span>*</span></label>
                        <input type="text" class="input-block-level" placeholder="Your email" />
                        </div>
                        <div class="span3">
                        <label>Website</label>
                        <input type="text" class="input-block-level" placeholder="Your website" />
                        </div>
                        <div class="span8">
                        <label>Comment <span>*</span></label>
                        <textarea rows="9" class="input-block-level" placeholder="Your comment"></textarea>
                        <button class="btn btn-medium btn-orange" type="button">Submit comment</button>
                        </div>
                    </div>
                    </form>
                </div>

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
                    <form method="get" target="https://www.blazed.quest/index.html?p=search" class="form-search">
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
                                <form method="get" target="https://www.blazed.quest/index.html?p=search" class="form-search">
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