/*
    MIT License

    Copyright (c) 2025 KoffeeJava

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
*/
(function (Scratch) {
    'use strict';

    if (!Scratch.extensions.unsandboxed) {
        alert('This Extension must run unsandboxed');
    }

    // Listing icons
    const vm = Scratch.vm;
    class WebCat {
        getInfo() {
            return {
                id: 'KoffeeJavaWebCat',
                name: 'WebCat',
                color1: '#dfa06cff',
                color2: '#543118',
                blocks: [
                    {
                        opcode: 'NOTIFYALLOW',
                        blockType: Scratch.BlockType.BOOLEAN,
                        text: 'Is notifications allowed?',
                        disableMonitor: true
                    },
                    {
                        opcode: 'REQUEST',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'Request Permisission',
                        disableMonitor: true
                    },
                    {
                        opcode: 'NOTIFY',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'Notify; Icon [ICO] Title [TITLE] Message [MESS]',
                        disableMonitor: true,
                        arguments: {
                            ICO: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'https://penguinmod.com/favicon.ico'
                            },
                            TITLE: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'Webcat'
                            },
                            MESS: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'Hello, World!'
                            }

                        }
                    },
                    {
                        opcode: 'POPUP',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'Open Pop Up [LINK] Width [WID] Height [HIE]',
                        arguments: {
                            LINK: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'https://example.com/'
                            },
                            WID: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 900
                            },
                            HIE: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 900
                            }
                        }
                    },
                    {
                        opcode: 'NEXT',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'Go Forward',
                        disableMonitor: true
                    },
                    {
                        opcode: 'BACK',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'Go Back',
                        disableMonitor: true
                    },
                    {
                        opcode: 'ISON',
                        blockType: Scratch.BlockType.BOOLEAN,
                        text: "Is User Online?",
                        disableMonitor: true,
                    },
                    {
                        opcode: 'TABINFO',
                        blockType: Scratch.BlockType.LABEL,
                        text: 'Tab Info',
                    },
                    {
                        opcode: 'CTT',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'Change title to [TEXT]',
                        arguments: {
                            TEXT: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'Webcat!'
                            }
                        }
                    },
                    {
                        opcode: 'FAVI',
                        blockType: Scratch.BlockType.COMMAND,
                        text: "Set favicon to [FAVI]",
                        disableMonitor: true,
                        arguments: {
                            FAVI: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'https://penguinmod.com/favicon.ico'
                            }
                        }
                    },
                    {
                        opcode: 'CURTITLE',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'Current Title',
                    },
                    {
                        opcode: 'WHATOS',
                        blockType: Scratch.BlockType.REPORTER,
                        text: "User's OS",
                    },
                    {
                        opcode: 'WHATWEB',
                        blockType: Scratch.BlockType.REPORTER,
                        text: "User's Web Browser",
                    },
                    {
                        opcode: 'LANG',
                        blockType: Scratch.BlockType.REPORTER,
                        text: "Browser's Language"
                    }
                ],
            };
        }
        NOTIFYALLOW() {
            if (Notification.permission === "denied") {
                return false;
            }
            if (Notification.permission === "granted") {
                return true;
            }
            if (Notification.permission === "default") {
                return false;
            }
        }
        REQUEST() {
            Notification.requestPermission().then(function (permission) { });
        }
        NOTIFY(args) {
            let title = args.TITLE
            let icon = args.ICO
            let body = args.MESS
            var notification = new Notification(title, { body, icon });
        }
        POPUP(args) {
            Scratch.openWindow(args.LINK, `width=${args.WID},height=${args.HIE}`);
        }
        JS(args) {
            var conf = confirm(`This site wants to execute javascript code.\n This can allow dangrous code to run on your browser.\n code: ${args.TEXT}\n Allow?`)
            if (conf == true){
                eval(args.TEXT);
            }
        }
        NEXT() {
            history.forward();
        }
        BACK() {
            history.back()
        }
        CTT(args) {
            document.title = args.TEXT
        }
        FAVI(args) {
            var link = document.querySelector("link[rel~='icon']");
            if (!link) {
                link = document.createElement('link');
                link.rel = 'icon';
                document.head.appendChild(link);
            }
            link.href = args.FAVI;

        }
        CURTITLE() {
            return document.title;
        }
        WHATOS() {
            return window.navigator.platform
        }
        WHATWEB() {
            return (/firefox|chrome|safari|opera|edg|msie|trident/i.exec(navigator.userAgent) || ["unknown"])[0].toLowerCase();
        }
        ISON() {
            return navigator.onLine
        }
        LANG() {
            return navigator.language;
        }
        LOGTX(args) {
            if (args.LOGTX === 'Log') {
                console.log(args.TEXT)
            }
            if (args.LOGTX === 'Warn') {
                console.warn(args.TEXT)
            }
            if (args.LOGTX === 'Error') {
                console.error(args.TEXT)
            }
        }
        ENCODEURI(args) {
            var encodedString = btoa(args.TEXT);
            var uri = "data:/application/octet-stream;base64," + encodedString
            return uri
        }
        ENCODEHEX(args) {
            let originalString = args.TEXT
            let hexString = '';
            for (let i = 0; i < originalString.length; i++) {
            hexString += originalString.charCodeAt(i).toString(16);
            }

            return hexString
        }
    }
    Scratch.extensions.register(new WebCat());
})(Scratch);
