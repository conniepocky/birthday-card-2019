// Compiled by ClojureScript 1.10.238 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__22243__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__22243 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22244__i = 0, G__22244__a = new Array(arguments.length -  0);
while (G__22244__i < G__22244__a.length) {G__22244__a[G__22244__i] = arguments[G__22244__i + 0]; ++G__22244__i;}
  args = new cljs.core.IndexedSeq(G__22244__a,0,null);
} 
return G__22243__delegate.call(this,args);};
G__22243.cljs$lang$maxFixedArity = 0;
G__22243.cljs$lang$applyTo = (function (arglist__22245){
var args = cljs.core.seq(arglist__22245);
return G__22243__delegate(args);
});
G__22243.cljs$core$IFn$_invoke$arity$variadic = G__22243__delegate;
return G__22243;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__22246__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__22246 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22247__i = 0, G__22247__a = new Array(arguments.length -  0);
while (G__22247__i < G__22247__a.length) {G__22247__a[G__22247__i] = arguments[G__22247__i + 0]; ++G__22247__i;}
  args = new cljs.core.IndexedSeq(G__22247__a,0,null);
} 
return G__22246__delegate.call(this,args);};
G__22246.cljs$lang$maxFixedArity = 0;
G__22246.cljs$lang$applyTo = (function (arglist__22248){
var args = cljs.core.seq(arglist__22248);
return G__22246__delegate(args);
});
G__22246.cljs$core$IFn$_invoke$arity$variadic = G__22246__delegate;
return G__22246;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1549663074654
