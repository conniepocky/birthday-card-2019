// Compiled by ClojureScript 1.10.238 {}
goog.provide('re_frame.subs');
goog.require('cljs.core');
goog.require('re_frame.db');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('re_frame.utils');
goog.require('re_frame.registrar');
goog.require('re_frame.trace');
re_frame.subs.kind = new cljs.core.Keyword(null,"sub","sub",-2093760025);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.subs.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.subs.query__GT_reaction = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Runs on-dispose for all subscriptions we have in the subscription cache.
 *   Used to force recreation of new subscriptions. Should only be necessary
 *   in development.
 * 
 *   The on-dispose functions for the subscriptions will remove themselves from the
 *   cache.
 * 
 *   Useful when reloading Figwheel code after a React exception, as React components
 *   aren't cleaned up properly. This means a subscription's on-dispose function isn't
 *   run when the components are destroyed. If a bad subscription caused your exception,
 *   then you can't fix it without reloading your browser.
 */
re_frame.subs.clear_subscription_cache_BANG_ = (function re_frame$subs$clear_subscription_cache_BANG_(){
var seq__24998_25008 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.subs.query__GT_reaction));
var chunk__24999_25009 = null;
var count__25000_25010 = (0);
var i__25001_25011 = (0);
while(true){
if((i__25001_25011 < count__25000_25010)){
var vec__25002_25012 = cljs.core._nth.call(null,chunk__24999_25009,i__25001_25011);
var k_25013 = cljs.core.nth.call(null,vec__25002_25012,(0),null);
var rxn_25014 = cljs.core.nth.call(null,vec__25002_25012,(1),null);
re_frame.interop.dispose_BANG_.call(null,rxn_25014);


var G__25015 = seq__24998_25008;
var G__25016 = chunk__24999_25009;
var G__25017 = count__25000_25010;
var G__25018 = (i__25001_25011 + (1));
seq__24998_25008 = G__25015;
chunk__24999_25009 = G__25016;
count__25000_25010 = G__25017;
i__25001_25011 = G__25018;
continue;
} else {
var temp__5457__auto___25019 = cljs.core.seq.call(null,seq__24998_25008);
if(temp__5457__auto___25019){
var seq__24998_25020__$1 = temp__5457__auto___25019;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24998_25020__$1)){
var c__4319__auto___25021 = cljs.core.chunk_first.call(null,seq__24998_25020__$1);
var G__25022 = cljs.core.chunk_rest.call(null,seq__24998_25020__$1);
var G__25023 = c__4319__auto___25021;
var G__25024 = cljs.core.count.call(null,c__4319__auto___25021);
var G__25025 = (0);
seq__24998_25008 = G__25022;
chunk__24999_25009 = G__25023;
count__25000_25010 = G__25024;
i__25001_25011 = G__25025;
continue;
} else {
var vec__25005_25026 = cljs.core.first.call(null,seq__24998_25020__$1);
var k_25027 = cljs.core.nth.call(null,vec__25005_25026,(0),null);
var rxn_25028 = cljs.core.nth.call(null,vec__25005_25026,(1),null);
re_frame.interop.dispose_BANG_.call(null,rxn_25028);


var G__25029 = cljs.core.next.call(null,seq__24998_25020__$1);
var G__25030 = null;
var G__25031 = (0);
var G__25032 = (0);
seq__24998_25008 = G__25029;
chunk__24999_25009 = G__25030;
count__25000_25010 = G__25031;
i__25001_25011 = G__25032;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.deref.call(null,re_frame.subs.query__GT_reaction)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Subscription cache should be empty after clearing it.");
} else {
return null;
}
});
/**
 * Unregisters all existing subscription handlers
 */
re_frame.subs.clear_all_handlers_BANG_ = (function re_frame$subs$clear_all_handlers_BANG_(){
re_frame.registrar.clear_handlers.call(null,re_frame.subs.kind);

return re_frame.subs.clear_subscription_cache_BANG_.call(null);
});
/**
 * cache the reaction r
 */
