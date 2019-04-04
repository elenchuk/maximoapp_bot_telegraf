/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 31);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/assign");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/promise");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/inherits");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getIterator2 = __webpack_require__(12);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _toConsumableArray2 = __webpack_require__(36);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _stringify = __webpack_require__(7);

var _stringify2 = _interopRequireDefault(_stringify);

var _promise = __webpack_require__(3);

var _promise2 = _interopRequireDefault(_promise);

var _setImmediate2 = __webpack_require__(34);

var _setImmediate3 = _interopRequireDefault(_setImmediate2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TelegrafContext = __webpack_require__(10);

var Composer = function () {
  function Composer() {
    (0, _classCallCheck3.default)(this, Composer);

    for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
      fns[_key] = arguments[_key];
    }

    this.handler = Composer.compose(fns);
  }

  (0, _createClass3.default)(Composer, [{
    key: 'use',
    value: function use() {
      for (var _len2 = arguments.length, fns = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        fns[_key2] = arguments[_key2];
      }

      this.handler = Composer.compose([this.handler].concat(fns));
      return this;
    }
  }, {
    key: 'on',
    value: function on(updateTypes) {
      for (var _len3 = arguments.length, fns = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        fns[_key3 - 1] = arguments[_key3];
      }

      return this.use(Composer.mount.apply(Composer, [updateTypes].concat(fns)));
    }
  }, {
    key: 'hears',
    value: function hears(triggers) {
      for (var _len4 = arguments.length, fns = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        fns[_key4 - 1] = arguments[_key4];
      }

      return this.use(Composer.hears.apply(Composer, [triggers].concat(fns)));
    }
  }, {
    key: 'command',
    value: function command(commands) {
      for (var _len5 = arguments.length, fns = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
        fns[_key5 - 1] = arguments[_key5];
      }

      return this.use(Composer.command.apply(Composer, [commands].concat(fns)));
    }
  }, {
    key: 'action',
    value: function action(triggers) {
      for (var _len6 = arguments.length, fns = Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
        fns[_key6 - 1] = arguments[_key6];
      }

      return this.use(Composer.action.apply(Composer, [triggers].concat(fns)));
    }
  }, {
    key: 'inlineQuery',
    value: function inlineQuery(triggers) {
      for (var _len7 = arguments.length, fns = Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
        fns[_key7 - 1] = arguments[_key7];
      }

      return this.use(Composer.inlineQuery.apply(Composer, [triggers].concat(fns)));
    }
  }, {
    key: 'gameQuery',
    value: function gameQuery() {
      return this.use(Composer.gameQuery.apply(Composer, arguments));
    }
  }, {
    key: 'drop',
    value: function drop(predicate) {
      return this.use(Composer.drop(predicate));
    }
  }, {
    key: 'filter',
    value: function filter(predicate) {
      return this.use(Composer.filter(predicate));
    }
  }, {
    key: 'entity',
    value: function entity() {
      return this.use(Composer.entity.apply(Composer, arguments));
    }
  }, {
    key: 'email',
    value: function email() {
      return this.use(Composer.email.apply(Composer, arguments));
    }
  }, {
    key: 'url',
    value: function url() {
      return this.use(Composer.url.apply(Composer, arguments));
    }
  }, {
    key: 'textLink',
    value: function textLink() {
      return this.use(Composer.textLink.apply(Composer, arguments));
    }
  }, {
    key: 'textMention',
    value: function textMention() {
      return this.use(Composer.textMention.apply(Composer, arguments));
    }
  }, {
    key: 'mention',
    value: function mention() {
      return this.use(Composer.mention.apply(Composer, arguments));
    }
  }, {
    key: 'phone',
    value: function phone() {
      return this.use(Composer.phone.apply(Composer, arguments));
    }
  }, {
    key: 'hashtag',
    value: function hashtag() {
      return this.use(Composer.hashtag.apply(Composer, arguments));
    }
  }, {
    key: 'cashtag',
    value: function cashtag() {
      return this.use(Composer.cashtag.apply(Composer, arguments));
    }
  }, {
    key: 'start',
    value: function start() {
      for (var _len8 = arguments.length, fns = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        fns[_key8] = arguments[_key8];
      }

      return this.command.apply(this, ['start', Composer.tap(function (ctx) {
        ctx.startPayload = ctx.message.text.substring(7);
      })].concat(fns));
    }
  }, {
    key: 'help',
    value: function help() {
      for (var _len9 = arguments.length, fns = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        fns[_key9] = arguments[_key9];
      }

      return this.command.apply(this, ['help'].concat(fns));
    }
  }, {
    key: 'settings',
    value: function settings() {
      for (var _len10 = arguments.length, fns = Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
        fns[_key10] = arguments[_key10];
      }

      return this.command.apply(this, ['settings'].concat(fns));
    }
  }, {
    key: 'middleware',
    value: function middleware() {
      return this.handler;
    }
  }], [{
    key: 'reply',
    value: function reply() {
      for (var _len11 = arguments.length, args = Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
        args[_key11] = arguments[_key11];
      }

      return function (ctx) {
        return ctx.reply.apply(ctx, args);
      };
    }
  }, {
    key: 'fork',
    value: function fork(middleware) {
      return function (ctx, next) {
        (0, _setImmediate3.default)(Composer.unwrap(middleware), ctx, Composer.safePassThru());
        return next(ctx);
      };
    }
  }, {
    key: 'tap',
    value: function tap(middleware) {
      var handler = Composer.unwrap(middleware);
      return function (ctx, next) {
        return _promise2.default.resolve(handler(ctx, Composer.safePassThru())).then(function () {
          return next(ctx);
        });
      };
    }
  }, {
    key: 'passThru',
    value: function passThru() {
      return function (ctx, next) {
        return next(ctx);
      };
    }
  }, {
    key: 'safePassThru',
    value: function safePassThru() {
      return function (ctx, next) {
        return typeof next === 'function' ? next(ctx) : _promise2.default.resolve();
      };
    }
  }, {
    key: 'lazy',
    value: function lazy(factoryFn) {
      if (typeof factoryFn !== 'function') {
        throw new Error('Argument must be a function');
      }
      return function (ctx, next) {
        return _promise2.default.resolve(factoryFn(ctx)).then(function (middleware) {
          return Composer.unwrap(middleware)(ctx, next);
        });
      };
    }
  }, {
    key: 'log',
    value: function log() {
      var logFn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : console.log;

      return Composer.fork(function (ctx) {
        return logFn((0, _stringify2.default)(ctx.update, null, 2));
      });
    }
  }, {
    key: 'branch',
    value: function branch(predicate, trueMiddleware, falseMiddleware) {
      if (typeof predicate !== 'function') {
        return predicate ? trueMiddleware : falseMiddleware;
      }
      return Composer.lazy(function (ctx) {
        return _promise2.default.resolve(predicate(ctx)).then(function (value) {
          return value ? trueMiddleware : falseMiddleware;
        });
      });
    }
  }, {
    key: 'optional',
    value: function optional(predicate) {
      for (var _len12 = arguments.length, fns = Array(_len12 > 1 ? _len12 - 1 : 0), _key12 = 1; _key12 < _len12; _key12++) {
        fns[_key12 - 1] = arguments[_key12];
      }

      return Composer.branch(predicate, Composer.compose(fns), Composer.safePassThru());
    }
  }, {
    key: 'filter',
    value: function filter(predicate) {
      return Composer.branch(predicate, Composer.safePassThru(), function () {});
    }
  }, {
    key: 'drop',
    value: function drop(predicate) {
      return Composer.branch(predicate, function () {}, Composer.safePassThru());
    }
  }, {
    key: 'dispatch',
    value: function dispatch(routeFn, handlers) {
      return typeof routeFn === 'function' ? Composer.lazy(function (ctx) {
        return _promise2.default.resolve(routeFn(ctx)).then(function (value) {
          return handlers[value];
        });
      }) : handlers[routeFn];
    }
  }, {
    key: 'mount',
    value: function mount(updateType) {
      var updateTypes = normalizeTextArguments(updateType);
      var predicate = function predicate(ctx) {
        return updateTypes.includes(ctx.updateType) || updateTypes.some(function (type) {
          return ctx.updateSubTypes.includes(type);
        });
      };

      for (var _len13 = arguments.length, fns = Array(_len13 > 1 ? _len13 - 1 : 0), _key13 = 1; _key13 < _len13; _key13++) {
        fns[_key13 - 1] = arguments[_key13];
      }

      return Composer.optional.apply(Composer, [predicate].concat(fns));
    }
  }, {
    key: 'entity',
    value: function entity(predicate) {
      for (var _len14 = arguments.length, fns = Array(_len14 > 1 ? _len14 - 1 : 0), _key14 = 1; _key14 < _len14; _key14++) {
        fns[_key14 - 1] = arguments[_key14];
      }

      if (typeof predicate !== 'function') {
        var entityTypes = normalizeTextArguments(predicate);
        return Composer.entity.apply(Composer, [function (_ref) {
          var type = _ref.type;
          return entityTypes.includes(type);
        }].concat(fns));
      }
      return Composer.optional.apply(Composer, [function (ctx) {
        var message = ctx.message || ctx.channelPost;
        var entities = message && (message.entities || message.caption_entities);
        var text = message && (message.text || message.caption);
        return entities && entities.some(function (entity) {
          return predicate(entity, text.substring(entity.offset, entity.offset + entity.length), ctx);
        });
      }].concat(fns));
    }
  }, {
    key: 'entityText',
    value: function entityText(entityType, predicate) {
      for (var _len15 = arguments.length, fns = Array(_len15 > 2 ? _len15 - 2 : 0), _key15 = 2; _key15 < _len15; _key15++) {
        fns[_key15 - 2] = arguments[_key15];
      }

      if (fns.length === 0) {
        return Array.isArray(predicate) ? Composer.entity.apply(Composer, [entityType].concat((0, _toConsumableArray3.default)(predicate))) : Composer.entity(entityType, predicate);
      }
      var triggers = normalizeTriggers(predicate);
      return Composer.entity.apply(Composer, [function (_ref2, value, ctx) {
        var type = _ref2.type;

        if (type !== entityType) {
          return false;
        }
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = (0, _getIterator3.default)(triggers), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var trigger = _step.value;

            ctx.match = trigger(value, ctx);
            if (ctx.match) {
              return true;
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }].concat(fns));
    }
  }, {
    key: 'email',
    value: function email(_email) {
      for (var _len16 = arguments.length, fns = Array(_len16 > 1 ? _len16 - 1 : 0), _key16 = 1; _key16 < _len16; _key16++) {
        fns[_key16 - 1] = arguments[_key16];
      }

      return Composer.entityText.apply(Composer, ['email', _email].concat(fns));
    }
  }, {
    key: 'phone',
    value: function phone(number) {
      for (var _len17 = arguments.length, fns = Array(_len17 > 1 ? _len17 - 1 : 0), _key17 = 1; _key17 < _len17; _key17++) {
        fns[_key17 - 1] = arguments[_key17];
      }

      return Composer.entityText.apply(Composer, ['phone_number', number].concat(fns));
    }
  }, {
    key: 'url',
    value: function url(_url) {
      for (var _len18 = arguments.length, fns = Array(_len18 > 1 ? _len18 - 1 : 0), _key18 = 1; _key18 < _len18; _key18++) {
        fns[_key18 - 1] = arguments[_key18];
      }

      return Composer.entityText.apply(Composer, ['url', _url].concat(fns));
    }
  }, {
    key: 'textLink',
    value: function textLink(link) {
      for (var _len19 = arguments.length, fns = Array(_len19 > 1 ? _len19 - 1 : 0), _key19 = 1; _key19 < _len19; _key19++) {
        fns[_key19 - 1] = arguments[_key19];
      }

      return Composer.entityText.apply(Composer, ['text_link', link].concat(fns));
    }
  }, {
    key: 'textMention',
    value: function textMention(mention) {
      for (var _len20 = arguments.length, fns = Array(_len20 > 1 ? _len20 - 1 : 0), _key20 = 1; _key20 < _len20; _key20++) {
        fns[_key20 - 1] = arguments[_key20];
      }

      return Composer.entityText.apply(Composer, ['text_mention', mention].concat(fns));
    }
  }, {
    key: 'mention',
    value: function mention(_mention) {
      for (var _len21 = arguments.length, fns = Array(_len21 > 1 ? _len21 - 1 : 0), _key21 = 1; _key21 < _len21; _key21++) {
        fns[_key21 - 1] = arguments[_key21];
      }

      return Composer.entityText.apply(Composer, ['mention', normalizeTextArguments(_mention, '@')].concat(fns));
    }
  }, {
    key: 'hashtag',
    value: function hashtag(_hashtag) {
      for (var _len22 = arguments.length, fns = Array(_len22 > 1 ? _len22 - 1 : 0), _key22 = 1; _key22 < _len22; _key22++) {
        fns[_key22 - 1] = arguments[_key22];
      }

      return Composer.entityText.apply(Composer, ['hashtag', normalizeTextArguments(_hashtag, '#')].concat(fns));
    }
  }, {
    key: 'cashtag',
    value: function cashtag(_cashtag) {
      for (var _len23 = arguments.length, fns = Array(_len23 > 1 ? _len23 - 1 : 0), _key23 = 1; _key23 < _len23; _key23++) {
        fns[_key23 - 1] = arguments[_key23];
      }

      return Composer.entityText.apply(Composer, ['cashtag', normalizeTextArguments(_cashtag, '$')].concat(fns));
    }
  }, {
    key: 'match',
    value: function match(triggers) {
      for (var _len24 = arguments.length, fns = Array(_len24 > 1 ? _len24 - 1 : 0), _key24 = 1; _key24 < _len24; _key24++) {
        fns[_key24 - 1] = arguments[_key24];
      }

      return Composer.optional.apply(Composer, [function (ctx) {
        var text = ctx.message && (ctx.message.caption || ctx.message.text) || ctx.callbackQuery && ctx.callbackQuery.data || ctx.inlineQuery && ctx.inlineQuery.query;
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = (0, _getIterator3.default)(triggers), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var trigger = _step2.value;

            ctx.match = trigger(text, ctx);
            if (ctx.match) {
              return true;
            }
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }].concat(fns));
    }
  }, {
    key: 'hears',
    value: function hears(triggers) {
      for (var _len25 = arguments.length, fns = Array(_len25 > 1 ? _len25 - 1 : 0), _key25 = 1; _key25 < _len25; _key25++) {
        fns[_key25 - 1] = arguments[_key25];
      }

      return Composer.mount('text', Composer.match.apply(Composer, [normalizeTriggers(triggers)].concat(fns)));
    }
  }, {
    key: 'command',
    value: function command(_command) {
      for (var _len26 = arguments.length, fns = Array(_len26 > 1 ? _len26 - 1 : 0), _key26 = 1; _key26 < _len26; _key26++) {
        fns[_key26 - 1] = arguments[_key26];
      }

      if (fns.length === 0) {
        return Composer.entity(['bot_command'], _command);
      }
      var commands = normalizeTextArguments(_command, '/');
      return Composer.mount('text', Composer.lazy(function (ctx) {
        var groupCommands = ctx.me && (ctx.chat.type === 'group' || ctx.chat.type === 'supergroup') ? commands.map(function (command) {
          return command + '@' + ctx.me;
        }) : [];
        return Composer.entity.apply(Composer, [function (_ref3, value) {
          var offset = _ref3.offset,
              type = _ref3.type;
          return offset === 0 && type === 'bot_command' && (commands.includes(value) || groupCommands.includes(value));
        }].concat(fns));
      }));
    }
  }, {
    key: 'action',
    value: function action(triggers) {
      for (var _len27 = arguments.length, fns = Array(_len27 > 1 ? _len27 - 1 : 0), _key27 = 1; _key27 < _len27; _key27++) {
        fns[_key27 - 1] = arguments[_key27];
      }

      return Composer.mount('callback_query', Composer.match.apply(Composer, [normalizeTriggers(triggers)].concat(fns)));
    }
  }, {
    key: 'inlineQuery',
    value: function inlineQuery(triggers) {
      for (var _len28 = arguments.length, fns = Array(_len28 > 1 ? _len28 - 1 : 0), _key28 = 1; _key28 < _len28; _key28++) {
        fns[_key28 - 1] = arguments[_key28];
      }

      return Composer.mount('inline_query', Composer.match.apply(Composer, [normalizeTriggers(triggers)].concat(fns)));
    }
  }, {
    key: 'acl',
    value: function acl(userId) {
      for (var _len29 = arguments.length, fns = Array(_len29 > 1 ? _len29 - 1 : 0), _key29 = 1; _key29 < _len29; _key29++) {
        fns[_key29 - 1] = arguments[_key29];
      }

      if (typeof userId === 'function') {
        return Composer.optional.apply(Composer, [userId].concat(fns));
      }
      var allowed = Array.isArray(userId) ? userId : [userId];
      return Composer.optional.apply(Composer, [function (ctx) {
        return !ctx.from || allowed.includes(ctx.from.id);
      }].concat(fns));
    }
  }, {
    key: 'memberStatus',
    value: function memberStatus(status) {
      var statuses = Array.isArray(status) ? status : [status];

      for (var _len30 = arguments.length, fns = Array(_len30 > 1 ? _len30 - 1 : 0), _key30 = 1; _key30 < _len30; _key30++) {
        fns[_key30 - 1] = arguments[_key30];
      }

      return Composer.optional.apply(Composer, [function (ctx) {
        return ctx.message && ctx.getChatMember(ctx.message.from.id).then(function (member) {
          return member && statuses.includes(member.status);
        });
      }].concat(fns));
    }
  }, {
    key: 'admin',
    value: function admin() {
      for (var _len31 = arguments.length, fns = Array(_len31), _key31 = 0; _key31 < _len31; _key31++) {
        fns[_key31] = arguments[_key31];
      }

      return Composer.memberStatus.apply(Composer, [['administrator', 'creator']].concat(fns));
    }
  }, {
    key: 'creator',
    value: function creator() {
      for (var _len32 = arguments.length, fns = Array(_len32), _key32 = 0; _key32 < _len32; _key32++) {
        fns[_key32] = arguments[_key32];
      }

      return Composer.memberStatus.apply(Composer, ['creator'].concat(fns));
    }
  }, {
    key: 'chatType',
    value: function chatType(type) {
      var types = Array.isArray(type) ? type : [type];

      for (var _len33 = arguments.length, fns = Array(_len33 > 1 ? _len33 - 1 : 0), _key33 = 1; _key33 < _len33; _key33++) {
        fns[_key33 - 1] = arguments[_key33];
      }

      return Composer.optional.apply(Composer, [function (ctx) {
        return ctx.chat && types.includes(ctx.chat.type);
      }].concat(fns));
    }
  }, {
    key: 'privateChat',
    value: function privateChat() {
      for (var _len34 = arguments.length, fns = Array(_len34), _key34 = 0; _key34 < _len34; _key34++) {
        fns[_key34] = arguments[_key34];
      }

      return Composer.chatType.apply(Composer, ['private'].concat(fns));
    }
  }, {
    key: 'groupChat',
    value: function groupChat() {
      for (var _len35 = arguments.length, fns = Array(_len35), _key35 = 0; _key35 < _len35; _key35++) {
        fns[_key35] = arguments[_key35];
      }

      return Composer.chatType.apply(Composer, [['group', 'supergroup']].concat(fns));
    }
  }, {
    key: 'gameQuery',
    value: function gameQuery() {
      for (var _len36 = arguments.length, fns = Array(_len36), _key36 = 0; _key36 < _len36; _key36++) {
        fns[_key36] = arguments[_key36];
      }

      return Composer.mount('callback_query', Composer.optional.apply(Composer, [function (ctx) {
        return ctx.callbackQuery.game_short_name;
      }].concat(fns)));
    }
  }, {
    key: 'unwrap',
    value: function unwrap(handler) {
      return handler && typeof handler.middleware === 'function' ? handler.middleware() : handler;
    }
  }, {
    key: 'compose',
    value: function compose(middlewares) {
      if (!Array.isArray(middlewares)) {
        throw new Error('Middlewares must be an array');
      }
      if (middlewares.length === 0) {
        return Composer.safePassThru();
      }
      if (middlewares.length === 1) {
        return Composer.unwrap(middlewares[0]);
      }
      return function (ctx, next) {
        var index = -1;
        return execute(0, ctx);
        function execute(i, context) {
          if (!(context instanceof TelegrafContext)) {
            return _promise2.default.reject(new Error('next(ctx) called with invalid context'));
          }
          if (i <= index) {
            return _promise2.default.reject(new Error('next() called multiple times'));
          }
          index = i;
          var handler = Composer.unwrap(middlewares[i]) || next;
          if (!handler) {
            return _promise2.default.resolve();
          }
          try {
            return _promise2.default.resolve(handler(context, function () {
              var ctx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : context;
              return execute(i + 1, ctx);
            }));
          } catch (err) {
            return _promise2.default.reject(err);
          }
        }
      };
    }
  }]);
  return Composer;
}();

function normalizeTriggers(triggers) {
  if (!Array.isArray(triggers)) {
    triggers = [triggers];
  }
  return triggers.map(function (trigger) {
    if (!trigger) {
      throw new Error('Invalid trigger');
    }
    if (typeof trigger === 'function') {
      return trigger;
    }
    if (trigger instanceof RegExp) {
      return function (value) {
        trigger.lastIndex = 0;
        return trigger.exec(value || '');
      };
    }
    return function (value) {
      return trigger === value ? value : null;
    };
  });
}

function normalizeTextArguments(argument, prefix) {
  var args = Array.isArray(argument) ? argument : [argument];
  return args.filter(Boolean).map(function (arg) {
    return prefix && typeof arg === 'string' && !arg.startsWith(prefix) ? '' + prefix + arg : arg;
  });
}

module.exports = Composer;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _assign = __webpack_require__(2);

var _assign2 = _interopRequireDefault(_assign);

var _getOwnPropertyNames = __webpack_require__(33);

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UpdateTypes = ['callback_query', 'channel_post', 'chosen_inline_result', 'edited_channel_post', 'edited_message', 'inline_query', 'shipping_query', 'pre_checkout_query', 'message'];

var MessageSubTypes = ['voice', 'video_note', 'video', 'animation', 'venue', 'text', 'supergroup_chat_created', 'successful_payment', 'sticker', 'pinned_message', 'photo', 'new_chat_title', 'new_chat_photo', 'new_chat_members', 'migrate_to_chat_id', 'migrate_from_chat_id', 'location', 'left_chat_member', 'invoice', 'group_chat_created', 'game', 'document', 'delete_chat_photo', 'contact', 'channel_chat_created', 'audio', 'connected_website', 'passport_data'];

var TelegrafContext = function () {
  function TelegrafContext(update, telegram, options) {
    var _this = this;

    (0, _classCallCheck3.default)(this, TelegrafContext);

    this.tg = telegram;
    this.update = update;
    this.options = options;
    this.updateType = UpdateTypes.find(function (key) {
      return key in _this.update;
    });
    if (this.updateType === 'message' || this.options.channelMode && this.updateType === 'channel_post') {
      this.updateSubTypes = MessageSubTypes.filter(function (key) {
        return key in _this.update[_this.updateType];
      });
    } else {
      this.updateSubTypes = [];
    }
    (0, _getOwnPropertyNames2.default)(TelegrafContext.prototype).filter(function (key) {
      return key !== 'constructor' && typeof _this[key] === 'function';
    }).forEach(function (key) {
      return _this[key] = _this[key].bind(_this);
    });
  }

  (0, _createClass3.default)(TelegrafContext, [{
    key: 'assert',
    value: function assert(value, method) {
      if (!value) {
        throw new Error('Telegraf: "' + method + '" isn\'t available for "' + this.updateType + '::' + this.updateSubTypes + '"');
      }
    }
  }, {
    key: 'answerInlineQuery',
    value: function answerInlineQuery() {
      var _telegram;

      this.assert(this.inlineQuery, 'answerInlineQuery');

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return (_telegram = this.telegram).answerInlineQuery.apply(_telegram, [this.inlineQuery.id].concat(args));
    }
  }, {
    key: 'answerCallbackQuery',
    value: function answerCallbackQuery() {
      var _telegram2;

      this.assert(this.callbackQuery, 'answerCallbackQuery');

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return (_telegram2 = this.telegram).answerCallbackQuery.apply(_telegram2, [this.callbackQuery.id].concat(args));
    }
  }, {
    key: 'answerCbQuery',
    value: function answerCbQuery() {
      var _telegram3;

      this.assert(this.callbackQuery, 'answerCbQuery');

      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return (_telegram3 = this.telegram).answerCbQuery.apply(_telegram3, [this.callbackQuery.id].concat(args));
    }
  }, {
    key: 'answerGameQuery',
    value: function answerGameQuery() {
      var _telegram4;

      this.assert(this.callbackQuery, 'answerGameQuery');

      for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return (_telegram4 = this.telegram).answerGameQuery.apply(_telegram4, [this.callbackQuery.id].concat(args));
    }
  }, {
    key: 'answerShippingQuery',
    value: function answerShippingQuery() {
      var _telegram5;

      this.assert(this.shippingQuery, 'answerShippingQuery');

      for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      return (_telegram5 = this.telegram).answerShippingQuery.apply(_telegram5, [this.shippingQuery.id].concat(args));
    }
  }, {
    key: 'answerPreCheckoutQuery',
    value: function answerPreCheckoutQuery() {
      var _telegram6;

      this.assert(this.preCheckoutQuery, 'answerPreCheckoutQuery');

      for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      return (_telegram6 = this.telegram).answerPreCheckoutQuery.apply(_telegram6, [this.preCheckoutQuery.id].concat(args));
    }
  }, {
    key: 'editMessageText',
    value: function editMessageText(text, extra) {
      this.assert(this.callbackQuery, 'editMessageText');
      return this.callbackQuery.inline_message_id ? this.telegram.editMessageText(undefined, undefined, this.callbackQuery.inline_message_id, text, extra) : this.telegram.editMessageText(this.chat.id, this.callbackQuery.message.message_id, undefined, text, extra);
    }
  }, {
    key: 'editMessageCaption',
    value: function editMessageCaption(caption, extra) {
      this.assert(this.callbackQuery, 'editMessageCaption');
      return this.callbackQuery.inline_message_id ? this.telegram.editMessageCaption(undefined, undefined, this.callbackQuery.inline_message_id, caption, extra) : this.telegram.editMessageCaption(this.chat.id, this.callbackQuery.message.message_id, undefined, caption, extra);
    }
  }, {
    key: 'editMessageMedia',
    value: function editMessageMedia(media, extra) {
      this.assert(this.callbackQuery, 'editMessageMedia');
      return this.callbackQuery.inline_message_id ? this.telegram.editMessageMedia(undefined, undefined, this.callbackQuery.inline_message_id, media, extra) : this.telegram.editMessageMedia(this.chat.id, this.callbackQuery.message.message_id, undefined, media, extra);
    }
  }, {
    key: 'editMessageReplyMarkup',
    value: function editMessageReplyMarkup(markup) {
      this.assert(this.callbackQuery, 'editMessageReplyMarkup');
      return this.callbackQuery.inline_message_id ? this.telegram.editMessageReplyMarkup(undefined, undefined, this.callbackQuery.inline_message_id, markup) : this.telegram.editMessageReplyMarkup(this.chat.id, this.callbackQuery.message.message_id, undefined, markup);
    }
  }, {
    key: 'editMessageLiveLocation',
    value: function editMessageLiveLocation(latitude, longitude, markup) {
      this.assert(this.callbackQuery, 'editMessageLiveLocation');
      return this.callbackQuery.inline_message_id ? this.telegram.editMessageLiveLocation(latitude, longitude, undefined, undefined, this.callbackQuery.inline_message_id, markup) : this.telegram.editMessageLiveLocation(latitude, longitude, this.chat.id, this.callbackQuery.message.message_id, undefined, markup);
    }
  }, {
    key: 'stopMessageLiveLocation',
    value: function stopMessageLiveLocation(markup) {
      this.assert(this.callbackQuery, 'stopMessageLiveLocation');
      return this.callbackQuery.inline_message_id ? this.telegram.stopMessageLiveLocation(undefined, undefined, this.callbackQuery.inline_message_id, markup) : this.telegram.stopMessageLiveLocation(this.chat.id, this.callbackQuery.message.message_id, undefined, markup);
    }
  }, {
    key: 'reply',
    value: function reply() {
      var _telegram7;

      this.assert(this.chat, 'reply');

      for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      return (_telegram7 = this.telegram).sendMessage.apply(_telegram7, [this.chat.id].concat(args));
    }
  }, {
    key: 'getChat',
    value: function getChat() {
      var _telegram8;

      this.assert(this.chat, 'getChat');

      for (var _len8 = arguments.length, args = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        args[_key8] = arguments[_key8];
      }

      return (_telegram8 = this.telegram).getChat.apply(_telegram8, [this.chat.id].concat(args));
    }
  }, {
    key: 'exportChatInviteLink',
    value: function exportChatInviteLink() {
      var _telegram9;

      this.assert(this.chat, 'exportChatInviteLink');

      for (var _len9 = arguments.length, args = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        args[_key9] = arguments[_key9];
      }

      return (_telegram9 = this.telegram).exportChatInviteLink.apply(_telegram9, [this.chat.id].concat(args));
    }
  }, {
    key: 'kickChatMember',
    value: function kickChatMember() {
      var _telegram10;

      this.assert(this.chat, 'kickChatMember');

      for (var _len10 = arguments.length, args = Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
        args[_key10] = arguments[_key10];
      }

      return (_telegram10 = this.telegram).kickChatMember.apply(_telegram10, [this.chat.id].concat(args));
    }
  }, {
    key: 'restrictChatMember',
    value: function restrictChatMember() {
      var _telegram11;

      this.assert(this.chat, 'restrictChatMember');

      for (var _len11 = arguments.length, args = Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
        args[_key11] = arguments[_key11];
      }

      return (_telegram11 = this.telegram).restrictChatMember.apply(_telegram11, [this.chat.id].concat(args));
    }
  }, {
    key: 'promoteChatMember',
    value: function promoteChatMember() {
      var _telegram12;

      this.assert(this.chat, 'promoteChatMember');

      for (var _len12 = arguments.length, args = Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
        args[_key12] = arguments[_key12];
      }

      return (_telegram12 = this.telegram).promoteChatMember.apply(_telegram12, [this.chat.id].concat(args));
    }
  }, {
    key: 'setChatPhoto',
    value: function setChatPhoto() {
      var _telegram13;

      this.assert(this.chat, 'setChatPhoto');

      for (var _len13 = arguments.length, args = Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
        args[_key13] = arguments[_key13];
      }

      return (_telegram13 = this.telegram).setChatPhoto.apply(_telegram13, [this.chat.id].concat(args));
    }
  }, {
    key: 'deleteChatPhoto',
    value: function deleteChatPhoto() {
      var _telegram14;

      this.assert(this.chat, 'deleteChatPhoto');

      for (var _len14 = arguments.length, args = Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
        args[_key14] = arguments[_key14];
      }

      return (_telegram14 = this.telegram).deleteChatPhoto.apply(_telegram14, [this.chat.id].concat(args));
    }
  }, {
    key: 'setChatTitle',
    value: function setChatTitle() {
      var _telegram15;

      this.assert(this.chat, 'setChatTitle');

      for (var _len15 = arguments.length, args = Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {
        args[_key15] = arguments[_key15];
      }

      return (_telegram15 = this.telegram).setChatTitle.apply(_telegram15, [this.chat.id].concat(args));
    }
  }, {
    key: 'setChatDescription',
    value: function setChatDescription() {
      var _telegram16;

      this.assert(this.chat, 'setChatDescription');

      for (var _len16 = arguments.length, args = Array(_len16), _key16 = 0; _key16 < _len16; _key16++) {
        args[_key16] = arguments[_key16];
      }

      return (_telegram16 = this.telegram).setChatDescription.apply(_telegram16, [this.chat.id].concat(args));
    }
  }, {
    key: 'pinChatMessage',
    value: function pinChatMessage() {
      var _telegram17;

      this.assert(this.chat, 'pinChatMessage');

      for (var _len17 = arguments.length, args = Array(_len17), _key17 = 0; _key17 < _len17; _key17++) {
        args[_key17] = arguments[_key17];
      }

      return (_telegram17 = this.telegram).pinChatMessage.apply(_telegram17, [this.chat.id].concat(args));
    }
  }, {
    key: 'unpinChatMessage',
    value: function unpinChatMessage() {
      var _telegram18;

      this.assert(this.chat, 'unpinChatMessage');

      for (var _len18 = arguments.length, args = Array(_len18), _key18 = 0; _key18 < _len18; _key18++) {
        args[_key18] = arguments[_key18];
      }

      return (_telegram18 = this.telegram).unpinChatMessage.apply(_telegram18, [this.chat.id].concat(args));
    }
  }, {
    key: 'leaveChat',
    value: function leaveChat() {
      var _telegram19;

      this.assert(this.chat, 'leaveChat');

      for (var _len19 = arguments.length, args = Array(_len19), _key19 = 0; _key19 < _len19; _key19++) {
        args[_key19] = arguments[_key19];
      }

      return (_telegram19 = this.telegram).leaveChat.apply(_telegram19, [this.chat.id].concat(args));
    }
  }, {
    key: 'getChatAdministrators',
    value: function getChatAdministrators() {
      var _telegram20;

      this.assert(this.chat, 'getChatAdministrators');

      for (var _len20 = arguments.length, args = Array(_len20), _key20 = 0; _key20 < _len20; _key20++) {
        args[_key20] = arguments[_key20];
      }

      return (_telegram20 = this.telegram).getChatAdministrators.apply(_telegram20, [this.chat.id].concat(args));
    }
  }, {
    key: 'getChatMember',
    value: function getChatMember() {
      var _telegram21;

      this.assert(this.chat, 'getChatMember');

      for (var _len21 = arguments.length, args = Array(_len21), _key21 = 0; _key21 < _len21; _key21++) {
        args[_key21] = arguments[_key21];
      }

      return (_telegram21 = this.telegram).getChatMember.apply(_telegram21, [this.chat.id].concat(args));
    }
  }, {
    key: 'getChatMembersCount',
    value: function getChatMembersCount() {
      var _telegram22;

      this.assert(this.chat, 'getChatMembersCount');

      for (var _len22 = arguments.length, args = Array(_len22), _key22 = 0; _key22 < _len22; _key22++) {
        args[_key22] = arguments[_key22];
      }

      return (_telegram22 = this.telegram).getChatMembersCount.apply(_telegram22, [this.chat.id].concat(args));
    }
  }, {
    key: 'replyWithPhoto',
    value: function replyWithPhoto() {
      var _telegram23;

      this.assert(this.chat, 'replyWithPhoto');

      for (var _len23 = arguments.length, args = Array(_len23), _key23 = 0; _key23 < _len23; _key23++) {
        args[_key23] = arguments[_key23];
      }

      return (_telegram23 = this.telegram).sendPhoto.apply(_telegram23, [this.chat.id].concat(args));
    }
  }, {
    key: 'replyWithMediaGroup',
    value: function replyWithMediaGroup() {
      var _telegram24;

      this.assert(this.chat, 'replyWithMediaGroup');

      for (var _len24 = arguments.length, args = Array(_len24), _key24 = 0; _key24 < _len24; _key24++) {
        args[_key24] = arguments[_key24];
      }

      return (_telegram24 = this.telegram).sendMediaGroup.apply(_telegram24, [this.chat.id].concat(args));
    }
  }, {
    key: 'replyWithAudio',
    value: function replyWithAudio() {
      var _telegram25;

      this.assert(this.chat, 'replyWithAudio');

      for (var _len25 = arguments.length, args = Array(_len25), _key25 = 0; _key25 < _len25; _key25++) {
        args[_key25] = arguments[_key25];
      }

      return (_telegram25 = this.telegram).sendAudio.apply(_telegram25, [this.chat.id].concat(args));
    }
  }, {
    key: 'replyWithDocument',
    value: function replyWithDocument() {
      var _telegram26;

      this.assert(this.chat, 'replyWithDocument');

      for (var _len26 = arguments.length, args = Array(_len26), _key26 = 0; _key26 < _len26; _key26++) {
        args[_key26] = arguments[_key26];
      }

      return (_telegram26 = this.telegram).sendDocument.apply(_telegram26, [this.chat.id].concat(args));
    }
  }, {
    key: 'replyWithSticker',
    value: function replyWithSticker() {
      var _telegram27;

      this.assert(this.chat, 'replyWithSticker');

      for (var _len27 = arguments.length, args = Array(_len27), _key27 = 0; _key27 < _len27; _key27++) {
        args[_key27] = arguments[_key27];
      }

      return (_telegram27 = this.telegram).sendSticker.apply(_telegram27, [this.chat.id].concat(args));
    }
  }, {
    key: 'replyWithVideo',
    value: function replyWithVideo() {
      var _telegram28;

      this.assert(this.chat, 'replyWithVideo');

      for (var _len28 = arguments.length, args = Array(_len28), _key28 = 0; _key28 < _len28; _key28++) {
        args[_key28] = arguments[_key28];
      }

      return (_telegram28 = this.telegram).sendVideo.apply(_telegram28, [this.chat.id].concat(args));
    }
  }, {
    key: 'replyWithAnimation',
    value: function replyWithAnimation() {
      var _telegram29;

      this.assert(this.chat, 'replyWithAnimation');

      for (var _len29 = arguments.length, args = Array(_len29), _key29 = 0; _key29 < _len29; _key29++) {
        args[_key29] = arguments[_key29];
      }

      return (_telegram29 = this.telegram).sendAnimation.apply(_telegram29, [this.chat.id].concat(args));
    }
  }, {
    key: 'replyWithVideoNote',
    value: function replyWithVideoNote() {
      var _telegram30;

      this.assert(this.chat, 'replyWithVideoNote');

      for (var _len30 = arguments.length, args = Array(_len30), _key30 = 0; _key30 < _len30; _key30++) {
        args[_key30] = arguments[_key30];
      }

      return (_telegram30 = this.telegram).sendVideoNote.apply(_telegram30, [this.chat.id].concat(args));
    }
  }, {
    key: 'replyWithInvoice',
    value: function replyWithInvoice() {
      var _telegram31;

      this.assert(this.chat, 'replyWithInvoice');

      for (var _len31 = arguments.length, args = Array(_len31), _key31 = 0; _key31 < _len31; _key31++) {
        args[_key31] = arguments[_key31];
      }

      return (_telegram31 = this.telegram).sendInvoice.apply(_telegram31, [this.chat.id].concat(args));
    }
  }, {
    key: 'replyWithGame',
    value: function replyWithGame() {
      var _telegram32;

      this.assert(this.chat, 'replyWithGame');

      for (var _len32 = arguments.length, args = Array(_len32), _key32 = 0; _key32 < _len32; _key32++) {
        args[_key32] = arguments[_key32];
      }

      return (_telegram32 = this.telegram).sendGame.apply(_telegram32, [this.chat.id].concat(args));
    }
  }, {
    key: 'replyWithVoice',
    value: function replyWithVoice() {
      var _telegram33;

      this.assert(this.chat, 'replyWithVoice');

      for (var _len33 = arguments.length, args = Array(_len33), _key33 = 0; _key33 < _len33; _key33++) {
        args[_key33] = arguments[_key33];
      }

      return (_telegram33 = this.telegram).sendVoice.apply(_telegram33, [this.chat.id].concat(args));
    }
  }, {
    key: 'replyWithChatAction',
    value: function replyWithChatAction() {
      var _telegram34;

      this.assert(this.chat, 'replyWithChatAction');

      for (var _len34 = arguments.length, args = Array(_len34), _key34 = 0; _key34 < _len34; _key34++) {
        args[_key34] = arguments[_key34];
      }

      return (_telegram34 = this.telegram).sendChatAction.apply(_telegram34, [this.chat.id].concat(args));
    }
  }, {
    key: 'replyWithLocation',
    value: function replyWithLocation() {
      var _telegram35;

      this.assert(this.chat, 'replyWithLocation');

      for (var _len35 = arguments.length, args = Array(_len35), _key35 = 0; _key35 < _len35; _key35++) {
        args[_key35] = arguments[_key35];
      }

      return (_telegram35 = this.telegram).sendLocation.apply(_telegram35, [this.chat.id].concat(args));
    }
  }, {
    key: 'replyWithVenue',
    value: function replyWithVenue() {
      var _telegram36;

      this.assert(this.chat, 'replyWithVenue');

      for (var _len36 = arguments.length, args = Array(_len36), _key36 = 0; _key36 < _len36; _key36++) {
        args[_key36] = arguments[_key36];
      }

      return (_telegram36 = this.telegram).sendVenue.apply(_telegram36, [this.chat.id].concat(args));
    }
  }, {
    key: 'replyWithContact',
    value: function replyWithContact() {
      var _telegram37;

      this.assert(this.from, 'replyWithContact');

      for (var _len37 = arguments.length, args = Array(_len37), _key37 = 0; _key37 < _len37; _key37++) {
        args[_key37] = arguments[_key37];
      }

      return (_telegram37 = this.telegram).sendContact.apply(_telegram37, [this.chat.id].concat(args));
    }
  }, {
    key: 'getStickerSet',
    value: function getStickerSet(setName) {
      return this.telegram.getStickerSet(setName);
    }
  }, {
    key: 'setChatStickerSet',
    value: function setChatStickerSet(setName) {
      this.assert(this.chat, 'setChatStickerSet');
      return this.telegram.setChatStickerSet(this.chat.id, setName);
    }
  }, {
    key: 'deleteChatStickerSet',
    value: function deleteChatStickerSet() {
      this.assert(this.chat, 'deleteChatStickerSet');
      return this.telegram.deleteChatStickerSet(this.chat.id);
    }
  }, {
    key: 'setStickerPositionInSet',
    value: function setStickerPositionInSet(sticker, position) {
      return this.telegram.setStickerPositionInSet(sticker, position);
    }
  }, {
    key: 'deleteStickerFromSet',
    value: function deleteStickerFromSet(sticker) {
      return this.telegram.deleteStickerFromSet(sticker);
    }
  }, {
    key: 'uploadStickerFile',
    value: function uploadStickerFile() {
      var _telegram38;

      this.assert(this.from, 'uploadStickerFile');

      for (var _len38 = arguments.length, args = Array(_len38), _key38 = 0; _key38 < _len38; _key38++) {
        args[_key38] = arguments[_key38];
      }

      return (_telegram38 = this.telegram).uploadStickerFile.apply(_telegram38, [this.from.id].concat(args));
    }
  }, {
    key: 'createNewStickerSet',
    value: function createNewStickerSet() {
      var _telegram39;

      this.assert(this.from, 'createNewStickerSet');

      for (var _len39 = arguments.length, args = Array(_len39), _key39 = 0; _key39 < _len39; _key39++) {
        args[_key39] = arguments[_key39];
      }

      return (_telegram39 = this.telegram).createNewStickerSet.apply(_telegram39, [this.from.id].concat(args));
    }
  }, {
    key: 'addStickerToSet',
    value: function addStickerToSet() {
      var _telegram40;

      this.assert(this.from, 'addStickerToSet');

      for (var _len40 = arguments.length, args = Array(_len40), _key40 = 0; _key40 < _len40; _key40++) {
        args[_key40] = arguments[_key40];
      }

      return (_telegram40 = this.telegram).addStickerToSet.apply(_telegram40, [this.from.id].concat(args));
    }
  }, {
    key: 'replyWithMarkdown',
    value: function replyWithMarkdown(markdown, extra) {
      return this.reply(markdown, (0, _assign2.default)({ 'parse_mode': 'Markdown' }, extra));
    }
  }, {
    key: 'replyWithHTML',
    value: function replyWithHTML(html, extra) {
      return this.reply(html, (0, _assign2.default)({ 'parse_mode': 'HTML' }, extra));
    }
  }, {
    key: 'deleteMessage',
    value: function deleteMessage(messageId) {
      this.assert(this.chat, 'deleteMessage');
      if (typeof messageId !== 'undefined') {
        return this.telegram.deleteMessage(this.chat.id, messageId);
      }
      var message = this.message || this.editedMessage || this.channelPost || this.editedChannelPost || this.callbackQuery && this.callbackQuery.message;
      this.assert(message, 'deleteMessage');
      return this.telegram.deleteMessage(this.chat.id, message.message_id);
    }
  }, {
    key: 'forwardMessage',
    value: function forwardMessage(chatId, extra) {
      this.assert(this.chat, 'forwardMessage');
      var message = this.message || this.editedMessage || this.channelPost || this.editedChannelPost || this.callbackQuery && this.callbackQuery.message;
      this.assert(message, 'forwardMessage');
      return this.telegram.forwardMessage(chatId, this.chat.id, message.message_id, extra);
    }
  }, {
    key: 'me',
    get: function get() {
      return this.options && this.options.username;
    }
  }, {
    key: 'telegram',
    get: function get() {
      return this.tg;
    }
  }, {
    key: 'message',
    get: function get() {
      return this.update.message;
    }
  }, {
    key: 'editedMessage',
    get: function get() {
      return this.update.edited_message;
    }
  }, {
    key: 'inlineQuery',
    get: function get() {
      return this.update.inline_query;
    }
  }, {
    key: 'shippingQuery',
    get: function get() {
      return this.update.shipping_query;
    }
  }, {
    key: 'preCheckoutQuery',
    get: function get() {
      return this.update.pre_checkout_query;
    }
  }, {
    key: 'chosenInlineResult',
    get: function get() {
      return this.update.chosen_inline_result;
    }
  }, {
    key: 'channelPost',
    get: function get() {
      return this.update.channel_post;
    }
  }, {
    key: 'editedChannelPost',
    get: function get() {
      return this.update.edited_channel_post;
    }
  }, {
    key: 'callbackQuery',
    get: function get() {
      return this.update.callback_query;
    }
  }, {
    key: 'chat',
    get: function get() {
      return this.message && this.message.chat || this.editedMessage && this.editedMessage.chat || this.callbackQuery && this.callbackQuery.message && this.callbackQuery.message.chat || this.channelPost && this.channelPost.chat || this.editedChannelPost && this.editedChannelPost.chat;
    }
  }, {
    key: 'from',
    get: function get() {
      return this.message && this.message.from || this.editedMessage && this.editedMessage.from || this.callbackQuery && this.callbackQuery.from || this.inlineQuery && this.inlineQuery.from || this.channelPost && this.channelPost.from || this.editedChannelPost && this.editedChannelPost.from || this.shippingQuery && this.shippingQuery.from || this.preCheckoutQuery && this.preCheckoutQuery.from || this.chosenInlineResult && this.chosenInlineResult.from;
    }
  }, {
    key: 'state',
    get: function get() {
      if (!this.contextState) {
        this.contextState = {};
      }
      return this.contextState;
    },
    set: function set(value) {
      this.contextState = (0, _assign2.default)({}, value);
    }
  }, {
    key: 'webhookReply',
    get: function get() {
      return this.tg.webhookReply;
    },
    set: function set(enable) {
      this.tg.webhookReply = enable;
    }
  }]);
  return TelegrafContext;
}();

module.exports = TelegrafContext;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getIterator2 = __webpack_require__(12);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _assign = __webpack_require__(2);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Markup = function () {
  function Markup() {
    (0, _classCallCheck3.default)(this, Markup);
  }

  (0, _createClass3.default)(Markup, [{
    key: "forceReply",
    value: function forceReply() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      this.force_reply = value;
      return this;
    }
  }, {
    key: "removeKeyboard",
    value: function removeKeyboard() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      this.remove_keyboard = value;
      return this;
    }
  }, {
    key: "selective",
    value: function selective() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      this.selective = value;
      return this;
    }
  }, {
    key: "extra",
    value: function extra(options) {
      return (0, _assign2.default)({
        reply_markup: (0, _assign2.default)({}, this)
      }, options);
    }
  }, {
    key: "keyboard",
    value: function keyboard(buttons, options) {
      var keyboard = buildKeyboard(buttons, (0, _assign2.default)({ columns: 1 }, options));
      if (keyboard && keyboard.length > 0) {
        this.keyboard = keyboard;
      }
      return this;
    }
  }, {
    key: "resize",
    value: function resize() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      this.resize_keyboard = value;
      return this;
    }
  }, {
    key: "oneTime",
    value: function oneTime() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      this.one_time_keyboard = value;
      return this;
    }
  }, {
    key: "inlineKeyboard",
    value: function inlineKeyboard(buttons, options) {
      var keyboard = buildKeyboard(buttons, (0, _assign2.default)({ columns: buttons.length }, options));
      if (keyboard && keyboard.length > 0) {
        this.inline_keyboard = keyboard;
      }
      return this;
    }
  }, {
    key: "button",
    value: function button(text, hide) {
      return Markup.button(text, hide);
    }
  }, {
    key: "contactRequestButton",
    value: function contactRequestButton(text, hide) {
      return Markup.contactRequestButton(text, hide);
    }
  }, {
    key: "locationRequestButton",
    value: function locationRequestButton(text, hide) {
      return Markup.locationRequestButton(text, hide);
    }
  }, {
    key: "urlButton",
    value: function urlButton(text, url, hide) {
      return Markup.urlButton(text, url, hide);
    }
  }, {
    key: "callbackButton",
    value: function callbackButton(text, data, hide) {
      return Markup.callbackButton(text, data, hide);
    }
  }, {
    key: "switchToChatButton",
    value: function switchToChatButton(text, value, hide) {
      return Markup.switchToChatButton(text, value, hide);
    }
  }, {
    key: "switchToCurrentChatButton",
    value: function switchToCurrentChatButton(text, value, hide) {
      return Markup.switchToCurrentChatButton(text, value, hide);
    }
  }, {
    key: "gameButton",
    value: function gameButton(text, hide) {
      return Markup.gameButton(text, hide);
    }
  }, {
    key: "payButton",
    value: function payButton(text, hide) {
      return Markup.payButton(text, hide);
    }
  }], [{
    key: "removeKeyboard",
    value: function removeKeyboard(value) {
      return new Markup().removeKeyboard(value);
    }
  }, {
    key: "forceReply",
    value: function forceReply(value) {
      return new Markup().forceReply(value);
    }
  }, {
    key: "keyboard",
    value: function keyboard(buttons, options) {
      return new Markup().keyboard(buttons, options);
    }
  }, {
    key: "inlineKeyboard",
    value: function inlineKeyboard(buttons, options) {
      return new Markup().inlineKeyboard(buttons, options);
    }
  }, {
    key: "resize",
    value: function resize() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      return new Markup().resize(value);
    }
  }, {
    key: "selective",
    value: function selective() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      return new Markup().selective(value);
    }
  }, {
    key: "oneTime",
    value: function oneTime() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      return new Markup().oneTime(value);
    }
  }, {
    key: "button",
    value: function button(text) {
      var hide = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      return { text: text, hide: hide };
    }
  }, {
    key: "contactRequestButton",
    value: function contactRequestButton(text) {
      var hide = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      return { text: text, request_contact: true, hide: hide };
    }
  }, {
    key: "locationRequestButton",
    value: function locationRequestButton(text) {
      var hide = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      return { text: text, request_location: true, hide: hide };
    }
  }, {
    key: "urlButton",
    value: function urlButton(text, url) {
      var hide = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      return { text: text, url: url, hide: hide };
    }
  }, {
    key: "callbackButton",
    value: function callbackButton(text, data) {
      var hide = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      return { text: text, callback_data: data, hide: hide };
    }
  }, {
    key: "switchToChatButton",
    value: function switchToChatButton(text, value) {
      var hide = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      return { text: text, switch_inline_query: value, hide: hide };
    }
  }, {
    key: "switchToCurrentChatButton",
    value: function switchToCurrentChatButton(text, value) {
      var hide = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      return { text: text, switch_inline_query_current_chat: value, hide: hide };
    }
  }, {
    key: "gameButton",
    value: function gameButton(text) {
      var hide = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      return { text: text, callback_game: {}, hide: hide };
    }
  }, {
    key: "payButton",
    value: function payButton(text) {
      var hide = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      return { text: text, pay: true, hide: hide };
    }
  }]);
  return Markup;
}();

