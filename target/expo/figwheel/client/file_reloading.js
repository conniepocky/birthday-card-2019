// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3922__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3922__auto__){
return or__3922__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3922__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__30269_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__30269_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__30270 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__30271 = null;
var count__30272 = (0);
var i__30273 = (0);
while(true){
if((i__30273 < count__30272)){
var n = cljs.core._nth.call(null,chunk__30271,i__30273);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__30274 = seq__30270;
var G__30275 = chunk__30271;
var G__30276 = count__30272;
var G__30277 = (i__30273 + (1));
seq__30270 = G__30274;
chunk__30271 = G__30275;
count__30272 = G__30276;
i__30273 = G__30277;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__30270);
if(temp__5457__auto__){
var seq__30270__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30270__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__30270__$1);
var G__30278 = cljs.core.chunk_rest.call(null,seq__30270__$1);
var G__30279 = c__4319__auto__;
var G__30280 = cljs.core.count.call(null,c__4319__auto__);
var G__30281 = (0);
seq__30270 = G__30278;
chunk__30271 = G__30279;
count__30272 = G__30280;
i__30273 = G__30281;
continue;
} else {
var n = cljs.core.first.call(null,seq__30270__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__30282 = cljs.core.next.call(null,seq__30270__$1);
var G__30283 = null;
var G__30284 = (0);
var G__30285 = (0);
seq__30270 = G__30282;
chunk__30271 = G__30283;
count__30272 = G__30284;
i__30273 = G__30285;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__30286){
var vec__30287 = p__30286;
var _ = cljs.core.nth.call(null,vec__30287,(0),null);
var v = cljs.core.nth.call(null,vec__30287,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__30290){
var vec__30291 = p__30290;
var k = cljs.core.nth.call(null,vec__30291,(0),null);
var v = cljs.core.nth.call(null,vec__30291,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__30303_30311 = cljs.core.seq.call(null,deps);
var chunk__30304_30312 = null;
var count__30305_30313 = (0);
var i__30306_30314 = (0);
while(true){
if((i__30306_30314 < count__30305_30313)){
var dep_30315 = cljs.core._nth.call(null,chunk__30304_30312,i__30306_30314);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_30315;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_30315));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_30315,(depth + (1)),state);
} else {
}


var G__30316 = seq__30303_30311;
var G__30317 = chunk__30304_30312;
var G__30318 = count__30305_30313;
var G__30319 = (i__30306_30314 + (1));
seq__30303_30311 = G__30316;
chunk__30304_30312 = G__30317;
count__30305_30313 = G__30318;
i__30306_30314 = G__30319;
continue;
} else {
var temp__5457__auto___30320 = cljs.core.seq.call(null,seq__30303_30311);
if(temp__5457__auto___30320){
var seq__30303_30321__$1 = temp__5457__auto___30320;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30303_30321__$1)){
var c__4319__auto___30322 = cljs.core.chunk_first.call(null,seq__30303_30321__$1);
var G__30323 = cljs.core.chunk_rest.call(null,seq__30303_30321__$1);
var G__30324 = c__4319__auto___30322;
var G__30325 = cljs.core.count.call(null,c__4319__auto___30322);
var G__30326 = (0);
seq__30303_30311 = G__30323;
chunk__30304_30312 = G__30324;
count__30305_30313 = G__30325;
i__30306_30314 = G__30326;
continue;
} else {
var dep_30327 = cljs.core.first.call(null,seq__30303_30321__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_30327;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_30327));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_30327,(depth + (1)),state);
} else {
}


var G__30328 = cljs.core.next.call(null,seq__30303_30321__$1);
var G__30329 = null;
var G__30330 = (0);
var G__30331 = (0);
seq__30303_30311 = G__30328;
chunk__30304_30312 = G__30329;
count__30305_30313 = G__30330;
i__30306_30314 = G__30331;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__30307){
var vec__30308 = p__30307;
var seq__30309 = cljs.core.seq.call(null,vec__30308);
var first__30310 = cljs.core.first.call(null,seq__30309);
var seq__30309__$1 = cljs.core.next.call(null,seq__30309);
var x = first__30310;
var xs = seq__30309__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__30308,seq__30309,first__30310,seq__30309__$1,x,xs,get_deps__$1){
return (function (p1__30294_SHARP_){
return clojure.set.difference.call(null,p1__30294_SHARP_,x);
});})(vec__30308,seq__30309,first__30310,seq__30309__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__30332 = cljs.core.seq.call(null,provides);
var chunk__30333 = null;
var count__30334 = (0);
var i__30335 = (0);
while(true){
if((i__30335 < count__30334)){
var prov = cljs.core._nth.call(null,chunk__30333,i__30335);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30336_30344 = cljs.core.seq.call(null,requires);
var chunk__30337_30345 = null;
var count__30338_30346 = (0);
var i__30339_30347 = (0);
while(true){
if((i__30339_30347 < count__30338_30346)){
var req_30348 = cljs.core._nth.call(null,chunk__30337_30345,i__30339_30347);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30348,prov);


var G__30349 = seq__30336_30344;
var G__30350 = chunk__30337_30345;
var G__30351 = count__30338_30346;
var G__30352 = (i__30339_30347 + (1));
seq__30336_30344 = G__30349;
chunk__30337_30345 = G__30350;
count__30338_30346 = G__30351;
i__30339_30347 = G__30352;
continue;
} else {
var temp__5457__auto___30353 = cljs.core.seq.call(null,seq__30336_30344);
if(temp__5457__auto___30353){
var seq__30336_30354__$1 = temp__5457__auto___30353;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30336_30354__$1)){
var c__4319__auto___30355 = cljs.core.chunk_first.call(null,seq__30336_30354__$1);
var G__30356 = cljs.core.chunk_rest.call(null,seq__30336_30354__$1);
var G__30357 = c__4319__auto___30355;
var G__30358 = cljs.core.count.call(null,c__4319__auto___30355);
var G__30359 = (0);
seq__30336_30344 = G__30356;
chunk__30337_30345 = G__30357;
count__30338_30346 = G__30358;
i__30339_30347 = G__30359;
continue;
} else {
var req_30360 = cljs.core.first.call(null,seq__30336_30354__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30360,prov);


var G__30361 = cljs.core.next.call(null,seq__30336_30354__$1);
var G__30362 = null;
var G__30363 = (0);
var G__30364 = (0);
seq__30336_30344 = G__30361;
chunk__30337_30345 = G__30362;
count__30338_30346 = G__30363;
i__30339_30347 = G__30364;
continue;
}
} else {
}
}
break;
}