re_frame.subs.cache_and_return = (function re_frame$subs$cache_and_return(query_v,dynv,r){
var cache_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dynv], null);
re_frame.interop.add_on_dispose_BANG_.call(null,r,((function (cache_key){
return (function (){
cljs.core.swap_BANG_.call(null,re_frame.subs.query__GT_reaction,cljs.core.dissoc,cache_key);

if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_25033 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_v),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_v,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,r)], null)], null));

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__24726__auto___25046 = re_frame.interop.now.call(null);
var duration__24727__auto___25047 = (end__24726__auto___25046 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__25034_25048 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__25035_25049 = null;
var count__25036_25050 = (0);
var i__25037_25051 = (0);
while(true){
if((i__25037_25051 < count__25036_25050)){
var vec__25038_25052 = cljs.core._nth.call(null,chunk__25035_25049,i__25037_25051);
var k__24728__auto___25053 = cljs.core.nth.call(null,vec__25038_25052,(0),null);
var cb__24729__auto___25054 = cljs.core.nth.call(null,vec__25038_25052,(1),null);
try{cb__24729__auto___25054.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__24727__auto___25047,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e25041){if((e25041 instanceof java.lang.Exception)){
var e__24730__auto___25055 = e25041;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__24728__auto___25053,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__24730__auto___25055);
} else {
throw e25041;

}
}

var G__25056 = seq__25034_25048;
var G__25057 = chunk__25035_25049;
var G__25058 = count__25036_25050;
var G__25059 = (i__25037_25051 + (1));
seq__25034_25048 = G__25056;
chunk__25035_25049 = G__25057;
count__25036_25050 = G__25058;
i__25037_25051 = G__25059;
continue;
} else {
var temp__5457__auto___25060 = cljs.core.seq.call(null,seq__25034_25048);
if(temp__5457__auto___25060){
var seq__25034_25061__$1 = temp__5457__auto___25060;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25034_25061__$1)){
var c__4319__auto___25062 = cljs.core.chunk_first.call(null,seq__25034_25061__$1);
var G__25063 = cljs.core.chunk_rest.call(null,seq__25034_25061__$1);
var G__25064 = c__4319__auto___25062;
var G__25065 = cljs.core.count.call(null,c__4319__auto___25062);
var G__25066 = (0);
seq__25034_25048 = G__25063;
chunk__25035_25049 = G__25064;
count__25036_25050 = G__25065;
i__25037_25051 = G__25066;
continue;
} else {
var vec__25042_25067 = cljs.core.first.call(null,seq__25034_25061__$1);
var k__24728__auto___25068 = cljs.core.nth.call(null,vec__25042_25067,(0),null);
var cb__24729__auto___25069 = cljs.core.nth.call(null,vec__25042_25067,(1),null);
try{cb__24729__auto___25069.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__24727__auto___25047,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e25045){if((e25045 instanceof java.lang.Exception)){
var e__24730__auto___25070 = e25045;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__24728__auto___25068,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__24730__auto___25070);
} else {
throw e25045;

}
}

var G__25071 = cljs.core.next.call(null,seq__25034_25061__$1);
var G__25072 = null;
var G__25073 = (0);
var G__25074 = (0);
seq__25034_25048 = G__25071;
chunk__25035_25049 = G__25072;
count__25036_25050 = G__25073;
i__25037_25051 = G__25074;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_25033;
}} else {
return null;
}
});})(cache_key))
);

cljs.core.swap_BANG_.call(null,re_frame.subs.query__GT_reaction,cljs.core.assoc,cache_key,r);

if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__24743__auto___25075 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,r)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,r)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__24743__auto___25075;

} else {
}

return r;
});
re_frame.subs.cache_lookup = (function re_frame$subs$cache_lookup(var_args){
var G__25077 = arguments.length;
switch (G__25077) {
case 1:
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
return re_frame.subs.cache_lookup.call(null,query_v,cljs.core.PersistentVector.EMPTY);
});

re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2 = (function (query_v,dyn_v){
return cljs.core.get.call(null,cljs.core.deref.call(null,re_frame.subs.query__GT_reaction),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dyn_v], null));
});

re_frame.subs.cache_lookup.cljs$lang$maxFixedArity = 2;

/**
 * Returns a Reagent/reaction which contains a computation
 */
re_frame.subs.subscribe = (function re_frame$subs$subscribe(var_args){
var G__25080 = arguments.length;
switch (G__25080) {
case 1:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_25081 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_v),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_v], null)], null));

