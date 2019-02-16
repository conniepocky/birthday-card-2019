// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__31421){
var map__31422 = p__31421;
var map__31422__$1 = ((((!((map__31422 == null)))?(((((map__31422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31422.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31422):map__31422);
var m = map__31422__$1;
var n = cljs.core.get.call(null,map__31422__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__31422__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31424_31446 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31425_31447 = null;
var count__31426_31448 = (0);
var i__31427_31449 = (0);
while(true){
if((i__31427_31449 < count__31426_31448)){
var f_31450 = cljs.core._nth.call(null,chunk__31425_31447,i__31427_31449);
cljs.core.println.call(null,"  ",f_31450);


var G__31451 = seq__31424_31446;
var G__31452 = chunk__31425_31447;
var G__31453 = count__31426_31448;
var G__31454 = (i__31427_31449 + (1));
seq__31424_31446 = G__31451;
chunk__31425_31447 = G__31452;
count__31426_31448 = G__31453;
i__31427_31449 = G__31454;
continue;
} else {
var temp__5457__auto___31455 = cljs.core.seq.call(null,seq__31424_31446);
if(temp__5457__auto___31455){
var seq__31424_31456__$1 = temp__5457__auto___31455;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31424_31456__$1)){
var c__4319__auto___31457 = cljs.core.chunk_first.call(null,seq__31424_31456__$1);
var G__31458 = cljs.core.chunk_rest.call(null,seq__31424_31456__$1);
var G__31459 = c__4319__auto___31457;
var G__31460 = cljs.core.count.call(null,c__4319__auto___31457);
var G__31461 = (0);
seq__31424_31446 = G__31458;
chunk__31425_31447 = G__31459;
count__31426_31448 = G__31460;
i__31427_31449 = G__31461;
continue;
} else {
var f_31462 = cljs.core.first.call(null,seq__31424_31456__$1);
cljs.core.println.call(null,"  ",f_31462);


var G__31463 = cljs.core.next.call(null,seq__31424_31456__$1);
var G__31464 = null;
var G__31465 = (0);
var G__31466 = (0);
seq__31424_31446 = G__31463;
chunk__31425_31447 = G__31464;
count__31426_31448 = G__31465;
i__31427_31449 = G__31466;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31467 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_31467);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_31467)))?cljs.core.second.call(null,arglists_31467):arglists_31467));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31428_31468 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31429_31469 = null;
var count__31430_31470 = (0);
var i__31431_31471 = (0);
while(true){
if((i__31431_31471 < count__31430_31470)){
var vec__31432_31472 = cljs.core._nth.call(null,chunk__31429_31469,i__31431_31471);
var name_31473 = cljs.core.nth.call(null,vec__31432_31472,(0),null);
var map__31435_31474 = cljs.core.nth.call(null,vec__31432_31472,(1),null);
var map__31435_31475__$1 = ((((!((map__31435_31474 == null)))?(((((map__31435_31474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31435_31474.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31435_31474):map__31435_31474);
var doc_31476 = cljs.core.get.call(null,map__31435_31475__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31477 = cljs.core.get.call(null,map__31435_31475__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31473);

cljs.core.println.call(null," ",arglists_31477);

if(cljs.core.truth_(doc_31476)){
cljs.core.println.call(null," ",doc_31476);
} else {
}


var G__31478 = seq__31428_31468;
var G__31479 = chunk__31429_31469;
var G__31480 = count__31430_31470;
var G__31481 = (i__31431_31471 + (1));
seq__31428_31468 = G__31478;
chunk__31429_31469 = G__31479;
count__31430_31470 = G__31480;
i__31431_31471 = G__31481;
continue;
} else {
var temp__5457__auto___31482 = cljs.core.seq.call(null,seq__31428_31468);
if(temp__5457__auto___31482){
var seq__31428_31483__$1 = temp__5457__auto___31482;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31428_31483__$1)){
var c__4319__auto___31484 = cljs.core.chunk_first.call(null,seq__31428_31483__$1);
var G__31485 = cljs.core.chunk_rest.call(null,seq__31428_31483__$1);
var G__31486 = c__4319__auto___31484;
var G__31487 = cljs.core.count.call(null,c__4319__auto___31484);
var G__31488 = (0);
seq__31428_31468 = G__31485;
chunk__31429_31469 = G__31486;
count__31430_31470 = G__31487;
i__31431_31471 = G__31488;
continue;
} else {
var vec__31437_31489 = cljs.core.first.call(null,seq__31428_31483__$1);
var name_31490 = cljs.core.nth.call(null,vec__31437_31489,(0),null);
var map__31440_31491 = cljs.core.nth.call(null,vec__31437_31489,(1),null);
var map__31440_31492__$1 = ((((!((map__31440_31491 == null)))?(((((map__31440_31491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31440_31491.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31440_31491):map__31440_31491);
var doc_31493 = cljs.core.get.call(null,map__31440_31492__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31494 = cljs.core.get.call(null,map__31440_31492__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31490);

cljs.core.println.call(null," ",arglists_31494);

if(cljs.core.truth_(doc_31493)){
cljs.core.println.call(null," ",doc_31493);
} else {
}


var G__31495 = cljs.core.next.call(null,seq__31428_31483__$1);
var G__31496 = null;
var G__31497 = (0);
var G__31498 = (0);
seq__31428_31468 = G__31495;
chunk__31429_31469 = G__31496;
count__31430_31470 = G__31497;
i__31431_31471 = G__31498;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__31442 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31443 = null;
var count__31444 = (0);
var i__31445 = (0);
while(true){
if((i__31445 < count__31444)){
var role = cljs.core._nth.call(null,chunk__31443,i__31445);
var temp__5457__auto___31499__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___31499__$1)){
var spec_31500 = temp__5457__auto___31499__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31500));
} else {
}


var G__31501 = seq__31442;
var G__31502 = chunk__31443;
var G__31503 = count__31444;
var G__31504 = (i__31445 + (1));
seq__31442 = G__31501;
chunk__31443 = G__31502;
count__31444 = G__31503;
i__31445 = G__31504;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__31442);
if(temp__5457__auto____$1){
var seq__31442__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31442__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__31442__$1);
var G__31505 = cljs.core.chunk_rest.call(null,seq__31442__$1);
var G__31506 = c__4319__auto__;
var G__31507 = cljs.core.count.call(null,c__4319__auto__);
var G__31508 = (0);
seq__31442 = G__31505;
chunk__31443 = G__31506;
count__31444 = G__31507;
i__31445 = G__31508;
continue;
} else {
var role = cljs.core.first.call(null,seq__31442__$1);
var temp__5457__auto___31509__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___31509__$2)){
var spec_31510 = temp__5457__auto___31509__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31510));
} else {
}


var G__31511 = cljs.core.next.call(null,seq__31442__$1);
var G__31512 = null;
var G__31513 = (0);
var G__31514 = (0);
seq__31442 = G__31511;
chunk__31443 = G__31512;
count__31444 = G__31513;
i__31445 = G__31514;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1549663083741