function buildKeyboard(buttons, options) {
  var result = [];
  if (!Array.isArray(buttons)) {
    return result;
  }
  if (buttons.find(Array.isArray)) {
    return buttons.map(function (row) {
      return row.filter(function (button) {
        return !button.hide;
      });
    });
  }
  var wrapFn = options.wrap ? options.wrap : function (btn, index, currentRow) {
    return currentRow.length >= options.columns;
  };
  var currentRow = [];
  var index = 0;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator3.default)(buttons.filter(function (button) {
      return !button.hide;
    })), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var btn = _step.value;

      if (wrapFn(btn, index, currentRow) && currentRow.length > 0) {
        result.push(currentRow);
        currentRow = [];
      }
      currentRow.push(btn);
      index++;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  if (currentRow.length > 0) {
    result.push(currentRow);
  }
  return result;
}

module.exports = Markup;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/get-iterator");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/map");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/keys");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/typeof");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _promise = __webpack_require__(3);

var _promise2 = _interopRequireDefault(_promise);

var _assign = __webpack_require__(2);

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = __webpack_require__(8)('telegraf:core');
var Telegram = __webpack_require__(30);
var Extra = __webpack_require__(27);
var Composer = __webpack_require__(9);
var Markup = __webpack_require__(11);
var session = __webpack_require__(29);
var Router = __webpack_require__(28);
var Context = __webpack_require__(10);
var generateCallback = __webpack_require__(25);
var crypto = __webpack_require__(16);