try{try{var temp__5455__auto__ = re_frame.subs.cache_lookup.call(null,query_v);
if(cljs.core.truth_(temp__5455__auto__)){
var cached = temp__5455__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__24743__auto___25108 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__24743__auto___25108;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,query_v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__24743__auto___25109 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__24743__auto___25109;

} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__24743__auto___25110 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__24743__auto___25110;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: no subscription handler registered for: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),"\". Returning a nil subscription."].join(''));
} else {
return re_frame.subs.cache_and_return.call(null,query_v,cljs.core.PersistentVector.EMPTY,handler_fn.call(null,re_frame.db.app_db,query_v));
}
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__24726__auto___25111 = re_frame.interop.now.call(null);
var duration__24727__auto___25112 = (end__24726__auto___25111 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__25082_25113 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__25083_25114 = null;
var count__25084_25115 = (0);
var i__25085_25116 = (0);
while(true){
if((i__25085_25116 < count__25084_25115)){
var vec__25086_25117 = cljs.core._nth.call(null,chunk__25083_25114,i__25085_25116);
var k__24728__auto___25118 = cljs.core.nth.call(null,vec__25086_25117,(0),null);
var cb__24729__auto___25119 = cljs.core.nth.call(null,vec__25086_25117,(1),null);
try{cb__24729__auto___25119.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__24727__auto___25112,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e25089){if((e25089 instanceof java.lang.Exception)){
var e__24730__auto___25120 = e25089;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__24728__auto___25118,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__24730__auto___25120);
} else {
throw e25089;

}
}

var G__25121 = seq__25082_25113;
var G__25122 = chunk__25083_25114;
var G__25123 = count__25084_25115;
var G__25124 = (i__25085_25116 + (1));
seq__25082_25113 = G__25121;
chunk__25083_25114 = G__25122;
count__25084_25115 = G__25123;
i__25085_25116 = G__25124;
continue;
} else {
var temp__5457__auto___25125 = cljs.core.seq.call(null,seq__25082_25113);
if(temp__5457__auto___25125){
var seq__25082_25126__$1 = temp__5457__auto___25125;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25082_25126__$1)){
var c__4319__auto___25127 = cljs.core.chunk_first.call(null,seq__25082_25126__$1);
var G__25128 = cljs.core.chunk_rest.call(null,seq__25082_25126__$1);
var G__25129 = c__4319__auto___25127;
var G__25130 = cljs.core.count.call(null,c__4319__auto___25127);
var G__25131 = (0);
seq__25082_25113 = G__25128;
chunk__25083_25114 = G__25129;
count__25084_25115 = G__25130;
i__25085_25116 = G__25131;
continue;
} else {
var vec__25090_25132 = cljs.core.first.call(null,seq__25082_25126__$1);
var k__24728__auto___25133 = cljs.core.nth.call(null,vec__25090_25132,(0),null);
var cb__24729__auto___25134 = cljs.core.nth.call(null,vec__25090_25132,(1),null);
try{cb__24729__auto___25134.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__24727__auto___25112,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e25093){if((e25093 instanceof java.lang.Exception)){
var e__24730__auto___25135 = e25093;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__24728__auto___25133,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__24730__auto___25135);
} else {
throw e25093;

}
}

var G__25136 = cljs.core.next.call(null,seq__25082_25126__$1);
var G__25137 = null;
var G__25138 = (0);
var G__25139 = (0);
seq__25082_25113 = G__25136;
chunk__25083_25114 = G__25137;
count__25084_25115 = G__25138;
i__25085_25116 = G__25139;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_25081;
}} else {
var temp__5455__auto__ = re_frame.subs.cache_lookup.call(null,query_v);
if(cljs.core.truth_(temp__5455__auto__)){
var cached = temp__5455__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__24743__auto___25140 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__24743__auto___25140;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,query_v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__24743__auto___25141 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__24743__auto___25141;

} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__24743__auto___25142 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__24743__auto___25142;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: no subscription handler registered for: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),"\". Returning a nil subscription."].join(''));
} else {
return re_frame.subs.cache_and_return.call(null,query_v,cljs.core.PersistentVector.EMPTY,handler_fn.call(null,re_frame.db.app_db,query_v));
}
}
}
});

