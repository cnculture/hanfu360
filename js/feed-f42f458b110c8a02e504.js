(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["feed"],{"169f":function(e,t,n){"use strict";var s=n("da23"),i=n.n(s);i.a},2988:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article-card",{attrs:{liked:e.liked,loading:e.loading},on:{"on-like":e.likeFeed,"on-share":e.shareFeed,"on-more":e.moreAction,"on-comment":e.commentFeed}},[n("common-header",{attrs:{slot:"head"},slot:"head"},[n("avatar",{attrs:{user:e.user,size:"tiny"}}),n("span",{staticClass:"m-text-cut m-flex-none username"},[e._v("\n      "+e._s(e.user.name)+"\n    ")]),e.isMine?e._e():n("template",{class:{c_59b6d7:"unFollow"!==e.relation.status},slot:"right"},[n("svg",{staticClass:"m-style-svg m-svg-def",on:{click:function(t){e.followUserByStatus(e.relation.status)}}},[n("use",{attrs:{"xlink:href":e.relation.icon}})])])],2),n("load-more",{ref:"loadmore",attrs:{"on-refresh":e.onRefresh}},[n("main",{staticClass:"m-flex-shrink1 m-flex-grow1 m-art m-main"},[n("div",{staticClass:"m-art-body"},[e.title?n("h2",[e._v(e._s(e.title))]):e._e(),e.video?n("video",{staticClass:"feed-detail-video",attrs:{poster:e.cover_file,controls:"",autoplay:""}},[n("source",{attrs:{src:e.video_file,type:"video/mp4"}})]):e._e(),e._l(e.images,function(t){return t.file?n("async-file",{key:t.file,attrs:{file:t.file},scopedSlots:e._u([{key:"default",fn:function(s){return s.src?n("img",{attrs:{src:s.src},on:{click:function(n){e.onFileClick(t)}}}):e._e()}}])}):e._e()}),n("p",{staticClass:"m-text-box",domProps:{innerHTML:e._s(e.formatBody(e.feedContent))}})],2),n("div",{staticClass:"m-box m-aln-center m-justify-bet m-art-foot"},[n("div",{staticClass:"m-flex-grow1 m-flex-shrink1 m-art-like-list"},[e.likeCount>0?n("router-link",{staticClass:"m-box m-aln-center",attrs:{tag:"div",to:"likers",append:""}},[n("ul",{staticClass:"m-box m-flex-grow0 m-flex-shrink0"},e._l(e.likes.slice(0,5),function(t,s){var i=t.user;void 0===i&&(i={});var a=t.id;return n("li",{key:a,staticClass:"m-avatar-box tiny",class:"m-avatar-box-"+i.sex,style:{zIndex:5-s}},[n("img",{attrs:{src:e.getAvatar(i.avatar)}})])})),n("span",[e._v(e._s(e._f("formatNum")(e.likeCount))+"人点赞")])]):e._e()],1),n("div",{staticClass:"m-box-model m-aln-end m-art-info"},[e.time?n("span",[e._v("发布于"+e._s(e._f("time2tips")(e.time)))]):e._e(),n("span",[e._v(e._s(e._f("formatNum")(e.feed.feed_view_count||0))+"浏览")])])]),n("div",{staticClass:"m-box-model m-box-center m-box-center-a m-art-reward"},[n("button",{staticClass:"m-art-rew-btn",on:{click:e.rewardFeed}},[e._v("打 赏")]),n("p",{staticClass:"m-art-rew-label"},[n("a",{attrs:{href:"javascript:;"}},[e._v(e._s(e._f("formatNum")(e.reward.count)))]),e._v("人打赏，共"),n("a",{attrs:{href:"javascript:;"}},[e._v(e._s(~~e.reward.amount))]),e._v(e._s(e.currencyUnit))]),n("router-link",{staticClass:"m-box m-aln-center m-art-rew-list",attrs:{tag:"ul",to:"rewarders",append:""}},[e._l(e.rewardList,function(t){return n("li",{key:t.id,staticClass:"m-flex-grow0 m-flex-shrink0 m-art-rew m-avatar-box tiny",class:"m-avatar-box-"+t.user.sex},[n("img",{attrs:{src:e.getAvatar(t.user.avatar)}})])}),e.rewardList.length>0?n("li",{staticClass:"m-box m-aln-center"},[n("svg",{staticClass:"m-style-svg m-svg-def",staticStyle:{fill:"#bfbfbf"}},[n("use",{attrs:{"xlink:href":"#icon-arrow-right"}})])]):e._e()],2)],1)]),n("detail-ad",{attrs:{type:"feed"}}),n("div",{staticClass:"m-box-model m-art-comments",attrs:{id:"comment_list"}},[n("ul",{staticClass:"m-box m-aln-center m-art-comments-tabs"},[n("li",[e._v(e._s(e._f("formatNum")(e.commentCount))+"条评论")])]),e._l(e.pinnedCom,function(t){return n("comment-item",{key:"pinned-comment-"+t.id,attrs:{pinned:!0,comment:t},on:{click:e.replyComment}})}),e._l(e.comments,function(t){return n("comment-item",{key:t.id,attrs:{comment:t},on:{click:e.replyComment}})}),n("div",{staticClass:"m-box m-aln-center m-justify-center load-more-box"},[e.noMoreCom?n("span",{staticClass:"load-more-ph"},[e._v("---没有更多---")]):n("span",{staticClass:"load-more-btn",on:{click:function(t){t.stopPropagation(),e.fetchFeedComments(e.maxComId)}}},[e._v("\n          "+e._s(e.fetchComing?"加载中...":"点击加载更多")+"\n        ")])])],2)],1)],1)},i=[],a=n("8afe"),o=(n("f751"),n("7f7f"),n("a481"),n("c93e")),r=n("2f62"),c=n("607e"),d=n("ae61"),l=n("9e56"),f=n("1238"),u=n("365c"),m=n("c24f"),h=n("95d8"),p={name:"FeedDetail",components:{ArticleCard:c["a"],CommentItem:d["a"],DetailAd:l["a"]},data:function(){return{feed:{},loading:!0,fetching:!1,comments:[],pinnedCom:[],rewardList:[],fetchComing:!1,noMoreCom:!1,maxComId:0,user:{}}},computed:Object(o["a"])({},Object(r["d"])(["CURRENTUSER"]),{feedID:function(){return this.$route.params.feedID},video:function(){return this.feed.video},video_file:function(){return!!this.video&&"".concat(this.$http.defaults.baseURL,"/files/").concat(this.video.video_id)},title:function(){return this.feed.title},cover_file:function(){return!!this.video&&"".concat(this.$http.defaults.baseURL,"/files/").concat(this.video.video_id)},isMine:function(){return this.feed.user_id===this.CURRENTUSER.id},likes:{get:function(){return this.feed.likes||[]},set:function(e){this.feed.likes=e}},liked:{get:function(){return!!this.feed.has_like},set:function(e){this.feed.has_like=e}},likeCount:{get:function(){return this.feed.like_count||0},set:function(e){this.feed.like_count=~~e}},commentCount:{get:function(){return this.feed.feed_comment_count||0},set:function(e){this.feed.feed_comment_count=e}},reward:function(){return this.feed.reward||{}},images:function(){return this.feed.images||[]},time:function(){return this.feed.created_at||""},feedContent:function(){return this.feed.feed_content||""},isWechat:function(){return this.$store.state.BROWSER.isWechat},has_collect:{get:function(){return this.feed.has_collect},set:function(e){this.feed.has_collect=e}},relation:{get:function(){var e={unFollow:{text:"关注",status:"unFollow",icon:"#icon-unFollow"},follow:{text:"已关注",status:"follow",icon:"#icon-follow"},eachFollow:{text:"互相关注",status:"eachFollow",icon:"#icon-eachFollow"}},t=this.user,n=t.follower,s=t.following;return e[n&&s?"eachFollow":n?"follow":"unFollow"]},set:function(e){this.user.follower=e}}}),activated:function(){this.feedID&&(this.comments=[],this.feed={},this.rewardList=[],this.fetchFeed())},deactivated:function(){this.loading=!0,this.share={title:"",desc:"",link:""},this.config={appid:"",timestamp:0,noncestr:"",signature:""}},methods:{formatBody:function(e){var t=/<\s*script\s*>(.*?)<\s*\/\s*script\s*>/i;e=e.replace(t,"&lt;script&gt;$1&lt;/script&gt;"),e=e.replace(/\n/g,"<br>");var n=/(https?|http|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/g;return e?e.replace(n,function(e){return'<a class="m-art-links" href="'.concat(e,'" target="__blank">#网页链接#</a>')}):""},fetchFeed:function(e){var t=this;if(!this.fetching){this.fetching=!0;var n=window.location.origin+"/hanfu360/".substr(0,"/hanfu360/".length-1)+this.$route.fullPath,s="IOS"===this.$store.state.BROWSER.OS?window.initUrl:n;this.$http.get("/feeds/".concat(this.feedID)).then(function(i){var a=i.data,o=void 0===a?{}:a;t.feed=o,t.fetching=!1,t.fetchUserInfo(),t.fetchFeedComments(),t.fetchRewards(),t.isWechat&&Object(f["a"])(s,{title:"".concat(o.user.name,"的动态"),desc:"".concat(o.feed_content),link:n,imgUrl:o.images.length>0?"".concat(t.$http.defaults.baseURL,"/files/").concat(o.images[0].file):""}),e&&"function"===typeof e&&e()}).catch(function(){t.goBack(),e&&"function"===typeof e&&e()})}},fetchUserInfo:function(){var e=this;Object(m["f"])(this.feed.user_id,!0).then(function(t){e.user=Object.assign({},e.user,t),e.loading=!1})},fetchFeedComments:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.fetchComing||(this.fetchComing=!0,h["h"](this.feedID,{after:t}).then(function(n){var s=n.data,i=s.pinneds,o=void 0===i?[]:i,r=s.comments,c=void 0===r?[]:r;if(t)e.comments=Object(a["a"])(e.comments).concat(Object(a["a"])(c));else{e.pinnedCom=o;var d=o.map(function(e){return e.id});e.comments=c.filter(function(e){return d.indexOf(e.id)<0})}c.length&&(e.maxComId=c[c.length-1].id),e.noMoreCom=c.length!==u["b"],e.$nextTick(function(){e.fetchComing=!1,e.loading=!1})}).catch(function(){e.loading=!1,e.fetchComing=!1}))},fetchRewards:function(){var e=this;h["j"](this.feedID,{limit:10}).then(function(t){var n=t.data,s=void 0===n?[]:n;e.rewardList=s})},getAvatar:function(e){return e&&e.url||null},rewardFeed:function(){var e=this,t=function(t){e.fetchRewards(),e.feed.reward_number+=1,e.feed.reward_amount+=t};this.$bus.$emit("reward",{type:"feed",api:h["l"],payload:this.feedID,callback:t})},likeFeed:function(){var e=this,t=this.liked?"delete":"post",n=this.liked?"/feeds/".concat(this.feedID,"/unlike"):"/feeds/".concat(this.feedID,"/like");this.fetching||(this.fetching=!0,this.$http({method:t,url:n,validateStatus:function(e){return 201===e||204===e}}).then(function(){"post"===t?(e.liked=!0,e.likeCount+=1,e.likes.length<5&&(e.likes=Object(a["a"])(e.likes).concat([{user:e.CURRENTUSER,id:(new Date).getTime(),user_id:e.CURRENTUSER.id}]))):(e.liked=!1,e.likeCount-=1,e.likes=e.likes.filter(function(t){return t.user_id!==e.CURRENTUSER.id})),e.fetching=!1}).catch(function(){e.fetching=!1}))},commentFeed:function(){var e=this;this.$bus.$emit("commentInput",{onOk:function(t){e.sendComment({body:t})}})},shareFeed:function(){this.isWechat?this.$Message.success("请点击右上角微信分享😳"):this.$Message.success("请使用浏览器的分享功能😳")},moreAction:function(){var e=this,t=[{text:this.has_collect?"取消收藏":"收藏",method:function(){var t,n,s;e.has_collect?(n="取消收藏",s="delete",t="/feeds/".concat(e.feedID,"/uncollect")):(n="已加入我的收藏",s="post",t="/feeds/".concat(e.feedID,"/collections")),e.$http({url:t,method:s,validateStatus:function(e){return 204===e||201===e}}).then(function(){e.$Message.success(n),e.has_collect=!e.has_collect})}}],n=this.isMine?[{text:"申请动态置顶",method:function(){e.$bus.$emit("applyTop",{type:"feed",api:h["a"],payload:e.feedID})}},{text:"删除动态",method:function(){setTimeout(function(){var t=[{text:"删除",style:{color:"#f4504d"},method:function(){h["d"](e.feedID).then(function(){e.$Message.success("删除动态成功"),e.goBack()})}}];e.$bus.$emit("actionSheet",t,"取消","确认删除?")},200)}}]:[{text:"举报",method:function(){e.$Message.info("举报功能开发中，敬请期待")}}];this.$bus.$emit("actionSheet",t.concat(n),"取消")},replyComment:function(e,t,n){var s=this;if(e===this.CURRENTUSER.id){var i=e===this.user.id,a=[{text:i?"评论置顶":"申请评论置顶",method:function(){s.$bus.$emit("applyTop",{isOwner:i,type:"feedComment",api:h["b"],payload:{feedId:s.feedID,commentId:n},callback:s.fetchFeedComments})}},{text:"删除评论",method:function(){return s.deleteComment(n)}}];this.$bus.$emit("actionSheet",a,"取消")}else this.$bus.$emit("commentInput",{placeholder:"回复： ".concat(t),onOk:function(t){s.sendComment({reply_user:e,body:t})}})},sendComment:function(e){var t=this,n=e.reply_user,s=e.body,i={};s&&s.length>0?(i.body=s,n&&(i["reply_user"]=n),this.$http.post("/feeds/".concat(this.feedID,"/comments"),i,{validateStatus:function(e){return 201===e}}).then(function(e){var n=e.data;n=void 0===n?{comment:{}}:n;var s=n.comment;t.$Message.success("评论成功"),t.comments.unshift(s),t.commentCount+=1,t.$bus.$emit("commentInput:close",!0)}).catch(function(){t.$Message.error("评论失败"),t.$bus.$emit("commentInput:close",!0)})):this.$Message.error("评论内容不能为空")},deleteComment:function(e){var t=this;h["e"](this.feedID,e).then(function(){t.fetchFeedComments(),t.commentCount-=1,t.$Message.success("删除评论成功")})},followUserByStatus:function(e){var t=this;e&&!this.fetchFollow&&(this.fetchFollow=!0,Object(m["d"])({id:this.user.id,status:e}).then(function(e){t.relation=e,t.fetchFollow=!1}))},onRefresh:function(){var e=this;this.fetchFeed(function(){e.$refs.loadmore.topEnd()})},onFileClick:function(e){var t=this;e&&!1===e.paid&&(this.$lstore.hasData("H5_ACCESS_TOKEN")?this.$bus.$emit("payfor",{nodeType:"内容",node:e.paid_node,amount:e.amount,onSuccess:function(e){t.$Message.success(e),t.feed.images=null,t.fetchFeed()}}):this.$nextTick(function(){var e=t.$route.fullPath;t.$router.push({path:"/signin",query:{redirect:e}})}))}}},v=p,_=(n("169f"),n("2877")),g=Object(_["a"])(v,s,i,!1,null,"500756aa",null);g.options.__file="FeedDetail.vue";t["default"]=g.exports},"2dde":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"p-feed"},[n("nav",{staticClass:"m-box m-head-top m-lim-width m-pos-f m-main m-bb1"},[n("ul",{staticClass:"m-box m-flex-grow1 m-aln-center m-justify-center m-flex-base0 m-head-nav"},[n("router-link",{attrs:{to:{name:"feeds",query:{type:"new"}},tag:"li","active-class":"active",exact:"",replace:""}},[n("a",[e._v("最新")])]),n("router-link",{attrs:{to:{name:"feeds",query:{type:"hot"}},tag:"li","active-class":"active",exact:"",replace:""}},[n("a",[e._v("热门")])]),n("router-link",{attrs:{to:{name:"feeds",query:{type:"follow"}},tag:"li","active-class":"active",exact:"",replace:""}},[n("a",[e._v("关注")])])],1)]),n("jo-load-more",{ref:"loadmore",staticClass:"p-feed-main",attrs:{"auto-load":!0},on:{onRefresh:e.onRefresh,onLoadMore:e.onLoadMore}},["hot"===e.feedType?n("banner-ad",{attrs:{type:"feed:hot"}}):e._e(),n("ul",{staticClass:"p-feed-list"},[e._l(e.pinned,function(t,s){return t.id?n("li",{key:"pinned-feed-"+e.feedType+"-"+t.id+"-"+s},[n("feed-card",{attrs:{feed:t,pinned:!0}})],1):e._e()}),e._l(e.feeds,function(t,s){return n("li",{key:"feed-"+e.feedType+"-"+t.id+"-"+s},[t.user_id?n("feed-card",{attrs:{feed:t}}):e._e(),t.space_id?n("feed-ad-card",{attrs:{ad:t}}):e._e()],1)})],2)],1),n("foot-guide")],1)},i=[],a=(n("a481"),n("96cf"),n("3040")),o=(n("6762"),n("00d3")),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{staticClass:"m-box-model m-card",attrs:{href:e.ad.data.link}},[n("div",{staticClass:"m-box"},[n("avatar",{attrs:{user:e.ad.data}}),n("section",{staticClass:"m-box-model m-flex-grow1 m-flex-shrink1 m-card-main"},[n("header",{staticClass:"m-box m-aln-center m-justify-bet m-card-usr"},[n("h4",{staticClass:"m-flex-grow1 m-flex-shrink1"},[e._v(e._s(e.ad.data.name))]),n("div",{staticClass:"m-box m-aln-center"},[n("span",[e._v(e._s(e._f("formatDate")(e.time,"MM-dd")))])])]),n("article",{staticClass:"m-card-body"},[e.ad.data.content.length>0?n("div",{staticClass:"m-card-con"},[n("p",{staticClass:"m-text-box m-text-cut-3"},[e._v(e._s(e.ad.data.content))]),n("div",{staticClass:"image"},[n("img",{attrs:{src:e.ad.data.image}})])]):e._e()])])],1),e._m(0)])},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"m-box-model m-card-foot m-bt1"},[n("div",{staticClass:"m-box m-aln-center m-card-tools m-lim-width"},[n("span",{staticClass:"advertise-badge"},[e._v("广告")])])])}],d=n("98fc"),l={name:"FeedCard",props:{ad:{type:Object,required:!0}},computed:{time:function(){var e=this.ad.data||{},t=e.time;return+new Date(t)-d["timeOffset"]}}},f=l,u=(n("52c8"),n("2877")),m=Object(u["a"])(f,r,c,!1,null,"a7faf6c8",null);m.options.__file="FeedAdCard.vue";var h=m.exports,p=n("2a81"),v=n("4260"),_=["new","hot","follow"],g={name:"FeedList",components:{FeedCard:o["a"],BannerAd:p["a"],FeedAdCard:h},data:function(){return{}},computed:{feedType:function(){return this.$route.query.type},feeds:function(){return this.$store.getters["feed/".concat(this.feedType)]},pinned:function(){return this.$store.getters["feed/pinned"]},after:function(){var e=this.feeds.length;return e?"hot"!==this.feedType?this.feeds[e-1].id:this.feeds[e-1].hot:0}},watch:{feedType:function(e,t){_.includes(e)&&t&&this.$refs.loadmore.beforeRefresh()}},created:function(){this.$store.dispatch("feed/getAdvertise"),this.onRefresh(v["d"])},methods:{onRefresh:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t){var n,s,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=this.feedType.replace(/^\S/,function(e){return e.toUpperCase()}),s="feed/get".concat(n,"Feeds"),e.next=4,this.$store.dispatch(s,{refresh:!0});case 4:i=e.sent,t(i.length<15);case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),onLoadMore:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t){var n,s,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=this.feedType.replace(/^\S/,function(e){return e.toUpperCase()}),s="feed/get".concat(n,"Feeds"),e.next=4,this.$store.dispatch(s,{after:this.after});case 4:i=e.sent,t(i.length<15);case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}},C=g,b=(n("f9f6"),Object(u["a"])(C,s,i,!1,null,"75b44dea",null));b.options.__file="FeedList.vue";t["default"]=b.exports},"52c8":function(e,t,n){"use strict";var s=n("debc"),i=n.n(s);i.a},a336:function(e,t,n){},da23:function(e,t,n){},debc:function(e,t,n){},f9f6:function(e,t,n){"use strict";var s=n("a336"),i=n.n(s);i.a}}]);
//# sourceMappingURL=feed-f42f458b110c8a02e504.js.map