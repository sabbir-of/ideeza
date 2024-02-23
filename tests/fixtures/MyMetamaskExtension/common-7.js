LavaPack.loadBundle([[81,{"../../../shared/modules/object.utils":4114,"../platforms/extension":207,"./local-store":54,"./network-store":58,"./setupSentry":82},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,r){var n=e("../../../shared/modules/object.utils"),s=i(e("../platforms/extension")),a=i(e("./local-store")),o=(i(e("./network-store")),e("./setupSentry"));function i(e){return e&&e.__esModule?e:{default:e}}const l=new s.default,c=new a.default;globalThis.stateHooks.getPersistedState=async function(){return await c.get()};const u={data:o.SENTRY_BACKGROUND_STATE,meta:{version:!0}};globalThis.stateHooks.getSentryState=function(){const e={browser:window.navigator.userAgent,version:l.getVersion()};if(globalThis.stateHooks.getSentryAppState)return{...e,state:globalThis.stateHooks.getSentryAppState()};if(c.mostRecentRetrievedState||globalThis.stateHooks.getMostRecentPersistedState){const t=c.mostRecentRetrievedState||globalThis.stateHooks.getMostRecentPersistedState();if(t)return{...e,persistedState:(0,n.maskObject)(t,u)}}return e}}}},{package:"$root$",file:"app/scripts/lib/setup-initial-state-hooks.js"}],[82,{"../../../shared/modules/object.utils":4114,"./extractEthjsErrorMessage":49,"./sentry-filter-events":80,"@sentry/browser":1878,"@sentry/integrations":1933},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,r){Object.defineProperty(r,"__esModule",{value:!0}),r.SENTRY_UI_STATE=r.SENTRY_BACKGROUND_STATE=r.ERROR_URL_ALLOWLIST=void 0,r.beforeBreadcrumb=T,r.default=function({release:e,getState:t}){if(!e)throw new Error("Missing release");if(u&&!m)return undefined;const r="main"===f?d:`${d}-${f}`;let n;"production"===d?(console.log(`Setting up Sentry Remote Error Reporting for '${r}': SENTRY_DSN`),n="https://3567c198f8a8412082d32655da2961d0@sentry.io/273505"):(console.log(`Setting up Sentry Remote Error Reporting for '${r}': SENTRY_DSN_DEV`),n=p);async function o(){const e=t();if(e.state||e.persistedState)return b(e);try{return v(await globalThis.stateHooks.getPersistedState())}catch(e){return console.error(e),!1}}s.init({dsn:n,debug:u,autoSessionTracking:!1,environment:r,integrations:[new i.FilterEvents({getMetaMetricsEnabled:o}),new a.Dedupe,new a.ExtraErrorData],release:e,beforeSend:e=>P(e,t),beforeBreadcrumb:T(t)});const l=async()=>{var e,t,r,n;const a=null===(e=s.getCurrentHub)||void 0===e?void 0:e.call(s),i=(null===(t=a.getClient)||void 0===t||null===(r=(n=t.call(a)).getOptions)||void 0===r?void 0:r.call(n))??{};a&&!0===await o()&&(i.autoSessionTracking=!0,a.startSession())},c=async()=>{var e,t,r,n;const a=null===(e=s.getCurrentHub)||void 0===e?void 0:e.call(s),i=(null===(t=a.getClient)||void 0===t||null===(r=(n=t.call(a)).getOptions)||void 0===r?void 0:r.call(n))??{};a&&!1===await o()&&(i.autoSessionTracking=!1,a.endSession())};return{...s,startSession:l,endSession:c,toggleSession:async()=>{var e,t,r,n;const a=null===(e=s.getCurrentHub)||void 0===e?void 0:e.call(s),i=(null===(t=a.getClient)||void 0===t||null===(r=(n=t.call(a)).getOptions)||void 0===r?void 0:r.call(n))??{autoSessionTracking:!1},u=await o();!0===u&&!1===i.autoSessionTracking?await l():!1===u&&!0===i.autoSessionTracking&&await c()}}},r.removeUrlsFromBreadCrumb=w,r.rewriteReport=P;var n,s=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=c(t);if(r&&r.has(e))return r.get(e);var n={__proto__:null},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var o=s?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}return n.default=e,r&&r.set(e,n),n}(e("@sentry/browser")),a=e("@sentry/integrations"),o=e("../../../shared/modules/object.utils"),i=e("./sentry-filter-events"),l=(n=e("./extractEthjsErrorMessage"))&&n.__esModule?n:{default:n};function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(c=function(e){return e?r:t})(e)}const u=!1,d="production",p="https://f59f3dd640d2429d9d0e2445a87ea8e1@sentry.io/273496",f="flask",m=!1,g=r.ERROR_URL_ALLOWLIST={CRYPTOCOMPARE:"cryptocompare.com",COINGECKO:"coingecko.com",ETHERSCAN:"etherscan.io",CODEFI:"codefi.network",SEGMENT:"segment.io"},y=r.SENTRY_BACKGROUND_STATE={AccountsController:{internalAccounts:{accounts:!1,selectedAccount:!1}},AccountTracker:{accounts:!1,accountsByChainId:!1,currentBlockGasLimit:!0,currentBlockGasLimitByChainId:!0},AddressBookController:{addressBook:!1},AlertController:{alertEnabledness:!0,unconnectedAccountAlertShownOrigins:!1,web3ShimUsageOrigins:!1},AnnouncementController:{announcements:!1},NetworkOrderController:{orderedNetworkList:[]},AccountOrderController:{pinnedAccountList:[],hiddenAccountList:[]},AppMetadataController:{currentAppVersion:!0,currentMigrationVersion:!0,previousAppVersion:!0,previousMigrationVersion:!0},ApprovalController:{approvalFlows:!1,pendingApprovals:!1,pendingApprovalCount:!1},AppStateController:{browserEnvironment:!0,connectedStatusPopoverHasBeenShown:!0,currentPopupId:!1,defaultHomeActiveTabName:!0,fullScreenGasPollTokens:!0,hadAdvancedGasFeesSetPriorToMigration92_3:!0,nftsDetectionNoticeDismissed:!0,nftsDropdownState:!0,notificationGasPollTokens:!0,outdatedBrowserWarningLastShown:!0,popupGasPollTokens:!0,qrHardware:!0,recoveryPhraseReminderHasBeenShown:!0,recoveryPhraseReminderLastShown:!0,showBetaHeader:!0,showProductTour:!0,showNetworkBanner:!0,showAccountBanner:!0,showTestnetMessageInDropdown:!0,surveyLinkLastClickedOrClosed:!0,snapsInstallPrivacyWarningShown:!0,termsOfUseLastAgreed:!0,timeoutMinutes:!0,trezorModel:!0,usedNetworks:!0},CronjobController:{jobs:!1},CurrencyController:{currentCurrency:!0,currencyRates:!0},DecryptMessageController:{unapprovedDecryptMsgs:!1,unapprovedDecryptMsgCount:!0},EncryptionPublicKeyController:{unapprovedEncryptionPublicKeyMsgs:!1,unapprovedEncryptionPublicKeyMsgCount:!0},EnsController:{ensResolutionsByAddress:!1},GasFeeController:{estimatedGasFeeTimeBounds:!0,gasEstimateType:!0,gasFeeEstimates:!0,gasFeeEstimatesByChainId:!0},KeyringController:{isUnlocked:!0,keyrings:!1},LoggingController:{logs:!1},MetaMetricsController:{eventsBeforeMetricsOptIn:!1,fragments:!1,metaMetricsId:!0,participateInMetaMetrics:!0,previousUserTraits:!1,segmentApiCalls:!1,traits:!1},NetworkController:{networkConfigurations:!1,networksMetadata:!0,providerConfig:{chainId:!0,id:!0,nickname:!0,rpcPrefs:!1,rpcUrl:!1,ticker:!0,type:!0},selectedNetworkClientId:!1},NftController:{allNftContracts:!1,allNfts:!1,ignoredNfts:!1},NotificationController:{notifications:!1},OnboardingController:{completedOnboarding:!0,firstTimeFlowType:!0,onboardingTabs:!1,seedPhraseBackedUp:!0},PPOMController:{chainStatus:!0,securityAlertsEnabled:!1,storageMetadata:[],versionFileETag:!1,versionInfo:[]},PermissionController:{subjects:!1},PermissionLogController:{permissionActivityLog:!1,permissionHistory:!1},PhishingController:{},PreferencesController:{advancedGasFee:!0,currentLocale:!0,disabledRpcMethodPreferences:!0,dismissSeedBackUpReminder:!0,featureFlags:!0,forgottenPassword:!0,identities:!1,incomingTransactionsPreferences:!0,ipfsGateway:!1,isLineaMainnetReleased:!0,knownMethodData:!1,ledgerTransportType:!0,lostIdentities:!1,openSeaEnabled:!0,preferences:{autoLockTimeLimit:!0,hideZeroBalanceTokens:!0,showExtensionInFullSizeView:!0,showFiatInTestnets:!0,showTestNetworks:!0,useNativeCurrencyAsPrimaryCurrency:!0},selectedAddress:!1,snapRegistryList:!1,theme:!0,signatureSecurityAlertResponses:!1,transactionSecurityCheckEnabled:!0,use4ByteResolution:!0,useAddressBarEnsResolution:!0,useBlockie:!0,useCurrencyRateCheck:!0,useMultiAccountBalanceChecker:!0,useNftDetection:!0,useNonceField:!0,usePhishDetect:!0,useTokenDetection:!0,useRequestQueue:!0},SelectedNetworkController:{domains:!0,perDomainNetwork:!1},SignatureController:{unapprovedMsgCount:!0,unapprovedMsgs:!1,unapprovedPersonalMsgCount:!0,unapprovedPersonalMsgs:!1,unapprovedTypedMessages:!1,unapprovedTypedMessagesCount:!0},SmartTransactionsController:{smartTransactionsState:{fees:{approvalTxFees:!0,tradeTxFees:!0},liveness:!0,smartTransactions:!1,userOptIn:!0,userOptInV2:!0}},SnapController:{unencryptedSnapStates:!1,snapStates:!1,snaps:!1},SnapsRegistry:{database:!1,lastUpdated:!1},SubjectMetadataController:{subjectMetadata:!1},SwapsController:{swapsState:{approveTxId:!1,customApproveTxData:!1,customGasPrice:!0,customMaxFeePerGas:!0,customMaxGas:!0,customMaxPriorityFeePerGas:!0,errorKey:!0,fetchParams:!0,quotes:!1,quotesLastFetched:!0,quotesPollingLimitEnabled:!0,routeState:!0,saveFetchedQuotes:!0,selectedAggId:!0,swapsFeatureFlags:!0,swapsFeatureIsLive:!0,swapsQuotePrefetchingRefreshTime:!0,swapsQuoteRefreshTime:!0,swapsStxBatchStatusRefreshTime:!0,swapsStxGetTransactionsRefreshTime:!0,swapsStxMaxFeeMultiplier:!0,swapsUserFeeLevel:!0,tokens:!1,topAggId:!1,tradeTxId:!1}},TokenListController:{preventPollingOnNetworkRestart:!0,tokenList:!1,tokensChainsCache:{[o.AllProperties]:!1}},TokenRatesController:{contractExchangeRates:!1,contractExchangeRatesByChainId:!1},TokensController:{allDetectedTokens:{[o.AllProperties]:!1},allIgnoredTokens:{[o.AllProperties]:!1},allTokens:{[o.AllProperties]:!1},detectedTokens:!1,ignoredTokens:!1,tokens:!1},TransactionController:{transactions:!1,lastFetchedBlockNumbers:!1,methodData:!1},TxController:{transactions:!1},UserOperationController:{userOperations:!1}},h=Object.values(y).reduce(((e,t)=>({...e,...t})),{});r.SENTRY_UI_STATE={gas:!0,history:!0,metamask:{...h,isInitialized:!0,customNonceValue:!0,isAccountMenuOpen:!0,isNetworkMenuOpen:!0,nextNonce:!0,pendingTokens:!1,welcomeScreenSeen:!0,confirmationExchangeRates:!0,useSafeChainsListValidation:!0,addSnapAccountEnabled:!1,snapsAddSnapAccountModalDismissed:!1},unconnectedAccount:!0};function b(e){return e.persistedState?v(e.persistedState):!!e.state&&(e.state.metamask?Boolean(e.state.metamask.participateInMetaMetrics):Boolean(null===(t=e.state.MetaMetricsController)||void 0===t?void 0:t.participateInMetaMetrics));var t}function v(e){var t;return Boolean(null==e||null===(t=e.data)||void 0===t||null===(t=t.MetaMetricsController)||void 0===t?void 0:t.participateInMetaMetrics)}function k(e){return e.match(/^(chrome-extension|moz-extension):\/\//u)?e:""}function T(e){return t=>{if(!e)return null;const r=e();if(!b(r)||!function(e){var t,r;return e.persistedState?Boolean(null===(t=e.persistedState.data)||void 0===t||null===(t=t.OnboardingController)||void 0===t?void 0:t.completedOnboarding):!!e.state&&(e.state.metamask?Boolean(e.state.metamask.completedOnboarding):Boolean(null===(r=e.state.OnboardingController)||void 0===r?void 0:r.completedOnboarding))}(r)||"ui.input"===(null==t?void 0:t.category))return null;return w(t)}}function w(e){var t,r,n;return null!=e&&null!==(t=e.data)&&void 0!==t&&t.url&&(e.data.url=k(e.data.url)),null!=e&&null!==(r=e.data)&&void 0!==r&&r.to&&(e.data.to=k(e.data.to)),null!=e&&null!==(n=e.data)&&void 0!==n&&n.from&&(e.data.from=k(e.data.from)),e}function P(e,t){try{if(function(e){E(e,(e=>{let t=(0,l.default)(e);return 0===t.indexOf("Transaction Failed: known transaction")&&(t="Transaction Failed: known transaction"),t}))}(e),function(e){E(e,(e=>{let t=e;const r=/(([-.+a-zA-Z]+:\/\/)|(www\.))\S+[@:.]\S+/gu;return(t.match(r)||[]).forEach((e=>{try{const r=new URL(e),{hostname:n}=r;Object.values(g).some((e=>n===e||n.endsWith(`.${e}`)))||(t=t.replace(e,"**"))}catch(r){t=t.replace(e,"**")}})),t}))}(e),function(e){E(e,(e=>e.replace(/0x[A-Fa-f0-9]{40}/u,"0x**")))}(e),function(e){var t;null!==(t=e.request)&&void 0!==t&&t.url&&(e.request.url=S(e.request.url));e.exception&&e.exception.values&&e.exception.values.forEach((e=>{e.stacktrace&&e.stacktrace.frames.forEach((e=>{e.filename=S(e.filename)}))}))}(e),t){const r=t();e.extra||(e.extra={}),e.extra.appState=r}}catch(e){console.warn(e)}return e}function E(e,t){"string"==typeof e.message&&(e.message=t(e.message)),e.exception&&e.exception.values&&e.exception.values.forEach((e=>{"string"==typeof e.value&&(e.value=t(e.value))}))}function S(e){var t;if(null===(t=globalThis.location)||void 0===t||!t.origin)return e;const r=null==e?void 0:e.split(globalThis.location.origin)[1];if(!r)return e;return`/metamask${r}`}}}},{package:"$root$",file:"app/scripts/lib/setupSentry.js"}],[87,{"../../../shared/constants/app":4067,"obj-multiplex":3530,pump:3611},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,r){Object.defineProperty(r,"__esModule",{value:!0}),r.setupMultiplex=function(e){const t=new n.default;return t.ignoreStream(a.EXTENSION_MESSAGES.CONNECTION_READY),(0,s.default)(e,t,e,(e=>{e&&console.error(e)})),t};var n=o(e("obj-multiplex")),s=o(e("pump")),a=e("../../../shared/constants/app");function o(e){return e&&e.__esModule?e:{default:e}}}}},{package:"$root$",file:"app/scripts/lib/stream-utils.js"}],[90,{"../../../shared/constants/app":4067,"../../../shared/constants/network":4078,"../../../shared/modules/hexstring-utils":4110,"@metamask/transaction-controller":1753,"bn.js":2411,lodash:3444,url:3990},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,r){Object.defineProperty(r,"__esModule",{value:!0}),r.BnMultiplyByFraction=function(e,t,r){const n=new s.default(t),a=new s.default(r);return e.mul(n).div(a)},r.addHexPrefix=void 0,r.addUrlProtocolPrefix=function(e){let t=e.trim();t.length&&!n.default.parse(t).protocol&&(t=`https://${t}`);if(null!==f(t))return t;return null},r.checkAlarmExists=function(e,t){return e.some((e=>e.name===t))},r.deferredPromise=function(){let e,t;return{promise:new Promise(((r,n)=>{e=r,t=n})),resolve:e,reject:t}},r.formatTxMetaForRpcResult=function(e){const{r:t,s:r,v:n,hash:s,txReceipt:a,txParams:i}=e,{to:l,data:c,nonce:u,gas:d,from:p,value:f,gasPrice:m,accessList:g,maxFeePerGas:y,maxPriorityFeePerGas:h}=i,b={v:n,r:t,s:r,to:l,gas:d,from:p,hash:s,nonce:`${u}`,input:c||"0x",value:f||"0x0",accessList:g||null,blockHash:(null==a?void 0:a.blockHash)||null,blockNumber:(null==a?void 0:a.blockNumber)||null,transactionIndex:(null==a?void 0:a.transactionIndex)||null,type:y&&h?o.TransactionEnvelopeType.feeMarket:o.TransactionEnvelopeType.legacy};y&&h?(b.gasPrice=y,b.maxFeePerGas=y,b.maxPriorityFeePerGas=h):b.gasPrice=m;return b},r.generateRandomId=void 0,r.getChainType=function(e){if(e===l.CHAIN_IDS.MAINNET)return"mainnet";if(l.TEST_CHAINS.includes(e))return"testnet";return"custom"},r.getPlatform=r.getEnvironmentType=void 0,r.getValidUrl=f,r.hexToBn=function(e){return new s.default((0,c.stripHexPrefix)(e),16)},r.isValidDate=void 0,r.isWebUrl=function(e){const t=f(e);return null!==t&&("https:"===t.protocol||"http:"===t.protocol)},r.previousValueComparator=function(e,t){let r,n=!0;return s=>{try{return n?(n=!1,e(t??s,s)):e(r,s)}finally{r=s}}};var n=u(e("url")),s=u(e("bn.js")),a=e("lodash"),o=e("@metamask/transaction-controller"),i=e("../../../shared/constants/app"),l=e("../../../shared/constants/network"),c=e("../../../shared/modules/hexstring-utils");function u(e){return e&&e.__esModule?e:{default:e}}const d=(0,a.memoize)((e=>{const t=new URL(e);return"/popup.html"===t.pathname?i.ENVIRONMENT_TYPE_POPUP:["/home.html"].includes(t.pathname)?i.ENVIRONMENT_TYPE_FULLSCREEN:"/notification.html"===t.pathname?i.ENVIRONMENT_TYPE_NOTIFICATION:i.ENVIRONMENT_TYPE_BACKGROUND}));r.getEnvironmentType=(e=window.location.href)=>d(e);r.getPlatform=()=>{const{navigator:e}=window,{userAgent:t}=e;return t.includes("Firefox")?i.PLATFORM_FIREFOX:"brave"in e?i.PLATFORM_BRAVE:t.includes("Edg/")?i.PLATFORM_EDGE:t.includes("OPR")?i.PLATFORM_OPERA:i.PLATFORM_CHROME};r.addHexPrefix=e=>"string"!=typeof e||e.match(/^-?0x/u)?e:e.match(/^-?0X/u)?e.replace("0X","0x"):e.startsWith("-")?e.replace("-","-0x"):`0x${e}`;const p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";r.generateRandomId=()=>{let e="";for(let t=0;t<20;t++)e+=p.charAt(Math.floor(62*Math.random()));return e};function f(e){try{const t=new URL(e);return 0===t.hostname.length||0===t.pathname.length||t.hostname!==decodeURIComponent(t.hostname)?null:t}catch(e){return null}}r.isValidDate=e=>e instanceof Date}}},{package:"$root$",file:"app/scripts/lib/util.ts"}],[988,{"./errors":989,"./packer":992,"@metamask/utils":1798},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,r){Object.defineProperty(r,"__esModule",{value:!0}),r.decodeSingle=r.decode=r.encodePacked=r.encodeSingle=r.encode=void 0;const n=e("@metamask/utils"),s=e("./errors"),a=e("./packer");r.encode=(e,t,r,n)=>{try{return(0,a.pack)({types:e,values:t,packed:r,tight:n})}catch(e){if(e instanceof s.ParserError)throw new s.ParserError(`Unable to encode value: ${e.message}`,e);throw new s.ParserError(`An unexpected error occurred: ${(0,s.getErrorMessage)(e)}`,e)}};r.encodeSingle=(e,t)=>(0,r.encode)([e],[t]);r.encodePacked=(e,t,n)=>(0,r.encode)(e,t,!0,n);r.decode=(e,t)=>{const r=(0,n.createBytes)(t);try{return(0,a.unpack)(e,r)}catch(e){if(e instanceof s.ParserError)throw new s.ParserError(`Unable to decode value: ${e.message}`,e);throw new s.ParserError(`An unexpected error occurred: ${(0,s.getErrorMessage)(e)}`,e)}};r.decodeSingle=(e,t)=>{const a=(0,r.decode)([e],t);return(0,n.assert)(1===a.length,new s.ParserError("Decoded value array has unexpected length.")),a[0]}}}},{package:"@metamask/assets-controllers>@metamask/abi-utils",file:"node_modules/@metamask/abi-utils/dist/abi.js"}],[989,{"@metamask/utils":1798},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,r){Object.defineProperty(r,"__esModule",{value:!0}),r.ParserError=r.getErrorStack=r.getErrorMessage=void 0;const n=e("@metamask/utils");r.getErrorMessage=e=>"string"==typeof e?e:e instanceof Error||(0,n.isObject)(e)&&(0,n.hasProperty)(e,"message")&&"string"==typeof e.message?e.message:"Unknown error.";r.getErrorStack=e=>e instanceof Error?e.stack:undefined;class s extends Error{constructor(e,t){super(e),this.name="ParserError";const n=(0,r.getErrorStack)(t);n&&(this.stack=n)}}r.ParserError=s}}},{package:"@metamask/assets-controllers>@metamask/abi-utils",file:"node_modules/@metamask/abi-utils/dist/errors.js"}],[990,{"./abi":988,"./errors":989,"./types":1005},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){n===undefined&&(n=r);var s=Object.getOwnPropertyDescriptor(t,r);s&&!("get"in s?!t.__esModule:s.writable||s.configurable)||(s={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,s)}:function(e,t,r,n){n===undefined&&(n=r),e[n]=t[r]}),s=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(r,"__esModule",{value:!0}),s(e("./abi"),r),s(e("./errors"),r),s(e("./types"),r)}}},{package:"@metamask/assets-controllers>@metamask/abi-utils",file:"node_modules/@metamask/abi-utils/dist/index.js"}],[991,{"@metamask/utils":1798},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,r){Object.defineProperty(r,"__esModule",{value:!0}),r.iterate=void 0;const n=e("@metamask/utils");r.iterate=function*(e,t=32){for(let r=0;r<e.length;r+=t){const s=e=>{(0,n.assert)(e>=0,"Cannot skip a negative number of bytes."),(0,n.assert)(e%t==0,"Length must be a multiple of the size."),r+=e},a=e.subarray(r);yield{skip:s,value:a}}return{skip:()=>undefined,value:new Uint8Array}}}}},{package:"@metamask/assets-controllers>@metamask/abi-utils",file:"node_modules/@metamask/abi-utils/dist/iterator.js"}],[992,{"./errors":989,"./iterator":991,"./parsers":999,"./utils":1007,"@metamask/utils":1798},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,r){Object.defineProperty(r,"__esModule",{value:!0}),r.unpack=r.pack=r.isDynamicParser=r.getParser=void 0;const n=e("@metamask/utils"),s=e("./errors"),a=e("./iterator"),o=e("./parsers"),i=e("./utils");r.getParser=e=>{const t={address:o.address,array:o.array,bool:o.bool,bytes:o.bytes,fixedBytes:o.fixedBytes,function:o.fn,number:o.number,string:o.string,tuple:o.tuple},r=t[e];if(r)return r;const n=Object.values(t).find((t=>t.isType(e)));if(n)return n;throw new s.ParserError(`The type "${e}" is not supported.`)};r.isDynamicParser=(e,t)=>{const{isDynamic:r}=e;return"function"==typeof r?r(t):r};r.pack=({types:e,values:t,packed:a=!1,tight:o=!1,arrayPacked:l=!1,byteArray:c=new Uint8Array})=>{(0,n.assert)(e.length===t.length,new s.ParserError(`The number of types (${e.length}) does not match the number of values (${t.length}).`));const{staticBuffer:u,dynamicBuffer:d,pointers:p}=e.reduce((({staticBuffer:e,dynamicBuffer:s,pointers:i},c,u)=>{const d=(0,r.getParser)(c),p=t[u];if(a||l||!(0,r.isDynamicParser)(d,c))return{staticBuffer:d.encode({buffer:e,value:p,type:c,packed:a,tight:o}),dynamicBuffer:s,pointers:i};return{staticBuffer:(0,n.concatBytes)([e,new Uint8Array(32)]),dynamicBuffer:d.encode({buffer:s,value:p,type:c,packed:a,tight:o}),pointers:[...i,{position:e.length,pointer:s.length}]}}),{staticBuffer:new Uint8Array,dynamicBuffer:new Uint8Array,pointers:[]});(0,n.assert)(!a&&!l||0===d.length,new s.ParserError("Invalid pack state."));const f=u.length,m=p.reduce(((e,{pointer:t,position:r})=>{const s=(0,i.padStart)((0,n.numberToBytes)(f+t));return(0,i.set)(e,s,r)}),u);return(0,n.concatBytes)([c,m,d])};r.unpack=(e,t)=>{const o=(0,a.iterate)(t);return e.map((e=>{const{value:{value:a,skip:i},done:l}=o.next();(0,n.assert)(!l,new s.ParserError(`The encoded value is invalid for the provided types. Reached end of buffer while attempting to parse "${e}".`));const c=(0,r.getParser)(e);if((0,r.isDynamicParser)(c,e)){const r=(0,n.bytesToNumber)(a.subarray(0,32)),s=t.subarray(r);return c.decode({type:e,value:s,skip:i})}return c.decode({type:e,value:a,skip:i})}))}}}},{package:"@metamask/assets-controllers>@metamask/abi-utils",file:"node_modules/@metamask/abi-utils/dist/packer.js"}],[993,{"../errors":989,"../utils":1007,"@metamask/utils":1798},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,r){Object.defineProperty(r,"__esModule",{value:!0}),r.address=r.getAddress=void 0;const n=e("@metamask/utils"),s=e("../errors"),a=e("../utils");r.getAddress=e=>{const t=(0,n.createBytes)(e);return(0,n.assert)(t.length<=20,new s.ParserError(`Invalid address value. Expected address to be 20 bytes long, but received ${t.length} bytes.`)),(0,a.padStart)(t,20)},r.address={isDynamic:!1,isType:e=>"address"===e,getByteLength:()=>32,encode({buffer:e,value:t,packed:s}){const o=(0,r.getAddress)(t);if(s)return(0,n.concatBytes)([e,o]);const i=(0,a.padStart)(o);return(0,n.concatBytes)([e,i])},decode:({value:e})=>(0,n.add0x)((0,n.bytesToHex)(e.slice(12,32)))}}}},{package:"@metamask/assets-controllers>@metamask/abi-utils",file:"node_modules/@metamask/abi-utils/dist/parsers/address.js"}],[994,{"../errors":989,"../packer":992,"../utils":1007,"./fixed-bytes":997,"./tuple":1003,"@metamask/utils":1798},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,r){Object.defineProperty(r,"__esModule",{value:!0}),r.array=r.getTupleType=r.getArrayType=r.isArrayType=void 0;const n=e("@metamask/utils"),s=e("../errors"),a=e("../packer"),o=e("../utils"),i=e("./fixed-bytes"),l=e("./tuple"),c=/^(?<type>.*)\[(?<length>\d*?)\]$/u;r.isArrayType=e=>c.test(e);r.getArrayType=e=>{const t=e.match(c);return(0,n.assert)(t?.groups?.type,new s.ParserError(`Invalid array type. Expected an array type, but received "${e}".`)),[t.groups.type,t.groups.length?parseInt(t.groups.length,10):undefined]};r.getTupleType=(e,t)=>`(${new Array(t).fill(e).join(",")})`,r.array={isDynamic(e){const[t,n]=(0,r.getArrayType)(e);return n===undefined||(0,a.isDynamicParser)((0,a.getParser)(t),t)},isType:e=>(0,r.isArrayType)(e),getByteLength(e){(0,n.assert)((0,r.isArrayType)(e),new s.ParserError(`Expected an array type, but received "${e}".`));const[t,o]=(0,r.getArrayType)(e);return(0,a.isDynamicParser)(this,e)||o===undefined?32:l.tuple.getByteLength((0,r.getTupleType)(t,o))},encode({type:e,buffer:t,value:c,packed:u,tight:d}){const[p,f]=(0,r.getArrayType)(e);if((0,n.assert)(!u||!(0,r.isArrayType)(p),new s.ParserError("Cannot pack nested arrays.")),u&&(0,a.isDynamicParser)((0,a.getParser)(p),p))return(0,a.pack)({types:new Array(c.length).fill(p),values:c,byteArray:t,packed:u,arrayPacked:!0,tight:d});if(f)return(0,n.assert)(f===c.length,new s.ParserError(`Array length does not match type length. Expected a length of ${f}, but received ${c.length}.`)),l.tuple.encode({type:(0,r.getTupleType)(p,f),buffer:t,value:c,packed:i.fixedBytes.isType(p)&&d,tight:d});if(u)return(0,a.pack)({types:new Array(c.length).fill(p),values:c,byteArray:t,packed:i.fixedBytes.isType(p)&&d,arrayPacked:!0,tight:d});const m=(0,o.padStart)((0,n.numberToBytes)(c.length));return(0,a.pack)({types:new Array(c.length).fill(p),values:c,byteArray:(0,n.concatBytes)([t,m]),packed:u,tight:d})},decode({type:e,value:t,...o}){const[i,c]=(0,r.getArrayType)(e);if(c){const e=l.tuple.decode({type:(0,r.getTupleType)(i,c),value:t,...o});return(0,n.assert)(e.length===c,new s.ParserError(`Array length does not match type length. Expected a length of ${c}, but received ${e.length}.`)),e}const u=(0,n.bytesToNumber)(t.subarray(0,32));return(0,a.unpack)(new Array(u).fill(i),t.subarray(32))}}}}},{package:"@metamask/assets-controllers>@metamask/abi-utils",file:"node_modules/@metamask/abi-utils/dist/parsers/array.js"}],[995,{"../errors":989,"./number":1e3,"@metamask/utils":1798,superstruct:3956},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,r){Object.defineProperty(r,"__esModule",{value:!0}),r.bool=r.getBooleanValue=void 0;const n=e("@metamask/utils"),s=e("superstruct"),a=e("../errors"),o=e("./number"),i=(0,s.coerce)((0,s.boolean)(),(0,s.union)([(0,s.literal)("true"),(0,s.literal)("false")]),(e=>"true"===e));r.getBooleanValue=e=>{try{return(0,s.create)(e,i)?BigInt(1):BigInt(0)}catch{throw new a.ParserError(`Invalid boolean value. Expected a boolean literal, or the string "true" or "false", but received "${e}".`)}},r.bool={isDynamic:!1,isType:e=>"bool"===e,getByteLength:()=>32,encode({buffer:e,value:t,packed:s,tight:a}){const i=(0,r.getBooleanValue)(t);return s?(0,n.concatBytes)([e,(0,n.bigIntToBytes)(i)]):o.number.encode({type:"uint256",buffer:e,value:i,packed:s,tight:a})},decode:e=>o.number.decode({...e,type:"uint256"})===BigInt(1)}}}},{package:"@metamask/assets-controllers>@metamask/abi-utils",file:"node_modules/@metamask/abi-utils/dist/parsers/bool.js"}],[996,{"../utils":1007,"@metamask/utils":1798},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,r){Object.defineProperty(r,"__esModule",{value:!0}),r.bytes=void 0;const n=e("@metamask/utils"),s=e("../utils");r.bytes={isDynamic:!0,isType:e=>"bytes"===e,getByteLength:()=>32,encode({buffer:e,value:t,packed:r}){const a=(0,n.createBytes)(t);if(r)return(0,n.concatBytes)([e,a]);const o=32*Math.ceil(a.byteLength/32);return(0,n.concatBytes)([e,(0,s.padStart)((0,n.numberToBytes)(a.byteLength)),(0,s.padEnd)(a,o)])},decode({value:e}){const t=e.subarray(0,32),r=(0,n.bytesToNumber)(t);return e.slice(32,32+r)}}}}},{package:"@metamask/assets-controllers>@metamask/abi-utils",file:"node_modules/@metamask/abi-utils/dist/parsers/bytes.js"}],[997,{"../errors":989,"../utils":1007,"@metamask/utils":1798},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,r){Object.defineProperty(r,"__esModule",{value:!0}),r.fixedBytes=r.getByteLength=void 0;const n=e("@metamask/utils"),s=e("../errors"),a=e("../utils"),o=/^bytes([0-9]{1,2})$/u;r.getByteLength=e=>{const t=e.match(o)?.[1];(0,n.assert)(t,`Invalid byte length. Expected a number between 1 and 32, but received "${e}".`);const r=Number(t);return(0,n.assert)(r>0&&r<=32,new s.ParserError(`Invalid byte length. Expected a number between 1 and 32, but received "${e}".`)),r},r.fixedBytes={isDynamic:!1,isType:e=>o.test(e),getByteLength:()=>32,encode({type:e,buffer:t,value:o,packed:i}){const l=(0,r.getByteLength)(e),c=(0,n.createBytes)(o);return(0,n.assert)(c.length<=l,new s.ParserError(`Expected a value of length ${l}, but received a value of length ${c.length}.`)),i?(0,n.concatBytes)([t,(0,a.padEnd)(c,l)]):(0,n.concatBytes)([t,(0,a.padEnd)(c)])},decode({type:e,value:t}){const n=(0,r.getByteLength)(e);return t.slice(0,n)}}}}},{package:"@metamask/assets-controllers>@metamask/abi-utils",file:"node_modules/@metamask/abi-utils/dist/parsers/fixed-bytes.js"}],[998,{"../errors":989,"./fixed-bytes":997,"@metamask/utils":1798,superstruct:3956},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,r){Object.defineProperty(r,"__esModule",{value:!0}),r.fn=r.getFunction=void 0;const n=e("@metamask/utils"),s=e("superstruct"),a=e("../errors"),o=e("./fixed-bytes"),i=(0,s.coerce)((0,s.object)({address:n.StrictHexStruct,selector:n.StrictHexStruct}),(0,s.union)([n.StrictHexStruct,(0,s.instance)(Uint8Array)]),(e=>{const t=(0,n.createBytes)(e);return(0,n.assert)(24===t.length,new a.ParserError(`Invalid Solidity function. Expected function to be 24 bytes long, but received ${t.length} bytes.`)),{address:(0,n.bytesToHex)(t.subarray(0,20)),selector:(0,n.bytesToHex)(t.subarray(20,24))}}));r.getFunction=e=>{const t=(0,s.create)(e,i);return(0,n.concatBytes)([(0,n.hexToBytes)(t.address),(0,n.hexToBytes)(t.selector)])},r.fn={isDynamic:!1,isType:e=>"function"===e,getByteLength:()=>32,encode({buffer:e,value:t,packed:n,tight:s}){const a=(0,r.getFunction)(t);return o.fixedBytes.encode({type:"bytes24",buffer:e,value:a,packed:n,tight:s})},decode:({value:e})=>({address:(0,n.bytesToHex)(e.slice(0,20)),selector:(0,n.bytesToHex)(e.slice(20,24))})}}}},{package:"@metamask/assets-controllers>@metamask/abi-utils",file:"node_modules/@metamask/abi-utils/dist/parsers/function.js"}],[999,{"./address":993,"./array":994,"./bool":995,"./bytes":996,"./fixed-bytes":997,"./function":998,"./number":1e3,"./parser":1001,"./string":1002,"./tuple":1003},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){n===undefined&&(n=r);var s=Object.getOwnPropertyDescriptor(t,r);s&&!("get"in s?!t.__esModule:s.writable||s.configurable)||(s={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,s)}:function(e,t,r,n){n===undefined&&(n=r),e[n]=t[r]}),s=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(r,"__esModule",{value:!0}),s(e("./address"),r),s(e("./array"),r),s(e("./bool"),r),s(e("./bytes"),r),s(e("./fixed-bytes"),r),s(e("./function"),r),s(e("./number"),r),s(e("./parser"),r),s(e("./string"),r),s(e("./tuple"),r)}}},{package:"@metamask/assets-controllers>@metamask/abi-utils",file:"node_modules/@metamask/abi-utils/dist/parsers/index.js"}]],[],{});