re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2 = (function (v,dynv){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_25094 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,v),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),v,new cljs.core.Keyword(null,"dyn-v","dyn-v",949994592),dynv], null)], null));

try{try{var temp__5455__auto__ = re_frame.subs.cache_lookup.call(null,v,dynv);
if(cljs.core.truth_(temp__5455__auto__)){
var cached = temp__5455__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__24743__auto___25143 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__24743__auto___25143;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__24743__auto___25144 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__24743__auto___25144;

} else {
}

if(re_frame.interop.debug_enabled_QMARK_){
var temp__5457__auto___25145 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__5457__auto___25145)){
var not_reactive_25146 = temp__5457__auto___25145;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_25146);
} else {
}
} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__24743__auto___25147 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__24743__auto___25147;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: no subscription handler registered for: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),"\". Returning a nil subscription."].join(''));
} else {
var dyn_vals = re_frame.interop.make_reaction.call(null,((function (query_id,handler_fn,temp__5455__auto__,_STAR_current_trace_STAR_25094){
return (function (){
return cljs.core.mapv.call(null,cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__5455__auto__,_STAR_current_trace_STAR_25094))
);
var sub = re_frame.interop.make_reaction.call(null,((function (dyn_vals,query_id,handler_fn,temp__5455__auto__,_STAR_current_trace_STAR_25094){
return (function (){
return handler_fn.call(null,re_frame.db.app_db,v,cljs.core.deref.call(null,dyn_vals));
});})(dyn_vals,query_id,handler_fn,temp__5455__auto__,_STAR_current_trace_STAR_25094))
);
return re_frame.subs.cache_and_return.call(null,v,dynv,re_frame.interop.make_reaction.call(null,((function (dyn_vals,sub,query_id,handler_fn,temp__5455__auto__,_STAR_current_trace_STAR_25094){
return (function (){
return cljs.core.deref.call(null,cljs.core.deref.call(null,sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__5455__auto__,_STAR_current_trace_STAR_25094))
));
}
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__24726__auto___25148 = re_frame.interop.now.call(null);
var duration__24727__auto___25149 = (end__24726__auto___25148 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__25095_25150 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__25096_25151 = null;
var count__25097_25152 = (0);
var i__25098_25153 = (0);
while(true){
if((i__25098_25153 < count__25097_25152)){
var vec__25099_25154 = cljs.core._nth.call(null,chunk__25096_25151,i__25098_25153);
var k__24728__auto___25155 = cljs.core.nth.call(null,vec__25099_25154,(0),null);
var cb__24729__auto___25156 = cljs.core.nth.call(null,vec__25099_25154,(1),null);
try{cb__24729__auto___25156.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__24727__auto___25149,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e25102){if((e25102 instanceof java.lang.Exception)){
var e__24730__auto___25157 = e25102;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__24728__auto___25155,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__24730__auto___25157);
} else {
throw e25102;

}
}

var G__25158 = seq__25095_25150;
var G__25159 = chunk__25096_25151;
var G__25160 = count__25097_25152;
var G__25161 = (i__25098_25153 + (1));
seq__25095_25150 = G__25158;
chunk__25096_25151 = G__25159;
count__25097_25152 = G__25160;
i__25098_25153 = G__25161;
continue;
} else {
var temp__5457__auto___25162 = cljs.core.seq.call(null,seq__25095_25150);
if(temp__5457__auto___25162){
var seq__25095_25163__$1 = temp__5457__auto___25162;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25095_25163__$1)){
var c__4319__auto___25164 = cljs.core.chunk_first.call(null,seq__25095_25163__$1);
var G__25165 = cljs.core.chunk_rest.call(null,seq__25095_25163__$1);
var G__25166 = c__4319__auto___25164;
var G__25167 = cljs.core.count.call(null,c__4319__auto___25164);
var G__25168 = (0);
seq__25095_25150 = G__25165;
chunk__25096_25151 = G__25166;
count__25097_25152 = G__25167;
i__25098_25153 = G__25168;
continue;
} else {
var vec__25103_25169 = cljs.core.first.call(null,seq__25095_25163__$1);
var k__24728__auto___25170 = cljs.core.nth.call(null,vec__25103_25169,(0),null);
var cb__24729__auto___25171 = cljs.core.nth.call(null,vec__25103_25169,(1),null);
try{cb__24729__auto___25171.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__24727__auto___25149,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e25106){if((e25106 instanceof java.lang.Exception)){
var e__24730__auto___25172 = e25106;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__24728__auto___25170,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__24730__auto___25172);
} else {
throw e25106;

}
}

var G__25173 = cljs.core.next.call(null,seq__25095_25163__$1);
var G__25174 = null;
var G__25175 = (0);
var G__25176 = (0);
seq__25095_25150 = G__25173;
chunk__25096_25151 = G__25174;
count__25097_25152 = G__25175;
i__25098_25153 = G__25176;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_25094;
}} else {
var temp__5455__auto__ = re_frame.subs.cache_lookup.call(null,v,dynv);
if(cljs.core.truth_(temp__5455__auto__)){
var cached = temp__5455__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__24743__auto___25177 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__24743__auto___25177;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__24743__auto___25178 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__24743__auto___25178;

} else {
}

if(re_frame.interop.debug_enabled_QMARK_){
var temp__5457__auto___25179 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__5457__auto___25179)){
var not_reactive_25180 = temp__5457__auto___25179;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_25180);
} else {
}
} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__24743__auto___25181 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__24743__auto___25181;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: no subscription handler registered for: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),"\". Returning a nil subscription."].join(''));
} else {
var dyn_vals = re_frame.interop.make_reaction.call(null,((function (query_id,handler_fn,temp__5455__auto__){
return (function (){
return cljs.core.mapv.call(null,cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__5455__auto__))
);
var sub = re_frame.interop.make_reaction.call(null,((function (dyn_vals,query_id,handler_fn,temp__5455__auto__){
return (function (){
return handler_fn.call(null,re_frame.db.app_db,v,cljs.core.deref.call(null,dyn_vals));
});})(dyn_vals,query_id,handler_fn,temp__5455__auto__))
);
return re_frame.subs.cache_and_return.call(null,v,dynv,re_frame.interop.make_reaction.call(null,((function (dyn_vals,sub,query_id,handler_fn,temp__5455__auto__){
return (function (){
return cljs.core.deref.call(null,cljs.core.deref.call(null,sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__5455__auto__))
));
}
}
}
});

re_frame.subs.subscribe.cljs$lang$maxFixedArity = 2;

/**
 * Returns a new version of 'm' in which 'f' has been applied to each value.
 *   (map-vals inc {:a 4, :b 2}) => {:a 5, :b 3}
 */
re_frame.subs.map_vals = (function re_frame$subs$map_vals(f,m){
return cljs.core.into.call(null,cljs.core.empty.call(null,m),cljs.core.map.call(null,(function (p__25182){
var vec__25183 = p__25182;
var k = cljs.core.nth.call(null,vec__25183,(0),null);
var v = cljs.core.nth.call(null,vec__25183,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,v)], null);
})),m);
});
re_frame.subs.deref_input_signals = (function re_frame$subs$deref_input_signals(signals,query_id){
var signals__$1 = ((cljs.core.sequential_QMARK_.call(null,signals))?cljs.core.map.call(null,cljs.core.deref,signals):((cljs.core.map_QMARK_.call(null,signals))?re_frame.subs.map_vals.call(null,cljs.core.deref,signals):(cljs.core.truth_(re_frame.interop.deref_QMARK_.call(null,signals))?cljs.core.deref.call(null,signals):re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: in the reg-sub for ",query_id,", the input-signals function returns: ",signals)
)));
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__24743__auto___25186 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",563633497),cljs.core.map.call(null,re_frame.interop.reagent_id,signals__$1)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",563633497),cljs.core.map.call(null,re_frame.interop.reagent_id,signals__$1)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__24743__auto___25186;

} else {
}

return signals__$1;
});
/**
 * Associate the given `query id` with a handler function and an optional signal function.
 * 
 *   There's 3 ways this function can be called
 * 
 *   1. (reg-sub
 *     :test-sub
 *     (fn [db [_]] db))
 *   The value in app-db is passed to the computation function as the 1st argument.
 * 
 *   2. (reg-sub
 *     :a-b-sub
 *     (fn [q-vec d-vec]
 *       [(subs/subscribe [:a-sub])
 *        (subs/subscribe [:b-sub])])
 *     (fn [[a b] [_]] {:a a :b b}))
 * 
 *   Two functions provided. The 2nd is computation function, as before. The 1st
 *   is returns what `input signals` should be provided to the computation. The
 *   `input signals` function is called with two arguments: the query vector
 *   and the dynamic vector. The return value can be singleton reaction or
 *   a sequence of reactions.
 * 
 *   3. (reg-sub
 *     :a-b-sub
 *     :<- [:a-sub]
 *     :<- [:b-sub]
 *     (fn [[a b] [_]] {:a a :b b}))```
 *   This 3rd variation is just syntactic sugar for the 2nd. Pairs are supplied instead
 *   of an `input signals` functions. `:<-` is supplied followed by the subscription
 *   vector.
 *   
 */
re_frame.subs.reg_sub = (function re_frame$subs$reg_sub(var_args){
var args__4502__auto__ = [];
var len__4499__auto___25219 = arguments.length;
var i__4500__auto___25220 = (0);
while(true){
if((i__4500__auto___25220 < len__4499__auto___25219)){
args__4502__auto__.push((arguments[i__4500__auto___25220]));

var G__25221 = (i__4500__auto___25220 + (1));
i__4500__auto___25220 = G__25221;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic = (function (query_id,args){
var computation_fn = cljs.core.last.call(null,args);
var input_args = cljs.core.butlast.call(null,args);
var err_header = ["re-frame: reg-sub for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),", "].join('');
var inputs_fn = (function (){var G__25189 = cljs.core.count.call(null,input_args);
switch (G__25189) {
case (0):
return ((function (G__25189,computation_fn,input_args,err_header){
return (function() {
var G__25223 = null;
var G__25223__1 = (function (_){
return re_frame.db.app_db;
});
var G__25223__2 = (function (_,___$1){
return re_frame.db.app_db;
});
G__25223 = function(_,___$1){
switch(arguments.length){
case 1:
return G__25223__1.call(this,_);
case 2:
return G__25223__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__25223.cljs$core$IFn$_invoke$arity$1 = G__25223__1;
G__25223.cljs$core$IFn$_invoke$arity$2 = G__25223__2;
return G__25223;
})()
;})(G__25189,computation_fn,input_args,err_header))

break;
case (1):
var f = cljs.core.first.call(null,input_args);
if(cljs.core.fn_QMARK_.call(null,f)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"2nd argument expected to be an inputs function, got:",f);
}

return f;

break;
case (2):
var vec__25190 = input_args;
var marker = cljs.core.nth.call(null,vec__25190,(0),null);
var vec = cljs.core.nth.call(null,vec__25190,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"<-","<-",760412998),marker)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"expected :<-, got:",marker);
}

return ((function (vec__25190,marker,vec,G__25189,computation_fn,input_args,err_header){
return (function() {
var re_frame$subs$inp_fn = null;
var re_frame$subs$inp_fn__1 = (function (_){
return re_frame.subs.subscribe.call(null,vec);
});
var re_frame$subs$inp_fn__2 = (function (_,___$1){
return re_frame.subs.subscribe.call(null,vec);
});
re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return re_frame$subs$inp_fn__1.call(this,_);
case 2:
return re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = re_frame$subs$inp_fn__1;
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$inp_fn__2;
return re_frame$subs$inp_fn;
})()
;})(vec__25190,marker,vec,G__25189,computation_fn,input_args,err_header))

break;
default:
var pairs = cljs.core.partition.call(null,(2),input_args);
var markers = cljs.core.map.call(null,cljs.core.first,pairs);
var vecs = cljs.core.map.call(null,cljs.core.last,pairs);
if(((cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"<-","<-",760412998),null], null), null),markers)) && (cljs.core.every_QMARK_.call(null,cljs.core.vector_QMARK_,vecs)))){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"expected pairs of :<- and vectors, got:",pairs);
}

return ((function (pairs,markers,vecs,G__25189,computation_fn,input_args,err_header){
return (function() {
var re_frame$subs$inp_fn = null;
var re_frame$subs$inp_fn__1 = (function (_){
return cljs.core.map.call(null,re_frame.subs.subscribe,vecs);
});
var re_frame$subs$inp_fn__2 = (function (_,___$1){
return cljs.core.map.call(null,re_frame.subs.subscribe,vecs);
});
re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return re_frame$subs$inp_fn__1.call(this,_);
case 2:
return re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = re_frame$subs$inp_fn__1;
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$inp_fn__2;
return re_frame$subs$inp_fn;
})()
;})(pairs,markers,vecs,G__25189,computation_fn,input_args,err_header))

}
})();
return re_frame.registrar.register_handler.call(null,re_frame.subs.kind,query_id,((function (computation_fn,input_args,err_header,inputs_fn){
return (function() {
var re_frame$subs$subs_handler_fn = null;
var re_frame$subs$subs_handler_fn__2 = (function (db,query_vec){
var subscriptions = inputs_fn.call(null,query_vec);
var reaction_id = cljs.core.atom.call(null,null);
var reaction = re_frame.interop.make_reaction.call(null,((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_25193 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_vec),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_vec,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref.call(null,reaction_id)], null)], null));

try{try{return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__24726__auto___25224 = re_frame.interop.now.call(null);
var duration__24727__auto___25225 = (end__24726__auto___25224 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__25194_25226 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__25195_25227 = null;
var count__25196_25228 = (0);
var i__25197_25229 = (0);
while(true){
if((i__25197_25229 < count__25196_25228)){
var vec__25198_25230 = cljs.core._nth.call(null,chunk__25195_25227,i__25197_25229);
var k__24728__auto___25231 = cljs.core.nth.call(null,vec__25198_25230,(0),null);
var cb__24729__auto___25232 = cljs.core.nth.call(null,vec__25198_25230,(1),null);
try{cb__24729__auto___25232.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__24727__auto___25225,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e25201){if((e25201 instanceof java.lang.Exception)){
var e__24730__auto___25233 = e25201;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__24728__auto___25231,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__24730__auto___25233);
} else {
throw e25201;

}
}

var G__25234 = seq__25194_25226;
var G__25235 = chunk__25195_25227;
var G__25236 = count__25196_25228;
var G__25237 = (i__25197_25229 + (1));
seq__25194_25226 = G__25234;
chunk__25195_25227 = G__25235;
count__25196_25228 = G__25236;
i__25197_25229 = G__25237;
continue;
} else {
var temp__5457__auto___25238 = cljs.core.seq.call(null,seq__25194_25226);
if(temp__5457__auto___25238){
var seq__25194_25239__$1 = temp__5457__auto___25238;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25194_25239__$1)){
var c__4319__auto___25240 = cljs.core.chunk_first.call(null,seq__25194_25239__$1);
var G__25241 = cljs.core.chunk_rest.call(null,seq__25194_25239__$1);
var G__25242 = c__4319__auto___25240;
var G__25243 = cljs.core.count.call(null,c__4319__auto___25240);
var G__25244 = (0);
seq__25194_25226 = G__25241;
chunk__25195_25227 = G__25242;
count__25196_25228 = G__25243;
i__25197_25229 = G__25244;
continue;
} else {
var vec__25202_25245 = cljs.core.first.call(null,seq__25194_25239__$1);
var k__24728__auto___25246 = cljs.core.nth.call(null,vec__25202_25245,(0),null);
var cb__24729__auto___25247 = cljs.core.nth.call(null,vec__25202_25245,(1),null);
try{cb__24729__auto___25247.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__24727__auto___25225,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e25205){if((e25205 instanceof java.lang.Exception)){
var e__24730__auto___25248 = e25205;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__24728__auto___25246,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__24730__auto___25248);
} else {
throw e25205;

}
}

var G__25249 = cljs.core.next.call(null,seq__25194_25239__$1);
var G__25250 = null;
var G__25251 = (0);
var G__25252 = (0);
seq__25194_25226 = G__25249;
chunk__25195_25227 = G__25250;
count__25196_25228 = G__25251;
i__25197_25229 = G__25252;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_25193;
}} else {
return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec);
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
cljs.core.reset_BANG_.call(null,reaction_id,re_frame.interop.reagent_id.call(null,reaction));

return reaction;
});
var re_frame$subs$subs_handler_fn__3 = (function (db,query_vec,dyn_vec){
var subscriptions = inputs_fn.call(null,query_vec,dyn_vec);
var reaction_id = cljs.core.atom.call(null,null);
var reaction = re_frame.interop.make_reaction.call(null,((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_25206 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_vec),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_vec,new cljs.core.Keyword(null,"dyn-v","dyn-v",949994592),dyn_vec,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref.call(null,reaction_id)], null)], null));

try{try{return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec,dyn_vec);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__24726__auto___25253 = re_frame.interop.now.call(null);
var duration__24727__auto___25254 = (end__24726__auto___25253 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__25207_25255 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__25208_25256 = null;
var count__25209_25257 = (0);
var i__25210_25258 = (0);
while(true){
if((i__25210_25258 < count__25209_25257)){
var vec__25211_25259 = cljs.core._nth.call(null,chunk__25208_25256,i__25210_25258);
var k__24728__auto___25260 = cljs.core.nth.call(null,vec__25211_25259,(0),null);
var cb__24729__auto___25261 = cljs.core.nth.call(null,vec__25211_25259,(1),null);
try{cb__24729__auto___25261.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__24727__auto___25254,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e25214){if((e25214 instanceof java.lang.Exception)){
var e__24730__auto___25262 = e25214;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__24728__auto___25260,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__24730__auto___25262);
} else {
throw e25214;

}
}

var G__25263 = seq__25207_25255;
var G__25264 = chunk__25208_25256;
var G__25265 = count__25209_25257;
var G__25266 = (i__25210_25258 + (1));
seq__25207_25255 = G__25263;
chunk__25208_25256 = G__25264;
count__25209_25257 = G__25265;
i__25210_25258 = G__25266;
continue;
} else {
var temp__5457__auto___25267 = cljs.core.seq.call(null,seq__25207_25255);
if(temp__5457__auto___25267){
var seq__25207_25268__$1 = temp__5457__auto___25267;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25207_25268__$1)){
var c__4319__auto___25269 = cljs.core.chunk_first.call(null,seq__25207_25268__$1);
var G__25270 = cljs.core.chunk_rest.call(null,seq__25207_25268__$1);
var G__25271 = c__4319__auto___25269;
var G__25272 = cljs.core.count.call(null,c__4319__auto___25269);
var G__25273 = (0);
seq__25207_25255 = G__25270;
chunk__25208_25256 = G__25271;
count__25209_25257 = G__25272;
i__25210_25258 = G__25273;
continue;
} else {
var vec__25215_25274 = cljs.core.first.call(null,seq__25207_25268__$1);
var k__24728__auto___25275 = cljs.core.nth.call(null,vec__25215_25274,(0),null);
var cb__24729__auto___25276 = cljs.core.nth.call(null,vec__25215_25274,(1),null);
try{cb__24729__auto___25276.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__24727__auto___25254,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e25218){if((e25218 instanceof java.lang.Exception)){
var e__24730__auto___25277 = e25218;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__24728__auto___25275,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__24730__auto___25277);
} else {
throw e25218;

}
}

var G__25278 = cljs.core.next.call(null,seq__25207_25268__$1);
var G__25279 = null;
var G__25280 = (0);
var G__25281 = (0);
seq__25207_25255 = G__25278;
chunk__25208_25256 = G__25279;
count__25209_25257 = G__25280;
i__25210_25258 = G__25281;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_25206;
}} else {
return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec,dyn_vec);
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
cljs.core.reset_BANG_.call(null,reaction_id,re_frame.interop.reagent_id.call(null,reaction));

return reaction;
});
re_frame$subs$subs_handler_fn = function(db,query_vec,dyn_vec){
switch(arguments.length){
case 2:
return re_frame$subs$subs_handler_fn__2.call(this,db,query_vec);
case 3:
return re_frame$subs$subs_handler_fn__3.call(this,db,query_vec,dyn_vec);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$subs_handler_fn__2;
re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$3 = re_frame$subs$subs_handler_fn__3;
return re_frame$subs$subs_handler_fn;
})()
;})(computation_fn,input_args,err_header,inputs_fn))
);
});

re_frame.subs.reg_sub.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
re_frame.subs.reg_sub.cljs$lang$applyTo = (function (seq25187){
var G__25188 = cljs.core.first.call(null,seq25187);
var seq25187__$1 = cljs.core.next.call(null,seq25187);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25188,seq25187__$1);
});


//# sourceMappingURL=subs.js.map?rel=1549663078825
