// Compiled by ClojureScript 1.10.238 {}
goog.provide('oops.config');
goog.require('cljs.core');
oops.config.get_initial_runtime_config = (function oops$config$get_initial_runtime_config(){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"unexpected-empty-selector","unexpected-empty-selector",-572791900),new cljs.core.Keyword(null,"warning-reporting","warning-reporting",-319054391),new cljs.core.Keyword(null,"use-envelope","use-envelope",-2007197780),new cljs.core.Keyword(null,"error-reporting","error-reporting",1274700782),new cljs.core.Keyword(null,"expected-function-value","expected-function-value",-1399123630),new cljs.core.Keyword(null,"child-factory","child-factory",-1019029066),new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.Keyword(null,"unexpected-punching-selector","unexpected-punching-selector",-1934135338),new cljs.core.Keyword(null,"throw-errors-from-macro-call-sites","throw-errors-from-macro-call-sites",-1338743049),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.Keyword(null,"unexpected-soft-selector","unexpected-soft-selector",-1117708580),new cljs.core.Keyword(null,"missing-object-key","missing-object-key",-1300201731)],[new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"console","console",1228072057),true,new cljs.core.Keyword(null,"throw","throw",-1044625833),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"js-obj","js-obj",-1298148277),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"warn","warn",-436710552),true,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"error","error",-978969032)]);
});
oops.config._STAR_runtime_config_STAR_ = oops.config.get_initial_runtime_config.call(null);
oops.config.set_current_runtime_config_BANG_ = (function oops$config$set_current_runtime_config_BANG_(new_config){
if(cljs.core.map_QMARK_.call(null,new_config)){
} else {
throw (new Error("Assert failed: (map? new-config)"));
}

oops.config._STAR_runtime_config_STAR_ = new_config;

return new_config;
});
oops.config.get_current_runtime_config = (function oops$config$get_current_runtime_config(){
return oops.config._STAR_runtime_config_STAR_;
});
oops.config.update_current_runtime_config_BANG_ = (function oops$config$update_current_runtime_config_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22955 = arguments.length;
var i__4500__auto___22956 = (0);
while(true){
if((i__4500__auto___22956 < len__4499__auto___22955)){
args__4502__auto__.push((arguments[i__4500__auto___22956]));

var G__22957 = (i__4500__auto___22956 + (1));
i__4500__auto___22956 = G__22957;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f_or_map,args){
if(cljs.core.map_QMARK_.call(null,f_or_map)){
return oops.config.update_current_runtime_config_BANG_.call(null,cljs.core.merge,f_or_map);
} else {
return oops.config.set_current_runtime_config_BANG_.call(null,cljs.core.apply.call(null,f_or_map,oops.config.get_current_runtime_config.call(null),args));
}
});

oops.config.update_current_runtime_config_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
oops.config.update_current_runtime_config_BANG_.cljs$lang$applyTo = (function (seq22953){
var G__22954 = cljs.core.first.call(null,seq22953);
var seq22953__$1 = cljs.core.next.call(null,seq22953);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22954,seq22953__$1);
});

