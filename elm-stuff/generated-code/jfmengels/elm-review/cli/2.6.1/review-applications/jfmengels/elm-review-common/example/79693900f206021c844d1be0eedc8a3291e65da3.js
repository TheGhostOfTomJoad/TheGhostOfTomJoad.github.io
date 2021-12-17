(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}




var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log = F2(function(tag, value)
{
	return value;
});

var _Debug_log_UNUSED = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString(value)
{
	return '<internals>';
}

function _Debug_toString_UNUSED(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File !== 'undefined' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[36m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash_UNUSED(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.bg.bw === region.a$.bw)
	{
		return 'on line ' + region.bg.bw;
	}
	return 'on lines ' + region.bg.bw + ' through ' + region.a$.bw;
}



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	/**_UNUSED/
	if (x.$ === 'Set_elm_builtin')
	{
		x = $elm$core$Set$toList(x);
		y = $elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	/**/
	if (x.$ < 0)
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**_UNUSED/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**/
	if (typeof x.$ === 'undefined')
	//*/
	/**_UNUSED/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0 = 0;
var _Utils_Tuple0_UNUSED = { $: '#0' };

function _Utils_Tuple2(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2_UNUSED(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3_UNUSED(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr(c) { return c; }
function _Utils_chr_UNUSED(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _List_Nil = { $: 0 };
var _List_Nil_UNUSED = { $: '[]' };

function _List_Cons(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons_UNUSED(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
	}));
});



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return !isNaN(word)
		? $elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: $elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return $elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? $elm$core$Maybe$Nothing
		: $elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return $elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



/**_UNUSED/
function _Json_errorToString(error)
{
	return $elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? $elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? $elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return $elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? $elm$core$Result$Ok(value)
		: (value instanceof String)
			? $elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? $elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!$elm$core$Result$isOk(result))
					{
						return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!$elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return $elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!$elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if ($elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));

		case 1:
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return $elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!$elm$core$Result$isOk(result))
		{
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return $elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList !== 'undefined' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2($elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap_UNUSED(value) { return { $: 0, a: value }; }
function _Json_unwrap_UNUSED(value) { return value.a; }

function _Json_wrap(value) { return value; }
function _Json_unwrap(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



var _Bitwise_and = F2(function(a, b)
{
	return a & b;
});

var _Bitwise_or = F2(function(a, b)
{
	return a | b;
});

var _Bitwise_xor = F2(function(a, b)
{
	return a ^ b;
});

function _Bitwise_complement(a)
{
	return ~a;
};

var _Bitwise_shiftLeftBy = F2(function(offset, a)
{
	return a << offset;
});

var _Bitwise_shiftRightBy = F2(function(offset, a)
{
	return a >> offset;
});

var _Bitwise_shiftRightZfBy = F2(function(offset, a)
{
	return a >>> offset;
});



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.d9,
		impl.eL,
		impl.eF,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	$elm$core$Result$isOk(result) || _Debug_crash(2 /**_UNUSED/, _Json_errorToString(result.a) /**/);
	var managers = {};
	var initPair = init(result.a);
	var model = initPair.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		var pair = A2(update, msg, model);
		stepper(model = pair.a, viewMetadata);
		_Platform_enqueueEffects(managers, pair.b, subscriptions(model));
	}

	_Platform_enqueueEffects(managers, initPair.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS
//
// Effects must be queued!
//
// Say your init contains a synchronous command, like Time.now or Time.here
//
//   - This will produce a batch of effects (FX_1)
//   - The synchronous task triggers the subsequent `update` call
//   - This will produce a batch of effects (FX_2)
//
// If we just start dispatching FX_2, subscriptions from FX_2 can be processed
// before subscriptions from FX_1. No good! Earlier versions of this code had
// this problem, leading to these reports:
//
//   https://github.com/elm/core/issues/980
//   https://github.com/elm/core/pull/981
//   https://github.com/elm/compiler/issues/1776
//
// The queue is necessary to avoid ordering issues for synchronous commands.


// Why use true/false here? Why not just check the length of the queue?
// The goal is to detect "are we currently dispatching effects?" If we
// are, we need to bail and let the ongoing while loop handle things.
//
// Now say the queue has 1 element. When we dequeue the final element,
// the queue will be empty, but we are still actively dispatching effects.
// So you could get queue jumping in a really tricky category of cases.
//
var _Platform_effectsQueue = [];
var _Platform_effectsActive = false;


function _Platform_enqueueEffects(managers, cmdBag, subBag)
{
	_Platform_effectsQueue.push({ p: managers, q: cmdBag, r: subBag });

	if (_Platform_effectsActive) return;

	_Platform_effectsActive = true;
	for (var fx; fx = _Platform_effectsQueue.shift(); )
	{
		_Platform_dispatchEffects(fx.p, fx.q, fx.r);
	}
	_Platform_effectsActive = false;
}


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				s: bag.n,
				t: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.t)
		{
			x = temp.s(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		u: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		u: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		$elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}




// STRINGS


var _Parser_isSubString = F5(function(smallString, offset, row, col, bigString)
{
	var smallLength = smallString.length;
	var isGood = offset + smallLength <= bigString.length;

	for (var i = 0; isGood && i < smallLength; )
	{
		var code = bigString.charCodeAt(offset);
		isGood =
			smallString[i++] === bigString[offset++]
			&& (
				code === 0x000A /* \n */
					? ( row++, col=1 )
					: ( col++, (code & 0xF800) === 0xD800 ? smallString[i++] === bigString[offset++] : 1 )
			)
	}

	return _Utils_Tuple3(isGood ? offset : -1, row, col);
});



// CHARS


var _Parser_isSubChar = F3(function(predicate, offset, string)
{
	return (
		string.length <= offset
			? -1
			:
		(string.charCodeAt(offset) & 0xF800) === 0xD800
			? (predicate(_Utils_chr(string.substr(offset, 2))) ? offset + 2 : -1)
			:
		(predicate(_Utils_chr(string[offset]))
			? ((string[offset] === '\n') ? -2 : (offset + 1))
			: -1
		)
	);
});


var _Parser_isAsciiCode = F3(function(code, offset, string)
{
	return string.charCodeAt(offset) === code;
});



// NUMBERS


var _Parser_chompBase10 = F2(function(offset, string)
{
	for (; offset < string.length; offset++)
	{
		var code = string.charCodeAt(offset);
		if (code < 0x30 || 0x39 < code)
		{
			return offset;
		}
	}
	return offset;
});


var _Parser_consumeBase = F3(function(base, offset, string)
{
	for (var total = 0; offset < string.length; offset++)
	{
		var digit = string.charCodeAt(offset) - 0x30;
		if (digit < 0 || base <= digit) break;
		total = base * total + digit;
	}
	return _Utils_Tuple2(offset, total);
});


var _Parser_consumeBase16 = F2(function(offset, string)
{
	for (var total = 0; offset < string.length; offset++)
	{
		var code = string.charCodeAt(offset);
		if (0x30 <= code && code <= 0x39)
		{
			total = 16 * total + code - 0x30;
		}
		else if (0x41 <= code && code <= 0x46)
		{
			total = 16 * total + code - 55;
		}
		else if (0x61 <= code && code <= 0x66)
		{
			total = 16 * total + code - 87;
		}
		else
		{
			break;
		}
	}
	return _Utils_Tuple2(offset, total);
});



// FIND STRING


var _Parser_findSubString = F5(function(smallString, offset, row, col, bigString)
{
	var newOffset = bigString.indexOf(smallString, offset);
	var target = newOffset < 0 ? bigString.length : newOffset + smallString.length;

	while (offset < target)
	{
		var code = bigString.charCodeAt(offset++);
		code === 0x000A /* \n */
			? ( col=1, row++ )
			: ( col++, (code & 0xF800) === 0xD800 && offset++ )
	}

	return _Utils_Tuple3(newOffset, row, col);
});
var $elm$core$List$cons = _List_cons;
var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var $elm$core$Array$foldr = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (!node.$) {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			$elm$core$Elm$JsArray$foldr,
			helper,
			A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var $elm$core$Array$toList = function (array) {
	return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
};
var $elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === -2) {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var $elm$core$Dict$toList = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Dict$keys = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2($elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Set$toList = function (_v0) {
	var dict = _v0;
	return $elm$core$Dict$keys(dict);
};
var $elm$core$Basics$EQ = 1;
var $elm$core$Basics$GT = 2;
var $elm$core$Basics$LT = 0;
var $author$project$Elm$Review$Reporter$ConfigurationError = {$: 2};
var $elm$core$Basics$False = 1;
var $author$project$Elm$Review$Main$HumanReadable = 0;
var $author$project$Elm$Review$Main$Mode_DontFix = 0;
var $author$project$Elm$Review$Main$NotAwaiting = {$: 0};
var $elm$core$Maybe$Nothing = {$: 1};
var $elm$core$Basics$identity = function (x) {
	return x;
};
var $author$project$Elm$Review$Reporter$Source = $elm$core$Basics$identity;
var $author$project$Elm$Review$Reporter$WithoutDetails = 1;
var $elm$core$Result$Err = function (a) {
	return {$: 1, a: a};
};
var $elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $elm$core$Result$Ok = function (a) {
	return {$: 0, a: a};
};
var $elm$json$Json$Decode$OneOf = function (a) {
	return {$: 2, a: a};
};
var $elm$core$Basics$add = _Basics_add;
var $elm$core$Maybe$Just = function (a) {
	return {$: 0, a: a};
};
var $elm$core$String$all = _String_all;
var $elm$core$Basics$and = _Basics_and;
var $elm$core$Basics$append = _Utils_append;
var $elm$json$Json$Encode$encode = _Json_encode;
var $elm$core$String$fromInt = _String_fromNumber;
var $elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var $elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var $elm$json$Json$Decode$indent = function (str) {
	return A2(
		$elm$core$String$join,
		'\n    ',
		A2($elm$core$String$split, '\n', str));
};
var $elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var $elm$core$List$length = function (xs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var $elm$core$List$map2 = _List_map2;
var $elm$core$Basics$le = _Utils_le;
var $elm$core$Basics$sub = _Basics_sub;
var $elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2($elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var $elm$core$List$range = F2(
	function (lo, hi) {
		return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var $elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$map2,
			f,
			A2(
				$elm$core$List$range,
				0,
				$elm$core$List$length(xs) - 1),
			xs);
	});
var $elm$core$Char$toCode = _Char_toCode;
var $elm$core$Char$isLower = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var $elm$core$Char$isUpper = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var $elm$core$Basics$or = _Basics_or;
var $elm$core$Char$isAlpha = function (_char) {
	return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
};
var $elm$core$Char$isDigit = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var $elm$core$Char$isAlphaNum = function (_char) {
	return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
};
var $elm$core$List$reverse = function (list) {
	return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
};
var $elm$core$String$uncons = _String_uncons;
var $elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + ($elm$core$String$fromInt(i + 1) + (') ' + $elm$json$Json$Decode$indent(
			$elm$json$Json$Decode$errorToString(error))));
	});
var $elm$json$Json$Decode$errorToString = function (error) {
	return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var $elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 0:
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _v1 = $elm$core$String$uncons(f);
						if (_v1.$ === 1) {
							return false;
						} else {
							var _v2 = _v1.a;
							var _char = _v2.a;
							var rest = _v2.b;
							return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 1:
					var i = error.a;
					var err = error.b;
					var indexName = '[' + ($elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 2:
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									$elm$core$String$join,
									'',
									$elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										$elm$core$String$join,
										'',
										$elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + ($elm$core$String$fromInt(
								$elm$core$List$length(errors)) + ' ways:'));
							return A2(
								$elm$core$String$join,
								'\n\n',
								A2(
									$elm$core$List$cons,
									introduction,
									A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								$elm$core$String$join,
								'',
								$elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + ($elm$json$Json$Decode$indent(
						A2($elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var $elm$core$Array$branchFactor = 32;
var $elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 0, a: a, b: b, c: c, d: d};
	});
var $elm$core$Elm$JsArray$empty = _JsArray_empty;
var $elm$core$Basics$ceiling = _Basics_ceiling;
var $elm$core$Basics$fdiv = _Basics_fdiv;
var $elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var $elm$core$Basics$toFloat = _Basics_toFloat;
var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(
	A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var $elm$core$Array$Leaf = function (a) {
	return {$: 1, a: a};
};
var $elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var $elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var $elm$core$Basics$eq = _Utils_equal;
var $elm$core$Basics$floor = _Basics_floor;
var $elm$core$Elm$JsArray$length = _JsArray_length;
var $elm$core$Basics$gt = _Utils_gt;
var $elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var $elm$core$Basics$mul = _Basics_mul;
var $elm$core$Array$SubTree = function (a) {
	return {$: 0, a: a};
};
var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var $elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
			var node = _v0.a;
			var remainingNodes = _v0.b;
			var newAcc = A2(
				$elm$core$List$cons,
				$elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return $elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var $elm$core$Tuple$first = function (_v0) {
	var x = _v0.a;
	return x;
};
var $elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var $elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.p) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.s),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.s);
		} else {
			var treeLen = builder.p * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.w) : builder.w;
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.p);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.s) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.s);
		}
	});
var $elm$core$Basics$idiv = _Basics_idiv;
var $elm$core$Basics$lt = _Utils_lt;
var $elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					false,
					{w: nodeList, p: (len / $elm$core$Array$branchFactor) | 0, s: tail});
			} else {
				var leaf = $elm$core$Array$Leaf(
					A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - $elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2($elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var $elm$core$Basics$remainderBy = _Basics_remainderBy;
var $elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return $elm$core$Array$empty;
		} else {
			var tailLen = len % $elm$core$Array$branchFactor;
			var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - $elm$core$Array$branchFactor;
			return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var $elm$core$Basics$True = 0;
var $elm$core$Result$isOk = function (result) {
	if (!result.$) {
		return true;
	} else {
		return false;
	}
};
var $elm$json$Json$Encode$string = _Json_wrap;
var $author$project$Elm$Review$Main$abort = _Platform_outgoingPort('abort', $elm$json$Json$Encode$string);
var $author$project$Elm$Review$Main$abortForConfigurationErrors = _Platform_outgoingPort('abortForConfigurationErrors', $elm$core$Basics$identity);
var $elm$json$Json$Encode$object = function (pairs) {
	return _Json_wrap(
		A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, obj) {
					var k = _v0.a;
					var v = _v0.b;
					return A3(_Json_addField, k, v, obj);
				}),
			_Json_emptyObject(0),
			pairs));
};
var $author$project$Elm$Review$Main$abortWithDetails = _Platform_outgoingPort(
	'abortWithDetails',
	function ($) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'message',
					$elm$json$Json$Encode$string($.al)),
					_Utils_Tuple2(
					'title',
					$elm$json$Json$Encode$string($.bD))
				]));
	});
var $elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var $jfmengels$elm_review_common$NoDeprecated$Configuration = $elm$core$Basics$identity;
var $elm$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			if (!list.b) {
				return false;
			} else {
				var x = list.a;
				var xs = list.b;
				if (isOkay(x)) {
					return true;
				} else {
					var $temp$isOkay = isOkay,
						$temp$list = xs;
					isOkay = $temp$isOkay;
					list = $temp$list;
					continue any;
				}
			}
		}
	});
var $elm$core$String$contains = _String_contains;
var $elm$core$String$lines = _String_lines;
var $elm$core$String$startsWith = _String_startsWith;
var $elm$core$String$toLower = _String_toLower;
var $jfmengels$elm_review_common$NoDeprecated$defaults = function () {
	var documentationPredicate = function (doc) {
		return A2(
			$elm$core$List$any,
			$elm$core$String$startsWith('@deprecated'),
			$elm$core$String$lines(doc));
	};
	var containsDeprecated = function (name) {
		return A2(
			$elm$core$String$contains,
			'deprecated',
			$elm$core$String$toLower(name));
	};
	return {
		aH: _List_Nil,
		ah: documentationPredicate,
		ar: F2(
			function (_v0, name) {
				return containsDeprecated(name);
			}),
		bj: _List_Nil,
		b0: function (moduleName) {
			return containsDeprecated(
				A2($elm$core$String$join, '.', moduleName));
		},
		b2: containsDeprecated,
		b3: containsDeprecated
	};
}();
var $jfmengels$elm_review$Review$Rule$RequestedData = $elm$core$Basics$identity;
var $jfmengels$elm_review$Review$Rule$Rule = $elm$core$Basics$identity;
var $jfmengels$elm_review$Review$Exceptions$Exceptions = $elm$core$Basics$identity;
var $elm$core$Set$Set_elm_builtin = $elm$core$Basics$identity;
var $elm$core$Dict$RBEmpty_elm_builtin = {$: -2};
var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
var $elm$core$Set$empty = $elm$core$Dict$empty;
var $jfmengels$elm_review$Review$Exceptions$init = {aI: _List_Nil, aK: $elm$core$Set$empty};
var $jfmengels$elm_review$Review$Rule$configurationError = F2(
	function (name, configurationError_) {
		return {
			ao: $elm$core$Maybe$Just(configurationError_),
			au: $jfmengels$elm_review$Review$Exceptions$init,
			aW: name,
			O: {ac: false, bf: false},
			aC: F3(
				function (_v0, _v1, _v2) {
					return _Utils_Tuple2(
						_List_Nil,
						A2($jfmengels$elm_review$Review$Rule$configurationError, name, configurationError_));
				})
		};
	});
var $elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var $elm$core$Basics$compare = _Utils_compare;
var $elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === -2) {
				return $elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _v1 = A2($elm$core$Basics$compare, targetKey, key);
				switch (_v1) {
					case 0:
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 1:
						return $elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var $elm$core$Dict$member = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$get, key, dict);
		if (!_v0.$) {
			return true;
		} else {
			return false;
		}
	});
var $elm$core$Set$member = F2(
	function (key, _v0) {
		var dict = _v0;
		return A2($elm$core$Dict$member, key, dict);
	});
var $elm$core$Basics$not = _Basics_not;
var $elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							$elm$core$List$foldl,
							fn,
							acc,
							$elm$core$List$reverse(r4)) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var $elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var $elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _v0 = f(mx);
		if (!_v0.$) {
			var x = _v0.a;
			return A2($elm$core$List$cons, x, xs);
		} else {
			return xs;
		}
	});
var $elm$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			$elm$core$List$maybeCons(f),
			_List_Nil,
			xs);
	});
var $elm$core$Dict$Black = 1;
var $elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: -1, a: a, b: b, c: c, d: d, e: e};
	});
var $elm$core$Dict$Red = 0;
var $elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === -1) && (!right.a)) {
			var _v1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === -1) && (!left.a)) {
				var _v3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					0,
					key,
					value,
					A5($elm$core$Dict$RBNode_elm_builtin, 1, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 1, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === -1) && (!left.a)) && (left.d.$ === -1)) && (!left.d.a)) {
				var _v5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _v6 = left.d;
				var _v7 = _v6.a;
				var llK = _v6.b;
				var llV = _v6.c;
				var llLeft = _v6.d;
				var llRight = _v6.e;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					0,
					lK,
					lV,
					A5($elm$core$Dict$RBNode_elm_builtin, 1, llK, llV, llLeft, llRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 1, key, value, lRight, right));
			} else {
				return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var $elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === -2) {
			return A5($elm$core$Dict$RBNode_elm_builtin, 0, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _v1 = A2($elm$core$Basics$compare, key, nKey);
			switch (_v1) {
				case 0:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3($elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 1:
					return A5($elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3($elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var $elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _v0 = A3($elm$core$Dict$insertHelp, key, value, dict);
		if ((_v0.$ === -1) && (!_v0.a)) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, 1, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Set$insert = F2(
	function (key, _v0) {
		var dict = _v0;
		return A3($elm$core$Dict$insert, key, 0, dict);
	});
var $elm$core$Set$fromList = function (list) {
	return A3($elm$core$List$foldl, $elm$core$Set$insert, $elm$core$Set$empty, list);
};
var $jfmengels$elm_review_common$NoDeprecated$isValidName = function (name) {
	var _v0 = $elm$core$List$reverse(
		A2($elm$core$String$split, '.', name));
	if (_v0.b && _v0.b.b) {
		var functionName = _v0.a;
		var _v1 = _v0.b;
		var moduleName = _v1.a;
		var restOfModuleName = _v1.b;
		return $elm$core$Result$Ok(
			_Utils_Tuple2(
				$elm$core$List$reverse(
					A2($elm$core$List$cons, moduleName, restOfModuleName)),
				functionName));
	} else {
		return $elm$core$Result$Err(name);
	}
};
var $elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						$elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var $elm$core$Result$toMaybe = function (result) {
	if (!result.$) {
		var v = result.a;
		return $elm$core$Maybe$Just(v);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $jfmengels$elm_review_common$NoDeprecated$parseNames = function (strings) {
	var parsedNames = A2($elm$core$List$map, $jfmengels$elm_review_common$NoDeprecated$isValidName, strings);
	var invalidNames = A2(
		$elm$core$List$filterMap,
		function (result) {
			if (result.$ === 1) {
				var typeName = result.a;
				return $elm$core$Maybe$Just(typeName);
			} else {
				return $elm$core$Maybe$Nothing;
			}
		},
		parsedNames);
	return $elm$core$List$isEmpty(invalidNames) ? $elm$core$Result$Ok(
		$elm$core$Set$fromList(
			A2($elm$core$List$filterMap, $elm$core$Result$toMaybe, parsedNames))) : $elm$core$Result$Err(invalidNames);
};
var $jfmengels$elm_review_common$NoDeprecated$createElementPredicate = function (_v0) {
	var configuration = _v0;
	if ($elm$core$List$isEmpty(configuration.bj)) {
		return $elm$core$Result$Ok(
			F2(
				function (moduleName, name) {
					return A2(configuration.ar, moduleName, name);
				}));
	} else {
		var _v1 = $jfmengels$elm_review_common$NoDeprecated$parseNames(configuration.bj);
		if (!_v1.$) {
			var exceptionsForElements = _v1.a;
			return $elm$core$Result$Ok(
				F2(
					function (moduleName, name) {
						return A2(configuration.ar, moduleName, name) && (!A2(
							$elm$core$Set$member,
							_Utils_Tuple2(moduleName, name),
							exceptionsForElements));
					}));
		} else {
			var faultyNames = _v1.a;
			return $elm$core$Result$Err(faultyNames);
		}
	}
};
var $jfmengels$elm_review_common$NoDeprecated$DeprecatedDependency = 1;
var $jfmengels$elm_review_common$NoDeprecated$StableConfiguration = $elm$core$Basics$identity;
var $elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2($elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var $jfmengels$elm_review$Review$Rule$SpecifiedError = function (a) {
	return {$: 1, a: a};
};
var $jfmengels$elm_review$Review$Error$UserGlobal = 4;
var $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange = {
	a$: {an: 0, aB: 0},
	bg: {an: 0, aB: 0}
};
var $jfmengels$elm_review$Review$Rule$globalError = function (_v0) {
	var message = _v0.al;
	var details = _v0.bG;
	return $jfmengels$elm_review$Review$Rule$SpecifiedError(
		{bG: details, cn: 'GLOBAL ERROR', cp: $elm$core$Maybe$Nothing, al: message, cB: $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, cE: '', dB: 4});
};
var $elm$core$List$member = F2(
	function (x, xs) {
		return A2(
			$elm$core$List$any,
			function (a) {
				return _Utils_eq(a, x);
			},
			xs);
	});
var $jfmengels$elm_review$Review$Project$Dependency$modules = function (_v0) {
	var dependency = _v0;
	return dependency.ad;
};
var $jfmengels$elm_review_common$NoDeprecated$DeprecatedModule = 0;
var $elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3($elm$core$List$foldr, $elm$core$List$cons, ys, xs);
		}
	});
var $elm$core$List$concat = function (lists) {
	return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists);
};
var $elm$core$List$concatMap = F2(
	function (f, list) {
		return $elm$core$List$concat(
			A2($elm$core$List$map, f, list));
	});
var $jfmengels$elm_review_common$NoDeprecated$registerDeprecatedThings = F3(
	function (_v0, module_, acc) {
		var configuration = _v0;
		var moduleName = A2($elm$core$String$split, '.', module_.aW);
		if (configuration.ah(module_.aZ)) {
			return {
				t: acc.t,
				u: A2(
					$elm$core$List$cons,
					_Utils_Tuple2(moduleName, 0),
					acc.u)
			};
		} else {
			var commentIndicatesDeprecation = function (_v4) {
				var comment = _v4.aZ;
				return configuration.ah(comment);
			};
			var deprecatedAliases = A2($elm$core$List$filter, commentIndicatesDeprecation, module_.cN);
			var deprecatedUnions = A2($elm$core$List$filter, commentIndicatesDeprecation, module_.dH);
			var newValues = $elm$core$List$concat(
				_List_fromArray(
					[
						A2(
						$elm$core$List$map,
						function (value) {
							return _Utils_Tuple2(moduleName, value.aW);
						},
						A2($elm$core$List$filter, commentIndicatesDeprecation, module_.dI)),
						A2(
						$elm$core$List$map,
						function (_v1) {
							var name = _v1.aW;
							return _Utils_Tuple2(moduleName, name);
						},
						deprecatedUnions),
						A2(
						$elm$core$List$map,
						function (_v2) {
							var name = _v2.a;
							return _Utils_Tuple2(moduleName, name);
						},
						A2(
							$elm$core$List$concatMap,
							function ($) {
								return $.eI;
							},
							deprecatedUnions)),
						A2(
						$elm$core$List$map,
						function (_v3) {
							var name = _v3.aW;
							return _Utils_Tuple2(moduleName, name);
						},
						deprecatedAliases)
					]));
			return {
				t: _Utils_ap(newValues, acc.t),
				u: acc.u
			};
		}
	});
var $jfmengels$elm_review_common$NoDeprecated$dependenciesVisitor = F3(
	function (_v0, dict, projectContext) {
		var configuration = _v0;
		var unknownDependenciesErrors = A2(
			$elm$core$List$map,
			function (name) {
				return $jfmengels$elm_review$Review$Rule$globalError(
					{
						bG: _List_fromArray(
							['You marked this package as deprecated, but I can\'t find it in your dependencies.', 'It could be a typo, or maybe you\'ve successfully removed it from your project?']),
						al: 'Could not find package `' + (name + '`')
					});
			},
			A2(
				$elm$core$List$filter,
				function (name) {
					return !A2($elm$core$Dict$member, name, dict);
				},
				configuration.aH));
		var newContext = A3(
			$elm$core$List$foldl,
			F2(
				function (_v1, acc) {
					var packageName = _v1.a;
					var dependency = _v1.b;
					var modules = $jfmengels$elm_review$Review$Project$Dependency$modules(dependency);
					return A2($elm$core$List$member, packageName, configuration.aH) ? _Utils_update(
						acc,
						{
							u: _Utils_ap(
								A2(
									$elm$core$List$map,
									function (_v2) {
										var name = _v2.aW;
										return _Utils_Tuple2(
											A2($elm$core$String$split, '.', name),
											1);
									},
									modules),
								acc.u)
						}) : A3(
						$elm$core$List$foldl,
						$jfmengels$elm_review_common$NoDeprecated$registerDeprecatedThings(configuration),
						acc,
						modules);
				}),
			projectContext,
			$elm$core$Dict$toList(dict));
		return _Utils_Tuple2(unknownDependenciesErrors, newContext);
	});
var $jfmengels$elm_review_common$NoDeprecated$foldProjectContexts = F2(
	function (newContext, previousContext) {
		return {
			t: _Utils_ap(newContext.t, previousContext.t),
			u: _Utils_ap(newContext.u, previousContext.u)
		};
	});
var $jfmengels$elm_review$Review$Rule$ContextCreator = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$core$Basics$always = F2(
	function (a, _v0) {
		return a;
	});
var $jfmengels$elm_review$Review$Rule$initContextCreator = function (fromProjectToModule) {
	return A2(
		$jfmengels$elm_review$Review$Rule$ContextCreator,
		$elm$core$Basics$always(fromProjectToModule),
		{ac: false, bf: false});
};
var $stil4m$elm_syntax$Elm$Syntax$Node$value = function (_v0) {
	var v = _v0.b;
	return v;
};
var $jfmengels$elm_review$Review$Rule$moduleNameFromMetadata = function (_v0) {
	var metadata = _v0;
	return $stil4m$elm_syntax$Elm$Syntax$Node$value(metadata.b$);
};
var $jfmengels$elm_review$Review$Rule$withMetadata = function (_v0) {
	var fn = _v0.a;
	var requestedData = _v0.b;
	return A2(
		$jfmengels$elm_review$Review$Rule$ContextCreator,
		function (data) {
			return A2(fn, data, data.bW);
		},
		requestedData);
};
var $jfmengels$elm_review_common$NoDeprecated$fromModuleToProject = $jfmengels$elm_review$Review$Rule$withMetadata(
	$jfmengels$elm_review$Review$Rule$initContextCreator(
		F2(
			function (metadata, moduleContext) {
				return {
					t: moduleContext.bx,
					u: moduleContext.a6 ? _List_fromArray(
						[
							_Utils_Tuple2(
							$jfmengels$elm_review$Review$Rule$moduleNameFromMetadata(metadata),
							0)
						]) : _List_Nil
				};
			})));
var $jfmengels$elm_review$Review$Rule$TraverseAllModulesInParallel = function (a) {
	return {$: 0, a: a};
};
var $jfmengels$elm_review$Review$Rule$TraverseImportedModulesFirst = function (a) {
	return {$: 1, a: a};
};
var $jfmengels$elm_review$Review$Rule$ModuleKey = $elm$core$Basics$identity;
var $jfmengels$elm_review$Review$Rule$ModuleRuleSchema = $elm$core$Basics$identity;
var $stil4m$elm_syntax$Elm$Syntax$Node$Node = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $jfmengels$elm_review$Review$Rule$applyContextCreator = F3(
	function (data, _v0, from) {
		var fn = _v0.a;
		return A2(fn, data, from);
	});
var $jfmengels$elm_review$Review$Rule$Metadata = $elm$core$Basics$identity;
var $jfmengels$elm_review$Review$Rule$createMetadata = function (data) {
	return data;
};
var $jfmengels$elm_review$Review$ModuleNameLookupTable$Internal$ModuleNameLookupTable = $elm$core$Basics$identity;
var $jfmengels$elm_review$Review$ModuleNameLookupTable$Internal$empty = $elm$core$Dict$empty;
var $jfmengels$elm_review$Review$Rule$functionToExpression = function (_function) {
	return $stil4m$elm_syntax$Elm$Syntax$Node$value(_function.dZ).bN;
};
var $jfmengels$elm_review$Review$Rule$expressionChildren = function (node) {
	var _v0 = $stil4m$elm_syntax$Elm$Syntax$Node$value(node);
	switch (_v0.$) {
		case 1:
			var expressions = _v0.a;
			return expressions;
		case 19:
			var elements = _v0.a;
			return elements;
		case 18:
			var fields = _v0.a;
			return A2(
				$elm$core$List$map,
				A2(
					$elm$core$Basics$composeR,
					$stil4m$elm_syntax$Elm$Syntax$Node$value,
					function (_v1) {
						var expr = _v1.b;
						return expr;
					}),
				fields);
		case 22:
			var setters = _v0.b;
			return A2(
				$elm$core$List$map,
				A2(
					$elm$core$Basics$composeR,
					$stil4m$elm_syntax$Elm$Syntax$Node$value,
					function (_v2) {
						var expr = _v2.b;
						return expr;
					}),
				setters);
		case 14:
			var expr = _v0.a;
			return _List_fromArray(
				[expr]);
		case 2:
			var direction = _v0.b;
			var left = _v0.c;
			var right = _v0.d;
			switch (direction) {
				case 0:
					return _List_fromArray(
						[left, right]);
				case 1:
					return _List_fromArray(
						[right, left]);
				default:
					return _List_fromArray(
						[left, right]);
			}
		case 4:
			var cond = _v0.a;
			var then_ = _v0.b;
			var else_ = _v0.c;
			return _List_fromArray(
				[cond, then_, else_]);
		case 15:
			var expression = _v0.a.bN;
			var declarations = _v0.a.cW;
			return _Utils_ap(
				A2(
					$elm$core$List$map,
					function (declaration) {
						var _v4 = $stil4m$elm_syntax$Elm$Syntax$Node$value(declaration);
						if (!_v4.$) {
							var _function = _v4.a;
							return $jfmengels$elm_review$Review$Rule$functionToExpression(_function);
						} else {
							var expr = _v4.b;
							return expr;
						}
					},
					declarations),
				_List_fromArray(
					[expression]));
		case 16:
			var expression = _v0.a.bN;
			var cases = _v0.a.dS;
			return A2(
				$elm$core$List$cons,
				expression,
				A2(
					$elm$core$List$map,
					function (_v5) {
						var caseExpression = _v5.b;
						return caseExpression;
					},
					cases));
		case 17:
			var expression = _v0.a.bN;
			return _List_fromArray(
				[expression]);
		case 13:
			var expressions = _v0.a;
			return expressions;
		case 10:
			var expr = _v0.a;
			return _List_fromArray(
				[expr]);
		case 20:
			var expr = _v0.a;
			return _List_fromArray(
				[expr]);
		default:
			return _List_Nil;
	}
};
var $stil4m$elm_syntax$Elm$Syntax$Node$range = function (_v0) {
	var r = _v0.a;
	return r;
};
var $jfmengels$elm_review$Review$Rule$accumulate = F2(
	function (visitor, _v0) {
		var previousErrors = _v0.a;
		var previousContext = _v0.b;
		var _v1 = visitor(previousContext);
		var newErrors = _v1.a;
		var newContext = _v1.b;
		return _Utils_Tuple2(
			A2($elm$core$List$append, newErrors, previousErrors),
			newContext);
	});
var $jfmengels$elm_review$Review$Rule$visitWithListOfVisitors = F3(
	function (visitors, a, initialErrorsAndContext) {
		return A3(
			$elm$core$List$foldl,
			function (visitor) {
				return $jfmengels$elm_review$Review$Rule$accumulate(
					visitor(a));
			},
			initialErrorsAndContext,
			visitors);
	});
var $jfmengels$elm_review$Review$Rule$visitWithListOfVisitors2 = F4(
	function (visitors, a, b, initialErrorsAndContext) {
		return A3(
			$elm$core$List$foldl,
			function (visitor) {
				return $jfmengels$elm_review$Review$Rule$accumulate(
					A2(visitor, a, b));
			},
			initialErrorsAndContext,
			visitors);
	});
var $jfmengels$elm_review$Review$Rule$visitCaseBranch = F4(
	function (expressionRelatedVisitors, caseBlockWithRange, caseBranch, errorsAndContext) {
		var caseExpression = caseBranch.b;
		return A4(
			$jfmengels$elm_review$Review$Rule$visitWithListOfVisitors2,
			expressionRelatedVisitors.R,
			caseBlockWithRange,
			caseBranch,
			A3(
				$jfmengels$elm_review$Review$Rule$visitExpression,
				expressionRelatedVisitors,
				caseExpression,
				A4($jfmengels$elm_review$Review$Rule$visitWithListOfVisitors2, expressionRelatedVisitors.Q, caseBlockWithRange, caseBranch, errorsAndContext)));
	});
var $jfmengels$elm_review$Review$Rule$visitExpression = F3(
	function (expressionRelatedVisitors, node, errorsAndContext) {
		var _v1 = $stil4m$elm_syntax$Elm$Syntax$Node$value(node);
		switch (_v1.$) {
			case 15:
				var letBlock = _v1.a;
				return A3(
					$jfmengels$elm_review$Review$Rule$visitWithListOfVisitors,
					expressionRelatedVisitors.B,
					node,
					A3(
						$jfmengels$elm_review$Review$Rule$visitExpression,
						expressionRelatedVisitors,
						letBlock.bN,
						function (errorsAndContext_) {
							return A3(
								$elm$core$List$foldl,
								A2(
									$jfmengels$elm_review$Review$Rule$visitLetDeclaration,
									expressionRelatedVisitors,
									A2(
										$stil4m$elm_syntax$Elm$Syntax$Node$Node,
										$stil4m$elm_syntax$Elm$Syntax$Node$range(node),
										letBlock)),
								errorsAndContext_,
								letBlock.cW);
						}(
							A3($jfmengels$elm_review$Review$Rule$visitWithListOfVisitors, expressionRelatedVisitors.v, node, errorsAndContext))));
			case 16:
				var caseBlock = _v1.a;
				return A3(
					$jfmengels$elm_review$Review$Rule$visitWithListOfVisitors,
					expressionRelatedVisitors.B,
					node,
					function (errorsAndContext_) {
						return A3(
							$elm$core$List$foldl,
							A2(
								$jfmengels$elm_review$Review$Rule$visitCaseBranch,
								expressionRelatedVisitors,
								A2(
									$stil4m$elm_syntax$Elm$Syntax$Node$Node,
									$stil4m$elm_syntax$Elm$Syntax$Node$range(node),
									caseBlock)),
							errorsAndContext_,
							caseBlock.dS);
					}(
						A3(
							$jfmengels$elm_review$Review$Rule$visitExpression,
							expressionRelatedVisitors,
							caseBlock.bN,
							A3($jfmengels$elm_review$Review$Rule$visitWithListOfVisitors, expressionRelatedVisitors.v, node, errorsAndContext))));
			default:
				return A3(
					$jfmengels$elm_review$Review$Rule$visitWithListOfVisitors,
					expressionRelatedVisitors.B,
					node,
					function (errorsAndContext_) {
						return A3(
							$elm$core$List$foldl,
							$jfmengels$elm_review$Review$Rule$visitExpression(expressionRelatedVisitors),
							errorsAndContext_,
							$jfmengels$elm_review$Review$Rule$expressionChildren(node));
					}(
						A3($jfmengels$elm_review$Review$Rule$visitWithListOfVisitors, expressionRelatedVisitors.v, node, errorsAndContext)));
		}
	});
var $jfmengels$elm_review$Review$Rule$visitLetDeclaration = F4(
	function (expressionRelatedVisitors, letBlockWithRange, letDeclarationWithRange, errorsAndContext) {
		var letDeclaration = letDeclarationWithRange.b;
		var expressionNode = function () {
			if (!letDeclaration.$) {
				var _function = letDeclaration.a;
				return $jfmengels$elm_review$Review$Rule$functionToExpression(_function);
			} else {
				var expr = letDeclaration.b;
				return expr;
			}
		}();
		return A4(
			$jfmengels$elm_review$Review$Rule$visitWithListOfVisitors2,
			expressionRelatedVisitors.X,
			letBlockWithRange,
			letDeclarationWithRange,
			A3(
				$jfmengels$elm_review$Review$Rule$visitExpression,
				expressionRelatedVisitors,
				expressionNode,
				A4($jfmengels$elm_review$Review$Rule$visitWithListOfVisitors2, expressionRelatedVisitors.W, letBlockWithRange, letDeclarationWithRange, errorsAndContext)));
	});
var $jfmengels$elm_review$Review$Rule$visitOnlyExpressions = F4(
	function (expressionVisitorsOnEnter, expressionVisitorsOnExit, node, errorsAndContext) {
		return A3(
			$jfmengels$elm_review$Review$Rule$visitWithListOfVisitors,
			expressionVisitorsOnExit,
			node,
			function (errorsAndContext_) {
				return A3(
					$elm$core$List$foldl,
					A2($jfmengels$elm_review$Review$Rule$visitOnlyExpressions, expressionVisitorsOnEnter, expressionVisitorsOnExit),
					errorsAndContext_,
					$jfmengels$elm_review$Review$Rule$expressionChildren(node));
			}(
				A3($jfmengels$elm_review$Review$Rule$visitWithListOfVisitors, expressionVisitorsOnEnter, node, errorsAndContext)));
	});
var $jfmengels$elm_review$Review$Rule$expressionChildrenTCO = F2(
	function (nodesToVisit, acc) {
		expressionChildrenTCO:
		while (true) {
			if (!nodesToVisit.b) {
				return $elm$core$List$reverse(acc);
			} else {
				var head = nodesToVisit.a;
				var rest = nodesToVisit.b;
				var _v1 = $stil4m$elm_syntax$Elm$Syntax$Node$value(head);
				switch (_v1.$) {
					case 1:
						var expressions = _v1.a;
						var $temp$nodesToVisit = A2($elm$core$List$append, expressions, rest),
							$temp$acc = A2($elm$core$List$cons, head, acc);
						nodesToVisit = $temp$nodesToVisit;
						acc = $temp$acc;
						continue expressionChildrenTCO;
					case 19:
						var expressions = _v1.a;
						var $temp$nodesToVisit = A2($elm$core$List$append, expressions, rest),
							$temp$acc = A2($elm$core$List$cons, head, acc);
						nodesToVisit = $temp$nodesToVisit;
						acc = $temp$acc;
						continue expressionChildrenTCO;
					case 18:
						var fields = _v1.a;
						var $temp$nodesToVisit = A2(
							$elm$core$List$append,
							A2(
								$elm$core$List$map,
								A2(
									$elm$core$Basics$composeR,
									$stil4m$elm_syntax$Elm$Syntax$Node$value,
									function (_v2) {
										var expr = _v2.b;
										return expr;
									}),
								fields),
							rest),
							$temp$acc = A2($elm$core$List$cons, head, acc);
						nodesToVisit = $temp$nodesToVisit;
						acc = $temp$acc;
						continue expressionChildrenTCO;
					case 22:
						var setters = _v1.b;
						var $temp$nodesToVisit = A2(
							$elm$core$List$append,
							A2(
								$elm$core$List$map,
								A2(
									$elm$core$Basics$composeR,
									$stil4m$elm_syntax$Elm$Syntax$Node$value,
									function (_v3) {
										var expr = _v3.b;
										return expr;
									}),
								setters),
							rest),
							$temp$acc = A2($elm$core$List$cons, head, acc);
						nodesToVisit = $temp$nodesToVisit;
						acc = $temp$acc;
						continue expressionChildrenTCO;
					case 14:
						var expr = _v1.a;
						var $temp$nodesToVisit = A2($elm$core$List$cons, expr, rest),
							$temp$acc = A2($elm$core$List$cons, head, acc);
						nodesToVisit = $temp$nodesToVisit;
						acc = $temp$acc;
						continue expressionChildrenTCO;
					case 2:
						var direction = _v1.b;
						var left = _v1.c;
						var right = _v1.d;
						var nodeStack = function () {
							switch (direction) {
								case 0:
									return A2(
										$elm$core$List$cons,
										left,
										A2($elm$core$List$cons, right, rest));
								case 1:
									return A2(
										$elm$core$List$cons,
										right,
										A2($elm$core$List$cons, left, rest));
								default:
									return A2(
										$elm$core$List$cons,
										left,
										A2($elm$core$List$cons, right, rest));
							}
						}();
						var $temp$nodesToVisit = nodeStack,
							$temp$acc = A2($elm$core$List$cons, head, acc);
						nodesToVisit = $temp$nodesToVisit;
						acc = $temp$acc;
						continue expressionChildrenTCO;
					case 4:
						var cond = _v1.a;
						var then_ = _v1.b;
						var else_ = _v1.c;
						var $temp$nodesToVisit = A2(
							$elm$core$List$cons,
							cond,
							A2(
								$elm$core$List$cons,
								then_,
								A2($elm$core$List$cons, else_, rest))),
							$temp$acc = A2($elm$core$List$cons, head, acc);
						nodesToVisit = $temp$nodesToVisit;
						acc = $temp$acc;
						continue expressionChildrenTCO;
					case 15:
						var expression = _v1.a.bN;
						var declarations = _v1.a.cW;
						var $temp$nodesToVisit = A2(
							$elm$core$List$append,
							A2(
								$elm$core$List$map,
								function (declaration) {
									var _v5 = $stil4m$elm_syntax$Elm$Syntax$Node$value(declaration);
									if (!_v5.$) {
										var _function = _v5.a;
										return $jfmengels$elm_review$Review$Rule$functionToExpression(_function);
									} else {
										var expr = _v5.b;
										return expr;
									}
								},
								declarations),
							A2($elm$core$List$cons, expression, rest)),
							$temp$acc = A2($elm$core$List$cons, head, acc);
						nodesToVisit = $temp$nodesToVisit;
						acc = $temp$acc;
						continue expressionChildrenTCO;
					case 16:
						var expression = _v1.a.bN;
						var cases = _v1.a.dS;
						var $temp$nodesToVisit = A2(
							$elm$core$List$cons,
							expression,
							A2(
								$elm$core$List$append,
								A2(
									$elm$core$List$map,
									function (_v6) {
										var caseExpression = _v6.b;
										return caseExpression;
									},
									cases),
								rest)),
							$temp$acc = A2($elm$core$List$cons, head, acc);
						nodesToVisit = $temp$nodesToVisit;
						acc = $temp$acc;
						continue expressionChildrenTCO;
					case 17:
						var expression = _v1.a.bN;
						var $temp$nodesToVisit = A2($elm$core$List$cons, expression, rest),
							$temp$acc = A2($elm$core$List$cons, head, acc);
						nodesToVisit = $temp$nodesToVisit;
						acc = $temp$acc;
						continue expressionChildrenTCO;
					case 13:
						var expressions = _v1.a;
						var $temp$nodesToVisit = A2($elm$core$List$append, expressions, rest),
							$temp$acc = A2($elm$core$List$cons, head, acc);
						nodesToVisit = $temp$nodesToVisit;
						acc = $temp$acc;
						continue expressionChildrenTCO;
					case 10:
						var expression = _v1.a;
						var $temp$nodesToVisit = A2($elm$core$List$cons, expression, rest),
							$temp$acc = A2($elm$core$List$cons, head, acc);
						nodesToVisit = $temp$nodesToVisit;
						acc = $temp$acc;
						continue expressionChildrenTCO;
					case 20:
						var expression = _v1.a;
						var $temp$nodesToVisit = A2($elm$core$List$cons, expression, rest),
							$temp$acc = A2($elm$core$List$cons, head, acc);
						nodesToVisit = $temp$nodesToVisit;
						acc = $temp$acc;
						continue expressionChildrenTCO;
					default:
						var $temp$nodesToVisit = rest,
							$temp$acc = A2($elm$core$List$cons, head, acc);
						nodesToVisit = $temp$nodesToVisit;
						acc = $temp$acc;
						continue expressionChildrenTCO;
				}
			}
		}
	});
var $jfmengels$elm_review$Review$Rule$visitOnlyExpressionsOnlyOnEnter = F3(
	function (expressionVisitorsOnEnter, node, errorsAndContext) {
		return A3(
			$elm$core$List$foldl,
			$jfmengels$elm_review$Review$Rule$visitWithListOfVisitors(expressionVisitorsOnEnter),
			errorsAndContext,
			A2(
				$jfmengels$elm_review$Review$Rule$expressionChildrenTCO,
				_List_fromArray(
					[node]),
				_List_Nil));
	});
var $jfmengels$elm_review$Review$Rule$createExpressionVisitor = function (schema) {
	if ((!$elm$core$List$isEmpty(schema.W)) || ((!$elm$core$List$isEmpty(schema.X)) || ((!$elm$core$List$isEmpty(schema.Q)) || (!$elm$core$List$isEmpty(schema.R))))) {
		var expressionRelatedVisitors = {
			Q: $elm$core$List$reverse(schema.Q),
			R: schema.R,
			v: $elm$core$List$reverse(schema.v),
			B: schema.B,
			W: $elm$core$List$reverse(schema.W),
			X: schema.X
		};
		return $elm$core$Maybe$Just(
			$jfmengels$elm_review$Review$Rule$visitExpression(expressionRelatedVisitors));
	} else {
		if (!$elm$core$List$isEmpty(schema.B)) {
			var exitVisitors = schema.B;
			var enterVisitors = $elm$core$List$reverse(schema.v);
			return $elm$core$Maybe$Just(
				A2($jfmengels$elm_review$Review$Rule$visitOnlyExpressions, enterVisitors, exitVisitors));
		} else {
			if (!$elm$core$List$isEmpty(schema.v)) {
				return $elm$core$Maybe$Just(
					$jfmengels$elm_review$Review$Rule$visitOnlyExpressionsOnlyOnEnter(
						$elm$core$List$reverse(schema.v)));
			} else {
				return $elm$core$Maybe$Nothing;
			}
		}
	}
};
var $jfmengels$elm_review$Review$Rule$shouldVisitDeclarations = function (schema) {
	return (!$elm$core$List$isEmpty(schema.S)) || (!$elm$core$List$isEmpty(schema.T));
};
var $jfmengels$elm_review$Review$Rule$visitOnlyDeclaration = F4(
	function (declarationVisitorsOnEnter, declarationVisitorsOnExit, node, errorsAndContext) {
		return A3(
			$jfmengels$elm_review$Review$Rule$visitWithListOfVisitors,
			declarationVisitorsOnExit,
			node,
			A3($jfmengels$elm_review$Review$Rule$visitWithListOfVisitors, declarationVisitorsOnEnter, node, errorsAndContext));
	});
var $jfmengels$elm_review$Review$Rule$visitDeclaration = F5(
	function (declarationVisitorsOnEnter, declarationVisitorsOnExit, expressionVisitor, node, errorsAndContext) {
		var _v0 = $stil4m$elm_syntax$Elm$Syntax$Node$value(node);
		if (!_v0.$) {
			var _function = _v0.a;
			return A3(
				$jfmengels$elm_review$Review$Rule$visitWithListOfVisitors,
				declarationVisitorsOnExit,
				node,
				A2(
					expressionVisitor,
					$stil4m$elm_syntax$Elm$Syntax$Node$value(_function.dZ).bN,
					A3($jfmengels$elm_review$Review$Rule$visitWithListOfVisitors, declarationVisitorsOnEnter, node, errorsAndContext)));
		} else {
			return A4($jfmengels$elm_review$Review$Rule$visitOnlyDeclaration, declarationVisitorsOnEnter, declarationVisitorsOnExit, node, errorsAndContext);
		}
	});
var $jfmengels$elm_review$Review$Rule$visitDeclarationButOnlyExpressions = F3(
	function (expressionVisitor, node, errorsAndContext) {
		var _v0 = $stil4m$elm_syntax$Elm$Syntax$Node$value(node);
		if (!_v0.$) {
			var _function = _v0.a;
			return A2(
				expressionVisitor,
				$stil4m$elm_syntax$Elm$Syntax$Node$value(_function.dZ).bN,
				errorsAndContext);
		} else {
			return errorsAndContext;
		}
	});
var $jfmengels$elm_review$Review$Rule$createDeclarationAndExpressionVisitor = function (schema) {
	if ($jfmengels$elm_review$Review$Rule$shouldVisitDeclarations(schema)) {
		var _v0 = $jfmengels$elm_review$Review$Rule$createExpressionVisitor(schema);
		if (!_v0.$) {
			var expressionVisitor = _v0.a;
			return F2(
				function (nodes, initialErrorsAndContext) {
					return A3(
						$elm$core$List$foldl,
						A3(
							$jfmengels$elm_review$Review$Rule$visitDeclaration,
							$elm$core$List$reverse(schema.S),
							schema.T,
							expressionVisitor),
						initialErrorsAndContext,
						nodes);
				});
		} else {
			var visitor = A2(
				$jfmengels$elm_review$Review$Rule$visitOnlyDeclaration,
				$elm$core$List$reverse(schema.S),
				schema.T);
			return F2(
				function (nodes, initialErrorsAndContext) {
					return A3($elm$core$List$foldl, visitor, initialErrorsAndContext, nodes);
				});
		}
	} else {
		var _v1 = $jfmengels$elm_review$Review$Rule$createExpressionVisitor(schema);
		if (!_v1.$) {
			var expressionVisitor = _v1.a;
			return F2(
				function (nodes, initialErrorsAndContext) {
					return A3(
						$elm$core$List$foldl,
						$jfmengels$elm_review$Review$Rule$visitDeclarationButOnlyExpressions(expressionVisitor),
						initialErrorsAndContext,
						nodes);
				});
		} else {
			return F2(
				function (_v2, errorsAndContext) {
					return errorsAndContext;
				});
		}
	}
};
var $jfmengels$elm_review$Review$Rule$fromModuleRuleSchemaToRunnableModuleVisitor = function (_v0) {
	var schema = _v0;
	return {
		Y: $elm$core$List$reverse(schema.Y),
		cd: $jfmengels$elm_review$Review$Rule$createDeclarationAndExpressionVisitor(schema),
		_: $elm$core$List$reverse(schema._),
		m: $elm$core$List$reverse(schema.m),
		aa: $elm$core$List$reverse(schema.aa),
		ab: $elm$core$List$reverse(schema.ab)
	};
};
var $jfmengels$elm_review$Review$Rule$mergeModuleVisitors = F3(
	function (initialProjectContext, maybeModuleContextCreator, visitors) {
		var _v0 = _Utils_Tuple2(
			maybeModuleContextCreator,
			$elm$core$List$isEmpty(visitors));
		if (_v0.a.$ === 1) {
			var _v1 = _v0.a;
			return $elm$core$Maybe$Nothing;
		} else {
			if (_v0.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var moduleContextCreator = _v0.a.a;
				var dummyAvailableData = {
					bO: $elm$core$Basics$always('dummy'),
					bW: $jfmengels$elm_review$Review$Rule$createMetadata(
						{
							cv: true,
							b$: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, _List_Nil)
						}),
					bZ: 'dummy',
					ac: $jfmengels$elm_review$Review$ModuleNameLookupTable$Internal$empty
				};
				var initialModuleContext = A3($jfmengels$elm_review$Review$Rule$applyContextCreator, dummyAvailableData, moduleContextCreator, initialProjectContext);
				var emptyModuleVisitor = {
					Q: _List_Nil,
					R: _List_Nil,
					Y: _List_Nil,
					_: _List_Nil,
					S: _List_Nil,
					T: _List_Nil,
					y: _List_Nil,
					z: _List_Nil,
					v: _List_Nil,
					B: _List_Nil,
					m: _List_Nil,
					aa: _List_Nil,
					bu: $elm$core$Maybe$Just(initialModuleContext),
					W: _List_Nil,
					X: _List_Nil,
					F: $jfmengels$elm_review$Review$Rule$initContextCreator(
						$elm$core$Basics$always(initialModuleContext)),
					ab: _List_Nil,
					aW: '',
					C: _List_Nil
				};
				return $elm$core$Maybe$Just(
					_Utils_Tuple2(
						$jfmengels$elm_review$Review$Rule$fromModuleRuleSchemaToRunnableModuleVisitor(
							A3(
								$elm$core$List$foldl,
								F2(
									function (addVisitors, _v2) {
										var moduleVisitorSchema = _v2;
										return addVisitors(moduleVisitorSchema);
									}),
								emptyModuleVisitor,
								visitors)),
						moduleContextCreator));
			}
		}
	});
var $jfmengels$elm_review$Review$Rule$fromProjectRuleSchemaToRunnableProjectVisitor = function (_v0) {
	var schema = _v0;
	return {
		ap: schema.ap,
		y: $elm$core$List$reverse(schema.y),
		z: $elm$core$List$reverse(schema.z),
		m: $elm$core$List$reverse(schema.m),
		ay: schema.ay,
		cx: A3($jfmengels$elm_review$Review$Rule$mergeModuleVisitors, schema.ay, schema.F, schema.a8),
		C: $elm$core$List$reverse(schema.C),
		O: function () {
			var _v1 = schema.F;
			if (!_v1.$) {
				var _v2 = _v1.a;
				var requestedData = _v2.b;
				return requestedData;
			} else {
				return {ac: false, bf: false};
			}
		}(),
		aD: function () {
			var _v3 = _Utils_Tuple2(schema.bE, schema.aL);
			if (!_v3.a) {
				var _v4 = _v3.a;
				return $jfmengels$elm_review$Review$Rule$TraverseAllModulesInParallel(schema.aL);
			} else {
				if (!_v3.b.$) {
					var _v5 = _v3.a;
					var folder = _v3.b.a;
					return $jfmengels$elm_review$Review$Rule$TraverseImportedModulesFirst(folder);
				} else {
					var _v6 = _v3.a;
					var _v7 = _v3.b;
					return $jfmengels$elm_review$Review$Rule$TraverseAllModulesInParallel($elm$core$Maybe$Nothing);
				}
			}
		}()
	};
};
var $jfmengels$elm_review$Review$Rule$accessInternalError = function (error_) {
	if (!error_.$) {
		var internalError = error_.a;
		return internalError;
	} else {
		var internalError = error_.a;
		return internalError;
	}
};
var $elm$core$Dict$isEmpty = function (dict) {
	if (dict.$ === -2) {
		return true;
	} else {
		return false;
	}
};
var $elm$core$Set$isEmpty = function (_v0) {
	var dict = _v0;
	return $elm$core$Dict$isEmpty(dict);
};
var $jfmengels$elm_review$Review$Exceptions$isInAnIgnoredDirectory = F2(
	function (directories, path) {
		return A2(
			$elm$core$List$any,
			function (dir) {
				return A2($elm$core$String$startsWith, dir, path);
			},
			directories);
	});
var $elm$core$String$replace = F3(
	function (before, after, string) {
		return A2(
			$elm$core$String$join,
			after,
			A2($elm$core$String$split, before, string));
	});
var $jfmengels$elm_review$Review$Exceptions$makePathOSAgnostic = function (path) {
	return A3($elm$core$String$replace, '\\', '/', path);
};
var $jfmengels$elm_review$Review$Exceptions$shouldBeIgnored = F2(
	function (exceptions, path) {
		var cleanedPath = $jfmengels$elm_review$Review$Exceptions$makePathOSAgnostic(path);
		return A2($elm$core$Set$member, cleanedPath, exceptions.aK) || A2($jfmengels$elm_review$Review$Exceptions$isInAnIgnoredDirectory, exceptions.aI, cleanedPath);
	});
var $jfmengels$elm_review$Review$Exceptions$apply = F3(
	function (_v0, getPath, items) {
		var exceptions = _v0;
		return ($elm$core$Set$isEmpty(exceptions.aK) && $elm$core$List$isEmpty(exceptions.aI)) ? items : A2(
			$elm$core$List$filter,
			A2(
				$elm$core$Basics$composeR,
				getPath,
				A2(
					$elm$core$Basics$composeR,
					$jfmengels$elm_review$Review$Exceptions$shouldBeIgnored(exceptions),
					$elm$core$Basics$not)),
			items);
	});
var $elm$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		if (!maybeValue.$) {
			var value = maybeValue.a;
			return callback(value);
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $stil4m$elm_syntax$Elm$Syntax$Module$moduleName = function (m) {
	switch (m.$) {
		case 0:
			var x = m.a;
			return $stil4m$elm_syntax$Elm$Syntax$Node$value(x.b_);
		case 1:
			var x = m.a;
			return $stil4m$elm_syntax$Elm$Syntax$Node$value(x.b_);
		default:
			var x = m.a;
			return $stil4m$elm_syntax$Elm$Syntax$Node$value(x.b_);
	}
};
var $jfmengels$elm_review$Review$Rule$getModuleName = function (module_) {
	return $stil4m$elm_syntax$Elm$Syntax$Module$moduleName(
		$stil4m$elm_syntax$Elm$Syntax$Node$value(module_.dO.ed));
};
var $jfmengels$elm_review$Review$Rule$contextFromImportedModulesIsUnchanged = F3(
	function (traversalAndFolder, importedModules, invalidatedModules) {
		if (!traversalAndFolder.$) {
			return true;
		} else {
			return !A2(
				$elm$core$List$any,
				function (importedModule) {
					return A2(
						$elm$core$Set$member,
						$jfmengels$elm_review$Review$Rule$getModuleName(importedModule),
						invalidatedModules);
				},
				importedModules);
		}
	});
var $elm$core$Bitwise$and = _Bitwise_and;
var $elm$core$Basics$neq = _Utils_notEqual;
var $elm$core$Bitwise$complement = _Bitwise_complement;
var $elm$core$Bitwise$or = _Bitwise_or;
var $elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
var $jfmengels$elm_review$Vendor$IntDict$highestBitSet = function (n) {
	var shiftOr = F2(
		function (i, shift) {
			return i | (i >>> shift);
		});
	var n1 = A2(shiftOr, n, 1);
	var n2 = A2(shiftOr, n1, 2);
	var n3 = A2(shiftOr, n2, 4);
	var n4 = A2(shiftOr, n3, 8);
	var n5 = A2(shiftOr, n4, 16);
	return n5 & (~(n5 >>> 1));
};
var $elm$core$Basics$negate = function (n) {
	return -n;
};
var $jfmengels$elm_review$Vendor$IntDict$signBit = $jfmengels$elm_review$Vendor$IntDict$highestBitSet(-1);
var $elm$core$Bitwise$xor = _Bitwise_xor;
var $jfmengels$elm_review$Vendor$IntDict$isBranchingBitSet = function (p) {
	return A2(
		$elm$core$Basics$composeR,
		$elm$core$Bitwise$xor($jfmengels$elm_review$Vendor$IntDict$signBit),
		A2(
			$elm$core$Basics$composeR,
			$elm$core$Bitwise$and(p.aY),
			$elm$core$Basics$neq(0)));
};
var $jfmengels$elm_review$Vendor$IntDict$higherBitMask = function (branchingBit) {
	return branchingBit ^ (~(branchingBit - 1));
};
var $jfmengels$elm_review$Vendor$IntDict$prefixMatches = F2(
	function (p, n) {
		return _Utils_eq(
			n & $jfmengels$elm_review$Vendor$IntDict$higherBitMask(p.aY),
			p.ae);
	});
var $jfmengels$elm_review$Vendor$IntDict$get = F2(
	function (key, dict) {
		get:
		while (true) {
			switch (dict.$) {
				case 0:
					return $elm$core$Maybe$Nothing;
				case 1:
					var l = dict.a;
					return _Utils_eq(l.bv, key) ? $elm$core$Maybe$Just(l.b9) : $elm$core$Maybe$Nothing;
				default:
					var i = dict.a;
					if (!A2($jfmengels$elm_review$Vendor$IntDict$prefixMatches, i.g, key)) {
						return $elm$core$Maybe$Nothing;
					} else {
						if (A2($jfmengels$elm_review$Vendor$IntDict$isBranchingBitSet, i.g, key)) {
							var $temp$key = key,
								$temp$dict = i.e;
							key = $temp$key;
							dict = $temp$dict;
							continue get;
						} else {
							var $temp$key = key,
								$temp$dict = i.d;
							key = $temp$key;
							dict = $temp$dict;
							continue get;
						}
					}
			}
		}
	});
var $jfmengels$elm_review$Vendor$Graph$unGraph = function (graph) {
	var rep = graph;
	return rep;
};
var $jfmengels$elm_review$Vendor$Graph$get = function (nodeId) {
	return A2(
		$elm$core$Basics$composeR,
		$jfmengels$elm_review$Vendor$Graph$unGraph,
		$jfmengels$elm_review$Vendor$IntDict$get(nodeId));
};
var $jfmengels$elm_review$Vendor$IntDict$foldr = F3(
	function (f, acc, dict) {
		foldr:
		while (true) {
			switch (dict.$) {
				case 0:
					return acc;
				case 1:
					var l = dict.a;
					return A3(f, l.bv, l.b9, acc);
				default:
					var i = dict.a;
					var $temp$f = f,
						$temp$acc = A3($jfmengels$elm_review$Vendor$IntDict$foldr, f, acc, i.e),
						$temp$dict = i.d;
					f = $temp$f;
					acc = $temp$acc;
					dict = $temp$dict;
					continue foldr;
			}
		}
	});
var $jfmengels$elm_review$Vendor$IntDict$keys = function (dict) {
	return A3(
		$jfmengels$elm_review$Vendor$IntDict$foldr,
		F3(
			function (key, value, keyList) {
				return A2($elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (!maybe.$) {
			var value = maybe.a;
			return $elm$core$Maybe$Just(
				f(value));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $jfmengels$elm_review$Review$Rule$computeModuleAndCacheResult = F6(
	function (traversalAndFolder, modules, graph, computeModule, _v0, _v1) {
		var node = _v0.di;
		var incoming = _v0.c9;
		var cache = _v1.a;
		var invalidatedModules = _v1.b;
		var _v2 = A2($elm$core$Dict$get, node.cw, modules);
		if (_v2.$ === 1) {
			return _Utils_Tuple2(cache, invalidatedModules);
		} else {
			var module_ = _v2.a;
			var importedModules = function () {
				if (!traversalAndFolder.$) {
					return _List_Nil;
				} else {
					return A2(
						$elm$core$List$filterMap,
						function (key) {
							return A2(
								$elm$core$Maybe$andThen,
								function (nodeContext) {
									return A2($elm$core$Dict$get, nodeContext.di.cw, modules);
								},
								A2($jfmengels$elm_review$Vendor$Graph$get, key, graph));
						},
						$jfmengels$elm_review$Vendor$IntDict$keys(incoming));
				}
			}();
			var compute = function (previousResult) {
				var result = A3(computeModule, cache, importedModules, module_);
				return _Utils_Tuple2(
					A3($elm$core$Dict$insert, module_.es, result, cache),
					(!_Utils_eq(
						$elm$core$Maybe$Just(result.f),
						A2(
							$elm$core$Maybe$map,
							function ($) {
								return $.f;
							},
							previousResult))) ? A2(
						$elm$core$Set$insert,
						$jfmengels$elm_review$Review$Rule$getModuleName(module_),
						invalidatedModules) : invalidatedModules);
			};
			var _v3 = A2($elm$core$Dict$get, module_.es, cache);
			if (_v3.$ === 1) {
				return compute($elm$core$Maybe$Nothing);
			} else {
				var cacheEntry = _v3.a;
				return (_Utils_eq(cacheEntry.eA, module_.eA) && A3($jfmengels$elm_review$Review$Rule$contextFromImportedModulesIsUnchanged, traversalAndFolder, importedModules, invalidatedModules)) ? _Utils_Tuple2(cache, invalidatedModules) : compute(
					$elm$core$Maybe$Just(cacheEntry));
			}
		}
	});
var $elm$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (n <= 0) {
				return list;
			} else {
				if (!list.b) {
					return list;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs;
					n = $temp$n;
					list = $temp$list;
					continue drop;
				}
			}
		}
	});
var $elm$core$String$length = _String_length;
var $elm$core$String$slice = _String_slice;
var $elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			$elm$core$String$slice,
			n,
			$elm$core$String$length(string),
			string);
	});
var $jfmengels$elm_review$Review$Rule$mapLast = F2(
	function (mapper, lines) {
		var _v0 = $elm$core$List$reverse(lines);
		if (!_v0.b) {
			return lines;
		} else {
			var first = _v0.a;
			var rest = _v0.b;
			return $elm$core$List$reverse(
				A2(
					$elm$core$List$cons,
					mapper(first),
					rest));
		}
	});
var $elm$core$List$takeReverse = F3(
	function (n, list, kept) {
		takeReverse:
		while (true) {
			if (n <= 0) {
				return kept;
			} else {
				if (!list.b) {
					return kept;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs,
						$temp$kept = A2($elm$core$List$cons, x, kept);
					n = $temp$n;
					list = $temp$list;
					kept = $temp$kept;
					continue takeReverse;
				}
			}
		}
	});
var $elm$core$List$takeTailRec = F2(
	function (n, list) {
		return $elm$core$List$reverse(
			A3($elm$core$List$takeReverse, n, list, _List_Nil));
	});
var $elm$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (n <= 0) {
			return _List_Nil;
		} else {
			var _v0 = _Utils_Tuple2(n, list);
			_v0$1:
			while (true) {
				_v0$5:
				while (true) {
					if (!_v0.b.b) {
						return list;
					} else {
						if (_v0.b.b.b) {
							switch (_v0.a) {
								case 1:
									break _v0$1;
								case 2:
									var _v2 = _v0.b;
									var x = _v2.a;
									var _v3 = _v2.b;
									var y = _v3.a;
									return _List_fromArray(
										[x, y]);
								case 3:
									if (_v0.b.b.b.b) {
										var _v4 = _v0.b;
										var x = _v4.a;
										var _v5 = _v4.b;
										var y = _v5.a;
										var _v6 = _v5.b;
										var z = _v6.a;
										return _List_fromArray(
											[x, y, z]);
									} else {
										break _v0$5;
									}
								default:
									if (_v0.b.b.b.b && _v0.b.b.b.b.b) {
										var _v7 = _v0.b;
										var x = _v7.a;
										var _v8 = _v7.b;
										var y = _v8.a;
										var _v9 = _v8.b;
										var z = _v9.a;
										var _v10 = _v9.b;
										var w = _v10.a;
										var tl = _v10.b;
										return (ctr > 1000) ? A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A2($elm$core$List$takeTailRec, n - 4, tl))))) : A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A3($elm$core$List$takeFast, ctr + 1, n - 4, tl)))));
									} else {
										break _v0$5;
									}
							}
						} else {
							if (_v0.a === 1) {
								break _v0$1;
							} else {
								break _v0$5;
							}
						}
					}
				}
				return list;
			}
			var _v1 = _v0.b;
			var x = _v1.a;
			return _List_fromArray(
				[x]);
		}
	});
var $elm$core$List$take = F2(
	function (n, list) {
		return A3($elm$core$List$takeFast, 0, n, list);
	});
var $jfmengels$elm_review$Review$Rule$extractSourceCode = F2(
	function (lines, range) {
		return A2(
			$elm$core$String$dropLeft,
			range.bg.an - 1,
			A2(
				$elm$core$String$join,
				'\n',
				A2(
					$jfmengels$elm_review$Review$Rule$mapLast,
					A2($elm$core$String$slice, 0, range.a$.an - 1),
					A2(
						$elm$core$List$take,
						(range.a$.aB - range.bg.aB) + 1,
						A2($elm$core$List$drop, range.bg.aB - 1, lines)))));
	});
var $elm$core$Dict$foldl = F3(
	function (func, acc, dict) {
		foldl:
		while (true) {
			if (dict.$ === -2) {
				return acc;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldl, func, acc, left)),
					$temp$dict = right;
				func = $temp$func;
				acc = $temp$acc;
				dict = $temp$dict;
				continue foldl;
			}
		}
	});
var $elm$core$Dict$filter = F2(
	function (isGood, dict) {
		return A3(
			$elm$core$Dict$foldl,
			F3(
				function (k, v, d) {
					return A2(isGood, k, v) ? A3($elm$core$Dict$insert, k, v, d) : d;
				}),
			$elm$core$Dict$empty,
			dict);
	});
var $jfmengels$elm_review$Review$Rule$getFolderFromTraversal = function (traversalAndFolder) {
	if (!traversalAndFolder.$) {
		var maybeFolder = traversalAndFolder.a;
		return maybeFolder;
	} else {
		var folder = traversalAndFolder.a;
		return $elm$core$Maybe$Just(folder);
	}
};
var $jfmengels$elm_review$Review$Project$Internal$getModuleName = function (module_) {
	return $stil4m$elm_syntax$Elm$Syntax$Module$moduleName(
		$stil4m$elm_syntax$Elm$Syntax$Node$value(module_.dO.ed));
};
var $jfmengels$elm_review$Vendor$Graph$Graph = $elm$core$Basics$identity;
var $jfmengels$elm_review$Vendor$Graph$NodeContext = F3(
	function (node, incoming, outgoing) {
		return {c9: incoming, di: node, h: outgoing};
	});
var $jfmengels$elm_review$Vendor$IntDict$Empty = {$: 0};
var $jfmengels$elm_review$Vendor$IntDict$empty = $jfmengels$elm_review$Vendor$IntDict$Empty;
var $jfmengels$elm_review$Vendor$IntDict$Inner = function (a) {
	return {$: 2, a: a};
};
var $jfmengels$elm_review$Vendor$IntDict$size = function (dict) {
	switch (dict.$) {
		case 0:
			return 0;
		case 1:
			return 1;
		default:
			var i = dict.a;
			return i.cG;
	}
};
var $jfmengels$elm_review$Vendor$IntDict$inner = F3(
	function (p, l, r) {
		var _v0 = _Utils_Tuple2(l, r);
		if (!_v0.a.$) {
			var _v1 = _v0.a;
			return r;
		} else {
			if (!_v0.b.$) {
				var _v2 = _v0.b;
				return l;
			} else {
				return $jfmengels$elm_review$Vendor$IntDict$Inner(
					{
						d: l,
						g: p,
						e: r,
						cG: $jfmengels$elm_review$Vendor$IntDict$size(l) + $jfmengels$elm_review$Vendor$IntDict$size(r)
					});
			}
		}
	});
var $jfmengels$elm_review$Vendor$IntDict$lcp = F2(
	function (x, y) {
		var branchingBit = $jfmengels$elm_review$Vendor$IntDict$highestBitSet(x ^ y);
		var mask = $jfmengels$elm_review$Vendor$IntDict$higherBitMask(branchingBit);
		var prefixBits = x & mask;
		return {aY: branchingBit, ae: prefixBits};
	});
var $jfmengels$elm_review$Vendor$IntDict$Leaf = function (a) {
	return {$: 1, a: a};
};
var $jfmengels$elm_review$Vendor$IntDict$leaf = F2(
	function (k, v) {
		return $jfmengels$elm_review$Vendor$IntDict$Leaf(
			{bv: k, b9: v});
	});
var $jfmengels$elm_review$Vendor$IntDict$update = F3(
	function (key, alter, dict) {
		var join = F2(
			function (_v2, _v3) {
				var k1 = _v2.a;
				var l = _v2.b;
				var k2 = _v3.a;
				var r = _v3.b;
				var prefix = A2($jfmengels$elm_review$Vendor$IntDict$lcp, k1, k2);
				return A2($jfmengels$elm_review$Vendor$IntDict$isBranchingBitSet, prefix, k2) ? A3($jfmengels$elm_review$Vendor$IntDict$inner, prefix, l, r) : A3($jfmengels$elm_review$Vendor$IntDict$inner, prefix, r, l);
			});
		var alteredNode = function (mv) {
			var _v1 = alter(mv);
			if (!_v1.$) {
				var v = _v1.a;
				return A2($jfmengels$elm_review$Vendor$IntDict$leaf, key, v);
			} else {
				return $jfmengels$elm_review$Vendor$IntDict$empty;
			}
		};
		switch (dict.$) {
			case 0:
				return alteredNode($elm$core$Maybe$Nothing);
			case 1:
				var l = dict.a;
				return _Utils_eq(l.bv, key) ? alteredNode(
					$elm$core$Maybe$Just(l.b9)) : A2(
					join,
					_Utils_Tuple2(
						key,
						alteredNode($elm$core$Maybe$Nothing)),
					_Utils_Tuple2(l.bv, dict));
			default:
				var i = dict.a;
				return A2($jfmengels$elm_review$Vendor$IntDict$prefixMatches, i.g, key) ? (A2($jfmengels$elm_review$Vendor$IntDict$isBranchingBitSet, i.g, key) ? A3(
					$jfmengels$elm_review$Vendor$IntDict$inner,
					i.g,
					i.d,
					A3($jfmengels$elm_review$Vendor$IntDict$update, key, alter, i.e)) : A3(
					$jfmengels$elm_review$Vendor$IntDict$inner,
					i.g,
					A3($jfmengels$elm_review$Vendor$IntDict$update, key, alter, i.d),
					i.e)) : A2(
					join,
					_Utils_Tuple2(
						key,
						alteredNode($elm$core$Maybe$Nothing)),
					_Utils_Tuple2(i.g.ae, dict));
		}
	});
var $jfmengels$elm_review$Vendor$IntDict$insert = F3(
	function (key, value, dict) {
		return A3(
			$jfmengels$elm_review$Vendor$IntDict$update,
			key,
			$elm$core$Basics$always(
				$elm$core$Maybe$Just(value)),
			dict);
	});
var $jfmengels$elm_review$Vendor$IntDict$member = F2(
	function (key, dict) {
		var _v0 = A2($jfmengels$elm_review$Vendor$IntDict$get, key, dict);
		if (!_v0.$) {
			return true;
		} else {
			return false;
		}
	});
var $jfmengels$elm_review$Vendor$Graph$fromNodesAndEdges = F2(
	function (nodes_, edges_) {
		var nodeRep = A3(
			$elm$core$List$foldl,
			function (n) {
				return A2(
					$jfmengels$elm_review$Vendor$IntDict$insert,
					n.bQ,
					A3($jfmengels$elm_review$Vendor$Graph$NodeContext, n, $jfmengels$elm_review$Vendor$IntDict$empty, $jfmengels$elm_review$Vendor$IntDict$empty));
			},
			$jfmengels$elm_review$Vendor$IntDict$empty,
			nodes_);
		var addEdge = F2(
			function (edge, rep) {
				var updateOutgoing = function (ctx) {
					return _Utils_update(
						ctx,
						{
							h: A3($jfmengels$elm_review$Vendor$IntDict$insert, edge.eJ, edge.cw, ctx.h)
						});
				};
				var updateIncoming = function (ctx) {
					return _Utils_update(
						ctx,
						{
							c9: A3($jfmengels$elm_review$Vendor$IntDict$insert, edge.d4, edge.cw, ctx.c9)
						});
				};
				return A3(
					$jfmengels$elm_review$Vendor$IntDict$update,
					edge.eJ,
					$elm$core$Maybe$map(updateIncoming),
					A3(
						$jfmengels$elm_review$Vendor$IntDict$update,
						edge.d4,
						$elm$core$Maybe$map(updateOutgoing),
						rep));
			});
		var addEdgeIfValid = F2(
			function (edge, rep) {
				return (A2($jfmengels$elm_review$Vendor$IntDict$member, edge.d4, rep) && A2($jfmengels$elm_review$Vendor$IntDict$member, edge.eJ, rep)) ? A2(addEdge, edge, rep) : rep;
			});
		return A3($elm$core$List$foldl, addEdgeIfValid, nodeRep, edges_);
	});
var $jfmengels$elm_review$Vendor$Graph$Edge = F3(
	function (from, to, label) {
		return {d4: from, cw: label, eJ: to};
	});
var $jfmengels$elm_review$Vendor$Graph$Node = F2(
	function (id, label) {
		return {bQ: id, cw: label};
	});
var $jfmengels$elm_review$Review$Project$Internal$importedModules = function (module_) {
	return A2(
		$elm$core$List$map,
		A2(
			$elm$core$Basics$composeR,
			$stil4m$elm_syntax$Elm$Syntax$Node$value,
			A2(
				$elm$core$Basics$composeR,
				function ($) {
					return $.b_;
				},
				$stil4m$elm_syntax$Elm$Syntax$Node$value)),
		module_.dO.d7);
};
var $jfmengels$elm_review$Review$Project$Internal$nodesAndEdges = F3(
	function (getModuleId, module_, moduleId) {
		var moduleName = $jfmengels$elm_review$Review$Project$Internal$getModuleName(module_);
		return _Utils_Tuple2(
			A2($jfmengels$elm_review$Vendor$Graph$Node, moduleId, moduleName),
			A2(
				$elm$core$List$map,
				function (importedModuleId) {
					return A3($jfmengels$elm_review$Vendor$Graph$Edge, importedModuleId, moduleId, 0);
				},
				A2(
					$elm$core$List$filterMap,
					getModuleId,
					$jfmengels$elm_review$Review$Project$Internal$importedModules(module_))));
	});
var $elm$core$Tuple$pair = F2(
	function (a, b) {
		return _Utils_Tuple2(a, b);
	});
var $jfmengels$elm_review$Review$Project$Internal$buildModuleGraph = function (mods) {
	var moduleIds = A3(
		$elm$core$List$foldl,
		F2(
			function (_v4, dict) {
				var index = _v4.a;
				var module_ = _v4.b;
				return A3(
					$elm$core$Dict$insert,
					$jfmengels$elm_review$Review$Project$Internal$getModuleName(module_),
					index,
					dict);
			}),
		$elm$core$Dict$empty,
		A2($elm$core$List$indexedMap, $elm$core$Tuple$pair, mods));
	var getModuleId = function (moduleName) {
		getModuleId:
		while (true) {
			var _v0 = A2($elm$core$Dict$get, moduleName, moduleIds);
			if (!_v0.$) {
				var moduleId = _v0.a;
				return moduleId;
			} else {
				var $temp$moduleName = moduleName;
				moduleName = $temp$moduleName;
				continue getModuleId;
			}
		}
	};
	var _v1 = A3(
		$elm$core$List$foldl,
		F2(
			function (module_, _v2) {
				var resNodes = _v2.a;
				var resEdges = _v2.b;
				var _v3 = A3(
					$jfmengels$elm_review$Review$Project$Internal$nodesAndEdges,
					function (moduleName) {
						return A2($elm$core$Dict$get, moduleName, moduleIds);
					},
					module_,
					getModuleId(
						$jfmengels$elm_review$Review$Project$Internal$getModuleName(module_)));
				var moduleNode = _v3.a;
				var modulesEdges = _v3.b;
				return _Utils_Tuple2(
					A2($elm$core$List$cons, moduleNode, resNodes),
					$elm$core$List$concat(
						_List_fromArray(
							[modulesEdges, resEdges])));
			}),
		_Utils_Tuple2(_List_Nil, _List_Nil),
		mods);
	var nodes = _v1.a;
	var edges = _v1.b;
	return A2($jfmengels$elm_review$Vendor$Graph$fromNodesAndEdges, nodes, edges);
};
var $elm$core$Dict$values = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, valueList) {
				return A2($elm$core$List$cons, value, valueList);
			}),
		_List_Nil,
		dict);
};
var $jfmengels$elm_review$Review$Project$Internal$moduleGraph = function (_v0) {
	var project = _v0;
	var _v1 = project.bY;
	if (!_v1.$) {
		var graph = _v1.a;
		return graph;
	} else {
		return $jfmengels$elm_review$Review$Project$Internal$buildModuleGraph(
			$elm$core$Dict$values(project.ad));
	}
};
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (!maybe.$) {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var $jfmengels$elm_review$Review$Project$Internal$moduleNameLookupTables = function (_v0) {
	var project = _v0;
	return A2($elm$core$Maybe$withDefault, $elm$core$Dict$empty, project.ee);
};
var $jfmengels$elm_review$Review$Rule$moduleNameNode = function (node) {
	var _v0 = $stil4m$elm_syntax$Elm$Syntax$Node$value(node);
	switch (_v0.$) {
		case 0:
			var data = _v0.a;
			return data.b_;
		case 1:
			var data = _v0.a;
			return data.b_;
		default:
			var data = _v0.a;
			return data.b_;
	}
};
var $jfmengels$elm_review$Review$Project$modules = function (_v0) {
	var project = _v0;
	return $elm$core$Dict$values(project.ad);
};
var $jfmengels$elm_review$Review$Rule$setFilePathIfUnset = F2(
	function (module_, error_) {
		if (!error_.$) {
			var err = error_.a;
			return $jfmengels$elm_review$Review$Rule$SpecifiedError(
				_Utils_update(
					err,
					{
						cn: function () {
							var _v1 = err.cn;
							if (_v1 === '') {
								return module_.es;
							} else {
								return err.cn;
							}
						}()
					}));
		} else {
			return error_;
		}
	});
var $jfmengels$elm_review$Review$Rule$accumulateList = F3(
	function (visitor, elements, errorAndContext) {
		return A3(
			$elm$core$List$foldl,
			$jfmengels$elm_review$Review$Rule$visitWithListOfVisitors(visitor),
			errorAndContext,
			elements);
	});
var $jfmengels$elm_review$Review$Rule$accumulateWithListOfVisitors = F3(
	function (visitors, element, initialErrorsAndContext) {
		return A3(
			$elm$core$List$foldl,
			F2(
				function (visitor, errorsAndContext) {
					return A2(
						$jfmengels$elm_review$Review$Rule$accumulate,
						visitor(element),
						errorsAndContext);
				}),
			initialErrorsAndContext,
			visitors);
	});
var $jfmengels$elm_review$Vendor$ListExtra$fastConcatMap = F2(
	function (fn, list) {
		return A3(
			$elm$core$List$foldr,
			A2($elm$core$Basics$composeR, fn, $elm$core$Basics$append),
			_List_Nil,
			list);
	});
var $jfmengels$elm_review$Review$Rule$makeFinalEvaluation = F2(
	function (finalEvaluationFns, _v0) {
		var previousErrors = _v0.a;
		var context = _v0.b;
		return A2(
			$elm$core$List$append,
			A2(
				$jfmengels$elm_review$Vendor$ListExtra$fastConcatMap,
				function (visitor) {
					return visitor(context);
				},
				finalEvaluationFns),
			previousErrors);
	});
var $jfmengels$elm_review$Review$Rule$visitModuleForProjectRule = F3(
	function (schema, initialContext, module_) {
		return function (_v0) {
			var errors = _v0.a;
			var moduleContext = _v0.b;
			return _Utils_Tuple2(
				A2(
					$jfmengels$elm_review$Review$Rule$makeFinalEvaluation,
					schema.m,
					_Utils_Tuple2(errors, moduleContext)),
				moduleContext);
		}(
			A2(
				schema.cd,
				module_.dO.cW,
				A3(
					$jfmengels$elm_review$Review$Rule$accumulateWithListOfVisitors,
					schema._,
					module_.dO.cW,
					A3(
						$jfmengels$elm_review$Review$Rule$accumulateList,
						schema.aa,
						module_.dO.d7,
						A3(
							$jfmengels$elm_review$Review$Rule$accumulateWithListOfVisitors,
							schema.Y,
							module_.dO.dW,
							A3(
								$jfmengels$elm_review$Review$Rule$accumulateWithListOfVisitors,
								schema.ab,
								module_.dO.ed,
								_Utils_Tuple2(_List_Nil, initialContext)))))));
	});
var $jfmengels$elm_review$Review$Rule$computeModules = F7(
	function (projectVisitor, _v0, project, exceptions, initialProjectContext, nodeContexts, startCache) {
		var moduleVisitor = _v0.a;
		var moduleContextCreator = _v0.b;
		var modulesToAnalyze = function () {
			var _v6 = projectVisitor.aD;
			if (!_v6.$) {
				if (!_v6.a.$) {
					return $jfmengels$elm_review$Review$Project$modules(project);
				} else {
					var _v7 = _v6.a;
					return A3(
						$jfmengels$elm_review$Review$Exceptions$apply,
						exceptions,
						function ($) {
							return $.es;
						},
						$jfmengels$elm_review$Review$Project$modules(project));
				}
			} else {
				return $jfmengels$elm_review$Review$Project$modules(project);
			}
		}();
		var projectModulePaths = $elm$core$Set$fromList(
			A2(
				$elm$core$List$map,
				function ($) {
					return $.es;
				},
				modulesToAnalyze));
		var newStartCache = A2(
			$elm$core$Dict$filter,
			F2(
				function (path, _v5) {
					return A2($elm$core$Set$member, path, projectModulePaths);
				}),
			startCache);
		var modules = A3(
			$elm$core$List$foldl,
			F2(
				function (module_, dict) {
					return A3(
						$elm$core$Dict$insert,
						$jfmengels$elm_review$Review$Rule$getModuleName(module_),
						module_,
						dict);
				}),
			$elm$core$Dict$empty,
			modulesToAnalyze);
		var moduleNameLookupTables = $jfmengels$elm_review$Review$Project$Internal$moduleNameLookupTables(project);
		var graph = $jfmengels$elm_review$Review$Project$Internal$moduleGraph(project);
		var computeModule = F3(
			function (cache, importedModules, module_) {
				var moduleKey = module_.es;
				var metadata = $jfmengels$elm_review$Review$Rule$createMetadata(
					{
						cv: module_.cv,
						b$: $jfmengels$elm_review$Review$Rule$moduleNameNode(module_.dO.ed)
					});
				var availableData = {
					bO: function () {
						var _v4 = projectVisitor.O;
						var requestedData = _v4;
						return requestedData.bf ? $jfmengels$elm_review$Review$Rule$extractSourceCode(
							$elm$core$String$lines(module_.eA)) : $elm$core$Basics$always('');
					}(),
					bW: metadata,
					bZ: moduleKey,
					ac: A2(
						$elm$core$Maybe$withDefault,
						$jfmengels$elm_review$Review$ModuleNameLookupTable$Internal$empty,
						A2(
							$elm$core$Dict$get,
							$jfmengels$elm_review$Review$Project$Internal$getModuleName(module_),
							moduleNameLookupTables))
				};
				var initialModuleContext = function () {
					var _v3 = projectVisitor.aD;
					if (!_v3.$) {
						return A3($jfmengels$elm_review$Review$Rule$applyContextCreator, availableData, moduleContextCreator, initialProjectContext);
					} else {
						var foldProjectContexts = _v3.a.aj;
						var projectContext = A3(
							$elm$core$List$foldl,
							foldProjectContexts,
							initialProjectContext,
							A2(
								$elm$core$List$filterMap,
								function (importedModule) {
									return A2(
										$elm$core$Maybe$map,
										function ($) {
											return $.f;
										},
										A2($elm$core$Dict$get, importedModule.es, cache));
								},
								importedModules));
						return A3($jfmengels$elm_review$Review$Rule$applyContextCreator, availableData, moduleContextCreator, projectContext);
					}
				}();
				var _v1 = A3($jfmengels$elm_review$Review$Rule$visitModuleForProjectRule, moduleVisitor, initialModuleContext, module_);
				var moduleErrors = _v1.a;
				var context = _v1.b;
				return {
					f: function () {
						var _v2 = $jfmengels$elm_review$Review$Rule$getFolderFromTraversal(projectVisitor.aD);
						if (!_v2.$) {
							var fromModuleToProject = _v2.a.aM;
							return A3($jfmengels$elm_review$Review$Rule$applyContextCreator, availableData, fromModuleToProject, context);
						} else {
							return initialProjectContext;
						}
					}(),
					at: A2(
						$elm$core$List$map,
						$jfmengels$elm_review$Review$Rule$setFilePathIfUnset(module_),
						moduleErrors),
					eA: module_.eA
				};
			});
		return A3(
			$elm$core$List$foldl,
			A4($jfmengels$elm_review$Review$Rule$computeModuleAndCacheResult, projectVisitor.aD, modules, graph, computeModule),
			_Utils_Tuple2(newStartCache, $elm$core$Set$empty),
			nodeContexts).a;
	});
var $jfmengels$elm_review$Review$Rule$ElmJsonKey = $elm$core$Basics$identity;
var $jfmengels$elm_review$Review$Rule$ReadmeKey = $elm$core$Basics$identity;
var $jfmengels$elm_review$Review$Project$dependencies = function (_v0) {
	var project = _v0;
	return project.aG;
};
var $jfmengels$elm_review$Review$Project$elmJson = function (_v0) {
	var project = _v0;
	return project.ch;
};
var $jfmengels$elm_review$Review$Project$readme = function (_v0) {
	var project = _v0;
	return project.cC;
};
var $jfmengels$elm_review$Review$Rule$computeProjectContext = F3(
	function (projectVisitor, project, maybePreviousCache) {
		var readmeData = A2(
			$elm$core$Maybe$map,
			function (readme) {
				return {
					a_: readme.a_,
					ev: {a_: readme.a_, es: readme.es}
				};
			},
			$jfmengels$elm_review$Review$Project$readme(project));
		var projectElmJson = $jfmengels$elm_review$Review$Project$elmJson(project);
		var elmJsonData = A2(
			$elm$core$Maybe$map,
			function (elmJson) {
				return {d$: elmJson, c: elmJson.c};
			},
			projectElmJson);
		var elmJsonCacheEntry = function () {
			var computeElmJson = function (_v9) {
				var _v8 = A3(
					$jfmengels$elm_review$Review$Rule$accumulateWithListOfVisitors,
					projectVisitor.z,
					elmJsonData,
					_Utils_Tuple2(_List_Nil, projectVisitor.ay));
				var errorsForVisitor = _v8.a;
				var contextForVisitor = _v8.b;
				return {f: contextForVisitor, at: errorsForVisitor, b9: projectElmJson};
			};
			if (!maybePreviousCache.$) {
				var previousCache = maybePreviousCache.a;
				return _Utils_eq(previousCache.ch.b9, projectElmJson) ? previousCache.ch : computeElmJson(0);
			} else {
				return computeElmJson(0);
			}
		}();
		var readmeCacheEntry = function () {
			var computeReadme = function (_v6) {
				var _v5 = A3(
					$jfmengels$elm_review$Review$Rule$accumulateWithListOfVisitors,
					projectVisitor.C,
					readmeData,
					_Utils_Tuple2(_List_Nil, elmJsonCacheEntry.f));
				var errorsForVisitor = _v5.a;
				var contextForVisitor = _v5.b;
				return {f: contextForVisitor, at: errorsForVisitor, b9: readmeData};
			};
			if (!maybePreviousCache.$) {
				var previousCache = maybePreviousCache.a;
				return (_Utils_eq(previousCache.ch.f, elmJsonCacheEntry.f) && _Utils_eq(previousCache.cC.b9, readmeData)) ? previousCache.cC : computeReadme(0);
			} else {
				return computeReadme(0);
			}
		}();
		var _v0 = function () {
			var dependencies = $jfmengels$elm_review$Review$Project$dependencies(project);
			var computeDependencies = function (_v3) {
				var _v2 = A3(
					$jfmengels$elm_review$Review$Rule$accumulateWithListOfVisitors,
					projectVisitor.y,
					dependencies,
					_Utils_Tuple2(_List_Nil, readmeCacheEntry.f));
				var errorsForVisitor = _v2.a;
				var contextForVisitor = _v2.b;
				return {f: contextForVisitor, at: errorsForVisitor, b9: dependencies};
			};
			if (!maybePreviousCache.$) {
				var previousCache = maybePreviousCache.a;
				return (_Utils_eq(previousCache.cC.f, readmeCacheEntry.f) && _Utils_eq(previousCache.aG.b9, dependencies)) ? _Utils_Tuple2(previousCache.aG, false) : _Utils_Tuple2(
					computeDependencies(0),
					true);
			} else {
				return _Utils_Tuple2(
					computeDependencies(0),
					true);
			}
		}();
		var dependenciesCacheEntry = _v0.a;
		var hasAnythingChanged = _v0.b;
		return _Utils_Tuple2(
			{aG: dependenciesCacheEntry, ch: elmJsonCacheEntry, br: _List_Nil, by: $elm$core$Dict$empty, cC: readmeCacheEntry},
			hasAnythingChanged);
	});
var $jfmengels$elm_review$Review$Rule$errorsFromCache = function (cache) {
	return $elm$core$List$concat(
		_List_fromArray(
			[
				cache.ch.at,
				cache.cC.at,
				cache.aG.at,
				A2(
				$jfmengels$elm_review$Vendor$ListExtra$fastConcatMap,
				function (cacheEntry) {
					return cacheEntry.at;
				},
				$elm$core$Dict$values(cache.by)),
				cache.br
			]));
};
var $jfmengels$elm_review$Review$Rule$errorsFromFinalEvaluationForProject = F3(
	function (projectVisitor, initialContext, contextsPerModule) {
		if ($elm$core$List$isEmpty(projectVisitor.m)) {
			return _List_Nil;
		} else {
			var finalContext = function () {
				var _v0 = $jfmengels$elm_review$Review$Rule$getFolderFromTraversal(projectVisitor.aD);
				if (!_v0.$) {
					var foldProjectContexts = _v0.a.aj;
					return A3($elm$core$List$foldl, foldProjectContexts, initialContext, contextsPerModule);
				} else {
					return initialContext;
				}
			}();
			return A2(
				$jfmengels$elm_review$Vendor$ListExtra$fastConcatMap,
				function (finalEvaluationFn) {
					return finalEvaluationFn(finalContext);
				},
				projectVisitor.m);
		}
	});
var $elm$core$Tuple$second = function (_v0) {
	var y = _v0.b;
	return y;
};
var $jfmengels$elm_review$Review$Rule$UnspecifiedError = function (a) {
	return {$: 0, a: a};
};
var $jfmengels$elm_review$Review$Rule$mapInternalError = F2(
	function (fn, err) {
		if (!err.$) {
			var internal = err.a;
			return $jfmengels$elm_review$Review$Rule$UnspecifiedError(
				fn(internal));
		} else {
			var internal = err.a;
			return $jfmengels$elm_review$Review$Rule$SpecifiedError(
				fn(internal));
		}
	});
var $jfmengels$elm_review$Review$Rule$setRuleName = F2(
	function (ruleName_, error_) {
		return A2(
			$jfmengels$elm_review$Review$Rule$mapInternalError,
			function (err) {
				return _Utils_update(
					err,
					{cE: ruleName_});
			},
			error_);
	});
var $jfmengels$elm_review$Review$Rule$runProjectVisitor = F6(
	function (name, projectVisitor, maybePreviousCache, exceptions, project, nodeContexts) {
		var _v0 = A3($jfmengels$elm_review$Review$Rule$computeProjectContext, projectVisitor, project, maybePreviousCache);
		var cacheWithInitialContext = _v0.a;
		var hasInitialContextChanged = _v0.b;
		var initialContext = cacheWithInitialContext.aG.f;
		var previousModuleContexts = function () {
			if (hasInitialContextChanged) {
				return $elm$core$Dict$empty;
			} else {
				if (!maybePreviousCache.$) {
					var moduleContexts = maybePreviousCache.a.by;
					return moduleContexts;
				} else {
					return $elm$core$Dict$empty;
				}
			}
		}();
		var newCachedModuleContexts = function () {
			var _v4 = projectVisitor.cx;
			if (_v4.$ === 1) {
				return $elm$core$Dict$empty;
			} else {
				var moduleVisitor = _v4.a;
				return A7($jfmengels$elm_review$Review$Rule$computeModules, projectVisitor, moduleVisitor, project, exceptions, initialContext, nodeContexts, previousModuleContexts);
			}
		}();
		var contextsAndErrorsPerModule = A2(
			$elm$core$List$map,
			function (cacheEntry) {
				return _Utils_Tuple2(cacheEntry.at, cacheEntry.f);
			},
			$elm$core$Dict$values(newCachedModuleContexts));
		var allModulesContext = A2($elm$core$List$map, $elm$core$Tuple$second, contextsAndErrorsPerModule);
		var previousAllModulesContext = A2(
			$elm$core$List$map,
			function ($) {
				return $.f;
			},
			$elm$core$Dict$values(previousModuleContexts));
		var errorsFromFinalEvaluation = function () {
			if (!maybePreviousCache.$) {
				var previousCache = maybePreviousCache.a;
				return _Utils_eq(allModulesContext, previousAllModulesContext) ? previousCache.br : A3($jfmengels$elm_review$Review$Rule$errorsFromFinalEvaluationForProject, projectVisitor, initialContext, allModulesContext);
			} else {
				return A3($jfmengels$elm_review$Review$Rule$errorsFromFinalEvaluationForProject, projectVisitor, initialContext, allModulesContext);
			}
		}();
		var newCache = {aG: cacheWithInitialContext.aG, ch: cacheWithInitialContext.ch, br: errorsFromFinalEvaluation, by: newCachedModuleContexts, cC: cacheWithInitialContext.cC};
		var errors = A3(
			$jfmengels$elm_review$Review$Exceptions$apply,
			exceptions,
			A2(
				$elm$core$Basics$composeR,
				$jfmengels$elm_review$Review$Rule$accessInternalError,
				function ($) {
					return $.cn;
				}),
			$jfmengels$elm_review$Review$Rule$errorsFromCache(newCache));
		return {
			cT: newCache,
			at: A2(
				$elm$core$List$map,
				$jfmengels$elm_review$Review$Rule$setRuleName(name),
				errors),
			a0: function () {
				var _v1 = projectVisitor.ap;
				if (!_v1.$) {
					var dataExtractor = _v1.a;
					var contextToAnalyze = function () {
						var _v2 = $jfmengels$elm_review$Review$Rule$getFolderFromTraversal(projectVisitor.aD);
						if (!_v2.$) {
							var foldProjectContexts = _v2.a.aj;
							return A3($elm$core$List$foldl, foldProjectContexts, initialContext, allModulesContext);
						} else {
							return initialContext;
						}
					}();
					return $elm$core$Maybe$Just(
						dataExtractor(contextToAnalyze));
				} else {
					return $elm$core$Maybe$Nothing;
				}
			}(),
			cD: {
				ao: $elm$core$Maybe$Nothing,
				au: exceptions,
				aW: name,
				O: projectVisitor.O,
				aC: F3(
					function (newExceptions, newProject, newNodeContexts) {
						var result = A6(
							$jfmengels$elm_review$Review$Rule$runProjectVisitor,
							name,
							projectVisitor,
							$elm$core$Maybe$Just(newCache),
							newExceptions,
							newProject,
							newNodeContexts);
						return _Utils_Tuple2(result.at, result.cD);
					})
			}
		};
	});
var $jfmengels$elm_review$Review$Rule$fromProjectRuleSchema = function (projectRuleSchema) {
	var schema = projectRuleSchema;
	return {
		ao: $elm$core$Maybe$Nothing,
		au: $jfmengels$elm_review$Review$Exceptions$init,
		aW: schema.aW,
		O: function () {
			var _v0 = schema.F;
			if (!_v0.$) {
				var _v1 = _v0.a;
				var requestedData = _v1.b;
				return requestedData;
			} else {
				return {ac: false, bf: false};
			}
		}(),
		aC: F3(
			function (exceptions, project, nodeContexts) {
				var result = A6(
					$jfmengels$elm_review$Review$Rule$runProjectVisitor,
					schema.aW,
					$jfmengels$elm_review$Review$Rule$fromProjectRuleSchemaToRunnableProjectVisitor(projectRuleSchema),
					$elm$core$Maybe$Nothing,
					exceptions,
					project,
					nodeContexts);
				return _Utils_Tuple2(result.at, result.cD);
			})
	};
};
var $elm$core$Dict$fromList = function (assocs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, dict) {
				var key = _v0.a;
				var value = _v0.b;
				return A3($elm$core$Dict$insert, key, value, dict);
			}),
		$elm$core$Dict$empty,
		assocs);
};
var $jfmengels$elm_review$Review$Rule$withModuleNameLookupTable = function (_v0) {
	var fn = _v0.a;
	var requested = _v0.b;
	return A2(
		$jfmengels$elm_review$Review$Rule$ContextCreator,
		function (data) {
			return A2(fn, data, data.ac);
		},
		_Utils_update(
			requested,
			{ac: true}));
};
var $jfmengels$elm_review_common$NoDeprecated$fromProjectToModule = function (_v0) {
	var configuration = _v0;
	return $jfmengels$elm_review$Review$Rule$withModuleNameLookupTable(
		$jfmengels$elm_review$Review$Rule$withMetadata(
			$jfmengels$elm_review$Review$Rule$initContextCreator(
				F3(
					function (metadata, lookupTable, projectContext) {
						var moduleName = $jfmengels$elm_review$Review$Rule$moduleNameFromMetadata(metadata);
						return {
							aF: moduleName,
							t: $elm$core$Set$fromList(projectContext.t),
							u: $elm$core$Dict$fromList(projectContext.u),
							a6: configuration.b0(moduleName),
							bx: _List_Nil,
							j: lookupTable
						};
					}))));
};
var $jfmengels$elm_review_common$NoDeprecated$initialProjectContext = {t: _List_Nil, u: _List_Nil};
var $jfmengels$elm_review_common$NoDeprecated$find = F2(
	function (predicate, list) {
		find:
		while (true) {
			if (!list.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var first = list.a;
				var rest = list.b;
				if (predicate(first)) {
					return $elm$core$Maybe$Just(first);
				} else {
					var $temp$predicate = predicate,
						$temp$list = rest;
					predicate = $temp$predicate;
					list = $temp$list;
					continue find;
				}
			}
		}
	});
var $jfmengels$elm_review_common$NoDeprecated$commentsVisitor = F3(
	function (_v0, comments, moduleContext) {
		var configuration = _v0;
		if (moduleContext.a6) {
			return moduleContext;
		} else {
			var _v1 = A2(
				$jfmengels$elm_review_common$NoDeprecated$find,
				function (_v2) {
					var comment = _v2.b;
					return A2($elm$core$String$startsWith, '{-|', comment);
				},
				comments);
			if (!_v1.$) {
				var _v3 = _v1.a;
				var moduleDocumentation = _v3.b;
				return _Utils_update(
					moduleContext,
					{
						a6: configuration.ah(moduleDocumentation)
					});
			} else {
				return moduleContext;
			}
		}
	});
var $jfmengels$elm_review_common$NoDeprecated$checkDocumentation = F2(
	function (documentationPredicate, documentationNode) {
		if (!documentationNode.$) {
			var _v1 = documentationNode.a;
			var str = _v1.b;
			return documentationPredicate(str);
		} else {
			return false;
		}
	});
var $jfmengels$elm_review_common$NoDeprecated$registerElement = F2(
	function (name, context) {
		return _Utils_update(
			context,
			{
				t: A2(
					$elm$core$Set$insert,
					_Utils_Tuple2(_List_Nil, name),
					context.t),
				bx: A2(
					$elm$core$List$cons,
					_Utils_Tuple2(context.aF, name),
					context.bx)
			});
	});
var $jfmengels$elm_review_common$NoDeprecated$registerAliasDeclaration = F3(
	function (_v0, type_, context) {
		var configuration = _v0;
		var name = $stil4m$elm_syntax$Elm$Syntax$Node$value(type_.aW);
		return (A2(configuration.ar, context.aF, name) || A2($jfmengels$elm_review_common$NoDeprecated$checkDocumentation, configuration.ah, type_.cg)) ? A2($jfmengels$elm_review_common$NoDeprecated$registerElement, name, context) : context;
	});
var $jfmengels$elm_review_common$NoDeprecated$registerCustomTypeDeclaration = F3(
	function (_v0, type_, context) {
		var configuration = _v0;
		var name = $stil4m$elm_syntax$Elm$Syntax$Node$value(type_.aW);
		var register = function (ctx) {
			return A3(
				$elm$core$List$foldl,
				function (_v2) {
					var constructor = _v2.b;
					return $jfmengels$elm_review_common$NoDeprecated$registerElement(
						$stil4m$elm_syntax$Elm$Syntax$Node$value(constructor.aW));
				},
				A2($jfmengels$elm_review_common$NoDeprecated$registerElement, name, ctx),
				type_.dX);
		};
		return (A2(configuration.ar, context.aF, name) || A2($jfmengels$elm_review_common$NoDeprecated$checkDocumentation, configuration.ah, type_.cg)) ? register(context) : A3(
			$elm$core$List$foldl,
			F2(
				function (_v1, ctx) {
					var constructor = _v1.b;
					return A2(
						configuration.ar,
						ctx.aF,
						$stil4m$elm_syntax$Elm$Syntax$Node$value(constructor.aW)) ? A2(
						$jfmengels$elm_review_common$NoDeprecated$registerElement,
						$stil4m$elm_syntax$Elm$Syntax$Node$value(constructor.aW),
						ctx) : ctx;
				}),
			context,
			type_.dX);
	});
var $jfmengels$elm_review_common$NoDeprecated$registerFunctionDeclaration = F3(
	function (_v0, declaration, context) {
		var configuration = _v0;
		var name = $stil4m$elm_syntax$Elm$Syntax$Node$value(
			$stil4m$elm_syntax$Elm$Syntax$Node$value(declaration.dZ).aW);
		return (A2(configuration.ar, context.aF, name) || A2($jfmengels$elm_review_common$NoDeprecated$checkDocumentation, configuration.ah, declaration.cg)) ? A2($jfmengels$elm_review_common$NoDeprecated$registerElement, name, context) : context;
	});
var $jfmengels$elm_review_common$NoDeprecated$registerDeclaration = F3(
	function (configuration, node, context) {
		var _v0 = $stil4m$elm_syntax$Elm$Syntax$Node$value(node);
		switch (_v0.$) {
			case 0:
				var declaration = _v0.a;
				return A3($jfmengels$elm_review_common$NoDeprecated$registerFunctionDeclaration, configuration, declaration, context);
			case 1:
				var type_ = _v0.a;
				return A3($jfmengels$elm_review_common$NoDeprecated$registerAliasDeclaration, configuration, type_, context);
			case 2:
				var type_ = _v0.a;
				return A3($jfmengels$elm_review_common$NoDeprecated$registerCustomTypeDeclaration, configuration, type_, context);
			default:
				return context;
		}
	});
var $jfmengels$elm_review_common$NoDeprecated$declarationListVisitor = F3(
	function (configuration, nodes, context) {
		return context.a6 ? context : A3(
			$elm$core$List$foldl,
			$jfmengels$elm_review_common$NoDeprecated$registerDeclaration(configuration),
			context,
			nodes);
	});
var $jfmengels$elm_review_common$NoDeprecated$rangeForNamedPattern = F2(
	function (_v0, _v1) {
		var parentRange = _v0.a;
		var moduleName = _v1.b_;
		var name = _v1.aW;
		var patternStart = parentRange.bg;
		var lengthForName = $elm$core$String$length(
			A2(
				$elm$core$String$join,
				'.',
				_Utils_ap(
					moduleName,
					_List_fromArray(
						[name]))));
		return {
			a$: {an: patternStart.an + lengthForName, aB: patternStart.aB},
			bg: patternStart
		};
	});
var $jfmengels$elm_review_common$NoDeprecated$Dependency = 2;
var $jfmengels$elm_review_common$NoDeprecated$Element = 0;
var $jfmengels$elm_review_common$NoDeprecated$Module = 1;
var $jfmengels$elm_review$Review$Error$Module = 0;
var $jfmengels$elm_review$Review$Rule$error = F2(
	function (_v0, range) {
		var message = _v0.al;
		var details = _v0.bG;
		return $jfmengels$elm_review$Review$Rule$UnspecifiedError(
			{bG: details, cn: '', cp: $elm$core$Maybe$Nothing, al: message, cB: range, cE: '', dB: 0});
	});
var $jfmengels$elm_review_common$NoDeprecated$error = F2(
	function (origin, range) {
		var details = function () {
			switch (origin) {
				case 0:
					return _List_fromArray(
						['This element was marked as deprecated and should not be used anymore.', 'Please check its documentation to know the alternative solutions.']);
				case 1:
					return _List_fromArray(
						['The module where this element is defined was marked as deprecated and should not be used anymore.', 'Please check its documentation to know the alternative solutions.']);
				case 2:
					return _List_fromArray(
						['The dependency where this element is defined was marked as deprecated and should not be used anymore.', 'Please check its documentation or your review configuration to know the alternative solutions.']);
				case 3:
					return _List_fromArray(
						['This element was marked as deprecated and should not be used anymore.', 'Please check its documentation to know the alternative solutions.']);
				default:
					return _List_fromArray(
						['This element was marked as deprecated and should not be used anymore.']);
			}
		}();
		return A2(
			$jfmengels$elm_review$Review$Rule$error,
			{bG: details, al: 'Found new usage of deprecated element'},
			range);
	});
var $jfmengels$elm_review$Review$ModuleNameLookupTable$Internal$toRangeLike = function (_v0) {
	var start = _v0.bg;
	var end = _v0.a$;
	return _Utils_Tuple2(
		_Utils_Tuple2(start.aB, start.an),
		_Utils_Tuple2(end.aB, end.an));
};
var $jfmengels$elm_review$Review$ModuleNameLookupTable$moduleNameAt = F2(
	function (_v0, range) {
		var dict = _v0;
		return A2(
			$elm$core$Dict$get,
			$jfmengels$elm_review$Review$ModuleNameLookupTable$Internal$toRangeLike(range),
			dict);
	});
var $jfmengels$elm_review_common$NoDeprecated$reportElementAsList = F4(
	function (context, rangeForLookupTable, rangeForReport, name) {
		var _v0 = A2($jfmengels$elm_review$Review$ModuleNameLookupTable$moduleNameAt, context.j, rangeForLookupTable);
		if (!_v0.$) {
			var moduleName = _v0.a;
			var _v1 = A2($elm$core$Dict$get, moduleName, context.u);
			if (!_v1.$) {
				if (!_v1.a) {
					var _v2 = _v1.a;
					return _List_fromArray(
						[
							A2(
							$jfmengels$elm_review_common$NoDeprecated$error,
							1,
							rangeForReport(0))
						]);
				} else {
					var _v3 = _v1.a;
					return _List_fromArray(
						[
							A2(
							$jfmengels$elm_review_common$NoDeprecated$error,
							2,
							rangeForReport(0))
						]);
				}
			} else {
				return A2(
					$elm$core$Set$member,
					_Utils_Tuple2(moduleName, name),
					context.t) ? _List_fromArray(
					[
						A2(
						$jfmengels$elm_review_common$NoDeprecated$error,
						0,
						rangeForReport(0))
					]) : _List_Nil;
			}
		} else {
			return _List_Nil;
		}
	});
var $jfmengels$elm_review_common$NoDeprecated$Field = 3;
var $jfmengels$elm_review_common$NoDeprecated$reportField = F2(
	function (_v0, field) {
		var configuration = _v0;
		return configuration.b3(
			$stil4m$elm_syntax$Elm$Syntax$Node$value(field)) ? $elm$core$Maybe$Just(
			A2(
				$jfmengels$elm_review_common$NoDeprecated$error,
				3,
				$stil4m$elm_syntax$Elm$Syntax$Node$range(field))) : $elm$core$Maybe$Nothing;
	});
var $jfmengels$elm_review_common$NoDeprecated$Parameter = 4;
var $jfmengels$elm_review_common$NoDeprecated$reportParameter = F3(
	function (_v0, range, name) {
		var configuration = _v0;
		return configuration.b2(name) ? $elm$core$Maybe$Just(
			A2($jfmengels$elm_review_common$NoDeprecated$error, 4, range)) : $elm$core$Maybe$Nothing;
	});
var $jfmengels$elm_review_common$NoDeprecated$reportPatterns = F4(
	function (configuration, context, nodes, acc) {
		reportPatterns:
		while (true) {
			if (!nodes.b) {
				return acc;
			} else {
				var pattern = nodes.a;
				var restOfNodes = nodes.b;
				var _v1 = $stil4m$elm_syntax$Elm$Syntax$Node$value(pattern);
				switch (_v1.$) {
					case 14:
						var subPattern = _v1.a;
						var $temp$configuration = configuration,
							$temp$context = context,
							$temp$nodes = A2($elm$core$List$cons, subPattern, restOfNodes),
							$temp$acc = acc;
						configuration = $temp$configuration;
						context = $temp$context;
						nodes = $temp$nodes;
						acc = $temp$acc;
						continue reportPatterns;
					case 7:
						var subPatterns = _v1.a;
						var $temp$configuration = configuration,
							$temp$context = context,
							$temp$nodes = _Utils_ap(subPatterns, restOfNodes),
							$temp$acc = acc;
						configuration = $temp$configuration;
						context = $temp$context;
						nodes = $temp$nodes;
						acc = $temp$acc;
						continue reportPatterns;
					case 8:
						var fields = _v1.a;
						var $temp$configuration = configuration,
							$temp$context = context,
							$temp$nodes = restOfNodes,
							$temp$acc = _Utils_ap(
							A2(
								$elm$core$List$filterMap,
								$jfmengels$elm_review_common$NoDeprecated$reportField(configuration),
								fields),
							acc);
						configuration = $temp$configuration;
						context = $temp$context;
						nodes = $temp$nodes;
						acc = $temp$acc;
						continue reportPatterns;
					case 9:
						var left = _v1.a;
						var right = _v1.b;
						var $temp$configuration = configuration,
							$temp$context = context,
							$temp$nodes = A2(
							$elm$core$List$cons,
							left,
							A2($elm$core$List$cons, right, restOfNodes)),
							$temp$acc = acc;
						configuration = $temp$configuration;
						context = $temp$context;
						nodes = $temp$nodes;
						acc = $temp$acc;
						continue reportPatterns;
					case 10:
						var subPatterns = _v1.a;
						var $temp$configuration = configuration,
							$temp$context = context,
							$temp$nodes = _Utils_ap(subPatterns, restOfNodes),
							$temp$acc = acc;
						configuration = $temp$configuration;
						context = $temp$context;
						nodes = $temp$nodes;
						acc = $temp$acc;
						continue reportPatterns;
					case 11:
						var name = _v1.a;
						var newAcc = function () {
							var _v2 = A3(
								$jfmengels$elm_review_common$NoDeprecated$reportParameter,
								configuration,
								$stil4m$elm_syntax$Elm$Syntax$Node$range(pattern),
								name);
							if (!_v2.$) {
								var err = _v2.a;
								return A2($elm$core$List$cons, err, acc);
							} else {
								return acc;
							}
						}();
						var $temp$configuration = configuration,
							$temp$context = context,
							$temp$nodes = restOfNodes,
							$temp$acc = newAcc;
						configuration = $temp$configuration;
						context = $temp$context;
						nodes = $temp$nodes;
						acc = $temp$acc;
						continue reportPatterns;
					case 12:
						var qualifiedNameRef = _v1.a;
						var subPatterns = _v1.b;
						var errors = A4(
							$jfmengels$elm_review_common$NoDeprecated$reportElementAsList,
							context,
							$stil4m$elm_syntax$Elm$Syntax$Node$range(pattern),
							function (_v3) {
								return A2($jfmengels$elm_review_common$NoDeprecated$rangeForNamedPattern, pattern, qualifiedNameRef);
							},
							qualifiedNameRef.aW);
						var $temp$configuration = configuration,
							$temp$context = context,
							$temp$nodes = _Utils_ap(subPatterns, restOfNodes),
							$temp$acc = _Utils_ap(errors, acc);
						configuration = $temp$configuration;
						context = $temp$context;
						nodes = $temp$nodes;
						acc = $temp$acc;
						continue reportPatterns;
					case 13:
						var subPattern = _v1.a;
						var name = _v1.b;
						var newAcc = function () {
							var _v4 = A3(
								$jfmengels$elm_review_common$NoDeprecated$reportParameter,
								configuration,
								$stil4m$elm_syntax$Elm$Syntax$Node$range(name),
								$stil4m$elm_syntax$Elm$Syntax$Node$value(name));
							if (!_v4.$) {
								var err = _v4.a;
								return A2($elm$core$List$cons, err, acc);
							} else {
								return acc;
							}
						}();
						var $temp$configuration = configuration,
							$temp$context = context,
							$temp$nodes = A2($elm$core$List$cons, subPattern, restOfNodes),
							$temp$acc = newAcc;
						configuration = $temp$configuration;
						context = $temp$context;
						nodes = $temp$nodes;
						acc = $temp$acc;
						continue reportPatterns;
					default:
						var $temp$configuration = configuration,
							$temp$context = context,
							$temp$nodes = restOfNodes,
							$temp$acc = acc;
						configuration = $temp$configuration;
						context = $temp$context;
						nodes = $temp$nodes;
						acc = $temp$acc;
						continue reportPatterns;
				}
			}
		}
	});
var $jfmengels$elm_review_common$NoDeprecated$reportElementAsMaybe = F3(
	function (context, range, name) {
		var _v0 = A2($jfmengels$elm_review$Review$ModuleNameLookupTable$moduleNameAt, context.j, range);
		if (!_v0.$) {
			var moduleName = _v0.a;
			var _v1 = A2($elm$core$Dict$get, moduleName, context.u);
			if (!_v1.$) {
				if (!_v1.a) {
					var _v2 = _v1.a;
					return $elm$core$Maybe$Just(
						A2($jfmengels$elm_review_common$NoDeprecated$error, 1, range));
				} else {
					var _v3 = _v1.a;
					return $elm$core$Maybe$Just(
						A2($jfmengels$elm_review_common$NoDeprecated$error, 2, range));
				}
			} else {
				return A2(
					$elm$core$Set$member,
					_Utils_Tuple2(moduleName, name),
					context.t) ? $elm$core$Maybe$Just(
					A2($jfmengels$elm_review_common$NoDeprecated$error, 0, range)) : $elm$core$Maybe$Nothing;
			}
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $jfmengels$elm_review_common$NoDeprecated$reportTypes = F3(
	function (context, nodes, acc) {
		reportTypes:
		while (true) {
			if (!nodes.b) {
				return acc;
			} else {
				var node = nodes.a;
				var restOfNodes = nodes.b;
				var _v1 = $stil4m$elm_syntax$Elm$Syntax$Node$value(node);
				switch (_v1.$) {
					case 1:
						var _v2 = _v1.a;
						var range = _v2.a;
						var _v3 = _v2.b;
						var name = _v3.b;
						var args = _v1.b;
						var newAcc = function () {
							var _v4 = A3($jfmengels$elm_review_common$NoDeprecated$reportElementAsMaybe, context, range, name);
							if (!_v4.$) {
								var err = _v4.a;
								return A2($elm$core$List$cons, err, acc);
							} else {
								return acc;
							}
						}();
						var $temp$context = context,
							$temp$nodes = _Utils_ap(args, restOfNodes),
							$temp$acc = newAcc;
						context = $temp$context;
						nodes = $temp$nodes;
						acc = $temp$acc;
						continue reportTypes;
					case 3:
						var nodesToLookAt = _v1.a;
						var $temp$context = context,
							$temp$nodes = _Utils_ap(nodesToLookAt, restOfNodes),
							$temp$acc = acc;
						context = $temp$context;
						nodes = $temp$nodes;
						acc = $temp$acc;
						continue reportTypes;
					case 4:
						var recordDefinition = _v1.a;
						var nodesToLookAt = A2(
							$elm$core$List$map,
							function (_v5) {
								var _v6 = _v5.b;
								var fieldValue = _v6.b;
								return fieldValue;
							},
							recordDefinition);
						var $temp$context = context,
							$temp$nodes = _Utils_ap(nodesToLookAt, restOfNodes),
							$temp$acc = acc;
						context = $temp$context;
						nodes = $temp$nodes;
						acc = $temp$acc;
						continue reportTypes;
					case 5:
						var recordDefinition = _v1.b;
						var nodesToLookAt = A2(
							$elm$core$List$map,
							function (_v7) {
								var _v8 = _v7.b;
								var fieldValue = _v8.b;
								return fieldValue;
							},
							$stil4m$elm_syntax$Elm$Syntax$Node$value(recordDefinition));
						var $temp$context = context,
							$temp$nodes = _Utils_ap(nodesToLookAt, restOfNodes),
							$temp$acc = acc;
						context = $temp$context;
						nodes = $temp$nodes;
						acc = $temp$acc;
						continue reportTypes;
					case 6:
						var left = _v1.a;
						var right = _v1.b;
						var $temp$context = context,
							$temp$nodes = A2(
							$elm$core$List$cons,
							left,
							A2($elm$core$List$cons, right, restOfNodes)),
							$temp$acc = acc;
						context = $temp$context;
						nodes = $temp$nodes;
						acc = $temp$acc;
						continue reportTypes;
					default:
						var $temp$context = context,
							$temp$nodes = restOfNodes,
							$temp$acc = acc;
						context = $temp$context;
						nodes = $temp$nodes;
						acc = $temp$acc;
						continue reportTypes;
				}
			}
		}
	});
var $jfmengels$elm_review_common$NoDeprecated$declarationVisitor = F3(
	function (configuration, node, context) {
		var _v0 = $stil4m$elm_syntax$Elm$Syntax$Node$value(node);
		switch (_v0.$) {
			case 0:
				var declaration = _v0.a;
				var signatureErrors = function () {
					var _v1 = declaration.ez;
					if (!_v1.$) {
						var signature = _v1.a;
						return A3(
							$jfmengels$elm_review_common$NoDeprecated$reportTypes,
							context,
							_List_fromArray(
								[
									$stil4m$elm_syntax$Elm$Syntax$Node$value(signature).dG
								]),
							_List_Nil);
					} else {
						return _List_Nil;
					}
				}();
				var destructuringErrors = A4(
					$jfmengels$elm_review_common$NoDeprecated$reportPatterns,
					configuration,
					context,
					$stil4m$elm_syntax$Elm$Syntax$Node$value(declaration.dZ).cO,
					_List_Nil);
				return _Utils_ap(destructuringErrors, signatureErrors);
			case 2:
				var type_ = _v0.a;
				return A3(
					$jfmengels$elm_review_common$NoDeprecated$reportTypes,
					context,
					A2(
						$elm$core$List$concatMap,
						function (_v2) {
							var _arguments = _v2.b.cO;
							return _arguments;
						},
						type_.dX),
					_List_Nil);
			case 1:
				var type_ = _v0.a;
				return A3(
					$jfmengels$elm_review_common$NoDeprecated$reportTypes,
					context,
					_List_fromArray(
						[type_.dG]),
					_List_Nil);
			case 3:
				var signature = _v0.a;
				return A3(
					$jfmengels$elm_review_common$NoDeprecated$reportTypes,
					context,
					_List_fromArray(
						[signature.dG]),
					_List_Nil);
			default:
				return _List_Nil;
		}
	});
var $jfmengels$elm_review_common$NoDeprecated$reportLetDeclaration = F3(
	function (configuration, context, letDeclaration) {
		var _v0 = $stil4m$elm_syntax$Elm$Syntax$Node$value(letDeclaration);
		if (!_v0.$) {
			var _function = _v0.a;
			var signatureErrors = function () {
				var _v1 = _function.ez;
				if (!_v1.$) {
					var signature = _v1.a;
					return A3(
						$jfmengels$elm_review_common$NoDeprecated$reportTypes,
						context,
						_List_fromArray(
							[
								$stil4m$elm_syntax$Elm$Syntax$Node$value(signature).dG
							]),
						_List_Nil);
				} else {
					return _List_Nil;
				}
			}();
			var destructuringErrors = A4(
				$jfmengels$elm_review_common$NoDeprecated$reportPatterns,
				configuration,
				context,
				$stil4m$elm_syntax$Elm$Syntax$Node$value(_function.dZ).cO,
				_List_Nil);
			return _Utils_ap(destructuringErrors, signatureErrors);
		} else {
			var pattern = _v0.a;
			return A4(
				$jfmengels$elm_review_common$NoDeprecated$reportPatterns,
				configuration,
				context,
				_List_fromArray(
					[pattern]),
				_List_Nil);
		}
	});
var $jfmengels$elm_review_common$NoDeprecated$expressionVisitor = F3(
	function (configuration, _v0, context) {
		var nodeRange = _v0.a;
		var node = _v0.b;
		switch (node.$) {
			case 3:
				var name = node.b;
				return A4(
					$jfmengels$elm_review_common$NoDeprecated$reportElementAsList,
					context,
					nodeRange,
					$elm$core$Basics$always(nodeRange),
					name);
			case 15:
				var letBlock = node.a;
				return A2(
					$elm$core$List$concatMap,
					A2($jfmengels$elm_review_common$NoDeprecated$reportLetDeclaration, configuration, context),
					letBlock.cW);
			case 16:
				var cases = node.a.dS;
				return A4(
					$jfmengels$elm_review_common$NoDeprecated$reportPatterns,
					configuration,
					context,
					A2($elm$core$List$map, $elm$core$Tuple$first, cases),
					_List_Nil);
			case 22:
				var _v2 = node.a;
				var range = _v2.a;
				var name = _v2.b;
				return A4(
					$jfmengels$elm_review_common$NoDeprecated$reportElementAsList,
					context,
					range,
					$elm$core$Basics$always(range),
					name);
			case 20:
				var field = node.b;
				var _v3 = A2($jfmengels$elm_review_common$NoDeprecated$reportField, configuration, field);
				if (!_v3.$) {
					var err = _v3.a;
					return _List_fromArray(
						[err]);
				} else {
					return _List_Nil;
				}
			case 21:
				var fieldName = node.a;
				var _v4 = A2(
					$jfmengels$elm_review_common$NoDeprecated$reportField,
					configuration,
					A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, nodeRange, fieldName));
				if (!_v4.$) {
					var err = _v4.a;
					return _List_fromArray(
						[err]);
				} else {
					return _List_Nil;
				}
			default:
				return _List_Nil;
		}
	});
var $jfmengels$elm_review$Review$Rule$withCommentsVisitor = F2(
	function (visitor, _v0) {
		var schema = _v0;
		return _Utils_update(
			schema,
			{
				Y: A2($elm$core$List$cons, visitor, schema.Y)
			});
	});
var $jfmengels$elm_review$Review$Rule$withDeclarationEnterVisitor = F2(
	function (visitor, _v0) {
		var schema = _v0;
		return _Utils_update(
			schema,
			{
				S: A2($elm$core$List$cons, visitor, schema.S)
			});
	});
var $jfmengels$elm_review$Review$Rule$withDeclarationListVisitor = F2(
	function (visitor, _v0) {
		var schema = _v0;
		return _Utils_update(
			schema,
			{
				_: A2($elm$core$List$cons, visitor, schema._)
			});
	});
var $jfmengels$elm_review$Review$Rule$withExpressionEnterVisitor = F2(
	function (visitor, _v0) {
		var schema = _v0;
		return _Utils_update(
			schema,
			{
				v: A2($elm$core$List$cons, visitor, schema.v)
			});
	});
var $jfmengels$elm_review_common$NoDeprecated$moduleVisitor = F2(
	function (configuration, schema) {
		return A2(
			$jfmengels$elm_review$Review$Rule$withExpressionEnterVisitor,
			F2(
				function (node, context) {
					return _Utils_Tuple2(
						A3($jfmengels$elm_review_common$NoDeprecated$expressionVisitor, configuration, node, context),
						context);
				}),
			A2(
				$jfmengels$elm_review$Review$Rule$withDeclarationEnterVisitor,
				F2(
					function (node, context) {
						return _Utils_Tuple2(
							A3($jfmengels$elm_review_common$NoDeprecated$declarationVisitor, configuration, node, context),
							context);
					}),
				A2(
					$jfmengels$elm_review$Review$Rule$withDeclarationListVisitor,
					F2(
						function (nodes, context) {
							return _Utils_Tuple2(
								_List_Nil,
								A3($jfmengels$elm_review_common$NoDeprecated$declarationListVisitor, configuration, nodes, context));
						}),
					A2(
						$jfmengels$elm_review$Review$Rule$withCommentsVisitor,
						F2(
							function (comments, context) {
								return _Utils_Tuple2(
									_List_Nil,
									A3($jfmengels$elm_review_common$NoDeprecated$commentsVisitor, configuration, comments, context));
							}),
						schema))));
	});
var $jfmengels$elm_review$Review$Rule$AllModulesInParallel = 0;
var $jfmengels$elm_review$Review$Rule$ProjectRuleSchema = $elm$core$Basics$identity;
var $jfmengels$elm_review$Review$Rule$newProjectRuleSchema = F2(
	function (name, initialProjectContext) {
		return {ap: $elm$core$Maybe$Nothing, y: _List_Nil, z: _List_Nil, m: _List_Nil, aL: $elm$core$Maybe$Nothing, ay: initialProjectContext, F: $elm$core$Maybe$Nothing, a8: _List_Nil, aW: name, C: _List_Nil, bE: 0};
	});
var $jfmengels$elm_review_common$NoDeprecated$userConfigurationToStableConfiguration = F2(
	function (_v0, elementPredicate) {
		var configuration = _v0;
		return {aH: configuration.aH, ah: configuration.ah, ar: elementPredicate, b0: configuration.b0, b2: configuration.b2, b3: configuration.b3};
	});
var $jfmengels$elm_review$Review$Rule$ImportedModulesFirst = 1;
var $jfmengels$elm_review$Review$Rule$withContextFromImportedModules = function (_v0) {
	var schema = _v0;
	return _Utils_update(
		schema,
		{bE: 1});
};
var $elm$core$Tuple$mapFirst = F2(
	function (func, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			func(x),
			y);
	});
var $jfmengels$elm_review$Review$Rule$removeErrorPhantomType = function (err) {
	if (!err.$) {
		var internalError = err.a;
		return $jfmengels$elm_review$Review$Rule$UnspecifiedError(internalError);
	} else {
		var internalError = err.a;
		return $jfmengels$elm_review$Review$Rule$SpecifiedError(internalError);
	}
};
var $jfmengels$elm_review$Review$Rule$removeErrorPhantomTypeFromVisitor = F3(
	function (_function, element, projectContext) {
		return A2(
			$elm$core$Tuple$mapFirst,
			$elm$core$List$map($jfmengels$elm_review$Review$Rule$removeErrorPhantomType),
			A2(_function, element, projectContext));
	});
var $jfmengels$elm_review$Review$Rule$withDependenciesProjectVisitor = F2(
	function (visitor, _v0) {
		var schema = _v0;
		return _Utils_update(
			schema,
			{
				y: A2(
					$elm$core$List$cons,
					$jfmengels$elm_review$Review$Rule$removeErrorPhantomTypeFromVisitor(visitor),
					schema.y)
			});
	});
var $jfmengels$elm_review$Review$Rule$withModuleContextUsingContextCreator = F2(
	function (functions, _v0) {
		var schema = _v0;
		return _Utils_update(
			schema,
			{
				aL: $elm$core$Maybe$Just(
					{aj: functions.aj, aM: functions.aM}),
				F: $elm$core$Maybe$Just(functions.cr)
			});
	});
var $jfmengels$elm_review$Review$Rule$removeExtensibleRecordTypeVariable = function (_function) {
	return A2(
		$elm$core$Basics$composeR,
		_function,
		function (_v0) {
			var param = _v0;
			return param;
		});
};
var $jfmengels$elm_review$Review$Rule$withModuleVisitor = F2(
	function (visitor, _v0) {
		var schema = _v0;
		return _Utils_update(
			schema,
			{
				a8: A2(
					$elm$core$List$cons,
					$jfmengels$elm_review$Review$Rule$removeExtensibleRecordTypeVariable(visitor),
					schema.a8)
			});
	});
var $jfmengels$elm_review_common$NoDeprecated$rule = function (configuration) {
	var _v0 = $jfmengels$elm_review_common$NoDeprecated$createElementPredicate(configuration);
	if (!_v0.$) {
		var elementPredicate = _v0.a;
		var stableConfiguration = A2($jfmengels$elm_review_common$NoDeprecated$userConfigurationToStableConfiguration, configuration, elementPredicate);
		return $jfmengels$elm_review$Review$Rule$fromProjectRuleSchema(
			$jfmengels$elm_review$Review$Rule$withContextFromImportedModules(
				A2(
					$jfmengels$elm_review$Review$Rule$withModuleContextUsingContextCreator,
					{
						aj: $jfmengels$elm_review_common$NoDeprecated$foldProjectContexts,
						aM: $jfmengels$elm_review_common$NoDeprecated$fromModuleToProject,
						cr: $jfmengels$elm_review_common$NoDeprecated$fromProjectToModule(stableConfiguration)
					},
					A2(
						$jfmengels$elm_review$Review$Rule$withModuleVisitor,
						$jfmengels$elm_review_common$NoDeprecated$moduleVisitor(stableConfiguration),
						A2(
							$jfmengels$elm_review$Review$Rule$withDependenciesProjectVisitor,
							$jfmengels$elm_review_common$NoDeprecated$dependenciesVisitor(stableConfiguration),
							A2($jfmengels$elm_review$Review$Rule$newProjectRuleSchema, 'NoDeprecated', $jfmengels$elm_review_common$NoDeprecated$initialProjectContext))))));
	} else {
		var faultyNames = _v0.a;
		return A2(
			$jfmengels$elm_review$Review$Rule$configurationError,
			'NoDeprecated',
			{
				bG: _List_fromArray(
					[
						'The names provided to the withExceptionsForElements function should look like \'Some.Module.value\' or \'MyModule.Type\', which wasn\'t the case for the following types:',
						A2(
						$elm$core$String$join,
						'\n',
						A2(
							$elm$core$List$map,
							function (str) {
								return ' - ' + str;
							},
							faultyNames))
					]),
				al: 'Invalid exceptions provided in the configuration'
			});
	}
};
var $jfmengels$elm_review_common$NoExposingEverything$ExposingOk = {$: 0};
var $jfmengels$elm_review$Review$Rule$withFixes = F2(
	function (fixes, error_) {
		return A2(
			$jfmengels$elm_review$Review$Rule$mapInternalError,
			function (err) {
				if ($elm$core$List$isEmpty(fixes)) {
					return _Utils_update(
						err,
						{cp: $elm$core$Maybe$Nothing});
				} else {
					var _v0 = err.dB;
					switch (_v0) {
						case 0:
							return _Utils_update(
								err,
								{
									cp: $elm$core$Maybe$Just(fixes)
								});
						case 2:
							return _Utils_update(
								err,
								{
									cp: $elm$core$Maybe$Just(fixes)
								});
						case 1:
							return err;
						case 3:
							return err;
						default:
							return err;
					}
				}
			},
			error_);
	});
var $jfmengels$elm_review$Review$Rule$errorWithFix = F3(
	function (info, range, fixes) {
		return A2(
			$jfmengels$elm_review$Review$Rule$withFixes,
			fixes,
			A2($jfmengels$elm_review$Review$Rule$error, info, range));
	});
var $jfmengels$elm_review_common$NoExposingEverything$functionDeclarationName = function (_v0) {
	var declaration = _v0.dZ;
	return $stil4m$elm_syntax$Elm$Syntax$Node$value(
		$stil4m$elm_syntax$Elm$Syntax$Node$value(declaration).aW);
};
var $jfmengels$elm_review_common$NoExposingEverything$exposingDeclarationName = function (_v0) {
	var declaration = _v0.b;
	switch (declaration.$) {
		case 1:
			var name = declaration.a.aW;
			return $stil4m$elm_syntax$Elm$Syntax$Node$value(name);
		case 2:
			var name = declaration.a.aW;
			return $stil4m$elm_syntax$Elm$Syntax$Node$value(name) + '(..)';
		case 0:
			var _function = declaration.a;
			return $jfmengels$elm_review_common$NoExposingEverything$functionDeclarationName(_function);
		case 4:
			var operator = declaration.a.eq;
			return '(' + ($stil4m$elm_syntax$Elm$Syntax$Node$value(operator) + ')');
		case 3:
			var name = declaration.a.aW;
			return $stil4m$elm_syntax$Elm$Syntax$Node$value(name);
		default:
			return '';
	}
};
var $jfmengels$elm_review_common$NoExposingEverything$exposingDeclarationList = function (declarations) {
	return A2($elm$core$List$map, $jfmengels$elm_review_common$NoExposingEverything$exposingDeclarationName, declarations);
};
var $jfmengels$elm_review$Review$Error$Replacement = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $jfmengels$elm_review$Review$Fix$replaceRangeBy = $jfmengels$elm_review$Review$Error$Replacement;
var $jfmengels$elm_review_common$NoExposingEverything$declarationListVisitor = F2(
	function (declarations, context) {
		if (context.$ === 1) {
			var range = context.a;
			return _Utils_Tuple2(
				_List_fromArray(
					[
						A3(
						$jfmengels$elm_review$Review$Rule$errorWithFix,
						{
							bG: _List_fromArray(
								['Modules should have hidden implementation details with an explicit API so that the module is used in a proper and controlled way. The users of this module should not have to know about what is inside a module it is using, and they shouldn\'t need to access its internal details. Therefore, the API should be explicitly defined and ideally as small as possible.']),
							al: 'Module exposes everything implicitly \"(..)\"'
						},
						{
							a$: {an: range.a$.an + 1, aB: range.a$.aB},
							bg: {an: range.bg.an - 1, aB: range.bg.aB}
						},
						_List_fromArray(
							[
								A2(
								$jfmengels$elm_review$Review$Fix$replaceRangeBy,
								range,
								A2(
									$elm$core$String$join,
									', ',
									$jfmengels$elm_review_common$NoExposingEverything$exposingDeclarationList(declarations)))
							]))
					]),
				context);
		} else {
			return _Utils_Tuple2(_List_Nil, context);
		}
	});
var $jfmengels$elm_review$Review$Rule$compactProjectDataVisitors = F2(
	function (getData, visitors) {
		return $elm$core$List$isEmpty(visitors) ? _List_Nil : _List_fromArray(
			[
				F2(
				function (rawData, moduleContext) {
					var data = getData(rawData);
					return _Utils_Tuple2(
						_List_Nil,
						A3(
							$elm$core$List$foldl,
							F2(
								function (visitor, moduleContext_) {
									return A2(visitor, data, moduleContext_);
								}),
							moduleContext,
							$elm$core$List$reverse(visitors)));
				})
			]);
	});
var $jfmengels$elm_review$Review$Rule$fromModuleRuleSchema = function (moduleVisitor) {
	var schema = moduleVisitor;
	var _v0 = schema.bu;
	if (!_v0.$) {
		var initialModuleContext = _v0.a;
		return $jfmengels$elm_review$Review$Rule$fromProjectRuleSchema(
			{
				ap: $elm$core$Maybe$Nothing,
				y: A2($jfmengels$elm_review$Review$Rule$compactProjectDataVisitors, $elm$core$Basics$identity, schema.y),
				z: A2(
					$jfmengels$elm_review$Review$Rule$compactProjectDataVisitors,
					$elm$core$Maybe$map(
						function ($) {
							return $.c;
						}),
					schema.z),
				m: _List_Nil,
				aL: $elm$core$Maybe$Nothing,
				ay: initialModuleContext,
				F: $elm$core$Maybe$Just(
					$jfmengels$elm_review$Review$Rule$initContextCreator($elm$core$Basics$identity)),
				a8: _List_fromArray(
					[
						$jfmengels$elm_review$Review$Rule$removeExtensibleRecordTypeVariable(
						$elm$core$Basics$always(moduleVisitor))
					]),
				aW: schema.aW,
				C: A2(
					$jfmengels$elm_review$Review$Rule$compactProjectDataVisitors,
					$elm$core$Maybe$map(
						function ($) {
							return $.a_;
						}),
					schema.C),
				bE: 0
			});
	} else {
		return $jfmengels$elm_review$Review$Rule$fromProjectRuleSchema(
			{
				ap: $elm$core$Maybe$Nothing,
				y: _List_Nil,
				z: _List_Nil,
				m: _List_Nil,
				aL: $elm$core$Maybe$Nothing,
				ay: 0,
				F: $elm$core$Maybe$Just(schema.F),
				a8: _List_fromArray(
					[
						$jfmengels$elm_review$Review$Rule$removeExtensibleRecordTypeVariable(
						$elm$core$Basics$always(moduleVisitor))
					]),
				aW: schema.aW,
				C: _List_Nil,
				bE: 0
			});
	}
};
var $jfmengels$elm_review_common$NoExposingEverything$ExposingAll = function (a) {
	return {$: 1, a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Module$exposingList = function (m) {
	switch (m.$) {
		case 0:
			var x = m.a;
			return $stil4m$elm_syntax$Elm$Syntax$Node$value(x.ck);
		case 1:
			var x = m.a;
			return $stil4m$elm_syntax$Elm$Syntax$Node$value(x.ck);
		default:
			var x = m.a;
			return $stil4m$elm_syntax$Elm$Syntax$Node$value(x.ck);
	}
};
var $jfmengels$elm_review_common$NoExposingEverything$moduleDefinitionVisitor = F2(
	function (moduleNode, _v0) {
		var _v1 = $stil4m$elm_syntax$Elm$Syntax$Module$exposingList(
			$stil4m$elm_syntax$Elm$Syntax$Node$value(moduleNode));
		if (!_v1.$) {
			var range = _v1.a;
			return _Utils_Tuple2(
				_List_Nil,
				$jfmengels$elm_review_common$NoExposingEverything$ExposingAll(range));
		} else {
			return _Utils_Tuple2(_List_Nil, $jfmengels$elm_review_common$NoExposingEverything$ExposingOk);
		}
	});
var $jfmengels$elm_review$Review$Rule$newModuleRuleSchema = F2(
	function (name, initialModuleContext) {
		return {
			Q: _List_Nil,
			R: _List_Nil,
			Y: _List_Nil,
			_: _List_Nil,
			S: _List_Nil,
			T: _List_Nil,
			y: _List_Nil,
			z: _List_Nil,
			v: _List_Nil,
			B: _List_Nil,
			m: _List_Nil,
			aa: _List_Nil,
			bu: $elm$core$Maybe$Just(initialModuleContext),
			W: _List_Nil,
			X: _List_Nil,
			F: $jfmengels$elm_review$Review$Rule$initContextCreator(
				$elm$core$Basics$always(initialModuleContext)),
			ab: _List_Nil,
			aW: name,
			C: _List_Nil
		};
	});
var $jfmengels$elm_review$Review$Rule$withModuleDefinitionVisitor = F2(
	function (visitor, _v0) {
		var schema = _v0;
		return _Utils_update(
			schema,
			{
				ab: A2($elm$core$List$cons, visitor, schema.ab)
			});
	});
var $jfmengels$elm_review_common$NoExposingEverything$rule = $jfmengels$elm_review$Review$Rule$fromModuleRuleSchema(
	A2(
		$jfmengels$elm_review$Review$Rule$withDeclarationListVisitor,
		$jfmengels$elm_review_common$NoExposingEverything$declarationListVisitor,
		A2(
			$jfmengels$elm_review$Review$Rule$withModuleDefinitionVisitor,
			$jfmengels$elm_review_common$NoExposingEverything$moduleDefinitionVisitor,
			A2($jfmengels$elm_review$Review$Rule$newModuleRuleSchema, 'NoExposingEverything', $jfmengels$elm_review_common$NoExposingEverything$ExposingOk))));
var $jfmengels$elm_review_common$NoImportingEverything$exceptionsToSet = function (exceptions) {
	return $elm$core$Set$fromList(
		A2(
			$elm$core$List$map,
			$elm$core$String$split('.'),
			exceptions));
};
var $jfmengels$elm_review_common$NoImportingEverything$moduleName = function (node) {
	return $stil4m$elm_syntax$Elm$Syntax$Node$value(
		$stil4m$elm_syntax$Elm$Syntax$Node$value(node).b_);
};
var $jfmengels$elm_review_common$NoImportingEverything$importVisitor = F2(
	function (exceptions, node) {
		if (A2(
			$elm$core$Set$member,
			$jfmengels$elm_review_common$NoImportingEverything$moduleName(node),
			exceptions)) {
			return _List_Nil;
		} else {
			var _v0 = A2(
				$elm$core$Maybe$map,
				$stil4m$elm_syntax$Elm$Syntax$Node$value,
				$stil4m$elm_syntax$Elm$Syntax$Node$value(node).ck);
			if ((!_v0.$) && (!_v0.a.$)) {
				var range = _v0.a.a;
				return _List_fromArray(
					[
						A2(
						$jfmengels$elm_review$Review$Rule$error,
						{
							bG: _List_fromArray(
								['When you import everything from a module it becomes harder to know where a function or a type comes from.']),
							al: 'Prefer listing what you wish to import and/or using qualified imports'
						},
						{
							a$: {an: range.a$.an + 1, aB: range.a$.aB},
							bg: {an: range.bg.an - 1, aB: range.bg.aB}
						})
					]);
			} else {
				return _List_Nil;
			}
		}
	});
var $jfmengels$elm_review$Review$Rule$withImportVisitor = F2(
	function (visitor, _v0) {
		var schema = _v0;
		return _Utils_update(
			schema,
			{
				aa: A2($elm$core$List$cons, visitor, schema.aa)
			});
	});
var $jfmengels$elm_review$Review$Rule$withSimpleImportVisitor = F2(
	function (visitor, schema) {
		return A2(
			$jfmengels$elm_review$Review$Rule$withImportVisitor,
			F2(
				function (node, moduleContext) {
					return _Utils_Tuple2(
						visitor(node),
						moduleContext);
				}),
			schema);
	});
var $jfmengels$elm_review_common$NoImportingEverything$rule = function (exceptions) {
	return $jfmengels$elm_review$Review$Rule$fromModuleRuleSchema(
		A2(
			$jfmengels$elm_review$Review$Rule$withSimpleImportVisitor,
			$jfmengels$elm_review_common$NoImportingEverything$importVisitor(
				$jfmengels$elm_review_common$NoImportingEverything$exceptionsToSet(exceptions)),
			A2($jfmengels$elm_review$Review$Rule$newModuleRuleSchema, 'NoImportingEverything', 0)));
};
var $jfmengels$elm_review_common$NoMissingTypeAnnotation$declarationVisitor = function (declaration) {
	var _v0 = $stil4m$elm_syntax$Elm$Syntax$Node$value(declaration);
	if (!_v0.$) {
		var _function = _v0.a;
		var _v1 = _function.ez;
		if (_v1.$ === 1) {
			var name = $stil4m$elm_syntax$Elm$Syntax$Node$value(_function.dZ).aW;
			return _List_fromArray(
				[
					A2(
					$jfmengels$elm_review$Review$Rule$error,
					{
						bG: _List_fromArray(
							['Type annotations help you understand what happens in the code, and it will help the compiler give better error messages.']),
						al: 'Missing type annotation for `' + ($stil4m$elm_syntax$Elm$Syntax$Node$value(name) + '`')
					},
					$stil4m$elm_syntax$Elm$Syntax$Node$range(name))
				]);
		} else {
			return _List_Nil;
		}
	} else {
		return _List_Nil;
	}
};
var $jfmengels$elm_review$Review$Rule$withSimpleDeclarationVisitor = F2(
	function (visitor, schema) {
		return A2(
			$jfmengels$elm_review$Review$Rule$withDeclarationEnterVisitor,
			F2(
				function (node, moduleContext) {
					return _Utils_Tuple2(
						visitor(node),
						moduleContext);
				}),
			schema);
	});
var $jfmengels$elm_review_common$NoMissingTypeAnnotation$rule = $jfmengels$elm_review$Review$Rule$fromModuleRuleSchema(
	A2(
		$jfmengels$elm_review$Review$Rule$withSimpleDeclarationVisitor,
		$jfmengels$elm_review_common$NoMissingTypeAnnotation$declarationVisitor,
		A2($jfmengels$elm_review$Review$Rule$newModuleRuleSchema, 'NoMissingTypeAnnotation', 0)));
var $jfmengels$elm_review_common$NoMissingTypeAnnotationInLetIn$reportFunctionWithoutSignature = function (_function) {
	var _v0 = _function.ez;
	if (!_v0.$) {
		return $elm$core$Maybe$Nothing;
	} else {
		var name = $stil4m$elm_syntax$Elm$Syntax$Node$value(_function.dZ).aW;
		return $elm$core$Maybe$Just(
			A2(
				$jfmengels$elm_review$Review$Rule$error,
				{
					bG: _List_fromArray(
						['Type annotations help you understand what happens in the code, and it will help the compiler give better error messages.']),
					al: 'Missing type annotation for `' + ($stil4m$elm_syntax$Elm$Syntax$Node$value(name) + '`')
				},
				$stil4m$elm_syntax$Elm$Syntax$Node$range(name)));
	}
};
var $jfmengels$elm_review_common$NoMissingTypeAnnotationInLetIn$expressionVisitor = function (expression) {
	var _v0 = $stil4m$elm_syntax$Elm$Syntax$Node$value(expression);
	if (_v0.$ === 15) {
		var declarations = _v0.a.cW;
		return A2(
			$elm$core$List$filterMap,
			function (declaration) {
				var _v1 = $stil4m$elm_syntax$Elm$Syntax$Node$value(declaration);
				if (!_v1.$) {
					var _function = _v1.a;
					return $jfmengels$elm_review_common$NoMissingTypeAnnotationInLetIn$reportFunctionWithoutSignature(_function);
				} else {
					return $elm$core$Maybe$Nothing;
				}
			},
			declarations);
	} else {
		return _List_Nil;
	}
};
var $jfmengels$elm_review$Review$Rule$withSimpleExpressionVisitor = F2(
	function (visitor, schema) {
		return A2(
			$jfmengels$elm_review$Review$Rule$withExpressionEnterVisitor,
			F2(
				function (node, moduleContext) {
					return _Utils_Tuple2(
						visitor(node),
						moduleContext);
				}),
			schema);
	});
var $jfmengels$elm_review_common$NoMissingTypeAnnotationInLetIn$rule = $jfmengels$elm_review$Review$Rule$fromModuleRuleSchema(
	A2(
		$jfmengels$elm_review$Review$Rule$withSimpleExpressionVisitor,
		$jfmengels$elm_review_common$NoMissingTypeAnnotationInLetIn$expressionVisitor,
		A2($jfmengels$elm_review$Review$Rule$newModuleRuleSchema, 'NoMissingTypeAnnotationInLetIn', 0)));
var $jfmengels$elm_review_common$NoMissingTypeExpose$Package = function (a) {
	return {$: 1, a: a};
};
var $jfmengels$elm_review_common$NoMissingTypeExpose$addExposedModule = F2(
	function (moduleName, exposedModules) {
		if (!exposedModules.$) {
			return exposedModules;
		} else {
			var list = exposedModules.a;
			return $jfmengels$elm_review_common$NoMissingTypeExpose$Package(
				A2($elm$core$Set$insert, moduleName, list));
		}
	});
var $jfmengels$elm_review_common$NoMissingTypeExpose$exposedModulesForDependency = F2(
	function (dependency, exposedModules) {
		return A3(
			$elm$core$List$foldl,
			A2(
				$elm$core$Basics$composeR,
				function ($) {
					return $.aW;
				},
				$jfmengels$elm_review_common$NoMissingTypeExpose$addExposedModule),
			exposedModules,
			$jfmengels$elm_review$Review$Project$Dependency$modules(dependency));
	});
var $jfmengels$elm_review_common$NoMissingTypeExpose$dependencyDictVisitor = F2(
	function (dependencies, context) {
		return _Utils_Tuple2(
			_List_Nil,
			_Utils_update(
				context,
				{
					E: A3(
						$elm$core$List$foldl,
						$jfmengels$elm_review_common$NoMissingTypeExpose$exposedModulesForDependency,
						context.E,
						$elm$core$Dict$values(dependencies))
				}));
	});
var $jfmengels$elm_review_common$NoMissingTypeExpose$Application = {$: 0};
var $elm$project_metadata_utils$Elm$Module$toString = function (_v0) {
	var name = _v0;
	return name;
};
var $jfmengels$elm_review_common$NoMissingTypeExpose$elmProjectExposedList = function (exposed) {
	if (!exposed.$) {
		var list = exposed.a;
		return A3(
			$elm$core$List$foldl,
			A2($elm$core$Basics$composeR, $elm$project_metadata_utils$Elm$Module$toString, $elm$core$Set$insert),
			$elm$core$Set$empty,
			list);
	} else {
		var dict = exposed.a;
		return A3(
			$elm$core$List$foldl,
			F2(
				function (_v1, acc) {
					var list = _v1.b;
					return A3(
						$elm$core$List$foldl,
						A2($elm$core$Basics$composeR, $elm$project_metadata_utils$Elm$Module$toString, $elm$core$Set$insert),
						acc,
						list);
				}),
			$elm$core$Set$empty,
			dict);
	}
};
var $jfmengels$elm_review_common$NoMissingTypeExpose$exposedModulesForElmJson = function (project) {
	if (project.$ === 1) {
		var exposed = project.a.c1;
		return $jfmengels$elm_review_common$NoMissingTypeExpose$Package(
			$jfmengels$elm_review_common$NoMissingTypeExpose$elmProjectExposedList(exposed));
	} else {
		return $jfmengels$elm_review_common$NoMissingTypeExpose$Application;
	}
};
var $jfmengels$elm_review_common$NoMissingTypeExpose$elmJsonVisitor = F2(
	function (maybeProject, context) {
		if (!maybeProject.$) {
			var project = maybeProject.a.c;
			return _Utils_Tuple2(
				_List_Nil,
				_Utils_update(
					context,
					{
						E: $jfmengels$elm_review_common$NoMissingTypeExpose$exposedModulesForElmJson(project)
					}));
		} else {
			return _Utils_Tuple2(_List_Nil, context);
		}
	});
var $elm$core$Dict$union = F2(
	function (t1, t2) {
		return A3($elm$core$Dict$foldl, $elm$core$Dict$insert, t2, t1);
	});
var $elm$core$Set$union = F2(
	function (_v0, _v1) {
		var dict1 = _v0;
		var dict2 = _v1;
		return A2($elm$core$Dict$union, dict1, dict2);
	});
var $jfmengels$elm_review_common$NoMissingTypeExpose$foldExposedModules = F2(
	function (newExposedModules, oldExposedModules) {
		var _v0 = _Utils_Tuple2(oldExposedModules, newExposedModules);
		if (!_v0.a.$) {
			if (!_v0.b.$) {
				var _v1 = _v0.a;
				var _v2 = _v0.b;
				return $jfmengels$elm_review_common$NoMissingTypeExpose$Application;
			} else {
				var _v3 = _v0.a;
				return newExposedModules;
			}
		} else {
			if (!_v0.b.$) {
				var _v4 = _v0.b;
				return oldExposedModules;
			} else {
				var oldList = _v0.a.a;
				var newList = _v0.b.a;
				return $jfmengels$elm_review_common$NoMissingTypeExpose$Package(
					A2($elm$core$Set$union, oldList, newList));
			}
		}
	});
var $jfmengels$elm_review_common$NoMissingTypeExpose$foldModuleTypesHelp = F3(
	function (moduleName, newTypes, moduleTypes) {
		var _v0 = A2($elm$core$Dict$get, moduleName, moduleTypes);
		if (!_v0.$) {
			var oldTypes = _v0.a;
			return A3(
				$elm$core$Dict$insert,
				moduleName,
				A2($elm$core$Set$union, oldTypes, newTypes),
				moduleTypes);
		} else {
			return A3($elm$core$Dict$insert, moduleName, newTypes, moduleTypes);
		}
	});
var $jfmengels$elm_review_common$NoMissingTypeExpose$foldModuleTypes = F2(
	function (newModuleTypes, oldModuleTypes) {
		return A3($elm$core$Dict$foldl, $jfmengels$elm_review_common$NoMissingTypeExpose$foldModuleTypesHelp, newModuleTypes, oldModuleTypes);
	});
var $jfmengels$elm_review_common$NoMissingTypeExpose$foldProjectContexts = F2(
	function (_new, old) {
		return {
			E: A2($jfmengels$elm_review_common$NoMissingTypeExpose$foldExposedModules, _new.E, old.E),
			am: A2($jfmengels$elm_review_common$NoMissingTypeExpose$foldModuleTypes, _new.am, old.am)
		};
	});
var $jfmengels$elm_review_common$NoMissingTypeExpose$initialProjectContext = {E: $jfmengels$elm_review_common$NoMissingTypeExpose$Application, am: $elm$core$Dict$empty};
var $elm$core$Dict$singleton = F2(
	function (key, value) {
		return A5($elm$core$Dict$RBNode_elm_builtin, 1, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
	});
var $jfmengels$elm_review_common$NoMissingTypeExpose$fromModuleToProjectContext = $jfmengels$elm_review$Review$Rule$withMetadata(
	$jfmengels$elm_review$Review$Rule$initContextCreator(
		F2(
			function (metadata, context) {
				var _v0 = context.L;
				if (!_v0.$) {
					var exposedTypes = _v0.a.bo;
					return _Utils_update(
						$jfmengels$elm_review_common$NoMissingTypeExpose$initialProjectContext,
						{
							am: A2(
								$elm$core$Dict$singleton,
								$jfmengels$elm_review$Review$Rule$moduleNameFromMetadata(metadata),
								exposedTypes)
						});
				} else {
					return $jfmengels$elm_review_common$NoMissingTypeExpose$initialProjectContext;
				}
			})));
var $stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit = function (a) {
	return {$: 1, a: a};
};
var $jfmengels$elm_review_common$NoMissingTypeExpose$ExposedModule = function (a) {
	return {$: 1, a: a};
};
var $jfmengels$elm_review_common$NoMissingTypeExpose$initialExposedModuleType = F2(
	function (exposedModules, moduleTypes) {
		return $jfmengels$elm_review_common$NoMissingTypeExpose$ExposedModule(
			{
				bi: $elm$core$Set$empty,
				E: exposedModules,
				bn: _List_Nil,
				ai: $stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit(_List_Nil),
				bM: $elm$core$Maybe$Nothing,
				am: moduleTypes
			});
	});
var $jfmengels$elm_review_common$NoMissingTypeExpose$InternalModule = function (a) {
	return {$: 0, a: a};
};
var $jfmengels$elm_review_common$NoMissingTypeExpose$initialInternalModuleType = $jfmengels$elm_review_common$NoMissingTypeExpose$InternalModule(
	{
		bo: $elm$core$Set$empty,
		ai: $stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit(_List_Nil)
	});
var $jfmengels$elm_review_common$NoMissingTypeExpose$isModuleExposed = F2(
	function (exposedModules, moduleName) {
		if (!exposedModules.$) {
			return true;
		} else {
			var list = exposedModules.a;
			return A2(
				$elm$core$Set$member,
				A2($elm$core$String$join, '.', moduleName),
				list);
		}
	});
var $jfmengels$elm_review_common$NoMissingTypeExpose$fromProjectToModuleContext = $jfmengels$elm_review$Review$Rule$withMetadata(
	$jfmengels$elm_review$Review$Rule$withModuleNameLookupTable(
		$jfmengels$elm_review$Review$Rule$initContextCreator(
			F3(
				function (lookupTable, metadata, _v0) {
					var exposedModules = _v0.E;
					var moduleTypes = _v0.am;
					var moduleType = A2(
						$jfmengels$elm_review_common$NoMissingTypeExpose$isModuleExposed,
						exposedModules,
						$jfmengels$elm_review$Review$Rule$moduleNameFromMetadata(metadata)) ? A2($jfmengels$elm_review_common$NoMissingTypeExpose$initialExposedModuleType, exposedModules, moduleTypes) : $jfmengels$elm_review_common$NoMissingTypeExpose$initialInternalModuleType;
					return {
						j: lookupTable,
						L: moduleType,
						G: $elm$core$Set$fromList(
							$elm$core$Dict$keys(moduleTypes))
					};
				}))));
var $jfmengels$elm_review_common$NoMissingTypeExpose$rememberDeclaredType = F2(
	function (_v0, declaredTypes) {
		var name = _v0.b;
		return A2($elm$core$Set$insert, name, declaredTypes);
	});
var $jfmengels$elm_review_common$NoMissingTypeExpose$declaredTypesForDeclaration = F2(
	function (_v0, declaredTypes) {
		var declaration = _v0.b;
		switch (declaration.$) {
			case 2:
				var name = declaration.a.aW;
				return A2($jfmengels$elm_review_common$NoMissingTypeExpose$rememberDeclaredType, name, declaredTypes);
			case 1:
				var name = declaration.a.aW;
				return A2($jfmengels$elm_review_common$NoMissingTypeExpose$rememberDeclaredType, name, declaredTypes);
			default:
				return declaredTypes;
		}
	});
var $jfmengels$elm_review_common$NoMissingTypeExpose$declaredTypesForDeclarationList = F2(
	function (list, declaredTypes) {
		return A3($elm$core$List$foldl, $jfmengels$elm_review_common$NoMissingTypeExpose$declaredTypesForDeclaration, declaredTypes, list);
	});
var $stil4m$elm_syntax$Elm$Syntax$Node$map = F2(
	function (f, _v0) {
		var r = _v0.a;
		var a = _v0.b;
		return A2(
			$stil4m$elm_syntax$Elm$Syntax$Node$Node,
			r,
			f(a));
	});
var $jfmengels$elm_review$Review$ModuleNameLookupTable$moduleNameFor = F2(
	function (_v0, _v1) {
		var dict = _v0;
		var range = _v1.a;
		return A2(
			$elm$core$Dict$get,
			$jfmengels$elm_review$Review$ModuleNameLookupTable$Internal$toRangeLike(range),
			dict);
	});
var $jfmengels$elm_review_common$NoMissingTypeExpose$exposedSignatureTypesForRecordField = F3(
	function (lookupTable, _v5, exposedSignatureTypes) {
		var _v6 = _v5.b;
		var typeAnnotation = _v6.b;
		return A3($jfmengels$elm_review_common$NoMissingTypeExpose$exposedSignatureTypesForTypeAnnotation, lookupTable, typeAnnotation, exposedSignatureTypes);
	});
var $jfmengels$elm_review_common$NoMissingTypeExpose$exposedSignatureTypesForRecordFieldList = F3(
	function (lookupTable, fields, exposedSignatureTypes) {
		return A3(
			$elm$core$List$foldl,
			$jfmengels$elm_review_common$NoMissingTypeExpose$exposedSignatureTypesForRecordField(lookupTable),
			exposedSignatureTypes,
			fields);
	});
var $jfmengels$elm_review_common$NoMissingTypeExpose$exposedSignatureTypesForTypeAnnotation = F3(
	function (lookupTable, _v0, exposedSignatureTypes) {
		var typeAnnotation = _v0.b;
		switch (typeAnnotation.$) {
			case 1:
				var name = typeAnnotation.a;
				var list = typeAnnotation.b;
				var _v2 = A2($jfmengels$elm_review$Review$ModuleNameLookupTable$moduleNameFor, lookupTable, name);
				if (!_v2.$) {
					var moduleName = _v2.a;
					return A3(
						$jfmengels$elm_review_common$NoMissingTypeExpose$exposedSignatureTypesForTypeAnnotationList,
						lookupTable,
						list,
						A2(
							$elm$core$List$cons,
							A2(
								$stil4m$elm_syntax$Elm$Syntax$Node$map,
								function (_v3) {
									var typeName = _v3.b;
									return _Utils_Tuple2(moduleName, typeName);
								},
								name),
							exposedSignatureTypes));
				} else {
					return A3(
						$jfmengels$elm_review_common$NoMissingTypeExpose$exposedSignatureTypesForTypeAnnotationList,
						lookupTable,
						list,
						A2($elm$core$List$cons, name, exposedSignatureTypes));
				}
			case 6:
				var left = typeAnnotation.a;
				var right = typeAnnotation.b;
				return A3(
					$jfmengels$elm_review_common$NoMissingTypeExpose$exposedSignatureTypesForTypeAnnotation,
					lookupTable,
					right,
					A3($jfmengels$elm_review_common$NoMissingTypeExpose$exposedSignatureTypesForTypeAnnotation, lookupTable, left, exposedSignatureTypes));
			case 3:
				var list = typeAnnotation.a;
				return A3($jfmengels$elm_review_common$NoMissingTypeExpose$exposedSignatureTypesForTypeAnnotationList, lookupTable, list, exposedSignatureTypes);
			case 4:
				var fields = typeAnnotation.a;
				return A3($jfmengels$elm_review_common$NoMissingTypeExpose$exposedSignatureTypesForRecordFieldList, lookupTable, fields, exposedSignatureTypes);
			case 5:
				var _v4 = typeAnnotation.b;
				var fields = _v4.b;
				return A3($jfmengels$elm_review_common$NoMissingTypeExpose$exposedSignatureTypesForRecordFieldList, lookupTable, fields, exposedSignatureTypes);
			case 2:
				return exposedSignatureTypes;
			default:
				return exposedSignatureTypes;
		}
	});
var $jfmengels$elm_review_common$NoMissingTypeExpose$exposedSignatureTypesForTypeAnnotationList = F3(
	function (lookupTable, list, exposedSignatureTypes) {
		return A3(
			$elm$core$List$foldl,
			$jfmengels$elm_review_common$NoMissingTypeExpose$exposedSignatureTypesForTypeAnnotation(lookupTable),
			exposedSignatureTypes,
			list);
	});
var $jfmengels$elm_review_common$NoMissingTypeExpose$isExposingATypeNamed = F2(
	function (needle, _v0) {
		var topLevelExpose = _v0.b;
		switch (topLevelExpose.$) {
			case 0:
				return false;
			case 1:
				return false;
			case 2:
				var name = topLevelExpose.a;
				return _Utils_eq(name, needle);
			default:
				var name = topLevelExpose.a.aW;
				return _Utils_eq(name, needle);
		}
	});
var $jfmengels$elm_review_common$NoMissingTypeExpose$isTypeExposed = F2(
	function (exposes, name) {
		if (!exposes.$) {
			return true;
		} else {
			var list = exposes.a;
			return A2(
				$elm$core$List$any,
				$jfmengels$elm_review_common$NoMissingTypeExpose$isExposingATypeNamed(name),
				list);
		}
	});
var $jfmengels$elm_review_common$NoMissingTypeExpose$exposedSignatureTypesForAlias = F5(
	function (lookupTable, exposes, _v0, typeAnnotation, exposedSignatureTypes) {
		var name = _v0.b;
		if (A2($jfmengels$elm_review_common$NoMissingTypeExpose$isTypeExposed, exposes, name)) {
			if (typeAnnotation.b.$ === 1) {
				var _v2 = typeAnnotation.b;
				var list = _v2.b;
				return A3($jfmengels$elm_review_common$NoMissingTypeExpose$exposedSignatureTypesForTypeAnnotationList, lookupTable, list, exposedSignatureTypes);
			} else {
				return A3($jfmengels$elm_review_common$NoMissingTypeExpose$exposedSignatureTypesForTypeAnnotation, lookupTable, typeAnnotation, exposedSignatureTypes);
			}
		} else {
			return exposedSignatureTypes;
		}
	});
var $jfmengels$elm_review_common$NoMissingTypeExpose$exposedSignatureTypesForConstructor = F3(
	function (lookupTable, _v0, exposedSignatureTypes) {
		var _arguments = _v0.b.cO;
		return A3($jfmengels$elm_review_common$NoMissingTypeExpose$exposedSignatureTypesForTypeAnnotationList, lookupTable, _arguments, exposedSignatureTypes);
	});
var $jfmengels$elm_review_common$NoMissingTypeExpose$isExposingAnOpenTypeNamed = F2(
	function (needle, _v0) {
		var expose = _v0.b;
		if (expose.$ === 3) {
			var name = expose.a.aW;
			var open = expose.a.ep;
			return _Utils_eq(name, needle) && (!_Utils_eq(open, $elm$core$Maybe$Nothing));
		} else {
			return false;
		}
	});
var $jfmengels$elm_review_common$NoMissingTypeExpose$isTypeExposedOpen = F2(
	function (exposes, name) {
		if (!exposes.$) {
			return true;
		} else {
			var list = exposes.a;
			return A2(
				$elm$core$List$any,
				$jfmengels$elm_review_common$NoMissingTypeExpose$isExposingAnOpenTypeNamed(name),
				list);
		}
	});
var $jfmengels$elm_review_common$NoMissingTypeExpose$exposedSignatureTypesForConstructorList = F5(
	function (lookupTable, exposes, _v0, list, exposedSignatureTypes) {
		var name = _v0.b;
		return A2($jfmengels$elm_review_common$NoMissingTypeExpose$isTypeExposedOpen, exposes, name) ? A3(
			$elm$core$List$foldl,
			$jfmengels$elm_review_common$NoMissingTypeExpose$exposedSignatureTypesForConstructor(lookupTable),
			exposedSignatureTypes,
			list) : exposedSignatureTypes;
	});
var $stil4m$elm_syntax$Elm$Syntax$Exposing$exposesFunction = F2(
	function (s, exposure) {
		if (!exposure.$) {
			return true;
		} else {
			var l = exposure.a;
			return A2(
				$elm$core$List$any,
				function (_v1) {
					var value = _v1.b;
					if (value.$ === 1) {
						var fun = value.a;
						return _Utils_eq(fun, s);
					} else {
						return false;
					}
				},
				l);
		}
	});
var $jfmengels$elm_review_common$NoMissingTypeExpose$exposedSignatureTypesForSignature = F4(
	function (lookupTable, exposes, maybeSignature, exposedSignatureTypes) {
		if (!maybeSignature.$) {
			var _v1 = maybeSignature.a;
			var name = _v1.b.aW;
			var typeAnnotation = _v1.b.dG;
			return A2(
				$stil4m$elm_syntax$Elm$Syntax$Exposing$exposesFunction,
				$stil4m$elm_syntax$Elm$Syntax$Node$value(name),
				exposes) ? A3($jfmengels$elm_review_common$NoMissingTypeExpose$exposedSignatureTypesForTypeAnnotation, lookupTable, typeAnnotation, exposedSignatureTypes) : exposedSignatureTypes;
		} else {
			return exposedSignatureTypes;
		}
	});
var $jfmengels$elm_review_common$NoMissingTypeExpose$exposedSignatureTypesForDeclaration = F4(
	function (lookupTable, exposes, _v0, exposedSignatureTypes) {
		var declaration = _v0.b;
		switch (declaration.$) {
			case 2:
				var name = declaration.a.aW;
				var constructors = declaration.a.dX;
				return A5($jfmengels$elm_review_common$NoMissingTypeExpose$exposedSignatureTypesForConstructorList, lookupTable, exposes, name, constructors, exposedSignatureTypes);
			case 1:
				var name = declaration.a.aW;
				var typeAnnotation = declaration.a.dG;
				return A5($jfmengels$elm_review_common$NoMissingTypeExpose$exposedSignatureTypesForAlias, lookupTable, exposes, name, typeAnnotation, exposedSignatureTypes);
			case 0:
				var signature = declaration.a.ez;
				return A4($jfmengels$elm_review_common$NoMissingTypeExpose$exposedSignatureTypesForSignature, lookupTable, exposes, signature, exposedSignatureTypes);
			default:
				return exposedSignatureTypes;
		}
	});
var $jfmengels$elm_review_common$NoMissingTypeExpose$exposedSignatureTypesForDeclarationList = F4(
	function (lookupTable, exposes, list, exposedSignatureTypes) {
		return A3(
			$elm$core$List$foldl,
			A2($jfmengels$elm_review_common$NoMissingTypeExpose$exposedSignatureTypesForDeclaration, lookupTable, exposes),
			exposedSignatureTypes,
			list);
	});
var $jfmengels$elm_review_common$NoMissingTypeExpose$rememberExposedType = F3(
	function (exposes, _v0, exposedTypes) {
		var name = _v0.b;
		return A2($jfmengels$elm_review_common$NoMissingTypeExpose$isTypeExposed, exposes, name) ? A2($elm$core$Set$insert, name, exposedTypes) : exposedTypes;
	});
var $jfmengels$elm_review_common$NoMissingTypeExpose$exposedTypesForDeclaration = F3(
	function (exposes, _v0, exposedTypes) {
		var declaration = _v0.b;
		switch (declaration.$) {
			case 2:
				var name = declaration.a.aW;
				return A3($jfmengels$elm_review_common$NoMissingTypeExpose$rememberExposedType, exposes, name, exposedTypes);
			case 1:
				var name = declaration.a.aW;
				return A3($jfmengels$elm_review_common$NoMissingTypeExpose$rememberExposedType, exposes, name, exposedTypes);
			default:
				return exposedTypes;
		}
	});
var $jfmengels$elm_review_common$NoMissingTypeExpose$exposedTypesForDeclarationList = F3(
	function (exposes, list, exposedTypes) {
		return A3(
			$elm$core$List$foldl,
			$jfmengels$elm_review_common$NoMissingTypeExpose$exposedTypesForDeclaration(exposes),
			exposedTypes,
			list);
	});
var $jfmengels$elm_review_common$NoMissingTypeExpose$declarationListVisitor = F2(
	function (nodes, context) {
		return _Utils_Tuple2(
			_List_Nil,
			function () {
				var _v0 = context.L;
				if (!_v0.$) {
					var data = _v0.a;
					return {
						j: context.j,
						L: $jfmengels$elm_review_common$NoMissingTypeExpose$InternalModule(
							_Utils_update(
								data,
								{
									bo: A3($jfmengels$elm_review_common$NoMissingTypeExpose$exposedTypesForDeclarationList, data.ai, nodes, data.bo)
								})),
						G: context.G
					};
				} else {
					var data = _v0.a;
					return {
						j: context.j,
						L: $jfmengels$elm_review_common$NoMissingTypeExpose$ExposedModule(
							_Utils_update(
								data,
								{
									bi: A2($jfmengels$elm_review_common$NoMissingTypeExpose$declaredTypesForDeclarationList, nodes, data.bi),
									bn: A4($jfmengels$elm_review_common$NoMissingTypeExpose$exposedSignatureTypesForDeclarationList, context.j, data.ai, nodes, data.bn)
								})),
						G: context.G
					};
				}
			}());
	});
var $jfmengels$elm_review_common$NoMissingTypeExpose$isTypePrivate = F3(
	function (modulesFromTheProject, data, _v0) {
		var typeCall = _v0.b;
		if (!typeCall.a.b) {
			var name = typeCall.b;
			return A2($elm$core$Set$member, name, data.bi) && (!A2($jfmengels$elm_review_common$NoMissingTypeExpose$isTypeExposed, data.ai, name));
		} else {
			var moduleName = typeCall.a;
			return A2($elm$core$Set$member, moduleName, modulesFromTheProject) && (!A2($jfmengels$elm_review_common$NoMissingTypeExpose$isModuleExposed, data.E, moduleName));
		}
	});
var $jfmengels$elm_review$Review$Error$InsertAt = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $jfmengels$elm_review$Review$Fix$insertAt = $jfmengels$elm_review$Review$Error$InsertAt;
var $jfmengels$elm_review_common$NoMissingTypeExpose$exposeTypeFix = F2(
	function (exposingListStart, _v0) {
		var moduleName = _v0.a;
		var name = _v0.b;
		var _v1 = _Utils_Tuple2(exposingListStart, moduleName);
		if ((!_v1.a.$) && (!_v1.b.b)) {
			var start = _v1.a.a;
			return _List_fromArray(
				[
					A2($jfmengels$elm_review$Review$Fix$insertAt, start, name + ', ')
				]);
		} else {
			return _List_Nil;
		}
	});
var $jfmengels$elm_review_common$NoMissingTypeExpose$formatTypeName = function (_v0) {
	var moduleName = _v0.a;
	var name = _v0.b;
	return A2(
		$elm$core$String$join,
		'.',
		_Utils_ap(
			moduleName,
			_List_fromArray(
				[name])));
};
var $jfmengels$elm_review_common$NoMissingTypeExpose$makeError = F2(
	function (exposingListStart, _v0) {
		var range = _v0.a;
		var typeName = _v0.b;
		var formattedName = $jfmengels$elm_review_common$NoMissingTypeExpose$formatTypeName(typeName);
		return A3(
			$jfmengels$elm_review$Review$Rule$errorWithFix,
			{
				bG: _List_fromArray(
					['Users of this module will not be able to annotate a value of this type if they wanted to. You should expose this type or an alias of this type.']),
				al: 'Private type `' + (formattedName + '` should be exposed')
			},
			range,
			A2($jfmengels$elm_review_common$NoMissingTypeExpose$exposeTypeFix, exposingListStart, typeName));
	});
var $jfmengels$elm_review_common$NoMissingTypeExpose$finalEvaluation = function (context) {
	var _v0 = context.L;
	if (!_v0.$) {
		return _List_Nil;
	} else {
		var data = _v0.a;
		return A2(
			$elm$core$List$map,
			$jfmengels$elm_review_common$NoMissingTypeExpose$makeError(data.bM),
			A2(
				$elm$core$List$filter,
				A2($jfmengels$elm_review_common$NoMissingTypeExpose$isTypePrivate, context.G, data),
				data.bn));
	}
};
var $jfmengels$elm_review_common$NoMissingTypeExpose$addExposedModuleAlias = F3(
	function (moduleName, moduleAlias, exposedModules) {
		if (!exposedModules.$) {
			return exposedModules;
		} else {
			var list = exposedModules.a;
			return A2(
				$elm$core$Set$member,
				A2($elm$core$String$join, '.', moduleName),
				list) ? $jfmengels$elm_review_common$NoMissingTypeExpose$Package(
				A2($elm$core$Set$insert, moduleAlias, list)) : exposedModules;
		}
	});
var $jfmengels$elm_review_common$NoMissingTypeExpose$exposedModulesForImportAlias = F3(
	function (moduleName, maybeModuleAlias, exposedModules) {
		if (!maybeModuleAlias.$) {
			var _v1 = maybeModuleAlias.a;
			var moduleAlias = _v1.b;
			return A3(
				$jfmengels$elm_review_common$NoMissingTypeExpose$addExposedModuleAlias,
				moduleName,
				A2($elm$core$String$join, '.', moduleAlias),
				exposedModules);
		} else {
			return exposedModules;
		}
	});
var $jfmengels$elm_review_common$NoMissingTypeExpose$importVisitor = F2(
	function (_v0, context) {
		var moduleName = _v0.b.b_;
		var moduleAlias = _v0.b.ec;
		var _v1 = context.L;
		if (!_v1.$) {
			return _Utils_Tuple2(_List_Nil, context);
		} else {
			var data = _v1.a;
			return _Utils_Tuple2(
				_List_Nil,
				{
					j: context.j,
					L: $jfmengels$elm_review_common$NoMissingTypeExpose$ExposedModule(
						_Utils_update(
							data,
							{
								E: A3(
									$jfmengels$elm_review_common$NoMissingTypeExpose$exposedModulesForImportAlias,
									$stil4m$elm_syntax$Elm$Syntax$Node$value(moduleName),
									moduleAlias,
									data.E)
							})),
					G: context.G
				});
		}
	});
var $jfmengels$elm_review_common$NoMissingTypeExpose$exposingListStartLocation = function (exposes) {
	if ((exposes.$ === 1) && exposes.a.b) {
		var _v1 = exposes.a;
		var _v2 = _v1.a;
		var range = _v2.a;
		return $elm$core$Maybe$Just(range.bg);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $jfmengels$elm_review_common$NoMissingTypeExpose$moduleDefinitionVisitor = F2(
	function (_v0, context) {
		var mod = _v0.b;
		var _v1 = context.L;
		if (!_v1.$) {
			var data = _v1.a;
			return _Utils_Tuple2(
				_List_Nil,
				{
					j: context.j,
					L: $jfmengels$elm_review_common$NoMissingTypeExpose$InternalModule(
						_Utils_update(
							data,
							{
								ai: $stil4m$elm_syntax$Elm$Syntax$Module$exposingList(mod)
							})),
					G: context.G
				});
		} else {
			var data = _v1.a;
			return _Utils_Tuple2(
				_List_Nil,
				{
					j: context.j,
					L: $jfmengels$elm_review_common$NoMissingTypeExpose$ExposedModule(
						_Utils_update(
							data,
							{
								ai: $stil4m$elm_syntax$Elm$Syntax$Module$exposingList(mod),
								bM: $jfmengels$elm_review_common$NoMissingTypeExpose$exposingListStartLocation(
									$stil4m$elm_syntax$Elm$Syntax$Module$exposingList(mod))
							})),
					G: context.G
				});
		}
	});
var $jfmengels$elm_review$Review$Rule$withFinalModuleEvaluation = F2(
	function (visitor, _v0) {
		var schema = _v0;
		return _Utils_update(
			schema,
			{
				m: A2($elm$core$List$cons, visitor, schema.m)
			});
	});
var $jfmengels$elm_review_common$NoMissingTypeExpose$moduleVisitor = function (schema) {
	return A2(
		$jfmengels$elm_review$Review$Rule$withFinalModuleEvaluation,
		$jfmengels$elm_review_common$NoMissingTypeExpose$finalEvaluation,
		A2(
			$jfmengels$elm_review$Review$Rule$withDeclarationListVisitor,
			$jfmengels$elm_review_common$NoMissingTypeExpose$declarationListVisitor,
			A2(
				$jfmengels$elm_review$Review$Rule$withImportVisitor,
				$jfmengels$elm_review_common$NoMissingTypeExpose$importVisitor,
				A2($jfmengels$elm_review$Review$Rule$withModuleDefinitionVisitor, $jfmengels$elm_review_common$NoMissingTypeExpose$moduleDefinitionVisitor, schema))));
};
var $jfmengels$elm_review$Review$Rule$withElmJsonProjectVisitor = F2(
	function (visitor, _v0) {
		var schema = _v0;
		return _Utils_update(
			schema,
			{
				z: A2(
					$elm$core$List$cons,
					$jfmengels$elm_review$Review$Rule$removeErrorPhantomTypeFromVisitor(visitor),
					schema.z)
			});
	});
var $jfmengels$elm_review_common$NoMissingTypeExpose$rule = $jfmengels$elm_review$Review$Rule$fromProjectRuleSchema(
	A2(
		$jfmengels$elm_review$Review$Rule$withModuleContextUsingContextCreator,
		{aj: $jfmengels$elm_review_common$NoMissingTypeExpose$foldProjectContexts, aM: $jfmengels$elm_review_common$NoMissingTypeExpose$fromModuleToProjectContext, cr: $jfmengels$elm_review_common$NoMissingTypeExpose$fromProjectToModuleContext},
		$jfmengels$elm_review$Review$Rule$withContextFromImportedModules(
			A2(
				$jfmengels$elm_review$Review$Rule$withModuleVisitor,
				$jfmengels$elm_review_common$NoMissingTypeExpose$moduleVisitor,
				A2(
					$jfmengels$elm_review$Review$Rule$withDependenciesProjectVisitor,
					$jfmengels$elm_review_common$NoMissingTypeExpose$dependencyDictVisitor,
					A2(
						$jfmengels$elm_review$Review$Rule$withElmJsonProjectVisitor,
						$jfmengels$elm_review_common$NoMissingTypeExpose$elmJsonVisitor,
						A2($jfmengels$elm_review$Review$Rule$newProjectRuleSchema, 'NoMissingTypeExpose', $jfmengels$elm_review_common$NoMissingTypeExpose$initialProjectContext)))))));
var $jfmengels$elm_review_common$RangeDict$empty = $elm$core$Dict$empty;
var $jfmengels$elm_review_common$NoPrematureLetComputation$emptyBranching = {q: _List_Nil, aS: $elm$core$Maybe$Nothing};
var $jfmengels$elm_review_common$NoPrematureLetComputation$InsertExistingLet = function (a) {
	return {$: 1, a: a};
};
var $jfmengels$elm_review_common$NoPrematureLetComputation$InsertNewLet = function (a) {
	return {$: 0, a: a};
};
var $jfmengels$elm_review_common$NoPrematureLetComputation$figureOutInsertionLocation = function (node) {
	var _v0 = $stil4m$elm_syntax$Elm$Syntax$Node$value(node);
	if (_v0.$ === 15) {
		var declarations = _v0.a.cW;
		if (declarations.b) {
			var first = declarations.a;
			return $jfmengels$elm_review_common$NoPrematureLetComputation$InsertExistingLet(
				$stil4m$elm_syntax$Elm$Syntax$Node$range(first).bg);
		} else {
			return $jfmengels$elm_review_common$NoPrematureLetComputation$InsertNewLet(
				$stil4m$elm_syntax$Elm$Syntax$Node$range(node).bg);
		}
	} else {
		return $jfmengels$elm_review_common$NoPrematureLetComputation$InsertNewLet(
			$stil4m$elm_syntax$Elm$Syntax$Node$range(node).bg);
	}
};
var $jfmengels$elm_review_common$NoPrematureLetComputation$Branch = 0;
var $jfmengels$elm_review_common$NoPrematureLetComputation$Scope = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $jfmengels$elm_review_common$NoPrematureLetComputation$newBranch = function (insertionLocation) {
	return A2(
		$jfmengels$elm_review_common$NoPrematureLetComputation$Scope,
		0,
		{aQ: insertionLocation, az: _List_Nil, l: $jfmengels$elm_review_common$RangeDict$empty, ag: $elm$core$Set$empty});
};
var $jfmengels$elm_review_common$NoPrematureLetComputation$declarationVisitor = F2(
	function (node, context) {
		var _v0 = $stil4m$elm_syntax$Elm$Syntax$Node$value(node);
		if (!_v0.$) {
			var declaration = _v0.a.dZ;
			return _Utils_Tuple2(
				_List_Nil,
				{
					o: $jfmengels$elm_review_common$NoPrematureLetComputation$emptyBranching,
					bO: context.bO,
					a2: $jfmengels$elm_review_common$RangeDict$empty,
					j: context.j,
					r: $jfmengels$elm_review_common$NoPrematureLetComputation$newBranch(
						$jfmengels$elm_review_common$NoPrematureLetComputation$figureOutInsertionLocation(
							$stil4m$elm_syntax$Elm$Syntax$Node$value(declaration).bN))
				});
		} else {
			return _Utils_Tuple2(_List_Nil, context);
		}
	});
var $jfmengels$elm_review_common$NoPrematureLetComputation$addBranching = F2(
	function (range, branching) {
		return {
			q: _Utils_ap(
				branching.q,
				_List_fromArray(
					[range])),
			aS: $elm$core$Maybe$Just(range)
		};
	});
var $jfmengels$elm_review_common$NoPrematureLetComputation$Function = 2;
var $jfmengels$elm_review_common$NoPrematureLetComputation$FunctionOkayToMoveInto = 3;
var $jfmengels$elm_review_common$RangeDict$rangeAsString = function (range) {
	return A2(
		$elm$core$String$join,
		'_',
		A2(
			$elm$core$List$map,
			$elm$core$String$fromInt,
			_List_fromArray(
				[range.bg.aB, range.bg.an, range.a$.aB, range.a$.an])));
};
var $jfmengels$elm_review_common$RangeDict$insert = function (range) {
	return $elm$core$Dict$insert(
		$jfmengels$elm_review_common$RangeDict$rangeAsString(range));
};
var $jfmengels$elm_review_common$NoPrematureLetComputation$insertNewBranches = F2(
	function (nodes, rangeDict) {
		insertNewBranches:
		while (true) {
			if (!nodes.b) {
				return rangeDict;
			} else {
				var node = nodes.a;
				var tail = nodes.b;
				var $temp$nodes = tail,
					$temp$rangeDict = A3(
					$jfmengels$elm_review_common$RangeDict$insert,
					$stil4m$elm_syntax$Elm$Syntax$Node$range(node),
					$jfmengels$elm_review_common$NoPrematureLetComputation$newBranch(
						$jfmengels$elm_review_common$NoPrematureLetComputation$figureOutInsertionLocation(node)),
					rangeDict);
				nodes = $temp$nodes;
				rangeDict = $temp$rangeDict;
				continue insertNewBranches;
			}
		}
	});
var $jfmengels$elm_review_common$RangeDict$modify = F3(
	function (range, mapper, dict) {
		var key = $jfmengels$elm_review_common$RangeDict$rangeAsString(range);
		var _v0 = A2($elm$core$Dict$get, key, dict);
		if (!_v0.$) {
			var value = _v0.a;
			return A3(
				$elm$core$Dict$insert,
				$jfmengels$elm_review_common$RangeDict$rangeAsString(range),
				mapper(value),
				dict);
		} else {
			return dict;
		}
	});
var $jfmengels$elm_review_common$NoPrematureLetComputation$updateCurrentBranch = F3(
	function (updateFn, currentBranching, _v0) {
		var type_ = _v0.a;
		var segment = _v0.b;
		if (!currentBranching.b) {
			return A2(
				$jfmengels$elm_review_common$NoPrematureLetComputation$Scope,
				type_,
				updateFn(segment));
		} else {
			var range = currentBranching.a;
			var restOfSegments = currentBranching.b;
			return A2(
				$jfmengels$elm_review_common$NoPrematureLetComputation$Scope,
				type_,
				_Utils_update(
					segment,
					{
						l: A3(
							$jfmengels$elm_review_common$RangeDict$modify,
							range,
							A2($jfmengels$elm_review_common$NoPrematureLetComputation$updateCurrentBranch, updateFn, restOfSegments),
							segment.l)
					}));
		}
	});
var $jfmengels$elm_review_common$NoPrematureLetComputation$addBranches = F2(
	function (nodes, context) {
		var branch = A3(
			$jfmengels$elm_review_common$NoPrematureLetComputation$updateCurrentBranch,
			function (b) {
				return _Utils_update(
					b,
					{
						l: A2($jfmengels$elm_review_common$NoPrematureLetComputation$insertNewBranches, nodes, b.l)
					});
			},
			context.o.q,
			context.r);
		return _Utils_update(
			context,
			{r: branch});
	});
var $stil4m$elm_syntax$Elm$Syntax$Range$compareLocations = F2(
	function (left, right) {
		return (_Utils_cmp(left.aB, right.aB) < 0) ? 0 : ((_Utils_cmp(left.aB, right.aB) > 0) ? 2 : A2($elm$core$Basics$compare, left.an, right.an));
	});
var $jfmengels$elm_review_common$NoPrematureLetComputation$isRangeContained = function (_v0) {
	var outer = _v0.dk;
	var inner = _v0.da;
	return (A2($stil4m$elm_syntax$Elm$Syntax$Range$compareLocations, outer.bg, inner.bg) !== 2) && (!(!A2($stil4m$elm_syntax$Elm$Syntax$Range$compareLocations, outer.a$, inner.a$)));
};
var $jfmengels$elm_review_common$NoPrematureLetComputation$markDeclarationAsUsed = F2(
	function (range, declared) {
		return $jfmengels$elm_review_common$NoPrematureLetComputation$isRangeContained(
			{da: range, dk: declared.bh}) ? _Utils_update(
			declared,
			{bR: true}) : declared;
	});
var $jfmengels$elm_review_common$NoPrematureLetComputation$markDeclarationsAsUsed = F2(
	function (range, branchData) {
		return _Utils_update(
			branchData,
			{
				az: A2(
					$elm$core$List$map,
					$jfmengels$elm_review_common$NoPrematureLetComputation$markDeclarationAsUsed(range),
					branchData.az)
			});
	});
var $jfmengels$elm_review_common$NoPrematureLetComputation$updateAllSegmentsOfCurrentBranch = F3(
	function (updateFn, currentBranching, _v0) {
		var type_ = _v0.a;
		var scope = _v0.b;
		if (!currentBranching.b) {
			return A2(
				$jfmengels$elm_review_common$NoPrematureLetComputation$Scope,
				type_,
				updateFn(scope));
		} else {
			var range = currentBranching.a;
			var restOfSegments = currentBranching.b;
			return A2(
				$jfmengels$elm_review_common$NoPrematureLetComputation$Scope,
				type_,
				updateFn(
					_Utils_update(
						scope,
						{
							l: A3(
								$jfmengels$elm_review_common$RangeDict$modify,
								range,
								A2($jfmengels$elm_review_common$NoPrematureLetComputation$updateAllSegmentsOfCurrentBranch, updateFn, restOfSegments),
								scope.l)
						})));
		}
	});
var $jfmengels$elm_review_common$NoPrematureLetComputation$markLetDeclarationsAsIntroducingVariables = F2(
	function (range, context) {
		return A3(
			$jfmengels$elm_review_common$NoPrematureLetComputation$updateAllSegmentsOfCurrentBranch,
			$jfmengels$elm_review_common$NoPrematureLetComputation$markDeclarationsAsUsed(range),
			context.o.q,
			context.r);
	});
var $jfmengels$elm_review_common$RangeDict$member = function (range) {
	return $elm$core$Dict$member(
		$jfmengels$elm_review_common$RangeDict$rangeAsString(range));
};
var $jfmengels$elm_review_common$NoPrematureLetComputation$patternIntroducesVariable = function (node) {
	patternIntroducesVariable:
	while (true) {
		var _v0 = $stil4m$elm_syntax$Elm$Syntax$Node$value(node);
		switch (_v0.$) {
			case 10:
				var patterns = _v0.a;
				return A2($elm$core$List$any, $jfmengels$elm_review_common$NoPrematureLetComputation$patternIntroducesVariable, patterns);
			case 7:
				var patterns = _v0.a;
				return A2($elm$core$List$any, $jfmengels$elm_review_common$NoPrematureLetComputation$patternIntroducesVariable, patterns);
			case 8:
				return true;
			case 9:
				var left = _v0.a;
				var right = _v0.b;
				return $jfmengels$elm_review_common$NoPrematureLetComputation$patternIntroducesVariable(left) || $jfmengels$elm_review_common$NoPrematureLetComputation$patternIntroducesVariable(right);
			case 11:
				return true;
			case 12:
				var patterns = _v0.b;
				return A2($elm$core$List$any, $jfmengels$elm_review_common$NoPrematureLetComputation$patternIntroducesVariable, patterns);
			case 13:
				return true;
			case 14:
				var pattern = _v0.a;
				var $temp$node = pattern;
				node = $temp$node;
				continue patternIntroducesVariable;
			default:
				return false;
		}
	}
};
var $jfmengels$elm_review_common$NoPrematureLetComputation$knownFunctions = $elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2(
			'map',
			$elm$core$Dict$fromList(
				_List_fromArray(
					[
						_Utils_Tuple2(
						_List_fromArray(
							['Maybe']),
						2),
						_Utils_Tuple2(
						_List_fromArray(
							['Html']),
						2),
						_Utils_Tuple2(
						_List_fromArray(
							['Result']),
						2),
						_Utils_Tuple2(
						_List_fromArray(
							['Task']),
						2)
					]))),
			_Utils_Tuple2(
			'map2',
			$elm$core$Dict$fromList(
				_List_fromArray(
					[
						_Utils_Tuple2(
						_List_fromArray(
							['Maybe']),
						3),
						_Utils_Tuple2(
						_List_fromArray(
							['Result']),
						3),
						_Utils_Tuple2(
						_List_fromArray(
							['Task']),
						3)
					]))),
			_Utils_Tuple2(
			'map3',
			$elm$core$Dict$fromList(
				_List_fromArray(
					[
						_Utils_Tuple2(
						_List_fromArray(
							['Maybe']),
						4),
						_Utils_Tuple2(
						_List_fromArray(
							['Result']),
						4),
						_Utils_Tuple2(
						_List_fromArray(
							['Task']),
						4)
					]))),
			_Utils_Tuple2(
			'map4',
			$elm$core$Dict$fromList(
				_List_fromArray(
					[
						_Utils_Tuple2(
						_List_fromArray(
							['Maybe']),
						5),
						_Utils_Tuple2(
						_List_fromArray(
							['Result']),
						5),
						_Utils_Tuple2(
						_List_fromArray(
							['Task']),
						5)
					]))),
			_Utils_Tuple2(
			'map5',
			$elm$core$Dict$fromList(
				_List_fromArray(
					[
						_Utils_Tuple2(
						_List_fromArray(
							['Maybe']),
						6),
						_Utils_Tuple2(
						_List_fromArray(
							['Result']),
						6),
						_Utils_Tuple2(
						_List_fromArray(
							['Task']),
						6)
					]))),
			_Utils_Tuple2(
			'mapError',
			$elm$core$Dict$fromList(
				_List_fromArray(
					[
						_Utils_Tuple2(
						_List_fromArray(
							['Result']),
						2),
						_Utils_Tuple2(
						_List_fromArray(
							['Task']),
						2)
					]))),
			_Utils_Tuple2(
			'andThen',
			$elm$core$Dict$fromList(
				_List_fromArray(
					[
						_Utils_Tuple2(
						_List_fromArray(
							['Maybe']),
						2),
						_Utils_Tuple2(
						_List_fromArray(
							['Result']),
						2),
						_Utils_Tuple2(
						_List_fromArray(
							['Task']),
						2)
					]))),
			_Utils_Tuple2(
			'mapFirst',
			A2(
				$elm$core$Dict$singleton,
				_List_fromArray(
					['Tuple']),
				2)),
			_Utils_Tuple2(
			'mapSecond',
			A2(
				$elm$core$Dict$singleton,
				_List_fromArray(
					['Tuple']),
				2)),
			_Utils_Tuple2(
			'perform',
			A2(
				$elm$core$Dict$singleton,
				_List_fromArray(
					['Task']),
				2)),
			_Utils_Tuple2(
			'attempt',
			A2(
				$elm$core$Dict$singleton,
				_List_fromArray(
					['Task']),
				2)),
			_Utils_Tuple2(
			'onError',
			A2(
				$elm$core$Dict$singleton,
				_List_fromArray(
					['Task']),
				2)),
			_Utils_Tuple2(
			'update',
			A2(
				$elm$core$Dict$singleton,
				_List_fromArray(
					['Dict']),
				4))
		]));
var $jfmengels$elm_review_common$NoPrematureLetComputation$numberOfArgumentsForFunction = F3(
	function (lookupTable, fnName, fnRange) {
		var _v0 = A2($elm$core$Dict$get, fnName, $jfmengels$elm_review_common$NoPrematureLetComputation$knownFunctions);
		if (!_v0.$) {
			var knownModuleNames = _v0.a;
			return A2(
				$elm$core$Maybe$andThen,
				function (moduleName) {
					return A2($elm$core$Dict$get, moduleName, knownModuleNames);
				},
				A2($jfmengels$elm_review$Review$ModuleNameLookupTable$moduleNameAt, lookupTable, fnRange));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $jfmengels$elm_review_common$NoPrematureLetComputation$removeParens = function (node) {
	removeParens:
	while (true) {
		var _v0 = $stil4m$elm_syntax$Elm$Syntax$Node$value(node);
		if (_v0.$ === 14) {
			var expr = _v0.a;
			var $temp$node = expr;
			node = $temp$node;
			continue removeParens;
		} else {
			return node;
		}
	}
};
var $jfmengels$elm_review_common$NoPrematureLetComputation$registerApplicationCall = F5(
	function (fnRange, fnName, argumentWithParens, nbOfOtherArguments, context) {
		var argument = $jfmengels$elm_review_common$NoPrematureLetComputation$removeParens(argumentWithParens);
		var _v0 = $stil4m$elm_syntax$Elm$Syntax$Node$value(argument);
		if (_v0.$ === 17) {
			var _v1 = A3($jfmengels$elm_review_common$NoPrematureLetComputation$numberOfArgumentsForFunction, context.j, fnName, fnRange);
			if (!_v1.$) {
				var expectedNumberOfArguments = _v1.a;
				return _Utils_eq(nbOfOtherArguments, expectedNumberOfArguments - 1) ? _Utils_update(
					context,
					{
						a2: A3(
							$jfmengels$elm_review_common$RangeDict$insert,
							$stil4m$elm_syntax$Elm$Syntax$Node$range(argument),
							0,
							context.a2)
					}) : context;
			} else {
				return context;
			}
		} else {
			return context;
		}
	});
var $jfmengels$elm_review_common$NoPrematureLetComputation$registerCaseExpression = F3(
	function (node, cases, context) {
		var contextWithDeclarationsMarked = A2(
			$elm$core$List$any,
			A2($elm$core$Basics$composeR, $elm$core$Tuple$first, $jfmengels$elm_review_common$NoPrematureLetComputation$patternIntroducesVariable),
			cases) ? _Utils_update(
			context,
			{
				r: A2(
					$jfmengels$elm_review_common$NoPrematureLetComputation$markLetDeclarationsAsIntroducingVariables,
					$stil4m$elm_syntax$Elm$Syntax$Node$range(node),
					context)
			}) : context;
		var branchNodes = A2(
			$elm$core$List$map,
			function (_v0) {
				var exprNode = _v0.b;
				return exprNode;
			},
			cases);
		return A2($jfmengels$elm_review_common$NoPrematureLetComputation$addBranches, branchNodes, contextWithDeclarationsMarked);
	});
var $jfmengels$elm_review_common$NoPrematureLetComputation$LetScope = 1;
var $jfmengels$elm_review_common$NoPrematureLetComputation$variablesInPattern = function (node) {
	variablesInPattern:
	while (true) {
		var _v0 = $stil4m$elm_syntax$Elm$Syntax$Node$value(node);
		switch (_v0.$) {
			case 10:
				var patterns = _v0.a;
				return A2($elm$core$List$concatMap, $jfmengels$elm_review_common$NoPrematureLetComputation$variablesInPattern, patterns);
			case 7:
				var patterns = _v0.a;
				return A2($elm$core$List$concatMap, $jfmengels$elm_review_common$NoPrematureLetComputation$variablesInPattern, patterns);
			case 8:
				var fields = _v0.a;
				return fields;
			case 9:
				var left = _v0.a;
				var right = _v0.b;
				return A2(
					$elm$core$List$concatMap,
					$jfmengels$elm_review_common$NoPrematureLetComputation$variablesInPattern,
					_List_fromArray(
						[left, right]));
			case 11:
				var name = _v0.a;
				return _List_fromArray(
					[
						A2(
						$stil4m$elm_syntax$Elm$Syntax$Node$Node,
						$stil4m$elm_syntax$Elm$Syntax$Node$range(node),
						name)
					]);
			case 12:
				var patterns = _v0.b;
				return A2($elm$core$List$concatMap, $jfmengels$elm_review_common$NoPrematureLetComputation$variablesInPattern, patterns);
			case 13:
				var pattern = _v0.a;
				var name = _v0.b;
				return A2(
					$elm$core$List$cons,
					name,
					$jfmengels$elm_review_common$NoPrematureLetComputation$variablesInPattern(pattern));
			case 14:
				var pattern = _v0.a;
				var $temp$node = pattern;
				node = $temp$node;
				continue variablesInPattern;
			default:
				return _List_Nil;
		}
	}
};
var $jfmengels$elm_review_common$NoPrematureLetComputation$collectDeclarations = function (node) {
	var _v0 = $stil4m$elm_syntax$Elm$Syntax$Node$value(node);
	if (!_v0.$) {
		var letFunction = _v0.a;
		var declaration = $stil4m$elm_syntax$Elm$Syntax$Node$value(letFunction.dZ);
		return $elm$core$List$isEmpty(declaration.cO) ? _List_fromArray(
			[
				_Utils_Tuple3(
				declaration.aW,
				$stil4m$elm_syntax$Elm$Syntax$Node$range(declaration.bN),
				node)
			]) : _List_Nil;
	} else {
		var pattern = _v0.a;
		var expression = _v0.b;
		var _v1 = $jfmengels$elm_review_common$NoPrematureLetComputation$variablesInPattern(pattern);
		if (_v1.b && (!_v1.b.b)) {
			var name = _v1.a;
			return _List_fromArray(
				[
					_Utils_Tuple3(
					name,
					$stil4m$elm_syntax$Elm$Syntax$Node$range(expression),
					node)
				]);
		} else {
			return _List_Nil;
		}
	}
};
var $jfmengels$elm_review_common$RangeDict$fromList = function (entries) {
	return $elm$core$Dict$fromList(
		A2(
			$elm$core$List$map,
			$elm$core$Tuple$mapFirst($jfmengels$elm_review_common$RangeDict$rangeAsString),
			entries));
};
var $jfmengels$elm_review_common$NoPrematureLetComputation$fullLines = function (range) {
	return {
		a$: range.a$,
		bg: {an: 1, aB: range.bg.aB}
	};
};
var $jfmengels$elm_review_common$NoPrematureLetComputation$functionScope = A2(
	$jfmengels$elm_review_common$NoPrematureLetComputation$Scope,
	2,
	{
		aQ: $jfmengels$elm_review_common$NoPrematureLetComputation$InsertNewLet(
			{an: 0, aB: 0}),
		az: _List_Nil,
		l: $jfmengels$elm_review_common$RangeDict$empty,
		ag: $elm$core$Set$empty
	});
var $jfmengels$elm_review_common$NoPrematureLetComputation$getLetFunctionRange = function (node) {
	var _v0 = $stil4m$elm_syntax$Elm$Syntax$Node$value(node);
	if (!_v0.$) {
		var declaration = _v0.a.dZ;
		return $elm$core$List$isEmpty(
			$stil4m$elm_syntax$Elm$Syntax$Node$value(declaration).cO) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(
			$stil4m$elm_syntax$Elm$Syntax$Node$range(
				$stil4m$elm_syntax$Elm$Syntax$Node$value(declaration).bN));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $jfmengels$elm_review_common$NoPrematureLetComputation$registerLetExpression = F3(
	function (node, _v0, context) {
		var declarations = _v0.cW;
		var expression = _v0.bN;
		var scopes = $jfmengels$elm_review_common$RangeDict$fromList(
			A2(
				$elm$core$List$map,
				function (range) {
					return _Utils_Tuple2(range, $jfmengels$elm_review_common$NoPrematureLetComputation$functionScope);
				},
				A2($elm$core$List$filterMap, $jfmengels$elm_review_common$NoPrematureLetComputation$getLetFunctionRange, declarations)));
		var isDeclarationAlone = $elm$core$List$length(declarations) === 1;
		var letDeclarations = A2(
			$elm$core$List$map,
			function (_v1) {
				var nameNode = _v1.a;
				var expressionRange = _v1.b;
				var declaration = _v1.c;
				return {
					ce: $stil4m$elm_syntax$Elm$Syntax$Node$range(declaration).bg.an,
					bh: $jfmengels$elm_review_common$NoPrematureLetComputation$fullLines(
						{
							a$: expressionRange.a$,
							bg: $stil4m$elm_syntax$Elm$Syntax$Node$range(declaration).bg
						}),
					bR: false,
					aW: $stil4m$elm_syntax$Elm$Syntax$Node$value(nameNode),
					b5: isDeclarationAlone ? {
						a$: $stil4m$elm_syntax$Elm$Syntax$Node$range(expression).bg,
						bg: $stil4m$elm_syntax$Elm$Syntax$Node$range(node).bg
					} : {
						a$: expressionRange.a$,
						bg: {
							an: 1,
							aB: $stil4m$elm_syntax$Elm$Syntax$Node$range(declaration).bg.aB
						}
					},
					b6: $stil4m$elm_syntax$Elm$Syntax$Node$range(nameNode)
				};
			},
			A2($elm$core$List$concatMap, $jfmengels$elm_review_common$NoPrematureLetComputation$collectDeclarations, declarations));
		var newScope = A2(
			$jfmengels$elm_review_common$NoPrematureLetComputation$Scope,
			1,
			{
				aQ: $jfmengels$elm_review_common$NoPrematureLetComputation$figureOutInsertionLocation(node),
				az: letDeclarations,
				l: scopes,
				ag: $elm$core$Set$empty
			});
		var contextWithDeclarationsMarked = _Utils_update(
			context,
			{
				r: A2(
					$jfmengels$elm_review_common$NoPrematureLetComputation$markLetDeclarationsAsIntroducingVariables,
					$stil4m$elm_syntax$Elm$Syntax$Node$range(node),
					context)
			});
		var branch = A3(
			$jfmengels$elm_review_common$NoPrematureLetComputation$updateCurrentBranch,
			function (b) {
				return _Utils_update(
					b,
					{
						l: A3(
							$jfmengels$elm_review_common$RangeDict$insert,
							$stil4m$elm_syntax$Elm$Syntax$Node$range(node),
							newScope,
							b.l)
					});
			},
			contextWithDeclarationsMarked.o.q,
			contextWithDeclarationsMarked.r);
		return _Utils_update(
			contextWithDeclarationsMarked,
			{
				o: A2(
					$jfmengels$elm_review_common$NoPrematureLetComputation$addBranching,
					$stil4m$elm_syntax$Elm$Syntax$Node$range(node),
					contextWithDeclarationsMarked.o),
				r: branch
			});
	});
var $jfmengels$elm_review_common$NoPrematureLetComputation$expressionEnterVisitorHelp = F2(
	function (node, context) {
		var _v0 = $stil4m$elm_syntax$Elm$Syntax$Node$value(node);
		_v0$9:
		while (true) {
			switch (_v0.$) {
				case 3:
					if (!_v0.a.b) {
						var name = _v0.b;
						var branch = A3(
							$jfmengels$elm_review_common$NoPrematureLetComputation$updateCurrentBranch,
							function (b) {
								return _Utils_update(
									b,
									{
										ag: A2($elm$core$Set$insert, name, b.ag)
									});
							},
							context.o.q,
							context.r);
						return _Utils_update(
							context,
							{r: branch});
					} else {
						break _v0$9;
					}
				case 22:
					var name = _v0.a;
					var branch = A3(
						$jfmengels$elm_review_common$NoPrematureLetComputation$updateCurrentBranch,
						function (b) {
							return _Utils_update(
								b,
								{
									ag: A2(
										$elm$core$Set$insert,
										$stil4m$elm_syntax$Elm$Syntax$Node$value(name),
										b.ag)
								});
						},
						context.o.q,
						context.r);
					return _Utils_update(
						context,
						{r: branch});
				case 15:
					var letBlock = _v0.a;
					return A3($jfmengels$elm_review_common$NoPrematureLetComputation$registerLetExpression, node, letBlock, context);
				case 4:
					var then_ = _v0.b;
					var else_ = _v0.c;
					return A2(
						$jfmengels$elm_review_common$NoPrematureLetComputation$addBranches,
						_List_fromArray(
							[then_, else_]),
						context);
				case 16:
					var cases = _v0.a.dS;
					return A3($jfmengels$elm_review_common$NoPrematureLetComputation$registerCaseExpression, node, cases, context);
				case 17:
					var args = _v0.a.dM;
					var expression = _v0.a.bN;
					var newScope = A2(
						$jfmengels$elm_review_common$NoPrematureLetComputation$Scope,
						A2(
							$jfmengels$elm_review_common$RangeDict$member,
							$stil4m$elm_syntax$Elm$Syntax$Node$range(node),
							context.a2) ? 3 : 2,
						{
							aQ: $jfmengels$elm_review_common$NoPrematureLetComputation$figureOutInsertionLocation(expression),
							az: _List_Nil,
							l: $jfmengels$elm_review_common$RangeDict$empty,
							ag: $elm$core$Set$empty
						});
					var branch = A2($elm$core$List$any, $jfmengels$elm_review_common$NoPrematureLetComputation$patternIntroducesVariable, args) ? A2(
						$jfmengels$elm_review_common$NoPrematureLetComputation$markLetDeclarationsAsIntroducingVariables,
						$stil4m$elm_syntax$Elm$Syntax$Node$range(node),
						context) : context.r;
					var branchWithAddedScope = A3(
						$jfmengels$elm_review_common$NoPrematureLetComputation$updateCurrentBranch,
						function (b) {
							return _Utils_update(
								b,
								{
									l: A3(
										$jfmengels$elm_review_common$RangeDict$insert,
										$stil4m$elm_syntax$Elm$Syntax$Node$range(node),
										newScope,
										b.l)
								});
						},
						context.o.q,
						branch);
					return _Utils_update(
						context,
						{
							o: A2(
								$jfmengels$elm_review_common$NoPrematureLetComputation$addBranching,
								$stil4m$elm_syntax$Elm$Syntax$Node$range(node),
								context.o),
							r: branchWithAddedScope
						});
				case 1:
					if ((_v0.a.b && (_v0.a.a.b.$ === 3)) && _v0.a.b.b) {
						var _v1 = _v0.a;
						var _v2 = _v1.a;
						var fnRange = _v2.a;
						var _v3 = _v2.b;
						var fnName = _v3.b;
						var _v4 = _v1.b;
						var argumentWithParens = _v4.a;
						var restOfArguments = _v4.b;
						return A5(
							$jfmengels$elm_review_common$NoPrematureLetComputation$registerApplicationCall,
							fnRange,
							fnName,
							argumentWithParens,
							$elm$core$List$length(restOfArguments),
							context);
					} else {
						break _v0$9;
					}
				case 2:
					switch (_v0.a) {
						case '|>':
							if ((((_v0.d.b.$ === 1) && _v0.d.b.a.b) && (_v0.d.b.a.a.b.$ === 3)) && _v0.d.b.a.b.b) {
								var _v5 = _v0.d;
								var _v6 = _v5.b.a;
								var _v7 = _v6.a;
								var fnRange = _v7.a;
								var _v8 = _v7.b;
								var fnName = _v8.b;
								var _v9 = _v6.b;
								var argumentWithParens = _v9.a;
								var restOfArguments = _v9.b;
								return A5(
									$jfmengels$elm_review_common$NoPrematureLetComputation$registerApplicationCall,
									fnRange,
									fnName,
									argumentWithParens,
									$elm$core$List$length(restOfArguments) + 1,
									context);
							} else {
								break _v0$9;
							}
						case '<|':
							if ((((_v0.c.b.$ === 1) && _v0.c.b.a.b) && (_v0.c.b.a.a.b.$ === 3)) && _v0.c.b.a.b.b) {
								var _v10 = _v0.c;
								var _v11 = _v10.b.a;
								var _v12 = _v11.a;
								var fnRange = _v12.a;
								var _v13 = _v12.b;
								var fnName = _v13.b;
								var _v14 = _v11.b;
								var argumentWithParens = _v14.a;
								var restOfArguments = _v14.b;
								return A5(
									$jfmengels$elm_review_common$NoPrematureLetComputation$registerApplicationCall,
									fnRange,
									fnName,
									argumentWithParens,
									$elm$core$List$length(restOfArguments) + 1,
									context);
							} else {
								break _v0$9;
							}
						default:
							break _v0$9;
					}
				default:
					break _v0$9;
			}
		}
		return context;
	});
var $jfmengels$elm_review_common$RangeDict$get = function (range) {
	return $elm$core$Dict$get(
		$jfmengels$elm_review_common$RangeDict$rangeAsString(range));
};
var $jfmengels$elm_review_common$NoPrematureLetComputation$getScopeData = function (_v0) {
	var scope = _v0.b;
	return scope;
};
var $jfmengels$elm_review_common$NoPrematureLetComputation$getScopes = A2(
	$elm$core$Basics$composeR,
	$jfmengels$elm_review_common$NoPrematureLetComputation$getScopeData,
	function ($) {
		return $.l;
	});
var $jfmengels$elm_review_common$NoPrematureLetComputation$getCurrentBranch = F2(
	function (currentBranching, branch) {
		if (!currentBranching.b) {
			return $elm$core$Maybe$Just(branch);
		} else {
			var range = currentBranching.a;
			var restOfBranching = currentBranching.b;
			return A2(
				$elm$core$Maybe$andThen,
				$jfmengels$elm_review_common$NoPrematureLetComputation$getCurrentBranch(restOfBranching),
				A2(
					$jfmengels$elm_review_common$RangeDict$get,
					range,
					$jfmengels$elm_review_common$NoPrematureLetComputation$getScopes(branch)));
		}
	});
var $jfmengels$elm_review_common$NoPrematureLetComputation$expressionEnterVisitor = F2(
	function (node, context) {
		var newContext = function () {
			var _v0 = A2(
				$elm$core$Maybe$map,
				$jfmengels$elm_review_common$NoPrematureLetComputation$getScopes,
				A2($jfmengels$elm_review_common$NoPrematureLetComputation$getCurrentBranch, context.o.q, context.r));
			if (!_v0.$) {
				var scopes = _v0.a;
				return A2(
					$jfmengels$elm_review_common$RangeDict$member,
					$stil4m$elm_syntax$Elm$Syntax$Node$range(node),
					scopes) ? _Utils_update(
					context,
					{
						o: A2(
							$jfmengels$elm_review_common$NoPrematureLetComputation$addBranching,
							$stil4m$elm_syntax$Elm$Syntax$Node$range(node),
							context.o)
					}) : context;
			} else {
				return context;
			}
		}();
		return _Utils_Tuple2(
			_List_Nil,
			A2($jfmengels$elm_review_common$NoPrematureLetComputation$expressionEnterVisitorHelp, node, newContext));
	});
var $jfmengels$elm_review_common$NoPrematureLetComputation$emptyIfTrue = F2(
	function (bool, list) {
		return bool ? _List_Nil : list;
	});
var $jfmengels$elm_review_common$RangeDict$values = function (rangeDict) {
	return $elm$core$Dict$values(rangeDict);
};
var $jfmengels$elm_review_common$NoPrematureLetComputation$canBeMovedToCloserLocation = F3(
	function (isRoot, name, _v1) {
		var type_ = _v1.a;
		var scope = _v1.b;
		var closestLocation = A3($jfmengels$elm_review_common$NoPrematureLetComputation$canBeMovedToCloserLocationForBranchData, isRoot, name, scope);
		switch (type_) {
			case 0:
				return closestLocation;
			case 1:
				return closestLocation;
			case 3:
				return closestLocation;
			default:
				return _Utils_ap(closestLocation, closestLocation);
		}
	});
var $jfmengels$elm_review_common$NoPrematureLetComputation$canBeMovedToCloserLocationForBranchData = F3(
	function (isRoot, name, branchData) {
		if (A2($elm$core$Set$member, name, branchData.ag)) {
			return A2(
				$jfmengels$elm_review_common$NoPrematureLetComputation$emptyIfTrue,
				isRoot,
				_List_fromArray(
					[branchData.aQ]));
		} else {
			var relevantUsages = A3(
				$jfmengels$elm_review_common$NoPrematureLetComputation$findRelevantUsages,
				name,
				$jfmengels$elm_review_common$RangeDict$values(branchData.l),
				_List_Nil);
			return ($elm$core$List$length(relevantUsages) > 1) ? A2(
				$jfmengels$elm_review_common$NoPrematureLetComputation$emptyIfTrue,
				isRoot,
				_List_fromArray(
					[branchData.aQ])) : relevantUsages;
		}
	});
var $jfmengels$elm_review_common$NoPrematureLetComputation$findRelevantUsages = F3(
	function (name, branches, result) {
		findRelevantUsages:
		while (true) {
			if ($elm$core$List$length(result) > 1) {
				return result;
			} else {
				if (!branches.b) {
					return result;
				} else {
					var first = branches.a;
					var rest = branches.b;
					var $temp$name = name,
						$temp$branches = rest,
						$temp$result = _Utils_ap(
						A3($jfmengels$elm_review_common$NoPrematureLetComputation$canBeMovedToCloserLocation, false, name, first),
						result);
					name = $temp$name;
					branches = $temp$branches;
					result = $temp$result;
					continue findRelevantUsages;
				}
			}
		}
	});
var $elm$core$Bitwise$shiftRightBy = _Bitwise_shiftRightBy;
var $elm$core$String$repeatHelp = F3(
	function (n, chunk, result) {
		return (n <= 0) ? result : A3(
			$elm$core$String$repeatHelp,
			n >> 1,
			_Utils_ap(chunk, chunk),
			(!(n & 1)) ? result : _Utils_ap(result, chunk));
	});
var $elm$core$String$repeat = F2(
	function (n, chunk) {
		return A3($elm$core$String$repeatHelp, n, chunk, '');
	});
var $elm$core$String$trim = _String_trim;
var $jfmengels$elm_review_common$NoPrematureLetComputation$insertInLet = F3(
	function (initialPosition, column, source) {
		var _v0 = $elm$core$String$lines(
			$elm$core$String$trim(source));
		if (!_v0.b) {
			return '';
		} else {
			var firstLine = _v0.a;
			var restOfLines = _v0.b;
			return A2(
				$elm$core$String$join,
				'\n',
				A2(
					$elm$core$List$cons,
					firstLine,
					A2(
						$elm$core$List$map,
						function (line) {
							return _Utils_ap(
								A2($elm$core$String$repeat, column - initialPosition, ' '),
								line);
						},
						restOfLines))) + ('\n' + A2($elm$core$String$repeat, column - 1, ' '));
		}
	});
var $jfmengels$elm_review$Review$Error$Removal = function (a) {
	return {$: 0, a: a};
};
var $jfmengels$elm_review$Review$Fix$removeRange = $jfmengels$elm_review$Review$Error$Removal;
var $jfmengels$elm_review_common$NoPrematureLetComputation$wrapInLet = F3(
	function (initialPosition, column, source) {
		var padding = A2($elm$core$String$repeat, column - 1, ' ');
		return A2(
			$elm$core$String$join,
			'\n',
			$elm$core$List$concat(
				_List_fromArray(
					[
						_List_fromArray(
						['let']),
						A2(
						$elm$core$List$map,
						function (line) {
							return A2($elm$core$String$repeat, column - initialPosition, ' ') + ('    ' + line);
						},
						$elm$core$String$lines(source)),
						_List_fromArray(
						[padding + 'in', padding])
					])));
	});
var $jfmengels$elm_review_common$NoPrematureLetComputation$fix = F3(
	function (context, declared, letInsertPosition) {
		if (declared.bR) {
			return _List_Nil;
		} else {
			if (!letInsertPosition.$) {
				var insertLocation = letInsertPosition.a;
				return _List_fromArray(
					[
						$jfmengels$elm_review$Review$Fix$removeRange(declared.b5),
						A2(
						$jfmengels$elm_review$Review$Fix$insertAt,
						insertLocation,
						A3(
							$jfmengels$elm_review_common$NoPrematureLetComputation$wrapInLet,
							declared.b6.bg.an,
							insertLocation.an,
							context.bO(declared.bh)))
					]);
			} else {
				var insertLocation = letInsertPosition.a;
				return _List_fromArray(
					[
						$jfmengels$elm_review$Review$Fix$removeRange(declared.b5),
						A2(
						$jfmengels$elm_review$Review$Fix$insertAt,
						insertLocation,
						A3(
							$jfmengels$elm_review_common$NoPrematureLetComputation$insertInLet,
							declared.ce,
							insertLocation.an,
							context.bO(declared.bh)))
					]);
			}
		}
	});
var $jfmengels$elm_review_common$NoPrematureLetComputation$createError = F3(
	function (context, declared, letInsertPosition) {
		var letInsertLine = function () {
			if (!letInsertPosition.$) {
				var insertLocation = letInsertPosition.a;
				return insertLocation.aB;
			} else {
				var insertLocation = letInsertPosition.a;
				return insertLocation.aB;
			}
		}();
		return A3(
			$jfmengels$elm_review$Review$Rule$errorWithFix,
			{
				bG: _List_fromArray(
					[
						'This value is only used in some code paths, and it can therefore be computed unnecessarily.',
						'Try moving it closer to where it is needed, I recommend to move it to line ' + ($elm$core$String$fromInt(letInsertLine) + '.')
					]),
				al: 'Let value was declared prematurely'
			},
			declared.b6,
			A3($jfmengels$elm_review_common$NoPrematureLetComputation$fix, context, declared, letInsertPosition));
	});
var $elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(x);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $jfmengels$elm_review_common$NoPrematureLetComputation$expressionExitVisitorHelp = F2(
	function (node, context) {
		var _v0 = $stil4m$elm_syntax$Elm$Syntax$Node$value(node);
		if (_v0.$ === 15) {
			var _v1 = A2($jfmengels$elm_review_common$NoPrematureLetComputation$getCurrentBranch, context.o.q, context.r);
			if ((!_v1.$) && (_v1.a.a === 1)) {
				var scope = _v1.a;
				var _v2 = scope.a;
				var scopeData = scope.b;
				return A2(
					$elm$core$List$filterMap,
					function (declaration) {
						return A2(
							$elm$core$Maybe$map,
							A2($jfmengels$elm_review_common$NoPrematureLetComputation$createError, context, declaration),
							$elm$core$List$head(
								A3($jfmengels$elm_review_common$NoPrematureLetComputation$canBeMovedToCloserLocation, true, declaration.aW, scope)));
					},
					scopeData.az);
			} else {
				return _List_Nil;
			}
		} else {
			return _List_Nil;
		}
	});
var $jfmengels$elm_review_common$NoPrematureLetComputation$getLastListItem = A2($elm$core$Basics$composeR, $elm$core$List$reverse, $elm$core$List$head);
var $jfmengels$elm_review_common$NoPrematureLetComputation$removeLastBranchIfOnItRetry = F2(
	function (range, branching) {
		if (_Utils_eq(
			branching.aS,
			$elm$core$Maybe$Just(range))) {
			var full = A2(
				$elm$core$List$take,
				$elm$core$List$length(branching.q) - 1,
				branching.q);
			return {
				q: full,
				aS: $jfmengels$elm_review_common$NoPrematureLetComputation$getLastListItem(full)
			};
		} else {
			return branching;
		}
	});
var $jfmengels$elm_review_common$NoPrematureLetComputation$removeLastBranchIfOnIt = F2(
	function (range, branching) {
		if (_Utils_eq(
			branching.aS,
			$elm$core$Maybe$Just(range))) {
			var full = A2(
				$elm$core$List$take,
				$elm$core$List$length(branching.q) - 1,
				branching.q);
			return $elm$core$Maybe$Just(
				A2(
					$jfmengels$elm_review_common$NoPrematureLetComputation$removeLastBranchIfOnItRetry,
					range,
					{
						q: full,
						aS: $jfmengels$elm_review_common$NoPrematureLetComputation$getLastListItem(full)
					}));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $jfmengels$elm_review_common$NoPrematureLetComputation$popCurrentNodeFromBranching = F2(
	function (range, context) {
		var _v0 = A2($jfmengels$elm_review_common$NoPrematureLetComputation$removeLastBranchIfOnIt, range, context.o);
		if (!_v0.$) {
			var newBranching = _v0.a;
			return _Utils_update(
				context,
				{o: newBranching});
		} else {
			return context;
		}
	});
var $jfmengels$elm_review_common$NoPrematureLetComputation$expressionExitVisitor = F2(
	function (node, context) {
		return _Utils_Tuple2(
			A2($jfmengels$elm_review_common$NoPrematureLetComputation$expressionExitVisitorHelp, node, context),
			A2(
				$jfmengels$elm_review_common$NoPrematureLetComputation$popCurrentNodeFromBranching,
				$stil4m$elm_syntax$Elm$Syntax$Node$range(node),
				context));
	});
var $jfmengels$elm_review$Review$Rule$withSourceCodeExtractor = function (_v0) {
	var fn = _v0.a;
	var requested = _v0.b;
	return A2(
		$jfmengels$elm_review$Review$Rule$ContextCreator,
		function (data) {
			return A2(fn, data, data.bO);
		},
		_Utils_update(
			requested,
			{bf: true}));
};
var $jfmengels$elm_review_common$NoPrematureLetComputation$initialContext = $jfmengels$elm_review$Review$Rule$withSourceCodeExtractor(
	$jfmengels$elm_review$Review$Rule$withModuleNameLookupTable(
		$jfmengels$elm_review$Review$Rule$initContextCreator(
			F3(
				function (lookupTable, extractSourceCode, _v0) {
					return {
						o: $jfmengels$elm_review_common$NoPrematureLetComputation$emptyBranching,
						bO: extractSourceCode,
						a2: $jfmengels$elm_review_common$RangeDict$empty,
						j: lookupTable,
						r: $jfmengels$elm_review_common$NoPrematureLetComputation$newBranch(
							$jfmengels$elm_review_common$NoPrematureLetComputation$InsertNewLet(
								{an: 0, aB: 0}))
					};
				}))));
var $jfmengels$elm_review$Review$Rule$newModuleRuleSchemaUsingContextCreator = F2(
	function (name, moduleContextCreator) {
		return {Q: _List_Nil, R: _List_Nil, Y: _List_Nil, _: _List_Nil, S: _List_Nil, T: _List_Nil, y: _List_Nil, z: _List_Nil, v: _List_Nil, B: _List_Nil, m: _List_Nil, aa: _List_Nil, bu: $elm$core$Maybe$Nothing, W: _List_Nil, X: _List_Nil, F: moduleContextCreator, ab: _List_Nil, aW: name, C: _List_Nil};
	});
var $jfmengels$elm_review$Review$Rule$withExpressionExitVisitor = F2(
	function (visitor, _v0) {
		var schema = _v0;
		return _Utils_update(
			schema,
			{
				B: A2($elm$core$List$cons, visitor, schema.B)
			});
	});
var $jfmengels$elm_review_common$NoPrematureLetComputation$rule = $jfmengels$elm_review$Review$Rule$fromModuleRuleSchema(
	A2(
		$jfmengels$elm_review$Review$Rule$withExpressionExitVisitor,
		$jfmengels$elm_review_common$NoPrematureLetComputation$expressionExitVisitor,
		A2(
			$jfmengels$elm_review$Review$Rule$withExpressionEnterVisitor,
			$jfmengels$elm_review_common$NoPrematureLetComputation$expressionEnterVisitor,
			A2(
				$jfmengels$elm_review$Review$Rule$withDeclarationEnterVisitor,
				$jfmengels$elm_review_common$NoPrematureLetComputation$declarationVisitor,
				A2($jfmengels$elm_review$Review$Rule$newModuleRuleSchemaUsingContextCreator, 'NoPrematureLetComputation', $jfmengels$elm_review_common$NoPrematureLetComputation$initialContext)))));
var $author$project$ReviewConfig$config = _List_fromArray(
	[
		$jfmengels$elm_review_common$NoExposingEverything$rule,
		$jfmengels$elm_review_common$NoDeprecated$rule($jfmengels$elm_review_common$NoDeprecated$defaults),
		$jfmengels$elm_review_common$NoPrematureLetComputation$rule,
		$jfmengels$elm_review_common$NoImportingEverything$rule(_List_Nil),
		$jfmengels$elm_review_common$NoMissingTypeAnnotation$rule,
		$jfmengels$elm_review_common$NoMissingTypeAnnotationInLetIn$rule,
		$jfmengels$elm_review_common$NoMissingTypeExpose$rule
	]);
var $author$project$Elm$Review$Main$DecodedFlags = F8(
	function (fixMode, detailsMode, reportMode, ignoreProblematicDependencies, rulesFilter, ignoredDirs, ignoredFiles, logger) {
		return {aq: detailsMode, a1: fixMode, a4: ignoreProblematicDependencies, cs: ignoredDirs, ct: ignoredFiles, ak: logger, bd: reportMode, cF: rulesFilter};
	});
var $elm$json$Json$Decode$bool = _Json_decodeBool;
var $author$project$Elm$Review$Reporter$WithDetails = 0;
var $elm$json$Json$Decode$andThen = _Json_andThen;
var $elm$json$Json$Decode$fail = _Json_fail;
var $elm$json$Json$Decode$string = _Json_decodeString;
var $elm$json$Json$Decode$succeed = _Json_succeed;
var $author$project$Elm$Review$Main$decodeDetailsMode = A2(
	$elm$json$Json$Decode$andThen,
	function (detailsMode) {
		switch (detailsMode) {
			case 'with-details':
				return $elm$json$Json$Decode$succeed(0);
			case 'without-details':
				return $elm$json$Json$Decode$succeed(1);
			default:
				return $elm$json$Json$Decode$fail('I could not understand the following details mode: ' + detailsMode);
		}
	},
	$elm$json$Json$Decode$string);
var $author$project$Elm$Review$Main$Mode_Fix = 1;
var $author$project$Elm$Review$Main$Mode_FixAll = 2;
var $author$project$Elm$Review$Main$decodeFix = A2(
	$elm$json$Json$Decode$andThen,
	function (fixMode) {
		switch (fixMode) {
			case 'dontfix':
				return $elm$json$Json$Decode$succeed(0);
			case 'fix':
				return $elm$json$Json$Decode$succeed(1);
			case 'fixAll':
				return $elm$json$Json$Decode$succeed(2);
			default:
				return $elm$json$Json$Decode$fail('I could not understand the following fix mode: ' + fixMode);
		}
	},
	$elm$json$Json$Decode$string);
var $author$project$Elm$Review$Main$Json = 1;
var $author$project$Elm$Review$Main$decodeReportMode = A2(
	$elm$json$Json$Decode$andThen,
	function (reportMode) {
		switch (reportMode) {
			case 'human':
				return $elm$json$Json$Decode$succeed(0);
			case 'json':
				return $elm$json$Json$Decode$succeed(1);
			default:
				return $elm$json$Json$Decode$fail('I could not understand the following report mode: ' + reportMode);
		}
	},
	$elm$json$Json$Decode$string);
var $elm$json$Json$Decode$list = _Json_decodeList;
var $elm$json$Json$Decode$map = _Json_map1;
var $elm$json$Json$Decode$null = _Json_decodeNull;
var $elm$json$Json$Decode$oneOf = _Json_oneOf;
var $author$project$Elm$Review$Main$decodeRulesFilter = $elm$json$Json$Decode$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$json$Json$Decode$map,
			A2($elm$core$Basics$composeR, $elm$core$Set$fromList, $elm$core$Maybe$Just),
			$elm$json$Json$Decode$list($elm$json$Json$Decode$string)),
			$elm$json$Json$Decode$null($elm$core$Maybe$Nothing)
		]));
var $author$project$Elm$Review$Progress$Console = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$json$Json$Decode$value = _Json_decodeValue;
var $author$project$Elm$Review$Progress$decoder = A2(
	$elm$json$Json$Decode$map,
	$author$project$Elm$Review$Progress$Console(0),
	$elm$json$Json$Decode$value);
var $elm$json$Json$Decode$field = _Json_decodeField;
var $elm$json$Json$Decode$map8 = _Json_map8;
var $author$project$Elm$Review$Main$decodeFlags = A9(
	$elm$json$Json$Decode$map8,
	$author$project$Elm$Review$Main$DecodedFlags,
	A2($elm$json$Json$Decode$field, 'fixMode', $author$project$Elm$Review$Main$decodeFix),
	A2($elm$json$Json$Decode$field, 'detailsMode', $author$project$Elm$Review$Main$decodeDetailsMode),
	A2($elm$json$Json$Decode$field, 'report', $author$project$Elm$Review$Main$decodeReportMode),
	A2($elm$json$Json$Decode$field, 'ignoreProblematicDependencies', $elm$json$Json$Decode$bool),
	A2($elm$json$Json$Decode$field, 'rulesFilter', $author$project$Elm$Review$Main$decodeRulesFilter),
	A2(
		$elm$json$Json$Decode$field,
		'ignoredDirs',
		$elm$json$Json$Decode$list($elm$json$Json$Decode$string)),
	A2(
		$elm$json$Json$Decode$field,
		'ignoredFiles',
		$elm$json$Json$Decode$list($elm$json$Json$Decode$string)),
	A2($elm$json$Json$Decode$field, 'logger', $author$project$Elm$Review$Progress$decoder));
var $elm$json$Json$Decode$decodeValue = _Json_run;
var $elm$core$Dict$getMin = function (dict) {
	getMin:
	while (true) {
		if ((dict.$ === -1) && (dict.d.$ === -1)) {
			var left = dict.d;
			var $temp$dict = left;
			dict = $temp$dict;
			continue getMin;
		} else {
			return dict;
		}
	}
};
var $elm$core$Dict$moveRedLeft = function (dict) {
	if (((dict.$ === -1) && (dict.d.$ === -1)) && (dict.e.$ === -1)) {
		if ((dict.e.d.$ === -1) && (!dict.e.d.a)) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var lLeft = _v1.d;
			var lRight = _v1.e;
			var _v2 = dict.e;
			var rClr = _v2.a;
			var rK = _v2.b;
			var rV = _v2.c;
			var rLeft = _v2.d;
			var _v3 = rLeft.a;
			var rlK = rLeft.b;
			var rlV = rLeft.c;
			var rlL = rLeft.d;
			var rlR = rLeft.e;
			var rRight = _v2.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				0,
				rlK,
				rlV,
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					rlL),
				A5($elm$core$Dict$RBNode_elm_builtin, 1, rK, rV, rlR, rRight));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v4 = dict.d;
			var lClr = _v4.a;
			var lK = _v4.b;
			var lV = _v4.c;
			var lLeft = _v4.d;
			var lRight = _v4.e;
			var _v5 = dict.e;
			var rClr = _v5.a;
			var rK = _v5.b;
			var rV = _v5.c;
			var rLeft = _v5.d;
			var rRight = _v5.e;
			if (clr === 1) {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$moveRedRight = function (dict) {
	if (((dict.$ === -1) && (dict.d.$ === -1)) && (dict.e.$ === -1)) {
		if ((dict.d.d.$ === -1) && (!dict.d.d.a)) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var _v2 = _v1.d;
			var _v3 = _v2.a;
			var llK = _v2.b;
			var llV = _v2.c;
			var llLeft = _v2.d;
			var llRight = _v2.e;
			var lRight = _v1.e;
			var _v4 = dict.e;
			var rClr = _v4.a;
			var rK = _v4.b;
			var rV = _v4.c;
			var rLeft = _v4.d;
			var rRight = _v4.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				0,
				lK,
				lV,
				A5($elm$core$Dict$RBNode_elm_builtin, 1, llK, llV, llLeft, llRight),
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					lRight,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight)));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v5 = dict.d;
			var lClr = _v5.a;
			var lK = _v5.b;
			var lV = _v5.c;
			var lLeft = _v5.d;
			var lRight = _v5.e;
			var _v6 = dict.e;
			var rClr = _v6.a;
			var rK = _v6.b;
			var rV = _v6.c;
			var rLeft = _v6.d;
			var rRight = _v6.e;
			if (clr === 1) {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$removeHelpPrepEQGT = F7(
	function (targetKey, dict, color, key, value, left, right) {
		if ((left.$ === -1) && (!left.a)) {
			var _v1 = left.a;
			var lK = left.b;
			var lV = left.c;
			var lLeft = left.d;
			var lRight = left.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				lK,
				lV,
				lLeft,
				A5($elm$core$Dict$RBNode_elm_builtin, 0, key, value, lRight, right));
		} else {
			_v2$2:
			while (true) {
				if ((right.$ === -1) && (right.a === 1)) {
					if (right.d.$ === -1) {
						if (right.d.a === 1) {
							var _v3 = right.a;
							var _v4 = right.d;
							var _v5 = _v4.a;
							return $elm$core$Dict$moveRedRight(dict);
						} else {
							break _v2$2;
						}
					} else {
						var _v6 = right.a;
						var _v7 = right.d;
						return $elm$core$Dict$moveRedRight(dict);
					}
				} else {
					break _v2$2;
				}
			}
			return dict;
		}
	});
var $elm$core$Dict$removeMin = function (dict) {
	if ((dict.$ === -1) && (dict.d.$ === -1)) {
		var color = dict.a;
		var key = dict.b;
		var value = dict.c;
		var left = dict.d;
		var lColor = left.a;
		var lLeft = left.d;
		var right = dict.e;
		if (lColor === 1) {
			if ((lLeft.$ === -1) && (!lLeft.a)) {
				var _v3 = lLeft.a;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					key,
					value,
					$elm$core$Dict$removeMin(left),
					right);
			} else {
				var _v4 = $elm$core$Dict$moveRedLeft(dict);
				if (_v4.$ === -1) {
					var nColor = _v4.a;
					var nKey = _v4.b;
					var nValue = _v4.c;
					var nLeft = _v4.d;
					var nRight = _v4.e;
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						$elm$core$Dict$removeMin(nLeft),
						nRight);
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			}
		} else {
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				value,
				$elm$core$Dict$removeMin(left),
				right);
		}
	} else {
		return $elm$core$Dict$RBEmpty_elm_builtin;
	}
};
var $elm$core$Dict$removeHelp = F2(
	function (targetKey, dict) {
		if (dict.$ === -2) {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_cmp(targetKey, key) < 0) {
				if ((left.$ === -1) && (left.a === 1)) {
					var _v4 = left.a;
					var lLeft = left.d;
					if ((lLeft.$ === -1) && (!lLeft.a)) {
						var _v6 = lLeft.a;
						return A5(
							$elm$core$Dict$RBNode_elm_builtin,
							color,
							key,
							value,
							A2($elm$core$Dict$removeHelp, targetKey, left),
							right);
					} else {
						var _v7 = $elm$core$Dict$moveRedLeft(dict);
						if (_v7.$ === -1) {
							var nColor = _v7.a;
							var nKey = _v7.b;
							var nValue = _v7.c;
							var nLeft = _v7.d;
							var nRight = _v7.e;
							return A5(
								$elm$core$Dict$balance,
								nColor,
								nKey,
								nValue,
								A2($elm$core$Dict$removeHelp, targetKey, nLeft),
								nRight);
						} else {
							return $elm$core$Dict$RBEmpty_elm_builtin;
						}
					}
				} else {
					return A5(
						$elm$core$Dict$RBNode_elm_builtin,
						color,
						key,
						value,
						A2($elm$core$Dict$removeHelp, targetKey, left),
						right);
				}
			} else {
				return A2(
					$elm$core$Dict$removeHelpEQGT,
					targetKey,
					A7($elm$core$Dict$removeHelpPrepEQGT, targetKey, dict, color, key, value, left, right));
			}
		}
	});
var $elm$core$Dict$removeHelpEQGT = F2(
	function (targetKey, dict) {
		if (dict.$ === -1) {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_eq(targetKey, key)) {
				var _v1 = $elm$core$Dict$getMin(right);
				if (_v1.$ === -1) {
					var minKey = _v1.b;
					var minValue = _v1.c;
					return A5(
						$elm$core$Dict$balance,
						color,
						minKey,
						minValue,
						left,
						$elm$core$Dict$removeMin(right));
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			} else {
				return A5(
					$elm$core$Dict$balance,
					color,
					key,
					value,
					left,
					A2($elm$core$Dict$removeHelp, targetKey, right));
			}
		} else {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		}
	});
var $elm$core$Dict$remove = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$removeHelp, key, dict);
		if ((_v0.$ === -1) && (!_v0.a)) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, 1, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$diff = F2(
	function (t1, t2) {
		return A3(
			$elm$core$Dict$foldl,
			F3(
				function (k, v, t) {
					return A2($elm$core$Dict$remove, k, t);
				}),
			t1,
			t2);
	});
var $elm$core$Set$diff = F2(
	function (_v0, _v1) {
		var dict1 = _v0;
		var dict2 = _v1;
		return A2($elm$core$Dict$diff, dict1, dict2);
	});
var $elm$json$Json$Encode$bool = _Json_wrap;
var $author$project$Elm$Review$Progress$dummy = A2(
	$author$project$Elm$Review$Progress$Console,
	0,
	$elm$json$Json$Encode$bool(true));
var $author$project$Elm$Review$RefusedErrorFixes$RefusedErrorFixes = $elm$core$Basics$identity;
var $author$project$Elm$Review$RefusedErrorFixes$empty = $elm$core$Set$empty;
var $elm$json$Json$Encode$int = _Json_wrap;
var $author$project$Elm$Review$Main$encodePosition = function (position) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'line',
				$elm$json$Json$Encode$int(position.aB)),
				_Utils_Tuple2(
				'column',
				$elm$json$Json$Encode$int(position.an))
			]));
};
var $author$project$Elm$Review$Main$encodeRange = function (range) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'start',
				$author$project$Elm$Review$Main$encodePosition(range.bg)),
				_Utils_Tuple2(
				'end',
				$author$project$Elm$Review$Main$encodePosition(range.a$))
			]));
};
var $author$project$Elm$Review$Main$encodeReportPart = function (_v0) {
	var str = _v0.eC;
	var color = _v0.dU;
	var href = _v0.d6;
	return (_Utils_eq(color, $elm$core$Maybe$Nothing) && _Utils_eq(href, $elm$core$Maybe$Nothing)) ? $elm$json$Json$Encode$string(str) : $elm$json$Json$Encode$object(
		A2(
			$elm$core$List$filterMap,
			$elm$core$Basics$identity,
			_List_fromArray(
				[
					$elm$core$Maybe$Just(
					_Utils_Tuple2(
						'string',
						$elm$json$Json$Encode$string(str))),
					A2(
					$elm$core$Maybe$map,
					A2(
						$elm$core$Basics$composeR,
						$elm$json$Json$Encode$string,
						$elm$core$Tuple$pair('color')),
					color),
					A2(
					$elm$core$Maybe$map,
					A2(
						$elm$core$Basics$composeR,
						$elm$json$Json$Encode$string,
						$elm$core$Tuple$pair('href')),
					href)
				])));
};
var $elm$json$Json$Encode$list = F2(
	function (func, entries) {
		return _Json_wrap(
			A3(
				$elm$core$List$foldl,
				_Json_addEntry(func),
				_Json_emptyArray(0),
				entries));
	});
var $author$project$Elm$Review$Main$encodeReport = function (texts) {
	return A2($elm$json$Json$Encode$list, $author$project$Elm$Review$Main$encodeReportPart, texts);
};
var $author$project$Elm$Review$Reporter$Reviewing = 0;
var $elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var $author$project$Elm$Review$Text$Text = $elm$core$Basics$identity;
var $author$project$Elm$Review$Text$from = function (value) {
	return {dU: $elm$core$Maybe$Nothing, d6: $elm$core$Maybe$Nothing, eC: value};
};
var $elm$core$Array$fromListHelp = F3(
	function (list, nodeList, nodeListSize) {
		fromListHelp:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, list);
			var jsArray = _v0.a;
			var remainingItems = _v0.b;
			if (_Utils_cmp(
				$elm$core$Elm$JsArray$length(jsArray),
				$elm$core$Array$branchFactor) < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					true,
					{w: nodeList, p: nodeListSize, s: jsArray});
			} else {
				var $temp$list = remainingItems,
					$temp$nodeList = A2(
					$elm$core$List$cons,
					$elm$core$Array$Leaf(jsArray),
					nodeList),
					$temp$nodeListSize = nodeListSize + 1;
				list = $temp$list;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue fromListHelp;
			}
		}
	});
var $elm$core$Array$fromList = function (list) {
	if (!list.b) {
		return $elm$core$Array$empty;
	} else {
		return A3($elm$core$Array$fromListHelp, list, _List_Nil, 0);
	}
};
var $elm$core$Array$bitMask = 4294967295 >>> (32 - $elm$core$Array$shiftStep);
var $elm$core$Basics$ge = _Utils_ge;
var $elm$core$Elm$JsArray$unsafeGet = _JsArray_unsafeGet;
var $elm$core$Array$getHelp = F3(
	function (shift, index, tree) {
		getHelp:
		while (true) {
			var pos = $elm$core$Array$bitMask & (index >>> shift);
			var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (!_v0.$) {
				var subTree = _v0.a;
				var $temp$shift = shift - $elm$core$Array$shiftStep,
					$temp$index = index,
					$temp$tree = subTree;
				shift = $temp$shift;
				index = $temp$index;
				tree = $temp$tree;
				continue getHelp;
			} else {
				var values = _v0.a;
				return A2($elm$core$Elm$JsArray$unsafeGet, $elm$core$Array$bitMask & index, values);
			}
		}
	});
var $elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
var $elm$core$Array$tailIndex = function (len) {
	return (len >>> 5) << 5;
};
var $elm$core$Array$get = F2(
	function (index, _v0) {
		var len = _v0.a;
		var startShift = _v0.b;
		var tree = _v0.c;
		var tail = _v0.d;
		return ((index < 0) || (_Utils_cmp(index, len) > -1)) ? $elm$core$Maybe$Nothing : ((_Utils_cmp(
			index,
			$elm$core$Array$tailIndex(len)) > -1) ? $elm$core$Maybe$Just(
			A2($elm$core$Elm$JsArray$unsafeGet, $elm$core$Array$bitMask & index, tail)) : $elm$core$Maybe$Just(
			A3($elm$core$Array$getHelp, startShift, index, tree)));
	});
var $elm$core$String$trimLeft = _String_trimLeft;
var $author$project$Elm$Review$Reporter$getIndexOfFirstNonSpace = function (string) {
	return $elm$core$String$length(string) - $elm$core$String$length(
		$elm$core$String$trimLeft(string));
};
var $elm$core$String$isEmpty = function (string) {
	return string === '';
};
var $elm$core$List$intersperse = F2(
	function (sep, xs) {
		if (!xs.b) {
			return _List_Nil;
		} else {
			var hd = xs.a;
			var tl = xs.b;
			var step = F2(
				function (x, rest) {
					return A2(
						$elm$core$List$cons,
						sep,
						A2($elm$core$List$cons, x, rest));
				});
			var spersed = A3($elm$core$List$foldr, step, _List_Nil, tl);
			return A2($elm$core$List$cons, hd, spersed);
		}
	});
var $author$project$Elm$Review$Text$join = F2(
	function (sep, chunks) {
		return $elm$core$List$concat(
			A2(
				$elm$core$List$intersperse,
				_List_fromArray(
					[
						$author$project$Elm$Review$Text$from(sep)
					]),
				chunks));
	});
var $author$project$Elm$Review$Reporter$lengthOfLineNumber = function (lineNumber) {
	return $elm$core$String$length(
		$elm$core$String$fromInt(lineNumber));
};
var $elm$core$String$cons = _String_cons;
var $elm$core$String$fromChar = function (_char) {
	return A2($elm$core$String$cons, _char, '');
};
var $elm$core$String$padLeft = F3(
	function (n, _char, string) {
		return _Utils_ap(
			A2(
				$elm$core$String$repeat,
				n - $elm$core$String$length(string),
				$elm$core$String$fromChar(_char)),
			string);
	});
var $author$project$Elm$Review$Reporter$lineNumberPrefix = F2(
	function (maxLineNumberLength, rowIndex) {
		return A3(
			$elm$core$String$padLeft,
			maxLineNumberLength,
			' ',
			$elm$core$String$fromInt(rowIndex + 1)) + '| ';
	});
var $elm$core$String$foldr = _String_foldr;
var $elm$core$String$toList = function (string) {
	return A3($elm$core$String$foldr, $elm$core$List$cons, _List_Nil, string);
};
var $elm$core$String$trimRight = _String_trimRight;
var $elm$core$String$fromList = _String_fromList;
var $author$project$Elm$Review$Text$inRed = function (_v0) {
	var text = _v0;
	return _Utils_update(
		text,
		{
			dU: $elm$core$Maybe$Just('#FF0000')
		});
};
var $author$project$Elm$Review$Reporter$underline = F2(
	function (gutterLength, _v0) {
		var start = _v0.bg;
		var end = _v0.a$;
		var lineContent = _v0.bT;
		var lineChars = $elm$core$String$toList(lineContent);
		var preText = A2($elm$core$List$take, (gutterLength + start) - 1, lineChars);
		var unicodePreOffset = $elm$core$String$length(
			$elm$core$String$fromList(preText)) - $elm$core$List$length(preText);
		var inText = A2(
			$elm$core$List$take,
			end - start,
			A2($elm$core$List$drop, (gutterLength + start) - 1, lineChars));
		var unicodeInOffset = $elm$core$String$length(
			$elm$core$String$fromList(inText)) - $elm$core$List$length(inText);
		return _List_fromArray(
			[
				$author$project$Elm$Review$Text$from(
				A2($elm$core$String$repeat, ((gutterLength + unicodePreOffset) + start) - 1, ' ')),
				$author$project$Elm$Review$Text$inRed(
				$author$project$Elm$Review$Text$from(
					A2($elm$core$String$repeat, (unicodeInOffset + end) - start, '^')))
			]);
	});
var $author$project$Elm$Review$Reporter$underlineWholeLine = F2(
	function (gutterLength, line) {
		var start = $author$project$Elm$Review$Reporter$getIndexOfFirstNonSpace(line);
		var end = $elm$core$String$length(line);
		return _List_fromArray(
			[
				$author$project$Elm$Review$Text$from(
				A2($elm$core$String$repeat, gutterLength + start, ' ')),
				$author$project$Elm$Review$Text$inRed(
				$author$project$Elm$Review$Text$from(
					A2($elm$core$String$repeat, end - start, '^')))
			]);
	});
var $author$project$Elm$Review$Reporter$codeExtract = function (_v0) {
	var source = _v0;
	var lines = $elm$core$Array$fromList(
		$elm$core$String$lines(source));
	var getRowAtLine = function (rowIndex) {
		var _v2 = A2($elm$core$Array$get, rowIndex, lines);
		if (!_v2.$) {
			var line = _v2.a;
			return $elm$core$String$trimRight(line);
		} else {
			return '';
		}
	};
	return function (_v1) {
		var start = _v1.bg;
		var end = _v1.a$;
		var maxLineNumber = $elm$core$String$isEmpty(
			getRowAtLine(end.aB + 1)) ? end.aB : (end.aB + 1);
		var maxLineNumberLength = $author$project$Elm$Review$Reporter$lengthOfLineNumber(maxLineNumber);
		var gutterLength = $elm$core$String$length(
			A2($author$project$Elm$Review$Reporter$lineNumberPrefix, maxLineNumberLength, maxLineNumber));
		var getRowWithLineNumberUnlessEmpty = function (rowIndex) {
			var line = getRowAtLine(rowIndex);
			return $elm$core$String$isEmpty(line) ? _List_Nil : _List_fromArray(
				[
					$author$project$Elm$Review$Text$from(
					_Utils_ap(
						A2($author$project$Elm$Review$Reporter$lineNumberPrefix, maxLineNumberLength, rowIndex),
						line))
				]);
		};
		var getRowWithLineNumber = function (rowIndex) {
			return _Utils_ap(
				A2($author$project$Elm$Review$Reporter$lineNumberPrefix, maxLineNumberLength, rowIndex),
				getRowAtLine(rowIndex));
		};
		if (_Utils_eq(start.aB, end.aB)) {
			if (_Utils_eq(start.an, end.an)) {
				return _List_Nil;
			} else {
				var lineContent = getRowWithLineNumber(start.aB - 1);
				return A2(
					$author$project$Elm$Review$Text$join,
					'\n',
					A2(
						$elm$core$List$filter,
						A2($elm$core$Basics$composeL, $elm$core$Basics$not, $elm$core$List$isEmpty),
						_List_fromArray(
							[
								getRowWithLineNumberUnlessEmpty(start.aB - 2),
								_List_fromArray(
								[
									$author$project$Elm$Review$Text$from(lineContent)
								]),
								A2(
								$author$project$Elm$Review$Reporter$underline,
								gutterLength,
								{a$: end.an, bT: lineContent, bg: start.an}),
								getRowWithLineNumberUnlessEmpty(end.aB)
							])));
			}
		} else {
			var startLineNumber = start.aB - 1;
			var startLineContent = getRowAtLine(startLineNumber);
			var startLineContentWithLineNumber = _Utils_ap(
				A2($author$project$Elm$Review$Reporter$lineNumberPrefix, maxLineNumberLength, startLineNumber),
				startLineContent);
			var linesBetweenStartAndEnd = A2($elm$core$List$range, start.aB, end.aB - 2);
			var endLine = end.aB - 1;
			var endLineContent = getRowAtLine(endLine);
			var endLineContentWithLineNumber = _Utils_ap(
				A2($author$project$Elm$Review$Reporter$lineNumberPrefix, maxLineNumberLength, endLine),
				endLineContent);
			return A2(
				$author$project$Elm$Review$Text$join,
				'\n',
				A2(
					$elm$core$List$filter,
					A2($elm$core$Basics$composeL, $elm$core$Basics$not, $elm$core$List$isEmpty),
					_List_fromArray(
						[
							getRowWithLineNumberUnlessEmpty(startLineNumber - 1),
							_List_fromArray(
							[
								$author$project$Elm$Review$Text$from(startLineContentWithLineNumber)
							]),
							A2(
							$author$project$Elm$Review$Reporter$underline,
							gutterLength,
							{
								a$: $elm$core$List$length(
									$elm$core$String$toList(startLineContent)) + 1,
								bT: startLineContentWithLineNumber,
								bg: start.an
							}),
							A2(
							$author$project$Elm$Review$Text$join,
							'\n',
							A2(
								$elm$core$List$map,
								function (middleLine) {
									var line = getRowAtLine(middleLine);
									return $elm$core$String$isEmpty(line) ? _List_fromArray(
										[
											$author$project$Elm$Review$Text$from(
											getRowWithLineNumber(middleLine))
										]) : A2(
										$elm$core$List$cons,
										$author$project$Elm$Review$Text$from(
											getRowWithLineNumber(middleLine)),
										A2(
											$elm$core$List$cons,
											$author$project$Elm$Review$Text$from('\n'),
											A2($author$project$Elm$Review$Reporter$underlineWholeLine, gutterLength, line)));
								},
								linesBetweenStartAndEnd)),
							_List_fromArray(
							[
								$author$project$Elm$Review$Text$from(endLineContentWithLineNumber)
							]),
							A2(
							$author$project$Elm$Review$Reporter$underline,
							gutterLength,
							{
								a$: end.an,
								bT: endLineContentWithLineNumber,
								bg: $author$project$Elm$Review$Reporter$getIndexOfFirstNonSpace(endLineContent) + 1
							}),
							getRowWithLineNumberUnlessEmpty(endLine + 1)
						])));
		}
	};
};
var $author$project$Elm$Review$Text$inBlue = function (_v0) {
	var text = _v0;
	return _Utils_update(
		text,
		{
			dU: $elm$core$Maybe$Just('#33BBC8')
		});
};
var $author$project$Elm$Review$Text$inYellow = function (_v0) {
	var text = _v0;
	return _Utils_update(
		text,
		{
			dU: $elm$core$Maybe$Just('#FFFF00')
		});
};
var $author$project$Elm$Review$Text$withLink = F2(
	function (maybeLink, _v0) {
		var text = _v0;
		return _Utils_update(
			text,
			{d6: maybeLink});
	});
var $author$project$Elm$Review$Reporter$formatErrorTitle = F3(
	function (fixProblemDict, mode, error) {
		var fixPrefix = function () {
			var _v0 = error.c3;
			if (!_v0.$) {
				var fixKey = _v0.a;
				if (mode === 1) {
					return $author$project$Elm$Review$Text$from('');
				} else {
					return A2($elm$core$Dict$member, fixKey, fixProblemDict) ? $author$project$Elm$Review$Text$inYellow(
						$author$project$Elm$Review$Text$from('(FIX FAILED) ')) : $author$project$Elm$Review$Text$inBlue(
						$author$project$Elm$Review$Text$from('(fix) '));
				}
			} else {
				return $author$project$Elm$Review$Text$from('');
			}
		}();
		return _List_fromArray(
			[
				fixPrefix,
				A2(
				$author$project$Elm$Review$Text$withLink,
				error.dq,
				$author$project$Elm$Review$Text$inRed(
					$author$project$Elm$Review$Text$from(error.cE))),
				$author$project$Elm$Review$Text$from(': ' + error.al)
			]);
	});
var $author$project$Elm$Review$Reporter$reasonFromProblem = function (problem) {
	switch (problem.$) {
		case 0:
			return 'it resulted in the same source code.';
		case 1:
			return 'it resulted in invalid Elm code.';
		default:
			return 'it was invalid.';
	}
};
var $author$project$Elm$Review$Reporter$formatErrorWithExtract = F5(
	function (fixProblemDict, detailsMode, mode, source, error) {
		var fixFailMessage = function () {
			var _v2 = error.c3;
			if (!_v2.$) {
				var fixKey = _v2.a;
				if (mode === 1) {
					return _List_Nil;
				} else {
					var _v4 = A2($elm$core$Dict$get, fixKey, fixProblemDict);
					if (!_v4.$) {
						var problem = _v4.a;
						return _List_fromArray(
							[
								$author$project$Elm$Review$Text$from('\n\n'),
								$author$project$Elm$Review$Text$inYellow(
								$author$project$Elm$Review$Text$from(
									'I failed to apply the automatic fix because ' + $author$project$Elm$Review$Reporter$reasonFromProblem(problem)))
							]);
					} else {
						return _List_Nil;
					}
				}
			} else {
				return _List_Nil;
			}
		}();
		var details = function () {
			if (!detailsMode) {
				return A2(
					$elm$core$List$cons,
					$author$project$Elm$Review$Text$from('\n\n'),
					A2(
						$elm$core$List$intersperse,
						$author$project$Elm$Review$Text$from('\n\n'),
						A2($elm$core$List$map, $author$project$Elm$Review$Text$from, error.bG)));
			} else {
				return _List_Nil;
			}
		}();
		var codeExtract_ = function () {
			var _v0 = A2($author$project$Elm$Review$Reporter$codeExtract, source, error.cB);
			if (!_v0.b) {
				return _List_Nil;
			} else {
				var sourceCodeExtract = _v0;
				return A2(
					$elm$core$List$cons,
					$author$project$Elm$Review$Text$from('\n\n'),
					sourceCodeExtract);
			}
		}();
		return $elm$core$List$concat(
			_List_fromArray(
				[
					A3($author$project$Elm$Review$Reporter$formatErrorTitle, fixProblemDict, mode, error),
					codeExtract_,
					details,
					fixFailMessage
				]));
	});
var $author$project$Elm$Review$Text$simplifyHelp = F3(
	function (previousTexts, lastText, chunks) {
		simplifyHelp:
		while (true) {
			if (!chunks.b) {
				return A2($elm$core$List$cons, lastText, previousTexts);
			} else {
				var newLastText = chunks.a;
				var restOfChunks = chunks.b;
				if (_Utils_eq(lastText.dU, newLastText.dU) && _Utils_eq(lastText.d6, newLastText.d6)) {
					var $temp$previousTexts = previousTexts,
						$temp$lastText = {
						dU: lastText.dU,
						d6: lastText.d6,
						eC: _Utils_ap(lastText.eC, newLastText.eC)
					},
						$temp$chunks = restOfChunks;
					previousTexts = $temp$previousTexts;
					lastText = $temp$lastText;
					chunks = $temp$chunks;
					continue simplifyHelp;
				} else {
					var $temp$previousTexts = A2($elm$core$List$cons, lastText, previousTexts),
						$temp$lastText = newLastText,
						$temp$chunks = restOfChunks;
					previousTexts = $temp$previousTexts;
					lastText = $temp$lastText;
					chunks = $temp$chunks;
					continue simplifyHelp;
				}
			}
		}
	});
var $author$project$Elm$Review$Text$simplify = function (chunks) {
	if (!chunks.b) {
		return _List_Nil;
	} else {
		var chunk = chunks.a;
		var restOfChunks = chunks.b;
		return $elm$core$List$reverse(
			A3($author$project$Elm$Review$Text$simplifyHelp, _List_Nil, chunk, restOfChunks));
	}
};
var $author$project$Elm$Review$Text$toRecord = function (_v0) {
	var text = _v0;
	return text;
};
var $author$project$Elm$Review$Reporter$formatIndividualError = F4(
	function (fixProblemDict, detailsMode, source, error) {
		return A2(
			$elm$core$List$map,
			$author$project$Elm$Review$Text$toRecord,
			$author$project$Elm$Review$Text$simplify(
				A5($author$project$Elm$Review$Reporter$formatErrorWithExtract, fixProblemDict, detailsMode, 0, source, error)));
	});
var $author$project$Elm$Review$Main$encodeConfigurationError = F2(
	function (detailsMode, error) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'rule',
					$elm$json$Json$Encode$string(error.cE)),
					_Utils_Tuple2(
					'message',
					$elm$json$Json$Encode$string(error.al)),
					_Utils_Tuple2(
					'details',
					A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, error.bG)),
					_Utils_Tuple2(
					'region',
					$author$project$Elm$Review$Main$encodeRange($stil4m$elm_syntax$Elm$Syntax$Range$emptyRange)),
					_Utils_Tuple2(
					'formatted',
					$author$project$Elm$Review$Main$encodeReport(
						A4($author$project$Elm$Review$Reporter$formatIndividualError, $elm$core$Dict$empty, detailsMode, '', error)))
				]));
	});
var $elm$json$Json$Encode$null = _Json_encodeNull;
var $author$project$Elm$Review$Main$encodeFilePath = function (filePath) {
	switch (filePath.$) {
		case 0:
			var path = filePath.a;
			return $elm$json$Json$Encode$string(path);
		case 1:
			return $elm$json$Json$Encode$null;
		default:
			return $elm$json$Json$Encode$null;
	}
};
var $author$project$Elm$Review$Main$encodeConfigurationErrors = F2(
	function (detailsMode, errors) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'path',
					$author$project$Elm$Review$Main$encodeFilePath($author$project$Elm$Review$Reporter$ConfigurationError)),
					_Utils_Tuple2(
					'errors',
					A2(
						$elm$json$Json$Encode$list,
						$author$project$Elm$Review$Main$encodeConfigurationError(detailsMode),
						errors))
				]));
	});
var $author$project$Elm$Review$Reporter$filePath = function (path_) {
	switch (path_.$) {
		case 0:
			var str = path_.a;
			return str;
		case 1:
			return '';
		default:
			return '';
	}
};
var $author$project$Elm$Review$Reporter$fixableErrors = function (files) {
	return A2(
		$elm$core$List$concatMap,
		A2(
			$elm$core$Basics$composeR,
			function ($) {
				return $.at;
			},
			$elm$core$List$filter(
				function (error) {
					return !_Utils_eq(error.c3, $elm$core$Maybe$Nothing);
				})),
		files);
};
var $author$project$Elm$Review$Reporter$fileSeparator = F2(
	function (pathAbove, pathBelow) {
		return _List_fromArray(
			[
				$author$project$Elm$Review$Text$from(
				'\n\n' + A2(
					$elm$core$String$repeat,
					73 - $elm$core$String$length(
						$author$project$Elm$Review$Reporter$filePath(pathAbove)),
					' ')),
				$author$project$Elm$Review$Text$inRed(
				$author$project$Elm$Review$Text$from(
					($author$project$Elm$Review$Reporter$filePath(pathAbove) + '  ↑') + ('\n====o======================================================================o====' + ('\n    ↓  ' + $author$project$Elm$Review$Reporter$filePath(pathBelow))))),
				$author$project$Elm$Review$Text$from('\n\n\n')
			]);
	});
var $author$project$Elm$Review$Reporter$compareRange = F2(
	function (a, b) {
		return (_Utils_cmp(a.bg.aB, b.bg.aB) < 0) ? 0 : ((_Utils_cmp(a.bg.aB, b.bg.aB) > 0) ? 2 : ((_Utils_cmp(a.bg.an, b.bg.an) < 0) ? 0 : ((_Utils_cmp(a.bg.an, b.bg.an) > 0) ? 2 : ((_Utils_cmp(a.a$.aB, b.a$.aB) < 0) ? 0 : ((_Utils_cmp(a.a$.aB, b.a$.aB) > 0) ? 2 : ((_Utils_cmp(a.a$.an, b.a$.an) < 0) ? 0 : ((_Utils_cmp(a.a$.an, b.a$.an) > 0) ? 2 : 1)))))));
	});
var $author$project$Elm$Review$Reporter$compareErrorPositions = F2(
	function (a, b) {
		return A2($author$project$Elm$Review$Reporter$compareRange, a.cB, b.cB);
	});
var $author$project$Elm$Review$Reporter$firstErrorPrefix = '-- ELM-REVIEW ERROR -';
var $author$project$Elm$Review$Reporter$header = F3(
	function (isFirstError, filePath_, range) {
		var position = function () {
			switch (filePath_.$) {
				case 0:
					var str = filePath_.a;
					return ' ' + (str + (':' + ($elm$core$String$fromInt(range.bg.aB) + (':' + $elm$core$String$fromInt(range.bg.an)))));
				case 1:
					return ' GLOBAL ERROR';
				default:
					return ' CONFIGURATION ERROR';
			}
		}();
		return isFirstError ? $author$project$Elm$Review$Text$inBlue(
			$author$project$Elm$Review$Text$from(
				_Utils_ap(
					$author$project$Elm$Review$Reporter$firstErrorPrefix,
					A3(
						$elm$core$String$padLeft,
						80 - $elm$core$String$length($author$project$Elm$Review$Reporter$firstErrorPrefix),
						'-',
						position)))) : $author$project$Elm$Review$Text$from(
			'────' + A3($elm$core$String$padLeft, 76, '─', position));
	});
var $elm$core$List$sortWith = _List_sortWith;
var $author$project$Elm$Review$Reporter$formatReportForFileWithExtract = F4(
	function (fixProblemDict, detailsMode, mode, file) {
		return A2(
			$author$project$Elm$Review$Text$join,
			'\n\n',
			A2(
				$elm$core$List$indexedMap,
				F2(
					function (index, error) {
						return A2(
							$author$project$Elm$Review$Text$join,
							'\n\n',
							_List_fromArray(
								[
									_List_fromArray(
									[
										A3($author$project$Elm$Review$Reporter$header, !index, file.es, error.cB)
									]),
									A5($author$project$Elm$Review$Reporter$formatErrorWithExtract, fixProblemDict, detailsMode, mode, file.eA, error)
								]));
					}),
				A2($elm$core$List$sortWith, $author$project$Elm$Review$Reporter$compareErrorPositions, file.at)));
	});
var $author$project$Elm$Review$Reporter$formatReports = F3(
	function (fixProblemDict, detailsMode, files) {
		if (!files.b) {
			return _List_Nil;
		} else {
			if (!files.b.b) {
				var file = files.a;
				return A4($author$project$Elm$Review$Reporter$formatReportForFileWithExtract, fixProblemDict, detailsMode, 0, file);
			} else {
				var firstFile = files.a;
				var _v1 = files.b;
				var secondFile = _v1.a;
				var restOfFiles = _v1.b;
				return $elm$core$List$concat(
					_List_fromArray(
						[
							A4($author$project$Elm$Review$Reporter$formatReportForFileWithExtract, fixProblemDict, detailsMode, 0, firstFile),
							A2($author$project$Elm$Review$Reporter$fileSeparator, firstFile.es, secondFile.es),
							A3(
							$author$project$Elm$Review$Reporter$formatReports,
							fixProblemDict,
							detailsMode,
							A2($elm$core$List$cons, secondFile, restOfFiles))
						]));
			}
		}
	});
var $elm$core$List$partition = F2(
	function (pred, list) {
		var step = F2(
			function (x, _v0) {
				var trues = _v0.a;
				var falses = _v0.b;
				return pred(x) ? _Utils_Tuple2(
					A2($elm$core$List$cons, x, trues),
					falses) : _Utils_Tuple2(
					trues,
					A2($elm$core$List$cons, x, falses));
			});
		return A3(
			$elm$core$List$foldr,
			step,
			_Utils_Tuple2(_List_Nil, _List_Nil),
			list);
	});
var $author$project$Elm$Review$Reporter$pluralize = F2(
	function (n, word) {
		return _Utils_ap(
			$elm$core$String$fromInt(n) + (' ' + word),
			(n > 1) ? 's' : '');
	});
var $elm$core$List$singleton = function (value) {
	return _List_fromArray(
		[value]);
};
var $elm$core$List$sortBy = _List_sortBy;
var $author$project$Elm$Review$Reporter$totalNumberOfErrors = function (files) {
	return $elm$core$List$length(
		A2(
			$elm$core$List$concatMap,
			function ($) {
				return $.at;
			},
			files));
};
var $author$project$Elm$Review$Reporter$formatReport = F4(
	function (fixProblemDict, detailsMode, errorsHaveBeenFixedPreviously, files) {
		var numberOfErrors = $author$project$Elm$Review$Reporter$totalNumberOfErrors(files);
		var filesWithErrors = A2(
			$elm$core$List$sortBy,
			A2(
				$elm$core$Basics$composeR,
				function ($) {
					return $.es;
				},
				$author$project$Elm$Review$Reporter$filePath),
			A2(
				$elm$core$List$filter,
				A2(
					$elm$core$Basics$composeR,
					function ($) {
						return $.at;
					},
					A2($elm$core$Basics$composeR, $elm$core$List$isEmpty, $elm$core$Basics$not)),
				files));
		if (!numberOfErrors) {
			return errorsHaveBeenFixedPreviously ? $elm$core$List$singleton(
				$author$project$Elm$Review$Text$toRecord(
					$author$project$Elm$Review$Text$from('I found no more errors!'))) : $elm$core$List$singleton(
				$author$project$Elm$Review$Text$toRecord(
					$author$project$Elm$Review$Text$from('I found no errors!')));
		} else {
			var hasFixErrors = function (error) {
				var _v1 = error.c3;
				if (!_v1.$) {
					var fixesHash = _v1.a;
					return A2($elm$core$Dict$member, fixesHash, fixProblemDict);
				} else {
					return false;
				}
			};
			var _v0 = A2(
				$elm$core$List$partition,
				hasFixErrors,
				$author$project$Elm$Review$Reporter$fixableErrors(files));
			var invalidFixableErrors = _v0.a;
			var ignoredFixableErrors = _v0.b;
			return A2(
				$elm$core$List$map,
				$author$project$Elm$Review$Text$toRecord,
				$author$project$Elm$Review$Text$simplify(
					A2(
						$author$project$Elm$Review$Text$join,
						'\n\n',
						A2(
							$elm$core$List$filterMap,
							$elm$core$Basics$identity,
							_List_fromArray(
								[
									$elm$core$Maybe$Just(
									A3($author$project$Elm$Review$Reporter$formatReports, fixProblemDict, detailsMode, filesWithErrors)),
									(!$elm$core$List$isEmpty(ignoredFixableErrors)) ? $elm$core$Maybe$Just(
									_List_fromArray(
										[
											$author$project$Elm$Review$Text$inBlue(
											$author$project$Elm$Review$Text$from('Errors marked with (fix) can be fixed automatically using `elm-review --fix`.'))
										])) : $elm$core$Maybe$Nothing,
									function () {
									if (!$elm$core$List$isEmpty(invalidFixableErrors)) {
										var ruleNames = $elm$core$Set$toList(
											$elm$core$Set$fromList(
												A2(
													$elm$core$List$map,
													function ($) {
														return $.cE;
													},
													invalidFixableErrors)));
										return $elm$core$Maybe$Just(
											_List_fromArray(
												[
													$author$project$Elm$Review$Text$inYellow(
													$author$project$Elm$Review$Text$from(
														'I tried applying some fixes but they failed in ways the author(s) didn\'t expect. Please let the author(s) of the following rules know:\n- ' + A2($elm$core$String$join, '\n- ', ruleNames)))
												]));
									} else {
										return $elm$core$Maybe$Nothing;
									}
								}(),
									$elm$core$Maybe$Just(
									_List_fromArray(
										[
											$author$project$Elm$Review$Text$from('I found '),
											$author$project$Elm$Review$Text$inRed(
											$author$project$Elm$Review$Text$from(
												A2($author$project$Elm$Review$Reporter$pluralize, numberOfErrors, 'error'))),
											$author$project$Elm$Review$Text$from(' in '),
											$author$project$Elm$Review$Text$inYellow(
											$author$project$Elm$Review$Text$from(
												A2(
													$author$project$Elm$Review$Reporter$pluralize,
													$elm$core$List$length(filesWithErrors),
													'file'))),
											$author$project$Elm$Review$Text$from('.')
										]))
								])))));
		}
	});
var $jfmengels$elm_review$Review$Rule$getConfigurationError = function (_v0) {
	var rule = _v0;
	return rule.ao;
};
var $jfmengels$elm_review$Review$Rule$ruleName = function (_v0) {
	var rule = _v0;
	return rule.aW;
};
var $author$project$Elm$Review$Main$getConfigurationError = function (rule) {
	var _v0 = $jfmengels$elm_review$Review$Rule$getConfigurationError(rule);
	if (!_v0.$) {
		var configurationError = _v0.a;
		return $elm$core$Maybe$Just(
			{
				bG: configurationError.bG,
				c3: $elm$core$Maybe$Nothing,
				al: configurationError.al,
				cB: $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
				dq: $elm$core$Maybe$Nothing,
				cE: $jfmengels$elm_review$Review$Rule$ruleName(rule)
			});
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$core$String$endsWith = _String_endsWith;
var $jfmengels$elm_review$Review$Exceptions$addDirectories = F2(
	function (directories, _v0) {
		var exceptions = _v0;
		var cleanedDirectories = A2(
			$elm$core$List$map,
			A2(
				$elm$core$Basics$composeR,
				$jfmengels$elm_review$Review$Exceptions$makePathOSAgnostic,
				function (dir) {
					return A2($elm$core$String$endsWith, '/', dir) ? dir : (dir + '/');
				}),
			directories);
		return {
			aI: _Utils_ap(cleanedDirectories, exceptions.aI),
			aK: exceptions.aK
		};
	});
var $jfmengels$elm_review$Review$Rule$ignoreErrorsForDirectories = F2(
	function (directories, _v0) {
		var rule = _v0;
		return {
			ao: rule.ao,
			au: A2($jfmengels$elm_review$Review$Exceptions$addDirectories, directories, rule.au),
			aW: rule.aW,
			O: rule.O,
			aC: rule.aC
		};
	});
var $jfmengels$elm_review$Review$Exceptions$addFiles = F2(
	function (files, _v0) {
		var exceptions = _v0;
		var cleanedFiles = $elm$core$Set$fromList(
			A2($elm$core$List$map, $jfmengels$elm_review$Review$Exceptions$makePathOSAgnostic, files));
		return {
			aI: exceptions.aI,
			aK: A2($elm$core$Set$union, cleanedFiles, exceptions.aK)
		};
	});
var $jfmengels$elm_review$Review$Rule$ignoreErrorsForFiles = F2(
	function (files, _v0) {
		var rule = _v0;
		return {
			ao: rule.ao,
			au: A2($jfmengels$elm_review$Review$Exceptions$addFiles, files, rule.au),
			aW: rule.aW,
			O: rule.O,
			aC: rule.aC
		};
	});
var $jfmengels$elm_review$Review$Project$Internal$Project = $elm$core$Basics$identity;
var $jfmengels$elm_review$Review$Project$new = {
	aG: $elm$core$Dict$empty,
	ch: $elm$core$Maybe$Nothing,
	bY: $elm$core$Maybe$Nothing,
	ee: $elm$core$Maybe$Nothing,
	ad: $elm$core$Dict$empty,
	a9: _List_Nil,
	cC: $elm$core$Maybe$Nothing,
	cH: _List_fromArray(
		['src/'])
};
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $author$project$Elm$Review$Vendor$Table$Table = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$core$Array$repeat = F2(
	function (n, e) {
		return A2(
			$elm$core$Array$initialize,
			n,
			function (_v0) {
				return e;
			});
	});
var $author$project$Elm$Review$Vendor$Table$empty = function (_v0) {
	var sizeA = _v0.a;
	var sizeB = _v0.b;
	var arraySize = ((sizeA + 1) * (sizeB + 1)) - 1;
	return A2(
		$author$project$Elm$Review$Vendor$Table$Table,
		sizeB + 1,
		A2($elm$core$Array$repeat, arraySize, -1));
};
var $elm$core$Elm$JsArray$unsafeSet = _JsArray_unsafeSet;
var $elm$core$Array$setHelp = F4(
	function (shift, index, value, tree) {
		var pos = $elm$core$Array$bitMask & (index >>> shift);
		var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
		if (!_v0.$) {
			var subTree = _v0.a;
			var newSub = A4($elm$core$Array$setHelp, shift - $elm$core$Array$shiftStep, index, value, subTree);
			return A3(
				$elm$core$Elm$JsArray$unsafeSet,
				pos,
				$elm$core$Array$SubTree(newSub),
				tree);
		} else {
			var values = _v0.a;
			var newLeaf = A3($elm$core$Elm$JsArray$unsafeSet, $elm$core$Array$bitMask & index, value, values);
			return A3(
				$elm$core$Elm$JsArray$unsafeSet,
				pos,
				$elm$core$Array$Leaf(newLeaf),
				tree);
		}
	});
var $elm$core$Array$set = F3(
	function (index, value, array) {
		var len = array.a;
		var startShift = array.b;
		var tree = array.c;
		var tail = array.d;
		return ((index < 0) || (_Utils_cmp(index, len) > -1)) ? array : ((_Utils_cmp(
			index,
			$elm$core$Array$tailIndex(len)) > -1) ? A4(
			$elm$core$Array$Array_elm_builtin,
			len,
			startShift,
			tree,
			A3($elm$core$Elm$JsArray$unsafeSet, $elm$core$Array$bitMask & index, value, tail)) : A4(
			$elm$core$Array$Array_elm_builtin,
			len,
			startShift,
			A4($elm$core$Array$setHelp, startShift, index, value, tree),
			tail));
	});
var $author$project$Elm$Review$Vendor$Table$fetch = F3(
	function (key, builder, table) {
		var iKey = key.a;
		var jKey = key.b;
		var dimension = table.a;
		var store = table.b;
		var index = (iKey * dimension) + jKey;
		var _v0 = A2($elm$core$Array$get, index, store);
		if (!_v0.$) {
			var value = _v0.a;
			if (_Utils_eq(value, -1)) {
				var _v1 = A2(builder, table, key);
				var _v2 = _v1.a;
				var newStore = _v2.b;
				var newValue = _v1.b;
				return _Utils_Tuple2(
					A2(
						$author$project$Elm$Review$Vendor$Table$Table,
						dimension,
						A3($elm$core$Array$set, index, newValue, newStore)),
					newValue);
			} else {
				return _Utils_Tuple2(table, value);
			}
		} else {
			return _Utils_Tuple2(table, -1);
		}
	});
var $elm$core$Array$length = function (_v0) {
	var len = _v0.a;
	return len;
};
var $author$project$Elm$Review$Vendor$Levenshtein$distanceHelper = F2(
	function (arr1, arr2) {
		var indecesForLastChars = _Utils_Tuple2(
			$elm$core$Array$length(arr1),
			$elm$core$Array$length(arr2));
		var calculateEditDistanceForChars = F2(
			function (table, _v0) {
				var i = _v0.a;
				var j = _v0.b;
				var _v1 = _Utils_Tuple2(
					A2($elm$core$Array$get, i - 1, arr1),
					A2($elm$core$Array$get, j - 1, arr2));
				if ((!_v1.a.$) && (!_v1.b.$)) {
					var chr1 = _v1.a.a;
					var chr2 = _v1.b.a;
					var _v2 = A3(
						$author$project$Elm$Review$Vendor$Table$fetch,
						_Utils_Tuple2(i - 1, j),
						calculateEditDistanceForChars,
						table);
					var table1 = _v2.a;
					var dist1 = _v2.b;
					var _v3 = A3(
						$author$project$Elm$Review$Vendor$Table$fetch,
						_Utils_Tuple2(i, j - 1),
						calculateEditDistanceForChars,
						table1);
					var table2 = _v3.a;
					var dist2 = _v3.b;
					var _v4 = A3(
						$author$project$Elm$Review$Vendor$Table$fetch,
						_Utils_Tuple2(i - 1, j - 1),
						calculateEditDistanceForChars,
						table2);
					var table3 = _v4.a;
					var dist3 = _v4.b;
					return _Utils_Tuple2(
						table3,
						(_Utils_cmp(dist3, dist1) < 0) ? ((_Utils_cmp(dist3, dist2) < 0) ? ((!_Utils_eq(chr1, chr2)) ? (dist3 + 1) : dist3) : (dist2 + 1)) : ((_Utils_cmp(dist1, dist2) > 0) ? (dist2 + 1) : (dist1 + 1)));
				} else {
					return _Utils_Tuple2(
						table,
						A2($elm$core$Basics$max, i, j));
				}
			});
		return A2(
			calculateEditDistanceForChars,
			$author$project$Elm$Review$Vendor$Table$empty(indecesForLastChars),
			indecesForLastChars).b;
	});
var $author$project$Elm$Review$Vendor$Levenshtein$distance = F2(
	function (str1, str2) {
		return _Utils_eq(str1, str2) ? 0 : A2(
			$author$project$Elm$Review$Vendor$Levenshtein$distanceHelper,
			$elm$core$Array$fromList(
				$elm$core$String$toList(str1)),
			$elm$core$Array$fromList(
				$elm$core$String$toList(str2)));
	});
var $author$project$Elm$Review$Main$closestNames = F2(
	function (names, name) {
		return A2(
			$elm$core$List$take,
			3,
			A2(
				$elm$core$List$sortBy,
				$author$project$Elm$Review$Vendor$Levenshtein$distance(name),
				names));
	});
var $author$project$Elm$Review$Main$unknownRulesFilterMessage = function (_v0) {
	var ruleNames = _v0.dr;
	var filterNames = _v0.c2;
	var unknownRulesMessage = A2(
		$elm$core$String$join,
		'\n\n',
		A2(
			$elm$core$List$map,
			function (filterName) {
				return '- ' + (filterName + ('. Did you mean:\n  - ' + A2(
					$elm$core$String$join,
					'\n  - ',
					A2($author$project$Elm$Review$Main$closestNames, ruleNames, filterName))));
			},
			filterNames));
	return {al: 'You requested to only run several rules, but I could not find some of them.\n\n' + unknownRulesMessage, bD: 'UNKNOWN FILTERED RULE(S)'};
};
var $author$project$Elm$Review$Main$init = function (flags) {
	var _v0 = function () {
		var _v1 = A2($elm$json$Json$Decode$decodeValue, $author$project$Elm$Review$Main$decodeFlags, flags);
		if (!_v1.$) {
			var decodedFlags = _v1.a;
			return _Utils_Tuple2(decodedFlags, $elm$core$Platform$Cmd$none);
		} else {
			var error = _v1.a;
			return _Utils_Tuple2(
				{aq: 1, a1: 0, a4: false, cs: _List_Nil, ct: _List_Nil, ak: $author$project$Elm$Review$Progress$dummy, bd: 0, cF: $elm$core$Maybe$Nothing},
				$author$project$Elm$Review$Main$abort(
					'Problem decoding the flags when running the elm-review runner:\n  ' + $elm$json$Json$Decode$errorToString(error)));
		}
	}();
	var fixMode = _v0.a.a1;
	var reportMode = _v0.a.bd;
	var detailsMode = _v0.a.aq;
	var ignoreProblematicDependencies = _v0.a.a4;
	var rulesFilter = _v0.a.cF;
	var ignoredDirs = _v0.a.cs;
	var ignoredFiles = _v0.a.ct;
	var logger = _v0.a.ak;
	var cmd = _v0.b;
	var _v2 = function () {
		if (!rulesFilter.$) {
			var rulesToEnable = rulesFilter.a;
			var ruleNames = $elm$core$Set$fromList(
				A2($elm$core$List$map, $jfmengels$elm_review$Review$Rule$ruleName, $author$project$ReviewConfig$config));
			return _Utils_Tuple2(
				A2(
					$elm$core$List$filter,
					function (rule) {
						return A2(
							$elm$core$Set$member,
							$jfmengels$elm_review$Review$Rule$ruleName(rule),
							rulesToEnable);
					},
					$author$project$ReviewConfig$config),
				$elm$core$Set$toList(
					A2($elm$core$Set$diff, rulesToEnable, ruleNames)));
		} else {
			return _Utils_Tuple2($author$project$ReviewConfig$config, _List_Nil);
		}
	}();
	var rules = _v2.a;
	var filterNames = _v2.b;
	return _Utils_Tuple2(
		{
			aq: detailsMode,
			as: $author$project$Elm$Review$Main$NotAwaiting,
			bJ: false,
			av: $elm$core$Dict$empty,
			co: $jfmengels$elm_review$Review$Project$new,
			a1: fixMode,
			a4: ignoreProblematicDependencies,
			aT: $elm$core$Dict$empty,
			ak: logger,
			c: $jfmengels$elm_review$Review$Project$new,
			bB: $elm$core$Maybe$Nothing,
			bc: $author$project$Elm$Review$RefusedErrorFixes$empty,
			bd: reportMode,
			be: _List_Nil,
			bC: A2(
				$elm$core$List$map,
				A2(
					$elm$core$Basics$composeR,
					$jfmengels$elm_review$Review$Rule$ignoreErrorsForDirectories(ignoredDirs),
					$jfmengels$elm_review$Review$Rule$ignoreErrorsForFiles(ignoredFiles)),
				rules)
		},
		function () {
			if ($elm$core$List$isEmpty($author$project$ReviewConfig$config)) {
				return $author$project$Elm$Review$Main$abortWithDetails(
					{al: 'Your configuration contains no rules. You can add rules by editing the ReviewConfig.elm file.\n\nI recommend you take a look at the following documents:\n  - How to configure elm-review: https://github.com/jfmengels/elm-review/#Configuration\n  - When to write or enable a rule: https://github.com/jfmengels/elm-review/#when-to-write-or-enable-a-rule', bD: 'CONFIGURATION IS EMPTY'});
			} else {
				if (!$elm$core$List$isEmpty(filterNames)) {
					return $author$project$Elm$Review$Main$abortWithDetails(
						$author$project$Elm$Review$Main$unknownRulesFilterMessage(
							{
								c2: filterNames,
								dr: $elm$core$Set$toList(
									$elm$core$Set$fromList(
										A2($elm$core$List$map, $jfmengels$elm_review$Review$Rule$ruleName, $author$project$ReviewConfig$config)))
							}));
				} else {
					var _v4 = A2($elm$core$List$filterMap, $author$project$Elm$Review$Main$getConfigurationError, $author$project$ReviewConfig$config);
					if (!_v4.b) {
						return cmd;
					} else {
						var configurationErrors = _v4;
						return $author$project$Elm$Review$Main$abortForConfigurationErrors(
							function () {
								if (!reportMode) {
									return $author$project$Elm$Review$Main$encodeReport(
										A4(
											$author$project$Elm$Review$Reporter$formatReport,
											$elm$core$Dict$empty,
											detailsMode,
											false,
											_List_fromArray(
												[
													{at: configurationErrors, es: $author$project$Elm$Review$Reporter$ConfigurationError, eA: ''}
												])));
								} else {
									return A2($author$project$Elm$Review$Main$encodeConfigurationErrors, detailsMode, configurationErrors);
								}
							}());
					}
				}
			}
		}());
};
var $author$project$Elm$Review$Main$GotRequestToReview = {$: 6};
var $author$project$Elm$Review$Main$ReceivedDependencies = function (a) {
	return {$: 4, a: a};
};
var $author$project$Elm$Review$Main$ReceivedElmJson = function (a) {
	return {$: 2, a: a};
};
var $author$project$Elm$Review$Main$ReceivedFile = function (a) {
	return {$: 0, a: a};
};
var $author$project$Elm$Review$Main$ReceivedLinks = function (a) {
	return {$: 5, a: a};
};
var $author$project$Elm$Review$Main$ReceivedReadme = function (a) {
	return {$: 3, a: a};
};
var $author$project$Elm$Review$Main$RemovedFile = function (a) {
	return {$: 1, a: a};
};
var $author$project$Elm$Review$Main$RequestedToKnowIfAFixConfirmationIsExpected = {$: 8};
var $author$project$Elm$Review$Main$UserConfirmedFix = function (a) {
	return {$: 7, a: a};
};
var $author$project$Elm$Review$Main$askForFixConfirmationStatus = _Platform_incomingPort(
	'askForFixConfirmationStatus',
	$elm$json$Json$Decode$null(0));
var $elm$core$Platform$Sub$batch = _Platform_batch;
var $author$project$Elm$Review$Main$collectDependencies = _Platform_incomingPort('collectDependencies', $elm$json$Json$Decode$value);
var $author$project$Elm$Review$Main$collectElmJson = _Platform_incomingPort('collectElmJson', $elm$json$Json$Decode$value);
var $author$project$Elm$Review$Main$collectFile = _Platform_incomingPort('collectFile', $elm$json$Json$Decode$value);
var $author$project$Elm$Review$Main$collectLinks = _Platform_incomingPort('collectLinks', $elm$json$Json$Decode$value);
var $author$project$Elm$Review$Main$collectReadme = _Platform_incomingPort('collectReadme', $elm$json$Json$Decode$value);
var $author$project$Elm$Review$Main$removeFile = _Platform_incomingPort('removeFile', $elm$json$Json$Decode$string);
var $author$project$Elm$Review$Main$startReview = _Platform_incomingPort(
	'startReview',
	$elm$json$Json$Decode$null(0));
var $author$project$Elm$Review$Main$userConfirmedFix = _Platform_incomingPort('userConfirmedFix', $elm$json$Json$Decode$value);
var $author$project$Elm$Review$Main$subscriptions = $elm$core$Platform$Sub$batch(
	_List_fromArray(
		[
			$author$project$Elm$Review$Main$collectFile($author$project$Elm$Review$Main$ReceivedFile),
			$author$project$Elm$Review$Main$removeFile($author$project$Elm$Review$Main$RemovedFile),
			$author$project$Elm$Review$Main$collectElmJson($author$project$Elm$Review$Main$ReceivedElmJson),
			$author$project$Elm$Review$Main$collectReadme($author$project$Elm$Review$Main$ReceivedReadme),
			$author$project$Elm$Review$Main$collectDependencies($author$project$Elm$Review$Main$ReceivedDependencies),
			$author$project$Elm$Review$Main$collectLinks($author$project$Elm$Review$Main$ReceivedLinks),
			$author$project$Elm$Review$Main$startReview(
			$elm$core$Basics$always($author$project$Elm$Review$Main$GotRequestToReview)),
			$author$project$Elm$Review$Main$userConfirmedFix($author$project$Elm$Review$Main$UserConfirmedFix),
			$author$project$Elm$Review$Main$askForFixConfirmationStatus(
			$elm$core$Basics$always($author$project$Elm$Review$Main$RequestedToKnowIfAFixConfirmationIsExpected))
		]));
var $author$project$Elm$Review$Main$acknowledgeFileReceipt = _Platform_outgoingPort('acknowledgeFileReceipt', $elm$core$Basics$identity);
var $jfmengels$elm_review$Review$Project$Dependency$name = function (_v0) {
	var dependency = _v0;
	return dependency.aW;
};
var $jfmengels$elm_review$Review$Project$addDependency = F2(
	function (dependency, _v0) {
		var project = _v0;
		return _Utils_update(
			project,
			{
				aG: A3(
					$elm$core$Dict$insert,
					$jfmengels$elm_review$Review$Project$Dependency$name(dependency),
					dependency,
					project.aG)
			});
	});
var $jfmengels$elm_review$Review$Project$makePathOSAgnostic = function (path) {
	return A3($elm$core$String$replace, '\\', '/', path);
};
var $elm$core$Dict$map = F2(
	function (func, dict) {
		if (dict.$ === -2) {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				A2(func, key, value),
				A2($elm$core$Dict$map, func, left),
				A2($elm$core$Dict$map, func, right));
		}
	});
var $jfmengels$elm_review$Review$Project$endWithSlash = function (dir) {
	return A2($elm$core$String$endsWith, '/', dir) ? dir : (dir + '/');
};
var $jfmengels$elm_review$Review$Project$removeDotSlashAtBeginning = function (dir) {
	return A2($elm$core$String$startsWith, './', dir) ? A2($elm$core$String$dropLeft, 2, dir) : dir;
};
var $jfmengels$elm_review$Review$Project$sourceDirectoriesForProject = function (elmJson_) {
	if (!elmJson_.$) {
		var dirs = elmJson_.a.c$;
		return A2(
			$elm$core$List$map,
			A2(
				$elm$core$Basics$composeR,
				$jfmengels$elm_review$Review$Project$removeDotSlashAtBeginning,
				A2($elm$core$Basics$composeR, $jfmengels$elm_review$Review$Project$makePathOSAgnostic, $jfmengels$elm_review$Review$Project$endWithSlash)),
			dirs);
	} else {
		return _List_fromArray(
			['src/']);
	}
};
var $jfmengels$elm_review$Review$Project$addElmJson = F2(
	function (elmJson_, _v0) {
		var project = _v0;
		var sourceDirectories = $jfmengels$elm_review$Review$Project$sourceDirectoriesForProject(elmJson_.c);
		var modules_ = _Utils_eq(project.cH, sourceDirectories) ? project.ad : A2(
			$elm$core$Dict$map,
			F2(
				function (_v1, value) {
					var osAgnosticPath = $jfmengels$elm_review$Review$Project$makePathOSAgnostic(value.es);
					return _Utils_update(
						value,
						{
							cv: A2(
								$elm$core$List$any,
								function (dir) {
									return A2($elm$core$String$startsWith, dir, osAgnosticPath);
								},
								sourceDirectories)
						});
				}),
			project.ad);
		return _Utils_update(
			project,
			{
				ch: $elm$core$Maybe$Just(elmJson_),
				ad: modules_,
				cH: sourceDirectories
			});
	});
var $jfmengels$elm_review$Review$Project$addFileThatFailedToParse = F2(
	function (_v0, _v1) {
		var path = _v0.es;
		var source = _v0.eA;
		var project = _v1;
		return _Utils_update(
			project,
			{
				a9: A2(
					$elm$core$List$cons,
					{es: path, eA: source},
					project.a9)
			});
	});
var $jfmengels$elm_review$Review$Project$positionAsInt = function (_v0) {
	var row = _v0.aB;
	var column = _v0.an;
	return (row * 1000000) + column;
};
var $jfmengels$elm_review$Review$Project$reorderComments = function (ast) {
	return _Utils_update(
		ast,
		{
			dW: A2(
				$elm$core$List$sortBy,
				A2(
					$elm$core$Basics$composeR,
					$stil4m$elm_syntax$Elm$Syntax$Node$range,
					A2(
						$elm$core$Basics$composeR,
						function ($) {
							return $.bg;
						},
						A2($elm$core$Basics$composeR, $jfmengels$elm_review$Review$Project$positionAsInt, $elm$core$Basics$negate))),
				ast.dW)
		});
};
var $jfmengels$elm_review$Review$Project$sanitizeModule = function (module_) {
	return _Utils_update(
		module_,
		{
			dO: $jfmengels$elm_review$Review$Project$reorderComments(module_.dO)
		});
};
var $jfmengels$elm_review$Review$Project$addModuleToProject = F2(
	function (module_, _v0) {
		var project = _v0;
		return _Utils_update(
			project,
			{
				ad: A3(
					$elm$core$Dict$insert,
					module_.es,
					$jfmengels$elm_review$Review$Project$sanitizeModule(module_),
					project.ad)
			});
	});
var $stil4m$elm_syntax$Elm$Processing$ProcessContext = $elm$core$Basics$identity;
var $stil4m$elm_syntax$Elm$Processing$addDependency = F2(
	function (dep, _v0) {
		var x = _v0;
		return A2($elm$core$Dict$union, dep.cu, x);
	});
var $stil4m$elm_syntax$Elm$Syntax$Infix$Left = 0;
var $stil4m$elm_syntax$Elm$Syntax$Infix$Non = 2;
var $stil4m$elm_syntax$Elm$Interface$Operator = function (a) {
	return {$: 3, a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Infix$Right = 1;
var $jfmengels$elm_review$Review$Dependencies$elmCore = {
	cu: $elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2(
				_List_fromArray(
					['Basics']),
				_List_fromArray(
					[
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							d_: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 1),
							d5: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'apL'),
							eq: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '<|'),
							et: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 0)
						}),
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							d_: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 0),
							d5: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'apR'),
							eq: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '|>'),
							et: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 0)
						}),
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							d_: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 1),
							d5: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'or'),
							eq: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '||'),
							et: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 2)
						}),
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							d_: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 1),
							d5: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'and'),
							eq: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '&&'),
							et: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 3)
						}),
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							d_: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 2),
							d5: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'eq'),
							eq: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '=='),
							et: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 4)
						}),
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							d_: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 2),
							d5: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'neq'),
							eq: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '/='),
							et: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 4)
						}),
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							d_: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 2),
							d5: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'lt'),
							eq: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '<'),
							et: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 4)
						}),
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							d_: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 2),
							d5: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'gt'),
							eq: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '>'),
							et: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 4)
						}),
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							d_: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 2),
							d5: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'le'),
							eq: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '<='),
							et: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 4)
						}),
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							d_: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 2),
							d5: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'ge'),
							eq: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '>='),
							et: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 4)
						}),
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							d_: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 1),
							d5: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'append'),
							eq: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '++'),
							et: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 5)
						}),
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							d_: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 0),
							d5: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'add'),
							eq: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '+'),
							et: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 6)
						}),
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							d_: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 0),
							d5: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'sub'),
							eq: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '-'),
							et: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 6)
						}),
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							d_: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 0),
							d5: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'mul'),
							eq: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '*'),
							et: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 7)
						}),
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							d_: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 0),
							d5: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'fdiv'),
							eq: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '/'),
							et: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 7)
						}),
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							d_: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 0),
							d5: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'idiv'),
							eq: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '//'),
							et: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 7)
						}),
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							d_: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 1),
							d5: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'pow'),
							eq: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '^'),
							et: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 8)
						}),
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							d_: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 0),
							d5: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'composeL'),
							eq: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '<<'),
							et: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 9)
						}),
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							d_: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 1),
							d5: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'composeR'),
							eq: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '>>'),
							et: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 9)
						})
					])),
				_Utils_Tuple2(
				_List_fromArray(
					['List']),
				_List_fromArray(
					[
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							d_: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 1),
							d5: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'cons'),
							eq: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '::'),
							et: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 5)
						})
					]))
			])),
	aW: 'elm/core',
	dJ: '1.0.0'
};
var $jfmengels$elm_review$Review$Dependencies$elmParser = {
	cu: $elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2(
				_List_fromArray(
					['Parser']),
				_List_fromArray(
					[
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							d_: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 0),
							d5: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'keeper'),
							eq: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '|='),
							et: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 5)
						}),
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							d_: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 0),
							d5: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'ignorer'),
							eq: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '|.'),
							et: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 6)
						})
					])),
				_Utils_Tuple2(
				_List_fromArray(
					['Parser', 'Advanced']),
				_List_fromArray(
					[
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							d_: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 0),
							d5: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'keeper'),
							eq: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '|='),
							et: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 5)
						}),
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							d_: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 0),
							d5: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'ignorer'),
							eq: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '|.'),
							et: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 6)
						})
					]))
			])),
	aW: 'elm/parser',
	dJ: '1.0.0'
};
var $jfmengels$elm_review$Review$Dependencies$elmUrl = {
	cu: $elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2(
				_List_fromArray(
					['Url', 'Parser']),
				_List_fromArray(
					[
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							d_: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 1),
							d5: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'slash'),
							eq: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '</>'),
							et: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 7)
						}),
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							d_: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 0),
							d5: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'questionMark'),
							eq: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '<?>'),
							et: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 8)
						})
					]))
			])),
	aW: 'elm/url',
	dJ: '1.0.0'
};
var $stil4m$elm_syntax$Elm$Processing$init = $elm$core$Dict$empty;
var $jfmengels$elm_review$Review$Project$elmProcessContext = A2(
	$stil4m$elm_syntax$Elm$Processing$addDependency,
	$jfmengels$elm_review$Review$Dependencies$elmParser,
	A2(
		$stil4m$elm_syntax$Elm$Processing$addDependency,
		$jfmengels$elm_review$Review$Dependencies$elmUrl,
		A2($stil4m$elm_syntax$Elm$Processing$addDependency, $jfmengels$elm_review$Review$Dependencies$elmCore, $stil4m$elm_syntax$Elm$Processing$init)));
var $elm$core$Result$map = F2(
	function (func, ra) {
		if (!ra.$) {
			var a = ra.a;
			return $elm$core$Result$Ok(
				func(a));
		} else {
			var e = ra.a;
			return $elm$core$Result$Err(e);
		}
	});
var $elm$core$Result$mapError = F2(
	function (f, result) {
		if (!result.$) {
			var v = result.a;
			return $elm$core$Result$Ok(v);
		} else {
			var e = result.a;
			return $elm$core$Result$Err(
				f(e));
		}
	});
var $stil4m$elm_syntax$Elm$Parser$State$State = $elm$core$Basics$identity;
var $stil4m$elm_syntax$Elm$Parser$State$emptyState = {dW: _List_Nil, aP: _List_Nil};
var $stil4m$elm_syntax$Elm$Syntax$File$File = F4(
	function (moduleDefinition, imports, declarations, comments) {
		return {dW: comments, cW: declarations, d7: imports, ed: moduleDefinition};
	});
var $stil4m$elm_syntax$Combine$Parser = $elm$core$Basics$identity;
var $elm$parser$Parser$Advanced$Bad = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $elm$parser$Parser$Advanced$Good = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $elm$parser$Parser$Advanced$Parser = $elm$core$Basics$identity;
var $elm$parser$Parser$Advanced$andThen = F2(
	function (callback, _v0) {
		var parseA = _v0;
		return function (s0) {
			var _v1 = parseA(s0);
			if (_v1.$ === 1) {
				var p = _v1.a;
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, p, x);
			} else {
				var p1 = _v1.a;
				var a = _v1.b;
				var s1 = _v1.c;
				var _v2 = callback(a);
				var parseB = _v2;
				var _v3 = parseB(s1);
				if (_v3.$ === 1) {
					var p2 = _v3.a;
					var x = _v3.b;
					return A2($elm$parser$Parser$Advanced$Bad, p1 || p2, x);
				} else {
					var p2 = _v3.a;
					var b = _v3.b;
					var s2 = _v3.c;
					return A3($elm$parser$Parser$Advanced$Good, p1 || p2, b, s2);
				}
			}
		};
	});
var $elm$parser$Parser$andThen = $elm$parser$Parser$Advanced$andThen;
var $elm$parser$Parser$Advanced$map = F2(
	function (func, _v0) {
		var parse = _v0;
		return function (s0) {
			var _v1 = parse(s0);
			if (!_v1.$) {
				var p = _v1.a;
				var a = _v1.b;
				var s1 = _v1.c;
				return A3(
					$elm$parser$Parser$Advanced$Good,
					p,
					func(a),
					s1);
			} else {
				var p = _v1.a;
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, p, x);
			}
		};
	});
var $elm$parser$Parser$map = $elm$parser$Parser$Advanced$map;
var $elm$core$Tuple$mapSecond = F2(
	function (func, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			x,
			func(y));
	});
var $stil4m$elm_syntax$Combine$andMap = F2(
	function (_v0, _v1) {
		var rp = _v0;
		var lp = _v1;
		return function (state) {
			return A2(
				$elm$parser$Parser$andThen,
				function (_v2) {
					var newState = _v2.a;
					var a = _v2.b;
					return A2(
						$elm$parser$Parser$map,
						$elm$core$Tuple$mapSecond(a),
						rp(newState));
				},
				lp(state));
		};
	});
var $stil4m$elm_syntax$Elm$Parser$State$getComments = function (_v0) {
	var s = _v0;
	return $elm$core$List$reverse(s.dW);
};
var $elm$parser$Parser$Advanced$succeed = function (a) {
	return function (s) {
		return A3($elm$parser$Parser$Advanced$Good, false, a, s);
	};
};
var $elm$parser$Parser$succeed = $elm$parser$Parser$Advanced$succeed;
var $stil4m$elm_syntax$Combine$succeed = function (res) {
	return function (state) {
		return $elm$parser$Parser$succeed(
			_Utils_Tuple2(state, res));
	};
};
var $stil4m$elm_syntax$Combine$withState = function (f) {
	return function (state) {
		return function (_v0) {
			var p = _v0;
			return p(state);
		}(
			f(state));
	};
};
var $stil4m$elm_syntax$Elm$Parser$File$collectComments = $stil4m$elm_syntax$Combine$withState(
	A2($elm$core$Basics$composeR, $stil4m$elm_syntax$Elm$Parser$State$getComments, $stil4m$elm_syntax$Combine$succeed));
var $stil4m$elm_syntax$Elm$Syntax$Declaration$AliasDeclaration = function (a) {
	return {$: 1, a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Declaration$CustomTypeDeclaration = function (a) {
	return {$: 2, a: a};
};
var $elm$parser$Parser$Advanced$Empty = {$: 0};
var $elm$parser$Parser$Advanced$Append = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $elm$parser$Parser$Advanced$oneOfHelp = F3(
	function (s0, bag, parsers) {
		oneOfHelp:
		while (true) {
			if (!parsers.b) {
				return A2($elm$parser$Parser$Advanced$Bad, false, bag);
			} else {
				var parse = parsers.a;
				var remainingParsers = parsers.b;
				var _v1 = parse(s0);
				if (!_v1.$) {
					var step = _v1;
					return step;
				} else {
					var step = _v1;
					var p = step.a;
					var x = step.b;
					if (p) {
						return step;
					} else {
						var $temp$s0 = s0,
							$temp$bag = A2($elm$parser$Parser$Advanced$Append, bag, x),
							$temp$parsers = remainingParsers;
						s0 = $temp$s0;
						bag = $temp$bag;
						parsers = $temp$parsers;
						continue oneOfHelp;
					}
				}
			}
		}
	});
var $elm$parser$Parser$Advanced$oneOf = function (parsers) {
	return function (s) {
		return A3($elm$parser$Parser$Advanced$oneOfHelp, s, $elm$parser$Parser$Advanced$Empty, parsers);
	};
};
var $elm$parser$Parser$oneOf = $elm$parser$Parser$Advanced$oneOf;
var $stil4m$elm_syntax$Combine$choice = function (xs) {
	return function (state) {
		return $elm$parser$Parser$oneOf(
			A2(
				$elm$core$List$map,
				function (_v0) {
					var x = _v0;
					return x(state);
				},
				xs));
	};
};
var $stil4m$elm_syntax$Elm$Syntax$Declaration$Destructuring = F2(
	function (a, b) {
		return {$: 5, a: a, b: b};
	});
var $stil4m$elm_syntax$Elm$Syntax$Range$Range = F2(
	function (start, end) {
		return {a$: end, bg: start};
	});
var $elm$core$Maybe$map2 = F3(
	function (func, ma, mb) {
		if (ma.$ === 1) {
			return $elm$core$Maybe$Nothing;
		} else {
			var a = ma.a;
			if (mb.$ === 1) {
				return $elm$core$Maybe$Nothing;
			} else {
				var b = mb.a;
				return $elm$core$Maybe$Just(
					A2(func, a, b));
			}
		}
	});
var $stil4m$elm_syntax$Elm$Syntax$Range$sortLocations = $elm$core$List$sortWith($stil4m$elm_syntax$Elm$Syntax$Range$compareLocations);
var $stil4m$elm_syntax$Elm$Syntax$Range$combine = function (ranges) {
	var starts = $stil4m$elm_syntax$Elm$Syntax$Range$sortLocations(
		A2(
			$elm$core$List$map,
			function ($) {
				return $.bg;
			},
			ranges));
	var ends = $elm$core$List$reverse(
		$stil4m$elm_syntax$Elm$Syntax$Range$sortLocations(
			A2(
				$elm$core$List$map,
				function ($) {
					return $.a$;
				},
				ranges)));
	return A2(
		$elm$core$Maybe$withDefault,
		$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
		A3(
			$elm$core$Maybe$map2,
			$stil4m$elm_syntax$Elm$Syntax$Range$Range,
			$elm$core$List$head(starts),
			$elm$core$List$head(ends)));
};
var $stil4m$elm_syntax$Elm$Syntax$Node$combine = F3(
	function (f, a, b) {
		var r1 = a.a;
		var r2 = b.a;
		return A2(
			$stil4m$elm_syntax$Elm$Syntax$Node$Node,
			$stil4m$elm_syntax$Elm$Syntax$Range$combine(
				_List_fromArray(
					[r1, r2])),
			A2(f, a, b));
	});
var $stil4m$elm_syntax$Elm$Syntax$Expression$Application = function (a) {
	return {$: 1, a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Expression$CaseBlock = F2(
	function (expression, cases) {
		return {dS: cases, bN: expression};
	});
var $stil4m$elm_syntax$Elm$Syntax$Expression$CaseExpression = function (a) {
	return {$: 16, a: a};
};
var $stil4m$elm_syntax$Combine$Done = function (a) {
	return {$: 1, a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Expression$Function = F3(
	function (documentation, signature, declaration) {
		return {dZ: declaration, cg: documentation, ez: signature};
	});
var $stil4m$elm_syntax$Elm$Syntax$Expression$FunctionImplementation = F3(
	function (name, _arguments, expression) {
		return {cO: _arguments, bN: expression, aW: name};
	});
var $stil4m$elm_syntax$Elm$Syntax$Expression$IfBlock = F3(
	function (a, b, c) {
		return {$: 4, a: a, b: b, c: c};
	});
var $stil4m$elm_syntax$Elm$Syntax$Expression$Lambda = F2(
	function (args, expression) {
		return {dM: args, bN: expression};
	});
var $stil4m$elm_syntax$Elm$Syntax$Expression$LambdaExpression = function (a) {
	return {$: 17, a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Expression$LetBlock = F2(
	function (declarations, expression) {
		return {cW: declarations, bN: expression};
	});
var $stil4m$elm_syntax$Elm$Syntax$Expression$LetDestructuring = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $stil4m$elm_syntax$Elm$Syntax$Expression$LetExpression = function (a) {
	return {$: 15, a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Expression$LetFunction = function (a) {
	return {$: 0, a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Expression$ListExpr = function (a) {
	return {$: 19, a: a};
};
var $stil4m$elm_syntax$Combine$Loop = function (a) {
	return {$: 0, a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Expression$Negation = function (a) {
	return {$: 10, a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Expression$Operator = function (a) {
	return {$: 6, a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Expression$ParenthesizedExpression = function (a) {
	return {$: 14, a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Expression$PrefixOperator = function (a) {
	return {$: 5, a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Expression$RecordExpr = function (a) {
	return {$: 18, a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Expression$RecordUpdateExpression = F2(
	function (a, b) {
		return {$: 22, a: a, b: b};
	});
var $stil4m$elm_syntax$Elm$Syntax$Expression$TupledExpression = function (a) {
	return {$: 13, a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Expression$UnitExpr = {$: 0};
var $stil4m$elm_syntax$Combine$andThen = F2(
	function (f, _v0) {
		var p = _v0;
		return function (state) {
			return A2(
				$elm$parser$Parser$andThen,
				function (_v1) {
					var s = _v1.a;
					var a = _v1.b;
					return function (_v2) {
						var x = _v2;
						return x(s);
					}(
						f(a));
				},
				p(state));
		};
	});
var $elm$parser$Parser$Advanced$backtrackable = function (_v0) {
	var parse = _v0;
	return function (s0) {
		var _v1 = parse(s0);
		if (_v1.$ === 1) {
			var x = _v1.b;
			return A2($elm$parser$Parser$Advanced$Bad, false, x);
		} else {
			var a = _v1.b;
			var s1 = _v1.c;
			return A3($elm$parser$Parser$Advanced$Good, false, a, s1);
		}
	};
};
var $elm$parser$Parser$backtrackable = $elm$parser$Parser$Advanced$backtrackable;
var $stil4m$elm_syntax$Combine$backtrackable = function (_v0) {
	var p = _v0;
	return function (state) {
		return $elm$parser$Parser$backtrackable(
			p(state));
	};
};
var $elm$parser$Parser$Advanced$mapChompedString = F2(
	function (func, _v0) {
		var parse = _v0;
		return function (s0) {
			var _v1 = parse(s0);
			if (_v1.$ === 1) {
				var p = _v1.a;
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, p, x);
			} else {
				var p = _v1.a;
				var a = _v1.b;
				var s1 = _v1.c;
				return A3(
					$elm$parser$Parser$Advanced$Good,
					p,
					A2(
						func,
						A3($elm$core$String$slice, s0.b, s1.b, s0.a),
						a),
					s1);
			}
		};
	});
var $elm$parser$Parser$Advanced$getChompedString = function (parser) {
	return A2($elm$parser$Parser$Advanced$mapChompedString, $elm$core$Basics$always, parser);
};
var $elm$parser$Parser$getChompedString = $elm$parser$Parser$Advanced$getChompedString;
var $elm$parser$Parser$Expecting = function (a) {
	return {$: 0, a: a};
};
var $elm$parser$Parser$Advanced$Token = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$parser$Parser$toToken = function (str) {
	return A2(
		$elm$parser$Parser$Advanced$Token,
		str,
		$elm$parser$Parser$Expecting(str));
};
var $elm$parser$Parser$Advanced$AddRight = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $elm$parser$Parser$Advanced$DeadEnd = F4(
	function (row, col, problem, contextStack) {
		return {cU: col, dY: contextStack, dm: problem, aB: row};
	});
var $elm$parser$Parser$Advanced$fromState = F2(
	function (s, x) {
		return A2(
			$elm$parser$Parser$Advanced$AddRight,
			$elm$parser$Parser$Advanced$Empty,
			A4($elm$parser$Parser$Advanced$DeadEnd, s.aB, s.cU, x, s.f));
	});
var $elm$parser$Parser$Advanced$isSubString = _Parser_isSubString;
var $elm$parser$Parser$Advanced$token = function (_v0) {
	var str = _v0.a;
	var expecting = _v0.b;
	var progress = !$elm$core$String$isEmpty(str);
	return function (s) {
		var _v1 = A5($elm$parser$Parser$Advanced$isSubString, str, s.b, s.aB, s.cU, s.a);
		var newOffset = _v1.a;
		var newRow = _v1.b;
		var newCol = _v1.c;
		return _Utils_eq(newOffset, -1) ? A2(
			$elm$parser$Parser$Advanced$Bad,
			false,
			A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : A3(
			$elm$parser$Parser$Advanced$Good,
			progress,
			0,
			{cU: newCol, f: s.f, i: s.i, b: newOffset, aB: newRow, a: s.a});
	};
};
var $elm$parser$Parser$token = function (str) {
	return $elm$parser$Parser$Advanced$token(
		$elm$parser$Parser$toToken(str));
};
var $stil4m$elm_syntax$Combine$string = function (s) {
	return function (state) {
		return A2(
			$elm$parser$Parser$map,
			function (x) {
				return _Utils_Tuple2(state, x);
			},
			$elm$parser$Parser$getChompedString(
				$elm$parser$Parser$token(s)));
	};
};
var $stil4m$elm_syntax$Elm$Parser$Tokens$caseToken = $stil4m$elm_syntax$Combine$string('case');
var $stil4m$elm_syntax$Elm$Syntax$Expression$CharLiteral = function (a) {
	return {$: 12, a: a};
};
var $elm$parser$Parser$Problem = function (a) {
	return {$: 12, a: a};
};
var $elm$parser$Parser$Advanced$problem = function (x) {
	return function (s) {
		return A2(
			$elm$parser$Parser$Advanced$Bad,
			false,
			A2($elm$parser$Parser$Advanced$fromState, s, x));
	};
};
var $elm$parser$Parser$problem = function (msg) {
	return $elm$parser$Parser$Advanced$problem(
		$elm$parser$Parser$Problem(msg));
};
var $stil4m$elm_syntax$Combine$fail = function (m) {
	return function (state) {
		return A2(
			$elm$parser$Parser$map,
			function (x) {
				return _Utils_Tuple2(state, x);
			},
			$elm$parser$Parser$problem(m));
	};
};
var $elm$parser$Parser$UnexpectedChar = {$: 11};
var $elm$parser$Parser$Advanced$isSubChar = _Parser_isSubChar;
var $elm$parser$Parser$Advanced$chompIf = F2(
	function (isGood, expecting) {
		return function (s) {
			var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, s.b, s.a);
			return _Utils_eq(newOffset, -1) ? A2(
				$elm$parser$Parser$Advanced$Bad,
				false,
				A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : (_Utils_eq(newOffset, -2) ? A3(
				$elm$parser$Parser$Advanced$Good,
				true,
				0,
				{cU: 1, f: s.f, i: s.i, b: s.b + 1, aB: s.aB + 1, a: s.a}) : A3(
				$elm$parser$Parser$Advanced$Good,
				true,
				0,
				{cU: s.cU + 1, f: s.f, i: s.i, b: newOffset, aB: s.aB, a: s.a}));
		};
	});
var $elm$parser$Parser$chompIf = function (isGood) {
	return A2($elm$parser$Parser$Advanced$chompIf, isGood, $elm$parser$Parser$UnexpectedChar);
};
var $elm$parser$Parser$Advanced$map2 = F3(
	function (func, _v0, _v1) {
		var parseA = _v0;
		var parseB = _v1;
		return function (s0) {
			var _v2 = parseA(s0);
			if (_v2.$ === 1) {
				var p = _v2.a;
				var x = _v2.b;
				return A2($elm$parser$Parser$Advanced$Bad, p, x);
			} else {
				var p1 = _v2.a;
				var a = _v2.b;
				var s1 = _v2.c;
				var _v3 = parseB(s1);
				if (_v3.$ === 1) {
					var p2 = _v3.a;
					var x = _v3.b;
					return A2($elm$parser$Parser$Advanced$Bad, p1 || p2, x);
				} else {
					var p2 = _v3.a;
					var b = _v3.b;
					var s2 = _v3.c;
					return A3(
						$elm$parser$Parser$Advanced$Good,
						p1 || p2,
						A2(func, a, b),
						s2);
				}
			}
		};
	});
var $elm$parser$Parser$Advanced$keeper = F2(
	function (parseFunc, parseArg) {
		return A3($elm$parser$Parser$Advanced$map2, $elm$core$Basics$apL, parseFunc, parseArg);
	});
var $elm$parser$Parser$keeper = $elm$parser$Parser$Advanced$keeper;
var $stil4m$elm_syntax$Combine$fromCore = function (p) {
	return function (state) {
		return A2(
			$elm$parser$Parser$keeper,
			$elm$parser$Parser$succeed(
				function (v) {
					return _Utils_Tuple2(state, v);
				}),
			p);
	};
};
var $stil4m$elm_syntax$Combine$Char$satisfy = function (pred) {
	return $stil4m$elm_syntax$Combine$fromCore(
		A2(
			$elm$parser$Parser$andThen,
			function (s) {
				var _v0 = $elm$core$String$toList(s);
				if (!_v0.b) {
					return $elm$parser$Parser$succeed($elm$core$Maybe$Nothing);
				} else {
					var c = _v0.a;
					return $elm$parser$Parser$succeed(
						$elm$core$Maybe$Just(c));
				}
			},
			$elm$parser$Parser$getChompedString(
				$elm$parser$Parser$chompIf(pred))));
};
var $stil4m$elm_syntax$Combine$Char$anyChar = A2(
	$stil4m$elm_syntax$Combine$andThen,
	A2(
		$elm$core$Basics$composeR,
		$elm$core$Maybe$map($stil4m$elm_syntax$Combine$succeed),
		$elm$core$Maybe$withDefault(
			$stil4m$elm_syntax$Combine$fail('expected any character'))),
	$stil4m$elm_syntax$Combine$Char$satisfy(
		$elm$core$Basics$always(true)));
var $stil4m$elm_syntax$Combine$Char$char = function (c) {
	return A2(
		$stil4m$elm_syntax$Combine$andThen,
		A2(
			$elm$core$Basics$composeR,
			$elm$core$Maybe$map($stil4m$elm_syntax$Combine$succeed),
			$elm$core$Maybe$withDefault(
				$stil4m$elm_syntax$Combine$fail(
					'expected \'' + ($elm$core$String$fromList(
						_List_fromArray(
							[c])) + '\'')))),
		$stil4m$elm_syntax$Combine$Char$satisfy(
			$elm$core$Basics$eq(c)));
};
var $stil4m$elm_syntax$Combine$map = F2(
	function (f, _v0) {
		var p = _v0;
		return function (state) {
			return A2(
				$elm$parser$Parser$map,
				function (_v1) {
					var s = _v1.a;
					var a = _v1.b;
					return _Utils_Tuple2(
						s,
						f(a));
				},
				p(state));
		};
	});
var $stil4m$elm_syntax$Combine$continueWith = F2(
	function (target, dropped) {
		return A2(
			$stil4m$elm_syntax$Combine$andMap,
			target,
			A2(
				$stil4m$elm_syntax$Combine$map,
				F2(
					function (_v0, a) {
						return a;
					}),
				dropped));
	});
var $stil4m$elm_syntax$Combine$ignore = F2(
	function (dropped, target) {
		return A2(
			$stil4m$elm_syntax$Combine$andMap,
			dropped,
			A2($stil4m$elm_syntax$Combine$map, $elm$core$Basics$always, target));
	});
var $stil4m$elm_syntax$Combine$or = F2(
	function (_v0, _v1) {
		var lp = _v0;
		var rp = _v1;
		return function (state) {
			return $elm$parser$Parser$oneOf(
				_List_fromArray(
					[
						lp(state),
						rp(state)
					]));
		};
	});
var $elm$core$String$any = _String_any;
var $elm$parser$Parser$Advanced$chompWhileHelp = F5(
	function (isGood, offset, row, col, s0) {
		chompWhileHelp:
		while (true) {
			var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, offset, s0.a);
			if (_Utils_eq(newOffset, -1)) {
				return A3(
					$elm$parser$Parser$Advanced$Good,
					_Utils_cmp(s0.b, offset) < 0,
					0,
					{cU: col, f: s0.f, i: s0.i, b: offset, aB: row, a: s0.a});
			} else {
				if (_Utils_eq(newOffset, -2)) {
					var $temp$isGood = isGood,
						$temp$offset = offset + 1,
						$temp$row = row + 1,
						$temp$col = 1,
						$temp$s0 = s0;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					s0 = $temp$s0;
					continue chompWhileHelp;
				} else {
					var $temp$isGood = isGood,
						$temp$offset = newOffset,
						$temp$row = row,
						$temp$col = col + 1,
						$temp$s0 = s0;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					s0 = $temp$s0;
					continue chompWhileHelp;
				}
			}
		}
	});
var $elm$parser$Parser$Advanced$chompWhile = function (isGood) {
	return function (s) {
		return A5($elm$parser$Parser$Advanced$chompWhileHelp, isGood, s.b, s.aB, s.cU, s);
	};
};
var $elm$parser$Parser$chompWhile = $elm$parser$Parser$Advanced$chompWhile;
var $elm$core$Char$fromCode = _Char_fromCode;
var $elm$core$Basics$pow = _Basics_pow;
var $rtfeldman$elm_hex$Hex$fromStringHelp = F3(
	function (position, chars, accumulated) {
		fromStringHelp:
		while (true) {
			if (!chars.b) {
				return $elm$core$Result$Ok(accumulated);
			} else {
				var _char = chars.a;
				var rest = chars.b;
				switch (_char) {
					case '0':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated;
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '1':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + A2($elm$core$Basics$pow, 16, position);
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '2':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (2 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '3':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (3 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '4':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (4 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '5':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (5 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '6':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (6 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '7':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (7 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '8':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (8 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '9':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (9 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'a':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (10 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'b':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (11 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'c':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (12 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'd':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (13 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'e':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (14 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'f':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (15 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					default:
						var nonHex = _char;
						return $elm$core$Result$Err(
							$elm$core$String$fromChar(nonHex) + ' is not a valid hexadecimal character.');
				}
			}
		}
	});
var $elm$core$List$tail = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(xs);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $rtfeldman$elm_hex$Hex$fromString = function (str) {
	if ($elm$core$String$isEmpty(str)) {
		return $elm$core$Result$Err('Empty strings are not valid hexadecimal strings.');
	} else {
		var result = function () {
			if (A2($elm$core$String$startsWith, '-', str)) {
				var list = A2(
					$elm$core$Maybe$withDefault,
					_List_Nil,
					$elm$core$List$tail(
						$elm$core$String$toList(str)));
				return A2(
					$elm$core$Result$map,
					$elm$core$Basics$negate,
					A3(
						$rtfeldman$elm_hex$Hex$fromStringHelp,
						$elm$core$List$length(list) - 1,
						list,
						0));
			} else {
				return A3(
					$rtfeldman$elm_hex$Hex$fromStringHelp,
					$elm$core$String$length(str) - 1,
					$elm$core$String$toList(str),
					0);
			}
		}();
		var formatError = function (err) {
			return A2(
				$elm$core$String$join,
				' ',
				_List_fromArray(
					['\"' + (str + '\"'), 'is not a valid hexadecimal string because', err]));
		};
		return A2($elm$core$Result$mapError, formatError, result);
	}
};
var $elm$parser$Parser$Advanced$ignorer = F2(
	function (keepParser, ignoreParser) {
		return A3($elm$parser$Parser$Advanced$map2, $elm$core$Basics$always, keepParser, ignoreParser);
	});
var $elm$parser$Parser$ignorer = $elm$parser$Parser$Advanced$ignorer;
var $elm$parser$Parser$ExpectingSymbol = function (a) {
	return {$: 8, a: a};
};
var $elm$parser$Parser$Advanced$symbol = $elm$parser$Parser$Advanced$token;
var $elm$parser$Parser$symbol = function (str) {
	return $elm$parser$Parser$Advanced$symbol(
		A2(
			$elm$parser$Parser$Advanced$Token,
			str,
			$elm$parser$Parser$ExpectingSymbol(str)));
};
var $elm$core$Result$withDefault = F2(
	function (def, result) {
		if (!result.$) {
			var a = result.a;
			return a;
		} else {
			return def;
		}
	});
var $stil4m$elm_syntax$Elm$Parser$Tokens$escapedCharValue = $elm$parser$Parser$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed('\''),
			$elm$parser$Parser$symbol('\'')),
			A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed('\"'),
			$elm$parser$Parser$symbol('\"')),
			A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed('\n'),
			$elm$parser$Parser$symbol('n')),
			A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed('\t'),
			$elm$parser$Parser$symbol('t')),
			A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed('\u000D'),
			$elm$parser$Parser$symbol('r')),
			A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed('\\'),
			$elm$parser$Parser$symbol('\\')),
			A2(
			$elm$parser$Parser$keeper,
			A2(
				$elm$parser$Parser$ignorer,
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$succeed(
						A2(
							$elm$core$Basics$composeR,
							$elm$core$String$toLower,
							A2(
								$elm$core$Basics$composeR,
								$rtfeldman$elm_hex$Hex$fromString,
								A2(
									$elm$core$Basics$composeR,
									$elm$core$Result$withDefault(0),
									$elm$core$Char$fromCode)))),
					$elm$parser$Parser$symbol('u')),
				$elm$parser$Parser$symbol('{')),
			A2(
				$elm$parser$Parser$ignorer,
				$elm$parser$Parser$getChompedString(
					$elm$parser$Parser$chompWhile(
						function (c) {
							return A2(
								$elm$core$String$any,
								$elm$core$Basics$eq(c),
								'0123456789ABCDEFabcdef');
						})),
				$elm$parser$Parser$symbol('}')))
		]));
var $stil4m$elm_syntax$Elm$Parser$Tokens$quotedSingleQuote = $stil4m$elm_syntax$Combine$fromCore(
	A2(
		$elm$parser$Parser$keeper,
		A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed(
				A2(
					$elm$core$Basics$composeR,
					$elm$core$String$toList,
					A2(
						$elm$core$Basics$composeR,
						$elm$core$List$head,
						$elm$core$Maybe$withDefault(' ')))),
			$elm$parser$Parser$symbol('\'')),
		A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$oneOf(
				_List_fromArray(
					[
						A2(
						$elm$parser$Parser$keeper,
						A2(
							$elm$parser$Parser$ignorer,
							$elm$parser$Parser$succeed(
								A2($elm$core$Basics$composeR, $elm$core$List$singleton, $elm$core$String$fromList)),
							$elm$parser$Parser$symbol('\\')),
						$stil4m$elm_syntax$Elm$Parser$Tokens$escapedCharValue),
						$elm$parser$Parser$getChompedString(
						$elm$parser$Parser$chompIf(
							$elm$core$Basics$always(true)))
					])),
			$elm$parser$Parser$symbol('\''))));
var $stil4m$elm_syntax$Elm$Parser$Tokens$characterLiteral = A2(
	$stil4m$elm_syntax$Combine$or,
	$stil4m$elm_syntax$Elm$Parser$Tokens$quotedSingleQuote,
	A2(
		$stil4m$elm_syntax$Combine$ignore,
		$stil4m$elm_syntax$Combine$Char$char('\''),
		A2(
			$stil4m$elm_syntax$Combine$continueWith,
			$stil4m$elm_syntax$Combine$Char$anyChar,
			$stil4m$elm_syntax$Combine$Char$char('\''))));
var $stil4m$elm_syntax$Elm$Parser$Node$asPointerLocation = function (_v0) {
	var line = _v0.bw;
	var column = _v0.an;
	return {an: column, aB: line};
};
var $stil4m$elm_syntax$Combine$app = function (_v0) {
	var inner = _v0;
	return inner;
};
var $elm$parser$Parser$Advanced$getPosition = function (s) {
	return A3(
		$elm$parser$Parser$Advanced$Good,
		false,
		_Utils_Tuple2(s.aB, s.cU),
		s);
};
var $elm$parser$Parser$getPosition = $elm$parser$Parser$Advanced$getPosition;
var $stil4m$elm_syntax$Combine$withLocation = function (f) {
	return function (state) {
		return A2(
			$elm$parser$Parser$andThen,
			function (loc) {
				return A2(
					$stil4m$elm_syntax$Combine$app,
					f(loc),
					state);
			},
			A2(
				$elm$parser$Parser$map,
				function (_v0) {
					var row = _v0.a;
					var col = _v0.b;
					return {an: col, bw: row};
				},
				$elm$parser$Parser$getPosition));
	};
};
var $stil4m$elm_syntax$Elm$Parser$Node$parser = function (p) {
	return $stil4m$elm_syntax$Combine$withLocation(
		function (start) {
			return A2(
				$stil4m$elm_syntax$Combine$andMap,
				$stil4m$elm_syntax$Combine$withLocation(
					function (end) {
						return $stil4m$elm_syntax$Combine$succeed(
							{
								a$: $stil4m$elm_syntax$Elm$Parser$Node$asPointerLocation(end),
								bg: $stil4m$elm_syntax$Elm$Parser$Node$asPointerLocation(start)
							});
					}),
				A2(
					$stil4m$elm_syntax$Combine$andMap,
					p,
					$stil4m$elm_syntax$Combine$succeed(
						F2(
							function (v, r) {
								return A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, r, v);
							}))));
		});
};
var $stil4m$elm_syntax$Elm$Parser$Declarations$charLiteralExpression = $stil4m$elm_syntax$Elm$Parser$Node$parser(
	A2($stil4m$elm_syntax$Combine$map, $stil4m$elm_syntax$Elm$Syntax$Expression$CharLiteral, $stil4m$elm_syntax$Elm$Parser$Tokens$characterLiteral));
var $stil4m$elm_syntax$Elm$Parser$Tokens$elseToken = $stil4m$elm_syntax$Combine$string('else');
var $stil4m$elm_syntax$Elm$Parser$State$currentIndent = function (_v0) {
	var indents = _v0.aP;
	return A2(
		$elm$core$Maybe$withDefault,
		0,
		$elm$core$List$head(indents));
};
var $stil4m$elm_syntax$Elm$Parser$State$expectedColumn = A2(
	$elm$core$Basics$composeR,
	$stil4m$elm_syntax$Elm$Parser$State$currentIndent,
	$elm$core$Basics$add(1));
var $stil4m$elm_syntax$Elm$Syntax$Pattern$AllPattern = {$: 0};
var $stil4m$elm_syntax$Elm$Syntax$Pattern$AsPattern = F2(
	function (a, b) {
		return {$: 13, a: a, b: b};
	});
var $stil4m$elm_syntax$Elm$Syntax$Pattern$CharPattern = function (a) {
	return {$: 2, a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Pattern$ListPattern = function (a) {
	return {$: 10, a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Pattern$NamedPattern = F2(
	function (a, b) {
		return {$: 12, a: a, b: b};
	});
var $stil4m$elm_syntax$Elm$Syntax$Pattern$ParenthesizedPattern = function (a) {
	return {$: 14, a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Pattern$QualifiedNameRef = F2(
	function (moduleName, name) {
		return {b_: moduleName, aW: name};
	});
var $stil4m$elm_syntax$Elm$Syntax$Pattern$StringPattern = function (a) {
	return {$: 3, a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Pattern$TuplePattern = function (a) {
	return {$: 7, a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Pattern$UnConsPattern = F2(
	function (a, b) {
		return {$: 9, a: a, b: b};
	});
var $stil4m$elm_syntax$Elm$Syntax$Pattern$UnitPattern = {$: 1};
var $stil4m$elm_syntax$Combine$between = F3(
	function (lp, rp, p) {
		return A2(
			$stil4m$elm_syntax$Combine$ignore,
			rp,
			A2($stil4m$elm_syntax$Combine$continueWith, p, lp));
	});
var $elm$core$Basics$modBy = _Basics_modBy;
var $miniBill$elm_unicode$Unicode$isAlphaNum = function (c) {
	var code = $elm$core$Char$toCode(c);
	return (code < 256) ? (((code >= 48) && (code <= 57)) || (((code >= 65) && (code <= 90)) || (((code >= 97) && (code <= 122)) || ((code === 170) || (((code >= 178) && (code <= 179)) || ((code === 181) || (((code >= 185) && (code <= 186)) || (((code >= 188) && (code <= 190)) || (((code >= 192) && (code <= 214)) || (((code >= 216) && (code <= 246)) || ((code >= 248) && (code <= 255)))))))))))) : ((code < 42785) ? ((code < 4303) ? ((code < 2748) ? ((code < 1983) ? ((code < 1375) ? ((code < 894) ? (((code >= 256) && (code <= 705)) || (((code >= 710) && (code <= 721)) || (((code >= 736) && (code <= 740)) || (((code >= 880) && (code <= 884)) || (((code >= 886) && (code <= 887)) || (((code >= 890) && (code <= 893)) || ((!A2($elm$core$Basics$modBy, 2, code)) && ((code >= 748) && (code <= 750))))))))) : ((code === 895) || ((code === 902) || (((code >= 904) && (code <= 1013)) || (((code >= 1015) && (code <= 1153)) || (((code >= 1162) && (code <= 1327)) || (((code >= 1329) && (code <= 1366)) || (code === 1369)))))))) : ((code < 1764) ? (((code >= 1376) && (code <= 1416)) || (((code >= 1488) && (code <= 1522)) || (((code >= 1568) && (code <= 1610)) || (((code >= 1632) && (code <= 1641)) || (((code >= 1646) && (code <= 1647)) || (((code >= 1649) && (code <= 1747)) || (code === 1749))))))) : (((code >= 1765) && (code <= 1766)) || (((code >= 1774) && (code <= 1788)) || ((code === 1791) || ((code === 1808) || (((code >= 1810) && (code <= 1839)) || (((code >= 1869) && (code <= 1957)) || (code === 1969))))))))) : ((code < 2405) ? ((code < 2087) ? (((code >= 1984) && (code <= 2026)) || (((code >= 2036) && (code <= 2037)) || ((code === 2042) || (((code >= 2048) && (code <= 2069)) || ((code === 2074) || (code === 2084)))))) : ((code === 2088) || (((code >= 2112) && (code <= 2136)) || (((code >= 2144) && (code <= 2247)) || (((code >= 2308) && (code <= 2361)) || ((code === 2365) || ((code === 2384) || ((code >= 2392) && (code <= 2401))))))))) : ((code < 2547) ? (((code >= 2406) && (code <= 2415)) || (((code >= 2417) && (code <= 2432)) || (((code >= 2437) && (code <= 2489)) || ((code === 2493) || ((code === 2510) || (((code >= 2524) && (code <= 2529)) || ((code >= 2534) && (code <= 2545)))))))) : (((code >= 2548) && (code <= 2553)) || ((code === 2556) || (((code >= 2565) && (code <= 2617)) || (((code >= 2649) && (code <= 2654)) || (((code >= 2662) && (code <= 2671)) || (((code >= 2674) && (code <= 2676)) || ((code >= 2693) && (code <= 2745))))))))))) : ((code < 3429) ? ((code < 3159) ? ((code < 2907) ? ((code === 2749) || (((code >= 2768) && (code <= 2785)) || (((code >= 2790) && (code <= 2799)) || ((code === 2809) || (((code >= 2821) && (code <= 2873)) || (code === 2877)))))) : (((code >= 2908) && (code <= 2913)) || (((code >= 2918) && (code <= 2927)) || (((code >= 2929) && (code <= 2935)) || (((code >= 2947) && (code <= 3001)) || ((code === 3024) || (((code >= 3046) && (code <= 3058)) || ((code >= 3077) && (code <= 3133))))))))) : ((code < 3301) ? (((code >= 3160) && (code <= 3169)) || (((code >= 3174) && (code <= 3183)) || (((code >= 3192) && (code <= 3198)) || ((code === 3200) || (((code >= 3205) && (code <= 3257)) || ((code === 3261) || ((code >= 3294) && (code <= 3297)))))))) : (((code >= 3302) && (code <= 3311)) || (((code >= 3313) && (code <= 3314)) || (((code >= 3332) && (code <= 3386)) || ((code === 3389) || ((code === 3406) || (((code >= 3412) && (code <= 3414)) || ((code >= 3416) && (code <= 3425)))))))))) : ((code < 3871) ? ((code < 3663) ? (((code >= 3430) && (code <= 3448)) || (((code >= 3450) && (code <= 3455)) || (((code >= 3461) && (code <= 3526)) || (((code >= 3558) && (code <= 3567)) || (((code >= 3585) && (code <= 3632)) || (((code >= 3634) && (code <= 3635)) || ((code >= 3648) && (code <= 3654)))))))) : (((code >= 3664) && (code <= 3673)) || (((code >= 3713) && (code <= 3760)) || (((code >= 3762) && (code <= 3763)) || (((code >= 3773) && (code <= 3780)) || ((code === 3782) || (((code >= 3792) && (code <= 3801)) || ((code >= 3804) && (code <= 3840))))))))) : ((code < 4192) ? (((code >= 3872) && (code <= 3891)) || (((code >= 3904) && (code <= 3948)) || (((code >= 3976) && (code <= 3980)) || (((code >= 4096) && (code <= 4138)) || (((code >= 4159) && (code <= 4169)) || (((code >= 4176) && (code <= 4181)) || ((code >= 4186) && (code <= 4189)))))))) : ((code === 4193) || (((code >= 4197) && (code <= 4198)) || (((code >= 4206) && (code <= 4208)) || (((code >= 4213) && (code <= 4225)) || ((code === 4238) || (((code >= 4240) && (code <= 4249)) || ((code >= 4256) && (code <= 4301)))))))))))) : ((code < 8177) ? ((code < 6783) ? ((code < 5983) ? ((code < 5120) ? (((code >= 4304) && (code <= 4346)) || (((code >= 4348) && (code <= 4954)) || (((code >= 4969) && (code <= 4988)) || (((code >= 4992) && (code <= 5007)) || (((code >= 5024) && (code <= 5109)) || ((code >= 5112) && (code <= 5117))))))) : (((code >= 5121) && (code <= 5740)) || (((code >= 5743) && (code <= 5759)) || (((code >= 5761) && (code <= 5786)) || (((code >= 5792) && (code <= 5866)) || (((code >= 5870) && (code <= 5905)) || (((code >= 5920) && (code <= 5937)) || ((code >= 5952) && (code <= 5969))))))))) : ((code < 6175) ? (((code >= 5984) && (code <= 6000)) || (((code >= 6016) && (code <= 6067)) || ((code === 6103) || ((code === 6108) || (((code >= 6112) && (code <= 6121)) || (((code >= 6128) && (code <= 6137)) || ((code >= 6160) && (code <= 6169)))))))) : (((code >= 6176) && (code <= 6276)) || (((code >= 6279) && (code <= 6312)) || (((code >= 6314) && (code <= 6430)) || (((code >= 6470) && (code <= 6601)) || (((code >= 6608) && (code <= 6618)) || (((code >= 6656) && (code <= 6678)) || ((code >= 6688) && (code <= 6740)))))))))) : ((code < 7405) ? ((code < 7085) ? (((code >= 6784) && (code <= 6809)) || ((code === 6823) || (((code >= 6917) && (code <= 6963)) || (((code >= 6981) && (code <= 6987)) || (((code >= 6992) && (code <= 7001)) || ((code >= 7043) && (code <= 7072))))))) : (((code >= 7086) && (code <= 7141)) || (((code >= 7168) && (code <= 7203)) || (((code >= 7232) && (code <= 7241)) || (((code >= 7245) && (code <= 7293)) || (((code >= 7296) && (code <= 7304)) || (((code >= 7312) && (code <= 7359)) || ((code >= 7401) && (code <= 7404))))))))) : ((code < 8007) ? (((code >= 7406) && (code <= 7411)) || (((code >= 7413) && (code <= 7414)) || ((code === 7418) || (((code >= 7424) && (code <= 7615)) || (((code >= 7680) && (code <= 7957)) || (((code >= 7960) && (code <= 7965)) || ((code >= 7968) && (code <= 8005)))))))) : (((code >= 8008) && (code <= 8013)) || (((code >= 8016) && (code <= 8023)) || (((code >= 8025) && (code <= 8124)) || ((code === 8126) || (((code >= 8130) && (code <= 8140)) || (((code >= 8144) && (code <= 8155)) || ((code >= 8160) && (code <= 8172))))))))))) : ((code < 11630) ? ((code < 8516) ? ((code < 8454) ? (((code >= 8178) && (code <= 8188)) || (((code >= 8304) && (code <= 8305)) || (((code >= 8308) && (code <= 8313)) || (((code >= 8319) && (code <= 8329)) || (((code >= 8336) && (code <= 8348)) || (code === 8450)))))) : ((code === 8455) || (((code >= 8458) && (code <= 8467)) || ((code === 8469) || (((code >= 8473) && (code <= 8477)) || (((code >= 8490) && (code <= 8493)) || (((code >= 8495) && (code <= 8505)) || (((code >= 8508) && (code <= 8511)) || ((!A2($elm$core$Basics$modBy, 2, code)) && ((code >= 8484) && (code <= 8488))))))))))) : ((code < 11311) ? (((code >= 8517) && (code <= 8521)) || ((code === 8526) || (((code >= 8528) && (code <= 8585)) || (((code >= 9312) && (code <= 9371)) || (((code >= 9450) && (code <= 9471)) || (((code >= 10102) && (code <= 10131)) || ((code >= 11264) && (code <= 11310)))))))) : (((code >= 11312) && (code <= 11358)) || (((code >= 11360) && (code <= 11492)) || (((code >= 11499) && (code <= 11502)) || (((code >= 11506) && (code <= 11507)) || ((code === 11517) || (((code >= 11520) && (code <= 11565)) || ((code >= 11568) && (code <= 11623)))))))))) : ((code < 12831) ? ((code < 12352) ? ((code === 11631) || (((code >= 11648) && (code <= 11742)) || ((code === 11823) || (((code >= 12293) && (code <= 12295)) || (((code >= 12321) && (code <= 12329)) || (((code >= 12337) && (code <= 12341)) || ((code >= 12344) && (code <= 12348)))))))) : (((code >= 12353) && (code <= 12438)) || (((code >= 12445) && (code <= 12447)) || (((code >= 12449) && (code <= 12538)) || (((code >= 12540) && (code <= 12686)) || (((code >= 12690) && (code <= 12693)) || (((code >= 12704) && (code <= 12735)) || ((code >= 12784) && (code <= 12799))))))))) : ((code < 42191) ? (((code >= 12832) && (code <= 12841)) || (((code >= 12872) && (code <= 12879)) || (((code >= 12881) && (code <= 12895)) || (((code >= 12928) && (code <= 12937)) || (((code >= 12977) && (code <= 12991)) || (((code >= 13312) && (code <= 19903)) || ((code >= 19968) && (code <= 42124)))))))) : (((code >= 42192) && (code <= 42237)) || (((code >= 42240) && (code <= 42508)) || (((code >= 42512) && (code <= 42539)) || (((code >= 42560) && (code <= 42606)) || (((code >= 42623) && (code <= 42653)) || (((code >= 42656) && (code <= 42735)) || ((code >= 42775) && (code <= 42783))))))))))))) : ((code < 69958) ? ((code < 65855) ? ((code < 43696) ? ((code < 43260) ? ((code < 43019) ? (((code >= 42786) && (code <= 42888)) || (((code >= 42891) && (code <= 42943)) || (((code >= 42946) && (code <= 42954)) || (((code >= 42997) && (code <= 43009)) || (((code >= 43011) && (code <= 43013)) || ((code >= 43015) && (code <= 43018))))))) : (((code >= 43020) && (code <= 43042)) || (((code >= 43056) && (code <= 43061)) || (((code >= 43072) && (code <= 43123)) || (((code >= 43138) && (code <= 43187)) || (((code >= 43216) && (code <= 43225)) || (((code >= 43250) && (code <= 43255)) || (code === 43259)))))))) : ((code < 43493) ? (((code >= 43261) && (code <= 43262)) || (((code >= 43264) && (code <= 43301)) || (((code >= 43312) && (code <= 43334)) || (((code >= 43360) && (code <= 43388)) || (((code >= 43396) && (code <= 43442)) || (((code >= 43471) && (code <= 43481)) || ((code >= 43488) && (code <= 43492)))))))) : (((code >= 43494) && (code <= 43560)) || (((code >= 43584) && (code <= 43586)) || (((code >= 43588) && (code <= 43595)) || (((code >= 43600) && (code <= 43609)) || (((code >= 43616) && (code <= 43638)) || ((code === 43642) || ((code >= 43646) && (code <= 43695)))))))))) : ((code < 63743) ? ((code < 43761) ? ((code === 43697) || (((code >= 43701) && (code <= 43702)) || (((code >= 43705) && (code <= 43709)) || ((code === 43712) || (((code >= 43714) && (code <= 43741)) || ((code >= 43744) && (code <= 43754))))))) : (((code >= 43762) && (code <= 43764)) || (((code >= 43777) && (code <= 43822)) || (((code >= 43824) && (code <= 43866)) || (((code >= 43868) && (code <= 43881)) || (((code >= 43888) && (code <= 44002)) || (((code >= 44016) && (code <= 44025)) || ((code >= 44032) && (code <= 55291))))))))) : ((code < 65135) ? (((code >= 63744) && (code <= 64217)) || (((code >= 64256) && (code <= 64279)) || ((code === 64285) || (((code >= 64287) && (code <= 64296)) || (((code >= 64298) && (code <= 64433)) || (((code >= 64467) && (code <= 64829)) || ((code >= 64848) && (code <= 65019)))))))) : (((code >= 65136) && (code <= 65276)) || (((code >= 65296) && (code <= 65305)) || (((code >= 65313) && (code <= 65338)) || (((code >= 65345) && (code <= 65370)) || (((code >= 65382) && (code <= 65500)) || (((code >= 65536) && (code <= 65786)) || ((code >= 65799) && (code <= 65843))))))))))) : ((code < 68223) ? ((code < 66775) ? ((code < 66383) ? (((code >= 65856) && (code <= 65912)) || (((code >= 65930) && (code <= 65931)) || (((code >= 66176) && (code <= 66256)) || (((code >= 66273) && (code <= 66299)) || (((code >= 66304) && (code <= 66339)) || ((code >= 66349) && (code <= 66378))))))) : (((code >= 66384) && (code <= 66421)) || (((code >= 66432) && (code <= 66461)) || (((code >= 66464) && (code <= 66511)) || (((code >= 66513) && (code <= 66517)) || (((code >= 66560) && (code <= 66717)) || (((code >= 66720) && (code <= 66729)) || ((code >= 66736) && (code <= 66771))))))))) : ((code < 67834) ? (((code >= 66776) && (code <= 66811)) || (((code >= 66816) && (code <= 66915)) || (((code >= 67072) && (code <= 67669)) || (((code >= 67672) && (code <= 67702)) || (((code >= 67705) && (code <= 67742)) || (((code >= 67751) && (code <= 67759)) || ((code >= 67808) && (code <= 67829)))))))) : (((code >= 67835) && (code <= 67867)) || (((code >= 67872) && (code <= 67897)) || (((code >= 67968) && (code <= 68023)) || (((code >= 68028) && (code <= 68096)) || (((code >= 68112) && (code <= 68149)) || (((code >= 68160) && (code <= 68168)) || ((code >= 68192) && (code <= 68222)))))))))) : ((code < 69215) ? ((code < 68471) ? (((code >= 68224) && (code <= 68255)) || (((code >= 68288) && (code <= 68295)) || (((code >= 68297) && (code <= 68324)) || (((code >= 68331) && (code <= 68335)) || (((code >= 68352) && (code <= 68405)) || (((code >= 68416) && (code <= 68437)) || ((code >= 68440) && (code <= 68466)))))))) : (((code >= 68472) && (code <= 68497)) || (((code >= 68521) && (code <= 68527)) || (((code >= 68608) && (code <= 68680)) || (((code >= 68736) && (code <= 68786)) || (((code >= 68800) && (code <= 68850)) || (((code >= 68858) && (code <= 68899)) || ((code >= 68912) && (code <= 68921))))))))) : ((code < 69713) ? (((code >= 69216) && (code <= 69246)) || (((code >= 69248) && (code <= 69289)) || (((code >= 69296) && (code <= 69445)) || (((code >= 69457) && (code <= 69460)) || (((code >= 69552) && (code <= 69579)) || (((code >= 69600) && (code <= 69622)) || ((code >= 69635) && (code <= 69687)))))))) : (((code >= 69714) && (code <= 69743)) || (((code >= 69763) && (code <= 69807)) || (((code >= 69840) && (code <= 69864)) || (((code >= 69872) && (code <= 69881)) || (((code >= 69891) && (code <= 69926)) || (((code >= 69942) && (code <= 69951)) || (code === 69956))))))))))) : ((code < 73647) ? ((code < 71295) ? ((code < 70479) ? ((code < 70112) ? (((code >= 69959) && (code <= 70002)) || ((code === 70006) || (((code >= 70019) && (code <= 70066)) || (((code >= 70081) && (code <= 70084)) || (((code >= 70096) && (code <= 70106)) || (code === 70108)))))) : (((code >= 70113) && (code <= 70132)) || (((code >= 70144) && (code <= 70187)) || (((code >= 70272) && (code <= 70312)) || (((code >= 70320) && (code <= 70366)) || (((code >= 70384) && (code <= 70393)) || (((code >= 70405) && (code <= 70457)) || (code === 70461)))))))) : ((code < 70854) ? ((code === 70480) || (((code >= 70493) && (code <= 70497)) || (((code >= 70656) && (code <= 70708)) || (((code >= 70727) && (code <= 70730)) || (((code >= 70736) && (code <= 70745)) || (((code >= 70751) && (code <= 70831)) || ((code >= 70852) && (code <= 70853)))))))) : ((code === 70855) || (((code >= 70864) && (code <= 70873)) || (((code >= 71040) && (code <= 71086)) || (((code >= 71128) && (code <= 71131)) || (((code >= 71168) && (code <= 71215)) || ((code === 71236) || ((code >= 71248) && (code <= 71257)))))))))) : ((code < 72271) ? ((code < 71839) ? (((code >= 71296) && (code <= 71338)) || ((code === 71352) || (((code >= 71360) && (code <= 71369)) || (((code >= 71424) && (code <= 71450)) || (((code >= 71472) && (code <= 71483)) || ((code >= 71680) && (code <= 71723))))))) : (((code >= 71840) && (code <= 71922)) || (((code >= 71935) && (code <= 71983)) || (((code >= 72016) && (code <= 72025)) || (((code >= 72096) && (code <= 72144)) || ((code === 72192) || (((code >= 72203) && (code <= 72242)) || ((code === 72250) || ((A2($elm$core$Basics$modBy, 2, code) === 1) && (((code >= 71999) && (code <= 72001)) || ((code >= 72161) && (code <= 72163)))))))))))) : ((code < 72959) ? ((code === 72272) || (((code >= 72284) && (code <= 72329)) || ((code === 72349) || (((code >= 72384) && (code <= 72750)) || ((code === 72768) || (((code >= 72784) && (code <= 72812)) || ((code >= 72818) && (code <= 72847)))))))) : (((code >= 72960) && (code <= 73008)) || ((code === 73030) || (((code >= 73040) && (code <= 73049)) || (((code >= 73056) && (code <= 73097)) || ((code === 73112) || (((code >= 73120) && (code <= 73129)) || ((code >= 73440) && (code <= 73458))))))))))) : ((code < 120571) ? ((code < 93759) ? ((code < 92767) ? ((code === 73648) || (((code >= 73664) && (code <= 73684)) || (((code >= 73728) && (code <= 74649)) || (((code >= 74752) && (code <= 74862)) || (((code >= 74880) && (code <= 78894)) || ((code >= 82944) && (code <= 92766))))))) : (((code >= 92768) && (code <= 92777)) || (((code >= 92880) && (code <= 92909)) || (((code >= 92928) && (code <= 92975)) || (((code >= 92992) && (code <= 92995)) || (((code >= 93008) && (code <= 93017)) || (((code >= 93019) && (code <= 93025)) || ((code >= 93027) && (code <= 93071))))))))) : ((code < 119647) ? (((code >= 93760) && (code <= 93846)) || (((code >= 93952) && (code <= 94026)) || ((code === 94032) || (((code >= 94099) && (code <= 94177)) || ((code === 94179) || (((code >= 94208) && (code <= 113817)) || ((code >= 119520) && (code <= 119539)))))))) : (((code >= 119648) && (code <= 119672)) || (((code >= 119808) && (code <= 120092)) || (((code >= 120094) && (code <= 120144)) || (((code >= 120146) && (code <= 120485)) || (((code >= 120488) && (code <= 120512)) || (((code >= 120514) && (code <= 120538)) || ((code >= 120540) && (code <= 120570)))))))))) : ((code < 123631) ? ((code < 120771) ? (((code >= 120572) && (code <= 120596)) || (((code >= 120598) && (code <= 120628)) || (((code >= 120630) && (code <= 120654)) || (((code >= 120656) && (code <= 120686)) || (((code >= 120688) && (code <= 120712)) || (((code >= 120714) && (code <= 120744)) || ((code >= 120746) && (code <= 120770)))))))) : (((code >= 120772) && (code <= 120779)) || (((code >= 120782) && (code <= 120831)) || (((code >= 123136) && (code <= 123180)) || (((code >= 123191) && (code <= 123197)) || (((code >= 123200) && (code <= 123209)) || ((code === 123214) || ((code >= 123584) && (code <= 123627))))))))) : ((code < 126124) ? (((code >= 123632) && (code <= 123641)) || (((code >= 124928) && (code <= 125124)) || (((code >= 125127) && (code <= 125135)) || (((code >= 125184) && (code <= 125251)) || ((code === 125259) || (((code >= 125264) && (code <= 125273)) || ((code >= 126065) && (code <= 126123)))))))) : (((code >= 126125) && (code <= 126127)) || (((code >= 126129) && (code <= 126253)) || (((code >= 126255) && (code <= 126269)) || (((code >= 126464) && (code <= 126651)) || (((code >= 127232) && (code <= 127244)) || (((code >= 130032) && (code <= 130041)) || ((code >= 131072) && (code <= 201546))))))))))))));
};
var $miniBill$elm_unicode$Unicode$isLower = function (c) {
	var code = $elm$core$Char$toCode(c);
	return (code < 256) ? (((code >= 97) && (code <= 122)) || ((code === 181) || (((code >= 223) && (code <= 246)) || ((code >= 248) && (code <= 255))))) : ((code < 8457) ? ((code < 1006) ? ((code < 453) ? ((code < 408) ? (((code >= 311) && (code <= 312)) || (((code >= 328) && (code <= 329)) || (((code >= 382) && (code <= 384)) || ((code === 392) || (((code >= 396) && (code <= 397)) || ((code === 402) || ((code === 405) || ((!A2($elm$core$Basics$modBy, 2, code)) ? (((code >= 314) && (code <= 326)) || ((code >= 378) && (code <= 380))) : (((code >= 257) && (code <= 309)) || (((code >= 331) && (code <= 375)) || ((code >= 387) && (code <= 389)))))))))))) : (((code >= 409) && (code <= 411)) || ((code === 414) || ((code === 424) || (((code >= 426) && (code <= 427)) || ((code === 429) || ((code === 432) || (((code >= 441) && (code <= 442)) || (((code >= 445) && (code <= 447)) || ((!A2($elm$core$Basics$modBy, 2, code)) ? ((code >= 436) && (code <= 438)) : ((code >= 417) && (code <= 421)))))))))))) : ((code < 590) ? ((code === 454) || ((code === 457) || (((code >= 476) && (code <= 477)) || (((code >= 495) && (code <= 496)) || (((code >= 563) && (code <= 569)) || ((code === 572) || (((code >= 575) && (code <= 576)) || ((code === 578) || ((!A2($elm$core$Basics$modBy, 2, code)) ? ((code >= 460) && (code <= 474)) : (((code >= 479) && (code <= 493)) || (((code >= 499) && (code <= 501)) || (((code >= 505) && (code <= 561)) || ((code >= 583) && (code <= 589)))))))))))))) : (((code >= 591) && (code <= 659)) || (((code >= 661) && (code <= 687)) || ((code === 887) || (((code >= 891) && (code <= 893)) || ((code === 912) || (((code >= 940) && (code <= 974)) || (((code >= 976) && (code <= 977)) || (((code >= 981) && (code <= 983)) || ((A2($elm$core$Basics$modBy, 2, code) === 1) && (((code >= 881) && (code <= 883)) || ((code >= 985) && (code <= 1005)))))))))))))) : ((code < 7934) ? ((code < 4303) ? (((code >= 1007) && (code <= 1011)) || ((code === 1013) || ((code === 1016) || (((code >= 1019) && (code <= 1020)) || (((code >= 1072) && (code <= 1119)) || (((code >= 1230) && (code <= 1231)) || (((code >= 1376) && (code <= 1416)) || ((!A2($elm$core$Basics$modBy, 2, code)) ? ((code >= 1218) && (code <= 1228)) : (((code >= 1121) && (code <= 1153)) || (((code >= 1163) && (code <= 1215)) || ((code >= 1233) && (code <= 1327)))))))))))) : (((code >= 4304) && (code <= 4346)) || (((code >= 4349) && (code <= 4351)) || (((code >= 5112) && (code <= 5117)) || (((code >= 7296) && (code <= 7304)) || (((code >= 7424) && (code <= 7467)) || (((code >= 7531) && (code <= 7543)) || (((code >= 7545) && (code <= 7578)) || (((code >= 7829) && (code <= 7837)) || ((A2($elm$core$Basics$modBy, 2, code) === 1) && (((code >= 7681) && (code <= 7827)) || ((code >= 7839) && (code <= 7933))))))))))))) : ((code < 8079) ? (((code >= 7935) && (code <= 7943)) || (((code >= 7952) && (code <= 7957)) || (((code >= 7968) && (code <= 7975)) || (((code >= 7984) && (code <= 7991)) || (((code >= 8000) && (code <= 8005)) || (((code >= 8016) && (code <= 8023)) || (((code >= 8032) && (code <= 8039)) || ((code >= 8048) && (code <= 8071))))))))) : (((code >= 8080) && (code <= 8087)) || (((code >= 8096) && (code <= 8103)) || (((code >= 8112) && (code <= 8119)) || ((code === 8126) || (((code >= 8130) && (code <= 8135)) || (((code >= 8144) && (code <= 8151)) || (((code >= 8160) && (code <= 8167)) || ((code >= 8178) && (code <= 8183)))))))))))) : ((code < 65344) ? ((code < 11381) ? ((code < 8517) ? ((code === 8458) || (((code >= 8462) && (code <= 8463)) || ((code === 8467) || ((code === 8495) || ((code === 8500) || ((code === 8505) || ((code >= 8508) && (code <= 8509)))))))) : (((code >= 8518) && (code <= 8521)) || ((code === 8526) || ((code === 8580) || (((code >= 11312) && (code <= 11358)) || ((code === 11361) || (((code >= 11365) && (code <= 11366)) || ((code === 11377) || (((code >= 11379) && (code <= 11380)) || ((!A2($elm$core$Basics$modBy, 2, code)) && ((code >= 11368) && (code <= 11372)))))))))))) : ((code < 42926) ? (((code >= 11382) && (code <= 11387)) || (((code >= 11491) && (code <= 11492)) || ((code === 11507) || (((code >= 11520) && (code <= 11565)) || (((code >= 42799) && (code <= 42801)) || (((code >= 42865) && (code <= 42872)) || ((code === 42897) || (((code >= 42899) && (code <= 42901)) || ((!A2($elm$core$Basics$modBy, 2, code)) ? (((code >= 11500) && (code <= 11502)) || (((code >= 42874) && (code <= 42876)) || ((code >= 42892) && (code <= 42894)))) : (((code >= 11393) && (code <= 11489)) || (((code >= 42561) && (code <= 42605)) || (((code >= 42625) && (code <= 42651)) || (((code >= 42787) && (code <= 42797)) || (((code >= 42803) && (code <= 42863)) || (((code >= 42879) && (code <= 42887)) || ((code >= 42903) && (code <= 42921))))))))))))))))) : ((code === 42927) || ((code === 42947) || ((code === 42998) || ((code === 43002) || (((code >= 43824) && (code <= 43866)) || (((code >= 43872) && (code <= 43880)) || (((code >= 43888) && (code <= 43967)) || (((code >= 64256) && (code <= 64279)) || ((!A2($elm$core$Basics$modBy, 2, code)) ? ((code >= 42952) && (code <= 42954)) : ((code >= 42933) && (code <= 42943))))))))))))) : ((code < 120301) ? ((code < 119885) ? (((code >= 65345) && (code <= 65370)) || (((code >= 66600) && (code <= 66639)) || (((code >= 66776) && (code <= 66811)) || (((code >= 68800) && (code <= 68850)) || (((code >= 71872) && (code <= 71903)) || (((code >= 93792) && (code <= 93823)) || ((code >= 119834) && (code <= 119859)))))))) : (((code >= 119886) && (code <= 119911)) || (((code >= 119938) && (code <= 119963)) || (((code >= 119990) && (code <= 120015)) || (((code >= 120042) && (code <= 120067)) || (((code >= 120094) && (code <= 120119)) || (((code >= 120146) && (code <= 120171)) || (((code >= 120198) && (code <= 120223)) || ((code >= 120250) && (code <= 120275)))))))))) : ((code < 120629) ? (((code >= 120302) && (code <= 120327)) || (((code >= 120354) && (code <= 120379)) || (((code >= 120406) && (code <= 120431)) || (((code >= 120458) && (code <= 120485)) || (((code >= 120514) && (code <= 120538)) || (((code >= 120540) && (code <= 120545)) || (((code >= 120572) && (code <= 120596)) || ((code >= 120598) && (code <= 120603))))))))) : (((code >= 120630) && (code <= 120654)) || (((code >= 120656) && (code <= 120661)) || (((code >= 120688) && (code <= 120712)) || (((code >= 120714) && (code <= 120719)) || (((code >= 120746) && (code <= 120770)) || (((code >= 120772) && (code <= 120777)) || ((code === 120779) || ((code >= 125218) && (code <= 125251)))))))))))));
};
var $stil4m$elm_syntax$Elm$Parser$Tokens$reservedList = _List_fromArray(
	['module', 'exposing', 'import', 'as', 'if', 'then', 'else', 'let', 'in', 'case', 'of', 'port', 'type', 'where']);
var $elm$parser$Parser$ExpectingVariable = {$: 7};
var $elm$parser$Parser$Advanced$varHelp = F7(
	function (isGood, offset, row, col, src, indent, context) {
		varHelp:
		while (true) {
			var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, offset, src);
			if (_Utils_eq(newOffset, -1)) {
				return {cU: col, f: context, i: indent, b: offset, aB: row, a: src};
			} else {
				if (_Utils_eq(newOffset, -2)) {
					var $temp$isGood = isGood,
						$temp$offset = offset + 1,
						$temp$row = row + 1,
						$temp$col = 1,
						$temp$src = src,
						$temp$indent = indent,
						$temp$context = context;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					src = $temp$src;
					indent = $temp$indent;
					context = $temp$context;
					continue varHelp;
				} else {
					var $temp$isGood = isGood,
						$temp$offset = newOffset,
						$temp$row = row,
						$temp$col = col + 1,
						$temp$src = src,
						$temp$indent = indent,
						$temp$context = context;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					src = $temp$src;
					indent = $temp$indent;
					context = $temp$context;
					continue varHelp;
				}
			}
		}
	});
var $elm$parser$Parser$Advanced$variable = function (i) {
	return function (s) {
		var firstOffset = A3($elm$parser$Parser$Advanced$isSubChar, i.bg, s.b, s.a);
		if (_Utils_eq(firstOffset, -1)) {
			return A2(
				$elm$parser$Parser$Advanced$Bad,
				false,
				A2($elm$parser$Parser$Advanced$fromState, s, i.c0));
		} else {
			var s1 = _Utils_eq(firstOffset, -2) ? A7($elm$parser$Parser$Advanced$varHelp, i.da, s.b + 1, s.aB + 1, 1, s.a, s.i, s.f) : A7($elm$parser$Parser$Advanced$varHelp, i.da, firstOffset, s.aB, s.cU + 1, s.a, s.i, s.f);
			var name = A3($elm$core$String$slice, s.b, s1.b, s.a);
			return A2($elm$core$Set$member, name, i.dp) ? A2(
				$elm$parser$Parser$Advanced$Bad,
				false,
				A2($elm$parser$Parser$Advanced$fromState, s, i.c0)) : A3($elm$parser$Parser$Advanced$Good, true, name, s1);
		}
	};
};
var $elm$parser$Parser$variable = function (i) {
	return $elm$parser$Parser$Advanced$variable(
		{c0: $elm$parser$Parser$ExpectingVariable, da: i.da, dp: i.dp, bg: i.bg});
};
var $stil4m$elm_syntax$Elm$Parser$Tokens$functionName = $stil4m$elm_syntax$Combine$fromCore(
	$elm$parser$Parser$variable(
		{
			da: function (c) {
				return $miniBill$elm_unicode$Unicode$isAlphaNum(c) || (c === '_');
			},
			dp: $elm$core$Set$fromList($stil4m$elm_syntax$Elm$Parser$Tokens$reservedList),
			bg: $miniBill$elm_unicode$Unicode$isLower
		}));
var $elm$parser$Parser$ExpectingKeyword = function (a) {
	return {$: 9, a: a};
};
var $elm$parser$Parser$Advanced$keyword = function (_v0) {
	var kwd = _v0.a;
	var expecting = _v0.b;
	var progress = !$elm$core$String$isEmpty(kwd);
	return function (s) {
		var _v1 = A5($elm$parser$Parser$Advanced$isSubString, kwd, s.b, s.aB, s.cU, s.a);
		var newOffset = _v1.a;
		var newRow = _v1.b;
		var newCol = _v1.c;
		return (_Utils_eq(newOffset, -1) || (0 <= A3(
			$elm$parser$Parser$Advanced$isSubChar,
			function (c) {
				return $elm$core$Char$isAlphaNum(c) || (c === '_');
			},
			newOffset,
			s.a))) ? A2(
			$elm$parser$Parser$Advanced$Bad,
			false,
			A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : A3(
			$elm$parser$Parser$Advanced$Good,
			progress,
			0,
			{cU: newCol, f: s.f, i: s.i, b: newOffset, aB: newRow, a: s.a});
	};
};
var $elm$parser$Parser$keyword = function (kwd) {
	return $elm$parser$Parser$Advanced$keyword(
		A2(
			$elm$parser$Parser$Advanced$Token,
			kwd,
			$elm$parser$Parser$ExpectingKeyword(kwd)));
};
var $elm$parser$Parser$Advanced$lazy = function (thunk) {
	return function (s) {
		var _v0 = thunk(0);
		var parse = _v0;
		return parse(s);
	};
};
var $elm$parser$Parser$lazy = $elm$parser$Parser$Advanced$lazy;
var $stil4m$elm_syntax$Combine$lazy = function (t) {
	return function (state) {
		return $elm$parser$Parser$lazy(
			function (_v0) {
				return function (_v1) {
					var t_ = _v1;
					return t_(state);
				}(
					t(0));
			});
	};
};
var $elm$parser$Parser$Nestable = 1;
var $elm$parser$Parser$Advanced$findSubString = _Parser_findSubString;
var $elm$parser$Parser$Advanced$fromInfo = F4(
	function (row, col, x, context) {
		return A2(
			$elm$parser$Parser$Advanced$AddRight,
			$elm$parser$Parser$Advanced$Empty,
			A4($elm$parser$Parser$Advanced$DeadEnd, row, col, x, context));
	});
var $elm$parser$Parser$Advanced$chompUntil = function (_v0) {
	var str = _v0.a;
	var expecting = _v0.b;
	return function (s) {
		var _v1 = A5($elm$parser$Parser$Advanced$findSubString, str, s.b, s.aB, s.cU, s.a);
		var newOffset = _v1.a;
		var newRow = _v1.b;
		var newCol = _v1.c;
		return _Utils_eq(newOffset, -1) ? A2(
			$elm$parser$Parser$Advanced$Bad,
			false,
			A4($elm$parser$Parser$Advanced$fromInfo, newRow, newCol, expecting, s.f)) : A3(
			$elm$parser$Parser$Advanced$Good,
			_Utils_cmp(s.b, newOffset) < 0,
			0,
			{cU: newCol, f: s.f, i: s.i, b: newOffset, aB: newRow, a: s.a});
	};
};
var $elm$parser$Parser$Advanced$isChar = function (_char) {
	return true;
};
var $elm$parser$Parser$Advanced$revAlways = F2(
	function (_v0, b) {
		return b;
	});
var $elm$parser$Parser$Advanced$skip = F2(
	function (iParser, kParser) {
		return A3($elm$parser$Parser$Advanced$map2, $elm$parser$Parser$Advanced$revAlways, iParser, kParser);
	});
var $elm$parser$Parser$Advanced$nestableHelp = F5(
	function (isNotRelevant, open, close, expectingClose, nestLevel) {
		return A2(
			$elm$parser$Parser$Advanced$skip,
			$elm$parser$Parser$Advanced$chompWhile(isNotRelevant),
			$elm$parser$Parser$Advanced$oneOf(
				_List_fromArray(
					[
						(nestLevel === 1) ? close : A2(
						$elm$parser$Parser$Advanced$andThen,
						function (_v0) {
							return A5($elm$parser$Parser$Advanced$nestableHelp, isNotRelevant, open, close, expectingClose, nestLevel - 1);
						},
						close),
						A2(
						$elm$parser$Parser$Advanced$andThen,
						function (_v1) {
							return A5($elm$parser$Parser$Advanced$nestableHelp, isNotRelevant, open, close, expectingClose, nestLevel + 1);
						},
						open),
						A2(
						$elm$parser$Parser$Advanced$andThen,
						function (_v2) {
							return A5($elm$parser$Parser$Advanced$nestableHelp, isNotRelevant, open, close, expectingClose, nestLevel);
						},
						A2($elm$parser$Parser$Advanced$chompIf, $elm$parser$Parser$Advanced$isChar, expectingClose))
					])));
	});
var $elm$parser$Parser$Advanced$nestableComment = F2(
	function (open, close) {
		var oStr = open.a;
		var oX = open.b;
		var cStr = close.a;
		var cX = close.b;
		var _v0 = $elm$core$String$uncons(oStr);
		if (_v0.$ === 1) {
			return $elm$parser$Parser$Advanced$problem(oX);
		} else {
			var _v1 = _v0.a;
			var openChar = _v1.a;
			var _v2 = $elm$core$String$uncons(cStr);
			if (_v2.$ === 1) {
				return $elm$parser$Parser$Advanced$problem(cX);
			} else {
				var _v3 = _v2.a;
				var closeChar = _v3.a;
				var isNotRelevant = function (_char) {
					return (!_Utils_eq(_char, openChar)) && (!_Utils_eq(_char, closeChar));
				};
				var chompOpen = $elm$parser$Parser$Advanced$token(open);
				return A2(
					$elm$parser$Parser$Advanced$ignorer,
					chompOpen,
					A5(
						$elm$parser$Parser$Advanced$nestableHelp,
						isNotRelevant,
						chompOpen,
						$elm$parser$Parser$Advanced$token(close),
						cX,
						1));
			}
		}
	});
var $elm$parser$Parser$Advanced$multiComment = F3(
	function (open, close, nestable) {
		if (!nestable) {
			return A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$token(open),
				$elm$parser$Parser$Advanced$chompUntil(close));
		} else {
			return A2($elm$parser$Parser$Advanced$nestableComment, open, close);
		}
	});
var $elm$parser$Parser$Advanced$Nestable = 1;
var $elm$parser$Parser$Advanced$NotNestable = 0;
var $elm$parser$Parser$toAdvancedNestable = function (nestable) {
	if (!nestable) {
		return 0;
	} else {
		return 1;
	}
};
var $elm$parser$Parser$multiComment = F3(
	function (open, close, nestable) {
		return A3(
			$elm$parser$Parser$Advanced$multiComment,
			$elm$parser$Parser$toToken(open),
			$elm$parser$Parser$toToken(close),
			$elm$parser$Parser$toAdvancedNestable(nestable));
	});
var $stil4m$elm_syntax$Elm$Parser$Comments$multilineCommentInner = $stil4m$elm_syntax$Combine$fromCore(
	$elm$parser$Parser$getChompedString(
		A3($elm$parser$Parser$multiComment, '{-', '-}', 1)));
var $stil4m$elm_syntax$Elm$Parser$State$addComment = F2(
	function (pair, _v0) {
		var s = _v0;
		return _Utils_update(
			s,
			{
				dW: A2($elm$core$List$cons, pair, s.dW)
			});
	});
var $stil4m$elm_syntax$Combine$modifyState = function (f) {
	return function (state) {
		return $elm$parser$Parser$succeed(
			_Utils_Tuple2(
				f(state),
				0));
	};
};
var $stil4m$elm_syntax$Elm$Parser$Comments$addCommentToState = function (p) {
	return A2(
		$stil4m$elm_syntax$Combine$andThen,
		function (pair) {
			return A2(
				$stil4m$elm_syntax$Combine$continueWith,
				$stil4m$elm_syntax$Combine$succeed(0),
				$stil4m$elm_syntax$Combine$modifyState(
					$stil4m$elm_syntax$Elm$Parser$State$addComment(pair)));
		},
		p);
};
var $stil4m$elm_syntax$Elm$Parser$Comments$parseComment = function (commentParser) {
	return $stil4m$elm_syntax$Elm$Parser$Comments$addCommentToState(
		$stil4m$elm_syntax$Elm$Parser$Node$parser(commentParser));
};
var $stil4m$elm_syntax$Elm$Parser$Comments$multilineComment = $stil4m$elm_syntax$Combine$lazy(
	function (_v0) {
		return $stil4m$elm_syntax$Elm$Parser$Comments$parseComment($stil4m$elm_syntax$Elm$Parser$Comments$multilineCommentInner);
	});
var $stil4m$elm_syntax$Elm$Parser$Whitespace$untilNewlineToken = $stil4m$elm_syntax$Combine$fromCore(
	$elm$parser$Parser$getChompedString(
		$elm$parser$Parser$chompWhile(
			function (c) {
				return (c !== '\u000D') && (c !== '\n');
			})));
var $stil4m$elm_syntax$Elm$Parser$Comments$singleLineComment = $stil4m$elm_syntax$Elm$Parser$Comments$parseComment(
	A2(
		$stil4m$elm_syntax$Combine$andMap,
		$stil4m$elm_syntax$Elm$Parser$Whitespace$untilNewlineToken,
		A2(
			$stil4m$elm_syntax$Combine$andMap,
			$stil4m$elm_syntax$Combine$string('--'),
			$stil4m$elm_syntax$Combine$succeed($elm$core$Basics$append))));
var $stil4m$elm_syntax$Elm$Parser$Layout$anyComment = A2($stil4m$elm_syntax$Combine$or, $stil4m$elm_syntax$Elm$Parser$Comments$singleLineComment, $stil4m$elm_syntax$Elm$Parser$Comments$multilineComment);
var $elm$parser$Parser$Done = function (a) {
	return {$: 1, a: a};
};
var $elm$parser$Parser$Loop = function (a) {
	return {$: 0, a: a};
};
var $elm$parser$Parser$Advanced$loopHelp = F4(
	function (p, state, callback, s0) {
		loopHelp:
		while (true) {
			var _v0 = callback(state);
			var parse = _v0;
			var _v1 = parse(s0);
			if (!_v1.$) {
				var p1 = _v1.a;
				var step = _v1.b;
				var s1 = _v1.c;
				if (!step.$) {
					var newState = step.a;
					var $temp$p = p || p1,
						$temp$state = newState,
						$temp$callback = callback,
						$temp$s0 = s1;
					p = $temp$p;
					state = $temp$state;
					callback = $temp$callback;
					s0 = $temp$s0;
					continue loopHelp;
				} else {
					var result = step.a;
					return A3($elm$parser$Parser$Advanced$Good, p || p1, result, s1);
				}
			} else {
				var p1 = _v1.a;
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, p || p1, x);
			}
		}
	});
var $elm$parser$Parser$Advanced$loop = F2(
	function (state, callback) {
		return function (s) {
			return A4($elm$parser$Parser$Advanced$loopHelp, false, state, callback, s);
		};
	});
var $elm$parser$Parser$Advanced$Done = function (a) {
	return {$: 1, a: a};
};
var $elm$parser$Parser$Advanced$Loop = function (a) {
	return {$: 0, a: a};
};
var $elm$parser$Parser$toAdvancedStep = function (step) {
	if (!step.$) {
		var s = step.a;
		return $elm$parser$Parser$Advanced$Loop(s);
	} else {
		var a = step.a;
		return $elm$parser$Parser$Advanced$Done(a);
	}
};
var $elm$parser$Parser$loop = F2(
	function (state, callback) {
		return A2(
			$elm$parser$Parser$Advanced$loop,
			state,
			function (s) {
				return A2(
					$elm$parser$Parser$map,
					$elm$parser$Parser$toAdvancedStep,
					callback(s));
			});
	});
var $stil4m$elm_syntax$Combine$many = function (p) {
	var helper = function (_v2) {
		var oldState = _v2.a;
		var items = _v2.b;
		return $elm$parser$Parser$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$keeper,
					$elm$parser$Parser$succeed(
						function (_v0) {
							var newState = _v0.a;
							var item = _v0.b;
							return $elm$parser$Parser$Loop(
								_Utils_Tuple2(
									newState,
									A2($elm$core$List$cons, item, items)));
						}),
					A2($stil4m$elm_syntax$Combine$app, p, oldState)),
					A2(
					$elm$parser$Parser$map,
					function (_v1) {
						return $elm$parser$Parser$Done(
							_Utils_Tuple2(
								oldState,
								$elm$core$List$reverse(items)));
					},
					$elm$parser$Parser$succeed(0))
				]));
	};
	return function (state) {
		return A2(
			$elm$parser$Parser$loop,
			_Utils_Tuple2(state, _List_Nil),
			helper);
	};
};
var $stil4m$elm_syntax$Combine$many1 = function (p) {
	return A2(
		$stil4m$elm_syntax$Combine$andMap,
		$stil4m$elm_syntax$Combine$many(p),
		A2(
			$stil4m$elm_syntax$Combine$andMap,
			p,
			$stil4m$elm_syntax$Combine$succeed($elm$core$List$cons)));
};
var $stil4m$elm_syntax$Elm$Parser$Whitespace$many1Spaces = $stil4m$elm_syntax$Combine$fromCore(
	A2(
		$elm$parser$Parser$ignorer,
		$elm$parser$Parser$token(' '),
		$elm$parser$Parser$chompWhile(
			function (c) {
				return c === ' ';
			})));
var $stil4m$elm_syntax$Elm$Parser$Whitespace$realNewLine = $stil4m$elm_syntax$Combine$fromCore(
	$elm$parser$Parser$getChompedString(
		A2(
			$elm$parser$Parser$ignorer,
			A2(
				$elm$parser$Parser$ignorer,
				$elm$parser$Parser$succeed(0),
				$elm$parser$Parser$oneOf(
					_List_fromArray(
						[
							$elm$parser$Parser$chompIf(
							$elm$core$Basics$eq('\u000D')),
							$elm$parser$Parser$succeed(0)
						]))),
			$elm$parser$Parser$symbol('\n'))));
var $stil4m$elm_syntax$Elm$Parser$Layout$verifyIndent = function (f) {
	return $stil4m$elm_syntax$Combine$withState(
		function (s) {
			return $stil4m$elm_syntax$Combine$withLocation(
				function (l) {
					return A2(
						f,
						$stil4m$elm_syntax$Elm$Parser$State$expectedColumn(s),
						l.an) ? $stil4m$elm_syntax$Combine$succeed(0) : $stil4m$elm_syntax$Combine$fail(
						'Expected higher indent than ' + $elm$core$String$fromInt(l.an));
				});
		});
};
var $stil4m$elm_syntax$Elm$Parser$Layout$layout = A2(
	$stil4m$elm_syntax$Combine$continueWith,
	$stil4m$elm_syntax$Elm$Parser$Layout$verifyIndent(
		F2(
			function (stateIndent, current) {
				return _Utils_cmp(stateIndent, current) < 0;
			})),
	$stil4m$elm_syntax$Combine$many1(
		$stil4m$elm_syntax$Combine$choice(
			_List_fromArray(
				[
					$stil4m$elm_syntax$Elm$Parser$Layout$anyComment,
					A2(
					$stil4m$elm_syntax$Combine$continueWith,
					$stil4m$elm_syntax$Combine$choice(
						_List_fromArray(
							[$stil4m$elm_syntax$Elm$Parser$Whitespace$many1Spaces, $stil4m$elm_syntax$Elm$Parser$Layout$anyComment])),
					$stil4m$elm_syntax$Combine$many1($stil4m$elm_syntax$Elm$Parser$Whitespace$realNewLine)),
					$stil4m$elm_syntax$Elm$Parser$Whitespace$many1Spaces
				]))));
var $stil4m$elm_syntax$Combine$maybe = function (_v0) {
	var p = _v0;
	return function (state) {
		return $elm$parser$Parser$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$map,
					function (_v1) {
						var c = _v1.a;
						var v = _v1.b;
						return _Utils_Tuple2(
							c,
							$elm$core$Maybe$Just(v));
					},
					p(state)),
					$elm$parser$Parser$succeed(
					_Utils_Tuple2(state, $elm$core$Maybe$Nothing))
				]));
	};
};
var $stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides = function (x) {
	return A2(
		$stil4m$elm_syntax$Combine$ignore,
		$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
		A2(
			$stil4m$elm_syntax$Combine$continueWith,
			x,
			$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout)));
};
var $stil4m$elm_syntax$Elm$Syntax$Pattern$FloatPattern = function (a) {
	return {$: 6, a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Pattern$HexPattern = function (a) {
	return {$: 5, a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Pattern$IntPattern = function (a) {
	return {$: 4, a: a};
};
var $elm$parser$Parser$ExpectingBinary = {$: 4};
var $elm$parser$Parser$ExpectingFloat = {$: 5};
var $elm$parser$Parser$ExpectingHex = {$: 2};
var $elm$parser$Parser$ExpectingInt = {$: 1};
var $elm$parser$Parser$ExpectingNumber = {$: 6};
var $elm$parser$Parser$ExpectingOctal = {$: 3};
var $elm$core$Result$fromMaybe = F2(
	function (err, maybe) {
		if (!maybe.$) {
			var v = maybe.a;
			return $elm$core$Result$Ok(v);
		} else {
			return $elm$core$Result$Err(err);
		}
	});
var $elm$parser$Parser$Advanced$consumeBase = _Parser_consumeBase;
var $elm$parser$Parser$Advanced$consumeBase16 = _Parser_consumeBase16;
var $elm$parser$Parser$Advanced$bumpOffset = F2(
	function (newOffset, s) {
		return {cU: s.cU + (newOffset - s.b), f: s.f, i: s.i, b: newOffset, aB: s.aB, a: s.a};
	});
var $elm$parser$Parser$Advanced$chompBase10 = _Parser_chompBase10;
var $elm$parser$Parser$Advanced$isAsciiCode = _Parser_isAsciiCode;
var $elm$parser$Parser$Advanced$consumeExp = F2(
	function (offset, src) {
		if (A3($elm$parser$Parser$Advanced$isAsciiCode, 101, offset, src) || A3($elm$parser$Parser$Advanced$isAsciiCode, 69, offset, src)) {
			var eOffset = offset + 1;
			var expOffset = (A3($elm$parser$Parser$Advanced$isAsciiCode, 43, eOffset, src) || A3($elm$parser$Parser$Advanced$isAsciiCode, 45, eOffset, src)) ? (eOffset + 1) : eOffset;
			var newOffset = A2($elm$parser$Parser$Advanced$chompBase10, expOffset, src);
			return _Utils_eq(expOffset, newOffset) ? (-newOffset) : newOffset;
		} else {
			return offset;
		}
	});
var $elm$parser$Parser$Advanced$consumeDotAndExp = F2(
	function (offset, src) {
		return A3($elm$parser$Parser$Advanced$isAsciiCode, 46, offset, src) ? A2(
			$elm$parser$Parser$Advanced$consumeExp,
			A2($elm$parser$Parser$Advanced$chompBase10, offset + 1, src),
			src) : A2($elm$parser$Parser$Advanced$consumeExp, offset, src);
	});
var $elm$parser$Parser$Advanced$finalizeInt = F5(
	function (invalid, handler, startOffset, _v0, s) {
		var endOffset = _v0.a;
		var n = _v0.b;
		if (handler.$ === 1) {
			var x = handler.a;
			return A2(
				$elm$parser$Parser$Advanced$Bad,
				true,
				A2($elm$parser$Parser$Advanced$fromState, s, x));
		} else {
			var toValue = handler.a;
			return _Utils_eq(startOffset, endOffset) ? A2(
				$elm$parser$Parser$Advanced$Bad,
				_Utils_cmp(s.b, startOffset) < 0,
				A2($elm$parser$Parser$Advanced$fromState, s, invalid)) : A3(
				$elm$parser$Parser$Advanced$Good,
				true,
				toValue(n),
				A2($elm$parser$Parser$Advanced$bumpOffset, endOffset, s));
		}
	});
var $elm$core$String$toFloat = _String_toFloat;
var $elm$parser$Parser$Advanced$finalizeFloat = F6(
	function (invalid, expecting, intSettings, floatSettings, intPair, s) {
		var intOffset = intPair.a;
		var floatOffset = A2($elm$parser$Parser$Advanced$consumeDotAndExp, intOffset, s.a);
		if (floatOffset < 0) {
			return A2(
				$elm$parser$Parser$Advanced$Bad,
				true,
				A4($elm$parser$Parser$Advanced$fromInfo, s.aB, s.cU - (floatOffset + s.b), invalid, s.f));
		} else {
			if (_Utils_eq(s.b, floatOffset)) {
				return A2(
					$elm$parser$Parser$Advanced$Bad,
					false,
					A2($elm$parser$Parser$Advanced$fromState, s, expecting));
			} else {
				if (_Utils_eq(intOffset, floatOffset)) {
					return A5($elm$parser$Parser$Advanced$finalizeInt, invalid, intSettings, s.b, intPair, s);
				} else {
					if (floatSettings.$ === 1) {
						var x = floatSettings.a;
						return A2(
							$elm$parser$Parser$Advanced$Bad,
							true,
							A2($elm$parser$Parser$Advanced$fromState, s, invalid));
					} else {
						var toValue = floatSettings.a;
						var _v1 = $elm$core$String$toFloat(
							A3($elm$core$String$slice, s.b, floatOffset, s.a));
						if (_v1.$ === 1) {
							return A2(
								$elm$parser$Parser$Advanced$Bad,
								true,
								A2($elm$parser$Parser$Advanced$fromState, s, invalid));
						} else {
							var n = _v1.a;
							return A3(
								$elm$parser$Parser$Advanced$Good,
								true,
								toValue(n),
								A2($elm$parser$Parser$Advanced$bumpOffset, floatOffset, s));
						}
					}
				}
			}
		}
	});
var $elm$parser$Parser$Advanced$number = function (c) {
	return function (s) {
		if (A3($elm$parser$Parser$Advanced$isAsciiCode, 48, s.b, s.a)) {
			var zeroOffset = s.b + 1;
			var baseOffset = zeroOffset + 1;
			return A3($elm$parser$Parser$Advanced$isAsciiCode, 120, zeroOffset, s.a) ? A5(
				$elm$parser$Parser$Advanced$finalizeInt,
				c.ea,
				c.c8,
				baseOffset,
				A2($elm$parser$Parser$Advanced$consumeBase16, baseOffset, s.a),
				s) : (A3($elm$parser$Parser$Advanced$isAsciiCode, 111, zeroOffset, s.a) ? A5(
				$elm$parser$Parser$Advanced$finalizeInt,
				c.ea,
				c.dj,
				baseOffset,
				A3($elm$parser$Parser$Advanced$consumeBase, 8, baseOffset, s.a),
				s) : (A3($elm$parser$Parser$Advanced$isAsciiCode, 98, zeroOffset, s.a) ? A5(
				$elm$parser$Parser$Advanced$finalizeInt,
				c.ea,
				c.cQ,
				baseOffset,
				A3($elm$parser$Parser$Advanced$consumeBase, 2, baseOffset, s.a),
				s) : A6(
				$elm$parser$Parser$Advanced$finalizeFloat,
				c.ea,
				c.c0,
				c.db,
				c.c4,
				_Utils_Tuple2(zeroOffset, 0),
				s)));
		} else {
			return A6(
				$elm$parser$Parser$Advanced$finalizeFloat,
				c.ea,
				c.c0,
				c.db,
				c.c4,
				A3($elm$parser$Parser$Advanced$consumeBase, 10, s.b, s.a),
				s);
		}
	};
};
var $elm$parser$Parser$number = function (i) {
	return $elm$parser$Parser$Advanced$number(
		{
			cQ: A2($elm$core$Result$fromMaybe, $elm$parser$Parser$ExpectingBinary, i.cQ),
			c0: $elm$parser$Parser$ExpectingNumber,
			c4: A2($elm$core$Result$fromMaybe, $elm$parser$Parser$ExpectingFloat, i.c4),
			c8: A2($elm$core$Result$fromMaybe, $elm$parser$Parser$ExpectingHex, i.c8),
			db: A2($elm$core$Result$fromMaybe, $elm$parser$Parser$ExpectingInt, i.db),
			ea: $elm$parser$Parser$ExpectingNumber,
			dj: A2($elm$core$Result$fromMaybe, $elm$parser$Parser$ExpectingOctal, i.dj)
		});
};
var $stil4m$elm_syntax$Elm$Parser$Numbers$raw = F3(
	function (floatf, intf, hexf) {
		return $elm$parser$Parser$number(
			{
				cQ: $elm$core$Maybe$Nothing,
				c4: $elm$core$Maybe$Just(floatf),
				c8: $elm$core$Maybe$Just(hexf),
				db: $elm$core$Maybe$Just(intf),
				dj: $elm$core$Maybe$Nothing
			});
	});
var $stil4m$elm_syntax$Elm$Parser$Numbers$number = F3(
	function (floatf, intf, hexf) {
		return $stil4m$elm_syntax$Combine$fromCore(
			A3($stil4m$elm_syntax$Elm$Parser$Numbers$raw, floatf, intf, hexf));
	});
var $stil4m$elm_syntax$Elm$Parser$Patterns$numberPart = A3($stil4m$elm_syntax$Elm$Parser$Numbers$number, $stil4m$elm_syntax$Elm$Syntax$Pattern$FloatPattern, $stil4m$elm_syntax$Elm$Syntax$Pattern$IntPattern, $stil4m$elm_syntax$Elm$Syntax$Pattern$HexPattern);
var $stil4m$elm_syntax$Combine$parens = A2(
	$stil4m$elm_syntax$Combine$between,
	$stil4m$elm_syntax$Combine$string('('),
	$stil4m$elm_syntax$Combine$string(')'));
var $stil4m$elm_syntax$Elm$Syntax$Pattern$RecordPattern = function (a) {
	return {$: 8, a: a};
};
var $stil4m$elm_syntax$Combine$sepBy1 = F2(
	function (sep, p) {
		return A2(
			$stil4m$elm_syntax$Combine$andMap,
			$stil4m$elm_syntax$Combine$many(
				A2($stil4m$elm_syntax$Combine$continueWith, p, sep)),
			A2(
				$stil4m$elm_syntax$Combine$andMap,
				p,
				$stil4m$elm_syntax$Combine$succeed($elm$core$List$cons)));
	});
var $stil4m$elm_syntax$Combine$sepBy = F2(
	function (sep, p) {
		return A2(
			$stil4m$elm_syntax$Combine$or,
			A2($stil4m$elm_syntax$Combine$sepBy1, sep, p),
			$stil4m$elm_syntax$Combine$succeed(_List_Nil));
	});
var $stil4m$elm_syntax$Elm$Parser$Patterns$recordPattern = $stil4m$elm_syntax$Combine$lazy(
	function (_v0) {
		return $stil4m$elm_syntax$Elm$Parser$Node$parser(
			A2(
				$stil4m$elm_syntax$Combine$map,
				$stil4m$elm_syntax$Elm$Syntax$Pattern$RecordPattern,
				A3(
					$stil4m$elm_syntax$Combine$between,
					A2(
						$stil4m$elm_syntax$Combine$continueWith,
						$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
						$stil4m$elm_syntax$Combine$string('{')),
					$stil4m$elm_syntax$Combine$string('}'),
					A2(
						$stil4m$elm_syntax$Combine$sepBy,
						$stil4m$elm_syntax$Combine$string(','),
						$stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides(
							$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$functionName))))));
	});
var $elm$core$String$concat = function (strings) {
	return A2($elm$core$String$join, '', strings);
};
var $elm$parser$Parser$Advanced$getOffset = function (s) {
	return A3($elm$parser$Parser$Advanced$Good, false, s.b, s);
};
var $elm$parser$Parser$getOffset = $elm$parser$Parser$Advanced$getOffset;
var $stil4m$elm_syntax$Elm$Parser$Tokens$stringLiteral = function () {
	var helper = function (s) {
		return s.A ? A2(
			$elm$parser$Parser$map,
			function (v) {
				return $elm$parser$Parser$Loop(
					{
						A: false,
						n: A2(
							$elm$core$List$cons,
							$elm$core$String$fromList(
								_List_fromArray(
									[v])),
							s.n)
					});
			},
			$stil4m$elm_syntax$Elm$Parser$Tokens$escapedCharValue) : $elm$parser$Parser$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$map,
					function (_v0) {
						return $elm$parser$Parser$Done(
							$elm$core$String$concat(
								$elm$core$List$reverse(s.n)));
					},
					$elm$parser$Parser$symbol('\"')),
					A2(
					$elm$parser$Parser$map,
					function (_v1) {
						return $elm$parser$Parser$Loop(
							{A: true, n: s.n});
					},
					$elm$parser$Parser$getChompedString(
						$elm$parser$Parser$symbol('\\'))),
					A2(
					$elm$parser$Parser$andThen,
					function (_v2) {
						var start = _v2.a;
						var value = _v2.b;
						var end = _v2.c;
						return _Utils_eq(start, end) ? $elm$parser$Parser$problem('Expected a string character or a double quote') : $elm$parser$Parser$succeed(
							$elm$parser$Parser$Loop(
								{
									A: s.A,
									n: A2($elm$core$List$cons, value, s.n)
								}));
					},
					A2(
						$elm$parser$Parser$keeper,
						A2(
							$elm$parser$Parser$keeper,
							A2(
								$elm$parser$Parser$keeper,
								$elm$parser$Parser$succeed(
									F3(
										function (start, value, end) {
											return _Utils_Tuple3(start, value, end);
										})),
								$elm$parser$Parser$getOffset),
							$elm$parser$Parser$getChompedString(
								$elm$parser$Parser$chompWhile(
									function (c) {
										return (c !== '\"') && (c !== '\\');
									}))),
						$elm$parser$Parser$getOffset))
				]));
	};
	return $stil4m$elm_syntax$Combine$fromCore(
		A2(
			$elm$parser$Parser$keeper,
			A2(
				$elm$parser$Parser$ignorer,
				$elm$parser$Parser$succeed($elm$core$Basics$identity),
				$elm$parser$Parser$symbol('\"')),
			A2(
				$elm$parser$Parser$loop,
				{A: false, n: _List_Nil},
				helper)));
}();
var $miniBill$elm_unicode$Unicode$isUpper = function (c) {
	var code = $elm$core$Char$toCode(c);
	return (code < 256) ? (((code >= 65) && (code <= 90)) || (((code >= 192) && (code <= 214)) || ((code >= 216) && (code <= 222)))) : ((code < 8167) ? ((code < 578) ? ((code < 429) ? ((code < 402) ? (((code >= 376) && (code <= 377)) || (((code >= 385) && (code <= 386)) || ((code === 388) || (((code >= 390) && (code <= 391)) || (((code >= 393) && (code <= 395)) || (((code >= 398) && (code <= 401)) || ((!A2($elm$core$Basics$modBy, 2, code)) ? (((code >= 256) && (code <= 310)) || ((code >= 330) && (code <= 374))) : (((code >= 313) && (code <= 327)) || ((code >= 379) && (code <= 381)))))))))) : (((code >= 403) && (code <= 404)) || (((code >= 406) && (code <= 408)) || (((code >= 412) && (code <= 413)) || (((code >= 415) && (code <= 416)) || (((code >= 422) && (code <= 423)) || ((code === 425) || ((code === 428) || ((!A2($elm$core$Basics$modBy, 2, code)) && ((code >= 418) && (code <= 420))))))))))) : ((code < 457) ? (((code >= 430) && (code <= 431)) || (((code >= 433) && (code <= 435)) || ((code === 437) || (((code >= 439) && (code <= 440)) || ((code === 444) || ((code === 452) || (code === 455))))))) : ((code === 458) || ((code === 497) || ((code === 500) || (((code >= 502) && (code <= 504)) || (((code >= 570) && (code <= 571)) || (((code >= 573) && (code <= 574)) || ((code === 577) || ((!A2($elm$core$Basics$modBy, 2, code)) ? (((code >= 478) && (code <= 494)) || ((code >= 506) && (code <= 562))) : ((code >= 461) && (code <= 475)))))))))))) : ((code < 1328) ? ((code < 974) ? (((code >= 579) && (code <= 582)) || ((code === 886) || ((code === 895) || ((code === 902) || (((code >= 904) && (code <= 911)) || (((code >= 913) && (code <= 939)) || ((!A2($elm$core$Basics$modBy, 2, code)) && (((code >= 584) && (code <= 590)) || ((code >= 880) && (code <= 882)))))))))) : ((code === 975) || (((code >= 978) && (code <= 980)) || ((code === 1012) || ((code === 1015) || (((code >= 1017) && (code <= 1018)) || (((code >= 1021) && (code <= 1071)) || (((code >= 1216) && (code <= 1217)) || ((!A2($elm$core$Basics$modBy, 2, code)) ? (((code >= 984) && (code <= 1006)) || (((code >= 1120) && (code <= 1152)) || (((code >= 1162) && (code <= 1214)) || ((code >= 1232) && (code <= 1326))))) : ((code >= 1219) && (code <= 1229))))))))))) : ((code < 7991) ? (((code >= 1329) && (code <= 1366)) || (((code >= 4256) && (code <= 4301)) || (((code >= 5024) && (code <= 5109)) || (((code >= 7312) && (code <= 7359)) || (((code >= 7944) && (code <= 7951)) || (((code >= 7960) && (code <= 7965)) || (((code >= 7976) && (code <= 7983)) || ((!A2($elm$core$Basics$modBy, 2, code)) && (((code >= 7680) && (code <= 7828)) || ((code >= 7838) && (code <= 7934))))))))))) : (((code >= 7992) && (code <= 7999)) || (((code >= 8008) && (code <= 8013)) || (((code >= 8025) && (code <= 8031)) || (((code >= 8040) && (code <= 8047)) || (((code >= 8120) && (code <= 8123)) || (((code >= 8136) && (code <= 8139)) || ((code >= 8152) && (code <= 8155))))))))))) : ((code < 42996) ? ((code < 11263) ? ((code < 8468) ? (((code >= 8168) && (code <= 8172)) || (((code >= 8184) && (code <= 8187)) || ((code === 8450) || ((code === 8455) || (((code >= 8459) && (code <= 8461)) || ((code >= 8464) && (code <= 8466))))))) : ((code === 8469) || (((code >= 8473) && (code <= 8477)) || (((code >= 8490) && (code <= 8493)) || (((code >= 8496) && (code <= 8499)) || (((code >= 8510) && (code <= 8511)) || ((code === 8517) || ((code === 8579) || ((!A2($elm$core$Basics$modBy, 2, code)) && ((code >= 8484) && (code <= 8488))))))))))) : ((code < 11505) ? (((code >= 11264) && (code <= 11310)) || ((code === 11360) || (((code >= 11362) && (code <= 11364)) || (((code >= 11373) && (code <= 11376)) || ((code === 11378) || ((code === 11381) || (((code >= 11390) && (code <= 11392)) || ((!A2($elm$core$Basics$modBy, 2, code)) ? ((code >= 11394) && (code <= 11490)) : (((code >= 11367) && (code <= 11371)) || ((code >= 11499) && (code <= 11501))))))))))) : ((code === 11506) || (((code >= 42877) && (code <= 42878)) || (((code >= 42922) && (code <= 42926)) || (((code >= 42928) && (code <= 42932)) || ((code === 42946) || (((code >= 42948) && (code <= 42951)) || ((code === 42953) || ((!A2($elm$core$Basics$modBy, 2, code)) ? (((code >= 42560) && (code <= 42604)) || (((code >= 42624) && (code <= 42650)) || (((code >= 42786) && (code <= 42798)) || (((code >= 42802) && (code <= 42862)) || (((code >= 42880) && (code <= 42886)) || (((code >= 42896) && (code <= 42898)) || (((code >= 42902) && (code <= 42920)) || ((code >= 42934) && (code <= 42942))))))))) : (((code >= 42873) && (code <= 42875)) || ((code >= 42891) && (code <= 42893))))))))))))) : ((code < 120119) ? ((code < 93759) ? ((code === 42997) || (((code >= 65313) && (code <= 65338)) || (((code >= 66560) && (code <= 66599)) || (((code >= 66736) && (code <= 66771)) || (((code >= 68736) && (code <= 68786)) || ((code >= 71840) && (code <= 71871))))))) : (((code >= 93760) && (code <= 93791)) || (((code >= 119808) && (code <= 119833)) || (((code >= 119860) && (code <= 119885)) || (((code >= 119912) && (code <= 119937)) || (((code >= 119964) && (code <= 119989)) || (((code >= 120016) && (code <= 120041)) || ((code >= 120068) && (code <= 120092))))))))) : ((code < 120487) ? (((code >= 120120) && (code <= 120144)) || (((code >= 120172) && (code <= 120197)) || (((code >= 120224) && (code <= 120249)) || (((code >= 120276) && (code <= 120301)) || (((code >= 120328) && (code <= 120353)) || (((code >= 120380) && (code <= 120405)) || ((code >= 120432) && (code <= 120457)))))))) : (((code >= 120488) && (code <= 120512)) || (((code >= 120546) && (code <= 120570)) || (((code >= 120604) && (code <= 120628)) || (((code >= 120662) && (code <= 120686)) || (((code >= 120720) && (code <= 120744)) || ((code === 120778) || ((code >= 125184) && (code <= 125217))))))))))));
};
var $stil4m$elm_syntax$Elm$Parser$Tokens$typeName = $stil4m$elm_syntax$Combine$fromCore(
	$elm$parser$Parser$variable(
		{
			da: function (c) {
				return $miniBill$elm_unicode$Unicode$isAlphaNum(c) || (c === '_');
			},
			dp: $elm$core$Set$fromList($stil4m$elm_syntax$Elm$Parser$Tokens$reservedList),
			bg: $miniBill$elm_unicode$Unicode$isUpper
		}));
var $stil4m$elm_syntax$Elm$Parser$Base$typeIndicator = function () {
	var helper = function (_v0) {
		var n = _v0.a;
		var xs = _v0.b;
		return $stil4m$elm_syntax$Combine$choice(
			_List_fromArray(
				[
					A2(
					$stil4m$elm_syntax$Combine$andThen,
					function (t) {
						return helper(
							_Utils_Tuple2(
								t,
								A2($elm$core$List$cons, n, xs)));
					},
					A2(
						$stil4m$elm_syntax$Combine$continueWith,
						$stil4m$elm_syntax$Elm$Parser$Tokens$typeName,
						$stil4m$elm_syntax$Combine$string('.'))),
					$stil4m$elm_syntax$Combine$succeed(
					_Utils_Tuple2(n, xs))
				]));
	};
	return A2(
		$stil4m$elm_syntax$Combine$map,
		function (_v1) {
			var t = _v1.a;
			var xs = _v1.b;
			return _Utils_Tuple2(
				$elm$core$List$reverse(xs),
				t);
		},
		A2(
			$stil4m$elm_syntax$Combine$andThen,
			function (t) {
				return helper(
					_Utils_Tuple2(t, _List_Nil));
			},
			$stil4m$elm_syntax$Elm$Parser$Tokens$typeName));
}();
var $stil4m$elm_syntax$Elm$Syntax$Pattern$VarPattern = function (a) {
	return {$: 11, a: a};
};
var $stil4m$elm_syntax$Elm$Parser$Patterns$variablePart = $stil4m$elm_syntax$Elm$Parser$Node$parser(
	A2($stil4m$elm_syntax$Combine$map, $stil4m$elm_syntax$Elm$Syntax$Pattern$VarPattern, $stil4m$elm_syntax$Elm$Parser$Tokens$functionName));
var $stil4m$elm_syntax$Elm$Parser$Patterns$qualifiedPattern = function (consumeArgs) {
	return A2(
		$stil4m$elm_syntax$Combine$andThen,
		function (_v0) {
			var range = _v0.a;
			var _v1 = _v0.b;
			var mod = _v1.a;
			var name = _v1.b;
			return A2(
				$stil4m$elm_syntax$Combine$map,
				function (args) {
					return A2(
						$stil4m$elm_syntax$Elm$Syntax$Node$Node,
						$stil4m$elm_syntax$Elm$Syntax$Range$combine(
							A2(
								$elm$core$List$cons,
								range,
								A2(
									$elm$core$List$map,
									function (_v2) {
										var r = _v2.a;
										return r;
									},
									args))),
						A2(
							$stil4m$elm_syntax$Elm$Syntax$Pattern$NamedPattern,
							A2($stil4m$elm_syntax$Elm$Syntax$Pattern$QualifiedNameRef, mod, name),
							args));
				},
				consumeArgs ? $stil4m$elm_syntax$Combine$many(
					A2(
						$stil4m$elm_syntax$Combine$ignore,
						$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
						$stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$qualifiedPatternArg())) : $stil4m$elm_syntax$Combine$succeed(_List_Nil));
		},
		A2(
			$stil4m$elm_syntax$Combine$ignore,
			$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
			$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Base$typeIndicator)));
};
var $stil4m$elm_syntax$Elm$Parser$Patterns$tryToCompose = function (x) {
	return A2(
		$stil4m$elm_syntax$Combine$continueWith,
		$stil4m$elm_syntax$Combine$choice(
			_List_fromArray(
				[
					A2(
					$stil4m$elm_syntax$Combine$map,
					function (y) {
						return A3($stil4m$elm_syntax$Elm$Syntax$Node$combine, $stil4m$elm_syntax$Elm$Syntax$Pattern$AsPattern, x, y);
					},
					A2(
						$stil4m$elm_syntax$Combine$continueWith,
						$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$functionName),
						A2(
							$stil4m$elm_syntax$Combine$ignore,
							$stil4m$elm_syntax$Elm$Parser$Layout$layout,
							$stil4m$elm_syntax$Combine$fromCore(
								$elm$parser$Parser$keyword('as'))))),
					A2(
					$stil4m$elm_syntax$Combine$map,
					function (y) {
						return A3($stil4m$elm_syntax$Elm$Syntax$Node$combine, $stil4m$elm_syntax$Elm$Syntax$Pattern$UnConsPattern, x, y);
					},
					A2(
						$stil4m$elm_syntax$Combine$continueWith,
						$stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$pattern(),
						A2(
							$stil4m$elm_syntax$Combine$ignore,
							$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
							$stil4m$elm_syntax$Combine$fromCore(
								$elm$parser$Parser$symbol('::'))))),
					$stil4m$elm_syntax$Combine$succeed(x)
				])),
		$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout));
};
function $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$pattern() {
	return A2(
		$stil4m$elm_syntax$Combine$andThen,
		$stil4m$elm_syntax$Elm$Parser$Patterns$tryToCompose,
		$stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$composablePattern());
}
function $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$composablePattern() {
	return $stil4m$elm_syntax$Combine$choice(
		_List_fromArray(
			[
				$stil4m$elm_syntax$Elm$Parser$Patterns$variablePart,
				$stil4m$elm_syntax$Elm$Parser$Patterns$qualifiedPattern(true),
				$stil4m$elm_syntax$Elm$Parser$Node$parser(
				A2($stil4m$elm_syntax$Combine$map, $stil4m$elm_syntax$Elm$Syntax$Pattern$StringPattern, $stil4m$elm_syntax$Elm$Parser$Tokens$stringLiteral)),
				$stil4m$elm_syntax$Elm$Parser$Node$parser(
				A2($stil4m$elm_syntax$Combine$map, $stil4m$elm_syntax$Elm$Syntax$Pattern$CharPattern, $stil4m$elm_syntax$Elm$Parser$Tokens$characterLiteral)),
				$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Patterns$numberPart),
				$stil4m$elm_syntax$Elm$Parser$Node$parser(
				A2(
					$stil4m$elm_syntax$Combine$map,
					$elm$core$Basics$always($stil4m$elm_syntax$Elm$Syntax$Pattern$UnitPattern),
					$stil4m$elm_syntax$Combine$fromCore(
						$elm$parser$Parser$symbol('()')))),
				$stil4m$elm_syntax$Elm$Parser$Node$parser(
				A2(
					$stil4m$elm_syntax$Combine$map,
					$elm$core$Basics$always($stil4m$elm_syntax$Elm$Syntax$Pattern$AllPattern),
					$stil4m$elm_syntax$Combine$fromCore(
						$elm$parser$Parser$symbol('_')))),
				$stil4m$elm_syntax$Elm$Parser$Patterns$recordPattern,
				$stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$listPattern(),
				$stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$parensPattern()
			]));
}
function $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$qualifiedPatternArg() {
	return $stil4m$elm_syntax$Combine$choice(
		_List_fromArray(
			[
				$stil4m$elm_syntax$Elm$Parser$Patterns$variablePart,
				$stil4m$elm_syntax$Elm$Parser$Patterns$qualifiedPattern(false),
				$stil4m$elm_syntax$Elm$Parser$Node$parser(
				A2($stil4m$elm_syntax$Combine$map, $stil4m$elm_syntax$Elm$Syntax$Pattern$StringPattern, $stil4m$elm_syntax$Elm$Parser$Tokens$stringLiteral)),
				$stil4m$elm_syntax$Elm$Parser$Node$parser(
				A2($stil4m$elm_syntax$Combine$map, $stil4m$elm_syntax$Elm$Syntax$Pattern$CharPattern, $stil4m$elm_syntax$Elm$Parser$Tokens$characterLiteral)),
				$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Patterns$numberPart),
				$stil4m$elm_syntax$Elm$Parser$Node$parser(
				A2(
					$stil4m$elm_syntax$Combine$map,
					$elm$core$Basics$always($stil4m$elm_syntax$Elm$Syntax$Pattern$UnitPattern),
					$stil4m$elm_syntax$Combine$fromCore(
						$elm$parser$Parser$symbol('()')))),
				$stil4m$elm_syntax$Elm$Parser$Node$parser(
				A2(
					$stil4m$elm_syntax$Combine$map,
					$elm$core$Basics$always($stil4m$elm_syntax$Elm$Syntax$Pattern$AllPattern),
					$stil4m$elm_syntax$Combine$fromCore(
						$elm$parser$Parser$symbol('_')))),
				$stil4m$elm_syntax$Elm$Parser$Patterns$recordPattern,
				$stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$listPattern(),
				$stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$parensPattern()
			]));
}
function $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$listPattern() {
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v5) {
			return $stil4m$elm_syntax$Elm$Parser$Node$parser(
				A3(
					$stil4m$elm_syntax$Combine$between,
					A2(
						$stil4m$elm_syntax$Combine$ignore,
						$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
						$stil4m$elm_syntax$Combine$string('[')),
					$stil4m$elm_syntax$Combine$string(']'),
					A2(
						$stil4m$elm_syntax$Combine$map,
						$stil4m$elm_syntax$Elm$Syntax$Pattern$ListPattern,
						A2(
							$stil4m$elm_syntax$Combine$sepBy,
							$stil4m$elm_syntax$Combine$string(','),
							$stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides(
								$stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$pattern())))));
		});
}
function $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$parensPattern() {
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v3) {
			return $stil4m$elm_syntax$Elm$Parser$Node$parser(
				A2(
					$stil4m$elm_syntax$Combine$map,
					function (c) {
						if (c.b && (!c.b.b)) {
							var x = c.a;
							return $stil4m$elm_syntax$Elm$Syntax$Pattern$ParenthesizedPattern(x);
						} else {
							return $stil4m$elm_syntax$Elm$Syntax$Pattern$TuplePattern(c);
						}
					},
					$stil4m$elm_syntax$Combine$parens(
						A2(
							$stil4m$elm_syntax$Combine$sepBy,
							$stil4m$elm_syntax$Combine$string(','),
							$stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides(
								$stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$pattern())))));
		});
}
var $stil4m$elm_syntax$Elm$Parser$Patterns$pattern = $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$pattern();
$stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$pattern = function () {
	return $stil4m$elm_syntax$Elm$Parser$Patterns$pattern;
};
var $stil4m$elm_syntax$Elm$Parser$Patterns$composablePattern = $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$composablePattern();
$stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$composablePattern = function () {
	return $stil4m$elm_syntax$Elm$Parser$Patterns$composablePattern;
};
var $stil4m$elm_syntax$Elm$Parser$Patterns$qualifiedPatternArg = $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$qualifiedPatternArg();
$stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$qualifiedPatternArg = function () {
	return $stil4m$elm_syntax$Elm$Parser$Patterns$qualifiedPatternArg;
};
var $stil4m$elm_syntax$Elm$Parser$Patterns$listPattern = $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$listPattern();
$stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$listPattern = function () {
	return $stil4m$elm_syntax$Elm$Parser$Patterns$listPattern;
};
var $stil4m$elm_syntax$Elm$Parser$Patterns$parensPattern = $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$parensPattern();
$stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$parensPattern = function () {
	return $stil4m$elm_syntax$Elm$Parser$Patterns$parensPattern;
};
var $stil4m$elm_syntax$Elm$Parser$Declarations$functionArgument = $stil4m$elm_syntax$Elm$Parser$Patterns$pattern;
var $stil4m$elm_syntax$Elm$Syntax$Expression$functionRange = function (_function) {
	return $stil4m$elm_syntax$Elm$Syntax$Range$combine(
		_List_fromArray(
			[
				function () {
				var _v0 = _function.cg;
				if (!_v0.$) {
					var documentation = _v0.a;
					return $stil4m$elm_syntax$Elm$Syntax$Node$range(documentation);
				} else {
					return A2(
						$elm$core$Maybe$withDefault,
						function (_v3) {
							var r = _v3.a;
							return r;
						}(
							$stil4m$elm_syntax$Elm$Syntax$Node$value(_function.dZ).aW),
						A2(
							$elm$core$Maybe$map,
							function (_v1) {
								var value = _v1.b;
								var _v2 = value.aW;
								var r = _v2.a;
								return r;
							},
							_function.ez));
				}
			}(),
				function (_v4) {
				var r = _v4.a;
				return r;
			}(
				$stil4m$elm_syntax$Elm$Syntax$Node$value(_function.dZ).bN)
			]));
};
var $stil4m$elm_syntax$Elm$Syntax$Signature$Signature = F2(
	function (name, typeAnnotation) {
		return {aW: name, dG: typeAnnotation};
	});
var $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$Eager = 0;
var $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$FunctionTypeAnnotation = F2(
	function (a, b) {
		return {$: 6, a: a, b: b};
	});
var $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericRecord = F2(
	function (a, b) {
		return {$: 5, a: a, b: b};
	});
var $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$Lazy = 1;
var $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Record = function (a) {
	return {$: 4, a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Typed = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Unit = {$: 2};
var $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Tupled = function (a) {
	return {$: 3, a: a};
};
var $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$asTypeAnnotation = F2(
	function (x, xs) {
		var value = x.b;
		if (!xs.b) {
			return value;
		} else {
			return $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Tupled(
				A2($elm$core$List$cons, x, xs));
		}
	});
var $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericType = function (a) {
	return {$: 0, a: a};
};
var $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$genericTypeAnnotation = $stil4m$elm_syntax$Combine$lazy(
	function (_v0) {
		return $stil4m$elm_syntax$Elm$Parser$Node$parser(
			A2($stil4m$elm_syntax$Combine$map, $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericType, $stil4m$elm_syntax$Elm$Parser$Tokens$functionName));
	});
var $stil4m$elm_syntax$Elm$Parser$Layout$Indented = 1;
var $stil4m$elm_syntax$Elm$Parser$Layout$Strict = 0;
var $stil4m$elm_syntax$Elm$Parser$State$storedColumns = function (_v0) {
	var indents = _v0.aP;
	return A2(
		$elm$core$List$map,
		$elm$core$Basics$add(1),
		indents);
};
var $stil4m$elm_syntax$Elm$Parser$Layout$compute = $stil4m$elm_syntax$Combine$withState(
	function (s) {
		return $stil4m$elm_syntax$Combine$withLocation(
			function (l) {
				var known = A2(
					$elm$core$List$cons,
					1,
					$stil4m$elm_syntax$Elm$Parser$State$storedColumns(s));
				return A2($elm$core$List$member, l.an, known) ? $stil4m$elm_syntax$Combine$succeed(0) : $stil4m$elm_syntax$Combine$succeed(1);
			});
	});
var $stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayout = A2(
	$stil4m$elm_syntax$Combine$continueWith,
	$stil4m$elm_syntax$Elm$Parser$Layout$compute,
	$stil4m$elm_syntax$Combine$many(
		$stil4m$elm_syntax$Combine$choice(
			_List_fromArray(
				[
					$stil4m$elm_syntax$Elm$Parser$Layout$anyComment,
					A2(
					$stil4m$elm_syntax$Combine$continueWith,
					$stil4m$elm_syntax$Combine$choice(
						_List_fromArray(
							[
								$stil4m$elm_syntax$Elm$Parser$Whitespace$many1Spaces,
								$stil4m$elm_syntax$Elm$Parser$Layout$anyComment,
								$stil4m$elm_syntax$Combine$succeed(0)
							])),
					$stil4m$elm_syntax$Combine$many1($stil4m$elm_syntax$Elm$Parser$Whitespace$realNewLine)),
					$stil4m$elm_syntax$Elm$Parser$Whitespace$many1Spaces
				]))));
var $stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayoutWith = F2(
	function (onStrict, onIndented) {
		return A2(
			$stil4m$elm_syntax$Combine$andThen,
			function (ind) {
				if (!ind) {
					return onStrict(0);
				} else {
					return onIndented(0);
				}
			},
			$stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayout);
	});
var $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typeAnnotationNoFn = function (mode) {
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v7) {
			return $stil4m$elm_syntax$Combine$choice(
				_List_fromArray(
					[
						$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$parensTypeAnnotation(),
						$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typedTypeAnnotation(mode),
						$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$genericTypeAnnotation,
						$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordTypeAnnotation()
					]));
		});
};
var $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typedTypeAnnotation = function (mode) {
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v0) {
			var nodeRanges = $elm$core$List$map(
				function (_v6) {
					var r = _v6.a;
					return r;
				});
			var genericHelper = function (items) {
				return A2(
					$stil4m$elm_syntax$Combine$or,
					A2(
						$stil4m$elm_syntax$Combine$andThen,
						function (next) {
							return A2(
								$stil4m$elm_syntax$Combine$ignore,
								$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
								A2(
									$stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayoutWith,
									function (_v1) {
										return $stil4m$elm_syntax$Combine$succeed(
											$elm$core$List$reverse(
												A2($elm$core$List$cons, next, items)));
									},
									function (_v2) {
										return genericHelper(
											A2($elm$core$List$cons, next, items));
									}));
						},
						$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typeAnnotationNoFn(1)),
					$stil4m$elm_syntax$Combine$succeed(
						$elm$core$List$reverse(items)));
			};
			return A2(
				$stil4m$elm_syntax$Combine$andThen,
				function (original) {
					var tir = original.a;
					return A2(
						$stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayoutWith,
						function (_v3) {
							return $stil4m$elm_syntax$Combine$succeed(
								A2(
									$stil4m$elm_syntax$Elm$Syntax$Node$Node,
									tir,
									A2($stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Typed, original, _List_Nil)));
						},
						function (_v4) {
							if (!mode) {
								return A2(
									$stil4m$elm_syntax$Combine$map,
									function (args) {
										return A2(
											$stil4m$elm_syntax$Elm$Syntax$Node$Node,
											$stil4m$elm_syntax$Elm$Syntax$Range$combine(
												A2(
													$elm$core$List$cons,
													tir,
													nodeRanges(args))),
											A2($stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Typed, original, args));
									},
									genericHelper(_List_Nil));
							} else {
								return $stil4m$elm_syntax$Combine$succeed(
									A2(
										$stil4m$elm_syntax$Elm$Syntax$Node$Node,
										tir,
										A2($stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Typed, original, _List_Nil)));
							}
						});
				},
				$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Base$typeIndicator));
		});
};
function $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$parensTypeAnnotation() {
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v14) {
			var commaSep = $stil4m$elm_syntax$Combine$many(
				A2(
					$stil4m$elm_syntax$Combine$ignore,
					$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
					A2(
						$stil4m$elm_syntax$Combine$continueWith,
						$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$typeAnnotation(),
						A2(
							$stil4m$elm_syntax$Combine$ignore,
							$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
							$stil4m$elm_syntax$Combine$string(',')))));
			var nested = A2(
				$stil4m$elm_syntax$Combine$andMap,
				commaSep,
				A2(
					$stil4m$elm_syntax$Combine$ignore,
					$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
					A2(
						$stil4m$elm_syntax$Combine$andMap,
						$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$typeAnnotation(),
						A2(
							$stil4m$elm_syntax$Combine$ignore,
							$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
							$stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Parser$TypeAnnotation$asTypeAnnotation)))));
			return $stil4m$elm_syntax$Elm$Parser$Node$parser(
				A2(
					$stil4m$elm_syntax$Combine$continueWith,
					$stil4m$elm_syntax$Combine$choice(
						_List_fromArray(
							[
								A2(
								$stil4m$elm_syntax$Combine$map,
								$elm$core$Basics$always($stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Unit),
								$stil4m$elm_syntax$Combine$string(')')),
								A2(
								$stil4m$elm_syntax$Combine$ignore,
								$stil4m$elm_syntax$Combine$string(')'),
								nested)
							])),
					$stil4m$elm_syntax$Combine$string('(')));
		});
}
function $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordFieldDefinition() {
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v13) {
			return A2(
				$stil4m$elm_syntax$Combine$andMap,
				A2(
					$stil4m$elm_syntax$Combine$continueWith,
					$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$typeAnnotation(),
					A2(
						$stil4m$elm_syntax$Combine$continueWith,
						$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
						A2(
							$stil4m$elm_syntax$Combine$continueWith,
							$stil4m$elm_syntax$Combine$string(':'),
							$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout)))),
				A2(
					$stil4m$elm_syntax$Combine$andMap,
					A2(
						$stil4m$elm_syntax$Combine$continueWith,
						$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$functionName),
						$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout)),
					$stil4m$elm_syntax$Combine$succeed($elm$core$Tuple$pair)));
		});
}
function $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordFieldsTypeAnnotation() {
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v12) {
			return A2(
				$stil4m$elm_syntax$Combine$sepBy,
				$stil4m$elm_syntax$Combine$string(','),
				$stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides(
					$stil4m$elm_syntax$Elm$Parser$Node$parser(
						$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordFieldDefinition())));
		});
}
function $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordTypeAnnotation() {
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v11) {
			var nextField = A2(
				$stil4m$elm_syntax$Combine$ignore,
				$stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayout,
				A2(
					$stil4m$elm_syntax$Combine$andMap,
					$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$typeAnnotation(),
					A2(
						$stil4m$elm_syntax$Combine$ignore,
						$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
						A2(
							$stil4m$elm_syntax$Combine$ignore,
							$stil4m$elm_syntax$Combine$string(':'),
							A2(
								$stil4m$elm_syntax$Combine$ignore,
								$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
								A2(
									$stil4m$elm_syntax$Combine$andMap,
									$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$functionName),
									A2(
										$stil4m$elm_syntax$Combine$ignore,
										$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
										A2(
											$stil4m$elm_syntax$Combine$ignore,
											$stil4m$elm_syntax$Combine$string(','),
											$stil4m$elm_syntax$Combine$succeed(
												F2(
													function (a, b) {
														return _Utils_Tuple2(a, b);
													}))))))))));
			var additionalRecordFields = function (items) {
				return $stil4m$elm_syntax$Combine$choice(
					_List_fromArray(
						[
							A2(
							$stil4m$elm_syntax$Combine$andThen,
							function (next) {
								return additionalRecordFields(
									A2($elm$core$List$cons, next, items));
							},
							$stil4m$elm_syntax$Elm$Parser$Node$parser(nextField)),
							$stil4m$elm_syntax$Combine$succeed(
							$elm$core$List$reverse(items))
						]));
			};
			return $stil4m$elm_syntax$Elm$Parser$Node$parser(
				A2(
					$stil4m$elm_syntax$Combine$continueWith,
					$stil4m$elm_syntax$Combine$choice(
						_List_fromArray(
							[
								A2(
								$stil4m$elm_syntax$Combine$continueWith,
								$stil4m$elm_syntax$Combine$succeed(
									$stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Record(_List_Nil)),
								$stil4m$elm_syntax$Combine$string('}')),
								A2(
								$stil4m$elm_syntax$Combine$andThen,
								function (fname) {
									return $stil4m$elm_syntax$Combine$choice(
										_List_fromArray(
											[
												A2(
												$stil4m$elm_syntax$Combine$ignore,
												$stil4m$elm_syntax$Combine$string('}'),
												A2(
													$stil4m$elm_syntax$Combine$andMap,
													$stil4m$elm_syntax$Elm$Parser$Node$parser(
														$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordFieldsTypeAnnotation()),
													A2(
														$stil4m$elm_syntax$Combine$ignore,
														$stil4m$elm_syntax$Combine$string('|'),
														$stil4m$elm_syntax$Combine$succeed(
															$stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericRecord(fname))))),
												A2(
												$stil4m$elm_syntax$Combine$ignore,
												$stil4m$elm_syntax$Combine$string('}'),
												A2(
													$stil4m$elm_syntax$Combine$andThen,
													function (ta) {
														return A2(
															$stil4m$elm_syntax$Combine$map,
															$stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Record,
															additionalRecordFields(
																_List_fromArray(
																	[
																		A3($stil4m$elm_syntax$Elm$Syntax$Node$combine, $elm$core$Tuple$pair, fname, ta)
																	])));
													},
													A2(
														$stil4m$elm_syntax$Combine$ignore,
														$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
														A2(
															$stil4m$elm_syntax$Combine$continueWith,
															$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$typeAnnotation(),
															A2(
																$stil4m$elm_syntax$Combine$ignore,
																$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
																$stil4m$elm_syntax$Combine$string(':'))))))
											]));
								},
								A2(
									$stil4m$elm_syntax$Combine$ignore,
									$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
									$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$functionName)))
							])),
					A2(
						$stil4m$elm_syntax$Combine$ignore,
						$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
						$stil4m$elm_syntax$Combine$string('{'))));
		});
}
function $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$typeAnnotation() {
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v8) {
			return A2(
				$stil4m$elm_syntax$Combine$andThen,
				function (typeRef) {
					return A2(
						$stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayoutWith,
						function (_v9) {
							return $stil4m$elm_syntax$Combine$succeed(typeRef);
						},
						function (_v10) {
							return A2(
								$stil4m$elm_syntax$Combine$or,
								A2(
									$stil4m$elm_syntax$Combine$map,
									function (ta) {
										return A3($stil4m$elm_syntax$Elm$Syntax$Node$combine, $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$FunctionTypeAnnotation, typeRef, ta);
									},
									A2(
										$stil4m$elm_syntax$Combine$continueWith,
										$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$typeAnnotation(),
										A2(
											$stil4m$elm_syntax$Combine$ignore,
											$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
											$stil4m$elm_syntax$Combine$string('->')))),
								$stil4m$elm_syntax$Combine$succeed(typeRef));
						});
				},
				$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typeAnnotationNoFn(0));
		});
}
var $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$parensTypeAnnotation = $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$parensTypeAnnotation();
$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$parensTypeAnnotation = function () {
	return $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$parensTypeAnnotation;
};
var $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$recordFieldDefinition = $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordFieldDefinition();
$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordFieldDefinition = function () {
	return $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$recordFieldDefinition;
};
var $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$recordFieldsTypeAnnotation = $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordFieldsTypeAnnotation();
$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordFieldsTypeAnnotation = function () {
	return $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$recordFieldsTypeAnnotation;
};
var $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$recordTypeAnnotation = $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordTypeAnnotation();
$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordTypeAnnotation = function () {
	return $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$recordTypeAnnotation;
};
var $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typeAnnotation = $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$typeAnnotation();
$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$typeAnnotation = function () {
	return $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typeAnnotation;
};
var $stil4m$elm_syntax$Elm$Parser$Declarations$functionSignatureFromVarPointer = function (varPointer) {
	return A2(
		$stil4m$elm_syntax$Combine$andMap,
		$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typeAnnotation,
		A2(
			$stil4m$elm_syntax$Combine$ignore,
			$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
			A2(
				$stil4m$elm_syntax$Combine$ignore,
				$stil4m$elm_syntax$Combine$string(':'),
				$stil4m$elm_syntax$Combine$succeed(
					function (ta) {
						return A3($stil4m$elm_syntax$Elm$Syntax$Node$combine, $stil4m$elm_syntax$Elm$Syntax$Signature$Signature, varPointer, ta);
					}))));
};
var $stil4m$elm_syntax$Elm$Syntax$Expression$GLSLExpression = function (a) {
	return {$: 23, a: a};
};
var $elm$parser$Parser$NotNestable = 0;
var $stil4m$elm_syntax$Elm$Parser$Declarations$glslExpression = function () {
	var start = '[glsl|';
	var end = '|]';
	return $stil4m$elm_syntax$Elm$Parser$Node$parser(
		A2(
			$stil4m$elm_syntax$Combine$ignore,
			$stil4m$elm_syntax$Combine$string(end),
			A2(
				$stil4m$elm_syntax$Combine$map,
				A2(
					$elm$core$Basics$composeR,
					$elm$core$String$dropLeft(
						$elm$core$String$length(start)),
					$stil4m$elm_syntax$Elm$Syntax$Expression$GLSLExpression),
				$stil4m$elm_syntax$Combine$fromCore(
					$elm$parser$Parser$getChompedString(
						A3($elm$parser$Parser$multiComment, start, end, 0))))));
}();
var $stil4m$elm_syntax$Elm$Parser$Tokens$ifToken = $stil4m$elm_syntax$Combine$string('if');
var $stil4m$elm_syntax$Elm$Parser$Tokens$allowedOperatorTokens = _List_fromArray(
	['+', '-', ':', '/', '*', '>', '<', '=', '/', '&', '^', '%', '|', '!', '.', '#', '$', '≡', '~', '?', '@']);
var $stil4m$elm_syntax$Elm$Parser$Tokens$excludedOperators = _List_fromArray(
	[':', '->', '--', '=']);
var $stil4m$elm_syntax$Combine$Char$oneOf = function (cs) {
	return A2(
		$stil4m$elm_syntax$Combine$andThen,
		A2(
			$elm$core$Basics$composeR,
			$elm$core$Maybe$map($stil4m$elm_syntax$Combine$succeed),
			$elm$core$Maybe$withDefault(
				$stil4m$elm_syntax$Combine$fail(
					'expected one of \'' + ($elm$core$String$fromList(cs) + '\'')))),
		$stil4m$elm_syntax$Combine$Char$satisfy(
			function (a) {
				return A2($elm$core$List$member, a, cs);
			}));
};
var $stil4m$elm_syntax$Elm$Parser$Tokens$operatorTokenFromList = function (allowedChars) {
	return A2(
		$stil4m$elm_syntax$Combine$andThen,
		function (m) {
			return A2($elm$core$List$member, m, $stil4m$elm_syntax$Elm$Parser$Tokens$excludedOperators) ? $stil4m$elm_syntax$Combine$fail('operator is not allowed') : $stil4m$elm_syntax$Combine$succeed(m);
		},
		A2(
			$stil4m$elm_syntax$Combine$map,
			$elm$core$String$fromList,
			$stil4m$elm_syntax$Combine$many1(
				$stil4m$elm_syntax$Combine$Char$oneOf(allowedChars))));
};
var $stil4m$elm_syntax$Elm$Parser$Tokens$infixOperatorToken = $stil4m$elm_syntax$Elm$Parser$Tokens$operatorTokenFromList($stil4m$elm_syntax$Elm$Parser$Tokens$allowedOperatorTokens);
var $stil4m$elm_syntax$Elm$Parser$Layout$layoutStrict = A2(
	$stil4m$elm_syntax$Combine$continueWith,
	$stil4m$elm_syntax$Elm$Parser$Layout$verifyIndent(
		F2(
			function (stateIndent, current) {
				return _Utils_eq(stateIndent, current);
			})),
	$stil4m$elm_syntax$Combine$many1(
		$stil4m$elm_syntax$Combine$choice(
			_List_fromArray(
				[
					$stil4m$elm_syntax$Elm$Parser$Layout$anyComment,
					A2(
					$stil4m$elm_syntax$Combine$continueWith,
					$stil4m$elm_syntax$Combine$succeed(0),
					$stil4m$elm_syntax$Combine$many1($stil4m$elm_syntax$Elm$Parser$Whitespace$realNewLine)),
					$stil4m$elm_syntax$Elm$Parser$Whitespace$many1Spaces
				]))));
var $stil4m$elm_syntax$Elm$Syntax$Expression$RecordAccess = F2(
	function (a, b) {
		return {$: 20, a: a, b: b};
	});
var $stil4m$elm_syntax$Elm$Parser$Declarations$liftRecordAccess = function (e) {
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v0) {
			return A2(
				$stil4m$elm_syntax$Combine$or,
				A2(
					$stil4m$elm_syntax$Combine$andThen,
					$stil4m$elm_syntax$Elm$Parser$Declarations$liftRecordAccess,
					A2(
						$stil4m$elm_syntax$Combine$map,
						function (f) {
							return A3($stil4m$elm_syntax$Elm$Syntax$Node$combine, $stil4m$elm_syntax$Elm$Syntax$Expression$RecordAccess, e, f);
						},
						A2(
							$stil4m$elm_syntax$Combine$continueWith,
							$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$functionName),
							$stil4m$elm_syntax$Combine$string('.')))),
				$stil4m$elm_syntax$Combine$succeed(e));
		});
};
var $stil4m$elm_syntax$Elm$Syntax$Expression$Literal = function (a) {
	return {$: 11, a: a};
};
var $stil4m$elm_syntax$Elm$Parser$Tokens$multiLineStringLiteral = function () {
	var helper = function (s) {
		return s.A ? A2(
			$elm$parser$Parser$map,
			function (v) {
				return $elm$parser$Parser$Loop(
					{
						Z: s.Z,
						A: false,
						n: A2(
							$elm$core$List$cons,
							$elm$core$String$fromChar(v),
							s.n)
					});
			},
			$stil4m$elm_syntax$Elm$Parser$Tokens$escapedCharValue) : $elm$parser$Parser$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$map,
					function (_v0) {
						return $elm$parser$Parser$Done(
							$elm$core$String$concat(
								$elm$core$List$reverse(s.n)));
					},
					$elm$parser$Parser$symbol('\"\"\"')),
					A2(
					$elm$parser$Parser$map,
					function (v) {
						return $elm$parser$Parser$Loop(
							{
								Z: s.Z + 1,
								A: s.A,
								n: A2($elm$core$List$cons, v, s.n)
							});
					},
					$elm$parser$Parser$getChompedString(
						$elm$parser$Parser$symbol('\"'))),
					A2(
					$elm$parser$Parser$map,
					function (_v1) {
						return $elm$parser$Parser$Loop(
							{Z: s.Z + 1, A: true, n: s.n});
					},
					$elm$parser$Parser$getChompedString(
						$elm$parser$Parser$symbol('\\'))),
					A2(
					$elm$parser$Parser$andThen,
					function (_v2) {
						var start = _v2.a;
						var value = _v2.b;
						var end = _v2.c;
						return _Utils_eq(start, end) ? $elm$parser$Parser$problem('Expected a string character or a triple double quote') : $elm$parser$Parser$succeed(
							$elm$parser$Parser$Loop(
								{
									Z: s.Z + 1,
									A: s.A,
									n: A2($elm$core$List$cons, value, s.n)
								}));
					},
					A2(
						$elm$parser$Parser$keeper,
						A2(
							$elm$parser$Parser$keeper,
							A2(
								$elm$parser$Parser$keeper,
								$elm$parser$Parser$succeed(
									F3(
										function (start, value, end) {
											return _Utils_Tuple3(start, value, end);
										})),
								$elm$parser$Parser$getOffset),
							$elm$parser$Parser$getChompedString(
								$elm$parser$Parser$chompWhile(
									function (c) {
										return (c !== '\"') && (c !== '\\');
									}))),
						$elm$parser$Parser$getOffset))
				]));
	};
	return $stil4m$elm_syntax$Combine$fromCore(
		A2(
			$elm$parser$Parser$keeper,
			A2(
				$elm$parser$Parser$ignorer,
				$elm$parser$Parser$succeed($elm$core$Basics$identity),
				$elm$parser$Parser$symbol('\"\"\"')),
			A2(
				$elm$parser$Parser$loop,
				{Z: 0, A: false, n: _List_Nil},
				helper)));
}();
var $stil4m$elm_syntax$Elm$Parser$Declarations$literalExpression = $stil4m$elm_syntax$Combine$lazy(
	function (_v0) {
		return $stil4m$elm_syntax$Elm$Parser$Node$parser(
			A2(
				$stil4m$elm_syntax$Combine$map,
				$stil4m$elm_syntax$Elm$Syntax$Expression$Literal,
				A2($stil4m$elm_syntax$Combine$or, $stil4m$elm_syntax$Elm$Parser$Tokens$multiLineStringLiteral, $stil4m$elm_syntax$Elm$Parser$Tokens$stringLiteral)));
	});
var $stil4m$elm_syntax$Combine$loop = F2(
	function (init, stepper) {
		var wrapper = function (_v3) {
			var oldState = _v3.a;
			var v = _v3.b;
			var _v0 = stepper(v);
			var p = _v0;
			return A2(
				$elm$parser$Parser$map,
				function (_v1) {
					var newState = _v1.a;
					var r = _v1.b;
					if (!r.$) {
						var l = r.a;
						return $elm$parser$Parser$Loop(
							_Utils_Tuple2(newState, l));
					} else {
						var d = r.a;
						return $elm$parser$Parser$Done(
							_Utils_Tuple2(newState, d));
					}
				},
				p(oldState));
		};
		return function (state) {
			return A2(
				$elm$parser$Parser$loop,
				_Utils_Tuple2(state, init),
				wrapper);
		};
	});
var $stil4m$elm_syntax$Elm$Parser$Whitespace$manySpaces = $stil4m$elm_syntax$Combine$fromCore(
	$elm$parser$Parser$chompWhile(
		function (c) {
			return c === ' ';
		}));
var $stil4m$elm_syntax$Elm$Syntax$Expression$Floatable = function (a) {
	return {$: 9, a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Expression$Hex = function (a) {
	return {$: 8, a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Expression$Integer = function (a) {
	return {$: 7, a: a};
};
var $stil4m$elm_syntax$Elm$Parser$Numbers$forgivingNumber = F3(
	function (floatf, intf, hexf) {
		return $stil4m$elm_syntax$Combine$fromCore(
			$elm$parser$Parser$backtrackable(
				A3($stil4m$elm_syntax$Elm$Parser$Numbers$raw, floatf, intf, hexf)));
	});
var $stil4m$elm_syntax$Elm$Parser$Declarations$numberExpression = $stil4m$elm_syntax$Elm$Parser$Node$parser(
	A3($stil4m$elm_syntax$Elm$Parser$Numbers$forgivingNumber, $stil4m$elm_syntax$Elm$Syntax$Expression$Floatable, $stil4m$elm_syntax$Elm$Syntax$Expression$Integer, $stil4m$elm_syntax$Elm$Syntax$Expression$Hex));
var $stil4m$elm_syntax$Elm$Parser$Tokens$ofToken = $stil4m$elm_syntax$Combine$string('of');
var $stil4m$elm_syntax$Elm$Parser$Tokens$allowedPrefixOperatorTokens = A2($elm$core$List$cons, ',', $stil4m$elm_syntax$Elm$Parser$Tokens$allowedOperatorTokens);
var $stil4m$elm_syntax$Elm$Parser$Tokens$prefixOperatorToken = $stil4m$elm_syntax$Elm$Parser$Tokens$operatorTokenFromList($stil4m$elm_syntax$Elm$Parser$Tokens$allowedPrefixOperatorTokens);
var $stil4m$elm_syntax$Elm$Syntax$Expression$RecordAccessFunction = function (a) {
	return {$: 21, a: a};
};
var $stil4m$elm_syntax$Elm$Parser$Declarations$recordAccessFunctionExpression = $stil4m$elm_syntax$Elm$Parser$Node$parser(
	A2(
		$stil4m$elm_syntax$Combine$map,
		A2(
			$elm$core$Basics$composeR,
			$elm$core$Basics$append('.'),
			$stil4m$elm_syntax$Elm$Syntax$Expression$RecordAccessFunction),
		A2(
			$stil4m$elm_syntax$Combine$continueWith,
			$stil4m$elm_syntax$Elm$Parser$Tokens$functionName,
			$stil4m$elm_syntax$Combine$string('.'))));
var $stil4m$elm_syntax$Elm$Syntax$Expression$FunctionOrValue = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $stil4m$elm_syntax$Elm$Parser$Declarations$reference = function () {
	var justFunction = A2(
		$stil4m$elm_syntax$Combine$map,
		function (v) {
			return _Utils_Tuple2(_List_Nil, v);
		},
		$stil4m$elm_syntax$Elm$Parser$Tokens$functionName);
	var helper = function (_v0) {
		var n = _v0.a;
		var xs = _v0.b;
		return $stil4m$elm_syntax$Combine$choice(
			_List_fromArray(
				[
					A2(
					$stil4m$elm_syntax$Combine$continueWith,
					$stil4m$elm_syntax$Combine$choice(
						_List_fromArray(
							[
								A2(
								$stil4m$elm_syntax$Combine$andThen,
								function (t) {
									return helper(
										_Utils_Tuple2(
											t,
											A2($elm$core$List$cons, n, xs)));
								},
								$stil4m$elm_syntax$Elm$Parser$Tokens$typeName),
								A2(
								$stil4m$elm_syntax$Combine$map,
								function (t) {
									return _Utils_Tuple2(
										t,
										A2($elm$core$List$cons, n, xs));
								},
								$stil4m$elm_syntax$Elm$Parser$Tokens$functionName)
							])),
					$stil4m$elm_syntax$Combine$string('.')),
					$stil4m$elm_syntax$Combine$succeed(
					_Utils_Tuple2(n, xs))
				]));
	};
	var recurring = A2(
		$stil4m$elm_syntax$Combine$map,
		function (_v1) {
			var t = _v1.a;
			var xs = _v1.b;
			return _Utils_Tuple2(
				$elm$core$List$reverse(xs),
				t);
		},
		A2(
			$stil4m$elm_syntax$Combine$andThen,
			function (t) {
				return helper(
					_Utils_Tuple2(t, _List_Nil));
			},
			$stil4m$elm_syntax$Elm$Parser$Tokens$typeName));
	return $stil4m$elm_syntax$Combine$choice(
		_List_fromArray(
			[recurring, justFunction]));
}();
var $stil4m$elm_syntax$Elm$Parser$Declarations$referenceExpression = $stil4m$elm_syntax$Elm$Parser$Node$parser(
	A2(
		$stil4m$elm_syntax$Combine$map,
		function (_v0) {
			var xs = _v0.a;
			var x = _v0.b;
			return A2($stil4m$elm_syntax$Elm$Syntax$Expression$FunctionOrValue, xs, x);
		},
		$stil4m$elm_syntax$Elm$Parser$Declarations$reference));
var $stil4m$elm_syntax$Elm$Parser$Tokens$thenToken = $stil4m$elm_syntax$Combine$string('then');
var $stil4m$elm_syntax$Elm$Parser$Ranges$asPointerLocation = function (_v0) {
	var line = _v0.bw;
	var column = _v0.an;
	return {an: column, aB: line};
};
var $stil4m$elm_syntax$Elm$Parser$Ranges$withCurrentPoint = function (p) {
	return $stil4m$elm_syntax$Combine$withLocation(
		function (start) {
			var k = $stil4m$elm_syntax$Elm$Parser$Ranges$asPointerLocation(start);
			return p(
				{a$: k, bg: k});
		});
};
var $stil4m$elm_syntax$Elm$Parser$State$popIndent = function (_v0) {
	var s = _v0;
	return _Utils_update(
		s,
		{
			aP: A2($elm$core$List$drop, 1, s.aP)
		});
};
var $stil4m$elm_syntax$Elm$Parser$State$pushIndent = F2(
	function (x, _v0) {
		var s = _v0;
		return _Utils_update(
			s,
			{
				aP: A2($elm$core$List$cons, x, s.aP)
			});
	});
var $stil4m$elm_syntax$Elm$Parser$State$pushColumn = F2(
	function (col, state) {
		return A2($stil4m$elm_syntax$Elm$Parser$State$pushIndent, col - 1, state);
	});
var $stil4m$elm_syntax$Elm$Parser$Declarations$withIndentedState = function (p) {
	return $stil4m$elm_syntax$Combine$withLocation(
		function (location) {
			return A2(
				$stil4m$elm_syntax$Combine$ignore,
				$stil4m$elm_syntax$Combine$modifyState($stil4m$elm_syntax$Elm$Parser$State$popIndent),
				A2(
					$stil4m$elm_syntax$Combine$continueWith,
					p,
					$stil4m$elm_syntax$Combine$modifyState(
						$stil4m$elm_syntax$Elm$Parser$State$pushColumn(location.an))));
		});
};
var $stil4m$elm_syntax$Elm$Parser$Declarations$functionWithNameNode = function (pointer) {
	var functionImplementationFromVarPointer = function (varPointer) {
		return A2(
			$stil4m$elm_syntax$Combine$andMap,
			$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(),
			A2(
				$stil4m$elm_syntax$Combine$ignore,
				$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
				A2(
					$stil4m$elm_syntax$Combine$ignore,
					$stil4m$elm_syntax$Combine$string('='),
					A2(
						$stil4m$elm_syntax$Combine$andMap,
						$stil4m$elm_syntax$Combine$many(
							A2(
								$stil4m$elm_syntax$Combine$ignore,
								$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
								$stil4m$elm_syntax$Elm$Parser$Declarations$functionArgument)),
						$stil4m$elm_syntax$Combine$succeed(
							F2(
								function (args, expr) {
									return A2(
										$stil4m$elm_syntax$Elm$Syntax$Node$Node,
										$stil4m$elm_syntax$Elm$Syntax$Range$combine(
											_List_fromArray(
												[
													$stil4m$elm_syntax$Elm$Syntax$Node$range(varPointer),
													$stil4m$elm_syntax$Elm$Syntax$Node$range(expr)
												])),
										A3($stil4m$elm_syntax$Elm$Syntax$Expression$FunctionImplementation, varPointer, args, expr));
								}))))));
	};
	var functionWithoutSignature = function (varPointer) {
		return A2(
			$stil4m$elm_syntax$Combine$map,
			A2($stil4m$elm_syntax$Elm$Syntax$Expression$Function, $elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing),
			functionImplementationFromVarPointer(varPointer));
	};
	var fromParts = F2(
		function (sig, decl) {
			return {
				dZ: decl,
				cg: $elm$core$Maybe$Nothing,
				ez: $elm$core$Maybe$Just(sig)
			};
		});
	var functionWithSignature = function (varPointer) {
		return A2(
			$stil4m$elm_syntax$Combine$andThen,
			function (sig) {
				return A2(
					$stil4m$elm_syntax$Combine$map,
					fromParts(sig),
					A2(
						$stil4m$elm_syntax$Combine$andThen,
						functionImplementationFromVarPointer,
						A2(
							$stil4m$elm_syntax$Combine$ignore,
							$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
							A2(
								$stil4m$elm_syntax$Combine$continueWith,
								$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$functionName),
								$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layoutStrict)))));
			},
			$stil4m$elm_syntax$Elm$Parser$Declarations$functionSignatureFromVarPointer(varPointer));
	};
	return $stil4m$elm_syntax$Combine$choice(
		_List_fromArray(
			[
				functionWithSignature(pointer),
				functionWithoutSignature(pointer)
			]));
};
var $stil4m$elm_syntax$Elm$Parser$Declarations$letDestructuringDeclarationWithPattern = function (p) {
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v7) {
			return A2(
				$stil4m$elm_syntax$Combine$andMap,
				$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(),
				A2(
					$stil4m$elm_syntax$Combine$ignore,
					$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
					A2(
						$stil4m$elm_syntax$Combine$ignore,
						$stil4m$elm_syntax$Combine$string('='),
						A2(
							$stil4m$elm_syntax$Combine$ignore,
							$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
							$stil4m$elm_syntax$Combine$succeed(
								$stil4m$elm_syntax$Elm$Syntax$Expression$LetDestructuring(p))))));
		});
};
function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseBlock() {
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v28) {
			return A2(
				$stil4m$elm_syntax$Combine$ignore,
				$stil4m$elm_syntax$Elm$Parser$Tokens$ofToken,
				A2(
					$stil4m$elm_syntax$Combine$continueWith,
					$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(),
					A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Layout$layout, $stil4m$elm_syntax$Elm$Parser$Tokens$caseToken)));
		});
}
function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseExpression() {
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v26) {
			return A2(
				$stil4m$elm_syntax$Combine$andThen,
				function (_v27) {
					var start = _v27.a;
					return A2(
						$stil4m$elm_syntax$Combine$map,
						function (cb) {
							return A2(
								$stil4m$elm_syntax$Elm$Syntax$Node$Node,
								$stil4m$elm_syntax$Elm$Syntax$Range$combine(
									A2(
										$elm$core$List$cons,
										start,
										A2(
											$elm$core$List$map,
											A2($elm$core$Basics$composeR, $elm$core$Tuple$second, $stil4m$elm_syntax$Elm$Syntax$Node$range),
											cb.dS))),
								$stil4m$elm_syntax$Elm$Syntax$Expression$CaseExpression(cb));
						},
						A2(
							$stil4m$elm_syntax$Combine$andMap,
							A2(
								$stil4m$elm_syntax$Combine$continueWith,
								$stil4m$elm_syntax$Elm$Parser$Declarations$withIndentedState(
									$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseStatements()),
								$stil4m$elm_syntax$Elm$Parser$Layout$layout),
							A2(
								$stil4m$elm_syntax$Combine$andMap,
								$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseBlock(),
								$stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Syntax$Expression$CaseBlock))));
				},
				$stil4m$elm_syntax$Elm$Parser$Node$parser(
					$stil4m$elm_syntax$Combine$succeed(0)));
		});
}
function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseStatement() {
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v25) {
			return A2(
				$stil4m$elm_syntax$Combine$andMap,
				A2(
					$stil4m$elm_syntax$Combine$continueWith,
					$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(),
					A2(
						$stil4m$elm_syntax$Combine$continueWith,
						$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
						A2(
							$stil4m$elm_syntax$Combine$continueWith,
							$stil4m$elm_syntax$Combine$string('->'),
							$stil4m$elm_syntax$Combine$maybe(
								A2($stil4m$elm_syntax$Combine$or, $stil4m$elm_syntax$Elm$Parser$Layout$layout, $stil4m$elm_syntax$Elm$Parser$Layout$layoutStrict))))),
				A2(
					$stil4m$elm_syntax$Combine$andMap,
					$stil4m$elm_syntax$Elm$Parser$Patterns$pattern,
					$stil4m$elm_syntax$Combine$succeed($elm$core$Tuple$pair)));
		});
}
function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseStatements() {
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v24) {
			var helper = function (last) {
				return $stil4m$elm_syntax$Combine$withState(
					function (s) {
						return $stil4m$elm_syntax$Combine$withLocation(
							function (l) {
								return _Utils_eq(
									$stil4m$elm_syntax$Elm$Parser$State$expectedColumn(s),
									l.an) ? $stil4m$elm_syntax$Combine$choice(
									_List_fromArray(
										[
											A2(
											$stil4m$elm_syntax$Combine$map,
											function (c) {
												return $stil4m$elm_syntax$Combine$Loop(
													A2($elm$core$List$cons, c, last));
											},
											$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseStatement()),
											$stil4m$elm_syntax$Combine$succeed(
											$stil4m$elm_syntax$Combine$Done(
												$elm$core$List$reverse(last)))
										])) : $stil4m$elm_syntax$Combine$succeed(
									$stil4m$elm_syntax$Combine$Done(
										$elm$core$List$reverse(last)));
							});
					});
			};
			return A2(
				$stil4m$elm_syntax$Combine$andThen,
				function (v) {
					return A2($stil4m$elm_syntax$Combine$loop, v, helper);
				},
				A2(
					$stil4m$elm_syntax$Combine$map,
					$elm$core$List$singleton,
					$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseStatement()));
		});
}
function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression() {
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v18) {
			return A2(
				$stil4m$elm_syntax$Combine$andThen,
				function (first) {
					var complete = function (rest) {
						if (!rest.b) {
							return $stil4m$elm_syntax$Combine$succeed(first);
						} else {
							if (rest.a.b.$ === 6) {
								var _v23 = rest.a;
								return $stil4m$elm_syntax$Combine$fail('Expression should not end with an operator');
							} else {
								return $stil4m$elm_syntax$Combine$succeed(
									A2(
										$stil4m$elm_syntax$Elm$Syntax$Node$Node,
										$stil4m$elm_syntax$Elm$Syntax$Range$combine(
											A2(
												$elm$core$List$cons,
												$stil4m$elm_syntax$Elm$Syntax$Node$range(first),
												A2($elm$core$List$map, $stil4m$elm_syntax$Elm$Syntax$Node$range, rest))),
										$stil4m$elm_syntax$Elm$Syntax$Expression$Application(
											A2(
												$elm$core$List$cons,
												first,
												$elm$core$List$reverse(rest)))));
							}
						}
					};
					var promoter = function (rest) {
						return A2(
							$stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayoutWith,
							function (_v19) {
								return complete(rest);
							},
							function (_v20) {
								return A2(
									$stil4m$elm_syntax$Combine$or,
									A2(
										$stil4m$elm_syntax$Combine$andThen,
										function (next) {
											return promoter(
												A2($elm$core$List$cons, next, rest));
										},
										$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expressionNotApplication()),
									complete(rest));
							});
					};
					if (first.b.$ === 6) {
						return $stil4m$elm_syntax$Combine$fail('Expression should not start with an operator');
					} else {
						return promoter(_List_Nil);
					}
				},
				$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expressionNotApplication());
		});
}
function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expressionNotApplication() {
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v17) {
			return A2(
				$stil4m$elm_syntax$Combine$andThen,
				$stil4m$elm_syntax$Elm$Parser$Declarations$liftRecordAccess,
				$stil4m$elm_syntax$Combine$choice(
					_List_fromArray(
						[
							$stil4m$elm_syntax$Elm$Parser$Declarations$numberExpression,
							$stil4m$elm_syntax$Elm$Parser$Declarations$referenceExpression,
							$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$ifBlockExpression(),
							$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$tupledExpression(),
							$stil4m$elm_syntax$Elm$Parser$Declarations$recordAccessFunctionExpression,
							$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$operatorExpression(),
							$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letExpression(),
							$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$lambdaExpression(),
							$stil4m$elm_syntax$Elm$Parser$Declarations$literalExpression,
							$stil4m$elm_syntax$Elm$Parser$Declarations$charLiteralExpression,
							$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$recordExpression(),
							$stil4m$elm_syntax$Elm$Parser$Declarations$glslExpression,
							$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$listExpression(),
							$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseExpression()
						])));
		});
}
function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$ifBlockExpression() {
	return $stil4m$elm_syntax$Elm$Parser$Ranges$withCurrentPoint(
		function (current) {
			return A2(
				$stil4m$elm_syntax$Combine$continueWith,
				$stil4m$elm_syntax$Combine$lazy(
					function (_v16) {
						return A2(
							$stil4m$elm_syntax$Combine$andMap,
							A2(
								$stil4m$elm_syntax$Combine$continueWith,
								$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(),
								A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Layout$layout, $stil4m$elm_syntax$Elm$Parser$Tokens$elseToken)),
							A2(
								$stil4m$elm_syntax$Combine$ignore,
								$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
								A2(
									$stil4m$elm_syntax$Combine$andMap,
									$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(),
									A2(
										$stil4m$elm_syntax$Combine$ignore,
										$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
										A2(
											$stil4m$elm_syntax$Combine$ignore,
											$stil4m$elm_syntax$Elm$Parser$Tokens$thenToken,
											A2(
												$stil4m$elm_syntax$Combine$ignore,
												$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
												A2(
													$stil4m$elm_syntax$Combine$andMap,
													$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(),
													A2(
														$stil4m$elm_syntax$Combine$ignore,
														$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
														$stil4m$elm_syntax$Combine$succeed(
															F3(
																function (condition, ifTrue, ifFalse) {
																	return A2(
																		$stil4m$elm_syntax$Elm$Syntax$Node$Node,
																		{
																			a$: $stil4m$elm_syntax$Elm$Syntax$Node$range(ifFalse).a$,
																			bg: current.bg
																		},
																		A3($stil4m$elm_syntax$Elm$Syntax$Expression$IfBlock, condition, ifTrue, ifFalse));
																}))))))))));
					}),
				$stil4m$elm_syntax$Elm$Parser$Tokens$ifToken);
		});
}
function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$lambdaExpression() {
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v15) {
			return $stil4m$elm_syntax$Elm$Parser$Ranges$withCurrentPoint(
				function (current) {
					return A2(
						$stil4m$elm_syntax$Combine$andMap,
						A2(
							$stil4m$elm_syntax$Combine$continueWith,
							$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(),
							$stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides(
								$stil4m$elm_syntax$Combine$string('->'))),
						A2(
							$stil4m$elm_syntax$Combine$andMap,
							A2(
								$stil4m$elm_syntax$Combine$sepBy1,
								$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
								$stil4m$elm_syntax$Elm$Parser$Declarations$functionArgument),
							A2(
								$stil4m$elm_syntax$Combine$ignore,
								$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
								A2(
									$stil4m$elm_syntax$Combine$ignore,
									$stil4m$elm_syntax$Combine$string('\\'),
									$stil4m$elm_syntax$Combine$succeed(
										F2(
											function (args, expr) {
												return A2(
													$stil4m$elm_syntax$Elm$Syntax$Node$Node,
													{
														a$: $stil4m$elm_syntax$Elm$Syntax$Node$range(expr).a$,
														bg: current.bg
													},
													$stil4m$elm_syntax$Elm$Syntax$Expression$LambdaExpression(
														A2($stil4m$elm_syntax$Elm$Syntax$Expression$Lambda, args, expr)));
											}))))));
				});
		});
}
function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letBlock() {
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v14) {
			return A2(
				$stil4m$elm_syntax$Combine$ignore,
				A2(
					$stil4m$elm_syntax$Combine$continueWith,
					$stil4m$elm_syntax$Combine$string('in'),
					$stil4m$elm_syntax$Combine$choice(
						_List_fromArray(
							[$stil4m$elm_syntax$Elm$Parser$Layout$layout, $stil4m$elm_syntax$Elm$Parser$Whitespace$manySpaces]))),
				A2(
					$stil4m$elm_syntax$Combine$continueWith,
					$stil4m$elm_syntax$Elm$Parser$Declarations$withIndentedState(
						$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letBody()),
					A2(
						$stil4m$elm_syntax$Combine$continueWith,
						$stil4m$elm_syntax$Elm$Parser$Layout$layout,
						$stil4m$elm_syntax$Combine$string('let'))));
		});
}
function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letBody() {
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v8) {
			var blockElement = A2(
				$stil4m$elm_syntax$Combine$andThen,
				function (_v12) {
					var r = _v12.a;
					var p = _v12.b;
					if (p.$ === 11) {
						var v = p.a;
						return A2(
							$stil4m$elm_syntax$Combine$map,
							$stil4m$elm_syntax$Elm$Syntax$Expression$LetFunction,
							$stil4m$elm_syntax$Elm$Parser$Declarations$functionWithNameNode(
								A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, r, v)));
					} else {
						return $stil4m$elm_syntax$Elm$Parser$Declarations$letDestructuringDeclarationWithPattern(
							A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, r, p));
					}
				},
				$stil4m$elm_syntax$Elm$Parser$Patterns$pattern);
			var addRange = function (letDeclaration) {
				return A2(
					$stil4m$elm_syntax$Elm$Syntax$Node$Node,
					function () {
						if (!letDeclaration.$) {
							var letFunction = letDeclaration.a;
							return $stil4m$elm_syntax$Elm$Syntax$Expression$functionRange(letFunction);
						} else {
							var _v10 = letDeclaration.a;
							var patternRange = _v10.a;
							var _v11 = letDeclaration.b;
							var expressionRange = _v11.a;
							return $stil4m$elm_syntax$Elm$Syntax$Range$combine(
								_List_fromArray(
									[patternRange, expressionRange]));
						}
					}(),
					letDeclaration);
			};
			return A2(
				$stil4m$elm_syntax$Combine$andMap,
				$stil4m$elm_syntax$Combine$many(
					A2(
						$stil4m$elm_syntax$Combine$ignore,
						$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
						A2($stil4m$elm_syntax$Combine$map, addRange, blockElement))),
				A2(
					$stil4m$elm_syntax$Combine$andMap,
					A2($stil4m$elm_syntax$Combine$map, addRange, blockElement),
					$stil4m$elm_syntax$Combine$succeed($elm$core$List$cons)));
		});
}
function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letExpression() {
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v6) {
			return $stil4m$elm_syntax$Elm$Parser$Ranges$withCurrentPoint(
				function (current) {
					return A2(
						$stil4m$elm_syntax$Combine$andMap,
						A2(
							$stil4m$elm_syntax$Combine$continueWith,
							$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(),
							$stil4m$elm_syntax$Elm$Parser$Layout$layout),
						A2(
							$stil4m$elm_syntax$Combine$andMap,
							$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letBlock(),
							$stil4m$elm_syntax$Combine$succeed(
								F2(
									function (decls, expr) {
										return A2(
											$stil4m$elm_syntax$Elm$Syntax$Node$Node,
											{
												a$: $stil4m$elm_syntax$Elm$Syntax$Node$range(expr).a$,
												bg: current.bg
											},
											$stil4m$elm_syntax$Elm$Syntax$Expression$LetExpression(
												A2($stil4m$elm_syntax$Elm$Syntax$Expression$LetBlock, decls, expr)));
									}))));
				});
		});
}
function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$listExpression() {
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v5) {
			var innerExpressions = A2(
				$stil4m$elm_syntax$Combine$map,
				$stil4m$elm_syntax$Elm$Syntax$Expression$ListExpr,
				A2(
					$stil4m$elm_syntax$Combine$andMap,
					$stil4m$elm_syntax$Combine$many(
						A2(
							$stil4m$elm_syntax$Combine$continueWith,
							$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(),
							A2(
								$stil4m$elm_syntax$Combine$ignore,
								$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
								$stil4m$elm_syntax$Combine$string(',')))),
					A2(
						$stil4m$elm_syntax$Combine$ignore,
						$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
						A2(
							$stil4m$elm_syntax$Combine$andMap,
							$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(),
							$stil4m$elm_syntax$Combine$succeed($elm$core$List$cons)))));
			return $stil4m$elm_syntax$Elm$Parser$Node$parser(
				A2(
					$stil4m$elm_syntax$Combine$continueWith,
					$stil4m$elm_syntax$Combine$choice(
						_List_fromArray(
							[
								A2(
								$stil4m$elm_syntax$Combine$map,
								$elm$core$Basics$always(
									$stil4m$elm_syntax$Elm$Syntax$Expression$ListExpr(_List_Nil)),
								$stil4m$elm_syntax$Combine$string(']')),
								A2(
								$stil4m$elm_syntax$Combine$ignore,
								$stil4m$elm_syntax$Combine$string(']'),
								innerExpressions)
							])),
					A2(
						$stil4m$elm_syntax$Combine$ignore,
						$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
						$stil4m$elm_syntax$Combine$string('['))));
		});
}
function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$operatorExpression() {
	var negationExpression = $stil4m$elm_syntax$Combine$lazy(
		function (_v4) {
			return A2(
				$stil4m$elm_syntax$Combine$map,
				$stil4m$elm_syntax$Elm$Syntax$Expression$Negation,
				A2(
					$stil4m$elm_syntax$Combine$andThen,
					$stil4m$elm_syntax$Elm$Parser$Declarations$liftRecordAccess,
					$stil4m$elm_syntax$Combine$choice(
						_List_fromArray(
							[
								$stil4m$elm_syntax$Elm$Parser$Declarations$referenceExpression,
								$stil4m$elm_syntax$Elm$Parser$Declarations$numberExpression,
								$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$tupledExpression()
							]))));
		});
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v3) {
			return $stil4m$elm_syntax$Combine$choice(
				_List_fromArray(
					[
						$stil4m$elm_syntax$Elm$Parser$Node$parser(
						A2(
							$stil4m$elm_syntax$Combine$continueWith,
							$stil4m$elm_syntax$Combine$choice(
								_List_fromArray(
									[
										negationExpression,
										A2(
										$stil4m$elm_syntax$Combine$ignore,
										$stil4m$elm_syntax$Elm$Parser$Layout$layout,
										$stil4m$elm_syntax$Combine$succeed(
											$stil4m$elm_syntax$Elm$Syntax$Expression$Operator('-')))
									])),
							$stil4m$elm_syntax$Combine$string('-'))),
						$stil4m$elm_syntax$Elm$Parser$Node$parser(
						A2($stil4m$elm_syntax$Combine$map, $stil4m$elm_syntax$Elm$Syntax$Expression$Operator, $stil4m$elm_syntax$Elm$Parser$Tokens$infixOperatorToken))
					]));
		});
}
function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$recordExpression() {
	return $stil4m$elm_syntax$Elm$Parser$Node$parser(
		$stil4m$elm_syntax$Combine$lazy(
			function (_v2) {
				var recordField = $stil4m$elm_syntax$Elm$Parser$Node$parser(
					A2(
						$stil4m$elm_syntax$Combine$andMap,
						$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(),
						A2(
							$stil4m$elm_syntax$Combine$ignore,
							$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
							A2(
								$stil4m$elm_syntax$Combine$ignore,
								$stil4m$elm_syntax$Combine$string('='),
								A2(
									$stil4m$elm_syntax$Combine$ignore,
									$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
									A2(
										$stil4m$elm_syntax$Combine$andMap,
										$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$functionName),
										$stil4m$elm_syntax$Combine$succeed($elm$core$Tuple$pair)))))));
				var recordFields = A2(
					$stil4m$elm_syntax$Combine$andMap,
					$stil4m$elm_syntax$Combine$many(
						A2(
							$stil4m$elm_syntax$Combine$ignore,
							$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
							A2(
								$stil4m$elm_syntax$Combine$continueWith,
								recordField,
								A2(
									$stil4m$elm_syntax$Combine$ignore,
									$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
									$stil4m$elm_syntax$Combine$string(','))))),
					A2(
						$stil4m$elm_syntax$Combine$ignore,
						$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
						A2(
							$stil4m$elm_syntax$Combine$andMap,
							recordField,
							$stil4m$elm_syntax$Combine$succeed($elm$core$List$cons))));
				var recordUpdateSyntaxParser = function (fname) {
					return A2(
						$stil4m$elm_syntax$Combine$ignore,
						$stil4m$elm_syntax$Combine$string('}'),
						A2(
							$stil4m$elm_syntax$Combine$map,
							function (e) {
								return A2($stil4m$elm_syntax$Elm$Syntax$Expression$RecordUpdateExpression, fname, e);
							},
							A2(
								$stil4m$elm_syntax$Combine$continueWith,
								recordFields,
								A2(
									$stil4m$elm_syntax$Combine$ignore,
									$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
									$stil4m$elm_syntax$Combine$string('|')))));
				};
				var recordContents = A2(
					$stil4m$elm_syntax$Combine$andThen,
					function (fname) {
						return $stil4m$elm_syntax$Combine$choice(
							_List_fromArray(
								[
									recordUpdateSyntaxParser(fname),
									A2(
									$stil4m$elm_syntax$Combine$andThen,
									function (fieldUpdate) {
										return $stil4m$elm_syntax$Combine$choice(
											_List_fromArray(
												[
													A2(
													$stil4m$elm_syntax$Combine$map,
													$elm$core$Basics$always(
														$stil4m$elm_syntax$Elm$Syntax$Expression$RecordExpr(
															_List_fromArray(
																[fieldUpdate]))),
													$stil4m$elm_syntax$Combine$string('}')),
													A2(
													$stil4m$elm_syntax$Combine$ignore,
													$stil4m$elm_syntax$Combine$string('}'),
													A2(
														$stil4m$elm_syntax$Combine$map,
														function (fieldUpdates) {
															return $stil4m$elm_syntax$Elm$Syntax$Expression$RecordExpr(
																A2($elm$core$List$cons, fieldUpdate, fieldUpdates));
														},
														A2(
															$stil4m$elm_syntax$Combine$continueWith,
															recordFields,
															A2(
																$stil4m$elm_syntax$Combine$ignore,
																$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
																$stil4m$elm_syntax$Combine$string(',')))))
												]));
									},
									A2(
										$stil4m$elm_syntax$Combine$ignore,
										$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
										A2(
											$stil4m$elm_syntax$Combine$continueWith,
											A2(
												$stil4m$elm_syntax$Combine$map,
												function (e) {
													return A3($stil4m$elm_syntax$Elm$Syntax$Node$combine, $elm$core$Tuple$pair, fname, e);
												},
												$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression()),
											A2(
												$stil4m$elm_syntax$Combine$ignore,
												$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
												$stil4m$elm_syntax$Combine$string('=')))))
								]));
					},
					A2(
						$stil4m$elm_syntax$Combine$ignore,
						$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
						$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$functionName)));
				return A2(
					$stil4m$elm_syntax$Combine$continueWith,
					$stil4m$elm_syntax$Combine$choice(
						_List_fromArray(
							[
								A2(
								$stil4m$elm_syntax$Combine$map,
								$elm$core$Basics$always(
									$stil4m$elm_syntax$Elm$Syntax$Expression$RecordExpr(_List_Nil)),
								$stil4m$elm_syntax$Combine$string('}')),
								recordContents
							])),
					A2(
						$stil4m$elm_syntax$Combine$ignore,
						$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
						$stil4m$elm_syntax$Combine$string('{')));
			}));
}
function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$tupledExpression() {
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v0) {
			var commaSep = $stil4m$elm_syntax$Combine$many(
				A2(
					$stil4m$elm_syntax$Combine$ignore,
					$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
					A2(
						$stil4m$elm_syntax$Combine$continueWith,
						$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(),
						A2(
							$stil4m$elm_syntax$Combine$ignore,
							$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
							$stil4m$elm_syntax$Combine$string(',')))));
			var closingParen = $stil4m$elm_syntax$Combine$fromCore(
				$elm$parser$Parser$symbol(')'));
			var asExpression = F2(
				function (x, xs) {
					if (!xs.b) {
						return $stil4m$elm_syntax$Elm$Syntax$Expression$ParenthesizedExpression(x);
					} else {
						return $stil4m$elm_syntax$Elm$Syntax$Expression$TupledExpression(
							A2($elm$core$List$cons, x, xs));
					}
				});
			var nested = A2(
				$stil4m$elm_syntax$Combine$andMap,
				commaSep,
				A2(
					$stil4m$elm_syntax$Combine$ignore,
					$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
					A2(
						$stil4m$elm_syntax$Combine$andMap,
						$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(),
						A2(
							$stil4m$elm_syntax$Combine$ignore,
							$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
							$stil4m$elm_syntax$Combine$succeed(asExpression)))));
			return $stil4m$elm_syntax$Elm$Parser$Node$parser(
				A2(
					$stil4m$elm_syntax$Combine$continueWith,
					$stil4m$elm_syntax$Combine$choice(
						_List_fromArray(
							[
								A2(
								$stil4m$elm_syntax$Combine$map,
								$elm$core$Basics$always($stil4m$elm_syntax$Elm$Syntax$Expression$UnitExpr),
								closingParen),
								$stil4m$elm_syntax$Combine$backtrackable(
								A2(
									$stil4m$elm_syntax$Combine$map,
									$stil4m$elm_syntax$Elm$Syntax$Expression$PrefixOperator,
									A2($stil4m$elm_syntax$Combine$ignore, closingParen, $stil4m$elm_syntax$Elm$Parser$Tokens$prefixOperatorToken))),
								A2($stil4m$elm_syntax$Combine$ignore, closingParen, nested)
							])),
					$stil4m$elm_syntax$Combine$fromCore(
						$elm$parser$Parser$symbol('('))));
		});
}
var $stil4m$elm_syntax$Elm$Parser$Declarations$caseBlock = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseBlock();
$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseBlock = function () {
	return $stil4m$elm_syntax$Elm$Parser$Declarations$caseBlock;
};
var $stil4m$elm_syntax$Elm$Parser$Declarations$caseExpression = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseExpression();
$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseExpression = function () {
	return $stil4m$elm_syntax$Elm$Parser$Declarations$caseExpression;
};
var $stil4m$elm_syntax$Elm$Parser$Declarations$caseStatement = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseStatement();
$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseStatement = function () {
	return $stil4m$elm_syntax$Elm$Parser$Declarations$caseStatement;
};
var $stil4m$elm_syntax$Elm$Parser$Declarations$caseStatements = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseStatements();
$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseStatements = function () {
	return $stil4m$elm_syntax$Elm$Parser$Declarations$caseStatements;
};
var $stil4m$elm_syntax$Elm$Parser$Declarations$expression = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression();
$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression = function () {
	return $stil4m$elm_syntax$Elm$Parser$Declarations$expression;
};
var $stil4m$elm_syntax$Elm$Parser$Declarations$expressionNotApplication = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expressionNotApplication();
$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expressionNotApplication = function () {
	return $stil4m$elm_syntax$Elm$Parser$Declarations$expressionNotApplication;
};
var $stil4m$elm_syntax$Elm$Parser$Declarations$ifBlockExpression = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$ifBlockExpression();
$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$ifBlockExpression = function () {
	return $stil4m$elm_syntax$Elm$Parser$Declarations$ifBlockExpression;
};
var $stil4m$elm_syntax$Elm$Parser$Declarations$lambdaExpression = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$lambdaExpression();
$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$lambdaExpression = function () {
	return $stil4m$elm_syntax$Elm$Parser$Declarations$lambdaExpression;
};
var $stil4m$elm_syntax$Elm$Parser$Declarations$letBlock = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letBlock();
$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letBlock = function () {
	return $stil4m$elm_syntax$Elm$Parser$Declarations$letBlock;
};
var $stil4m$elm_syntax$Elm$Parser$Declarations$letBody = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letBody();
$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letBody = function () {
	return $stil4m$elm_syntax$Elm$Parser$Declarations$letBody;
};
var $stil4m$elm_syntax$Elm$Parser$Declarations$letExpression = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letExpression();
$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letExpression = function () {
	return $stil4m$elm_syntax$Elm$Parser$Declarations$letExpression;
};
var $stil4m$elm_syntax$Elm$Parser$Declarations$listExpression = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$listExpression();
$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$listExpression = function () {
	return $stil4m$elm_syntax$Elm$Parser$Declarations$listExpression;
};
var $stil4m$elm_syntax$Elm$Parser$Declarations$operatorExpression = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$operatorExpression();
$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$operatorExpression = function () {
	return $stil4m$elm_syntax$Elm$Parser$Declarations$operatorExpression;
};
var $stil4m$elm_syntax$Elm$Parser$Declarations$recordExpression = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$recordExpression();
$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$recordExpression = function () {
	return $stil4m$elm_syntax$Elm$Parser$Declarations$recordExpression;
};
var $stil4m$elm_syntax$Elm$Parser$Declarations$tupledExpression = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$tupledExpression();
$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$tupledExpression = function () {
	return $stil4m$elm_syntax$Elm$Parser$Declarations$tupledExpression;
};
var $stil4m$elm_syntax$Elm$Parser$Declarations$destructuringDeclaration = $stil4m$elm_syntax$Combine$lazy(
	function (_v0) {
		return A2(
			$stil4m$elm_syntax$Combine$andMap,
			$stil4m$elm_syntax$Elm$Parser$Declarations$expression,
			A2(
				$stil4m$elm_syntax$Combine$ignore,
				$stil4m$elm_syntax$Elm$Parser$Layout$layout,
				A2(
					$stil4m$elm_syntax$Combine$ignore,
					$stil4m$elm_syntax$Combine$string('='),
					A2(
						$stil4m$elm_syntax$Combine$andMap,
						$stil4m$elm_syntax$Elm$Parser$Patterns$pattern,
						$stil4m$elm_syntax$Combine$succeed(
							F2(
								function (x, y) {
									return A3($stil4m$elm_syntax$Elm$Syntax$Node$combine, $stil4m$elm_syntax$Elm$Syntax$Declaration$Destructuring, x, y);
								}))))));
	});
var $stil4m$elm_syntax$Elm$Syntax$Declaration$FunctionDeclaration = function (a) {
	return {$: 0, a: a};
};
var $stil4m$elm_syntax$Elm$Parser$Declarations$function = $stil4m$elm_syntax$Combine$lazy(
	function (_v0) {
		return A2(
			$stil4m$elm_syntax$Combine$map,
			function (f) {
				return A2(
					$stil4m$elm_syntax$Elm$Syntax$Node$Node,
					$stil4m$elm_syntax$Elm$Syntax$Expression$functionRange(f),
					$stil4m$elm_syntax$Elm$Syntax$Declaration$FunctionDeclaration(f));
			},
			A2(
				$stil4m$elm_syntax$Combine$andThen,
				$stil4m$elm_syntax$Elm$Parser$Declarations$functionWithNameNode,
				A2(
					$stil4m$elm_syntax$Combine$ignore,
					$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
					$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$functionName))));
	});
var $stil4m$elm_syntax$Elm$Syntax$Declaration$InfixDeclaration = function (a) {
	return {$: 4, a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Infix$Infix = F4(
	function (direction, precedence, operator, _function) {
		return {d_: direction, d5: _function, eq: operator, et: precedence};
	});
var $stil4m$elm_syntax$Elm$Parser$Infix$infixDirection = $stil4m$elm_syntax$Combine$choice(
	_List_fromArray(
		[
			A2(
			$stil4m$elm_syntax$Combine$ignore,
			$stil4m$elm_syntax$Combine$string('right'),
			$stil4m$elm_syntax$Combine$succeed(1)),
			A2(
			$stil4m$elm_syntax$Combine$ignore,
			$stil4m$elm_syntax$Combine$string('left'),
			$stil4m$elm_syntax$Combine$succeed(0)),
			A2(
			$stil4m$elm_syntax$Combine$ignore,
			$stil4m$elm_syntax$Combine$string('non'),
			$stil4m$elm_syntax$Combine$succeed(2))
		]));
var $elm$parser$Parser$Advanced$int = F2(
	function (expecting, invalid) {
		return $elm$parser$Parser$Advanced$number(
			{
				cQ: $elm$core$Result$Err(invalid),
				c0: expecting,
				c4: $elm$core$Result$Err(invalid),
				c8: $elm$core$Result$Err(invalid),
				db: $elm$core$Result$Ok($elm$core$Basics$identity),
				ea: invalid,
				dj: $elm$core$Result$Err(invalid)
			});
	});
var $elm$parser$Parser$int = A2($elm$parser$Parser$Advanced$int, $elm$parser$Parser$ExpectingInt, $elm$parser$Parser$ExpectingInt);
var $stil4m$elm_syntax$Combine$Num$int = $stil4m$elm_syntax$Combine$fromCore($elm$parser$Parser$int);
var $stil4m$elm_syntax$Elm$Parser$Infix$infixDefinition = A2(
	$stil4m$elm_syntax$Combine$andMap,
	$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$functionName),
	A2(
		$stil4m$elm_syntax$Combine$ignore,
		$stil4m$elm_syntax$Elm$Parser$Layout$layout,
		A2(
			$stil4m$elm_syntax$Combine$ignore,
			$stil4m$elm_syntax$Combine$string('='),
			A2(
				$stil4m$elm_syntax$Combine$ignore,
				$stil4m$elm_syntax$Elm$Parser$Layout$layout,
				A2(
					$stil4m$elm_syntax$Combine$andMap,
					$stil4m$elm_syntax$Elm$Parser$Node$parser(
						$stil4m$elm_syntax$Combine$parens($stil4m$elm_syntax$Elm$Parser$Tokens$prefixOperatorToken)),
					A2(
						$stil4m$elm_syntax$Combine$ignore,
						$stil4m$elm_syntax$Elm$Parser$Layout$layout,
						A2(
							$stil4m$elm_syntax$Combine$andMap,
							$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Combine$Num$int),
							A2(
								$stil4m$elm_syntax$Combine$ignore,
								$stil4m$elm_syntax$Elm$Parser$Layout$layout,
								A2(
									$stil4m$elm_syntax$Combine$andMap,
									$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Infix$infixDirection),
									A2(
										$stil4m$elm_syntax$Combine$ignore,
										$stil4m$elm_syntax$Elm$Parser$Layout$layout,
										A2(
											$stil4m$elm_syntax$Combine$ignore,
											$stil4m$elm_syntax$Combine$fromCore(
												$elm$parser$Parser$keyword('infix')),
											$stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Syntax$Infix$Infix))))))))))));
var $stil4m$elm_syntax$Elm$Parser$Declarations$infixDeclaration = $stil4m$elm_syntax$Elm$Parser$Ranges$withCurrentPoint(
	function (current) {
		return A2(
			$stil4m$elm_syntax$Combine$map,
			function (inf) {
				return A2(
					$stil4m$elm_syntax$Elm$Syntax$Node$Node,
					$stil4m$elm_syntax$Elm$Syntax$Range$combine(
						_List_fromArray(
							[
								current,
								$stil4m$elm_syntax$Elm$Syntax$Node$range(inf.d5)
							])),
					$stil4m$elm_syntax$Elm$Syntax$Declaration$InfixDeclaration(inf));
			},
			$stil4m$elm_syntax$Elm$Parser$Infix$infixDefinition);
	});
var $stil4m$elm_syntax$Elm$Syntax$Declaration$PortDeclaration = function (a) {
	return {$: 3, a: a};
};
var $stil4m$elm_syntax$Elm$Parser$Tokens$portToken = $stil4m$elm_syntax$Combine$string('port');
var $stil4m$elm_syntax$Elm$Parser$Declarations$signature = A2(
	$stil4m$elm_syntax$Combine$andMap,
	A2(
		$stil4m$elm_syntax$Combine$continueWith,
		$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typeAnnotation,
		A2(
			$stil4m$elm_syntax$Combine$continueWith,
			$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
			$stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides(
				$stil4m$elm_syntax$Combine$string(':')))),
	A2(
		$stil4m$elm_syntax$Combine$andMap,
		$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$functionName),
		$stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Syntax$Signature$Signature)));
var $stil4m$elm_syntax$Elm$Parser$Declarations$portDeclaration = $stil4m$elm_syntax$Elm$Parser$Ranges$withCurrentPoint(
	function (current) {
		return A2(
			$stil4m$elm_syntax$Combine$map,
			function (sig) {
				return A2(
					$stil4m$elm_syntax$Elm$Syntax$Node$Node,
					$stil4m$elm_syntax$Elm$Syntax$Range$combine(
						_List_fromArray(
							[
								current,
								function (_v0) {
								var r = _v0.a;
								return r;
							}(sig.dG)
							])),
					$stil4m$elm_syntax$Elm$Syntax$Declaration$PortDeclaration(sig));
			},
			A2(
				$stil4m$elm_syntax$Combine$continueWith,
				$stil4m$elm_syntax$Elm$Parser$Declarations$signature,
				A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Layout$layout, $stil4m$elm_syntax$Elm$Parser$Tokens$portToken)));
	});
var $stil4m$elm_syntax$Elm$Parser$Typings$DefinedAlias = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $stil4m$elm_syntax$Elm$Parser$Typings$DefinedType = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $stil4m$elm_syntax$Elm$Syntax$Type$Type = F4(
	function (documentation, name, generics, constructors) {
		return {dX: constructors, cg: documentation, c5: generics, aW: name};
	});
var $stil4m$elm_syntax$Elm$Syntax$TypeAlias$TypeAlias = F4(
	function (documentation, name, generics, typeAnnotation) {
		return {cg: documentation, c5: generics, aW: name, dG: typeAnnotation};
	});
var $stil4m$elm_syntax$Elm$Parser$Typings$genericList = $stil4m$elm_syntax$Combine$many(
	A2(
		$stil4m$elm_syntax$Combine$ignore,
		$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
		$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$functionName)));
var $stil4m$elm_syntax$Elm$Parser$Typings$typePrefix = A2(
	$stil4m$elm_syntax$Combine$continueWith,
	$stil4m$elm_syntax$Elm$Parser$Layout$layout,
	$stil4m$elm_syntax$Combine$string('type'));
var $stil4m$elm_syntax$Elm$Syntax$Type$ValueConstructor = F2(
	function (name, _arguments) {
		return {cO: _arguments, aW: name};
	});
var $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typeAnnotationNonGreedy = $stil4m$elm_syntax$Combine$choice(
	_List_fromArray(
		[
			$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$parensTypeAnnotation,
			$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typedTypeAnnotation(1),
			$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$genericTypeAnnotation,
			$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$recordTypeAnnotation
		]));
var $stil4m$elm_syntax$Elm$Parser$Typings$valueConstructor = A2(
	$stil4m$elm_syntax$Combine$andThen,
	function (tnn) {
		var range = tnn.a;
		var complete = function (args) {
			return $stil4m$elm_syntax$Combine$succeed(
				A2(
					$stil4m$elm_syntax$Elm$Syntax$Node$Node,
					$stil4m$elm_syntax$Elm$Syntax$Range$combine(
						A2(
							$elm$core$List$cons,
							range,
							A2($elm$core$List$map, $stil4m$elm_syntax$Elm$Syntax$Node$range, args))),
					A2($stil4m$elm_syntax$Elm$Syntax$Type$ValueConstructor, tnn, args)));
		};
		var argHelper = function (xs) {
			return A2(
				$stil4m$elm_syntax$Combine$continueWith,
				$stil4m$elm_syntax$Combine$choice(
					_List_fromArray(
						[
							A2(
							$stil4m$elm_syntax$Combine$andThen,
							function (ta) {
								return A2(
									$stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayoutWith,
									function (_v0) {
										return $stil4m$elm_syntax$Combine$succeed(
											$elm$core$List$reverse(
												A2($elm$core$List$cons, ta, xs)));
									},
									function (_v1) {
										return argHelper(
											A2($elm$core$List$cons, ta, xs));
									});
							},
							$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typeAnnotationNonGreedy),
							$stil4m$elm_syntax$Combine$succeed(
							$elm$core$List$reverse(xs))
						])),
				$stil4m$elm_syntax$Combine$succeed(0));
		};
		return A2(
			$stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayoutWith,
			function (_v2) {
				return complete(_List_Nil);
			},
			function (_v3) {
				return A2(
					$stil4m$elm_syntax$Combine$andThen,
					complete,
					argHelper(_List_Nil));
			});
	},
	A2(
		$stil4m$elm_syntax$Combine$continueWith,
		$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$typeName),
		$stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Syntax$Type$ValueConstructor)));
var $stil4m$elm_syntax$Elm$Parser$Typings$valueConstructors = A2(
	$stil4m$elm_syntax$Combine$sepBy1,
	A2(
		$stil4m$elm_syntax$Combine$ignore,
		$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
		$stil4m$elm_syntax$Combine$string('|')),
	$stil4m$elm_syntax$Elm$Parser$Typings$valueConstructor);
var $stil4m$elm_syntax$Elm$Parser$Typings$typeDefinition = $stil4m$elm_syntax$Elm$Parser$Ranges$withCurrentPoint(
	function (start) {
		return A2(
			$stil4m$elm_syntax$Combine$continueWith,
			$stil4m$elm_syntax$Combine$choice(
				_List_fromArray(
					[
						A2(
						$stil4m$elm_syntax$Combine$map,
						function (typeAlias) {
							return A2(
								$stil4m$elm_syntax$Elm$Parser$Typings$DefinedAlias,
								$stil4m$elm_syntax$Elm$Syntax$Range$combine(
									_List_fromArray(
										[
											start,
											$stil4m$elm_syntax$Elm$Syntax$Node$range(typeAlias.dG)
										])),
								typeAlias);
						},
						A2(
							$stil4m$elm_syntax$Combine$andMap,
							$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typeAnnotation,
							A2(
								$stil4m$elm_syntax$Combine$ignore,
								$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
								A2(
									$stil4m$elm_syntax$Combine$ignore,
									$stil4m$elm_syntax$Combine$string('='),
									A2(
										$stil4m$elm_syntax$Combine$andMap,
										$stil4m$elm_syntax$Elm$Parser$Typings$genericList,
										A2(
											$stil4m$elm_syntax$Combine$ignore,
											$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
											A2(
												$stil4m$elm_syntax$Combine$andMap,
												A2(
													$stil4m$elm_syntax$Combine$ignore,
													$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
													$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$typeName)),
												A2(
													$stil4m$elm_syntax$Combine$ignore,
													A2(
														$stil4m$elm_syntax$Combine$continueWith,
														$stil4m$elm_syntax$Elm$Parser$Layout$layout,
														$stil4m$elm_syntax$Combine$string('alias')),
													$stil4m$elm_syntax$Combine$succeed(
														$stil4m$elm_syntax$Elm$Syntax$TypeAlias$TypeAlias($elm$core$Maybe$Nothing)))))))))),
						A2(
						$stil4m$elm_syntax$Combine$map,
						function (tipe) {
							return A2(
								$stil4m$elm_syntax$Elm$Parser$Typings$DefinedType,
								$stil4m$elm_syntax$Elm$Syntax$Range$combine(
									A2(
										$elm$core$List$cons,
										start,
										A2(
											$elm$core$List$map,
											function (_v0) {
												var r = _v0.a;
												return r;
											},
											tipe.dX))),
								tipe);
						},
						A2(
							$stil4m$elm_syntax$Combine$andMap,
							$stil4m$elm_syntax$Elm$Parser$Typings$valueConstructors,
							A2(
								$stil4m$elm_syntax$Combine$ignore,
								A2(
									$stil4m$elm_syntax$Combine$ignore,
									$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
									$stil4m$elm_syntax$Combine$string('=')),
								A2(
									$stil4m$elm_syntax$Combine$ignore,
									$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
									A2(
										$stil4m$elm_syntax$Combine$andMap,
										$stil4m$elm_syntax$Elm$Parser$Typings$genericList,
										A2(
											$stil4m$elm_syntax$Combine$ignore,
											$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
											A2(
												$stil4m$elm_syntax$Combine$andMap,
												$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$typeName),
												$stil4m$elm_syntax$Combine$succeed(
													$stil4m$elm_syntax$Elm$Syntax$Type$Type($elm$core$Maybe$Nothing)))))))))
					])),
			$stil4m$elm_syntax$Elm$Parser$Typings$typePrefix);
	});
var $stil4m$elm_syntax$Elm$Parser$Declarations$declaration = $stil4m$elm_syntax$Combine$lazy(
	function (_v0) {
		return $stil4m$elm_syntax$Combine$choice(
			_List_fromArray(
				[
					$stil4m$elm_syntax$Elm$Parser$Declarations$infixDeclaration,
					$stil4m$elm_syntax$Elm$Parser$Declarations$function,
					A2(
					$stil4m$elm_syntax$Combine$map,
					function (v) {
						if (!v.$) {
							var r = v.a;
							var t = v.b;
							return A2(
								$stil4m$elm_syntax$Elm$Syntax$Node$Node,
								r,
								$stil4m$elm_syntax$Elm$Syntax$Declaration$CustomTypeDeclaration(t));
						} else {
							var r = v.a;
							var a = v.b;
							return A2(
								$stil4m$elm_syntax$Elm$Syntax$Node$Node,
								r,
								$stil4m$elm_syntax$Elm$Syntax$Declaration$AliasDeclaration(a));
						}
					},
					$stil4m$elm_syntax$Elm$Parser$Typings$typeDefinition),
					$stil4m$elm_syntax$Elm$Parser$Declarations$portDeclaration,
					$stil4m$elm_syntax$Elm$Parser$Declarations$destructuringDeclaration
				]));
	});
var $stil4m$elm_syntax$Elm$Parser$File$fileDeclarations = $stil4m$elm_syntax$Combine$many(
	A2(
		$stil4m$elm_syntax$Combine$ignore,
		$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layoutStrict),
		$stil4m$elm_syntax$Elm$Parser$Declarations$declaration));
var $stil4m$elm_syntax$Elm$Syntax$Import$Import = F3(
	function (moduleName, moduleAlias, exposingList) {
		return {ck: exposingList, ec: moduleAlias, b_: moduleName};
	});
var $stil4m$elm_syntax$Elm$Parser$Tokens$asToken = $stil4m$elm_syntax$Combine$fromCore(
	$elm$parser$Parser$keyword('as'));
var $stil4m$elm_syntax$Elm$Syntax$Exposing$All = function (a) {
	return {$: 0, a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Exposing$FunctionExpose = function (a) {
	return {$: 1, a: a};
};
var $stil4m$elm_syntax$Elm$Parser$Expose$functionExpose = $stil4m$elm_syntax$Elm$Parser$Node$parser(
	A2($stil4m$elm_syntax$Combine$map, $stil4m$elm_syntax$Elm$Syntax$Exposing$FunctionExpose, $stil4m$elm_syntax$Elm$Parser$Tokens$functionName));
var $stil4m$elm_syntax$Elm$Syntax$Exposing$InfixExpose = function (a) {
	return {$: 0, a: a};
};
var $stil4m$elm_syntax$Combine$while = function (pred) {
	return function (state) {
		return A2(
			$elm$parser$Parser$map,
			function (x) {
				return _Utils_Tuple2(state, x);
			},
			$elm$parser$Parser$getChompedString(
				$elm$parser$Parser$chompWhile(pred)));
	};
};
var $stil4m$elm_syntax$Elm$Parser$Expose$infixExpose = $stil4m$elm_syntax$Combine$lazy(
	function (_v0) {
		return $stil4m$elm_syntax$Elm$Parser$Node$parser(
			A2(
				$stil4m$elm_syntax$Combine$map,
				$stil4m$elm_syntax$Elm$Syntax$Exposing$InfixExpose,
				$stil4m$elm_syntax$Combine$parens(
					$stil4m$elm_syntax$Combine$while(
						$elm$core$Basics$neq(')')))));
	});
var $stil4m$elm_syntax$Elm$Syntax$Exposing$ExposedType = F2(
	function (name, open) {
		return {aW: name, ep: open};
	});
var $stil4m$elm_syntax$Elm$Syntax$Exposing$TypeExpose = function (a) {
	return {$: 3, a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Exposing$TypeOrAliasExpose = function (a) {
	return {$: 2, a: a};
};
var $stil4m$elm_syntax$Elm$Parser$Expose$typeExpose = A2(
	$stil4m$elm_syntax$Combine$andThen,
	function (tipe) {
		return $stil4m$elm_syntax$Combine$choice(
			_List_fromArray(
				[
					A2(
					$stil4m$elm_syntax$Combine$map,
					function (openRange) {
						return A2(
							$stil4m$elm_syntax$Elm$Syntax$Node$Node,
							$stil4m$elm_syntax$Elm$Syntax$Range$combine(
								_List_fromArray(
									[
										$stil4m$elm_syntax$Elm$Syntax$Node$range(tipe),
										openRange
									])),
							$stil4m$elm_syntax$Elm$Syntax$Exposing$TypeExpose(
								A2(
									$stil4m$elm_syntax$Elm$Syntax$Exposing$ExposedType,
									$stil4m$elm_syntax$Elm$Syntax$Node$value(tipe),
									$elm$core$Maybe$Just(openRange))));
					},
					A2(
						$stil4m$elm_syntax$Combine$map,
						$stil4m$elm_syntax$Elm$Syntax$Node$range,
						$stil4m$elm_syntax$Elm$Parser$Node$parser(
							$stil4m$elm_syntax$Combine$parens(
								$stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides(
									$stil4m$elm_syntax$Combine$string('..')))))),
					$stil4m$elm_syntax$Combine$succeed(
					A2($stil4m$elm_syntax$Elm$Syntax$Node$map, $stil4m$elm_syntax$Elm$Syntax$Exposing$TypeOrAliasExpose, tipe))
				]));
	},
	A2(
		$stil4m$elm_syntax$Combine$ignore,
		$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
		$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$typeName)));
var $stil4m$elm_syntax$Elm$Parser$Expose$exposable = $stil4m$elm_syntax$Combine$lazy(
	function (_v0) {
		return $stil4m$elm_syntax$Combine$choice(
			_List_fromArray(
				[$stil4m$elm_syntax$Elm$Parser$Expose$typeExpose, $stil4m$elm_syntax$Elm$Parser$Expose$infixExpose, $stil4m$elm_syntax$Elm$Parser$Expose$functionExpose]));
	});
var $stil4m$elm_syntax$Elm$Parser$Ranges$withRange = function (p) {
	return $stil4m$elm_syntax$Combine$withLocation(
		function (start) {
			return A2(
				$stil4m$elm_syntax$Combine$andMap,
				$stil4m$elm_syntax$Combine$withLocation(
					function (end) {
						return $stil4m$elm_syntax$Combine$succeed(
							{
								a$: $stil4m$elm_syntax$Elm$Parser$Ranges$asPointerLocation(end),
								bg: $stil4m$elm_syntax$Elm$Parser$Ranges$asPointerLocation(start)
							});
					}),
				p);
		});
};
var $stil4m$elm_syntax$Elm$Parser$Expose$exposingListInner = A2(
	$stil4m$elm_syntax$Combine$or,
	$stil4m$elm_syntax$Elm$Parser$Ranges$withRange(
		A2(
			$stil4m$elm_syntax$Combine$ignore,
			$stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides(
				$stil4m$elm_syntax$Combine$string('..')),
			$stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Syntax$Exposing$All))),
	A2(
		$stil4m$elm_syntax$Combine$map,
		$stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit,
		A2(
			$stil4m$elm_syntax$Combine$sepBy,
			$stil4m$elm_syntax$Combine$Char$char(','),
			$stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides($stil4m$elm_syntax$Elm$Parser$Expose$exposable))));
var $stil4m$elm_syntax$Elm$Parser$Expose$exposeListWith = $stil4m$elm_syntax$Combine$parens(
	A2(
		$stil4m$elm_syntax$Combine$ignore,
		$stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayout,
		A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Expose$exposingListInner, $stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayout)));
var $stil4m$elm_syntax$Elm$Parser$Tokens$exposingToken = $stil4m$elm_syntax$Combine$string('exposing');
var $stil4m$elm_syntax$Elm$Parser$Expose$exposeDefinition = A2(
	$stil4m$elm_syntax$Combine$continueWith,
	$stil4m$elm_syntax$Elm$Parser$Expose$exposeListWith,
	A2(
		$stil4m$elm_syntax$Combine$continueWith,
		$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
		$stil4m$elm_syntax$Elm$Parser$Tokens$exposingToken));
var $stil4m$elm_syntax$Elm$Parser$Tokens$importToken = $stil4m$elm_syntax$Combine$fromCore(
	$elm$parser$Parser$keyword('import'));
var $stil4m$elm_syntax$Elm$Parser$Base$moduleName = A2(
	$stil4m$elm_syntax$Combine$sepBy1,
	$stil4m$elm_syntax$Combine$string('.'),
	$stil4m$elm_syntax$Elm$Parser$Tokens$typeName);
var $stil4m$elm_syntax$Elm$Parser$Imports$setupNode = F2(
	function (start, imp) {
		var allRanges = _List_fromArray(
			[
				$elm$core$Maybe$Just(start),
				$elm$core$Maybe$Just(
				$stil4m$elm_syntax$Elm$Syntax$Node$range(imp.b_)),
				A2($elm$core$Maybe$map, $stil4m$elm_syntax$Elm$Syntax$Node$range, imp.ck),
				A2($elm$core$Maybe$map, $stil4m$elm_syntax$Elm$Syntax$Node$range, imp.ec)
			]);
		return A2(
			$stil4m$elm_syntax$Elm$Syntax$Node$Node,
			$stil4m$elm_syntax$Elm$Syntax$Range$combine(
				A2($elm$core$List$filterMap, $elm$core$Basics$identity, allRanges)),
			imp);
	});
var $stil4m$elm_syntax$Elm$Parser$Imports$importDefinition = function () {
	var parseExposingDefinition = F2(
		function (mod, asDef) {
			return $stil4m$elm_syntax$Combine$choice(
				_List_fromArray(
					[
						A2(
						$stil4m$elm_syntax$Combine$map,
						A2(
							$elm$core$Basics$composeR,
							$elm$core$Maybe$Just,
							A2($stil4m$elm_syntax$Elm$Syntax$Import$Import, mod, asDef)),
						$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Expose$exposeDefinition)),
						$stil4m$elm_syntax$Combine$succeed(
						A3($stil4m$elm_syntax$Elm$Syntax$Import$Import, mod, asDef, $elm$core$Maybe$Nothing))
					]));
		});
	var importAndModuleName = A2(
		$stil4m$elm_syntax$Combine$continueWith,
		$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Base$moduleName),
		A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Layout$layout, $stil4m$elm_syntax$Elm$Parser$Tokens$importToken));
	var asDefinition = A2(
		$stil4m$elm_syntax$Combine$continueWith,
		$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Base$moduleName),
		A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Layout$layout, $stil4m$elm_syntax$Elm$Parser$Tokens$asToken));
	var parseAsDefinition = function (mod) {
		return $stil4m$elm_syntax$Combine$choice(
			_List_fromArray(
				[
					A2(
					$stil4m$elm_syntax$Combine$andThen,
					A2(
						$elm$core$Basics$composeR,
						$elm$core$Maybe$Just,
						parseExposingDefinition(mod)),
					A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayout, asDefinition)),
					A2(parseExposingDefinition, mod, $elm$core$Maybe$Nothing)
				]));
	};
	return A2(
		$stil4m$elm_syntax$Combine$andThen,
		function (_v0) {
			var start = _v0.a;
			return A2(
				$stil4m$elm_syntax$Combine$map,
				$stil4m$elm_syntax$Elm$Parser$Imports$setupNode(start),
				A2(
					$stil4m$elm_syntax$Combine$andThen,
					parseAsDefinition,
					A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayout, importAndModuleName)));
		},
		$stil4m$elm_syntax$Elm$Parser$Node$parser(
			$stil4m$elm_syntax$Combine$succeed(0)));
}();
var $stil4m$elm_syntax$Elm$Syntax$Module$EffectModule = function (a) {
	return {$: 2, a: a};
};
var $stil4m$elm_syntax$Elm$Parser$Modules$effectWhereClause = A2(
	$stil4m$elm_syntax$Combine$andMap,
	A2(
		$stil4m$elm_syntax$Combine$continueWith,
		$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$typeName),
		$stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides(
			$stil4m$elm_syntax$Combine$string('='))),
	A2(
		$stil4m$elm_syntax$Combine$andMap,
		$stil4m$elm_syntax$Elm$Parser$Tokens$functionName,
		$stil4m$elm_syntax$Combine$succeed($elm$core$Tuple$pair)));
var $stil4m$elm_syntax$Elm$Parser$Modules$whereBlock = A2(
	$stil4m$elm_syntax$Combine$map,
	function (pairs) {
		return {
			dV: A2(
				$elm$core$Maybe$map,
				$elm$core$Tuple$second,
				$elm$core$List$head(
					A2(
						$elm$core$List$filter,
						A2(
							$elm$core$Basics$composeR,
							$elm$core$Tuple$first,
							$elm$core$Basics$eq('command')),
						pairs))),
			eE: A2(
				$elm$core$Maybe$map,
				$elm$core$Tuple$second,
				$elm$core$List$head(
					A2(
						$elm$core$List$filter,
						A2(
							$elm$core$Basics$composeR,
							$elm$core$Tuple$first,
							$elm$core$Basics$eq('subscription')),
						pairs)))
		};
	},
	A3(
		$stil4m$elm_syntax$Combine$between,
		$stil4m$elm_syntax$Combine$string('{'),
		$stil4m$elm_syntax$Combine$string('}'),
		A2(
			$stil4m$elm_syntax$Combine$sepBy1,
			$stil4m$elm_syntax$Combine$string(','),
			$stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides($stil4m$elm_syntax$Elm$Parser$Modules$effectWhereClause))));
var $stil4m$elm_syntax$Elm$Parser$Modules$effectWhereClauses = A2(
	$stil4m$elm_syntax$Combine$continueWith,
	$stil4m$elm_syntax$Elm$Parser$Modules$whereBlock,
	A2(
		$stil4m$elm_syntax$Combine$continueWith,
		$stil4m$elm_syntax$Elm$Parser$Layout$layout,
		$stil4m$elm_syntax$Combine$string('where')));
var $stil4m$elm_syntax$Elm$Parser$Tokens$moduleToken = $stil4m$elm_syntax$Combine$string('module');
var $stil4m$elm_syntax$Elm$Parser$Modules$effectModuleDefinition = function () {
	var createEffectModule = F3(
		function (name, whereClauses, exp) {
			return $stil4m$elm_syntax$Elm$Syntax$Module$EffectModule(
				{dV: whereClauses.dV, ck: exp, b_: name, eE: whereClauses.eE});
		});
	return A2(
		$stil4m$elm_syntax$Combine$andMap,
		$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Expose$exposeDefinition),
		A2(
			$stil4m$elm_syntax$Combine$ignore,
			$stil4m$elm_syntax$Elm$Parser$Layout$layout,
			A2(
				$stil4m$elm_syntax$Combine$andMap,
				$stil4m$elm_syntax$Elm$Parser$Modules$effectWhereClauses,
				A2(
					$stil4m$elm_syntax$Combine$ignore,
					$stil4m$elm_syntax$Elm$Parser$Layout$layout,
					A2(
						$stil4m$elm_syntax$Combine$andMap,
						$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Base$moduleName),
						A2(
							$stil4m$elm_syntax$Combine$ignore,
							$stil4m$elm_syntax$Elm$Parser$Layout$layout,
							A2(
								$stil4m$elm_syntax$Combine$ignore,
								$stil4m$elm_syntax$Elm$Parser$Tokens$moduleToken,
								A2(
									$stil4m$elm_syntax$Combine$ignore,
									$stil4m$elm_syntax$Elm$Parser$Layout$layout,
									A2(
										$stil4m$elm_syntax$Combine$ignore,
										$stil4m$elm_syntax$Combine$string('effect'),
										$stil4m$elm_syntax$Combine$succeed(createEffectModule))))))))));
}();
var $stil4m$elm_syntax$Elm$Syntax$Module$DefaultModuleData = F2(
	function (moduleName, exposingList) {
		return {ck: exposingList, b_: moduleName};
	});
var $stil4m$elm_syntax$Elm$Syntax$Module$NormalModule = function (a) {
	return {$: 0, a: a};
};
var $stil4m$elm_syntax$Elm$Parser$Modules$normalModuleDefinition = A2(
	$stil4m$elm_syntax$Combine$map,
	$stil4m$elm_syntax$Elm$Syntax$Module$NormalModule,
	A2(
		$stil4m$elm_syntax$Combine$andMap,
		$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Expose$exposeDefinition),
		A2(
			$stil4m$elm_syntax$Combine$ignore,
			$stil4m$elm_syntax$Elm$Parser$Layout$layout,
			A2(
				$stil4m$elm_syntax$Combine$andMap,
				$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Base$moduleName),
				A2(
					$stil4m$elm_syntax$Combine$ignore,
					$stil4m$elm_syntax$Elm$Parser$Layout$layout,
					A2(
						$stil4m$elm_syntax$Combine$ignore,
						$stil4m$elm_syntax$Elm$Parser$Tokens$moduleToken,
						$stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Syntax$Module$DefaultModuleData)))))));
var $stil4m$elm_syntax$Elm$Syntax$Module$PortModule = function (a) {
	return {$: 1, a: a};
};
var $stil4m$elm_syntax$Elm$Parser$Modules$portModuleDefinition = A2(
	$stil4m$elm_syntax$Combine$map,
	$stil4m$elm_syntax$Elm$Syntax$Module$PortModule,
	A2(
		$stil4m$elm_syntax$Combine$andMap,
		$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Expose$exposeDefinition),
		A2(
			$stil4m$elm_syntax$Combine$ignore,
			$stil4m$elm_syntax$Elm$Parser$Layout$layout,
			A2(
				$stil4m$elm_syntax$Combine$andMap,
				$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Base$moduleName),
				A2(
					$stil4m$elm_syntax$Combine$ignore,
					$stil4m$elm_syntax$Elm$Parser$Layout$layout,
					A2(
						$stil4m$elm_syntax$Combine$ignore,
						$stil4m$elm_syntax$Elm$Parser$Tokens$moduleToken,
						A2(
							$stil4m$elm_syntax$Combine$ignore,
							$stil4m$elm_syntax$Elm$Parser$Layout$layout,
							A2(
								$stil4m$elm_syntax$Combine$ignore,
								$stil4m$elm_syntax$Elm$Parser$Tokens$portToken,
								$stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Syntax$Module$DefaultModuleData)))))))));
var $stil4m$elm_syntax$Elm$Parser$Modules$moduleDefinition = $stil4m$elm_syntax$Combine$choice(
	_List_fromArray(
		[$stil4m$elm_syntax$Elm$Parser$Modules$normalModuleDefinition, $stil4m$elm_syntax$Elm$Parser$Modules$portModuleDefinition, $stil4m$elm_syntax$Elm$Parser$Modules$effectModuleDefinition]));
var $stil4m$elm_syntax$Elm$Parser$File$file = A2(
	$stil4m$elm_syntax$Combine$ignore,
	$stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayout,
	A2(
		$stil4m$elm_syntax$Combine$andMap,
		$stil4m$elm_syntax$Elm$Parser$File$collectComments,
		A2(
			$stil4m$elm_syntax$Combine$andMap,
			$stil4m$elm_syntax$Elm$Parser$File$fileDeclarations,
			A2(
				$stil4m$elm_syntax$Combine$ignore,
				$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layoutStrict),
				A2(
					$stil4m$elm_syntax$Combine$andMap,
					$stil4m$elm_syntax$Combine$many(
						A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayout, $stil4m$elm_syntax$Elm$Parser$Imports$importDefinition)),
					A2(
						$stil4m$elm_syntax$Combine$ignore,
						$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layoutStrict),
						A2(
							$stil4m$elm_syntax$Combine$andMap,
							$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Modules$moduleDefinition),
							A2(
								$stil4m$elm_syntax$Combine$ignore,
								$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layoutStrict),
								$stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Syntax$File$File)))))))));
var $stil4m$elm_syntax$Elm$Internal$RawFile$Raw = $elm$core$Basics$identity;
var $stil4m$elm_syntax$Elm$Internal$RawFile$fromFile = $elm$core$Basics$identity;
var $elm$parser$Parser$DeadEnd = F3(
	function (row, col, problem) {
		return {cU: col, dm: problem, aB: row};
	});
var $elm$parser$Parser$problemToDeadEnd = function (p) {
	return A3($elm$parser$Parser$DeadEnd, p.aB, p.cU, p.dm);
};
var $elm$parser$Parser$Advanced$bagToList = F2(
	function (bag, list) {
		bagToList:
		while (true) {
			switch (bag.$) {
				case 0:
					return list;
				case 1:
					var bag1 = bag.a;
					var x = bag.b;
					var $temp$bag = bag1,
						$temp$list = A2($elm$core$List$cons, x, list);
					bag = $temp$bag;
					list = $temp$list;
					continue bagToList;
				default:
					var bag1 = bag.a;
					var bag2 = bag.b;
					var $temp$bag = bag1,
						$temp$list = A2($elm$parser$Parser$Advanced$bagToList, bag2, list);
					bag = $temp$bag;
					list = $temp$list;
					continue bagToList;
			}
		}
	});
var $elm$parser$Parser$Advanced$run = F2(
	function (_v0, src) {
		var parse = _v0;
		var _v1 = parse(
			{cU: 1, f: _List_Nil, i: 1, b: 0, aB: 1, a: src});
		if (!_v1.$) {
			var value = _v1.b;
			return $elm$core$Result$Ok(value);
		} else {
			var bag = _v1.b;
			return $elm$core$Result$Err(
				A2($elm$parser$Parser$Advanced$bagToList, bag, _List_Nil));
		}
	});
var $elm$parser$Parser$run = F2(
	function (parser, source) {
		var _v0 = A2($elm$parser$Parser$Advanced$run, parser, source);
		if (!_v0.$) {
			var a = _v0.a;
			return $elm$core$Result$Ok(a);
		} else {
			var problems = _v0.a;
			return $elm$core$Result$Err(
				A2($elm$core$List$map, $elm$parser$Parser$problemToDeadEnd, problems));
		}
	});
var $stil4m$elm_syntax$Combine$runParser = F3(
	function (_v0, st, s) {
		var p = _v0;
		return A2(
			$elm$parser$Parser$run,
			p(st),
			s);
	});
var $elm$parser$Parser$ExpectingEnd = {$: 10};
var $elm$parser$Parser$Advanced$end = function (x) {
	return function (s) {
		return _Utils_eq(
			$elm$core$String$length(s.a),
			s.b) ? A3($elm$parser$Parser$Advanced$Good, false, 0, s) : A2(
			$elm$parser$Parser$Advanced$Bad,
			false,
			A2($elm$parser$Parser$Advanced$fromState, s, x));
	};
};
var $elm$parser$Parser$end = $elm$parser$Parser$Advanced$end($elm$parser$Parser$ExpectingEnd);
var $stil4m$elm_syntax$Combine$end = function (state) {
	return A2(
		$elm$parser$Parser$map,
		function (x) {
			return _Utils_Tuple2(state, x);
		},
		$elm$parser$Parser$end);
};
var $stil4m$elm_syntax$Elm$Parser$withEnd = function (p) {
	return A2(
		$stil4m$elm_syntax$Combine$ignore,
		$stil4m$elm_syntax$Combine$withLocation(
			function (_v0) {
				return $stil4m$elm_syntax$Combine$end;
			}),
		p);
};
var $stil4m$elm_syntax$Elm$Parser$parse = function (input) {
	var _v0 = A3(
		$stil4m$elm_syntax$Combine$runParser,
		$stil4m$elm_syntax$Elm$Parser$withEnd($stil4m$elm_syntax$Elm$Parser$File$file),
		$stil4m$elm_syntax$Elm$Parser$State$emptyState,
		input + '\n');
	if (!_v0.$) {
		var _v1 = _v0.a;
		var r = _v1.b;
		return $elm$core$Result$Ok(
			$stil4m$elm_syntax$Elm$Internal$RawFile$fromFile(r));
	} else {
		var s = _v0.a;
		return $elm$core$Result$Err(s);
	}
};
var $stil4m$elm_syntax$Elm$Processing$findDocumentationForRange = F3(
	function (range, comments, previousComments) {
		findDocumentationForRange:
		while (true) {
			if (!comments.b) {
				return _Utils_Tuple3(previousComments, $elm$core$Maybe$Nothing, _List_Nil);
			} else {
				var comment = comments.a;
				var commentRange = comment.a;
				var commentText = comment.b;
				var restOfComments = comments.b;
				var _v1 = A2($elm$core$Basics$compare, commentRange.a$.aB + 1, range.bg.aB);
				switch (_v1) {
					case 1:
						return A2($elm$core$String$startsWith, '{-|', commentText) ? _Utils_Tuple3(
							previousComments,
							$elm$core$Maybe$Just(comment),
							restOfComments) : _Utils_Tuple3(
							previousComments,
							$elm$core$Maybe$Nothing,
							A2($elm$core$List$cons, comment, restOfComments));
					case 0:
						var $temp$range = range,
							$temp$comments = restOfComments,
							$temp$previousComments = A2($elm$core$List$cons, comment, previousComments);
						range = $temp$range;
						comments = $temp$comments;
						previousComments = $temp$previousComments;
						continue findDocumentationForRange;
					default:
						return _Utils_Tuple3(
							previousComments,
							$elm$core$Maybe$Nothing,
							A2($elm$core$List$cons, comment, restOfComments));
				}
			}
		}
	});
var $stil4m$elm_syntax$Elm$Processing$addDocumentation = F3(
	function (howToUpdate, declaration, file) {
		var _v0 = A3(
			$stil4m$elm_syntax$Elm$Processing$findDocumentationForRange,
			$stil4m$elm_syntax$Elm$Syntax$Node$range(declaration),
			file.N,
			_List_Nil);
		var previous = _v0.a;
		var maybeDoc = _v0.b;
		var remaining = _v0.c;
		if (!maybeDoc.$) {
			var doc = maybeDoc.a;
			return {
				cW: A2(
					$elm$core$List$cons,
					A2(
						$stil4m$elm_syntax$Elm$Syntax$Node$Node,
						$stil4m$elm_syntax$Elm$Syntax$Range$combine(
							_List_fromArray(
								[
									$stil4m$elm_syntax$Elm$Syntax$Node$range(doc),
									$stil4m$elm_syntax$Elm$Syntax$Node$range(declaration)
								])),
						howToUpdate(doc)),
					file.cW),
				H: A2($elm$core$List$cons, previous, file.H),
				N: remaining
			};
		} else {
			return {
				cW: A2($elm$core$List$cons, declaration, file.cW),
				H: A2($elm$core$List$cons, previous, file.H),
				N: remaining
			};
		}
	});
var $stil4m$elm_syntax$Elm$Syntax$Expression$OperatorApplication = F4(
	function (a, b, c, d) {
		return {$: 2, a: a, b: b, c: c, d: d};
	});
var $stil4m$elm_syntax$Elm$Processing$expressionOperators = function (_v0) {
	var expression = _v0.b;
	if (expression.$ === 6) {
		var s = expression.a;
		return $elm$core$Maybe$Just(s);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm_community$list_extra$List$Extra$dropWhile = F2(
	function (predicate, list) {
		dropWhile:
		while (true) {
			if (!list.b) {
				return _List_Nil;
			} else {
				var x = list.a;
				var xs = list.b;
				if (predicate(x)) {
					var $temp$predicate = predicate,
						$temp$list = xs;
					predicate = $temp$predicate;
					list = $temp$list;
					continue dropWhile;
				} else {
					return list;
				}
			}
		}
	});
var $elm_community$list_extra$List$Extra$takeWhile = function (predicate) {
	var takeWhileMemo = F2(
		function (memo, list) {
			takeWhileMemo:
			while (true) {
				if (!list.b) {
					return $elm$core$List$reverse(memo);
				} else {
					var x = list.a;
					var xs = list.b;
					if (predicate(x)) {
						var $temp$memo = A2($elm$core$List$cons, x, memo),
							$temp$list = xs;
						memo = $temp$memo;
						list = $temp$list;
						continue takeWhileMemo;
					} else {
						return $elm$core$List$reverse(memo);
					}
				}
			}
		});
	return takeWhileMemo(_List_Nil);
};
var $stil4m$elm_syntax$Elm$Processing$findNextSplit = F2(
	function (dict, exps) {
		var assocDirection = A2(
			$elm$core$Maybe$withDefault,
			1,
			A2(
				$elm$core$Maybe$map,
				$stil4m$elm_syntax$Elm$Syntax$Node$value,
				$elm$core$List$head(
					A2(
						$elm$core$List$map,
						A2(
							$elm$core$Basics$composeR,
							$elm$core$Tuple$second,
							function ($) {
								return $.d_;
							}),
						$elm$core$Dict$toList(dict)))));
		var prefix = function () {
			if (!assocDirection) {
				return $elm$core$List$reverse(
					A2(
						$elm$core$List$drop,
						1,
						A2(
							$elm_community$list_extra$List$Extra$dropWhile,
							function (x) {
								return _Utils_eq(
									$elm$core$Maybe$Nothing,
									A2(
										$elm$core$Maybe$andThen,
										function (key) {
											return A2($elm$core$Dict$get, key, dict);
										},
										$stil4m$elm_syntax$Elm$Processing$expressionOperators(x)));
							},
							$elm$core$List$reverse(exps))));
			} else {
				return A2(
					$elm_community$list_extra$List$Extra$takeWhile,
					function (x) {
						return _Utils_eq(
							$elm$core$Maybe$Nothing,
							A2(
								$elm$core$Maybe$andThen,
								function (key) {
									return A2($elm$core$Dict$get, key, dict);
								},
								$stil4m$elm_syntax$Elm$Processing$expressionOperators(x)));
					},
					exps);
			}
		}();
		var suffix = A2(
			$elm$core$List$drop,
			$elm$core$List$length(prefix) + 1,
			exps);
		return A2(
			$elm$core$Maybe$map,
			function (x) {
				return _Utils_Tuple3(prefix, x, suffix);
			},
			A2(
				$elm$core$Maybe$andThen,
				function (x) {
					return A2($elm$core$Dict$get, x, dict);
				},
				A2(
					$elm$core$Maybe$andThen,
					$stil4m$elm_syntax$Elm$Processing$expressionOperators,
					$elm$core$List$head(
						A2(
							$elm$core$List$drop,
							$elm$core$List$length(prefix),
							exps)))));
	});
var $elm$core$Basics$min = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) < 0) ? x : y;
	});
var $elm$core$List$minimum = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(
			A3($elm$core$List$foldl, $elm$core$Basics$min, x, xs));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $stil4m$elm_syntax$Elm$Processing$lowestPrecedence = function (input) {
	return $elm$core$Dict$fromList(
		A2(
			$elm$core$Maybe$withDefault,
			_List_Nil,
			A2(
				$elm$core$Maybe$map,
				function (m) {
					return A2(
						$elm$core$List$filter,
						A2(
							$elm$core$Basics$composeR,
							$elm$core$Tuple$second,
							A2(
								$elm$core$Basics$composeR,
								function ($) {
									return $.et;
								},
								A2(
									$elm$core$Basics$composeR,
									$stil4m$elm_syntax$Elm$Syntax$Node$value,
									$elm$core$Basics$eq(m)))),
						input);
				},
				$elm$core$List$minimum(
					A2(
						$elm$core$List$map,
						A2(
							$elm$core$Basics$composeR,
							$elm$core$Tuple$second,
							A2(
								$elm$core$Basics$composeR,
								function ($) {
									return $.et;
								},
								$stil4m$elm_syntax$Elm$Syntax$Node$value)),
						input)))));
};
var $stil4m$elm_syntax$Elm$Processing$fixApplication = F2(
	function (operators, expressions) {
		var ops = $stil4m$elm_syntax$Elm$Processing$lowestPrecedence(
			A2(
				$elm$core$List$map,
				function (x) {
					return _Utils_Tuple2(
						x,
						A2(
							$elm$core$Maybe$withDefault,
							{
								d_: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 0),
								d5: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'todo'),
								eq: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, x),
								et: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 5)
							},
							A2($elm$core$Dict$get, x, operators)));
				},
				A2($elm$core$List$filterMap, $stil4m$elm_syntax$Elm$Processing$expressionOperators, expressions)));
		var fixExprs = function (exps) {
			if (exps.b && (!exps.b.b)) {
				var _v2 = exps.a;
				var x = _v2.b;
				return x;
			} else {
				return $stil4m$elm_syntax$Elm$Syntax$Expression$Application(exps);
			}
		};
		var divideAndConquer = function (exps) {
			return $elm$core$Dict$isEmpty(ops) ? fixExprs(exps) : A2(
				$elm$core$Maybe$withDefault,
				fixExprs(exps),
				A2(
					$elm$core$Maybe$map,
					function (_v0) {
						var p = _v0.a;
						var infix_ = _v0.b;
						var s = _v0.c;
						return A4(
							$stil4m$elm_syntax$Elm$Syntax$Expression$OperatorApplication,
							$stil4m$elm_syntax$Elm$Syntax$Node$value(infix_.eq),
							$stil4m$elm_syntax$Elm$Syntax$Node$value(infix_.d_),
							A2(
								$stil4m$elm_syntax$Elm$Syntax$Node$Node,
								$stil4m$elm_syntax$Elm$Syntax$Range$combine(
									A2($elm$core$List$map, $stil4m$elm_syntax$Elm$Syntax$Node$range, p)),
								divideAndConquer(p)),
							A2(
								$stil4m$elm_syntax$Elm$Syntax$Node$Node,
								$stil4m$elm_syntax$Elm$Syntax$Range$combine(
									A2($elm$core$List$map, $stil4m$elm_syntax$Elm$Syntax$Node$range, s)),
								divideAndConquer(s)));
					},
					A2($stil4m$elm_syntax$Elm$Processing$findNextSplit, ops, exps)));
		};
		return divideAndConquer(expressions);
	});
var $stil4m$elm_syntax$Elm$Processing$visitExpression = F2(
	function (table, expression) {
		return A2(
			$stil4m$elm_syntax$Elm$Processing$visitExpressionInner,
			table,
			function () {
				if (expression.b.$ === 1) {
					var r = expression.a;
					var args = expression.b.a;
					return A2(
						$stil4m$elm_syntax$Elm$Syntax$Node$Node,
						r,
						A2($stil4m$elm_syntax$Elm$Processing$fixApplication, table, args));
				} else {
					return expression;
				}
			}());
	});
var $stil4m$elm_syntax$Elm$Processing$visitExpressionInner = F2(
	function (table, _v2) {
		var range = _v2.a;
		var expression = _v2.b;
		return A2(
			$stil4m$elm_syntax$Elm$Syntax$Node$Node,
			range,
			function () {
				switch (expression.$) {
					case 1:
						var expressionList = expression.a;
						return $stil4m$elm_syntax$Elm$Syntax$Expression$Application(
							A2(
								$elm$core$List$map,
								$stil4m$elm_syntax$Elm$Processing$visitExpression(table),
								expressionList));
					case 2:
						var op = expression.a;
						var dir = expression.b;
						var left = expression.c;
						var right = expression.d;
						return A4(
							$stil4m$elm_syntax$Elm$Syntax$Expression$OperatorApplication,
							op,
							dir,
							A2($stil4m$elm_syntax$Elm$Processing$visitExpression, table, left),
							A2($stil4m$elm_syntax$Elm$Processing$visitExpression, table, right));
					case 4:
						var e1 = expression.a;
						var e2 = expression.b;
						var e3 = expression.c;
						return A3(
							$stil4m$elm_syntax$Elm$Syntax$Expression$IfBlock,
							A2($stil4m$elm_syntax$Elm$Processing$visitExpression, table, e1),
							A2($stil4m$elm_syntax$Elm$Processing$visitExpression, table, e2),
							A2($stil4m$elm_syntax$Elm$Processing$visitExpression, table, e3));
					case 13:
						var expressionList = expression.a;
						return $stil4m$elm_syntax$Elm$Syntax$Expression$TupledExpression(
							A2(
								$elm$core$List$map,
								$stil4m$elm_syntax$Elm$Processing$visitExpression(table),
								expressionList));
					case 14:
						var expr1 = expression.a;
						return $stil4m$elm_syntax$Elm$Syntax$Expression$ParenthesizedExpression(
							A2($stil4m$elm_syntax$Elm$Processing$visitExpression, table, expr1));
					case 15:
						var letBlock = expression.a;
						return $stil4m$elm_syntax$Elm$Syntax$Expression$LetExpression(
							{
								cW: A2($stil4m$elm_syntax$Elm$Processing$visitLetDeclarations, table, letBlock.cW),
								bN: A2($stil4m$elm_syntax$Elm$Processing$visitExpression, table, letBlock.bN)
							});
					case 16:
						var caseBlock = expression.a;
						return $stil4m$elm_syntax$Elm$Syntax$Expression$CaseExpression(
							{
								dS: A2(
									$elm$core$List$map,
									$elm$core$Tuple$mapSecond(
										$stil4m$elm_syntax$Elm$Processing$visitExpression(table)),
									caseBlock.dS),
								bN: A2($stil4m$elm_syntax$Elm$Processing$visitExpression, table, caseBlock.bN)
							});
					case 17:
						var lambda = expression.a;
						return $stil4m$elm_syntax$Elm$Syntax$Expression$LambdaExpression(
							_Utils_update(
								lambda,
								{
									bN: A2($stil4m$elm_syntax$Elm$Processing$visitExpression, table, lambda.bN)
								}));
					case 18:
						var expressionStringList = expression.a;
						return $stil4m$elm_syntax$Elm$Syntax$Expression$RecordExpr(
							A2(
								$elm$core$List$map,
								$stil4m$elm_syntax$Elm$Syntax$Node$map(
									$elm$core$Tuple$mapSecond(
										$stil4m$elm_syntax$Elm$Processing$visitExpression(table))),
								expressionStringList));
					case 19:
						var expressionList = expression.a;
						return $stil4m$elm_syntax$Elm$Syntax$Expression$ListExpr(
							A2(
								$elm$core$List$map,
								$stil4m$elm_syntax$Elm$Processing$visitExpression(table),
								expressionList));
					case 22:
						var name = expression.a;
						var updates = expression.b;
						return A2(
							$stil4m$elm_syntax$Elm$Syntax$Expression$RecordUpdateExpression,
							name,
							A2(
								$elm$core$List$map,
								$stil4m$elm_syntax$Elm$Syntax$Node$map(
									$elm$core$Tuple$mapSecond(
										$stil4m$elm_syntax$Elm$Processing$visitExpression(table))),
								updates));
					case 10:
						var expr = expression.a;
						return $stil4m$elm_syntax$Elm$Syntax$Expression$Negation(
							A2($stil4m$elm_syntax$Elm$Processing$visitExpression, table, expr));
					case 20:
						var expr = expression.a;
						var name = expression.b;
						return A2(
							$stil4m$elm_syntax$Elm$Syntax$Expression$RecordAccess,
							A2($stil4m$elm_syntax$Elm$Processing$visitExpression, table, expr),
							name);
					default:
						return expression;
				}
			}());
	});
var $stil4m$elm_syntax$Elm$Processing$visitFunctionDecl = F2(
	function (table, _function) {
		var newFunctionDeclaration = A2(
			$stil4m$elm_syntax$Elm$Syntax$Node$map,
			$stil4m$elm_syntax$Elm$Processing$visitFunctionDeclaration(table),
			_function.dZ);
		return _Utils_update(
			_function,
			{dZ: newFunctionDeclaration});
	});
var $stil4m$elm_syntax$Elm$Processing$visitFunctionDeclaration = F2(
	function (table, functionDeclaration) {
		var newExpression = A2($stil4m$elm_syntax$Elm$Processing$visitExpression, table, functionDeclaration.bN);
		return _Utils_update(
			functionDeclaration,
			{bN: newExpression});
	});
var $stil4m$elm_syntax$Elm$Processing$visitLetDeclaration = F2(
	function (table, _v0) {
		var range = _v0.a;
		var declaration = _v0.b;
		return A2(
			$stil4m$elm_syntax$Elm$Syntax$Node$Node,
			range,
			function () {
				if (!declaration.$) {
					var _function = declaration.a;
					return $stil4m$elm_syntax$Elm$Syntax$Expression$LetFunction(
						A2($stil4m$elm_syntax$Elm$Processing$visitFunctionDecl, table, _function));
				} else {
					var pattern = declaration.a;
					var expression = declaration.b;
					return A2(
						$stil4m$elm_syntax$Elm$Syntax$Expression$LetDestructuring,
						pattern,
						A2($stil4m$elm_syntax$Elm$Processing$visitExpression, table, expression));
				}
			}());
	});
var $stil4m$elm_syntax$Elm$Processing$visitLetDeclarations = F2(
	function (table, declarations) {
		return A2(
			$elm$core$List$map,
			$stil4m$elm_syntax$Elm$Processing$visitLetDeclaration(table),
			declarations);
	});
var $stil4m$elm_syntax$Elm$Processing$attachDocumentationAndFixOperators = F3(
	function (table, declaration, context) {
		var _v0 = $stil4m$elm_syntax$Elm$Syntax$Node$value(declaration);
		switch (_v0.$) {
			case 0:
				var functionBeforeOperatorFix = _v0.a;
				var _function = A2($stil4m$elm_syntax$Elm$Processing$visitFunctionDecl, table, functionBeforeOperatorFix);
				return A3(
					$stil4m$elm_syntax$Elm$Processing$addDocumentation,
					function (doc) {
						return $stil4m$elm_syntax$Elm$Syntax$Declaration$FunctionDeclaration(
							_Utils_update(
								_function,
								{
									cg: $elm$core$Maybe$Just(doc)
								}));
					},
					A2(
						$stil4m$elm_syntax$Elm$Syntax$Node$Node,
						$stil4m$elm_syntax$Elm$Syntax$Node$range(declaration),
						$stil4m$elm_syntax$Elm$Syntax$Declaration$FunctionDeclaration(_function)),
					context);
			case 1:
				var typeAlias = _v0.a;
				return A3(
					$stil4m$elm_syntax$Elm$Processing$addDocumentation,
					function (doc) {
						return $stil4m$elm_syntax$Elm$Syntax$Declaration$AliasDeclaration(
							_Utils_update(
								typeAlias,
								{
									cg: $elm$core$Maybe$Just(doc)
								}));
					},
					declaration,
					context);
			case 2:
				var typeDecl = _v0.a;
				return A3(
					$stil4m$elm_syntax$Elm$Processing$addDocumentation,
					function (doc) {
						return $stil4m$elm_syntax$Elm$Syntax$Declaration$CustomTypeDeclaration(
							_Utils_update(
								typeDecl,
								{
									cg: $elm$core$Maybe$Just(doc)
								}));
					},
					declaration,
					context);
			case 3:
				return {
					cW: A2($elm$core$List$cons, declaration, context.cW),
					H: context.H,
					N: context.N
				};
			case 4:
				return {
					cW: A2($elm$core$List$cons, declaration, context.cW),
					H: context.H,
					N: context.N
				};
			default:
				return {
					cW: A2($elm$core$List$cons, declaration, context.cW),
					H: context.H,
					N: context.N
				};
		}
	});
var $stil4m$elm_syntax$Elm$Interface$operators = $elm$core$List$filterMap(
	function (_interface) {
		if (_interface.$ === 3) {
			var operator = _interface.a;
			return $elm$core$Maybe$Just(operator);
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $stil4m$elm_syntax$Elm$Syntax$Exposing$operator = function (t) {
	if (!t.$) {
		var s = t.a;
		return $elm$core$Maybe$Just(s);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $stil4m$elm_syntax$Elm$Syntax$Exposing$operators = function (l) {
	return A2($elm$core$List$filterMap, $stil4m$elm_syntax$Elm$Syntax$Exposing$operator, l);
};
var $stil4m$elm_syntax$Elm$Processing$buildSingle = F2(
	function (moduleIndex, imp) {
		var _v0 = A2($elm$core$Maybe$map, $stil4m$elm_syntax$Elm$Syntax$Node$value, imp.ck);
		if (_v0.$ === 1) {
			return _List_Nil;
		} else {
			if (!_v0.a.$) {
				var _v1 = A2(
					$elm$core$Dict$get,
					$stil4m$elm_syntax$Elm$Syntax$Node$value(imp.b_),
					moduleIndex);
				if (!_v1.$) {
					var module_ = _v1.a;
					return $stil4m$elm_syntax$Elm$Interface$operators(module_);
				} else {
					return _List_Nil;
				}
			} else {
				var l = _v0.a.a;
				var _v2 = A2(
					$elm$core$Dict$get,
					$stil4m$elm_syntax$Elm$Syntax$Node$value(imp.b_),
					moduleIndex);
				if (!_v2.$) {
					var module_ = _v2.a;
					var importedOperators = $stil4m$elm_syntax$Elm$Syntax$Exposing$operators(
						A2($elm$core$List$map, $stil4m$elm_syntax$Elm$Syntax$Node$value, l));
					return A2(
						$elm$core$List$filter,
						function (elem) {
							return A2(
								$elm$core$List$member,
								$stil4m$elm_syntax$Elm$Syntax$Node$value(elem.eq),
								importedOperators);
						},
						$stil4m$elm_syntax$Elm$Interface$operators(module_));
				} else {
					return _List_Nil;
				}
			}
		}
	});
var $stil4m$elm_syntax$Elm$DefaultImports$defaults = _List_fromArray(
	[
		{
		ck: $elm$core$Maybe$Just(
			A2(
				$stil4m$elm_syntax$Elm$Syntax$Node$Node,
				$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
				$stil4m$elm_syntax$Elm$Syntax$Exposing$All($stil4m$elm_syntax$Elm$Syntax$Range$emptyRange))),
		ec: $elm$core$Maybe$Nothing,
		b_: A2(
			$stil4m$elm_syntax$Elm$Syntax$Node$Node,
			$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
			_List_fromArray(
				['Basics']))
	},
		{
		ck: $elm$core$Maybe$Just(
			A2(
				$stil4m$elm_syntax$Elm$Syntax$Node$Node,
				$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
				$stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit(
					_List_fromArray(
						[
							A2(
							$stil4m$elm_syntax$Elm$Syntax$Node$Node,
							$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
							$stil4m$elm_syntax$Elm$Syntax$Exposing$TypeExpose(
								A2($stil4m$elm_syntax$Elm$Syntax$Exposing$ExposedType, 'List', $elm$core$Maybe$Nothing))),
							A2(
							$stil4m$elm_syntax$Elm$Syntax$Node$Node,
							$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
							$stil4m$elm_syntax$Elm$Syntax$Exposing$InfixExpose('::'))
						])))),
		ec: $elm$core$Maybe$Nothing,
		b_: A2(
			$stil4m$elm_syntax$Elm$Syntax$Node$Node,
			$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
			_List_fromArray(
				['List']))
	},
		{
		ck: $elm$core$Maybe$Just(
			A2(
				$stil4m$elm_syntax$Elm$Syntax$Node$Node,
				$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
				$stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit(
					_List_fromArray(
						[
							A2(
							$stil4m$elm_syntax$Elm$Syntax$Node$Node,
							$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
							$stil4m$elm_syntax$Elm$Syntax$Exposing$TypeExpose(
								A2(
									$stil4m$elm_syntax$Elm$Syntax$Exposing$ExposedType,
									'Maybe',
									$elm$core$Maybe$Just($stil4m$elm_syntax$Elm$Syntax$Range$emptyRange))))
						])))),
		ec: $elm$core$Maybe$Nothing,
		b_: A2(
			$stil4m$elm_syntax$Elm$Syntax$Node$Node,
			$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
			_List_fromArray(
				['Maybe']))
	},
		{
		ck: $elm$core$Maybe$Just(
			A2(
				$stil4m$elm_syntax$Elm$Syntax$Node$Node,
				$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
				$stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit(
					_List_fromArray(
						[
							A2(
							$stil4m$elm_syntax$Elm$Syntax$Node$Node,
							$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
							$stil4m$elm_syntax$Elm$Syntax$Exposing$TypeExpose(
								A2(
									$stil4m$elm_syntax$Elm$Syntax$Exposing$ExposedType,
									'Result',
									$elm$core$Maybe$Just($stil4m$elm_syntax$Elm$Syntax$Range$emptyRange))))
						])))),
		ec: $elm$core$Maybe$Nothing,
		b_: A2(
			$stil4m$elm_syntax$Elm$Syntax$Node$Node,
			$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
			_List_fromArray(
				['Result']))
	},
		{
		ck: $elm$core$Maybe$Nothing,
		ec: $elm$core$Maybe$Nothing,
		b_: A2(
			$stil4m$elm_syntax$Elm$Syntax$Node$Node,
			$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
			_List_fromArray(
				['String']))
	},
		{
		ck: $elm$core$Maybe$Nothing,
		ec: $elm$core$Maybe$Nothing,
		b_: A2(
			$stil4m$elm_syntax$Elm$Syntax$Node$Node,
			$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
			_List_fromArray(
				['Tuple']))
	},
		{
		ck: $elm$core$Maybe$Nothing,
		ec: $elm$core$Maybe$Nothing,
		b_: A2(
			$stil4m$elm_syntax$Elm$Syntax$Node$Node,
			$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
			_List_fromArray(
				['Debug']))
	},
		{
		ck: $elm$core$Maybe$Just(
			A2(
				$stil4m$elm_syntax$Elm$Syntax$Node$Node,
				$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
				$stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit(
					_List_fromArray(
						[
							A2(
							$stil4m$elm_syntax$Elm$Syntax$Node$Node,
							$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
							$stil4m$elm_syntax$Elm$Syntax$Exposing$TypeExpose(
								A2($stil4m$elm_syntax$Elm$Syntax$Exposing$ExposedType, 'Program', $elm$core$Maybe$Nothing)))
						])))),
		ec: $elm$core$Maybe$Nothing,
		b_: A2(
			$stil4m$elm_syntax$Elm$Syntax$Node$Node,
			$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
			_List_fromArray(
				['Platform']))
	},
		{
		ck: $elm$core$Maybe$Just(
			A2(
				$stil4m$elm_syntax$Elm$Syntax$Node$Node,
				$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
				$stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit(
					_List_fromArray(
						[
							A2(
							$stil4m$elm_syntax$Elm$Syntax$Node$Node,
							$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
							$stil4m$elm_syntax$Elm$Syntax$Exposing$TypeExpose(
								A2($stil4m$elm_syntax$Elm$Syntax$Exposing$ExposedType, 'Cmd', $elm$core$Maybe$Nothing))),
							A2(
							$stil4m$elm_syntax$Elm$Syntax$Node$Node,
							$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
							$stil4m$elm_syntax$Elm$Syntax$Exposing$InfixExpose('!'))
						])))),
		ec: $elm$core$Maybe$Nothing,
		b_: A2(
			$stil4m$elm_syntax$Elm$Syntax$Node$Node,
			$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
			_List_fromArray(
				['Platform', 'Cmd']))
	},
		{
		ck: $elm$core$Maybe$Just(
			A2(
				$stil4m$elm_syntax$Elm$Syntax$Node$Node,
				$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
				$stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit(
					_List_fromArray(
						[
							A2(
							$stil4m$elm_syntax$Elm$Syntax$Node$Node,
							$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
							$stil4m$elm_syntax$Elm$Syntax$Exposing$TypeExpose(
								A2($stil4m$elm_syntax$Elm$Syntax$Exposing$ExposedType, 'Sub', $elm$core$Maybe$Nothing)))
						])))),
		ec: $elm$core$Maybe$Nothing,
		b_: A2(
			$stil4m$elm_syntax$Elm$Syntax$Node$Node,
			$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
			_List_fromArray(
				['Platform', 'Sub']))
	}
	]);
var $stil4m$elm_syntax$Elm$RawFile$imports = function (_v0) {
	var file = _v0;
	return A2($elm$core$List$map, $stil4m$elm_syntax$Elm$Syntax$Node$value, file.d7);
};
var $stil4m$elm_syntax$Elm$Processing$tableForFile = F2(
	function (rawFile, _v0) {
		var moduleIndex = _v0;
		return $elm$core$Dict$fromList(
			A2(
				$elm$core$List$map,
				function (x) {
					return _Utils_Tuple2(
						$stil4m$elm_syntax$Elm$Syntax$Node$value(x.eq),
						x);
				},
				A2(
					$elm$core$List$concatMap,
					$stil4m$elm_syntax$Elm$Processing$buildSingle(moduleIndex),
					_Utils_ap(
						$stil4m$elm_syntax$Elm$DefaultImports$defaults,
						$stil4m$elm_syntax$Elm$RawFile$imports(rawFile)))));
	});
var $stil4m$elm_syntax$Elm$Processing$process = F2(
	function (processContext, rawFile) {
		var file = rawFile;
		var table = A2($stil4m$elm_syntax$Elm$Processing$tableForFile, rawFile, processContext);
		var changes = A3(
			$elm$core$List$foldl,
			$stil4m$elm_syntax$Elm$Processing$attachDocumentationAndFixOperators(table),
			{cW: _List_Nil, H: _List_Nil, N: file.dW},
			file.cW);
		return {
			dW: $elm$core$List$concat(
				$elm$core$List$reverse(
					A2($elm$core$List$cons, changes.N, changes.H))),
			cW: $elm$core$List$reverse(changes.cW),
			d7: file.d7,
			ed: file.ed
		};
	});
var $jfmengels$elm_review$Review$Project$parseSource = function (source) {
	return A2(
		$elm$core$Result$map,
		$stil4m$elm_syntax$Elm$Processing$process($jfmengels$elm_review$Review$Project$elmProcessContext),
		A2(
			$elm$core$Result$mapError,
			$elm$core$Basics$always(0),
			$stil4m$elm_syntax$Elm$Parser$parse(source)));
};
var $jfmengels$elm_review$Review$Project$precomputeModuleGraph = function (project) {
	var p = project;
	var _v0 = p.bY;
	if (!_v0.$) {
		return project;
	} else {
		var moduleGraph = $jfmengels$elm_review$Review$Project$Internal$buildModuleGraph(
			$elm$core$Dict$values(p.ad));
		return _Utils_update(
			p,
			{
				bY: $elm$core$Maybe$Just(moduleGraph)
			});
	}
};
var $jfmengels$elm_review$Review$Project$recomputeModuleGraphIfNeeded = function (project) {
	var p = project;
	var _v0 = p.bY;
	if (!_v0.$) {
		return $jfmengels$elm_review$Review$Project$precomputeModuleGraph(project);
	} else {
		return project;
	}
};
var $jfmengels$elm_review$Review$Project$removeFileFromFilesThatFailedToParse = F2(
	function (path, _v0) {
		var project = _v0;
		return _Utils_update(
			project,
			{
				a9: A2(
					$elm$core$List$filter,
					function (file) {
						return !_Utils_eq(file.es, path);
					},
					project.a9)
			});
	});
var $jfmengels$elm_review$Review$Project$removeFileFromProject = F2(
	function (path, _v0) {
		var project = _v0;
		return A2(
			$jfmengels$elm_review$Review$Project$removeFileFromFilesThatFailedToParse,
			path,
			_Utils_update(
				project,
				{
					ad: A2($elm$core$Dict$remove, path, project.ad)
				}));
	});
var $jfmengels$elm_review$Review$Project$Internal$sourceDirectories = function (_v0) {
	var project = _v0;
	return project.cH;
};
var $jfmengels$elm_review$Review$Project$addModule = F2(
	function (_v0, project) {
		var path = _v0.es;
		var source = _v0.eA;
		var _v1 = $jfmengels$elm_review$Review$Project$parseSource(source);
		if (!_v1.$) {
			var ast = _v1.a;
			var osAgnosticPath = $jfmengels$elm_review$Review$Project$makePathOSAgnostic(path);
			return $jfmengels$elm_review$Review$Project$recomputeModuleGraphIfNeeded(
				A2(
					$jfmengels$elm_review$Review$Project$removeFileFromFilesThatFailedToParse,
					path,
					A2(
						$jfmengels$elm_review$Review$Project$addModuleToProject,
						{
							dO: ast,
							cv: A2(
								$elm$core$List$any,
								function (dir) {
									return A2(
										$elm$core$String$startsWith,
										$jfmengels$elm_review$Review$Project$makePathOSAgnostic(dir),
										osAgnosticPath);
								},
								$jfmengels$elm_review$Review$Project$Internal$sourceDirectories(project)),
							es: path,
							eA: source
						},
						project)));
		} else {
			return $jfmengels$elm_review$Review$Project$recomputeModuleGraphIfNeeded(
				A2(
					$jfmengels$elm_review$Review$Project$addFileThatFailedToParse,
					{es: path, eA: source},
					A2($jfmengels$elm_review$Review$Project$removeFileFromProject, path, project)));
		}
	});
var $jfmengels$elm_review$Review$Project$addParsedModule = F2(
	function (_v0, project) {
		var path = _v0.es;
		var source = _v0.eA;
		var ast = _v0.dO;
		var osAgnosticPath = $jfmengels$elm_review$Review$Project$makePathOSAgnostic(path);
		return $jfmengels$elm_review$Review$Project$recomputeModuleGraphIfNeeded(
			A2(
				$jfmengels$elm_review$Review$Project$addModuleToProject,
				{
					dO: ast,
					cv: A2(
						$elm$core$List$any,
						function (dir) {
							return A2(
								$elm$core$String$startsWith,
								$jfmengels$elm_review$Review$Project$makePathOSAgnostic(dir),
								osAgnosticPath);
						},
						$jfmengels$elm_review$Review$Project$Internal$sourceDirectories(project)),
					es: path,
					eA: source
				},
				A2($jfmengels$elm_review$Review$Project$removeFileFromFilesThatFailedToParse, path, project)));
	});
var $jfmengels$elm_review$Review$Project$addReadme = F2(
	function (readme_, _v0) {
		var project = _v0;
		return _Utils_update(
			project,
			{
				cC: $elm$core$Maybe$Just(readme_)
			});
	});
var $author$project$Elm$Review$Main$addElmFile = F2(
	function (file, project) {
		return A2(
			$jfmengels$elm_review$Review$Project$addModule,
			{es: file.es, eA: file.eA},
			project);
	});
var $elm$json$Json$Decode$decodeString = _Json_runOnString;
var $elm$project_metadata_utils$Elm$Project$Application = function (a) {
	return {$: 0, a: a};
};
var $elm$project_metadata_utils$Elm$Project$Package = function (a) {
	return {$: 1, a: a};
};
var $elm$project_metadata_utils$Elm$Project$ApplicationInfo = F6(
	function (elm, dirs, depsDirect, depsIndirect, testDepsDirect, testDepsIndirect) {
		return {cZ: depsDirect, c_: depsIndirect, c$: dirs, bI: elm, dD: testDepsDirect, dE: testDepsIndirect};
	});
var $elm$json$Json$Decode$at = F2(
	function (fields, decoder) {
		return A3($elm$core$List$foldr, $elm$json$Json$Decode$field, decoder, fields);
	});
var $elm$project_metadata_utils$Elm$Version$Version = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $elm$project_metadata_utils$Elm$Version$checkNumbers = F3(
	function (major, minor, patch) {
		return ((major >= 0) && ((minor >= 0) && (patch >= 0))) ? $elm$core$Maybe$Just(
			A3($elm$project_metadata_utils$Elm$Version$Version, major, minor, patch)) : $elm$core$Maybe$Nothing;
	});
var $elm$core$String$toInt = _String_toInt;
var $elm$project_metadata_utils$Elm$Version$fromString = function (string) {
	var _v0 = A2(
		$elm$core$List$map,
		$elm$core$String$toInt,
		A2($elm$core$String$split, '.', string));
	if ((((((_v0.b && (!_v0.a.$)) && _v0.b.b) && (!_v0.b.a.$)) && _v0.b.b.b) && (!_v0.b.b.a.$)) && (!_v0.b.b.b.b)) {
		var major = _v0.a.a;
		var _v1 = _v0.b;
		var minor = _v1.a.a;
		var _v2 = _v1.b;
		var patch = _v2.a.a;
		return A3($elm$project_metadata_utils$Elm$Version$checkNumbers, major, minor, patch);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$project_metadata_utils$Elm$Version$decoderHelp = function (string) {
	var _v0 = $elm$project_metadata_utils$Elm$Version$fromString(string);
	if (!_v0.$) {
		var version = _v0.a;
		return $elm$json$Json$Decode$succeed(version);
	} else {
		return $elm$json$Json$Decode$fail('I need a valid version like \"2.0.1\"');
	}
};
var $elm$project_metadata_utils$Elm$Version$decoder = A2($elm$json$Json$Decode$andThen, $elm$project_metadata_utils$Elm$Version$decoderHelp, $elm$json$Json$Decode$string);
var $elm$json$Json$Decode$keyValuePairs = _Json_decodeKeyValuePairs;
var $elm$project_metadata_utils$Elm$Package$Name = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$project_metadata_utils$Elm$Package$isBadChar = function (_char) {
	return $elm$core$Char$isUpper(_char) || ((_char === '.') || (_char === '_'));
};
var $elm$project_metadata_utils$Elm$Package$isBadProjectName = function (project) {
	var _v0 = $elm$core$String$uncons(project);
	if (_v0.$ === 1) {
		return true;
	} else {
		var _v1 = _v0.a;
		var c = _v1.a;
		return A2($elm$core$String$contains, '--', project) || (A2($elm$core$String$any, $elm$project_metadata_utils$Elm$Package$isBadChar, project) || (A2($elm$core$String$startsWith, '-', project) || (!$elm$core$Char$isLower(c))));
	}
};
var $elm$project_metadata_utils$Elm$Package$fromString = function (string) {
	var _v0 = A2($elm$core$String$split, '/', string);
	if ((_v0.b && _v0.b.b) && (!_v0.b.b.b)) {
		var author = _v0.a;
		var _v1 = _v0.b;
		var project = _v1.a;
		return $elm$project_metadata_utils$Elm$Package$isBadProjectName(project) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(
			A2($elm$project_metadata_utils$Elm$Package$Name, author, project));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$project_metadata_utils$Elm$Project$verifyDepNames = F2(
	function (revDeps, pairs) {
		verifyDepNames:
		while (true) {
			if (!pairs.b) {
				return $elm$json$Json$Decode$succeed(
					$elm$core$List$reverse(revDeps));
			} else {
				var _v1 = pairs.a;
				var key = _v1.a;
				var con = _v1.b;
				var otherPairs = pairs.b;
				var _v2 = $elm$project_metadata_utils$Elm$Package$fromString(key);
				if (!_v2.$) {
					var pkg = _v2.a;
					var $temp$revDeps = A2(
						$elm$core$List$cons,
						_Utils_Tuple2(pkg, con),
						revDeps),
						$temp$pairs = otherPairs;
					revDeps = $temp$revDeps;
					pairs = $temp$pairs;
					continue verifyDepNames;
				} else {
					return $elm$json$Json$Decode$fail('\"' + (key + '\" is not a valid package name.'));
				}
			}
		}
	});
var $elm$project_metadata_utils$Elm$Project$depsDecoder = function (constraintDecoder) {
	return A2(
		$elm$json$Json$Decode$andThen,
		$elm$project_metadata_utils$Elm$Project$verifyDepNames(_List_Nil),
		$elm$json$Json$Decode$keyValuePairs(constraintDecoder));
};
var $elm$json$Json$Decode$map6 = _Json_map6;
var $elm$project_metadata_utils$Elm$Project$applicationDecoder = A7(
	$elm$json$Json$Decode$map6,
	$elm$project_metadata_utils$Elm$Project$ApplicationInfo,
	A2($elm$json$Json$Decode$field, 'elm-version', $elm$project_metadata_utils$Elm$Version$decoder),
	A2(
		$elm$json$Json$Decode$field,
		'source-directories',
		$elm$json$Json$Decode$list($elm$json$Json$Decode$string)),
	A2(
		$elm$json$Json$Decode$at,
		_List_fromArray(
			['dependencies', 'direct']),
		$elm$project_metadata_utils$Elm$Project$depsDecoder($elm$project_metadata_utils$Elm$Version$decoder)),
	A2(
		$elm$json$Json$Decode$at,
		_List_fromArray(
			['dependencies', 'indirect']),
		$elm$project_metadata_utils$Elm$Project$depsDecoder($elm$project_metadata_utils$Elm$Version$decoder)),
	A2(
		$elm$json$Json$Decode$at,
		_List_fromArray(
			['test-dependencies', 'direct']),
		$elm$project_metadata_utils$Elm$Project$depsDecoder($elm$project_metadata_utils$Elm$Version$decoder)),
	A2(
		$elm$json$Json$Decode$at,
		_List_fromArray(
			['test-dependencies', 'indirect']),
		$elm$project_metadata_utils$Elm$Project$depsDecoder($elm$project_metadata_utils$Elm$Version$decoder)));
var $elm$project_metadata_utils$Elm$Project$PackageInfo = F8(
	function (name, summary, license, version, exposed, deps, testDeps, elm) {
		return {cY: deps, bI: elm, c1: exposed, dg: license, aW: name, dz: summary, dC: testDeps, dJ: version};
	});
var $elm$project_metadata_utils$Elm$Constraint$Constraint = F4(
	function (a, b, c, d) {
		return {$: 0, a: a, b: b, c: c, d: d};
	});
var $elm$project_metadata_utils$Elm$Version$compare = F2(
	function (_v0, _v1) {
		var major1 = _v0.a;
		var minor1 = _v0.b;
		var patch1 = _v0.c;
		var major2 = _v1.a;
		var minor2 = _v1.b;
		var patch2 = _v1.c;
		var _v2 = A2($elm$core$Basics$compare, major1, major2);
		switch (_v2) {
			case 0:
				return 0;
			case 2:
				return 2;
			default:
				var _v3 = A2($elm$core$Basics$compare, minor1, minor2);
				switch (_v3) {
					case 0:
						return 0;
					case 1:
						return A2($elm$core$Basics$compare, patch1, patch2);
					default:
						return 2;
				}
		}
	});
var $elm$project_metadata_utils$Elm$Constraint$checkConstraint = function (constraint) {
	var lower = constraint.a;
	var upper = constraint.d;
	var _v0 = A2($elm$project_metadata_utils$Elm$Version$compare, lower, upper);
	switch (_v0) {
		case 0:
			return $elm$core$Maybe$Just(constraint);
		case 1:
			return $elm$core$Maybe$Just(constraint);
		default:
			return $elm$core$Maybe$Nothing;
	}
};
var $elm$core$Maybe$map4 = F5(
	function (func, ma, mb, mc, md) {
		if (ma.$ === 1) {
			return $elm$core$Maybe$Nothing;
		} else {
			var a = ma.a;
			if (mb.$ === 1) {
				return $elm$core$Maybe$Nothing;
			} else {
				var b = mb.a;
				if (mc.$ === 1) {
					return $elm$core$Maybe$Nothing;
				} else {
					var c = mc.a;
					if (md.$ === 1) {
						return $elm$core$Maybe$Nothing;
					} else {
						var d = md.a;
						return $elm$core$Maybe$Just(
							A4(func, a, b, c, d));
					}
				}
			}
		}
	});
var $elm$project_metadata_utils$Elm$Constraint$LessOrEq = 1;
var $elm$project_metadata_utils$Elm$Constraint$LessThan = 0;
var $elm$project_metadata_utils$Elm$Constraint$opFromString = function (op) {
	switch (op) {
		case '<':
			return $elm$core$Maybe$Just(0);
		case '<=':
			return $elm$core$Maybe$Just(1);
		default:
			return $elm$core$Maybe$Nothing;
	}
};
var $elm$project_metadata_utils$Elm$Constraint$fromString = function (string) {
	var _v0 = A2($elm$core$String$split, ' ', string);
	if ((((((_v0.b && _v0.b.b) && _v0.b.b.b) && (_v0.b.b.a === 'v')) && _v0.b.b.b.b) && _v0.b.b.b.b.b) && (!_v0.b.b.b.b.b.b)) {
		var lower = _v0.a;
		var _v1 = _v0.b;
		var lop = _v1.a;
		var _v2 = _v1.b;
		var _v3 = _v2.b;
		var uop = _v3.a;
		var _v4 = _v3.b;
		var upper = _v4.a;
		return A2(
			$elm$core$Maybe$andThen,
			$elm$project_metadata_utils$Elm$Constraint$checkConstraint,
			A5(
				$elm$core$Maybe$map4,
				$elm$project_metadata_utils$Elm$Constraint$Constraint,
				$elm$project_metadata_utils$Elm$Version$fromString(lower),
				$elm$project_metadata_utils$Elm$Constraint$opFromString(lop),
				$elm$project_metadata_utils$Elm$Constraint$opFromString(uop),
				$elm$project_metadata_utils$Elm$Version$fromString(upper)));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$project_metadata_utils$Elm$Constraint$decoderHelp = function (string) {
	var _v0 = $elm$project_metadata_utils$Elm$Constraint$fromString(string);
	if (!_v0.$) {
		var constraint = _v0.a;
		return $elm$json$Json$Decode$succeed(constraint);
	} else {
		return $elm$json$Json$Decode$fail('I need a valid constraint like \"1.0.0 <= v < 2.0.0\"');
	}
};
var $elm$project_metadata_utils$Elm$Constraint$decoder = A2($elm$json$Json$Decode$andThen, $elm$project_metadata_utils$Elm$Constraint$decoderHelp, $elm$json$Json$Decode$string);
var $elm$project_metadata_utils$Elm$License$License = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$project_metadata_utils$Elm$License$osiApprovedSpdxLicenses = _List_fromArray(
	[
		A2($elm$project_metadata_utils$Elm$License$License, 'AFL-1.1', 'Academic Free License v1.1'),
		A2($elm$project_metadata_utils$Elm$License$License, 'AFL-1.2', 'Academic Free License v1.2'),
		A2($elm$project_metadata_utils$Elm$License$License, 'AFL-2.0', 'Academic Free License v2.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'AFL-2.1', 'Academic Free License v2.1'),
		A2($elm$project_metadata_utils$Elm$License$License, 'AFL-3.0', 'Academic Free License v3.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'APL-1.0', 'Adaptive Public License 1.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'Apache-1.1', 'Apache License 1.1'),
		A2($elm$project_metadata_utils$Elm$License$License, 'Apache-2.0', 'Apache License 2.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'APSL-1.0', 'Apple Public Source License 1.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'APSL-1.1', 'Apple Public Source License 1.1'),
		A2($elm$project_metadata_utils$Elm$License$License, 'APSL-1.2', 'Apple Public Source License 1.2'),
		A2($elm$project_metadata_utils$Elm$License$License, 'APSL-2.0', 'Apple Public Source License 2.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'Artistic-1.0', 'Artistic License 1.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'Artistic-1.0-Perl', 'Artistic License 1.0 (Perl)'),
		A2($elm$project_metadata_utils$Elm$License$License, 'Artistic-1.0-cl8', 'Artistic License 1.0 w/clause 8'),
		A2($elm$project_metadata_utils$Elm$License$License, 'Artistic-2.0', 'Artistic License 2.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'AAL', 'Attribution Assurance License'),
		A2($elm$project_metadata_utils$Elm$License$License, 'BSL-1.0', 'Boost Software License 1.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'BSD-2-Clause', 'BSD 2-clause \"Simplified\" License'),
		A2($elm$project_metadata_utils$Elm$License$License, 'BSD-3-Clause', 'BSD 3-clause \"New\" or \"Revised\" License'),
		A2($elm$project_metadata_utils$Elm$License$License, '0BSD', 'BSD Zero Clause License'),
		A2($elm$project_metadata_utils$Elm$License$License, 'CECILL-2.1', 'CeCILL Free Software License Agreement v2.1'),
		A2($elm$project_metadata_utils$Elm$License$License, 'CNRI-Python', 'CNRI Python License'),
		A2($elm$project_metadata_utils$Elm$License$License, 'CDDL-1.0', 'Common Development and Distribution License 1.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'CPAL-1.0', 'Common Public Attribution License 1.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'CPL-1.0', 'Common Public License 1.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'CATOSL-1.1', 'Computer Associates Trusted Open Source License 1.1'),
		A2($elm$project_metadata_utils$Elm$License$License, 'CUA-OPL-1.0', 'CUA Office Public License v1.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'EPL-1.0', 'Eclipse Public License 1.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'ECL-1.0', 'Educational Community License v1.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'ECL-2.0', 'Educational Community License v2.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'EFL-1.0', 'Eiffel Forum License v1.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'EFL-2.0', 'Eiffel Forum License v2.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'Entessa', 'Entessa Public License v1.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'EUDatagrid', 'EU DataGrid Software License'),
		A2($elm$project_metadata_utils$Elm$License$License, 'EUPL-1.1', 'European Union Public License 1.1'),
		A2($elm$project_metadata_utils$Elm$License$License, 'Fair', 'Fair License'),
		A2($elm$project_metadata_utils$Elm$License$License, 'Frameworx-1.0', 'Frameworx Open License 1.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'AGPL-3.0', 'GNU Affero General Public License v3.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'GPL-2.0', 'GNU General Public License v2.0 only'),
		A2($elm$project_metadata_utils$Elm$License$License, 'GPL-3.0', 'GNU General Public License v3.0 only'),
		A2($elm$project_metadata_utils$Elm$License$License, 'LGPL-2.1', 'GNU Lesser General Public License v2.1 only'),
		A2($elm$project_metadata_utils$Elm$License$License, 'LGPL-3.0', 'GNU Lesser General Public License v3.0 only'),
		A2($elm$project_metadata_utils$Elm$License$License, 'LGPL-2.0', 'GNU Library General Public License v2 only'),
		A2($elm$project_metadata_utils$Elm$License$License, 'HPND', 'Historic Permission Notice and Disclaimer'),
		A2($elm$project_metadata_utils$Elm$License$License, 'IPL-1.0', 'IBM Public License v1.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'Intel', 'Intel Open Source License'),
		A2($elm$project_metadata_utils$Elm$License$License, 'IPA', 'IPA Font License'),
		A2($elm$project_metadata_utils$Elm$License$License, 'ISC', 'ISC License'),
		A2($elm$project_metadata_utils$Elm$License$License, 'LPPL-1.3c', 'LaTeX Project Public License v1.3c'),
		A2($elm$project_metadata_utils$Elm$License$License, 'LiLiQ-P-1.1', 'Licence Libre du Québec – Permissive version 1.1'),
		A2($elm$project_metadata_utils$Elm$License$License, 'LiLiQ-Rplus-1.1', 'Licence Libre du Québec – Réciprocité forte version 1.1'),
		A2($elm$project_metadata_utils$Elm$License$License, 'LiLiQ-R-1.1', 'Licence Libre du Québec – Réciprocité version 1.1'),
		A2($elm$project_metadata_utils$Elm$License$License, 'LPL-1.02', 'Lucent Public License v1.02'),
		A2($elm$project_metadata_utils$Elm$License$License, 'LPL-1.0', 'Lucent Public License Version 1.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'MS-PL', 'Microsoft Public License'),
		A2($elm$project_metadata_utils$Elm$License$License, 'MS-RL', 'Microsoft Reciprocal License'),
		A2($elm$project_metadata_utils$Elm$License$License, 'MirOS', 'MirOS Licence'),
		A2($elm$project_metadata_utils$Elm$License$License, 'MIT', 'MIT License'),
		A2($elm$project_metadata_utils$Elm$License$License, 'Motosoto', 'Motosoto License'),
		A2($elm$project_metadata_utils$Elm$License$License, 'MPL-1.0', 'Mozilla Public License 1.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'MPL-1.1', 'Mozilla Public License 1.1'),
		A2($elm$project_metadata_utils$Elm$License$License, 'MPL-2.0', 'Mozilla Public License 2.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'MPL-2.0-no-copyleft-exception', 'Mozilla Public License 2.0 (no copyleft exception)'),
		A2($elm$project_metadata_utils$Elm$License$License, 'Multics', 'Multics License'),
		A2($elm$project_metadata_utils$Elm$License$License, 'NASA-1.3', 'NASA Open Source Agreement 1.3'),
		A2($elm$project_metadata_utils$Elm$License$License, 'Naumen', 'Naumen Public License'),
		A2($elm$project_metadata_utils$Elm$License$License, 'NGPL', 'Nethack General Public License'),
		A2($elm$project_metadata_utils$Elm$License$License, 'Nokia', 'Nokia Open Source License'),
		A2($elm$project_metadata_utils$Elm$License$License, 'NPOSL-3.0', 'Non-Profit Open Software License 3.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'NTP', 'NTP License'),
		A2($elm$project_metadata_utils$Elm$License$License, 'OCLC-2.0', 'OCLC Research Public License 2.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'OGTSL', 'Open Group Test Suite License'),
		A2($elm$project_metadata_utils$Elm$License$License, 'OSL-1.0', 'Open Software License 1.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'OSL-2.0', 'Open Software License 2.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'OSL-2.1', 'Open Software License 2.1'),
		A2($elm$project_metadata_utils$Elm$License$License, 'OSL-3.0', 'Open Software License 3.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'OSET-PL-2.1', 'OSET Public License version 2.1'),
		A2($elm$project_metadata_utils$Elm$License$License, 'PHP-3.0', 'PHP License v3.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'PostgreSQL', 'PostgreSQL License'),
		A2($elm$project_metadata_utils$Elm$License$License, 'Python-2.0', 'Python License 2.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'QPL-1.0', 'Q Public License 1.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'RPSL-1.0', 'RealNetworks Public Source License v1.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'RPL-1.1', 'Reciprocal Public License 1.1'),
		A2($elm$project_metadata_utils$Elm$License$License, 'RPL-1.5', 'Reciprocal Public License 1.5'),
		A2($elm$project_metadata_utils$Elm$License$License, 'RSCPL', 'Ricoh Source Code Public License'),
		A2($elm$project_metadata_utils$Elm$License$License, 'OFL-1.1', 'SIL Open Font License 1.1'),
		A2($elm$project_metadata_utils$Elm$License$License, 'SimPL-2.0', 'Simple Public License 2.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'Sleepycat', 'Sleepycat License'),
		A2($elm$project_metadata_utils$Elm$License$License, 'SISSL', 'Sun Industry Standards Source License v1.1'),
		A2($elm$project_metadata_utils$Elm$License$License, 'SPL-1.0', 'Sun Public License v1.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'Watcom-1.0', 'Sybase Open Watcom Public License 1.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'UPL-1.0', 'Universal Permissive License v1.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'NCSA', 'University of Illinois/NCSA Open Source License'),
		A2($elm$project_metadata_utils$Elm$License$License, 'VSL-1.0', 'Vovida Software License v1.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'W3C', 'W3C Software Notice and License (2002-12-31)'),
		A2($elm$project_metadata_utils$Elm$License$License, 'Xnet', 'X.Net License'),
		A2($elm$project_metadata_utils$Elm$License$License, 'Zlib', 'zlib License'),
		A2($elm$project_metadata_utils$Elm$License$License, 'ZPL-2.0', 'Zope Public License 2.0')
	]);
var $elm$project_metadata_utils$Elm$License$spdxDict = $elm$core$Dict$fromList(
	A2(
		$elm$core$List$map,
		function (license) {
			var abbr = license.a;
			return _Utils_Tuple2(abbr, license);
		},
		$elm$project_metadata_utils$Elm$License$osiApprovedSpdxLicenses));
var $elm$project_metadata_utils$Elm$License$fromString = function (string) {
	return A2($elm$core$Dict$get, string, $elm$project_metadata_utils$Elm$License$spdxDict);
};
var $elm$project_metadata_utils$Elm$License$decoderHelp = function (string) {
	var _v0 = $elm$project_metadata_utils$Elm$License$fromString(string);
	if (!_v0.$) {
		var license = _v0.a;
		return $elm$json$Json$Decode$succeed(license);
	} else {
		return $elm$json$Json$Decode$fail('I need an OSI approved license in SPDX format <https://spdx.org/licenses/>');
	}
};
var $elm$project_metadata_utils$Elm$License$decoder = A2($elm$json$Json$Decode$andThen, $elm$project_metadata_utils$Elm$License$decoderHelp, $elm$json$Json$Decode$string);
var $elm$project_metadata_utils$Elm$Package$decoderHelp = function (string) {
	var _v0 = $elm$project_metadata_utils$Elm$Package$fromString(string);
	if (!_v0.$) {
		var name = _v0.a;
		return $elm$json$Json$Decode$succeed(name);
	} else {
		return $elm$json$Json$Decode$fail('I need a valid package name like \"elm/core\"');
	}
};
var $elm$project_metadata_utils$Elm$Package$decoder = A2($elm$json$Json$Decode$andThen, $elm$project_metadata_utils$Elm$Package$decoderHelp, $elm$json$Json$Decode$string);
var $elm$project_metadata_utils$Elm$Project$ExposedDict = function (a) {
	return {$: 1, a: a};
};
var $elm$project_metadata_utils$Elm$Project$ExposedList = function (a) {
	return {$: 0, a: a};
};
var $elm$project_metadata_utils$Elm$Project$checkHeaders = function (dict) {
	checkHeaders:
	while (true) {
		if (!dict.b) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v1 = dict.a;
			var header = _v1.a;
			var others = dict.b;
			if ($elm$core$String$length(header) < 20) {
				var $temp$dict = others;
				dict = $temp$dict;
				continue checkHeaders;
			} else {
				return $elm$core$Maybe$Just(header);
			}
		}
	}
};
var $elm$project_metadata_utils$Elm$Project$checkExposedDict = function (dict) {
	var _v0 = $elm$project_metadata_utils$Elm$Project$checkHeaders(dict);
	if (_v0.$ === 1) {
		return $elm$json$Json$Decode$succeed(dict);
	} else {
		var badHeader = _v0.a;
		return $elm$json$Json$Decode$fail('The \"' + (badHeader + '\" header is too long. Twenty characters max!'));
	}
};
var $elm$project_metadata_utils$Elm$Module$Name = $elm$core$Basics$identity;
var $elm$core$List$all = F2(
	function (isOkay, list) {
		return !A2(
			$elm$core$List$any,
			A2($elm$core$Basics$composeL, $elm$core$Basics$not, isOkay),
			list);
	});
var $elm$project_metadata_utils$Elm$Module$isInner = function (_char) {
	return $elm$core$Char$isAlphaNum(_char) || (_char === '_');
};
var $elm$project_metadata_utils$Elm$Module$isGoodChunk = function (chunk) {
	var _v0 = $elm$core$String$uncons(chunk);
	if (_v0.$ === 1) {
		return false;
	} else {
		var _v1 = _v0.a;
		var _char = _v1.a;
		var rest = _v1.b;
		return $elm$core$Char$isUpper(_char) && A2($elm$core$String$all, $elm$project_metadata_utils$Elm$Module$isInner, rest);
	}
};
var $elm$project_metadata_utils$Elm$Module$fromString = function (string) {
	return A2(
		$elm$core$List$all,
		$elm$project_metadata_utils$Elm$Module$isGoodChunk,
		A2($elm$core$String$split, '.', string)) ? $elm$core$Maybe$Just(string) : $elm$core$Maybe$Nothing;
};
var $elm$project_metadata_utils$Elm$Module$decoderHelp = function (string) {
	var _v0 = $elm$project_metadata_utils$Elm$Module$fromString(string);
	if (!_v0.$) {
		var name = _v0.a;
		return $elm$json$Json$Decode$succeed(name);
	} else {
		return $elm$json$Json$Decode$fail('I need a valid module name like \"Json.Decode\"');
	}
};
var $elm$project_metadata_utils$Elm$Module$decoder = A2($elm$json$Json$Decode$andThen, $elm$project_metadata_utils$Elm$Module$decoderHelp, $elm$json$Json$Decode$string);
var $elm$project_metadata_utils$Elm$Project$exposedDecoder = $elm$json$Json$Decode$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$json$Json$Decode$map,
			$elm$project_metadata_utils$Elm$Project$ExposedList,
			$elm$json$Json$Decode$list($elm$project_metadata_utils$Elm$Module$decoder)),
			A2(
			$elm$json$Json$Decode$map,
			$elm$project_metadata_utils$Elm$Project$ExposedDict,
			A2(
				$elm$json$Json$Decode$andThen,
				$elm$project_metadata_utils$Elm$Project$checkExposedDict,
				$elm$json$Json$Decode$keyValuePairs(
					$elm$json$Json$Decode$list($elm$project_metadata_utils$Elm$Module$decoder))))
		]));
var $elm$project_metadata_utils$Elm$Project$summaryCheck = function (summary) {
	return ($elm$core$String$length(summary) < 80) ? $elm$json$Json$Decode$succeed(summary) : $elm$json$Json$Decode$fail('The \"summary\" field must have fewer than 80 characters.');
};
var $elm$project_metadata_utils$Elm$Project$summaryDecoder = A2($elm$json$Json$Decode$andThen, $elm$project_metadata_utils$Elm$Project$summaryCheck, $elm$json$Json$Decode$string);
var $elm$project_metadata_utils$Elm$Project$packageDecoder = A9(
	$elm$json$Json$Decode$map8,
	$elm$project_metadata_utils$Elm$Project$PackageInfo,
	A2($elm$json$Json$Decode$field, 'name', $elm$project_metadata_utils$Elm$Package$decoder),
	A2($elm$json$Json$Decode$field, 'summary', $elm$project_metadata_utils$Elm$Project$summaryDecoder),
	A2($elm$json$Json$Decode$field, 'license', $elm$project_metadata_utils$Elm$License$decoder),
	A2($elm$json$Json$Decode$field, 'version', $elm$project_metadata_utils$Elm$Version$decoder),
	A2($elm$json$Json$Decode$field, 'exposed-modules', $elm$project_metadata_utils$Elm$Project$exposedDecoder),
	A2(
		$elm$json$Json$Decode$field,
		'dependencies',
		$elm$project_metadata_utils$Elm$Project$depsDecoder($elm$project_metadata_utils$Elm$Constraint$decoder)),
	A2(
		$elm$json$Json$Decode$field,
		'test-dependencies',
		$elm$project_metadata_utils$Elm$Project$depsDecoder($elm$project_metadata_utils$Elm$Constraint$decoder)),
	A2($elm$json$Json$Decode$field, 'elm-version', $elm$project_metadata_utils$Elm$Constraint$decoder));
var $elm$project_metadata_utils$Elm$Project$decoderHelp = function (tipe) {
	switch (tipe) {
		case 'application':
			return A2($elm$json$Json$Decode$map, $elm$project_metadata_utils$Elm$Project$Application, $elm$project_metadata_utils$Elm$Project$applicationDecoder);
		case 'package':
			return A2($elm$json$Json$Decode$map, $elm$project_metadata_utils$Elm$Project$Package, $elm$project_metadata_utils$Elm$Project$packageDecoder);
		default:
			var other = tipe;
			return $elm$json$Json$Decode$fail('The "type" field must be either "application" or "package", so ' + ('\"' + (other + '\" is not acceptable.')));
	}
};
var $elm$project_metadata_utils$Elm$Project$decoder = A2(
	$elm$json$Json$Decode$andThen,
	$elm$project_metadata_utils$Elm$Project$decoderHelp,
	A2($elm$json$Json$Decode$field, 'type', $elm$json$Json$Decode$string));
var $jfmengels$elm_review$Review$Project$removeDependency = F2(
	function (dependencyName, _v0) {
		var project = _v0;
		return _Utils_update(
			project,
			{
				aG: A2($elm$core$Dict$remove, dependencyName, project.aG)
			});
	});
var $elm$project_metadata_utils$Elm$Package$toString = function (_v0) {
	var user = _v0.a;
	var project = _v0.b;
	return user + ('/' + project);
};
var $author$project$Elm$Review$Main$getPackageName = function (deps) {
	return A2(
		$elm$core$List$map,
		A2($elm$core$Basics$composeR, $elm$core$Tuple$first, $elm$project_metadata_utils$Elm$Package$toString),
		deps);
};
var $author$project$Elm$Review$Main$projectDependencies = function (project) {
	if (!project.$) {
		var application = project.a;
		return $elm$core$Set$fromList(
			$elm$core$List$concat(
				_List_fromArray(
					[
						$author$project$Elm$Review$Main$getPackageName(application.cZ),
						$author$project$Elm$Review$Main$getPackageName(application.c_),
						$author$project$Elm$Review$Main$getPackageName(application.dD),
						$author$project$Elm$Review$Main$getPackageName(application.dE)
					])));
	} else {
		var packageInfo = project.a;
		return $elm$core$Set$fromList(
			$elm$core$List$concat(
				_List_fromArray(
					[
						$author$project$Elm$Review$Main$getPackageName(packageInfo.cY),
						$author$project$Elm$Review$Main$getPackageName(packageInfo.dC)
					])));
	}
};
var $author$project$Elm$Review$Main$removedDependencies = F2(
	function (old, _new) {
		return $elm$core$Set$toList(
			A2(
				$elm$core$Set$diff,
				$author$project$Elm$Review$Main$projectDependencies(old),
				$author$project$Elm$Review$Main$projectDependencies(_new)));
	});
var $author$project$Elm$Review$Main$addUpdatedFileToProject = F2(
	function (file, project) {
		if (_Utils_eq(
			$elm$core$Maybe$Just(file.es),
			A2(
				$elm$core$Maybe$map,
				function ($) {
					return $.es;
				},
				$jfmengels$elm_review$Review$Project$readme(project)))) {
			return A2(
				$jfmengels$elm_review$Review$Project$addReadme,
				{a_: file.eA, es: file.es},
				project);
		} else {
			var _v0 = $jfmengels$elm_review$Review$Project$elmJson(project);
			if (!_v0.$) {
				var oldElmJson = _v0.a;
				if (_Utils_eq(file.es, oldElmJson.es)) {
					var _v1 = A2($elm$json$Json$Decode$decodeString, $elm$project_metadata_utils$Elm$Project$decoder, file.eA);
					if (!_v1.$) {
						var newElmJson = _v1.a;
						return A3(
							$elm$core$List$foldl,
							$jfmengels$elm_review$Review$Project$removeDependency,
							A2(
								$jfmengels$elm_review$Review$Project$addElmJson,
								{es: file.es, c: newElmJson, bb: file.eA},
								project),
							A2($author$project$Elm$Review$Main$removedDependencies, oldElmJson.c, newElmJson));
					} else {
						return project;
					}
				} else {
					return A2($author$project$Elm$Review$Main$addElmFile, file, project);
				}
			} else {
				return A2($author$project$Elm$Review$Main$addElmFile, file, project);
			}
		}
	});
var $author$project$Elm$Review$Vendor$Serialize$getJsonEncoder = function (_v0) {
	var m = _v0;
	return m.aR;
};
var $author$project$Elm$Review$Vendor$Serialize$version = 1;
var $author$project$Elm$Review$Vendor$Serialize$encodeToJson = F2(
	function (codec, value) {
		return A2(
			$elm$json$Json$Encode$list,
			$elm$core$Basics$identity,
			_List_fromArray(
				[
					$elm$json$Json$Encode$int($author$project$Elm$Review$Vendor$Serialize$version),
					A2($author$project$Elm$Review$Vendor$Serialize$getJsonEncoder, codec, value)
				]));
	});
var $author$project$Elm$Review$Vendor$Serialize$CustomTypeCodec = $elm$core$Basics$identity;
var $author$project$Elm$Review$Vendor$Serialize$customType = function (match) {
	return {
		bt: 0,
		V: function (_v0) {
			return $elm$core$Basics$identity;
		},
		bS: match
	};
};
var $author$project$Elm$Review$AstCodec$InvalidChar = 0;
var $author$project$Elm$Review$Vendor$Serialize$CustomError = function (a) {
	return {$: 0, a: a};
};
var $author$project$Elm$Review$Vendor$Serialize$Codec = $elm$core$Basics$identity;
var $author$project$Elm$Review$Vendor$Serialize$build = F2(
	function (jsonEncoder, jsonDecoder) {
		return {V: jsonDecoder, aR: jsonEncoder};
	});
var $author$project$Elm$Review$Vendor$Serialize$getJsonDecoder = function (_v0) {
	var m = _v0;
	return m.V;
};
var $author$project$Elm$Review$Vendor$Serialize$mapValid = F3(
	function (fromBytes_, toBytes_, codec) {
		return A2(
			$author$project$Elm$Review$Vendor$Serialize$build,
			function (v) {
				return A2(
					$author$project$Elm$Review$Vendor$Serialize$getJsonEncoder,
					codec,
					toBytes_(v));
			},
			A2(
				$elm$json$Json$Decode$map,
				function (value) {
					if (!value.$) {
						var ok = value.a;
						return A2(
							$elm$core$Result$mapError,
							$author$project$Elm$Review$Vendor$Serialize$CustomError,
							fromBytes_(ok));
					} else {
						var err = value.a;
						return $elm$core$Result$Err(err);
					}
				},
				$author$project$Elm$Review$Vendor$Serialize$getJsonDecoder(codec)));
	});
var $author$project$Elm$Review$Vendor$Serialize$string = A2(
	$author$project$Elm$Review$Vendor$Serialize$build,
	$elm$json$Json$Encode$string,
	A2($elm$json$Json$Decode$map, $elm$core$Result$Ok, $elm$json$Json$Decode$string));
var $author$project$Elm$Review$AstCodec$char = A3(
	$author$project$Elm$Review$Vendor$Serialize$mapValid,
	function (string) {
		var _v0 = $elm$core$String$toList(string);
		if (_v0.b) {
			var head = _v0.a;
			return $elm$core$Result$Ok(head);
		} else {
			return $elm$core$Result$Err(0);
		}
	},
	$elm$core$String$fromChar,
	$author$project$Elm$Review$Vendor$Serialize$string);
var $author$project$Elm$Review$Vendor$Serialize$RecordCodec = $elm$core$Basics$identity;
var $elm$json$Json$Decode$index = _Json_decodeIndex;
var $elm$json$Json$Decode$map2 = _Json_map2;
var $author$project$Elm$Review$Vendor$Serialize$field = F3(
	function (getter, codec, _v0) {
		var recordCodec = _v0;
		return {
			bP: recordCodec.bP + 1,
			V: A3(
				$elm$json$Json$Decode$map2,
				F2(
					function (f, x) {
						var _v1 = _Utils_Tuple2(f, x);
						if (!_v1.a.$) {
							if (!_v1.b.$) {
								var fOk = _v1.a.a;
								var xOk = _v1.b.a;
								return $elm$core$Result$Ok(
									fOk(xOk));
							} else {
								var err = _v1.b.a;
								return $elm$core$Result$Err(err);
							}
						} else {
							var err = _v1.a.a;
							return $elm$core$Result$Err(err);
						}
					}),
				recordCodec.V,
				A2(
					$elm$json$Json$Decode$index,
					recordCodec.bP,
					$author$project$Elm$Review$Vendor$Serialize$getJsonDecoder(codec))),
			aR: function (v) {
				return A2(
					$elm$core$List$cons,
					A2(
						$author$project$Elm$Review$Vendor$Serialize$getJsonEncoder,
						codec,
						getter(v)),
					recordCodec.aR(v));
			}
		};
	});
var $author$project$Elm$Review$Vendor$Serialize$DataCorrupted = {$: 1};
var $elm$json$Json$Decode$int = _Json_decodeInt;
var $author$project$Elm$Review$Vendor$Serialize$finishCustomType = function (_v0) {
	var am = _v0;
	return A2(
		$author$project$Elm$Review$Vendor$Serialize$build,
		A2(
			$elm$core$Basics$composeR,
			am.bS,
			function (_v1) {
				var _v2 = _v1;
				var a = _v2.b;
				return a;
			}),
		A2(
			$elm$json$Json$Decode$andThen,
			function (tag) {
				return A2(
					am.V,
					tag,
					$elm$json$Json$Decode$succeed(
						$elm$core$Result$Err($author$project$Elm$Review$Vendor$Serialize$DataCorrupted)));
			},
			A2($elm$json$Json$Decode$index, 0, $elm$json$Json$Decode$int)));
};
var $author$project$Elm$Review$Vendor$Serialize$finishRecord = function (_v0) {
	var codec = _v0;
	return {
		V: codec.V,
		aR: A2(
			$elm$core$Basics$composeR,
			codec.aR,
			A2(
				$elm$core$Basics$composeR,
				$elm$core$List$reverse,
				$elm$json$Json$Encode$list($elm$core$Basics$identity)))
	};
};
var $elm$json$Json$Decode$float = _Json_decodeFloat;
var $elm$json$Json$Encode$float = _Json_wrap;
var $author$project$Elm$Review$Vendor$Serialize$float = A2(
	$author$project$Elm$Review$Vendor$Serialize$build,
	$elm$json$Json$Encode$float,
	A2($elm$json$Json$Decode$map, $elm$core$Result$Ok, $elm$json$Json$Decode$float));
var $author$project$Elm$Review$Vendor$Serialize$findIndexHelp = F3(
	function (index, predicate, list_) {
		findIndexHelp:
		while (true) {
			if (!list_.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var x = list_.a;
				var xs = list_.b;
				if (predicate(x)) {
					return $elm$core$Maybe$Just(index);
				} else {
					var $temp$index = index + 1,
						$temp$predicate = predicate,
						$temp$list_ = xs;
					index = $temp$index;
					predicate = $temp$predicate;
					list_ = $temp$list_;
					continue findIndexHelp;
				}
			}
		}
	});
var $author$project$Elm$Review$Vendor$Serialize$findIndex = $author$project$Elm$Review$Vendor$Serialize$findIndexHelp(0);
var $author$project$Elm$Review$Vendor$Serialize$getAt = F2(
	function (idx, xs) {
		return (idx < 0) ? $elm$core$Maybe$Nothing : $elm$core$List$head(
			A2($elm$core$List$drop, idx, xs));
	});
var $author$project$Elm$Review$Vendor$Serialize$enum = F2(
	function (defaultItem, items) {
		var getItem = function (index) {
			return (index < 0) ? $elm$core$Result$Err($author$project$Elm$Review$Vendor$Serialize$DataCorrupted) : ((_Utils_cmp(
				index,
				$elm$core$List$length(items)) > 0) ? $elm$core$Result$Err($author$project$Elm$Review$Vendor$Serialize$DataCorrupted) : $elm$core$Result$Ok(
				A2(
					$elm$core$Maybe$withDefault,
					defaultItem,
					A2($author$project$Elm$Review$Vendor$Serialize$getAt, index - 1, items))));
		};
		var getIndex = function (value) {
			return 1 + A2(
				$elm$core$Maybe$withDefault,
				-1,
				A2(
					$author$project$Elm$Review$Vendor$Serialize$findIndex,
					$elm$core$Basics$eq(value),
					items));
		};
		return A2(
			$author$project$Elm$Review$Vendor$Serialize$build,
			A2($elm$core$Basics$composeR, getIndex, $elm$json$Json$Encode$int),
			A2($elm$json$Json$Decode$map, getItem, $elm$json$Json$Decode$int));
	});
var $author$project$Elm$Review$AstCodec$infixDirection = A2(
	$author$project$Elm$Review$Vendor$Serialize$enum,
	0,
	_List_fromArray(
		[1, 2]));
var $author$project$Elm$Review$Vendor$Serialize$int = A2(
	$author$project$Elm$Review$Vendor$Serialize$build,
	$elm$json$Json$Encode$int,
	A2($elm$json$Json$Decode$map, $elm$core$Result$Ok, $elm$json$Json$Decode$int));
var $author$project$Elm$Review$Vendor$Serialize$lazy = function (f) {
	return A2(
		$author$project$Elm$Review$Vendor$Serialize$build,
		function (value) {
			return A2(
				$author$project$Elm$Review$Vendor$Serialize$getJsonEncoder,
				f(0),
				value);
		},
		A2(
			$elm$json$Json$Decode$andThen,
			function (_v0) {
				return $author$project$Elm$Review$Vendor$Serialize$getJsonDecoder(
					f(0));
			},
			$elm$json$Json$Decode$succeed(0)));
};
var $author$project$Elm$Review$Vendor$Serialize$list = function (codec) {
	return A2(
		$author$project$Elm$Review$Vendor$Serialize$build,
		$elm$json$Json$Encode$list(
			$author$project$Elm$Review$Vendor$Serialize$getJsonEncoder(codec)),
		A2(
			$elm$json$Json$Decode$map,
			A2(
				$elm$core$List$foldr,
				F2(
					function (value, state) {
						var _v0 = _Utils_Tuple2(value, state);
						if (_v0.b.$ === 1) {
							return state;
						} else {
							if (!_v0.a.$) {
								var ok = _v0.a.a;
								var okState = _v0.b.a;
								return $elm$core$Result$Ok(
									A2($elm$core$List$cons, ok, okState));
							} else {
								var error = _v0.a.a;
								return $elm$core$Result$Err(error);
							}
						}
					}),
				$elm$core$Result$Ok(_List_Nil)),
			$elm$json$Json$Decode$list(
				$author$project$Elm$Review$Vendor$Serialize$getJsonDecoder(codec))));
};
var $author$project$Elm$Review$Vendor$Serialize$VariantEncoder = $elm$core$Basics$identity;
var $author$project$Elm$Review$Vendor$Serialize$variant = F3(
	function (matchJsonPiece, jsonDecoderPiece, _v0) {
		var am = _v0;
		var jsonEnc = function (v) {
			return _Utils_Tuple2(
				0,
				A2(
					$elm$json$Json$Encode$list,
					$elm$core$Basics$identity,
					A2(
						$elm$core$List$cons,
						$elm$json$Json$Encode$int(am.bt),
						v)));
		};
		var jsonDecoder_ = F2(
			function (tag, orElse) {
				return _Utils_eq(tag, am.bt) ? jsonDecoderPiece : A2(am.V, tag, orElse);
			});
		return {
			bt: am.bt + 1,
			V: jsonDecoder_,
			bS: am.bS(
				matchJsonPiece(jsonEnc))
		};
	});
var $author$project$Elm$Review$Vendor$Serialize$variant0 = function (ctor) {
	return A2(
		$author$project$Elm$Review$Vendor$Serialize$variant,
		function (c) {
			return c(_List_Nil);
		},
		$elm$json$Json$Decode$succeed(
			$elm$core$Result$Ok(ctor)));
};
var $author$project$Elm$Review$Vendor$Serialize$result1 = F2(
	function (ctor, value) {
		if (!value.$) {
			var ok = value.a;
			return $elm$core$Result$Ok(
				ctor(ok));
		} else {
			var err = value.a;
			return $elm$core$Result$Err(err);
		}
	});
var $author$project$Elm$Review$Vendor$Serialize$variant1 = F2(
	function (ctor, m1) {
		return A2(
			$author$project$Elm$Review$Vendor$Serialize$variant,
			F2(
				function (c, v) {
					return c(
						_List_fromArray(
							[
								A2($author$project$Elm$Review$Vendor$Serialize$getJsonEncoder, m1, v)
							]));
				}),
			A2(
				$elm$json$Json$Decode$map,
				$author$project$Elm$Review$Vendor$Serialize$result1(ctor),
				A2(
					$elm$json$Json$Decode$index,
					1,
					$author$project$Elm$Review$Vendor$Serialize$getJsonDecoder(m1))));
	});
var $author$project$Elm$Review$Vendor$Serialize$maybe = function (justCodec) {
	return $author$project$Elm$Review$Vendor$Serialize$finishCustomType(
		A3(
			$author$project$Elm$Review$Vendor$Serialize$variant1,
			$elm$core$Maybe$Just,
			justCodec,
			A2(
				$author$project$Elm$Review$Vendor$Serialize$variant0,
				$elm$core$Maybe$Nothing,
				$author$project$Elm$Review$Vendor$Serialize$customType(
					F3(
						function (nothingEncoder, justEncoder, value) {
							if (value.$ === 1) {
								return nothingEncoder;
							} else {
								var value_ = value.a;
								return justEncoder(value_);
							}
						})))));
};
var $author$project$Elm$Review$Vendor$Serialize$record = function (ctor) {
	return {
		bP: 0,
		V: $elm$json$Json$Decode$succeed(
			$elm$core$Result$Ok(ctor)),
		aR: function (_v0) {
			return _List_Nil;
		}
	};
};
var $author$project$Elm$Review$AstCodec$node = function (codec) {
	return $author$project$Elm$Review$Vendor$Serialize$finishRecord(
		A3(
			$author$project$Elm$Review$Vendor$Serialize$field,
			function (_v4) {
				var a = _v4.b;
				return a;
			},
			codec,
			A3(
				$author$project$Elm$Review$Vendor$Serialize$field,
				function (_v3) {
					var range_ = _v3.a;
					return range_.a$.an;
				},
				$author$project$Elm$Review$Vendor$Serialize$int,
				A3(
					$author$project$Elm$Review$Vendor$Serialize$field,
					function (_v2) {
						var range_ = _v2.a;
						return range_.a$.aB;
					},
					$author$project$Elm$Review$Vendor$Serialize$int,
					A3(
						$author$project$Elm$Review$Vendor$Serialize$field,
						function (_v1) {
							var range_ = _v1.a;
							return range_.bg.an;
						},
						$author$project$Elm$Review$Vendor$Serialize$int,
						A3(
							$author$project$Elm$Review$Vendor$Serialize$field,
							function (_v0) {
								var range_ = _v0.a;
								return range_.bg.aB;
							},
							$author$project$Elm$Review$Vendor$Serialize$int,
							$author$project$Elm$Review$Vendor$Serialize$record(
								F5(
									function (a, b, c, d, e) {
										return A2(
											$stil4m$elm_syntax$Elm$Syntax$Node$Node,
											{
												a$: {an: d, aB: c},
												bg: {an: b, aB: a}
											},
											e);
									}))))))));
};
var $author$project$Elm$Review$AstCodec$qualifiedNameRef = $author$project$Elm$Review$Vendor$Serialize$finishRecord(
	A3(
		$author$project$Elm$Review$Vendor$Serialize$field,
		function ($) {
			return $.aW;
		},
		$author$project$Elm$Review$Vendor$Serialize$string,
		A3(
			$author$project$Elm$Review$Vendor$Serialize$field,
			function ($) {
				return $.b_;
			},
			$author$project$Elm$Review$Vendor$Serialize$list($author$project$Elm$Review$Vendor$Serialize$string),
			$author$project$Elm$Review$Vendor$Serialize$record($stil4m$elm_syntax$Elm$Syntax$Pattern$QualifiedNameRef))));
var $author$project$Elm$Review$Vendor$Serialize$result2 = F3(
	function (ctor, v1, v2) {
		var _v0 = _Utils_Tuple2(v1, v2);
		if (!_v0.a.$) {
			if (!_v0.b.$) {
				var ok1 = _v0.a.a;
				var ok2 = _v0.b.a;
				return $elm$core$Result$Ok(
					A2(ctor, ok1, ok2));
			} else {
				var err = _v0.b.a;
				return $elm$core$Result$Err(err);
			}
		} else {
			var err = _v0.a.a;
			return $elm$core$Result$Err(err);
		}
	});
var $author$project$Elm$Review$Vendor$Serialize$variant2 = F3(
	function (ctor, m1, m2) {
		return A2(
			$author$project$Elm$Review$Vendor$Serialize$variant,
			F3(
				function (c, v1, v2) {
					return c(
						_List_fromArray(
							[
								A2($author$project$Elm$Review$Vendor$Serialize$getJsonEncoder, m1, v1),
								A2($author$project$Elm$Review$Vendor$Serialize$getJsonEncoder, m2, v2)
							]));
				}),
			A3(
				$elm$json$Json$Decode$map2,
				$author$project$Elm$Review$Vendor$Serialize$result2(ctor),
				A2(
					$elm$json$Json$Decode$index,
					1,
					$author$project$Elm$Review$Vendor$Serialize$getJsonDecoder(m1)),
				A2(
					$elm$json$Json$Decode$index,
					2,
					$author$project$Elm$Review$Vendor$Serialize$getJsonDecoder(m2))));
	});
function $author$project$Elm$Review$AstCodec$cyclic$pattern() {
	return $author$project$Elm$Review$Vendor$Serialize$finishCustomType(
		A3(
			$author$project$Elm$Review$Vendor$Serialize$variant1,
			$stil4m$elm_syntax$Elm$Syntax$Pattern$ParenthesizedPattern,
			$author$project$Elm$Review$AstCodec$node(
				$author$project$Elm$Review$AstCodec$cyclic$lazyPattern()),
			A4(
				$author$project$Elm$Review$Vendor$Serialize$variant2,
				$stil4m$elm_syntax$Elm$Syntax$Pattern$AsPattern,
				$author$project$Elm$Review$AstCodec$node(
					$author$project$Elm$Review$AstCodec$cyclic$lazyPattern()),
				$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$Vendor$Serialize$string),
				A4(
					$author$project$Elm$Review$Vendor$Serialize$variant2,
					$stil4m$elm_syntax$Elm$Syntax$Pattern$NamedPattern,
					$author$project$Elm$Review$AstCodec$qualifiedNameRef,
					$author$project$Elm$Review$Vendor$Serialize$list(
						$author$project$Elm$Review$AstCodec$node(
							$author$project$Elm$Review$AstCodec$cyclic$lazyPattern())),
					A3(
						$author$project$Elm$Review$Vendor$Serialize$variant1,
						$stil4m$elm_syntax$Elm$Syntax$Pattern$VarPattern,
						$author$project$Elm$Review$Vendor$Serialize$string,
						A3(
							$author$project$Elm$Review$Vendor$Serialize$variant1,
							$stil4m$elm_syntax$Elm$Syntax$Pattern$ListPattern,
							$author$project$Elm$Review$Vendor$Serialize$list(
								$author$project$Elm$Review$AstCodec$node(
									$author$project$Elm$Review$AstCodec$cyclic$lazyPattern())),
							A4(
								$author$project$Elm$Review$Vendor$Serialize$variant2,
								$stil4m$elm_syntax$Elm$Syntax$Pattern$UnConsPattern,
								$author$project$Elm$Review$AstCodec$node(
									$author$project$Elm$Review$AstCodec$cyclic$lazyPattern()),
								$author$project$Elm$Review$AstCodec$node(
									$author$project$Elm$Review$AstCodec$cyclic$lazyPattern()),
								A3(
									$author$project$Elm$Review$Vendor$Serialize$variant1,
									$stil4m$elm_syntax$Elm$Syntax$Pattern$RecordPattern,
									$author$project$Elm$Review$Vendor$Serialize$list(
										$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$Vendor$Serialize$string)),
									A3(
										$author$project$Elm$Review$Vendor$Serialize$variant1,
										$stil4m$elm_syntax$Elm$Syntax$Pattern$TuplePattern,
										$author$project$Elm$Review$Vendor$Serialize$list(
											$author$project$Elm$Review$AstCodec$node(
												$author$project$Elm$Review$AstCodec$cyclic$lazyPattern())),
										A3(
											$author$project$Elm$Review$Vendor$Serialize$variant1,
											$stil4m$elm_syntax$Elm$Syntax$Pattern$FloatPattern,
											$author$project$Elm$Review$Vendor$Serialize$float,
											A3(
												$author$project$Elm$Review$Vendor$Serialize$variant1,
												$stil4m$elm_syntax$Elm$Syntax$Pattern$HexPattern,
												$author$project$Elm$Review$Vendor$Serialize$int,
												A3(
													$author$project$Elm$Review$Vendor$Serialize$variant1,
													$stil4m$elm_syntax$Elm$Syntax$Pattern$IntPattern,
													$author$project$Elm$Review$Vendor$Serialize$int,
													A3(
														$author$project$Elm$Review$Vendor$Serialize$variant1,
														$stil4m$elm_syntax$Elm$Syntax$Pattern$StringPattern,
														$author$project$Elm$Review$Vendor$Serialize$string,
														A3(
															$author$project$Elm$Review$Vendor$Serialize$variant1,
															$stil4m$elm_syntax$Elm$Syntax$Pattern$CharPattern,
															$author$project$Elm$Review$AstCodec$char,
															A2(
																$author$project$Elm$Review$Vendor$Serialize$variant0,
																$stil4m$elm_syntax$Elm$Syntax$Pattern$UnitPattern,
																A2(
																	$author$project$Elm$Review$Vendor$Serialize$variant0,
																	$stil4m$elm_syntax$Elm$Syntax$Pattern$AllPattern,
																	$author$project$Elm$Review$Vendor$Serialize$customType(
																		function (e0) {
																			return function (e1) {
																				return function (e2) {
																					return function (e3) {
																						return function (e4) {
																							return function (e5) {
																								return function (e6) {
																									return function (e7) {
																										return function (e8) {
																											return function (e9) {
																												return function (e10) {
																													return function (e11) {
																														return function (e12) {
																															return function (e13) {
																																return function (e14) {
																																	return function (value) {
																																		switch (value.$) {
																																			case 0:
																																				return e0;
																																			case 1:
																																				return e1;
																																			case 2:
																																				var a = value.a;
																																				return e2(a);
																																			case 3:
																																				var a = value.a;
																																				return e3(a);
																																			case 4:
																																				var a = value.a;
																																				return e4(a);
																																			case 5:
																																				var a = value.a;
																																				return e5(a);
																																			case 6:
																																				var a = value.a;
																																				return e6(a);
																																			case 7:
																																				var a = value.a;
																																				return e7(a);
																																			case 8:
																																				var a = value.a;
																																				return e8(a);
																																			case 9:
																																				var a = value.a;
																																				var b = value.b;
																																				return A2(e9, a, b);
																																			case 10:
																																				var a = value.a;
																																				return e10(a);
																																			case 11:
																																				var a = value.a;
																																				return e11(a);
																																			case 12:
																																				var a = value.a;
																																				var b = value.b;
																																				return A2(e12, a, b);
																																			case 13:
																																				var a = value.a;
																																				var b = value.b;
																																				return A2(e13, a, b);
																																			default:
																																				var a = value.a;
																																				return e14(a);
																																		}
																																	};
																																};
																															};
																														};
																													};
																												};
																											};
																										};
																									};
																								};
																							};
																						};
																					};
																				};
																			};
																		})))))))))))))))));
}
function $author$project$Elm$Review$AstCodec$cyclic$lazyPattern() {
	return $author$project$Elm$Review$Vendor$Serialize$lazy(
		function (_v0) {
			return $author$project$Elm$Review$AstCodec$cyclic$pattern();
		});
}
var $author$project$Elm$Review$AstCodec$pattern = $author$project$Elm$Review$AstCodec$cyclic$pattern();
$author$project$Elm$Review$AstCodec$cyclic$pattern = function () {
	return $author$project$Elm$Review$AstCodec$pattern;
};
var $author$project$Elm$Review$AstCodec$lazyPattern = $author$project$Elm$Review$AstCodec$cyclic$lazyPattern();
$author$project$Elm$Review$AstCodec$cyclic$lazyPattern = function () {
	return $author$project$Elm$Review$AstCodec$lazyPattern;
};
var $author$project$Elm$Review$Vendor$Serialize$tuple = F2(
	function (codecFirst, codecSecond) {
		return $author$project$Elm$Review$Vendor$Serialize$finishRecord(
			A3(
				$author$project$Elm$Review$Vendor$Serialize$field,
				$elm$core$Tuple$second,
				codecSecond,
				A3(
					$author$project$Elm$Review$Vendor$Serialize$field,
					$elm$core$Tuple$first,
					codecFirst,
					$author$project$Elm$Review$Vendor$Serialize$record($elm$core$Tuple$pair))));
	});
function $author$project$Elm$Review$AstCodec$cyclic$typeAnnotation() {
	return $author$project$Elm$Review$Vendor$Serialize$finishCustomType(
		A4(
			$author$project$Elm$Review$Vendor$Serialize$variant2,
			$stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$FunctionTypeAnnotation,
			$author$project$Elm$Review$AstCodec$node(
				$author$project$Elm$Review$AstCodec$cyclic$lazyTypeAnnotation()),
			$author$project$Elm$Review$AstCodec$node(
				$author$project$Elm$Review$AstCodec$cyclic$lazyTypeAnnotation()),
			A4(
				$author$project$Elm$Review$Vendor$Serialize$variant2,
				$stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericRecord,
				$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$Vendor$Serialize$string),
				$author$project$Elm$Review$AstCodec$node(
					$author$project$Elm$Review$AstCodec$cyclic$recordDefinition()),
				A3(
					$author$project$Elm$Review$Vendor$Serialize$variant1,
					$stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Record,
					$author$project$Elm$Review$AstCodec$cyclic$recordDefinition(),
					A3(
						$author$project$Elm$Review$Vendor$Serialize$variant1,
						$stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Tupled,
						$author$project$Elm$Review$Vendor$Serialize$list(
							$author$project$Elm$Review$AstCodec$node(
								$author$project$Elm$Review$AstCodec$cyclic$lazyTypeAnnotation())),
						A2(
							$author$project$Elm$Review$Vendor$Serialize$variant0,
							$stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Unit,
							A4(
								$author$project$Elm$Review$Vendor$Serialize$variant2,
								$stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Typed,
								$author$project$Elm$Review$AstCodec$node(
									A2(
										$author$project$Elm$Review$Vendor$Serialize$tuple,
										$author$project$Elm$Review$Vendor$Serialize$list($author$project$Elm$Review$Vendor$Serialize$string),
										$author$project$Elm$Review$Vendor$Serialize$string)),
								$author$project$Elm$Review$Vendor$Serialize$list(
									$author$project$Elm$Review$AstCodec$node(
										$author$project$Elm$Review$AstCodec$cyclic$lazyTypeAnnotation())),
								A3(
									$author$project$Elm$Review$Vendor$Serialize$variant1,
									$stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericType,
									$author$project$Elm$Review$Vendor$Serialize$string,
									$author$project$Elm$Review$Vendor$Serialize$customType(
										F8(
											function (e0, e1, e2, e3, e4, e5, e6, value) {
												switch (value.$) {
													case 0:
														var a = value.a;
														return e0(a);
													case 1:
														var a = value.a;
														var b = value.b;
														return A2(e1, a, b);
													case 2:
														return e2;
													case 3:
														var a = value.a;
														return e3(a);
													case 4:
														var a = value.a;
														return e4(a);
													case 5:
														var a = value.a;
														var b = value.b;
														return A2(e5, a, b);
													default:
														var a = value.a;
														var b = value.b;
														return A2(e6, a, b);
												}
											}))))))))));
}
function $author$project$Elm$Review$AstCodec$cyclic$recordDefinition() {
	return $author$project$Elm$Review$Vendor$Serialize$list(
		$author$project$Elm$Review$AstCodec$node(
			A2(
				$author$project$Elm$Review$Vendor$Serialize$tuple,
				$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$Vendor$Serialize$string),
				$author$project$Elm$Review$AstCodec$node(
					$author$project$Elm$Review$AstCodec$cyclic$lazyTypeAnnotation()))));
}
function $author$project$Elm$Review$AstCodec$cyclic$lazyTypeAnnotation() {
	return $author$project$Elm$Review$Vendor$Serialize$lazy(
		function (_v0) {
			return $author$project$Elm$Review$AstCodec$cyclic$typeAnnotation();
		});
}
var $author$project$Elm$Review$AstCodec$typeAnnotation = $author$project$Elm$Review$AstCodec$cyclic$typeAnnotation();
$author$project$Elm$Review$AstCodec$cyclic$typeAnnotation = function () {
	return $author$project$Elm$Review$AstCodec$typeAnnotation;
};
var $author$project$Elm$Review$AstCodec$recordDefinition = $author$project$Elm$Review$AstCodec$cyclic$recordDefinition();
$author$project$Elm$Review$AstCodec$cyclic$recordDefinition = function () {
	return $author$project$Elm$Review$AstCodec$recordDefinition;
};
var $author$project$Elm$Review$AstCodec$lazyTypeAnnotation = $author$project$Elm$Review$AstCodec$cyclic$lazyTypeAnnotation();
$author$project$Elm$Review$AstCodec$cyclic$lazyTypeAnnotation = function () {
	return $author$project$Elm$Review$AstCodec$lazyTypeAnnotation;
};
var $author$project$Elm$Review$AstCodec$signature = $author$project$Elm$Review$Vendor$Serialize$finishRecord(
	A3(
		$author$project$Elm$Review$Vendor$Serialize$field,
		function ($) {
			return $.dG;
		},
		$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$AstCodec$typeAnnotation),
		A3(
			$author$project$Elm$Review$Vendor$Serialize$field,
			function ($) {
				return $.aW;
			},
			$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$Vendor$Serialize$string),
			$author$project$Elm$Review$Vendor$Serialize$record($stil4m$elm_syntax$Elm$Syntax$Signature$Signature))));
var $elm$json$Json$Decode$map3 = _Json_map3;
var $author$project$Elm$Review$Vendor$Serialize$result3 = F4(
	function (ctor, v1, v2, v3) {
		var _v0 = _Utils_Tuple3(v1, v2, v3);
		if (!_v0.a.$) {
			if (!_v0.b.$) {
				if (!_v0.c.$) {
					var ok1 = _v0.a.a;
					var ok2 = _v0.b.a;
					var ok3 = _v0.c.a;
					return $elm$core$Result$Ok(
						A3(ctor, ok1, ok2, ok3));
				} else {
					var err = _v0.c.a;
					return $elm$core$Result$Err(err);
				}
			} else {
				var err = _v0.b.a;
				return $elm$core$Result$Err(err);
			}
		} else {
			var err = _v0.a.a;
			return $elm$core$Result$Err(err);
		}
	});
var $author$project$Elm$Review$Vendor$Serialize$variant3 = F4(
	function (ctor, m1, m2, m3) {
		return A2(
			$author$project$Elm$Review$Vendor$Serialize$variant,
			F4(
				function (c, v1, v2, v3) {
					return c(
						_List_fromArray(
							[
								A2($author$project$Elm$Review$Vendor$Serialize$getJsonEncoder, m1, v1),
								A2($author$project$Elm$Review$Vendor$Serialize$getJsonEncoder, m2, v2),
								A2($author$project$Elm$Review$Vendor$Serialize$getJsonEncoder, m3, v3)
							]));
				}),
			A4(
				$elm$json$Json$Decode$map3,
				$author$project$Elm$Review$Vendor$Serialize$result3(ctor),
				A2(
					$elm$json$Json$Decode$index,
					1,
					$author$project$Elm$Review$Vendor$Serialize$getJsonDecoder(m1)),
				A2(
					$elm$json$Json$Decode$index,
					2,
					$author$project$Elm$Review$Vendor$Serialize$getJsonDecoder(m2)),
				A2(
					$elm$json$Json$Decode$index,
					3,
					$author$project$Elm$Review$Vendor$Serialize$getJsonDecoder(m3))));
	});
var $elm$json$Json$Decode$map4 = _Json_map4;
var $author$project$Elm$Review$Vendor$Serialize$T4 = F4(
	function (a, b, c, d) {
		return {$: 0, a: a, b: b, c: c, d: d};
	});
var $author$project$Elm$Review$Vendor$Serialize$result4 = F5(
	function (ctor, v1, v2, v3, v4) {
		var _v0 = A4($author$project$Elm$Review$Vendor$Serialize$T4, v1, v2, v3, v4);
		if (!_v0.a.$) {
			if (!_v0.b.$) {
				if (!_v0.c.$) {
					if (!_v0.d.$) {
						var ok1 = _v0.a.a;
						var ok2 = _v0.b.a;
						var ok3 = _v0.c.a;
						var ok4 = _v0.d.a;
						return $elm$core$Result$Ok(
							A4(ctor, ok1, ok2, ok3, ok4));
					} else {
						var err = _v0.d.a;
						return $elm$core$Result$Err(err);
					}
				} else {
					var err = _v0.c.a;
					return $elm$core$Result$Err(err);
				}
			} else {
				var err = _v0.b.a;
				return $elm$core$Result$Err(err);
			}
		} else {
			var err = _v0.a.a;
			return $elm$core$Result$Err(err);
		}
	});
var $author$project$Elm$Review$Vendor$Serialize$variant4 = F5(
	function (ctor, m1, m2, m3, m4) {
		return A2(
			$author$project$Elm$Review$Vendor$Serialize$variant,
			F5(
				function (c, v1, v2, v3, v4) {
					return c(
						_List_fromArray(
							[
								A2($author$project$Elm$Review$Vendor$Serialize$getJsonEncoder, m1, v1),
								A2($author$project$Elm$Review$Vendor$Serialize$getJsonEncoder, m2, v2),
								A2($author$project$Elm$Review$Vendor$Serialize$getJsonEncoder, m3, v3),
								A2($author$project$Elm$Review$Vendor$Serialize$getJsonEncoder, m4, v4)
							]));
				}),
			A5(
				$elm$json$Json$Decode$map4,
				$author$project$Elm$Review$Vendor$Serialize$result4(ctor),
				A2(
					$elm$json$Json$Decode$index,
					1,
					$author$project$Elm$Review$Vendor$Serialize$getJsonDecoder(m1)),
				A2(
					$elm$json$Json$Decode$index,
					2,
					$author$project$Elm$Review$Vendor$Serialize$getJsonDecoder(m2)),
				A2(
					$elm$json$Json$Decode$index,
					3,
					$author$project$Elm$Review$Vendor$Serialize$getJsonDecoder(m3)),
				A2(
					$elm$json$Json$Decode$index,
					4,
					$author$project$Elm$Review$Vendor$Serialize$getJsonDecoder(m4))));
	});
function $author$project$Elm$Review$AstCodec$cyclic$expression() {
	return $author$project$Elm$Review$Vendor$Serialize$finishCustomType(
		A3(
			$author$project$Elm$Review$Vendor$Serialize$variant1,
			$stil4m$elm_syntax$Elm$Syntax$Expression$Operator,
			$author$project$Elm$Review$Vendor$Serialize$string,
			A3(
				$author$project$Elm$Review$Vendor$Serialize$variant1,
				$stil4m$elm_syntax$Elm$Syntax$Expression$GLSLExpression,
				$author$project$Elm$Review$Vendor$Serialize$string,
				A4(
					$author$project$Elm$Review$Vendor$Serialize$variant2,
					$stil4m$elm_syntax$Elm$Syntax$Expression$RecordUpdateExpression,
					$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$Vendor$Serialize$string),
					$author$project$Elm$Review$Vendor$Serialize$list(
						$author$project$Elm$Review$AstCodec$node(
							$author$project$Elm$Review$AstCodec$cyclic$recordSetter())),
					A3(
						$author$project$Elm$Review$Vendor$Serialize$variant1,
						$stil4m$elm_syntax$Elm$Syntax$Expression$RecordAccessFunction,
						$author$project$Elm$Review$Vendor$Serialize$string,
						A4(
							$author$project$Elm$Review$Vendor$Serialize$variant2,
							$stil4m$elm_syntax$Elm$Syntax$Expression$RecordAccess,
							$author$project$Elm$Review$AstCodec$node(
								$author$project$Elm$Review$AstCodec$cyclic$lazyExpression()),
							$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$Vendor$Serialize$string),
							A3(
								$author$project$Elm$Review$Vendor$Serialize$variant1,
								$stil4m$elm_syntax$Elm$Syntax$Expression$LambdaExpression,
								$author$project$Elm$Review$AstCodec$cyclic$lambda(),
								A3(
									$author$project$Elm$Review$Vendor$Serialize$variant1,
									$stil4m$elm_syntax$Elm$Syntax$Expression$CaseExpression,
									$author$project$Elm$Review$AstCodec$cyclic$caseBlock(),
									A3(
										$author$project$Elm$Review$Vendor$Serialize$variant1,
										$stil4m$elm_syntax$Elm$Syntax$Expression$LetExpression,
										$author$project$Elm$Review$AstCodec$cyclic$letBlock(),
										A3(
											$author$project$Elm$Review$Vendor$Serialize$variant1,
											$stil4m$elm_syntax$Elm$Syntax$Expression$CharLiteral,
											$author$project$Elm$Review$AstCodec$char,
											A3(
												$author$project$Elm$Review$Vendor$Serialize$variant1,
												$stil4m$elm_syntax$Elm$Syntax$Expression$Negation,
												$author$project$Elm$Review$AstCodec$node(
													$author$project$Elm$Review$AstCodec$cyclic$lazyExpression()),
												A3(
													$author$project$Elm$Review$Vendor$Serialize$variant1,
													$stil4m$elm_syntax$Elm$Syntax$Expression$Hex,
													$author$project$Elm$Review$Vendor$Serialize$int,
													A3(
														$author$project$Elm$Review$Vendor$Serialize$variant1,
														$stil4m$elm_syntax$Elm$Syntax$Expression$PrefixOperator,
														$author$project$Elm$Review$Vendor$Serialize$string,
														A5(
															$author$project$Elm$Review$Vendor$Serialize$variant3,
															$stil4m$elm_syntax$Elm$Syntax$Expression$IfBlock,
															$author$project$Elm$Review$AstCodec$node(
																$author$project$Elm$Review$AstCodec$cyclic$lazyExpression()),
															$author$project$Elm$Review$AstCodec$node(
																$author$project$Elm$Review$AstCodec$cyclic$lazyExpression()),
															$author$project$Elm$Review$AstCodec$node(
																$author$project$Elm$Review$AstCodec$cyclic$lazyExpression()),
															A2(
																$author$project$Elm$Review$Vendor$Serialize$variant0,
																$stil4m$elm_syntax$Elm$Syntax$Expression$UnitExpr,
																A3(
																	$author$project$Elm$Review$Vendor$Serialize$variant1,
																	$stil4m$elm_syntax$Elm$Syntax$Expression$ListExpr,
																	$author$project$Elm$Review$Vendor$Serialize$list(
																		$author$project$Elm$Review$AstCodec$node(
																			$author$project$Elm$Review$AstCodec$cyclic$lazyExpression())),
																	A3(
																		$author$project$Elm$Review$Vendor$Serialize$variant1,
																		$stil4m$elm_syntax$Elm$Syntax$Expression$RecordExpr,
																		$author$project$Elm$Review$Vendor$Serialize$list(
																			$author$project$Elm$Review$AstCodec$node(
																				$author$project$Elm$Review$AstCodec$cyclic$recordSetter())),
																		A3(
																			$author$project$Elm$Review$Vendor$Serialize$variant1,
																			$stil4m$elm_syntax$Elm$Syntax$Expression$ParenthesizedExpression,
																			$author$project$Elm$Review$AstCodec$node(
																				$author$project$Elm$Review$AstCodec$cyclic$lazyExpression()),
																			A3(
																				$author$project$Elm$Review$Vendor$Serialize$variant1,
																				$stil4m$elm_syntax$Elm$Syntax$Expression$TupledExpression,
																				$author$project$Elm$Review$Vendor$Serialize$list(
																					$author$project$Elm$Review$AstCodec$node(
																						$author$project$Elm$Review$AstCodec$cyclic$lazyExpression())),
																				A3(
																					$author$project$Elm$Review$Vendor$Serialize$variant1,
																					$stil4m$elm_syntax$Elm$Syntax$Expression$Literal,
																					$author$project$Elm$Review$Vendor$Serialize$string,
																					A3(
																						$author$project$Elm$Review$Vendor$Serialize$variant1,
																						$stil4m$elm_syntax$Elm$Syntax$Expression$Floatable,
																						$author$project$Elm$Review$Vendor$Serialize$float,
																						A3(
																							$author$project$Elm$Review$Vendor$Serialize$variant1,
																							$stil4m$elm_syntax$Elm$Syntax$Expression$Integer,
																							$author$project$Elm$Review$Vendor$Serialize$int,
																							A4(
																								$author$project$Elm$Review$Vendor$Serialize$variant2,
																								$stil4m$elm_syntax$Elm$Syntax$Expression$FunctionOrValue,
																								$author$project$Elm$Review$Vendor$Serialize$list($author$project$Elm$Review$Vendor$Serialize$string),
																								$author$project$Elm$Review$Vendor$Serialize$string,
																								A6(
																									$author$project$Elm$Review$Vendor$Serialize$variant4,
																									$stil4m$elm_syntax$Elm$Syntax$Expression$OperatorApplication,
																									$author$project$Elm$Review$Vendor$Serialize$string,
																									$author$project$Elm$Review$AstCodec$infixDirection,
																									$author$project$Elm$Review$AstCodec$node(
																										$author$project$Elm$Review$AstCodec$cyclic$lazyExpression()),
																									$author$project$Elm$Review$AstCodec$node(
																										$author$project$Elm$Review$AstCodec$cyclic$lazyExpression()),
																									A3(
																										$author$project$Elm$Review$Vendor$Serialize$variant1,
																										$stil4m$elm_syntax$Elm$Syntax$Expression$Application,
																										$author$project$Elm$Review$Vendor$Serialize$list(
																											$author$project$Elm$Review$AstCodec$node(
																												$author$project$Elm$Review$AstCodec$cyclic$lazyExpression())),
																										$author$project$Elm$Review$Vendor$Serialize$customType(
																											function (application) {
																												return function (operatorApplication) {
																													return function (functionOrValue) {
																														return function (integer) {
																															return function (floatable) {
																																return function (literal) {
																																	return function (tuple) {
																																		return function (parenthesized) {
																																			return function (record) {
																																				return function (listExpr) {
																																					return function (unit) {
																																						return function (ifBlock) {
																																							return function (prefixOperator) {
																																								return function (hex) {
																																									return function (negation) {
																																										return function (charExpr) {
																																											return function (letExpr) {
																																												return function (caseExpr) {
																																													return function (lambdaExpr) {
																																														return function (recordAccess) {
																																															return function (recordAccessFunction) {
																																																return function (recordUpdateExpr) {
																																																	return function (glsl) {
																																																		return function (operator) {
																																																			return function (value) {
																																																				switch (value.$) {
																																																					case 1:
																																																						var a = value.a;
																																																						return application(a);
																																																					case 2:
																																																						var a = value.a;
																																																						var b = value.b;
																																																						var c = value.c;
																																																						var d = value.d;
																																																						return A4(operatorApplication, a, b, c, d);
																																																					case 3:
																																																						var a = value.a;
																																																						var b = value.b;
																																																						return A2(functionOrValue, a, b);
																																																					case 7:
																																																						var a = value.a;
																																																						return integer(a);
																																																					case 9:
																																																						var a = value.a;
																																																						return floatable(a);
																																																					case 11:
																																																						var a = value.a;
																																																						return literal(a);
																																																					case 13:
																																																						var a = value.a;
																																																						return tuple(a);
																																																					case 14:
																																																						var a = value.a;
																																																						return parenthesized(a);
																																																					case 18:
																																																						var a = value.a;
																																																						return record(a);
																																																					case 19:
																																																						var a = value.a;
																																																						return listExpr(a);
																																																					case 0:
																																																						return unit;
																																																					case 5:
																																																						var a = value.a;
																																																						return prefixOperator(a);
																																																					case 8:
																																																						var a = value.a;
																																																						return hex(a);
																																																					case 10:
																																																						var a = value.a;
																																																						return negation(a);
																																																					case 12:
																																																						var a = value.a;
																																																						return charExpr(a);
																																																					case 15:
																																																						var a = value.a;
																																																						return letExpr(a);
																																																					case 16:
																																																						var a = value.a;
																																																						return caseExpr(a);
																																																					case 17:
																																																						var a = value.a;
																																																						return lambdaExpr(a);
																																																					case 4:
																																																						var a = value.a;
																																																						var b = value.b;
																																																						var c = value.c;
																																																						return A3(ifBlock, a, b, c);
																																																					case 20:
																																																						var a = value.a;
																																																						var b = value.b;
																																																						return A2(recordAccess, a, b);
																																																					case 21:
																																																						var a = value.a;
																																																						return recordAccessFunction(a);
																																																					case 22:
																																																						var a = value.a;
																																																						var b = value.b;
																																																						return A2(recordUpdateExpr, a, b);
																																																					case 23:
																																																						var a = value.a;
																																																						return glsl(a);
																																																					default:
																																																						var a = value.a;
																																																						return operator(a);
																																																				}
																																																			};
																																																		};
																																																	};
																																																};
																																															};
																																														};
																																													};
																																												};
																																											};
																																										};
																																									};
																																								};
																																							};
																																						};
																																					};
																																				};
																																			};
																																		};
																																	};
																																};
																															};
																														};
																													};
																												};
																											}))))))))))))))))))))))))));
}
function $author$project$Elm$Review$AstCodec$cyclic$caseBlock() {
	return $author$project$Elm$Review$Vendor$Serialize$finishRecord(
		A3(
			$author$project$Elm$Review$Vendor$Serialize$field,
			function ($) {
				return $.dS;
			},
			$author$project$Elm$Review$Vendor$Serialize$list(
				A2(
					$author$project$Elm$Review$Vendor$Serialize$tuple,
					$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$AstCodec$pattern),
					$author$project$Elm$Review$AstCodec$node(
						$author$project$Elm$Review$AstCodec$cyclic$lazyExpression()))),
			A3(
				$author$project$Elm$Review$Vendor$Serialize$field,
				function ($) {
					return $.bN;
				},
				$author$project$Elm$Review$AstCodec$node(
					$author$project$Elm$Review$AstCodec$cyclic$lazyExpression()),
				$author$project$Elm$Review$Vendor$Serialize$record($stil4m$elm_syntax$Elm$Syntax$Expression$CaseBlock))));
}
function $author$project$Elm$Review$AstCodec$cyclic$letBlock() {
	return $author$project$Elm$Review$Vendor$Serialize$finishRecord(
		A3(
			$author$project$Elm$Review$Vendor$Serialize$field,
			function ($) {
				return $.bN;
			},
			$author$project$Elm$Review$AstCodec$node(
				$author$project$Elm$Review$AstCodec$cyclic$lazyExpression()),
			A3(
				$author$project$Elm$Review$Vendor$Serialize$field,
				function ($) {
					return $.cW;
				},
				$author$project$Elm$Review$Vendor$Serialize$list(
					$author$project$Elm$Review$AstCodec$node(
						$author$project$Elm$Review$AstCodec$cyclic$letDeclaration())),
				$author$project$Elm$Review$Vendor$Serialize$record($stil4m$elm_syntax$Elm$Syntax$Expression$LetBlock))));
}
function $author$project$Elm$Review$AstCodec$cyclic$letDeclaration() {
	return $author$project$Elm$Review$Vendor$Serialize$finishCustomType(
		A4(
			$author$project$Elm$Review$Vendor$Serialize$variant2,
			$stil4m$elm_syntax$Elm$Syntax$Expression$LetDestructuring,
			$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$AstCodec$pattern),
			$author$project$Elm$Review$AstCodec$node(
				$author$project$Elm$Review$AstCodec$cyclic$lazyExpression()),
			A3(
				$author$project$Elm$Review$Vendor$Serialize$variant1,
				$stil4m$elm_syntax$Elm$Syntax$Expression$LetFunction,
				$author$project$Elm$Review$AstCodec$cyclic$function(),
				$author$project$Elm$Review$Vendor$Serialize$customType(
					F3(
						function (e0, e1, value) {
							if (!value.$) {
								var a = value.a;
								return e0(a);
							} else {
								var a = value.a;
								var b = value.b;
								return A2(e1, a, b);
							}
						})))));
}
function $author$project$Elm$Review$AstCodec$cyclic$function() {
	return $author$project$Elm$Review$Vendor$Serialize$finishRecord(
		A3(
			$author$project$Elm$Review$Vendor$Serialize$field,
			function ($) {
				return $.dZ;
			},
			$author$project$Elm$Review$AstCodec$node(
				$author$project$Elm$Review$AstCodec$cyclic$functionImplementation()),
			A3(
				$author$project$Elm$Review$Vendor$Serialize$field,
				function ($) {
					return $.ez;
				},
				$author$project$Elm$Review$Vendor$Serialize$maybe(
					$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$AstCodec$signature)),
				A3(
					$author$project$Elm$Review$Vendor$Serialize$field,
					function ($) {
						return $.cg;
					},
					$author$project$Elm$Review$Vendor$Serialize$maybe(
						$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$Vendor$Serialize$string)),
					$author$project$Elm$Review$Vendor$Serialize$record($stil4m$elm_syntax$Elm$Syntax$Expression$Function)))));
}
function $author$project$Elm$Review$AstCodec$cyclic$functionImplementation() {
	return $author$project$Elm$Review$Vendor$Serialize$finishRecord(
		A3(
			$author$project$Elm$Review$Vendor$Serialize$field,
			function ($) {
				return $.bN;
			},
			$author$project$Elm$Review$AstCodec$node(
				$author$project$Elm$Review$AstCodec$cyclic$lazyExpression()),
			A3(
				$author$project$Elm$Review$Vendor$Serialize$field,
				function ($) {
					return $.cO;
				},
				$author$project$Elm$Review$Vendor$Serialize$list(
					$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$AstCodec$pattern)),
				A3(
					$author$project$Elm$Review$Vendor$Serialize$field,
					function ($) {
						return $.aW;
					},
					$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$Vendor$Serialize$string),
					$author$project$Elm$Review$Vendor$Serialize$record($stil4m$elm_syntax$Elm$Syntax$Expression$FunctionImplementation)))));
}
function $author$project$Elm$Review$AstCodec$cyclic$lambda() {
	return $author$project$Elm$Review$Vendor$Serialize$finishRecord(
		A3(
			$author$project$Elm$Review$Vendor$Serialize$field,
			function ($) {
				return $.bN;
			},
			$author$project$Elm$Review$AstCodec$node(
				$author$project$Elm$Review$AstCodec$cyclic$lazyExpression()),
			A3(
				$author$project$Elm$Review$Vendor$Serialize$field,
				function ($) {
					return $.dM;
				},
				$author$project$Elm$Review$Vendor$Serialize$list(
					$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$AstCodec$pattern)),
				$author$project$Elm$Review$Vendor$Serialize$record($stil4m$elm_syntax$Elm$Syntax$Expression$Lambda))));
}
function $author$project$Elm$Review$AstCodec$cyclic$recordSetter() {
	return A2(
		$author$project$Elm$Review$Vendor$Serialize$tuple,
		$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$Vendor$Serialize$string),
		$author$project$Elm$Review$AstCodec$node(
			$author$project$Elm$Review$AstCodec$cyclic$lazyExpression()));
}
function $author$project$Elm$Review$AstCodec$cyclic$lazyExpression() {
	return $author$project$Elm$Review$Vendor$Serialize$lazy(
		function (_v0) {
			return $author$project$Elm$Review$AstCodec$cyclic$expression();
		});
}
var $author$project$Elm$Review$AstCodec$expression = $author$project$Elm$Review$AstCodec$cyclic$expression();
$author$project$Elm$Review$AstCodec$cyclic$expression = function () {
	return $author$project$Elm$Review$AstCodec$expression;
};
var $author$project$Elm$Review$AstCodec$caseBlock = $author$project$Elm$Review$AstCodec$cyclic$caseBlock();
$author$project$Elm$Review$AstCodec$cyclic$caseBlock = function () {
	return $author$project$Elm$Review$AstCodec$caseBlock;
};
var $author$project$Elm$Review$AstCodec$letBlock = $author$project$Elm$Review$AstCodec$cyclic$letBlock();
$author$project$Elm$Review$AstCodec$cyclic$letBlock = function () {
	return $author$project$Elm$Review$AstCodec$letBlock;
};
var $author$project$Elm$Review$AstCodec$letDeclaration = $author$project$Elm$Review$AstCodec$cyclic$letDeclaration();
$author$project$Elm$Review$AstCodec$cyclic$letDeclaration = function () {
	return $author$project$Elm$Review$AstCodec$letDeclaration;
};
var $author$project$Elm$Review$AstCodec$function = $author$project$Elm$Review$AstCodec$cyclic$function();
$author$project$Elm$Review$AstCodec$cyclic$function = function () {
	return $author$project$Elm$Review$AstCodec$function;
};
var $author$project$Elm$Review$AstCodec$functionImplementation = $author$project$Elm$Review$AstCodec$cyclic$functionImplementation();
$author$project$Elm$Review$AstCodec$cyclic$functionImplementation = function () {
	return $author$project$Elm$Review$AstCodec$functionImplementation;
};
var $author$project$Elm$Review$AstCodec$lambda = $author$project$Elm$Review$AstCodec$cyclic$lambda();
$author$project$Elm$Review$AstCodec$cyclic$lambda = function () {
	return $author$project$Elm$Review$AstCodec$lambda;
};
var $author$project$Elm$Review$AstCodec$recordSetter = $author$project$Elm$Review$AstCodec$cyclic$recordSetter();
$author$project$Elm$Review$AstCodec$cyclic$recordSetter = function () {
	return $author$project$Elm$Review$AstCodec$recordSetter;
};
var $author$project$Elm$Review$AstCodec$lazyExpression = $author$project$Elm$Review$AstCodec$cyclic$lazyExpression();
$author$project$Elm$Review$AstCodec$cyclic$lazyExpression = function () {
	return $author$project$Elm$Review$AstCodec$lazyExpression;
};
var $author$project$Elm$Review$AstCodec$infix_ = $author$project$Elm$Review$Vendor$Serialize$finishRecord(
	A3(
		$author$project$Elm$Review$Vendor$Serialize$field,
		function ($) {
			return $.d5;
		},
		$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$Vendor$Serialize$string),
		A3(
			$author$project$Elm$Review$Vendor$Serialize$field,
			function ($) {
				return $.eq;
			},
			$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$Vendor$Serialize$string),
			A3(
				$author$project$Elm$Review$Vendor$Serialize$field,
				function ($) {
					return $.et;
				},
				$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$Vendor$Serialize$int),
				A3(
					$author$project$Elm$Review$Vendor$Serialize$field,
					function ($) {
						return $.d_;
					},
					$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$AstCodec$infixDirection),
					$author$project$Elm$Review$Vendor$Serialize$record($stil4m$elm_syntax$Elm$Syntax$Infix$Infix))))));
var $author$project$Elm$Review$AstCodec$typeAlias = $author$project$Elm$Review$Vendor$Serialize$finishRecord(
	A3(
		$author$project$Elm$Review$Vendor$Serialize$field,
		function ($) {
			return $.dG;
		},
		$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$AstCodec$typeAnnotation),
		A3(
			$author$project$Elm$Review$Vendor$Serialize$field,
			function ($) {
				return $.c5;
			},
			$author$project$Elm$Review$Vendor$Serialize$list(
				$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$Vendor$Serialize$string)),
			A3(
				$author$project$Elm$Review$Vendor$Serialize$field,
				function ($) {
					return $.aW;
				},
				$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$Vendor$Serialize$string),
				A3(
					$author$project$Elm$Review$Vendor$Serialize$field,
					function ($) {
						return $.cg;
					},
					$author$project$Elm$Review$Vendor$Serialize$maybe(
						$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$Vendor$Serialize$string)),
					$author$project$Elm$Review$Vendor$Serialize$record($stil4m$elm_syntax$Elm$Syntax$TypeAlias$TypeAlias))))));
var $author$project$Elm$Review$AstCodec$valueConstructor = $author$project$Elm$Review$Vendor$Serialize$finishRecord(
	A3(
		$author$project$Elm$Review$Vendor$Serialize$field,
		function ($) {
			return $.cO;
		},
		$author$project$Elm$Review$Vendor$Serialize$list(
			$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$AstCodec$typeAnnotation)),
		A3(
			$author$project$Elm$Review$Vendor$Serialize$field,
			function ($) {
				return $.aW;
			},
			$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$Vendor$Serialize$string),
			$author$project$Elm$Review$Vendor$Serialize$record($stil4m$elm_syntax$Elm$Syntax$Type$ValueConstructor))));
var $author$project$Elm$Review$AstCodec$type_ = $author$project$Elm$Review$Vendor$Serialize$finishRecord(
	A3(
		$author$project$Elm$Review$Vendor$Serialize$field,
		function ($) {
			return $.dX;
		},
		$author$project$Elm$Review$Vendor$Serialize$list(
			$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$AstCodec$valueConstructor)),
		A3(
			$author$project$Elm$Review$Vendor$Serialize$field,
			function ($) {
				return $.c5;
			},
			$author$project$Elm$Review$Vendor$Serialize$list(
				$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$Vendor$Serialize$string)),
			A3(
				$author$project$Elm$Review$Vendor$Serialize$field,
				function ($) {
					return $.aW;
				},
				$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$Vendor$Serialize$string),
				A3(
					$author$project$Elm$Review$Vendor$Serialize$field,
					function ($) {
						return $.cg;
					},
					$author$project$Elm$Review$Vendor$Serialize$maybe(
						$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$Vendor$Serialize$string)),
					$author$project$Elm$Review$Vendor$Serialize$record($stil4m$elm_syntax$Elm$Syntax$Type$Type))))));
var $author$project$Elm$Review$AstCodec$declaration = $author$project$Elm$Review$Vendor$Serialize$finishCustomType(
	A4(
		$author$project$Elm$Review$Vendor$Serialize$variant2,
		$stil4m$elm_syntax$Elm$Syntax$Declaration$Destructuring,
		$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$AstCodec$pattern),
		$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$AstCodec$expression),
		A3(
			$author$project$Elm$Review$Vendor$Serialize$variant1,
			$stil4m$elm_syntax$Elm$Syntax$Declaration$InfixDeclaration,
			$author$project$Elm$Review$AstCodec$infix_,
			A3(
				$author$project$Elm$Review$Vendor$Serialize$variant1,
				$stil4m$elm_syntax$Elm$Syntax$Declaration$PortDeclaration,
				$author$project$Elm$Review$AstCodec$signature,
				A3(
					$author$project$Elm$Review$Vendor$Serialize$variant1,
					$stil4m$elm_syntax$Elm$Syntax$Declaration$CustomTypeDeclaration,
					$author$project$Elm$Review$AstCodec$type_,
					A3(
						$author$project$Elm$Review$Vendor$Serialize$variant1,
						$stil4m$elm_syntax$Elm$Syntax$Declaration$AliasDeclaration,
						$author$project$Elm$Review$AstCodec$typeAlias,
						A3(
							$author$project$Elm$Review$Vendor$Serialize$variant1,
							$stil4m$elm_syntax$Elm$Syntax$Declaration$FunctionDeclaration,
							$author$project$Elm$Review$AstCodec$function,
							$author$project$Elm$Review$Vendor$Serialize$customType(
								F7(
									function (e0, e1, e2, e3, e4, e5, value) {
										switch (value.$) {
											case 0:
												var a = value.a;
												return e0(a);
											case 1:
												var a = value.a;
												return e1(a);
											case 2:
												var a = value.a;
												return e2(a);
											case 3:
												var a = value.a;
												return e3(a);
											case 4:
												var a = value.a;
												return e4(a);
											default:
												var a = value.a;
												var b = value.b;
												return A2(e5, a, b);
										}
									})))))))));
var $author$project$Elm$Review$AstCodec$range = $author$project$Elm$Review$Vendor$Serialize$finishRecord(
	A3(
		$author$project$Elm$Review$Vendor$Serialize$field,
		A2(
			$elm$core$Basics$composeR,
			function ($) {
				return $.a$;
			},
			function ($) {
				return $.an;
			}),
		$author$project$Elm$Review$Vendor$Serialize$int,
		A3(
			$author$project$Elm$Review$Vendor$Serialize$field,
			A2(
				$elm$core$Basics$composeR,
				function ($) {
					return $.a$;
				},
				function ($) {
					return $.aB;
				}),
			$author$project$Elm$Review$Vendor$Serialize$int,
			A3(
				$author$project$Elm$Review$Vendor$Serialize$field,
				A2(
					$elm$core$Basics$composeR,
					function ($) {
						return $.bg;
					},
					function ($) {
						return $.an;
					}),
				$author$project$Elm$Review$Vendor$Serialize$int,
				A3(
					$author$project$Elm$Review$Vendor$Serialize$field,
					A2(
						$elm$core$Basics$composeR,
						function ($) {
							return $.bg;
						},
						function ($) {
							return $.aB;
						}),
					$author$project$Elm$Review$Vendor$Serialize$int,
					$author$project$Elm$Review$Vendor$Serialize$record(
						F4(
							function (startRow, startColumn, endRow, endColumn) {
								return {
									a$: {an: endColumn, aB: endRow},
									bg: {an: startColumn, aB: startRow}
								};
							})))))));
var $author$project$Elm$Review$AstCodec$exposedType = $author$project$Elm$Review$Vendor$Serialize$finishRecord(
	A3(
		$author$project$Elm$Review$Vendor$Serialize$field,
		function ($) {
			return $.ep;
		},
		$author$project$Elm$Review$Vendor$Serialize$maybe($author$project$Elm$Review$AstCodec$range),
		A3(
			$author$project$Elm$Review$Vendor$Serialize$field,
			function ($) {
				return $.aW;
			},
			$author$project$Elm$Review$Vendor$Serialize$string,
			$author$project$Elm$Review$Vendor$Serialize$record($stil4m$elm_syntax$Elm$Syntax$Exposing$ExposedType))));
var $author$project$Elm$Review$AstCodec$topLevelExpose = $author$project$Elm$Review$Vendor$Serialize$finishCustomType(
	A3(
		$author$project$Elm$Review$Vendor$Serialize$variant1,
		$stil4m$elm_syntax$Elm$Syntax$Exposing$TypeExpose,
		$author$project$Elm$Review$AstCodec$exposedType,
		A3(
			$author$project$Elm$Review$Vendor$Serialize$variant1,
			$stil4m$elm_syntax$Elm$Syntax$Exposing$TypeOrAliasExpose,
			$author$project$Elm$Review$Vendor$Serialize$string,
			A3(
				$author$project$Elm$Review$Vendor$Serialize$variant1,
				$stil4m$elm_syntax$Elm$Syntax$Exposing$FunctionExpose,
				$author$project$Elm$Review$Vendor$Serialize$string,
				A3(
					$author$project$Elm$Review$Vendor$Serialize$variant1,
					$stil4m$elm_syntax$Elm$Syntax$Exposing$InfixExpose,
					$author$project$Elm$Review$Vendor$Serialize$string,
					$author$project$Elm$Review$Vendor$Serialize$customType(
						F5(
							function (e0, e1, e2, e3, value) {
								switch (value.$) {
									case 0:
										var a = value.a;
										return e0(a);
									case 1:
										var a = value.a;
										return e1(a);
									case 2:
										var a = value.a;
										return e2(a);
									default:
										var a = value.a;
										return e3(a);
								}
							})))))));
var $author$project$Elm$Review$AstCodec$exposing_ = $author$project$Elm$Review$Vendor$Serialize$finishCustomType(
	A3(
		$author$project$Elm$Review$Vendor$Serialize$variant1,
		$stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit,
		$author$project$Elm$Review$Vendor$Serialize$list(
			$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$AstCodec$topLevelExpose)),
		A3(
			$author$project$Elm$Review$Vendor$Serialize$variant1,
			$stil4m$elm_syntax$Elm$Syntax$Exposing$All,
			$author$project$Elm$Review$AstCodec$range,
			$author$project$Elm$Review$Vendor$Serialize$customType(
				F3(
					function (e0, e1, value) {
						if (!value.$) {
							var a = value.a;
							return e0(a);
						} else {
							var a = value.a;
							return e1(a);
						}
					})))));
var $author$project$Elm$Review$AstCodec$import_ = $author$project$Elm$Review$Vendor$Serialize$finishRecord(
	A3(
		$author$project$Elm$Review$Vendor$Serialize$field,
		function ($) {
			return $.ck;
		},
		$author$project$Elm$Review$Vendor$Serialize$maybe(
			$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$AstCodec$exposing_)),
		A3(
			$author$project$Elm$Review$Vendor$Serialize$field,
			function ($) {
				return $.ec;
			},
			$author$project$Elm$Review$Vendor$Serialize$maybe(
				$author$project$Elm$Review$AstCodec$node(
					$author$project$Elm$Review$Vendor$Serialize$list($author$project$Elm$Review$Vendor$Serialize$string))),
			A3(
				$author$project$Elm$Review$Vendor$Serialize$field,
				function ($) {
					return $.b_;
				},
				$author$project$Elm$Review$AstCodec$node(
					$author$project$Elm$Review$Vendor$Serialize$list($author$project$Elm$Review$Vendor$Serialize$string)),
				$author$project$Elm$Review$Vendor$Serialize$record($stil4m$elm_syntax$Elm$Syntax$Import$Import)))));
var $author$project$Elm$Review$AstCodec$defaultModuleData = $author$project$Elm$Review$Vendor$Serialize$finishRecord(
	A3(
		$author$project$Elm$Review$Vendor$Serialize$field,
		function ($) {
			return $.ck;
		},
		$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$AstCodec$exposing_),
		A3(
			$author$project$Elm$Review$Vendor$Serialize$field,
			function ($) {
				return $.b_;
			},
			$author$project$Elm$Review$AstCodec$node(
				$author$project$Elm$Review$Vendor$Serialize$list($author$project$Elm$Review$Vendor$Serialize$string)),
			$author$project$Elm$Review$Vendor$Serialize$record($stil4m$elm_syntax$Elm$Syntax$Module$DefaultModuleData))));
var $stil4m$elm_syntax$Elm$Syntax$Module$EffectModuleData = F4(
	function (moduleName, exposingList, command, subscription) {
		return {dV: command, ck: exposingList, b_: moduleName, eE: subscription};
	});
var $author$project$Elm$Review$AstCodec$effectModuleData = $author$project$Elm$Review$Vendor$Serialize$finishRecord(
	A3(
		$author$project$Elm$Review$Vendor$Serialize$field,
		function ($) {
			return $.eE;
		},
		$author$project$Elm$Review$Vendor$Serialize$maybe(
			$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$Vendor$Serialize$string)),
		A3(
			$author$project$Elm$Review$Vendor$Serialize$field,
			function ($) {
				return $.dV;
			},
			$author$project$Elm$Review$Vendor$Serialize$maybe(
				$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$Vendor$Serialize$string)),
			A3(
				$author$project$Elm$Review$Vendor$Serialize$field,
				function ($) {
					return $.ck;
				},
				$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$AstCodec$exposing_),
				A3(
					$author$project$Elm$Review$Vendor$Serialize$field,
					function ($) {
						return $.b_;
					},
					$author$project$Elm$Review$AstCodec$node(
						$author$project$Elm$Review$Vendor$Serialize$list($author$project$Elm$Review$Vendor$Serialize$string)),
					$author$project$Elm$Review$Vendor$Serialize$record($stil4m$elm_syntax$Elm$Syntax$Module$EffectModuleData))))));
var $author$project$Elm$Review$AstCodec$module_ = $author$project$Elm$Review$Vendor$Serialize$finishCustomType(
	A3(
		$author$project$Elm$Review$Vendor$Serialize$variant1,
		$stil4m$elm_syntax$Elm$Syntax$Module$EffectModule,
		$author$project$Elm$Review$AstCodec$effectModuleData,
		A3(
			$author$project$Elm$Review$Vendor$Serialize$variant1,
			$stil4m$elm_syntax$Elm$Syntax$Module$PortModule,
			$author$project$Elm$Review$AstCodec$defaultModuleData,
			A3(
				$author$project$Elm$Review$Vendor$Serialize$variant1,
				$stil4m$elm_syntax$Elm$Syntax$Module$NormalModule,
				$author$project$Elm$Review$AstCodec$defaultModuleData,
				$author$project$Elm$Review$Vendor$Serialize$customType(
					F4(
						function (e0, e1, e2, value) {
							switch (value.$) {
								case 0:
									var a = value.a;
									return e0(a);
								case 1:
									var a = value.a;
									return e1(a);
								default:
									var a = value.a;
									return e2(a);
							}
						}))))));
var $author$project$Elm$Review$AstCodec$file = $author$project$Elm$Review$Vendor$Serialize$finishRecord(
	A3(
		$author$project$Elm$Review$Vendor$Serialize$field,
		function ($) {
			return $.dW;
		},
		$author$project$Elm$Review$Vendor$Serialize$list(
			$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$Vendor$Serialize$string)),
		A3(
			$author$project$Elm$Review$Vendor$Serialize$field,
			function ($) {
				return $.cW;
			},
			$author$project$Elm$Review$Vendor$Serialize$list(
				$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$AstCodec$declaration)),
			A3(
				$author$project$Elm$Review$Vendor$Serialize$field,
				function ($) {
					return $.d7;
				},
				$author$project$Elm$Review$Vendor$Serialize$list(
					$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$AstCodec$import_)),
				A3(
					$author$project$Elm$Review$Vendor$Serialize$field,
					function ($) {
						return $.ed;
					},
					$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$AstCodec$module_),
					$author$project$Elm$Review$Vendor$Serialize$record($stil4m$elm_syntax$Elm$Syntax$File$File))))));
var $author$project$Elm$Review$AstCodec$encode = function (file_) {
	return A2($author$project$Elm$Review$Vendor$Serialize$encodeToJson, $author$project$Elm$Review$AstCodec$file, file_);
};
var $author$project$Elm$Review$Main$find = F2(
	function (predicate, list) {
		find:
		while (true) {
			if (!list.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var first = list.a;
				var rest = list.b;
				if (predicate(first)) {
					return $elm$core$Maybe$Just(first);
				} else {
					var $temp$predicate = predicate,
						$temp$list = rest;
					predicate = $temp$predicate;
					list = $temp$list;
					continue find;
				}
			}
		}
	});
var $author$project$Elm$Review$Main$cacheFileRequest = F2(
	function (project, source) {
		var _v0 = A2(
			$author$project$Elm$Review$Main$find,
			function (module_) {
				return _Utils_eq(module_.eA, source);
			},
			$jfmengels$elm_review$Review$Project$modules(project));
		if (!_v0.$) {
			var ast = _v0.a.dO;
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'source',
						$elm$json$Json$Encode$string(source)),
						_Utils_Tuple2(
						'ast',
						$author$project$Elm$Review$AstCodec$encode(ast))
					]));
		} else {
			return $elm$json$Json$Encode$null;
		}
	});
var $author$project$Elm$Review$Main$Accepted = function (a) {
	return {$: 0, a: a};
};
var $author$project$Elm$Review$Main$Refused = {$: 1};
var $author$project$Elm$Review$Vendor$Serialize$SerializerOutOfDate = {$: 2};
var $author$project$Elm$Review$Vendor$Serialize$decodeFromJson = F2(
	function (codec, json) {
		var decoder = A2(
			$elm$json$Json$Decode$andThen,
			function (value) {
				return (value <= 0) ? $elm$json$Json$Decode$succeed(
					$elm$core$Result$Err($author$project$Elm$Review$Vendor$Serialize$DataCorrupted)) : (_Utils_eq(value, $author$project$Elm$Review$Vendor$Serialize$version) ? A2(
					$elm$json$Json$Decode$index,
					1,
					$author$project$Elm$Review$Vendor$Serialize$getJsonDecoder(codec)) : $elm$json$Json$Decode$succeed(
					$elm$core$Result$Err($author$project$Elm$Review$Vendor$Serialize$SerializerOutOfDate)));
			},
			A2($elm$json$Json$Decode$index, 0, $elm$json$Json$Decode$int));
		var _v0 = A2($elm$json$Json$Decode$decodeValue, decoder, json);
		if (!_v0.$) {
			var value = _v0.a;
			return value;
		} else {
			return $elm$core$Result$Err($author$project$Elm$Review$Vendor$Serialize$DataCorrupted);
		}
	});
var $author$project$Elm$Review$AstCodec$decode = A2(
	$elm$json$Json$Decode$andThen,
	function (data) {
		var _v0 = A2($author$project$Elm$Review$Vendor$Serialize$decodeFromJson, $author$project$Elm$Review$AstCodec$file, data);
		if (!_v0.$) {
			var res = _v0.a;
			return $elm$json$Json$Decode$succeed(res);
		} else {
			return $elm$json$Json$Decode$fail('Not a valid file');
		}
	},
	$elm$json$Json$Decode$value);
var $author$project$Elm$Review$File$decode = A4(
	$elm$json$Json$Decode$map3,
	F3(
		function (path, source, ast) {
			return {dO: ast, es: path, eA: source};
		}),
	A2($elm$json$Json$Decode$field, 'path', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'source', $elm$json$Json$Decode$string),
	$elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$json$Json$Decode$field,
				'ast',
				A2($elm$json$Json$Decode$map, $elm$core$Maybe$Just, $author$project$Elm$Review$AstCodec$decode)),
				$elm$json$Json$Decode$succeed($elm$core$Maybe$Nothing)
			])));
var $author$project$Elm$Review$Main$confirmationDecoder = A2(
	$elm$json$Json$Decode$andThen,
	function (accepted) {
		return accepted ? A2(
			$elm$json$Json$Decode$map,
			$author$project$Elm$Review$Main$Accepted,
			A2(
				$elm$json$Json$Decode$field,
				'files',
				$elm$json$Json$Decode$list($author$project$Elm$Review$File$decode))) : $elm$json$Json$Decode$succeed($author$project$Elm$Review$Main$Refused);
	},
	A2($elm$json$Json$Decode$field, 'answer', $elm$json$Json$Decode$bool));
var $jfmengels$elm_review$Review$Project$Dependency$Dependency = $elm$core$Basics$identity;
var $jfmengels$elm_review$Review$Project$Dependency$create = F3(
	function (name_, elmJson_, modules_) {
		return {ch: elmJson_, ad: modules_, aW: name_};
	});
var $elm$project_metadata_utils$Elm$Docs$Module = F6(
	function (name, comment, unions, aliases, values, binops) {
		return {cN: aliases, cR: binops, aZ: comment, aW: name, dH: unions, dI: values};
	});
var $elm$project_metadata_utils$Elm$Docs$Alias = F4(
	function (name, comment, args, tipe) {
		return {dM: args, aZ: comment, aW: name, cL: tipe};
	});
var $elm$parser$Parser$Forbidden = 0;
var $elm$project_metadata_utils$Elm$Type$Lambda = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $elm$project_metadata_utils$Elm$Type$Record = F2(
	function (a, b) {
		return {$: 4, a: a, b: b};
	});
var $elm$project_metadata_utils$Elm$Type$Type = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $elm$project_metadata_utils$Elm$Type$Var = function (a) {
	return {$: 0, a: a};
};
var $elm$project_metadata_utils$Elm$Type$arrow = $elm$parser$Parser$symbol('->');
var $elm$project_metadata_utils$Elm$Type$comma = $elm$parser$Parser$symbol(',');
var $elm$project_metadata_utils$Elm$Type$isInnerVarChar = function (_char) {
	return $elm$core$Char$isAlphaNum(_char) || (_char === '_');
};
var $elm$project_metadata_utils$Elm$Type$var = function (isFirst) {
	return $elm$parser$Parser$variable(
		{da: $elm$project_metadata_utils$Elm$Type$isInnerVarChar, dp: $elm$core$Set$empty, bg: isFirst});
};
var $elm$project_metadata_utils$Elm$Type$lowVar = $elm$project_metadata_utils$Elm$Type$var($elm$core$Char$isLower);
var $elm$project_metadata_utils$Elm$Type$spaces = $elm$parser$Parser$chompWhile(
	function (_char) {
		return _char === ' ';
	});
var $elm$project_metadata_utils$Elm$Type$extension = $elm$parser$Parser$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$keeper,
			$elm$parser$Parser$succeed($elm$core$Maybe$Just),
			A2(
				$elm$parser$Parser$ignorer,
				A2(
					$elm$parser$Parser$ignorer,
					A2(
						$elm$parser$Parser$ignorer,
						$elm$parser$Parser$backtrackable($elm$project_metadata_utils$Elm$Type$lowVar),
						$elm$parser$Parser$backtrackable($elm$project_metadata_utils$Elm$Type$spaces)),
					$elm$parser$Parser$symbol('|')),
				$elm$project_metadata_utils$Elm$Type$spaces)),
			$elm$parser$Parser$succeed($elm$core$Maybe$Nothing)
		]));
var $elm$project_metadata_utils$Elm$Type$capVar = $elm$project_metadata_utils$Elm$Type$var($elm$core$Char$isUpper);
var $elm$project_metadata_utils$Elm$Type$qualifiedCapVarHelp = function (_v0) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$ignorer,
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$succeed(
						$elm$parser$Parser$Loop(0)),
					$elm$parser$Parser$symbol('.')),
				$elm$project_metadata_utils$Elm$Type$capVar),
				$elm$parser$Parser$succeed(
				$elm$parser$Parser$Done(0))
			]));
};
var $elm$project_metadata_utils$Elm$Type$qualifiedCapVar = $elm$parser$Parser$getChompedString(
	A2(
		$elm$parser$Parser$ignorer,
		$elm$project_metadata_utils$Elm$Type$capVar,
		A2($elm$parser$Parser$loop, 0, $elm$project_metadata_utils$Elm$Type$qualifiedCapVarHelp)));
var $elm$parser$Parser$Advanced$sequenceEndForbidden = F5(
	function (ender, ws, parseItem, sep, revItems) {
		var chompRest = function (item) {
			return A5(
				$elm$parser$Parser$Advanced$sequenceEndForbidden,
				ender,
				ws,
				parseItem,
				sep,
				A2($elm$core$List$cons, item, revItems));
		};
		return A2(
			$elm$parser$Parser$Advanced$skip,
			ws,
			$elm$parser$Parser$Advanced$oneOf(
				_List_fromArray(
					[
						A2(
						$elm$parser$Parser$Advanced$skip,
						sep,
						A2(
							$elm$parser$Parser$Advanced$skip,
							ws,
							A2(
								$elm$parser$Parser$Advanced$map,
								function (item) {
									return $elm$parser$Parser$Advanced$Loop(
										A2($elm$core$List$cons, item, revItems));
								},
								parseItem))),
						A2(
						$elm$parser$Parser$Advanced$map,
						function (_v0) {
							return $elm$parser$Parser$Advanced$Done(
								$elm$core$List$reverse(revItems));
						},
						ender)
					])));
	});
var $elm$parser$Parser$Advanced$sequenceEndMandatory = F4(
	function (ws, parseItem, sep, revItems) {
		return $elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$Advanced$map,
					function (item) {
						return $elm$parser$Parser$Advanced$Loop(
							A2($elm$core$List$cons, item, revItems));
					},
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						parseItem,
						A2(
							$elm$parser$Parser$Advanced$ignorer,
							ws,
							A2($elm$parser$Parser$Advanced$ignorer, sep, ws)))),
					A2(
					$elm$parser$Parser$Advanced$map,
					function (_v0) {
						return $elm$parser$Parser$Advanced$Done(
							$elm$core$List$reverse(revItems));
					},
					$elm$parser$Parser$Advanced$succeed(0))
				]));
	});
var $elm$parser$Parser$Advanced$sequenceEndOptional = F5(
	function (ender, ws, parseItem, sep, revItems) {
		var parseEnd = A2(
			$elm$parser$Parser$Advanced$map,
			function (_v0) {
				return $elm$parser$Parser$Advanced$Done(
					$elm$core$List$reverse(revItems));
			},
			ender);
		return A2(
			$elm$parser$Parser$Advanced$skip,
			ws,
			$elm$parser$Parser$Advanced$oneOf(
				_List_fromArray(
					[
						A2(
						$elm$parser$Parser$Advanced$skip,
						sep,
						A2(
							$elm$parser$Parser$Advanced$skip,
							ws,
							$elm$parser$Parser$Advanced$oneOf(
								_List_fromArray(
									[
										A2(
										$elm$parser$Parser$Advanced$map,
										function (item) {
											return $elm$parser$Parser$Advanced$Loop(
												A2($elm$core$List$cons, item, revItems));
										},
										parseItem),
										parseEnd
									])))),
						parseEnd
					])));
	});
var $elm$parser$Parser$Advanced$sequenceEnd = F5(
	function (ender, ws, parseItem, sep, trailing) {
		var chompRest = function (item) {
			switch (trailing) {
				case 0:
					return A2(
						$elm$parser$Parser$Advanced$loop,
						_List_fromArray(
							[item]),
						A4($elm$parser$Parser$Advanced$sequenceEndForbidden, ender, ws, parseItem, sep));
				case 1:
					return A2(
						$elm$parser$Parser$Advanced$loop,
						_List_fromArray(
							[item]),
						A4($elm$parser$Parser$Advanced$sequenceEndOptional, ender, ws, parseItem, sep));
				default:
					return A2(
						$elm$parser$Parser$Advanced$ignorer,
						A2(
							$elm$parser$Parser$Advanced$skip,
							ws,
							A2(
								$elm$parser$Parser$Advanced$skip,
								sep,
								A2(
									$elm$parser$Parser$Advanced$skip,
									ws,
									A2(
										$elm$parser$Parser$Advanced$loop,
										_List_fromArray(
											[item]),
										A3($elm$parser$Parser$Advanced$sequenceEndMandatory, ws, parseItem, sep))))),
						ender);
			}
		};
		return $elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					A2($elm$parser$Parser$Advanced$andThen, chompRest, parseItem),
					A2(
					$elm$parser$Parser$Advanced$map,
					function (_v0) {
						return _List_Nil;
					},
					ender)
				]));
	});
var $elm$parser$Parser$Advanced$sequence = function (i) {
	return A2(
		$elm$parser$Parser$Advanced$skip,
		$elm$parser$Parser$Advanced$token(i.bg),
		A2(
			$elm$parser$Parser$Advanced$skip,
			i.dw,
			A5(
				$elm$parser$Parser$Advanced$sequenceEnd,
				$elm$parser$Parser$Advanced$token(i.a$),
				i.dw,
				i.dd,
				$elm$parser$Parser$Advanced$token(i.du),
				i.dF)));
};
var $elm$parser$Parser$Advanced$Forbidden = 0;
var $elm$parser$Parser$Advanced$Mandatory = 2;
var $elm$parser$Parser$Advanced$Optional = 1;
var $elm$parser$Parser$toAdvancedTrailing = function (trailing) {
	switch (trailing) {
		case 0:
			return 0;
		case 1:
			return 1;
		default:
			return 2;
	}
};
var $elm$parser$Parser$sequence = function (i) {
	return $elm$parser$Parser$Advanced$sequence(
		{
			a$: $elm$parser$Parser$toToken(i.a$),
			dd: i.dd,
			du: $elm$parser$Parser$toToken(i.du),
			dw: i.dw,
			bg: $elm$parser$Parser$toToken(i.bg),
			dF: $elm$parser$Parser$toAdvancedTrailing(i.dF)
		});
};
var $elm$project_metadata_utils$Elm$Type$Tuple = function (a) {
	return {$: 2, a: a};
};
var $elm$project_metadata_utils$Elm$Type$tuplize = function (args) {
	if (args.b && (!args.b.b)) {
		var arg = args.a;
		return arg;
	} else {
		return $elm$project_metadata_utils$Elm$Type$Tuple(args);
	}
};
var $elm$project_metadata_utils$Elm$Type$chompArgs = function (revArgs) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$map,
				function (arg) {
					return $elm$parser$Parser$Loop(
						A2($elm$core$List$cons, arg, revArgs));
				},
				A2(
					$elm$parser$Parser$keeper,
					A2(
						$elm$parser$Parser$ignorer,
						$elm$parser$Parser$succeed($elm$core$Basics$identity),
						$elm$parser$Parser$backtrackable($elm$project_metadata_utils$Elm$Type$spaces)),
					$elm$project_metadata_utils$Elm$Type$cyclic$term())),
				A2(
				$elm$parser$Parser$map,
				function (_v2) {
					return $elm$parser$Parser$Done(
						$elm$core$List$reverse(revArgs));
				},
				$elm$parser$Parser$succeed(0))
			]));
};
var $elm$project_metadata_utils$Elm$Type$recordEndHelp = function (revFields) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$keeper,
				A2(
					$elm$parser$Parser$ignorer,
					A2(
						$elm$parser$Parser$ignorer,
						$elm$parser$Parser$succeed(
							function (f) {
								return $elm$parser$Parser$Loop(
									A2($elm$core$List$cons, f, revFields));
							}),
						$elm$project_metadata_utils$Elm$Type$comma),
					$elm$project_metadata_utils$Elm$Type$spaces),
				A2(
					$elm$parser$Parser$ignorer,
					$elm$project_metadata_utils$Elm$Type$cyclic$field(),
					$elm$project_metadata_utils$Elm$Type$spaces)),
				A2(
				$elm$parser$Parser$keeper,
				$elm$parser$Parser$succeed(
					function (_v1) {
						return $elm$parser$Parser$Done(
							$elm$core$List$reverse(revFields));
					}),
				$elm$parser$Parser$symbol('}'))
			]));
};
var $elm$project_metadata_utils$Elm$Type$tipeHelp = function (t) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$map,
				$elm$project_metadata_utils$Elm$Type$Lambda(t),
				$elm$project_metadata_utils$Elm$Type$cyclic$arrowAndType()),
				$elm$parser$Parser$succeed(t)
			]));
};
function $elm$project_metadata_utils$Elm$Type$cyclic$arrowAndType() {
	return A2(
		$elm$parser$Parser$keeper,
		A2(
			$elm$parser$Parser$ignorer,
			A2(
				$elm$parser$Parser$ignorer,
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$succeed($elm$core$Basics$identity),
					$elm$parser$Parser$backtrackable($elm$project_metadata_utils$Elm$Type$spaces)),
				$elm$project_metadata_utils$Elm$Type$arrow),
			$elm$project_metadata_utils$Elm$Type$spaces),
		$elm$project_metadata_utils$Elm$Type$cyclic$tipe());
}
function $elm$project_metadata_utils$Elm$Type$cyclic$tipeTerm() {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2($elm$parser$Parser$map, $elm$project_metadata_utils$Elm$Type$Var, $elm$project_metadata_utils$Elm$Type$lowVar),
				A2(
				$elm$parser$Parser$keeper,
				A2(
					$elm$parser$Parser$keeper,
					$elm$parser$Parser$succeed($elm$project_metadata_utils$Elm$Type$Type),
					$elm$project_metadata_utils$Elm$Type$qualifiedCapVar),
				A2($elm$parser$Parser$loop, _List_Nil, $elm$project_metadata_utils$Elm$Type$chompArgs)),
				$elm$project_metadata_utils$Elm$Type$cyclic$record(),
				$elm$project_metadata_utils$Elm$Type$cyclic$tuple()
			]));
}
function $elm$project_metadata_utils$Elm$Type$cyclic$term() {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2($elm$parser$Parser$map, $elm$project_metadata_utils$Elm$Type$Var, $elm$project_metadata_utils$Elm$Type$lowVar),
				A2(
				$elm$parser$Parser$map,
				function (name) {
					return A2($elm$project_metadata_utils$Elm$Type$Type, name, _List_Nil);
				},
				$elm$project_metadata_utils$Elm$Type$qualifiedCapVar),
				$elm$project_metadata_utils$Elm$Type$cyclic$record(),
				$elm$project_metadata_utils$Elm$Type$cyclic$tuple()
			]));
}
function $elm$project_metadata_utils$Elm$Type$cyclic$record() {
	return A2(
		$elm$parser$Parser$keeper,
		A2(
			$elm$parser$Parser$keeper,
			A2(
				$elm$parser$Parser$ignorer,
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$succeed(
						F2(
							function (ext, fs) {
								return A2($elm$project_metadata_utils$Elm$Type$Record, fs, ext);
							})),
					$elm$parser$Parser$symbol('{')),
				$elm$project_metadata_utils$Elm$Type$spaces),
			$elm$project_metadata_utils$Elm$Type$extension),
		$elm$project_metadata_utils$Elm$Type$cyclic$recordEnd());
}
function $elm$project_metadata_utils$Elm$Type$cyclic$recordEnd() {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$andThen,
				function (f) {
					return A2(
						$elm$parser$Parser$loop,
						_List_fromArray(
							[f]),
						$elm$project_metadata_utils$Elm$Type$recordEndHelp);
				},
				A2(
					$elm$parser$Parser$ignorer,
					$elm$project_metadata_utils$Elm$Type$cyclic$field(),
					$elm$project_metadata_utils$Elm$Type$spaces)),
				A2(
				$elm$parser$Parser$ignorer,
				$elm$parser$Parser$succeed(_List_Nil),
				$elm$parser$Parser$symbol('}'))
			]));
}
function $elm$project_metadata_utils$Elm$Type$cyclic$field() {
	return A2(
		$elm$parser$Parser$keeper,
		A2(
			$elm$parser$Parser$keeper,
			$elm$parser$Parser$succeed($elm$core$Tuple$pair),
			A2(
				$elm$parser$Parser$ignorer,
				A2(
					$elm$parser$Parser$ignorer,
					A2($elm$parser$Parser$ignorer, $elm$project_metadata_utils$Elm$Type$lowVar, $elm$project_metadata_utils$Elm$Type$spaces),
					$elm$parser$Parser$symbol(':')),
				$elm$project_metadata_utils$Elm$Type$spaces)),
		$elm$project_metadata_utils$Elm$Type$cyclic$tipe());
}
function $elm$project_metadata_utils$Elm$Type$cyclic$tuple() {
	return A2(
		$elm$parser$Parser$map,
		$elm$project_metadata_utils$Elm$Type$tuplize,
		$elm$parser$Parser$sequence(
			{
				a$: ')',
				dd: $elm$project_metadata_utils$Elm$Type$cyclic$tipe(),
				du: ',',
				dw: $elm$project_metadata_utils$Elm$Type$spaces,
				bg: '(',
				dF: 0
			}));
}
function $elm$project_metadata_utils$Elm$Type$cyclic$tipe() {
	return $elm$parser$Parser$lazy(
		function (_v0) {
			return A2(
				$elm$parser$Parser$andThen,
				$elm$project_metadata_utils$Elm$Type$tipeHelp,
				$elm$project_metadata_utils$Elm$Type$cyclic$tipeTerm());
		});
}
var $elm$project_metadata_utils$Elm$Type$arrowAndType = $elm$project_metadata_utils$Elm$Type$cyclic$arrowAndType();
$elm$project_metadata_utils$Elm$Type$cyclic$arrowAndType = function () {
	return $elm$project_metadata_utils$Elm$Type$arrowAndType;
};
var $elm$project_metadata_utils$Elm$Type$tipeTerm = $elm$project_metadata_utils$Elm$Type$cyclic$tipeTerm();
$elm$project_metadata_utils$Elm$Type$cyclic$tipeTerm = function () {
	return $elm$project_metadata_utils$Elm$Type$tipeTerm;
};
var $elm$project_metadata_utils$Elm$Type$term = $elm$project_metadata_utils$Elm$Type$cyclic$term();
$elm$project_metadata_utils$Elm$Type$cyclic$term = function () {
	return $elm$project_metadata_utils$Elm$Type$term;
};
var $elm$project_metadata_utils$Elm$Type$record = $elm$project_metadata_utils$Elm$Type$cyclic$record();
$elm$project_metadata_utils$Elm$Type$cyclic$record = function () {
	return $elm$project_metadata_utils$Elm$Type$record;
};
var $elm$project_metadata_utils$Elm$Type$recordEnd = $elm$project_metadata_utils$Elm$Type$cyclic$recordEnd();
$elm$project_metadata_utils$Elm$Type$cyclic$recordEnd = function () {
	return $elm$project_metadata_utils$Elm$Type$recordEnd;
};
var $elm$project_metadata_utils$Elm$Type$field = $elm$project_metadata_utils$Elm$Type$cyclic$field();
$elm$project_metadata_utils$Elm$Type$cyclic$field = function () {
	return $elm$project_metadata_utils$Elm$Type$field;
};
var $elm$project_metadata_utils$Elm$Type$tuple = $elm$project_metadata_utils$Elm$Type$cyclic$tuple();
$elm$project_metadata_utils$Elm$Type$cyclic$tuple = function () {
	return $elm$project_metadata_utils$Elm$Type$tuple;
};
var $elm$project_metadata_utils$Elm$Type$tipe = $elm$project_metadata_utils$Elm$Type$cyclic$tipe();
$elm$project_metadata_utils$Elm$Type$cyclic$tipe = function () {
	return $elm$project_metadata_utils$Elm$Type$tipe;
};
var $elm$project_metadata_utils$Elm$Type$parse = function (source) {
	return A2($elm$parser$Parser$run, $elm$project_metadata_utils$Elm$Type$tipe, source);
};
var $elm$project_metadata_utils$Elm$Type$decoderHelp = function (string) {
	var _v0 = $elm$project_metadata_utils$Elm$Type$parse(string);
	if (_v0.$ === 1) {
		var error = _v0.a;
		return $elm$json$Json$Decode$fail('TODO');
	} else {
		var actualType = _v0.a;
		return $elm$json$Json$Decode$succeed(actualType);
	}
};
var $elm$project_metadata_utils$Elm$Type$decoder = A2($elm$json$Json$Decode$andThen, $elm$project_metadata_utils$Elm$Type$decoderHelp, $elm$json$Json$Decode$string);
var $elm$project_metadata_utils$Elm$Docs$aliasDecoder = A5(
	$elm$json$Json$Decode$map4,
	$elm$project_metadata_utils$Elm$Docs$Alias,
	A2($elm$json$Json$Decode$field, 'name', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'comment', $elm$json$Json$Decode$string),
	A2(
		$elm$json$Json$Decode$field,
		'args',
		$elm$json$Json$Decode$list($elm$json$Json$Decode$string)),
	A2($elm$json$Json$Decode$field, 'type', $elm$project_metadata_utils$Elm$Type$decoder));
var $elm$project_metadata_utils$Elm$Docs$Binop = F5(
	function (name, comment, tipe, associativity, precedence) {
		return {dN: associativity, aZ: comment, aW: name, et: precedence, cL: tipe};
	});
var $elm$project_metadata_utils$Elm$Docs$Left = 0;
var $elm$project_metadata_utils$Elm$Docs$None = 1;
var $elm$project_metadata_utils$Elm$Docs$Right = 2;
var $elm$project_metadata_utils$Elm$Docs$toAssoc = function (str) {
	switch (str) {
		case 'left':
			return $elm$json$Json$Decode$succeed(0);
		case 'non':
			return $elm$json$Json$Decode$succeed(1);
		case 'right':
			return $elm$json$Json$Decode$succeed(2);
		default:
			return $elm$json$Json$Decode$fail('expecting one of the following values: left, non, right');
	}
};
var $elm$project_metadata_utils$Elm$Docs$assocDecoder = A2($elm$json$Json$Decode$andThen, $elm$project_metadata_utils$Elm$Docs$toAssoc, $elm$json$Json$Decode$string);
var $elm$json$Json$Decode$map5 = _Json_map5;
var $elm$project_metadata_utils$Elm$Docs$binopDecoder = A6(
	$elm$json$Json$Decode$map5,
	$elm$project_metadata_utils$Elm$Docs$Binop,
	A2($elm$json$Json$Decode$field, 'name', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'comment', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'type', $elm$project_metadata_utils$Elm$Type$decoder),
	A2($elm$json$Json$Decode$field, 'associativity', $elm$project_metadata_utils$Elm$Docs$assocDecoder),
	A2($elm$json$Json$Decode$field, 'precedence', $elm$json$Json$Decode$int));
var $elm$project_metadata_utils$Elm$Docs$Union = F4(
	function (name, comment, args, tags) {
		return {dM: args, aZ: comment, aW: name, eI: tags};
	});
var $elm$project_metadata_utils$Elm$Docs$tagDecoder = A3(
	$elm$json$Json$Decode$map2,
	F2(
		function (a, b) {
			return _Utils_Tuple2(a, b);
		}),
	A2($elm$json$Json$Decode$index, 0, $elm$json$Json$Decode$string),
	A2(
		$elm$json$Json$Decode$index,
		1,
		$elm$json$Json$Decode$list($elm$project_metadata_utils$Elm$Type$decoder)));
var $elm$project_metadata_utils$Elm$Docs$unionDecoder = A5(
	$elm$json$Json$Decode$map4,
	$elm$project_metadata_utils$Elm$Docs$Union,
	A2($elm$json$Json$Decode$field, 'name', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'comment', $elm$json$Json$Decode$string),
	A2(
		$elm$json$Json$Decode$field,
		'args',
		$elm$json$Json$Decode$list($elm$json$Json$Decode$string)),
	A2(
		$elm$json$Json$Decode$field,
		'cases',
		$elm$json$Json$Decode$list($elm$project_metadata_utils$Elm$Docs$tagDecoder)));
var $elm$project_metadata_utils$Elm$Docs$Value = F3(
	function (name, comment, tipe) {
		return {aZ: comment, aW: name, cL: tipe};
	});
var $elm$project_metadata_utils$Elm$Docs$valueDecoder = A4(
	$elm$json$Json$Decode$map3,
	$elm$project_metadata_utils$Elm$Docs$Value,
	A2($elm$json$Json$Decode$field, 'name', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'comment', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'type', $elm$project_metadata_utils$Elm$Type$decoder));
var $elm$project_metadata_utils$Elm$Docs$decoder = A7(
	$elm$json$Json$Decode$map6,
	$elm$project_metadata_utils$Elm$Docs$Module,
	A2($elm$json$Json$Decode$field, 'name', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'comment', $elm$json$Json$Decode$string),
	A2(
		$elm$json$Json$Decode$field,
		'unions',
		$elm$json$Json$Decode$list($elm$project_metadata_utils$Elm$Docs$unionDecoder)),
	A2(
		$elm$json$Json$Decode$field,
		'aliases',
		$elm$json$Json$Decode$list($elm$project_metadata_utils$Elm$Docs$aliasDecoder)),
	A2(
		$elm$json$Json$Decode$field,
		'values',
		$elm$json$Json$Decode$list($elm$project_metadata_utils$Elm$Docs$valueDecoder)),
	A2(
		$elm$json$Json$Decode$field,
		'binops',
		$elm$json$Json$Decode$list($elm$project_metadata_utils$Elm$Docs$binopDecoder)));
var $elm$json$Json$Decode$dict = function (decoder) {
	return A2(
		$elm$json$Json$Decode$map,
		$elm$core$Dict$fromList,
		$elm$json$Json$Decode$keyValuePairs(decoder));
};
var $author$project$Elm$Review$Main$elmJsonDecoder = A4(
	$elm$json$Json$Decode$map3,
	F3(
		function (path, raw, project) {
			return {es: path, c: project, bb: raw};
		}),
	A2($elm$json$Json$Decode$field, 'path', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'raw', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'project', $elm$project_metadata_utils$Elm$Project$decoder));
var $author$project$Elm$Review$Main$fixConfirmationStatus = _Platform_outgoingPort('fixConfirmationStatus', $elm$json$Json$Encode$bool);
var $author$project$Elm$Review$Main$AwaitingError = function (a) {
	return {$: 1, a: a};
};
var $author$project$Elm$Review$Reporter$FilePath = function (a) {
	return {$: 0, a: a};
};
var $author$project$Elm$Review$Main$askConfirmationToFix = _Platform_outgoingPort('askConfirmationToFix', $elm$core$Basics$identity);
var $author$project$Elm$Review$Main$encodeChangedFile = function (changedFile) {
	var _v0 = changedFile.eA;
	var source = _v0;
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'path',
				$author$project$Elm$Review$Main$encodeFilePath(changedFile.es)),
				_Utils_Tuple2(
				'source',
				$elm$json$Json$Encode$string(source))
			]));
};
var $jfmengels$elm_review$Review$Rule$errorMessage = function (_v0) {
	var err = _v0;
	return err.al;
};
var $jfmengels$elm_review$Review$Rule$errorFilePath = function (_v0) {
	var err = _v0;
	return err.cn;
};
var $jfmengels$elm_review$Review$Rule$errorFixes = function (_v0) {
	var err = _v0;
	return err.cp;
};
var $jfmengels$elm_review$Review$Rule$errorTarget = function (_v0) {
	var err = _v0;
	return err.dB;
};
var $jfmengels$elm_review$Review$Fix$Errored = function (a) {
	return {$: 1, a: a};
};
var $jfmengels$elm_review$Review$Fix$Unchanged = {$: 0};
var $jfmengels$elm_review$Review$Fix$HasCollisionsInFixRanges = {$: 2};
var $jfmengels$elm_review$Review$Fix$SourceCodeIsNotValid = function (a) {
	return {$: 1, a: a};
};
var $jfmengels$elm_review$Review$Fix$Successful = function (a) {
	return {$: 0, a: a};
};
var $jfmengels$elm_review$Unicode$dropLeft = F2(
	function (n, string) {
		return $elm$core$String$fromList(
			A2(
				$elm$core$List$drop,
				n,
				$elm$core$String$toList(string)));
	});
var $jfmengels$elm_review$Review$Fix$getRowAtLine = F2(
	function (lines, rowIndex) {
		var _v0 = A2(
			$elm$core$Array$get,
			rowIndex,
			$elm$core$Array$fromList(lines));
		if (!_v0.$) {
			var line = _v0.a;
			return ($elm$core$String$trim(line) !== '') ? line : '';
		} else {
			return '';
		}
	});
var $jfmengels$elm_review$Unicode$left = F2(
	function (n, string) {
		return $elm$core$String$fromList(
			A2(
				$elm$core$List$take,
				n,
				$elm$core$String$toList(string)));
	});
var $jfmengels$elm_review$Review$Fix$applyReplace = F3(
	function (range, replacement, lines) {
		var startLine = A2(
			$jfmengels$elm_review$Unicode$left,
			range.bg.an - 1,
			A2($jfmengels$elm_review$Review$Fix$getRowAtLine, lines, range.bg.aB - 1));
		var linesBefore = A2($elm$core$List$take, range.bg.aB - 1, lines);
		var linesAfter = A2($elm$core$List$drop, range.a$.aB, lines);
		var endLine = A2(
			$jfmengels$elm_review$Unicode$dropLeft,
			range.a$.an - 1,
			A2($jfmengels$elm_review$Review$Fix$getRowAtLine, lines, range.a$.aB - 1));
		return $elm$core$List$concat(
			_List_fromArray(
				[
					linesBefore,
					$elm$core$String$lines(
					_Utils_ap(
						startLine,
						_Utils_ap(replacement, endLine))),
					linesAfter
				]));
	});
var $jfmengels$elm_review$Review$Fix$applyFix = F2(
	function (fix_, lines) {
		switch (fix_.$) {
			case 1:
				var range = fix_.a;
				var replacement = fix_.b;
				return A3($jfmengels$elm_review$Review$Fix$applyReplace, range, replacement, lines);
			case 0:
				var range = fix_.a;
				return A3($jfmengels$elm_review$Review$Fix$applyReplace, range, '', lines);
			default:
				var position = fix_.a;
				var insertion = fix_.b;
				return A3(
					$jfmengels$elm_review$Review$Fix$applyReplace,
					{a$: position, bg: position},
					insertion,
					lines);
		}
	});
var $jfmengels$elm_review$Review$Fix$comparePosition = F2(
	function (a, b) {
		var _v0 = A2($elm$core$Basics$compare, a.aB, b.aB);
		if (_v0 === 1) {
			return A2($elm$core$Basics$compare, a.an, b.an);
		} else {
			var order = _v0;
			return order;
		}
	});
var $jfmengels$elm_review$Review$Fix$collide = F2(
	function (a, b) {
		var _v0 = A2($jfmengels$elm_review$Review$Fix$comparePosition, a.a$, b.bg);
		switch (_v0) {
			case 0:
				return false;
			case 1:
				return false;
			default:
				var _v1 = A2($jfmengels$elm_review$Review$Fix$comparePosition, b.a$, a.bg);
				switch (_v1) {
					case 0:
						return false;
					case 1:
						return false;
					default:
						return true;
				}
		}
	});
var $jfmengels$elm_review$Review$Fix$getFixRange = function (fix_) {
	switch (fix_.$) {
		case 1:
			var range = fix_.a;
			return range;
		case 0:
			var range = fix_.a;
			return range;
		default:
			var position = fix_.a;
			return {a$: position, bg: position};
	}
};
var $jfmengels$elm_review$Vendor$ListExtra$uniquePairs = function (xs) {
	if (!xs.b) {
		return _List_Nil;
	} else {
		var x = xs.a;
		var xs_ = xs.b;
		return _Utils_ap(
			A2(
				$elm$core$List$map,
				function (y) {
					return _Utils_Tuple2(x, y);
				},
				xs_),
			$jfmengels$elm_review$Vendor$ListExtra$uniquePairs(xs_));
	}
};
var $jfmengels$elm_review$Review$Fix$containRangeCollisions = function (fixes) {
	return A2(
		$elm$core$List$any,
		function (_v0) {
			var a = _v0.a;
			var b = _v0.b;
			return A2($jfmengels$elm_review$Review$Fix$collide, a, b);
		},
		$jfmengels$elm_review$Vendor$ListExtra$uniquePairs(
			A2($elm$core$List$map, $jfmengels$elm_review$Review$Fix$getFixRange, fixes)));
};
var $jfmengels$elm_review$Review$Fix$positionAsInt = function (_v0) {
	var row = _v0.aB;
	var column = _v0.an;
	return (row * 1000000) + column;
};
var $jfmengels$elm_review$Review$Fix$rangePosition = function (fix_) {
	return $jfmengels$elm_review$Review$Fix$positionAsInt(
		function () {
			switch (fix_.$) {
				case 1:
					var range = fix_.a;
					return range.bg;
				case 0:
					var range = fix_.a;
					return range.bg;
				default:
					var position = fix_.a;
					return position;
			}
		}());
};
var $jfmengels$elm_review$Review$Fix$tryToApplyFix = F3(
	function (fixes, sourceCode, isValidSourceCode) {
		if ($jfmengels$elm_review$Review$Fix$containRangeCollisions(fixes)) {
			return $jfmengels$elm_review$Review$Fix$Errored($jfmengels$elm_review$Review$Fix$HasCollisionsInFixRanges);
		} else {
			var resultAfterFix = A2(
				$elm$core$String$join,
				'\n',
				A3(
					$elm$core$List$foldl,
					$jfmengels$elm_review$Review$Fix$applyFix,
					$elm$core$String$lines(sourceCode),
					A2(
						$elm$core$List$sortBy,
						A2($elm$core$Basics$composeR, $jfmengels$elm_review$Review$Fix$rangePosition, $elm$core$Basics$negate),
						fixes)));
			return _Utils_eq(sourceCode, resultAfterFix) ? $jfmengels$elm_review$Review$Fix$Errored($jfmengels$elm_review$Review$Fix$Unchanged) : (isValidSourceCode(resultAfterFix) ? $jfmengels$elm_review$Review$Fix$Successful(resultAfterFix) : $jfmengels$elm_review$Review$Fix$Errored(
				$jfmengels$elm_review$Review$Fix$SourceCodeIsNotValid(resultAfterFix)));
		}
	});
var $jfmengels$elm_review$Review$Fix$fix = F3(
	function (target, fixes, sourceCode) {
		switch (target) {
			case 0:
				return A3(
					$jfmengels$elm_review$Review$Fix$tryToApplyFix,
					fixes,
					sourceCode,
					function (resultAfterFix) {
						return !_Utils_eq(
							$elm$core$Result$toMaybe(
								$stil4m$elm_syntax$Elm$Parser$parse(resultAfterFix)),
							$elm$core$Maybe$Nothing);
					});
			case 2:
				return A3(
					$jfmengels$elm_review$Review$Fix$tryToApplyFix,
					fixes,
					sourceCode,
					$elm$core$Basics$always(true));
			case 1:
				return A3(
					$jfmengels$elm_review$Review$Fix$tryToApplyFix,
					fixes,
					sourceCode,
					function (resultAfterFix) {
						return !_Utils_eq(
							$elm$core$Result$toMaybe(
								A2($elm$json$Json$Decode$decodeString, $elm$project_metadata_utils$Elm$Project$decoder, resultAfterFix)),
							$elm$core$Maybe$Nothing);
					});
			case 3:
				return $jfmengels$elm_review$Review$Fix$Errored($jfmengels$elm_review$Review$Fix$Unchanged);
			default:
				return $jfmengels$elm_review$Review$Fix$Errored($jfmengels$elm_review$Review$Fix$Unchanged);
		}
	});
var $author$project$Elm$Review$Reporter$hashRange = function (range) {
	return A2(
		$elm$core$String$join,
		'-',
		A2(
			$elm$core$List$map,
			$elm$core$String$fromInt,
			_List_fromArray(
				[range.bg.aB, range.bg.an, range.a$.aB, range.a$.an])));
};
var $author$project$Elm$Review$Reporter$hashFix = function (_v0) {
	var range = _v0.cB;
	var replacement = _v0.ey;
	return $author$project$Elm$Review$Reporter$hashRange(range) + ('-' + replacement);
};
var $jfmengels$elm_review$Review$Fix$toRecord = function (fix_) {
	switch (fix_.$) {
		case 1:
			var range = fix_.a;
			var replacement = fix_.b;
			return {cB: range, ey: replacement};
		case 0:
			var range = fix_.a;
			return {cB: range, ey: ''};
		default:
			var position = fix_.a;
			var replacement = fix_.b;
			return {
				cB: {a$: position, bg: position},
				ey: replacement
			};
	}
};
var $author$project$Elm$Review$Reporter$hashFixes = function (fixes) {
	return A2(
		$elm$core$String$join,
		'$$$$$$elm-review$$$$$$',
		A2(
			$elm$core$List$map,
			A2($elm$core$Basics$composeR, $jfmengels$elm_review$Review$Fix$toRecord, $author$project$Elm$Review$Reporter$hashFix),
			fixes));
};
var $jfmengels$elm_review$Review$Rule$errorDetails = function (_v0) {
	var err = _v0;
	return err.bG;
};
var $jfmengels$elm_review$Review$Rule$errorRange = function (_v0) {
	var err = _v0;
	return err.cB;
};
var $jfmengels$elm_review$Review$Rule$errorRuleName = function (_v0) {
	var err = _v0;
	return err.cE;
};
var $author$project$Elm$Review$RefusedErrorFixes$errorKey = function (error) {
	var range = $jfmengels$elm_review$Review$Rule$errorRange(error);
	return A2(
		$elm$core$String$join,
		'###',
		_List_fromArray(
			[
				$jfmengels$elm_review$Review$Rule$errorRuleName(error),
				$jfmengels$elm_review$Review$Rule$errorMessage(error),
				A2(
				$elm$core$String$join,
				'\n',
				$jfmengels$elm_review$Review$Rule$errorDetails(error)),
				A2(
				$elm$core$String$join,
				'-',
				A2(
					$elm$core$List$map,
					$elm$core$String$fromInt,
					_List_fromArray(
						[range.bg.aB, range.bg.an, range.a$.aB, range.a$.an])))
			]));
};
var $author$project$Elm$Review$RefusedErrorFixes$member = F2(
	function (error, _v0) {
		var refusedErrorFixes = _v0;
		return A2(
			$elm$core$Set$member,
			$author$project$Elm$Review$RefusedErrorFixes$errorKey(error),
			refusedErrorFixes);
	});
var $author$project$Elm$Review$Main$findFix = F4(
	function (failedFixesDict, refusedErrorFixes, files, errors) {
		findFix:
		while (true) {
			if (!errors.b) {
				return _Utils_Tuple2(failedFixesDict, $elm$core$Maybe$Nothing);
			} else {
				var error = errors.a;
				var restOfErrors = errors.b;
				if (A2($author$project$Elm$Review$RefusedErrorFixes$member, error, refusedErrorFixes)) {
					var $temp$failedFixesDict = failedFixesDict,
						$temp$refusedErrorFixes = refusedErrorFixes,
						$temp$files = files,
						$temp$errors = restOfErrors;
					failedFixesDict = $temp$failedFixesDict;
					refusedErrorFixes = $temp$refusedErrorFixes;
					files = $temp$files;
					errors = $temp$errors;
					continue findFix;
				} else {
					var _v1 = $jfmengels$elm_review$Review$Rule$errorFixes(error);
					if (!_v1.$) {
						var fixes = _v1.a;
						var _v2 = A2(
							$elm$core$Dict$get,
							$jfmengels$elm_review$Review$Rule$errorFilePath(error),
							files);
						if (_v2.$ === 1) {
							var $temp$failedFixesDict = failedFixesDict,
								$temp$refusedErrorFixes = refusedErrorFixes,
								$temp$files = files,
								$temp$errors = restOfErrors;
							failedFixesDict = $temp$failedFixesDict;
							refusedErrorFixes = $temp$refusedErrorFixes;
							files = $temp$files;
							errors = $temp$errors;
							continue findFix;
						} else {
							var file = _v2.a;
							var _v3 = A3(
								$jfmengels$elm_review$Review$Fix$fix,
								$jfmengels$elm_review$Review$Rule$errorTarget(error),
								fixes,
								file.eA);
							if (_v3.$ === 1) {
								var problem = _v3.a;
								var $temp$failedFixesDict = A3(
									$elm$core$Dict$insert,
									$author$project$Elm$Review$Reporter$hashFixes(fixes),
									problem,
									failedFixesDict),
									$temp$refusedErrorFixes = refusedErrorFixes,
									$temp$files = files,
									$temp$errors = restOfErrors;
								failedFixesDict = $temp$failedFixesDict;
								refusedErrorFixes = $temp$refusedErrorFixes;
								files = $temp$files;
								errors = $temp$errors;
								continue findFix;
							} else {
								var fixedSource = _v3.a;
								return _Utils_Tuple2(
									failedFixesDict,
									$elm$core$Maybe$Just(
										{
											ci: error,
											cm: {es: file.es, eA: file.eA},
											aw: fixedSource,
											$7: restOfErrors
										}));
							}
						}
					} else {
						var $temp$failedFixesDict = failedFixesDict,
							$temp$refusedErrorFixes = refusedErrorFixes,
							$temp$files = files,
							$temp$errors = restOfErrors;
						failedFixesDict = $temp$failedFixesDict;
						refusedErrorFixes = $temp$refusedErrorFixes;
						files = $temp$files;
						errors = $temp$errors;
						continue findFix;
					}
				}
			}
		}
	});
var $author$project$Elm$Review$Main$fixableFilesInProject = function (project) {
	var readme = A2(
		$elm$core$Maybe$withDefault,
		{es: '$$Not a valid module name$$', eA: ''},
		A2(
			$elm$core$Maybe$map,
			function (r) {
				return {es: r.es, eA: r.a_};
			},
			$jfmengels$elm_review$Review$Project$readme(project)));
	var moduleFiles = A2(
		$elm$core$List$map,
		function (module_) {
			return _Utils_Tuple2(
				module_.es,
				{es: module_.es, eA: module_.eA});
		},
		$jfmengels$elm_review$Review$Project$modules(project));
	var elmJson = A2(
		$elm$core$Maybe$withDefault,
		{es: '$$Not a valid module name$$', eA: ''},
		A2(
			$elm$core$Maybe$map,
			function (r) {
				return {es: r.es, eA: r.bb};
			},
			$jfmengels$elm_review$Review$Project$elmJson(project)));
	return $elm$core$Dict$fromList(
		A2(
			$elm$core$List$cons,
			_Utils_Tuple2(elmJson.es, elmJson),
			A2(
				$elm$core$List$cons,
				_Utils_Tuple2(readme.es, readme),
				moduleFiles)));
};
var $author$project$Elm$Review$Reporter$Fixing = 1;
var $author$project$Elm$Review$Vendor$Diff$Added = function (a) {
	return {$: 0, a: a};
};
var $author$project$Elm$Review$Vendor$Diff$NoChange = function (a) {
	return {$: 2, a: a};
};
var $author$project$Elm$Review$Vendor$Diff$Removed = function (a) {
	return {$: 1, a: a};
};
var $author$project$Elm$Review$Reporter$findIndexInternal = F3(
	function (predicate, index, list) {
		findIndexInternal:
		while (true) {
			if (!list.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var item = list.a;
				var rest = list.b;
				if (predicate(item)) {
					return $elm$core$Maybe$Just(index);
				} else {
					var $temp$predicate = predicate,
						$temp$index = index + 1,
						$temp$list = rest;
					predicate = $temp$predicate;
					index = $temp$index;
					list = $temp$list;
					continue findIndexInternal;
				}
			}
		}
	});
var $author$project$Elm$Review$Reporter$findIndex = F2(
	function (predicate, list) {
		return A3($author$project$Elm$Review$Reporter$findIndexInternal, predicate, 0, list);
	});
var $author$project$Elm$Review$Reporter$isNoChange = function (change) {
	switch (change.$) {
		case 2:
			return true;
		case 1:
			return false;
		default:
			return false;
	}
};
var $author$project$Elm$Review$Reporter$dropNonInterestingUnchangedLines = function (changes) {
	var _v0 = A2(
		$author$project$Elm$Review$Reporter$findIndex,
		A2($elm$core$Basics$composeL, $elm$core$Basics$not, $author$project$Elm$Review$Reporter$isNoChange),
		changes);
	if (_v0.$ === 1) {
		return changes;
	} else {
		var index = _v0.a;
		return A2($elm$core$List$drop, index - 1, changes);
	}
};
var $author$project$Elm$Review$Text$inGreen = function (_v0) {
	var text = _v0;
	return _Utils_update(
		text,
		{
			dU: $elm$core$Maybe$Just('#008000')
		});
};
var $author$project$Elm$Review$Reporter$removeUnchangedLines = F2(
	function (maxLineNumberLength, list) {
		return ($elm$core$List$length(list) >= 4) ? _Utils_ap(
			A2($elm$core$List$take, 1, list),
			A2(
				$elm$core$List$cons,
				$author$project$Elm$Review$Vendor$Diff$NoChange(
					$author$project$Elm$Review$Text$from(
						A2($elm$core$String$repeat, maxLineNumberLength + 1, '·'))),
				$elm$core$List$reverse(
					A2(
						$elm$core$List$take,
						1,
						$elm$core$List$reverse(list))))) : list;
	});
var $author$project$Elm$Review$Reporter$addLineNumbers = function (changes) {
	var maxLineNumberLength = $author$project$Elm$Review$Reporter$lengthOfLineNumber(
		A3(
			$elm$core$List$foldl,
			F2(
				function (change, lineNumber) {
					switch (change.$) {
						case 2:
							return lineNumber + 1;
						case 1:
							return lineNumber + 1;
						default:
							return lineNumber;
					}
				}),
			0,
			changes));
	var _v0 = A3(
		$elm$core$List$foldl,
		F2(
			function (change, _v1) {
				var lineNumber = _v1.a;
				var previousUnchangedLines = _v1.b;
				var accDiffLines = _v1.c;
				switch (change.$) {
					case 2:
						var str = change.a;
						return _Utils_Tuple3(
							lineNumber + 1,
							A2(
								$elm$core$List$cons,
								$author$project$Elm$Review$Vendor$Diff$NoChange(
									$author$project$Elm$Review$Text$from(
										_Utils_ap(
											A2($author$project$Elm$Review$Reporter$lineNumberPrefix, maxLineNumberLength, lineNumber),
											str))),
								previousUnchangedLines),
							accDiffLines);
					case 1:
						var str = change.a;
						var line = $author$project$Elm$Review$Text$inRed(
							$author$project$Elm$Review$Text$from(
								_Utils_ap(
									A2($author$project$Elm$Review$Reporter$lineNumberPrefix, maxLineNumberLength, lineNumber),
									str)));
						return _Utils_Tuple3(
							lineNumber + 1,
							_List_Nil,
							A2(
								$elm$core$List$cons,
								$author$project$Elm$Review$Vendor$Diff$Removed(line),
								_Utils_ap(
									A2($author$project$Elm$Review$Reporter$removeUnchangedLines, maxLineNumberLength, previousUnchangedLines),
									accDiffLines)));
					default:
						var str = change.a;
						var line = $author$project$Elm$Review$Text$inGreen(
							$author$project$Elm$Review$Text$from(
								_Utils_ap(
									A2($author$project$Elm$Review$Reporter$lineNumberPrefix, maxLineNumberLength, lineNumber),
									str)));
						return _Utils_Tuple3(
							lineNumber,
							_List_Nil,
							A2(
								$elm$core$List$cons,
								$author$project$Elm$Review$Vendor$Diff$Added(line),
								_Utils_ap(
									A2($author$project$Elm$Review$Reporter$removeUnchangedLines, maxLineNumberLength, previousUnchangedLines),
									accDiffLines)));
				}
			}),
		_Utils_Tuple3(0, _List_Nil, _List_Nil),
		changes);
	var unchangedLines = _v0.b;
	var diffLines = _v0.c;
	return $author$project$Elm$Review$Reporter$dropNonInterestingUnchangedLines(
		$elm$core$List$reverse(
			$author$project$Elm$Review$Reporter$dropNonInterestingUnchangedLines(
				_Utils_ap(unchangedLines, diffLines))));
};
var $author$project$Elm$Review$Vendor$Diff$CannotGetA = function (a) {
	return {$: 0, a: a};
};
var $author$project$Elm$Review$Vendor$Diff$CannotGetB = function (a) {
	return {$: 1, a: a};
};
var $author$project$Elm$Review$Vendor$Diff$UnexpectedPath = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $author$project$Elm$Review$Vendor$Diff$makeChangesHelp = F5(
	function (changes, getA, getB, _v0, path) {
		makeChangesHelp:
		while (true) {
			var x = _v0.a;
			var y = _v0.b;
			if (!path.b) {
				return $elm$core$Result$Ok(changes);
			} else {
				var _v2 = path.a;
				var prevX = _v2.a;
				var prevY = _v2.b;
				var tail = path.b;
				var change = function () {
					if (_Utils_eq(x - 1, prevX) && _Utils_eq(y - 1, prevY)) {
						var _v4 = getA(x);
						if (!_v4.$) {
							var a = _v4.a;
							return $elm$core$Result$Ok(
								$author$project$Elm$Review$Vendor$Diff$NoChange(a));
						} else {
							return $elm$core$Result$Err(
								$author$project$Elm$Review$Vendor$Diff$CannotGetA(x));
						}
					} else {
						if (_Utils_eq(x, prevX)) {
							var _v5 = getB(y);
							if (!_v5.$) {
								var b = _v5.a;
								return $elm$core$Result$Ok(
									$author$project$Elm$Review$Vendor$Diff$Added(b));
							} else {
								return $elm$core$Result$Err(
									$author$project$Elm$Review$Vendor$Diff$CannotGetB(y));
							}
						} else {
							if (_Utils_eq(y, prevY)) {
								var _v6 = getA(x);
								if (!_v6.$) {
									var a = _v6.a;
									return $elm$core$Result$Ok(
										$author$project$Elm$Review$Vendor$Diff$Removed(a));
								} else {
									return $elm$core$Result$Err(
										$author$project$Elm$Review$Vendor$Diff$CannotGetA(x));
								}
							} else {
								return $elm$core$Result$Err(
									A2(
										$author$project$Elm$Review$Vendor$Diff$UnexpectedPath,
										_Utils_Tuple2(x, y),
										path));
							}
						}
					}
				}();
				if (!change.$) {
					var c = change.a;
					var $temp$changes = A2($elm$core$List$cons, c, changes),
						$temp$getA = getA,
						$temp$getB = getB,
						$temp$_v0 = _Utils_Tuple2(prevX, prevY),
						$temp$path = tail;
					changes = $temp$changes;
					getA = $temp$getA;
					getB = $temp$getB;
					_v0 = $temp$_v0;
					path = $temp$path;
					continue makeChangesHelp;
				} else {
					var e = change.a;
					return $elm$core$Result$Err(e);
				}
			}
		}
	});
var $author$project$Elm$Review$Vendor$Diff$makeChanges = F3(
	function (getA, getB, path) {
		if (!path.b) {
			return $elm$core$Result$Ok(_List_Nil);
		} else {
			var latest = path.a;
			var tail = path.b;
			return A5($author$project$Elm$Review$Vendor$Diff$makeChangesHelp, _List_Nil, getA, getB, latest, tail);
		}
	});
var $author$project$Elm$Review$Vendor$Diff$Continue = function (a) {
	return {$: 0, a: a};
};
var $author$project$Elm$Review$Vendor$Diff$Found = function (a) {
	return {$: 1, a: a};
};
var $author$project$Elm$Review$Vendor$Diff$step = F4(
	function (snake_, offset, k, v) {
		var fromTop = A2(
			$elm$core$Maybe$withDefault,
			_List_Nil,
			A2($elm$core$Array$get, (k + 1) + offset, v));
		var fromLeft = A2(
			$elm$core$Maybe$withDefault,
			_List_Nil,
			A2($elm$core$Array$get, (k - 1) + offset, v));
		var _v0 = function () {
			var _v2 = _Utils_Tuple2(fromLeft, fromTop);
			if (!_v2.a.b) {
				if (!_v2.b.b) {
					return _Utils_Tuple2(
						_List_Nil,
						_Utils_Tuple2(0, 0));
				} else {
					var _v3 = _v2.b;
					var _v4 = _v3.a;
					var topX = _v4.a;
					var topY = _v4.b;
					return _Utils_Tuple2(
						fromTop,
						_Utils_Tuple2(topX + 1, topY));
				}
			} else {
				if (!_v2.b.b) {
					var _v5 = _v2.a;
					var _v6 = _v5.a;
					var leftX = _v6.a;
					var leftY = _v6.b;
					return _Utils_Tuple2(
						fromLeft,
						_Utils_Tuple2(leftX, leftY + 1));
				} else {
					var _v7 = _v2.a;
					var _v8 = _v7.a;
					var leftX = _v8.a;
					var leftY = _v8.b;
					var _v9 = _v2.b;
					var _v10 = _v9.a;
					var topX = _v10.a;
					var topY = _v10.b;
					return (_Utils_cmp(leftY + 1, topY) > -1) ? _Utils_Tuple2(
						fromLeft,
						_Utils_Tuple2(leftX, leftY + 1)) : _Utils_Tuple2(
						fromTop,
						_Utils_Tuple2(topX + 1, topY));
				}
			}
		}();
		var path = _v0.a;
		var _v1 = _v0.b;
		var x = _v1.a;
		var y = _v1.b;
		var _v11 = A3(
			snake_,
			x + 1,
			y + 1,
			A2(
				$elm$core$List$cons,
				_Utils_Tuple2(x, y),
				path));
		var newPath = _v11.a;
		var goal = _v11.b;
		return goal ? $author$project$Elm$Review$Vendor$Diff$Found(newPath) : $author$project$Elm$Review$Vendor$Diff$Continue(
			A3($elm$core$Array$set, k + offset, newPath, v));
	});
var $author$project$Elm$Review$Vendor$Diff$onpLoopK = F4(
	function (snake_, offset, ks, v) {
		onpLoopK:
		while (true) {
			if (!ks.b) {
				return $author$project$Elm$Review$Vendor$Diff$Continue(v);
			} else {
				var k = ks.a;
				var ks_ = ks.b;
				var _v1 = A4($author$project$Elm$Review$Vendor$Diff$step, snake_, offset, k, v);
				if (_v1.$ === 1) {
					var path = _v1.a;
					return $author$project$Elm$Review$Vendor$Diff$Found(path);
				} else {
					var v_ = _v1.a;
					var $temp$snake_ = snake_,
						$temp$offset = offset,
						$temp$ks = ks_,
						$temp$v = v_;
					snake_ = $temp$snake_;
					offset = $temp$offset;
					ks = $temp$ks;
					v = $temp$v;
					continue onpLoopK;
				}
			}
		}
	});
var $author$project$Elm$Review$Vendor$Diff$onpLoopP = F5(
	function (snake_, delta, offset, p, v) {
		onpLoopP:
		while (true) {
			var ks = (delta > 0) ? _Utils_ap(
				$elm$core$List$reverse(
					A2($elm$core$List$range, delta + 1, delta + p)),
				A2($elm$core$List$range, -p, delta)) : _Utils_ap(
				$elm$core$List$reverse(
					A2($elm$core$List$range, delta + 1, p)),
				A2($elm$core$List$range, (-p) + delta, delta));
			var _v0 = A4($author$project$Elm$Review$Vendor$Diff$onpLoopK, snake_, offset, ks, v);
			if (_v0.$ === 1) {
				var path = _v0.a;
				return path;
			} else {
				var v_ = _v0.a;
				var $temp$snake_ = snake_,
					$temp$delta = delta,
					$temp$offset = offset,
					$temp$p = p + 1,
					$temp$v = v_;
				snake_ = $temp$snake_;
				delta = $temp$delta;
				offset = $temp$offset;
				p = $temp$p;
				v = $temp$v;
				continue onpLoopP;
			}
		}
	});
var $author$project$Elm$Review$Vendor$Diff$snake = F5(
	function (getA, getB, nextX, nextY, path) {
		snake:
		while (true) {
			var _v0 = _Utils_Tuple2(
				getA(nextX),
				getB(nextY));
			_v0$2:
			while (true) {
				if (!_v0.a.$) {
					if (!_v0.b.$) {
						var a = _v0.a.a;
						var b = _v0.b.a;
						if (_Utils_eq(a, b)) {
							var $temp$getA = getA,
								$temp$getB = getB,
								$temp$nextX = nextX + 1,
								$temp$nextY = nextY + 1,
								$temp$path = A2(
								$elm$core$List$cons,
								_Utils_Tuple2(nextX, nextY),
								path);
							getA = $temp$getA;
							getB = $temp$getB;
							nextX = $temp$nextX;
							nextY = $temp$nextY;
							path = $temp$path;
							continue snake;
						} else {
							return _Utils_Tuple2(path, false);
						}
					} else {
						break _v0$2;
					}
				} else {
					if (_v0.b.$ === 1) {
						var _v1 = _v0.a;
						var _v2 = _v0.b;
						return _Utils_Tuple2(path, true);
					} else {
						break _v0$2;
					}
				}
			}
			return _Utils_Tuple2(path, false);
		}
	});
var $author$project$Elm$Review$Vendor$Diff$onp = F4(
	function (getA, getB, m, n) {
		var v = A2(
			$elm$core$Array$initialize,
			(m + n) + 1,
			$elm$core$Basics$always(_List_Nil));
		var delta = n - m;
		return A5(
			$author$project$Elm$Review$Vendor$Diff$onpLoopP,
			A2($author$project$Elm$Review$Vendor$Diff$snake, getA, getB),
			delta,
			m,
			0,
			v);
	});
var $author$project$Elm$Review$Vendor$Diff$testDiff = F2(
	function (a, b) {
		var arrB = $elm$core$Array$fromList(b);
		var getB = function (y) {
			return A2($elm$core$Array$get, y - 1, arrB);
		};
		var n = $elm$core$Array$length(arrB);
		var arrA = $elm$core$Array$fromList(a);
		var getA = function (x) {
			return A2($elm$core$Array$get, x - 1, arrA);
		};
		var m = $elm$core$Array$length(arrA);
		var path = A4($author$project$Elm$Review$Vendor$Diff$onp, getA, getB, m, n);
		return A3($author$project$Elm$Review$Vendor$Diff$makeChanges, getA, getB, path);
	});
var $author$project$Elm$Review$Vendor$Diff$diff = F2(
	function (a, b) {
		var _v0 = A2($author$project$Elm$Review$Vendor$Diff$testDiff, a, b);
		if (!_v0.$) {
			var changes = _v0.a;
			return changes;
		} else {
			return _List_Nil;
		}
	});
var $author$project$Elm$Review$Vendor$Diff$diffLines = F2(
	function (a, b) {
		return A2(
			$author$project$Elm$Review$Vendor$Diff$diff,
			$elm$core$String$lines(a),
			$elm$core$String$lines(b));
	});
var $author$project$Elm$Review$Reporter$extractValueFromChange = function (change) {
	switch (change.$) {
		case 2:
			var value = change.a;
			return value;
		case 1:
			var value = change.a;
			return value;
		default:
			var value = change.a;
			return value;
	}
};
var $author$project$Elm$Review$Reporter$diff = F2(
	function (_v0, _v1) {
		var before = _v0;
		var after = _v1;
		return A2(
			$elm$core$List$intersperse,
			$author$project$Elm$Review$Text$from('\n'),
			A2(
				$elm$core$List$map,
				$author$project$Elm$Review$Reporter$extractValueFromChange,
				$author$project$Elm$Review$Reporter$addLineNumbers(
					A2($author$project$Elm$Review$Vendor$Diff$diffLines, before, after))));
	});
var $author$project$Elm$Review$Reporter$formatFixProposal = F5(
	function (fixProblemDict, detailsMode, file, error, fixedSource) {
		return A2(
			$elm$core$List$map,
			$author$project$Elm$Review$Text$toRecord,
			$elm$core$List$concat(
				_List_fromArray(
					[
						A2(
						$author$project$Elm$Review$Text$join,
						'\n\n',
						_List_fromArray(
							[
								A4(
								$author$project$Elm$Review$Reporter$formatReportForFileWithExtract,
								fixProblemDict,
								detailsMode,
								1,
								{
									at: _List_fromArray(
										[error]),
									es: file.es,
									eA: file.eA
								}),
								_List_fromArray(
								[
									$author$project$Elm$Review$Text$inBlue(
									$author$project$Elm$Review$Text$from('I think I can fix this. Here is my proposal:'))
								]),
								A2($author$project$Elm$Review$Reporter$diff, file.eA, fixedSource)
							])),
						_List_fromArray(
						[
							$author$project$Elm$Review$Text$from('\n')
						])
					])));
	});
var $author$project$Elm$Review$Main$linkToRule = F2(
	function (links, error) {
		return A2(
			$elm$core$Dict$get,
			$jfmengels$elm_review$Review$Rule$errorRuleName(error),
			links);
	});
var $author$project$Elm$Review$Main$fromReviewError = F2(
	function (links, error) {
		return {
			bG: $jfmengels$elm_review$Review$Rule$errorDetails(error),
			c3: A2(
				$elm$core$Maybe$map,
				$author$project$Elm$Review$Reporter$hashFixes,
				$jfmengels$elm_review$Review$Rule$errorFixes(error)),
			al: $jfmengels$elm_review$Review$Rule$errorMessage(error),
			cB: $jfmengels$elm_review$Review$Rule$errorRange(error),
			dq: A2($author$project$Elm$Review$Main$linkToRule, links, error),
			cE: $jfmengels$elm_review$Review$Rule$errorRuleName(error)
		};
	});
var $author$project$Elm$Review$Main$encodeFix = function (_v0) {
	var range = _v0.cB;
	var replacement = _v0.ey;
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'range',
				$author$project$Elm$Review$Main$encodeRange(range)),
				_Utils_Tuple2(
				'string',
				$elm$json$Json$Encode$string(replacement))
			]));
};
var $author$project$Elm$Review$Main$encodeFixes = function (fixes) {
	return A2(
		$elm$json$Json$Encode$list,
		A2($elm$core$Basics$composeR, $jfmengels$elm_review$Review$Fix$toRecord, $author$project$Elm$Review$Main$encodeFix),
		fixes);
};
var $author$project$Elm$Review$Main$encodeError = F4(
	function (links, detailsMode, source, error) {
		return $elm$json$Json$Encode$object(
			A2(
				$elm$core$List$filterMap,
				$elm$core$Basics$identity,
				_List_fromArray(
					[
						$elm$core$Maybe$Just(
						_Utils_Tuple2(
							'rule',
							$elm$json$Json$Encode$string(
								$jfmengels$elm_review$Review$Rule$errorRuleName(error)))),
						$elm$core$Maybe$Just(
						_Utils_Tuple2(
							'message',
							$elm$json$Json$Encode$string(
								$jfmengels$elm_review$Review$Rule$errorMessage(error)))),
						A2(
						$elm$core$Maybe$map,
						A2(
							$elm$core$Basics$composeR,
							$elm$json$Json$Encode$string,
							$elm$core$Tuple$pair('ruleLink')),
						A2($author$project$Elm$Review$Main$linkToRule, links, error)),
						$elm$core$Maybe$Just(
						_Utils_Tuple2(
							'details',
							A2(
								$elm$json$Json$Encode$list,
								$elm$json$Json$Encode$string,
								$jfmengels$elm_review$Review$Rule$errorDetails(error)))),
						$elm$core$Maybe$Just(
						_Utils_Tuple2(
							'region',
							$author$project$Elm$Review$Main$encodeRange(
								$jfmengels$elm_review$Review$Rule$errorRange(error)))),
						A2(
						$elm$core$Maybe$map,
						A2(
							$elm$core$Basics$composeR,
							$author$project$Elm$Review$Main$encodeFixes,
							$elm$core$Tuple$pair('fix')),
						$jfmengels$elm_review$Review$Rule$errorFixes(error)),
						$elm$core$Maybe$Just(
						_Utils_Tuple2(
							'formatted',
							$author$project$Elm$Review$Main$encodeReport(
								A4(
									$author$project$Elm$Review$Reporter$formatIndividualError,
									$elm$core$Dict$empty,
									detailsMode,
									source,
									A2($author$project$Elm$Review$Main$fromReviewError, links, error)))))
					])));
	});
var $author$project$Elm$Review$Main$encodeErrorByFile = F3(
	function (links, detailsMode, file) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'path',
					$author$project$Elm$Review$Main$encodeFilePath(file.es)),
					_Utils_Tuple2(
					'errors',
					A2(
						$elm$json$Json$Encode$list,
						A3($author$project$Elm$Review$Main$encodeError, links, detailsMode, file.eA),
						file.at))
				]));
	});
var $author$project$Elm$Review$Reporter$Global = {$: 1};
var $jfmengels$elm_review$Review$Project$modulesThatFailedToParse = function (_v0) {
	var project = _v0;
	return project.a9;
};
var $author$project$Elm$Review$Main$groupErrorsByFile = F2(
	function (project, errors) {
		var files = $elm$core$List$concat(
			_List_fromArray(
				[
					A2(
					$elm$core$List$map,
					function (file) {
						return {es: file.es, eA: file.eA};
					},
					$jfmengels$elm_review$Review$Project$modules(project)),
					_List_fromArray(
					[
						{es: 'GLOBAL ERROR', eA: ''},
						{es: 'CONFIGURATION ERROR', eA: ''}
					]),
					function () {
					var _v0 = $jfmengels$elm_review$Review$Project$elmJson(project);
					if (!_v0.$) {
						var path = _v0.a.es;
						var raw = _v0.a.bb;
						return _List_fromArray(
							[
								{es: path, eA: raw}
							]);
					} else {
						return _List_Nil;
					}
				}(),
					function () {
					var _v1 = $jfmengels$elm_review$Review$Project$readme(project);
					if (!_v1.$) {
						var path = _v1.a.es;
						var content = _v1.a.a_;
						return _List_fromArray(
							[
								{es: path, eA: content}
							]);
					} else {
						return _List_Nil;
					}
				}(),
					$jfmengels$elm_review$Review$Project$modulesThatFailedToParse(project)
				]));
		return A2(
			$elm$core$List$filter,
			function (file) {
				return !$elm$core$List$isEmpty(file.at);
			},
			A2(
				$elm$core$List$map,
				function (file) {
					return {
						at: A2(
							$elm$core$List$filter,
							function (error) {
								return _Utils_eq(
									file.es,
									$jfmengels$elm_review$Review$Rule$errorFilePath(error));
							},
							errors),
						es: (file.es === 'GLOBAL ERROR') ? $author$project$Elm$Review$Reporter$Global : ((file.es === 'CONFIGURATION ERROR') ? $author$project$Elm$Review$Reporter$ConfigurationError : $author$project$Elm$Review$Reporter$FilePath(file.es)),
						eA: file.eA
					};
				},
				files));
	});
var $author$project$Elm$Review$Main$reviewReport = _Platform_outgoingPort('reviewReport', $elm$core$Basics$identity);
var $author$project$Elm$Review$Main$makeReport = F2(
	function (failedFixesDict, model) {
		var errorsByFile = A2($author$project$Elm$Review$Main$groupErrorsByFile, model.c, model.be);
		return _Utils_Tuple2(
			model,
			$author$project$Elm$Review$Main$reviewReport(
				$elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'success',
							$elm$json$Json$Encode$bool(
								$elm$core$List$isEmpty(errorsByFile))),
							_Utils_Tuple2(
							'errors',
							function () {
								var _v0 = model.bd;
								if (!_v0) {
									return $author$project$Elm$Review$Main$encodeReport(
										A4(
											$author$project$Elm$Review$Reporter$formatReport,
											failedFixesDict,
											model.aq,
											model.bJ,
											A2(
												$elm$core$List$map,
												function (file) {
													return {
														at: A2(
															$elm$core$List$map,
															$author$project$Elm$Review$Main$fromReviewError(model.aT),
															file.at),
														es: file.es,
														eA: file.eA
													};
												},
												errorsByFile)));
								} else {
									return A2(
										$elm$json$Json$Encode$list,
										A2($author$project$Elm$Review$Main$encodeErrorByFile, model.aT, model.aq),
										errorsByFile);
								}
							}())
						]))));
	});
var $author$project$Elm$Review$Main$fixOneByOne = function (model) {
	var _v0 = A4(
		$author$project$Elm$Review$Main$findFix,
		$elm$core$Dict$empty,
		model.bc,
		$author$project$Elm$Review$Main$fixableFilesInProject(model.c),
		model.be).b;
	if (!_v0.$) {
		var file = _v0.a.cm;
		var error = _v0.a.ci;
		var fixedSource = _v0.a.aw;
		return _Utils_Tuple2(
			_Utils_update(
				model,
				{
					as: $author$project$Elm$Review$Main$AwaitingError(error)
				}),
			$author$project$Elm$Review$Main$askConfirmationToFix(
				$elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'confirmationMessage',
							$author$project$Elm$Review$Main$encodeReport(
								A5(
									$author$project$Elm$Review$Reporter$formatFixProposal,
									$elm$core$Dict$empty,
									model.aq,
									{
										es: $author$project$Elm$Review$Reporter$FilePath(file.es),
										eA: file.eA
									},
									A2($author$project$Elm$Review$Main$fromReviewError, model.aT, error),
									fixedSource))),
							_Utils_Tuple2(
							'changedFiles',
							A2(
								$elm$json$Json$Encode$list,
								$author$project$Elm$Review$Main$encodeChangedFile,
								_List_fromArray(
									[
										{
										es: $author$project$Elm$Review$Reporter$FilePath(file.es),
										eA: fixedSource
									}
									]))),
							_Utils_Tuple2(
							'error',
							$elm$json$Json$Encode$string(
								$jfmengels$elm_review$Review$Rule$errorMessage(error)))
						]))));
	} else {
		return A2($author$project$Elm$Review$Main$makeReport, $elm$core$Dict$empty, model);
	}
};
var $author$project$Elm$Review$RefusedErrorFixes$insert = F2(
	function (error, _v0) {
		var refusedErrorFixes = _v0;
		return A2(
			$elm$core$Set$insert,
			$author$project$Elm$Review$RefusedErrorFixes$errorKey(error),
			refusedErrorFixes);
	});
var $author$project$Elm$Review$Main$refuseError = F2(
	function (error, model) {
		return _Utils_update(
			model,
			{
				bc: A2($author$project$Elm$Review$RefusedErrorFixes$insert, error, model.bc)
			});
	});
var $jfmengels$elm_review$Review$Project$removeDependencies = function (_v0) {
	var project = _v0;
	return _Utils_update(
		project,
		{aG: $elm$core$Dict$empty});
};
var $jfmengels$elm_review$Review$Project$removeModule = F2(
	function (path, project) {
		return $jfmengels$elm_review$Review$Project$recomputeModuleGraphIfNeeded(
			A2($jfmengels$elm_review$Review$Project$removeFileFromProject, path, project));
	});
var $author$project$Elm$Review$Main$AwaitingFixAll = {$: 2};
var $author$project$Elm$Review$Progress$fixWasApplied = F2(
	function (remainingErrors, _v0) {
		var previousCount = _v0.a;
		var console = _v0.b;
		var remainingFixableErrors = $elm$core$String$fromInt(
			$elm$core$List$length(
				A2($elm$core$List$filterMap, $jfmengels$elm_review$Review$Rule$errorFixes, remainingErrors)));
		var count = previousCount + 1;
		return (count >= 3) ? A2(
			$elm$core$Basics$always,
			A2($author$project$Elm$Review$Progress$Console, count, console),
			A2(
				$elm$json$Json$Decode$decodeValue,
				A2(
					$elm$json$Json$Decode$field,
					'log::' + ($elm$core$String$fromInt(count) + ('::' + remainingFixableErrors)),
					$elm$json$Json$Decode$null(0)),
				console)) : A2($author$project$Elm$Review$Progress$Console, count, console);
	});
var $author$project$Elm$Review$Main$addFixedErrorForFile = F4(
	function (path, error, remainingErrors, model) {
		var errorsForFile = A2(
			$elm$core$List$cons,
			A2($author$project$Elm$Review$Main$fromReviewError, model.aT, error),
			A2(
				$elm$core$Maybe$withDefault,
				_List_Nil,
				A2($elm$core$Dict$get, path, model.av)));
		return _Utils_update(
			model,
			{
				av: A3($elm$core$Dict$insert, path, errorsForFile, model.av),
				ak: A2($author$project$Elm$Review$Progress$fixWasApplied, remainingErrors, model.ak)
			});
	});
var $author$project$Elm$Review$Main$DependenciesChanged = 1;
var $author$project$Elm$Review$Main$SourceDirectoriesChanged = 0;
var $author$project$Elm$Review$Main$normalizeApplicationDeps = function (application) {
	return _List_fromArray(
		[
			$elm$core$Dict$fromList(
			A2(
				$elm$core$List$map,
				function (_v0) {
					var name = _v0.a;
					var version = _v0.b;
					return _Utils_Tuple2(
						$elm$project_metadata_utils$Elm$Package$toString(name),
						version);
				},
				application.cZ)),
			$elm$core$Dict$fromList(
			A2(
				$elm$core$List$map,
				function (_v1) {
					var name = _v1.a;
					var version = _v1.b;
					return _Utils_Tuple2(
						$elm$project_metadata_utils$Elm$Package$toString(name),
						version);
				},
				application.c_)),
			$elm$core$Dict$fromList(
			A2(
				$elm$core$List$map,
				function (_v2) {
					var name = _v2.a;
					var version = _v2.b;
					return _Utils_Tuple2(
						$elm$project_metadata_utils$Elm$Package$toString(name),
						version);
				},
				application.dD)),
			$elm$core$Dict$fromList(
			A2(
				$elm$core$List$map,
				function (_v3) {
					var name = _v3.a;
					var version = _v3.b;
					return _Utils_Tuple2(
						$elm$project_metadata_utils$Elm$Package$toString(name),
						version);
				},
				application.dE))
		]);
};
var $author$project$Elm$Review$Main$normalizePackageDeps = function (application) {
	return _List_fromArray(
		[
			$elm$core$Dict$fromList(
			A2(
				$elm$core$List$map,
				function (_v0) {
					var name = _v0.a;
					var constraint = _v0.b;
					return _Utils_Tuple2(
						$elm$project_metadata_utils$Elm$Package$toString(name),
						constraint);
				},
				application.cY)),
			$elm$core$Dict$fromList(
			A2(
				$elm$core$List$map,
				function (_v1) {
					var name = _v1.a;
					var constraint = _v1.b;
					return _Utils_Tuple2(
						$elm$project_metadata_utils$Elm$Package$toString(name),
						constraint);
				},
				application.dC))
		]);
};
var $author$project$Elm$Review$Main$changesToElm = F2(
	function (oldProject, newProject) {
		var _v0 = A3(
			$elm$core$Maybe$map2,
			$elm$core$Tuple$pair,
			$jfmengels$elm_review$Review$Project$elmJson(oldProject),
			$jfmengels$elm_review$Review$Project$elmJson(newProject));
		if (!_v0.$) {
			var _v1 = _v0.a;
			var oldElmJson = _v1.a;
			var newElmJson = _v1.b;
			if (_Utils_eq(oldElmJson, newElmJson)) {
				return _List_Nil;
			} else {
				var _v2 = _Utils_Tuple2(oldElmJson.c, newElmJson.c);
				_v2$2:
				while (true) {
					if (!_v2.a.$) {
						if (!_v2.b.$) {
							var oldApp = _v2.a.a;
							var newApp = _v2.b.a;
							return A2(
								$elm$core$List$filterMap,
								$elm$core$Basics$identity,
								_List_fromArray(
									[
										_Utils_eq(
										$elm$core$Set$fromList(oldApp.c$),
										$elm$core$Set$fromList(newApp.c$)) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(0),
										_Utils_eq(
										$author$project$Elm$Review$Main$normalizeApplicationDeps(oldApp),
										$author$project$Elm$Review$Main$normalizeApplicationDeps(newApp)) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(1)
									]));
						} else {
							break _v2$2;
						}
					} else {
						if (_v2.b.$ === 1) {
							var oldPackage = _v2.a.a;
							var newPackage = _v2.b.a;
							return A2(
								$elm$core$List$filterMap,
								$elm$core$Basics$identity,
								_List_fromArray(
									[
										_Utils_eq(
										$author$project$Elm$Review$Main$normalizePackageDeps(oldPackage),
										$author$project$Elm$Review$Main$normalizePackageDeps(newPackage)) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(1)
									]));
						} else {
							break _v2$2;
						}
					}
				}
				return _List_fromArray(
					[0, 1]);
			}
		} else {
			return _List_Nil;
		}
	});
var $elm$core$Result$andThen = F2(
	function (callback, result) {
		if (!result.$) {
			var value = result.a;
			return callback(value);
		} else {
			var msg = result.a;
			return $elm$core$Result$Err(msg);
		}
	});
var $jfmengels$elm_review$Review$Error$Global = 3;
var $jfmengels$elm_review$Review$Error$ReviewError = $elm$core$Basics$identity;
var $jfmengels$elm_review$Review$Rule$errorToReviewError = function (error_) {
	return $jfmengels$elm_review$Review$Rule$accessInternalError(error_);
};
var $jfmengels$elm_review$Review$Rule$checkForConfigurationErrors = function (rules) {
	var errors = A2(
		$elm$core$List$filterMap,
		function (rule) {
			return A2(
				$elm$core$Maybe$map,
				function (_v0) {
					var message = _v0.al;
					var details = _v0.bG;
					return $jfmengels$elm_review$Review$Rule$errorToReviewError(
						$jfmengels$elm_review$Review$Rule$SpecifiedError(
							{
								bG: details,
								cn: 'CONFIGURATION ERROR',
								cp: $elm$core$Maybe$Nothing,
								al: message,
								cB: $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
								cE: $jfmengels$elm_review$Review$Rule$ruleName(rule),
								dB: 3
							}));
				},
				$jfmengels$elm_review$Review$Rule$getConfigurationError(rule));
		},
		rules);
	return $elm$core$List$isEmpty(errors) ? $elm$core$Result$Ok(0) : $elm$core$Result$Err(errors);
};
var $jfmengels$elm_review$Review$Rule$duplicateModuleNames = F2(
	function (visitedModules, projectModules) {
		duplicateModuleNames:
		while (true) {
			if (!projectModules.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var projectModule = projectModules.a;
				var restOfModules = projectModules.b;
				var moduleName = $jfmengels$elm_review$Review$Rule$getModuleName(projectModule);
				var _v1 = A2($elm$core$Dict$get, moduleName, visitedModules);
				if (_v1.$ === 1) {
					var $temp$visitedModules = A3($elm$core$Dict$insert, moduleName, projectModule.es, visitedModules),
						$temp$projectModules = restOfModules;
					visitedModules = $temp$visitedModules;
					projectModules = $temp$projectModules;
					continue duplicateModuleNames;
				} else {
					var path = _v1.a;
					return $elm$core$Maybe$Just(
						{
							b_: moduleName,
							dl: A2(
								$elm$core$List$cons,
								path,
								A2(
									$elm$core$List$cons,
									projectModule.es,
									A2(
										$elm$core$List$map,
										function ($) {
											return $.es;
										},
										A2(
											$elm$core$List$filter,
											function (p) {
												return _Utils_eq(
													$jfmengels$elm_review$Review$Rule$getModuleName(p),
													moduleName);
											},
											restOfModules))))
						});
				}
			}
		}
	});
var $jfmengels$elm_review$Review$Rule$elmReviewGlobalError = function (_v0) {
	var message = _v0.al;
	var details = _v0.bG;
	return $jfmengels$elm_review$Review$Rule$SpecifiedError(
		{bG: details, cn: 'GLOBAL ERROR', cp: $elm$core$Maybe$Nothing, al: message, cB: $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, cE: '', dB: 3});
};
var $elm$core$List$sort = function (xs) {
	return A2($elm$core$List$sortBy, $elm$core$Basics$identity, xs);
};
var $jfmengels$elm_review$Review$Rule$duplicateModulesGlobalError = function (duplicate) {
	var paths = $elm$core$String$concat(
		A2(
			$elm$core$List$map,
			function (s) {
				return '\n  - ' + s;
			},
			$elm$core$List$sort(duplicate.dl)));
	return $jfmengels$elm_review$Review$Rule$errorToReviewError(
		$jfmengels$elm_review$Review$Rule$elmReviewGlobalError(
			{
				bG: _List_fromArray(
					[
						'I found several modules with the name `' + (A2($elm$core$String$join, '.', duplicate.b_) + '`. Depending on how I choose to resolve this, I might give you different reports. Since this is a compiler error anyway, I require this problem to be solved. Please fix this then try running `elm-review` again.'),
						'Here are the paths to some of the files that share a module name:' + paths,
						'It is possible that you requested me to look at several projects, and that modules from each project share the same name. I don\'t recommend reviewing several projects at the same time, as I can only handle one `elm.json`. I instead suggest running `elm-review` twice, once for each project.'
					]),
				al: 'Found several modules named `' + (A2($elm$core$String$join, '.', duplicate.b_) + '`')
			}));
};
var $jfmengels$elm_review$Review$Rule$checkForDuplicateModules = function (project) {
	var _v0 = A2(
		$jfmengels$elm_review$Review$Rule$duplicateModuleNames,
		$elm$core$Dict$empty,
		$jfmengels$elm_review$Review$Project$modules(project));
	if (!_v0.$) {
		var duplicate = _v0.a;
		return $elm$core$Result$Err(
			_List_fromArray(
				[
					$jfmengels$elm_review$Review$Rule$duplicateModulesGlobalError(duplicate)
				]));
	} else {
		return $elm$core$Result$Ok(0);
	}
};
var $jfmengels$elm_review$Review$Rule$parsingError = function (rawFile) {
	return {
		bG: _List_fromArray(
			['I could not understand the content of this file, and this prevents me from analyzing it. It is highly likely that the contents of the file is not correct Elm code.', 'I need this file to be fixed before analyzing the rest of the project. If I didn\'t, I would potentially report incorrect things.', 'Hint: Try running `elm make`. The compiler should give you better hints on how to resolve the problem.']),
		cn: rawFile.es,
		cp: $elm$core$Maybe$Nothing,
		al: rawFile.es + ' is not a correct Elm module',
		cB: $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
		cE: 'ParsingError',
		dB: 0
	};
};
var $jfmengels$elm_review$Review$Rule$checkForModulesThatFailedToParse = function (project) {
	var _v0 = $jfmengels$elm_review$Review$Project$modulesThatFailedToParse(project);
	if (!_v0.b) {
		return $elm$core$Result$Ok(0);
	} else {
		var modulesThatFailedToParse = _v0;
		return $elm$core$Result$Err(
			A2($elm$core$List$map, $jfmengels$elm_review$Review$Rule$parsingError, modulesThatFailedToParse));
	}
};
var $jfmengels$elm_review$Vendor$Graph$AcyclicGraph = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $jfmengels$elm_review$Vendor$IntDict$findMin = function (dict) {
	findMin:
	while (true) {
		switch (dict.$) {
			case 0:
				return $elm$core$Maybe$Nothing;
			case 1:
				var l = dict.a;
				return $elm$core$Maybe$Just(
					_Utils_Tuple2(l.bv, l.b9));
			default:
				var i = dict.a;
				var $temp$dict = i.d;
				dict = $temp$dict;
				continue findMin;
		}
	}
};
var $jfmengels$elm_review$Vendor$IntDict$Disjunct = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $jfmengels$elm_review$Vendor$IntDict$Left = 0;
var $jfmengels$elm_review$Vendor$IntDict$Parent = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $jfmengels$elm_review$Vendor$IntDict$Right = 1;
var $jfmengels$elm_review$Vendor$IntDict$SamePrefix = {$: 0};
var $jfmengels$elm_review$Vendor$IntDict$combineBits = F3(
	function (a, b, mask) {
		return (a & (~mask)) | (b & mask);
	});
var $jfmengels$elm_review$Vendor$IntDict$mostSignificantBranchingBit = F2(
	function (a, b) {
		return (_Utils_eq(a, $jfmengels$elm_review$Vendor$IntDict$signBit) || _Utils_eq(b, $jfmengels$elm_review$Vendor$IntDict$signBit)) ? $jfmengels$elm_review$Vendor$IntDict$signBit : A2($elm$core$Basics$max, a, b);
	});
var $jfmengels$elm_review$Vendor$IntDict$determineBranchRelation = F2(
	function (l, r) {
		var rp = r.g;
		var lp = l.g;
		var mask = $jfmengels$elm_review$Vendor$IntDict$highestBitSet(
			A2($jfmengels$elm_review$Vendor$IntDict$mostSignificantBranchingBit, lp.aY, rp.aY));
		var modifiedRightPrefix = A3($jfmengels$elm_review$Vendor$IntDict$combineBits, rp.ae, ~lp.ae, mask);
		var prefix = A2($jfmengels$elm_review$Vendor$IntDict$lcp, lp.ae, modifiedRightPrefix);
		var childEdge = F2(
			function (branchPrefix, c) {
				return A2($jfmengels$elm_review$Vendor$IntDict$isBranchingBitSet, branchPrefix, c.g.ae) ? 1 : 0;
			});
		return _Utils_eq(lp, rp) ? $jfmengels$elm_review$Vendor$IntDict$SamePrefix : (_Utils_eq(prefix, lp) ? A2(
			$jfmengels$elm_review$Vendor$IntDict$Parent,
			0,
			A2(childEdge, l.g, r)) : (_Utils_eq(prefix, rp) ? A2(
			$jfmengels$elm_review$Vendor$IntDict$Parent,
			1,
			A2(childEdge, r.g, l)) : A2(
			$jfmengels$elm_review$Vendor$IntDict$Disjunct,
			prefix,
			A2(childEdge, prefix, l))));
	});
var $jfmengels$elm_review$Vendor$IntDict$intersect = F2(
	function (l, r) {
		intersect:
		while (true) {
			var _v0 = _Utils_Tuple2(l, r);
			_v0$1:
			while (true) {
				_v0$2:
				while (true) {
					switch (_v0.a.$) {
						case 0:
							var _v1 = _v0.a;
							return $jfmengels$elm_review$Vendor$IntDict$Empty;
						case 1:
							switch (_v0.b.$) {
								case 0:
									break _v0$1;
								case 1:
									break _v0$2;
								default:
									break _v0$2;
							}
						default:
							switch (_v0.b.$) {
								case 0:
									break _v0$1;
								case 1:
									var lr = _v0.b.a;
									var _v3 = A2($jfmengels$elm_review$Vendor$IntDict$get, lr.bv, l);
									if (!_v3.$) {
										var v = _v3.a;
										return A2($jfmengels$elm_review$Vendor$IntDict$leaf, lr.bv, v);
									} else {
										return $jfmengels$elm_review$Vendor$IntDict$Empty;
									}
								default:
									var il = _v0.a.a;
									var ir = _v0.b.a;
									var _v4 = A2($jfmengels$elm_review$Vendor$IntDict$determineBranchRelation, il, ir);
									switch (_v4.$) {
										case 0:
											return A3(
												$jfmengels$elm_review$Vendor$IntDict$inner,
												il.g,
												A2($jfmengels$elm_review$Vendor$IntDict$intersect, il.d, ir.d),
												A2($jfmengels$elm_review$Vendor$IntDict$intersect, il.e, ir.e));
										case 1:
											if (!_v4.a) {
												if (_v4.b === 1) {
													var _v5 = _v4.a;
													var _v6 = _v4.b;
													var $temp$l = il.e,
														$temp$r = r;
													l = $temp$l;
													r = $temp$r;
													continue intersect;
												} else {
													var _v9 = _v4.a;
													var _v10 = _v4.b;
													var $temp$l = il.d,
														$temp$r = r;
													l = $temp$l;
													r = $temp$r;
													continue intersect;
												}
											} else {
												if (_v4.b === 1) {
													var _v7 = _v4.a;
													var _v8 = _v4.b;
													var $temp$l = l,
														$temp$r = ir.e;
													l = $temp$l;
													r = $temp$r;
													continue intersect;
												} else {
													var _v11 = _v4.a;
													var _v12 = _v4.b;
													var $temp$l = l,
														$temp$r = ir.d;
													l = $temp$l;
													r = $temp$r;
													continue intersect;
												}
											}
										default:
											return $jfmengels$elm_review$Vendor$IntDict$Empty;
									}
							}
					}
				}
				var ll = _v0.a.a;
				return A2($jfmengels$elm_review$Vendor$IntDict$member, ll.bv, r) ? l : $jfmengels$elm_review$Vendor$IntDict$Empty;
			}
			var _v2 = _v0.b;
			return $jfmengels$elm_review$Vendor$IntDict$Empty;
		}
	});
var $jfmengels$elm_review$Vendor$Graph$crashHack = function (msg) {
	crashHack:
	while (true) {
		var $temp$msg = msg;
		msg = $temp$msg;
		continue crashHack;
	}
};
var $jfmengels$elm_review$Vendor$Graph$unsafeGet = F3(
	function (msg, id, graph) {
		var _v0 = A2($jfmengels$elm_review$Vendor$Graph$get, id, graph);
		if (_v0.$ === 1) {
			return $jfmengels$elm_review$Vendor$Graph$crashHack(msg);
		} else {
			var ctx = _v0.a;
			return ctx;
		}
	});
var $jfmengels$elm_review$Vendor$Graph$checkForBackEdges = F2(
	function (ordering, graph) {
		var success = function (_v3) {
			return A2($jfmengels$elm_review$Vendor$Graph$AcyclicGraph, graph, ordering);
		};
		var check = F2(
			function (id, _v2) {
				var backSet = _v2.a;
				var error = 'Graph.checkForBackEdges: `ordering` didn\'t contain `id`';
				var ctx = A3($jfmengels$elm_review$Vendor$Graph$unsafeGet, error, id, graph);
				var backSetWithId = A3($jfmengels$elm_review$Vendor$IntDict$insert, id, 0, backSet);
				var backEdges = A2($jfmengels$elm_review$Vendor$IntDict$intersect, ctx.h, backSetWithId);
				var _v0 = $jfmengels$elm_review$Vendor$IntDict$findMin(backEdges);
				if (_v0.$ === 1) {
					return $elm$core$Result$Ok(
						_Utils_Tuple2(backSetWithId, 0));
				} else {
					var _v1 = _v0.a;
					var to = _v1.a;
					var label = _v1.b;
					return $elm$core$Result$Err(
						A3($jfmengels$elm_review$Vendor$Graph$Edge, id, to, label));
				}
			});
		return A2(
			$elm$core$Result$map,
			success,
			A3(
				$elm$core$List$foldl,
				F2(
					function (id, res) {
						return A2(
							$elm$core$Result$andThen,
							check(id),
							res);
					}),
				$elm$core$Result$Ok(
					_Utils_Tuple2($jfmengels$elm_review$Vendor$IntDict$empty, 0)),
				ordering));
	});
var $jfmengels$elm_review$Vendor$Graph$alongOutgoingEdges = function (ctx) {
	return $jfmengels$elm_review$Vendor$IntDict$keys(ctx.h);
};
var $jfmengels$elm_review$Vendor$IntDict$foldl = F3(
	function (f, acc, dict) {
		foldl:
		while (true) {
			switch (dict.$) {
				case 0:
					return acc;
				case 1:
					var l = dict.a;
					return A3(f, l.bv, l.b9, acc);
				default:
					var i = dict.a;
					var $temp$f = f,
						$temp$acc = A3($jfmengels$elm_review$Vendor$IntDict$foldl, f, acc, i.d),
						$temp$dict = i.e;
					f = $temp$f;
					acc = $temp$acc;
					dict = $temp$dict;
					continue foldl;
			}
		}
	});
var $jfmengels$elm_review$Vendor$Graph$applyEdgeDiff = F3(
	function (nodeId, diff, graphRep) {
		var updateOutgoingEdge = F2(
			function (upd, node) {
				return _Utils_update(
					node,
					{
						h: A3($jfmengels$elm_review$Vendor$IntDict$update, nodeId, upd, node.h)
					});
			});
		var updateIncomingEdge = F2(
			function (upd, node) {
				return _Utils_update(
					node,
					{
						c9: A3($jfmengels$elm_review$Vendor$IntDict$update, nodeId, upd, node.c9)
					});
			});
		var flippedFoldl = F3(
			function (f, dict, acc) {
				return A3($jfmengels$elm_review$Vendor$IntDict$foldl, f, acc, dict);
			});
		var edgeUpdateToMaybe = function (edgeUpdate) {
			if (!edgeUpdate.$) {
				var lbl = edgeUpdate.a;
				return $elm$core$Maybe$Just(lbl);
			} else {
				return $elm$core$Maybe$Nothing;
			}
		};
		var updateAdjacency = F3(
			function (updateEdge, updatedId, edgeUpdate) {
				var updateLbl = updateEdge(
					$elm$core$Basics$always(
						edgeUpdateToMaybe(edgeUpdate)));
				return A2(
					$jfmengels$elm_review$Vendor$IntDict$update,
					updatedId,
					$elm$core$Maybe$map(updateLbl));
			});
		return A3(
			flippedFoldl,
			updateAdjacency(updateOutgoingEdge),
			diff.h,
			A3(
				flippedFoldl,
				updateAdjacency(updateIncomingEdge),
				diff.c9,
				graphRep));
	});
var $jfmengels$elm_review$Vendor$Graph$Insert = function (a) {
	return {$: 0, a: a};
};
var $jfmengels$elm_review$Vendor$Graph$Remove = function (a) {
	return {$: 1, a: a};
};
var $jfmengels$elm_review$Vendor$Graph$emptyDiff = {c9: $jfmengels$elm_review$Vendor$IntDict$empty, h: $jfmengels$elm_review$Vendor$IntDict$empty};
var $jfmengels$elm_review$Vendor$Graph$computeEdgeDiff = F2(
	function (old, _new) {
		var collectUpdates = F3(
			function (edgeUpdate, updatedId, label) {
				var replaceUpdate = function (old_) {
					var _v5 = _Utils_Tuple2(
						old_,
						edgeUpdate(label));
					if (!_v5.a.$) {
						if (_v5.a.a.$ === 1) {
							if (!_v5.b.$) {
								var oldLbl = _v5.a.a.a;
								var newLbl = _v5.b.a;
								return _Utils_eq(oldLbl, newLbl) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(
									$jfmengels$elm_review$Vendor$Graph$Insert(newLbl));
							} else {
								return $jfmengels$elm_review$Vendor$Graph$crashHack('Graph.computeEdgeDiff: Collected two removals for the same edge. This is an error in the implementation of Graph and you should file a bug report!');
							}
						} else {
							return $jfmengels$elm_review$Vendor$Graph$crashHack('Graph.computeEdgeDiff: Collected inserts before removals. This is an error in the implementation of Graph and you should file a bug report!');
						}
					} else {
						var _v6 = _v5.a;
						var eu = _v5.b;
						return $elm$core$Maybe$Just(eu);
					}
				};
				return A2($jfmengels$elm_review$Vendor$IntDict$update, updatedId, replaceUpdate);
			});
		var collect = F3(
			function (edgeUpdate, adj, updates) {
				return A3(
					$jfmengels$elm_review$Vendor$IntDict$foldl,
					collectUpdates(edgeUpdate),
					updates,
					adj);
			});
		var _v0 = _Utils_Tuple2(old, _new);
		if (_v0.a.$ === 1) {
			if (_v0.b.$ === 1) {
				var _v1 = _v0.a;
				var _v2 = _v0.b;
				return $jfmengels$elm_review$Vendor$Graph$emptyDiff;
			} else {
				var _v4 = _v0.a;
				var ins = _v0.b.a;
				return {
					c9: A3(collect, $jfmengels$elm_review$Vendor$Graph$Insert, ins.h, $jfmengels$elm_review$Vendor$IntDict$empty),
					h: A3(collect, $jfmengels$elm_review$Vendor$Graph$Insert, ins.c9, $jfmengels$elm_review$Vendor$IntDict$empty)
				};
			}
		} else {
			if (_v0.b.$ === 1) {
				var rem = _v0.a.a;
				var _v3 = _v0.b;
				return {
					c9: A3(collect, $jfmengels$elm_review$Vendor$Graph$Remove, rem.h, $jfmengels$elm_review$Vendor$IntDict$empty),
					h: A3(collect, $jfmengels$elm_review$Vendor$Graph$Remove, rem.c9, $jfmengels$elm_review$Vendor$IntDict$empty)
				};
			} else {
				var rem = _v0.a.a;
				var ins = _v0.b.a;
				return _Utils_eq(rem, ins) ? $jfmengels$elm_review$Vendor$Graph$emptyDiff : {
					c9: A3(
						collect,
						$jfmengels$elm_review$Vendor$Graph$Insert,
						ins.h,
						A3(collect, $jfmengels$elm_review$Vendor$Graph$Remove, rem.h, $jfmengels$elm_review$Vendor$IntDict$empty)),
					h: A3(
						collect,
						$jfmengels$elm_review$Vendor$Graph$Insert,
						ins.c9,
						A3(collect, $jfmengels$elm_review$Vendor$Graph$Remove, rem.c9, $jfmengels$elm_review$Vendor$IntDict$empty))
				};
			}
		}
	});
var $jfmengels$elm_review$Vendor$IntDict$filter = F2(
	function (predicate, dict) {
		var add = F3(
			function (k, v, d) {
				return A2(predicate, k, v) ? A3($jfmengels$elm_review$Vendor$IntDict$insert, k, v, d) : d;
			});
		return A3($jfmengels$elm_review$Vendor$IntDict$foldl, add, $jfmengels$elm_review$Vendor$IntDict$empty, dict);
	});
var $jfmengels$elm_review$Vendor$Graph$update = F2(
	function (nodeId, updater) {
		var wrappedUpdater = function (rep) {
			var old = A2($jfmengels$elm_review$Vendor$IntDict$get, nodeId, rep);
			var filterInvalidEdges = function (ctx) {
				return $jfmengels$elm_review$Vendor$IntDict$filter(
					F2(
						function (id, _v0) {
							return _Utils_eq(id, ctx.di.bQ) || A2($jfmengels$elm_review$Vendor$IntDict$member, id, rep);
						}));
			};
			var cleanUpEdges = function (ctx) {
				return _Utils_update(
					ctx,
					{
						c9: A2(filterInvalidEdges, ctx, ctx.c9),
						h: A2(filterInvalidEdges, ctx, ctx.h)
					});
			};
			var _new = A2(
				$elm$core$Maybe$map,
				cleanUpEdges,
				updater(old));
			var diff = A2($jfmengels$elm_review$Vendor$Graph$computeEdgeDiff, old, _new);
			return A3(
				$jfmengels$elm_review$Vendor$IntDict$update,
				nodeId,
				$elm$core$Basics$always(_new),
				A3($jfmengels$elm_review$Vendor$Graph$applyEdgeDiff, nodeId, diff, rep));
		};
		return A2(
			$elm$core$Basics$composeR,
			$jfmengels$elm_review$Vendor$Graph$unGraph,
			A2($elm$core$Basics$composeR, wrappedUpdater, $elm$core$Basics$identity));
	});
var $jfmengels$elm_review$Vendor$Graph$remove = F2(
	function (nodeId, graph) {
		return A3(
			$jfmengels$elm_review$Vendor$Graph$update,
			nodeId,
			$elm$core$Basics$always($elm$core$Maybe$Nothing),
			graph);
	});
var $jfmengels$elm_review$Vendor$Graph$guidedDfs = F5(
	function (selectNeighbors, visitNode, startingSeeds, startingAcc, startingGraph) {
		var go = F3(
			function (seeds, acc, graph) {
				go:
				while (true) {
					if (!seeds.b) {
						return _Utils_Tuple2(acc, graph);
					} else {
						var next = seeds.a;
						var seeds1 = seeds.b;
						var _v1 = A2($jfmengels$elm_review$Vendor$Graph$get, next, graph);
						if (_v1.$ === 1) {
							var $temp$seeds = seeds1,
								$temp$acc = acc,
								$temp$graph = graph;
							seeds = $temp$seeds;
							acc = $temp$acc;
							graph = $temp$graph;
							continue go;
						} else {
							var ctx = _v1.a;
							var _v2 = A2(visitNode, ctx, acc);
							var accAfterDiscovery = _v2.a;
							var finishNode = _v2.b;
							var _v3 = A3(
								go,
								selectNeighbors(ctx),
								accAfterDiscovery,
								A2($jfmengels$elm_review$Vendor$Graph$remove, next, graph));
							var accBeforeFinish = _v3.a;
							var graph1 = _v3.b;
							var accAfterFinish = finishNode(accBeforeFinish);
							var $temp$seeds = seeds1,
								$temp$acc = accAfterFinish,
								$temp$graph = graph1;
							seeds = $temp$seeds;
							acc = $temp$acc;
							graph = $temp$graph;
							continue go;
						}
					}
				}
			});
		return A3(go, startingSeeds, startingAcc, startingGraph);
	});
var $jfmengels$elm_review$Vendor$Graph$nodeIds = A2($elm$core$Basics$composeR, $jfmengels$elm_review$Vendor$Graph$unGraph, $jfmengels$elm_review$Vendor$IntDict$keys);
var $jfmengels$elm_review$Vendor$Graph$dfs = F3(
	function (visitNode, acc, graph) {
		return A5(
			$jfmengels$elm_review$Vendor$Graph$guidedDfs,
			$jfmengels$elm_review$Vendor$Graph$alongOutgoingEdges,
			visitNode,
			$jfmengels$elm_review$Vendor$Graph$nodeIds(graph),
			acc,
			graph).a;
	});
var $jfmengels$elm_review$Vendor$Graph$onFinish = F3(
	function (visitor, ctx, acc) {
		return _Utils_Tuple2(
			acc,
			visitor(ctx));
	});
var $jfmengels$elm_review$Vendor$Graph$checkAcyclic = function (graph) {
	var reversePostOrder = A3(
		$jfmengels$elm_review$Vendor$Graph$dfs,
		$jfmengels$elm_review$Vendor$Graph$onFinish(
			A2(
				$elm$core$Basics$composeR,
				function ($) {
					return $.di;
				},
				A2(
					$elm$core$Basics$composeR,
					function ($) {
						return $.bQ;
					},
					$elm$core$List$cons))),
		_List_Nil,
		graph);
	return A2($jfmengels$elm_review$Vendor$Graph$checkForBackEdges, reversePostOrder, graph);
};
var $jfmengels$elm_review$Vendor$Graph$alongIncomingEdges = function (ctx) {
	return $jfmengels$elm_review$Vendor$IntDict$keys(ctx.c9);
};
var $jfmengels$elm_review$Vendor$Fifo$Fifo = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $jfmengels$elm_review$Vendor$Fifo$empty = A2($jfmengels$elm_review$Vendor$Fifo$Fifo, _List_Nil, _List_Nil);
var $jfmengels$elm_review$Vendor$Fifo$insert = F2(
	function (a, _v0) {
		var front = _v0.a;
		var back = _v0.b;
		return A2(
			$jfmengels$elm_review$Vendor$Fifo$Fifo,
			front,
			A2($elm$core$List$cons, a, back));
	});
var $jfmengels$elm_review$Vendor$Fifo$remove = function (fifo) {
	if (!fifo.a.b) {
		if (!fifo.b.b) {
			return _Utils_Tuple2($elm$core$Maybe$Nothing, $jfmengels$elm_review$Vendor$Fifo$empty);
		} else {
			var back = fifo.b;
			return $jfmengels$elm_review$Vendor$Fifo$remove(
				A2(
					$jfmengels$elm_review$Vendor$Fifo$Fifo,
					$elm$core$List$reverse(back),
					_List_Nil));
		}
	} else {
		var _v1 = fifo.a;
		var next = _v1.a;
		var rest = _v1.b;
		var back = fifo.b;
		return _Utils_Tuple2(
			$elm$core$Maybe$Just(next),
			A2($jfmengels$elm_review$Vendor$Fifo$Fifo, rest, back));
	}
};
var $jfmengels$elm_review$Vendor$Graph$guidedBfs = F5(
	function (selectNeighbors, visitNode, startingSeeds, startingAcc, startingGraph) {
		var enqueueMany = F4(
			function (distance, parentPath, nodeIds_, queue) {
				return A3(
					$elm$core$List$foldl,
					$jfmengels$elm_review$Vendor$Fifo$insert,
					queue,
					A2(
						$elm$core$List$map,
						function (id) {
							return _Utils_Tuple3(id, parentPath, distance);
						},
						nodeIds_));
			});
		var go = F3(
			function (seeds, acc, graph) {
				go:
				while (true) {
					var _v0 = $jfmengels$elm_review$Vendor$Fifo$remove(seeds);
					if (_v0.a.$ === 1) {
						var _v1 = _v0.a;
						return _Utils_Tuple2(acc, graph);
					} else {
						var _v2 = _v0.a.a;
						var next = _v2.a;
						var parentPath = _v2.b;
						var distance = _v2.c;
						var seeds1 = _v0.b;
						var _v3 = A2($jfmengels$elm_review$Vendor$Graph$get, next, graph);
						if (_v3.$ === 1) {
							var $temp$seeds = seeds1,
								$temp$acc = acc,
								$temp$graph = graph;
							seeds = $temp$seeds;
							acc = $temp$acc;
							graph = $temp$graph;
							continue go;
						} else {
							var ctx = _v3.a;
							var path = A2($elm$core$List$cons, ctx, parentPath);
							var seeds2 = A4(
								enqueueMany,
								distance + 1,
								path,
								selectNeighbors(ctx),
								seeds1);
							var accAfterVisit = A3(visitNode, path, distance, acc);
							var $temp$seeds = seeds2,
								$temp$acc = accAfterVisit,
								$temp$graph = A2($jfmengels$elm_review$Vendor$Graph$remove, next, graph);
							seeds = $temp$seeds;
							acc = $temp$acc;
							graph = $temp$graph;
							continue go;
						}
					}
				}
			});
		return A3(
			go,
			A4(enqueueMany, 0, _List_Nil, startingSeeds, $jfmengels$elm_review$Vendor$Fifo$empty),
			startingAcc,
			startingGraph);
	});
var $jfmengels$elm_review$Review$Rule$reachedTarget = F2(
	function (targetNode, path) {
		var _v0 = $elm$core$List$head(path);
		if (!_v0.$) {
			var node = _v0.a;
			return _Utils_eq(node.di.bQ, targetNode);
		} else {
			return false;
		}
	});
var $jfmengels$elm_review$Review$Rule$visitorDiscoverCycle = F4(
	function (targetNode, path, distance, acc) {
		if ($elm$core$List$isEmpty(acc)) {
			if (!distance) {
				var _v0 = $elm$core$List$head(path);
				if (!_v0.$) {
					var head = _v0.a;
					return A2($jfmengels$elm_review$Vendor$IntDict$member, head.di.bQ, head.c9) ? _List_fromArray(
						[head.di]) : acc;
				} else {
					return acc;
				}
			} else {
				if (A2($jfmengels$elm_review$Review$Rule$reachedTarget, targetNode, path)) {
					return A2(
						$elm$core$List$map,
						function ($) {
							return $.di;
						},
						path);
				} else {
					return _List_Nil;
				}
			}
		} else {
			return acc;
		}
	});
var $jfmengels$elm_review$Review$Rule$findSmallerCycle = F3(
	function (graph, currentBest, nodesToVisit) {
		findSmallerCycle:
		while (true) {
			if (!nodesToVisit.b) {
				return currentBest;
			} else {
				var startingNode = nodesToVisit.a;
				var restOfNodes = nodesToVisit.b;
				var cycle = A5(
					$jfmengels$elm_review$Vendor$Graph$guidedBfs,
					$jfmengels$elm_review$Vendor$Graph$alongIncomingEdges,
					$jfmengels$elm_review$Review$Rule$visitorDiscoverCycle(startingNode.bQ),
					_List_fromArray(
						[startingNode.bQ]),
					_List_Nil,
					graph).a;
				var newBest = (($elm$core$List$length(cycle) > 0) && (_Utils_cmp(
					$elm$core$List$length(cycle),
					$elm$core$List$length(currentBest)) < 0)) ? cycle : currentBest;
				if ($elm$core$List$length(newBest) === 1) {
					return newBest;
				} else {
					var $temp$graph = graph,
						$temp$currentBest = newBest,
						$temp$nodesToVisit = restOfNodes;
					graph = $temp$graph;
					currentBest = $temp$currentBest;
					nodesToVisit = $temp$nodesToVisit;
					continue findSmallerCycle;
				}
			}
		}
	});
var $jfmengels$elm_review$Review$Rule$findCycle = F2(
	function (graph, edge) {
		var initialCycle = A5(
			$jfmengels$elm_review$Vendor$Graph$guidedBfs,
			$jfmengels$elm_review$Vendor$Graph$alongIncomingEdges,
			$jfmengels$elm_review$Review$Rule$visitorDiscoverCycle(edge.eJ),
			_List_fromArray(
				[edge.d4]),
			_List_Nil,
			graph).a;
		return A2(
			$elm$core$List$map,
			function ($) {
				return $.cw;
			},
			A3($jfmengels$elm_review$Review$Rule$findSmallerCycle, graph, initialCycle, initialCycle));
	});
var $jfmengels$elm_review$Review$Rule$wrapInCycle = function (string) {
	return '    ┌─────┐\n    │    ' + (string + '\n    └─────┘');
};
var $jfmengels$elm_review$Ansi$noColor = '\u001B[39m';
var $jfmengels$elm_review$Ansi$applyColor = F2(
	function (color, string) {
		return $elm$core$String$concat(
			_List_fromArray(
				['\u001B[' + (color + 'm'), string, $jfmengels$elm_review$Ansi$noColor]));
	});
var $jfmengels$elm_review$Ansi$yellow = $jfmengels$elm_review$Ansi$applyColor('33');
var $jfmengels$elm_review$Review$Rule$printCycle = function (moduleNames) {
	return $jfmengels$elm_review$Review$Rule$wrapInCycle(
		A2(
			$elm$core$String$join,
			'\n    │     ↓\n    │    ',
			A2(
				$elm$core$List$map,
				A2(
					$elm$core$Basics$composeR,
					$elm$core$String$join('.'),
					$jfmengels$elm_review$Ansi$yellow),
				moduleNames)));
};
var $jfmengels$elm_review$Review$Rule$importCycleError = F2(
	function (moduleGraph, edge) {
		var cycle = $elm$core$List$reverse(
			A2($jfmengels$elm_review$Review$Rule$findCycle, moduleGraph, edge));
		return _List_fromArray(
			[
				$jfmengels$elm_review$Review$Rule$errorToReviewError(
				A2(
					$jfmengels$elm_review$Review$Rule$setRuleName,
					'Incorrect project',
					$jfmengels$elm_review$Review$Rule$elmReviewGlobalError(
						{
							bG: _List_fromArray(
								[
									$jfmengels$elm_review$Review$Rule$printCycle(cycle),
									'Learn more about why this is disallowed and how to break cycles here:<https://elm-lang.org/0.19.1/import-cycles>'
								]),
							al: 'Your module imports form a cycle'
						})))
			]);
	});
var $jfmengels$elm_review$Vendor$Graph$topologicalSort = function (_v0) {
	var graph = _v0.a;
	var ordering = _v0.b;
	var error = 'Graph.topologicalSort: Invalid `AcyclicGraph`, where the ordering contained nodes not present in the graph';
	return A2(
		$elm$core$List$map,
		function (id) {
			return A3($jfmengels$elm_review$Vendor$Graph$unsafeGet, error, id, graph);
		},
		ordering);
};
var $jfmengels$elm_review$Review$Rule$getModulesSortedByImport = function (project) {
	var moduleGraph = $jfmengels$elm_review$Review$Project$Internal$moduleGraph(project);
	var _v0 = $jfmengels$elm_review$Vendor$Graph$checkAcyclic(moduleGraph);
	if (!_v0.$) {
		var graph = _v0.a;
		return $elm$core$Result$Ok(
			$jfmengels$elm_review$Vendor$Graph$topologicalSort(graph));
	} else {
		var edge = _v0.a;
		return $elm$core$Result$Err(
			A2($jfmengels$elm_review$Review$Rule$importCycleError, moduleGraph, edge));
	}
};
var $jfmengels$elm_review$Review$Rule$ProjectData = $elm$core$Basics$identity;
var $jfmengels$elm_review$Review$Rule$extractProjectData = function (_v0) {
	var data = _v0;
	return data;
};
var $jfmengels$elm_review$Review$Rule$needsToComputeScope = function (rules) {
	return A2(
		$elm$core$List$any,
		function (_v0) {
			var requestedData = _v0.O;
			var _v1 = requestedData;
			var requestedData_ = _v1;
			return requestedData_.ac;
		},
		rules);
};
var $jfmengels$elm_review$Review$Rule$runRules = F3(
	function (rules, project, nodeContexts) {
		return A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, _v1) {
					var exceptions = _v0.au;
					var ruleImplementation = _v0.aC;
					var errors = _v1.a;
					var previousRules = _v1.b;
					var _v2 = A3(ruleImplementation, exceptions, project, nodeContexts);
					var ruleErrors = _v2.a;
					var ruleWithCache = _v2.b;
					return _Utils_Tuple2(
						A2(
							$elm$core$List$append,
							A2($elm$core$List$map, $jfmengels$elm_review$Review$Rule$removeErrorPhantomType, ruleErrors),
							errors),
						A2($elm$core$List$cons, ruleWithCache, previousRules));
				}),
			_Utils_Tuple2(_List_Nil, _List_Nil),
			rules);
	});
var $jfmengels$elm_review$Review$Rule$Extract = $elm$core$Basics$identity;
var $jfmengels$elm_review$Review$Rule$scope_foldProjectContexts = F2(
	function (newContext, previousContext) {
		return {
			J: previousContext.J,
			aV: A2($elm$core$Dict$union, newContext.aV, previousContext.aV),
			ad: A2($elm$core$Dict$union, previousContext.ad, newContext.ad)
		};
	});
var $jfmengels$elm_review$Review$Rule$scope_fromModuleToProject = F3(
	function (_v0, moduleName, moduleContext) {
		return {
			J: $elm$core$Dict$empty,
			aV: A2(
				$elm$core$Dict$singleton,
				$stil4m$elm_syntax$Elm$Syntax$Node$value(moduleName),
				moduleContext.j),
			ad: A2(
				$elm$core$Dict$singleton,
				$stil4m$elm_syntax$Elm$Syntax$Node$value(moduleName),
				{
					cN: moduleContext.bm,
					cR: moduleContext.cj,
					aZ: '',
					aW: A2(
						$elm$core$String$join,
						'.',
						$stil4m$elm_syntax$Elm$Syntax$Node$value(moduleName)),
					dH: moduleContext.bp,
					dI: moduleContext.bq
				})
		};
	});
var $jfmengels$elm_review$Review$Rule$emptyScope = {
	bF: A2(
		$stil4m$elm_syntax$Elm$Syntax$Node$Node,
		$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
		$stil4m$elm_syntax$Elm$Syntax$Expression$Literal('root')),
	dS: _List_Nil,
	aX: $elm$core$Dict$empty
};
var $jfmengels$elm_review$Review$Rule$Nonempty = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $jfmengels$elm_review$Review$Rule$nonemptyList_fromElement = function (x) {
	return A2($jfmengels$elm_review$Review$Rule$Nonempty, x, _List_Nil);
};
var $jfmengels$elm_review$Review$Rule$createFakeImport = function (_v0) {
	var moduleName = _v0.b_;
	var moduleAlias = _v0.ec;
	var exposingList = _v0.ck;
	return {
		ck: A2(
			$elm$core$Maybe$map,
			$stil4m$elm_syntax$Elm$Syntax$Node$Node($stil4m$elm_syntax$Elm$Syntax$Range$emptyRange),
			exposingList),
		ec: A2(
			$elm$core$Maybe$map,
			A2(
				$elm$core$Basics$composeR,
				$elm$core$List$singleton,
				$stil4m$elm_syntax$Elm$Syntax$Node$Node($stil4m$elm_syntax$Elm$Syntax$Range$emptyRange)),
			moduleAlias),
		b_: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, moduleName)
	};
};
var $jfmengels$elm_review$Review$Rule$elmCorePrelude = function () {
	var explicit = function (exposed) {
		return $elm$core$Maybe$Just(
			$stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit(
				A2(
					$elm$core$List$map,
					$stil4m$elm_syntax$Elm$Syntax$Node$Node($stil4m$elm_syntax$Elm$Syntax$Range$emptyRange),
					exposed)));
	};
	return _List_fromArray(
		[
			$jfmengels$elm_review$Review$Rule$createFakeImport(
			{
				ck: $elm$core$Maybe$Just(
					$stil4m$elm_syntax$Elm$Syntax$Exposing$All($stil4m$elm_syntax$Elm$Syntax$Range$emptyRange)),
				ec: $elm$core$Maybe$Nothing,
				b_: _List_fromArray(
					['Basics'])
			}),
			$jfmengels$elm_review$Review$Rule$createFakeImport(
			{
				ck: explicit(
					_List_fromArray(
						[
							$stil4m$elm_syntax$Elm$Syntax$Exposing$TypeExpose(
							{aW: 'List', ep: $elm$core$Maybe$Nothing}),
							$stil4m$elm_syntax$Elm$Syntax$Exposing$InfixExpose('::')
						])),
				ec: $elm$core$Maybe$Nothing,
				b_: _List_fromArray(
					['List'])
			}),
			$jfmengels$elm_review$Review$Rule$createFakeImport(
			{
				ck: explicit(
					_List_fromArray(
						[
							$stil4m$elm_syntax$Elm$Syntax$Exposing$TypeExpose(
							{
								aW: 'Maybe',
								ep: $elm$core$Maybe$Just($stil4m$elm_syntax$Elm$Syntax$Range$emptyRange)
							})
						])),
				ec: $elm$core$Maybe$Nothing,
				b_: _List_fromArray(
					['Maybe'])
			}),
			$jfmengels$elm_review$Review$Rule$createFakeImport(
			{
				ck: explicit(
					_List_fromArray(
						[
							$stil4m$elm_syntax$Elm$Syntax$Exposing$TypeExpose(
							{
								aW: 'Result',
								ep: $elm$core$Maybe$Just($stil4m$elm_syntax$Elm$Syntax$Range$emptyRange)
							})
						])),
				ec: $elm$core$Maybe$Nothing,
				b_: _List_fromArray(
					['Result'])
			}),
			$jfmengels$elm_review$Review$Rule$createFakeImport(
			{
				ck: explicit(
					_List_fromArray(
						[
							$stil4m$elm_syntax$Elm$Syntax$Exposing$TypeExpose(
							{aW: 'String', ep: $elm$core$Maybe$Nothing})
						])),
				ec: $elm$core$Maybe$Nothing,
				b_: _List_fromArray(
					['String'])
			}),
			$jfmengels$elm_review$Review$Rule$createFakeImport(
			{
				ck: explicit(
					_List_fromArray(
						[
							$stil4m$elm_syntax$Elm$Syntax$Exposing$TypeExpose(
							{aW: 'Char', ep: $elm$core$Maybe$Nothing})
						])),
				ec: $elm$core$Maybe$Nothing,
				b_: _List_fromArray(
					['Char'])
			}),
			$jfmengels$elm_review$Review$Rule$createFakeImport(
			{
				ck: $elm$core$Maybe$Nothing,
				ec: $elm$core$Maybe$Nothing,
				b_: _List_fromArray(
					['Tuple'])
			}),
			$jfmengels$elm_review$Review$Rule$createFakeImport(
			{
				ck: $elm$core$Maybe$Nothing,
				ec: $elm$core$Maybe$Nothing,
				b_: _List_fromArray(
					['Debug'])
			}),
			$jfmengels$elm_review$Review$Rule$createFakeImport(
			{
				ck: explicit(
					_List_fromArray(
						[
							$stil4m$elm_syntax$Elm$Syntax$Exposing$TypeExpose(
							{aW: 'Program', ep: $elm$core$Maybe$Nothing})
						])),
				ec: $elm$core$Maybe$Nothing,
				b_: _List_fromArray(
					['Platform'])
			}),
			$jfmengels$elm_review$Review$Rule$createFakeImport(
			{
				ck: explicit(
					_List_fromArray(
						[
							$stil4m$elm_syntax$Elm$Syntax$Exposing$TypeExpose(
							{aW: 'Cmd', ep: $elm$core$Maybe$Nothing})
						])),
				ec: $elm$core$Maybe$Just('Cmd'),
				b_: _List_fromArray(
					['Platform', 'Cmd'])
			}),
			$jfmengels$elm_review$Review$Rule$createFakeImport(
			{
				ck: explicit(
					_List_fromArray(
						[
							$stil4m$elm_syntax$Elm$Syntax$Exposing$TypeExpose(
							{aW: 'Sub', ep: $elm$core$Maybe$Nothing})
						])),
				ec: $elm$core$Maybe$Just('Sub'),
				b_: _List_fromArray(
					['Platform', 'Sub'])
			})
		]);
}();
var $jfmengels$elm_review$Review$Rule$joinModuleName = function (name) {
	return A2($elm$core$String$join, '.', name);
};
var $elm$core$Dict$update = F3(
	function (targetKey, alter, dictionary) {
		var _v0 = alter(
			A2($elm$core$Dict$get, targetKey, dictionary));
		if (!_v0.$) {
			var value = _v0.a;
			return A3($elm$core$Dict$insert, targetKey, value, dictionary);
		} else {
			return A2($elm$core$Dict$remove, targetKey, dictionary);
		}
	});
var $jfmengels$elm_review$Review$Rule$registerImportAlias = F2(
	function (import_, innerContext) {
		var _v0 = import_.ec;
		if (_v0.$ === 1) {
			var moduleName = $stil4m$elm_syntax$Elm$Syntax$Node$value(import_.b_);
			if (moduleName.b && (!moduleName.b.b)) {
				var singleSegmentModuleName = moduleName.a;
				return _Utils_update(
					innerContext,
					{
						ax: A3(
							$elm$core$Dict$update,
							singleSegmentModuleName,
							function (previousValue) {
								return $elm$core$Maybe$Just(
									A2(
										$elm$core$List$cons,
										moduleName,
										A2($elm$core$Maybe$withDefault, _List_Nil, previousValue)));
							},
							innerContext.ax)
					});
			} else {
				return innerContext;
			}
		} else {
			var alias = _v0.a;
			return _Utils_update(
				innerContext,
				{
					ax: A3(
						$elm$core$Dict$update,
						$jfmengels$elm_review$Review$Rule$joinModuleName(
							$stil4m$elm_syntax$Elm$Syntax$Node$value(alias)),
						function (previousValue) {
							return $elm$core$Maybe$Just(
								A2(
									$elm$core$List$cons,
									$stil4m$elm_syntax$Elm$Syntax$Node$value(import_.b_),
									A2($elm$core$Maybe$withDefault, _List_Nil, previousValue)));
						},
						innerContext.ax)
				});
		}
	});
var $jfmengels$elm_review$Review$Rule$typesFromExposingList = function (topLevelExpose) {
	var _v0 = $stil4m$elm_syntax$Elm$Syntax$Node$value(topLevelExpose);
	switch (_v0.$) {
		case 0:
			return $elm$core$Maybe$Nothing;
		case 1:
			return $elm$core$Maybe$Nothing;
		case 2:
			var name = _v0.a;
			return $elm$core$Maybe$Just(name);
		default:
			var name = _v0.a.aW;
			return $elm$core$Maybe$Just(name);
	}
};
var $jfmengels$elm_review$Review$Rule$valuesFromExposingList = F2(
	function (module_, topLevelExpose) {
		var _v0 = $stil4m$elm_syntax$Elm$Syntax$Node$value(topLevelExpose);
		switch (_v0.$) {
			case 0:
				var operator = _v0.a;
				return _List_fromArray(
					[operator]);
			case 1:
				var _function = _v0.a;
				return _List_fromArray(
					[_function]);
			case 2:
				var name = _v0.a;
				return A2(
					$elm$core$List$any,
					function (alias) {
						return _Utils_eq(alias.aW, name);
					},
					module_.cN) ? _List_fromArray(
					[name]) : _List_Nil;
			default:
				var name = _v0.a.aW;
				var open = _v0.a.ep;
				if (!open.$) {
					return A2(
						$elm$core$List$map,
						$elm$core$Tuple$first,
						A2(
							$jfmengels$elm_review$Vendor$ListExtra$fastConcatMap,
							function ($) {
								return $.eI;
							},
							A2(
								$elm$core$List$filter,
								function (union) {
									return _Utils_eq(union.aW, name);
								},
								module_.dH)));
				} else {
					return _List_Nil;
				}
		}
	});
var $jfmengels$elm_review$Review$Rule$registerImportExposed = F2(
	function (import_, innerContext) {
		var _v0 = A2($elm$core$Maybe$map, $stil4m$elm_syntax$Elm$Syntax$Node$value, import_.ck);
		if (_v0.$ === 1) {
			return innerContext;
		} else {
			var exposing_ = _v0.a;
			var moduleName = $stil4m$elm_syntax$Elm$Syntax$Node$value(import_.b_);
			var module_ = A2(
				$elm$core$Maybe$withDefault,
				{
					cN: _List_Nil,
					cR: _List_Nil,
					aZ: '',
					aW: $jfmengels$elm_review$Review$Rule$joinModuleName(moduleName),
					dH: _List_Nil,
					dI: _List_Nil
				},
				function () {
					var _v4 = A2(
						$elm$core$Dict$get,
						$jfmengels$elm_review$Review$Rule$joinModuleName(moduleName),
						innerContext.J);
					if (!_v4.$) {
						var m = _v4.a;
						return $elm$core$Maybe$Just(m);
					} else {
						return A2($elm$core$Dict$get, moduleName, innerContext.ad);
					}
				}());
			if (!exposing_.$) {
				var nameWithModuleName = function (_v3) {
					var name = _v3.aW;
					return _Utils_Tuple2(name, moduleName);
				};
				var exposedValues = $elm$core$Dict$fromList(
					$elm$core$List$concat(
						_List_fromArray(
							[
								A2(
								$jfmengels$elm_review$Vendor$ListExtra$fastConcatMap,
								function (union) {
									return A2(
										$elm$core$List$map,
										function (_v2) {
											var name = _v2.a;
											return _Utils_Tuple2(name, moduleName);
										},
										union.eI);
								},
								module_.dH),
								A2($elm$core$List$map, nameWithModuleName, module_.dI),
								A2($elm$core$List$map, nameWithModuleName, module_.cN),
								A2($elm$core$List$map, nameWithModuleName, module_.cR)
							])));
				var exposedTypes = $elm$core$Dict$fromList(
					A2(
						$elm$core$List$append,
						A2($elm$core$List$map, nameWithModuleName, module_.dH),
						A2($elm$core$List$map, nameWithModuleName, module_.cN)));
				return _Utils_update(
					innerContext,
					{
						aN: A2($elm$core$Dict$union, exposedValues, innerContext.aN),
						aO: A2($elm$core$Dict$union, innerContext.aO, exposedTypes)
					});
			} else {
				var topLevelExposeList = exposing_.a;
				var exposedValues = $elm$core$Dict$fromList(
					A2(
						$elm$core$List$map,
						function (name) {
							return _Utils_Tuple2(name, moduleName);
						},
						A2(
							$jfmengels$elm_review$Vendor$ListExtra$fastConcatMap,
							$jfmengels$elm_review$Review$Rule$valuesFromExposingList(module_),
							topLevelExposeList)));
				var exposedTypes = $elm$core$Dict$fromList(
					A2(
						$elm$core$List$map,
						function (name) {
							return _Utils_Tuple2(name, moduleName);
						},
						A2($elm$core$List$filterMap, $jfmengels$elm_review$Review$Rule$typesFromExposingList, topLevelExposeList)));
				return _Utils_update(
					innerContext,
					{
						aN: A2($elm$core$Dict$union, exposedValues, innerContext.aN),
						aO: A2($elm$core$Dict$union, innerContext.aO, exposedTypes)
					});
			}
		}
	});
var $jfmengels$elm_review$Review$Rule$registerPrelude = function (innerContext) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (import_, ctx) {
				return A2(
					$jfmengels$elm_review$Review$Rule$registerImportExposed,
					import_,
					A2($jfmengels$elm_review$Review$Rule$registerImportAlias, import_, ctx));
			}),
		innerContext,
		$jfmengels$elm_review$Review$Rule$elmCorePrelude);
};
var $jfmengels$elm_review$Review$Rule$scope_fromProjectToModule = F3(
	function (_v0, _v1, projectContext) {
		return $jfmengels$elm_review$Review$Rule$registerPrelude(
			{
				J: projectContext.J,
				bm: _List_Nil,
				cj: _List_Nil,
				bK: $elm$core$Dict$empty,
				bp: _List_Nil,
				bq: _List_Nil,
				bL: false,
				ax: $elm$core$Dict$empty,
				aN: $elm$core$Dict$empty,
				aO: $elm$core$Dict$empty,
				aU: $elm$core$Set$empty,
				j: $jfmengels$elm_review$Review$ModuleNameLookupTable$Internal$empty,
				ad: projectContext.ad,
				l: $jfmengels$elm_review$Review$Rule$nonemptyList_fromElement($jfmengels$elm_review$Review$Rule$emptyScope)
			});
	});
var $jfmengels$elm_review$Review$Rule$scope_initialProjectContext = {J: $elm$core$Dict$empty, aV: $elm$core$Dict$empty, ad: $elm$core$Dict$empty};
var $jfmengels$elm_review$Review$Rule$scope_internalDependenciesVisitor = F2(
	function (dependencies, innerContext) {
		var dependenciesModules = $elm$core$Dict$fromList(
			A2(
				$elm$core$List$map,
				function (dependencyModule) {
					return _Utils_Tuple2(dependencyModule.aW, dependencyModule);
				},
				A2(
					$jfmengels$elm_review$Vendor$ListExtra$fastConcatMap,
					$jfmengels$elm_review$Review$Project$Dependency$modules,
					$elm$core$Dict$values(dependencies))));
		return _Utils_update(
			innerContext,
			{J: dependenciesModules});
	});
var $jfmengels$elm_review$Review$Rule$nonemptyList_mapHead = F2(
	function (fn, _v0) {
		var x = _v0.a;
		var xs = _v0.b;
		return A2(
			$jfmengels$elm_review$Review$Rule$Nonempty,
			fn(x),
			xs);
	});
var $jfmengels$elm_review$Review$Rule$nonemptyList_pop = function (_v0) {
	var x = _v0.a;
	var xs = _v0.b;
	if (!xs.b) {
		return A2($jfmengels$elm_review$Review$Rule$Nonempty, x, xs);
	} else {
		var y = xs.a;
		var ys = xs.b;
		return A2($jfmengels$elm_review$Review$Rule$Nonempty, y, ys);
	}
};
var $jfmengels$elm_review$Review$Rule$expressionExitVisitor = F2(
	function (node, context) {
		var _v0 = $stil4m$elm_syntax$Elm$Syntax$Node$value(node);
		switch (_v0.$) {
			case 15:
				return _Utils_update(
					context,
					{
						l: $jfmengels$elm_review$Review$Rule$nonemptyList_pop(context.l)
					});
			case 16:
				return _Utils_update(
					context,
					{
						l: A2(
							$jfmengels$elm_review$Review$Rule$nonemptyList_mapHead,
							function (scope) {
								return _Utils_update(
									scope,
									{dS: _List_Nil});
							},
							context.l)
					});
			default:
				return context;
		}
	});
var $jfmengels$elm_review$Review$ModuleNameLookupTable$Internal$add = F3(
	function (range, moduleName, _v0) {
		var moduleNameLookupTable = _v0;
		return A3(
			$elm$core$Dict$insert,
			$jfmengels$elm_review$Review$ModuleNameLookupTable$Internal$toRangeLike(range),
			moduleName,
			moduleNameLookupTable);
	});
var $jfmengels$elm_review$Review$ModuleNameLookupTable$Internal$addMultiple = F2(
	function (elements, moduleNameLookupTable) {
		return A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, lookupTable) {
					var range = _v0.a;
					var moduleName = _v0.b;
					return A3($jfmengels$elm_review$Review$ModuleNameLookupTable$Internal$add, range, moduleName, lookupTable);
				}),
			moduleNameLookupTable,
			elements);
	});
var $jfmengels$elm_review$Review$Rule$findInList = F2(
	function (predicate, list) {
		findInList:
		while (true) {
			if (!list.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var a = list.a;
				var rest = list.b;
				if (predicate(a)) {
					return $elm$core$Maybe$Just(a);
				} else {
					var $temp$predicate = predicate,
						$temp$list = rest;
					predicate = $temp$predicate;
					list = $temp$list;
					continue findInList;
				}
			}
		}
	});
var $jfmengels$elm_review$Review$Rule$nonemptyList_any = F2(
	function (f, _v0) {
		var x = _v0.a;
		var xs = _v0.b;
		return f(x) || A2($elm$core$List$any, f, xs);
	});
var $jfmengels$elm_review$Review$Rule$isInScope = F2(
	function (name, scopes) {
		return A2(
			$jfmengels$elm_review$Review$Rule$nonemptyList_any,
			A2(
				$elm$core$Basics$composeR,
				function ($) {
					return $.aX;
				},
				$elm$core$Dict$member(name)),
			scopes);
	});
var $jfmengels$elm_review$Review$Rule$isValueDeclaredInModule = F2(
	function (valueName, module_) {
		return A2(
			$elm$core$List$any,
			A2(
				$elm$core$Basics$composeR,
				function ($) {
					return $.aW;
				},
				$elm$core$Basics$eq(valueName)),
			module_.dI) || (A2(
			$elm$core$List$any,
			A2(
				$elm$core$Basics$composeR,
				function ($) {
					return $.aW;
				},
				$elm$core$Basics$eq(valueName)),
			module_.cN) || A2(
			$elm$core$List$any,
			function (union) {
				return A2(
					$elm$core$List$any,
					A2(
						$elm$core$Basics$composeR,
						$elm$core$Tuple$first,
						$elm$core$Basics$eq(valueName)),
					union.eI);
			},
			module_.dH));
	});
var $jfmengels$elm_review$Review$Rule$moduleNameForValue = F3(
	function (context, valueName, moduleName) {
		if (!moduleName.b) {
			return A2($jfmengels$elm_review$Review$Rule$isInScope, valueName, context.l) ? _List_Nil : A2(
				$elm$core$Maybe$withDefault,
				_List_Nil,
				A2($elm$core$Dict$get, valueName, context.aN));
		} else {
			if (!moduleName.b.b) {
				var moduleNameOrAlias = moduleName.a;
				var _v1 = A2($elm$core$Dict$get, moduleNameOrAlias, context.ax);
				if (!_v1.$) {
					if (_v1.a.b && (!_v1.a.b.b)) {
						var _v2 = _v1.a;
						var aliasedModuleName = _v2.a;
						return aliasedModuleName;
					} else {
						var aliases = _v1.a;
						var _v3 = A2(
							$jfmengels$elm_review$Review$Rule$findInList,
							function (aliasedModuleName) {
								var _v4 = A2($elm$core$Dict$get, aliasedModuleName, context.ad);
								if (!_v4.$) {
									var module_ = _v4.a;
									return A2($jfmengels$elm_review$Review$Rule$isValueDeclaredInModule, valueName, module_);
								} else {
									var _v5 = A2(
										$elm$core$Dict$get,
										$jfmengels$elm_review$Review$Rule$joinModuleName(aliasedModuleName),
										context.J);
									if (!_v5.$) {
										var module_ = _v5.a;
										return A2($jfmengels$elm_review$Review$Rule$isValueDeclaredInModule, valueName, module_);
									} else {
										return false;
									}
								}
							},
							aliases);
						if (!_v3.$) {
							var aliasedModuleName = _v3.a;
							return aliasedModuleName;
						} else {
							return A2(
								$elm$core$Maybe$withDefault,
								moduleName,
								$elm$core$List$head(aliases));
						}
					}
				} else {
					return moduleName;
				}
			} else {
				return moduleName;
			}
		}
	});
var $jfmengels$elm_review$Review$Rule$collectModuleNamesFromPatternHelp = F3(
	function (context, patternsToVisit, acc) {
		collectModuleNamesFromPatternHelp:
		while (true) {
			if (patternsToVisit.b) {
				var pattern = patternsToVisit.a;
				var restOfPatternsToVisit = patternsToVisit.b;
				var _v1 = $stil4m$elm_syntax$Elm$Syntax$Node$value(pattern);
				switch (_v1.$) {
					case 12:
						var moduleName = _v1.a.b_;
						var name = _v1.a.aW;
						var subPatterns = _v1.b;
						var $temp$context = context,
							$temp$patternsToVisit = A2($elm$core$List$append, subPatterns, restOfPatternsToVisit),
							$temp$acc = A2(
							$elm$core$List$cons,
							_Utils_Tuple2(
								$stil4m$elm_syntax$Elm$Syntax$Node$range(pattern),
								A3($jfmengels$elm_review$Review$Rule$moduleNameForValue, context, name, moduleName)),
							acc);
						context = $temp$context;
						patternsToVisit = $temp$patternsToVisit;
						acc = $temp$acc;
						continue collectModuleNamesFromPatternHelp;
					case 9:
						var left = _v1.a;
						var right = _v1.b;
						var $temp$context = context,
							$temp$patternsToVisit = A2(
							$elm$core$List$cons,
							left,
							A2($elm$core$List$cons, right, restOfPatternsToVisit)),
							$temp$acc = acc;
						context = $temp$context;
						patternsToVisit = $temp$patternsToVisit;
						acc = $temp$acc;
						continue collectModuleNamesFromPatternHelp;
					case 7:
						var subPatterns = _v1.a;
						var $temp$context = context,
							$temp$patternsToVisit = A2($elm$core$List$append, subPatterns, restOfPatternsToVisit),
							$temp$acc = acc;
						context = $temp$context;
						patternsToVisit = $temp$patternsToVisit;
						acc = $temp$acc;
						continue collectModuleNamesFromPatternHelp;
					case 14:
						var subPattern = _v1.a;
						var $temp$context = context,
							$temp$patternsToVisit = A2($elm$core$List$cons, subPattern, restOfPatternsToVisit),
							$temp$acc = acc;
						context = $temp$context;
						patternsToVisit = $temp$patternsToVisit;
						acc = $temp$acc;
						continue collectModuleNamesFromPatternHelp;
					case 13:
						var subPattern = _v1.a;
						var $temp$context = context,
							$temp$patternsToVisit = A2($elm$core$List$cons, subPattern, restOfPatternsToVisit),
							$temp$acc = acc;
						context = $temp$context;
						patternsToVisit = $temp$patternsToVisit;
						acc = $temp$acc;
						continue collectModuleNamesFromPatternHelp;
					case 10:
						var subPatterns = _v1.a;
						var $temp$context = context,
							$temp$patternsToVisit = A2($elm$core$List$append, subPatterns, restOfPatternsToVisit),
							$temp$acc = acc;
						context = $temp$context;
						patternsToVisit = $temp$patternsToVisit;
						acc = $temp$acc;
						continue collectModuleNamesFromPatternHelp;
					default:
						var $temp$context = context,
							$temp$patternsToVisit = restOfPatternsToVisit,
							$temp$acc = acc;
						context = $temp$context;
						patternsToVisit = $temp$patternsToVisit;
						acc = $temp$acc;
						continue collectModuleNamesFromPatternHelp;
				}
			} else {
				return acc;
			}
		}
	});
var $jfmengels$elm_review$Review$Rule$collectModuleNamesFromPattern = F2(
	function (context, pattern) {
		return A3(
			$jfmengels$elm_review$Review$Rule$collectModuleNamesFromPatternHelp,
			context,
			_List_fromArray(
				[pattern]),
			_List_Nil);
	});
var $jfmengels$elm_review$Review$Rule$isTypeDeclaredInModule = F2(
	function (typeName, module_) {
		return A2(
			$elm$core$List$any,
			A2(
				$elm$core$Basics$composeR,
				function ($) {
					return $.aW;
				},
				$elm$core$Basics$eq(typeName)),
			module_.cN) || A2(
			$elm$core$List$any,
			A2(
				$elm$core$Basics$composeR,
				function ($) {
					return $.aW;
				},
				$elm$core$Basics$eq(typeName)),
			module_.dH);
	});
var $jfmengels$elm_review$Review$Rule$moduleNameForType = F3(
	function (context, typeName, moduleName) {
		if (!moduleName.b) {
			return A2($elm$core$Set$member, typeName, context.aU) ? _List_Nil : A2(
				$elm$core$Maybe$withDefault,
				_List_Nil,
				A2($elm$core$Dict$get, typeName, context.aO));
		} else {
			if (!moduleName.b.b) {
				var _v1 = A2(
					$elm$core$Dict$get,
					$jfmengels$elm_review$Review$Rule$joinModuleName(moduleName),
					context.ax);
				if (!_v1.$) {
					if (_v1.a.b && (!_v1.a.b.b)) {
						var _v2 = _v1.a;
						var aliasedModuleName = _v2.a;
						return aliasedModuleName;
					} else {
						var aliases = _v1.a;
						var _v3 = A2(
							$jfmengels$elm_review$Review$Rule$findInList,
							function (aliasedModuleName) {
								var _v4 = A2($elm$core$Dict$get, aliasedModuleName, context.ad);
								if (!_v4.$) {
									var module_ = _v4.a;
									return A2($jfmengels$elm_review$Review$Rule$isTypeDeclaredInModule, typeName, module_);
								} else {
									var _v5 = A2(
										$elm$core$Dict$get,
										$jfmengels$elm_review$Review$Rule$joinModuleName(aliasedModuleName),
										context.J);
									if (!_v5.$) {
										var module_ = _v5.a;
										return A2($jfmengels$elm_review$Review$Rule$isTypeDeclaredInModule, typeName, module_);
									} else {
										return false;
									}
								}
							},
							aliases);
						if (!_v3.$) {
							var aliasedModuleName = _v3.a;
							return aliasedModuleName;
						} else {
							return A2(
								$elm$core$Maybe$withDefault,
								moduleName,
								$elm$core$List$head(aliases));
						}
					}
				} else {
					return moduleName;
				}
			} else {
				return moduleName;
			}
		}
	});
var $jfmengels$elm_review$Review$Rule$collectModuleNamesFromTypeAnnotationHelp = F3(
	function (context, typeAnnotationsToVisit, acc) {
		collectModuleNamesFromTypeAnnotationHelp:
		while (true) {
			if (typeAnnotationsToVisit.b) {
				var typeAnnotationNode = typeAnnotationsToVisit.a;
				var remainingTypeAnnotationsToVisit = typeAnnotationsToVisit.b;
				var _v1 = $stil4m$elm_syntax$Elm$Syntax$Node$value(typeAnnotationNode);
				switch (_v1.$) {
					case 1:
						var _v2 = _v1.a;
						var range = _v2.a;
						var _v3 = _v2.b;
						var moduleName = _v3.a;
						var name = _v3.b;
						var args = _v1.b;
						var $temp$context = context,
							$temp$typeAnnotationsToVisit = _Utils_ap(args, remainingTypeAnnotationsToVisit),
							$temp$acc = A2(
							$elm$core$List$cons,
							_Utils_Tuple2(
								range,
								A3($jfmengels$elm_review$Review$Rule$moduleNameForType, context, name, moduleName)),
							acc);
						context = $temp$context;
						typeAnnotationsToVisit = $temp$typeAnnotationsToVisit;
						acc = $temp$acc;
						continue collectModuleNamesFromTypeAnnotationHelp;
					case 3:
						var nodes = _v1.a;
						var $temp$context = context,
							$temp$typeAnnotationsToVisit = _Utils_ap(nodes, remainingTypeAnnotationsToVisit),
							$temp$acc = acc;
						context = $temp$context;
						typeAnnotationsToVisit = $temp$typeAnnotationsToVisit;
						acc = $temp$acc;
						continue collectModuleNamesFromTypeAnnotationHelp;
					case 4:
						var fields = _v1.a;
						var $temp$context = context,
							$temp$typeAnnotationsToVisit = _Utils_ap(
							A2(
								$elm$core$List$map,
								A2($elm$core$Basics$composeR, $stil4m$elm_syntax$Elm$Syntax$Node$value, $elm$core$Tuple$second),
								fields),
							remainingTypeAnnotationsToVisit),
							$temp$acc = acc;
						context = $temp$context;
						typeAnnotationsToVisit = $temp$typeAnnotationsToVisit;
						acc = $temp$acc;
						continue collectModuleNamesFromTypeAnnotationHelp;
					case 5:
						var fields = _v1.b;
						var $temp$context = context,
							$temp$typeAnnotationsToVisit = _Utils_ap(
							A2(
								$elm$core$List$map,
								A2($elm$core$Basics$composeR, $stil4m$elm_syntax$Elm$Syntax$Node$value, $elm$core$Tuple$second),
								$stil4m$elm_syntax$Elm$Syntax$Node$value(fields)),
							remainingTypeAnnotationsToVisit),
							$temp$acc = acc;
						context = $temp$context;
						typeAnnotationsToVisit = $temp$typeAnnotationsToVisit;
						acc = $temp$acc;
						continue collectModuleNamesFromTypeAnnotationHelp;
					case 6:
						var left = _v1.a;
						var right = _v1.b;
						var $temp$context = context,
							$temp$typeAnnotationsToVisit = A2(
							$elm$core$List$cons,
							left,
							A2($elm$core$List$cons, right, remainingTypeAnnotationsToVisit)),
							$temp$acc = acc;
						context = $temp$context;
						typeAnnotationsToVisit = $temp$typeAnnotationsToVisit;
						acc = $temp$acc;
						continue collectModuleNamesFromTypeAnnotationHelp;
					default:
						var $temp$context = context,
							$temp$typeAnnotationsToVisit = remainingTypeAnnotationsToVisit,
							$temp$acc = acc;
						context = $temp$context;
						typeAnnotationsToVisit = $temp$typeAnnotationsToVisit;
						acc = $temp$acc;
						continue collectModuleNamesFromTypeAnnotationHelp;
				}
			} else {
				return acc;
			}
		}
	});
var $jfmengels$elm_review$Review$Rule$collectModuleNamesFromTypeAnnotation = F2(
	function (context, typeAnnotationToVisit) {
		return A3(
			$jfmengels$elm_review$Review$Rule$collectModuleNamesFromTypeAnnotationHelp,
			context,
			_List_fromArray(
				[typeAnnotationToVisit]),
			_List_Nil);
	});
var $jfmengels$elm_review$Review$Rule$nonemptyList_cons = F2(
	function (y, _v0) {
		var x = _v0.a;
		var xs = _v0.b;
		return A2(
			$jfmengels$elm_review$Review$Rule$Nonempty,
			y,
			A2($elm$core$List$cons, x, xs));
	});
var $jfmengels$elm_review$Review$Rule$FunctionParameter = 2;
var $jfmengels$elm_review$Review$Rule$collectNamesFromPatternHelp = F2(
	function (patternsToVisit, acc) {
		collectNamesFromPatternHelp:
		while (true) {
			if (patternsToVisit.b) {
				var pattern = patternsToVisit.a;
				var restOfPatternsToVisit = patternsToVisit.b;
				var _v1 = $stil4m$elm_syntax$Elm$Syntax$Node$value(pattern);
				switch (_v1.$) {
					case 11:
						var name = _v1.a;
						var $temp$patternsToVisit = restOfPatternsToVisit,
							$temp$acc = A2(
							$elm$core$List$cons,
							A2(
								$stil4m$elm_syntax$Elm$Syntax$Node$Node,
								$stil4m$elm_syntax$Elm$Syntax$Node$range(pattern),
								name),
							acc);
						patternsToVisit = $temp$patternsToVisit;
						acc = $temp$acc;
						continue collectNamesFromPatternHelp;
					case 12:
						var subPatterns = _v1.b;
						var $temp$patternsToVisit = A2($elm$core$List$append, subPatterns, restOfPatternsToVisit),
							$temp$acc = acc;
						patternsToVisit = $temp$patternsToVisit;
						acc = $temp$acc;
						continue collectNamesFromPatternHelp;
					case 8:
						var names = _v1.a;
						var $temp$patternsToVisit = restOfPatternsToVisit,
							$temp$acc = A2($elm$core$List$append, names, acc);
						patternsToVisit = $temp$patternsToVisit;
						acc = $temp$acc;
						continue collectNamesFromPatternHelp;
					case 14:
						var subPattern = _v1.a;
						var $temp$patternsToVisit = A2($elm$core$List$cons, subPattern, restOfPatternsToVisit),
							$temp$acc = acc;
						patternsToVisit = $temp$patternsToVisit;
						acc = $temp$acc;
						continue collectNamesFromPatternHelp;
					case 13:
						var subPattern = _v1.a;
						var alias = _v1.b;
						var $temp$patternsToVisit = A2($elm$core$List$cons, subPattern, restOfPatternsToVisit),
							$temp$acc = A2($elm$core$List$cons, alias, acc);
						patternsToVisit = $temp$patternsToVisit;
						acc = $temp$acc;
						continue collectNamesFromPatternHelp;
					case 7:
						var subPatterns = _v1.a;
						var $temp$patternsToVisit = A2($elm$core$List$append, subPatterns, restOfPatternsToVisit),
							$temp$acc = acc;
						patternsToVisit = $temp$patternsToVisit;
						acc = $temp$acc;
						continue collectNamesFromPatternHelp;
					case 9:
						var left = _v1.a;
						var right = _v1.b;
						var $temp$patternsToVisit = A2(
							$elm$core$List$cons,
							left,
							A2($elm$core$List$cons, right, restOfPatternsToVisit)),
							$temp$acc = acc;
						patternsToVisit = $temp$patternsToVisit;
						acc = $temp$acc;
						continue collectNamesFromPatternHelp;
					case 10:
						var subPatterns = _v1.a;
						var $temp$patternsToVisit = A2($elm$core$List$append, subPatterns, restOfPatternsToVisit),
							$temp$acc = acc;
						patternsToVisit = $temp$patternsToVisit;
						acc = $temp$acc;
						continue collectNamesFromPatternHelp;
					default:
						var $temp$patternsToVisit = restOfPatternsToVisit,
							$temp$acc = acc;
						patternsToVisit = $temp$patternsToVisit;
						acc = $temp$acc;
						continue collectNamesFromPatternHelp;
				}
			} else {
				return acc;
			}
		}
	});
var $jfmengels$elm_review$Review$Rule$collectNamesFromPattern = function (pattern) {
	return A2(
		$jfmengels$elm_review$Review$Rule$collectNamesFromPatternHelp,
		_List_fromArray(
			[pattern]),
		_List_Nil);
};
var $jfmengels$elm_review$Review$Rule$parameters = function (patterns) {
	return $elm$core$Dict$fromList(
		A2(
			$elm$core$List$map,
			function (node) {
				return _Utils_Tuple2(
					$stil4m$elm_syntax$Elm$Syntax$Node$value(node),
					{di: node, aE: 2});
			},
			A2($jfmengels$elm_review$Vendor$ListExtra$fastConcatMap, $jfmengels$elm_review$Review$Rule$collectNamesFromPattern, patterns)));
};
var $jfmengels$elm_review$Review$Rule$updateScope = F2(
	function (innerContext, scopes) {
		return _Utils_update(
			innerContext,
			{l: scopes});
	});
var $jfmengels$elm_review$Review$Rule$scope_declarationEnterVisitor = F2(
	function (node, context) {
		var _v0 = $stil4m$elm_syntax$Elm$Syntax$Node$value(node);
		switch (_v0.$) {
			case 0:
				var _function = _v0.a;
				var newScope = _Utils_update(
					$jfmengels$elm_review$Review$Rule$emptyScope,
					{
						aX: $jfmengels$elm_review$Review$Rule$parameters(
							$stil4m$elm_syntax$Elm$Syntax$Node$value(_function.dZ).cO)
					});
				var newContext = A2(
					$jfmengels$elm_review$Review$Rule$updateScope,
					context,
					A2($jfmengels$elm_review$Review$Rule$nonemptyList_cons, newScope, context.l));
				var moduleNamesFromSignature = A2(
					$elm$core$Maybe$withDefault,
					_List_Nil,
					A2(
						$elm$core$Maybe$map,
						A2(
							$elm$core$Basics$composeR,
							$stil4m$elm_syntax$Elm$Syntax$Node$value,
							A2(
								$elm$core$Basics$composeR,
								function ($) {
									return $.dG;
								},
								$jfmengels$elm_review$Review$Rule$collectModuleNamesFromTypeAnnotation(newContext))),
						_function.ez));
				var moduleNamesFromArguments = A2(
					$jfmengels$elm_review$Vendor$ListExtra$fastConcatMap,
					$jfmengels$elm_review$Review$Rule$collectModuleNamesFromPattern(newContext),
					$stil4m$elm_syntax$Elm$Syntax$Node$value(_function.dZ).cO);
				var lookupTable = A2(
					$jfmengels$elm_review$Review$ModuleNameLookupTable$Internal$addMultiple,
					_Utils_ap(moduleNamesFromSignature, moduleNamesFromArguments),
					newContext.j);
				return _Utils_update(
					newContext,
					{j: lookupTable});
			case 2:
				var constructors = _v0.a.dX;
				return _Utils_update(
					context,
					{
						j: A2(
							$jfmengels$elm_review$Review$ModuleNameLookupTable$Internal$addMultiple,
							A2(
								$jfmengels$elm_review$Vendor$ListExtra$fastConcatMap,
								$jfmengels$elm_review$Review$Rule$collectModuleNamesFromTypeAnnotation(context),
								A2(
									$jfmengels$elm_review$Vendor$ListExtra$fastConcatMap,
									A2(
										$elm$core$Basics$composeR,
										$stil4m$elm_syntax$Elm$Syntax$Node$value,
										function ($) {
											return $.cO;
										}),
									constructors)),
							context.j)
					});
			case 1:
				var typeAnnotation = _v0.a.dG;
				return _Utils_update(
					context,
					{
						j: A2(
							$jfmengels$elm_review$Review$ModuleNameLookupTable$Internal$addMultiple,
							A2($jfmengels$elm_review$Review$Rule$collectModuleNamesFromTypeAnnotation, context, typeAnnotation),
							context.j)
					});
			case 3:
				var signature = _v0.a;
				var moduleNamesFromSignature = A2($jfmengels$elm_review$Review$Rule$collectModuleNamesFromTypeAnnotation, context, signature.dG);
				var lookupTable = A2($jfmengels$elm_review$Review$ModuleNameLookupTable$Internal$addMultiple, moduleNamesFromSignature, context.j);
				return _Utils_update(
					context,
					{j: lookupTable});
			default:
				return context;
		}
	});
var $jfmengels$elm_review$Review$Rule$scope_declarationExitVisitor = F2(
	function (node, context) {
		var _v0 = $stil4m$elm_syntax$Elm$Syntax$Node$value(node);
		if (!_v0.$) {
			return _Utils_update(
				context,
				{
					l: $jfmengels$elm_review$Review$Rule$nonemptyList_pop(context.l)
				});
		} else {
			return context;
		}
	});
var $jfmengels$elm_review$Review$Rule$CustomTypeConstructor = 1;
var $jfmengels$elm_review$Review$Rule$Port = 5;
var $jfmengels$elm_review$Review$Rule$TopLevelVariable = 0;
var $jfmengels$elm_review$Review$Rule$registerVariable = F3(
	function (variableInfo, name, scopes) {
		return A2(
			$jfmengels$elm_review$Review$Rule$nonemptyList_mapHead,
			function (scope) {
				return _Utils_update(
					scope,
					{
						aX: A3($elm$core$Dict$insert, name, variableInfo, scope.aX)
					});
			},
			scopes);
	});
var $jfmengels$elm_review$Review$Rule$addToScope = F2(
	function (variableData, innerContext) {
		var newScopes = A3(
			$jfmengels$elm_review$Review$Rule$registerVariable,
			variableData,
			$stil4m$elm_syntax$Elm$Syntax$Node$value(variableData.di),
			innerContext.l);
		return _Utils_update(
			innerContext,
			{l: newScopes});
	});
var $jfmengels$elm_review$Review$Rule$registerExposedCustomType = F3(
	function (constructors, name, innerContext) {
		return _Utils_update(
			innerContext,
			{
				bp: A2(
					$elm$core$List$cons,
					{
						dM: _List_Nil,
						aZ: '',
						aW: name,
						eI: A2(
							$elm$core$List$map,
							function (constructor) {
								return _Utils_Tuple2(
									$stil4m$elm_syntax$Elm$Syntax$Node$value(
										$stil4m$elm_syntax$Elm$Syntax$Node$value(constructor).aW),
									_List_Nil);
							},
							constructors)
					},
					innerContext.bp)
			});
	});
var $jfmengels$elm_review$Review$Rule$registerExposedTypeAlias = F2(
	function (name, innerContext) {
		return _Utils_update(
			innerContext,
			{
				bm: A2(
					$elm$core$List$cons,
					{
						dM: _List_Nil,
						aZ: '',
						aW: name,
						cL: $elm$project_metadata_utils$Elm$Type$Tuple(_List_Nil)
					},
					innerContext.bm)
			});
	});
var $jfmengels$elm_review$Review$Rule$recordUpdateToDocsType = F2(
	function (innerContext, updates) {
		return A2(
			$elm$core$List$map,
			function (_v6) {
				var _v7 = _v6.b;
				var name = _v7.a;
				var typeAnnotation = _v7.b;
				return _Utils_Tuple2(
					$stil4m$elm_syntax$Elm$Syntax$Node$value(name),
					A2($jfmengels$elm_review$Review$Rule$syntaxTypeAnnotationToDocsType, innerContext, typeAnnotation));
			},
			updates);
	});
var $jfmengels$elm_review$Review$Rule$syntaxTypeAnnotationToDocsType = F2(
	function (innerContext, _v0) {
		var typeAnnotation = _v0.b;
		switch (typeAnnotation.$) {
			case 0:
				var name = typeAnnotation.a;
				return $elm$project_metadata_utils$Elm$Type$Var(name);
			case 1:
				var _v2 = typeAnnotation.a;
				var _v3 = _v2.b;
				var moduleName = _v3.a;
				var typeName = _v3.b;
				var typeParameters = typeAnnotation.b;
				var realModuleName = A3($jfmengels$elm_review$Review$Rule$moduleNameForType, innerContext, typeName, moduleName);
				return A2(
					$elm$project_metadata_utils$Elm$Type$Type,
					A2($elm$core$String$join, '.', realModuleName) + ('.' + typeName),
					A2(
						$elm$core$List$map,
						$jfmengels$elm_review$Review$Rule$syntaxTypeAnnotationToDocsType(innerContext),
						typeParameters));
			case 2:
				return $elm$project_metadata_utils$Elm$Type$Tuple(_List_Nil);
			case 3:
				var list = typeAnnotation.a;
				return $elm$project_metadata_utils$Elm$Type$Tuple(
					A2(
						$elm$core$List$map,
						$jfmengels$elm_review$Review$Rule$syntaxTypeAnnotationToDocsType(innerContext),
						list));
			case 4:
				var updates = typeAnnotation.a;
				return A2(
					$elm$project_metadata_utils$Elm$Type$Record,
					A2($jfmengels$elm_review$Review$Rule$recordUpdateToDocsType, innerContext, updates),
					$elm$core$Maybe$Nothing);
			case 5:
				var _v4 = typeAnnotation.a;
				var generic = _v4.b;
				var _v5 = typeAnnotation.b;
				var updates = _v5.b;
				return A2(
					$elm$project_metadata_utils$Elm$Type$Record,
					A2($jfmengels$elm_review$Review$Rule$recordUpdateToDocsType, innerContext, updates),
					$elm$core$Maybe$Just(generic));
			default:
				var left = typeAnnotation.a;
				var right = typeAnnotation.b;
				return A2(
					$elm$project_metadata_utils$Elm$Type$Lambda,
					A2($jfmengels$elm_review$Review$Rule$syntaxTypeAnnotationToDocsType, innerContext, left),
					A2($jfmengels$elm_review$Review$Rule$syntaxTypeAnnotationToDocsType, innerContext, right));
		}
	});
var $jfmengels$elm_review$Review$Rule$convertTypeSignatureToDocsType = F2(
	function (innerContext, maybeSignature) {
		if (!maybeSignature.$) {
			var signature = maybeSignature.a;
			return A2(
				$jfmengels$elm_review$Review$Rule$syntaxTypeAnnotationToDocsType,
				innerContext,
				$stil4m$elm_syntax$Elm$Syntax$Node$value(signature).dG);
		} else {
			return $elm$project_metadata_utils$Elm$Type$Tuple(_List_Nil);
		}
	});
var $jfmengels$elm_review$Review$Rule$registerExposedValue = F3(
	function (_function, name, innerContext) {
		return _Utils_update(
			innerContext,
			{
				bq: A2(
					$elm$core$List$cons,
					{
						aZ: function () {
							var _v0 = _function.cg;
							if (!_v0.$) {
								var strNode = _v0.a;
								return $stil4m$elm_syntax$Elm$Syntax$Node$value(strNode);
							} else {
								return '';
							}
						}(),
						aW: name,
						cL: A2($jfmengels$elm_review$Review$Rule$convertTypeSignatureToDocsType, innerContext, _function.ez)
					},
					innerContext.bq)
			});
	});
var $jfmengels$elm_review$Review$Rule$registerIfExposed = F3(
	function (registerFn, name, innerContext) {
		return (innerContext.bL || A2($elm$core$Dict$member, name, innerContext.bK)) ? A2(registerFn, name, innerContext) : innerContext;
	});
var $jfmengels$elm_review$Review$Rule$scope_registerDeclaration = F2(
	function (declaration, innerContext) {
		var _v0 = $stil4m$elm_syntax$Elm$Syntax$Node$value(declaration);
		switch (_v0.$) {
			case 0:
				var _function = _v0.a;
				var nameNode = $stil4m$elm_syntax$Elm$Syntax$Node$value(_function.dZ).aW;
				return A3(
					$jfmengels$elm_review$Review$Rule$registerIfExposed,
					$jfmengels$elm_review$Review$Rule$registerExposedValue(_function),
					$stil4m$elm_syntax$Elm$Syntax$Node$value(nameNode),
					A2(
						$jfmengels$elm_review$Review$Rule$addToScope,
						{di: nameNode, aE: 0},
						innerContext));
			case 1:
				var alias = _v0.a;
				return A3(
					$jfmengels$elm_review$Review$Rule$registerIfExposed,
					$jfmengels$elm_review$Review$Rule$registerExposedTypeAlias,
					$stil4m$elm_syntax$Elm$Syntax$Node$value(alias.aW),
					function (ctx) {
						var _v1 = $stil4m$elm_syntax$Elm$Syntax$Node$value(alias.dG);
						if (_v1.$ === 4) {
							return A2(
								$jfmengels$elm_review$Review$Rule$addToScope,
								{di: alias.aW, aE: 0},
								ctx);
						} else {
							return ctx;
						}
					}(
						_Utils_update(
							innerContext,
							{
								aU: A2(
									$elm$core$Set$insert,
									$stil4m$elm_syntax$Elm$Syntax$Node$value(alias.aW),
									innerContext.aU)
							})));
			case 2:
				var name = _v0.a.aW;
				var constructors = _v0.a.dX;
				return A3(
					$jfmengels$elm_review$Review$Rule$registerIfExposed,
					$jfmengels$elm_review$Review$Rule$registerExposedCustomType(constructors),
					$stil4m$elm_syntax$Elm$Syntax$Node$value(name),
					A3(
						$elm$core$List$foldl,
						F2(
							function (constructor, innerContext_) {
								var constructorName = $stil4m$elm_syntax$Elm$Syntax$Node$value(constructor).aW;
								return A2(
									$jfmengels$elm_review$Review$Rule$addToScope,
									{di: constructorName, aE: 1},
									innerContext_);
							}),
						_Utils_update(
							innerContext,
							{
								aU: A2(
									$elm$core$Set$insert,
									$stil4m$elm_syntax$Elm$Syntax$Node$value(name),
									innerContext.aU)
							}),
						constructors));
			case 3:
				var signature = _v0.a;
				return A3(
					$jfmengels$elm_review$Review$Rule$registerIfExposed,
					$jfmengels$elm_review$Review$Rule$registerExposedValue(
						{
							cg: $elm$core$Maybe$Nothing,
							ez: $elm$core$Maybe$Just(
								A2(
									$stil4m$elm_syntax$Elm$Syntax$Node$Node,
									$stil4m$elm_syntax$Elm$Syntax$Node$range(declaration),
									signature))
						}),
					$stil4m$elm_syntax$Elm$Syntax$Node$value(signature.aW),
					A2(
						$jfmengels$elm_review$Review$Rule$addToScope,
						{di: signature.aW, aE: 5},
						innerContext));
			case 4:
				return innerContext;
			default:
				return innerContext;
		}
	});
var $jfmengels$elm_review$Review$Rule$scope_declarationListVisitor = F2(
	function (declarations, innerContext) {
		return A3($elm$core$List$foldl, $jfmengels$elm_review$Review$Rule$scope_registerDeclaration, innerContext, declarations);
	});
var $jfmengels$elm_review$Review$Rule$LetVariable = 3;
var $jfmengels$elm_review$Review$Rule$PatternVariable = 4;
var $jfmengels$elm_review$Review$Rule$scope_expressionEnterVisitor = F2(
	function (node, context) {
		var _v0 = $stil4m$elm_syntax$Elm$Syntax$Node$value(node);
		switch (_v0.$) {
			case 15:
				var declarations = _v0.a.cW;
				var newContext = A2(
					$jfmengels$elm_review$Review$Rule$updateScope,
					context,
					A3(
						$elm$core$List$foldl,
						F2(
							function (declaration, scopes) {
								var _v2 = $stil4m$elm_syntax$Elm$Syntax$Node$value(declaration);
								if (!_v2.$) {
									var _function = _v2.a;
									var nameNode = $stil4m$elm_syntax$Elm$Syntax$Node$value(_function.dZ).aW;
									return A3(
										$jfmengels$elm_review$Review$Rule$registerVariable,
										{di: nameNode, aE: 3},
										$stil4m$elm_syntax$Elm$Syntax$Node$value(nameNode),
										scopes);
								} else {
									return scopes;
								}
							}),
						A2($jfmengels$elm_review$Review$Rule$nonemptyList_cons, $jfmengels$elm_review$Review$Rule$emptyScope, context.l),
						declarations));
				var moduleNames = A2(
					$jfmengels$elm_review$Vendor$ListExtra$fastConcatMap,
					function (declaration) {
						var _v1 = $stil4m$elm_syntax$Elm$Syntax$Node$value(declaration);
						if (!_v1.$) {
							var _function = _v1.a;
							return _Utils_ap(
								A2(
									$elm$core$Maybe$withDefault,
									_List_Nil,
									A2(
										$elm$core$Maybe$map,
										A2(
											$elm$core$Basics$composeR,
											$stil4m$elm_syntax$Elm$Syntax$Node$value,
											A2(
												$elm$core$Basics$composeR,
												function ($) {
													return $.dG;
												},
												$jfmengels$elm_review$Review$Rule$collectModuleNamesFromTypeAnnotation(newContext))),
										_function.ez)),
								A2(
									$jfmengels$elm_review$Vendor$ListExtra$fastConcatMap,
									$jfmengels$elm_review$Review$Rule$collectModuleNamesFromPattern(newContext),
									$stil4m$elm_syntax$Elm$Syntax$Node$value(_function.dZ).cO));
						} else {
							var pattern = _v1.a;
							return A2($jfmengels$elm_review$Review$Rule$collectModuleNamesFromPattern, newContext, pattern);
						}
					},
					declarations);
				return _Utils_update(
					newContext,
					{
						j: A2($jfmengels$elm_review$Review$ModuleNameLookupTable$Internal$addMultiple, moduleNames, newContext.j)
					});
			case 16:
				var caseBlock = _v0.a;
				var moduleNames = A2(
					$jfmengels$elm_review$Vendor$ListExtra$fastConcatMap,
					function (_v4) {
						var pattern = _v4.a;
						return A2($jfmengels$elm_review$Review$Rule$collectModuleNamesFromPattern, context, pattern);
					},
					caseBlock.dS);
				var cases = A2(
					$elm$core$List$map,
					function (_v3) {
						var pattern = _v3.a;
						var expression = _v3.b;
						return _Utils_Tuple2(
							expression,
							$elm$core$Dict$fromList(
								A2(
									$elm$core$List$map,
									function (node_) {
										return _Utils_Tuple2(
											$stil4m$elm_syntax$Elm$Syntax$Node$value(node_),
											{di: node_, aE: 4});
									},
									$jfmengels$elm_review$Review$Rule$collectNamesFromPattern(pattern))));
					},
					caseBlock.dS);
				return _Utils_update(
					context,
					{
						j: A2($jfmengels$elm_review$Review$ModuleNameLookupTable$Internal$addMultiple, moduleNames, context.j),
						l: A2(
							$jfmengels$elm_review$Review$Rule$nonemptyList_mapHead,
							function (scope) {
								return _Utils_update(
									scope,
									{dS: cases});
							},
							context.l)
					});
			case 3:
				var moduleName = _v0.a;
				var name = _v0.b;
				return _Utils_update(
					context,
					{
						j: A3(
							$jfmengels$elm_review$Review$ModuleNameLookupTable$Internal$add,
							$stil4m$elm_syntax$Elm$Syntax$Node$range(node),
							A3($jfmengels$elm_review$Review$Rule$moduleNameForValue, context, name, moduleName),
							context.j)
					});
			case 22:
				var _v5 = _v0.a;
				var range = _v5.a;
				var name = _v5.b;
				return _Utils_update(
					context,
					{
						j: A3(
							$jfmengels$elm_review$Review$ModuleNameLookupTable$Internal$add,
							range,
							A3($jfmengels$elm_review$Review$Rule$moduleNameForValue, context, name, _List_Nil),
							context.j)
					});
			case 17:
				var args = _v0.a.dM;
				return _Utils_update(
					context,
					{
						j: A2(
							$jfmengels$elm_review$Review$ModuleNameLookupTable$Internal$addMultiple,
							A2(
								$jfmengels$elm_review$Vendor$ListExtra$fastConcatMap,
								$jfmengels$elm_review$Review$Rule$collectModuleNamesFromPattern(context),
								args),
							context.j)
					});
			case 5:
				var op = _v0.a;
				return _Utils_update(
					context,
					{
						j: A3(
							$jfmengels$elm_review$Review$ModuleNameLookupTable$Internal$add,
							$stil4m$elm_syntax$Elm$Syntax$Node$range(node),
							A3($jfmengels$elm_review$Review$Rule$moduleNameForValue, context, op, _List_Nil),
							context.j)
					});
			case 2:
				var op = _v0.a;
				return _Utils_update(
					context,
					{
						j: A3(
							$jfmengels$elm_review$Review$ModuleNameLookupTable$Internal$add,
							$stil4m$elm_syntax$Elm$Syntax$Node$range(node),
							A3($jfmengels$elm_review$Review$Rule$moduleNameForValue, context, op, _List_Nil),
							context.j)
					});
			default:
				return context;
		}
	});
var $jfmengels$elm_review$Review$Rule$scope_importVisitor = F2(
	function (_v0, innerContext) {
		var import_ = _v0.b;
		return A2(
			$jfmengels$elm_review$Review$Rule$registerImportExposed,
			import_,
			A2($jfmengels$elm_review$Review$Rule$registerImportAlias, import_, innerContext));
	});
var $jfmengels$elm_review$Review$Rule$exposedElements = function (nodes) {
	return $elm$core$Dict$fromList(
		A2(
			$elm$core$List$filterMap,
			function (node) {
				var _v0 = $stil4m$elm_syntax$Elm$Syntax$Node$value(node);
				switch (_v0.$) {
					case 1:
						var name = _v0.a;
						return $elm$core$Maybe$Just(
							_Utils_Tuple2(
								name,
								$stil4m$elm_syntax$Elm$Syntax$Node$range(node)));
					case 2:
						var name = _v0.a;
						return $elm$core$Maybe$Just(
							_Utils_Tuple2(
								name,
								$stil4m$elm_syntax$Elm$Syntax$Node$range(node)));
					case 3:
						var name = _v0.a.aW;
						return $elm$core$Maybe$Just(
							_Utils_Tuple2(
								name,
								$stil4m$elm_syntax$Elm$Syntax$Node$range(node)));
					default:
						return $elm$core$Maybe$Nothing;
				}
			},
			nodes));
};
var $jfmengels$elm_review$Review$Rule$scope_moduleDefinitionVisitor = F2(
	function (node, innerContext) {
		var _v0 = $stil4m$elm_syntax$Elm$Syntax$Module$exposingList(
			$stil4m$elm_syntax$Elm$Syntax$Node$value(node));
		if (!_v0.$) {
			return _Utils_update(
				innerContext,
				{bL: true});
		} else {
			var list = _v0.a;
			return _Utils_update(
				innerContext,
				{
					bK: $jfmengels$elm_review$Review$Rule$exposedElements(list)
				});
		}
	});
var $jfmengels$elm_review$Review$Rule$scope_pairWithNoErrors = F3(
	function (fn, visited, context) {
		return _Utils_Tuple2(
			_List_Nil,
			A2(fn, visited, context));
	});
var $jfmengels$elm_review$Review$Rule$nonemptyList_head = function (_v0) {
	var x = _v0.a;
	return x;
};
var $jfmengels$elm_review$Review$Rule$scope_popScopeEnter = F2(
	function (node, context) {
		var currentScope = $jfmengels$elm_review$Review$Rule$nonemptyList_head(context.l);
		var caseExpression = A2(
			$jfmengels$elm_review$Review$Rule$findInList,
			function (_v2) {
				var expressionNode = _v2.a;
				return _Utils_eq(node, expressionNode);
			},
			currentScope.dS);
		if (caseExpression.$ === 1) {
			return context;
		} else {
			var _v1 = caseExpression.a;
			var names = _v1.b;
			return _Utils_update(
				context,
				{
					l: A2(
						$jfmengels$elm_review$Review$Rule$nonemptyList_cons,
						_Utils_update(
							$jfmengels$elm_review$Review$Rule$emptyScope,
							{bF: node, aX: names}),
						context.l)
				});
		}
	});
var $jfmengels$elm_review$Review$Rule$scope_popScopeExit = F2(
	function (node, context) {
		var currentScope = $jfmengels$elm_review$Review$Rule$nonemptyList_head(context.l);
		return _Utils_eq(node, currentScope.bF) ? _Utils_update(
			context,
			{
				l: $jfmengels$elm_review$Review$Rule$nonemptyList_pop(context.l)
			}) : context;
	});
var $jfmengels$elm_review$Review$Rule$withDeclarationExitVisitor = F2(
	function (visitor, _v0) {
		var schema = _v0;
		return _Utils_update(
			schema,
			{
				T: A2($elm$core$List$cons, visitor, schema.T)
			});
	});
var $jfmengels$elm_review$Review$Rule$scope_moduleVisitor = function (schema) {
	return A2(
		$jfmengels$elm_review$Review$Rule$withExpressionExitVisitor,
		F2(
			function (visitedElement, context) {
				return _Utils_Tuple2(
					_List_Nil,
					A2(
						$jfmengels$elm_review$Review$Rule$expressionExitVisitor,
						visitedElement,
						A2($jfmengels$elm_review$Review$Rule$scope_popScopeExit, visitedElement, context)));
			}),
		A2(
			$jfmengels$elm_review$Review$Rule$withExpressionEnterVisitor,
			F2(
				function (visitedElement, context) {
					return _Utils_Tuple2(
						_List_Nil,
						A2(
							$jfmengels$elm_review$Review$Rule$scope_expressionEnterVisitor,
							visitedElement,
							A2($jfmengels$elm_review$Review$Rule$scope_popScopeEnter, visitedElement, context)));
				}),
			A2(
				$jfmengels$elm_review$Review$Rule$withDeclarationExitVisitor,
				$jfmengels$elm_review$Review$Rule$scope_pairWithNoErrors($jfmengels$elm_review$Review$Rule$scope_declarationExitVisitor),
				A2(
					$jfmengels$elm_review$Review$Rule$withDeclarationEnterVisitor,
					$jfmengels$elm_review$Review$Rule$scope_pairWithNoErrors($jfmengels$elm_review$Review$Rule$scope_declarationEnterVisitor),
					A2(
						$jfmengels$elm_review$Review$Rule$withDeclarationListVisitor,
						$jfmengels$elm_review$Review$Rule$scope_pairWithNoErrors($jfmengels$elm_review$Review$Rule$scope_declarationListVisitor),
						A2(
							$jfmengels$elm_review$Review$Rule$withImportVisitor,
							$jfmengels$elm_review$Review$Rule$scope_pairWithNoErrors($jfmengels$elm_review$Review$Rule$scope_importVisitor),
							A2(
								$jfmengels$elm_review$Review$Rule$withModuleDefinitionVisitor,
								$jfmengels$elm_review$Review$Rule$scope_pairWithNoErrors($jfmengels$elm_review$Review$Rule$scope_moduleDefinitionVisitor),
								schema)))))));
};
var $jfmengels$elm_review$Review$Rule$withDataExtractor = F2(
	function (dataExtractor, _v0) {
		var schema = _v0;
		return _Utils_update(
			schema,
			{
				ap: $elm$core$Maybe$Just(dataExtractor)
			});
	});
var $jfmengels$elm_review$Review$Rule$moduleNameNodeFromMetadata = function (_v0) {
	var metadata = _v0;
	return metadata.b$;
};
var $jfmengels$elm_review$Review$Rule$withModuleKey = function (_v0) {
	var fn = _v0.a;
	var requestedData = _v0.b;
	return A2(
		$jfmengels$elm_review$Review$Rule$ContextCreator,
		function (data) {
			return A2(fn, data, data.bZ);
		},
		requestedData);
};
var $jfmengels$elm_review$Review$Rule$withModuleContext = F2(
	function (functions, _v0) {
		var schema = _v0;
		var moduleContextCreator = $jfmengels$elm_review$Review$Rule$withMetadata(
			$jfmengels$elm_review$Review$Rule$withModuleKey(
				$jfmengels$elm_review$Review$Rule$initContextCreator(
					F3(
						function (moduleKey, metadata, projectContext) {
							return A3(
								functions.cr,
								moduleKey,
								$jfmengels$elm_review$Review$Rule$moduleNameNodeFromMetadata(metadata),
								projectContext);
						}))));
		return _Utils_update(
			schema,
			{
				aL: $elm$core$Maybe$Just(
					{
						aj: functions.aj,
						aM: $jfmengels$elm_review$Review$Rule$withMetadata(
							$jfmengels$elm_review$Review$Rule$withModuleKey(
								$jfmengels$elm_review$Review$Rule$initContextCreator(
									F3(
										function (moduleKey, metadata, moduleContext) {
											return A3(
												functions.aM,
												moduleKey,
												$jfmengels$elm_review$Review$Rule$moduleNameNodeFromMetadata(metadata),
												moduleContext);
										}))))
					}),
				F: $elm$core$Maybe$Just(moduleContextCreator)
			});
	});
var $jfmengels$elm_review$Review$Rule$scopeRule = $jfmengels$elm_review$Review$Rule$fromProjectRuleSchemaToRunnableProjectVisitor(
	A2(
		$jfmengels$elm_review$Review$Rule$withDataExtractor,
		function (projectContext) {
			return projectContext.aV;
		},
		A2(
			$jfmengels$elm_review$Review$Rule$withModuleContext,
			{aj: $jfmengels$elm_review$Review$Rule$scope_foldProjectContexts, aM: $jfmengels$elm_review$Review$Rule$scope_fromModuleToProject, cr: $jfmengels$elm_review$Review$Rule$scope_fromProjectToModule},
			A2(
				$jfmengels$elm_review$Review$Rule$withModuleVisitor,
				$jfmengels$elm_review$Review$Rule$scope_moduleVisitor,
				A2(
					$jfmengels$elm_review$Review$Rule$withDependenciesProjectVisitor,
					$jfmengels$elm_review$Review$Rule$scope_pairWithNoErrors($jfmengels$elm_review$Review$Rule$scope_internalDependenciesVisitor),
					$jfmengels$elm_review$Review$Rule$withContextFromImportedModules(
						A2($jfmengels$elm_review$Review$Rule$newProjectRuleSchema, 'elm-review__SCOPE', $jfmengels$elm_review$Review$Rule$scope_initialProjectContext)))))));
var $jfmengels$elm_review$Review$Rule$runReview = F4(
	function (project, rules, maybeProjectData, nodeContexts) {
		var p = project;
		var scopeResult = function () {
			if ($jfmengels$elm_review$Review$Rule$needsToComputeScope(rules)) {
				var _v2 = A6(
					$jfmengels$elm_review$Review$Rule$runProjectVisitor,
					'DUMMY',
					$jfmengels$elm_review$Review$Rule$scopeRule,
					A2($elm$core$Maybe$map, $jfmengels$elm_review$Review$Rule$extractProjectData, maybeProjectData),
					$jfmengels$elm_review$Review$Exceptions$init,
					project,
					nodeContexts);
				var cache = _v2.cT;
				var extract = _v2.a0;
				return {
					a0: extract,
					bB: $elm$core$Maybe$Just(cache)
				};
			} else {
				return {a0: $elm$core$Maybe$Nothing, bB: $elm$core$Maybe$Nothing};
			}
		}();
		var moduleNameLookupTables = A2(
			$elm$core$Maybe$map,
			function (_v1) {
				var moduleNameLookupTables_ = _v1;
				return moduleNameLookupTables_;
			},
			scopeResult.a0);
		var projectWithLookupTables = _Utils_update(
			p,
			{ee: moduleNameLookupTables});
		var _v0 = A3($jfmengels$elm_review$Review$Rule$runRules, rules, projectWithLookupTables, nodeContexts);
		var errors = _v0.a;
		var newRules = _v0.b;
		return {
			at: A2($elm$core$List$map, $jfmengels$elm_review$Review$Rule$errorToReviewError, errors),
			bB: scopeResult.bB,
			bC: newRules
		};
	});
var $jfmengels$elm_review$Review$Rule$reviewV2 = F3(
	function (rules, maybeProjectData, project) {
		var _v0 = A2(
			$elm$core$Result$andThen,
			function (_v3) {
				return $jfmengels$elm_review$Review$Rule$getModulesSortedByImport(project);
			},
			A2(
				$elm$core$Result$andThen,
				function (_v2) {
					return $jfmengels$elm_review$Review$Rule$checkForDuplicateModules(project);
				},
				A2(
					$elm$core$Result$andThen,
					function (_v1) {
						return $jfmengels$elm_review$Review$Rule$checkForModulesThatFailedToParse(project);
					},
					$jfmengels$elm_review$Review$Rule$checkForConfigurationErrors(rules))));
		if (!_v0.$) {
			var nodeContexts = _v0.a;
			return A4($jfmengels$elm_review$Review$Rule$runReview, project, rules, maybeProjectData, nodeContexts);
		} else {
			var errors = _v0.a;
			return {at: errors, bB: maybeProjectData, bC: rules};
		}
	});
var $author$project$Elm$Review$Main$runReview = function (model) {
	var _v0 = A3($jfmengels$elm_review$Review$Rule$reviewV2, model.bC, model.bB, model.c);
	var errors = _v0.at;
	var rules = _v0.bC;
	var projectData = _v0.bB;
	return _Utils_update(
		model,
		{as: $author$project$Elm$Review$Main$NotAwaiting, bB: projectData, be: errors, bC: rules});
};
var $author$project$Elm$Review$Main$applyAllFixes = F2(
	function (failedFixesDict, model) {
		applyAllFixes:
		while (true) {
			var _v0 = A4(
				$author$project$Elm$Review$Main$findFix,
				failedFixesDict,
				model.bc,
				$author$project$Elm$Review$Main$fixableFilesInProject(model.c),
				model.be);
			if (!_v0.b.$) {
				var newFailedFixesDict = _v0.a;
				var file = _v0.b.a.cm;
				var error = _v0.b.a.ci;
				var fixedSource = _v0.b.a.aw;
				var remainingErrors = _v0.b.a.$7;
				var newProject = A2(
					$author$project$Elm$Review$Main$addUpdatedFileToProject,
					_Utils_update(
						file,
						{eA: fixedSource}),
					model.c);
				if (_Utils_cmp(
					$elm$core$List$length(
						$jfmengels$elm_review$Review$Project$modulesThatFailedToParse(newProject)),
					$elm$core$List$length(
						$jfmengels$elm_review$Review$Project$modulesThatFailedToParse(model.c))) > 0) {
					return $elm$core$Maybe$Nothing;
				} else {
					if (!$elm$core$List$isEmpty(
						A2($author$project$Elm$Review$Main$changesToElm, model.c, newProject))) {
						return $elm$core$Maybe$Just(
							{
								cl: newFailedFixesDict,
								cz: A4(
									$author$project$Elm$Review$Main$addFixedErrorForFile,
									file.es,
									error,
									remainingErrors,
									_Utils_update(
										model,
										{c: newProject}))
							});
					} else {
						var $temp$failedFixesDict = newFailedFixesDict,
							$temp$model = $author$project$Elm$Review$Main$runReview(
							A4(
								$author$project$Elm$Review$Main$addFixedErrorForFile,
								file.es,
								error,
								remainingErrors,
								_Utils_update(
									model,
									{c: newProject})));
						failedFixesDict = $temp$failedFixesDict;
						model = $temp$model;
						continue applyAllFixes;
					}
				}
			} else {
				var newFailedFixesDict = _v0.a;
				var _v1 = _v0.b;
				return $elm$core$Maybe$Just(
					{cl: newFailedFixesDict, cz: model});
			}
		}
	});
var $elm$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _v0) {
				stepState:
				while (true) {
					var list = _v0.a;
					var result = _v0.b;
					if (!list.b) {
						return _Utils_Tuple2(
							list,
							A3(rightStep, rKey, rValue, result));
					} else {
						var _v2 = list.a;
						var lKey = _v2.a;
						var lValue = _v2.b;
						var rest = list.b;
						if (_Utils_cmp(lKey, rKey) < 0) {
							var $temp$rKey = rKey,
								$temp$rValue = rValue,
								$temp$_v0 = _Utils_Tuple2(
								rest,
								A3(leftStep, lKey, lValue, result));
							rKey = $temp$rKey;
							rValue = $temp$rValue;
							_v0 = $temp$_v0;
							continue stepState;
						} else {
							if (_Utils_cmp(lKey, rKey) > 0) {
								return _Utils_Tuple2(
									list,
									A3(rightStep, rKey, rValue, result));
							} else {
								return _Utils_Tuple2(
									rest,
									A4(bothStep, lKey, lValue, rValue, result));
							}
						}
					}
				}
			});
		var _v3 = A3(
			$elm$core$Dict$foldl,
			stepState,
			_Utils_Tuple2(
				$elm$core$Dict$toList(leftDict),
				initialResult),
			rightDict);
		var leftovers = _v3.a;
		var intermediateResult = _v3.b;
		return A3(
			$elm$core$List$foldl,
			F2(
				function (_v4, result) {
					var k = _v4.a;
					var v = _v4.b;
					return A3(leftStep, k, v, result);
				}),
			intermediateResult,
			leftovers);
	});
var $author$project$Elm$Review$Main$diff = F2(
	function (before, after) {
		var beforeReadme = function () {
			var _v8 = $jfmengels$elm_review$Review$Project$readme(before);
			if (!_v8.$) {
				var readme = _v8.a;
				return _List_fromArray(
					[
						_Utils_Tuple2(
						readme.es,
						{es: readme.es, eA: readme.a_})
					]);
			} else {
				return _List_Nil;
			}
		}();
		var beforeElmJson = function () {
			var _v7 = $jfmengels$elm_review$Review$Project$elmJson(before);
			if (!_v7.$) {
				var readme = _v7.a;
				return _List_fromArray(
					[
						_Utils_Tuple2(
						readme.es,
						{es: readme.es, eA: readme.bb})
					]);
			} else {
				return _List_Nil;
			}
		}();
		var beforeModules = $elm$core$Dict$fromList(
			$elm$core$List$concat(
				_List_fromArray(
					[
						beforeReadme,
						beforeElmJson,
						A2(
						$elm$core$List$map,
						function (mod) {
							return _Utils_Tuple2(
								mod.es,
								{es: mod.es, eA: mod.eA});
						},
						$jfmengels$elm_review$Review$Project$modules(before))
					])));
		var afterReadme = function () {
			var _v6 = $jfmengels$elm_review$Review$Project$readme(after);
			if (!_v6.$) {
				var readme = _v6.a;
				return _List_fromArray(
					[
						_Utils_Tuple2(readme.es, readme.a_)
					]);
			} else {
				return _List_Nil;
			}
		}();
		var afterElmJson = function () {
			var _v5 = $jfmengels$elm_review$Review$Project$elmJson(after);
			if (!_v5.$) {
				var elmJson = _v5.a;
				return _List_fromArray(
					[
						_Utils_Tuple2(elmJson.es, elmJson.bb)
					]);
			} else {
				return _List_Nil;
			}
		}();
		var fixedSources = $elm$core$Dict$fromList(
			$elm$core$List$concat(
				_List_fromArray(
					[
						afterReadme,
						afterElmJson,
						A2(
						$elm$core$List$map,
						function (mod) {
							return _Utils_Tuple2(mod.es, mod.eA);
						},
						$jfmengels$elm_review$Review$Project$modules(after))
					])));
		return A6(
			$elm$core$Dict$merge,
			F3(
				function (_v0, _v1, acc) {
					return acc;
				}),
			F4(
				function (_v2, beforeModule, fixedSource, acc) {
					return (!_Utils_eq(beforeModule.eA, fixedSource)) ? A2(
						$elm$core$List$cons,
						{aw: fixedSource, es: beforeModule.es, eA: beforeModule.eA},
						acc) : acc;
				}),
			F3(
				function (_v3, _v4, acc) {
					return acc;
				}),
			beforeModules,
			fixedSources,
			_List_Nil);
	});
var $author$project$Elm$Review$Reporter$formatFileDiff = function (file) {
	return A2(
		$author$project$Elm$Review$Text$join,
		'\n\n',
		_List_fromArray(
			[
				_List_fromArray(
				[
					$author$project$Elm$Review$Text$inBlue(
					$author$project$Elm$Review$Text$from(
						A3(
							$elm$core$String$padLeft,
							80,
							'-',
							' ' + $author$project$Elm$Review$Reporter$filePath(file.es))))
				]),
				A2(
				$elm$core$List$cons,
				$author$project$Elm$Review$Text$from('Applied from the fixes for the following errors:'),
				A2(
					$elm$core$List$concatMap,
					function (error) {
						return A2(
							$elm$core$List$cons,
							$author$project$Elm$Review$Text$from('\n  '),
							A3($author$project$Elm$Review$Reporter$formatErrorTitle, $elm$core$Dict$empty, 1, error));
					},
					$elm$core$List$reverse(file.at))),
				A2($author$project$Elm$Review$Reporter$diff, file.eA, file.aw)
			]));
};
var $author$project$Elm$Review$Reporter$formatFileDiffs = function (changedFiles) {
	if (!changedFiles.b) {
		return _List_Nil;
	} else {
		if (!changedFiles.b.b) {
			var file = changedFiles.a;
			return $author$project$Elm$Review$Reporter$formatFileDiff(file);
		} else {
			var firstFile = changedFiles.a;
			var _v1 = changedFiles.b;
			var secondFile = _v1.a;
			var restOfFiles = _v1.b;
			return $elm$core$List$concat(
				_List_fromArray(
					[
						$author$project$Elm$Review$Reporter$formatFileDiff(firstFile),
						_List_fromArray(
						[
							$author$project$Elm$Review$Text$from('\n')
						]),
						A2($author$project$Elm$Review$Reporter$fileSeparator, firstFile.es, secondFile.es),
						$author$project$Elm$Review$Reporter$formatFileDiffs(
						A2($elm$core$List$cons, secondFile, restOfFiles))
					]));
		}
	}
};
var $elm$core$String$padRight = F3(
	function (n, _char, string) {
		return _Utils_ap(
			string,
			A2(
				$elm$core$String$repeat,
				n - $elm$core$String$length(string),
				$elm$core$String$fromChar(_char)));
	});
var $author$project$Elm$Review$Reporter$formatFixProposals = function (changedFiles) {
	var headerText = '-- ELM-REVIEW FIX-ALL PROPOSAL ';
	var fixAllHeader = $author$project$Elm$Review$Text$inBlue(
		$author$project$Elm$Review$Text$from(
			A3($elm$core$String$padRight, 80, '-', headerText)));
	var filesListing = A2(
		$elm$core$List$cons,
		$author$project$Elm$Review$Text$from('I found fixable errors for the following files:'),
		A2(
			$elm$core$List$concatMap,
			function (file) {
				return _List_fromArray(
					[
						$author$project$Elm$Review$Text$from('\n  '),
						$author$project$Elm$Review$Text$inYellow(
						$author$project$Elm$Review$Text$from(
							'- ' + $author$project$Elm$Review$Reporter$filePath(file.es)))
					]);
			},
			changedFiles));
	var body = A2(
		$author$project$Elm$Review$Text$join,
		'\n\n',
		_List_fromArray(
			[
				_List_fromArray(
				[fixAllHeader]),
				filesListing,
				_List_fromArray(
				[
					$author$project$Elm$Review$Text$from('Here is how the code would change if you applied each fix.')
				]),
				$author$project$Elm$Review$Reporter$formatFileDiffs(changedFiles)
			]));
	return A2(
		$elm$core$List$map,
		$author$project$Elm$Review$Text$toRecord,
		_Utils_ap(
			body,
			_List_fromArray(
				[
					$author$project$Elm$Review$Text$from('\n')
				])));
};
var $author$project$Elm$Review$Main$fixAll = function (model) {
	var _v0 = A2($author$project$Elm$Review$Main$applyAllFixes, $elm$core$Dict$empty, model);
	if (!_v0.$) {
		var failedFixesDict = _v0.a.cl;
		var newModel = _v0.a.cz;
		var _v1 = A2($author$project$Elm$Review$Main$diff, model.c, newModel.c);
		if (!_v1.b) {
			return A2($author$project$Elm$Review$Main$makeReport, failedFixesDict, newModel);
		} else {
			var diffs = _v1;
			var changedFiles = A2(
				$elm$core$List$map,
				function (_v2) {
					var path = _v2.es;
					var source = _v2.eA;
					var fixedSource = _v2.aw;
					return {
						at: A2(
							$elm$core$Maybe$withDefault,
							_List_Nil,
							A2($elm$core$Dict$get, path, newModel.av)),
						aw: fixedSource,
						es: (path === 'GLOBAL ERROR') ? $author$project$Elm$Review$Reporter$Global : $author$project$Elm$Review$Reporter$FilePath(path),
						eA: source
					};
				},
				diffs);
			var confirmationMessage = $author$project$Elm$Review$Main$encodeReport(
				$author$project$Elm$Review$Reporter$formatFixProposals(changedFiles));
			return _Utils_Tuple2(
				_Utils_update(
					newModel,
					{as: $author$project$Elm$Review$Main$AwaitingFixAll, co: newModel.c, c: model.c}),
				$author$project$Elm$Review$Main$askConfirmationToFix(
					$elm$json$Json$Encode$object(
						_List_fromArray(
							[
								_Utils_Tuple2('confirmationMessage', confirmationMessage),
								_Utils_Tuple2(
								'changedFiles',
								A2(
									$elm$json$Json$Encode$list,
									$author$project$Elm$Review$Main$encodeChangedFile,
									A2(
										$elm$core$List$map,
										function (file) {
											return {es: file.es, eA: file.aw};
										},
										changedFiles)))
							]))));
		}
	} else {
		return _Utils_Tuple2(
			model,
			$author$project$Elm$Review$Main$abort('Got an error while trying to fix all automatic fixes. One of them made the code invalid. I suggest fixing the errors manually, or using `--fix` but with a lot of precaution.'));
	}
};
var $author$project$Elm$Review$Progress$reset = function (_v0) {
	var console = _v0.b;
	return A2(
		$elm$core$Basics$always,
		A2($author$project$Elm$Review$Progress$Console, 0, console),
		A2(
			$elm$json$Json$Decode$decodeValue,
			A2(
				$elm$json$Json$Decode$field,
				'reset',
				$elm$json$Json$Decode$null(0)),
			console));
};
var $author$project$Elm$Review$Main$reportOrFix = function (model) {
	var _v0 = model.a1;
	switch (_v0) {
		case 0:
			return A2($author$project$Elm$Review$Main$makeReport, $elm$core$Dict$empty, model);
		case 1:
			return $author$project$Elm$Review$Main$fixOneByOne(model);
		default:
			var _v1 = $author$project$Elm$Review$Main$fixAll(model);
			var newModel = _v1.a;
			var cmd = _v1.b;
			return _Utils_Tuple2(
				_Utils_update(
					newModel,
					{
						ak: $author$project$Elm$Review$Progress$reset(newModel.ak)
					}),
				cmd);
	}
};
var $author$project$Elm$Review$Main$cacheFile = _Platform_outgoingPort('cacheFile', $elm$core$Basics$identity);
var $author$project$Elm$Review$Main$sendFileToBeCached = F2(
	function (project, source) {
		var _v0 = A2(
			$author$project$Elm$Review$Main$find,
			function (module_) {
				return _Utils_eq(module_.eA, source);
			},
			$jfmengels$elm_review$Review$Project$modules(project));
		if (!_v0.$) {
			var ast = _v0.a.dO;
			return $author$project$Elm$Review$Main$cacheFile(
				$elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'source',
							$elm$json$Json$Encode$string(source)),
							_Utils_Tuple2(
							'ast',
							$author$project$Elm$Review$AstCodec$encode(ast))
						])));
		} else {
			return $elm$core$Platform$Cmd$none;
		}
	});
var $author$project$Elm$Review$Main$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 0:
				var value = msg.a;
				var _v1 = A2($elm$json$Json$Decode$decodeValue, $author$project$Elm$Review$File$decode, value);
				if (!_v1.$) {
					var rawFile = _v1.a;
					var _v2 = rawFile.dO;
					if (_v2.$ === 1) {
						var project = A2(
							$jfmengels$elm_review$Review$Project$addModule,
							{es: rawFile.es, eA: rawFile.eA},
							model.c);
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{c: project}),
							$author$project$Elm$Review$Main$acknowledgeFileReceipt(
								$elm$json$Json$Encode$object(
									_List_fromArray(
										[
											_Utils_Tuple2(
											'path',
											$elm$json$Json$Encode$string(rawFile.es)),
											_Utils_Tuple2(
											'cacheRequest',
											A2($author$project$Elm$Review$Main$cacheFileRequest, project, rawFile.eA))
										]))));
					} else {
						var ast = _v2.a;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									c: A2(
										$jfmengels$elm_review$Review$Project$addParsedModule,
										{dO: ast, es: rawFile.es, eA: rawFile.eA},
										model.c)
								}),
							$author$project$Elm$Review$Main$acknowledgeFileReceipt(
								$elm$json$Json$Encode$object(
									_List_fromArray(
										[
											_Utils_Tuple2(
											'path',
											$elm$json$Json$Encode$string(rawFile.es)),
											_Utils_Tuple2('cacheRequest', $elm$json$Json$Encode$null)
										]))));
					}
				} else {
					var err = _v1.a;
					return _Utils_Tuple2(
						model,
						$author$project$Elm$Review$Main$abort(
							$elm$json$Json$Decode$errorToString(err)));
				}
			case 1:
				var path = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							c: A2($jfmengels$elm_review$Review$Project$removeModule, path, model.c)
						}),
					$elm$core$Platform$Cmd$none);
			case 2:
				var rawElmJson = msg.a;
				var _v3 = A2($elm$json$Json$Decode$decodeValue, $author$project$Elm$Review$Main$elmJsonDecoder, rawElmJson);
				if (!_v3.$) {
					var elmJson = _v3.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								c: A2($jfmengels$elm_review$Review$Project$addElmJson, elmJson, model.c)
							}),
						$elm$core$Platform$Cmd$none);
				} else {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				}
			case 3:
				var rawReadme = msg.a;
				var readmeDecoder = A3(
					$elm$json$Json$Decode$map2,
					F2(
						function (path, content) {
							return {a_: content, es: path};
						}),
					A2($elm$json$Json$Decode$field, 'path', $elm$json$Json$Decode$string),
					A2($elm$json$Json$Decode$field, 'content', $elm$json$Json$Decode$string));
				var _v4 = A2($elm$json$Json$Decode$decodeValue, readmeDecoder, rawReadme);
				if (!_v4.$) {
					var readme = _v4.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								c: A2($jfmengels$elm_review$Review$Project$addReadme, readme, model.c)
							}),
						$elm$core$Platform$Cmd$none);
				} else {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				}
			case 4:
				var json = msg.a;
				var dependencyDecoder = A4(
					$elm$json$Json$Decode$map3,
					$jfmengels$elm_review$Review$Project$Dependency$create,
					A2($elm$json$Json$Decode$field, 'name', $elm$json$Json$Decode$string),
					A2($elm$json$Json$Decode$field, 'elmJson', $elm$project_metadata_utils$Elm$Project$decoder),
					A2(
						$elm$json$Json$Decode$field,
						'docsJson',
						$elm$json$Json$Decode$list($elm$project_metadata_utils$Elm$Docs$decoder)));
				var dependenciesDecoder = model.a4 ? A2(
					$elm$json$Json$Decode$map,
					$elm$core$List$filterMap($elm$core$Basics$identity),
					$elm$json$Json$Decode$list(
						$elm$json$Json$Decode$oneOf(
							_List_fromArray(
								[
									A2($elm$json$Json$Decode$map, $elm$core$Maybe$Just, dependencyDecoder),
									$elm$json$Json$Decode$succeed($elm$core$Maybe$Nothing)
								])))) : $elm$json$Json$Decode$list(dependencyDecoder);
				var _v5 = A2($elm$json$Json$Decode$decodeValue, dependenciesDecoder, json);
				if (_v5.$ === 1) {
					var decodeError = _v5.a;
					return _Utils_Tuple2(
						model,
						A2(
							$elm$core$String$contains,
							'I need a valid module name like',
							$elm$json$Json$Decode$errorToString(decodeError)) ? $author$project$Elm$Review$Main$abortWithDetails(
							{
								al: 'I encountered an error when reading the dependencies of the project. It seems due to dependencies with modules containing `_` in their names. Unfortunately, this is an error I have no control over and I am waiting in one of the libraries I depend on. What I propose you do, is to re-run elm-review like this:\n\n    elm-review --ignore-problematic-dependencies\n\nThis will ignore the problematic dependencies, and can GIVE YOU INCORRECT RESULTS! This is a temporary measure.\n\nIf I am mistaken about the nature of problem, please open a bug report at https://github.com/jfmengels/node-elm-review/issues:\n\n' + $elm$json$Json$Decode$errorToString(decodeError),
								bD: 'FOUND PROBLEMATIC DEPENDENCIES'
							}) : $author$project$Elm$Review$Main$abortWithDetails(
							{
								al: 'I encountered an error when reading the dependencies of the project. I suggest opening a bug report at https://github.com/jfmengels/node-elm-review/issues.' + $elm$json$Json$Decode$errorToString(decodeError),
								bD: 'PROBLEM READING DEPENDENCIES'
							}));
				} else {
					var dependencies = _v5.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								c: A3(
									$elm$core$List$foldl,
									$jfmengels$elm_review$Review$Project$addDependency,
									$jfmengels$elm_review$Review$Project$removeDependencies(model.c),
									dependencies)
							}),
						$elm$core$Platform$Cmd$none);
				}
			case 5:
				var json = msg.a;
				var _v6 = A2(
					$elm$json$Json$Decode$decodeValue,
					$elm$json$Json$Decode$dict($elm$json$Json$Decode$string),
					json);
				if (_v6.$ === 1) {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				} else {
					var links = _v6.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{aT: links}),
						$elm$core$Platform$Cmd$none);
				}
			case 6:
				return $author$project$Elm$Review$Main$reportOrFix(
					$author$project$Elm$Review$Main$runReview(
						_Utils_update(
							model,
							{
								av: $elm$core$Dict$empty,
								c: $jfmengels$elm_review$Review$Project$precomputeModuleGraph(model.c)
							})));
			case 7:
				var confirmation = msg.a;
				var _v7 = A2($elm$json$Json$Decode$decodeValue, $author$project$Elm$Review$Main$confirmationDecoder, confirmation);
				if (!_v7.$) {
					if (!_v7.a.$) {
						var rawFiles = _v7.a.a;
						var newProject = A3($elm$core$List$foldl, $author$project$Elm$Review$Main$addUpdatedFileToProject, model.c, rawFiles);
						return (_Utils_cmp(
							$elm$core$List$length(
								$jfmengels$elm_review$Review$Project$modulesThatFailedToParse(newProject)),
							$elm$core$List$length(
								$jfmengels$elm_review$Review$Project$modulesThatFailedToParse(model.c))) > 0) ? _Utils_Tuple2(
							model,
							$author$project$Elm$Review$Main$abort(
								'One file among ' + (A2(
									$elm$core$String$join,
									', ',
									A2(
										$elm$core$List$map,
										function ($) {
											return $.es;
										},
										rawFiles)) + ' could not be read. An incorrect fix may have been introduced into one of these files...'))) : A2(
							$elm$core$Tuple$mapSecond,
							function (cmd) {
								return $elm$core$Platform$Cmd$batch(
									A2(
										$elm$core$List$cons,
										cmd,
										A2(
											$elm$core$List$map,
											A2(
												$elm$core$Basics$composeR,
												function ($) {
													return $.eA;
												},
												$author$project$Elm$Review$Main$sendFileToBeCached(newProject)),
											rawFiles)));
							},
							$author$project$Elm$Review$Main$reportOrFix(
								$author$project$Elm$Review$Main$runReview(
									_Utils_update(
										model,
										{bJ: true, av: $elm$core$Dict$empty, c: newProject}))));
					} else {
						var _v8 = _v7.a;
						var _v9 = model.as;
						switch (_v9.$) {
							case 1:
								var error = _v9.a;
								return $author$project$Elm$Review$Main$fixOneByOne(
									A2($author$project$Elm$Review$Main$refuseError, error, model));
							case 2:
								return A2(
									$author$project$Elm$Review$Main$makeReport,
									$elm$core$Dict$empty,
									$author$project$Elm$Review$Main$runReview(
										_Utils_update(
											model,
											{as: $author$project$Elm$Review$Main$NotAwaiting})));
							default:
								return $author$project$Elm$Review$Main$fixOneByOne(model);
						}
					}
				} else {
					var err = _v7.a;
					return _Utils_Tuple2(
						model,
						$author$project$Elm$Review$Main$abort(
							$elm$json$Json$Decode$errorToString(err)));
				}
			default:
				return _Utils_Tuple2(
					model,
					$author$project$Elm$Review$Main$fixConfirmationStatus(
						!_Utils_eq(model.as, $author$project$Elm$Review$Main$NotAwaiting)));
		}
	});
var $elm$core$Platform$worker = _Platform_worker;
var $author$project$Elm$Review$Main$main = $elm$core$Platform$worker(
	{
		d9: $author$project$Elm$Review$Main$init,
		eF: function (_v0) {
			return $author$project$Elm$Review$Main$subscriptions;
		},
		eL: $author$project$Elm$Review$Main$update
	});
_Platform_export({'Elm':{'Review':{'Main':{'init':$author$project$Elm$Review$Main$main($elm$json$Json$Decode$value)(0)}}}});}(this));