var _require = __webpack_require__(43),
    URL = _require.URL;

var DefaultOptions = {
  retryAfter: 1,
  handlerTimeout: 0
};

var noop = function noop() {};

var Telegraf = function (_Composer) {
  (0, _inherits3.default)(Telegraf, _Composer);

  function Telegraf(token, options) {
    (0, _classCallCheck3.default)(this, Telegraf);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Telegraf.__proto__ || (0, _getPrototypeOf2.default)(Telegraf)).call(this));

    _this.options = (0, _assign2.default)({}, DefaultOptions, options);
    _this.token = token;
    _this.handleError = function (err) {
      console.error();
      console.error((err.stack || err.toString()).replace(/^/gm, '  '));
      console.error();
      throw err;
    };
    _this.context = {};
    _this.polling = {
      offset: 0,
      started: false
    };
    return _this;
  }

  (0, _createClass3.default)(Telegraf, [{
    key: 'catch',
    /* eslint brace-style: 0 */

    value: function _catch(handler) {
      this.handleError = handler;
      return this;
    }
  }, {
    key: 'webhookCallback',
    value: function webhookCallback() {
      var _this2 = this;

      var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';

      return generateCallback(path, function (update, res) {
        return _this2.handleUpdate(update, res);
      }, debug);
    }
  }, {
    key: 'startPolling',
    value: function startPolling() {
      var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 30;
      var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
      var allowedUpdates = arguments[2];
      var stopCallback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : noop;

      this.polling.timeout = timeout;
      this.polling.limit = limit;
      this.polling.allowedUpdates = allowedUpdates ? Array.isArray(allowedUpdates) ? allowedUpdates : ['' + allowedUpdates] : null;
      this.polling.stopCallback = stopCallback;
      if (!this.polling.started) {
        this.polling.started = true;
        this.fetchUpdates();
      }
      return this;
    }
  }, {
    key: 'startWebhook',
    value: function startWebhook(hookPath, tlsOptions, port, host, cb) {
      var webhookCb = this.webhookCallback(hookPath);
      var callback = cb && typeof cb === 'function' ? function (req, res) {
        return webhookCb(req, res, function () {
          return cb(req, res);
        });
      } : webhookCb;
      this.webhookServer = tlsOptions ? __webpack_require__(17).createServer(tlsOptions, callback) : __webpack_require__(38).createServer(callback);
      this.webhookServer.listen(port, host, function () {
        debug('Webhook listening on port: %s', port);
      });
      return this;
    }
  }, {
    key: 'launch',
    value: function launch() {
      var _this3 = this;

      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return this.telegram.getMe().then(function (botInfo) {
        debug('Launching @' + botInfo.username);
        _this3.options.username = botInfo.username;
        _this3.context.botInfo = botInfo;
        if (!config.webhook) {
          var _ref = config.polling || {},
              timeout = _ref.timeout,
              limit = _ref.limit,
              allowedUpdates = _ref.allowedUpdates,
              stopCallback = _ref.stopCallback;

          return _this3.telegram.deleteWebhook().then(function () {
            return _this3.startPolling(timeout, limit, allowedUpdates, stopCallback);
          }).then(function () {
            return debug('Bot started with long-polling');
          });
        }
        if (typeof config.webhook.domain !== 'string' && typeof config.webhook.hookPath !== 'string') {
          throw new Error('Webhook domain or webhook path is required');
        }
        var domain = config.webhook.domain || '';
        if (domain.startsWith('https://') || domain.startsWith('http://')) {
          domain = new URL(domain).host;
        }
        var hookPath = config.webhook.hookPath || '/telegraf/' + crypto.randomBytes(32).toString('hex');
        var _config$webhook = config.webhook,
            port = _config$webhook.port,
            host = _config$webhook.host,
            tlsOptions = _config$webhook.tlsOptions,
            cb = _config$webhook.cb;

        _this3.startWebhook(hookPath, tlsOptions, port, host, cb);
        if (!domain) {
          debug('Bot started with webhook');
          return;
        }
        return _this3.telegram.setWebhook('https://' + domain + hookPath).then(function () {
          return debug('Bot started with webhook @ https://' + domain);
        });
      });
    }
  }, {
    key: 'stop',
    value: function stop() {
      var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : noop;

      this.polling.started = false;
      if (this.webhookServer) {
        this.webhookServer.close(cb);
      } else {
        cb();
      }
      return this;
    }
  }, {
    key: 'handleUpdates',
    value: function handleUpdates(updates) {
      var _this4 = this;

      if (!Array.isArray(updates)) {
        return _promise2.default.reject(new Error('Updates must be an array'));
      }
      var processAll = _promise2.default.all(updates.map(function (update) {
        return _this4.handleUpdate(update);
      }));
      if (this.options.handlerTimeout === 0) {
        return processAll;
      }
      return _promise2.default.race([processAll, new _promise2.default(function (resolve) {
        return setTimeout(resolve, _this4.options.handlerTimeout);
      })]);
    }
  }, {
    key: 'handleUpdate',
    value: function handleUpdate(update, webhookResponse) {
      debug('Processing update', update.update_id);
      var tg = new Telegram(this.token, this.telegram.options, webhookResponse);
      var ctx = new Context(update, tg, this.options);
      (0, _assign2.default)(ctx, this.context);
      return this.middleware()(ctx).catch(this.handleError);
    }
  }, {
    key: 'fetchUpdates',
    value: function fetchUpdates() {
      var _this5 = this;

      var _polling = this.polling,
          timeout = _polling.timeout,
          limit = _polling.limit,
          offset = _polling.offset,
          started = _polling.started,
          allowedUpdates = _polling.allowedUpdates;

      if (!started) {
        return;
      }
      this.telegram.getUpdates(timeout, limit, offset, allowedUpdates).catch(function (err) {
        if (err.code === 401 || err.code === 409) {
          throw err;
        }
        var wait = err.parameters && err.parameters.retry_after || _this5.options.retryAfter;
        console.error('Failed to fetch updates. Waiting: ' + wait + 's', err.message);
        return new _promise2.default(function (resolve) {
          return setTimeout(resolve, wait * 1000, []);
        });
      }).then(function (updates) {
        return _this5.handleUpdates(updates).then(function () {
          return updates;
        });
      }).catch(function (err) {
        console.error('Failed to process updates.', err);
        _this5.polling.started = false;
        _this5.polling.offset = 0;
        _this5.polling.stopCallback && _this5.polling.stopCallback();
        return [];
      }).then(function (updates) {
        if (updates.length > 0) {
          _this5.polling.offset = updates[updates.length - 1].update_id + 1;
        }
        _this5.fetchUpdates();
      });
    }
  }, {
    key: 'token',
    set: function set(token) {
      this.telegram = new Telegram(token, this.telegram ? this.telegram.options : this.options.telegram);
    },
    get: function get() {
      return this.telegram.token;
    }
  }, {
    key: 'webhookReply',
    set: function set(webhookReply) {
      this.telegram.webhookReply = webhookReply;
    },
    get: function get() {
      return this.telegram.webhookReply;
    }
  }]);
  return Telegraf;
}(Composer);

