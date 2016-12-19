if (self.CavalryLogger) { CavalryLogger.start_js(["wUurG"]); }

__d('VideoFeedFastPreloadController',['Run','DOMQuery'],(function a(b,c,d,e,f,g){var h=0,i={preload:function j(k){if(h<2){k=c('DOMQuery').scry(k,'video')[0];if(k instanceof b.HTMLVideoElement){if(!h)c('Run').onBeforeUnload(function(){return i.reset();});k.preload='auto';h+=1;}}},reset:function j(){h=0;}};i.reset();f.exports=i;}),null);
__d('PriorityJobQueue',['Promise','Map'],(function a(b,c,d,e,f,g){'use strict';var h=1;function i(j){this.$PriorityJobQueue2=new (c('Map'))();this.$PriorityJobQueue3=new (c('Map'))();this.$PriorityJobQueue4=false;this.$PriorityJobQueue5=new (c('Map'))();this.$PriorityJobQueue8=function(){var k=this.$PriorityJobQueue3.size,l=Date.now();if(k<this.$PriorityJobQueue1){var m=this.$PriorityJobQueue1-k,n=Array.from(this.$PriorityJobQueue2.values());n.sort(function(q,r){return r.job.getPriority(l-r.timeQueued)-q.job.getPriority(l-q.timeQueued);});var o=this.$PriorityJobQueue2.size;for(var p=0;p<Math.min(o,m);p++)this.$PriorityJobQueue9(n[p]);}this.$PriorityJobQueue4=false;}.bind(this);this.$PriorityJobQueue1=j||h;}i.prototype.$PriorityJobQueue6=function(j){this.$PriorityJobQueue3['delete'](j);this.$PriorityJobQueue7();};i.prototype.$PriorityJobQueue7=function(){if(!this.$PriorityJobQueue4){this.$PriorityJobQueue4=true;c('Promise').resolve().then(this.$PriorityJobQueue8).done();}};i.prototype.$PriorityJobQueue9=function(j){var k=j.job,l=k.getJobID();this.$PriorityJobQueue2['delete'](l);this.$PriorityJobQueue3.set(l,j);k.getPromise().then(function(){return this.$PriorityJobQueue6(l);}.bind(this)).done();var m=this.$PriorityJobQueue5.get(l);m&&m();this.$PriorityJobQueue5['delete'](l);k.start();};i.prototype.enqueue=function(j,k){var l={job:j,timeQueued:Date.now()},m=j.getJobID();this.$PriorityJobQueue2.set(m,l);if(k)this.$PriorityJobQueue5.set(m,k);this.$PriorityJobQueue7();return this;};i.get=function(){if(!i.$PriorityJobQueue10)i.$PriorityJobQueue10=new i(h);return i.$PriorityJobQueue10;};f.exports=i;}),null);
__d("Deferred",["Promise"],(function a(b,c,d,e,f,g){function h(){"use strict";this.$Deferred1=false;this.$Deferred2=new (c("Promise"))(function(i,j){this.$Deferred3=i;this.$Deferred4=j;}.bind(this));}h.prototype.getPromise=function(){"use strict";return this.$Deferred2;};h.prototype.resolve=function(i){"use strict";this.$Deferred1=true;this.$Deferred3(i);};h.prototype.reject=function(i){"use strict";this.$Deferred1=true;this.$Deferred4(i);};h.prototype["catch"]=function(){"use strict";return c("Promise").prototype["catch"].apply(this.$Deferred2,arguments);};h.prototype.then=function(){"use strict";return c("Promise").prototype.then.apply(this.$Deferred2,arguments);};h.prototype.done=function(){"use strict";var i=arguments.length?this.$Deferred2.then.apply(this.$Deferred2,arguments):this.$Deferred2;i.then(undefined,function(j){setTimeout(function(){throw j;},0);});};h.prototype.isSettled=function(){"use strict";return this.$Deferred1;};f.exports=h;}),null);
__d('VideoPlayerShakaBandwidthEstimator',['CacheStorage','requireWeak','Run','VideoPlayerShakaExperiments'],(function a(b,c,d,e,f,g){var h=void 0;c('requireWeak')('Shaka',function(l){h=l.util.EWMACacheBandwidthEstimator;});var i=null,j=false;function k(){'use strict';var l=new (c('CacheStorage'))('localstorage','_video_'),m=l.get('bandwidthEstimate');this.$VideoPlayerShakaBandwidthEstimator1={isMockObject:true,getBandwidth:function n(){return m;},getFastMovingBandwidth:function n(){return m;}};if(h){this.$VideoPlayerShakaBandwidthEstimator1=new h(c('VideoPlayerShakaExperiments').cacheDelay,c('VideoPlayerShakaExperiments').cacheBandwidth,c('VideoPlayerShakaExperiments').useStoredBandwidthEstimate?m:undefined);this.$VideoPlayerShakaBandwidthEstimator1.isMockObject=false;}c('Run').onUnload(function(){l.set('bandwidthEstimate',this.$VideoPlayerShakaBandwidthEstimator1.getBandwidth());}.bind(this));}k.prototype.getEstimator=function(){'use strict';return this.$VideoPlayerShakaBandwidthEstimator1;};k.getInstance=function(){'use strict';if(i===null||i.getEstimator().isMockObject&&h)i=new k();return i;};k.getEstimator=function(){'use strict';return k.getInstance().getEstimator();};k.isAutoplayBandwidthRestrained=function(l){'use strict';var m=k.getEstimator(),n=void 0;if(c('VideoPlayerShakaExperiments').blockAutoplayUseFastMovingAverage&&j){n=m.getFastMovingBandwidth();}else n=m.getBandwidth();var o=l?c('VideoPlayerShakaExperiments').liveBlockAutoplayBandwidthThreshold:c('VideoPlayerShakaExperiments').blockAutoplayBandwidthThreshold;if(n===null||n>o){j=false;}else j=true;return j;};f.exports=k;}),null);
__d('XHRHttpError',[],(function a(b,c,d,e,f,g){'use strict';var h='HTTP_CLIENT_ERROR',i='HTTP_PROXY_ERROR',j='HTTP_SERVER_ERROR',k='HTTP_TRANSPORT_ERROR',l='HTTP_UNKNOWN_ERROR',m={HTTP_CLIENT_ERROR:h,HTTP_PROXY_ERROR:i,HTTP_SERVER_ERROR:j,HTTP_TRANSPORT_ERROR:k,HTTP_UNKNOWN_ERROR:l,getErrorCode:function n(o,p){if(p===0){var q=o.getProtocol();if(q==='file'||q==='ftp')return null;return k;}else if(p>=100&&p<200){return i;}else if(p>=200&&p<300){return null;}else if(p>=400&&p<500){return h;}else if(p>=500&&p<600){return j;}else if(p>=12001&&p<12156){return k;}else return l;}};f.exports=m;}),null);
__d('xhrSimpleDataSerializer',[],(function a(b,c,d,e,f,g){'use strict';function h(i){var j=[];for(var k in i)j.push(encodeURIComponent(k)+'='+encodeURIComponent(i[k]));return j.join('&');}f.exports=h;}),null);
__d('XHRRequest',['invariant','ErrorUtils','TimeSlice','URI','XHRHttpError','ZeroRewrites','getAsyncHeaders','xhrSimpleDataSerializer'],(function a(b,c,d,e,f,g,h){var i={errorCode:null,errorMsg:null,errorType:null},j={loadedBytes:null,totalBytes:null};function k(l){'use strict';this.setURI(l);this.setResponseType(null);this.setMethod('POST');this.setTransportBuilder(c('ZeroRewrites').getTransportBuilderForURI(this.getURI()));this.setDataSerializer(c('xhrSimpleDataSerializer'));}k.prototype.setURI=function(l){'use strict';this.$XHRRequest1=c('ZeroRewrites').rewriteURI(new (c('URI'))(l));return this;};k.prototype.getURI=function(){'use strict';return this.$XHRRequest1;};k.prototype.setResponseType=function(l){'use strict';this.$XHRRequest2=l;return this;};k.prototype.setMethod=function(l){'use strict';this.$XHRRequest3=l;return this;};k.prototype.getMethod=function(){'use strict';return this.$XHRRequest3;};k.prototype.setData=function(l){'use strict';this.$XHRRequest4=l;return this;};k.prototype.getData=function(){'use strict';return this.$XHRRequest4;};k.prototype.setRawData=function(l){'use strict';this.$XHRRequest5=l;return this;};k.prototype.setRequestHeader=function(l,m){'use strict';if(!this.$XHRRequest6)this.$XHRRequest6={};this.$XHRRequest6[l]=m;return this;};k.prototype.setTimeout=function(l){'use strict';this.$XHRRequest7=l;return this;};k.prototype.getTimeout=function(){'use strict';return this.$XHRRequest7;};k.prototype.setResponseHandler=function(l){'use strict';this.$XHRRequest8=l;return this;};k.prototype.setErrorHandler=function(l){'use strict';this.$XHRRequest9=l;return this;};k.prototype.getErrorHandler=function(){'use strict';return this.$XHRRequest9;};k.prototype.setAbortHandler=function(l){'use strict';this.$XHRRequest10=l;return this;};k.prototype.getAbortHandler=function(){'use strict';return this.$XHRRequest10;};k.prototype.setTimeoutHandler=function(l){'use strict';this.$XHRRequest11=l;return this;};k.prototype.setUploadProgressHandler=function(l){'use strict';this.$XHRRequest12=l;return this;};k.prototype.setDownloadProgressHandler=function(l){'use strict';this.$XHRRequest13=l;return this;};k.prototype.setTransportBuilder=function(l){'use strict';this.$XHRRequest14=l;return this;};k.prototype.setDataSerializer=function(l){'use strict';this.$XHRRequest15=l;return this;};k.prototype.send=function(){'use strict';var l=this.$XHRRequest7,m=this.$XHRRequest14(),n=this.getURI();this.$XHRRequest16=m;var o;this.$XHRRequest3==='POST'||!this.$XHRRequest5||h(0);if(this.$XHRRequest3==='GET'||this.$XHRRequest5){n.addQueryData(this.$XHRRequest4);o=this.$XHRRequest5;}else o=this.$XHRRequest15(this.$XHRRequest4);m.onreadystatechange=this.$XHRRequest17();if(m.upload&&this.$XHRRequest12)m.upload.onprogress=this.$XHRRequest18.bind(this);if(this.$XHRRequest13)m.onprogress=this.$XHRRequest19.bind(this);if(l)this.$XHRRequest20=setTimeout(this.$XHRRequest21.bind(this),l);m.open(this.$XHRRequest3,n.toString(),true);if(this.$XHRRequest6)for(var p in this.$XHRRequest6)m.setRequestHeader(p,this.$XHRRequest6[p]);var q=c('getAsyncHeaders')(n);Object.keys(q).forEach(function(r){m.setRequestHeader(r,q[r]);});if(this.$XHRRequest2==='arraybuffer')if('responseType' in m){m.responseType='arraybuffer';}else if('overrideMimeType' in m){m.overrideMimeType('text/plain; charset=x-user-defined');}else if('setRequestHeader' in m)m.setRequestHeader('Accept-Charset','x-user-defined');if(this.$XHRRequest2==='blob')m.responseType=this.$XHRRequest2;m.send(o);};k.prototype.abort=function(){'use strict';this.$XHRRequest22();if(this.$XHRRequest10)c('ErrorUtils').applyWithGuard(this.$XHRRequest10,null,null,null,'XHRRequest:_abortHandler');};k.prototype.$XHRRequest22=function(){'use strict';var l=this.$XHRRequest16;if(l){l.onreadystatechange=null;l.abort();}this.$XHRRequest23();};k.prototype.$XHRRequest21=function(){'use strict';this.$XHRRequest22();if(this.$XHRRequest11)c('ErrorUtils').applyWithGuard(this.$XHRRequest11,null,null,null,'XHRRequest:_abortHandler');};k.prototype.$XHRRequest24=function(l){'use strict';if(this.$XHRRequest2)if('response' in l){return l.response;}else if(this.$XHRRequest2==='arraybuffer')if(window.VBArray)return window.VBArray(l.responseBody).toArray();return l.responseText;};k.prototype.$XHRRequest17=function(){'use strict';var l=c('TimeSlice').getGuardedContinuation('XHRRequest onreadystatechange continuation'),m=c('TimeSlice').guard(function(n){for(var o=arguments.length,p=Array(o>1?o-1:0),q=1;q<o;q++)p[q-1]=arguments[q];return n.apply(undefined,p);},'XHRRequest onreadystatechange',{isContinuation:false});return function(){var n=this.$XHRRequest16,o=n.readyState;if(o>=2){var p=o===4,q=this.getURI(),r=c('XHRHttpError').getErrorCode(q,n.status),s=this.$XHRRequest8;if(r!==null){if(p){i.errorCode=r;i.errorMsg=this.$XHRRequest24(n);i.errorType=n.status?'HTTP '+n.status:'HTTP';if(this.$XHRRequest9){c('ErrorUtils').applyWithGuard(l.bind(undefined,this.$XHRRequest9),null,[i],null,'XHRRequest:_errorHandler');}else l(function(){});}}else if(s){var t=null;if(s.includeHeaders)t=n.getAllResponseHeaders();if(p||s.parseStreaming&&o===3){var u=p?l:m;c('ErrorUtils').applyWithGuard(u.bind(undefined,s),null,[this.$XHRRequest24(n),t,p],null,'XHRRequest:handler');}}else l(function(){});if(p)this.$XHRRequest23();}}.bind(this);};k.prototype.$XHRRequest18=function(l){'use strict';j.loadedBytes=l.loaded;j.totalBytes=l.total;if(this.$XHRRequest12)c('ErrorUtils').applyWithGuard(this.$XHRRequest12,null,[j],null,'XHRRequest:_uploadProgressHandler');};k.prototype.$XHRRequest19=function(l){'use strict';var m={loadedBytes:l.loaded,totalBytes:l.total};if(this.$XHRRequest13)c('ErrorUtils').applyWithGuard(this.$XHRRequest13,null,[m],null,'XHRRequest:_downloadProgressHandler');};k.prototype.$XHRRequest23=function(){'use strict';clearTimeout(this.$XHRRequest20);delete this.$XHRRequest16;};f.exports=k;}),null);
__d("regeneratorRuntime",["Promise"],(function a(b,c,d,e,f,g){"use strict";var h=Object.prototype.hasOwnProperty,i=typeof Symbol==="function"&&(typeof Symbol==="function"?Symbol.iterator:"@@iterator")||"@@iterator",j=f.exports;function k(ea,fa,ga,ha){var ia=Object.create((fa||r).prototype),ja=new ba(ha||[]);ia._invoke=y(ea,ga,ja);return ia;}j.wrap=k;function l(ea,fa,ga){try{return {type:"normal",arg:ea.call(fa,ga)};}catch(ha){return {type:"throw",arg:ha};}}var m="suspendedStart",n="suspendedYield",o="executing",p="completed",q={};function r(){}function s(){}function t(){}var u=t.prototype=r.prototype;s.prototype=u.constructor=t;t.constructor=s;s.displayName="GeneratorFunction";function v(ea){["next","throw","return"].forEach(function(fa){ea[fa]=function(ga){return this._invoke(fa,ga);};});}j.isGeneratorFunction=function(ea){var fa=typeof ea==="function"&&ea.constructor;return fa?fa===s||(fa.displayName||fa.name)==="GeneratorFunction":false;};j.mark=function(ea){if(Object.setPrototypeOf){Object.setPrototypeOf(ea,t);}else Object.assign(ea,t);ea.prototype=Object.create(u);return ea;};j.awrap=function(ea){return new w(ea);};function w(ea){this.arg=ea;}function x(ea){function fa(la,ma){var na=ea[la](ma),oa=na.value;return oa instanceof w?c("Promise").resolve(oa.arg).then(ga,ha):c("Promise").resolve(oa).then(function(pa){na.value=pa;return na;});}if(typeof process==="object"&&process.domain)fa=process.domain.bind(fa);var ga=fa.bind(ea,"next"),ha=fa.bind(ea,"throw"),ia=fa.bind(ea,"return"),ja;function ka(la,ma){var na=ja?ja.then(function(){return fa(la,ma);}):new (c("Promise"))(function(oa){oa(fa(la,ma));});ja=na["catch"](function(oa){});return na;}this._invoke=ka;}v(x.prototype);j.async=function(ea,fa,ga,ha){var ia=new x(k(ea,fa,ga,ha));return j.isGeneratorFunction(fa)?ia:ia.next().then(function(ja){return ja.done?ja.value:ia.next();});};function y(ea,fa,ga){var ha=m;return function ia(ja,ka){if(ha===o)throw new Error("Generator is already running");if(ha===p){if(ja==="throw")throw ka;return da();}while(true){var la=ga.delegate;if(la){if(ja==="return"||ja==="throw"&&la.iterator[ja]===undefined){ga.delegate=null;var ma=la.iterator["return"];if(ma){var na=l(ma,la.iterator,ka);if(na.type==="throw"){ja="throw";ka=na.arg;continue;}}if(ja==="return")continue;}var na=l(la.iterator[ja],la.iterator,ka);if(na.type==="throw"){ga.delegate=null;ja="throw";ka=na.arg;continue;}ja="next";ka=undefined;var oa=na.arg;if(oa.done){ga[la.resultName]=oa.value;ga.next=la.nextLoc;}else{ha=n;return oa;}ga.delegate=null;}if(ja==="next"){if(ha===n){ga.sent=ka;}else ga.sent=undefined;}else if(ja==="throw"){if(ha===m){ha=p;throw ka;}if(ga.dispatchException(ka)){ja="next";ka=undefined;}}else if(ja==="return")ga.abrupt("return",ka);ha=o;var na=l(ea,fa,ga);if(na.type==="normal"){ha=ga.done?p:n;var oa={value:na.arg,done:ga.done};if(na.arg===q){if(ga.delegate&&ja==="next")ka=undefined;}else return oa;}else if(na.type==="throw"){ha=p;ja="throw";ka=na.arg;}}};}v(u);u[i]=function(){return this;};u.toString=function(){return "[object Generator]";};function z(ea){var fa={tryLoc:ea[0]};if(1 in ea)fa.catchLoc=ea[1];if(2 in ea){fa.finallyLoc=ea[2];fa.afterLoc=ea[3];}this.tryEntries.push(fa);}function aa(ea){var fa=ea.completion||{};fa.type="normal";delete fa.arg;ea.completion=fa;}function ba(ea){this.tryEntries=[{tryLoc:"root"}];ea.forEach(z,this);this.reset(true);}j.keys=function(ea){var fa=[];for(var ga in ea)fa.push(ga);fa.reverse();return function ha(){while(fa.length){var ia=fa.pop();if(ia in ea){ha.value=ia;ha.done=false;return ha;}}ha.done=true;return ha;};};function ca(ea){if(ea){var fa=ea[i];if(fa)return fa.call(ea);if(typeof ea.next==="function")return ea;if(!isNaN(ea.length)){var ga=-1,ha=function ia(){while(++ga<ea.length)if(h.call(ea,ga)){ia.value=ea[ga];ia.done=false;return ia;}ia.value=undefined;ia.done=true;return ia;};return ha.next=ha;}}return {next:da};}j.values=ca;function da(){return {value:undefined,done:true};}ba.prototype={constructor:ba,reset:function ea(fa){this.prev=0;this.next=0;this.sent=undefined;this.done=false;this.delegate=null;this.tryEntries.forEach(aa);if(!fa)for(var ga in this)if(ga.charAt(0)==="t"&&h.call(this,ga)&&!isNaN(+ga.slice(1)))this[ga]=undefined;},stop:function ea(){this.done=true;var fa=this.tryEntries[0],ga=fa.completion;if(ga.type==="throw")throw ga.arg;return this.rval;},dispatchException:function ea(fa){if(this.done)throw fa;var ga=this;function ha(na,oa){ka.type="throw";ka.arg=fa;ga.next=na;return !!oa;}for(var ia=this.tryEntries.length-1;ia>=0;--ia){var ja=this.tryEntries[ia],ka=ja.completion;if(ja.tryLoc==="root")return ha("end");if(ja.tryLoc<=this.prev){var la=h.call(ja,"catchLoc"),ma=h.call(ja,"finallyLoc");if(la&&ma){if(this.prev<ja.catchLoc){return ha(ja.catchLoc,true);}else if(this.prev<ja.finallyLoc)return ha(ja.finallyLoc);}else if(la){if(this.prev<ja.catchLoc)return ha(ja.catchLoc,true);}else if(ma){if(this.prev<ja.finallyLoc)return ha(ja.finallyLoc);}else throw new Error("try statement without catch or finally");}}},abrupt:function ea(fa,ga){for(var ha=this.tryEntries.length-1;ha>=0;--ha){var ia=this.tryEntries[ha];if(ia.tryLoc<=this.prev&&h.call(ia,"finallyLoc")&&this.prev<ia.finallyLoc){var ja=ia;break;}}if(ja&&(fa==="break"||fa==="continue")&&ja.tryLoc<=ga&&ga<=ja.finallyLoc)ja=null;var ka=ja?ja.completion:{};ka.type=fa;ka.arg=ga;if(ja){this.next=ja.finallyLoc;}else this.complete(ka);return q;},complete:function ea(fa,ga){if(fa.type==="throw")throw fa.arg;if(fa.type==="break"||fa.type==="continue"){this.next=fa.arg;}else if(fa.type==="return"){this.rval=fa.arg;this.next="end";}else if(fa.type==="normal"&&ga)this.next=ga;},finish:function ea(fa){for(var ga=this.tryEntries.length-1;ga>=0;--ga){var ha=this.tryEntries[ga];if(ha.finallyLoc===fa){this.complete(ha.completion,ha.afterLoc);aa(ha);return q;}}},"catch":function ea(fa){for(var ga=this.tryEntries.length-1;ga>=0;--ga){var ha=this.tryEntries[ga];if(ha.tryLoc===fa){var ia=ha.completion;if(ia.type==="throw"){var ja=ia.arg;aa(ha);}return ja;}}throw new Error("illegal catch attempt");},delegateYield:function ea(fa,ga,ha){this.delegate={iterator:ca(fa),resultName:ga,nextLoc:ha};return q;}};}),null);
__d('VideoDashPrefetchCache',['Promise','regeneratorRuntime','Deferred','Map','PriorityJobQueue','Run','URI','VideoPlayerShakaBandwidthEstimator','VideoPlayerShakaExperiments','XHRRequest','getCrossOriginTransport'],(function a(b,c,d,e,f,g){var h=null;function i(n,o){var p=new Error(n.errorMsg);p.name=n.errorType;p.type='preload';p.url=o;p.status=n.errorCode;return p;}function j(n){var o=new (c('URI'))(n.url),p=o.getDomain();return p.endsWith('fbcdn.net')&&!p.startsWith('interncache')&&!p.endsWith('ak.fbcdn.net');}function k(n,o,p){return {response:n.slice(o.start+0,o.end+1),responseTime:p};}function l(n,o,p){'use strict';this.$UrlRequestJob1=n;this.$UrlRequestJob2=o;this.$UrlRequestJob5=p;var q=new (c('XHRRequest'))(this.$UrlRequestJob2).setMethod('GET').setResponseType('arraybuffer').setTransportBuilder(c('getCrossOriginTransport'));this.$UrlRequestJob3=new (c('Promise'))(function(r,s){q.setErrorHandler(function(t){s(i(t,this.$UrlRequestJob2));}.bind(this));q.setResponseHandler(function(t){q.response=t;r(q);});q.setAbortHandler(function(){s(this.$UrlRequestJob3,new Error('Request promise aborted'));}.bind(this));}.bind(this));this.$UrlRequestJob4=q;}l.prototype.getUrl=function(){'use strict';return this.$UrlRequestJob2;};l.prototype.getPromise=function(){'use strict';return this.$UrlRequestJob3;};l.prototype.start=function(){'use strict';this.$UrlRequestJob4.send();};l.prototype.abort=function(){'use strict';};l.prototype.getPriority=function(n){'use strict';return 1/Math.min(this.$UrlRequestJob5,1)/Math.min(n,1);};l.prototype.getJobID=function(){'use strict';return this.$UrlRequestJob1;};function m(){'use strict';this.$VideoDashPrefetchCache1=new (c('Map'))();this.$VideoDashPrefetchCache2=new (c('Map'))();this.$VideoDashPrefetchCache3=[];this.$VideoDashPrefetchCache4=[];this.$VideoDashPrefetchCache5=0;this.$VideoDashPrefetchCache6=c('VideoPlayerShakaExperiments').maxPrefetchVideosNum;this.$VideoDashPrefetchCache7=c('VideoPlayerShakaExperiments').consolidateFragmentedPrefetchRequest;}m.prototype.$VideoDashPrefetchCache8=function(n){'use strict';var o=new (c('URI'))(n);if(o.getDomain()){o=o.removeQueryData(['oh']);o=o.removeQueryData('__gda__');for(var p=Object.keys(o.getQueryData()),q=Array.isArray(p),r=0,p=q?p:p[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var s;if(q){if(r>=p.length)break;s=p[r++];}else{r=p.next();if(r.done)break;s=r.value;}var t=s;if(t.startsWith('_nc'))o=o.removeQueryData(t);}return o.toString();}return n;};m.prototype.$VideoDashPrefetchCache9=function(n){var o=arguments.length<=1||arguments[1]===undefined?{}:arguments[1],p=arguments.length<=2||arguments[2]===undefined?0:arguments[2];'use strict';var q=n;if(Object.keys(o))q=new (c('URI'))(n).addQueryData(o);var r=new (c('XHRRequest'))(q).setMethod('GET').setResponseType('arraybuffer').setTransportBuilder(c('getCrossOriginTransport')),s=new (c('Promise'))(function(t,u){r.setErrorHandler(function(v){this.$VideoDashPrefetchCache10(r);u(i(v,q));}.bind(this));r.setResponseHandler(function(v){r.response=v;this.$VideoDashPrefetchCache10(r);t(r);}.bind(this));r.setAbortHandler(function(){u(s,new Error('Request promise aborted'));});}.bind(this));this.$VideoDashPrefetchCache11(n,s,p);this.$VideoDashPrefetchCache12(n,s);this.$VideoDashPrefetchCache3.push(r);r.send();return s;};m.prototype.$VideoDashPrefetchCache11=function(n,o){var p=arguments.length<=2||arguments[2]===undefined?3600000:arguments[2];'use strict';this.$VideoDashPrefetchCache13(n);if(p>0)this.$VideoDashPrefetchCache2.set(this.$VideoDashPrefetchCache8(n),setTimeout(function(){return this.$VideoDashPrefetchCache13(n);}.bind(this),p));this.$VideoDashPrefetchCache12(n,o);};m.prototype.genPrfetchMpdNow=function n(o,p,q){var r,s;return c('regeneratorRuntime').async(function t(u){while(1)switch(u.prev=u.next){case 0:'use strict';if(!this.has(p)){u.next=3;break;}return u.abrupt('return',null);case 3:r=q.getURL();s=new l(o,r,0);this.$VideoDashPrefetchCache11(p,s.getPromise());s.start();u.next=9;return c('regeneratorRuntime').awrap(s.getPromise());case 9:return u.abrupt('return',null);case 10:case 'end':return u.stop();}},null,this);};m.prototype.queueRequestFromMouseMovement=function(n,o,p,q){var r=arguments.length<=4||arguments[4]===undefined?function(){}:arguments[4],s=arguments.length<=5||arguments[5]===undefined?function(){}:arguments[5];'use strict';var t=c('PriorityJobQueue').get(),u=this.$VideoDashPrefetchCache14(o);if(u){u.then(s).done();return;}var v=p.getURL(),w=new l(n,v,q);w.getPromise().then(s)['catch'](function(){return this.getAndDelete(o);}.bind(this)).done();t.enqueue(w,function(){this.$VideoDashPrefetchCache11(o,w.getPromise());r();}.bind(this));};m.prototype.$VideoDashPrefetchCache13=function(n,o){'use strict';this.getAndDelete(n,o);if(this.$VideoDashPrefetchCache2.has(n)){clearTimeout(this.$VideoDashPrefetchCache2.get(n));this.$VideoDashPrefetchCache2['delete'](n);}};m.prototype.$VideoDashPrefetchCache15=function(n){'use strict';var o=[];for(var p=0;p<n.length;p++){var q=m.createQueryStringURL(n[p]);if(!this.has(q))o.push(this.$VideoDashPrefetchCache9(q));}return o;};m.prototype.$VideoDashPrefetchCache16=function(n){'use strict';var o=m.getConsolidatedURL(n);if(o==null)return this.$VideoDashPrefetchCache15(n);var p=new (c('XHRRequest'))(o).setMethod('GET').setResponseType('arraybuffer').setTransportBuilder(c('getCrossOriginTransport')),q=Date.now(),r=[];for(var s=0;s<n.length;s++){var t=m.createQueryStringURL(n[s]),u=new (c('Deferred'))();if(!this.has(t))this.$VideoDashPrefetchCache12(t,u.getPromise());r.push(u);}p.setErrorHandler(function(v){this.$VideoDashPrefetchCache10(p);for(var w=0;w<r.length;w++)r[w].reject(i(v,o));}.bind(this));p.setResponseHandler(function(v){var w=Date.now()-q;for(var x=0;x<n.length;x++){var y=r[x],z=n[x];y.resolve(k(v,z,w));}this.$VideoDashPrefetchCache10(p);}.bind(this));p.setAbortHandler(function(){for(var v=0;v<n.length;v++){var w=r[v];w.reject(new Error('Request aborted.'));}});this.$VideoDashPrefetchCache3.push(p);p.send();return r.map(function(v){return v.getPromise();});};m.prototype.$VideoDashPrefetchCache17=function(n){'use strict';this.$VideoDashPrefetchCache5++;var o=this.$VideoDashPrefetchCache7?this.$VideoDashPrefetchCache16(n.video):this.$VideoDashPrefetchCache15(n.video),p=this.$VideoDashPrefetchCache7?this.$VideoDashPrefetchCache16(n.audio):this.$VideoDashPrefetchCache15(n.audio),q=this.$VideoDashPrefetchCache15(n.manifest),r=o.concat(p,q);c('Promise').all(r).then(function(){return this.$VideoDashPrefetchCache18();}.bind(this))['catch'](function(){return this.$VideoDashPrefetchCache18();}.bind(this));};m.prototype.$VideoDashPrefetchCache12=function(n,o){'use strict';n=this.$VideoDashPrefetchCache8(n);if(this.$VideoDashPrefetchCache1.values().next().done)c('Run').onLeave(function(){for(var p=0;p<this.$VideoDashPrefetchCache3.length;p++)this.$VideoDashPrefetchCache3[p].abort();this.$VideoDashPrefetchCache3=[];this.$VideoDashPrefetchCache4=[];this.$VideoDashPrefetchCache5=0;this.$VideoDashPrefetchCache1.clear();}.bind(this));this.$VideoDashPrefetchCache1.set(n,o);};m.prototype.$VideoDashPrefetchCache10=function(n){'use strict';var o=this.$VideoDashPrefetchCache3.indexOf(n);if(o>-1)this.$VideoDashPrefetchCache3.splice(o,1);};m.prototype.$VideoDashPrefetchCache18=function(){'use strict';this.$VideoDashPrefetchCache5--;var n=this.$VideoDashPrefetchCache4.shift();if(n)this.$VideoDashPrefetchCache17(n);};m.prototype.has=function(n){'use strict';n=this.$VideoDashPrefetchCache8(n);return this.$VideoDashPrefetchCache1.has(n);};m.prototype.getAndDelete=function(n,o){'use strict';n=this.$VideoDashPrefetchCache8(n);var p=this.$VideoDashPrefetchCache1.get(n);if(p&&o)o();this.$VideoDashPrefetchCache1['delete'](n);return p;};m.prototype.$VideoDashPrefetchCache14=function(n){'use strict';n=this.$VideoDashPrefetchCache8(n);var o=this.$VideoDashPrefetchCache1.get(n);return o;};m.prototype.queueRequestBatch=function(n){'use strict';if(this.$VideoDashPrefetchCache6===0||this.$VideoDashPrefetchCache5<this.$VideoDashPrefetchCache6){this.$VideoDashPrefetchCache17(n);}else this.$VideoDashPrefetchCache4.push(n);};m.getInstance=function(){'use strict';if(h===null)h=new m();return h;};m.createQueryStringURL=function(n){'use strict';var o=n.url,p=n.start,q=n.end;if(p!==null&&p!==undefined&&q!==null&&q!==undefined)o=new (c('URI'))(o).addQueryData({bytestart:p,byteend:q});return o.toString();};m.getConsolidatedURL=function(n){'use strict';var o='',p=Infinity,q=0;for(var r=0;r<n.length;r++){var s=n[r],t=s.url,u=s.start,v=s.end;if(t==null||u==null||v==null)return null;if(o===''){o=t;}else if(o!==t)return null;p=Math.min(p,u);q=Math.max(q,v);}return m.createQueryStringURL({url:o,start:p,end:q});};m.loadVideo=function(n){'use strict';if(c('VideoPlayerShakaBandwidthEstimator').isAutoplayBandwidthRestrained())return;var o=m.getInstance();if(!n.manifest)n.manifest=[];o.queueRequestBatch({manifest:n.manifest.filter(j),video:n.video.filter(j),audio:n.audio.filter(j)});};m.getCacheValue=function(n,o){'use strict';return m.getInstance().getAndDelete(n,o);};f.exports=m;}),null);
__d('VideoDisplayTimePlayButton',['CSS','DataStore','Event'],(function a(b,c,d,e,f,g){var h={},i='_spinner',j={getClicked:function k(l){return c('DataStore').get(l,'clicked',false);},register:function k(l,m){var n=l.id;h[n]=c('Event').listen(l,'click',function(){if(m){c('CSS').hide(l);c('CSS').show(m);}c('DataStore').set(l,'clicked',true);});if(m)h[n+i]=c('Event').listen(m,'click',function(){c('CSS').hide(m);c('CSS').show(l);c('DataStore').set(l,'clicked',false);});},unregister:function k(l){var m=l.id;if(h.hasOwnProperty(m))h[m].remove();var n=m+i;if(h.hasOwnProperty(n))h[n].remove();}};f.exports=j;}),null);
__d('VideosRenderingInstrumentation',['DataStore','VideoPlayerHTML5Experiments','performanceAbsoluteNow'],(function a(b,c,d,e,f,g){var h={storeRenderTime:function i(j){var k=c('VideoPlayerHTML5Experiments').useMonotonicallyIncreasingTimers?c('performanceAbsoluteNow')():Date.now();c('DataStore').set(j,'videos_rendering_instrumentation',k);return k;},retrieveRenderTime:function i(j){var k=c('DataStore').get(j,'videos_rendering_instrumentation',NaN);if(Number.isNaN(k))k=h.storeRenderTime(j);return k;}};f.exports=h;}),null);
__d('clearImmediatePolyfill',['ImmediateImplementation'],(function a(b,c,d,e,f,g){f.exports=b.clearImmediate||c('ImmediateImplementation').clearImmediate;}),null);
__d('clearImmediate',['TimerStorage','clearImmediatePolyfill'],(function a(b,c,d,e,f,g){f.exports=function(){for(var h=arguments.length,i=Array(h),j=0;j<h;j++)i[j]=arguments[j];c('TimerStorage').unset(c('TimerStorage').IMMEDIATE,i[0]);return Function.prototype.apply.call(c('clearImmediatePolyfill'),b,i);};}),null);