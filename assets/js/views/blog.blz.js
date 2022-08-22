
/*
    Blazed Fire for HTML5 Framework Example
    > Views in the "Index" namespace
*/

function build_routes(page){
    let data = {};
    switch(page){
        case "post":
            data = {
                pageNum: 16,
                content: single()
            };
            break;
        case 'home':
        default:
            data = {
                pageNum: 10,
                content: blog()
            };
            break;
        }
    return data;
}

function single() {
    return `
    <section id="subintro">
        <div class="jumbotron subhead" id="overview">
            <div class="container">
                <div class="row">
                <div class="span8">
                    <h3><i class="m-icon-big-swapright m-icon-white"></i> Single post</h3>
                    <p>View a single blog post.</p>
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

                <div class="span8">

                <!-- start article full post -->
                <article class="blog-post">
                    <div class="tooltip-demo headline">
                    <h4>Hiya! this is single post page</h4>
                    <span class="comment"><a href="#" data-rel="tooltip" data-placement="top" title="4 Comments">4 comments</a></span>
                    </div>
                    <div class="clearfix"></div>
                    <img src="assets/img/dummies/blog1.jpg" alt="" />
                    <ul class="post-meta">
                    <li class="first"><i class="icon-user"></i> <span><a href="#">John doe</a></span></li>
                    <li><i class="icon-list-alt"></i> <span><a href="#">Web design</a></span></li>
                    <li class="last"><i class="icon-tags"></i> <span><a href="#">Design</a>, <a href="#">Blog</a>, <a href="#">Web page</a>, <a href="#">Clean</a></span></li>
                    </ul>
                    <div class="clearfix"></div>
                    <p>
                    Ei eos suavitate forensibus mnesarchum. Eu est timeam vocibus, an nostro aliquam adipiscing quo. Zril equidem et quo, ad albucius scripserit sit. Vis constituto deseruisse an, interesset reprehendunt et mel, gloriatur concludaturque pro no. At ludus mediocritatem
                    qui, no vituperata assueverit accommodare his. Eos simul tritani gubergren et, te vel ullum commodo docendi, ne sea regione laoreet iracundia. His menandri quaestio ea. Ea congue volutpat has, cu vim delenit offendit ullamcorper ius at agam.
                    </p>
                    <blockquote>
                    <p>
                        Eos simul tritani gubergren et, te vel ullum commodo docendi, ne sea regione laoreet iracundia. His menandri quaestio ea. Ea congue volutpat has, cu vim delenit offendit ullamcorper. Ius at agam malorum suscipiantur, sit aliquid percipitur ei.
                    </p>
                    </blockquote>

                    <p>
                    Justo reprehendunt mea at, cu error consul voluptaria usu. Ex vix mucius sadipscing, ea pri timeam delicatissimi, officiis theophrastus sed eu. Et quo copiosae appetere, ad explicari euripidis adversarium pri, invenire eleifend his id. Sed simul vocent
                    appellantur ne, an nam unum commune convenire. Sea an principes dignissim intellegam. Vide duis comprehensam at sit, expetenda deseruisse ea qui. Ei eum similique dissentiet. Agam eloquentiam accommodare ei per, alia graecis consetetur id
                    sit. Ius dicant nonumy ad, modus postea indoctum et mei. Vel legimus percipit te, vidit dicta eam ea. Vidit audire id has, usu ei vero commune. Nam duis adipisci gloriatur eu, te delicata complectitur ius, his ex clita voluptua delicata.
                    At vel malis facilisi signiferumque, mei meis consectetuer ex, vis porro accumsan eu.
                    </p>

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
                        <a href="#">Reply comment</a>
                        <!-- Nested media object -->
                        <div class="media">
                        <a class="pull-left" href="#">
                                            <img class="media-object" src="assets/img/small-avatar.png" alt="" />
                                        </a>
                        <div class="media-body">
                            <h5 class="media-heading"><a href="#">Cris Need</a></h5>
                            <span>Post :08/12/2012</span>
                            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
                            <a href="#">Reply comment</a>
                            <!-- Nested media object -->
                            <div class="media">
                            <a class="pull-left" href="#">
                                                    <img class="media-object" src="assets/img/small-avatar.png" alt="" />
                                                </a>
                            <div class="media-body">
                                <h5 class="media-heading"><a href="#">Nooer neyh</a></h5>
                                <span>Post :11/12/2012</span>
                                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
                                <a href="#">Reply comment</a>
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
                            <a href="#">Reply comment</a>
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
                        <a href="#">Reply comment</a>
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
                        <button class="btn btn-medium btn-success" type="button">Submit comment</button>
                        </div>
                    </div>
                    </form>
                </div>
                </div>

                <div class="span4">
                <aside>
                    <div class="widget">
                    <h4 class="heading-success"><span class="btn btn-large btn-success"><i class="m-icon-big-swapdown m-icon-white"></i></span>&nbsp;&nbsp;About us</h4>
                    <img src="assets/img/avatar.png" class="alignleft" alt="" />
                    <h5>John doe</h5>
                    <p>
                        Donec ullamcorper nulla non metus auctor fringilla commodo luctus
                    </p><a href="#">Profile detail..</a>
                    </div>
                    <div class="widget">
                    <h4 class="heading-success"><span class="btn btn-large btn-success"><i class="m-icon-big-swapdown m-icon-white"></i></span>&nbsp;&nbsp;Categories</h4>
                    <ul>
                        <li><a href="#">Web design (24)</a></li>
                        <li><a href="#">Bloging (11)</a></li>
                        <li><a href="#">Graphic design ((10)</a></li>
                        <li><a href="#">Photoshop (25)</a></li>
                        <li><a href="#">Ilustrator (12)</a></li>
                        <li><a href="#">Internet marketing (10)</a></li>
                    </ul>
                    </div>
                    <div class="clearfix"></div>
                    <div class="widget">
                    <ul id="myTab" class="nav nav-tabs">
                        <li class="active"><a href="#recent" data-toggle="tab">Latest</a></li>
                        <li><a href="#popular" data-toggle="tab">Popular</a></li>
                        <li><a href="#comment" data-toggle="tab">Comment</a></li>
                    </ul>
                    <div id="myTabContent" class="tab-content">
                        <div class="tab-pane fade in active" id="recent">
                        <ul class="recent">
                            <li>
                            <a href="#"><img src="assets/img/dummies/80x80/img1.jpg" class="alignleft" alt="" /></a>
                            <h6><a href="#">Adhuc disputando</a></h6>
                            <p>
                                At vero eos et accusam et justo duo dolores et eabum.
                            </p>
                            <a href="#">Read more..</a>
                            </li>
                            <li>
                            <a href="#"><img src="assets/img/dummies/80x80/img2.jpg" class="alignleft" alt="" /></a>
                            <h6><a href="#">Duo te enim solum</a></h6>
                            <p>
                                Ei viris latine ullamcorper sed vim ex omnes.
                            </p>
                            <a href="#">Read more..</a>
                            </li>
                            <li>
                            <a href="#"><img src="assets/img/dummies/80x80/img3.jpg" class="alignleft" alt="" /></a>
                            <h6><a href="#">Choro scriptorem</a></h6>
                            <p>
                                Fugit choro scriptorem eam at, nusquam consetetur ex.
                            </p>
                            <a href="#">Read more..</a>
                            </li>
                        </ul>
                        </div>
                        <div class="tab-pane fade" id="popular">
                        <ul class="recent">
                            <li>
                            <a href="#"><img src="assets/img/dummies/80x80/img3.jpg" class="alignleft" alt="" /></a>
                            <h6><a href="#">Choro scriptorem</a></h6>
                            <p>
                                Fugit choro scriptorem eam at, nusquam consetetur ex.
                            </p>
                            <a href="#">Read more..</a>
                            </li>
                            <li>
                            <a href="#"><img src="assets/img/dummies/80x80/img1.jpg" class="alignleft" alt="" /></a>
                            <h6><a href="#">Adhuc disputando</a></h6>
                            <p>
                                At vero eos et accusam et justo duo dolores et eabum.
                            </p>
                            <a href="#">Read more..</a>
                            </li>
                            <li>
                            <a href="#"><img src="assets/img/dummies/80x80/img2.jpg" class="alignleft" alt="" /></a>
                            <h6><a href="#">Duo te enim solum</a></h6>
                            <p>
                                Ei viris latine ullamcorper sed vim ex omnes.
                            </p>
                            <a href="#">Read more..</a>
                            </li>
                        </ul>
                        </div>
                        <div class="tab-pane fade" id="comment">
                        <ul class="recent">
                            <li>
                            <a href="#"><img src="assets/img/icons/quote.png" class="alignleft" alt="" /></a>
                            <h6><a href="#">Abbin noer</a></h6>
                            <p>
                                Mel meis tibique et, eam adhuc omnesque disputando ad prompta.
                            </p>
                            <span>Post :14/12/2012</span>
                            </li>
                            <li>
                            <a href="#"><img src="assets/img/icons/quote.png" class="alignleft" alt="" /></a>
                            <h6><a href="#">Dexer read</a></h6>
                            <p>
                                Mel meis tibique et, eam adhuc omnesque disputando.
                            </p>
                            <span>Post :11/12/2012</span>
                            </li>
                            <li>
                            <a href="#"><img src="assets/img/icons/quote.png" class="alignleft" alt="" /></a>
                            <h6><a href="#">Alphon neyah</a></h6>
                            <p>
                                Ei viris latine ullamcorper sed. Vim ex omnes constituam.
                            </p>
                            <span>Post :05/12/2012</span>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </aside>
                </div>

            </div>
            </div>
        </section>
    `;
}
function blog(){
    return `
        <section id="subintro">
            <div class="jumbotron subhead" id="overview">
                <div class="container">
                    <div class="row">
                        <div class="span8">
                            <h3><i class="m-icon-big-swapright m-icon-white"></i> Blog</h3>
                            <p>
                                Official project update blog for Blazed Labs LLC and Blazed Development Group.
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
                <div class="span8">
                <!-- start article 1 -->
                <article class="blog-post">
                    <div class="tooltip-demo headline">
                    <h4><a href="#">Example article with thumbnail image</a></h4>
                    <span class="comment"><a href="#" rel="tooltip" data-placement="top" title="3 Comments">3 comments</a></span>
                    </div>
                    <div class="row">
                    <div class="span3">
                        <a href="#"><img src="assets/img/dummies/blog1.jpg" alt="" /></a>
                    </div>
                    <div class="span6">
                        <ul class="post-meta">
                        <li class="first"><i class="icon-user"></i> <span><a href="#">John doe</a></span></li>
                        <li><i class="icon-list-alt"></i> <span><a href="#">Web design</a></span></li>
                        <li class="last"><i class="icon-tags"></i> <span><a href="#">Design</a>, <a href="#">Blog</a>, <a href="#">Web page</a>, <a href="#">Clean</a></span></li>
                        </ul>
                        <div class="clearfix"></div>
                        <p>
                        Ei eos suavitate forensibus mnesarchum. Eu est timeam vocibus, an nostro aliquam adipiscing quo. Zril equidem et quo, ad albucius scripserit sit. Vis constituto deseruisse an, interesset reprehendunt et mel, gloriatur concludaturque pro no. At ludus mediocritatem
                        qui, no vituperata assueverit accommodare his. Eos simul tritani gubergren et, te vel ullum commodo docendi, ne sea regione laoreet iracundia. His menandri quaestio ea. Ea congue volutpat has, cu vim delenit offendit ullamcorper ius
                        at agam.
                        </p>
                        <button class="btn btn btn-success" type="button">Read more</button>
                    </div>
                    </div>
                </article>
                <!-- end article 1 -->

                <!-- start article 2 -->
                <article class="blog-post">
                    <div class="tooltip-demo headline">
                    <h4><a href="#">Example article with slider images</a></h4>
                    <span class="comment"><a href="#" rel="tooltip" data-placement="top" title="3 Comments">0 comments</a></span>
                    </div>
                    <div class="row">
                    <div class="span3">
                        <a href="#"><img src="assets/img/dummies/blog2.jpg" alt="" /></a>
                    </div>
                    <div class="span6">
                        <ul class="post-meta">
                        <li class="first"><i class="icon-user"></i> <span><a href="#">John doe</a></span></li>
                        <li><i class="icon-list-alt"></i> <span><a href="#">Web design</a></span></li>
                        <li class="last"><i class="icon-tags"></i> <span><a href="#">Design</a>, <a href="#">Blog</a>, <a href="#">Web page</a>, <a href="#">Clean</a></span></li>
                        </ul>
                        <div class="clearfix"></div>
                        <p>
                        Ei eos suavitate forensibus mnesarchum. Eu est timeam vocibus, an nostro aliquam adipiscing quo. Zril equidem et quo, ad albucius scripserit sit. Vis constituto deseruisse an, interesset reprehendunt et mel, gloriatur concludaturque pro no. At ludus mediocritatem
                        qui, no vituperata assueverit accommodare his. Eos simul tritani gubergren et, te vel ullum commodo docendi, ne sea regione laoreet iracundia. His menandri quaestio ea. Ea congue volutpat has, cu vim delenit offendit ullamcorper ius
                        at agam.
                        </p>
                        <button class="btn btn btn-success" type="button">Read more</button>
                    </div>
                    </div>
                    <ul class="post-meta">
                    <li class="first"><i class="icon-user"></i> <span><a href="#">John doe</a></span></li>
                    <li><i class="icon-list-alt"></i> <span><a href="#">Web design</a></span></li>
                    <li class="last"><i class="icon-tags"></i> <span><a href="#">Design</a>, <a href="#">Blog</a>, <a href="#">Web page</a>, <a href="#">Clean</a></span></li>
                    </ul>
                    <div class="clearfix"></div>
                    <p>
                    Ei eos suavitate forensibus mnesarchum. Eu est timeam vocibus, an nostro aliquam adipiscing quo. Zril equidem et quo, ad albucius scripserit sit. Vis constituto deseruisse an, interesset reprehendunt et mel, gloriatur concludaturque pro no. At ludus mediocritatem
                    qui, no vituperata assueverit accommodare his. Eos simul tritani gubergren et, te vel ullum commodo docendi, ne sea regione laoreet iracundia. His menandri quaestio ea. Ea congue volutpat has, cu vim delenit offendit ullamcorper ius at agam.
                    </p>
                    <button class="btn btn btn-success" type="button">Read more</button>
                </article>
                <!-- end article 2 -->

                <!-- start article 3 -->
                <article class="blog-post">
                    <div class="tooltip-demo headline">
                    <h4><a href="#">Example article with blockquote</a></h4>
                    <span class="comment"><a href="#" rel="tooltip" data-placement="top" title="2 Comments">2 comments</a></span>
                    </div>
                    <div class="clearfix"></div>
                    <blockquote>
                    <p>
                        Eos simul tritani gubergren et, te vel ullum commodo docendi, ne sea regione laoreet iracundia. His menandri quaestio ea. Ea congue volutpat has, cu vim delenit offendit ullamcorper. Ius at agam malorum suscipiantur, sit aliquid percipitur ei.
                    </p>
                    </blockquote>
                    <ul class="post-meta">
                    <li class="first"><i class="icon-user"></i> <span><a href="#">John doe</a></span></li>
                    <li><i class="icon-list-alt"></i> <span><a href="#">Web design</a></span></li>
                    <li class="last"><i class="icon-tags"></i> <span><a href="#">Design</a>, <a href="#">Blog</a>, <a href="#">Web page</a>, <a href="#">Clean</a></span></li>
                    </ul>
                    <div class="clearfix"></div>
                    <p>
                    Ei eos suavitate forensibus mnesarchum. Eu est timeam vocibus, an nostro aliquam adipiscing quo. Zril equidem et quo, ad albucius scripserit sit. Vis constituto deseruisse an, interesset reprehendunt et mel, gloriatur concludaturque pro no. At ludus mediocritatem
                    qui, no vituperata assueverit accommodare his. Eos simul tritani gubergren et, te vel ullum commodo docendi, ne sea regione laoreet iracundia. His menandri quaestio ea. Ea congue volutpat has, cu vim delenit offendit ullamcorper ius at agam.
                    </p>
                    <button class="btn btn btn-success" type="button">Read more</button>
                </article>
                <!-- end article 3 -->

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

                <div class="span4">
                <aside>
                    <div class="widget">
                    <h4 class="heading-success"><span class="btn btn-large btn-success"><i class="m-icon-big-swapdown m-icon-white"></i></span>&nbsp;&nbsp;About us</h4>
                    <img src="assets/img/avatar.png" class="alignleft" alt="" />
                    <h5>John doe</h5>
                    <p>
                        Donec ullamcorper nulla non metus auctor fringilla commodo luctus
                    </p><a href="#">Profile detail..</a>
                    </div>
                    <div class="widget">
                    <h4 class="heading-success"><span class="btn btn-large btn-success"><i class="m-icon-big-swapdown m-icon-white"></i></span>&nbsp;&nbsp;Categories</h4>
                    <ul>
                        <li><a href="#">Web design (24)</a></li>
                        <li><a href="#">Bloging (11)</a></li>
                        <li><a href="#">Graphic design ((10)</a></li>
                        <li><a href="#">Photoshop (25)</a></li>
                        <li><a href="#">Ilustrator (12)</a></li>
                        <li><a href="#">Internet marketing (10)</a></li>
                    </ul>
                    </div>
                    <div class="clearfix"></div>
                    <div class="widget">
                    <ul id="myTab" class="nav nav-tabs">
                        <li class="active"><a href="#recent" data-toggle="tab">Latest</a></li>
                        <li><a href="#popular" data-toggle="tab">Popular</a></li>
                        <li><a href="#comment" data-toggle="tab">Comment</a></li>
                    </ul>
                    <div id="myTabContent" class="tab-content">
                        <div class="tab-pane fade in active" id="recent">
                        <ul class="recent">
                            <li>
                            <a href="#"><img src="assets/img/dummies/80x80/img1.jpg" class="alignleft" alt="" /></a>
                            <h6><a href="#">Adhuc disputando</a></h6>
                            <p>
                                At vero eos et accusam et justo duo dolores et eabum.
                            </p>
                            <a href="#">Read more..</a>
                            </li>
                            <li>
                            <a href="#"><img src="assets/img/dummies/80x80/img2.jpg" class="alignleft" alt="" /></a>
                            <h6><a href="#">Duo te enim solum</a></h6>
                            <p>
                                Ei viris latine ullamcorper sed vim ex omnes.
                            </p>
                            <a href="#">Read more..</a>
                            </li>
                            <li>
                            <a href="#"><img src="assets/img/dummies/80x80/img3.jpg" class="alignleft" alt="" /></a>
                            <h6><a href="#">Choro scriptorem</a></h6>
                            <p>
                                Fugit choro scriptorem eam at, nusquam consetetur ex.
                            </p>
                            <a href="#">Read more..</a>
                            </li>
                        </ul>
                        </div>
                        <div class="tab-pane fade" id="popular">
                        <ul class="recent">
                            <li>
                            <a href="#"><img src="assets/img/dummies/80x80/img3.jpg" class="alignleft" alt="" /></a>
                            <h6><a href="#">Choro scriptorem</a></h6>
                            <p>
                                Fugit choro scriptorem eam at, nusquam consetetur ex.
                            </p>
                            <a href="#">Read more..</a>
                            </li>
                            <li>
                            <a href="#"><img src="assets/img/dummies/80x80/img1.jpg" class="alignleft" alt="" /></a>
                            <h6><a href="#">Adhuc disputando</a></h6>
                            <p>
                                At vero eos et accusam et justo duo dolores et eabum.
                            </p>
                            <a href="#">Read more..</a>
                            </li>
                            <li>
                            <a href="#"><img src="assets/img/dummies/80x80/img2.jpg" class="alignleft" alt="" /></a>
                            <h6><a href="#">Duo te enim solum</a></h6>
                            <p>
                                Ei viris latine ullamcorper sed vim ex omnes.
                            </p>
                            <a href="#">Read more..</a>
                            </li>
                        </ul>
                        </div>
                        <div class="tab-pane fade" id="comment">
                        <ul class="recent">
                            <li>
                            <a href="#"><img src="assets/img/icons/quote.png" class="alignleft" alt="" /></a>
                            <h6><a href="#">Abbin noer</a></h6>
                            <p>
                                Mel meis tibique et, eam adhuc omnesque disputando ad prompta.
                            </p>
                            <span>Post :14/12/2012</span>
                            </li>
                            <li>
                            <a href="#"><img src="assets/img/icons/quote.png" class="alignleft" alt="" /></a>
                            <h6><a href="#">Dexer read</a></h6>
                            <p>
                                Mel meis tibique et, eam adhuc omnesque disputando.
                            </p>
                            <span>Post :11/12/2012</span>
                            </li>
                            <li>
                            <a href="#"><img src="assets/img/icons/quote.png" class="alignleft" alt="" /></a>
                            <h6><a href="#">Alphon neyah</a></h6>
                            <p>
                                Ei viris latine ullamcorper sed. Vim ex omnes constituam.
                            </p>
                            <span>Post :05/12/2012</span>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </aside>
                </div>

            </div>
            </div>
        </section>
    `;
}