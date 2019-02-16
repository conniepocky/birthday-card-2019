// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__27139 = arguments.length;
switch (G__27139) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async27140 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27140 = (function (f,blockable,meta27141){
this.f = f;
this.blockable = blockable;
this.meta27141 = meta27141;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27140.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27142,meta27141__$1){
var self__ = this;
var _27142__$1 = this;
return (new cljs.core.async.t_cljs$core$async27140(self__.f,self__.blockable,meta27141__$1));
});

cljs.core.async.t_cljs$core$async27140.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27142){
var self__ = this;
var _27142__$1 = this;
return self__.meta27141;
});

cljs.core.async.t_cljs$core$async27140.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27140.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27140.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27140.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27140.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27141","meta27141",-1867241951,null)], null);
});

cljs.core.async.t_cljs$core$async27140.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27140.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27140";

cljs.core.async.t_cljs$core$async27140.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27140");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27140.
 */
cljs.core.async.__GT_t_cljs$core$async27140 = (function cljs$core$async$__GT_t_cljs$core$async27140(f__$1,blockable__$1,meta27141){
return (new cljs.core.async.t_cljs$core$async27140(f__$1,blockable__$1,meta27141));
});

}

return (new cljs.core.async.t_cljs$core$async27140(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__27146 = arguments.length;
switch (G__27146) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__27149 = arguments.length;
switch (G__27149) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__27152 = arguments.length;
switch (G__27152) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27154 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27154);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27154,ret){
return (function (){
return fn1.call(null,val_27154);
});})(val_27154,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__27156 = arguments.length;
switch (G__27156) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4376__auto___27158 = n;
var x_27159 = (0);
while(true){
if((x_27159 < n__4376__auto___27158)){
(a[x_27159] = (0));

var G__27160 = (x_27159 + (1));
x_27159 = G__27160;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__27161 = (i + (1));
i = G__27161;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27162 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27162 = (function (flag,meta27163){
this.flag = flag;
this.meta27163 = meta27163;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27162.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27164,meta27163__$1){
var self__ = this;
var _27164__$1 = this;
return (new cljs.core.async.t_cljs$core$async27162(self__.flag,meta27163__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27162.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27164){
var self__ = this;
var _27164__$1 = this;
return self__.meta27163;
});})(flag))
;

cljs.core.async.t_cljs$core$async27162.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27162.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27162.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27162.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27162.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27163","meta27163",-1431600261,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27162.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27162.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27162";

cljs.core.async.t_cljs$core$async27162.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27162");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27162.
 */
cljs.core.async.__GT_t_cljs$core$async27162 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27162(flag__$1,meta27163){
return (new cljs.core.async.t_cljs$core$async27162(flag__$1,meta27163));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27162(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27165 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27165 = (function (flag,cb,meta27166){
this.flag = flag;
this.cb = cb;
this.meta27166 = meta27166;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27165.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27167,meta27166__$1){
var self__ = this;
var _27167__$1 = this;
return (new cljs.core.async.t_cljs$core$async27165(self__.flag,self__.cb,meta27166__$1));
});

cljs.core.async.t_cljs$core$async27165.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27167){
var self__ = this;
var _27167__$1 = this;
return self__.meta27166;
});

cljs.core.async.t_cljs$core$async27165.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27165.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27165.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27165.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27165.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27166","meta27166",-1663674545,null)], null);
});

cljs.core.async.t_cljs$core$async27165.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27165.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27165";

cljs.core.async.t_cljs$core$async27165.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27165");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27165.
 */
cljs.core.async.__GT_t_cljs$core$async27165 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27165(flag__$1,cb__$1,meta27166){
return (new cljs.core.async.t_cljs$core$async27165(flag__$1,cb__$1,meta27166));
});

}