var G__30365 = seq__30332;
var G__30366 = chunk__30333;
var G__30367 = count__30334;
var G__30368 = (i__30335 + (1));
seq__30332 = G__30365;
chunk__30333 = G__30366;
count__30334 = G__30367;
i__30335 = G__30368;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__30332);
if(temp__5457__auto__){
var seq__30332__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30332__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__30332__$1);
var G__30369 = cljs.core.chunk_rest.call(null,seq__30332__$1);
var G__30370 = c__4319__auto__;
var G__30371 = cljs.core.count.call(null,c__4319__auto__);
var G__30372 = (0);
seq__30332 = G__30369;
chunk__30333 = G__30370;
count__30334 = G__30371;
i__30335 = G__30372;
continue;
} else {
var prov = cljs.core.first.call(null,seq__30332__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30340_30373 = cljs.core.seq.call(null,requires);
var chunk__30341_30374 = null;
var count__30342_30375 = (0);
var i__30343_30376 = (0);
while(true){
if((i__30343_30376 < count__30342_30375)){
var req_30377 = cljs.core._nth.call(null,chunk__30341_30374,i__30343_30376);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30377,prov);


var G__30378 = seq__30340_30373;
var G__30379 = chunk__30341_30374;
var G__30380 = count__30342_30375;
var G__30381 = (i__30343_30376 + (1));
seq__30340_30373 = G__30378;
chunk__30341_30374 = G__30379;
count__30342_30375 = G__30380;
i__30343_30376 = G__30381;
continue;
} else {
var temp__5457__auto___30382__$1 = cljs.core.seq.call(null,seq__30340_30373);
if(temp__5457__auto___30382__$1){
var seq__30340_30383__$1 = temp__5457__auto___30382__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30340_30383__$1)){
var c__4319__auto___30384 = cljs.core.chunk_first.call(null,seq__30340_30383__$1);
var G__30385 = cljs.core.chunk_rest.call(null,seq__30340_30383__$1);
var G__30386 = c__4319__auto___30384;
var G__30387 = cljs.core.count.call(null,c__4319__auto___30384);
var G__30388 = (0);
seq__30340_30373 = G__30385;
chunk__30341_30374 = G__30386;
count__30342_30375 = G__30387;
i__30343_30376 = G__30388;
continue;
} else {
var req_30389 = cljs.core.first.call(null,seq__30340_30383__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30389,prov);


var G__30390 = cljs.core.next.call(null,seq__30340_30383__$1);
var G__30391 = null;
var G__30392 = (0);
var G__30393 = (0);
seq__30340_30373 = G__30390;
chunk__30341_30374 = G__30391;
count__30342_30375 = G__30392;
i__30343_30376 = G__30393;
continue;
}
} else {
}
}
break;
}