module.exports = (0, _assign2.default)(Telegraf, {
  Composer: Composer,
  Extra: Extra,
  Markup: Markup,
  Router: Router,
  Telegram: Telegram,
  session: session
});

module.exports.default = (0, _assign2.default)(Telegraf, {
  Composer: Composer,
  Extra: Extra,
  Markup: Markup,
  Router: Router,
  Telegram: Telegram,
  session: session
});

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
// Initialize Firebase
var firebaseconfig = exports.firebaseconfig = {
    apiKey: "AIzaSyBCeUrcSmvH4QaFrFGBUrIac2mp9sd3NHw",
    authDomain: "telebot-23785.firebaseapp.com",
    databaseURL: "https://telebot-23785.firebaseio.com",
    projectId: "telebot-23785",
    storageBucket: "telebot-23785.appspot.com",
    messagingSenderId: "859288362710"

};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("firebase/database");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _defineProperty2 = __webpack_require__(35);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _assign = __webpack_require__(2);

var _assign2 = _interopRequireDefault(_assign);

var _stringify = __webpack_require__(7);

var _stringify2 = _interopRequireDefault(_stringify);

var _promise = __webpack_require__(3);

var _promise2 = _interopRequireDefault(_promise);

var _typeof2 = __webpack_require__(15);

