/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // `load`, `deviceready`, `offline`, and `online`.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        // document.getElementById('scan').addEventListener('click', this.scan, false);
        document.getElementById('cart').addEventListener('click', this.openCart, false);
        document.getElementById('signature').addEventListener('click', this.openSignature, false);
    },

    // deviceready Event Handler
    //
    // The scope of `this` is the event. In order to call the `receivedEvent`
    // function, we must explicity call `app.receivedEvent(...);`
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },

    // scan: function() {
    //     console.log('scanning');
    //
    //     var scanner = cordova.require("cordova/plugin/BarcodeScanner");
    //
    //
    //     scanner.scan( function (result) {
    //
    //
    //         if(result.text == "kevin"){
    //           selected_product = null;
    //           document.getElementById('modal-btn').click();
    //         };
    //         document.getElementById("scan").setAttribute('class', 'md-button md-default-theme');
    //         document.getElementById("cart").setAttribute('class', 'selected md-button md-default-theme');
    //         document.getElementById("signature").setAttribute('class', 'md-button md-default-theme');
    //         document.getElementById("cart_content").setAttribute('style', 'display:block;');
    //         document.getElementById("signature_content").setAttribute('style', 'display:none;');
    //
    //         alert("We got a barcode\n" +
    //         "Result: " + result.text + "\n" +
    //         "Format: " + result.format + "\n" +
    //         "Cancelled: " + result.cancelled);
    //
    //        console.log("Scanner result: \n" +
    //             "text: " + result.text + "\n" +
    //             "format: " + result.format + "\n" +
    //             "cancelled: " + result.cancelled + "\n");
    //         document.getElementById("info").innerHTML = result.text;
    //         console.log(result);
    //         /*
    //         if (args.format == "QR_CODE") {
    //             window.plugins.childBrowser.showWebPage(args.text, { showLocationBar: false });
    //         }
    //         */
    //
    //     }, function (error) {
    //         console.log("Scanning failed: ", error);
    //     } );
    // },
    openSignature: function() {
      document.getElementById("cart").setAttribute('class', 'md-button md-default-theme');
      document.getElementById("signature").setAttribute('class', 'selected md-button md-default-theme');
      document.getElementById("final_content").setAttribute('style', 'display:none;');
      document.getElementById("cart_content").setAttribute('style', 'display:none;');
     document.getElementById("signature_content").setAttribute('style', 'display:block;');
   },
   openCart: function() {
     document.getElementById("cart").setAttribute('class', 'selected md-button md-default-theme');
     document.getElementById("signature").setAttribute('class', 'md-button md-default-theme');
     document.getElementById("cart_content").setAttribute('style', 'display:block;');
   document.getElementById("signature_content").setAttribute('style', 'display:none;');
   document.getElementById("final_content").setAttribute('style', 'display:none;');

 }

};
