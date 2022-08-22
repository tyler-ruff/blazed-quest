/*
    Blazed Fire for HTML5 Framework Example
    > Views in the "Index" namespace
*/

function build_routes(page){
    let data = {};
    switch(page){
		case 'web':
			data = {
				pageNum: 1,
				content: web()
			};
			break;
		case 'software':
			data = {
				pageNum: 2,
				content: software()
			};
			break;
		case 'games':
			data = {
				pageNum: 3,
				content: games()
			};
			break;
		case 'film':
			data = {
				pageNum: 4,
				content: video()
			};
			break;
		case 'marketing':
			data = {
				pageNum: 5,
				content: marketing()
			};
			break;
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
		<section id="subintro">
			<div class="jumbotron subhead" id="overview">
			  <div class="container">
				<div class="row">
				  <div class="span8">
					<h1><i class="m-icon-big-swapright m-icon-white"></i> Our Solutions</h1>
					<p>
						Solutions offered by Blazed Labs LLC, Concrete Games LLC, and Ruff Management Inc.
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
		  <div class="container">
			<div class="row">
			<br /> <br />
			  <div class="span3 bs-docs-sidebar">
				<ul class="nav nav-list bs-docs-sidenav">
				  <li><a href="#blz-one"><i class="icon-chevron-right"></i> Blazed One</a></li>
				  <li><a href="#step-two"><i class="icon-chevron-right"></i> Blazed "Step Two"</a></li>
				  <li><a href="#lf-portfolio"><i class="icon-chevron-right"></i> Legendary Frangollo Portfolio</a></li>
				  <li><a href="#logistics"><i class="icon-chevron-right"></i> Logistic Solutions</a></li>
				  <li><a href="#what-next"><i class="icon-chevron-right"></i> Other Solutions</a></li>
				</ul>
			  </div>
			  <div class="span9">
				<section id="blz-one" class="doc">
				  <div class="page-header first">
					<h2>1. Blazed One Solution</h2>
				  </div>
				  <p>
				  	The Blazed One solution is a selection of Services (Publishing, Telecommunications, and Systems Administration), offered by Blazed Labs LLC.
					These services are offered to all sizes of companies, from small businesses to large enterprises. The Blazed One Solution also includes the Blazed One Hub, as well as other platforms released and maintained by Blazed Labs.
				  </p>
				  <h3>Full list of Services:</h3>
				  <ul>
					<li><a href="https://blazed.xyz/" target="_blank">Publishing</a></li>
					<li><a href="https://blazed.tel/" target="_blank">Telecommunications</a></li>
					<li><a href="https://blazed.systems/" target="_blank">Systems Administration</a></li>
				  </ul>
				  <h3>Full list of Platforms:</h3>
				  <ul>
					<li><a href="https://blazed.games/" target="_blank">Concrete Games</a></li>
					<li><a href="https://blazed.software/" target="_blank">Blazed Software</a></li>
					<li><a href="https://blz.one/" target="_blank">Blazed One Hub</a></li>
					<li><a href="https://blazed.space/" target="_blank">Blazed Space</a></li>
					<li><a href="https://blazed.watch/" target="_blank">Blazed Watch</a></li>
					<li><a href="https://blazed.world/" target="_blank">Blazed World</a></li>
				  </ul>
				</section>
				<section id="step-two" class="doc">
				  <div class="page-header">
					<h2>2. Blazed "Step Two" Solution</h2>
				  </div>
				  <p>
				  	The Blazed "Step Two" solution introduces a business growth and operations protocol into the Blazed ecosystem.
					The "Step Two" solution will consist of the following campaigns:
				  </p>
				  <ul>
					<li><a href="https://blazed.boston/" target="_blank">Blazed Boston</a></li>
					<li><a href="https://blazed.sbs/" target="_blank">Blazed SBS</a></li>
					<li><a href="https://blazed.monster/" target="_blank">Blazed Monster</a></li>
					<li><a href="https://drunkb.us/" target="_blank">Drunk Bus</a></li>
				  </ul>
				</section>
				<section id="lf-portfolio" class="doc">
				  <div class="page-header">
					<h2>3. Legendary Frangollo Portfolio</h2>
				  </div>
				  <p>
				 	The LF Porfolio solution is an annual selection of websites sold through <a href="https://flippa.com/" target="_blank">Flippa</a>. 
				  </p>
				  <h5>Year of 2023</h5>
				  <ul>
					<li><a href="https://ixis.space/" target="_blank">Ixis</a> - Image editor</li>
					<li><a href="https://vexio.quest/" target="_blank">Vexio</a> - Crowdfunding platform</li>
					<li><a href="https://beez.top/" target="_blank">Beez</a> - Advertising/Affiliate marketing</li>
					<li><a href="https://munch-mag.com/" target="_blank">Munch Magazine</a> - Gaming blog/magazine</li>
				  </ul>
				</section>
				<section id="logistics" class="doc">
				  <div class="page-header">
					<h2>4. Logistics Solutions</h2>
				  </div>
				  <p>
					We provide freight forwarding, tracking, and management in partership with <a href="https://rtmtransit.com/" target="_blank">RTM Transportation LLC</a>.
					Together, we move people and freight all over America. We mostly deal in the NorthEast United States, but our influence extends much further.
				  </p>
				  <p>
					We also offer a freight booking and tracking program, <a href="https://fastcar.work/" target="_blank">FastCar</a>.
				  </p>
				  <p>
					Finally, we offer booking services through <a href="https://oceancarservice.com/" target="_blank">Ocean Car Service</a>, for passenger transportation around Ocean City, New Jersey.
				  </p>
				</section>
				<section id="what-next" class="doc">
				  <div class="page-header">
					<h2>Other Solutions</h2>
				  </div>
				  <p>
				 	Check out our other great solutions: 
				  </p>
				  <ul>
					<li><a href="https://blazed.quest/solutions.html?p=web">Web Development</a></li>
					<li><a href="https://blazed.quest/solutions.html?p=software">Software Development</a></li>
					<li><a href="https://blazed.quest/solutions.html?p=games">Video Game Development</a></li>
					<li><a href="https://blazed.quest/solutions.html?p=film">Film Production and Editing</a></li>
					<li><a href="https://blazed.quest/solutions.html?p=marketing">Marketing and Social Media</a></li>
				  </ul>
				</section>


				<br /> <br />

			  </div>
			</div>

		  </div>

    `;
}
function web(){
	return `
		<section id="subintro">
			<div class="jumbotron subhead" id="overview">
				<div class="container">
				<div class="row">
					<div class="span8">
					<h1><i class="m-icon-big-swapright m-icon-white"></i> Web Development </h1>
					<p>
						Web development services offered by Blazed Labs LLC.
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


			<div class="container">
			<div class="row">
			<br /> <br />
				<div class="span3 bs-docs-sidebar">
				<ul class="nav nav-list bs-docs-sidenav">
					<li><a href="#html5-javascript"><i class="icon-chevron-right"></i> HTML5 & Javascript</a></li>
					<li><a href="#svelte-kit"><i class="icon-chevron-right"></i> SvelteKit</a></li>
					<li><a href="#angular"><i class="icon-chevron-right"></i> Angular</a></li>
					<li><a href="#react"><i class="icon-chevron-right"></i> React</a></li>
					<li><a href="#what-next"><i class="icon-chevron-right"></i> Other Solutions</a></li>
				</ul>
				</div>
				<div class="span9">
				<section id="html5-javascript" class="doc">
					<div class="page-header first">
					<h2>1. HTML5 and Javascript</h2>
					</div>
					<p>
						We can make websites in pure HTML5 and Javascript. In fact, we actually created a micro-framework called "<a target="_blank" href="https://github.com/blazed-space/fire">Fire for HTML5</a>".
					</p>
					<p>
						We use <a target="_blank" href="https://netlify.com/">Netlify</a>, <a target="_blank" href="https://vercel.com/">Vercel</a>, <a target="_blank" href="https://render.com/">Render</a>, and <a target="_blank" href="https://pages.github.com/">Github Pages</a> for static site publishing.
					</p>
					<p>
						We use <a target="_blank" href="https://cloudflare.com/">CloudFlare</a> for Authoritative DNS. 
					</p>
					<p>
						We can use <a href="https://firebase.google.com/" target="_blank">Firebase</a> for Authentication and Database.
						We can use <a href="https://auth0.com/" target="_blank">Auth0</a> for Authentication.
					</p>
					<p> 
						We can use <a href="https://elfsight.com/?ref=e147bcdb-3178-48f1-acfd-0a8d5045322f" target="_blank">Elfsight</a> to add widgets to the site.
					</p>
					<p>
						We can use <a href="https://bluehost.sjv.io/c/3599842/1424923/11352" target="_blank">BlueHost</a> to spin up VPS instances.
					</p>
					<p>
						We can use <a href="https://www.sanity.io/" target="_blank">SanityCMS</a> to manage content.
					</p>
					<p>
						We will use <a href="https://www.github.com/" target="_blank">Github</a> to manage source code.
					</p>
				</section>
				<section id="svelte-kit" class="doc">
					<div class="page-header">
					<h2>2. SvelteKit</h2>
					</div>
					<p>
						We can also make websites using <a href="https://kit.svelte.dev/" target="_blank">SvelteKit</a>. These websites are lightweight, easy to upgrade, and easy to build upon.
					</p>
					<p>
						We have created a distribution of <a target="_blank" href="https://github.com/blazed-space/fire-svelte">Fire for SvelteKit</a>.
					</p>
					<p>
						We use <a target="_blank" href="https://netlify.com/">Netlify</a> and <a target="_blank" href="https://vercel.com/">Vercel</a>,
					</p>
				</section>
				<section id="angular" class="doc">
					<div class="page-header">
					<h2>3. Angular</h2>
					</div>
					<p>
					We can also make websites using <a href="https://angular.io/ target="_blank">Angular</a>. These websites are powerful, scalable, and performant.
					</p>
					<p>
						We have created a distribution of <a target="_blank" href="https://github.com/blazed-space/fire-angular">Fire for Angular</a>.
					</p>
					<p>
						We use <a target="_blank" href="https://netlify.com/">Netlify</a> to publish the site.
					</p>
				</section>
				<section id="react" class="doc">
					<div class="page-header">
					<h2>4. React</h2>
					</div>
					<p>
					We can also make websites using <a href="https://reactjs.com/" target="_blank">React</a>. These websites are powerful, scalable, and performant.
					</p>
					<p>
						We have created a distribution of <a target="_blank" href="https://github.com/blazed-space/fire-react">Fire for React</a>.
					</p>
					<p>
						We use <a target="_blank" href="https://netlify.com/">Netlify</a>, <a target="_blank" href="https://vercel.com/">Vercel</a>, and <a target="_blank" href="https://render.com/">Render</a> for static site publishing.
					</p>
				</section>
				<section id="what-next" class="doc">
					<div class="page-header">
					<h2>Other Solutions</h2>
					</div>
					<p>
						Check out our other great solutions: 
					</p>
					<ul>
					<li>Web Development</li>
					<li><a href="https://blazed.quest/solutions.html?p=software">Software Development</a></li>
					<li><a href="https://blazed.quest/solutions.html?p=games">Video Game Development</a></li>
					<li><a href="https://blazed.quest/solutions.html?p=film">Film Production and Editing</a></li>
					<li><a href="https://blazed.quest/solutions.html?p=marketing">Marketing and Social Media</a></li>
					</ul>
				</section>


				<br /> <br />

				</div>
			</div>

		</div>

	`;
}

function software(){
	return `
		<section id="subintro">
			<div class="jumbotron subhead" id="overview">
				<div class="container">
				<div class="row">
					<div class="span8">
					<h1><i class="m-icon-big-swapright m-icon-white"></i> Software Development </h1>
					<p>
						Software development services offered by Blazed Labs LLC.
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


			<div class="container">
			<div class="row">
			<br /> <br />
				<div class="span3 bs-docs-sidebar">
				<ul class="nav nav-list bs-docs-sidenav">
					<li><a href="#php"><i class="icon-chevron-right"></i> PHP</a></li>
					<li><a href="#node-js"><i class="icon-chevron-right"></i> Node.JS</a></li>
					<li><a href="#ruby-python"><i class="icon-chevron-right"></i> Ruby & Python</a></li>
					<li><a href="#java"><i class="icon-chevron-right"></i> Java</a></li>
					<li><a href="#dot-net"><i class="icon-chevron-right"></i> C#/.NET</a></li>
					<li><a href="#what-next"><i class="icon-chevron-right"></i> Other Solutions</a></li>
				</ul>
				</div>
				<div class="span9">
				<section id="php" class="doc">
					<div class="page-header first">
						<h2>1. PHP</h2>
					</div>
					<p>
					We can make website backends using pure <a href="https://php.net/" target="_blank">PHP</a>.
					</p>
					<p>
						We can also optionally use the <a href="https://fuelphp.com/" target="_blank">FuelPHP</a> framework and/or our own <a target="_blank" href="https://github.com/blazed-space/ice">Utilities</a>
						and <a target="_blank" href="https://github.com/blazed-space/blz-ice-php">Ice Boilerplate</a>.
					</p>
					<p>
						We can use <a href="https://mysql.com/" target="_blank">MySQL DB</a> for Database.
						We can use <a href="https://github.com/delight-im/PHP-Auth" target="_blank">delight-im/auth</a> for Authentication.
					</p>
					<p>
						We can use <a href="https://namecheap.com/" target="_blank">NameCheap</a> to provide managed CPanel instances.
					</p>
					<p>
						We will use <a href="https://www.github.com/" target="_blank">Github</a> to manage source code.
					</p>
				</section>
				<section id="node-js" class="doc">
					<div class="page-header">
						<h2>2. Node.JS</h2>
					</div>
					<p>
						We can make website backends and applications using <a href="https://nodejs.org" target="_blank">Node</a>. These websites are lightweight, performant, and powerful.
					</p>
					<p>
						We have created a distribution of <a target="_blank" href="https://github.com/blazed-space/blz-ice-node">Ice for Node.js</a>. Ice uses "<a target="_blank" href="https://nestjs.com/">NestJS</a>". We can also use "<a target="_blank" href="https://expressjs.com/">Exoress</a>".
					</p>
					<p>
						We can use <a target="_blank" href="https://www.passportjs.org/">Passport</a> for authentication.
					</p>
					<p>
						We use <a target="_blank" href="https://render.com/">Render</a>, <a target="_blank" href="https://cloud.google.com/">Google Cloud</a>,
						<a target="_blank" href="https://azure.microsoft.com/">Microsoft Azure</a>, and <a target="_blank" href="https://cloud.oracle.com/">Oracle Cloud</a> to host Node.js instances.
					</p>
					<p>
						Standalone software can be published to <a target="_blank" href="https://blazed.software/">Blazed Software</a> by <a href="https://blazed.xyz/" target="_blank">Blazed Publishing</a>.
					</p>
				</section>
				<section id="ruby-python" class="doc">
					<div class="page-header">
						<h2>3. Ruby and Python</h2>
					</div>
					<p>
						We can make applications and websites with <a target="_blank" href="https://www.ruby-lang.org/en/">Ruby</a> and/or <a target="_blank" href="https://www.python.org/">Python</a>.
					</p>
					<p>
						We have created a distribution of <a target="_blank" href="https://github.com/blazed-space/blz-ice-ruby">Ice for Ruby</a>. Ice uses the "<a target="_blank" href="https://rubyonrails.org/">Ruby on Rails</a>" framework.
					</p>
					<p>
						We use <a target="_blank" href="https://render.com/">Render</a> to publish (if its a site).
					</p>
					<p>
						Standalone software can be published to <a target="_blank" href="https://blazed.software/">Blazed Software</a> by <a href="https://blazed.xyz/" target="_blank">Blazed Publishing</a>.
					</p>
				</section>
				<section id="java" class="doc">
					<div class="page-header">
						<h2>4. Java</h2>
					</div>
					<p>
						We can also make websites and applications using <a href="https://www.java.com/en/" target="_blank">Java</a>. These websites/applications are powerful, scalable, and performant.
					</p>
					<p>
						We have created a distribution of <a target="_blank" href="https://github.com/blazed-space/blz-ice-java">Ice for Java</a>. Ice uses <a href="https://spring.io/" target="_blank">Spring Boot</a>.
					</p>
					<p>
						We can use <a target="_blank" href="https://cloud.oracle.com/">Oracle Cloud</a> and <a target="_blank" href="https://cloud.google.com/">Google Cloud</a> to host java web applications.
					</p>
					<p>
						Standalone software can be published to <a target="_blank" href="https://blazed.software/">Blazed Software</a> by <a href="https://blazed.xyz/" target="_blank">Blazed Publishing</a>.
					</p>
				</section>
				<section id="dot-net" class="doc">
					<div class="page-header">
						<h2>5. C#/.NET</h2>
					</div>
					<p>
						We can also make websites and applications using <a href="https://docs.microsoft.com/en-us/dotnet/csharp/" target="_blank">C# (C-Sharp)</a> programming language, built on the <a target="_blank" href="https://dotnet.microsoft.com/en-us/download/dotnet-framework">.NET Framework</a> by <a target="_blank" href="https://microsoft.com/">Microsoft</a>.
					</p>
					<p>
						We have created a distribution of <a target="_blank" href="https://github.com/blazed-space/blz-ice-dotnet">Ice for C#/.NET</a>. Ice uses <a href="https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps/blazor" target="_blank">Blazor</a>.
					</p>
					<p>
						We can use <a target="_blank" href="https://azure.microsoft.com/">Microsoft Azure</a> to host C# web applications.
					</p>
					<p>
						Standalone software can be published to <a target="_blank" href="https://blazed.software/">Blazed Software</a> by <a href="https://blazed.xyz/" target="_blank">Blazed Publishing</a>.
					</p>
				</section>
				<section id="what-next" class="doc">
					<div class="page-header">
						<h2>Other Solutions</h2>
					</div>
					<p>
						Check out our other great solutions: 
					</p>
					<ul>
					<li><a href="https://blazed.quest/solutions.html?p=web">Web Development</a></li>
					<li>Software Development</li>
					<li><a href="https://blazed.quest/solutions.html?p=games">Video Game Development</a></li>
					<li><a href="https://blazed.quest/solutions.html?p=film">Film Production and Editing</a></li>
					<li><a href="https://blazed.quest/solutions.html?p=marketing">Marketing and Social Media</a></li>
					</ul>
				</section>


				<br /> <br />

				</div>
			</div>

		</div>

	`;
}

function games(){
	return `
		<section id="subintro">
			<div class="jumbotron subhead" id="overview">
				<div class="container">
				<div class="row">
					<div class="span8">
					<h1><i class="m-icon-big-swapright m-icon-white"></i> Video Game Development </h1>
					<p>
						Video game development services offered by Concrete Games LLC.
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


			<div class="container">
			<div class="row">
			<br /> <br />
				<div class="span3 bs-docs-sidebar">
				<ul class="nav nav-list bs-docs-sidenav">
					<li><a href="#js-browser"><i class="icon-chevron-right"></i> Javascript Browser Games</a></li>
					<li><a href="#python-desktop"><i class="icon-chevron-right"></i> Python Desktop Games</a></li>
					<li><a href="#ruby-python"><i class="icon-chevron-right"></i> Ruby & Python</a></li>
					<li><a href="#mobile"><i class="icon-chevron-right"></i> Mobile Games</a></li>
					<li><a href="#dot-net"><i class="icon-chevron-right"></i> C#/.NET</a></li>
					<li><a href="#what-next"><i class="icon-chevron-right"></i> Other Solutions</a></li>
				</ul>
				</div>
				<div class="span9">
				<section id="js-browser" class="doc">
					<div class="page-header first">
						<h2>1. Javascript Browser Games</h2>
					</div>
					<p>
						We can make games for web using one of the following game frameworks:
					</p>
					<ul>
						<li><a target="_blank" href="https://pixijs.com/">Pixi JS</a></li>
						<li><a target="_blank" href="https://phaser.io/">Phaser</a></li>
						<li><a target="_blank" href="https://melonjs.org/">MelonJS</a></li>
						<li><a target="_blank" href="https://www.kiwijs.org/">Kiwi.js</a></li>
						<li><a target="_blank" href="https://craftyjs.com/">Crafty</a></li>
						<li><a target="_blank" href="https://github.com/liabru/matter-js">Matter JS</a></li>
						<li><a target="_blank" href="https://piqnt.com/stage.js/">Stage.js</a></li>
						<li><a target="_blank" href="https://www.cocos.com/en/">Cocos 2D</a></li>
						<li><a target="_blank" href="https://www.babylonjs.com/">Babylon.js</a></li>
					</ul>
					<p>
						We can publish your game to <a href="https://blazed.games/" target="_blank">Concrete Games</a> via <a href="https://blazed.xyz/" target="_blank">Blazed Publishing</a>.
					</p>
				</section>
				<section id="python-desktop" class="doc">
					<div class="page-header">
						<h2>2. Python Desktop Games</h2>
					</div>
					<p>
						We can make desktop games using <a target="_blank" href="https://www.python.org/">Python</a> and one of the following frameworks:
					</p>
					<ul>
						<li><a target="_blank" href="https://www.pygame.org/">Pygame</a></li>
						<li><a target="_blank" href="https://api.arcade.academy/en/latest/index.html">Arcade</a></li>
						<li><a target="_blank" href="https://wasabi2d.readthedocs.io/">Wasabi 2D</a></li>
						<li><a target="_blank" href="https://www.ursinaengine.org/">Ursina</a></li>
						<li><a target="_blank" href="https://kivy.org/#home">Kivy</a></li>
						<li><a target="_blank" href="https://pyglet.org/">Pyglet</a></li>
						<li><a target="_blank" href="https://www.cocos.com/en/">Cocos 2D</a></li>
						<li><a target="_blank" href="https://www.babylonjs.com/">Babylon.js</a></li>
					</ul>
					<p>
						We can publish your game to <a href="https://blazed.games/" target="_blank">Concrete Games</a> via <a href="https://blazed.xyz/" target="_blank">Blazed Publishing</a>.
					</p>
				</section>
				<section id="ruby-python" class="doc">
					<div class="page-header">
						<h2>3. C++ Desktop Games</h2>
					</div>
					<p>
						We can make desktop games using <a target="_blank" href="https://cplusplus.com">C++</a> and one of the following engines:
					</p>
					<ul>
						<li><a target="_blank" href="https://godotengine.org/">Godot</a></li>
						<li><a target="_blank" href="https://www.cryengine.com/">CryEngine</a></li>
						<li><a target="_blank" href="https://www.unrealengine.com/en-US/blog">Unreal Engine</a></li>
						<li><a target="_blank" href="http://torque3d.org/">Torque3D</a></li>
						<li><a target="_blank" href="https://irrlicht.sourceforge.io/">IrrLicht</a></li>
						<li><a target="_blank" href="https://urho3d.io/">Urho3D</a></li>
						<li><a target="_blank" href="http://www.panda3d.org/">Panda3D</a></li>
						<li><a target="_blank" href="https://unigine.com/">Ursina Engine</a></li>
						<li><a target="_blank" href="https://shiva-engine.com/">Shiva Engine</a></li>
					</ul>
					<p>
						We can publish your game to <a href="https://blazed.games/" target="_blank">Concrete Games</a> via <a href="https://blazed.xyz/" target="_blank">Blazed Publishing</a>.
					</p>
				</section>
				<section id="mobile" class="doc">
					<div class="page-header">
						<h2>4. Mobile Games</h2>
					</div>
					<p>
						We can make games for <a href="https://www.apple.com/ios/" target="_blank">Apple IOS</a> and <a href="https://www.android.com/" target="_blank">Android</a>.
					</p>
					<p>
						We can publish IOS apps to the <a href="https://www.apple.com/app-store/" target="_blank">Apple App Store</a>.
					</p>
					<p>
						We can publish Android apps to the <a href="https://play.google.com/store/apps?hl=en&gl=US" target="_blank">Google Play Store</a>.
					</p>
				</section>
				<section id="dot-net" class="doc">
					<div class="page-header">
						<h2>5. Facebook Games</h2>
					</div>
					<p>
						We can also create games for <a href="https://facebook.com/" target="_blank">Facebook</a> using their <a href="https://developers.facebook.com/docs/games/build/instant-games" target="_blank">Instant Games</a> framework.
					</p>
					<p>
						These games can achieve great growth through social marketing.
					</p>
				</section>
				<section id="what-next" class="doc">
					<div class="page-header">
						<h2>Other Solutions</h2>
					</div>
					<p>
						Check out our other great solutions: 
					</p>
					<ul>
					<li><a href="https://blazed.quest/solutions.html?p=web">Web Development</a></li>
					<li><a href="https://blazed.quest/solutions.html?p=software">Software Development</a></li>
					<li>Video Game Development</li>
					<li><a href="https://blazed.quest/solutions.html?p=film">Film Production and Editing</a></li>
					<li><a href="https://blazed.quest/solutions.html?p=marketing">Marketing and Social Media</a></li>
					</ul>
				</section>


				<br /> <br />

				</div>
			</div>

		</div>
	`;
}

function video(){
	return `
		<section id="subintro">
			<div class="jumbotron subhead" id="overview">
				<div class="container">
				<div class="row">
					<div class="span8">
					<h1><i class="m-icon-big-swapright m-icon-white"></i> Film Making and Editing </h1>
					<p>
						Film making services offered by Blazed Labs LLC and Ruff Management Inc.
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


			<div class="container">
			<div class="row">
			<br /> <br />
				<div class="span3 bs-docs-sidebar">
				<ul class="nav nav-list bs-docs-sidenav">
					<li><a href="#ads"><i class="icon-chevron-right"></i> ADs & Commercials</a></li>
					<li><a href="#shows-short-films"><i class="icon-chevron-right"></i> Shows & Short Films</a></li>
					<li><a href="#feature-length"><i class="icon-chevron-right"></i> Feature Length Films</a></li>
					<li><a href="#what-next"><i class="icon-chevron-right"></i> Other Solutions</a></li>
				</ul>
				</div>
				<div class="span9">
				<section id="ads" class="doc">
					<div class="page-header first">
						<h2>1. Ads and Commercials</h2>
					</div>
					<p>
						We can help organize a film-shoot for your company's commercial. Our services are as follows:
					</p>
					<ul>
						<li>Scheduling and Planning</li>
						<li>Talent Acquisition</li>
						<li>Set Staging, Lighting, Sound</li>
						<li>Direction and Cast Management</li>
						<li>Editing and Postproduction</li>
						<li>Marketing</li>
						<li>Publishing and Distribution</li>
					</ul>
					<p>
						We can publish your commercial to <a href="https://blazed.watch/" target="_blank">Blazed Watch</a> via <a href="https://blazed.xyz/" target="_blank">Blazed Publishing</a>.
					</p>
				</section>
				<section id="shows-short-films" class="doc">
					<div class="page-header">
						<h2>2. Shows and Short Films</h2>
					</div>
					<p>
						We can help organize a film-shoot for episodes of your show. Our services are as follows:
					</p>
					<ul>
						<li>Scheduling and Planning</li>
						<li>Talent Acquisition</li>
						<li>Set Staging, Lighting, Sound</li>
						<li>Direction and Cast Management</li>
						<li>Editing and Postproduction</li>
						<li>Marketing</li>
						<li>Publishing and Distribution</li>
					</ul>
					<p>
						We can publish your show to <a href="https://blazed.watch/" target="_blank">Blazed Watch</a> via <a href="https://blazed.xyz/" target="_blank">Blazed Publishing</a>.
					</p>
				</section>
				<section id="feature-length" class="doc">
					<div class="page-header">
						<h2>3. Feature Length Films</h2>
					</div>
					<p>
					We can help organize a film-shoot for episodes of your movie. Our services are as follows:
					</p>
					<ul>
						<li>Scheduling and Planning</li>
						<li>Talent Acquisition</li>
						<li>Set Staging, Lighting, Sound</li>
						<li>Direction and Cast Management</li>
						<li>Editing and Postproduction</li>
						<li>Marketing</li>
						<li>Publishing and Distribution</li>
					</ul>
					<p>
						We can publish your movie to <a href="https://blazed.watch/" target="_blank">Blazed Watch</a> via <a href="https://blazed.xyz/" target="_blank">Blazed Publishing</a>.
					</p>
				</section>
				<section id="what-next" class="doc">
					<div class="page-header">
						<h2>Other Solutions</h2>
					</div>
					<p>
						Check out our other great solutions: 
					</p>
					<ul>
					<li><a href="https://blazed.quest/solutions.html?p=web">Web Development</a></li>
					<li><a href="https://blazed.quest/solutions.html?p=software">Software Development</a></li>
					<li><a href="https://blazed.quest/solutions.html?p=games">Video Game Development</a></li>
					<li>Film Production and Editing</li>
					<li><a href="https://blazed.quest/solutions.html?p=marketing">Merketing and Social Media</a></li>
					</ul>
				</section>


				<br /> <br />

				</div>
			</div>

		</div>
	`;
}

function marketing(){
	return `
		<section id="subintro">
			<div class="jumbotron subhead" id="overview">
				<div class="container">
				<div class="row">
					<div class="span8">
					<h1><i class="m-icon-big-swapright m-icon-white"></i> Marketing and Social Media </h1>
					<p>
						Marketing services offered by Blazed Labs LLC and Ruff Management Inc.
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


			<div class="container">
			<div class="row">
			<br /> <br />
				<div class="span3 bs-docs-sidebar">
				<ul class="nav nav-list bs-docs-sidenav">
					<li><a href="#ads"><i class="icon-chevron-right"></i> Website ADs</a></li>
					<li><a href="#graphic-design"><i class="icon-chevron-right"></i> Graphic Design & Branding</a></li>
					<li><a href="#feature-length"><i class="icon-chevron-right"></i> Feature Length Films</a></li>
					<li><a href="#what-next"><i class="icon-chevron-right"></i> Other Solutions</a></li>
				</ul>
				</div>
				<div class="span9">
				<section id="ads" class="doc">
					<div class="page-header first">
						<h2>1. Website ADs</h2>
					</div>
					<p>
						We can help organize a marketing compaigns with the following providers:
					</p>
					<ul>
						<li><a target="_blank" href="https://ads.google.com/">Google ADs</a></li>
						<li><a target="_blank" href="https://www.facebook.com/business/ads">Facebook ADs</a></li>
						<li><a target="_blank" href="https://business.linkedin.com/marketing-solutions/ads">Linkedin ADs</a></li>
						<li><a target="_blank" href="https://forbusiness.snapchat.com/">Snapchat ADs</a></li>
						<li><a target="_blank" href="https://ads.tiktok.com/i18n/">TickTock ADs</a></li>
					</ul>
				</section>
				<section id="graphic-design" class="doc">
					<div class="page-header">
						<h2>2. Graphic Design and Branding</h2>
					</div>
					<p>
						We can design graphics, logos, and branding material for you company.
					</p>
				</section>
				<section id="feature-length" class="doc">
					<div class="page-header">
						<h2>3. Social Media</h2>
					</div>
					<p>
						We can help manage your company's social presence. Our support platforms is as follows:
					</p>
					<ul>
						<li><a target="_blank" href="https://facebook.com/">Facebook</a></li>
						<li><a target="_blank" href="https://twitter.com/">Twitter</a></li>
						<li><a target="_blank" href="https://linkedin.com/">Linkedin</a></li>
						<li><a target="_blank" href="https://github.com/">GitHub</a></li>
					</ul>
				</section>
				<section id="what-next" class="doc">
					<div class="page-header">
						<h2>Other Solutions</h2>
					</div>
					<p>
						Check out our other great solutions: 
					</p>
					<ul>
					<li><a href="https://blazed.quest/solutions.html?p=web">Web Development</a></li>
					<li><a href="https://blazed.quest/solutions.html?p=software">Software Development</a></li>
					<li><a href="https://blazed.quest/solutions.html?p=games">Video Game Development</a></li>
					<li><a href="https://blazed.quest/solutions.html?p=film">Film Production and Editing</a></li>
					<li>Marketing and Social Media</li>
					</ul>
				</section>


				<br /> <br />

				</div>
			</div>

		</div>
	`;
}