/* Copyright 2017 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

var pdfjsVersion = '1.10.100';
var pdfjsBuild = 'ea29ec83';
var pdfjsSharedUtil = require('./shared/util.js');
var pdfjsDisplayGlobal = require('./display/global.js');
var pdfjsDisplayAPI = require('./display/api.js');
var pdfjsDisplayTextLayer = require('./display/text_layer.js');
var pdfjsDisplayAnnotationLayer = require('./display/annotation_layer.js');
var pdfjsDisplayDOMUtils = require('./display/dom_utils.js');
var pdfjsDisplaySVG = require('./display/svg.js');
{
  if (pdfjsSharedUtil.isNodeJS()) {
    var PDFNodeStream = require('./display/node_stream.js').PDFNodeStream;
    pdfjsDisplayAPI.setPDFNetworkStreamClass(PDFNodeStream);
  } else if (typeof Response !== 'undefined' && 'body' in Response.prototype && typeof ReadableStream !== 'undefined') {
    var PDFFetchStream = require('./display/fetch_stream.js').PDFFetchStream;
    pdfjsDisplayAPI.setPDFNetworkStreamClass(PDFFetchStream);
  } else {
    var PDFNetworkStream = require('./display/network.js').PDFNetworkStream;
    pdfjsDisplayAPI.setPDFNetworkStreamClass(PDFNetworkStream);
  }
}
exports.PDFJS = pdfjsDisplayGlobal.PDFJS;
exports.build = pdfjsDisplayAPI.build;
exports.version = pdfjsDisplayAPI.version;
exports.getDocument = pdfjsDisplayAPI.getDocument;
exports.LoopbackPort = pdfjsDisplayAPI.LoopbackPort;
exports.PDFDataRangeTransport = pdfjsDisplayAPI.PDFDataRangeTransport;
exports.PDFWorker = pdfjsDisplayAPI.PDFWorker;
exports.renderTextLayer = pdfjsDisplayTextLayer.renderTextLayer;
exports.AnnotationLayer = pdfjsDisplayAnnotationLayer.AnnotationLayer;
exports.CustomStyle = pdfjsDisplayDOMUtils.CustomStyle;
exports.createPromiseCapability = pdfjsSharedUtil.createPromiseCapability;
exports.PasswordResponses = pdfjsSharedUtil.PasswordResponses;
exports.InvalidPDFException = pdfjsSharedUtil.InvalidPDFException;
exports.MissingPDFException = pdfjsSharedUtil.MissingPDFException;
exports.SVGGraphics = pdfjsDisplaySVG.SVGGraphics;
exports.NativeImageDecoding = pdfjsSharedUtil.NativeImageDecoding;
exports.UnexpectedResponseException = pdfjsSharedUtil.UnexpectedResponseException;
exports.OPS = pdfjsSharedUtil.OPS;
exports.UNSUPPORTED_FEATURES = pdfjsSharedUtil.UNSUPPORTED_FEATURES;
exports.isValidUrl = pdfjsDisplayDOMUtils.isValidUrl;
exports.createValidAbsoluteUrl = pdfjsSharedUtil.createValidAbsoluteUrl;
exports.createObjectURL = pdfjsSharedUtil.createObjectURL;
exports.removeNullCharacters = pdfjsSharedUtil.removeNullCharacters;
exports.shadow = pdfjsSharedUtil.shadow;
exports.createBlob = pdfjsSharedUtil.createBlob;
exports.RenderingCancelledException = pdfjsDisplayDOMUtils.RenderingCancelledException;
exports.getFilenameFromUrl = pdfjsDisplayDOMUtils.getFilenameFromUrl;
exports.addLinkAttributes = pdfjsDisplayDOMUtils.addLinkAttributes;
exports.StatTimer = pdfjsSharedUtil.StatTimer;