oops.config.get_config_key = (function oops$config$get_config_key(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22964 = arguments.length;
var i__4500__auto___22965 = (0);
while(true){
if((i__4500__auto___22965 < len__4499__auto___22964)){
args__4502__auto__.push((arguments[i__4500__auto___22965]));

var G__22966 = (i__4500__auto___22965 + (1));
i__4500__auto___22965 = G__22966;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic = (function (key,p__22960){
var vec__22961 = p__22960;
var config = cljs.core.nth.call(null,vec__22961,(0),null);
return key.call(null,(function (){var or__3922__auto__ = config;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return oops.config.get_current_runtime_config.call(null);
}
})());
});

oops.config.get_config_key.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
oops.config.get_config_key.cljs$lang$applyTo = (function (seq22958){
var G__22959 = cljs.core.first.call(null,seq22958);
var seq22958__$1 = cljs.core.next.call(null,seq22958);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22959,seq22958__$1);
});

oops.config.has_config_key_QMARK_ = (function oops$config$has_config_key_QMARK_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22973 = arguments.length;
var i__4500__auto___22974 = (0);
while(true){
if((i__4500__auto___22974 < len__4499__auto___22973)){
args__4502__auto__.push((arguments[i__4500__auto___22974]));

var G__22975 = (i__4500__auto___22974 + (1));
i__4500__auto___22974 = G__22975;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return oops.config.has_config_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

oops.config.has_config_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (key,p__22969){
var vec__22970 = p__22969;
var config = cljs.core.nth.call(null,vec__22970,(0),null);
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("oops.config","not-found","oops.config/not-found",105443457),cljs.core.get.call(null,(function (){var or__3922__auto__ = config;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return oops.config.get_current_runtime_config.call(null);
}
})(),key,new cljs.core.Keyword("oops.config","not-found","oops.config/not-found",105443457)));
});

oops.config.has_config_key_QMARK_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
oops.config.has_config_key_QMARK_.cljs$lang$applyTo = (function (seq22967){
var G__22968 = cljs.core.first.call(null,seq22967);
var seq22967__$1 = cljs.core.next.call(null,seq22967);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22968,seq22967__$1);
});

oops.config.get_error_reporting = (function oops$config$get_error_reporting(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22981 = arguments.length;
var i__4500__auto___22982 = (0);
while(true){
if((i__4500__auto___22982 < len__4499__auto___22981)){
args__4502__auto__.push((arguments[i__4500__auto___22982]));

var G__22983 = (i__4500__auto___22982 + (1));
i__4500__auto___22982 = G__22983;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return oops.config.get_error_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

oops.config.get_error_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__22977){
var vec__22978 = p__22977;
var config = cljs.core.nth.call(null,vec__22978,(0),null);
return oops.config.get_config_key.call(null,new cljs.core.Keyword(null,"error-reporting","error-reporting",1274700782),config);
});

oops.config.get_error_reporting.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
oops.config.get_error_reporting.cljs$lang$applyTo = (function (seq22976){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22976));
});

oops.config.get_warning_reporting = (function oops$config$get_warning_reporting(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22989 = arguments.length;
var i__4500__auto___22990 = (0);
while(true){
if((i__4500__auto___22990 < len__4499__auto___22989)){
args__4502__auto__.push((arguments[i__4500__auto___22990]));

var G__22991 = (i__4500__auto___22990 + (1));
i__4500__auto___22990 = G__22991;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return oops.config.get_warning_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

oops.config.get_warning_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__22985){
var vec__22986 = p__22985;
var config = cljs.core.nth.call(null,vec__22986,(0),null);
return oops.config.get_config_key.call(null,new cljs.core.Keyword(null,"warning-reporting","warning-reporting",-319054391),config);
});

oops.config.get_warning_reporting.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
oops.config.get_warning_reporting.cljs$lang$applyTo = (function (seq22984){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22984));
});

oops.config.get_suppress_reporting = (function oops$config$get_suppress_reporting(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22997 = arguments.length;
var i__4500__auto___22998 = (0);
while(true){
if((i__4500__auto___22998 < len__4499__auto___22997)){
args__4502__auto__.push((arguments[i__4500__auto___22998]));

var G__22999 = (i__4500__auto___22998 + (1));
i__4500__auto___22998 = G__22999;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return oops.config.get_suppress_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

oops.config.get_suppress_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__22993){
var vec__22994 = p__22993;
var config = cljs.core.nth.call(null,vec__22994,(0),null);
return oops.config.get_config_key.call(null,new cljs.core.Keyword(null,"suppress-reporting","suppress-reporting",43885458),config);
});

oops.config.get_suppress_reporting.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
oops.config.get_suppress_reporting.cljs$lang$applyTo = (function (seq22992){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22992));
});

oops.config.get_child_factory = (function oops$config$get_child_factory(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23005 = arguments.length;
var i__4500__auto___23006 = (0);
while(true){
if((i__4500__auto___23006 < len__4499__auto___23005)){
args__4502__auto__.push((arguments[i__4500__auto___23006]));

var G__23007 = (i__4500__auto___23006 + (1));
i__4500__auto___23006 = G__23007;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return oops.config.get_child_factory.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

oops.config.get_child_factory.cljs$core$IFn$_invoke$arity$variadic = (function (p__23001){
var vec__23002 = p__23001;
var config = cljs.core.nth.call(null,vec__23002,(0),null);
return oops.config.get_config_key.call(null,new cljs.core.Keyword(null,"child-factory","child-factory",-1019029066),config);
});

oops.config.get_child_factory.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
oops.config.get_child_factory.cljs$lang$applyTo = (function (seq23000){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23000));
});

oops.config.set_child_factory_BANG_ = (function oops$config$set_child_factory_BANG_(new_factory_fn){
return oops.config.update_current_runtime_config_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"child-factory","child-factory",-1019029066),new_factory_fn], null));
});
oops.config.throw_errors_from_macro_call_sites_QMARK_ = (function oops$config$throw_errors_from_macro_call_sites_QMARK_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23013 = arguments.length;
var i__4500__auto___23014 = (0);
while(true){
if((i__4500__auto___23014 < len__4499__auto___23013)){
args__4502__auto__.push((arguments[i__4500__auto___23014]));

var G__23015 = (i__4500__auto___23014 + (1));
i__4500__auto___23014 = G__23015;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (p__23009){
var vec__23010 = p__23009;
var config = cljs.core.nth.call(null,vec__23010,(0),null);
return oops.config.get_config_key.call(null,new cljs.core.Keyword(null,"throw-errors-from-macro-call-sites","throw-errors-from-macro-call-sites",-1338743049),config) === true;
});

oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$lang$applyTo = (function (seq23008){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23008));
});

oops.config.use_envelope_QMARK_ = (function oops$config$use_envelope_QMARK_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23021 = arguments.length;
var i__4500__auto___23022 = (0);
while(true){
if((i__4500__auto___23022 < len__4499__auto___23021)){
args__4502__auto__.push((arguments[i__4500__auto___23022]));

var G__23023 = (i__4500__auto___23022 + (1));
i__4500__auto___23022 = G__23023;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return oops.config.use_envelope_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

oops.config.use_envelope_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (p__23017){
var vec__23018 = p__23017;
var config = cljs.core.nth.call(null,vec__23018,(0),null);
return oops.config.get_config_key.call(null,new cljs.core.Keyword(null,"use-envelope","use-envelope",-2007197780),config) === true;
});

oops.config.use_envelope_QMARK_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
oops.config.use_envelope_QMARK_.cljs$lang$applyTo = (function (seq23016){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23016));
});


//# sourceMappingURL=config.js.map?rel=1549663075105
