// Compiled by ClojureScript 1.10.238 {}
goog.provide('re_frame.events');
goog.require('cljs.core');
goog.require('re_frame.db');
goog.require('re_frame.utils');
goog.require('re_frame.interop');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.interceptor');
goog.require('re_frame.trace');
re_frame.events.kind = new cljs.core.Keyword(null,"event","event",301435442);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.events.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * `interceptors` might have nested collections, and contain nil elements.
 *   return a flat collection, with all nils removed.
 *   This function is 9/10 about giving good error messages
 */
re_frame.events.flatten_and_remove_nils = (function re_frame$events$flatten_and_remove_nils(id,interceptors){
var make_chain = (function (p1__24751_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__24751_SHARP_));
});
if(!(re_frame.interop.debug_enabled_QMARK_)){
return make_chain.call(null,interceptors);
} else {
if(cljs.core.coll_QMARK_.call(null,interceptors)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: when registering ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),", expected a collection of interceptors, got:"].join(''),interceptors);
}

var chain = make_chain.call(null,interceptors);
if(cljs.core.empty_QMARK_.call(null,chain)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: when registering",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),", given an empty interceptor chain"].join(''));
} else {
}

var temp__5457__auto___24752 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__5457__auto___24752)){
var not_i_24753 = temp__5457__auto___24752;
if(cljs.core.fn_QMARK_.call(null,not_i_24753)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: when registering ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got:"].join(''),not_i_24753);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: when registering ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),", expected interceptors, but got:"].join(''),not_i_24753);
}
} else {
}

return chain;
}
});
/**
 * Associate the given event `id` with the given collection of `interceptors`.
 * 
 * `interceptors` may contain nested collections and there may be nils
 * at any level,so process this structure into a simple, nil-less vector
 * before registration.
 * 
 * An `event handler` will likely be at the end of the chain (wrapped in an interceptor).
 */
re_frame.events.register = (function re_frame$events$register(id,interceptors){
return re_frame.registrar.register_handler.call(null,re_frame.events.kind,id,re_frame.events.flatten_and_remove_nils.call(null,id,interceptors));
});
re_frame.events._STAR_handling_STAR_ = null;
/**
 * Given an event vector, look up the associated intercepter chain, and execute it.
 */
re_frame.events.handle = (function re_frame$events$handle(event_v){
var event_id = re_frame.utils.first_in_vector.call(null,event_v);
var temp__5455__auto__ = re_frame.registrar.get_handler.call(null,re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__5455__auto__)){
var interceptors = temp__5455__auto__;
if(cljs.core.truth_(re_frame.events._STAR_handling_STAR_)){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: while handling \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_frame.events._STAR_handling_STAR_),"\", dispatch-sync was called for \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_v),"\". You can't call dispatch-sync within an event handler."].join(''));
} else {
var _STAR_handling_STAR_24754 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_24755 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__24726__auto___24768 = re_frame.interop.now.call(null);
var duration__24727__auto___24769 = (end__24726__auto___24768 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__24756_24770 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__24757_24771 = null;
var count__24758_24772 = (0);
var i__24759_24773 = (0);
while(true){
if((i__24759_24773 < count__24758_24772)){
var vec__24760_24774 = cljs.core._nth.call(null,chunk__24757_24771,i__24759_24773);
var k__24728__auto___24775 = cljs.core.nth.call(null,vec__24760_24774,(0),null);
var cb__24729__auto___24776 = cljs.core.nth.call(null,vec__24760_24774,(1),null);
try{cb__24729__auto___24776.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__24727__auto___24769,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e24763){if((e24763 instanceof java.lang.Exception)){
var e__24730__auto___24777 = e24763;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__24728__auto___24775,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__24730__auto___24777);
} else {
throw e24763;

}
}

var G__24778 = seq__24756_24770;
var G__24779 = chunk__24757_24771;
var G__24780 = count__24758_24772;
var G__24781 = (i__24759_24773 + (1));
seq__24756_24770 = G__24778;
chunk__24757_24771 = G__24779;
count__24758_24772 = G__24780;
i__24759_24773 = G__24781;
continue;
} else {
var temp__5457__auto___24782 = cljs.core.seq.call(null,seq__24756_24770);
if(temp__5457__auto___24782){
var seq__24756_24783__$1 = temp__5457__auto___24782;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24756_24783__$1)){
var c__4319__auto___24784 = cljs.core.chunk_first.call(null,seq__24756_24783__$1);
var G__24785 = cljs.core.chunk_rest.call(null,seq__24756_24783__$1);
var G__24786 = c__4319__auto___24784;
var G__24787 = cljs.core.count.call(null,c__4319__auto___24784);
var G__24788 = (0);
seq__24756_24770 = G__24785;
chunk__24757_24771 = G__24786;
count__24758_24772 = G__24787;
i__24759_24773 = G__24788;
continue;
} else {
var vec__24764_24789 = cljs.core.first.call(null,seq__24756_24783__$1);
var k__24728__auto___24790 = cljs.core.nth.call(null,vec__24764_24789,(0),null);
var cb__24729__auto___24791 = cljs.core.nth.call(null,vec__24764_24789,(1),null);
try{cb__24729__auto___24791.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__24727__auto___24769,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e24767){if((e24767 instanceof java.lang.Exception)){
var e__24730__auto___24792 = e24767;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__24728__auto___24790,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__24730__auto___24792);
} else {
throw e24767;

}
}

var G__24793 = cljs.core.next.call(null,seq__24756_24783__$1);
var G__24794 = null;
var G__24795 = (0);
var G__24796 = (0);
seq__24756_24770 = G__24793;
chunk__24757_24771 = G__24794;
count__24758_24772 = G__24795;
i__24759_24773 = G__24796;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_24755;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_24754;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1549663078374