var _typeof3 = _interopRequireDefault(_typeof2);

var _keys = __webpack_require__(14);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = __webpack_require__(8)('telegraf:client');
var crypto = __webpack_require__(16);
var fetch = __webpack_require__(39).default;
var fs = __webpack_require__(37);
var https = __webpack_require__(17);
var path = __webpack_require__(40);
var TelegramError = __webpack_require__(23);
var MultipartStream = __webpack_require__(24);
var isStream = MultipartStream.isStream;


var WebhookBlacklist = ['getChat', 'getChatAdministrators', 'getChatMember', 'getChatMembersCount', 'getFile', 'getFileLink', 'getGameHighScores', 'getMe', 'getUserProfilePhotos', 'getWebhookInfo', 'exportChatInviteLink'];

var DefaultExtensions = {
  audio: 'mp3',
  photo: 'jpg',
  sticker: 'webp',
  video: 'mp4',
  animation: 'mp4',
  video_note: 'mp4',
  voice: 'ogg'
};

var DefaultOptions = {
  apiRoot: 'https://api.telegram.org',
  webhookReply: true,
  agent: new https.Agent({
    keepAlive: true,
    keepAliveMsecs: 10000
  })
};

var WebhookReplyStub = {
  webhook: true,
  details: 'https://core.telegram.org/bots/api#making-requests-when-getting-updates'
};

