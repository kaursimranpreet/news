import { Router, Route, browserHistory, IndexRoute } from "react-router";
import React from "react";
import Render from "./imports/Render";
import NotFound from "./ui/NotFound";
import RenderTechPage from "./imports/pages/technology/RenderTechPage";
import RenderBusinessPage from "./imports/pages/business/RenderBusinessPage";
import RenderArtPage from "./imports/pages/art/RenderArtPage";
import RenderSciencePage from "./imports/pages/science/RenderSciencePage";
import RenderProgPage from "./imports/pages/programming/RenderProgPage";
import RenderIndiaNewsPage from "./imports/pages/indiaNews/RenderIndiaNewsPage";
export const routes = (
	<Router history={browserHistory}>
		<Route path="/" component={Render} />
		<IndexRoute component={Render}/>
		<Route path="/tech" component={RenderTechPage} />
		<Route path="/business" component={RenderBusinessPage} />
		<Route path="/art" component={RenderArtPage} />
		<Route path="/science" component={RenderSciencePage} />
		<Route path="/programming" component={RenderProgPage} />
		<Route path="/indianews" component={RenderIndiaNewsPage} />
		<Route path="*" component={NotFound} />
	</Router>
);