var G__30394 = cljs.core.next.call(null,seq__30332__$1);
var G__30395 = null;
var G__30396 = (0);
var G__30397 = (0);
seq__30332 = G__30394;
chunk__30333 = G__30395;
count__30334 = G__30396;
i__30335 = G__30397;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__30398_30402 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__30399_30403 = null;
var count__30400_30404 = (0);
var i__30401_30405 = (0);
while(true){
if((i__30401_30405 < count__30400_30404)){
var ns_30406 = cljs.core._nth.call(null,chunk__30399_30403,i__30401_30405);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30406);


var G__30407 = seq__30398_30402;
var G__30408 = chunk__30399_30403;
var G__30409 = count__30400_30404;
var G__30410 = (i__30401_30405 + (1));
seq__30398_30402 = G__30407;
chunk__30399_30403 = G__30408;
count__30400_30404 = G__30409;
i__30401_30405 = G__30410;
continue;
} else {
var temp__5457__auto___30411 = cljs.core.seq.call(null,seq__30398_30402);
if(temp__5457__auto___30411){
var seq__30398_30412__$1 = temp__5457__auto___30411;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30398_30412__$1)){
var c__4319__auto___30413 = cljs.core.chunk_first.call(null,seq__30398_30412__$1);
var G__30414 = cljs.core.chunk_rest.call(null,seq__30398_30412__$1);
var G__30415 = c__4319__auto___30413;
var G__30416 = cljs.core.count.call(null,c__4319__auto___30413);
var G__30417 = (0);
seq__30398_30402 = G__30414;
chunk__30399_30403 = G__30415;
count__30400_30404 = G__30416;
i__30401_30405 = G__30417;
continue;
} else {
var ns_30418 = cljs.core.first.call(null,seq__30398_30412__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30418);


var G__30419 = cljs.core.next.call(null,seq__30398_30412__$1);
var G__30420 = null;
var G__30421 = (0);
var G__30422 = (0);
seq__30398_30402 = G__30419;
chunk__30399_30403 = G__30420;
count__30400_30404 = G__30421;
i__30401_30405 = G__30422;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3922__auto__ = goog.require__;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__30423__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__30423 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30424__i = 0, G__30424__a = new Array(arguments.length -  0);
while (G__30424__i < G__30424__a.length) {G__30424__a[G__30424__i] = arguments[G__30424__i + 0]; ++G__30424__i;}
  args = new cljs.core.IndexedSeq(G__30424__a,0,null);
} 
return G__30423__delegate.call(this,args);};
G__30423.cljs$lang$maxFixedArity = 0;
G__30423.cljs$lang$applyTo = (function (arglist__30425){
var args = cljs.core.seq(arglist__30425);
return G__30423__delegate(args);
});
G__30423.cljs$core$IFn$_invoke$arity$variadic = G__30423__delegate;
return G__30423;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__30426_SHARP_,p2__30427_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30426_SHARP_)].join('')),p2__30427_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__30428_SHARP_,p2__30429_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30428_SHARP_)].join(''),p2__30429_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__30430 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__30430.addCallback(((function (G__30430){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__30430))
);

G__30430.addErrback(((function (G__30430){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__30430))
);

return G__30430;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e30431){if((e30431 instanceof Error)){
var e = e30431;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30431;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e30432){if((e30432 instanceof Error)){
var e = e30432;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30432;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__30433 = cljs.core._EQ_;
var expr__30434 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__30433.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__30434))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__30433.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__30434))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__30433.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__30434))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__30433,expr__30434){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__30433,expr__30434))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__30436,callback){
var map__30437 = p__30436;
var map__30437__$1 = ((((!((map__30437 == null)))?(((((map__30437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30437.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30437):map__30437);
var file_msg = map__30437__$1;
var request_url = cljs.core.get.call(null,map__30437__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__30437,map__30437__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30437,map__30437__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__27079__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27079__auto__){
return (function (){
var f__27080__auto__ = (function (){var switch__26989__auto__ = ((function (c__27079__auto__){
return (function (state_30477){
var state_val_30478 = (state_30477[(1)]);
if((state_val_30478 === (7))){
var inst_30473 = (state_30477[(2)]);
var state_30477__$1 = state_30477;
var statearr_30479_30506 = state_30477__$1;
(statearr_30479_30506[(2)] = inst_30473);

(statearr_30479_30506[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30478 === (1))){
var state_30477__$1 = state_30477;
var statearr_30480_30507 = state_30477__$1;
(statearr_30480_30507[(2)] = null);

(statearr_30480_30507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30478 === (4))){
var inst_30441 = (state_30477[(7)]);
var inst_30441__$1 = (state_30477[(2)]);
var state_30477__$1 = (function (){var statearr_30481 = state_30477;
(statearr_30481[(7)] = inst_30441__$1);

return statearr_30481;
})();
if(cljs.core.truth_(inst_30441__$1)){
var statearr_30482_30508 = state_30477__$1;
(statearr_30482_30508[(1)] = (5));

} else {
var statearr_30483_30509 = state_30477__$1;
(statearr_30483_30509[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30478 === (15))){
var inst_30458 = (state_30477[(8)]);
var inst_30455 = (state_30477[(9)]);
var inst_30460 = inst_30458.call(null,inst_30455);
var state_30477__$1 = state_30477;
var statearr_30484_30510 = state_30477__$1;
(statearr_30484_30510[(2)] = inst_30460);

(statearr_30484_30510[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30478 === (13))){
var inst_30467 = (state_30477[(2)]);
var state_30477__$1 = state_30477;
var statearr_30485_30511 = state_30477__$1;
(statearr_30485_30511[(2)] = inst_30467);

(statearr_30485_30511[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30478 === (6))){
var state_30477__$1 = state_30477;
var statearr_30486_30512 = state_30477__$1;
(statearr_30486_30512[(2)] = null);

(statearr_30486_30512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30478 === (17))){
var inst_30464 = (state_30477[(2)]);
var state_30477__$1 = state_30477;
var statearr_30487_30513 = state_30477__$1;
(statearr_30487_30513[(2)] = inst_30464);

(statearr_30487_30513[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30478 === (3))){
var inst_30475 = (state_30477[(2)]);
var state_30477__$1 = state_30477;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30477__$1,inst_30475);
} else {
if((state_val_30478 === (12))){
var state_30477__$1 = state_30477;
var statearr_30488_30514 = state_30477__$1;
(statearr_30488_30514[(2)] = null);

(statearr_30488_30514[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30478 === (2))){
var state_30477__$1 = state_30477;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30477__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_30478 === (11))){
var inst_30446 = (state_30477[(10)]);
var inst_30453 = figwheel.client.file_reloading.blocking_load.call(null,inst_30446);
var state_30477__$1 = state_30477;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30477__$1,(14),inst_30453);
} else {
if((state_val_30478 === (9))){
var inst_30446 = (state_30477[(10)]);
var state_30477__$1 = state_30477;
if(cljs.core.truth_(inst_30446)){
var statearr_30489_30515 = state_30477__$1;
(statearr_30489_30515[(1)] = (11));

} else {
var statearr_30490_30516 = state_30477__$1;
(statearr_30490_30516[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30478 === (5))){
var inst_30447 = (state_30477[(11)]);
var inst_30441 = (state_30477[(7)]);
var inst_30446 = cljs.core.nth.call(null,inst_30441,(0),null);
var inst_30447__$1 = cljs.core.nth.call(null,inst_30441,(1),null);
var state_30477__$1 = (function (){var statearr_30491 = state_30477;
(statearr_30491[(11)] = inst_30447__$1);

(statearr_30491[(10)] = inst_30446);

return statearr_30491;
})();
if(cljs.core.truth_(inst_30447__$1)){
var statearr_30492_30517 = state_30477__$1;
(statearr_30492_30517[(1)] = (8));

} else {
var statearr_30493_30518 = state_30477__$1;
(statearr_30493_30518[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30478 === (14))){
var inst_30458 = (state_30477[(8)]);
var inst_30446 = (state_30477[(10)]);
var inst_30455 = (state_30477[(2)]);
var inst_30456 = console.log("Loading!",inst_30446);
var inst_30457 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_30458__$1 = cljs.core.get.call(null,inst_30457,inst_30446);
var state_30477__$1 = (function (){var statearr_30494 = state_30477;
(statearr_30494[(8)] = inst_30458__$1);

(statearr_30494[(9)] = inst_30455);

(statearr_30494[(12)] = inst_30456);

return statearr_30494;
})();
if(cljs.core.truth_(inst_30458__$1)){
var statearr_30495_30519 = state_30477__$1;
(statearr_30495_30519[(1)] = (15));

} else {
var statearr_30496_30520 = state_30477__$1;
(statearr_30496_30520[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30478 === (16))){
var inst_30455 = (state_30477[(9)]);
var inst_30462 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_30455);
var state_30477__$1 = state_30477;
var statearr_30497_30521 = state_30477__$1;
(statearr_30497_30521[(2)] = inst_30462);

(statearr_30497_30521[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30478 === (10))){
var inst_30469 = (state_30477[(2)]);
var state_30477__$1 = (function (){var statearr_30498 = state_30477;
(statearr_30498[(13)] = inst_30469);

return statearr_30498;
})();
var statearr_30499_30522 = state_30477__$1;
(statearr_30499_30522[(2)] = null);

(statearr_30499_30522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30478 === (8))){
var inst_30447 = (state_30477[(11)]);
var inst_30449 = console.log("Evaling!",inst_30447);
var inst_30450 = eval(inst_30447);
var state_30477__$1 = (function (){var statearr_30500 = state_30477;
(statearr_30500[(14)] = inst_30449);

return statearr_30500;
})();
var statearr_30501_30523 = state_30477__$1;
(statearr_30501_30523[(2)] = inst_30450);

(statearr_30501_30523[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27079__auto__))
;
return ((function (switch__26989__auto__,c__27079__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__26990__auto__ = null;
var figwheel$client$file_reloading$state_machine__26990__auto____0 = (function (){
var statearr_30502 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30502[(0)] = figwheel$client$file_reloading$state_machine__26990__auto__);

(statearr_30502[(1)] = (1));

return statearr_30502;
});
var figwheel$client$file_reloading$state_machine__26990__auto____1 = (function (state_30477){
while(true){
var ret_value__26991__auto__ = (function (){try{while(true){
var result__26992__auto__ = switch__26989__auto__.call(null,state_30477);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26992__auto__;
}
break;
}
}catch (e30503){if((e30503 instanceof Object)){
var ex__26993__auto__ = e30503;
var statearr_30504_30524 = state_30477;
(statearr_30504_30524[(5)] = ex__26993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30503;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30525 = state_30477;
state_30477 = G__30525;
continue;
} else {
return ret_value__26991__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__26990__auto__ = function(state_30477){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__26990__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__26990__auto____1.call(this,state_30477);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__26990__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__26990__auto____0;
figwheel$client$file_reloading$state_machine__26990__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__26990__auto____1;
return figwheel$client$file_reloading$state_machine__26990__auto__;
})()
;})(switch__26989__auto__,c__27079__auto__))
})();
var state__27081__auto__ = (function (){var statearr_30505 = f__27080__auto__.call(null);
(statearr_30505[(6)] = c__27079__auto__);

return statearr_30505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27081__auto__);
});})(c__27079__auto__))
);

return c__27079__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__30527 = arguments.length;
switch (G__30527) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__30529,callback){
var map__30530 = p__30529;
var map__30530__$1 = ((((!((map__30530 == null)))?(((((map__30530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30530.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30530):map__30530);
var file_msg = map__30530__$1;
var namespace = cljs.core.get.call(null,map__30530__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__30530,map__30530__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__30530,map__30530__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__30532){
var map__30533 = p__30532;
var map__30533__$1 = ((((!((map__30533 == null)))?(((((map__30533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30533):map__30533);
var file_msg = map__30533__$1;
var namespace = cljs.core.get.call(null,map__30533__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30535){
var map__30536 = p__30535;
var map__30536__$1 = ((((!((map__30536 == null)))?(((((map__30536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30536.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30536):map__30536);
var file_msg = map__30536__$1;
var namespace = cljs.core.get.call(null,map__30536__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3911__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3911__auto__){
var or__3922__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__3911__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30538,callback){
var map__30539 = p__30538;
var map__30539__$1 = ((((!((map__30539 == null)))?(((((map__30539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30539):map__30539);
var file_msg = map__30539__$1;
var request_url = cljs.core.get.call(null,map__30539__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__30539__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__27079__auto___30589 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27079__auto___30589,out){
return (function (){
var f__27080__auto__ = (function (){var switch__26989__auto__ = ((function (c__27079__auto___30589,out){
return (function (state_30574){
var state_val_30575 = (state_30574[(1)]);
if((state_val_30575 === (1))){
var inst_30548 = cljs.core.seq.call(null,files);
var inst_30549 = cljs.core.first.call(null,inst_30548);
var inst_30550 = cljs.core.next.call(null,inst_30548);
var inst_30551 = files;
var state_30574__$1 = (function (){var statearr_30576 = state_30574;
(statearr_30576[(7)] = inst_30551);

(statearr_30576[(8)] = inst_30550);

(statearr_30576[(9)] = inst_30549);

return statearr_30576;
})();
var statearr_30577_30590 = state_30574__$1;
(statearr_30577_30590[(2)] = null);

(statearr_30577_30590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30575 === (2))){
var inst_30551 = (state_30574[(7)]);
var inst_30557 = (state_30574[(10)]);
var inst_30556 = cljs.core.seq.call(null,inst_30551);
var inst_30557__$1 = cljs.core.first.call(null,inst_30556);
var inst_30558 = cljs.core.next.call(null,inst_30556);
var inst_30559 = (inst_30557__$1 == null);
var inst_30560 = cljs.core.not.call(null,inst_30559);
var state_30574__$1 = (function (){var statearr_30578 = state_30574;
(statearr_30578[(10)] = inst_30557__$1);

(statearr_30578[(11)] = inst_30558);

return statearr_30578;
})();
if(inst_30560){
var statearr_30579_30591 = state_30574__$1;
(statearr_30579_30591[(1)] = (4));

} else {
var statearr_30580_30592 = state_30574__$1;
(statearr_30580_30592[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30575 === (3))){
var inst_30572 = (state_30574[(2)]);
var state_30574__$1 = state_30574;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30574__$1,inst_30572);
} else {
if((state_val_30575 === (4))){
var inst_30557 = (state_30574[(10)]);
var inst_30562 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30557);
var state_30574__$1 = state_30574;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30574__$1,(7),inst_30562);
} else {
if((state_val_30575 === (5))){
var inst_30568 = cljs.core.async.close_BANG_.call(null,out);
var state_30574__$1 = state_30574;
var statearr_30581_30593 = state_30574__$1;
(statearr_30581_30593[(2)] = inst_30568);

(statearr_30581_30593[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30575 === (6))){
var inst_30570 = (state_30574[(2)]);
var state_30574__$1 = state_30574;
var statearr_30582_30594 = state_30574__$1;
(statearr_30582_30594[(2)] = inst_30570);

(statearr_30582_30594[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30575 === (7))){
var inst_30558 = (state_30574[(11)]);
var inst_30564 = (state_30574[(2)]);
var inst_30565 = cljs.core.async.put_BANG_.call(null,out,inst_30564);
var inst_30551 = inst_30558;
var state_30574__$1 = (function (){var statearr_30583 = state_30574;
(statearr_30583[(7)] = inst_30551);

(statearr_30583[(12)] = inst_30565);

return statearr_30583;
})();
var statearr_30584_30595 = state_30574__$1;
(statearr_30584_30595[(2)] = null);

(statearr_30584_30595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__27079__auto___30589,out))
;
return ((function (switch__26989__auto__,c__27079__auto___30589,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26990__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26990__auto____0 = (function (){
var statearr_30585 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30585[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26990__auto__);

(statearr_30585[(1)] = (1));

return statearr_30585;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26990__auto____1 = (function (state_30574){
while(true){
var ret_value__26991__auto__ = (function (){try{while(true){
var result__26992__auto__ = switch__26989__auto__.call(null,state_30574);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26992__auto__;
}
break;
}
}catch (e30586){if((e30586 instanceof Object)){
var ex__26993__auto__ = e30586;
var statearr_30587_30596 = state_30574;
(statearr_30587_30596[(5)] = ex__26993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30574);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30586;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30597 = state_30574;
state_30574 = G__30597;
continue;
} else {
return ret_value__26991__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26990__auto__ = function(state_30574){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26990__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26990__auto____1.call(this,state_30574);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26990__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26990__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26990__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26990__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26990__auto__;
})()
;})(switch__26989__auto__,c__27079__auto___30589,out))
})();
var state__27081__auto__ = (function (){var statearr_30588 = f__27080__auto__.call(null);
(statearr_30588[(6)] = c__27079__auto___30589);

return statearr_30588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27081__auto__);
});})(c__27079__auto___30589,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30598,opts){
var map__30599 = p__30598;
var map__30599__$1 = ((((!((map__30599 == null)))?(((((map__30599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30599.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30599):map__30599);
var eval_body = cljs.core.get.call(null,map__30599__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30599__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3911__auto__ = eval_body;
if(cljs.core.truth_(and__3911__auto__)){
return typeof eval_body === 'string';
} else {
return and__3911__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e30601){var e = e30601;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__30602_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30602_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__30603){
var vec__30604 = p__30603;
var k = cljs.core.nth.call(null,vec__30604,(0),null);
var v = cljs.core.nth.call(null,vec__30604,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30607){
var vec__30608 = p__30607;
var k = cljs.core.nth.call(null,vec__30608,(0),null);
var v = cljs.core.nth.call(null,vec__30608,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30614,p__30615){
var map__30616 = p__30614;
var map__30616__$1 = ((((!((map__30616 == null)))?(((((map__30616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30616.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30616):map__30616);
var opts = map__30616__$1;
var before_jsload = cljs.core.get.call(null,map__30616__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__30616__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__30616__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__30617 = p__30615;
var map__30617__$1 = ((((!((map__30617 == null)))?(((((map__30617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30617.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30617):map__30617);
var msg = map__30617__$1;
var files = cljs.core.get.call(null,map__30617__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__30617__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__30617__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27079__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27079__auto__,map__30616,map__30616__$1,opts,before_jsload,on_jsload,reload_dependents,map__30617,map__30617__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__27080__auto__ = (function (){var switch__26989__auto__ = ((function (c__27079__auto__,map__30616,map__30616__$1,opts,before_jsload,on_jsload,reload_dependents,map__30617,map__30617__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_30771){
var state_val_30772 = (state_30771[(1)]);
if((state_val_30772 === (7))){
var inst_30632 = (state_30771[(7)]);
var inst_30633 = (state_30771[(8)]);
var inst_30631 = (state_30771[(9)]);
var inst_30634 = (state_30771[(10)]);
var inst_30639 = cljs.core._nth.call(null,inst_30632,inst_30634);
var inst_30640 = figwheel.client.file_reloading.eval_body.call(null,inst_30639,opts);
var inst_30641 = (inst_30634 + (1));
var tmp30773 = inst_30632;
var tmp30774 = inst_30633;
var tmp30775 = inst_30631;
var inst_30631__$1 = tmp30775;
var inst_30632__$1 = tmp30773;
var inst_30633__$1 = tmp30774;
var inst_30634__$1 = inst_30641;
var state_30771__$1 = (function (){var statearr_30776 = state_30771;
(statearr_30776[(7)] = inst_30632__$1);

(statearr_30776[(8)] = inst_30633__$1);

(statearr_30776[(11)] = inst_30640);

(statearr_30776[(9)] = inst_30631__$1);

(statearr_30776[(10)] = inst_30634__$1);

return statearr_30776;
})();
var statearr_30777_30860 = state_30771__$1;
(statearr_30777_30860[(2)] = null);

(statearr_30777_30860[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30772 === (20))){
var inst_30674 = (state_30771[(12)]);
var inst_30682 = figwheel.client.file_reloading.sort_files.call(null,inst_30674);
var state_30771__$1 = state_30771;
var statearr_30778_30861 = state_30771__$1;
(statearr_30778_30861[(2)] = inst_30682);

(statearr_30778_30861[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30772 === (27))){
var state_30771__$1 = state_30771;
var statearr_30779_30862 = state_30771__$1;
(statearr_30779_30862[(2)] = null);

(statearr_30779_30862[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30772 === (1))){
var inst_30623 = (state_30771[(13)]);
var inst_30620 = before_jsload.call(null,files);
var inst_30621 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30622 = (function (){return ((function (inst_30623,inst_30620,inst_30621,state_val_30772,c__27079__auto__,map__30616,map__30616__$1,opts,before_jsload,on_jsload,reload_dependents,map__30617,map__30617__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30611_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30611_SHARP_);
});
;})(inst_30623,inst_30620,inst_30621,state_val_30772,c__27079__auto__,map__30616,map__30616__$1,opts,before_jsload,on_jsload,reload_dependents,map__30617,map__30617__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30623__$1 = cljs.core.filter.call(null,inst_30622,files);
var inst_30624 = cljs.core.not_empty.call(null,inst_30623__$1);
var state_30771__$1 = (function (){var statearr_30780 = state_30771;
(statearr_30780[(13)] = inst_30623__$1);

(statearr_30780[(14)] = inst_30621);

(statearr_30780[(15)] = inst_30620);

return statearr_30780;
})();
if(cljs.core.truth_(inst_30624)){
var statearr_30781_30863 = state_30771__$1;
(statearr_30781_30863[(1)] = (2));

} else {
var statearr_30782_30864 = state_30771__$1;
(statearr_30782_30864[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30772 === (24))){
var state_30771__$1 = state_30771;
var statearr_30783_30865 = state_30771__$1;
(statearr_30783_30865[(2)] = null);

(statearr_30783_30865[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30772 === (39))){
var inst_30724 = (state_30771[(16)]);
var state_30771__$1 = state_30771;
var statearr_30784_30866 = state_30771__$1;
(statearr_30784_30866[(2)] = inst_30724);

(statearr_30784_30866[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30772 === (46))){
var inst_30766 = (state_30771[(2)]);
var state_30771__$1 = state_30771;
var statearr_30785_30867 = state_30771__$1;
(statearr_30785_30867[(2)] = inst_30766);

(statearr_30785_30867[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30772 === (4))){
var inst_30668 = (state_30771[(2)]);
var inst_30669 = cljs.core.List.EMPTY;
var inst_30670 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_30669);
var inst_30671 = (function (){return ((function (inst_30668,inst_30669,inst_30670,state_val_30772,c__27079__auto__,map__30616,map__30616__$1,opts,before_jsload,on_jsload,reload_dependents,map__30617,map__30617__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30612_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30612_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30612_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__30612_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_30668,inst_30669,inst_30670,state_val_30772,c__27079__auto__,map__30616,map__30616__$1,opts,before_jsload,on_jsload,reload_dependents,map__30617,map__30617__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30672 = cljs.core.filter.call(null,inst_30671,files);
var inst_30673 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_30674 = cljs.core.concat.call(null,inst_30672,inst_30673);
var state_30771__$1 = (function (){var statearr_30786 = state_30771;
(statearr_30786[(17)] = inst_30668);

(statearr_30786[(18)] = inst_30670);

(statearr_30786[(12)] = inst_30674);

return statearr_30786;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_30787_30868 = state_30771__$1;
(statearr_30787_30868[(1)] = (16));

} else {
var statearr_30788_30869 = state_30771__$1;
(statearr_30788_30869[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30772 === (15))){
var inst_30658 = (state_30771[(2)]);
var state_30771__$1 = state_30771;
var statearr_30789_30870 = state_30771__$1;
(statearr_30789_30870[(2)] = inst_30658);

(statearr_30789_30870[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30772 === (21))){
var inst_30684 = (state_30771[(19)]);
var inst_30684__$1 = (state_30771[(2)]);
var inst_30685 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30684__$1);
var state_30771__$1 = (function (){var statearr_30790 = state_30771;
(statearr_30790[(19)] = inst_30684__$1);

return statearr_30790;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30771__$1,(22),inst_30685);
} else {
if((state_val_30772 === (31))){
var inst_30769 = (state_30771[(2)]);
var state_30771__$1 = state_30771;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30771__$1,inst_30769);
} else {
if((state_val_30772 === (32))){
var inst_30724 = (state_30771[(16)]);
var inst_30729 = inst_30724.cljs$lang$protocol_mask$partition0$;
var inst_30730 = (inst_30729 & (64));
var inst_30731 = inst_30724.cljs$core$ISeq$;
var inst_30732 = (cljs.core.PROTOCOL_SENTINEL === inst_30731);
var inst_30733 = ((inst_30730) || (inst_30732));
var state_30771__$1 = state_30771;
if(cljs.core.truth_(inst_30733)){
var statearr_30791_30871 = state_30771__$1;
(statearr_30791_30871[(1)] = (35));

} else {
var statearr_30792_30872 = state_30771__$1;
(statearr_30792_30872[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30772 === (40))){
var inst_30746 = (state_30771[(20)]);
var inst_30745 = (state_30771[(2)]);
var inst_30746__$1 = cljs.core.get.call(null,inst_30745,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30747 = cljs.core.get.call(null,inst_30745,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30748 = cljs.core.not_empty.call(null,inst_30746__$1);
var state_30771__$1 = (function (){var statearr_30793 = state_30771;
(statearr_30793[(21)] = inst_30747);

(statearr_30793[(20)] = inst_30746__$1);

return statearr_30793;
})();
if(cljs.core.truth_(inst_30748)){
var statearr_30794_30873 = state_30771__$1;
(statearr_30794_30873[(1)] = (41));

} else {
var statearr_30795_30874 = state_30771__$1;
(statearr_30795_30874[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30772 === (33))){
var state_30771__$1 = state_30771;
var statearr_30796_30875 = state_30771__$1;
(statearr_30796_30875[(2)] = false);

(statearr_30796_30875[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30772 === (13))){
var inst_30644 = (state_30771[(22)]);
var inst_30648 = cljs.core.chunk_first.call(null,inst_30644);
var inst_30649 = cljs.core.chunk_rest.call(null,inst_30644);
var inst_30650 = cljs.core.count.call(null,inst_30648);
var inst_30631 = inst_30649;
var inst_30632 = inst_30648;
var inst_30633 = inst_30650;
var inst_30634 = (0);
var state_30771__$1 = (function (){var statearr_30797 = state_30771;
(statearr_30797[(7)] = inst_30632);

(statearr_30797[(8)] = inst_30633);

(statearr_30797[(9)] = inst_30631);

(statearr_30797[(10)] = inst_30634);

return statearr_30797;
})();
var statearr_30798_30876 = state_30771__$1;
(statearr_30798_30876[(2)] = null);

(statearr_30798_30876[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30772 === (22))){
var inst_30692 = (state_30771[(23)]);
var inst_30684 = (state_30771[(19)]);
var inst_30688 = (state_30771[(24)]);
var inst_30687 = (state_30771[(25)]);
var inst_30687__$1 = (state_30771[(2)]);
var inst_30688__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30687__$1);
var inst_30689 = (function (){var all_files = inst_30684;
var res_SINGLEQUOTE_ = inst_30687__$1;
var res = inst_30688__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_30692,inst_30684,inst_30688,inst_30687,inst_30687__$1,inst_30688__$1,state_val_30772,c__27079__auto__,map__30616,map__30616__$1,opts,before_jsload,on_jsload,reload_dependents,map__30617,map__30617__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30613_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30613_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_30692,inst_30684,inst_30688,inst_30687,inst_30687__$1,inst_30688__$1,state_val_30772,c__27079__auto__,map__30616,map__30616__$1,opts,before_jsload,on_jsload,reload_dependents,map__30617,map__30617__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30690 = cljs.core.filter.call(null,inst_30689,inst_30687__$1);
var inst_30691 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_30692__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30691);
var inst_30693 = cljs.core.not_empty.call(null,inst_30692__$1);
var state_30771__$1 = (function (){var statearr_30799 = state_30771;
(statearr_30799[(23)] = inst_30692__$1);

(statearr_30799[(24)] = inst_30688__$1);

(statearr_30799[(25)] = inst_30687__$1);

(statearr_30799[(26)] = inst_30690);

return statearr_30799;
})();
if(cljs.core.truth_(inst_30693)){
var statearr_30800_30877 = state_30771__$1;
(statearr_30800_30877[(1)] = (23));

} else {
var statearr_30801_30878 = state_30771__$1;
(statearr_30801_30878[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30772 === (36))){
var state_30771__$1 = state_30771;
var statearr_30802_30879 = state_30771__$1;
(statearr_30802_30879[(2)] = false);

(statearr_30802_30879[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30772 === (41))){
var inst_30746 = (state_30771[(20)]);
var inst_30750 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_30751 = cljs.core.map.call(null,inst_30750,inst_30746);
var inst_30752 = cljs.core.pr_str.call(null,inst_30751);
var inst_30753 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30752)].join('');
var inst_30754 = figwheel.client.utils.log.call(null,inst_30753);
var state_30771__$1 = state_30771;
var statearr_30803_30880 = state_30771__$1;
(statearr_30803_30880[(2)] = inst_30754);

(statearr_30803_30880[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30772 === (43))){
var inst_30747 = (state_30771[(21)]);
var inst_30757 = (state_30771[(2)]);
var inst_30758 = cljs.core.not_empty.call(null,inst_30747);
var state_30771__$1 = (function (){var statearr_30804 = state_30771;
(statearr_30804[(27)] = inst_30757);

return statearr_30804;
})();
if(cljs.core.truth_(inst_30758)){
var statearr_30805_30881 = state_30771__$1;
(statearr_30805_30881[(1)] = (44));

} else {
var statearr_30806_30882 = state_30771__$1;
(statearr_30806_30882[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30772 === (29))){
var inst_30692 = (state_30771[(23)]);
var inst_30684 = (state_30771[(19)]);
var inst_30688 = (state_30771[(24)]);
var inst_30687 = (state_30771[(25)]);
var inst_30724 = (state_30771[(16)]);
var inst_30690 = (state_30771[(26)]);
var inst_30720 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30723 = (function (){var all_files = inst_30684;
var res_SINGLEQUOTE_ = inst_30687;
var res = inst_30688;
var files_not_loaded = inst_30690;
var dependencies_that_loaded = inst_30692;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30692,inst_30684,inst_30688,inst_30687,inst_30724,inst_30690,inst_30720,state_val_30772,c__27079__auto__,map__30616,map__30616__$1,opts,before_jsload,on_jsload,reload_dependents,map__30617,map__30617__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30722){
var map__30807 = p__30722;
var map__30807__$1 = ((((!((map__30807 == null)))?(((((map__30807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30807.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30807):map__30807);
var namespace = cljs.core.get.call(null,map__30807__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30692,inst_30684,inst_30688,inst_30687,inst_30724,inst_30690,inst_30720,state_val_30772,c__27079__auto__,map__30616,map__30616__$1,opts,before_jsload,on_jsload,reload_dependents,map__30617,map__30617__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30724__$1 = cljs.core.group_by.call(null,inst_30723,inst_30690);
var inst_30726 = (inst_30724__$1 == null);
var inst_30727 = cljs.core.not.call(null,inst_30726);
var state_30771__$1 = (function (){var statearr_30809 = state_30771;
(statearr_30809[(16)] = inst_30724__$1);

(statearr_30809[(28)] = inst_30720);

return statearr_30809;
})();
if(inst_30727){
var statearr_30810_30883 = state_30771__$1;
(statearr_30810_30883[(1)] = (32));

} else {
var statearr_30811_30884 = state_30771__$1;
(statearr_30811_30884[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30772 === (44))){
var inst_30747 = (state_30771[(21)]);
var inst_30760 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30747);
var inst_30761 = cljs.core.pr_str.call(null,inst_30760);
var inst_30762 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30761)].join('');
var inst_30763 = figwheel.client.utils.log.call(null,inst_30762);
var state_30771__$1 = state_30771;
var statearr_30812_30885 = state_30771__$1;
(statearr_30812_30885[(2)] = inst_30763);

(statearr_30812_30885[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30772 === (6))){
var inst_30665 = (state_30771[(2)]);
var state_30771__$1 = state_30771;
var statearr_30813_30886 = state_30771__$1;
(statearr_30813_30886[(2)] = inst_30665);

(statearr_30813_30886[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30772 === (28))){
var inst_30690 = (state_30771[(26)]);
var inst_30717 = (state_30771[(2)]);
var inst_30718 = cljs.core.not_empty.call(null,inst_30690);
var state_30771__$1 = (function (){var statearr_30814 = state_30771;
(statearr_30814[(29)] = inst_30717);

return statearr_30814;
})();
if(cljs.core.truth_(inst_30718)){
var statearr_30815_30887 = state_30771__$1;
(statearr_30815_30887[(1)] = (29));

} else {
var statearr_30816_30888 = state_30771__$1;
(statearr_30816_30888[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30772 === (25))){
var inst_30688 = (state_30771[(24)]);
var inst_30704 = (state_30771[(2)]);
var inst_30705 = cljs.core.not_empty.call(null,inst_30688);
var state_30771__$1 = (function (){var statearr_30817 = state_30771;
(statearr_30817[(30)] = inst_30704);

return statearr_30817;
})();
if(cljs.core.truth_(inst_30705)){
var statearr_30818_30889 = state_30771__$1;
(statearr_30818_30889[(1)] = (26));

} else {
var statearr_30819_30890 = state_30771__$1;
(statearr_30819_30890[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30772 === (34))){
var inst_30740 = (state_30771[(2)]);
var state_30771__$1 = state_30771;
if(cljs.core.truth_(inst_30740)){
var statearr_30820_30891 = state_30771__$1;
(statearr_30820_30891[(1)] = (38));

} else {
var statearr_30821_30892 = state_30771__$1;
(statearr_30821_30892[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30772 === (17))){
var state_30771__$1 = state_30771;
var statearr_30822_30893 = state_30771__$1;
(statearr_30822_30893[(2)] = recompile_dependents);

(statearr_30822_30893[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30772 === (3))){
var state_30771__$1 = state_30771;
var statearr_30823_30894 = state_30771__$1;
(statearr_30823_30894[(2)] = null);

(statearr_30823_30894[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30772 === (12))){
var inst_30661 = (state_30771[(2)]);
var state_30771__$1 = state_30771;
var statearr_30824_30895 = state_30771__$1;
(statearr_30824_30895[(2)] = inst_30661);

(statearr_30824_30895[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30772 === (2))){
var inst_30623 = (state_30771[(13)]);
var inst_30630 = cljs.core.seq.call(null,inst_30623);
var inst_30631 = inst_30630;
var inst_30632 = null;
var inst_30633 = (0);
var inst_30634 = (0);
var state_30771__$1 = (function (){var statearr_30825 = state_30771;
(statearr_30825[(7)] = inst_30632);

(statearr_30825[(8)] = inst_30633);

(statearr_30825[(9)] = inst_30631);

(statearr_30825[(10)] = inst_30634);

return statearr_30825;
})();
var statearr_30826_30896 = state_30771__$1;
(statearr_30826_30896[(2)] = null);

(statearr_30826_30896[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30772 === (23))){
var inst_30692 = (state_30771[(23)]);
var inst_30684 = (state_30771[(19)]);
var inst_30688 = (state_30771[(24)]);
var inst_30687 = (state_30771[(25)]);
var inst_30690 = (state_30771[(26)]);
var inst_30695 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_30697 = (function (){var all_files = inst_30684;
var res_SINGLEQUOTE_ = inst_30687;
var res = inst_30688;
var files_not_loaded = inst_30690;
var dependencies_that_loaded = inst_30692;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30692,inst_30684,inst_30688,inst_30687,inst_30690,inst_30695,state_val_30772,c__27079__auto__,map__30616,map__30616__$1,opts,before_jsload,on_jsload,reload_dependents,map__30617,map__30617__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30696){
var map__30827 = p__30696;
var map__30827__$1 = ((((!((map__30827 == null)))?(((((map__30827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30827.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30827):map__30827);
var request_url = cljs.core.get.call(null,map__30827__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30692,inst_30684,inst_30688,inst_30687,inst_30690,inst_30695,state_val_30772,c__27079__auto__,map__30616,map__30616__$1,opts,before_jsload,on_jsload,reload_dependents,map__30617,map__30617__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30698 = cljs.core.reverse.call(null,inst_30692);
var inst_30699 = cljs.core.map.call(null,inst_30697,inst_30698);
var inst_30700 = cljs.core.pr_str.call(null,inst_30699);
var inst_30701 = figwheel.client.utils.log.call(null,inst_30700);
var state_30771__$1 = (function (){var statearr_30829 = state_30771;
(statearr_30829[(31)] = inst_30695);

return statearr_30829;
})();
var statearr_30830_30897 = state_30771__$1;
(statearr_30830_30897[(2)] = inst_30701);

(statearr_30830_30897[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30772 === (35))){
var state_30771__$1 = state_30771;
var statearr_30831_30898 = state_30771__$1;
(statearr_30831_30898[(2)] = true);

(statearr_30831_30898[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30772 === (19))){
var inst_30674 = (state_30771[(12)]);
var inst_30680 = figwheel.client.file_reloading.expand_files.call(null,inst_30674);
var state_30771__$1 = state_30771;
var statearr_30832_30899 = state_30771__$1;
(statearr_30832_30899[(2)] = inst_30680);

(statearr_30832_30899[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30772 === (11))){
var state_30771__$1 = state_30771;
var statearr_30833_30900 = state_30771__$1;
(statearr_30833_30900[(2)] = null);

(statearr_30833_30900[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30772 === (9))){
var inst_30663 = (state_30771[(2)]);
var state_30771__$1 = state_30771;
var statearr_30834_30901 = state_30771__$1;
(statearr_30834_30901[(2)] = inst_30663);

(statearr_30834_30901[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30772 === (5))){
var inst_30633 = (state_30771[(8)]);
var inst_30634 = (state_30771[(10)]);
var inst_30636 = (inst_30634 < inst_30633);
var inst_30637 = inst_30636;
var state_30771__$1 = state_30771;
if(cljs.core.truth_(inst_30637)){
var statearr_30835_30902 = state_30771__$1;
(statearr_30835_30902[(1)] = (7));

} else {
var statearr_30836_30903 = state_30771__$1;
(statearr_30836_30903[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30772 === (14))){
var inst_30644 = (state_30771[(22)]);
var inst_30653 = cljs.core.first.call(null,inst_30644);
var inst_30654 = figwheel.client.file_reloading.eval_body.call(null,inst_30653,opts);
var inst_30655 = cljs.core.next.call(null,inst_30644);
var inst_30631 = inst_30655;
var inst_30632 = null;
var inst_30633 = (0);
var inst_30634 = (0);
var state_30771__$1 = (function (){var statearr_30837 = state_30771;
(statearr_30837[(7)] = inst_30632);

(statearr_30837[(8)] = inst_30633);

(statearr_30837[(32)] = inst_30654);

(statearr_30837[(9)] = inst_30631);

(statearr_30837[(10)] = inst_30634);

return statearr_30837;
})();
var statearr_30838_30904 = state_30771__$1;
(statearr_30838_30904[(2)] = null);

(statearr_30838_30904[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30772 === (45))){
var state_30771__$1 = state_30771;
var statearr_30839_30905 = state_30771__$1;
(statearr_30839_30905[(2)] = null);

(statearr_30839_30905[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30772 === (26))){
var inst_30692 = (state_30771[(23)]);
var inst_30684 = (state_30771[(19)]);
var inst_30688 = (state_30771[(24)]);
var inst_30687 = (state_30771[(25)]);
var inst_30690 = (state_30771[(26)]);
var inst_30707 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30709 = (function (){var all_files = inst_30684;
var res_SINGLEQUOTE_ = inst_30687;
var res = inst_30688;
var files_not_loaded = inst_30690;
var dependencies_that_loaded = inst_30692;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30692,inst_30684,inst_30688,inst_30687,inst_30690,inst_30707,state_val_30772,c__27079__auto__,map__30616,map__30616__$1,opts,before_jsload,on_jsload,reload_dependents,map__30617,map__30617__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30708){
var map__30840 = p__30708;
var map__30840__$1 = ((((!((map__30840 == null)))?(((((map__30840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30840.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30840):map__30840);
var namespace = cljs.core.get.call(null,map__30840__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__30840__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30692,inst_30684,inst_30688,inst_30687,inst_30690,inst_30707,state_val_30772,c__27079__auto__,map__30616,map__30616__$1,opts,before_jsload,on_jsload,reload_dependents,map__30617,map__30617__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30710 = cljs.core.map.call(null,inst_30709,inst_30688);
var inst_30711 = cljs.core.pr_str.call(null,inst_30710);
var inst_30712 = figwheel.client.utils.log.call(null,inst_30711);
var inst_30713 = (function (){var all_files = inst_30684;
var res_SINGLEQUOTE_ = inst_30687;
var res = inst_30688;
var files_not_loaded = inst_30690;
var dependencies_that_loaded = inst_30692;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30692,inst_30684,inst_30688,inst_30687,inst_30690,inst_30707,inst_30709,inst_30710,inst_30711,inst_30712,state_val_30772,c__27079__auto__,map__30616,map__30616__$1,opts,before_jsload,on_jsload,reload_dependents,map__30617,map__30617__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30692,inst_30684,inst_30688,inst_30687,inst_30690,inst_30707,inst_30709,inst_30710,inst_30711,inst_30712,state_val_30772,c__27079__auto__,map__30616,map__30616__$1,opts,before_jsload,on_jsload,reload_dependents,map__30617,map__30617__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30714 = setTimeout(inst_30713,(10));
var state_30771__$1 = (function (){var statearr_30842 = state_30771;
(statearr_30842[(33)] = inst_30707);

(statearr_30842[(34)] = inst_30712);

return statearr_30842;
})();
var statearr_30843_30906 = state_30771__$1;
(statearr_30843_30906[(2)] = inst_30714);

(statearr_30843_30906[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30772 === (16))){
var state_30771__$1 = state_30771;
var statearr_30844_30907 = state_30771__$1;
(statearr_30844_30907[(2)] = reload_dependents);

(statearr_30844_30907[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30772 === (38))){
var inst_30724 = (state_30771[(16)]);
var inst_30742 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30724);
var state_30771__$1 = state_30771;
var statearr_30845_30908 = state_30771__$1;
(statearr_30845_30908[(2)] = inst_30742);

(statearr_30845_30908[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30772 === (30))){
var state_30771__$1 = state_30771;
var statearr_30846_30909 = state_30771__$1;
(statearr_30846_30909[(2)] = null);

(statearr_30846_30909[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30772 === (10))){
var inst_30644 = (state_30771[(22)]);
var inst_30646 = cljs.core.chunked_seq_QMARK_.call(null,inst_30644);
var state_30771__$1 = state_30771;
if(inst_30646){
var statearr_30847_30910 = state_30771__$1;
(statearr_30847_30910[(1)] = (13));

} else {
var statearr_30848_30911 = state_30771__$1;
(statearr_30848_30911[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30772 === (18))){
var inst_30678 = (state_30771[(2)]);
var state_30771__$1 = state_30771;
if(cljs.core.truth_(inst_30678)){
var statearr_30849_30912 = state_30771__$1;
(statearr_30849_30912[(1)] = (19));

} else {
var statearr_30850_30913 = state_30771__$1;
(statearr_30850_30913[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30772 === (42))){
var state_30771__$1 = state_30771;
var statearr_30851_30914 = state_30771__$1;
(statearr_30851_30914[(2)] = null);

(statearr_30851_30914[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30772 === (37))){
var inst_30737 = (state_30771[(2)]);
var state_30771__$1 = state_30771;
var statearr_30852_30915 = state_30771__$1;
(statearr_30852_30915[(2)] = inst_30737);

(statearr_30852_30915[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30772 === (8))){
var inst_30644 = (state_30771[(22)]);
var inst_30631 = (state_30771[(9)]);
var inst_30644__$1 = cljs.core.seq.call(null,inst_30631);
var state_30771__$1 = (function (){var statearr_30853 = state_30771;
(statearr_30853[(22)] = inst_30644__$1);

return statearr_30853;
})();
if(inst_30644__$1){
var statearr_30854_30916 = state_30771__$1;
(statearr_30854_30916[(1)] = (10));

} else {
var statearr_30855_30917 = state_30771__$1;
(statearr_30855_30917[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27079__auto__,map__30616,map__30616__$1,opts,before_jsload,on_jsload,reload_dependents,map__30617,map__30617__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__26989__auto__,c__27079__auto__,map__30616,map__30616__$1,opts,before_jsload,on_jsload,reload_dependents,map__30617,map__30617__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26990__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26990__auto____0 = (function (){
var statearr_30856 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30856[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__26990__auto__);

(statearr_30856[(1)] = (1));

return statearr_30856;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26990__auto____1 = (function (state_30771){
while(true){
var ret_value__26991__auto__ = (function (){try{while(true){
var result__26992__auto__ = switch__26989__auto__.call(null,state_30771);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26992__auto__;
}
break;
}
}catch (e30857){if((e30857 instanceof Object)){
var ex__26993__auto__ = e30857;
var statearr_30858_30918 = state_30771;
(statearr_30858_30918[(5)] = ex__26993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30771);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30857;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30919 = state_30771;
state_30771 = G__30919;
continue;
} else {
return ret_value__26991__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__26990__auto__ = function(state_30771){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26990__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26990__auto____1.call(this,state_30771);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__26990__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26990__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__26990__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26990__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26990__auto__;
})()
;})(switch__26989__auto__,c__27079__auto__,map__30616,map__30616__$1,opts,before_jsload,on_jsload,reload_dependents,map__30617,map__30617__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__27081__auto__ = (function (){var statearr_30859 = f__27080__auto__.call(null);
(statearr_30859[(6)] = c__27079__auto__);

return statearr_30859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27081__auto__);
});})(c__27079__auto__,map__30616,map__30616__$1,opts,before_jsload,on_jsload,reload_dependents,map__30617,map__30617__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__27079__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30922,link){
var map__30923 = p__30922;
var map__30923__$1 = ((((!((map__30923 == null)))?(((((map__30923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30923.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30923):map__30923);
var file = cljs.core.get.call(null,map__30923__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__30923,map__30923__$1,file){
return (function (p1__30920_SHARP_,p2__30921_SHARP_){
if(cljs.core._EQ_.call(null,p1__30920_SHARP_,p2__30921_SHARP_)){
return p1__30920_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__30923,map__30923__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30926){
var map__30927 = p__30926;
var map__30927__$1 = ((((!((map__30927 == null)))?(((((map__30927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30927.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30927):map__30927);
var match_length = cljs.core.get.call(null,map__30927__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__30927__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30925_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30925_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__30929_SHARP_,p2__30930_SHARP_){
return cljs.core.assoc.call(null,p1__30929_SHARP_,cljs.core.get.call(null,p2__30930_SHARP_,key),p2__30930_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_30931 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_30931);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_30931);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30932,p__30933){
var map__30934 = p__30932;
var map__30934__$1 = ((((!((map__30934 == null)))?(((((map__30934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30934.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30934):map__30934);
var on_cssload = cljs.core.get.call(null,map__30934__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__30935 = p__30933;
var map__30935__$1 = ((((!((map__30935 == null)))?(((((map__30935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30935.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30935):map__30935);
var files_msg = map__30935__$1;
var files = cljs.core.get.call(null,map__30935__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1549663083275