function safeJSONParse(text) {
  try {
    return JSON.parse(text);
  } catch (err) {
    debug('JSON parse failed', err);
  }
}

function includesMedia(payload) {
  return (0, _keys2.default)(payload).some(function (key) {
    var value = payload[key];
    if (Array.isArray(value)) {
      return value.some(function (_ref) {
        var media = _ref.media;
        return media && (typeof media === 'undefined' ? 'undefined' : (0, _typeof3.default)(media)) === 'object' && (media.source || media.url);
      });
    }
    return (typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value)) === 'object' && (value.source || value.url || (0, _typeof3.default)(value.media) === 'object' && (value.media.source || value.media.url));
  });
}

function buildJSONConfig(payload) {
  return _promise2.default.resolve({
    method: 'POST',
    compress: true,
    headers: { 'content-type': 'application/json', 'connection': 'keep-alive' },
    body: (0, _stringify2.default)(payload)
  });
}

function buildFormDataConfig(payload) {
  if (payload.reply_markup && typeof payload.reply_markup !== 'string') {
    payload.reply_markup = (0, _stringify2.default)(payload.reply_markup);
  }
  var boundary = crypto.randomBytes(32).toString('hex');
  var formData = new MultipartStream(boundary);
  var tasks = (0, _keys2.default)(payload).map(function (key) {
    return attachFormValue(formData, key, payload[key]);
  });
  return _promise2.default.all(tasks).then(function () {
    return {
      method: 'POST',
      compress: true,
      headers: { 'content-type': 'multipart/form-data; boundary=' + boundary, 'connection': 'keep-alive' },
      body: formData
    };
  });
}

function attachFormValue(form, id, value) {
  if (!value) {
    return _promise2.default.resolve();
  }
  var valueType = typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value);
  if (valueType === 'string' || valueType === 'boolean' || valueType === 'number') {
    form.addPart({
      headers: { 'content-disposition': 'form-data; name="' + id + '"' },
      body: '' + value
    });
    return _promise2.default.resolve();
  }
  if (id === 'thumb') {
    var attachmentId = crypto.randomBytes(16).toString('hex');
    return attachFormMedia(form, value, attachmentId).then(function () {
      return form.addPart({
        headers: { 'content-disposition': 'form-data; name="' + id + '"' },
        body: 'attach://' + attachmentId
      });
    });
  }
  if (Array.isArray(value)) {
    return _promise2.default.all(value.map(function (item) {
      if ((0, _typeof3.default)(item.media) !== 'object') {
        return _promise2.default.resolve(item);
      }
      var attachmentId = crypto.randomBytes(16).toString('hex');
      return attachFormMedia(form, item.media, attachmentId).then(function () {
        return (0, _assign2.default)({}, item, { media: 'attach://' + attachmentId });
      });
    })).then(function (items) {
      return form.addPart({
        headers: { 'content-disposition': 'form-data; name="' + id + '"' },
        body: (0, _stringify2.default)(items)
      });
    });
  }
  if (typeof value.media !== 'undefined' && typeof value.type !== 'undefined') {
    var _attachmentId = crypto.randomBytes(16).toString('hex');
    return attachFormMedia(form, value.media, _attachmentId).then(function () {
      return form.addPart({
        headers: { 'content-disposition': 'form-data; name="' + id + '"' },
        body: (0, _stringify2.default)((0, _assign2.default)(value, {
          media: 'attach://' + _attachmentId
        }))
      });
    });
  }
  return attachFormMedia(form, value, id);
}

function attachFormMedia(form, media, id) {
  var fileName = media.filename || id + '.' + (DefaultExtensions[id] || 'dat');
  if (media.url) {
    return fetch(media.url).then(function (res) {
      return form.addPart({
        headers: { 'content-disposition': 'form-data; name="' + id + '"; filename="' + fileName + '"' },
        body: res.body
      });
    });
  }
  if (media.source) {
    if (fs.existsSync(media.source)) {
      fileName = media.filename || path.basename(media.source);
      media.source = fs.createReadStream(media.source);
    }
    if (isStream(media.source) || Buffer.isBuffer(media.source)) {
      form.addPart({
        headers: { 'content-disposition': 'form-data; name="' + id + '"; filename="' + fileName + '"' },
        body: media.source
      });
    }
  }
  return _promise2.default.resolve();
}

function isKoaResponse(response) {
  return typeof response.set === 'function' && (0, _typeof3.default)(response.header) === 'object';
}

function answerToWebhook(response) {
  var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!includesMedia(payload)) {
    if (isKoaResponse(response)) {
      response.body = payload;
      return _promise2.default.resolve(WebhookReplyStub);
    }
    if (!response.headersSent) {
      response.setHeader('content-type', 'application/json');
    }
    return new _promise2.default(function (resolve) {
      return response.end((0, _stringify2.default)(payload), 'utf-8', function () {
        return resolve(WebhookReplyStub);
      });
    });
  }

  return buildFormDataConfig(payload).then(function (_ref2) {
    var headers = _ref2.headers,
        body = _ref2.body;

    if (isKoaResponse(response)) {
      (0, _keys2.default)(headers).forEach(function (key) {
        return response.set(key, headers[key]);
      });
      response.body = body;
      return _promise2.default.resolve(WebhookReplyStub);
    }
    if (!response.headersSent) {
      (0, _keys2.default)(headers).forEach(function (key) {
        return response.setHeader(key, headers[key]);
      });
    }
    return new _promise2.default(function (resolve) {
      response.on('finish', function () {
        return resolve(WebhookReplyStub);
      });
      body.pipe(response);
    });
  });
}

var ApiClient = function () {
  function ApiClient(token, options, webhookResponse) {
    (0, _classCallCheck3.default)(this, ApiClient);

    this.token = token;
    this.options = (0, _assign2.default)({}, DefaultOptions, options);
    if (this.options.apiRoot.startsWith('http://')) {
      this.options.agent = null;
    }
    this.response = webhookResponse;
  }

  (0, _createClass3.default)(ApiClient, [{
    key: 'callApi',
    value: function callApi(method) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var token = this.token,
          options = this.options,
          response = this.response,
          responseEnd = this.responseEnd;


      var payload = (0, _keys2.default)(data).filter(function (key) {
        return typeof data[key] !== 'undefined' && data[key] !== null;
      }).reduce(function (acc, key) {
        return (0, _assign2.default)(acc, (0, _defineProperty3.default)({}, key, data[key]));
      }, {});

      if (options.webhookReply && response && !responseEnd && !WebhookBlacklist.includes(method)) {
        debug('Call via webhook', method, payload);
        this.responseEnd = true;
        return answerToWebhook(response, (0, _assign2.default)({ method: method }, payload));
      }

      if (!token) {
        throw new TelegramError({ error_code: 401, description: 'Bot Token is required' });
      }

      debug('HTTP call', method, payload);
      var buildConfig = includesMedia(payload) ? buildFormDataConfig((0, _assign2.default)({ method: method }, payload)) : buildJSONConfig(payload);
      return buildConfig.then(function (config) {
        var apiUrl = options.apiRoot + '/bot' + token + '/' + method;
        config.agent = options.agent;
        return fetch(apiUrl, config);
      }).then(function (res) {
        return res.text();
      }).then(function (text) {
        return safeJSONParse(text) || {
          error_code: 500,
          description: 'Unsupported http response from Telegram',
          response: text
        };
      }).then(function (data) {
        if (!data.ok) {
          debug('API call failed', data);
          throw new TelegramError(data, { method: method, payload: payload });
        }
        return data.result;
      });
    }
  }, {
    key: 'webhookReply',
    set: function set(enable) {
      this.options.webhookReply = enable;
    },
    get: function get() {
      return this.options.webhookReply;
    }
  }]);
  return ApiClient;
}();

module.exports = ApiClient;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TelegramError = function (_Error) {
  (0, _inherits3.default)(TelegramError, _Error);

  function TelegramError() {
    var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var on = arguments[1];
    (0, _classCallCheck3.default)(this, TelegramError);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TelegramError.__proto__ || (0, _getPrototypeOf2.default)(TelegramError)).call(this, payload.error_code + ": " + payload.description));

    _this.code = payload.error_code;
    _this.response = payload;
    _this.description = payload.description;
    _this.parameters = payload.parameters || {};
    _this.on = on || {};
    return _this;
  }

  return TelegramError;
}(Error);

module.exports = TelegramError;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(15);

var _typeof3 = _interopRequireDefault(_typeof2);

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stream = __webpack_require__(42);

var _require = __webpack_require__(41),
    SandwichStream = _require.SandwichStream;

var CRNL = '\r\n';

var MultipartStream = function (_SandwichStream) {
  (0, _inherits3.default)(MultipartStream, _SandwichStream);

  function MultipartStream(boundary) {
    (0, _classCallCheck3.default)(this, MultipartStream);
    return (0, _possibleConstructorReturn3.default)(this, (MultipartStream.__proto__ || (0, _getPrototypeOf2.default)(MultipartStream)).call(this, {
      head: '--' + boundary + CRNL,
      tail: CRNL + '--' + boundary + '--',
      separator: CRNL + '--' + boundary + CRNL
    }));
  }

  (0, _createClass3.default)(MultipartStream, [{
    key: 'addPart',
    value: function addPart(part) {
      part = part || {};
      var partStream = new stream.PassThrough();
      if (part.headers) {
        for (var key in part.headers) {
          var header = part.headers[key];
          partStream.write(key + ':' + header + CRNL);
        }
      }
      partStream.write(CRNL);
      if (MultipartStream.isStream(part.body)) {
        part.body.pipe(partStream);
      } else {
        partStream.end(part.body);
      }
      this.add(partStream);
    }
  }], [{
    key: 'isStream',
    value: function isStream(stream) {
      return stream && (typeof stream === 'undefined' ? 'undefined' : (0, _typeof3.default)(stream)) === 'object' && typeof stream.pipe === 'function';
    }
  }]);
  return MultipartStream;
}(SandwichStream);

module.exports = MultipartStream;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var debug = __webpack_require__(8)('telegraf:webhook');

