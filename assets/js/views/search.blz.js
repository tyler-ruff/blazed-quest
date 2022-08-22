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
                pageNum: 11,
                content: search()
            };
            break;
        }
    return data;
}

function search(){
  return `
    <section id="subintro">
      <div class="jumbotron subhead" id="overview">
          <div class="container">
              <div class="row">
                <div class="span8">
                    <h3><i class="m-icon-big-swapright m-icon-white"></i> Search</h3>
                    <p>Search by keyword on Blazed Quest. Searching for: "<span id="search-term"></span>".</p>
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
          <div class="span12">
            <div class="gcse-searchresults-only"></div>
          </div>
        </div>
      </div>
    </section>
  `;
}