return (new cljs.core.async.t_cljs$core$async27165(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27168_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27168_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27169_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27169_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27170 = (i + (1));
i = G__27170;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27176 = arguments.length;
var i__4500__auto___27177 = (0);
while(true){
if((i__4500__auto___27177 < len__4499__auto___27176)){
args__4502__auto__.push((arguments[i__4500__auto___27177]));

var G__27178 = (i__4500__auto___27177 + (1));
i__4500__auto___27177 = G__27178;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27173){
var map__27174 = p__27173;
var map__27174__$1 = ((((!((map__27174 == null)))?(((((map__27174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27174):map__27174);
var opts = map__27174__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27171){
var G__27172 = cljs.core.first.call(null,seq27171);
var seq27171__$1 = cljs.core.next.call(null,seq27171);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27172,seq27171__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__27180 = arguments.length;
switch (G__27180) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27079__auto___27226 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27079__auto___27226){
return (function (){
var f__27080__auto__ = (function (){var switch__26989__auto__ = ((function (c__27079__auto___27226){
return (function (state_27204){
var state_val_27205 = (state_27204[(1)]);
if((state_val_27205 === (7))){
var inst_27200 = (state_27204[(2)]);
var state_27204__$1 = state_27204;
var statearr_27206_27227 = state_27204__$1;
(statearr_27206_27227[(2)] = inst_27200);

(statearr_27206_27227[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (1))){
var state_27204__$1 = state_27204;
var statearr_27207_27228 = state_27204__$1;
(statearr_27207_27228[(2)] = null);

(statearr_27207_27228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (4))){
var inst_27183 = (state_27204[(7)]);
var inst_27183__$1 = (state_27204[(2)]);
var inst_27184 = (inst_27183__$1 == null);
var state_27204__$1 = (function (){var statearr_27208 = state_27204;
(statearr_27208[(7)] = inst_27183__$1);

return statearr_27208;
})();
if(cljs.core.truth_(inst_27184)){
var statearr_27209_27229 = state_27204__$1;
(statearr_27209_27229[(1)] = (5));

} else {
var statearr_27210_27230 = state_27204__$1;
(statearr_27210_27230[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (13))){
var state_27204__$1 = state_27204;
var statearr_27211_27231 = state_27204__$1;
(statearr_27211_27231[(2)] = null);

(statearr_27211_27231[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (6))){
var inst_27183 = (state_27204[(7)]);
var state_27204__$1 = state_27204;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27204__$1,(11),to,inst_27183);
} else {
if((state_val_27205 === (3))){
var inst_27202 = (state_27204[(2)]);
var state_27204__$1 = state_27204;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27204__$1,inst_27202);
} else {
if((state_val_27205 === (12))){
var state_27204__$1 = state_27204;
var statearr_27212_27232 = state_27204__$1;
(statearr_27212_27232[(2)] = null);

(statearr_27212_27232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (2))){
var state_27204__$1 = state_27204;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27204__$1,(4),from);
} else {
if((state_val_27205 === (11))){
var inst_27193 = (state_27204[(2)]);
var state_27204__$1 = state_27204;
if(cljs.core.truth_(inst_27193)){
var statearr_27213_27233 = state_27204__$1;
(statearr_27213_27233[(1)] = (12));

} else {
var statearr_27214_27234 = state_27204__$1;
(statearr_27214_27234[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (9))){
var state_27204__$1 = state_27204;
var statearr_27215_27235 = state_27204__$1;
(statearr_27215_27235[(2)] = null);

(statearr_27215_27235[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (5))){
var state_27204__$1 = state_27204;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27216_27236 = state_27204__$1;
(statearr_27216_27236[(1)] = (8));

} else {
var statearr_27217_27237 = state_27204__$1;
(statearr_27217_27237[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (14))){
var inst_27198 = (state_27204[(2)]);
var state_27204__$1 = state_27204;
var statearr_27218_27238 = state_27204__$1;
(statearr_27218_27238[(2)] = inst_27198);

(statearr_27218_27238[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (10))){
var inst_27190 = (state_27204[(2)]);
var state_27204__$1 = state_27204;
var statearr_27219_27239 = state_27204__$1;
(statearr_27219_27239[(2)] = inst_27190);

(statearr_27219_27239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (8))){
var inst_27187 = cljs.core.async.close_BANG_.call(null,to);
var state_27204__$1 = state_27204;
var statearr_27220_27240 = state_27204__$1;
(statearr_27220_27240[(2)] = inst_27187);

(statearr_27220_27240[(1)] = (10));


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
});})(c__27079__auto___27226))
;
return ((function (switch__26989__auto__,c__27079__auto___27226){
return (function() {
var cljs$core$async$state_machine__26990__auto__ = null;
var cljs$core$async$state_machine__26990__auto____0 = (function (){
var statearr_27221 = [null,null,null,null,null,null,null,null];
(statearr_27221[(0)] = cljs$core$async$state_machine__26990__auto__);

(statearr_27221[(1)] = (1));

return statearr_27221;
});
var cljs$core$async$state_machine__26990__auto____1 = (function (state_27204){
while(true){
var ret_value__26991__auto__ = (function (){try{while(true){
var result__26992__auto__ = switch__26989__auto__.call(null,state_27204);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26992__auto__;
}
break;
}
}catch (e27222){if((e27222 instanceof Object)){
var ex__26993__auto__ = e27222;
var statearr_27223_27241 = state_27204;
(statearr_27223_27241[(5)] = ex__26993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27204);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27222;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27242 = state_27204;
state_27204 = G__27242;
continue;
} else {
return ret_value__26991__auto__;
}
break;
}
});
cljs$core$async$state_machine__26990__auto__ = function(state_27204){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26990__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26990__auto____1.call(this,state_27204);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26990__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26990__auto____0;
cljs$core$async$state_machine__26990__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26990__auto____1;
return cljs$core$async$state_machine__26990__auto__;
})()
;})(switch__26989__auto__,c__27079__auto___27226))
})();
var state__27081__auto__ = (function (){var statearr_27224 = f__27080__auto__.call(null);
(statearr_27224[(6)] = c__27079__auto___27226);

return statearr_27224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27081__auto__);
});})(c__27079__auto___27226))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__27243){
var vec__27244 = p__27243;
var v = cljs.core.nth.call(null,vec__27244,(0),null);
var p = cljs.core.nth.call(null,vec__27244,(1),null);
var job = vec__27244;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27079__auto___27415 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27079__auto___27415,res,vec__27244,v,p,job,jobs,results){
return (function (){
var f__27080__auto__ = (function (){var switch__26989__auto__ = ((function (c__27079__auto___27415,res,vec__27244,v,p,job,jobs,results){
return (function (state_27251){
var state_val_27252 = (state_27251[(1)]);
if((state_val_27252 === (1))){
var state_27251__$1 = state_27251;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27251__$1,(2),res,v);
} else {
if((state_val_27252 === (2))){
var inst_27248 = (state_27251[(2)]);
var inst_27249 = cljs.core.async.close_BANG_.call(null,res);
var state_27251__$1 = (function (){var statearr_27253 = state_27251;
(statearr_27253[(7)] = inst_27248);

return statearr_27253;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27251__$1,inst_27249);
} else {
return null;
}
}
});})(c__27079__auto___27415,res,vec__27244,v,p,job,jobs,results))
;
return ((function (switch__26989__auto__,c__27079__auto___27415,res,vec__27244,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26990__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26990__auto____0 = (function (){
var statearr_27254 = [null,null,null,null,null,null,null,null];
(statearr_27254[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26990__auto__);

(statearr_27254[(1)] = (1));

return statearr_27254;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26990__auto____1 = (function (state_27251){
while(true){
var ret_value__26991__auto__ = (function (){try{while(true){
var result__26992__auto__ = switch__26989__auto__.call(null,state_27251);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26992__auto__;
}
break;
}
}catch (e27255){if((e27255 instanceof Object)){
var ex__26993__auto__ = e27255;
var statearr_27256_27416 = state_27251;
(statearr_27256_27416[(5)] = ex__26993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27251);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27255;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27417 = state_27251;
state_27251 = G__27417;
continue;
} else {
return ret_value__26991__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26990__auto__ = function(state_27251){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26990__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26990__auto____1.call(this,state_27251);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26990__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26990__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26990__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26990__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26990__auto__;
})()
;})(switch__26989__auto__,c__27079__auto___27415,res,vec__27244,v,p,job,jobs,results))
})();
var state__27081__auto__ = (function (){var statearr_27257 = f__27080__auto__.call(null);
(statearr_27257[(6)] = c__27079__auto___27415);

return statearr_27257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27081__auto__);
});})(c__27079__auto___27415,res,vec__27244,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27258){
var vec__27259 = p__27258;
var v = cljs.core.nth.call(null,vec__27259,(0),null);
var p = cljs.core.nth.call(null,vec__27259,(1),null);
var job = vec__27259;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4376__auto___27418 = n;
var __27419 = (0);
while(true){
if((__27419 < n__4376__auto___27418)){
var G__27262_27420 = type;
var G__27262_27421__$1 = (((G__27262_27420 instanceof cljs.core.Keyword))?G__27262_27420.fqn:null);
switch (G__27262_27421__$1) {
case "compute":
var c__27079__auto___27423 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27419,c__27079__auto___27423,G__27262_27420,G__27262_27421__$1,n__4376__auto___27418,jobs,results,process,async){
return (function (){
var f__27080__auto__ = (function (){var switch__26989__auto__ = ((function (__27419,c__27079__auto___27423,G__27262_27420,G__27262_27421__$1,n__4376__auto___27418,jobs,results,process,async){
return (function (state_27275){
var state_val_27276 = (state_27275[(1)]);
if((state_val_27276 === (1))){
var state_27275__$1 = state_27275;
var statearr_27277_27424 = state_27275__$1;
(statearr_27277_27424[(2)] = null);

(statearr_27277_27424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27276 === (2))){
var state_27275__$1 = state_27275;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27275__$1,(4),jobs);
} else {
if((state_val_27276 === (3))){
var inst_27273 = (state_27275[(2)]);
var state_27275__$1 = state_27275;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27275__$1,inst_27273);
} else {
if((state_val_27276 === (4))){
var inst_27265 = (state_27275[(2)]);
var inst_27266 = process.call(null,inst_27265);
var state_27275__$1 = state_27275;
if(cljs.core.truth_(inst_27266)){
var statearr_27278_27425 = state_27275__$1;
(statearr_27278_27425[(1)] = (5));

} else {
var statearr_27279_27426 = state_27275__$1;
(statearr_27279_27426[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27276 === (5))){
var state_27275__$1 = state_27275;
var statearr_27280_27427 = state_27275__$1;
(statearr_27280_27427[(2)] = null);

(statearr_27280_27427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27276 === (6))){
var state_27275__$1 = state_27275;
var statearr_27281_27428 = state_27275__$1;
(statearr_27281_27428[(2)] = null);

(statearr_27281_27428[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27276 === (7))){
var inst_27271 = (state_27275[(2)]);
var state_27275__$1 = state_27275;
var statearr_27282_27429 = state_27275__$1;
(statearr_27282_27429[(2)] = inst_27271);

(statearr_27282_27429[(1)] = (3));


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
});})(__27419,c__27079__auto___27423,G__27262_27420,G__27262_27421__$1,n__4376__auto___27418,jobs,results,process,async))
;
return ((function (__27419,switch__26989__auto__,c__27079__auto___27423,G__27262_27420,G__27262_27421__$1,n__4376__auto___27418,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26990__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26990__auto____0 = (function (){
var statearr_27283 = [null,null,null,null,null,null,null];
(statearr_27283[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26990__auto__);

(statearr_27283[(1)] = (1));

return statearr_27283;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26990__auto____1 = (function (state_27275){
while(true){
var ret_value__26991__auto__ = (function (){try{while(true){
var result__26992__auto__ = switch__26989__auto__.call(null,state_27275);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26992__auto__;
}
break;
}
}catch (e27284){if((e27284 instanceof Object)){
var ex__26993__auto__ = e27284;
var statearr_27285_27430 = state_27275;
(statearr_27285_27430[(5)] = ex__26993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27275);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27284;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27431 = state_27275;
state_27275 = G__27431;
continue;
} else {
return ret_value__26991__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26990__auto__ = function(state_27275){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26990__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26990__auto____1.call(this,state_27275);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26990__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26990__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26990__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26990__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26990__auto__;
})()
;})(__27419,switch__26989__auto__,c__27079__auto___27423,G__27262_27420,G__27262_27421__$1,n__4376__auto___27418,jobs,results,process,async))
})();
var state__27081__auto__ = (function (){var statearr_27286 = f__27080__auto__.call(null);
(statearr_27286[(6)] = c__27079__auto___27423);

return statearr_27286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27081__auto__);
});})(__27419,c__27079__auto___27423,G__27262_27420,G__27262_27421__$1,n__4376__auto___27418,jobs,results,process,async))
);


break;
case "async":
var c__27079__auto___27432 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27419,c__27079__auto___27432,G__27262_27420,G__27262_27421__$1,n__4376__auto___27418,jobs,results,process,async){
return (function (){
var f__27080__auto__ = (function (){var switch__26989__auto__ = ((function (__27419,c__27079__auto___27432,G__27262_27420,G__27262_27421__$1,n__4376__auto___27418,jobs,results,process,async){
return (function (state_27299){
var state_val_27300 = (state_27299[(1)]);
if((state_val_27300 === (1))){
var state_27299__$1 = state_27299;
var statearr_27301_27433 = state_27299__$1;
(statearr_27301_27433[(2)] = null);

(statearr_27301_27433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (2))){
var state_27299__$1 = state_27299;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27299__$1,(4),jobs);
} else {
if((state_val_27300 === (3))){
var inst_27297 = (state_27299[(2)]);
var state_27299__$1 = state_27299;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27299__$1,inst_27297);
} else {
if((state_val_27300 === (4))){
var inst_27289 = (state_27299[(2)]);
var inst_27290 = async.call(null,inst_27289);
var state_27299__$1 = state_27299;
if(cljs.core.truth_(inst_27290)){
var statearr_27302_27434 = state_27299__$1;
(statearr_27302_27434[(1)] = (5));

} else {
var statearr_27303_27435 = state_27299__$1;
(statearr_27303_27435[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (5))){
var state_27299__$1 = state_27299;
var statearr_27304_27436 = state_27299__$1;
(statearr_27304_27436[(2)] = null);

(statearr_27304_27436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (6))){
var state_27299__$1 = state_27299;
var statearr_27305_27437 = state_27299__$1;
(statearr_27305_27437[(2)] = null);

(statearr_27305_27437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (7))){
var inst_27295 = (state_27299[(2)]);
var state_27299__$1 = state_27299;
var statearr_27306_27438 = state_27299__$1;
(statearr_27306_27438[(2)] = inst_27295);

(statearr_27306_27438[(1)] = (3));


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
});})(__27419,c__27079__auto___27432,G__27262_27420,G__27262_27421__$1,n__4376__auto___27418,jobs,results,process,async))
;
return ((function (__27419,switch__26989__auto__,c__27079__auto___27432,G__27262_27420,G__27262_27421__$1,n__4376__auto___27418,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26990__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26990__auto____0 = (function (){
var statearr_27307 = [null,null,null,null,null,null,null];
(statearr_27307[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26990__auto__);

(statearr_27307[(1)] = (1));

return statearr_27307;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26990__auto____1 = (function (state_27299){
while(true){
var ret_value__26991__auto__ = (function (){try{while(true){
var result__26992__auto__ = switch__26989__auto__.call(null,state_27299);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26992__auto__;
}
break;
}
}catch (e27308){if((e27308 instanceof Object)){
var ex__26993__auto__ = e27308;
var statearr_27309_27439 = state_27299;
(statearr_27309_27439[(5)] = ex__26993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27299);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27308;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27440 = state_27299;
state_27299 = G__27440;
continue;
} else {
return ret_value__26991__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26990__auto__ = function(state_27299){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26990__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26990__auto____1.call(this,state_27299);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26990__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26990__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26990__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26990__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26990__auto__;
})()
;})(__27419,switch__26989__auto__,c__27079__auto___27432,G__27262_27420,G__27262_27421__$1,n__4376__auto___27418,jobs,results,process,async))
})();
var state__27081__auto__ = (function (){var statearr_27310 = f__27080__auto__.call(null);
(statearr_27310[(6)] = c__27079__auto___27432);

return statearr_27310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27081__auto__);
});})(__27419,c__27079__auto___27432,G__27262_27420,G__27262_27421__$1,n__4376__auto___27418,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27262_27421__$1)].join('')));

}

var G__27441 = (__27419 + (1));
__27419 = G__27441;
continue;
} else {
}
break;
}

var c__27079__auto___27442 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27079__auto___27442,jobs,results,process,async){
return (function (){
var f__27080__auto__ = (function (){var switch__26989__auto__ = ((function (c__27079__auto___27442,jobs,results,process,async){
return (function (state_27332){
var state_val_27333 = (state_27332[(1)]);
if((state_val_27333 === (1))){
var state_27332__$1 = state_27332;
var statearr_27334_27443 = state_27332__$1;
(statearr_27334_27443[(2)] = null);

(statearr_27334_27443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27333 === (2))){
var state_27332__$1 = state_27332;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27332__$1,(4),from);
} else {
if((state_val_27333 === (3))){
var inst_27330 = (state_27332[(2)]);
var state_27332__$1 = state_27332;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27332__$1,inst_27330);
} else {
if((state_val_27333 === (4))){
var inst_27313 = (state_27332[(7)]);
var inst_27313__$1 = (state_27332[(2)]);
var inst_27314 = (inst_27313__$1 == null);
var state_27332__$1 = (function (){var statearr_27335 = state_27332;
(statearr_27335[(7)] = inst_27313__$1);

return statearr_27335;
})();
if(cljs.core.truth_(inst_27314)){
var statearr_27336_27444 = state_27332__$1;
(statearr_27336_27444[(1)] = (5));

} else {
var statearr_27337_27445 = state_27332__$1;
(statearr_27337_27445[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27333 === (5))){
var inst_27316 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27332__$1 = state_27332;
var statearr_27338_27446 = state_27332__$1;
(statearr_27338_27446[(2)] = inst_27316);

(statearr_27338_27446[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27333 === (6))){
var inst_27318 = (state_27332[(8)]);
var inst_27313 = (state_27332[(7)]);
var inst_27318__$1 = cljs.core.async.chan.call(null,(1));
var inst_27319 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27320 = [inst_27313,inst_27318__$1];
var inst_27321 = (new cljs.core.PersistentVector(null,2,(5),inst_27319,inst_27320,null));
var state_27332__$1 = (function (){var statearr_27339 = state_27332;
(statearr_27339[(8)] = inst_27318__$1);

return statearr_27339;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27332__$1,(8),jobs,inst_27321);
} else {
if((state_val_27333 === (7))){
var inst_27328 = (state_27332[(2)]);
var state_27332__$1 = state_27332;
var statearr_27340_27447 = state_27332__$1;
(statearr_27340_27447[(2)] = inst_27328);

(statearr_27340_27447[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27333 === (8))){
var inst_27318 = (state_27332[(8)]);
var inst_27323 = (state_27332[(2)]);
var state_27332__$1 = (function (){var statearr_27341 = state_27332;
(statearr_27341[(9)] = inst_27323);

return statearr_27341;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27332__$1,(9),results,inst_27318);
} else {
if((state_val_27333 === (9))){
var inst_27325 = (state_27332[(2)]);
var state_27332__$1 = (function (){var statearr_27342 = state_27332;
(statearr_27342[(10)] = inst_27325);

return statearr_27342;
})();
var statearr_27343_27448 = state_27332__$1;
(statearr_27343_27448[(2)] = null);

(statearr_27343_27448[(1)] = (2));


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
});})(c__27079__auto___27442,jobs,results,process,async))
;
return ((function (switch__26989__auto__,c__27079__auto___27442,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26990__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26990__auto____0 = (function (){
var statearr_27344 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27344[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26990__auto__);

(statearr_27344[(1)] = (1));

return statearr_27344;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26990__auto____1 = (function (state_27332){
while(true){
var ret_value__26991__auto__ = (function (){try{while(true){
var result__26992__auto__ = switch__26989__auto__.call(null,state_27332);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26992__auto__;
}
break;
}
}catch (e27345){if((e27345 instanceof Object)){
var ex__26993__auto__ = e27345;
var statearr_27346_27449 = state_27332;
(statearr_27346_27449[(5)] = ex__26993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27332);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27345;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27450 = state_27332;
state_27332 = G__27450;
continue;
} else {
return ret_value__26991__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26990__auto__ = function(state_27332){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26990__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26990__auto____1.call(this,state_27332);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26990__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26990__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26990__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26990__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26990__auto__;
})()
;})(switch__26989__auto__,c__27079__auto___27442,jobs,results,process,async))
})();
var state__27081__auto__ = (function (){var statearr_27347 = f__27080__auto__.call(null);
(statearr_27347[(6)] = c__27079__auto___27442);

return statearr_27347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27081__auto__);
});})(c__27079__auto___27442,jobs,results,process,async))
);


var c__27079__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27079__auto__,jobs,results,process,async){
return (function (){
var f__27080__auto__ = (function (){var switch__26989__auto__ = ((function (c__27079__auto__,jobs,results,process,async){
return (function (state_27385){
var state_val_27386 = (state_27385[(1)]);
if((state_val_27386 === (7))){
var inst_27381 = (state_27385[(2)]);
var state_27385__$1 = state_27385;
var statearr_27387_27451 = state_27385__$1;
(statearr_27387_27451[(2)] = inst_27381);

(statearr_27387_27451[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27386 === (20))){
var state_27385__$1 = state_27385;
var statearr_27388_27452 = state_27385__$1;
(statearr_27388_27452[(2)] = null);

(statearr_27388_27452[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27386 === (1))){
var state_27385__$1 = state_27385;
var statearr_27389_27453 = state_27385__$1;
(statearr_27389_27453[(2)] = null);

(statearr_27389_27453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27386 === (4))){
var inst_27350 = (state_27385[(7)]);
var inst_27350__$1 = (state_27385[(2)]);
var inst_27351 = (inst_27350__$1 == null);
var state_27385__$1 = (function (){var statearr_27390 = state_27385;
(statearr_27390[(7)] = inst_27350__$1);

return statearr_27390;
})();
if(cljs.core.truth_(inst_27351)){
var statearr_27391_27454 = state_27385__$1;
(statearr_27391_27454[(1)] = (5));

} else {
var statearr_27392_27455 = state_27385__$1;
(statearr_27392_27455[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27386 === (15))){
var inst_27363 = (state_27385[(8)]);
var state_27385__$1 = state_27385;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27385__$1,(18),to,inst_27363);
} else {
if((state_val_27386 === (21))){
var inst_27376 = (state_27385[(2)]);
var state_27385__$1 = state_27385;
var statearr_27393_27456 = state_27385__$1;
(statearr_27393_27456[(2)] = inst_27376);

(statearr_27393_27456[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27386 === (13))){
var inst_27378 = (state_27385[(2)]);
var state_27385__$1 = (function (){var statearr_27394 = state_27385;
(statearr_27394[(9)] = inst_27378);

return statearr_27394;
})();
var statearr_27395_27457 = state_27385__$1;
(statearr_27395_27457[(2)] = null);

(statearr_27395_27457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27386 === (6))){
var inst_27350 = (state_27385[(7)]);
var state_27385__$1 = state_27385;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27385__$1,(11),inst_27350);
} else {
if((state_val_27386 === (17))){
var inst_27371 = (state_27385[(2)]);
var state_27385__$1 = state_27385;
if(cljs.core.truth_(inst_27371)){
var statearr_27396_27458 = state_27385__$1;
(statearr_27396_27458[(1)] = (19));

} else {
var statearr_27397_27459 = state_27385__$1;
(statearr_27397_27459[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27386 === (3))){
var inst_27383 = (state_27385[(2)]);
var state_27385__$1 = state_27385;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27385__$1,inst_27383);
} else {
if((state_val_27386 === (12))){
var inst_27360 = (state_27385[(10)]);
var state_27385__$1 = state_27385;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27385__$1,(14),inst_27360);
} else {
if((state_val_27386 === (2))){
var state_27385__$1 = state_27385;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27385__$1,(4),results);
} else {
if((state_val_27386 === (19))){
var state_27385__$1 = state_27385;
var statearr_27398_27460 = state_27385__$1;
(statearr_27398_27460[(2)] = null);

(statearr_27398_27460[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27386 === (11))){
var inst_27360 = (state_27385[(2)]);
var state_27385__$1 = (function (){var statearr_27399 = state_27385;
(statearr_27399[(10)] = inst_27360);

return statearr_27399;
})();
var statearr_27400_27461 = state_27385__$1;
(statearr_27400_27461[(2)] = null);

(statearr_27400_27461[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27386 === (9))){
var state_27385__$1 = state_27385;
var statearr_27401_27462 = state_27385__$1;
(statearr_27401_27462[(2)] = null);

(statearr_27401_27462[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27386 === (5))){
var state_27385__$1 = state_27385;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27402_27463 = state_27385__$1;
(statearr_27402_27463[(1)] = (8));

} else {
var statearr_27403_27464 = state_27385__$1;
(statearr_27403_27464[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27386 === (14))){
var inst_27365 = (state_27385[(11)]);
var inst_27363 = (state_27385[(8)]);
var inst_27363__$1 = (state_27385[(2)]);
var inst_27364 = (inst_27363__$1 == null);
var inst_27365__$1 = cljs.core.not.call(null,inst_27364);
var state_27385__$1 = (function (){var statearr_27404 = state_27385;
(statearr_27404[(11)] = inst_27365__$1);

(statearr_27404[(8)] = inst_27363__$1);

return statearr_27404;
})();
if(inst_27365__$1){
var statearr_27405_27465 = state_27385__$1;
(statearr_27405_27465[(1)] = (15));

} else {
var statearr_27406_27466 = state_27385__$1;
(statearr_27406_27466[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27386 === (16))){
var inst_27365 = (state_27385[(11)]);
var state_27385__$1 = state_27385;
var statearr_27407_27467 = state_27385__$1;
(statearr_27407_27467[(2)] = inst_27365);

(statearr_27407_27467[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27386 === (10))){
var inst_27357 = (state_27385[(2)]);
var state_27385__$1 = state_27385;
var statearr_27408_27468 = state_27385__$1;
(statearr_27408_27468[(2)] = inst_27357);

(statearr_27408_27468[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27386 === (18))){
var inst_27368 = (state_27385[(2)]);
var state_27385__$1 = state_27385;
var statearr_27409_27469 = state_27385__$1;
(statearr_27409_27469[(2)] = inst_27368);

(statearr_27409_27469[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27386 === (8))){
var inst_27354 = cljs.core.async.close_BANG_.call(null,to);
var state_27385__$1 = state_27385;
var statearr_27410_27470 = state_27385__$1;
(statearr_27410_27470[(2)] = inst_27354);

(statearr_27410_27470[(1)] = (10));


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
});})(c__27079__auto__,jobs,results,process,async))
;
return ((function (switch__26989__auto__,c__27079__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26990__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26990__auto____0 = (function (){
var statearr_27411 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27411[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26990__auto__);

(statearr_27411[(1)] = (1));

return statearr_27411;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26990__auto____1 = (function (state_27385){
while(true){
var ret_value__26991__auto__ = (function (){try{while(true){
var result__26992__auto__ = switch__26989__auto__.call(null,state_27385);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26992__auto__;
}
break;
}
}catch (e27412){if((e27412 instanceof Object)){
var ex__26993__auto__ = e27412;
var statearr_27413_27471 = state_27385;
(statearr_27413_27471[(5)] = ex__26993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27385);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27412;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27472 = state_27385;
state_27385 = G__27472;
continue;
} else {
return ret_value__26991__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26990__auto__ = function(state_27385){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26990__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26990__auto____1.call(this,state_27385);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26990__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26990__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26990__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26990__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26990__auto__;
})()
;})(switch__26989__auto__,c__27079__auto__,jobs,results,process,async))
})();
var state__27081__auto__ = (function (){var statearr_27414 = f__27080__auto__.call(null);
(statearr_27414[(6)] = c__27079__auto__);

return statearr_27414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27081__auto__);
});})(c__27079__auto__,jobs,results,process,async))
);

return c__27079__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__27474 = arguments.length;
switch (G__27474) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__27477 = arguments.length;
switch (G__27477) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__27480 = arguments.length;
switch (G__27480) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__27079__auto___27529 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27079__auto___27529,tc,fc){
return (function (){
var f__27080__auto__ = (function (){var switch__26989__auto__ = ((function (c__27079__auto___27529,tc,fc){
return (function (state_27506){
var state_val_27507 = (state_27506[(1)]);
if((state_val_27507 === (7))){
var inst_27502 = (state_27506[(2)]);
var state_27506__$1 = state_27506;
var statearr_27508_27530 = state_27506__$1;
(statearr_27508_27530[(2)] = inst_27502);

(statearr_27508_27530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27507 === (1))){
var state_27506__$1 = state_27506;
var statearr_27509_27531 = state_27506__$1;
(statearr_27509_27531[(2)] = null);

(statearr_27509_27531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27507 === (4))){
var inst_27483 = (state_27506[(7)]);
var inst_27483__$1 = (state_27506[(2)]);
var inst_27484 = (inst_27483__$1 == null);
var state_27506__$1 = (function (){var statearr_27510 = state_27506;
(statearr_27510[(7)] = inst_27483__$1);

return statearr_27510;
})();
if(cljs.core.truth_(inst_27484)){
var statearr_27511_27532 = state_27506__$1;
(statearr_27511_27532[(1)] = (5));

} else {
var statearr_27512_27533 = state_27506__$1;
(statearr_27512_27533[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27507 === (13))){
var state_27506__$1 = state_27506;
var statearr_27513_27534 = state_27506__$1;
(statearr_27513_27534[(2)] = null);

(statearr_27513_27534[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27507 === (6))){
var inst_27483 = (state_27506[(7)]);
var inst_27489 = p.call(null,inst_27483);
var state_27506__$1 = state_27506;
if(cljs.core.truth_(inst_27489)){
var statearr_27514_27535 = state_27506__$1;
(statearr_27514_27535[(1)] = (9));

} else {
var statearr_27515_27536 = state_27506__$1;
(statearr_27515_27536[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27507 === (3))){
var inst_27504 = (state_27506[(2)]);
var state_27506__$1 = state_27506;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27506__$1,inst_27504);
} else {
if((state_val_27507 === (12))){
var state_27506__$1 = state_27506;
var statearr_27516_27537 = state_27506__$1;
(statearr_27516_27537[(2)] = null);

(statearr_27516_27537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27507 === (2))){
var state_27506__$1 = state_27506;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27506__$1,(4),ch);
} else {
if((state_val_27507 === (11))){
var inst_27483 = (state_27506[(7)]);
var inst_27493 = (state_27506[(2)]);
var state_27506__$1 = state_27506;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27506__$1,(8),inst_27493,inst_27483);
} else {
if((state_val_27507 === (9))){
var state_27506__$1 = state_27506;
var statearr_27517_27538 = state_27506__$1;
(statearr_27517_27538[(2)] = tc);

(statearr_27517_27538[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27507 === (5))){
var inst_27486 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27487 = cljs.core.async.close_BANG_.call(null,fc);
var state_27506__$1 = (function (){var statearr_27518 = state_27506;
(statearr_27518[(8)] = inst_27486);

return statearr_27518;
})();
var statearr_27519_27539 = state_27506__$1;
(statearr_27519_27539[(2)] = inst_27487);

(statearr_27519_27539[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27507 === (14))){
var inst_27500 = (state_27506[(2)]);
var state_27506__$1 = state_27506;
var statearr_27520_27540 = state_27506__$1;
(statearr_27520_27540[(2)] = inst_27500);

(statearr_27520_27540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27507 === (10))){
var state_27506__$1 = state_27506;
var statearr_27521_27541 = state_27506__$1;
(statearr_27521_27541[(2)] = fc);

(statearr_27521_27541[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27507 === (8))){
var inst_27495 = (state_27506[(2)]);
var state_27506__$1 = state_27506;
if(cljs.core.truth_(inst_27495)){
var statearr_27522_27542 = state_27506__$1;
(statearr_27522_27542[(1)] = (12));

} else {
var statearr_27523_27543 = state_27506__$1;
(statearr_27523_27543[(1)] = (13));

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
});})(c__27079__auto___27529,tc,fc))
;
return ((function (switch__26989__auto__,c__27079__auto___27529,tc,fc){
return (function() {
var cljs$core$async$state_machine__26990__auto__ = null;
var cljs$core$async$state_machine__26990__auto____0 = (function (){
var statearr_27524 = [null,null,null,null,null,null,null,null,null];
(statearr_27524[(0)] = cljs$core$async$state_machine__26990__auto__);

(statearr_27524[(1)] = (1));

return statearr_27524;
});
var cljs$core$async$state_machine__26990__auto____1 = (function (state_27506){
while(true){
var ret_value__26991__auto__ = (function (){try{while(true){
var result__26992__auto__ = switch__26989__auto__.call(null,state_27506);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26992__auto__;
}
break;
}
}catch (e27525){if((e27525 instanceof Object)){
var ex__26993__auto__ = e27525;
var statearr_27526_27544 = state_27506;
(statearr_27526_27544[(5)] = ex__26993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27506);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27525;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27545 = state_27506;
state_27506 = G__27545;
continue;
} else {
return ret_value__26991__auto__;
}
break;
}
});
cljs$core$async$state_machine__26990__auto__ = function(state_27506){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26990__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26990__auto____1.call(this,state_27506);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26990__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26990__auto____0;
cljs$core$async$state_machine__26990__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26990__auto____1;
return cljs$core$async$state_machine__26990__auto__;
})()
;})(switch__26989__auto__,c__27079__auto___27529,tc,fc))
})();
var state__27081__auto__ = (function (){var statearr_27527 = f__27080__auto__.call(null);
(statearr_27527[(6)] = c__27079__auto___27529);

return statearr_27527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27081__auto__);
});})(c__27079__auto___27529,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__27079__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27079__auto__){
return (function (){
var f__27080__auto__ = (function (){var switch__26989__auto__ = ((function (c__27079__auto__){
return (function (state_27566){
var state_val_27567 = (state_27566[(1)]);
if((state_val_27567 === (7))){
var inst_27562 = (state_27566[(2)]);
var state_27566__$1 = state_27566;
var statearr_27568_27586 = state_27566__$1;
(statearr_27568_27586[(2)] = inst_27562);

(statearr_27568_27586[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27567 === (1))){
var inst_27546 = init;
var state_27566__$1 = (function (){var statearr_27569 = state_27566;
(statearr_27569[(7)] = inst_27546);

return statearr_27569;
})();
var statearr_27570_27587 = state_27566__$1;
(statearr_27570_27587[(2)] = null);

(statearr_27570_27587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27567 === (4))){
var inst_27549 = (state_27566[(8)]);
var inst_27549__$1 = (state_27566[(2)]);
var inst_27550 = (inst_27549__$1 == null);
var state_27566__$1 = (function (){var statearr_27571 = state_27566;
(statearr_27571[(8)] = inst_27549__$1);

return statearr_27571;
})();
if(cljs.core.truth_(inst_27550)){
var statearr_27572_27588 = state_27566__$1;
(statearr_27572_27588[(1)] = (5));

} else {
var statearr_27573_27589 = state_27566__$1;
(statearr_27573_27589[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27567 === (6))){
var inst_27549 = (state_27566[(8)]);
var inst_27546 = (state_27566[(7)]);
var inst_27553 = (state_27566[(9)]);
var inst_27553__$1 = f.call(null,inst_27546,inst_27549);
var inst_27554 = cljs.core.reduced_QMARK_.call(null,inst_27553__$1);
var state_27566__$1 = (function (){var statearr_27574 = state_27566;
(statearr_27574[(9)] = inst_27553__$1);

return statearr_27574;
})();
if(inst_27554){
var statearr_27575_27590 = state_27566__$1;
(statearr_27575_27590[(1)] = (8));

} else {
var statearr_27576_27591 = state_27566__$1;
(statearr_27576_27591[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27567 === (3))){
var inst_27564 = (state_27566[(2)]);
var state_27566__$1 = state_27566;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27566__$1,inst_27564);
} else {
if((state_val_27567 === (2))){
var state_27566__$1 = state_27566;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27566__$1,(4),ch);
} else {
if((state_val_27567 === (9))){
var inst_27553 = (state_27566[(9)]);
var inst_27546 = inst_27553;
var state_27566__$1 = (function (){var statearr_27577 = state_27566;
(statearr_27577[(7)] = inst_27546);

return statearr_27577;
})();
var statearr_27578_27592 = state_27566__$1;
(statearr_27578_27592[(2)] = null);

(statearr_27578_27592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27567 === (5))){
var inst_27546 = (state_27566[(7)]);
var state_27566__$1 = state_27566;
var statearr_27579_27593 = state_27566__$1;
(statearr_27579_27593[(2)] = inst_27546);

(statearr_27579_27593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27567 === (10))){
var inst_27560 = (state_27566[(2)]);
var state_27566__$1 = state_27566;
var statearr_27580_27594 = state_27566__$1;
(statearr_27580_27594[(2)] = inst_27560);

(statearr_27580_27594[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27567 === (8))){
var inst_27553 = (state_27566[(9)]);
var inst_27556 = cljs.core.deref.call(null,inst_27553);
var state_27566__$1 = state_27566;
var statearr_27581_27595 = state_27566__$1;
(statearr_27581_27595[(2)] = inst_27556);

(statearr_27581_27595[(1)] = (10));


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
});})(c__27079__auto__))
;
return ((function (switch__26989__auto__,c__27079__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__26990__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26990__auto____0 = (function (){
var statearr_27582 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27582[(0)] = cljs$core$async$reduce_$_state_machine__26990__auto__);

(statearr_27582[(1)] = (1));

return statearr_27582;
});
var cljs$core$async$reduce_$_state_machine__26990__auto____1 = (function (state_27566){
while(true){
var ret_value__26991__auto__ = (function (){try{while(true){
var result__26992__auto__ = switch__26989__auto__.call(null,state_27566);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26992__auto__;
}
break;
}
}catch (e27583){if((e27583 instanceof Object)){
var ex__26993__auto__ = e27583;
var statearr_27584_27596 = state_27566;
(statearr_27584_27596[(5)] = ex__26993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27566);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27583;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27597 = state_27566;
state_27566 = G__27597;
continue;
} else {
return ret_value__26991__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26990__auto__ = function(state_27566){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26990__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26990__auto____1.call(this,state_27566);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__26990__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26990__auto____0;
cljs$core$async$reduce_$_state_machine__26990__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26990__auto____1;
return cljs$core$async$reduce_$_state_machine__26990__auto__;
})()
;})(switch__26989__auto__,c__27079__auto__))
})();
var state__27081__auto__ = (function (){var statearr_27585 = f__27080__auto__.call(null);
(statearr_27585[(6)] = c__27079__auto__);

return statearr_27585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27081__auto__);
});})(c__27079__auto__))
);

return c__27079__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__27079__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27079__auto__,f__$1){
return (function (){
var f__27080__auto__ = (function (){var switch__26989__auto__ = ((function (c__27079__auto__,f__$1){
return (function (state_27603){
var state_val_27604 = (state_27603[(1)]);
if((state_val_27604 === (1))){
var inst_27598 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_27603__$1 = state_27603;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27603__$1,(2),inst_27598);
} else {
if((state_val_27604 === (2))){
var inst_27600 = (state_27603[(2)]);
var inst_27601 = f__$1.call(null,inst_27600);
var state_27603__$1 = state_27603;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27603__$1,inst_27601);
} else {
return null;
}
}
});})(c__27079__auto__,f__$1))
;
return ((function (switch__26989__auto__,c__27079__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__26990__auto__ = null;
var cljs$core$async$transduce_$_state_machine__26990__auto____0 = (function (){
var statearr_27605 = [null,null,null,null,null,null,null];
(statearr_27605[(0)] = cljs$core$async$transduce_$_state_machine__26990__auto__);

(statearr_27605[(1)] = (1));

return statearr_27605;
});
var cljs$core$async$transduce_$_state_machine__26990__auto____1 = (function (state_27603){
while(true){
var ret_value__26991__auto__ = (function (){try{while(true){
var result__26992__auto__ = switch__26989__auto__.call(null,state_27603);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26992__auto__;
}
break;
}
}catch (e27606){if((e27606 instanceof Object)){
var ex__26993__auto__ = e27606;
var statearr_27607_27609 = state_27603;
(statearr_27607_27609[(5)] = ex__26993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27603);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27606;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27610 = state_27603;
state_27603 = G__27610;
continue;
} else {
return ret_value__26991__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__26990__auto__ = function(state_27603){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__26990__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__26990__auto____1.call(this,state_27603);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__26990__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__26990__auto____0;
cljs$core$async$transduce_$_state_machine__26990__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__26990__auto____1;
return cljs$core$async$transduce_$_state_machine__26990__auto__;
})()
;})(switch__26989__auto__,c__27079__auto__,f__$1))
})();
var state__27081__auto__ = (function (){var statearr_27608 = f__27080__auto__.call(null);
(statearr_27608[(6)] = c__27079__auto__);

return statearr_27608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27081__auto__);
});})(c__27079__auto__,f__$1))
);

return c__27079__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__27612 = arguments.length;
switch (G__27612) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27079__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27079__auto__){
return (function (){
var f__27080__auto__ = (function (){var switch__26989__auto__ = ((function (c__27079__auto__){
return (function (state_27637){
var state_val_27638 = (state_27637[(1)]);
if((state_val_27638 === (7))){
var inst_27619 = (state_27637[(2)]);
var state_27637__$1 = state_27637;
var statearr_27639_27660 = state_27637__$1;
(statearr_27639_27660[(2)] = inst_27619);

(statearr_27639_27660[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27638 === (1))){
var inst_27613 = cljs.core.seq.call(null,coll);
var inst_27614 = inst_27613;
var state_27637__$1 = (function (){var statearr_27640 = state_27637;
(statearr_27640[(7)] = inst_27614);

return statearr_27640;
})();
var statearr_27641_27661 = state_27637__$1;
(statearr_27641_27661[(2)] = null);

(statearr_27641_27661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27638 === (4))){
var inst_27614 = (state_27637[(7)]);
var inst_27617 = cljs.core.first.call(null,inst_27614);
var state_27637__$1 = state_27637;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27637__$1,(7),ch,inst_27617);
} else {
if((state_val_27638 === (13))){
var inst_27631 = (state_27637[(2)]);
var state_27637__$1 = state_27637;
var statearr_27642_27662 = state_27637__$1;
(statearr_27642_27662[(2)] = inst_27631);

(statearr_27642_27662[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27638 === (6))){
var inst_27622 = (state_27637[(2)]);
var state_27637__$1 = state_27637;
if(cljs.core.truth_(inst_27622)){
var statearr_27643_27663 = state_27637__$1;
(statearr_27643_27663[(1)] = (8));

} else {
var statearr_27644_27664 = state_27637__$1;
(statearr_27644_27664[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27638 === (3))){
var inst_27635 = (state_27637[(2)]);
var state_27637__$1 = state_27637;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27637__$1,inst_27635);
} else {
if((state_val_27638 === (12))){
var state_27637__$1 = state_27637;
var statearr_27645_27665 = state_27637__$1;
(statearr_27645_27665[(2)] = null);

(statearr_27645_27665[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27638 === (2))){
var inst_27614 = (state_27637[(7)]);
var state_27637__$1 = state_27637;
if(cljs.core.truth_(inst_27614)){
var statearr_27646_27666 = state_27637__$1;
(statearr_27646_27666[(1)] = (4));

} else {
var statearr_27647_27667 = state_27637__$1;
(statearr_27647_27667[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27638 === (11))){
var inst_27628 = cljs.core.async.close_BANG_.call(null,ch);
var state_27637__$1 = state_27637;
var statearr_27648_27668 = state_27637__$1;
(statearr_27648_27668[(2)] = inst_27628);

(statearr_27648_27668[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27638 === (9))){
var state_27637__$1 = state_27637;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27649_27669 = state_27637__$1;
(statearr_27649_27669[(1)] = (11));

} else {
var statearr_27650_27670 = state_27637__$1;
(statearr_27650_27670[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27638 === (5))){
var inst_27614 = (state_27637[(7)]);
var state_27637__$1 = state_27637;
var statearr_27651_27671 = state_27637__$1;
(statearr_27651_27671[(2)] = inst_27614);

(statearr_27651_27671[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27638 === (10))){
var inst_27633 = (state_27637[(2)]);
var state_27637__$1 = state_27637;
var statearr_27652_27672 = state_27637__$1;
(statearr_27652_27672[(2)] = inst_27633);

(statearr_27652_27672[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27638 === (8))){
var inst_27614 = (state_27637[(7)]);
var inst_27624 = cljs.core.next.call(null,inst_27614);
var inst_27614__$1 = inst_27624;
var state_27637__$1 = (function (){var statearr_27653 = state_27637;
(statearr_27653[(7)] = inst_27614__$1);

return statearr_27653;
})();
var statearr_27654_27673 = state_27637__$1;
(statearr_27654_27673[(2)] = null);

(statearr_27654_27673[(1)] = (2));


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
});})(c__27079__auto__))
;
return ((function (switch__26989__auto__,c__27079__auto__){
return (function() {
var cljs$core$async$state_machine__26990__auto__ = null;
var cljs$core$async$state_machine__26990__auto____0 = (function (){
var statearr_27655 = [null,null,null,null,null,null,null,null];
(statearr_27655[(0)] = cljs$core$async$state_machine__26990__auto__);

(statearr_27655[(1)] = (1));

return statearr_27655;
});
var cljs$core$async$state_machine__26990__auto____1 = (function (state_27637){
while(true){
var ret_value__26991__auto__ = (function (){try{while(true){
var result__26992__auto__ = switch__26989__auto__.call(null,state_27637);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26992__auto__;
}
break;
}
}catch (e27656){if((e27656 instanceof Object)){
var ex__26993__auto__ = e27656;
var statearr_27657_27674 = state_27637;
(statearr_27657_27674[(5)] = ex__26993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27637);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27656;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27675 = state_27637;
state_27637 = G__27675;
continue;
} else {
return ret_value__26991__auto__;
}
break;
}
});
cljs$core$async$state_machine__26990__auto__ = function(state_27637){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26990__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26990__auto____1.call(this,state_27637);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26990__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26990__auto____0;
cljs$core$async$state_machine__26990__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26990__auto____1;
return cljs$core$async$state_machine__26990__auto__;
})()
;})(switch__26989__auto__,c__27079__auto__))
})();
var state__27081__auto__ = (function (){var statearr_27658 = f__27080__auto__.call(null);
(statearr_27658[(6)] = c__27079__auto__);

return statearr_27658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27081__auto__);
});})(c__27079__auto__))
);

return c__27079__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async27676 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27676 = (function (ch,cs,meta27677){
this.ch = ch;
this.cs = cs;
this.meta27677 = meta27677;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27676.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27678,meta27677__$1){
var self__ = this;
var _27678__$1 = this;
return (new cljs.core.async.t_cljs$core$async27676(self__.ch,self__.cs,meta27677__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async27676.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27678){
var self__ = this;
var _27678__$1 = this;
return self__.meta27677;
});})(cs))
;

cljs.core.async.t_cljs$core$async27676.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27676.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async27676.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27676.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27676.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27676.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27676.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27677","meta27677",-1423874968,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async27676.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27676.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27676";

cljs.core.async.t_cljs$core$async27676.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27676");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27676.
 */
cljs.core.async.__GT_t_cljs$core$async27676 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async27676(ch__$1,cs__$1,meta27677){
return (new cljs.core.async.t_cljs$core$async27676(ch__$1,cs__$1,meta27677));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async27676(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__27079__auto___27898 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27079__auto___27898,cs,m,dchan,dctr,done){
return (function (){
var f__27080__auto__ = (function (){var switch__26989__auto__ = ((function (c__27079__auto___27898,cs,m,dchan,dctr,done){
return (function (state_27813){
var state_val_27814 = (state_27813[(1)]);
if((state_val_27814 === (7))){
var inst_27809 = (state_27813[(2)]);
var state_27813__$1 = state_27813;
var statearr_27815_27899 = state_27813__$1;
(statearr_27815_27899[(2)] = inst_27809);

(statearr_27815_27899[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27814 === (20))){
var inst_27712 = (state_27813[(7)]);
var inst_27724 = cljs.core.first.call(null,inst_27712);
var inst_27725 = cljs.core.nth.call(null,inst_27724,(0),null);
var inst_27726 = cljs.core.nth.call(null,inst_27724,(1),null);
var state_27813__$1 = (function (){var statearr_27816 = state_27813;
(statearr_27816[(8)] = inst_27725);

return statearr_27816;
})();
if(cljs.core.truth_(inst_27726)){
var statearr_27817_27900 = state_27813__$1;
(statearr_27817_27900[(1)] = (22));

} else {
var statearr_27818_27901 = state_27813__$1;
(statearr_27818_27901[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27814 === (27))){
var inst_27756 = (state_27813[(9)]);
var inst_27761 = (state_27813[(10)]);
var inst_27681 = (state_27813[(11)]);
var inst_27754 = (state_27813[(12)]);
var inst_27761__$1 = cljs.core._nth.call(null,inst_27754,inst_27756);
var inst_27762 = cljs.core.async.put_BANG_.call(null,inst_27761__$1,inst_27681,done);
var state_27813__$1 = (function (){var statearr_27819 = state_27813;
(statearr_27819[(10)] = inst_27761__$1);

return statearr_27819;
})();
if(cljs.core.truth_(inst_27762)){
var statearr_27820_27902 = state_27813__$1;
(statearr_27820_27902[(1)] = (30));

} else {
var statearr_27821_27903 = state_27813__$1;
(statearr_27821_27903[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27814 === (1))){
var state_27813__$1 = state_27813;
var statearr_27822_27904 = state_27813__$1;
(statearr_27822_27904[(2)] = null);

(statearr_27822_27904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27814 === (24))){
var inst_27712 = (state_27813[(7)]);
var inst_27731 = (state_27813[(2)]);
var inst_27732 = cljs.core.next.call(null,inst_27712);
var inst_27690 = inst_27732;
var inst_27691 = null;
var inst_27692 = (0);
var inst_27693 = (0);
var state_27813__$1 = (function (){var statearr_27823 = state_27813;
(statearr_27823[(13)] = inst_27691);

(statearr_27823[(14)] = inst_27690);

(statearr_27823[(15)] = inst_27693);

(statearr_27823[(16)] = inst_27692);

(statearr_27823[(17)] = inst_27731);

return statearr_27823;
})();
var statearr_27824_27905 = state_27813__$1;
(statearr_27824_27905[(2)] = null);

(statearr_27824_27905[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27814 === (39))){
var state_27813__$1 = state_27813;
var statearr_27828_27906 = state_27813__$1;
(statearr_27828_27906[(2)] = null);

(statearr_27828_27906[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27814 === (4))){
var inst_27681 = (state_27813[(11)]);
var inst_27681__$1 = (state_27813[(2)]);
var inst_27682 = (inst_27681__$1 == null);
var state_27813__$1 = (function (){var statearr_27829 = state_27813;
(statearr_27829[(11)] = inst_27681__$1);

return statearr_27829;
})();
if(cljs.core.truth_(inst_27682)){
var statearr_27830_27907 = state_27813__$1;
(statearr_27830_27907[(1)] = (5));

} else {
var statearr_27831_27908 = state_27813__$1;
(statearr_27831_27908[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27814 === (15))){
var inst_27691 = (state_27813[(13)]);
var inst_27690 = (state_27813[(14)]);
var inst_27693 = (state_27813[(15)]);
var inst_27692 = (state_27813[(16)]);
var inst_27708 = (state_27813[(2)]);
var inst_27709 = (inst_27693 + (1));
var tmp27825 = inst_27691;
var tmp27826 = inst_27690;
var tmp27827 = inst_27692;
var inst_27690__$1 = tmp27826;
var inst_27691__$1 = tmp27825;
var inst_27692__$1 = tmp27827;
var inst_27693__$1 = inst_27709;
var state_27813__$1 = (function (){var statearr_27832 = state_27813;
(statearr_27832[(18)] = inst_27708);

(statearr_27832[(13)] = inst_27691__$1);

(statearr_27832[(14)] = inst_27690__$1);

(statearr_27832[(15)] = inst_27693__$1);

(statearr_27832[(16)] = inst_27692__$1);

return statearr_27832;
})();
var statearr_27833_27909 = state_27813__$1;
(statearr_27833_27909[(2)] = null);

(statearr_27833_27909[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27814 === (21))){
var inst_27735 = (state_27813[(2)]);
var state_27813__$1 = state_27813;
var statearr_27837_27910 = state_27813__$1;
(statearr_27837_27910[(2)] = inst_27735);

(statearr_27837_27910[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27814 === (31))){
var inst_27761 = (state_27813[(10)]);
var inst_27765 = done.call(null,null);
var inst_27766 = cljs.core.async.untap_STAR_.call(null,m,inst_27761);
var state_27813__$1 = (function (){var statearr_27838 = state_27813;
(statearr_27838[(19)] = inst_27765);

return statearr_27838;
})();
var statearr_27839_27911 = state_27813__$1;
(statearr_27839_27911[(2)] = inst_27766);

(statearr_27839_27911[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27814 === (32))){
var inst_27753 = (state_27813[(20)]);
var inst_27756 = (state_27813[(9)]);
var inst_27755 = (state_27813[(21)]);
var inst_27754 = (state_27813[(12)]);
var inst_27768 = (state_27813[(2)]);
var inst_27769 = (inst_27756 + (1));
var tmp27834 = inst_27753;
var tmp27835 = inst_27755;
var tmp27836 = inst_27754;
var inst_27753__$1 = tmp27834;
var inst_27754__$1 = tmp27836;
var inst_27755__$1 = tmp27835;
var inst_27756__$1 = inst_27769;
var state_27813__$1 = (function (){var statearr_27840 = state_27813;
(statearr_27840[(20)] = inst_27753__$1);

(statearr_27840[(9)] = inst_27756__$1);

(statearr_27840[(21)] = inst_27755__$1);

(statearr_27840[(22)] = inst_27768);

(statearr_27840[(12)] = inst_27754__$1);

return statearr_27840;
})();
var statearr_27841_27912 = state_27813__$1;
(statearr_27841_27912[(2)] = null);

(statearr_27841_27912[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27814 === (40))){
var inst_27781 = (state_27813[(23)]);
var inst_27785 = done.call(null,null);
var inst_27786 = cljs.core.async.untap_STAR_.call(null,m,inst_27781);
var state_27813__$1 = (function (){var statearr_27842 = state_27813;
(statearr_27842[(24)] = inst_27785);

return statearr_27842;
})();
var statearr_27843_27913 = state_27813__$1;
(statearr_27843_27913[(2)] = inst_27786);

(statearr_27843_27913[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27814 === (33))){
var inst_27772 = (state_27813[(25)]);
var inst_27774 = cljs.core.chunked_seq_QMARK_.call(null,inst_27772);
var state_27813__$1 = state_27813;
if(inst_27774){
var statearr_27844_27914 = state_27813__$1;
(statearr_27844_27914[(1)] = (36));

} else {
var statearr_27845_27915 = state_27813__$1;
(statearr_27845_27915[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27814 === (13))){
var inst_27702 = (state_27813[(26)]);
var inst_27705 = cljs.core.async.close_BANG_.call(null,inst_27702);
var state_27813__$1 = state_27813;
var statearr_27846_27916 = state_27813__$1;
(statearr_27846_27916[(2)] = inst_27705);

(statearr_27846_27916[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27814 === (22))){
var inst_27725 = (state_27813[(8)]);
var inst_27728 = cljs.core.async.close_BANG_.call(null,inst_27725);
var state_27813__$1 = state_27813;
var statearr_27847_27917 = state_27813__$1;
(statearr_27847_27917[(2)] = inst_27728);

(statearr_27847_27917[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27814 === (36))){
var inst_27772 = (state_27813[(25)]);
var inst_27776 = cljs.core.chunk_first.call(null,inst_27772);
var inst_27777 = cljs.core.chunk_rest.call(null,inst_27772);
var inst_27778 = cljs.core.count.call(null,inst_27776);
var inst_27753 = inst_27777;
var inst_27754 = inst_27776;
var inst_27755 = inst_27778;
var inst_27756 = (0);
var state_27813__$1 = (function (){var statearr_27848 = state_27813;
(statearr_27848[(20)] = inst_27753);

(statearr_27848[(9)] = inst_27756);

(statearr_27848[(21)] = inst_27755);

(statearr_27848[(12)] = inst_27754);

return statearr_27848;
})();
var statearr_27849_27918 = state_27813__$1;
(statearr_27849_27918[(2)] = null);

(statearr_27849_27918[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27814 === (41))){
var inst_27772 = (state_27813[(25)]);
var inst_27788 = (state_27813[(2)]);
var inst_27789 = cljs.core.next.call(null,inst_27772);
var inst_27753 = inst_27789;
var inst_27754 = null;
var inst_27755 = (0);
var inst_27756 = (0);
var state_27813__$1 = (function (){var statearr_27850 = state_27813;
(statearr_27850[(20)] = inst_27753);

(statearr_27850[(9)] = inst_27756);

(statearr_27850[(21)] = inst_27755);

(statearr_27850[(27)] = inst_27788);

(statearr_27850[(12)] = inst_27754);

return statearr_27850;
})();
var statearr_27851_27919 = state_27813__$1;
(statearr_27851_27919[(2)] = null);

(statearr_27851_27919[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27814 === (43))){
var state_27813__$1 = state_27813;
var statearr_27852_27920 = state_27813__$1;
(statearr_27852_27920[(2)] = null);

(statearr_27852_27920[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27814 === (29))){
var inst_27797 = (state_27813[(2)]);
var state_27813__$1 = state_27813;
var statearr_27853_27921 = state_27813__$1;
(statearr_27853_27921[(2)] = inst_27797);

(statearr_27853_27921[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27814 === (44))){
var inst_27806 = (state_27813[(2)]);
var state_27813__$1 = (function (){var statearr_27854 = state_27813;
(statearr_27854[(28)] = inst_27806);

return statearr_27854;
})();
var statearr_27855_27922 = state_27813__$1;
(statearr_27855_27922[(2)] = null);

(statearr_27855_27922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27814 === (6))){
var inst_27745 = (state_27813[(29)]);
var inst_27744 = cljs.core.deref.call(null,cs);
var inst_27745__$1 = cljs.core.keys.call(null,inst_27744);
var inst_27746 = cljs.core.count.call(null,inst_27745__$1);
var inst_27747 = cljs.core.reset_BANG_.call(null,dctr,inst_27746);
var inst_27752 = cljs.core.seq.call(null,inst_27745__$1);
var inst_27753 = inst_27752;
var inst_27754 = null;
var inst_27755 = (0);
var inst_27756 = (0);
var state_27813__$1 = (function (){var statearr_27856 = state_27813;
(statearr_27856[(20)] = inst_27753);

(statearr_27856[(9)] = inst_27756);

(statearr_27856[(21)] = inst_27755);

(statearr_27856[(29)] = inst_27745__$1);

(statearr_27856[(30)] = inst_27747);

(statearr_27856[(12)] = inst_27754);

return statearr_27856;
})();
var statearr_27857_27923 = state_27813__$1;
(statearr_27857_27923[(2)] = null);

(statearr_27857_27923[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27814 === (28))){
var inst_27753 = (state_27813[(20)]);
var inst_27772 = (state_27813[(25)]);
var inst_27772__$1 = cljs.core.seq.call(null,inst_27753);
var state_27813__$1 = (function (){var statearr_27858 = state_27813;
(statearr_27858[(25)] = inst_27772__$1);

return statearr_27858;
})();
if(inst_27772__$1){
var statearr_27859_27924 = state_27813__$1;
(statearr_27859_27924[(1)] = (33));

} else {
var statearr_27860_27925 = state_27813__$1;
(statearr_27860_27925[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27814 === (25))){
var inst_27756 = (state_27813[(9)]);
var inst_27755 = (state_27813[(21)]);
var inst_27758 = (inst_27756 < inst_27755);
var inst_27759 = inst_27758;
var state_27813__$1 = state_27813;
if(cljs.core.truth_(inst_27759)){
var statearr_27861_27926 = state_27813__$1;
(statearr_27861_27926[(1)] = (27));

} else {
var statearr_27862_27927 = state_27813__$1;
(statearr_27862_27927[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27814 === (34))){
var state_27813__$1 = state_27813;
var statearr_27863_27928 = state_27813__$1;
(statearr_27863_27928[(2)] = null);

(statearr_27863_27928[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27814 === (17))){
var state_27813__$1 = state_27813;
var statearr_27864_27929 = state_27813__$1;
(statearr_27864_27929[(2)] = null);

(statearr_27864_27929[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27814 === (3))){
var inst_27811 = (state_27813[(2)]);
var state_27813__$1 = state_27813;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27813__$1,inst_27811);
} else {
if((state_val_27814 === (12))){
var inst_27740 = (state_27813[(2)]);
var state_27813__$1 = state_27813;
var statearr_27865_27930 = state_27813__$1;
(statearr_27865_27930[(2)] = inst_27740);

(statearr_27865_27930[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27814 === (2))){
var state_27813__$1 = state_27813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27813__$1,(4),ch);
} else {
if((state_val_27814 === (23))){
var state_27813__$1 = state_27813;
var statearr_27866_27931 = state_27813__$1;
(statearr_27866_27931[(2)] = null);

(statearr_27866_27931[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27814 === (35))){
var inst_27795 = (state_27813[(2)]);
var state_27813__$1 = state_27813;
var statearr_27867_27932 = state_27813__$1;
(statearr_27867_27932[(2)] = inst_27795);

(statearr_27867_27932[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27814 === (19))){
var inst_27712 = (state_27813[(7)]);
var inst_27716 = cljs.core.chunk_first.call(null,inst_27712);
var inst_27717 = cljs.core.chunk_rest.call(null,inst_27712);
var inst_27718 = cljs.core.count.call(null,inst_27716);
var inst_27690 = inst_27717;
var inst_27691 = inst_27716;
var inst_27692 = inst_27718;
var inst_27693 = (0);
var state_27813__$1 = (function (){var statearr_27868 = state_27813;
(statearr_27868[(13)] = inst_27691);

(statearr_27868[(14)] = inst_27690);

(statearr_27868[(15)] = inst_27693);

(statearr_27868[(16)] = inst_27692);

return statearr_27868;
})();
var statearr_27869_27933 = state_27813__$1;
(statearr_27869_27933[(2)] = null);

(statearr_27869_27933[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27814 === (11))){
var inst_27690 = (state_27813[(14)]);
var inst_27712 = (state_27813[(7)]);
var inst_27712__$1 = cljs.core.seq.call(null,inst_27690);
var state_27813__$1 = (function (){var statearr_27870 = state_27813;
(statearr_27870[(7)] = inst_27712__$1);

return statearr_27870;
})();
if(inst_27712__$1){
var statearr_27871_27934 = state_27813__$1;
(statearr_27871_27934[(1)] = (16));

} else {
var statearr_27872_27935 = state_27813__$1;
(statearr_27872_27935[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27814 === (9))){
var inst_27742 = (state_27813[(2)]);
var state_27813__$1 = state_27813;
var statearr_27873_27936 = state_27813__$1;
(statearr_27873_27936[(2)] = inst_27742);

(statearr_27873_27936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27814 === (5))){
var inst_27688 = cljs.core.deref.call(null,cs);
var inst_27689 = cljs.core.seq.call(null,inst_27688);
var inst_27690 = inst_27689;
var inst_27691 = null;
var inst_27692 = (0);
var inst_27693 = (0);
var state_27813__$1 = (function (){var statearr_27874 = state_27813;
(statearr_27874[(13)] = inst_27691);

(statearr_27874[(14)] = inst_27690);

(statearr_27874[(15)] = inst_27693);

(statearr_27874[(16)] = inst_27692);

return statearr_27874;
})();
var statearr_27875_27937 = state_27813__$1;
(statearr_27875_27937[(2)] = null);

(statearr_27875_27937[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27814 === (14))){
var state_27813__$1 = state_27813;
var statearr_27876_27938 = state_27813__$1;
(statearr_27876_27938[(2)] = null);

(statearr_27876_27938[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27814 === (45))){
var inst_27803 = (state_27813[(2)]);
var state_27813__$1 = state_27813;
var statearr_27877_27939 = state_27813__$1;
(statearr_27877_27939[(2)] = inst_27803);

(statearr_27877_27939[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27814 === (26))){
var inst_27745 = (state_27813[(29)]);
var inst_27799 = (state_27813[(2)]);
var inst_27800 = cljs.core.seq.call(null,inst_27745);
var state_27813__$1 = (function (){var statearr_27878 = state_27813;
(statearr_27878[(31)] = inst_27799);

return statearr_27878;
})();
if(inst_27800){
var statearr_27879_27940 = state_27813__$1;
(statearr_27879_27940[(1)] = (42));

} else {
var statearr_27880_27941 = state_27813__$1;
(statearr_27880_27941[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27814 === (16))){
var inst_27712 = (state_27813[(7)]);
var inst_27714 = cljs.core.chunked_seq_QMARK_.call(null,inst_27712);
var state_27813__$1 = state_27813;
if(inst_27714){
var statearr_27881_27942 = state_27813__$1;
(statearr_27881_27942[(1)] = (19));

} else {
var statearr_27882_27943 = state_27813__$1;
(statearr_27882_27943[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27814 === (38))){
var inst_27792 = (state_27813[(2)]);
var state_27813__$1 = state_27813;
var statearr_27883_27944 = state_27813__$1;
(statearr_27883_27944[(2)] = inst_27792);

(statearr_27883_27944[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27814 === (30))){
var state_27813__$1 = state_27813;
var statearr_27884_27945 = state_27813__$1;
(statearr_27884_27945[(2)] = null);

(statearr_27884_27945[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27814 === (10))){
var inst_27691 = (state_27813[(13)]);
var inst_27693 = (state_27813[(15)]);
var inst_27701 = cljs.core._nth.call(null,inst_27691,inst_27693);
var inst_27702 = cljs.core.nth.call(null,inst_27701,(0),null);
var inst_27703 = cljs.core.nth.call(null,inst_27701,(1),null);
var state_27813__$1 = (function (){var statearr_27885 = state_27813;
(statearr_27885[(26)] = inst_27702);

return statearr_27885;
})();
if(cljs.core.truth_(inst_27703)){
var statearr_27886_27946 = state_27813__$1;
(statearr_27886_27946[(1)] = (13));

} else {
var statearr_27887_27947 = state_27813__$1;
(statearr_27887_27947[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27814 === (18))){
var inst_27738 = (state_27813[(2)]);
var state_27813__$1 = state_27813;
var statearr_27888_27948 = state_27813__$1;
(statearr_27888_27948[(2)] = inst_27738);

(statearr_27888_27948[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27814 === (42))){
var state_27813__$1 = state_27813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27813__$1,(45),dchan);
} else {
if((state_val_27814 === (37))){
var inst_27781 = (state_27813[(23)]);
var inst_27681 = (state_27813[(11)]);
var inst_27772 = (state_27813[(25)]);
var inst_27781__$1 = cljs.core.first.call(null,inst_27772);
var inst_27782 = cljs.core.async.put_BANG_.call(null,inst_27781__$1,inst_27681,done);
var state_27813__$1 = (function (){var statearr_27889 = state_27813;
(statearr_27889[(23)] = inst_27781__$1);

return statearr_27889;
})();
if(cljs.core.truth_(inst_27782)){
var statearr_27890_27949 = state_27813__$1;
(statearr_27890_27949[(1)] = (39));

} else {
var statearr_27891_27950 = state_27813__$1;
(statearr_27891_27950[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27814 === (8))){
var inst_27693 = (state_27813[(15)]);
var inst_27692 = (state_27813[(16)]);
var inst_27695 = (inst_27693 < inst_27692);
var inst_27696 = inst_27695;
var state_27813__$1 = state_27813;
if(cljs.core.truth_(inst_27696)){
var statearr_27892_27951 = state_27813__$1;
(statearr_27892_27951[(1)] = (10));

} else {
var statearr_27893_27952 = state_27813__$1;
(statearr_27893_27952[(1)] = (11));

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
});})(c__27079__auto___27898,cs,m,dchan,dctr,done))
;
return ((function (switch__26989__auto__,c__27079__auto___27898,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__26990__auto__ = null;
var cljs$core$async$mult_$_state_machine__26990__auto____0 = (function (){
var statearr_27894 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27894[(0)] = cljs$core$async$mult_$_state_machine__26990__auto__);

(statearr_27894[(1)] = (1));

return statearr_27894;
});
var cljs$core$async$mult_$_state_machine__26990__auto____1 = (function (state_27813){
while(true){
var ret_value__26991__auto__ = (function (){try{while(true){
var result__26992__auto__ = switch__26989__auto__.call(null,state_27813);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26992__auto__;
}
break;
}
}catch (e27895){if((e27895 instanceof Object)){
var ex__26993__auto__ = e27895;
var statearr_27896_27953 = state_27813;
(statearr_27896_27953[(5)] = ex__26993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27813);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27895;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27954 = state_27813;
state_27813 = G__27954;
continue;
} else {
return ret_value__26991__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26990__auto__ = function(state_27813){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26990__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26990__auto____1.call(this,state_27813);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__26990__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26990__auto____0;
cljs$core$async$mult_$_state_machine__26990__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26990__auto____1;
return cljs$core$async$mult_$_state_machine__26990__auto__;
})()
;})(switch__26989__auto__,c__27079__auto___27898,cs,m,dchan,dctr,done))
})();
var state__27081__auto__ = (function (){var statearr_27897 = f__27080__auto__.call(null);
(statearr_27897[(6)] = c__27079__auto___27898);

return statearr_27897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27081__auto__);
});})(c__27079__auto___27898,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__27956 = arguments.length;
switch (G__27956) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,state_map);
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,mode);
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27968 = arguments.length;
var i__4500__auto___27969 = (0);
while(true){
if((i__4500__auto___27969 < len__4499__auto___27968)){
args__4502__auto__.push((arguments[i__4500__auto___27969]));

var G__27970 = (i__4500__auto___27969 + (1));
i__4500__auto___27969 = G__27970;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27962){
var map__27963 = p__27962;
var map__27963__$1 = ((((!((map__27963 == null)))?(((((map__27963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27963.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27963):map__27963);
var opts = map__27963__$1;
var statearr_27965_27971 = state;
(statearr_27965_27971[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__27963,map__27963__$1,opts){
return (function (val){
var statearr_27966_27972 = state;
(statearr_27966_27972[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27963,map__27963__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_27967_27973 = state;
(statearr_27967_27973[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27958){
var G__27959 = cljs.core.first.call(null,seq27958);
var seq27958__$1 = cljs.core.next.call(null,seq27958);
var G__27960 = cljs.core.first.call(null,seq27958__$1);
var seq27958__$2 = cljs.core.next.call(null,seq27958__$1);
var G__27961 = cljs.core.first.call(null,seq27958__$2);
var seq27958__$3 = cljs.core.next.call(null,seq27958__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27959,G__27960,G__27961,seq27958__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async27974 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27974 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta27975){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta27975 = meta27975;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27974.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27976,meta27975__$1){
var self__ = this;
var _27976__$1 = this;
return (new cljs.core.async.t_cljs$core$async27974(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta27975__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27974.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27976){
var self__ = this;
var _27976__$1 = this;
return self__.meta27975;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27974.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27974.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27974.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27974.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27974.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27974.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27974.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27974.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27974.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta27975","meta27975",1972054916,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27974.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27974.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27974";

cljs.core.async.t_cljs$core$async27974.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27974");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27974.
 */
cljs.core.async.__GT_t_cljs$core$async27974 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async27974(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta27975){
return (new cljs.core.async.t_cljs$core$async27974(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta27975));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async27974(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27079__auto___28138 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27079__auto___28138,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27080__auto__ = (function (){var switch__26989__auto__ = ((function (c__27079__auto___28138,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28078){
var state_val_28079 = (state_28078[(1)]);
if((state_val_28079 === (7))){
var inst_27993 = (state_28078[(2)]);
var state_28078__$1 = state_28078;
var statearr_28080_28139 = state_28078__$1;
(statearr_28080_28139[(2)] = inst_27993);

(statearr_28080_28139[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (20))){
var inst_28005 = (state_28078[(7)]);
var state_28078__$1 = state_28078;
var statearr_28081_28140 = state_28078__$1;
(statearr_28081_28140[(2)] = inst_28005);

(statearr_28081_28140[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (27))){
var state_28078__$1 = state_28078;
var statearr_28082_28141 = state_28078__$1;
(statearr_28082_28141[(2)] = null);

(statearr_28082_28141[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (1))){
var inst_27980 = (state_28078[(8)]);
var inst_27980__$1 = calc_state.call(null);
var inst_27982 = (inst_27980__$1 == null);
var inst_27983 = cljs.core.not.call(null,inst_27982);
var state_28078__$1 = (function (){var statearr_28083 = state_28078;
(statearr_28083[(8)] = inst_27980__$1);

return statearr_28083;
})();
if(inst_27983){
var statearr_28084_28142 = state_28078__$1;
(statearr_28084_28142[(1)] = (2));

} else {
var statearr_28085_28143 = state_28078__$1;
(statearr_28085_28143[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (24))){
var inst_28052 = (state_28078[(9)]);
var inst_28038 = (state_28078[(10)]);
var inst_28029 = (state_28078[(11)]);
var inst_28052__$1 = inst_28029.call(null,inst_28038);
var state_28078__$1 = (function (){var statearr_28086 = state_28078;
(statearr_28086[(9)] = inst_28052__$1);

return statearr_28086;
})();
if(cljs.core.truth_(inst_28052__$1)){
var statearr_28087_28144 = state_28078__$1;
(statearr_28087_28144[(1)] = (29));

} else {
var statearr_28088_28145 = state_28078__$1;
(statearr_28088_28145[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (4))){
var inst_27996 = (state_28078[(2)]);
var state_28078__$1 = state_28078;
if(cljs.core.truth_(inst_27996)){
var statearr_28089_28146 = state_28078__$1;
(statearr_28089_28146[(1)] = (8));

} else {
var statearr_28090_28147 = state_28078__$1;
(statearr_28090_28147[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (15))){
var inst_28023 = (state_28078[(2)]);
var state_28078__$1 = state_28078;
if(cljs.core.truth_(inst_28023)){
var statearr_28091_28148 = state_28078__$1;
(statearr_28091_28148[(1)] = (19));

} else {
var statearr_28092_28149 = state_28078__$1;
(statearr_28092_28149[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (21))){
var inst_28028 = (state_28078[(12)]);
var inst_28028__$1 = (state_28078[(2)]);
var inst_28029 = cljs.core.get.call(null,inst_28028__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28030 = cljs.core.get.call(null,inst_28028__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28031 = cljs.core.get.call(null,inst_28028__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28078__$1 = (function (){var statearr_28093 = state_28078;
(statearr_28093[(12)] = inst_28028__$1);

(statearr_28093[(13)] = inst_28030);

(statearr_28093[(11)] = inst_28029);

return statearr_28093;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28078__$1,(22),inst_28031);
} else {
if((state_val_28079 === (31))){
var inst_28060 = (state_28078[(2)]);
var state_28078__$1 = state_28078;
if(cljs.core.truth_(inst_28060)){
var statearr_28094_28150 = state_28078__$1;
(statearr_28094_28150[(1)] = (32));

} else {
var statearr_28095_28151 = state_28078__$1;
(statearr_28095_28151[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (32))){
var inst_28037 = (state_28078[(14)]);
var state_28078__$1 = state_28078;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28078__$1,(35),out,inst_28037);
} else {
if((state_val_28079 === (33))){
var inst_28028 = (state_28078[(12)]);
var inst_28005 = inst_28028;
var state_28078__$1 = (function (){var statearr_28096 = state_28078;
(statearr_28096[(7)] = inst_28005);

return statearr_28096;
})();
var statearr_28097_28152 = state_28078__$1;
(statearr_28097_28152[(2)] = null);

(statearr_28097_28152[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (13))){
var inst_28005 = (state_28078[(7)]);
var inst_28012 = inst_28005.cljs$lang$protocol_mask$partition0$;
var inst_28013 = (inst_28012 & (64));
var inst_28014 = inst_28005.cljs$core$ISeq$;
var inst_28015 = (cljs.core.PROTOCOL_SENTINEL === inst_28014);
var inst_28016 = ((inst_28013) || (inst_28015));
var state_28078__$1 = state_28078;
if(cljs.core.truth_(inst_28016)){
var statearr_28098_28153 = state_28078__$1;
(statearr_28098_28153[(1)] = (16));

} else {
var statearr_28099_28154 = state_28078__$1;
(statearr_28099_28154[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (22))){
var inst_28038 = (state_28078[(10)]);
var inst_28037 = (state_28078[(14)]);
var inst_28036 = (state_28078[(2)]);
var inst_28037__$1 = cljs.core.nth.call(null,inst_28036,(0),null);
var inst_28038__$1 = cljs.core.nth.call(null,inst_28036,(1),null);
var inst_28039 = (inst_28037__$1 == null);
var inst_28040 = cljs.core._EQ_.call(null,inst_28038__$1,change);
var inst_28041 = ((inst_28039) || (inst_28040));
var state_28078__$1 = (function (){var statearr_28100 = state_28078;
(statearr_28100[(10)] = inst_28038__$1);

(statearr_28100[(14)] = inst_28037__$1);

return statearr_28100;
})();
if(cljs.core.truth_(inst_28041)){
var statearr_28101_28155 = state_28078__$1;
(statearr_28101_28155[(1)] = (23));

} else {
var statearr_28102_28156 = state_28078__$1;
(statearr_28102_28156[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (36))){
var inst_28028 = (state_28078[(12)]);
var inst_28005 = inst_28028;
var state_28078__$1 = (function (){var statearr_28103 = state_28078;
(statearr_28103[(7)] = inst_28005);

return statearr_28103;
})();
var statearr_28104_28157 = state_28078__$1;
(statearr_28104_28157[(2)] = null);

(statearr_28104_28157[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (29))){
var inst_28052 = (state_28078[(9)]);
var state_28078__$1 = state_28078;
var statearr_28105_28158 = state_28078__$1;
(statearr_28105_28158[(2)] = inst_28052);

(statearr_28105_28158[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (6))){
var state_28078__$1 = state_28078;
var statearr_28106_28159 = state_28078__$1;
(statearr_28106_28159[(2)] = false);

(statearr_28106_28159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (28))){
var inst_28048 = (state_28078[(2)]);
var inst_28049 = calc_state.call(null);
var inst_28005 = inst_28049;
var state_28078__$1 = (function (){var statearr_28107 = state_28078;
(statearr_28107[(7)] = inst_28005);

(statearr_28107[(15)] = inst_28048);

return statearr_28107;
})();
var statearr_28108_28160 = state_28078__$1;
(statearr_28108_28160[(2)] = null);

(statearr_28108_28160[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (25))){
var inst_28074 = (state_28078[(2)]);
var state_28078__$1 = state_28078;
var statearr_28109_28161 = state_28078__$1;
(statearr_28109_28161[(2)] = inst_28074);

(statearr_28109_28161[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (34))){
var inst_28072 = (state_28078[(2)]);
var state_28078__$1 = state_28078;
var statearr_28110_28162 = state_28078__$1;
(statearr_28110_28162[(2)] = inst_28072);

(statearr_28110_28162[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (17))){
var state_28078__$1 = state_28078;
var statearr_28111_28163 = state_28078__$1;
(statearr_28111_28163[(2)] = false);

(statearr_28111_28163[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (3))){
var state_28078__$1 = state_28078;
var statearr_28112_28164 = state_28078__$1;
(statearr_28112_28164[(2)] = false);

(statearr_28112_28164[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (12))){
var inst_28076 = (state_28078[(2)]);
var state_28078__$1 = state_28078;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28078__$1,inst_28076);
} else {
if((state_val_28079 === (2))){
var inst_27980 = (state_28078[(8)]);
var inst_27985 = inst_27980.cljs$lang$protocol_mask$partition0$;
var inst_27986 = (inst_27985 & (64));
var inst_27987 = inst_27980.cljs$core$ISeq$;
var inst_27988 = (cljs.core.PROTOCOL_SENTINEL === inst_27987);
var inst_27989 = ((inst_27986) || (inst_27988));
var state_28078__$1 = state_28078;
if(cljs.core.truth_(inst_27989)){
var statearr_28113_28165 = state_28078__$1;
(statearr_28113_28165[(1)] = (5));

} else {
var statearr_28114_28166 = state_28078__$1;
(statearr_28114_28166[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (23))){
var inst_28037 = (state_28078[(14)]);
var inst_28043 = (inst_28037 == null);
var state_28078__$1 = state_28078;
if(cljs.core.truth_(inst_28043)){
var statearr_28115_28167 = state_28078__$1;
(statearr_28115_28167[(1)] = (26));

} else {
var statearr_28116_28168 = state_28078__$1;
(statearr_28116_28168[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (35))){
var inst_28063 = (state_28078[(2)]);
var state_28078__$1 = state_28078;
if(cljs.core.truth_(inst_28063)){
var statearr_28117_28169 = state_28078__$1;
(statearr_28117_28169[(1)] = (36));

} else {
var statearr_28118_28170 = state_28078__$1;
(statearr_28118_28170[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (19))){
var inst_28005 = (state_28078[(7)]);
var inst_28025 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28005);
var state_28078__$1 = state_28078;
var statearr_28119_28171 = state_28078__$1;
(statearr_28119_28171[(2)] = inst_28025);

(statearr_28119_28171[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (11))){
var inst_28005 = (state_28078[(7)]);
var inst_28009 = (inst_28005 == null);
var inst_28010 = cljs.core.not.call(null,inst_28009);
var state_28078__$1 = state_28078;
if(inst_28010){
var statearr_28120_28172 = state_28078__$1;
(statearr_28120_28172[(1)] = (13));

} else {
var statearr_28121_28173 = state_28078__$1;
(statearr_28121_28173[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (9))){
var inst_27980 = (state_28078[(8)]);
var state_28078__$1 = state_28078;
var statearr_28122_28174 = state_28078__$1;
(statearr_28122_28174[(2)] = inst_27980);

(statearr_28122_28174[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (5))){
var state_28078__$1 = state_28078;
var statearr_28123_28175 = state_28078__$1;
(statearr_28123_28175[(2)] = true);

(statearr_28123_28175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (14))){
var state_28078__$1 = state_28078;
var statearr_28124_28176 = state_28078__$1;
(statearr_28124_28176[(2)] = false);

(statearr_28124_28176[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (26))){
var inst_28038 = (state_28078[(10)]);
var inst_28045 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28038);
var state_28078__$1 = state_28078;
var statearr_28125_28177 = state_28078__$1;
(statearr_28125_28177[(2)] = inst_28045);

(statearr_28125_28177[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (16))){
var state_28078__$1 = state_28078;
var statearr_28126_28178 = state_28078__$1;
(statearr_28126_28178[(2)] = true);

(statearr_28126_28178[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (38))){
var inst_28068 = (state_28078[(2)]);
var state_28078__$1 = state_28078;
var statearr_28127_28179 = state_28078__$1;
(statearr_28127_28179[(2)] = inst_28068);

(statearr_28127_28179[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (30))){
var inst_28038 = (state_28078[(10)]);
var inst_28030 = (state_28078[(13)]);
var inst_28029 = (state_28078[(11)]);
var inst_28055 = cljs.core.empty_QMARK_.call(null,inst_28029);
var inst_28056 = inst_28030.call(null,inst_28038);
var inst_28057 = cljs.core.not.call(null,inst_28056);
var inst_28058 = ((inst_28055) && (inst_28057));
var state_28078__$1 = state_28078;
var statearr_28128_28180 = state_28078__$1;
(statearr_28128_28180[(2)] = inst_28058);

(statearr_28128_28180[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (10))){
var inst_27980 = (state_28078[(8)]);
var inst_28001 = (state_28078[(2)]);
var inst_28002 = cljs.core.get.call(null,inst_28001,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28003 = cljs.core.get.call(null,inst_28001,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28004 = cljs.core.get.call(null,inst_28001,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28005 = inst_27980;
var state_28078__$1 = (function (){var statearr_28129 = state_28078;
(statearr_28129[(16)] = inst_28002);

(statearr_28129[(17)] = inst_28003);

(statearr_28129[(18)] = inst_28004);

(statearr_28129[(7)] = inst_28005);

return statearr_28129;
})();
var statearr_28130_28181 = state_28078__$1;
(statearr_28130_28181[(2)] = null);

(statearr_28130_28181[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (18))){
var inst_28020 = (state_28078[(2)]);
var state_28078__$1 = state_28078;
var statearr_28131_28182 = state_28078__$1;
(statearr_28131_28182[(2)] = inst_28020);

(statearr_28131_28182[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (37))){
var state_28078__$1 = state_28078;
var statearr_28132_28183 = state_28078__$1;
(statearr_28132_28183[(2)] = null);

(statearr_28132_28183[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (8))){
var inst_27980 = (state_28078[(8)]);
var inst_27998 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27980);
var state_28078__$1 = state_28078;
var statearr_28133_28184 = state_28078__$1;
(statearr_28133_28184[(2)] = inst_27998);

(statearr_28133_28184[(1)] = (10));


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
});})(c__27079__auto___28138,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__26989__auto__,c__27079__auto___28138,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__26990__auto__ = null;
var cljs$core$async$mix_$_state_machine__26990__auto____0 = (function (){
var statearr_28134 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28134[(0)] = cljs$core$async$mix_$_state_machine__26990__auto__);

(statearr_28134[(1)] = (1));

return statearr_28134;
});
var cljs$core$async$mix_$_state_machine__26990__auto____1 = (function (state_28078){
while(true){
var ret_value__26991__auto__ = (function (){try{while(true){
var result__26992__auto__ = switch__26989__auto__.call(null,state_28078);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26992__auto__;
}
break;
}
}catch (e28135){if((e28135 instanceof Object)){
var ex__26993__auto__ = e28135;
var statearr_28136_28185 = state_28078;
(statearr_28136_28185[(5)] = ex__26993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28078);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28135;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28186 = state_28078;
state_28078 = G__28186;
continue;
} else {
return ret_value__26991__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26990__auto__ = function(state_28078){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26990__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26990__auto____1.call(this,state_28078);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__26990__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26990__auto____0;
cljs$core$async$mix_$_state_machine__26990__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26990__auto____1;
return cljs$core$async$mix_$_state_machine__26990__auto__;
})()
;})(switch__26989__auto__,c__27079__auto___28138,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27081__auto__ = (function (){var statearr_28137 = f__27080__auto__.call(null);
(statearr_28137[(6)] = c__27079__auto___28138);

return statearr_28137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27081__auto__);
});})(c__27079__auto___28138,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__28188 = arguments.length;
switch (G__28188) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__28192 = arguments.length;
switch (G__28192) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3922__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3922__auto__,mults){
return (function (p1__28190_SHARP_){
if(cljs.core.truth_(p1__28190_SHARP_.call(null,topic))){
return p1__28190_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28190_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async28193 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28193 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28194){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28194 = meta28194;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28193.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28195,meta28194__$1){
var self__ = this;
var _28195__$1 = this;
return (new cljs.core.async.t_cljs$core$async28193(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28194__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28193.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28195){
var self__ = this;
var _28195__$1 = this;
return self__.meta28194;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28193.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28193.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28193.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28193.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28193.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28193.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28193.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28193.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28194","meta28194",-1121778350,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28193.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28193.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28193";

cljs.core.async.t_cljs$core$async28193.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28193");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28193.
 */
cljs.core.async.__GT_t_cljs$core$async28193 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28193(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28194){
return (new cljs.core.async.t_cljs$core$async28193(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28194));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28193(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27079__auto___28313 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27079__auto___28313,mults,ensure_mult,p){
return (function (){
var f__27080__auto__ = (function (){var switch__26989__auto__ = ((function (c__27079__auto___28313,mults,ensure_mult,p){
return (function (state_28267){
var state_val_28268 = (state_28267[(1)]);
if((state_val_28268 === (7))){
var inst_28263 = (state_28267[(2)]);
var state_28267__$1 = state_28267;
var statearr_28269_28314 = state_28267__$1;
(statearr_28269_28314[(2)] = inst_28263);

(statearr_28269_28314[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28268 === (20))){
var state_28267__$1 = state_28267;
var statearr_28270_28315 = state_28267__$1;
(statearr_28270_28315[(2)] = null);

(statearr_28270_28315[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28268 === (1))){
var state_28267__$1 = state_28267;
var statearr_28271_28316 = state_28267__$1;
(statearr_28271_28316[(2)] = null);

(statearr_28271_28316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28268 === (24))){
var inst_28246 = (state_28267[(7)]);
var inst_28255 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28246);
var state_28267__$1 = state_28267;
var statearr_28272_28317 = state_28267__$1;
(statearr_28272_28317[(2)] = inst_28255);

(statearr_28272_28317[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28268 === (4))){
var inst_28198 = (state_28267[(8)]);
var inst_28198__$1 = (state_28267[(2)]);
var inst_28199 = (inst_28198__$1 == null);
var state_28267__$1 = (function (){var statearr_28273 = state_28267;
(statearr_28273[(8)] = inst_28198__$1);

return statearr_28273;
})();
if(cljs.core.truth_(inst_28199)){
var statearr_28274_28318 = state_28267__$1;
(statearr_28274_28318[(1)] = (5));

} else {
var statearr_28275_28319 = state_28267__$1;
(statearr_28275_28319[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28268 === (15))){
var inst_28240 = (state_28267[(2)]);
var state_28267__$1 = state_28267;
var statearr_28276_28320 = state_28267__$1;
(statearr_28276_28320[(2)] = inst_28240);

(statearr_28276_28320[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28268 === (21))){
var inst_28260 = (state_28267[(2)]);
var state_28267__$1 = (function (){var statearr_28277 = state_28267;
(statearr_28277[(9)] = inst_28260);

return statearr_28277;
})();
var statearr_28278_28321 = state_28267__$1;
(statearr_28278_28321[(2)] = null);

(statearr_28278_28321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28268 === (13))){
var inst_28222 = (state_28267[(10)]);
var inst_28224 = cljs.core.chunked_seq_QMARK_.call(null,inst_28222);
var state_28267__$1 = state_28267;
if(inst_28224){
var statearr_28279_28322 = state_28267__$1;
(statearr_28279_28322[(1)] = (16));

} else {
var statearr_28280_28323 = state_28267__$1;
(statearr_28280_28323[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28268 === (22))){
var inst_28252 = (state_28267[(2)]);
var state_28267__$1 = state_28267;
if(cljs.core.truth_(inst_28252)){
var statearr_28281_28324 = state_28267__$1;
(statearr_28281_28324[(1)] = (23));

} else {
var statearr_28282_28325 = state_28267__$1;
(statearr_28282_28325[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28268 === (6))){
var inst_28246 = (state_28267[(7)]);
var inst_28248 = (state_28267[(11)]);
var inst_28198 = (state_28267[(8)]);
var inst_28246__$1 = topic_fn.call(null,inst_28198);
var inst_28247 = cljs.core.deref.call(null,mults);
var inst_28248__$1 = cljs.core.get.call(null,inst_28247,inst_28246__$1);
var state_28267__$1 = (function (){var statearr_28283 = state_28267;
(statearr_28283[(7)] = inst_28246__$1);

(statearr_28283[(11)] = inst_28248__$1);

return statearr_28283;
})();
if(cljs.core.truth_(inst_28248__$1)){
var statearr_28284_28326 = state_28267__$1;
(statearr_28284_28326[(1)] = (19));

} else {
var statearr_28285_28327 = state_28267__$1;
(statearr_28285_28327[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28268 === (25))){
var inst_28257 = (state_28267[(2)]);
var state_28267__$1 = state_28267;
var statearr_28286_28328 = state_28267__$1;
(statearr_28286_28328[(2)] = inst_28257);

(statearr_28286_28328[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28268 === (17))){
var inst_28222 = (state_28267[(10)]);
var inst_28231 = cljs.core.first.call(null,inst_28222);
var inst_28232 = cljs.core.async.muxch_STAR_.call(null,inst_28231);
var inst_28233 = cljs.core.async.close_BANG_.call(null,inst_28232);
var inst_28234 = cljs.core.next.call(null,inst_28222);
var inst_28208 = inst_28234;
var inst_28209 = null;
var inst_28210 = (0);
var inst_28211 = (0);
var state_28267__$1 = (function (){var statearr_28287 = state_28267;
(statearr_28287[(12)] = inst_28209);

(statearr_28287[(13)] = inst_28211);

(statearr_28287[(14)] = inst_28210);

(statearr_28287[(15)] = inst_28233);

(statearr_28287[(16)] = inst_28208);

return statearr_28287;
})();
var statearr_28288_28329 = state_28267__$1;
(statearr_28288_28329[(2)] = null);

(statearr_28288_28329[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28268 === (3))){
var inst_28265 = (state_28267[(2)]);
var state_28267__$1 = state_28267;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28267__$1,inst_28265);
} else {
if((state_val_28268 === (12))){
var inst_28242 = (state_28267[(2)]);
var state_28267__$1 = state_28267;
var statearr_28289_28330 = state_28267__$1;
(statearr_28289_28330[(2)] = inst_28242);

(statearr_28289_28330[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28268 === (2))){
var state_28267__$1 = state_28267;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28267__$1,(4),ch);
} else {
if((state_val_28268 === (23))){
var state_28267__$1 = state_28267;
var statearr_28290_28331 = state_28267__$1;
(statearr_28290_28331[(2)] = null);

(statearr_28290_28331[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28268 === (19))){
var inst_28248 = (state_28267[(11)]);
var inst_28198 = (state_28267[(8)]);
var inst_28250 = cljs.core.async.muxch_STAR_.call(null,inst_28248);
var state_28267__$1 = state_28267;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28267__$1,(22),inst_28250,inst_28198);
} else {
if((state_val_28268 === (11))){
var inst_28222 = (state_28267[(10)]);
var inst_28208 = (state_28267[(16)]);
var inst_28222__$1 = cljs.core.seq.call(null,inst_28208);
var state_28267__$1 = (function (){var statearr_28291 = state_28267;
(statearr_28291[(10)] = inst_28222__$1);

return statearr_28291;
})();
if(inst_28222__$1){
var statearr_28292_28332 = state_28267__$1;
(statearr_28292_28332[(1)] = (13));

} else {
var statearr_28293_28333 = state_28267__$1;
(statearr_28293_28333[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28268 === (9))){
var inst_28244 = (state_28267[(2)]);
var state_28267__$1 = state_28267;
var statearr_28294_28334 = state_28267__$1;
(statearr_28294_28334[(2)] = inst_28244);

(statearr_28294_28334[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28268 === (5))){
var inst_28205 = cljs.core.deref.call(null,mults);
var inst_28206 = cljs.core.vals.call(null,inst_28205);
var inst_28207 = cljs.core.seq.call(null,inst_28206);
var inst_28208 = inst_28207;
var inst_28209 = null;
var inst_28210 = (0);
var inst_28211 = (0);
var state_28267__$1 = (function (){var statearr_28295 = state_28267;
(statearr_28295[(12)] = inst_28209);

(statearr_28295[(13)] = inst_28211);

(statearr_28295[(14)] = inst_28210);

(statearr_28295[(16)] = inst_28208);

return statearr_28295;
})();
var statearr_28296_28335 = state_28267__$1;
(statearr_28296_28335[(2)] = null);

(statearr_28296_28335[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28268 === (14))){
var state_28267__$1 = state_28267;
var statearr_28300_28336 = state_28267__$1;
(statearr_28300_28336[(2)] = null);

(statearr_28300_28336[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28268 === (16))){
var inst_28222 = (state_28267[(10)]);
var inst_28226 = cljs.core.chunk_first.call(null,inst_28222);
var inst_28227 = cljs.core.chunk_rest.call(null,inst_28222);
var inst_28228 = cljs.core.count.call(null,inst_28226);
var inst_28208 = inst_28227;
var inst_28209 = inst_28226;
var inst_28210 = inst_28228;
var inst_28211 = (0);
var state_28267__$1 = (function (){var statearr_28301 = state_28267;
(statearr_28301[(12)] = inst_28209);

(statearr_28301[(13)] = inst_28211);

(statearr_28301[(14)] = inst_28210);

(statearr_28301[(16)] = inst_28208);

return statearr_28301;
})();
var statearr_28302_28337 = state_28267__$1;
(statearr_28302_28337[(2)] = null);

(statearr_28302_28337[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28268 === (10))){
var inst_28209 = (state_28267[(12)]);
var inst_28211 = (state_28267[(13)]);
var inst_28210 = (state_28267[(14)]);
var inst_28208 = (state_28267[(16)]);
var inst_28216 = cljs.core._nth.call(null,inst_28209,inst_28211);
var inst_28217 = cljs.core.async.muxch_STAR_.call(null,inst_28216);
var inst_28218 = cljs.core.async.close_BANG_.call(null,inst_28217);
var inst_28219 = (inst_28211 + (1));
var tmp28297 = inst_28209;
var tmp28298 = inst_28210;
var tmp28299 = inst_28208;
var inst_28208__$1 = tmp28299;
var inst_28209__$1 = tmp28297;
var inst_28210__$1 = tmp28298;
var inst_28211__$1 = inst_28219;
var state_28267__$1 = (function (){var statearr_28303 = state_28267;
(statearr_28303[(17)] = inst_28218);

(statearr_28303[(12)] = inst_28209__$1);

(statearr_28303[(13)] = inst_28211__$1);

(statearr_28303[(14)] = inst_28210__$1);

(statearr_28303[(16)] = inst_28208__$1);

return statearr_28303;
})();
var statearr_28304_28338 = state_28267__$1;
(statearr_28304_28338[(2)] = null);

(statearr_28304_28338[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28268 === (18))){
var inst_28237 = (state_28267[(2)]);
var state_28267__$1 = state_28267;
var statearr_28305_28339 = state_28267__$1;
(statearr_28305_28339[(2)] = inst_28237);

(statearr_28305_28339[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28268 === (8))){
var inst_28211 = (state_28267[(13)]);
var inst_28210 = (state_28267[(14)]);
var inst_28213 = (inst_28211 < inst_28210);
var inst_28214 = inst_28213;
var state_28267__$1 = state_28267;
if(cljs.core.truth_(inst_28214)){
var statearr_28306_28340 = state_28267__$1;
(statearr_28306_28340[(1)] = (10));

} else {
var statearr_28307_28341 = state_28267__$1;
(statearr_28307_28341[(1)] = (11));

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
});})(c__27079__auto___28313,mults,ensure_mult,p))
;
return ((function (switch__26989__auto__,c__27079__auto___28313,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__26990__auto__ = null;
var cljs$core$async$state_machine__26990__auto____0 = (function (){
var statearr_28308 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28308[(0)] = cljs$core$async$state_machine__26990__auto__);

(statearr_28308[(1)] = (1));

return statearr_28308;
});
var cljs$core$async$state_machine__26990__auto____1 = (function (state_28267){
while(true){
var ret_value__26991__auto__ = (function (){try{while(true){
var result__26992__auto__ = switch__26989__auto__.call(null,state_28267);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26992__auto__;
}
break;
}
}catch (e28309){if((e28309 instanceof Object)){
var ex__26993__auto__ = e28309;
var statearr_28310_28342 = state_28267;
(statearr_28310_28342[(5)] = ex__26993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28309;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28343 = state_28267;
state_28267 = G__28343;
continue;
} else {
return ret_value__26991__auto__;
}
break;
}
});
cljs$core$async$state_machine__26990__auto__ = function(state_28267){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26990__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26990__auto____1.call(this,state_28267);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26990__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26990__auto____0;
cljs$core$async$state_machine__26990__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26990__auto____1;
return cljs$core$async$state_machine__26990__auto__;
})()
;})(switch__26989__auto__,c__27079__auto___28313,mults,ensure_mult,p))
})();
var state__27081__auto__ = (function (){var statearr_28311 = f__27080__auto__.call(null);
(statearr_28311[(6)] = c__27079__auto___28313);

return statearr_28311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27081__auto__);
});})(c__27079__auto___28313,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__28345 = arguments.length;
switch (G__28345) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__28348 = arguments.length;
switch (G__28348) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__28351 = arguments.length;
switch (G__28351) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__27079__auto___28418 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27079__auto___28418,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27080__auto__ = (function (){var switch__26989__auto__ = ((function (c__27079__auto___28418,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28390){
var state_val_28391 = (state_28390[(1)]);
if((state_val_28391 === (7))){
var state_28390__$1 = state_28390;
var statearr_28392_28419 = state_28390__$1;
(statearr_28392_28419[(2)] = null);

(statearr_28392_28419[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28391 === (1))){
var state_28390__$1 = state_28390;
var statearr_28393_28420 = state_28390__$1;
(statearr_28393_28420[(2)] = null);

(statearr_28393_28420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28391 === (4))){
var inst_28354 = (state_28390[(7)]);
var inst_28356 = (inst_28354 < cnt);
var state_28390__$1 = state_28390;
if(cljs.core.truth_(inst_28356)){
var statearr_28394_28421 = state_28390__$1;
(statearr_28394_28421[(1)] = (6));

} else {
var statearr_28395_28422 = state_28390__$1;
(statearr_28395_28422[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28391 === (15))){
var inst_28386 = (state_28390[(2)]);
var state_28390__$1 = state_28390;
var statearr_28396_28423 = state_28390__$1;
(statearr_28396_28423[(2)] = inst_28386);

(statearr_28396_28423[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28391 === (13))){
var inst_28379 = cljs.core.async.close_BANG_.call(null,out);
var state_28390__$1 = state_28390;
var statearr_28397_28424 = state_28390__$1;
(statearr_28397_28424[(2)] = inst_28379);

(statearr_28397_28424[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28391 === (6))){
var state_28390__$1 = state_28390;
var statearr_28398_28425 = state_28390__$1;
(statearr_28398_28425[(2)] = null);

(statearr_28398_28425[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28391 === (3))){
var inst_28388 = (state_28390[(2)]);
var state_28390__$1 = state_28390;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28390__$1,inst_28388);
} else {
if((state_val_28391 === (12))){
var inst_28376 = (state_28390[(8)]);
var inst_28376__$1 = (state_28390[(2)]);
var inst_28377 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28376__$1);
var state_28390__$1 = (function (){var statearr_28399 = state_28390;
(statearr_28399[(8)] = inst_28376__$1);

return statearr_28399;
})();
if(cljs.core.truth_(inst_28377)){
var statearr_28400_28426 = state_28390__$1;
(statearr_28400_28426[(1)] = (13));

} else {
var statearr_28401_28427 = state_28390__$1;
(statearr_28401_28427[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28391 === (2))){
var inst_28353 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28354 = (0);
var state_28390__$1 = (function (){var statearr_28402 = state_28390;
(statearr_28402[(9)] = inst_28353);

(statearr_28402[(7)] = inst_28354);

return statearr_28402;
})();
var statearr_28403_28428 = state_28390__$1;
(statearr_28403_28428[(2)] = null);

(statearr_28403_28428[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28391 === (11))){
var inst_28354 = (state_28390[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28390,(10),Object,null,(9));
var inst_28363 = chs__$1.call(null,inst_28354);
var inst_28364 = done.call(null,inst_28354);
var inst_28365 = cljs.core.async.take_BANG_.call(null,inst_28363,inst_28364);
var state_28390__$1 = state_28390;
var statearr_28404_28429 = state_28390__$1;
(statearr_28404_28429[(2)] = inst_28365);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28390__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28391 === (9))){
var inst_28354 = (state_28390[(7)]);
var inst_28367 = (state_28390[(2)]);
var inst_28368 = (inst_28354 + (1));
var inst_28354__$1 = inst_28368;
var state_28390__$1 = (function (){var statearr_28405 = state_28390;
(statearr_28405[(10)] = inst_28367);

(statearr_28405[(7)] = inst_28354__$1);

return statearr_28405;
})();
var statearr_28406_28430 = state_28390__$1;
(statearr_28406_28430[(2)] = null);

(statearr_28406_28430[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28391 === (5))){
var inst_28374 = (state_28390[(2)]);
var state_28390__$1 = (function (){var statearr_28407 = state_28390;
(statearr_28407[(11)] = inst_28374);

return statearr_28407;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28390__$1,(12),dchan);
} else {
if((state_val_28391 === (14))){
var inst_28376 = (state_28390[(8)]);
var inst_28381 = cljs.core.apply.call(null,f,inst_28376);
var state_28390__$1 = state_28390;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28390__$1,(16),out,inst_28381);
} else {
if((state_val_28391 === (16))){
var inst_28383 = (state_28390[(2)]);
var state_28390__$1 = (function (){var statearr_28408 = state_28390;
(statearr_28408[(12)] = inst_28383);

return statearr_28408;
})();
var statearr_28409_28431 = state_28390__$1;
(statearr_28409_28431[(2)] = null);

(statearr_28409_28431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28391 === (10))){
var inst_28358 = (state_28390[(2)]);
var inst_28359 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28390__$1 = (function (){var statearr_28410 = state_28390;
(statearr_28410[(13)] = inst_28358);

return statearr_28410;
})();
var statearr_28411_28432 = state_28390__$1;
(statearr_28411_28432[(2)] = inst_28359);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28390__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28391 === (8))){
var inst_28372 = (state_28390[(2)]);
var state_28390__$1 = state_28390;
var statearr_28412_28433 = state_28390__$1;
(statearr_28412_28433[(2)] = inst_28372);

(statearr_28412_28433[(1)] = (5));


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
});})(c__27079__auto___28418,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__26989__auto__,c__27079__auto___28418,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__26990__auto__ = null;
var cljs$core$async$state_machine__26990__auto____0 = (function (){
var statearr_28413 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28413[(0)] = cljs$core$async$state_machine__26990__auto__);

(statearr_28413[(1)] = (1));

return statearr_28413;
});
var cljs$core$async$state_machine__26990__auto____1 = (function (state_28390){
while(true){
var ret_value__26991__auto__ = (function (){try{while(true){
var result__26992__auto__ = switch__26989__auto__.call(null,state_28390);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26992__auto__;
}
break;
}
}catch (e28414){if((e28414 instanceof Object)){
var ex__26993__auto__ = e28414;
var statearr_28415_28434 = state_28390;
(statearr_28415_28434[(5)] = ex__26993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28390);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28414;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28435 = state_28390;
state_28390 = G__28435;
continue;
} else {
return ret_value__26991__auto__;
}
break;
}
});
cljs$core$async$state_machine__26990__auto__ = function(state_28390){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26990__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26990__auto____1.call(this,state_28390);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26990__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26990__auto____0;
cljs$core$async$state_machine__26990__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26990__auto____1;
return cljs$core$async$state_machine__26990__auto__;
})()
;})(switch__26989__auto__,c__27079__auto___28418,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27081__auto__ = (function (){var statearr_28416 = f__27080__auto__.call(null);
(statearr_28416[(6)] = c__27079__auto___28418);

return statearr_28416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27081__auto__);
});})(c__27079__auto___28418,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__28438 = arguments.length;
switch (G__28438) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27079__auto___28492 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27079__auto___28492,out){
return (function (){
var f__27080__auto__ = (function (){var switch__26989__auto__ = ((function (c__27079__auto___28492,out){
return (function (state_28470){
var state_val_28471 = (state_28470[(1)]);
if((state_val_28471 === (7))){
var inst_28450 = (state_28470[(7)]);
var inst_28449 = (state_28470[(8)]);
var inst_28449__$1 = (state_28470[(2)]);
var inst_28450__$1 = cljs.core.nth.call(null,inst_28449__$1,(0),null);
var inst_28451 = cljs.core.nth.call(null,inst_28449__$1,(1),null);
var inst_28452 = (inst_28450__$1 == null);
var state_28470__$1 = (function (){var statearr_28472 = state_28470;
(statearr_28472[(7)] = inst_28450__$1);

(statearr_28472[(9)] = inst_28451);

(statearr_28472[(8)] = inst_28449__$1);

return statearr_28472;
})();
if(cljs.core.truth_(inst_28452)){
var statearr_28473_28493 = state_28470__$1;
(statearr_28473_28493[(1)] = (8));

} else {
var statearr_28474_28494 = state_28470__$1;
(statearr_28474_28494[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28471 === (1))){
var inst_28439 = cljs.core.vec.call(null,chs);
var inst_28440 = inst_28439;
var state_28470__$1 = (function (){var statearr_28475 = state_28470;
(statearr_28475[(10)] = inst_28440);

return statearr_28475;
})();
var statearr_28476_28495 = state_28470__$1;
(statearr_28476_28495[(2)] = null);

(statearr_28476_28495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28471 === (4))){
var inst_28440 = (state_28470[(10)]);
var state_28470__$1 = state_28470;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28470__$1,(7),inst_28440);
} else {
if((state_val_28471 === (6))){
var inst_28466 = (state_28470[(2)]);
var state_28470__$1 = state_28470;
var statearr_28477_28496 = state_28470__$1;
(statearr_28477_28496[(2)] = inst_28466);

(statearr_28477_28496[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28471 === (3))){
var inst_28468 = (state_28470[(2)]);
var state_28470__$1 = state_28470;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28470__$1,inst_28468);
} else {
if((state_val_28471 === (2))){
var inst_28440 = (state_28470[(10)]);
var inst_28442 = cljs.core.count.call(null,inst_28440);
var inst_28443 = (inst_28442 > (0));
var state_28470__$1 = state_28470;
if(cljs.core.truth_(inst_28443)){
var statearr_28479_28497 = state_28470__$1;
(statearr_28479_28497[(1)] = (4));

} else {
var statearr_28480_28498 = state_28470__$1;
(statearr_28480_28498[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28471 === (11))){
var inst_28440 = (state_28470[(10)]);
var inst_28459 = (state_28470[(2)]);
var tmp28478 = inst_28440;
var inst_28440__$1 = tmp28478;
var state_28470__$1 = (function (){var statearr_28481 = state_28470;
(statearr_28481[(11)] = inst_28459);

(statearr_28481[(10)] = inst_28440__$1);

return statearr_28481;
})();
var statearr_28482_28499 = state_28470__$1;
(statearr_28482_28499[(2)] = null);

(statearr_28482_28499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28471 === (9))){
var inst_28450 = (state_28470[(7)]);
var state_28470__$1 = state_28470;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28470__$1,(11),out,inst_28450);
} else {
if((state_val_28471 === (5))){
var inst_28464 = cljs.core.async.close_BANG_.call(null,out);
var state_28470__$1 = state_28470;
var statearr_28483_28500 = state_28470__$1;
(statearr_28483_28500[(2)] = inst_28464);

(statearr_28483_28500[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28471 === (10))){
var inst_28462 = (state_28470[(2)]);
var state_28470__$1 = state_28470;
var statearr_28484_28501 = state_28470__$1;
(statearr_28484_28501[(2)] = inst_28462);

(statearr_28484_28501[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28471 === (8))){
var inst_28440 = (state_28470[(10)]);
var inst_28450 = (state_28470[(7)]);
var inst_28451 = (state_28470[(9)]);
var inst_28449 = (state_28470[(8)]);
var inst_28454 = (function (){var cs = inst_28440;
var vec__28445 = inst_28449;
var v = inst_28450;
var c = inst_28451;
return ((function (cs,vec__28445,v,c,inst_28440,inst_28450,inst_28451,inst_28449,state_val_28471,c__27079__auto___28492,out){
return (function (p1__28436_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28436_SHARP_);
});
;})(cs,vec__28445,v,c,inst_28440,inst_28450,inst_28451,inst_28449,state_val_28471,c__27079__auto___28492,out))
})();
var inst_28455 = cljs.core.filterv.call(null,inst_28454,inst_28440);
var inst_28440__$1 = inst_28455;
var state_28470__$1 = (function (){var statearr_28485 = state_28470;
(statearr_28485[(10)] = inst_28440__$1);

return statearr_28485;
})();
var statearr_28486_28502 = state_28470__$1;
(statearr_28486_28502[(2)] = null);

(statearr_28486_28502[(1)] = (2));


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
});})(c__27079__auto___28492,out))
;
return ((function (switch__26989__auto__,c__27079__auto___28492,out){
return (function() {
var cljs$core$async$state_machine__26990__auto__ = null;
var cljs$core$async$state_machine__26990__auto____0 = (function (){
var statearr_28487 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28487[(0)] = cljs$core$async$state_machine__26990__auto__);

(statearr_28487[(1)] = (1));

return statearr_28487;
});
var cljs$core$async$state_machine__26990__auto____1 = (function (state_28470){
while(true){
var ret_value__26991__auto__ = (function (){try{while(true){
var result__26992__auto__ = switch__26989__auto__.call(null,state_28470);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26992__auto__;
}
break;
}
}catch (e28488){if((e28488 instanceof Object)){
var ex__26993__auto__ = e28488;
var statearr_28489_28503 = state_28470;
(statearr_28489_28503[(5)] = ex__26993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28470);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28488;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28504 = state_28470;
state_28470 = G__28504;
continue;
} else {
return ret_value__26991__auto__;
}
break;
}
});
cljs$core$async$state_machine__26990__auto__ = function(state_28470){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26990__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26990__auto____1.call(this,state_28470);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26990__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26990__auto____0;
cljs$core$async$state_machine__26990__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26990__auto____1;
return cljs$core$async$state_machine__26990__auto__;
})()
;})(switch__26989__auto__,c__27079__auto___28492,out))
})();
var state__27081__auto__ = (function (){var statearr_28490 = f__27080__auto__.call(null);
(statearr_28490[(6)] = c__27079__auto___28492);

return statearr_28490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27081__auto__);
});})(c__27079__auto___28492,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__28506 = arguments.length;
switch (G__28506) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27079__auto___28551 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27079__auto___28551,out){
return (function (){
var f__27080__auto__ = (function (){var switch__26989__auto__ = ((function (c__27079__auto___28551,out){
return (function (state_28530){
var state_val_28531 = (state_28530[(1)]);
if((state_val_28531 === (7))){
var inst_28512 = (state_28530[(7)]);
var inst_28512__$1 = (state_28530[(2)]);
var inst_28513 = (inst_28512__$1 == null);
var inst_28514 = cljs.core.not.call(null,inst_28513);
var state_28530__$1 = (function (){var statearr_28532 = state_28530;
(statearr_28532[(7)] = inst_28512__$1);

return statearr_28532;
})();
if(inst_28514){
var statearr_28533_28552 = state_28530__$1;
(statearr_28533_28552[(1)] = (8));

} else {
var statearr_28534_28553 = state_28530__$1;
(statearr_28534_28553[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (1))){
var inst_28507 = (0);
var state_28530__$1 = (function (){var statearr_28535 = state_28530;
(statearr_28535[(8)] = inst_28507);

return statearr_28535;
})();
var statearr_28536_28554 = state_28530__$1;
(statearr_28536_28554[(2)] = null);

(statearr_28536_28554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (4))){
var state_28530__$1 = state_28530;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28530__$1,(7),ch);
} else {
if((state_val_28531 === (6))){
var inst_28525 = (state_28530[(2)]);
var state_28530__$1 = state_28530;
var statearr_28537_28555 = state_28530__$1;
(statearr_28537_28555[(2)] = inst_28525);

(statearr_28537_28555[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (3))){
var inst_28527 = (state_28530[(2)]);
var inst_28528 = cljs.core.async.close_BANG_.call(null,out);
var state_28530__$1 = (function (){var statearr_28538 = state_28530;
(statearr_28538[(9)] = inst_28527);

return statearr_28538;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28530__$1,inst_28528);
} else {
if((state_val_28531 === (2))){
var inst_28507 = (state_28530[(8)]);
var inst_28509 = (inst_28507 < n);
var state_28530__$1 = state_28530;
if(cljs.core.truth_(inst_28509)){
var statearr_28539_28556 = state_28530__$1;
(statearr_28539_28556[(1)] = (4));

} else {
var statearr_28540_28557 = state_28530__$1;
(statearr_28540_28557[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (11))){
var inst_28507 = (state_28530[(8)]);
var inst_28517 = (state_28530[(2)]);
var inst_28518 = (inst_28507 + (1));
var inst_28507__$1 = inst_28518;
var state_28530__$1 = (function (){var statearr_28541 = state_28530;
(statearr_28541[(8)] = inst_28507__$1);

(statearr_28541[(10)] = inst_28517);

return statearr_28541;
})();
var statearr_28542_28558 = state_28530__$1;
(statearr_28542_28558[(2)] = null);

(statearr_28542_28558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (9))){
var state_28530__$1 = state_28530;
var statearr_28543_28559 = state_28530__$1;
(statearr_28543_28559[(2)] = null);

(statearr_28543_28559[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (5))){
var state_28530__$1 = state_28530;
var statearr_28544_28560 = state_28530__$1;
(statearr_28544_28560[(2)] = null);

(statearr_28544_28560[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (10))){
var inst_28522 = (state_28530[(2)]);
var state_28530__$1 = state_28530;
var statearr_28545_28561 = state_28530__$1;
(statearr_28545_28561[(2)] = inst_28522);

(statearr_28545_28561[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (8))){
var inst_28512 = (state_28530[(7)]);
var state_28530__$1 = state_28530;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28530__$1,(11),out,inst_28512);
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
});})(c__27079__auto___28551,out))
;
return ((function (switch__26989__auto__,c__27079__auto___28551,out){
return (function() {
var cljs$core$async$state_machine__26990__auto__ = null;
var cljs$core$async$state_machine__26990__auto____0 = (function (){
var statearr_28546 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28546[(0)] = cljs$core$async$state_machine__26990__auto__);

(statearr_28546[(1)] = (1));

return statearr_28546;
});
var cljs$core$async$state_machine__26990__auto____1 = (function (state_28530){
while(true){
var ret_value__26991__auto__ = (function (){try{while(true){
var result__26992__auto__ = switch__26989__auto__.call(null,state_28530);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26992__auto__;
}
break;
}
}catch (e28547){if((e28547 instanceof Object)){
var ex__26993__auto__ = e28547;
var statearr_28548_28562 = state_28530;
(statearr_28548_28562[(5)] = ex__26993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28530);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28547;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28563 = state_28530;
state_28530 = G__28563;
continue;
} else {
return ret_value__26991__auto__;
}
break;
}
});
cljs$core$async$state_machine__26990__auto__ = function(state_28530){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26990__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26990__auto____1.call(this,state_28530);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26990__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26990__auto____0;
cljs$core$async$state_machine__26990__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26990__auto____1;
return cljs$core$async$state_machine__26990__auto__;
})()
;})(switch__26989__auto__,c__27079__auto___28551,out))
})();
var state__27081__auto__ = (function (){var statearr_28549 = f__27080__auto__.call(null);
(statearr_28549[(6)] = c__27079__auto___28551);

return statearr_28549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27081__auto__);
});})(c__27079__auto___28551,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28565 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28565 = (function (f,ch,meta28566){
this.f = f;
this.ch = ch;
this.meta28566 = meta28566;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28565.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28567,meta28566__$1){
var self__ = this;
var _28567__$1 = this;
return (new cljs.core.async.t_cljs$core$async28565(self__.f,self__.ch,meta28566__$1));
});

cljs.core.async.t_cljs$core$async28565.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28567){
var self__ = this;
var _28567__$1 = this;
return self__.meta28566;
});

cljs.core.async.t_cljs$core$async28565.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28565.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28565.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28565.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28565.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async28568 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28568 = (function (f,ch,meta28566,_,fn1,meta28569){
this.f = f;
this.ch = ch;
this.meta28566 = meta28566;
this._ = _;
this.fn1 = fn1;
this.meta28569 = meta28569;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28568.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28570,meta28569__$1){
var self__ = this;
var _28570__$1 = this;
return (new cljs.core.async.t_cljs$core$async28568(self__.f,self__.ch,self__.meta28566,self__._,self__.fn1,meta28569__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async28568.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28570){
var self__ = this;
var _28570__$1 = this;
return self__.meta28569;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28568.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28568.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28568.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28568.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28564_SHARP_){
return f1.call(null,(((p1__28564_SHARP_ == null))?null:self__.f.call(null,p1__28564_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async28568.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28566","meta28566",1733522466,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async28565","cljs.core.async/t_cljs$core$async28565",-684720464,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28569","meta28569",-58513695,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28568.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28568.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28568";

cljs.core.async.t_cljs$core$async28568.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28568");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28568.
 */
cljs.core.async.__GT_t_cljs$core$async28568 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28568(f__$1,ch__$1,meta28566__$1,___$2,fn1__$1,meta28569){
return (new cljs.core.async.t_cljs$core$async28568(f__$1,ch__$1,meta28566__$1,___$2,fn1__$1,meta28569));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async28568(self__.f,self__.ch,self__.meta28566,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async28565.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28565.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async28565.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28566","meta28566",1733522466,null)], null);
});

cljs.core.async.t_cljs$core$async28565.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28565.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28565";

cljs.core.async.t_cljs$core$async28565.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28565");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28565.
 */
cljs.core.async.__GT_t_cljs$core$async28565 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28565(f__$1,ch__$1,meta28566){
return (new cljs.core.async.t_cljs$core$async28565(f__$1,ch__$1,meta28566));
});

}

return (new cljs.core.async.t_cljs$core$async28565(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28571 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28571 = (function (f,ch,meta28572){
this.f = f;
this.ch = ch;
this.meta28572 = meta28572;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28571.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28573,meta28572__$1){
var self__ = this;
var _28573__$1 = this;
return (new cljs.core.async.t_cljs$core$async28571(self__.f,self__.ch,meta28572__$1));
});

cljs.core.async.t_cljs$core$async28571.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28573){
var self__ = this;
var _28573__$1 = this;
return self__.meta28572;
});

cljs.core.async.t_cljs$core$async28571.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28571.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28571.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28571.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28571.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28571.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async28571.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28572","meta28572",185418834,null)], null);
});

cljs.core.async.t_cljs$core$async28571.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28571.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28571";

cljs.core.async.t_cljs$core$async28571.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28571");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28571.
 */
cljs.core.async.__GT_t_cljs$core$async28571 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async28571(f__$1,ch__$1,meta28572){
return (new cljs.core.async.t_cljs$core$async28571(f__$1,ch__$1,meta28572));
});

}

return (new cljs.core.async.t_cljs$core$async28571(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async28574 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28574 = (function (p,ch,meta28575){
this.p = p;
this.ch = ch;
this.meta28575 = meta28575;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28574.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28576,meta28575__$1){
var self__ = this;
var _28576__$1 = this;
return (new cljs.core.async.t_cljs$core$async28574(self__.p,self__.ch,meta28575__$1));
});

cljs.core.async.t_cljs$core$async28574.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28576){
var self__ = this;
var _28576__$1 = this;
return self__.meta28575;
});

cljs.core.async.t_cljs$core$async28574.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28574.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28574.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28574.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28574.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28574.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28574.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async28574.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28575","meta28575",-38576816,null)], null);
});

cljs.core.async.t_cljs$core$async28574.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28574.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28574";

cljs.core.async.t_cljs$core$async28574.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28574");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28574.
 */
cljs.core.async.__GT_t_cljs$core$async28574 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28574(p__$1,ch__$1,meta28575){
return (new cljs.core.async.t_cljs$core$async28574(p__$1,ch__$1,meta28575));
});

}

return (new cljs.core.async.t_cljs$core$async28574(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__28578 = arguments.length;
switch (G__28578) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27079__auto___28618 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27079__auto___28618,out){
return (function (){
var f__27080__auto__ = (function (){var switch__26989__auto__ = ((function (c__27079__auto___28618,out){
return (function (state_28599){
var state_val_28600 = (state_28599[(1)]);
if((state_val_28600 === (7))){
var inst_28595 = (state_28599[(2)]);
var state_28599__$1 = state_28599;
var statearr_28601_28619 = state_28599__$1;
(statearr_28601_28619[(2)] = inst_28595);

(statearr_28601_28619[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28600 === (1))){
var state_28599__$1 = state_28599;
var statearr_28602_28620 = state_28599__$1;
(statearr_28602_28620[(2)] = null);

(statearr_28602_28620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28600 === (4))){
var inst_28581 = (state_28599[(7)]);
var inst_28581__$1 = (state_28599[(2)]);
var inst_28582 = (inst_28581__$1 == null);
var state_28599__$1 = (function (){var statearr_28603 = state_28599;
(statearr_28603[(7)] = inst_28581__$1);

return statearr_28603;
})();
if(cljs.core.truth_(inst_28582)){
var statearr_28604_28621 = state_28599__$1;
(statearr_28604_28621[(1)] = (5));

} else {
var statearr_28605_28622 = state_28599__$1;
(statearr_28605_28622[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28600 === (6))){
var inst_28581 = (state_28599[(7)]);
var inst_28586 = p.call(null,inst_28581);
var state_28599__$1 = state_28599;
if(cljs.core.truth_(inst_28586)){
var statearr_28606_28623 = state_28599__$1;
(statearr_28606_28623[(1)] = (8));

} else {
var statearr_28607_28624 = state_28599__$1;
(statearr_28607_28624[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28600 === (3))){
var inst_28597 = (state_28599[(2)]);
var state_28599__$1 = state_28599;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28599__$1,inst_28597);
} else {
if((state_val_28600 === (2))){
var state_28599__$1 = state_28599;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28599__$1,(4),ch);
} else {
if((state_val_28600 === (11))){
var inst_28589 = (state_28599[(2)]);
var state_28599__$1 = state_28599;
var statearr_28608_28625 = state_28599__$1;
(statearr_28608_28625[(2)] = inst_28589);

(statearr_28608_28625[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28600 === (9))){
var state_28599__$1 = state_28599;
var statearr_28609_28626 = state_28599__$1;
(statearr_28609_28626[(2)] = null);

(statearr_28609_28626[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28600 === (5))){
var inst_28584 = cljs.core.async.close_BANG_.call(null,out);
var state_28599__$1 = state_28599;
var statearr_28610_28627 = state_28599__$1;
(statearr_28610_28627[(2)] = inst_28584);

(statearr_28610_28627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28600 === (10))){
var inst_28592 = (state_28599[(2)]);
var state_28599__$1 = (function (){var statearr_28611 = state_28599;
(statearr_28611[(8)] = inst_28592);

return statearr_28611;
})();
var statearr_28612_28628 = state_28599__$1;
(statearr_28612_28628[(2)] = null);

(statearr_28612_28628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28600 === (8))){
var inst_28581 = (state_28599[(7)]);
var state_28599__$1 = state_28599;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28599__$1,(11),out,inst_28581);
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
});})(c__27079__auto___28618,out))
;
return ((function (switch__26989__auto__,c__27079__auto___28618,out){
return (function() {
var cljs$core$async$state_machine__26990__auto__ = null;
var cljs$core$async$state_machine__26990__auto____0 = (function (){
var statearr_28613 = [null,null,null,null,null,null,null,null,null];
(statearr_28613[(0)] = cljs$core$async$state_machine__26990__auto__);

(statearr_28613[(1)] = (1));

return statearr_28613;
});
var cljs$core$async$state_machine__26990__auto____1 = (function (state_28599){
while(true){
var ret_value__26991__auto__ = (function (){try{while(true){
var result__26992__auto__ = switch__26989__auto__.call(null,state_28599);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26992__auto__;
}
break;
}
}catch (e28614){if((e28614 instanceof Object)){
var ex__26993__auto__ = e28614;
var statearr_28615_28629 = state_28599;
(statearr_28615_28629[(5)] = ex__26993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28599);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28614;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28630 = state_28599;
state_28599 = G__28630;
continue;
} else {
return ret_value__26991__auto__;
}
break;
}
});
cljs$core$async$state_machine__26990__auto__ = function(state_28599){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26990__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26990__auto____1.call(this,state_28599);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26990__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26990__auto____0;
cljs$core$async$state_machine__26990__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26990__auto____1;
return cljs$core$async$state_machine__26990__auto__;
})()
;})(switch__26989__auto__,c__27079__auto___28618,out))
})();
var state__27081__auto__ = (function (){var statearr_28616 = f__27080__auto__.call(null);
(statearr_28616[(6)] = c__27079__auto___28618);

return statearr_28616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27081__auto__);
});})(c__27079__auto___28618,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__28632 = arguments.length;
switch (G__28632) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__27079__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27079__auto__){
return (function (){
var f__27080__auto__ = (function (){var switch__26989__auto__ = ((function (c__27079__auto__){
return (function (state_28695){
var state_val_28696 = (state_28695[(1)]);
if((state_val_28696 === (7))){
var inst_28691 = (state_28695[(2)]);
var state_28695__$1 = state_28695;
var statearr_28697_28735 = state_28695__$1;
(statearr_28697_28735[(2)] = inst_28691);

(statearr_28697_28735[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28696 === (20))){
var inst_28661 = (state_28695[(7)]);
var inst_28672 = (state_28695[(2)]);
var inst_28673 = cljs.core.next.call(null,inst_28661);
var inst_28647 = inst_28673;
var inst_28648 = null;
var inst_28649 = (0);
var inst_28650 = (0);
var state_28695__$1 = (function (){var statearr_28698 = state_28695;
(statearr_28698[(8)] = inst_28648);

(statearr_28698[(9)] = inst_28647);

(statearr_28698[(10)] = inst_28650);

(statearr_28698[(11)] = inst_28649);

(statearr_28698[(12)] = inst_28672);

return statearr_28698;
})();
var statearr_28699_28736 = state_28695__$1;
(statearr_28699_28736[(2)] = null);

(statearr_28699_28736[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28696 === (1))){
var state_28695__$1 = state_28695;
var statearr_28700_28737 = state_28695__$1;
(statearr_28700_28737[(2)] = null);

(statearr_28700_28737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28696 === (4))){
var inst_28636 = (state_28695[(13)]);
var inst_28636__$1 = (state_28695[(2)]);
var inst_28637 = (inst_28636__$1 == null);
var state_28695__$1 = (function (){var statearr_28701 = state_28695;
(statearr_28701[(13)] = inst_28636__$1);

return statearr_28701;
})();
if(cljs.core.truth_(inst_28637)){
var statearr_28702_28738 = state_28695__$1;
(statearr_28702_28738[(1)] = (5));

} else {
var statearr_28703_28739 = state_28695__$1;
(statearr_28703_28739[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28696 === (15))){
var state_28695__$1 = state_28695;
var statearr_28707_28740 = state_28695__$1;
(statearr_28707_28740[(2)] = null);

(statearr_28707_28740[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28696 === (21))){
var state_28695__$1 = state_28695;
var statearr_28708_28741 = state_28695__$1;
(statearr_28708_28741[(2)] = null);

(statearr_28708_28741[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28696 === (13))){
var inst_28648 = (state_28695[(8)]);
var inst_28647 = (state_28695[(9)]);
var inst_28650 = (state_28695[(10)]);
var inst_28649 = (state_28695[(11)]);
var inst_28657 = (state_28695[(2)]);
var inst_28658 = (inst_28650 + (1));
var tmp28704 = inst_28648;
var tmp28705 = inst_28647;
var tmp28706 = inst_28649;
var inst_28647__$1 = tmp28705;
var inst_28648__$1 = tmp28704;
var inst_28649__$1 = tmp28706;
var inst_28650__$1 = inst_28658;
var state_28695__$1 = (function (){var statearr_28709 = state_28695;
(statearr_28709[(8)] = inst_28648__$1);

(statearr_28709[(9)] = inst_28647__$1);

(statearr_28709[(10)] = inst_28650__$1);

(statearr_28709[(11)] = inst_28649__$1);

(statearr_28709[(14)] = inst_28657);

return statearr_28709;
})();
var statearr_28710_28742 = state_28695__$1;
(statearr_28710_28742[(2)] = null);

(statearr_28710_28742[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28696 === (22))){
var state_28695__$1 = state_28695;
var statearr_28711_28743 = state_28695__$1;
(statearr_28711_28743[(2)] = null);

(statearr_28711_28743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28696 === (6))){
var inst_28636 = (state_28695[(13)]);
var inst_28645 = f.call(null,inst_28636);
var inst_28646 = cljs.core.seq.call(null,inst_28645);
var inst_28647 = inst_28646;
var inst_28648 = null;
var inst_28649 = (0);
var inst_28650 = (0);
var state_28695__$1 = (function (){var statearr_28712 = state_28695;
(statearr_28712[(8)] = inst_28648);

(statearr_28712[(9)] = inst_28647);

(statearr_28712[(10)] = inst_28650);

(statearr_28712[(11)] = inst_28649);

return statearr_28712;
})();
var statearr_28713_28744 = state_28695__$1;
(statearr_28713_28744[(2)] = null);

(statearr_28713_28744[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28696 === (17))){
var inst_28661 = (state_28695[(7)]);
var inst_28665 = cljs.core.chunk_first.call(null,inst_28661);
var inst_28666 = cljs.core.chunk_rest.call(null,inst_28661);
var inst_28667 = cljs.core.count.call(null,inst_28665);
var inst_28647 = inst_28666;
var inst_28648 = inst_28665;
var inst_28649 = inst_28667;
var inst_28650 = (0);
var state_28695__$1 = (function (){var statearr_28714 = state_28695;
(statearr_28714[(8)] = inst_28648);

(statearr_28714[(9)] = inst_28647);

(statearr_28714[(10)] = inst_28650);

(statearr_28714[(11)] = inst_28649);

return statearr_28714;
})();
var statearr_28715_28745 = state_28695__$1;
(statearr_28715_28745[(2)] = null);

(statearr_28715_28745[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28696 === (3))){
var inst_28693 = (state_28695[(2)]);
var state_28695__$1 = state_28695;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28695__$1,inst_28693);
} else {
if((state_val_28696 === (12))){
var inst_28681 = (state_28695[(2)]);
var state_28695__$1 = state_28695;
var statearr_28716_28746 = state_28695__$1;
(statearr_28716_28746[(2)] = inst_28681);

(statearr_28716_28746[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28696 === (2))){
var state_28695__$1 = state_28695;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28695__$1,(4),in$);
} else {
if((state_val_28696 === (23))){
var inst_28689 = (state_28695[(2)]);
var state_28695__$1 = state_28695;
var statearr_28717_28747 = state_28695__$1;
(statearr_28717_28747[(2)] = inst_28689);

(statearr_28717_28747[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28696 === (19))){
var inst_28676 = (state_28695[(2)]);
var state_28695__$1 = state_28695;
var statearr_28718_28748 = state_28695__$1;
(statearr_28718_28748[(2)] = inst_28676);

(statearr_28718_28748[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28696 === (11))){
var inst_28647 = (state_28695[(9)]);
var inst_28661 = (state_28695[(7)]);
var inst_28661__$1 = cljs.core.seq.call(null,inst_28647);
var state_28695__$1 = (function (){var statearr_28719 = state_28695;
(statearr_28719[(7)] = inst_28661__$1);

return statearr_28719;
})();
if(inst_28661__$1){
var statearr_28720_28749 = state_28695__$1;
(statearr_28720_28749[(1)] = (14));

} else {
var statearr_28721_28750 = state_28695__$1;
(statearr_28721_28750[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28696 === (9))){
var inst_28683 = (state_28695[(2)]);
var inst_28684 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28695__$1 = (function (){var statearr_28722 = state_28695;
(statearr_28722[(15)] = inst_28683);

return statearr_28722;
})();
if(cljs.core.truth_(inst_28684)){
var statearr_28723_28751 = state_28695__$1;
(statearr_28723_28751[(1)] = (21));

} else {
var statearr_28724_28752 = state_28695__$1;
(statearr_28724_28752[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28696 === (5))){
var inst_28639 = cljs.core.async.close_BANG_.call(null,out);
var state_28695__$1 = state_28695;
var statearr_28725_28753 = state_28695__$1;
(statearr_28725_28753[(2)] = inst_28639);

(statearr_28725_28753[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28696 === (14))){
var inst_28661 = (state_28695[(7)]);
var inst_28663 = cljs.core.chunked_seq_QMARK_.call(null,inst_28661);
var state_28695__$1 = state_28695;
if(inst_28663){
var statearr_28726_28754 = state_28695__$1;
(statearr_28726_28754[(1)] = (17));

} else {
var statearr_28727_28755 = state_28695__$1;
(statearr_28727_28755[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28696 === (16))){
var inst_28679 = (state_28695[(2)]);
var state_28695__$1 = state_28695;
var statearr_28728_28756 = state_28695__$1;
(statearr_28728_28756[(2)] = inst_28679);

(statearr_28728_28756[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28696 === (10))){
var inst_28648 = (state_28695[(8)]);
var inst_28650 = (state_28695[(10)]);
var inst_28655 = cljs.core._nth.call(null,inst_28648,inst_28650);
var state_28695__$1 = state_28695;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28695__$1,(13),out,inst_28655);
} else {
if((state_val_28696 === (18))){
var inst_28661 = (state_28695[(7)]);
var inst_28670 = cljs.core.first.call(null,inst_28661);
var state_28695__$1 = state_28695;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28695__$1,(20),out,inst_28670);
} else {
if((state_val_28696 === (8))){
var inst_28650 = (state_28695[(10)]);
var inst_28649 = (state_28695[(11)]);
var inst_28652 = (inst_28650 < inst_28649);
var inst_28653 = inst_28652;
var state_28695__$1 = state_28695;
if(cljs.core.truth_(inst_28653)){
var statearr_28729_28757 = state_28695__$1;
(statearr_28729_28757[(1)] = (10));

} else {
var statearr_28730_28758 = state_28695__$1;
(statearr_28730_28758[(1)] = (11));

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
});})(c__27079__auto__))
;
return ((function (switch__26989__auto__,c__27079__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__26990__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26990__auto____0 = (function (){
var statearr_28731 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28731[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26990__auto__);

(statearr_28731[(1)] = (1));

return statearr_28731;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26990__auto____1 = (function (state_28695){
while(true){
var ret_value__26991__auto__ = (function (){try{while(true){
var result__26992__auto__ = switch__26989__auto__.call(null,state_28695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26992__auto__;
}
break;
}
}catch (e28732){if((e28732 instanceof Object)){
var ex__26993__auto__ = e28732;
var statearr_28733_28759 = state_28695;
(statearr_28733_28759[(5)] = ex__26993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28732;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28760 = state_28695;
state_28695 = G__28760;
continue;
} else {
return ret_value__26991__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26990__auto__ = function(state_28695){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26990__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26990__auto____1.call(this,state_28695);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__26990__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26990__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26990__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26990__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26990__auto__;
})()
;})(switch__26989__auto__,c__27079__auto__))
})();
var state__27081__auto__ = (function (){var statearr_28734 = f__27080__auto__.call(null);
(statearr_28734[(6)] = c__27079__auto__);

return statearr_28734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27081__auto__);
});})(c__27079__auto__))
);

return c__27079__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__28762 = arguments.length;
switch (G__28762) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__28765 = arguments.length;
switch (G__28765) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__28768 = arguments.length;
switch (G__28768) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27079__auto___28815 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27079__auto___28815,out){
return (function (){
var f__27080__auto__ = (function (){var switch__26989__auto__ = ((function (c__27079__auto___28815,out){
return (function (state_28792){
var state_val_28793 = (state_28792[(1)]);
if((state_val_28793 === (7))){
var inst_28787 = (state_28792[(2)]);
var state_28792__$1 = state_28792;
var statearr_28794_28816 = state_28792__$1;
(statearr_28794_28816[(2)] = inst_28787);

(statearr_28794_28816[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28793 === (1))){
var inst_28769 = null;
var state_28792__$1 = (function (){var statearr_28795 = state_28792;
(statearr_28795[(7)] = inst_28769);

return statearr_28795;
})();
var statearr_28796_28817 = state_28792__$1;
(statearr_28796_28817[(2)] = null);

(statearr_28796_28817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28793 === (4))){
var inst_28772 = (state_28792[(8)]);
var inst_28772__$1 = (state_28792[(2)]);
var inst_28773 = (inst_28772__$1 == null);
var inst_28774 = cljs.core.not.call(null,inst_28773);
var state_28792__$1 = (function (){var statearr_28797 = state_28792;
(statearr_28797[(8)] = inst_28772__$1);

return statearr_28797;
})();
if(inst_28774){
var statearr_28798_28818 = state_28792__$1;
(statearr_28798_28818[(1)] = (5));

} else {
var statearr_28799_28819 = state_28792__$1;
(statearr_28799_28819[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28793 === (6))){
var state_28792__$1 = state_28792;
var statearr_28800_28820 = state_28792__$1;
(statearr_28800_28820[(2)] = null);

(statearr_28800_28820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28793 === (3))){
var inst_28789 = (state_28792[(2)]);
var inst_28790 = cljs.core.async.close_BANG_.call(null,out);
var state_28792__$1 = (function (){var statearr_28801 = state_28792;
(statearr_28801[(9)] = inst_28789);

return statearr_28801;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28792__$1,inst_28790);
} else {
if((state_val_28793 === (2))){
var state_28792__$1 = state_28792;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28792__$1,(4),ch);
} else {
if((state_val_28793 === (11))){
var inst_28772 = (state_28792[(8)]);
var inst_28781 = (state_28792[(2)]);
var inst_28769 = inst_28772;
var state_28792__$1 = (function (){var statearr_28802 = state_28792;
(statearr_28802[(7)] = inst_28769);

(statearr_28802[(10)] = inst_28781);

return statearr_28802;
})();
var statearr_28803_28821 = state_28792__$1;
(statearr_28803_28821[(2)] = null);

(statearr_28803_28821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28793 === (9))){
var inst_28772 = (state_28792[(8)]);
var state_28792__$1 = state_28792;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28792__$1,(11),out,inst_28772);
} else {
if((state_val_28793 === (5))){
var inst_28769 = (state_28792[(7)]);
var inst_28772 = (state_28792[(8)]);
var inst_28776 = cljs.core._EQ_.call(null,inst_28772,inst_28769);
var state_28792__$1 = state_28792;
if(inst_28776){
var statearr_28805_28822 = state_28792__$1;
(statearr_28805_28822[(1)] = (8));

} else {
var statearr_28806_28823 = state_28792__$1;
(statearr_28806_28823[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28793 === (10))){
var inst_28784 = (state_28792[(2)]);
var state_28792__$1 = state_28792;
var statearr_28807_28824 = state_28792__$1;
(statearr_28807_28824[(2)] = inst_28784);

(statearr_28807_28824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28793 === (8))){
var inst_28769 = (state_28792[(7)]);
var tmp28804 = inst_28769;
var inst_28769__$1 = tmp28804;
var state_28792__$1 = (function (){var statearr_28808 = state_28792;
(statearr_28808[(7)] = inst_28769__$1);

return statearr_28808;
})();
var statearr_28809_28825 = state_28792__$1;
(statearr_28809_28825[(2)] = null);

(statearr_28809_28825[(1)] = (2));


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
});})(c__27079__auto___28815,out))
;
return ((function (switch__26989__auto__,c__27079__auto___28815,out){
return (function() {
var cljs$core$async$state_machine__26990__auto__ = null;
var cljs$core$async$state_machine__26990__auto____0 = (function (){
var statearr_28810 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28810[(0)] = cljs$core$async$state_machine__26990__auto__);

(statearr_28810[(1)] = (1));

return statearr_28810;
});
var cljs$core$async$state_machine__26990__auto____1 = (function (state_28792){
while(true){
var ret_value__26991__auto__ = (function (){try{while(true){
var result__26992__auto__ = switch__26989__auto__.call(null,state_28792);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26992__auto__;
}
break;
}
}catch (e28811){if((e28811 instanceof Object)){
var ex__26993__auto__ = e28811;
var statearr_28812_28826 = state_28792;
(statearr_28812_28826[(5)] = ex__26993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28792);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28811;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28827 = state_28792;
state_28792 = G__28827;
continue;
} else {
return ret_value__26991__auto__;
}
break;
}
});
cljs$core$async$state_machine__26990__auto__ = function(state_28792){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26990__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26990__auto____1.call(this,state_28792);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26990__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26990__auto____0;
cljs$core$async$state_machine__26990__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26990__auto____1;
return cljs$core$async$state_machine__26990__auto__;
})()
;})(switch__26989__auto__,c__27079__auto___28815,out))
})();
var state__27081__auto__ = (function (){var statearr_28813 = f__27080__auto__.call(null);
(statearr_28813[(6)] = c__27079__auto___28815);

return statearr_28813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27081__auto__);
});})(c__27079__auto___28815,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__28829 = arguments.length;
switch (G__28829) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27079__auto___28895 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27079__auto___28895,out){
return (function (){
var f__27080__auto__ = (function (){var switch__26989__auto__ = ((function (c__27079__auto___28895,out){
return (function (state_28867){
var state_val_28868 = (state_28867[(1)]);
if((state_val_28868 === (7))){
var inst_28863 = (state_28867[(2)]);
var state_28867__$1 = state_28867;
var statearr_28869_28896 = state_28867__$1;
(statearr_28869_28896[(2)] = inst_28863);

(statearr_28869_28896[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28868 === (1))){
var inst_28830 = (new Array(n));
var inst_28831 = inst_28830;
var inst_28832 = (0);
var state_28867__$1 = (function (){var statearr_28870 = state_28867;
(statearr_28870[(7)] = inst_28831);

(statearr_28870[(8)] = inst_28832);

return statearr_28870;
})();
var statearr_28871_28897 = state_28867__$1;
(statearr_28871_28897[(2)] = null);

(statearr_28871_28897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28868 === (4))){
var inst_28835 = (state_28867[(9)]);
var inst_28835__$1 = (state_28867[(2)]);
var inst_28836 = (inst_28835__$1 == null);
var inst_28837 = cljs.core.not.call(null,inst_28836);
var state_28867__$1 = (function (){var statearr_28872 = state_28867;
(statearr_28872[(9)] = inst_28835__$1);

return statearr_28872;
})();
if(inst_28837){
var statearr_28873_28898 = state_28867__$1;
(statearr_28873_28898[(1)] = (5));

} else {
var statearr_28874_28899 = state_28867__$1;
(statearr_28874_28899[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28868 === (15))){
var inst_28857 = (state_28867[(2)]);
var state_28867__$1 = state_28867;
var statearr_28875_28900 = state_28867__$1;
(statearr_28875_28900[(2)] = inst_28857);

(statearr_28875_28900[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28868 === (13))){
var state_28867__$1 = state_28867;
var statearr_28876_28901 = state_28867__$1;
(statearr_28876_28901[(2)] = null);

(statearr_28876_28901[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28868 === (6))){
var inst_28832 = (state_28867[(8)]);
var inst_28853 = (inst_28832 > (0));
var state_28867__$1 = state_28867;
if(cljs.core.truth_(inst_28853)){
var statearr_28877_28902 = state_28867__$1;
(statearr_28877_28902[(1)] = (12));

} else {
var statearr_28878_28903 = state_28867__$1;
(statearr_28878_28903[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28868 === (3))){
var inst_28865 = (state_28867[(2)]);
var state_28867__$1 = state_28867;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28867__$1,inst_28865);
} else {
if((state_val_28868 === (12))){
var inst_28831 = (state_28867[(7)]);
var inst_28855 = cljs.core.vec.call(null,inst_28831);
var state_28867__$1 = state_28867;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28867__$1,(15),out,inst_28855);
} else {
if((state_val_28868 === (2))){
var state_28867__$1 = state_28867;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28867__$1,(4),ch);
} else {
if((state_val_28868 === (11))){
var inst_28847 = (state_28867[(2)]);
var inst_28848 = (new Array(n));
var inst_28831 = inst_28848;
var inst_28832 = (0);
var state_28867__$1 = (function (){var statearr_28879 = state_28867;
(statearr_28879[(7)] = inst_28831);

(statearr_28879[(8)] = inst_28832);

(statearr_28879[(10)] = inst_28847);

return statearr_28879;
})();
var statearr_28880_28904 = state_28867__$1;
(statearr_28880_28904[(2)] = null);

(statearr_28880_28904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28868 === (9))){
var inst_28831 = (state_28867[(7)]);
var inst_28845 = cljs.core.vec.call(null,inst_28831);
var state_28867__$1 = state_28867;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28867__$1,(11),out,inst_28845);
} else {
if((state_val_28868 === (5))){
var inst_28831 = (state_28867[(7)]);
var inst_28840 = (state_28867[(11)]);
var inst_28835 = (state_28867[(9)]);
var inst_28832 = (state_28867[(8)]);
var inst_28839 = (inst_28831[inst_28832] = inst_28835);
var inst_28840__$1 = (inst_28832 + (1));
var inst_28841 = (inst_28840__$1 < n);
var state_28867__$1 = (function (){var statearr_28881 = state_28867;
(statearr_28881[(12)] = inst_28839);

(statearr_28881[(11)] = inst_28840__$1);

return statearr_28881;
})();
if(cljs.core.truth_(inst_28841)){
var statearr_28882_28905 = state_28867__$1;
(statearr_28882_28905[(1)] = (8));

} else {
var statearr_28883_28906 = state_28867__$1;
(statearr_28883_28906[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28868 === (14))){
var inst_28860 = (state_28867[(2)]);
var inst_28861 = cljs.core.async.close_BANG_.call(null,out);
var state_28867__$1 = (function (){var statearr_28885 = state_28867;
(statearr_28885[(13)] = inst_28860);

return statearr_28885;
})();
var statearr_28886_28907 = state_28867__$1;
(statearr_28886_28907[(2)] = inst_28861);

(statearr_28886_28907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28868 === (10))){
var inst_28851 = (state_28867[(2)]);
var state_28867__$1 = state_28867;
var statearr_28887_28908 = state_28867__$1;
(statearr_28887_28908[(2)] = inst_28851);

(statearr_28887_28908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28868 === (8))){
var inst_28831 = (state_28867[(7)]);
var inst_28840 = (state_28867[(11)]);
var tmp28884 = inst_28831;
var inst_28831__$1 = tmp28884;
var inst_28832 = inst_28840;
var state_28867__$1 = (function (){var statearr_28888 = state_28867;
(statearr_28888[(7)] = inst_28831__$1);

(statearr_28888[(8)] = inst_28832);

return statearr_28888;
})();
var statearr_28889_28909 = state_28867__$1;
(statearr_28889_28909[(2)] = null);

(statearr_28889_28909[(1)] = (2));


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
});})(c__27079__auto___28895,out))
;
return ((function (switch__26989__auto__,c__27079__auto___28895,out){
return (function() {
var cljs$core$async$state_machine__26990__auto__ = null;
var cljs$core$async$state_machine__26990__auto____0 = (function (){
var statearr_28890 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28890[(0)] = cljs$core$async$state_machine__26990__auto__);

(statearr_28890[(1)] = (1));

return statearr_28890;
});
var cljs$core$async$state_machine__26990__auto____1 = (function (state_28867){
while(true){
var ret_value__26991__auto__ = (function (){try{while(true){
var result__26992__auto__ = switch__26989__auto__.call(null,state_28867);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26992__auto__;
}
break;
}
}catch (e28891){if((e28891 instanceof Object)){
var ex__26993__auto__ = e28891;
var statearr_28892_28910 = state_28867;
(statearr_28892_28910[(5)] = ex__26993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28867);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28891;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28911 = state_28867;
state_28867 = G__28911;
continue;
} else {
return ret_value__26991__auto__;
}
break;
}
});
cljs$core$async$state_machine__26990__auto__ = function(state_28867){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26990__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26990__auto____1.call(this,state_28867);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26990__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26990__auto____0;
cljs$core$async$state_machine__26990__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26990__auto____1;
return cljs$core$async$state_machine__26990__auto__;
})()
;})(switch__26989__auto__,c__27079__auto___28895,out))
})();
var state__27081__auto__ = (function (){var statearr_28893 = f__27080__auto__.call(null);
(statearr_28893[(6)] = c__27079__auto___28895);

return statearr_28893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27081__auto__);
});})(c__27079__auto___28895,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__28913 = arguments.length;
switch (G__28913) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27079__auto___28983 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27079__auto___28983,out){
return (function (){
var f__27080__auto__ = (function (){var switch__26989__auto__ = ((function (c__27079__auto___28983,out){
return (function (state_28955){
var state_val_28956 = (state_28955[(1)]);
if((state_val_28956 === (7))){
var inst_28951 = (state_28955[(2)]);
var state_28955__$1 = state_28955;
var statearr_28957_28984 = state_28955__$1;
(statearr_28957_28984[(2)] = inst_28951);

(statearr_28957_28984[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28956 === (1))){
var inst_28914 = [];
var inst_28915 = inst_28914;
var inst_28916 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28955__$1 = (function (){var statearr_28958 = state_28955;
(statearr_28958[(7)] = inst_28915);

(statearr_28958[(8)] = inst_28916);

return statearr_28958;
})();
var statearr_28959_28985 = state_28955__$1;
(statearr_28959_28985[(2)] = null);

(statearr_28959_28985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28956 === (4))){
var inst_28919 = (state_28955[(9)]);
var inst_28919__$1 = (state_28955[(2)]);
var inst_28920 = (inst_28919__$1 == null);
var inst_28921 = cljs.core.not.call(null,inst_28920);
var state_28955__$1 = (function (){var statearr_28960 = state_28955;
(statearr_28960[(9)] = inst_28919__$1);

return statearr_28960;
})();
if(inst_28921){
var statearr_28961_28986 = state_28955__$1;
(statearr_28961_28986[(1)] = (5));

} else {
var statearr_28962_28987 = state_28955__$1;
(statearr_28962_28987[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28956 === (15))){
var inst_28945 = (state_28955[(2)]);
var state_28955__$1 = state_28955;
var statearr_28963_28988 = state_28955__$1;
(statearr_28963_28988[(2)] = inst_28945);

(statearr_28963_28988[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28956 === (13))){
var state_28955__$1 = state_28955;
var statearr_28964_28989 = state_28955__$1;
(statearr_28964_28989[(2)] = null);

(statearr_28964_28989[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28956 === (6))){
var inst_28915 = (state_28955[(7)]);
var inst_28940 = inst_28915.length;
var inst_28941 = (inst_28940 > (0));
var state_28955__$1 = state_28955;
if(cljs.core.truth_(inst_28941)){
var statearr_28965_28990 = state_28955__$1;
(statearr_28965_28990[(1)] = (12));

} else {
var statearr_28966_28991 = state_28955__$1;
(statearr_28966_28991[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28956 === (3))){
var inst_28953 = (state_28955[(2)]);
var state_28955__$1 = state_28955;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28955__$1,inst_28953);
} else {
if((state_val_28956 === (12))){
var inst_28915 = (state_28955[(7)]);
var inst_28943 = cljs.core.vec.call(null,inst_28915);
var state_28955__$1 = state_28955;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28955__$1,(15),out,inst_28943);
} else {
if((state_val_28956 === (2))){
var state_28955__$1 = state_28955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28955__$1,(4),ch);
} else {
if((state_val_28956 === (11))){
var inst_28923 = (state_28955[(10)]);
var inst_28919 = (state_28955[(9)]);
var inst_28933 = (state_28955[(2)]);
var inst_28934 = [];
var inst_28935 = inst_28934.push(inst_28919);
var inst_28915 = inst_28934;
var inst_28916 = inst_28923;
var state_28955__$1 = (function (){var statearr_28967 = state_28955;
(statearr_28967[(11)] = inst_28935);

(statearr_28967[(7)] = inst_28915);

(statearr_28967[(8)] = inst_28916);

(statearr_28967[(12)] = inst_28933);

return statearr_28967;
})();
var statearr_28968_28992 = state_28955__$1;
(statearr_28968_28992[(2)] = null);

(statearr_28968_28992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28956 === (9))){
var inst_28915 = (state_28955[(7)]);
var inst_28931 = cljs.core.vec.call(null,inst_28915);
var state_28955__$1 = state_28955;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28955__$1,(11),out,inst_28931);
} else {
if((state_val_28956 === (5))){
var inst_28923 = (state_28955[(10)]);
var inst_28919 = (state_28955[(9)]);
var inst_28916 = (state_28955[(8)]);
var inst_28923__$1 = f.call(null,inst_28919);
var inst_28924 = cljs.core._EQ_.call(null,inst_28923__$1,inst_28916);
var inst_28925 = cljs.core.keyword_identical_QMARK_.call(null,inst_28916,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28926 = ((inst_28924) || (inst_28925));
var state_28955__$1 = (function (){var statearr_28969 = state_28955;
(statearr_28969[(10)] = inst_28923__$1);

return statearr_28969;
})();
if(cljs.core.truth_(inst_28926)){
var statearr_28970_28993 = state_28955__$1;
(statearr_28970_28993[(1)] = (8));

} else {
var statearr_28971_28994 = state_28955__$1;
(statearr_28971_28994[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28956 === (14))){
var inst_28948 = (state_28955[(2)]);
var inst_28949 = cljs.core.async.close_BANG_.call(null,out);
var state_28955__$1 = (function (){var statearr_28973 = state_28955;
(statearr_28973[(13)] = inst_28948);

return statearr_28973;
})();
var statearr_28974_28995 = state_28955__$1;
(statearr_28974_28995[(2)] = inst_28949);

(statearr_28974_28995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28956 === (10))){
var inst_28938 = (state_28955[(2)]);
var state_28955__$1 = state_28955;
var statearr_28975_28996 = state_28955__$1;
(statearr_28975_28996[(2)] = inst_28938);

(statearr_28975_28996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28956 === (8))){
var inst_28923 = (state_28955[(10)]);
var inst_28919 = (state_28955[(9)]);
var inst_28915 = (state_28955[(7)]);
var inst_28928 = inst_28915.push(inst_28919);
var tmp28972 = inst_28915;
var inst_28915__$1 = tmp28972;
var inst_28916 = inst_28923;
var state_28955__$1 = (function (){var statearr_28976 = state_28955;
(statearr_28976[(7)] = inst_28915__$1);

(statearr_28976[(14)] = inst_28928);

(statearr_28976[(8)] = inst_28916);

return statearr_28976;
})();
var statearr_28977_28997 = state_28955__$1;
(statearr_28977_28997[(2)] = null);

(statearr_28977_28997[(1)] = (2));


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
});})(c__27079__auto___28983,out))
;
return ((function (switch__26989__auto__,c__27079__auto___28983,out){
return (function() {
var cljs$core$async$state_machine__26990__auto__ = null;
var cljs$core$async$state_machine__26990__auto____0 = (function (){
var statearr_28978 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28978[(0)] = cljs$core$async$state_machine__26990__auto__);

(statearr_28978[(1)] = (1));

return statearr_28978;
});
var cljs$core$async$state_machine__26990__auto____1 = (function (state_28955){
while(true){
var ret_value__26991__auto__ = (function (){try{while(true){
var result__26992__auto__ = switch__26989__auto__.call(null,state_28955);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26992__auto__;
}
break;
}
}catch (e28979){if((e28979 instanceof Object)){
var ex__26993__auto__ = e28979;
var statearr_28980_28998 = state_28955;
(statearr_28980_28998[(5)] = ex__26993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28955);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28979;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28999 = state_28955;
state_28955 = G__28999;
continue;
} else {
return ret_value__26991__auto__;
}
break;
}
});
cljs$core$async$state_machine__26990__auto__ = function(state_28955){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26990__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26990__auto____1.call(this,state_28955);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26990__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26990__auto____0;
cljs$core$async$state_machine__26990__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26990__auto____1;
return cljs$core$async$state_machine__26990__auto__;
})()
;})(switch__26989__auto__,c__27079__auto___28983,out))
})();
var state__27081__auto__ = (function (){var statearr_28981 = f__27080__auto__.call(null);
(statearr_28981[(6)] = c__27079__auto___28983);

return statearr_28981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27081__auto__);
});})(c__27079__auto___28983,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1549663080971