module.exports = function (hookPath, updateHandler, errorHandler) {
  return function (req, res, next) {
    debug('Incoming request', req.method, req.url);
    if (req.method !== 'POST' || req.url !== hookPath) {
      if (typeof next === 'function') {
        return next();
      }
      res.statusCode = 403;
      return res.end();
    }
    var body = '';
    req.on('data', function (chunk) {
      body += chunk.toString();
    });
    req.on('end', function () {
      var update = {};
      try {
        update = JSON.parse(body);
      } catch (error) {
        res.writeHead(415);
        res.end();
        return errorHandler(error);
      }
      updateHandler(update, res).then(function () {
        if (!res.finished) {
          res.end();
        }
      }).catch(function (err) {
        debug('Webhook error', err);
        res.writeHead(500);
        res.end();
      });
    });
  };
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function wrapEntity(content, entity) {
  switch (entity.type) {
    case 'bold':
      return '<b>' + content + '</b>';
    case 'italic':
      return '<i>' + content + '</i>';
    case 'code':
      return '<code>' + content + '</code>';
    case 'pre':
      return '<pre>' + content + '</pre>';
    case 'text_link':
      return '<a href="' + entity.url + '">' + content + '</a>';
    default:
      return content;
  }
}

function applyEntity(text, entity) {
  var head = text.substring(0, entity.offset);
  var tail = text.substring(entity.offset + entity.length);
  var content = wrapEntity(text.substring(entity.offset, entity.offset + entity.length), entity);
  return '' + head + content + tail;
}

module.exports = {
  copyMethods: {
    'audio': 'sendAudio',
    'contact': 'sendContact',
    'document': 'sendDocument',
    'location': 'sendLocation',
    'photo': 'sendPhoto',
    'sticker': 'sendSticker',
    'text': 'sendMessage',
    'venue': 'sendVenue',
    'video': 'sendVideo',
    'video_note': 'sendVideoNote',
    'animation': 'sendAnimation',
    'voice': 'sendVoice'
  },
  text: function text(message) {
    var entities = message.entities || [];
    return {
      parse_mode: entities.length > 0 ? 'HTML' : '',
      text: entities.reduceRight(applyEntity, message.text)
    };
  },
  contact: function contact(message) {
    return {
      phone_number: message.contact.phone_number,
      first_name: message.contact.first_name,
      last_name: message.contact.last_name
    };
  },
  location: function location(message) {
    return {
      latitude: message.location.latitude,
      longitude: message.location.longitude
    };
  },
  venue: function venue(message) {
    return {
      latitude: message.venue.location.latitude,
      longitude: message.venue.location.longitude,
      title: message.venue.title,
      address: message.venue.address,
      foursquare_id: message.venue.foursquare_id
    };
  },
  voice: function voice(message) {
    var entities = message.caption_entities || [];
    return {
      voice: message.voice.file_id,
      duration: message.voice.duration,
      caption: entities.reduceRight(applyEntity, message.caption),
      parse_mode: entities.length > 0 ? 'HTML' : ''
    };
  },
  audio: function audio(message) {
    var entities = message.caption_entities || [];
    return {
      audio: message.audio.file_id,
      thumb: message.audio.thumb,
      duration: message.audio.duration,
      performer: message.audio.performer,
      title: message.audio.title,
      caption: entities.reduceRight(applyEntity, message.caption),
      parse_mode: entities.length > 0 ? 'HTML' : ''
    };
  },
  video: function video(message) {
    var entities = message.caption_entities || [];
    return {
      video: message.video.file_id,
      thumb: message.video.thumb,
      caption: entities.reduceRight(applyEntity, message.caption),
      parse_mode: entities.length > 0 ? 'HTML' : '',
      duration: message.video.duration,
      width: message.video.width,
      height: message.video.height,
      supports_streaming: !!message.video.supports_streaming
    };
  },
  document: function document(message) {
    var entities = message.caption_entities || [];
    return {
      document: message.document.file_id,
      caption: entities.reduceRight(applyEntity, message.caption),
      parse_mode: entities.length > 0 ? 'HTML' : ''
    };
  },
  sticker: function sticker(message) {
    return {
      sticker: message.sticker.file_id
    };
  },
  photo: function photo(message) {
    var entities = message.caption_entities || [];
    return {
      photo: message.photo[message.photo.length - 1].file_id,
      parse_mode: entities.length > 0 ? 'HTML' : '',
      caption: entities.reduceRight(applyEntity, message.caption)
    };
  },
  video_note: function video_note(message) {
    return {
      video_note: message.video_note.file_id,
      thumb: message.video_note.thumb,
      length: message.video_note.length,
      duration: message.video_note.duration
    };
  },
  animation: function animation(message) {
    return {
      animation: message.animation.file_id,
      thumb: message.animation.thumb,
      duration: message.animation.duration
    };
  }
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _assign = __webpack_require__(2);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Markup = __webpack_require__(11);

var Extra = function () {
  function Extra(opts) {
    (0, _classCallCheck3.default)(this, Extra);

    this.load(opts);
  }

  (0, _createClass3.default)(Extra, [{
    key: 'load',
    value: function load(opts) {
      return (0, _assign2.default)(this, opts || {});
    }
  }, {
    key: 'inReplyTo',
    value: function inReplyTo(messageId) {
      this.reply_to_message_id = messageId;
      return this;
    }
  }, {
    key: 'notifications',
    value: function notifications() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      this.disable_notification = !value;
      return this;
    }
  }, {
    key: 'webPreview',
    value: function webPreview() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      this.disable_web_page_preview = !value;
      return this;
    }
  }, {
    key: 'markup',
    value: function markup(_markup) {
      if (typeof _markup === 'function') {
        _markup = _markup(new Markup());
      }
      this.reply_markup = (0, _assign2.default)({}, _markup);
      return this;
    }
  }, {
    key: 'HTML',
    value: function HTML() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      this.parse_mode = value ? 'HTML' : undefined;
      return this;
    }
  }, {
    key: 'markdown',
    value: function markdown() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      this.parse_mode = value ? 'Markdown' : undefined;
      return this;
    }
  }], [{
    key: 'inReplyTo',
    value: function inReplyTo(messageId) {
      return new Extra().inReplyTo(messageId);
    }
  }, {
    key: 'notifications',
    value: function notifications(value) {
      return new Extra().notifications(value);
    }
  }, {
    key: 'webPreview',
    value: function webPreview(value) {
      return new Extra().webPreview(value);
    }
  }, {
    key: 'load',
    value: function load(opts) {
      return new Extra(opts);
    }
  }, {
    key: 'markup',
    value: function markup(_markup2) {
      return new Extra().markup(_markup2);
    }
  }, {
    key: 'HTML',
    value: function HTML(value) {
      return new Extra().HTML(value);
    }
  }, {
    key: 'markdown',
    value: function markdown(value) {
      return new Extra().markdown(value);
    }
  }]);
  return Extra;
}();

Extra.Markup = Markup;

module.exports = Extra;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _assign = __webpack_require__(2);

var _assign2 = _interopRequireDefault(_assign);

var _promise = __webpack_require__(3);

var _promise2 = _interopRequireDefault(_promise);

var _map = __webpack_require__(13);

var _map2 = _interopRequireDefault(_map);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = __webpack_require__(9),
    compose = _require.compose,
    lazy = _require.lazy,
    passThru = _require.passThru;

var Router = function () {
  function Router(routeFn) {
    var handlers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _map2.default();
    (0, _classCallCheck3.default)(this, Router);

    if (!routeFn) {
      throw new Error('Missing routing function');
    }
    this.routeFn = routeFn;
    this.handlers = handlers;
    this.otherwiseHandler = passThru();
  }

  (0, _createClass3.default)(Router, [{
    key: 'on',
    value: function on(route) {
      for (var _len = arguments.length, fns = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        fns[_key - 1] = arguments[_key];
      }

      if (fns.length === 0) {
        throw new TypeError('At least one handler must be provided');
      }
      this.handlers.set(route, compose(fns));
      return this;
    }
  }, {
    key: 'otherwise',
    value: function otherwise() {
      for (var _len2 = arguments.length, fns = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        fns[_key2] = arguments[_key2];
      }

      if (fns.length === 0) {
        throw new TypeError('At least one otherwise handler must be provided');
      }
      this.otherwiseHandler = compose(fns);
      return this;
    }
  }, {
    key: 'middleware',
    value: function middleware() {
      var _this = this;

      return lazy(function (ctx) {
        return _promise2.default.resolve(_this.routeFn(ctx)).then(function (result) {
          if (!result || !result.route || !_this.handlers.has(result.route)) {
            return _this.otherwiseHandler;
          }
          (0, _assign2.default)(ctx, result.context);
          (0, _assign2.default)(ctx.state, result.state);
          return _this.handlers.get(result.route);
        });
      });
    }
  }]);
  return Router;
}();

module.exports = Router;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _defineProperty = __webpack_require__(32);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _promise = __webpack_require__(3);

var _promise2 = _interopRequireDefault(_promise);

var _map = __webpack_require__(13);

var _map2 = _interopRequireDefault(_map);

var _assign = __webpack_require__(2);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (opts) {
  var options = (0, _assign2.default)({
    property: 'session',
    store: new _map2.default(),
    getSessionKey: function getSessionKey(ctx) {
      return ctx.from && ctx.chat && ctx.from.id + ':' + ctx.chat.id;
    }
  }, opts);

  var ttlMs = options.ttl && options.ttl * 1000;

  return function (ctx, next) {
    var key = options.getSessionKey(ctx);
    if (!key) {
      return next(ctx);
    }
    var now = new Date().getTime();
    return _promise2.default.resolve(options.store.get(key)).then(function (state) {
      return state || { session: {} };
    }).then(function (_ref) {
      var session = _ref.session,
          expires = _ref.expires;

      if (expires && expires < now) {
        session = {};
      }
      (0, _defineProperty2.default)(ctx, options.property, {
        get: function get() {
          return session;
        },
        set: function set(newValue) {
          session = (0, _assign2.default)({}, newValue);
        }
      });
      var newState = {
        session: session,
        expires: ttlMs ? now + ttlMs : null
      };
      return next(ctx).then(function () {
        return options.store.set(key, newState);
      });
    });
  };
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _keys = __webpack_require__(14);

var _keys2 = _interopRequireDefault(_keys);

var _stringify = __webpack_require__(7);

var _stringify2 = _interopRequireDefault(_stringify);

var _assign = __webpack_require__(2);

var _assign2 = _interopRequireDefault(_assign);

var _promise = __webpack_require__(3);

var _promise2 = _interopRequireDefault(_promise);

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var util = __webpack_require__(44);
var replicators = __webpack_require__(26);
var ApiClient = __webpack_require__(22);

var Telegram = function (_ApiClient) {
  (0, _inherits3.default)(Telegram, _ApiClient);

  function Telegram() {
    (0, _classCallCheck3.default)(this, Telegram);
    return (0, _possibleConstructorReturn3.default)(this, (Telegram.__proto__ || (0, _getPrototypeOf2.default)(Telegram)).apply(this, arguments));
  }

  (0, _createClass3.default)(Telegram, [{
    key: 'getMe',
    value: function getMe() {
      return this.callApi('getMe');
    }
  }, {
    key: 'getFile',
    value: function getFile(fileId) {
      return this.callApi('getFile', { file_id: fileId });
    }
  }, {
    key: 'getFileLink',
    value: function getFileLink(fileId) {
      var _this2 = this;

      return _promise2.default.resolve(fileId).then(function (fileId) {
        if (fileId && fileId.file_path) {
          return fileId;
        }
        var id = fileId && fileId.file_id ? fileId.file_id : fileId;
        return _this2.getFile(id);
      }).then(function (file) {
        return _this2.options.apiRoot + '/file/bot' + _this2.token + '/' + file.file_path;
      });
    }
  }, {
    key: 'getUpdates',
    value: function getUpdates(timeout, limit, offset, allowedUpdates) {
      var url = 'getUpdates?offset=' + offset + '&limit=' + limit + '&timeout=' + timeout;
      return this.callApi(url, {
        allowed_updates: allowedUpdates
      });
    }
  }, {
    key: 'getWebhookInfo',
    value: function getWebhookInfo() {
      return this.callApi('getWebhookInfo');
    }
  }, {
    key: 'getGameHighScores',
    value: function getGameHighScores(userId, inlineMessageId, chatId, messageId) {
      return this.callApi('getGameHighScores', {
        user_id: userId,
        inline_message_id: inlineMessageId,
        chat_id: chatId,
        message_id: messageId
      });
    }
  }, {
    key: 'setGameScore',
    value: function setGameScore(userId, score, inlineMessageId, chatId, messageId) {
      var editMessage = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : true;
      var force = arguments[6];

      return this.callApi('setGameScore', {
        user_id: userId,
        score: score,
        inline_message_id: inlineMessageId,
        chat_id: chatId,
        message_id: messageId,
        disable_edit_message: !editMessage,
        force: force
      });
    }
  }, {
    key: 'setWebhook',
    value: function setWebhook(url, cert, maxConnections, allowedUpdates) {
      return this.callApi('setWebhook', {
        url: url,
        certificate: cert,
        max_connections: maxConnections,
        allowed_updates: allowedUpdates
      });
    }
  }, {
    key: 'deleteWebhook',
    value: function deleteWebhook() {
      return this.callApi('deleteWebhook');
    }
  }, {
    key: 'sendMessage',
    value: function sendMessage(chatId, text, extra) {
      return this.callApi('sendMessage', (0, _assign2.default)({ chat_id: chatId, text: text }, extra));
    }
  }, {
    key: 'forwardMessage',
    value: function forwardMessage(chatId, fromChatId, messageId, extra) {
      return this.callApi('forwardMessage', (0, _assign2.default)({
        chat_id: chatId,
        from_chat_id: fromChatId,
        message_id: messageId
      }, extra));
    }
  }, {
    key: 'sendChatAction',
    value: function sendChatAction(chatId, action) {
      return this.callApi('sendChatAction', { chat_id: chatId, action: action });
    }
  }, {
    key: 'getUserProfilePhotos',
    value: function getUserProfilePhotos(userId, offset, limit) {
      return this.callApi('getUserProfilePhotos', { user_id: userId, offset: offset, limit: limit });
    }
  }, {
    key: 'sendLocation',
    value: function sendLocation(chatId, latitude, longitude, extra) {
      return this.callApi('sendLocation', (0, _assign2.default)({ chat_id: chatId, latitude: latitude, longitude: longitude }, extra));
    }
  }, {
    key: 'sendVenue',
    value: function sendVenue(chatId, latitude, longitude, title, address, extra) {
      return this.callApi('sendVenue', (0, _assign2.default)({
        chat_id: chatId,
        latitude: latitude,
        longitude: longitude,
        title: title,
        address: address
      }, extra));
    }
  }, {
    key: 'sendInvoice',
    value: function sendInvoice(chatId, invoice, extra) {
      return this.callApi('sendInvoice', (0, _assign2.default)({ chat_id: chatId }, invoice, extra));
    }
  }, {
    key: 'sendContact',
    value: function sendContact(chatId, phoneNumber, firstName, extra) {
      return this.callApi('sendContact', (0, _assign2.default)({ chat_id: chatId, phone_number: phoneNumber, first_name: firstName }, extra));
    }
  }, {
    key: 'sendPhoto',
    value: function sendPhoto(chatId, photo, extra) {
      return this.callApi('sendPhoto', (0, _assign2.default)({ chat_id: chatId, photo: photo }, extra));
    }
  }, {
    key: 'sendDocument',
    value: function sendDocument(chatId, doc, extra) {
      return this.callApi('sendDocument', (0, _assign2.default)({ chat_id: chatId, document: doc }, extra));
    }
  }, {
    key: 'sendAudio',
    value: function sendAudio(chatId, audio, extra) {
      return this.callApi('sendAudio', (0, _assign2.default)({ chat_id: chatId, audio: audio }, extra));
    }
  }, {
    key: 'sendSticker',
    value: function sendSticker(chatId, sticker, extra) {
      return this.callApi('sendSticker', (0, _assign2.default)({ chat_id: chatId, sticker: sticker }, extra));
    }
  }, {
    key: 'sendVideo',
    value: function sendVideo(chatId, video, extra) {
      return this.callApi('sendVideo', (0, _assign2.default)({ chat_id: chatId, video: video }, extra));
    }
  }, {
    key: 'sendAnimation',
    value: function sendAnimation(chatId, animation, extra) {
      return this.callApi('sendAnimation', (0, _assign2.default)({ chat_id: chatId, animation: animation }, extra));
    }
  }, {
    key: 'sendVideoNote',
    value: function sendVideoNote(chatId, videoNote, extra) {
      return this.callApi('sendVideoNote', (0, _assign2.default)({ chat_id: chatId, video_note: videoNote }, extra));
    }
  }, {
    key: 'sendVoice',
    value: function sendVoice(chatId, voice, extra) {
      return this.callApi('sendVoice', (0, _assign2.default)({ chat_id: chatId, voice: voice }, extra));
    }
  }, {
    key: 'sendGame',
    value: function sendGame(chatId, gameName, extra) {
      return this.callApi('sendGame', (0, _assign2.default)({ chat_id: chatId, game_short_name: gameName }, extra));
    }
  }, {
    key: 'sendMediaGroup',
    value: function sendMediaGroup(chatId, media, extra) {
      return this.callApi('sendMediaGroup', (0, _assign2.default)({ chat_id: chatId, media: media }, extra));
    }
  }, {
    key: 'getChat',
    value: function getChat(chatId) {
      return this.callApi('getChat', { chat_id: chatId });
    }
  }, {
    key: 'getChatAdministrators',
    value: function getChatAdministrators(chatId) {
      return this.callApi('getChatAdministrators', { chat_id: chatId });
    }
  }, {
    key: 'getChatMember',
    value: function getChatMember(chatId, userId) {
      return this.callApi('getChatMember', { chat_id: chatId, user_id: userId });
    }
  }, {
    key: 'getChatMembersCount',
    value: function getChatMembersCount(chatId) {
      return this.callApi('getChatMembersCount', { chat_id: chatId });
    }
  }, {
    key: 'answerInlineQuery',
    value: function answerInlineQuery(inlineQueryId, results, extra) {
      return this.callApi('answerInlineQuery', (0, _assign2.default)({ inline_query_id: inlineQueryId, results: (0, _stringify2.default)(results) }, extra));
    }
  }, {
    key: 'kickChatMember',
    value: function kickChatMember(chatId, userId, untilDate) {
      return this.callApi('kickChatMember', { chat_id: chatId, user_id: userId, until_date: untilDate });
    }
  }, {
    key: 'promoteChatMember',
    value: function promoteChatMember(chatId, userId, extra) {
      return this.callApi('promoteChatMember', (0, _assign2.default)({ chat_id: chatId, user_id: userId }, extra));
    }
  }, {
    key: 'restrictChatMember',
    value: function restrictChatMember(chatId, userId, extra) {
      return this.callApi('restrictChatMember', (0, _assign2.default)({ chat_id: chatId, user_id: userId }, extra));
    }
  }, {
    key: 'exportChatInviteLink',
    value: function exportChatInviteLink(chatId) {
      return this.callApi('exportChatInviteLink', { chat_id: chatId });
    }
  }, {
    key: 'setChatPhoto',
    value: function setChatPhoto(chatId, photo) {
      return this.callApi('setChatPhoto', { chat_id: chatId, photo: photo });
    }
  }, {
    key: 'deleteChatPhoto',
    value: function deleteChatPhoto(chatId) {
      return this.callApi('deleteChatPhoto', { chat_id: chatId });
    }
  }, {
    key: 'setChatTitle',
    value: function setChatTitle(chatId, title) {
      return this.callApi('setChatTitle', { chat_id: chatId, title: title });
    }
  }, {
    key: 'setChatDescription',
    value: function setChatDescription(chatId, description) {
      return this.callApi('setChatDescription', { chat_id: chatId, description: description });
    }
  }, {
    key: 'pinChatMessage',
    value: function pinChatMessage(chatId, messageId, extra) {
      return this.callApi('pinChatMessage', (0, _assign2.default)({ chat_id: chatId, message_id: messageId }, extra));
    }
  }, {
    key: 'unpinChatMessage',
    value: function unpinChatMessage(chatId) {
      return this.callApi('unpinChatMessage', { chat_id: chatId });
    }
  }, {
    key: 'leaveChat',
    value: function leaveChat(chatId) {
      return this.callApi('leaveChat', { chat_id: chatId });
    }
  }, {
    key: 'unbanChatMember',
    value: function unbanChatMember(chatId, userId) {
      return this.callApi('unbanChatMember', { chat_id: chatId, user_id: userId });
    }
  }, {
    key: 'answerCallbackQuery',
    value: function answerCallbackQuery(callbackQueryId, text, url, showAlert, cacheTime) {
      return this.callApi('answerCallbackQuery', {
        callback_query_id: callbackQueryId,
        text: text,
        url: url,
        show_alert: showAlert,
        cache_time: cacheTime
      });
    }
  }, {
    key: 'answerCbQuery',
    value: function answerCbQuery(callbackQueryId, text, showAlert, extra) {
      return this.callApi('answerCallbackQuery', (0, _assign2.default)({
        callback_query_id: callbackQueryId,
        text: text,
        show_alert: showAlert
      }, extra));
    }
  }, {
    key: 'answerGameQuery',
    value: function answerGameQuery(callbackQueryId, url) {
      return this.callApi('answerCallbackQuery', {
        callback_query_id: callbackQueryId,
        url: url
      });
    }
  }, {
    key: 'answerShippingQuery',
    value: function answerShippingQuery(shippingQueryId, ok, shippingOptions, errorMessage) {
      return this.callApi('answerShippingQuery', {
        shipping_query_id: shippingQueryId,
        ok: ok,
        shipping_options: shippingOptions,
        error_message: errorMessage
      });
    }
  }, {
    key: 'answerPreCheckoutQuery',
    value: function answerPreCheckoutQuery(preCheckoutQueryId, ok, errorMessage) {
      return this.callApi('answerPreCheckoutQuery', {
        pre_checkout_query_id: preCheckoutQueryId,
        ok: ok,
        error_message: errorMessage
      });
    }
  }, {
    key: 'editMessageText',
    value: function editMessageText(chatId, messageId, inlineMessageId, text, extra) {
      return this.callApi('editMessageText', (0, _assign2.default)({
        chat_id: chatId,
        message_id: messageId,
        inline_message_id: inlineMessageId,
        text: text
      }, extra));
    }
  }, {
    key: 'editMessageCaption',
    value: function editMessageCaption(chatId, messageId, inlineMessageId, caption) {
      var extra = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

      return this.callApi('editMessageCaption', {
        chat_id: chatId,
        message_id: messageId,
        inline_message_id: inlineMessageId,
        caption: caption,
        parse_mode: extra.parse_mode,
        reply_markup: extra.parse_mode || extra.reply_markup ? extra.reply_markup : extra
      });
    }
  }, {
    key: 'editMessageMedia',
    value: function editMessageMedia(chatId, messageId, inlineMessageId, media) {
      var extra = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

      return this.callApi('editMessageMedia', {
        chat_id: chatId,
        message_id: messageId,
        inline_message_id: inlineMessageId,
        media: (0, _assign2.default)(media, { parse_mode: extra.parse_mode }),
        reply_markup: extra.reply_markup ? extra.reply_markup : extra
      });
    }
  }, {
    key: 'editMessageReplyMarkup',
    value: function editMessageReplyMarkup(chatId, messageId, inlineMessageId, markup) {
      return this.callApi('editMessageReplyMarkup', {
        chat_id: chatId,
        message_id: messageId,
        inline_message_id: inlineMessageId,
        reply_markup: markup
      });
    }
  }, {
    key: 'editMessageLiveLocation',
    value: function editMessageLiveLocation(latitude, longitude, chatId, messageId, inlineMessageId, markup) {
      return this.callApi('editMessageLiveLocation', {
        latitude: latitude,
        longitude: longitude,
        chat_id: chatId,
        message_id: messageId,
        inline_message_id: inlineMessageId,
        reply_markup: markup
      });
    }
  }, {
    key: 'stopMessageLiveLocation',
    value: function stopMessageLiveLocation(chatId, messageId, inlineMessageId, markup) {
      return this.callApi('stopMessageLiveLocation', {
        chat_id: chatId,
        message_id: messageId,
        inline_message_id: inlineMessageId,
        reply_markup: markup
      });
    }
  }, {
    key: 'deleteMessage',
    value: function deleteMessage(chatId, messageId) {
      return this.callApi('deleteMessage', {
        chat_id: chatId,
        message_id: messageId
      });
    }
  }, {
    key: 'setChatStickerSet',
    value: function setChatStickerSet(chatId, setName) {
      return this.callApi('setChatStickerSet', {
        chat_id: chatId,
        sticker_set_name: setName
      });
    }
  }, {
    key: 'deleteChatStickerSet',
    value: function deleteChatStickerSet(chatId) {
      return this.callApi('deleteChatStickerSet', { chat_id: chatId });
    }
  }, {
    key: 'getStickerSet',
    value: function getStickerSet(setName) {
      return this.callApi('getStickerSet', { name: setName });
    }
  }, {
    key: 'uploadStickerFile',
    value: function uploadStickerFile(ownerId, stickerFile) {
      return this.callApi('uploadStickerFile', {
        user_id: ownerId,
        png_sticker: stickerFile
      });
    }
  }, {
    key: 'createNewStickerSet',
    value: function createNewStickerSet(ownerId, name, title, stickerData) {
      return this.callApi('createNewStickerSet', (0, _assign2.default)({
        user_id: ownerId,
        name: name,
        title: title
      }, stickerData));
    }
  }, {
    key: 'addStickerToSet',
    value: function addStickerToSet(ownerId, name, stickerData, isMasks) {
      return this.callApi('addStickerToSet', (0, _assign2.default)({
        user_id: ownerId,
        name: name,
        is_masks: isMasks
      }, stickerData));
    }
  }, {
    key: 'setStickerPositionInSet',
    value: function setStickerPositionInSet(sticker, position) {
      return this.callApi('setStickerPositionInSet', {
        sticker: sticker,
        position: position
      });
    }
  }, {
    key: 'deleteStickerFromSet',
    value: function deleteStickerFromSet(sticker) {
      return this.callApi('deleteStickerFromSet', { sticker: sticker });
    }
  }, {
    key: 'sendCopy',
    value: function sendCopy(chatId, message, extra) {
      if (!message) {
        throw new Error('Message is required');
      }
      var type = (0, _keys2.default)(replicators.copyMethods).find(function (type) {
        return message[type];
      });
      if (!type) {
        throw new Error('Unsupported message type');
      }
      var opts = (0, _assign2.default)({ chat_id: chatId }, replicators[type](message), extra);
      return this.callApi(replicators.copyMethods[type], opts);
    }
  }]);
  return Telegram;
}(ApiClient);

Telegram.prototype.answerCallbackQuery = util.deprecate(Telegram.prototype.answerCallbackQuery, '️⚠️ Telegraf: answerCallbackQuery() is deprecated, use answerCbQuery() instead');

module.exports = Telegram;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _environments = __webpack_require__(19);

var Telegraf = __webpack_require__(18);
var bot = new Telegraf(process.env.BOT_TOKEN);

// Add additional services that you want to use
__webpack_require__(21);

// Firebase App is always required and must be first
var firebase = __webpack_require__(20);

// Firebase initialize config
firebase.initializeApp(_environments.firebaseconfig);

var db = firebase.database().ref();

bot.on('message', function (ctx) {

    //firebase search
    db.orderByChild("vopros").equalTo(ctx.message.text).on('value', function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
            var key = childSnapshot.key;
            var childData = childSnapshot.val();
            console.log(childData.otvet);
            ctx.telegram.sendMessage(ctx.from.id, childData.otvet);
        });
    });
});

bot.launch();

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/define-property");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-own-property-names");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/set-immediate");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/defineProperty");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/toConsumableArray");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("sandwich-stream");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map